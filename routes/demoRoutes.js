const express = require("express");
const router = express.Router();
const Demo = require("../models/Demo");
const verifyToken = require("../middleware/auth")

router.post("/book-demo",async(req,res)=>{
    try{
        const demo = new Demo(req.body);
        await demo.save();
        res.status(201).json({message: "Demo Booked Successfully ✅"})
    }
    catch(error){
        res.status(500).json({error: error.message})
    }
})

router.get("/all-demos",verifyToken,async(req,res)=>{
    const demos = await Demo.find.sort({createdAt: -1});
    res.json(demos);
})

module.exports = router;