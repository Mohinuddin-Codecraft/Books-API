const { urlencoded } = require("body-parser");
const express=require("express");
const path=require("path")
const app=express();
const verifyToken=require('./middlewares/verifyToken')
// const aa=JSON.parse(fs.readFileSync('file.json'))

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api/v1',require('./routes/api/authentication'))
app.use('/api/v1',require('./routes/api/getAll'))
app.use('/api/v1',verifyToken,require('./routes/api/books'))
app.use('/api/v1',verifyToken,require('./routes/api/authors'))
app.use('/api/v1',verifyToken,require('./routes/api/publishers'))


const PORT=process.env.PORT||3001
app.listen(PORT,()=>{
    console.log("server running..")
})
