require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const demoRoutes = require("./routes/demoRoutes");
const app = express();




app.use(cors());
app.use(express.json());

app.use("/api",demoRoutes);

app.get("/",(req,res)=>{
    res.send("APR Classes Backend Running ✅");
})

mongoose
.connect(process.env.MONGO_URL)
.then(() =>
    console.log("MongoDB Connected ✅"))
.catch((err) => console.log(err))



const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log("Server started on port",PORT)
})