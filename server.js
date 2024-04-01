// Import modules
const express = require('express')
const fetch = require('node-fetch');

// Create an instance of the server
const app = express()

// Set view engine
app.set('view engine', 'ejs')

// Fetch a list of ten products and dispplay them on the index page
app.get('/', async (req, res) => {
    try {
        const response = await fetch('https://dummyjson.com/products?limit=10');
        const { products } = await response.json();
        res.render('index', { products });
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).send('Internal Server Error');
    }
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000')
})