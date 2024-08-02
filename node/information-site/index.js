const http = require("http")
const fs = require("fs")
const { error } = require("console")
const server = http.createServer((req,res)=>{
    if(req.url == "/"){
        fs.readFile("./views/index.html",(error,data)=>{
            if(error){
                res.statusCode = 500
                res.setHeader('Content-Type',"text/plain")
                res.end("The error occured on the server")

            }else{
                res.statusCode =200
                res.setHeader("Content-Type","text/html")
                res.end(data)

            }
        })

    }else if(req.url == "/about"){
        fs.readFile("./views/about.html",(error,data)=>{
            if(error){
                res.statusCode = 500
                res.setHeader('Content-Type',"text/plain")
                res.end("The error occured on the server")

            }else{
                res.statusCode =200
                res.setHeader("Content-Type","text/html")
                res.end(data)

            }
        })

    }else if(req.url == "/contact-us"){
        fs.readFile("./views/contact-us.html",(error,data)=>{
            if(error){
                res.statusCode = 500
                res.setHeader('Content-Type',"text/plain")
                res.end("The error occured on the server")

            }else{
                res.statusCode =200
                res.setHeader("Content-Type","text/html")
                res.end(data)

            }
        })

    }else{
        fs.readFile("./views/404.html",(error,data)=>{
            if(error){
                res.statusCode = 500
                res.setHeader('Content-Type',"text/plain")
                res.end("The error occured on the server")

            }else{
                res.statusCode =200
                res.setHeader("Content-Type","text/html")
                res.end(data)

            }
        })

    }
})
server.listen(5000,()=>console.log("The server is running on port 5000"))