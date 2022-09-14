const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV == 'production';
const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';

const config = {
	entry: {
		bundle: path.resolve(__dirname, 'src/index.js'),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'RIPTXNY',
			template: path.resolve(__dirname, 'src/template.html'),
			filename: 'index.html',
		}),
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/i,
				exclude: path.resolve(__dirname, 'node_modules'),
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.css$/i,
				use: [stylesHandler, 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(glb|gltf)$/i,
				type: 'asset/resource',
			},
		],
	},
	devServer: {
		host: process.env.HOST || 'localhost',
		port: process.env.PORT || 3000,
		static: path.resolve(__dirname, './dist'),
		open: true,
		hot: true,
		historyApiFallback: true,
		compress: true,
	},
};

module.exports = () => {
	if (isProduction) {
		config.mode = 'production';
		config.devtool = 'source-map';
		config.plugins.push(new MiniCssExtractPlugin());
	} else {
		config.mode = 'development';
		config.devtool = 'eval-source-map';
	}
	return config;
};
