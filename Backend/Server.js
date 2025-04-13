const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors({
    origin:'https://shrisaidigital.onrender.com'
}))

mongoose.connect('mongodb+srv://sanjayrajamani2003:sanj%40Y28@cluster0.amfg9is.mongodb.net/Products?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('✅ Connected to MongoDB Atlas'))
    .catch((err) => console.error('❌ MongoDB connection error:', err));
    const ProductSchema = new mongoose.Schema({
        name: String,
        model: String,
        description: String,
        price: Number,
        stock: String,
        category: String,
        image: String
    });
    
    const Product = mongoose.model('Product', ProductSchema, 'Products_list');
    
    app.get('/products', async (req, res) => {
        try {
            const products = await Product.find();
            res.json(products);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to fetch products' });
        }
    });
    
const PORT=process.env.port|| 5000;

app.listen(PORT,()=>console.log(`Server is running on ${PORT}`))

