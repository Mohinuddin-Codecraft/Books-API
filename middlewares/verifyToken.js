const jwt=require('jsonwebtoken')

function verifyToken(req,res,next){
    const bearerHeader=req.headers['token'];
    if(typeof bearerHeader !=='undefined'){
        const bearer=bearerHeader.split(' ');
        const bearerToken=bearer[1];
        req.token=bearerToken;
        jwt.verify(req.token, 'secretkey', (err, user) => {
            if (err) return res.sendStatus(404).json("Token expired")
            req.user = user
            next()
        })
    }else{
        res.send("Please login")
    }
}

module.exports=verifyToken;
