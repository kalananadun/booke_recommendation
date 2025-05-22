import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import  'dotenv/config';
// hash the password
const hashPassword = async (password)=>{
    try {
        const saltRounds = 10; // Define the salt rounds
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        console.log(`Hashed Password: ${hashedPassword}`); // Template literal for logging
        return hashedPassword;
    } catch (error) {
        console.log(error);
    }    
}
// TOKEN GENERATION 
const tokenGenerator =(userId)=>{
    console.log(userId);
}

// create router
const router = express.Router();
// middleware 
router.use(express.json());

// test endpoint 
router.get('/test',(req,res)=>{
    try {
        res.status(200).json({msg:'test point'})
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'internal server error',
            msg_code:500
        });
    }
})

// define endpoint
router.post('/login',(req,res)=>{
    try {
        // get the login details 
        const {username,password}= req.body;
        // verification of the 

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'internal server error',
            msg_code:500
        })
    }
})



export default router;