var port = 3000;
var express = require('express');
var ejs = require('ejs');
var layouts = require('express-ejs-layouts');
var app = express();

app.set('view engine', 'ejs');
app.use(layouts);
app.use(express.static('public'));

var homeController = require('./controllers/homeController.js');

app.get('/', homeController.renderIndex);

var server = app.listen(port, () => {
  console.log(`Sever listening on port ${port}`);
});
