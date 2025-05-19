var iFileName = "Obojima Spells.js";
RequiredSheetVersion("13.1.14");

SourceList["OTftTG"] = {
   name: "Obojima Tales from the Tall Grass",
   abbreviation: "OTftTG",
   abbreviationSpellsheet : "O",
   group: "Third Party",
   date: "2024-12-31",
};

/*
 * Spells
 */

SpellsList["armament"] = {
	name : "Armament",
	source : [["OTftTG", 181]],
	classes : ["bard", "cleric", "paladin", "ranger", "wizard"],
	level : 1,
	school : "Conj",
	time : "1 a",
	range : "10 ft",
	rangeMetric : "3 m",
	components : "V,S,M",	
	compMaterial : "Metal powder",
	duration : "8 h",
	description : "Materialize 5 nonmagical simple or martial weapons of my choice in an unoccupied space I can see",
	descriptionFull : 
		"Up to five simple or martial weapons of my choice materialize in an unoccupied space I can see within range. The weapons are nonmagical, but they are well-made and stylistically look however I would like. The weapons vanish when the spell ends."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 2nd level or higher, I can summon three additional simple or martial weapons of my choice for each slot level above 1st.",
};

SpellsList["at your side"] = {
	name : "At Your Side",
	source : [["OTftTG", 181]],
	classes : ["bard", "cleric", "druid", "ranger", "wizard"],
	level : 2,
	school : "Trans",
	time : "1 a",
	range : "30 ft",
	rangeMetric : "9 m",
	components : "V,S",
	duration : "1 h",
	description : "Myself and up to three willing crea of my choice form an arcane bond; see B",
	descriptionFull : 
		"Myself and up to three other willing creatures of my choice within range form an arcane bond, which magically pulls me forward when moving towards each other. For the duration, each target’s speed increases by 5 feet, and whenever an affected creature ends its turn, other targets of the spell can use their reaction to move up to half their speed in the direction of another affected creature."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 3rd level or higher, I can target one additional creature for each slot level above 2nd.",
};

SpellsList["beast transmutation"] = {
	name : "Beast Transmutation",
	source : [["OTftTG", 182]],
	classes : ["bard", "druid", "ranger", "wizard"],
	level : 2,
	school : "Trans",
	time : "1 a",
	range : "30 ft",
	rangeMetric : "9 m",
	components : "S",
	duration : "Conc, 1 h",
	save : "Wis",
	description : "1 beast with > 0 HP save or transformed into humanoid of choice; see B",
	descriptionFull : 
		"This spell transforms a beast that I can see within range into a new humanoid form. An unwilling creature must succeed on a Wisdom saving throw to avoid the effect. The spell has no effect on a beast with 0 hit points."+
		"The transformation lasts for the duration, or until the target drops to 0 hit points or dies. The new form has the appearance of a humanoid of any race I choose. The target’s game statistics, excluding mental ability scores, are replaced by the statistics of a commoner. It retains its alignment and personality."+
		"The target assumes the hit points of its commoner form. When it reverts to its normal form, the beast returns to the number of hit points it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form. As long as the excess damage doesn’t reduce the beast’s normal form to 0 hit points, it isn’t knocked unconscious."+
		"The creature is limited in the actions it can perform by the nature of its new form."+
		AtHigherLevels +
		"When you cast this spell using a spell slot of 3rd level or higher, the spell’s duration increases by 1 hour for each slot level above 2nd.",
};

SpellsList["bubble lift"] = {
	name : "Bubble Lift",
	source : [["OTftTG", 182]],
	classes : ["druid", "sorcerer", "wizard"],
	level : 1,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	rangeMetric : "18 m",
	components : "V",	
	duration : "1 h",
	description : "Blow a bubble around an object that weighs 500 lbs or less causing it to float 4 ft; see B",
	descriptionFull : 
		"I blow a bubble around any solid, granular, or liquid object that weighs 500 pounds or less, causing it to float 4 feet off the ground. No matter what the contents of the bubble are, the bubble weighs 10 pounds and can be pushed using an action. Strong winds or effects that would push a creature also push the bubble. The bubble always floats at least 4 feet off the ground, and descends from a fall at a speed of 10 feet per round."+
		"As an action, a creature can pierce the outside of the bubble, causing it to pop and releasing its contents."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 2nd level or higher, I can increase the weight the bubble can lift by 500 pounds for each slot level above 1st.",
};

SpellsList["butterfly storm"] = {
	name : "Butterfly Storm",
	source : [["OTftTG", 182]],
	classes : ["druid", "ranger", "sorcerer", "warlock", "wizard"],
	level : 3,
	school : "Conj",
	time : "1 a",
	range : "120 ft",
	rangeMetric : "36 m",
	components : "V,S,M",	
	compMaterial : "Insect legs",
	duration : "Conc, 1 min",
	save : "Str",
	description : "20 ft rad sphere, diff terrain and heavily obscured, if crea leaves area STR save or pulled back; see B",
	descriptionFull : 
		"I create a chaotic cloud of butterflies in a 20-foot-radius sphere centered on a point I choose within range. The area is heavily obscured, and resting smoke or fog in the area is dispersed."+
		"Creatures of my choice in the area when I cast this spell ignore the following effects. For the duration, the affected area is difficult terrain. When a creature attempts to leave the spell’s area, it must make a Strength saving throw. On a failed save, it is pulled back to an unoccupied space closest to the center of the sphere.",
};

SpellsList["conjure ocean"] = {
	name : "Conjure Ocean",
	source : [["OTftTG", 182]],
	classes : ["druid", "ranger", "sorcerer", "wizard"],
	level : 3,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	rangeMetric : "18 m",
	components : "V,S,M",	
	compMaterial : "A piece of witch’s eye coral",
	duration : "Conc, 10 min",
	description : "Teleport 20 ft cube of water from ocean to area within visible range, crea can enter and exit water; see B",
	descriptionFull : 
		"I teleport a random 20-foot cube of water from the bottom of the ocean to an area that I can see within range. The water holds its cube shape as if held within a container. A creature can enter and exit the water as it normally would."+
		"When the spell ends, the water loses its shape, crashing to the ground and spreading outward. Any creature inside the water at this time is carried 30 feet in a random direction.",
};

