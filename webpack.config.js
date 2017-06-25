var path = require('path');

module.exports = {
	entry: {
		app: './src/app.js'
	},
	output: {
		path: path.join(__dirname, 'public/build'),
		publicPath: '/public/build/',
		filename: 'bundle.js',
		sourceMapFilename: 'bundle.map',
	},
	devtool: '#source-map',
	devServer: {
		contentBase: './',
		inline: true,
		port: 3000
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				exclude: /(node_modules)/,
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	}
};