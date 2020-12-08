const express=require("express")
const router=express.Router();
const uuid=require("uuid")
const {books}=require('../../data/file')


router.post('/books',(req,res)=>{
    const newBook={
        id:uuid.v4(),
        name:req.body.name,
        year:req.body.year,
        isbn:req.body.isbn,
        authorId:req.body.authorId,
        publisherId:req.body.publisherId
    }

    if(Object.values(newBook).some(ele=>ele==undefined)){
        res.send("please enter valid details")
    }else{
    books.push(newBook)
    res.json({"message":"Book added successfully","book":newBook})
    }
})


router.delete('/books/:id',(req,res)=>{
    const found=books.some(element=>element.id===parseInt(req.params.id))
    if(!found){
        res.json({ msg: `No book with the id of ${req.params.id} in books` })

    }else{
        console.log(books.filter(element=>element.id!==parseInt(req.params.id)));
    res.send({message:`Book deleted successfully`,book: books.filter(element=>element.id===parseInt(req.params.id))})
      
    }
   
})

module.exports=router