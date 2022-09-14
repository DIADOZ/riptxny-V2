module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
	},
	'extends': ['google', 'plugin:jsdoc/recommended'],
	'overrides': [
	],
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module',
	},
	'rules': {
		'linebreak-style': 'off',
		'indent': ['error', 'tab'],
		'no-tabs': 'off',
		'require-jsdoc': 'off',
		'valid-jsdoc': 'off',
		'max-len': 'off',
		'no-unused-vars': 'off',
	},
	'plugins': [
		'jsdoc',
	],
};
