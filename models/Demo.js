const mongoose = require("mongoose");

const demoSchema = new mongoose.Schema({
    name: String,
    class: String,
    subject: String,
    mode: String,
    phone: String,
    location: String,
    createdAt:{
        type: Date,
        default: Date.now
    }

})

module.exports=mongoose.model("Demo",demoSchema);