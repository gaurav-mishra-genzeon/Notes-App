const jwt = require('jsonwebtoken');
import {Request, Response } from 'express';

const authenticateToken = (req:Request, res:Response, next:any)=>{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader && authHeader.split(' ')[1];
    if (!token) {
           return res.status(401).json({ error: 'Unauthorized' });
       } 

       jwt.verify(token, process.env.JWT_SECRET_KEY, (err:any, user:any) => {
     if (err) {
       return res.status(403).json({ error: 'Invalid token' });
     }   
      req.user=user
    next()
})
}

export {authenticateToken}



