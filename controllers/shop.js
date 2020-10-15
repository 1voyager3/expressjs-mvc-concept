// by convention name of imported class names with capital letter
const Product = require('../models/product')


exports.getProducts = (request, response, next) => {

    // here we use static method from '../models/product'
    // cb is callback
    Product.fetchAll( products => {
        response.render('shop/product-list', {
            prods: products,
            pageTitle: 'All Products',
            path: '/products'
        });
    });
}

exports.getIndex = (request, response, next) => {

    Product.fetchAll( products => {
        // views/shop/index.ejs
        response.render('shop/index', {
            prods: products,
            pageTitle: 'Shop',
            path: '/'
        });
    });
}

exports.getCart = (request, response, next) => {

    response.render('shop/cart', {
        pageTitle: 'Your Cart',
        path: '/cart'
    })
}

exports.getOrders = (request, response, next) => {

    response.render('shop/orders', {
        pageTitle: 'Your Orders',
        path: '/orders'
    })
}

exports.getCheckout = (request, response, next) => {

    response.render('shop/checkout', {
        pageTitle: 'Checkout',
        path: '/checkout'
    });
}
















