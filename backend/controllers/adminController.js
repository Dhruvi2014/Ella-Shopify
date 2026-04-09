const User = require('../models/User');
const Product = require('../models/Product');
const Brand = require('../models/Brand');
const BlogArticle = require('../models/blogArticleModel');
const FAQ = require('../models/faqModel');
const ContactUs = require('../models/contactusModel');
const Lookbook = require('../models/lookbookModel');

const deleteEntity = async (req, res) => {
    try {
        const { entityType, id } = req.params;
        let Model;
        
        switch(entityType.toLowerCase()) {
            case 'user': Model = User; break;
            case 'product': Model = Product; break;
            case 'brand': Model = Brand; break;
            case 'blog': Model = BlogArticle; break;
            case 'faq': Model = FAQ; break;
            case 'contactus': Model = ContactUs; break;
            case 'lookbook': Model = Lookbook; break;
            default: return res.status(400).json({ message: "Invalid entity type" });
        }
        
        await Model.findByIdAndDelete(id);
        res.json({ message: `${entityType} deleted successfully` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getEntityList = async (req, res) => {
    try {
        const { entityType } = req.params;
        let data;
        
        switch(entityType.toLowerCase()) {
            case 'user': 
                data = await User.find({}).select('-password'); 
                break;
            case 'product': 
                data = await Product.find({}); 
                break;
            case 'brand': 
                data = await Brand.find({}); 
                break;
            case 'blog': 
                data = await BlogArticle.find({}); 
                break;
            case 'faq': 
                data = await FAQ.find({}); 
                break;
            case 'contactus': 
                data = await ContactUs.find({}); 
                break;
            case 'lookbook': 
                data = await Lookbook.find({}); 
                break;
            default: return res.status(400).json({ message: "Invalid entity type" });
        }
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { deleteEntity, getEntityList };
