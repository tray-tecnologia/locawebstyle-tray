var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'js/dist');
var APP_DIR = path.resolve(__dirname, 'js');

var config = {
    entry: APP_DIR + '/Main.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: 'babel',
                query: {
                    plugins: ['transform-decorators-legacy']
                }
            }
        ]
    }
};

module.exports = config;
