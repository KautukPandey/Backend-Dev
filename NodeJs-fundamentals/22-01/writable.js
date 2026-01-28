const fs = require('fs')
const path = require('path')

// const inputStream = path.basename(__dirname,"input.txt")

// const outputStream = path.resolve(__dirname,"output.txt")

// const writeStream = fs.createReadStream(inputStream)

// writeStream.pipe(outputStream)

const inputFilePath = path.join(__dirname,"input.txt");
const outputFilePath = path.join(__dirname,"output.txt");

const inputStream = fs.createReadStream(inputFilePath,'utf-8');

inputStream.on("data",(chunk)=>{
    console.log("Data is reading in chunks",chunk);
    
})

