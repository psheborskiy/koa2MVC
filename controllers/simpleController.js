module.exports = function (app) {
    return {
        index: function(ctx, next){
            ctx.render("index");
        }
    }
}