const ContactUs = require("../models/contactusModel");

const createContactUs = async (req,res)=>{

try{

const {name,phone,email,subject,comment} = req.body;

const contact = await ContactUs.create({
name,
phone,
email,
subject,
comment,
user:req.user._id
});

res.status(201).json(contact);

}
catch(error){
res.status(500).json({message:error.message});
}

};

module.exports = {
createContactUs
};