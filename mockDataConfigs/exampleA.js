const oneAPIModelConfig = {
	id: Number,
	name: String,
	event: 'Event',
	template: 'EventTemplate',
	status: [Array, ['New', 'Approved', 'Deleted']],
	teams: ['Team', 10]
}

module.exports = oneAPIModelConfig