const fs = require("fs");
const path = require("path");

const p = path.join(
    path.dirname(require.main.filename),
    "data",
    "products.json"
);

// helper function
const getProductsFromFile = (cb) => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    });
};

module.exports = class Product {
    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save() {
        getProductsFromFile((products) => {
            products.push(this);

            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    //The static keyword defines a static method or property for a class.
    // Neither static methods nor static properties can be called on instances
    // of the class. Instead, they're called on the class itself.
    // Static methods are often utility functions, such as functions
    // to create or clone objects,
    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
}
