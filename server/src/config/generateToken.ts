const jwt= require('jsonwebtoken');


const generateToken=(id:any)=>{
    return jwt.sign({id:id},process.env.JWT_SECRET_KEY,{expiresIn:"1d"})
}

export default generateToken;