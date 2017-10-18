var webpackMerge = require('webpack-merge');
var prodConfig = require('./webpack.prod.js');
var WebPackDeployAfterBuild = require('webpack-deploy-after-build');
var helpers = require('./helpers');

const server = '';

module.exports = webpackMerge(prodConfig, {
    plugins: [
        new WebPackDeployAfterBuild({
            from: helpers.root('dist'),
            to: server
        })
    ]
});