const jwt = require('jsonwebtoken');
const dotenv = require("dotenv")
dotenv.config({ path: ".env" });

const tokenGenerator=(email)=>{
    return jwt.sign({email:email}, process.env.JWT_SECRET, {expiresIn: "3h"})
}

module.exports= {tokenGenerator}