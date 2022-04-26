import logo from "./logo.svg";
import "./App.css";
import { transX } from "./trans";
import { useState, useEffect } from "react";

const defaultDeckStr = `["Exported from http://digimon.card.moe","ST3-04","ST3-04","ST3-04","ST3-04","ST3-07","ST3-07","ST3-07","ST3-12","ST3-12","ST3-12","ST3-12","BT1-063","BT1-063","BT1-052","BT1-052","BT1-087","BT1-087","BT1-087","BT1-048","BT1-048","BT1-048","BT1-048","BT1-006","BT1-006","BT1-006","BT1-006","BT1-049","BT1-049","BT1-057","BT1-057","BT1-057","BT1-057","BT2-033","BT2-033","BT2-033","BT2-033","BT2-035","BT2-035","BT2-035","BT2-035","BT2-041","BT2-041","BT2-041","BT2-087","BT2-087","BT2-087","BT2-099","BT2-038","BT2-038","BT2-038","BT2-038","BT2-039","BT2-098","BT2-098"]
`;

const defaultUrl =
  "https://digimon.card.moe/deck/d3f00020ccaa5117511f332344ab17ce6c4c4900";

// console.log(trans(deckStr));

let idx = 0;

function App() {
  const [deckStr, setDeckStr] = useState(defaultUrl);
  const [ygoStr, setYGOStr] = useState("");
  useEffect(() => {
    setYGOStr("Loading...");
    idx++;
    let _idx = idx;
    transX(deckStr)
      .then((res) => {
        if (_idx < idx) {
          return;
        }
        setYGOStr(res);
      })
      .catch((e) => {
        if (_idx < idx) {
          return;
        }
        setYGOStr(e);
      });
  }, [deckStr]);
  return (
    <div>
      <div className="App">
        <div className="desc">
          <h1>DTCG卡组代码转YGO</h1>
          <h3>使用说明</h3>
          <p>
            1. 打开
            <a href="https://digimon.card.moe/deck" target="_blank">
              https://digimon.card.moe/deck
            </a>
            寻找你想要的卡组
          </p>
          <p>2. 复制卡组的浏览器链接地址到中间的输入框</p>
          <p>3. 右边的卡组代码就是YGO卡组代码了</p>
          <p>4. 也支持粘贴json格式的dtcg导出代码</p>
          <h3>DTCG YGO客户端下载</h3>
          <p>
            <a href="https://ygoanime.com/" target="_blank">
              https://ygoanime.com/
            </a>
          </p>
        </div>
        <textarea
          style={{ marginLeft: 20 }}
          className="input"
          value={deckStr}
          onInput={(e) => {
            setDeckStr(e.target.value);
          }}
        ></textarea>
        <textarea
          style={{ marginLeft: 20 }}
          disabled
          className="input"
          value={ygoStr}
        ></textarea>
      </div>
    </div>
  );
}

export default App;
