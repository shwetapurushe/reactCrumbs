/**
 * Created by Shweta on 1/5/2016.
 */
var path = require('path');
var webpack = require('webpack');

module.exports ={
    entry : './main.js',
    output : {
                path: __dirname + "/dist",
                filename:'bundle.js',
                library: 'crumbs',
                libraryTarget : 'umd'
            },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module :{
        loaders :[{
            test : /\.jsx?$/,
            exclude : '/node_modules/',
            loader : 'babel-loader',
            query : {
                presets : ['es2015', 'react']
            }
        },
        {
            test: /\.css?$/,
            loader : 'style-loader!css-loader'

        }]
    },
    externals : {
        "react" : "React",
        "react-dom": "ReactDOM",
        "Weave" : "Weave"
    }

};