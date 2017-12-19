const Event = require("./models/Event")
const EventTemplate = require("./models/EventTemplate")
const Team = require("./models/Team")
const Core = require("./core")
const config = require("./mockDataConfigs/exampleA")

let event = new Event()
let eventTemplate = new EventTemplate()

console.log('index - event', event)
console.log('index - event template', eventTemplate)

Core.registerModels(this, Event, EventTemplate, Team)
let generateResult = Core.generate(this, config)

console.log('index - generate by config', generateResult)