const os = require('os');
const fs = require('fs')
const totalMemory = os.totalmem()/(1024*1024*1024);
const freeMemory = os.freemem()/(1024*1024*1024);

const platform = os.platform()
const cpu = os.cpus()[0].model

console.log(cpu);
os.userInfo()

const log = `
    Time: ${timestamp}
    free memory: ${freeMemory}    
`

setInterval(()=>{
    fs.appendFile("./system_info.txt",log,(err)=>{
        if(err){
            console.log(err);

        }
    })
},5000)