SpellsList["control animal"] = {
	name : "Control Animal",
	source : [["OTftTG", 182]],
	classes : ["druid", "ranger", "sorcerer"],
	level : 2,
	school : "Ench",
	time : "1 a",
	range : "60 ft",
	rangeMetric : "18 m",
	components : "V,S,M",	
	compMaterial : "A bit of matted fur",
	duration : "Conc, 1 h",
	save : "Wis",
	description : "Crea CR 2 or lower, WIS save or I take total control, able to see and hear through the crea; see B",
	descriptionFull : 
		"Choose a beast that I can see within range. The beast is affected if it has a challenge rating of 2 or lower; otherwise, the spell fails. An affected creature must succeed on a Wisdom saving throw, or I take total and precise control of it, as my consciousness enters its body. While under the effect of this spell, I can see through the creature’s eyes and hear what it hears, gaining the benefits of any special senses that the creature has. I can move and take actions as the creature and can perform tasks the creature could feasibly perform. During this time, my body is considered unconscious; this doesn’t affect my ability to concentrate on this spell."+
		"If the creature takes damage, I must make a Wisdom (Animal Handling) check, with a DC equal to 10 or half the damage it took, whichever number is higher. On a failure, the creature regains control of its body, and the spell ends."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 3rd level or higher, the maximum challenge rating affected by this spell increases by 1 for each slot level above 2nd.",
};

SpellsList["counterspy"] = {
	name : "Counterspy",
	source : [["OTftTG", 183]],
	classes : ["bard", "cleric", "druid", "warlock", "wizard"],
	level : 2,
	school : "Abjur",
	time : "10 min",
	range : "5 ft",
	rangeMetric : "1.5 m",
	components : "V,S,M",	
	compMaterial : "A bag of sand and six candles",
	duration : "1 h",
	description : "Alerted if crea outside of 10 ft circle can see or hear me through magical or nonmagical means; see B",
	descriptionFull : 
		"I create an intricate arcane circle made of candles and sand centered on a point on the ground within range. The circle can have a radius of 10 feet or less. If at any point before the spell ends a creature outside the circle can see or hear me through magical or nonmagical means, the candle’s flames will change color. If a spell or magical effect was used, I am aware of it and understand the extent of its effects.",
};

SpellsList["create spirit train stop"] = {
	name : "Create Spirit Train Stop",
	source : [["OTftTG", 183]],
	classes : ["bard", "sorcerer", "wizard"],
	level : 5,
	school : "Conj",
	time : "1 min",
	range : "10 ft",
	rangeMetric : "3 m",
	components : "V,S,M\u2020",	
	compMaterial : "A blank ticket and high quality ink worth at least 50 gp",
	duration : "1 h",
	description : "Summon a train for transport for me and up to 8 other creartures; see B",
	descriptionFull : 
		"As I cast the spell, I inscribe onto my blank ticket the code of a permanent train stop of my choice whose stop number I am already familiar with. A shimmering sign and small bench appears behind me as the Wandering Line arrives on tracks which materialize before it. My ticket allows passage for me and up to eight creatures of my choice. It takes 1 hour to arrive at my destination, no matter the distance."+
		"During my travel other stops may occur and are determined by the GM. If myself or any friendly creature chooses to take a short rest while traveling and regains hit points at the end of the short rest by spending one or more Hit Dice, we also regain an extra 1d10 hit points."+
		"There are countless train stops, each of which includes a unique train stop number. When I first gain the ability to cast this spell, I learn the code for two destinations, determined by the GM. I can learn additional codes during my adventures. I can commit a new code sequence to memory after studying it for 1 minute.",
};

SpellsList["crustacean form"] = {
	name : "Crustacean Form",
	source : [["OTftTG", 184]],
	classes : ["sorcerer", "wizard"],
	level : 6,
	school : "Abjur",
	time : "1 a",
	range : "Self",
	rangeMetric : "Self",
	components : "V,S,M",	
	compMaterial : "A rust crab shell",
	duration : "Conc, 1 min",
	description : "AC 20, swim spd 40 ft, blindsight 30 ft, BA to make melee weapon attack, 1d10 Bludg. dmg; see B",
	descriptionFull : 
		"I create a large ethereal crustacean form around my body, which protects and aids me in combat. For the duration, my Armor Class becomes 20 (if it wasn’t already higher), I gain a swimming speed of 40 feet, and I gain blindsight out to a range of 30 feet. In addition, I can use my bonus action to make a melee weapon attack using my claws. This attack uses my spell attack bonus and deals 1d10 bludgeoning damage on a hit."+
		"Additionally, my ethereal shell has a damage threshold of 15 hit points. A damage threshold gives me immunity to all damage unless it is an amount of damage equal to or greater than the threshold value, in which case I take damage as normal. Any damage that fails to meet or exceed the shell’s damage threshold is considered superficial and doesn’t reduce any hit points.",
};

SpellsList["dara blocks"] = {
	name : "Dara Blocks",
	source : [["OTftTG", 184]],
	classes : ["sorcerer", "warlock", "wizard"],
	level : 3,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	rangeMetric : "18 m",
	components : "V,S,M",	
	compMaterial : "A pinch of sand and a piece of pottery",
	duration : "1 min",
	description : "Create five 1 ft cubes that are invisible to non designated creatures; see B",
	descriptionFull : 
		"I create five 1-foot cubes of magical force known as dara blocks. Each dara block appears in a different unoccupied space of my choice within range and becomes magically fixed in place. The blocks are invisible to all creatures except me and any creature I designate when I cast the spell. A creature that can see the dara blocks (including one benefiting from see invisibility or truesight) sees a luminous cube made of a transparent, dark green light."+
		"A block fixed in the air can hold up to 5,000 pounds of weight. More weight causes the block to fall. A creature can use an action to make a Strength check against my spell save DC, moving the fixed block up to 10 feet on a success."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 4th level or higher, I can create two additional dara blocks for each slot level above 3rd.",
};

SpellsList["divine arrow"] = {
	name : "Divine Arrow",
	source : [["OTftTG", 184]],
	classes : ["bard", "cleric", "warlock"],
	level : 7,
	school : "Evoc",
	time : "1 a",
	range : "120 ft",
	rangeMetric : "36 m",
	components : "V,S,M\u0192",	
	compMaterial : "A pearl worth 100 gp",
	duration : "Conc, 1 min",
	description : "Spell attack for 4d10 Force dmg, target becomes vulnerable to one of the following dmg types; see B",
	descriptionFull : 
		"I fire an angelic arrow from a bow made of light that materializes in my hands. Make a ranged spell attack against a creature within range. On a hit, the target takes 4d10 force damage, and until the spell ends, it becomes vulnerable to one of the following damage types of my choice: acid, cold, fire, lightning, necrotic, radiant, or thunder. If a creature has immunity to the selected damage type, it instead has resistance to that type for the duration; if a creature has resistance to the selected damage type, it loses that resistance for the duration.",
};

