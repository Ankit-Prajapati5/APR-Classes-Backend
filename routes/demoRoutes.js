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

router.get("/all-demos", async (req, res) => {
  try {
    const demos = await Demo.find().sort({ _id: -1 });
    res.json(demos);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch demos" });
  }
});

module.exports = router;