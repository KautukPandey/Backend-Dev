const fs = require("fs")
const http = require("http")
const server = http.createServer((req,res)=>{
    const parsedurl = url.parse(req.url, true);
    const {name,email} = parsedurl.query;
    console.log(name,email);
    switch (req.url) {
        case "/":
            res.end("Welcome to home page");    
            break;
        case "/about-us":
            res.writeHead(200,{"content-type": "text/html"})
            
        default:
            break;
    }
})