SpellsList["duplicate"] = {
	name : "Duplicate",
	source : [["OTftTG", 184]],
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	level : 1,
	school : "Conj",
	time : "1 a",
	range : "5 ft",
	rangeMetric : "1.5 m",
	components : "S,M",	
	compMaterial : "Copper powder and wax",
	duration : "1 h",
	description : "Replicate an obj less than 25 lbs except for magical properties, Investigation to see duplication; see B",
	descriptionFull : 
		"I create an exact replica of an object I can see within range that weighs no more than 25 pounds. At first glance, the two objects are indistinguishable from each other and the duplicate functions as if it were the original, except for any magical properties the original object may have. The duplicate disappears when the spell ends."+
		"If a creature uses its action to examine the duplicate, the creature can determine that it is a replica with a successful Intelligence (Investigation) check against my spell save DC."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 2nd or 3rd level, the duration of the spell increases to 8 hours. When I use a spell slot of 4th level or higher, the duration of the spell increases to 24 hours.",
};

SpellsList["ember belly"] = {
	name : "Ember Belly",
	source : [["OTftTG", 184]],
	classes : ["bard", "ranger", "sorcerer", "wizard"],
	level : 2,
	school : "Evoc",
	time : "1 a",
	range : "Self",
	rangeMetric : "Self",
	components : "S,M\u2020",	
	compMaterial : "A flask of oil",
	duration : "8 h",
	save : "Dex",
	description : "Bonus Action to expel flame 30 ft long, 5 ft wide, DEX save or take 2d10 Fire dmg; half on success",
	descriptionFull : 
		"I swallow the oil consumed in the casting of the spell. Once before the spell ends, I can exhale the oil as a bonus action, igniting it as I expel it from my body. Each creature in a 5-foot-wide, 30-foot-long line must make a Dexterity saving throw, taking 2d10 fire damage on a failed save, or half as much damage on a successful one."+
		"Once you exhale the oil, the spell ends.",
};

SpellsList["festival king"] = {
	name : "Festival King",
	source : [["OTftTG", 185]],
	classes : ["bard", "wizard"],
	level : 5,
	school : "Ench",
	time : "1 a",
	range : "30 ft",
	rangeMetric : "9 m",
	components : "V,S,M",	
	compMaterial : "A small ribbon",
	duration : "Conc, 1 min",
	save : "Cha",
	description : "Designate a Festival King, crea within 20 ft CHA save or be charmed, spend action & BA; see B",
	descriptionFull : 
		"Choose a creature within range. A gaudy crown and cape appear on the target, accompanied by a disembodied arrangement of brass instruments. For the duration, the target becomes the Festival King and has an aura of importance that emanates from them. Any creature that moves to a space within 20 feet of the Festival King for the first time on a turn or starts its turn there, must make a Charisma saving throw. A creature that can’t be charmed succeeds on this saving throw automatically. On a failed save, the creature becomes enamored with the Festival King, chanting, and dancing around them. While under the effects of the spell, creatures spend their action and bonus action at the start of their turn giving all of their attention and admiration to the Festival King."+
		"If a creature starts its turn outside of the Festival King’s aura, it is no longer under the effects of the spell.",
};

SpellsList["forest guard"] = {
	name : "Forest Guard",
	source : [["OTftTG", 185]],
	classes : ["druid", "ranger", "sorcerer"],
	level : 1,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	rangeMetric : "18 m",
	components : "V,S",	
	duration : "10 min",
	description : "Create Small animated shrub, hostile crea w/in 10 ft of shrub are targetted by spell attack to 1d4 Slash dmg; see B",
	descriptionFull : 
		"I create a Small animated shrub, which grows from the ground in an unoccupied space of my choice that I can see within range. The shrub has a number of human-like characteristics, such as a wooden body and face, but it lacks hands and arms and can’t move."+
		"Any creature hostile to me that moves to a space within 10 feet of the shrub for the first time on a turn or starts its turn there, is targeted by the shrub’s leaf attack. The shrub makes a ranged weapon attack, using my spell attack modifier. On a hit, a creature takes 1d4 slashing damage."+
		"On my turn, I can use a bonus action to make a shrub use its leaf attack against one creature within 10 feet of it. If multiple shrubs created by me are within 10 feet of the target, this attack deals 1d4 slashing damage per shrub on a hit."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 2nd level or higher, I can create one additional shrub for every two slot levels above 1st.",
};

