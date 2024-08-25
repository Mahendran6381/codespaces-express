const jwt = require('jsonwebtoken')



const verifyJWT = (req,res,next)=>{
    const token = req.cookies.token || "";
    console.log("i'm being fetched",req.cookies)
    if(!token){
       return res.send("Nahhh bro")
    }
    try{
        const userDetails  = jwt.verify(token,process.env.JWT_TOKEN)
        next();
    }catch(err){
        console.log(err)
        return res.send("Nah bro")
    }
}

module.exports = verifyJWT