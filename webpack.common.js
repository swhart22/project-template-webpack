const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const paths = {
	src: path.join(__dirname, 'src'),
	dist: path.join(__dirname, 'dist'),
	data: path.join(__dirname, 'data')
}

module.exports = {
	entry: {
		app: './src/index.js'
	},
	plugins:[
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: 'Multimedia Team Graphics Template',
			template: './src/templates/index.html'
		}),
		new CopyWebpackPlugin([
			{
				from: paths.data,
				to: paths.dist + '/data'
			}
		])
	],
	output:{
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test:/\.js$/, exclude: /node_modules/, loader:'babel-loader'
			},
			{
				test:/\.css$/,
				use:[
					'style-loader',
					'css-loader'
				]
			},
			{
				test:/\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			},
			{
				test: /\.(csv|tsv)$/,
				loader:'csv-loader',
				options: {
					header: true
				}
			},
			{
				test:/\.xml$/,
				use: [
					'xml-loader'
				]
			},
			{
				test:/\.json$/,
				loader: 'json-loader'
			}
		]
	}
};