var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var precss = require('precss');
var autoprefixer = require('autoprefixer');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
	devtool: 'source-map',

	output: {
		path: helpers.root('dist'),
		publicPath: helpers.root('dist'),
		filename: '[name].[hash].js',
		chunkFilename: '[id].[hash].chunk.js'
	},

	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			mangle: {
				keep_fnames: true
			}
		}),
		new ExtractTextPlugin('[name].[hash].css'),
		new webpack.DefinePlugin({
			'process.env': {
				'ENV': JSON.stringify(ENV)
			}
		}),
		new webpack.LoaderOptionsPlugin({
			options: {
				htmlLoader: {
					minimize: false
				}
			}
		}),
		new webpack.LoaderOptionsPlugin({
			options: {
				postcss: function() {
					return [precss, autoprefixer];
				}
			}
		})
	]
});