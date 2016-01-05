/**
 * Created by Shweta on 1/5/2016.
 */
var path = require('path');
var webpack = require('webpack');

module.exports ={
    entry : './main.js',
    output : {path: __dirname + "/dist", filename:'bundle.js'},
    module :{
        loaders :[{
            test : /\.(js|jsx)$/,
            exclude : '/node_modules/',
            loader : 'babel-loader',
            query : {
                presets : ['es2015', 'react']
            }
        }]
    },
    externals : {
        "react" : "React",
        "react-dom": "ReactDOM"
    }

};