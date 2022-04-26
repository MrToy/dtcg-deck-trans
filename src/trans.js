// const x3=require('./x3.json')
import x3 from "./x3.json";
export function trans(deckStr) {
  var deckArr = [];
  try {
    deckArr = JSON.parse(deckStr).slice(1);
  } catch {}
  const result = ["#created by toy", "#main"];
  deckArr.forEach((it) => {
    if (x3[it]?.ygoID && x3[it].type !== "数码蛋卡") {
      result.push(x3[it].ygoID);
    }
  });
  result.push("#extra");
  deckArr.forEach((it) => {
    if (x3[it]?.ygoID && x3[it].type == "数码蛋卡") {
      result.push(x3[it].ygoID);
    }
  });
  result.push("!side");
  const resultstr = result.join("\n");
  return resultstr;
}

export async function trans2(url) {
  if (!url) {
    throw new Error("请输入卡组链接");
  }
  const res = await fetch(url);
  var str = await res.text();
  str = str.match(/__NUXT__=(.*?)<\/script>/)?.[1];
  const data = eval(str);
  const deckInfo = data.data[0].deck_info;
  const result = ["#created by toy", "#main"];
  deckInfo.main.forEach((it) => {
    for (let i = 0; i < it.number; i++) {
      result.push(x3[it.card.serial]?.ygoID);
    }
  });
  result.push("#extra");
  deckInfo.eggs.forEach((it) => {
    for (let i = 0; i < it.number; i++) {
      result.push(x3[it.card.serial]?.ygoID);
    }
  });
  result.push("!side");
  return result.join("\n");
}

export async function transX(txt) {
  if (txt.match("Exported from")) {
    return await trans(txt);
  } else {
    return await trans2(txt);
  }
}
