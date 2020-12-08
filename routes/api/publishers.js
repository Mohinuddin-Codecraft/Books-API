const express=require("express");
const uuid=require("uuid")
const router=express.Router();

const { publishers } = require("../../data/file");

router.post('/publishers',(req,res)=>{
    const newpublisher={
        id:uuid.v4(),
        name:req.body.name,
        dob:req.body.dob,
        contact:req.body.contact,
        address:req.body.address
    }
    if(Object.values(newpublisher).some(ele=>ele==undefined)){
        console.log("please enter valid details")
    }
    publishers.push(newpublisher)
    console.log(publishers)
    res.json({"message":"publisher added successfully","publisher":newpublisher})
})

router.delete('/publishers/:id',(req,res)=>{ const found=authors.some(element=>element.id===parseInt(req.params.id))
    if(!found){
        res.json({ msg: `No publisher with the id of ${req.params.id} in publishers` })

    }else{
    res.send({message:`Publisher deleted successfully`,publisher: publishers.filter(element=>element.id===parseInt(req.params.id))})
      
    }
   
})

module.exports=router