const randomInt = require("../randoms/integer")
const randomString = require("../randoms/string")
const randomInArray = require("../randoms/inArray")

function Team () {
	this.id = randomInt()
	this.name = randomInArray(['ARE', 'CLE'])
	this.players = randomInt()
}

module.exports = Team