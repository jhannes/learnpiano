module.exports = {
	globDirectory: 'learnpiano/',
	globPatterns: [
		'**/*.{html,css,js,xml,png,jpg,json}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'static/sw.js'
};