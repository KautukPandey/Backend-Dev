const fs = require('fs')
if(pathname==='/admin'){
    if(user==='admin' && pass==='1234'){
        fs.readFile('.admin_dashboard.html',(err)=>{
            if(err){
                console.log(err);
                
            }
            else{
                res.end()
            }
        })
    }
}
