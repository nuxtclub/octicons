import path from 'path'

export default function(moduleOptions) {
	const { nuxt } = this

	const options = Object.assign({}, this.options.octicons, moduleOptions)

	this.addPlugin({
		src: path.resolve(__dirname, 'plugin.js'),
		options,
	})
}

module.exports.meta = require('../package.json')
