const express=require("express")
const router=express.Router();
const findModule=require('../../findModule');

router.get('/:field',(req,res)=>{
    const module=findModule(req.params.field)
    res.send(module)
})

router.get('/:field/:id',(req,res)=>{
    const module=findModule(req.params.field)
    const found=module.some(element=>element.id===parseInt(req.params.id))
    if(found){
        res.send(module.filter(idFilter(req)))
    }else{
        res.json({ msg: `No member with the id of ${req.params.id} in ${req.params.field}` })
    }
})

module.exports=router