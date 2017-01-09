module.exports = function(app) {
    const Router = require('koa-router');
    const path = require('path');
    const router = new Router();

    var myController = require("../controllers/simpleController")(app);

    router.get('/', function (ctx, next) {
        ctx.body = 'Hello World!';
    })
    .get('/test', async (ctx, next) => {
         await ctx.render('index');
    })
    .get('/index', myController.index);

    app.use(router.routes());
    app.use(router.allowedMethods());
};