SpellsList["gift"] = {
	name : "Gift",
	source : [["OTftTG", 185]],
	classes : ["bard", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
	level : 1,
	school : "Evoc",
	time : "1 a",
	range : "30 ft",
	rangeMetric : "9 m",
	components : "V,S",	
	duration : "Instantaneous",
	description : "Choose one crea within visible range, I take 1d20 Necro dmg, target regains HP equal to dmg I took",
	descriptionFull : 
		"Choose a creature I can see within range. I take 1d20 necrotic damage, and the target regains hit points equal to the amount of damage I took.",
};

SpellsList["jolt"] = {
	name : "Jolt",
	source : [["OTftTG", 185]],
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "30 ft",
	rangeMetric : "9 m",
	components : "V,S",	
	duration : "Instantaneous",
	description : "1d8 Lightning dmg, alternatively, target a machine and turn it on temporarily for 18 sec",
	descriptionCantripDie : "1 creature that I can see save or `CD`d8 Lightning dmg",
	descriptionFull : 
		"A jolt of electricity springs from my hand towards a creature I can see within range. Make a ranged spell attack against the target. On a hit, the target takes 1d8 lightning damage."+
		"Alternatively, I can target a machine within range and temporarily turn it on, allowing it to function as if it were whelmed by a spirit or permanently enchanted. Machines targeted by this spell stay powered for 18 seconds before turning back off. For a machine to function using this spell, it must still be in working condition."+
		"The spell’s damage increases by 1d8 when I reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
};

SpellsList["light snare"] = {
	name : "Light Snare",
	source : [["OTftTG", 185]],
	classes : ["bard", "cleric", "sorcerer", "warlock", "wizard"],
	level : 3,
	school : "Evoc",
	time : "1 a",
	range : "60 ft",
	rangeMetric : "18 m",
	components : "V,S",	
	duration : "Instantaneous",
	description : "Ranged spell attack, on hit target is restrained until end of its next turn",
	descriptionFull : 
		"A shimmering band of light streaks toward a target within range and envelops it in a spectacular burst of light. Make a ranged spell attack against the target. On a hit, the target is restrained, and it is magically fixed in place until the end of its next turn.",
};

SpellsList["mass levitate"] = {
	name : "Mass Levitate",
	source : [["OTftTG", 186]],
	classes : ["sorcerer", "wizard"],
	level : 5,
	school : "Trans",
	time : "1 a",
	range : "60 ft",
	rangeMetric : "18 m",
	components : "V,S,M",	
	compMaterial : "A small leather loop",
	duration : "Conc, 10 min",
	save : "Con",
	description : "6 crea/obj up to 500 lb save or rise vertically, up to 20 ft; 1 a (move a if self) move up/down 20 ft",
	descriptionFull : 
		"Six creatures or loose objects of my choice that I can see within range rise vertically, up to 20 feet, and remain suspended there for the duration. The spell can levitate a target that weighs up to 500 pounds. An unwilling creature that succeeds on a Constitution saving throw is unaffected."+
		"A target can move only by pushing or pulling against a fixed object or surface within reach (such as a wall or a ceiling), which allows it to move as if it were climbing. I can change the altitude of any number of targets by up to 20 feet in either direction on my turn. If I am one of the targets, I can move up or down as part of my move. Otherwise, I can use my action to move the targets, which must remain within the spell’s range."+
		"When the spell ends, the targets float gently to the ground if it is still aloft.",
};

SpellsList["monkey’s grasp"] = {
	name : "Monkey’s Grasp",
	source : [["OTftTG", 186]],
	classes : ["druid", "ranger", "sorcerer"],
	level : 2,
	school : "Evoc",
	time : "1 a",
	range : "120 ft",
	rangeMetric : "36 m",
	components : "V,S",	
	duration : "Conc, 1 min",
	description : "Summoned paw grapples target, target takes 1d8 Necro dmg at start of its turn, action to escape; see B",
	descriptionFull : 
		"I summon a large, ethereal monkey paw that rises up and grasps at a Huge or smaller creature on the ground I can see within range. The paw attempts to grapple the target, using my spellcasting ability modifier to resolve the grapple. If I lose the contest, the paw disappears, and the spell ends."+
		"While grappled by the paw, a target takes 1d8 necrotic damage at the start of each of its turns. The target can use its action to attempt to escape the grapple as normal. When the grapple is broken, the paw disappears, and the spell ends."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 3rd level or higher, I can target one additional creature for each slot level above 2nd, summoning a separate monkey paw for each target. When I do so, the spell doesn’t end until the last paw disappears. The creatures must be within 60 feet of each other when I target them.",
};

SpellsList["mushroom ballista"] = {
	name : "Mushroom Ballista",
	source : [["OTftTG", 186]],
	classes : ["druid", "ranger"],
	level : 2,
	school : "Trans",
	time : "1 bns",
	range : "Touch",
	rangeMetric : "Touch",
	components : "V",	
	duration : "1 h",
	save : "Dex",
	description : "Imbue ammo with magic, crea hit takes 1d6 Poison dmg and DEX save or be pushed back; see B",
	descriptionFull : 
		"I touch one to three pieces of ammunition and imbue them with a unique toadstool magic, causing them to grow plump green mushrooms around or at the tip of the ammunition."+
		"When a creature is hit with a ranged weapon attack using the ammunition, it takes an extra 1d6 poison damage and must make a Dexterity saving throw. On a failed save, the creature is pushed back a number of feet equal to the damage taken (rounded up to the nearest 5 feet) to a maximum of 15 feet. Whether the attack hits or misses, the spell then ends on that piece of ammunition."+
		"If I cast this spell again, the spell ends on any ammunition still affected by my previous casting.",
};

SpellsList["obscure object"] = {
	name : "Obscure Object",
	source : [["OTftTG", 187]],
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	level : 2,
	school : "Illus",
	time : "1 a",
	range : "30 ft",
	rangeMetric : "9 m",
	components : "V,S",	
	duration : "Conc, 1 h",
	description : "Obj no larger than 5 ft cube and not worn by a crea within visible range becomes invisible for 1h",
	descriptionFull : 
		"An object I can see within range becomes invisible until the spell ends. The object can be no larger than a 5-foot cube, and it can’t be worn by a creature.",
};

SpellsList["origami bird swarm"] = {
	name : "Origami Bird Swarm",
	source : [["OTftTG", 187]],
	classes : ["bard", "cleric", "warlock"],
	level : 5,
	school : "Trans",
	time : "1 a",
	range : "300 ft",
	rangeMetric : "90 m",
	components : "V,S,M\u2020",	
	compMaterial : "Fine papers worth 10 gp",
	duration : "Instantaneous",
	description : "If target w/in 30 ft, 8d6 Slash dmg; further than 30 ft, swarm move til reaches, 1d8 Slash per bird; see B",
	descriptionFull : 
		"A swarm of eight origami birds erupts from the stack of papers consumed in the casting of the spell and flies toward a creature I can see within range. If the target is within 30 feet of me when I cast the spell, the swarm collides with the target, dealing 8d6 slashing damage to it, and the birds disappear."+
		"If the target is farther than 30 feet away from me when I cast the spell, the swarm travels at a rate of 30 feet per round in the direction of the target, ignoring difficult terrain and moving around creatures and other obstructions as needed. While the swarm is traveling, it obstructs a 5-foot-cube area as if it were a Medium creature."+
		"While the swarm is traveling, it can be attacked. It has an AC equal to my spell save DC. For every attack that hits the swarm, the number of birds in the swarm is reduced by one."+
		"At the start of my turn on the round that the swarm reaches its target, the target takes 1d6 slashing damage for each bird remaining in the swarm. The birds then disappear."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 6th level or higher, the number of birds in the swarm increases by two for each slot level above 5th; if the target is within 30 feet of me when I cast the spell, it takes an extra 2d6 slashing damage for each slot level above 5th.",
};

SpellsList["pacify monster"] = {
	name : "Pacify Monster",
	source : [["OTftTG", 187]],
	classes : ["bard", "cleric", "druid", "sorcerer", "warlock", "wizard"],
	level : 4,
	school : "Ench",
	time : "1 a",
	range : "60 ft",
	rangeMetric : "18 m",
	components : "V,S,M",	
	compMaterial : "A gull’s feather",
	duration : "Conc, 1 min",
	save : "Wis",
	description : "Monster WIS save or pacified, able to repeat save at end of its turns; see B",
	descriptionFull : 
		"I attempt to pacify a creature I can see within range. The target must make a Wisdom saving throw. If it fails the save, it is pacified by me until the spell ends. A pacified creature can’t attack, cast a spell that affects an enemy, or deal damage to another creature. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 5th level or higher, I can target one additional creature for each slot level above 4th. The creatures must be within 30 feet of each other when I target them.",
};

SpellsList["pacify person"] = {
	name : "Pacify Person",
	source : [["OTftTG", 187]],
	classes : ["bard", "cleric", "druid", "sorcerer", "warlock", "wizard"],
	level : 1,
	school : "Ench",
	time : "1 a",
	range : "60 ft",
	rangeMetric : "18 m",
	components : "V,S,M",	
	compMaterial : "A gull’s feather",
	duration : "Conc, 1 min",
	save : "Wis",
	description : "Humanoid WIS save or pacified, able to repeat save at end of its turns; see B",
	descriptionFull : 
		"I attempt to pacify a humanoid I can see within range. The target must make a Wisdom saving throw. If it fails the save, it is pacified by me until the spell ends. A pacified creature can’t attack, cast a spell that affects an enemy, or deal damage to another creature. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 2nd level or higher, I can target one additional humanoid for each slot level above 1st. The humanoids must be within 30 feet of each other when I target them.",
};

SpellsList["pillar of force"] = {
	name : "Pillar of Force",
	source : [["OTftTG", 188]],
	classes : ["bard", "druid", "ranger", "sorcerer"],
	level : 2,
	school : "Evoc",
	time : "1 a",
	range : "30 ft",
	rangeMetric : "9 m",
	components : "S",	
	duration : "Instantaneous",
	description : "Spell attack for 2d12 Bludg dmg, target Huge or smaller is pushed 10 ft away, ground diff terrain; see B",
	descriptionFull : 
		"I swiftly stomp my foot, conjuring a pillar of wood or stone that thrusts out from underneath my feet and towards a creature I can see within range. Make a ranged spell attack against the target. On a hit, the target takes 2d12 bludgeoning damage, and if the target is Huge or smaller, it is pushed 10 feet away from me. The ground in a straight line between me and my target becomes difficult terrain, with each 5-foot-square portion requiring at least 1 minute to clear by hand."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d12 for each slot level above 2nd.",
};

SpellsList["plummet"] = {
	name : "Plummet",
	source : [["OTftTG", 188]],
	classes : ["druid", "sorcerer", "warlock", "wizard"],
	level : 3,
	school : "Trans",
	time : "1 a",
	range : "300 ft",
	rangeMetric : "90 m",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	description : "DEX save or fall, 1d6 Bludg per 10 ft, max 20d6; falls halfway and takes no dmg on a success",
	descriptionFull : 
		"I conjure an enormous glowing force, which wraps around a flying creature within range, and attempt to pull it out of the air. The target must make a Dexterity saving throw. On a failed save, it is pulled to the ground and takes falling damage as normal (1d6 bludgeoning damage for every 10 feet it falls, to a maximum of 20d6). On a successful save, the creature drops halfway to the ground and takes no damage.",
};

SpellsList["pogmo’s pot"] = {
	name : "Pogmo’s Pot",
	source : [["OTftTG", 188]],
	classes : ["druid", "sorcerer", "warlock", "wizard"],
	level : 3,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	rangeMetric : "18 m",
	components : "V,S",
	duration : "10 min",
	description : "Obj w/in 20 ft are sucked in until end of spell, pot is immune to dmg but can be dispelled; see B",
	descriptionFull : 
		"I summon a cast iron pot in an unoccupied space on the ground within range. All objects within 20 feet of the pot that are neither worn nor carried and that weigh no more than 10 pounds are instantly sucked inside Pogmo’s strange container, whether they look like they should fit or not. All objects are stored in an extradimensional space inside the pot until the spell ends, at which point the pot vanishes and the objects it contained appear on the ground in its space."+
		"For the duration, the pot remains sealed shut and the objects inside can’t be accessed until the spell ends. The pot is 1 foot wide and 1 foot tall. It can easily be moved or carried and always weighs 15 pounds, regardless of how much the objects it contains weigh. The pot is immune to all damage, but it can be dispelled.",
};

SpellsList["rageful nimbus"] = {
	name : "Rageful Nimbus",
	source : [["OTftTG", 188]],
	classes : ["druid", "ranger", "sorcerer", "wizard"],
	level : 2,
	school : "Evoc",
	time : "1 bns",
	range : "60 ft",
	rangeMetric : "18 m",
	components : "V,S,M",
	compMaterial : "A drop of water",
	duration : "1 min",
	description : "Choose a crea, if they take dmg from a hostile crea w/in 60 ft, reaction to hit crea for 2d8 Lightning",
	descriptionFull : 
		"Choose a creature within range, which can be myself. A pristine, fluffy white cloud appears above the target and follows them for the duration. If the target takes damage from a hostile creature I can see, I can use my reaction to make a ranged spell attack from the cloud, provided that creature is within 60 feet of the target. On a hit, the creature takes 2d8 lightning damage."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for every two slot levels above 2nd.",
};

SpellsList["resilient friendship"] = {
	name : "Resilient Friendship",
	source : [["OTftTG", 188]],
	classes : ["bard", "cleric", "druid"],
	level : 0,
	school : "Ench",
	time : "1 a",
	range : "5 ft",
	rangeMetric : "1.5 m",
	components : "V",	
	duration : "Instantaneous",
	description : "Help a crea, if they succeed by the start of my next turn, I gain 1d4 THP that lasts an hour",
	descriptionFull : 
		"I magically assist a creature within range, granting it the benefits of the Help action. If the target I helped successfully accomplishes the task by the start of my next turn, I gain 1d4 temporary hit points, which last for 1 hour."+
		"The number of temporary hit points I gain increases when I reach 5th level (1d6), 11th level (1d8), and 17th level (1d10).",
};

SpellsList["retrieve"] = {
	name : "Retrieve",
	source : [["OTftTG", 188]],
	classes : ["bard", "sorcerer", "wizard"],
	level : 0,
	school : "Trans",
	time : "1 bns",
	range : "15 ft",
	rangeMetric : "4.5 m",
	components : "V",	
	duration : "Instantaneous",
	description : "Obj no more than 10 lbs and not worn flies to my open hand",
	descriptionFull : 
		"I cause an object within range that isn’t being worn or carried to fly to my open hand. The object must weigh no more than 10 pounds or the spell fails.",
};

SpellsList["root grab"] = {
	name : "Root Grab",
	source : [["OTftTG", 189]],
	classes : ["bard", "druid", "sorcerer", "wizard"],
	level : 0,
	school : "Conj",
	time : "1 rea",
	timeFull : "1 reaction, which I take when a creature provokes an opportunity attack from me",
	range : "10 ft",
	rangeMetric : "3 m",
	components : "V,S",	
	duration : "Instantaneous",
	description : "Roots reach out to crea, their speed reduced by 10 ft until start of my next turn",
	descriptionFull : 
		"I cause roots to reach out and grasp at the creature that provoked the opportunity attack, hindering its movement. The creature’s speed is reduced by 10 feet until the start of my next turn.",
};

SpellsList["sand structure"] = {
	name : "Sand Structure",
	source : [["OTftTG", 189]],
	classes : ["bard", "druid", "ranger", "sorcerer", "warlock", "wizard"],
	level : 1,
	school : "Evoc",
	time : "1 a",
	range : "30 ft",
	rangeMetric : "9 m",
	components : "V,S,M",
	compMaterial : "A small piece of seaglass",
	duration : "1 min",
	description : "5 ft tall, 5 ft wide, 1 ft thick wall with AC 13 and 10 HP; see B",
	descriptionFull : 
		"A wall of sand that is 5 feet tall, 5 feet wide, and 1 foot thick materializes from the ground up in an unoccupied space that I can see within range. The sand functions as solid stone while in its wall form. The wall has AC 13 and 10 hit points. Reducing the wall to 0 hit points destroys it and might cause connected walls to collapse at the GM’s discretion. I can end the spell early by using an action to dismiss it. When the spell ends, the wall crumbles back into sand."+
		"If I cast the spell as a ritual, the wall lasts until it is destroyed or dismissed.",
	ritual : true,
};

SpellsList["spell signature"] = {
	name : "Spell Signature",
	source : [["OTftTG", 189]],
	classes : ["bard", "druid", "ranger", "sorcerer", "warlock", "wizard"],
	level : 2,
	school : "Div",
	time : "10 min",
	range : "30 ft",
	rangeMetric : "9 m",
	components : "V,S,M",
	compMaterial : "A rosewood match",
	duration : "Instantaneous",
	description : "Choose a magical effect, if familiar with the crea that created it, I know what the magical effect; see B",
	descriptionFull : 
		"As I cast the spell I draw out the potent scents trapped within all magic. Choose a magical effect I am aware of that’s within range. The effect releases a scent specific to the creature that created it. If I am familiar with the creature, I automatically know that the magical effect was created by them."+
		"If I am not familiar with the creature, I can make an ability check using my spellcasting ability modifier and add my proficiency bonus to it. Refer to the table below to determine what information I am able to glean from the scent. When succeeding on a DC check, I also learn previous information given from lower DCs."+
		"DC 5—I learn the type of creature that created the magical effect."+
		"DC 10—If the creature has a class, I learn what it is."+
		"DC 15—I learn if the creature is affiliated with an organization."+
		"DC 20—I learn the name of the creature.",
};

SpellsList["shared vision"] = {
	name : "Shared Vision",
	source : [["OTftTG", 189]],
	classes : ["bard", "cleric", "sorcerer", "wizard"],
	level : 2,
	school : "Div",
	time : "1 a",
	range : "1 mile",
	components : "S,M",
	compMaterial : "A glass eye",
	duration : "Conc, 10 min",
	description : "a for targeted crea to see through my eyes, benefitting from my senses, bns to swap btwn visions; see B",
	descriptionFull : 
		"I target a willing creature that is familiar to me and within range. For the duration or until the target dismisses the effect on itself as an action, the target can see through my eyes, gaining the benefits of any special senses that I have. During this time the target can swap between their own vision and my vision as a bonus action."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 3rd level or higher, I can target one additional willing creature for each slot level above 2nd.",
};

SpellsList["sprout foliage"] = {
	name : "Sprout Foliage",
	source : [["OTftTG", 189]],
	classes : ["druid", "ranger", "sorcerer"],
	level : 1,
	school : "Conj",
	time : "1 a",
	range : "Self",
	rangeMetric : "Self",
	components : "V,S,M",
	compMaterial : "Flower seeds",
	duration : "1 h",
	description : "Disguised as a bush, 30 ft ranged spell attack for 1d6 + spell casting mod Bludg dmg; see B",
	descriptionFull : 
		"I sprout and rapidly grow a lush leafy foliage that covers the entirety of my body. When casting this spell, I can choose if the foliage has other features, such as flowers or berries."+
		"While prone and motionless, I am indistinguishable from a normal bush. If a creature hasn’t observed me move or act, it must succeed on an Intelligence (Investigation) check against my spell save DC to discern that I am not a bush. To become disguised again from a creature that has discerned me for what I am, I must take the Hide action while I am unseen by the creature."+
		"For the duration, I can use my action to create and hurl a pinecone, berry, or flower bud. When I do so, make a ranged spell attack against a creature within 30 feet of me. On a hit, the target takes bludgeoning damage equal to 1d6 + my spellcasting ability modifier.",
};

SpellsList["storm stallion"] = {
	name : "Storm Stallion",
	source : [["OTftTG", 190]],
	classes : ["druid", "paladin", "ranger", "sorcerer", "warlock"],
	level : 4,
	school : "Evoc",
	time : "1 a",
	range : "60 ft",
	rangeMetric : "18 m",
	components : "V,S,M",
	compMaterial : "The stem of a windbloom",
	duration : "Instantaneous",
	save : "Dex",
	description : "DEX save or be picked up, stallion moves 60 ft, crea in line DEX save, 6d8 Bludg; half on success; see B",
	descriptionFull : 
		"Choose a 5-foot-cube space that I can see within range. A Medium elemental stallion appears in that space out of a twisting gust of wind and charges in a direction I choose in a straight line up to 60 feet long. If the stallion appears in a space occupied by a creature that is Medium or smaller, that creature must succeed on a Dexterity saving throw or be carried along with the stallion as it moves. A creature can choose to fail this saving throw."+
		"Each creature in the stallion’s path (excluding the creature it’s carrying, if any) must make a Dexterity saving throw, taking 6d8 bludgeoning damage on a failed save, or half as much damage on a successful one. The stallion then vanishes."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 5th level or higher, the damage increases by 1d8 for each slot level above 4th.",
};

SpellsList["submerge"] = {
	name : "Submerge",
	source : [["OTftTG", 190]],
	classes : ["druid", "ranger", "sorcerer", "warlock", "wizard"],
	level : 5,
	school : "Conj",
	time : "1 a",
	range : "10 ft",
	rangeMetric : "3 m",
	components : "V,S",
	duration : "1 rnd",
	description : "For duration all can transport from a body of water to another within 500 miles for 5 ft movement",
	descriptionFull : 
		"This spell creates a magical link between a body of water within range and another body of water, at any location within 500 miles, on the same plane of existence. I must have seen or touched the destination body of water at least once before. For the duration, any creature can step into the target body of water and exit from the destination body of water by using 5 feet of movement."+
		"Both bodies of water must be large enough for the creature attempting to pass through to become fully submerged. If either body of water isn’t large enough for the creature to become fully submerged, there’s a 25 percent chance that the creature exits from a random body of water on the same plane of existence.",
};

SpellsList["summon jack-o’-lantern"] = {
	name : "Summon Jack-o’-lantern",
	source : [["OTftTG", 190]],
	classes : ["bard", "druid", "ranger", "sorcerer", "warlock"],
	level : 5,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	rangeMetric : "18 m",
	components : "V,S,M",
	compMaterial : "Bits of jack-o’-lantern",
	duration : "Instantaneous",
	save : "Dex",
	description : "Giant jack-o-lantern grows around 4 medium or smaller crea/1 Large, DEX save or be captured; see B",
	descriptionFull : 
		"A giant jack-o’-lantern rapidly grows around up to four Medium or smaller creatures or one Large creature within a 5-foot radius centered on a point I can see within range. An unwilling creature in the area can make a Dexterity saving throw, leaping 5 feet outside the jack-o’-lantern on a success."+
		"While inside the jack-o’-lantern, creatures can only see through its eyes and mouth, which are on one side of the jack-o’-lantern, selected by you when you cast this spell. The creatures can make attacks with ranged or reach weapons only from this side. Creatures outside the jack-o’-lantern only see a warm, glowing light when looking into its mouth or eyes. While the jack-o’-lantern remains, no creature in, or outside of it can pass or reach through it."+
		"The jack-o’-lantern weighs 5,000 pounds, has an AC of 15, and has 100 hit points. The lantern naturally loses 20 hit points every year. When the lantern is reduced to 0 hit points, it is destroyed.",
};

SpellsList["summon vehicle"] = {
	name : "Summon Vehicle",
	source : [["OTftTG", 191]],
	classes : ["bard", "ranger", "wizard"],
	level : 1,
	school : "Conj",
	time : "1 a",
	range : "30 ft",
	rangeMetric : "9 m",
	components : "V,S,M",
	compMaterial : "A small piece of rubber",
	duration : "10 min",
	description : "Summon a vehicle with 60 ft spd, carries one Med or smaller crea, one free hand required, a to end spell",
	descriptionFull : 
		"I summon a bicycle or moving machine in an unoccupied space within 5 feet of me. The vehicle can be no larger than a 5-foot cube, and it can only carry one creature that is Medium or smaller. The vehicle has a walking speed of 60 feet, which I can use while riding it, provided I have at least one free hand to operate the vehicle."+
		"I can end the spell early by using an action to dismiss it. When the spell ends, the vehicle vanishes.",
};

SpellsList["swallow magic"] = {
	name : "Swallow Magic",
	source : [["OTftTG", 191]],
	classes : ["bard", "wizard"],
	level : 1,
	school : "Trans",
	time : "1 rea",
	timeFull : "1 reaction, which I take when a spell cast by another creature fails to affect me", 
	range : "Self",
	rangeMetric : "Self",
	components : "S",
	duration : "Instantaneous",
	description : "Gain a benefit from absorbing magic around me; see B",
	descriptionFull : 
		"I chomp down on the threads of magic left in the air after the triggering spell fails to affect me, swallowing the now latent magic and gaining one of the following effects of my choice:"+
		"◊ I regain hit points equal to 1d4 + my spellcasting ability modifier."+
		"◊ My speed increases by 15 feet until the end of my next turn."+
		"◊ Once before the end of my next turn, I can roll a  d4 and add the number rolled to one ability check of my choice.",
};

SpellsList["switched form"] = {
	name : "Switched Form",
	source : [["OTftTG", 191]],
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	level : 2,
	school : "Illus",
	time : "1 a",
	range : "30 ft",
	rangeMetric : "9 m",
	components : "V,S",
	duration : "1 h",
	description : "Alter appearances of two humanoids; Int(Investigation) check vs. spell DC to determine disguise",
	descriptionFull : 
		"This spell allows me to change the appearance of two humanoids that I can see within range. Each target takes on an illusory disguise, making it look like the other target— including its armor, clothing, weapons, and other belongings on its person. Each creature can seem 1 foot shorter or taller; the disguise otherwise replicates the other target’s physical features as accurately as possible. The spell lasts for the duration, unless I use my action to dismiss it sooner."+
		"The changes wrought by this spell fail to hold up to physical inspection. For example, if this spell causes a creature to gain a cape from its disguise, objects pass through the cape, and anyone who touches it would feel nothing or would feel the creature’s back or shoulders. If this spell causes a creature to appear thinner than it is, the hand of someone who reaches out to touch the creature would bump into it while it was seemingly still in midair."+
		"A creature can use its action to inspect a target and make an Intelligence (Investigation) check against my spell save DC. If it succeeds, it becomes aware that the target is disguised.",
};

SpellsList["tamh gon’s fiery festival feast"] = {
	name : "Tamh Gon’s Fiery Festival Feast",
	source : [["OTftTG", 191]],
	classes : ["bard", "cleric", "wizard"],
	level : 5,
	school : "Abjur",
	time : "10 min",
	range : "30 ft",
	rangeMetric : "9 m",
	components : "V,S,M\u2020",
	compMaterial : "An uncommon ingredient",
	duration : "Instantaneous",
	description : "Up to 12 crea; 1h to consume; for 24h: reduce 1 lvl exhaus, +10 ft spd, +2 DEX save, Ember Belly; see B",
	descriptionFull : 
		"I sanctify a meal in an extravagant show of thrown spices and twirling dance. Those who partake in the meal are granted the curry blessings of the great festival spirit Tamh Gon. The feast takes 1 hour to consume and the beneficial effects don’t set in until this hour is over. Up to twelve creatures can participate in this feast."+
		"A creature that partakes of the feast gains several benefits. The creature reduces its exhaustion level by one, its speed increases by 10 feet, and it gains a +2 bonus to Dexterity saving throws. It can also activate the effects of the Ember Belly spell one time while the benefits of the feast last. The feast’s benefits last for 24 hours.",
};

SpellsList["task"] = {
	name : "Task",
	source : [["OTftTG", 191]],
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	level : 0,
	school : "Trans",
	time : "1 a",
	range : "15 ft",
	rangeMetric : "4.5 m",
	components : "S",
	duration : "1 h",
	description : "Complete a small task that can be donee without magic, up to 3 at a time, bns to dismiss, cannot harm",
	descriptionFull : 
		"With a flick of my wrist, I magically complete a small and simple task, such as flipping a book page, buttering bread, or heating a cup of tea, without any physical interaction. The task can’t include anything that is intended to inflict a harmful effect on a creature and must be something I’d normally be able to accomplish without the use of magic. The spell fails if the target of the task has total cover from me."+
		"If I cast this spell multiple times, I can have up to three tasks active at a time, and I can dismiss one of them as a bonus action.",
};

SpellsList["transparency"] = {
	name : "Transparency",
	source : [["OTftTG", 193]],
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	level : 2,
	school : "Illus",
	time : "1 rea",
	timeFull : "1 reaction, which I take when my location would be revealed to a creature while I am hidden or unseen",
	range : "Self",
	rangeMetric : "Self",
	components : "S",
	duration : "1 rnd",
	description : "Become invisible to not be spotted by crea, steps make no sound, ends if I attack or cast a spell",
	descriptionFull : 
		"I temporarily become invisible to stop myself from being discovered by the triggering creature. Until the end of my next turn, I remain invisible and my steps make no sound, regardless of the surface I am moving across. Anything I am wearing or carrying is invisible as long as it is on my person. The spell ends early if I attack or cast a spell.",
};

SpellsList["vegetable blade"] = {
	name : "Vegetable Blade",
	source : [["OTftTG", 193]],
	classes : ["bard", "druid", "ranger", "paladin", "sorcerer"],
	level : 3,
	school : "Conj",
	time : "1 a",
	range : "30 ft",
	rangeMetric : "9 m",
	components : "V,S,M",
	compMaterial : "A strip of grass",
	duration : "Conc, 1 min",
	description : "Vegetable blade which acts a weapon that user is proficient in, 1d12 Slash + dmg mod, finesse; see B",
	descriptionFull : 
		"A lush bunch of vegetable fronds suddenly springs from the ground in an unoccupied space I can see within range. As a bonus action, a creature can pull the fronds from the ground, revealing a root vegetable of my choice that has been grown in the shape of a blade. For the duration, a creature can use the vegetable blade as a melee weapon with which it is proficient. The blade deals 1d12 slashing damage on a hit (adding my ability modifier to the damage roll as normal), and it has the finesse property."+
		"Additionally, on subsequent turns, the wielder or one of its allies can use a bonus action to take a bite out of the blade. Doing so heals the creature for a number of hit points equal to the blade’s damage die + my spellcasting ability modifier. Once a creature has taken a bite out of the blade, its damage die is reduced by one size—from a d12 to a d10, for example. If the blade is reduced beyond a d4, it is destroyed and the spell ends early.",
};

SpellsList["water bullet"] = {
	name : "Water Bullet",
	source : [["OTftTG", 193]],
	classes : ["druid", "ranger", "sorcerer", "wizard"],
	level : 1,
	school : "Evoc",
	time : "1 a",
	range : "90 ft",
	rangeMetric : "27 m",
	components : "V,S",
	duration : "Instantaneous",
	description : "Ranged spell attack, takes Bludg dmg based off distance away from me; see B",
	descriptionFull : 
		"I create a sphere of swirling water that spins rapidly in my hand or mouth before I hurl it at a creature within range. Make a ranged spell attack against the target. On a hit, the target takes bludgeoning damage based on how far it is away from me."+
		"◊ 1–10 feet: 5d6"+
		"◊ 11–60 feet: 4d6"+
		"◊ 61–90 feet: 3d6"+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.",
};

SpellsList["whelm weapon"] = {
	name : "Whelm Weapon",
	source : [["OTftTG", 193]],
	classes : ["bard", "druid", "ranger", "sorcerer", "wizard"],
	level : 1,
	school : "Trans",
	time : "1 a",
	range : "60 ft",
	rangeMetric : "18 m",
	components : "V,S,M",
	compMaterial : "A drop of seawater",
	duration : "Conc, 1 min",
	description : "Reduce the dmg of 3 weapons I can see within range by 1d4; see B",
	descriptionFull : 
		"Up to three weapons of my choice that I can see within range become enveloped by water. Roll a d4; for the duration, any damage dealt by the targeted weapons is reduced by the number I rolled (to a minimum of 1)."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 2nd level or higher, I can target two additional weapons for each slot level above 1st.",
};

SpellsList["wind sprint"] = {
	name : "Wind Sprint",
	source : [["OTftTG", 193]],
	classes : ["paladin", "ranger", "wizard"],
	level : 2,
	school : "Evoc",
	time : "1 bns",
	range : "60 ft",
	rangeMetric : "18 m",
	components : "V",
	duration : "Instantaneous",
	description : "Winds lift me to a crea within range, next hit to a crea with a melee weapon attack +2d6 Slash dmg",
	descriptionFull : 
		"A turning tempest wind lifts me up and carries me to a creature I can see within range. The next time I hit a creature with a melee weapon attack before the end of the turn, the attack deals an extra 2d6 slashing damage as the winds buffet the target.",
};

/*
 * Add weapons (attack cantrips)
 */ 

WeaponsList["jolt"] = {
	regExpSearch : /^(?=.*jolt).*$/i,
	name : "Jolt",
	source : [["OTftTG", 185]],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 8, "lightning"],
	range : "30 ft",
	description : "",
	abilitytodamage : false,
};


















































