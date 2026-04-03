const mongoose = require("mongoose");

const contactusSchema = new mongoose.Schema(
{
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},
{
    timestamps:true
}
);

module.exports = mongoose.model("ContactUs",contactusSchema);