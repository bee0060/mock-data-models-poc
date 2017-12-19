# mock-data-models-poc
POC for research generate mock data by models ( new Class)


Using classes, assign random functions or new other classes to attributes of instances, like :
```
function EventTemplate () {
	this.id = randomInt()
	this.event = new Event()
	this.name = 'Event Template'
}
```

Then use config like :
```
const oneAPIModelConfig = {
	id: Number,
	name: String,
	event: 'Event',
	template: 'EventTemplate',
	status: [Array, ['New', 'Approved', 'Deleted']],
	teams: ['Team', 10]
}
```

There are basic type and models generators.
`Number`, `String` or so on are basic type ( of native javascript ).
`Event`, `EventTemplate` are models( the classes defined by us ).

I registered all custom defined models to global.
Then using the core.js and config json files, we can auto generate the mock data instances base on the types.
And all the models are reusable, in different request/APIs, we don't need to rework for the exists models.

The logic of config values are:
```
Non-array:
	- The value is the type of current attribute, basic type are functions, Number, String and etc. Custom define models are in strings, `'Event'`, `'EventTemplate'` and etc.

Array:
	- First element is the type of current attribute
	- Rest elements are the arguments for generator of this attributes.
		-- If second element is number, means current attribute is an array, the number is the array length. Every value of this array is random under the type.
		-- If type is array, and the second element is array also, means current attribute will get a random value from the second element array.
		-- Otherwise, will just pass rest elememts as arguments to the generator of the type.
```