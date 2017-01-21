import 'babel-polyfill';
import Koa from 'koa';
import co from 'co';
import render from 'koa-ejs';
import errorHandler from './middleware/errorHandler';

const path = require('path');

var app = new Koa();
    app.use(errorHandler.errorHandler());

render(app, {
    root: path.join(__dirname, 'view'),
    layout: '',
    viewExt: 'html',
    cache: false,
    debug: true
});
app.context.render = co.wrap(app.context.render);

console.log(path.dirname(__filename));

require("./router/routes")(app);

app.listen(2222);