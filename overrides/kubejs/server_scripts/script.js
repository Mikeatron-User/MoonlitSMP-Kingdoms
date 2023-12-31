// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
	// Change recipes here
	
	event.replaceInput({}, 'naturalist:cooked_egg', 'farmersdelight:fried_egg');
	
	event.replaceOutput({}, 'naturalist:cooked_egg', 'farmersdelight:fried_egg');
	
	event.shapeless('kubejs:iron_coin', ['kubejs:copper_coin', 'kubejs:copper_coin', 'kubejs:copper_coin', 'kubejs:copper_coin', 'kubejs:copper_coin'])
	
	event.shapeless('5x kubejs:copper_coin', 'kubejs:iron_coin')
	
	event.shapeless('5x kubejs:iron_coin', 'kubejs:gold_coin')
	
	event.shapeless('kubejs:gold_coin', ['kubejs:iron_coin', 'kubejs:iron_coin', 'kubejs:iron_coin', 'kubejs:iron_coin', 'kubejs:iron_coin'])
	
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
	
	// Remove gold armor recipes
	event.remove({output: 'minecraft:golden_helmet'});
    event.remove({output: 'minecraft:golden_chestplate'});
    event.remove({output: 'minecraft:golden_leggings'});
    event.remove({output: 'minecraft:golden_boots'});

    // Remove diamond armor recipes
    event.remove({output: 'minecraft:diamond_helmet'});
    event.remove({output: 'minecraft:diamond_chestplate'});
    event.remove({output: 'minecraft:diamond_leggings'});
    event.remove({output: 'minecraft:diamond_boots'});

    // Remove netherite armor recipes
    event.remove({output: 'minecraft:netherite_helmet'});
    event.remove({output: 'minecraft:netherite_chestplate'});
    event.remove({output: 'minecraft:netherite_leggings'});
    event.remove({output: 'minecraft:netherite_boots'});
})

