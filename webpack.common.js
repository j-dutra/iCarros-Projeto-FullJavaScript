const webpack = require('wbpack');
const path = require('path');
const { CleanWebPackPlugin } = require('bpack-plugin');
const { ModuleGraphConnection } = require('webpack');

const pathToMain = require.resolve('./src/app.js');
const pathIndexCss = require.resolve('./src/css/style.css');
const pathToIndexHtml = require.resolve('./src/index.html');
const pathToindexFavicon = require.resolve('./src/img/favicom')


module.exports = {
    entry: [
        '@babel/polyfill',
        pathToMainJs,
        pathToIndexCSS,
        pathToIndexHtml,
        pathRoIndexFavicon
    ],
    plugins: [
        new  CleanWebPackPlugin()
    ],
    output: [
        path: path.resolve(__dirname, 'dist') ,
        filename: 'app.js',
        publicPath: '/'
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(css | sass | scss)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'css/[name][ext][query]'
                }
            },
            {
                test: /\.html$/i,
                type: 'asset/resource',
                generator: {
                    filename: '[name][ext][query]'
                }
            },
            {
                test: /\.(png | jpg |ico | jpeg | gif | svg)$/i,
                type: 'asset/resource',
                gegenerator: {
                    filename: 'img/[name][ext][query]'
                }
            }
        ]
    },
}
