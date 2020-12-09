const express = require("express");
const router = express.Router();
const jwt=require('jsonwebtoken')
let users = [{
    'name':'rahul',
    "email":"rahul@gmail.com",
    "password":"123456"
    
}]

router.post('/register', (req, res) => {
    const newUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    if (Object.values(newUser).some(ele => ele === undefined)) {
        res.send('Please Enter valid details')
    } else {
        users.push(newUser)
        res.json({ message: "User added successfully", user: newUser })
    }
})

router.post('/login', (req, res) => {
    const currentUser = {
        email: req.body.email,
        password: req.body.password
    }
    const user = users.find(ele => ele.email === currentUser.email && ele.password === currentUser.password)
    if(user){
    jwt.sign({user}, 'secretkey',{expiresIn: '1h'}, (err, token) => {
        if(err) return err
        res.json({
            token
        });
    });}
    else{
        res.send("Invalid Credentials")
    }
})

module.exports=router