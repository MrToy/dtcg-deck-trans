// var arr = require('./x2x.json')
// const reg = /([A-Z-\d]+)[ |\r|\\]/
// var result = {}

// arr.filter(it=>{
//     if(!it[2].match(reg)){
//         return false
//     }
//     return true
// }).forEach(it=>{
//     const key = it[2].match(reg)[1]
//     result[key] = it[0]
// })

// require('fs').writeFileSync('./x2.json',JSON.stringify(result))
// console.log(result)



const deckStr=`
["Exported from http://digimon.card.moe","ST3-04","ST3-04","ST3-04","ST3-04","ST3-07","ST3-07","ST3-07","ST3-12","ST3-12","ST3-12","ST3-12","BT1-063","BT1-063","BT1-052","BT1-052","BT1-087","BT1-087","BT1-087","BT1-048","BT1-048","BT1-048","BT1-048","BT1-006","BT1-006","BT1-006","BT1-006","BT1-049","BT1-049","BT1-057","BT1-057","BT1-057","BT1-057","BT2-033","BT2-033","BT2-033","BT2-033","BT2-035","BT2-035","BT2-035","BT2-035","BT2-041","BT2-041","BT2-041","BT2-087","BT2-087","BT2-087","BT2-099","BT2-038","BT2-038","BT2-038","BT2-038","BT2-039","BT2-098","BT2-098"]
`

const deckArr = JSON.parse(deckStr).slice(1)
const x3=require('./x3.json')
const result =[
    "#created by toy",
    "#main",
]
deckArr.forEach(it=>{
    if(x3[it]?.ygoID&&x3[it].type!=="数码蛋卡"){
        result.push(x3[it].ygoID)
    }
})
result.push("#extra")
deckArr.forEach(it=>{
    if(x3[it]?.ygoID&&x3[it].type=="数码蛋卡"){
        result.push(x3[it].ygoID)
    }
})
result.push("!side")
var resultstr=result.join("\n")
console.log(resultstr)

// var re = require('./response.json')
// const x2=require('./x2.json')
// const result={}
// re.data.list.forEach(it=>{  
//     it.ygoID=x2[it.serial]
//     result[it.serial]=it
// })
// require('fs').writeFileSync('./x3.json',JSON.stringify(result))
// console.log(result)