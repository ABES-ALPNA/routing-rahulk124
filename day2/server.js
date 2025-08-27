const server=require("http")
server.createServer((req,res)=>{
    res.write("<h2>this is my first server</h2>")
    res.end("")
}).listen(8000)
console.log("server is running")
console.log("hello")