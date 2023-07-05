// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
	// Change recipes here
	event.shaped('kubejs:iron_coin', [
		'CCC',
		'C C',
		'CCC'
	], {
		C: 'kubejs:copper_coin'
	})
	
	event.shaped('kubejs:gold_coin', [
		'CCC',
		'C C',
		'CCC'
	], {
		C: 'kubejs:iron_coin'
	})
})

ServerEvents.tags('item', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})