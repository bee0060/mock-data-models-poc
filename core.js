const randomInt = require("./randoms/integer")
const randomString = require("./randoms/string")
const randomInArray = require("./randoms/inArray")


function generateModel (global, type, args) {
	if (args.length === 1) {
		return Array.from({length: args[0]}, (d, i) => new global[type])
	} else {
		return new global[type]
	}
}

function generateBasicType (global, type, args) {
	let value = undefined
	switch (type) {
		case Number:
			value = randomInt()
			break;
		case String:
			value = randomString()
			break;
		case Array:
			value = randomInArray.apply(null, args)
			break;
	}
	return value
}

function generateByType (global, type, args) {
	let value = undefined
	let isModel = typeof global[type] === 'function'
	if (isModel) {
		value = generateModel(global, type, args)
	} else {
		value = generateBasicType(global, type, args)
	}
	return value
}

function getKeyGenerateParams (attrConfig) {
	let attrType = ''
	let args = []
	if (Array.isArray(attrConfig)) {
		attrType = attrConfig[0]
		args = attrConfig.slice(1)
	} else {
		attrType = attrConfig	
	}
	return {type: attrType, args}
}

function generate (global, config) {
	const configIsObject = Object.prototype.toString.call(config) === '[object Object]'
	let result = undefined

	if (configIsObject) {
		result = []
		for (const key in config) {
			result[key] = generate(global, config[key])
		}
	} else {
		const params = getKeyGenerateParams(config)
		result = generateByType(global, params.type, params.args)
	}
	return result
}

function registerModels (global) {
	let args = Array.from(arguments).slice(1)
	args.forEach(model => global[model.name] = model)
}

module.exports = {
	registerModels: registerModels,
	generate: generate
}