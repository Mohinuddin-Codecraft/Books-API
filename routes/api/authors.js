const express=require("express");
const uuid=require("uuid")
const router=express.Router();
const { authors } = require("../../data/file");

router.post('/authors',(req,res)=>{
    const newAuthor={
        id:uuid.v4(),
        name:req.body.name,
        dob:req.body.dob,
        contact:req.body.contact,
        address:req.body.address
    }
    if(Object.values(newAuthor).some(ele=>ele==undefined)){
        console.log("please enter valid details")
    }
    authors.push(newAuthor)
    console.log(authors)
    res.json({"message":"authors added successfully","author":newAuthor})
})

router.delete('/authors/:id',(req,res)=>{
    const found=authors.some(element=>element.id===parseInt(req.params.id))
    if(!found){
        res.json({ msg: `No author with the id of ${req.params.id} in authors` })

    }else{
    res.send({message:`Author deleted successfully`,author: authors.filter(element=>element.id===parseInt(req.params.id))})
      
    }
   
})

module.exports=router