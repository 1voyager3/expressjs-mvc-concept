// by convention name of imported class names with capital letter
const Product = require('../models/product')

exports.getAddProduct = (request, response, next) => {

    response.render('add-product', {
        pageTitle: 'Add Product',
        // for dynamic active effect in nav menu for Add product
        path: '/admin/add-product',
        formCSS: true,
        activeAddProduct: true
    });
};

exports.postAddproduct = (request, response, next) => {

    const product = new Product(request.body.title);
    product.save();

    response.redirect('/');
}

exports.getProducts = (request, response, next) => {

    // here we use static method from '../models/product'
    Product.fetchAll( products => {
        response.render('shop', {
            prods: products,
            pageTitle: 'Shop',
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true,
        });
    });
}

