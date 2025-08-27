const data=require("fs")
data.writeFileSync("abc.txt","hello how are you")
const readData=data.readFileSync("abc.txt","utf-8")
console.log(readData)