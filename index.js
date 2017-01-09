import 'babel-polyfill';
import Koa from 'koa';
import co from 'co';
import render from 'koa-ejs';

const path = require('path');
const Router = require('koa-router');

var app = new Koa();
var router = new Router();

render(app, {
    root: path.join(__dirname, 'view'),
    layout: '',
    viewExt: 'html',
    cache: false,
    debug: true
});
app.context.render = co.wrap(app.context.render);

console.log(path.dirname(__filename));


var route = require("./router/routes")(app);

app.listen(3000);