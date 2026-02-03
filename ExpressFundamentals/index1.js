import express from "express"

const app = express()

const PORT = 8000;

app.post('/students/register',(req,res)=>{
    const {id,name,branch} = req.body
    if(!id||!name||!branch){
        return res.status(400).json({message:"Cannot give empty field"})
    }
    const arrayIndex = students.findIndex((s)=>s.id==id)
    if(arrayIndex==-1){
        return res.status(404).send("Student nor found")
    }
    const foundStudent = students[arrayIndex] 
    if(foundStudent){
        return res.status(400).send("Already exists")
    }
    const createdStudent = {id: id,name: name,branch: branch}
    // students = {...students,...createdStudent}
    students.push(createdStudent)

    return res.status(200).json({
        message: "Data added",
        createdStudent
    })
})

app.put('/students/:id',(req,res)=>{
    const id = req.params.id 
    
})


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});