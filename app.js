const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');
const expressHbs = require('express-handlebars');

const app = express();


  // set() is a method for a global configuration value
// details https://expressjs.com/en/4x/api.html#app.set
app.engine('hbs', expressHbs({
    layoutsDir: 'views/layouts/',
    defaultLayout: 'main-layout',
    extname: 'hbs'
}));

app.set('view engine', 'hbs');
// path where to find this templates, second argument is our directory
app.set('views', 'views')

const adminData = require('./routes/admin');
const shopRouter = require('./routes/shop')

// to be able parse request body
app.use(bodyParser.urlencoded({extended: false}));

// to serve files statically it means not handled by the express router
// or other middleware but instead directly forwarder to the file system
// for this we use static() which serves static files through the new middleware app.use()
app.use(express.static(path.join(__dirname, 'public')))


// the same as http://localhost:3000/admin
app.use("/admin", adminData.routes);

app.use(shopRouter);

// we don't use path because it by default
app.use((request, response, next) => {
    response.status(404).render('404', {pageTitle: 'Page Not Found'});
})

app.listen(3000)
