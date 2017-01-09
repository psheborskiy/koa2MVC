var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var nodeModules = {};


fs.readdirSync(path.resolve(__dirname, 'node_modules'))
    .filter(x => ['.bin'].indexOf(x) === -1)
    .forEach(mod => { nodeModules[mod] = `commonjs ${mod}`; });


module.exports =
{
    // The configuration for the server-side rendering
    name: 'server',
    target: 'node',
    entry: './index.js',
    output: {
        path: './',
        publicPath: 'bin/',
        filename: 'bundle.js'
    },
    externals: nodeModules,
    module: {
        loaders: [
            { test: /\.js$/,

                loaders: [
                    'babel-loader'
                ]
            },
            { test:  /\.json$/, loader: 'json-loader' },
        ]
    },
    plugins: [

    ]
};