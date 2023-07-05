// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

StartupEvents.registry('item', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
	event.create('copper_coin').displayName('Copper Coin')
	event.create('iron_coin').displayName('Iron Coin')
	event.create('gold_coin').displayName('Gold Coin')
})

StartupEvents.registry('block', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})