const express = require("express")
const router = express.Router()
const Admin = require("../models/Admin")
const jwt = require("jsonwebtoken")

const SECRET = "apr_secret_key"

router.post("/admin-login", async (req,res)=>{
    const {email,password} = req.body;
    const admin = await Admin.findOne({email, password});

    if(!admin){
        return res.status(401).json({error: "Invalid Credentials"})
    }
    const token = jwt.sign({id: admin._id}, SECRET, {expiresIn: "1h"})
    res.json({message: "Login Successful ✅", token})
})

module.exports = router;