module.exports = function () {
    return {
        getRandomLines: async () => {
            var lines = [

            ]
            for(var i = 0; i<10; i++) {
                lines.push(
                    {
                        x:getRandomInt(0,300),
                        x2:getRandomInt(0,300),
                        y:getRandomInt(0,300),
                        y2:getRandomInt(0,300)
                    }
                )
            }
            return lines;
        }
    }
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}