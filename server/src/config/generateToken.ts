const jwt= require('jsonwebtoken');

const generateToken=(id:number)=>{
    return jwt.sign({id:id},process.env.JWT_SECRET_KEY,{expiresIn:"1d"})
}

export default generateToken;