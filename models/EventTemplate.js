const randomInt = require("../randoms/integer")
const randomString = require("../randoms/string")
const randomInArray = require("../randoms/inArray")

const Event = require("./Event")

function EventTemplate () {
	this.id = randomInt()
	this.event = new Event()
	this.name = 'Event Template'
}

module.exports = EventTemplate