module.exports = function (app) {
    const model = require("../models/simpleModel")();

    return {
        index: async (ctx, next) => {
            var lines = await model.getRandomLines();
            var data = {
                lines: lines
            };
            console.log(lines);
            await ctx.render("index", data);
        }
    }
}