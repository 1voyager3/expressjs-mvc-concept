const express = require('express');
const path = require('path');
const rootDir = require('../utility/path');

const adminData = require('./admin');

const router = express.Router();

router.get('/', (request, response, next) => {

    const products = adminData.products;

// method to get access to the html files in the view directory
    // render() is express method which use templating
    // render() method allow us to pass the second argument
    // which is data to be rendered into our view
    response.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true,
    });
});


module.exports = router;