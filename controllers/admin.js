// by convention name of imported class names with capital letter
const Product = require('../models/product')

exports.getAddProduct = (request, response, next) => {

    response.render('admin/add-product', {
        pageTitle: 'Add Product',
        // for dynamic active effect in nav menu for Add product
        path: '/admin/add-product',
        formCSS: true,
        activeAddProduct: true
    });
};

exports.postAddproduct = (request, response, next) => {

    const title = request.body.title;
    const imageUrl = request.body.imageUrl;
    const price = request.body.price;
    const description = request.body.description;

    const product = new Product(title, imageUrl, description, price);
    product.save();

    response.redirect('/');
}

exports.getProducts = (request, response, next) => {

    Product.fetchAll( products => {
        // views/shop/index.ejs
        response.render('admin/products', {
            prods: products,
            pageTitle: 'Admin Products',
            path: '/admin/products'
        });
    });

}