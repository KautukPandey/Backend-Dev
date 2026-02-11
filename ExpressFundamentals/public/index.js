const express = require('express')
const app = express()
const PORT = 5000

app.use(express.static("public"));
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.post('/register',(req,res)=>{
    console.log("Form data: ",req.body);
    res.send("register")
})

app.post('/contact',(req,res)=>{
    console.log("Contact data: ",req.body);
    res.send("contact")
    
})

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);
    
})