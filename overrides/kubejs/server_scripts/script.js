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
	
	event.shaped('minecraft:bell', [
		'SIS',
		'SGS',
		'S S'
	], {
		G: 'minecraft:gold_block',
		I: 'minecraft:iron_ingot',
		S: 'minecraft:stick'
	})
	
	// We want the backpack to only be purchase-able
	event.remove({output: 'backpacked:backpack'});
})

ServerEvents.tags('item', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})