ServerEvents.tags('item', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	
	// Steel Weapons & Shields
	
	event.add('forge:weapon_steel', 'magistuarmory:steel_stylet')
	event.add('forge:weapon_steel', 'magistuarmory:steel_shortsword')
	event.add('forge:weapon_steel', 'magistuarmory:steel_katzbalger')
	event.add('forge:weapon_steel', 'magistuarmory:steel_pike')
	event.add('forge:weapon_steel', 'magistuarmory:steel_ranseur')
	event.add('forge:weapon_steel', 'magistuarmory:steel_ahlspiess')
	event.add('forge:weapon_steel', 'magistuarmory:steel_chivalrylance')
	event.add('forge:weapon_steel', 'magistuarmory:steel_bastardsword')
	event.add('forge:weapon_steel', 'magistuarmory:steel_estoc')
	event.add('forge:weapon_steel', 'magistuarmory:steel_claymore')
	event.add('forge:weapon_steel', 'magistuarmory:steel_zweihander')
	event.add('forge:weapon_steel', 'magistuarmory:steel_flamebladedsword')
	event.add('forge:weapon_steel', 'magistuarmory:steel_lochaberaxe')
	event.add('forge:weapon_steel', 'magistuarmory:steel_concavehalberd')
	event.add('forge:weapon_steel', 'magistuarmory:steel_heavymace')
	event.add('forge:weapon_steel', 'magistuarmory:steel_heavywarhammer')
	event.add('forge:weapon_steel', 'magistuarmory:steel_lucernhammer')
	event.add('forge:weapon_steel', 'magistuarmory:steel_morgenstern')
	event.add('forge:weapon_steel', 'magistuarmory:steel_chainmorgenstern')
	event.add('forge:weapon_steel', 'magistuarmory:steel_guisarme')
	
	event.add('forge:shield_steel', 'magistuarmory:steel_heatershield')
	event.add('forge:shield_steel', 'magistuarmory:steel_target')
	event.add('forge:shield_steel', 'magistuarmory:steel_buckler')
	event.add('forge:shield_steel', 'magistuarmory:steel_rondache')
	event.add('forge:shield_steel', 'magistuarmory:steel_tartsche')
	event.add('forge:shield_steel', 'magistuarmory:steel_ellipticalshield')
	event.add('forge:shield_steel', 'magistuarmory:steel_roundshield')
	event.add('forge:shield_steel', 'magistuarmory:steel_pavese')
	event.add('forge:shield_steel', 'magistuarmory:steel_kiteshield')
		
	// Iron Weapons & Shields
	
	event.add('forge:weapon_iron', 'magistuarmory:iron_stylet')
	event.add('forge:weapon_iron', 'magistuarmory:iron_shortsword')
	event.add('forge:weapon_iron', 'magistuarmory:iron_katzbalger')
	event.add('forge:weapon_iron', 'magistuarmory:iron_pike')
	event.add('forge:weapon_iron', 'magistuarmory:iron_ranseur')
	event.add('forge:weapon_iron', 'magistuarmory:iron_ahlspiess')
	event.add('forge:weapon_iron', 'magistuarmory:iron_chivalrylance')
	event.add('forge:weapon_iron', 'magistuarmory:iron_bastardsword')
	event.add('forge:weapon_iron', 'magistuarmory:iron_estoc')
	event.add('forge:weapon_iron', 'magistuarmory:iron_claymore')
	event.add('forge:weapon_iron', 'magistuarmory:iron_zweihander')
	event.add('forge:weapon_iron', 'magistuarmory:iron_flamebladedsword')
	event.add('forge:weapon_iron', 'magistuarmory:iron_lochaberaxe')
	event.add('forge:weapon_iron', 'magistuarmory:iron_concavehalberd')
	event.add('forge:weapon_iron', 'magistuarmory:iron_heavymace')
	event.add('forge:weapon_iron', 'magistuarmory:iron_heavywarhammer')
	event.add('forge:weapon_iron', 'magistuarmory:iron_lucernhammer')
	event.add('forge:weapon_iron', 'magistuarmory:iron_morgenstern')
	event.add('forge:weapon_iron', 'magistuarmory:iron_chainmorgenstern')
	event.add('forge:weapon_iron', 'magistuarmory:iron_guisarme')
	
	event.add('forge:shield_iron', 'magistuarmory:iron_heatershield')
	event.add('forge:shield_iron', 'magistuarmory:iron_target')
	event.add('forge:shield_iron', 'magistuarmory:iron_buckler')
	event.add('forge:shield_iron', 'magistuarmory:iron_rondache')
	event.add('forge:shield_iron', 'magistuarmory:iron_tartsche')
	event.add('forge:shield_iron', 'magistuarmory:iron_ellipticalshield')
	event.add('forge:shield_iron', 'magistuarmory:iron_roundshield')
	event.add('forge:shield_iron', 'magistuarmory:iron_pavese')
	event.add('forge:shield_iron', 'magistuarmory:iron_kiteshield')
	
	// Gold Weapons & Shields
	
	event.add('forge:weapon_gold', 'magistuarmory:gold_stylet')
	event.add('forge:weapon_gold', 'magistuarmory:gold_shortsword')
	event.add('forge:weapon_gold', 'magistuarmory:gold_katzbalger')
	event.add('forge:weapon_gold', 'magistuarmory:gold_pike')
	event.add('forge:weapon_gold', 'magistuarmory:gold_ranseur')
	event.add('forge:weapon_gold', 'magistuarmory:gold_ahlspiess')
	event.add('forge:weapon_gold', 'magistuarmory:gold_chivalrylance')
	event.add('forge:weapon_gold', 'magistuarmory:gold_bastardsword')
	event.add('forge:weapon_gold', 'magistuarmory:gold_estoc')
	event.add('forge:weapon_gold', 'magistuarmory:gold_claymore')
	event.add('forge:weapon_gold', 'magistuarmory:gold_zweihander')
	event.add('forge:weapon_gold', 'magistuarmory:gold_flamebladedsword')
	event.add('forge:weapon_gold', 'magistuarmory:gold_lochaberaxe')
	event.add('forge:weapon_gold', 'magistuarmory:gold_concavehalberd')
	event.add('forge:weapon_gold', 'magistuarmory:gold_heavymace')
	event.add('forge:weapon_gold', 'magistuarmory:gold_heavywarhammer')
	event.add('forge:weapon_gold', 'magistuarmory:gold_lucernhammer')
	event.add('forge:weapon_gold', 'magistuarmory:gold_morgenstern')
	event.add('forge:weapon_gold', 'magistuarmory:gold_chainmorgenstern')
	event.add('forge:weapon_gold', 'magistuarmory:gold_guisarme')
	
	event.add('forge:shield_gold', 'magistuarmory:gold_heatershield')
	event.add('forge:shield_gold', 'magistuarmory:gold_target')
	event.add('forge:shield_gold', 'magistuarmory:gold_buckler')
	event.add('forge:shield_gold', 'magistuarmory:gold_rondache')
	event.add('forge:shield_gold', 'magistuarmory:gold_tartsche')
	event.add('forge:shield_gold', 'magistuarmory:gold_ellipticalshield')
	event.add('forge:shield_gold', 'magistuarmory:gold_roundshield')
	event.add('forge:shield_gold', 'magistuarmory:gold_pavese')
	event.add('forge:shield_gold', 'magistuarmory:gold_kiteshield')
	
	// Diamond Weapons & Shields
	
	event.add('forge:weapon_diamond', 'magistuarmory:diamond_stylet')
	event.add('forge:weapon_diamond', 'magistuarmory:diamond_shortsword')
	event.add('forge:weapon_diamond', 'magistuarmory:diamond_katzbalger')
	event.add('forge:weapon_diamond', 'magistuarmory:diamond_pike')
	event.add('forge:weapon_diamond', 'magistuarmory:diamond_ranseur')
	event.add('forge:weapon_diamond', 'magistuarmory:diamond_ahlspiess')
	event.add('forge:weapon_diamond', 'magistuarmory:diamond_chivalrylance')
	event.add('forge:weapon_diamond', 'magistuarmory:diamond_bastardsword')
	event.add('forge:weapon_diamond', 'magistuarmory:diamond_estoc')
	event.add('forge:weapon_diamond', 'magistuarmory:diamond_claymore')
	event.add('forge:weapon_diamond', 'magistuarmory:diamond_zweihander')
	event.add('forge:weapon_diamond', 'magistuarmory:diamond_flamebladedsword')
	event.add('forge:weapon_diamond', 'magistuarmory:diamond_lochaberaxe')
	event.add('forge:weapon_diamond', 'magistuarmory:diamond_concavehalberd')
	event.add('forge:weapon_diamond', 'magistuarmory:diamond_heavymace')
	event.add('forge:weapon_diamond', 'magistuarmory:diamond_heavywarhammer')
	event.add('forge:weapon_diamond', 'magistuarmory:diamond_lucernhammer')
	event.add('forge:weapon_diamond', 'magistuarmory:diamond_morgenstern')
	event.add('forge:weapon_diamond', 'magistuarmory:diamond_chainmorgenstern')
	event.add('forge:weapon_diamond', 'magistuarmory:diamond_guisarme')
	
	event.add('forge:shield_diamond', 'magistuarmory:diamond_heatershield')
	event.add('forge:shield_diamond', 'magistuarmory:diamond_target')
	event.add('forge:shield_diamond', 'magistuarmory:diamond_buckler')
	event.add('forge:shield_diamond', 'magistuarmory:diamond_rondache')
	event.add('forge:shield_diamond', 'magistuarmory:diamond_tartsche')
	event.add('forge:shield_diamond', 'magistuarmory:diamond_ellipticalshield')
	event.add('forge:shield_diamond', 'magistuarmory:diamond_roundshield')
	event.add('forge:shield_diamond', 'magistuarmory:diamond_pavese')
	event.add('forge:shield_diamond', 'magistuarmory:diamond_kiteshield')
	
	// Copper Weapons & Shields
	
	event.add('forge:weapon_copper', 'magistuarmory:copper_stylet')
	event.add('forge:weapon_copper', 'magistuarmory:copper_shortsword')
	event.add('forge:weapon_copper', 'magistuarmory:copper_katzbalger')
	event.add('forge:weapon_copper', 'magistuarmory:copper_pike')
	event.add('forge:weapon_copper', 'magistuarmory:copper_ranseur')
	event.add('forge:weapon_copper', 'magistuarmory:copper_ahlspiess')
	event.add('forge:weapon_copper', 'magistuarmory:copper_chivalrylance')
	event.add('forge:weapon_copper', 'magistuarmory:copper_bastardsword')
	event.add('forge:weapon_copper', 'magistuarmory:copper_estoc')
	event.add('forge:weapon_copper', 'magistuarmory:copper_claymore')
	event.add('forge:weapon_copper', 'magistuarmory:copper_zweihander')
	event.add('forge:weapon_copper', 'magistuarmory:copper_flamebladedsword')
	event.add('forge:weapon_copper', 'magistuarmory:copper_lochaberaxe')
	event.add('forge:weapon_copper', 'magistuarmory:copper_concavehalberd')
	event.add('forge:weapon_copper', 'magistuarmory:copper_heavymace')
	event.add('forge:weapon_copper', 'magistuarmory:copper_heavywarhammer')
	event.add('forge:weapon_copper', 'magistuarmory:copper_lucernhammer')
	event.add('forge:weapon_copper', 'magistuarmory:copper_morgenstern')
	event.add('forge:weapon_copper', 'magistuarmory:copper_chainmorgenstern')
	event.add('forge:weapon_copper', 'magistuarmory:copper_guisarme')
	
	event.add('forge:shield_copper', 'magistuarmory:copper_heatershield')
	event.add('forge:shield_copper', 'magistuarmory:copper_target')
	event.add('forge:shield_copper', 'magistuarmory:copper_buckler')
	event.add('forge:shield_copper', 'magistuarmory:copper_rondache')
	event.add('forge:shield_copper', 'magistuarmory:copper_tartsche')
	event.add('forge:shield_copper', 'magistuarmory:copper_ellipticalshield')
	event.add('forge:shield_copper', 'magistuarmory:copper_roundshield')
	event.add('forge:shield_copper', 'magistuarmory:copper_pavese')
	event.add('forge:shield_copper', 'magistuarmory:copper_kiteshield')
	
	// Netherite Weapons & Shields
	
	event.add('forge:weapon_netherite', 'magistuarmory:netherite_stylet')
	event.add('forge:weapon_netherite', 'magistuarmory:netherite_shortsword')
	event.add('forge:weapon_netherite', 'magistuarmory:netherite_katzbalger')
	event.add('forge:weapon_netherite', 'magistuarmory:netherite_pike')
	event.add('forge:weapon_netherite', 'magistuarmory:netherite_ranseur')
	event.add('forge:weapon_netherite', 'magistuarmory:netherite_ahlspiess')
	event.add('forge:weapon_netherite', 'magistuarmory:netherite_chivalrylance')
	event.add('forge:weapon_netherite', 'magistuarmory:netherite_bastardsword')
	event.add('forge:weapon_netherite', 'magistuarmory:netherite_estoc')
	event.add('forge:weapon_netherite', 'magistuarmory:netherite_claymore')
	event.add('forge:weapon_netherite', 'magistuarmory:netherite_zweihander')
	event.add('forge:weapon_netherite', 'magistuarmory:netherite_flamebladedsword')
	event.add('forge:weapon_netherite', 'magistuarmory:netherite_lochaberaxe')
	event.add('forge:weapon_netherite', 'magistuarmory:netherite_concavehalberd')
	event.add('forge:weapon_netherite', 'magistuarmory:netherite_heavymace')
	event.add('forge:weapon_netherite', 'magistuarmory:netherite_heavywarhammer')
	event.add('forge:weapon_netherite', 'magistuarmory:netherite_lucernhammer')
	event.add('forge:weapon_netherite', 'magistuarmory:netherite_morgenstern')
	event.add('forge:weapon_netherite', 'magistuarmory:netherite_chainmorgenstern')
	event.add('forge:weapon_netherite', 'magistuarmory:netherite_guisarme')
	
	event.add('forge:shield_netherite', 'magistuarmory:netherite_heatershield')
	event.add('forge:shield_netherite', 'magistuarmory:netherite_target')
	event.add('forge:shield_netherite', 'magistuarmory:netherite_buckler')
	event.add('forge:shield_netherite', 'magistuarmory:netherite_rondache')
	event.add('forge:shield_netherite', 'magistuarmory:netherite_tartsche')
	event.add('forge:shield_netherite', 'magistuarmory:netherite_ellipticalshield')
	event.add('forge:shield_netherite', 'magistuarmory:netherite_roundshield')
	event.add('forge:shield_netherite', 'magistuarmory:netherite_pavese')
	event.add('forge:shield_netherite', 'magistuarmory:netherite_kiteshield')
	
	// Stone Weapons & Shields
	
	event.add('forge:weapon_stone', 'magistuarmory:stone_stylet')
	event.add('forge:weapon_stone', 'magistuarmory:stone_shortsword')
	event.add('forge:weapon_stone', 'magistuarmory:stone_katzbalger')
	event.add('forge:weapon_stone', 'magistuarmory:stone_pike')
	event.add('forge:weapon_stone', 'magistuarmory:stone_ranseur')
	event.add('forge:weapon_stone', 'magistuarmory:stone_ahlspiess')
	event.add('forge:weapon_stone', 'magistuarmory:stone_chivalrylance')
	event.add('forge:weapon_stone', 'magistuarmory:stone_bastardsword')
	event.add('forge:weapon_stone', 'magistuarmory:stone_estoc')
	event.add('forge:weapon_stone', 'magistuarmory:stone_claymore')
	event.add('forge:weapon_stone', 'magistuarmory:stone_zweihander')
	event.add('forge:weapon_stone', 'magistuarmory:stone_flamebladedsword')
	event.add('forge:weapon_stone', 'magistuarmory:stone_lochaberaxe')
	event.add('forge:weapon_stone', 'magistuarmory:stone_concavehalberd')
	event.add('forge:weapon_stone', 'magistuarmory:stone_heavymace')
	event.add('forge:weapon_stone', 'magistuarmory:stone_heavywarhammer')
	event.add('forge:weapon_stone', 'magistuarmory:stone_lucernhammer')
	event.add('forge:weapon_stone', 'magistuarmory:stone_morgenstern')
	event.add('forge:weapon_stone', 'magistuarmory:stone_chainmorgenstern')
	event.add('forge:weapon_stone', 'magistuarmory:stone_guisarme')
	
	event.add('forge:shield_stone', 'magistuarmory:stone_heatershield')
	event.add('forge:shield_stone', 'magistuarmory:stone_target')
	event.add('forge:shield_stone', 'magistuarmory:stone_buckler')
	event.add('forge:shield_stone', 'magistuarmory:stone_rondache')
	event.add('forge:shield_stone', 'magistuarmory:stone_tartsche')
	event.add('forge:shield_stone', 'magistuarmory:stone_ellipticalshield')
	event.add('forge:shield_stone', 'magistuarmory:stone_roundshield')
	event.add('forge:shield_stone', 'magistuarmory:stone_pavese')
	event.add('forge:shield_stone', 'magistuarmory:stone_kiteshield')
	
	// Wood Weapons & Shields
	
	event.add('forge:weapon_wood', 'magistuarmory:wood_stylet')
	event.add('forge:weapon_wood', 'magistuarmory:wood_shortsword')
	event.add('forge:weapon_wood', 'magistuarmory:wood_katzbalger')
	event.add('forge:weapon_wood', 'magistuarmory:wood_pike')
	event.add('forge:weapon_wood', 'magistuarmory:wood_ranseur')
	event.add('forge:weapon_wood', 'magistuarmory:wood_ahlspiess')
	event.add('forge:weapon_wood', 'magistuarmory:wood_chivalrylance')
	event.add('forge:weapon_wood', 'magistuarmory:wood_bastardsword')
	event.add('forge:weapon_wood', 'magistuarmory:wood_estoc')
	event.add('forge:weapon_wood', 'magistuarmory:wood_claymore')
	event.add('forge:weapon_wood', 'magistuarmory:wood_zweihander')
	event.add('forge:weapon_wood', 'magistuarmory:wood_flamebladedsword')
	event.add('forge:weapon_wood', 'magistuarmory:wood_lochaberaxe')
	event.add('forge:weapon_wood', 'magistuarmory:wood_concavehalberd')
	event.add('forge:weapon_wood', 'magistuarmory:wood_heavymace')
	event.add('forge:weapon_wood', 'magistuarmory:wood_heavywarhammer')
	event.add('forge:weapon_wood', 'magistuarmory:wood_lucernhammer')
	event.add('forge:weapon_wood', 'magistuarmory:wood_morgenstern')
	event.add('forge:weapon_wood', 'magistuarmory:wood_chainmorgenstern')
	event.add('forge:weapon_wood', 'magistuarmory:wood_guisarme')
	
	event.add('forge:shield_wood', 'magistuarmory:wood_heatershield')
	event.add('forge:shield_wood', 'magistuarmory:wood_target')
	event.add('forge:shield_wood', 'magistuarmory:wood_buckler')
	event.add('forge:shield_wood', 'magistuarmory:wood_rondache')
	event.add('forge:shield_wood', 'magistuarmory:wood_tartsche')
	event.add('forge:shield_wood', 'magistuarmory:wood_ellipticalshield')
	event.add('forge:shield_wood', 'magistuarmory:wood_roundshield')
	event.add('forge:shield_wood', 'magistuarmory:wood_pavese')
	event.add('forge:shield_wood', 'magistuarmory:wood_kiteshield')
	
	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})