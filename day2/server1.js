const server=require("http")
server.createServer((req,res)=>{
        if (req.url === "/") {
    res.write("<h2>this is my server</h2>")
        }
        else 
            if(req.url==="/about"){
                res.write("this is about page")
            }
            else 
                if(req.url==="/contact"){
                    res.write("this is contact page")
                }
                else
                    {
                    res.write("404 page not found")
                }
  res.end("")
}).listen(8000)
console.log("server is running")
console.log("hello")