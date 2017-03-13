var path = require('path');
var webpack = require('webpack');
var HtmlPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
var precss = require('precss');
var autoprefixer = require('autoprefixer');

module.exports = {
	entry: {
		'polyfills': './src/polyfills.ts',
		'vendor': './src/vendor.ts',
		'app': './src/main.ts'
	},

	resolve: {
		extensions: ['.js', '.ts']
	},

	module: {
		loaders: [
			{
				test: /\.ts$/,
				loaders: ['awesome-typescript-loader', 'angular2-template-loader']
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			{
				test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
				loader: 'file-loader?name=assets/[name].[hash].[ext]'
			},
			{
				test: /\.css$/,
				exclude: helpers.root('src', 'app'),
				loader: ExtractTextPlugin.extract({fallback: 'style', use: 'css?sourceMap'})
			},
			{
				test: /\.css$/,
				include: helpers.root('src', 'app'),
				loader: 'raw-loader'
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loader: 'raw-loader!postcss-loader!sass-loader'
			}
		]
	},

	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: ['app', 'vendor', 'polyfills']
		}),
		new HtmlPlugin({
			template: 'src/index.html'
		}),
		new webpack.LoaderOptionsPlugin({
			options: {
				postcss: function() {
					return [precss, autoprefixer];
				}
			}
		}),
		new webpack.ContextReplacementPlugin(
			/angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
			path.resolve(__dirname, 'doesnotexist/')
		)
	]
};