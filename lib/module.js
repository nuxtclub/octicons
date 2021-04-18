import path from 'path'

export default function(moduleOptions) {
	const { nuxt } = this

	const options = Object.assign({}, this.options.octicons, moduleOptions)

	this.addPlugin({
		src: path.resolve(__dirname, 'plugin.js'),
		options,
	})

	this.nuxt.hook('components:dirs', (dirs) => {
		dirs.push({
			path: path.join(__dirname, 'components'),
		})
	})
}

module.exports.meta = require('../package.json')
