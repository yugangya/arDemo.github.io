const path = require('path')
const webpack = require('webpack')

module.exports = {
	// ...
	devServer: {
		port: 9000,
		host: '0.0.0.0',
		https:true,
		hot: true
	},
	// ...
}
