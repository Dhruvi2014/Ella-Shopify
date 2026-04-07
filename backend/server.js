const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require("./routes/productRoutes");
const shopRoutes = require("./routes/shopRoutes");
const contactRoutes = require("./routes/contactRoutes");
const contactusRoutes = require("./routes/contactusRoutes");
const faqRoutes = require("./routes/faqRoutes");
const landingRoutes = require("./routes/landingProductRoutes");
const menItemRoutes = require("./routes/menItemRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/shop", shopRoutes);
app.use("/api/about", require("./routes/aboutRoutes"));
app.use("/api/info", require("./routes/infoRoutes"));
app.use("/api", contactRoutes);
app.use("/api/brands", require("./routes/brandRoutes"));
app.use("/api/contactus",contactusRoutes);
app.use("/api", faqRoutes);
app.use("/api/lookbook", require("./routes/lookbookRoutes"));
app.use("/api",landingRoutes);
app.use("/api/men-items", menItemRoutes);

app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
