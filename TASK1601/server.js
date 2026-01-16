const http = require("http")
const fs = require("fs")
const url = require("url")

const server = http.createServer((req,res)=>{
    if(req.url.startsWith("/complain")){
        const parsedUrl = url.parse(req.url,true);
        const {name,issue,priority}= parsedUrl.query;

        const ticketId = "TKT-"+Math.floor(Math.random()*1000000);

        if(!name || !issue || !priority){
            res.writeHead(400,{"content-type":"application/json"});
            res.end(JSON.stringify({message: "Missing required fields"}))
        }

        const fileName = priority === "high" ? "URGENT.txt": "normal_complaints.txt";
        const logMessage = `id- ${ticketId}
                            name- ${name}
                            issue- ${issue}
                            priority-${priority}`

        fs.appendFile(fileName,logMessage,(err)=>{
            if(err){
                res.writeHead(400,{"content-type": "application/json"});
                res.end(JSON.stringify({message: "File write failed"}))
            }
            res.writeHead(200,{"content-type":"application/json"})
            res.end(JSON.stringify({ticketId,message:"We will resolve your issue soon"}))
        })

    }
    else{
        res.writeHead(404,{"content-type":"application/json"});
        res.end(JSON.stringify({message: "Route not found"}))
    }
})

server.listen(8000,()=>{
    console.log("Server running on port 8000");
})