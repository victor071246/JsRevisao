const path = require('path');

module.exports = {
	mode: 'development', // use dev mode pra facilitar debug
	entry: './frontend/main.js',
	output: {
		path: path.resolve(__dirname, 'public', 'assets', 'js'),
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['.js', '.json', '.css'],
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	devtool: 'source-map',
};
