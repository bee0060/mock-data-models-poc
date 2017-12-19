const randomInt = require("../randoms/integer")
const randomString = require("../randoms/string")
const randomInArray = require("../randoms/inArray")

function Event () {
	this.id = randomInt()
	this.name = randomString()
	this.type = randomInArray(['active', 'inactive'])
}

module.exports = Event