function errorHandler(ctx, next) {
    return async (ctx, next) => {
        try {
            await next();
            if (ctx.status === 404) ctx.throw(404)
        } catch (err) {
            console.log(err.status || 500, "Error");
            ctx.status = err.status || 500
            ctx.body = "Сталась помилка";
        }
    }
}

module.exports = {
    errorHandler
}