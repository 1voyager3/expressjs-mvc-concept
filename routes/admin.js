const express = require('express');
const path = require('path');
const rootDir = require('../utility/path');

const router = express.Router();

const products = [];

router.get('/add-product', (request, response, next) => {

    response.render('add-product', {
        pageTitle: 'Add Product',
        // for dynamic active effect in nav menu for Add product
        path: '/admin/add-product',
        formCSS: true,
        activeAddProduct: true
    });
});

router.post('/add-product', (request, response, next) => {

    console.log(request.body);

    products.push( {title: request.body.title} )

    response.redirect('/');
})


exports.routes = router;
exports.products = products;