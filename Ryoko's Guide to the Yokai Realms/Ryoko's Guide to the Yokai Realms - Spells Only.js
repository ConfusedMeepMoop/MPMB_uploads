if (sheetVersion < 13001012) {
  throw "This script was made for a newer version of the sheet (v13.1.14). Please use the latest version and try again.\nYou can get the latest version at www.flapkan.com.";
}
var iFileName = "Ryoko's Guide to the Yokai Realms - Spells.js";
RequiredSheetVersion("13.1.12");

SourceList["RGttYR"] = {
   name: "Ryoko's Guide to the Yokai Realms",
   abbreviation: "RGttYR",
   abbreviationSpellsheet : "RG",
   group: "Third Party",
   date: "2024-10-01",
};


/*
 * Spells
 */

SpellsList["acid rain"] = {
	name : "Acid Rain",
	source : [["RGttYR", 276]],
	classes : ["bender (earth)", "bender (water)", "druid", "sorcerer", "warlock", "wizard"],
	level : 3,
	school : "Conj",
	time : "1 a",
	range : "90 ft",
	rangeMetric : "27 m",
	components : "V,S,M",	
	compMaterial : "A drop of acid",
	duration : "Conc, 1 min",
	save : "Dex",
	description : "20ft rad, 60ft tall cylinder, each crea make save, 4d6 Acid dmg; saves half; see B",
	descriptionShorter : "20ft rad, 60ft tall cylinder, each crea make save, 4d6 Acid dmg; saves half; see B",
	descriptionFull : 
		"With a gentle patter, corrosive raindrops build to an acidic deluge in a 20-foot-radius, 60-foot-tall cylinder, centred on a point within range. When the rain begins, each creature in the area must make a Dexterity saving throw, taking 4d6 acid damage on failure, or half as much damage on a success. For the duration, a creature must also make this saving throw when it enters the spell’s area for the first time on its turn or ends its turn there."+ 
		AtHigherLevels +
		"When I cast this spell using a spell slot of 4th level or higher, the acid damage increases by 1d6 for each slot level above 3rd.",
};

SpellsList["bakuryo’s blessed blizzard"] = {
	name : "Bakuryo’s Blessed Blizzard",
	source : [["RGttYR", 276]],
	classes : ["bender (water)", "cleric", "druid", "paladin", "warlock", "wizard"],
	level : 5,
	school : "Conj",
	time : "1 a",
	range : "S:20ft rad",
	rangeMetric : "S:6 m rad",
	components : "V,S,M\u0192",	
	compMaterial : "A snowflake made of mithral, worth at least 500 gp",
	duration : "Conc, 1 min",
	save : "Con",
	description : "choose bless creature cast/enter aura +2 AC; else, 3d10 Cold dmg, spd 0 in aura; saves half spd; see B",
	descriptionShorter : "decide to bless creature upon casting and when they enter the emanation, blessed +2 AC; not blessed, con sav, 3d10 Cold dmg, spd 0 in aura; saves half spd only",
	descriptionFull : "I invoke the tenets of the heavenly dragon, Bakuryō, rewarding those who struggle and punishing the dishonourable. A freezing storm radiates from me in an aura with a 20-foot radius, covering allies in icy armour and freezing foes. The aura lasts for the duration, and it moves with me, centred on you. When I cast this spell, and when a creature I can see enters the area for the first time on its turn, I must decide whether I wish to bless the creature. If I do so, the creature gains a +2 bonus to its AC while in the aura. Once I bless a creature, it remains blessed until the spell ends. If I choose not to bless the creature, it must make a Constitution saving throw. On a failure, it takes 3d10 cold damage, and its speed is reduced to 0 feet while in the aura. A creature can repeat this save at the end of each of its turns. On a successful save, its speed is halved while in the aura." + AtHigherLevels + "When I cast this spell using a spell slot of 6th level or higher, the damage increases by 1d10 for each slot level above 5th.",
};

SpellsList["blinding radiance"] = {
	name : "Blinding Radiance",
	source : [["RGttYR", 277]],
	classes : ["cleric", "paladin", "sorcerer", "warlock"],
	level : 4,
	school : "Evoc",
	time : "1 a",
	range : "S:10ft rad",
	rangeMetric : "S:3 m rad",
	components : "V,S,M",	
	compMaterial : "A strip of magnesium",
	duration : "Conc, 1 min",
	save : "Con",
	description : "3d10 Radiant dmg & blinded until start of its next turn; saves half no effect; see B",
	descriptionShorter : "3d10 Radiant dmg & blinded until start of its next turn; saves half no effect; see B",
	descriptionFull : "Bright light erupts from my form and dazzles those around me. For the duration, I emit bright light in a 50-foot radius and dim light for an additional 50 feet. Each creature that moves within 10 feet of me for the first time on its turn or that starts its turn there must make a Constitution saving throw. On a failure, a creature takes 3d10 radiant damage and is blinded until the start of its next turn. On a success, a creature takes half as much damage and isn’t blinded." + AtHigherLevels + "When I cast this spell using a spell slot of 5th level or higher, the damage increases by 1d10 for each slot level above 4th.",
};

SpellsList["bloodweave"] = {
	name : "Bloodweave",
	source : [["RGttYR", 277]],
	classes : ["bard", "bender (water)", "sorcerer", "warlock", "wizard"],
	level : 2,
	school : "Ench",
	time : "1 a",
	range : "60 ft",
	rangeMetric : "18 m",
	components : "V,S",
	duration : "1 rnd",
	save : "Con",
	description : "force a humanoid to use its reaction to move and use its action to do stuff; CR > 5 autosaves; see B",
	descriptionShorter : "force a humanoid to use its reaction to move and use its action to do stuff; CR > 5 autosaves; see B",
	descriptionFull : 
		"I attempt to seize control of the blood inside a Humanoid I can see with range. The target must make a Constitution saving throw. On a failed save, I can force that creature to use its reaction to move up to its speed in a direction I choose, and then use its action on its next turn to do one of the following: fall prone, drop what it is holding, or make one weapon attack against a creature I choose within its reach or range. At the end of that creature’s compelled action, I command over its body fades. Creatures that have a challenge rating or level of 5 or higher automatically succeed on the Constitution saving throw to resist this effect."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 3rd level or higher, the challenge rating or level of creatures that automatically succeed on this saving throw increases by 3 for each slot level above 2nd. When I cast this spell using a spell slot of 5th level or higher, it can target any creature with blood, not only Humanoids.",
};

SpellsList["cage of frozen tears"] = {
	name : "Cage of Frozen Tears",
	source : [["RGttYR", 277]],
	classes : ["bender (water)", "druid", "ranger", "warlock"],
	level : 4,
	school : "Conj",
	time : "1 min",
	range : "touch",
	rangeMetric : "touch",
	components : "V,S,M",
	compMaterial : "A snowflake",
	duration : "24 h",
	save : "Dex/Wis",
	description : "20 ft rad of ground is a nearly invisible icy trap that sets off to a trigger I choose; see B",
	descriptionShorter : "20 ft rad of ground is a nearly invisible icy trap that sets off to a trigger I choose; see B",
	descriptionFull : 
		"I imbue a 20-foot-radius circle of ground I touch with an icy trap. The trap is nearly invisible, requiring an Intelligence (Investigation) check against my spell save DC to find it. When I cast the spell, choose a trigger:"+
		" \u2022 When a creature of a type I specify enters the area or reaches its centre."+
		" \u2022 When any creature other than ones I designate to not trigger it enters the area or reaches its centre."+
		" \u2022 When I use my reaction to trigger it."+
		" When the trap is triggered, frosty spikes erupt from the ground, stabbing and trapping creatures within the area in a painful embrace. Each creature in the area when the trap is triggered must make a Dexterity saving throw. On a failure, a creature takes 2d8 piercing damage and 2d8 cold damage and is restrained for 1 minute. On a success, a creature takes half as much damage and is not restrained. A creature can use its action to make a Strength check against my spell save DC, freeing itself or a trapped creature within its reach on a success."+
		"A creature that starts its turn restrained by the ice sees horrifying visions of its past reflected back at it and must succeed on a Wisdom saving throw or become frightened of the reflections that surround it until the start of its next turn. While frightened in this way, the creature can’t attempt the Strength check to free itself or another creature. A creature that ends its turn restrained by the ice takes 2d8 cold damage."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 5th level or higher, each cold damage increases by 1d8 for each slot level above 4th.",
};

SpellsList["calm air"] = {
	name : "Calm Air",
	source : [["RGttYR", 278]],
	classes : ["bender (air)", "druid", "ranger", "wizard"],
	level : 2,
	school : "Trans",
	time : "1 bns",
	range : "120 ft",
	rangeMetric : "36 m",
	components : "V,S",
	duration : "Conc, 1 min",
	description : "60 ft cube within range, effects of air-based spells of lvl equal or lower; prevented & surressed",
	descriptionShorter : "60 ft cube within range, effects of air-based spells of lvl equal or lower; prevented & surressed",
	descriptionFull : 
		"With a calming gesture and soothing word, I calm the air in a 60-foot cube centred on a point within range for the duration. In the area, wind becomes still, the flow of poisonous gases is halted, and the effects of air-based spells of a level equal to or lower than this spell, such as the wind drake spell, are prevented and suppressed."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 3rd level or higher, the level of air-based spells suppressed by this spell increases.",
};

SpellsList["calm earth"] = {
	name : "Calm Earth",
	source : [["RGttYR", 278]],
	classes : ["bender (earth)", "druid", "ranger", "wizard"],
	level : 2,
	school : "Trans",
	time : "1 bns",
	range : "120 ft",
	rangeMetric : "36 m",
	components : "V,S",
	duration : "Conc, 1 min",
	description : "60 ft cube within range, effects of earth-based spells of lvl equal or lower; prevented & surressed",
	descriptionShorter : "60 ft cube within range, effects of earth-based spells of lvl equal or lower; prevented & surressed",
	descriptionFull : 
		"With a calming gesture and soothing word, I calm the air in a 60-foot cube centred on a point within range for the duration. In the area, wind becomes still, the flow of poisonous gases is halted, and the effects of air-based spells of a level equal to or lower than this spell, such as the wind drake spell, are prevented and suppressed."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 3rd level or higher, the level of earth-based spells suppressed by this spell increases.",
};

SpellsList["calm flames"] = {
	name : "Calm Flames",
	source : [["RGttYR", 278]],
	classes : ["bender (fire)", "druid", "ranger", "wizard"],
	level : 2,
	school : "Trans",
	time : "1 bns",
	range : "120 ft",
	rangeMetric : "36 m",
	components : "V,S",
	duration : "Conc, 1 min",
	description : "60 ft cube within range, effects of fire-based spells of lvl equal or lower; prevented & surressed",
	descriptionShorter : "60 ft cube within range, effects of fire-based spells of lvl equal or lower; prevented & surressed",
	descriptionFull : 
		"With a calming gesture and soothing word, I calm the air in a 60-foot cube centred on a point within range for the duration. In the area, wind becomes still, the flow of poisonous gases is halted, and the effects of air-based spells of a level equal to or lower than this spell, such as the wind drake spell, are prevented and suppressed."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 3rd level or higher, the level of fire-based spells suppressed by this spell increases.",
};

SpellsList["calm waters"] = {
	name : "Calm Waters",
	source : [["RGttYR", 279]],
	classes : ["bender (water)", "druid", "ranger", "wizard"],
	level : 2,
	school : "Trans",
	time : "1 bns",
	range : "120 ft",
	rangeMetric : "36 m",
	components : "V,S",
	duration : "Conc, 1 min",
	description : "60 ft cube within range, effects of water-based spells of lvl equal or lower; prevented & surressed",
	descriptionShorter : "60 ft cube within range, effects of water-based spells of lvl equal or lower; prevented & surressed",
	descriptionFull : 
		"With a calming gesture and soothing word, I calm the air in a 60-foot cube centred on a point within range for the duration. In the area, wind becomes still, the flow of poisonous gases is halted, and the effects of air-based spells of a level equal to or lower than this spell, such as the wind drake spell, are prevented and suppressed."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 3rd level or higher, the level of water-based spells suppressed by this spell increases.",
};

SpellsList["cloud stride"] = {
	name : "Cloud Stride",
	source : [["RGttYR", 279]],
	classes : ["bender (air)", "bender (water)", "druid", "ranger", "sorcerer", "tamer", "wizard"],
	level : 4,
	school : "Trans",
	time : "1 min",
	range : "30 ft",
	rangeMetric : "9 m",
	components : "V,S,M\u2020",
	compMaterial : "A mithral feather worth at least 100 gp, which the spell consumes",
	duration : "24 h",
	description : "ten willing crea gain ability to walk on heavily obscuring water vapour; see B",
	descriptionShorter : "ten willing crea gain ability to walk on heavily obscuring water vapour; see B",
	descriptionFull : 
		"This spell grants up to ten willing creatures I can see within range the ability to walk on heavily obscuring water vapour (such as cloud, fog, and mist) as if it were solid ground until the spell ends. An affected creature can suspend this effect on itself as a bonus action, allowing it to pass through water vapour until it restarts the effect, which it can do as a bonus action."+
		"A creature affected by this spell falls at a rate of 60 feet per round, takes no falling damage when it lands, and can land on its feet. In addition, its jump distance is quadrupled when it jumps off of water vapour, but it leaves an obvious contrail in its wake.",
	ritual : true,
};

SpellsList["concussion"] = {
	name : "Concussion",
	source : [["RGttYR", 280]],
	classes : ["bender (air)", "druid", "sorcerer", "warlock", "wizard"],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "60 ft",
	rangeMetric : "18 m",
	components : "V,S",	
	duration : "Instantaneous",
	save : "Con",
	description : "1d8 Thunder dmg & deafened, audible thdoom that can be heard 100 ft away",
	descriptionShorter : "1d8 Thunder dmg & deafened, audible thdoom that can be heard 100 ft away",
	descriptionCantripDie : "1 creature that I can see save or `CD`d8 Thunder dmg & deafened; 100 ft sound",
	descriptionFull : 
			"With a thdoom that can be heard 100 feet away, I cause a sudden increase in the air pressure surrounding a creature I can see within range. The target must succeed on a Constitution saving throw or take 1d8 thunder damage and become deafened until the start of my next turn."+
			"This spell’s damage increases by 1d8 when I reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
};

SpellsList["cyclone"] = {
	name : "Cyclone",
	source : [["RGttYR", 280]],
	classes : ["bender (air)", "druid", "warlock", "wizard"],
	level : 5,
	school : "Evoc",
	time : "1 a",
	range : "S",
	rangeMetric : "S",
	components : "V,S,M",
	compMaterial : "A smoke-filled crystal",
	duration : "Conc, 1 min",
	description : "30 ft fly spd, attack rolls against me at DisAdv, bns to make a cyclone attack; see B",
	descriptionShorter : "30 ft fly spd, attack rolls against me at DisAdv, bns to make a cyclone attack; see B",
	descriptionFull : 
		"A cyclone of swirling wind encases you. For the duration, I have a flying speed of 30 feet and can hover, and weapon attack rolls against me have disadvantage."+
		"As a bonus action on my turns until the spell ends, I can cause the cyclone to emit a blast of wind. Make a melee or ranged spell attack against a creature within 30 feet of me. On a hit, the creature takes 3d8 bludgeoning damage and is pushed 15 feet directly away from me."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 6th level or higher, the damage of the blast of wind increases by 1d8 for each slot level above 5th."
};

SpellsList["dash strike"] = {
	name : "Dash Strike",
	source : [["RGttYR", 280]],
	classes : ["bard", "bender (air)", "druid", "wizard"],
	level : 0,
	school : "Trans",
	time : "1 a",
	range : "S",
	rangeMetric : "S",
	components : "S",	
	duration : "Instantaneous",
	description : "propel 10 ft and then make unarmed strike or melee weapon attack, can then move 10 ft without OA",
	descriptionShorter : "propel 10 ft and then make unarmed strike or melee weapon attack, can then move 10 ft without OA",
	descriptionFull : 
			"With a deft flourish, I propel myself up to 10 feet and then can immediately make an unarmed strike or a melee attack with a weapon I am holding against a creature within my reach. Immediately after I hit or miss with this attack, I can move up to 10 feet without provoking opportunity attacks."+
			"The distance up to which I can travel with this spell increases by 5 feet when you reach 5th level (15 feet), 11th level (20 feet), and 17th level (25 feet).",
};

SpellsList["depth charge"] = {
	name : "Depth Charge",
	source : [["RGttYR", 281]],
	classes : ["bender (air)", "druid", "sorcerer", "warlock", "wizard"],
	level : 3,
	school : "Evoc",
	time : "1 a",
	range : "90 ft",
	rangeMetric : "27 m",
	components : "V,S,M",
	compMaterial : "Some metamorphic rock",
	duration : "Instantaneous",
	save : "Con",
	description : "20 ft rad sphere, 7d6 Thunder smg; saves half, 300 ft boom, stronger in water; see B",
	descriptionShorter : "20 ft rad sphere, 7d6 Thunder smg; saves half, 300 ft boom, stronger in water; see B",
	descriptionFull : 
		"With a boom that can be heard 300 feet away (or 1,000 feet in a liquid), a pulse of thunder ripples out from a point I choose within range. Each creature in a 20-foot-radius sphere centred on that point must make a Constitution saving throw. A target takes 7d6 thunder damage on a failed save, or half as much damage on a successful one. This damage increases to 9d6 if the affected creature is submerged in a liquid."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.",
};

SpellsList["earthen fist"] = {
	name : "Earthen Fist",
	source : [["RGttYR", 281]],
	classes : ["bender (earth)", "druid"],
	level : 0,
	school : "Conj",
	time : "1 a",
	range : "10 ft",
	rangeMetric : "3 m",
	components : "S",	
	duration : "Instantaneous",
	save : "Str",
	description : "Melee spell attack, 1d8 Bludg dmg, STR save or prone/pushed 5 ft away",
	descriptionShorter : "Melee spell attack, 1d8 Bludg dmg, STR save or prone/pushed 5 ft away",
	descriptionCantripDie : "creature I hit `CD`d8 Bludg dmg, STR save or prone/pushed 5 ft away",
	descriptionFull : 
		"I conjure a fist or foot made of rock and earth, punching it towards a creature within 10 feet of me. Make a melee spell attack. On a hit, the target takes 1d8 bludgeoning damage and must succeed on a Strength saving throw or I either knock it prone or push it 5 feet directly away from you (my choice)."+
		"This spell’s damage and distance a target is pushed increases by 1d8 and 5 feet when I reach 5th level (2d8 and 10 feet), 11th level (3d8 and 15 feet), and 17th level (4d8 and 20 feet).",
};

SpellsList["earthskin"] = {
	name : "Earthskin",
	source : [["RGttYR", 281]],
	classes : ["bender (earth)", "druid", "ranger", "sorcerer", "tamer", "wizard"],
	level : 2,
	school : "Trans",
	time : "1 a",
	range : "touch",
	rangeMetric : "touch",
	components : "V,S,M",	
	compMaterial : "A carved stone figurine",
	duration : "10 mins",
	description : "1 willing crea, spd reduce 5 ft, gain 2d4 THP at start of target's turns and upon casting ",
	descriptionShorter : "1 willing crea, spd reduce 5 ft, gain 2d4 THP at start of target's turns and upon casting ",
	descriptionFull : "At my touch, the skin of a willing creature hardens with stone-like fortification. Its speed is reduced by 5 feet and, when I cast this spell and at the start of each of the target’s turns, it gains temporary hit points equal to 2d4. When the spell ends, the target loses any remaining temporary hit points granted by this spell." + AtHigherLevels + "When I cast this spell using a spell slot of 3rd level or higher, I can target one additional creature for each slot level above 2nd.",
};

SpellsList["earthen uppercut"] = {
	name : "Earthen Uppercut",
	source : [["RGttYR", 282]],
	classes : ["bender (earth)", "druid", "wizard"],
	level : 1,
	school : "Trans",
	time : "1 a",
	range : "S:30 ft line",
	rangeMetric : "S:9 m line",
	components : "S,M",	
	compMaterial : "A mosaic tile",
	duration : "Instantaneous",
	save : "Dex",
	description : "30-ft long 10-ft wide all 1d10 Bludg dmg, flung 10 ft and lands prone; save halves and not flung",
	descriptionShorter : "30-ft long 10-ft wide 10-ft high all 1d10 Bludgeoning dmg, flung 10 ft in direction of my choice and lands prone; save halves and not flung;",
	descriptionFull : "Stone erupts upward from the ground in a line extending from me that is 30 feet long, 10 feet wide, and 10 feet high. Each creature in the area must make a Dexterity saving throw. On a failure, a creature takes 1d10 bludgeoning damage and is flung 10 feet in a direction of my choice where it lands prone. On a success, a creature takes half as much damage and isn’t flung." + AtHigherLevels + "When I cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10, and the distance I can fling a target increases by 5 feet, for each slot level above 1st.",
};

SpellsList["endoleech"] = {
	name : "Endoleech",
	source : [["RGttYR", 282]],
	classes : ["bender (water)", "druid", "sorcerer", "warlock", "wizard"],
	level : 2,
	school : "Evoc",
	time : "1 a",
	range : "touch",
	rangeMetric : "touch",
	components : "V,S,M",
	compMaterial : "A toenail lost to frostbite",
	duration : "Instantaneous",
	description : "5d6 Cold dmg and can't take reactions until end of its next turn, spd reduce 15 ft, my spd increase 15 ft",
	descriptionShorter : "5d6 Cold dmg and can't take reactions until end of its next turn, spd reduce 15 ft, my spd increase 15 ft",
	descriptionFull : 
		"I touch a creature, absorbing the energy from its body and bolstering my metabolism. Make a melee spell attack against a creature I can reach. On a hit, the target takes 5d6 cold damage and can’t take reactions until the end of its next turn. In addition, until the end of its next turn, its speed is reduced by 15 feet, and my speed is increased by 15 feet."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd.",
};

SpellsList["endure"] = {
	name : "Endure",
	source : [["RGttYR", 282]],
	classes : ["cleric", "druid", "paladin", "ranger", "tamer", "warlock"],
	level : 5,
	school : "Necro",
	time : "1 a",
	range : "60 ft",
	rangeMetric : "18 m",
	components : "V,S,M\u2020",
	compMaterial : "A gem-encrusted cockroach worth 250 gp, which the spell consumes",
	duration : "1 min",
	description : "one willing creature gains endurance; see B",
	descriptionShorter : "one willing creature gains endurance; see B",
	descriptionFull : 
		"Choose a willing creature I can see within range; it ceases to heed the pained calls of its body, needing neither food nor water to exist. An affected creature ignores the effects of exhaustion, the poisoned condition, and cannot be incapacitated, stunned, paralysed, or fall unconscious. Each time an affected creature takes damage that would reduce its hit points to 0, it makes a death saving throw instead. If the creature fails 3 death saving throws, it dies."+
		"When the spell ends, the creature gains a level of exhaustion for each death saving throw it failed. If the creature is resurrected after dying from these failed death saving throws, it does not regain consciousness for a duration equal to the time for which this spell affected it. When it wakes, it gains 3 levels of exhaustion."+
		"If the creature is still alive when the spell ends, it falls unconscious for a duration equal to the time for which this spell affected it. Whilst unconscious in this way, the creature can not be awakened by any means short of a wish spell."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 6th level or higher, I can increase the duration to 10 minutes (6th level), 1 hour (7th level), 8 hours (8th level), or 1 day (9th level).",
};

SpellsList["eruption"] = {
	name : "Eruption",
	source : [["RGttYR", 283]],
	classes : ["bender (earth)", "druid", "sorcerer"],
	level : 5,
	school : "Trans",
	time : "1 a",
	range : "90 ft",
	rangeMetric : "27 m",
	components : "S,M",	
	compMaterial : "A broken stone tile",
	duration : "Instantaneous",
	save : "Str",
	description : "20-ft rad difficult terrain; all 4d8 Piercing dmg, thrown 2d6 x 10 ft away; saves half and no throw ;see B",
	descriptionShorter : "20-ft rad difficult terrain; all 4d8 Piercing dmg, thrown 2d6 x 10 ft away; saves half and no throw ;see B",
	descriptionFull : "I stamp my foot, causing the ground to fling upwards and form jagged spikes of rock in a 20-foot-radius circle centred on a point on a stone or earthen surface I can see within range. That area becomes difficult terrain, and each creature in the area must make a Strength saving throw. On a failure, a creature takes 4d8 piercing damage and is thrown 2d6 x 10 feet directly away from the surface (which can include vertically). On a success, a creature takes half as much damage and isn’t thrown. Creatures that are Huge or larger have advantage on this saving throw. Each 5-foot-diameter portion of the difficult terrain requires at least 1 minute to clear by hand." + AtHigherLevels + "When I cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th. In addition, the distance a creature is thrown increases to 2d8 x 10 feet (6th level), 2d10 x 10 feet (7th level), 2d12 x 10 feet (8th level), or 2d20 x 10 feet (9th level).",
};

SpellsList["extract shirikodama"] = {
	name : "Extract Shirikodama",
	source : [["RGttYR", 283]],
	classes : ["bender (water)", "cleric", "warlock"],
	level : 3,
	school : "Necro",
	time : "1 a",
	range : "touch",
	rangeMetric : "touch",
	components : "V,S,M",	
	compMaterial : "A slice of cucumber",
	duration : "Instantaneous",
	save : "Cha",
	description : "4d10 Necrotic dmg, gain half THP, Adv. on next attack, check; save halves and no benefits; see B",
	descriptionShorter : "4d10 Necrotic dmg, gain THP equal to half dmg dealt, gain Adv. on next attack, check, save before end of next turn; save halves and no benefits",
	descriptionFull : "I phase my hand into a creature’s body and attempt to tear away a fragment of its soul. The creature must make a Charisma saving throw. On a failure, it takes 4d10 necrotic damage, I gain temporary hit points equal to half the damage dealt, and I gain advantage on the next attack roll, ability check, or saving throw I make before the end of my next turn. On a success, the creature takes half as much damage, and I don’t gain any benefits. Creatures without souls automatically succeed on this saving throw." + AtHigherLevels + "When I cast this spell using a spell slot of 4th level or higher, the damage increases by 1d10 for each slot level above 3rd.",
};

SpellsList["feverskin"] = {
	name : "Feverskin",
	source : [["RGttYR", 284]],
	classes : ["bender (fire)", "cleric", "druid", "sorcerer", "tamer", "warlock", "wizard"],
	level : 5,
	school : "Evoc",
	time : "1 a",
	range : "S",
	rangeMetric : "S",
	components : "V,S,M\u2020",
	compMaterial : "A red hot chilli pepper, which the spell consumes",
	duration : "Conc, 1 min",
	description : "6d6 Fire dmg, my walking spd increase 15 ft& gain 2d6 THP at start of turns; see B",
	descriptionShorter : "6d6 Fire dmg, my walking spd increase 15 ft& gain 2d6 THP at start of turns; see B",
	descriptionFull : 
		"I eat a chilli pepper, my metabolism increases, and my skin begins to burn to the touch. Make a melee spell attack against a creature within my reach. On a hit, the target takes 6d6 fire damage. Until the spell ends, I can use an action on each of my subsequent turns to make this attack again."+
		"For the duration, my walking speed increases by 15 feet, and I gain 2d6 temporary hit points at the start of each of my turns."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 6th level or higher, the damage increases by 1d6 for each slot level above 5th.",
};

SpellsList["flaming tiger leap"] = {
	name : "Flaming Tiger Leap",
	source : [["RGttYR", 284]],
	classes : ["bender (fire)", "druid", "ranger", "sorcerer", "wizard"],
	level : 3,
	school : "Trans",
	time : "1 a",
	range : "S",
	rangeMetric : "S",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	description : "15 ft rad, 5 ft high, centred on me, 5d6 Fire dmg; saves half, gain 120 ft fly spd, no OA; see B",
	descriptionShorter : "6d6 Fire dmg, my walking spd increase 15 ft& gain 2d6 THP at start of turns; see B",
	descriptionFull : 
		"I erupt from the ground like a firework of the College of Hanabi, but thankfully without exploding at my apex. Each creature within a 15-foot-radius, 5-foot-high cylinder centred on me must make a Dexterity saving throw. A creature takes 5d6 fire damage on a failed saving throw, or half as much damage on a successful one. Until the end of my turn, I gain a flying speed of 120 feet, and my movement doesn’t provoke opportunity attacks."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6, and my flying speed increases by 30 feet, for each slot level above 3rd.",
};

SpellsList["flash"] = {
	name : "Flash",
	source : [["RGttYR", 284]],
	classes : ["bard", "bender (fire)", "cleric", "druid", "paladin", "sorcerer", "tamer", "wizard"],
	level : 1,
	school : "Evoc",
	time : "1 rea",
	timeFull : "1 reaction, which I take when a creature within 10 feet of me that I can see targets me with an attack",
	range : "10 ft",
	rangeMetric : "3 m",
	components : "S,M",
	compMaterial : "A bead of magnesium",
	duration : "Instantaneous",
	save : "Con",
	description : "attacking crea Con save or blinded until start of its next turn",
	descriptionShorter : "attacking crea Con save or blinded until start of its next turn",
	descriptionFull : 
		"I exploit a creature’s focus on me to detonate a blinding flash of light. The attacking creature must succeed on a Constitution saving throw or be blinded until the end of its next turn.",
};

SpellsList["flashbang"] = {
	name : "Flashbang",
	source : [["RGttYR", 284]],
	classes : ["bard", "bender (air)", "ranger", "sorcerer", "warlock", "wizard"],
	level : 3,
	school : "Evoc",
	time : "1 a",
	range : "60ft",
	rangeMetric : "16 m",
	components : "V,S,M",	
	compMaterial : "A handful of metal powder",
	duration : "Instantaneous",
	save : "Con",
	description : "10ft rad, 2d8 Thunder dmg, blind & deaf 1 min; saves half, no effects, repeat save at end of turn; see B",
	descriptionShorter : "2d8 Thunder dmg, blinded and deafened 1 min; saves half dmg, no effects, repeat save at end of turn; see B",
	descriptionFull : "I throw a tiny spark at a point within range where it erupts with a bright flash and thunderous bang which can be heard 600 feet away. Each creature in a 10-foot-radius sphere centred on that point must make a Constitution saving throw. On a failure, a creature takes 2d8 thunder damage and is blinded and deafened for 1 minute. On a success, a creature takes half as much damage and isn’t blinded or deafened. A creature can repeat this saving throw at the end of each of its turns, ending the effect on itself on a success." + AtHigherLevels + "When I cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8, and the radius increases by 5 feet, for each slot level above 3rd.",
};

SpellsList["ice moon"] = {
	name : "Ice Moon",
	source : [["RGttYR", 285]],
	classes : ["bender (water)", "druid", "sorcerer", "warlock", "wizard"],
	level : 1,
	school : "Conj",
	time : "1 a",
	range : "S: 30 ft line",
	rangeMetric : "S: 9 m line",
	components : "V,S,M",
	compMaterial : "A snowflake",
	duration : "Instantaneous",
	save : "Dex",
	description : "1d6 Slashing + 1d6 Cold dmg, spd reduce 10 ft until start of its next turn; saves half, speed norm",
	descriptionShorter : "1d6 Slashing + 1d6 Cold dmg, spd reduce 10 ft until start of its next turn; saves half, speed norm",
	descriptionFull : 
		"I form a curving blade of ice and project it forward in an eviscerating rush. Each creature in a 5-foot-wide, 30-foot long line must make a Dexterity saving throw. On a failure, a creature takes 1d6 slashing damage and 1d6 cold damage, and its speed is reduced by 10 feet until the end of its next turn. On a success, a creature takes half as much damage and its speed is unaffected."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 2nd level or higher, the cold damage increases by 1d6 for each slot level above 1st.",
};

SpellsList["iminada’s umigiri"] = {
	name : "Iminada’s Umigiri",
	source : [["RGttYR", 285]],
	classes : ["bard", "bender (air)", "bender (water)", "cleric", "warlock", "wizard"],
	level : 5,
	school : "Illus",
	time : "1 a",
	range : "120 ft",
	rangeMetric : "36 m",
	components : "S,M",
	compMaterial : "A piece of whalebone",
	duration : "Conc, 1 min",
	save : "Int",
	description : "5d8 Psychic dmg & frightened; saves half, not frightened, if hit illusion can repeat save; see B",
	descriptionShorter : "5d8 Psychic dmg & frightened; saves half, not frightened, if hit illusion can repeat save; see B",
	descriptionFull : 
		"I create a 60-foot cube of swirling, green fog centred on a point within range that lasts for the duration. The fog heavily obscures the area, spreads around corners, is unaffected by wind, and thrums with illusions."+
		"A creature that starts its turn in the area or enters the area for the first time on its turn must make an Intelligence saving throw. On a failure, the creature takes 5d8 psychic damage and becomes frightened of the illusions, which surround it. On a success, a creature takes half as much damage and isn’t frightened by the illusions. A creature that makes an attack against these illusions (AC equals my spell save DC) and hits can repeat the saving throw, ending the frightened condition on itself on a success and automatically succeeding on saves against the spell for the duration."+
		"The frightening effect ends for an affected creature if it leaves the area."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8, and the area of the fog increases by 20 feet, for each slot level above 5th.",
};

SpellsList["incendiary strike"] = {
	name : "Incendiary Strike",
	source : [["RGttYR", 285]],
	classes : ["bender (fire)", "druid"],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "S",
	rangeMetric : "S",
	components : "V,S",	
	duration : "Instantaneous",
	description : "unarmed strike and melee weapon attack within 5 ft deals extra 1d6 Fire dmg, reach scales with levels",
	descriptionShorter : "unarmed strike and melee weapon attack within 5 ft deals extra 1d6 Fire dmg, reach scales with levels",
	descriptionCantripDie : "creature I hit `CD`d6 Fire dmg",
	descriptionFull : 
		"Flame envelopes my strike, surging through me and into a target. Make an unarmed strike or a melee attack with a weapon I am holding against one creature within 5 feet of me. On a hit, the target suffers the attack’s normal effects, and it takes an extra 1d6 fire damage."+
		"When I reach 5th level, the attack deals an extra 1d6 fire damage (2d6) to the target on a hit, and the reach of the attack increases by 5 feet (10 feet). The fire damage and range increase by 1d6 and 5 feet again at 11th level (3d6 and 15 feet) and 17th level (4d6 and 20 feet).",
};

SpellsList["inner flame"] = {
	name : "Inner Flame",
	source : [["RGttYR", 286]],
	classes : ["bender (air)", "cleric", "druid", "paladin", "ranger", "tamer", "warlock"],
	level : 1,
	school : "Abjur",
	time : "1 bns",
	range : "S",
	rangeMetric : "S",
	components : "V",
	duration : "Instantaneous",
	save : "Con",
	description : "2d6 Fire dmg, saves half, crea in a grapple with me auto fail, grappler releases me; see B",
	descriptionShorter : "2d6 Fire dmg, saves half, crea in a grapple with me auto fail, grappler releases me; see B",
	descriptionFull : 
		"My body becomes wreathed in flame. Creatures I am touching must succeed on a Constitution saving throw, taking 2d6 fire damage on a failed save, or half as much damage on a successful one. A creature I am grappling, or are grappled by, automatically fails this saving throw. If I am grappled by a creature that fails this saving throw, the creature releases me and the grapple ends."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.",
};

SpellsList["lifesap aura"] = {
	name : "Lifesap Aura",
	source : [["RGttYR", 286]],
	classes : ["cleric", "druid", "paladin"],
	level : 2,
	school : "Necro",
	time : "1 a",
	range : "S",
	rangeMetric : "S",
	components : "V,S",	
	duration : "1 min",
	description : "when hit by melee attack, enemy takes 1d8 Necrotic dmg, reduce HP each round; see B",
	descriptionShorter : "when hit by melee attack, enemy takes 1d8 Necrotic dmg, reduce HP each round; see B",
	descriptionFull : "I create a barrier of tempestuous necrotic energy that spirals around me for the duration. My current hit points and hit point maximum are reduced by an amount equal to the spell’s level at the start of each of my turns. When this spell ends, my hit point maximum returns to normal. If a creature hits me with a melee attack roll, that creature takes 2d8 necrotic damage. In addition, I am immune to being frightened, and I have advantage on Intimidation (Charisma) checks. I can dismiss this spell as an action." + 
			AtHigherLevels + "When I cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd.",
};

SpellsList["lion’s roar"] = {
	name : "Lion’s Roar",
	source : [["RGttYR", 286]],
	classes : ["bender (fire)", "druid", "ranger", "sorcerer", "warlock"],
	level : 4,
	school : "Conj",
	time : "1 a",
	range : "S",
	rangeMetric : "S",
	components : "V,S,M",	
	compMaterial : "Some burnt hair",
	duration : "Conc, 1 min",
	save : "Wis",
	description : "conjure roaring lion's head that moves with me, can do stuff on subsequent bonus actions; see B",
	descriptionShorter : "conjure roaring lion's head that moves with me, can do stuff on subsequent bonus actions; see B",
	descriptionFull : 
		"I conjure a roaring lion’s head made of writhing flame that moves with me, wielding it like an extension of my body for the duration. When Iconjure the lion and as a bonus action on my subsequent turns, I can cause one of the following effects with it."  + 
		"\n   " + toUni("Fiery Maw") + ": The lion bites a creature or object within 30 feet of me. Make a melee spell attack against the target. On a hit, it takes 4d6 fire damage." + 
		"\n   " + toUni("Flaming Mane") + ": The lion’s head encases my own until the start of my next turn. When a creature within 10 feet of me hits me with a melee attack, the lion bites the attacker, dealing 3d6 fire damage to it." + 
		"\n   " + toUni("Roar of the Pride") + ": The flames roar. Each creature within 20 feet of me must succeed on a Wisdom saving throw or be frightened of me until the spell ends. A frightened creature can repeat this saving throw at the end of each of its turns, ending the effect on itself on a success. A creature that succeeds on this saving throw is immune to this effect until the spell ends." + 
		AtHigherLevels + "When I cast this spell using a spell slot of 5th level or higher, the damage from the Fiery Maw and Flaming Mane options each increase by 1d6 for each slot level above 4th.",
};

SpellsList["magatsuchi’s lantern"] = {
	name : "Magatsuchi’s Lantern",
	source : [["RGttYR", 287]],
	classes : ["bard", "bender (fire)", "druid", "paladin", "ranger", "warlock"],
	level : 5,
	school : "Illus",
	time : "1 a",
	range : "S:10 ft rad",
	rangeMetric : "S: 3 m rad",
	components : "V,S,M",	
	compMaterial : "A piece of spirit lantern amber",
	duration : "Conc, 10 mins",
	save : "Wis",
	description : "Undesignated crea start turn/enter in area charmed and incap'd, charm ends if; see B",
	descriptionShorter : "Undesignated crea start turn/enter in area charmed and incap'd, moving only if commanded by me, charm ends if out of aura, take dmg or shaken out of stupor; see B",
	descriptionFull : 
		"A warm, ethereal light in the shape of a kodama’s spirit lantern surrounds me for the duration, creating dim light in enrapturing patterns in an aura with a 10-foot radius. Until the spell ends, the aura moves with me, centred on me. When I create the aura, I can designate any number of creatures to be unaffected by it. A creature that starts its turn in the area, or that enters the aura’s area for the first time on its turn, must succeed on a Wisdom saving throw or be charmed by me. The charmed creature is incapacitated and moves only if I verbally or gesturally command it to use its reaction to move. I can command it to use its reaction to move with me as I move, in which case it makes every effort to stay within the aura. A creature that leaves the aura ceases to be charmed at the start of its next turn. The effect ends early for an affected creature if it takes any damage or if someone else uses an action to shake the creature out of its stupor. A creature that ceases to be charmed by this spell knows that it was charmed by me and has advantage on saving throws against this spell for the next 24 hours." + 
		AtHigherLevels + 
		"When I cast this spell using a spell slot of 6th level or higher, the radius of the aura increases by 5 feet for each slot level above 5th.",
};

SpellsList["mireball"] = {
	name : "Mireball",
	source : [["RGttYR", 287]],
	classes : ["bard", "bender (earth)", "druid", "sorcerer", "warlock"],
	level : 3,
	school : "Conj",
	time : "1 a",
	range : "150 ft",
	rangeMetric : "135 m",
	components : "V,S,M",	
	compMaterial : "A tiny ball of guano and mud",
	duration : "1 min",
	save : "Str",
	description : "3d10 Bludg dmg & prone, saves half no effect, surface becomes muddy and causes effects; see B",
	descriptionShorter : "3d10 Bludg dmg & prone, saves half no effect, surface becomes muddy and causes effects; see B",
	descriptionFull : 
		"A blob of gloopy mud splunks from my pointed finger to a point I choose within range, where it splooges with a wet burp into an explosion of sludge. Each creature in a 15-foot-radius sphere centred on that point must make a Strength saving throw. On a failed save, a target takes 3d10 bludgeoning damage and is knocked prone. On a successful one, it takes half as much damage and is not knocked prone. In addition, all surfaces within the area become covered in unpredictably slick and sticky patches of mud for the duration. The first time a creature moves through the muddy area on its turn it must succeed on a Dexterity saving throw against my spell save DC or fall prone. A creature moving through the area at half speed doesn’t need to make the saving throw." + AtHigherLevels + "When I cast this spell using a spell slot of 4th level or higher, the damage increases by 1d10 for each slot level above 3rd.",
};

SpellsList["mirror of reflection"] = {
	name : "Mirror of Reflection",
	source : [["RGttYR", 288]],
	classes : ["bard", "bender (water)", "cleric", "druid", "ranger", "tamer"],
	level : 2,
	school : "Conj",
	time : "1 bns",
	range : "60 ft",
	rangeMetric : "18 m",
	components : "V,S,M",
	compMaterial : "A shard of reflective glass",
	duration : "10 mins",
	description : "mirror can reflect ranged ammunition & missiles; see B",
	descriptionShorter : "mirror can reflect ranged ammunition & missiles; see B",
	descriptionFull : 
		"I create a floating sheet of curved, reflective ice within range that lasts for the duration or until I cast this spell again. When a creature I can see makes a ranged attack with a piece of ammunition or other physical missile that passes through a space within 10 feet of the mirror, I can use my reaction to move the mirror to intercept the missile. Make a ranged spell attack. If the result of my attack roll is higher than the missile’s attack roll, the missile is redirected back at the attacking creature, using my ranged attack roll to determine whether it hits or misses. As a bonus action on my turn, I can move the mirror up to 20 feet."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 3rd level or higher, the distance at which the mirror can intercept a missile increases by 5 feet, and the distance I can move the mirror as a bonus action on my turn increases by 10 feet, for each slot level above 2nd.",
};

SpellsList["nomi’s adamantine carapace"] = {
	name : "Nomi’s Adamantine Carapace",
	source : [["RGttYR", 288]],
	classes : ["bard", "bender (earth)", "cleric", "druid", "paladin", "ranger", "tamer"],
	level : 5,
	school : "Trans",
	time : "1 a",
	range : "touch",
	rangeMetric : "touch",
	components : "V,S,M\u0192",
	compMaterial : "A hunk of adamantine worth at least 300 gp",
	duration : "Conc, 1 h",
	description : "one willing crea, AC 20, resist Acid, Bludgeoning, Piercing, Slashing dmg",
	descriptionShorter : "one willing crea, AC 20, resist Acid, Bludgeoning, Piercing, Slashing dmg",
	descriptionFull : 
		"I touch a willing creature, causing blue-green veins of adamantine to thread through its skin, making it tougher than steel and as flexible as silk. For the duration, the target has an Armor Class of 20 if its AC is lower than that, and it has resistance to acid, bludgeoning, piercing, and slashing damage."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 6th level or higher, the minimum AC increases by 1 for each slot level above 5th.",
};

SpellsList["pins & needles"] = {
	name : "Pins & Needles",
	source : [["RGttYR", 289]],
	classes : ["bender (water)", "druid", "sorcerer", "warlock", "wizard"],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "60 ft",
	rangeMetric : "18 m",
	components : "V,S",	
	duration : "Instantaneous",
	save : "Con",
	description : "1d8 Psychic dmg, fail by 5 or more DisAdv on next attack roll before the end of its next turn",
	descriptionShorter : "1d8 Psychic dmg, fail by 5 or more DisAdv on next attack roll before the end of its next turn",
	descriptionCantripDie : "creature I hit `CD`d8 Psychic dmg, fail by 5 or more, crea has DisAdv on next attack roll before end of its next turn",
	descriptionFull : 
		"I momentarily shut down a small part of the nervous system of a creature I can see within range, before overstimulating it and causing crippling pain. The creature must succeed on a Constitution saving throw or take 1d8 psychic damage. If the target fails its saving throw by 5 or more, it has disadvantage on the next attack roll it makes before the end of its next turn as it temporarily loses full control of a part of its body."+
		"This spell’s damage increases by 1d8 when I reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
};

SpellsList["protection"] = {
	name : "Protection",
	source : [["RGttYR", 289]],
	classes : ["bard", "bender (earth)", "cleric", "druid", "paladin", "ranger", "tamer"],
	level : 2,
	school : "Abjur",
	time : "1 a",
	range : "30 ft",
	rangeMetric : "9 m",
	components : "V,S,M\u2020",	
	compMaterial : "A miniature silver shield worth 10 gp, which the spell consumes",
	duration : "Conc, 1 hour",
	description : "triggered ward gives target resistance to all (except psychic) until end of target's next turn; see B",
	descriptionShorter : "warded from first instance of damage for an hour (except psychic), triggered ward gives target resistance to all (except psychic) until end of target's next turn",
	descriptionFull : 
		"I trace a warding sigil in the air, sending it to slowly circle a willing creature I can see for the next hour. Immediately before the target next takes damage, except psychic damage, the ward triggers. Until the end of the target’s next turn, it has resistance to all damage excluding psychic, including the triggering damage. The warding sigil then disappears, and the spell ends on the target." + AtHigherLevels + "When I cast this spell using a spell slot of 3rd level or higher, I can target one additional creature for each slot level above 2nd.",
};

SpellsList["raiko’s rending rage"] = {
	name : "Raiko’s Rending Rage",
	source : [["RGttYR", 289]],
	classes : ["bender (air)", "bender (fire)", "ranger", "wizard"],
	level : 5,
	school : "Trans",
	time : "1 a",
	range : "S",
	rangeMetric : "S",
	components : "V,S,M",
	compMaterial : "A piece of fulgurite",
	duration : "Instantaneous",
	save : "Con",
	description : "I gain extra spd and bonuses, can make four melee weapon attacks (without action); see B",
	descriptionShorter : "I gain extra spd and bonuses, can make four melee weapon attacks (without action); see B",
	descriptionFull : 
		"I imbue myself with the swift rage of a tempest, turning my movement into a storm of thunder and lightning. Until the end of the turn, I gain 40 feet of additional movement, my movement doesn’t provoke opportunity attacks, and I can make up to four melee weapon attacks (no action required), though each must be against a different target. On a hit, these attacks deal an extra 2d8 lightning damage."+
		"At the end of the turn, a thunderous boom follows in my wake that can be heard 2,500 feet away. Each creature I attacked with this spell must make a Constitution saving throw. On a failure, a creature takes 2d8 thunder damage and is knocked prone. On a success, a creature takes half as much damage and is not knocked prone."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 6th level or higher, the lightning and thunder damage each increase by 1d8 for each slot level above 5th.",
};

SpellsList["redirect lightning"] = {
	name : "Redirect Lightning",
	source : [["RGttYR", 290]],
	classes : ["bender (air)", "bender (fire)", "druid", "ranger", "sorcerer", "wizard"],
	level : 2,
	school : "Abjur",
	time : "1 rea",
	timeFull : "1 reaction, which I take when I take lightning damage",
	range : "S",
	rangeMetric : "S",
	components : "S",
	duration : "Instantaneous",
	description : "I can attempt to capture and redirect lightning; see B",
	descriptionShorter : "I can attempt to capture and redirect lightning; see B",
	descriptionFull : 
		"I attempt to capture and redirect lightning. Make an Arcana check using my spellcasting ability, with a DC equal to half the lightning damage taken. On a failure, I gain resistance to lightning damage until the end of the turn, including against the triggering damage. On a success, I gain immunity to lightning damage until the end of the turn, including against the triggering damage. In addition, if the source of the damage was a spell, the spell’s area stops at me if it is a line, and I can reflect the spell back at the source as though it originated from me, using my spell save DC or spell attack modifier, turning the caster into the target."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 3rd level or higher, the casting time of the spell changes to '1 reaction, which I take when a creature within a certain range of me takes lightning damage'. This range is 10 feet at 3rd level, and increases by 10 feet for each slot level above 3rd. When I redirect lightning away from a target other than myself, that creature gains resistance or immunity to lightning damage (on a failure or success, respectively) instead of me.",
};

SpellsList["reinforce"] = {
	name : "Reinforce",
	source : [["RGttYR", 290]],
	classes : ["bender (earth)", "cleric", "druid", "tamer"],
	level : 0,
	school : "Trans",
	time : "1 a",
	range : "touch",
	rangeMetric : "touch",
	components : "V,S,M",	
	compMaterial : "A spherical pebble",
	duration : "Instantaneous",
	description : "Large or smaller crea gains 4 THP, THP disappears if I cast the spell again",
	descriptionShorter : "Large or smaller crea gains 4 THP, THP disappears if I cast the spell again",
	descriptionFull : 
		"I place my hand on one Large or smaller creature, imbuing it with the resilience and fortitude of stone. That target gains 4 temporary hit points. These temporary hit points disappear if I cast the spell again."+
		"This spell’s damage increases by 1d8 when I reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
};

SpellsList["repulsing palm"] = {
	name : "Repulsing Palm",
	source : [["RGttYR", 291]],
	classes : ["bard", "bender (air)", "cleric", "paladin", "ranger", "wizard"],
	level : 1,
	school : "Evoc",
	time : "1 a",
	range : "S",
	rangeMetric : "S",
	components : "S",
	duration : "Instantaneous",
	description : "melee attack, if Large or smaller push 30 ft back, if crea collides with obj or crea effect happens; see B",
	descriptionShorter : "melee attack, if Large or smaller push 30 ft back, if crea collides with obj or crea effect happens; see B",
	descriptionFull : 
		"I empower myself with the unimpedable motion of a tectonic plate. Make an unarmed strike or melee attack with a weapon I am holding against one creature within my reach. On a hit, the target suffers the attack’s normal effects, and if the target is Large or smaller, I can choose to push it up to 30 feet directly away from me."+
		"If the target collides with an object or creature, it stops moving, falls prone, and takes 2d8 bludgeoning damage. If it collides with an object, the object takes 2d8 bludgeoning damage. If it collides with a creature, that creature must make a Dexterity saving throw, taking 2d8 bludgeoning damage and being knocked prone on a failed save, or taking half as much damage and not falling prone on a successful one."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 2nd level or higher, the damage upon collision increases by 1d8 for each slot level above 1st.",
};

SpellsList["riptide"] = {
	name : "Riptide",
	source : [["RGttYR", 291]],
	classes : ["bender (water)", "druid", "sorcerer", "warlock", "wizard"],
	level : 2,
	school : "Trans",
	time : "1 a",
	range : "300 ft",
	rangeMetric : "90 m",
	components : "V,S",	
	duration : "Conc, 1 min",
	save : "Str",
	description : "one crea in 2 ft of water is dragged 30 ft in direction I chose, swim spd 0; saves no effect; see B",
	descriptionShorter : "one crea in 2 ft of water is dragged 30 ft in direction I chose, swim spd 0; saves no effect; see B",
	descriptionFull : 
		"Choose one creature I can see within range that is in at least 2 feet of water and choose a direction. Turbulent currents wrap around the creature. For the duration, the target must make a Strength saving throw at the start of each of its turns. On a failure, it is dragged 30 feet in the direction I chose, and its swimming speed is reduced to 0 feet until the start of its next turn. On a success, the creature can move normally until the start of its next turn."+
		"As a bonus action on my turn, I can change the direction of the underwater currents. The spell ends early if the creature is ever out of the spell’s range or is no longer in water at least 2 feet deep.",
};

SpellsList["rock tomb"] = {
	name : "Rock Tomb",
	source : [["RGttYR", 291]],
	classes : ["bard", "bender (earth)", "druid"],
	level : 4,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	rangeMetric : "18 m",
	components : "V,S,M",	
	compMaterial : "A pebble",
	duration : "Conc, 1 min",
	save : "Dex",
	description : "crea blinded, restrained, in total cover, Tomb AC 16, 50 HP; save pushed to space within 5ft; see B",
	descriptionShorter : "creature is blinded, restrained and in total cover, Tomeb has AC 16, 50 HP, immune to poison, psychic, vulnerable to thunder; save pushed to space within 5ft",
	descriptionFull : 
		"I conjure a tomb of earth, attempting to encase a Large or smaller creature I can see within range inside of it, which occupies the same space as the creature until the spell ends. If the target is unwilling, it can make a Dexterity saving throw. On a success, it avoids being encased and is pushed to an unoccupied space within 5 feet of the tomb. The tomb provides total cover for targets on the other side of it, and any creature encased within is blinded and restrained. The tomb is an object with AC 16, 50 hit points, immunity to poison and psychic damage, and vulnerability to thunder damage. Reducing the tomb to 0 hit points destroys it and ends the spell." + 
		AtHigherLevels + 
		"At Higher Levels. When I cast this spell using a spell slot of 5th level or higher, the AC of the tomb increases by 1, and its hit points increase by 10, for each slot level above 4th. In addition, when I use a spell slot of 6th level or higher, it can target a Huge creature, and when I use a spell slot of 8th or 9th level, it can target a Gargantuan creature.",
};

SpellsList["ryoko’s revelation"] = {
	name : "Ryoko’s Revelation",
	source : [["RGttYR", 292]],
	classes : ["bard", "bender (water)", "cleric", "wizard"],
	level : 3,
	school : "Div",
	time : "1 min",
	range : "touch",
	rangeMetric : "touch",
	components : "V,S,M",
	compMaterial : "An object",
	duration : "Conc, 24 h",
	description : "enter a trance an observe are within 60 ft of the obj as if I was there; see B",
	descriptionShorter : "enter a trance an observe are within 60 ft of the obj as if I was there; see B",
	descriptionFull : 
		"I touch an object and enter a trance, choosing a point within the past week in which to begin my observation. I observe everything to have occurred within 60 feet of the object as if I was there, for as long as I stay in the trance. Ability checks I make while in my trance, such as Perception or Investigation checks to observe or discern information, use my spellcasting ability instead of any other ability. During my trance, I am deaf and blind with regard to my own senses. Objects and creatures hidden from divination magic appear as silent voids in this recollection."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 4th level or higher, I can observe further back in time, and time travels faster within my trance. At 4th level, I can look as far back as 1 month, and each minute I spend in my trance allows me to observe 2 minutes (allowing you to observe 48 hours during my 24 hour trance). At 5th level, this is 1 year and 3 minutes; 6th level, 10 years and 4 minutes; 7th level, 100 years and 5 minutes; 8th level, 1,000 years and 6 minutes; 9th level, 10,000 years and 7 minutes.",
};

SpellsList["see future death"] = {
	name : "See Future Death",
	source : [["RGttYR", 292]],
	classes : ["bard", "cleric", "druid", "sorcerer", "wizard"],
	level : 1,
	school : "Div",
	time : "1 a",
	range : "S",
	rangeMetric : "S",
	components : "S,M",	
	compMaterial : "A piece of broken mirror",	
	duration : "1 min",
	description : "For 1 min, crits against me are normal hits, OAs at DisAdv, reaction +1d4 AC or STR/DEX save; see B",
	descriptionShorter : "For 1 min, crits against me are normal hits, OAs at DisAdv, reaction +1d4 AC or STR/DEX save; see B",
	descriptionFull : 
		"I peer into the divergent potentials of the future, my attention drawn to moments of my own harm. For the duration, any critical hits I suffer become normal hits, and opportunity attacks against me have disadvantage. In addition, when an attacker hits I with an attack or I fail a Strength or Dexterity saving throw, I can use my reaction to roll 1d4 and add the result to my AC against that attack or to the result of the saving throw, potentially turning a hit into a miss or a failure into a success."+ AtHigherLevels + "When I cast this spell using a spell slot of 3rd level or higher, the duration of the spell increases to 10 minutes (3rd level), 1 hour (5th level), 8 hours (7th level), or 24 hours (9th level). When I cast this spell using a spell slot of 2nd level or higher, the size of the die I can roll to add to my AC or saving throw increases to 1d6 (2nd level), 1d8 (4th level), 1d10 (6th level), or 1d12 (8th level).",
};

SpellsList["shielding word"] = {
	name : "Shielding Word",
	source : [["RGttYR", 293]],
	classes : ["bard", "bender (earth)", "cleric", "paladin", "sorcerer", "tamer"],
	level : 2,
	school : "Abjur",
	time : "1 rea",
	timeFull : "1 reaction, which I take when a creature within range that I can see is hit by an attack from an attacker I can see or fails a Strength or Dexterity saving throw",
	range : "30 ft",
	rangeMetric : "9 m",
	components : "V",
	duration : "1 rnd",
	description : "crea gains 15 THP the instant before it takes the triggering dmg",
	descriptionShorter : "crea gains 15 THP the instant before it takes the triggering dmg",
	descriptionFull : 
		"With a word, you coat a creature in a shimmering shield that absorbs the energy of incoming blows. The creature gains 15 temporary hit points the instant before it takes the triggering damage. These hit points last until the start of the creature’s next turn."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 3rd level or higher, I can choose to either increase the range of the spell by 30 feet or increase the number of temporary hit points gained by 5, for each slot level above 2nd.",
};

SpellsList["slatestorm"] = {
	name : "Slatestorm",
	source : [["RGttYR", 293]],
	classes : ["bender (earth)", "druid", "ranger", "wizard"],
	level : 4,
	school : "Conj",
	time : "1 a",
	range : "S",
	rangeMetric : "S",
	components : "V,M",
	compMaterial : "A thin piece of slate",
	duration : "Conc, 1 min",
	save : "Dex",
	description : "5 ft/enter area, 3d8 Slashing dmg, subsequent action shoot 15 ft cone, Dex save 3d8 Slashing dmg;saves half",
	descriptionShorter : "crea within 5 ft/enter area, 3d8 Slashing dmg, subsequent action shoot 15 ft cone, Dex save 3d8 Slashing dmg;saves half",
	descriptionFull : 
		"Razor-sharp shards of slate flit about me in a lacerating whirlwind until the spell ends. Each creature that starts its turn within 5 feet of me or enters a space within 5 feet of me for the first time on its turn takes 3d8 slashing damage. When I cast this spell, and as an action on subsequent turns, I can cause slate to fire out from me in a 15-foot cone. Each creature in the area must make a Dexterity saving throw, taking 3d8 slashing damage on a failure, or half as much damage on a success."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 5th level or higher, the damage increases by 1d8 for each slot level above 4th.",
};

SpellsList["smokescreen"] = {
	name : "Smokescreen",
	source : [["RGttYR", 293]],
	classes : ["bard", "bender (air)", "druid", "sorcerer", "tamer", "wizard"],
	level : 0,
	school : "Conj",
	time : "1 a",
	range : "S",
	rangeMetric : "S",
	components : "V,S,M",	
	compMaterial : "A puffball mushroom",	
	duration : "Conc, 1 round",
	description : "5-ft diameter, 10-ft high until start of next turn, heavily obscured, cloud can move with you; see B",
	descriptionShorter : "5-ft diameter, 10-ft high until start of next turn, heavily obscured, cloud can move with you; see B",
	descriptionFull : 
		"I spew a thick cloud of dense black smoke that forms a 5-foot-diameter, 10-foot-high cylinder centred on me that lasts until the start of my next turn. The smoke heavily obscures its area. When I cast the spell, I can choose whether the cloud remains in the location where I cast it or if it moves with you, centred on me. When I reach higher levels, the size of the cloud I can create with this spell increases. When I reach 5th level, the cloud has a maximum diameter and height of 15 feet; at 11th level this increases to 25 feet; and at 17th level this increases to 40 feet. I choose how big the cloud is in each dimension up to this maximum each time that I cast it.",
};

SpellsList["snakebite"] = {
	name : "Snakebite",
	source : [["RGttYR", 294]],
	classes : ["bender (earth)", "druid", "ranger", "sorcerer", "wizard"],
	level : 2,
	school : "Conj",
	time : "1 a",
	range : "S",
	rangeMetric : "S",
	components : "V,S,M",
	compMaterial : "Some sand",
	duration : "Conc, 1 min",
	save : "Con",
	description : "conjure a snake and as a bns action on subsequent turns cause an effect; see B",
	descriptionShorter : "conjure a snake and as a bns action on subsequent turns cause an effect; see B",
	descriptionFull : 
		"I conjure a sinuous, fanged snake of shifting dirt and sliding sand that moves with me, wielding it like an extension of my body for the duration. When I conjure the snake and as a bonus action on my subsequent turns, I can cause one of the following effects with it:"+
		" \u2022 Earthroot. The snake coils around me or a willing creature of my choice within 30 feet of me as a fortification of earth. Until the start of my next turn, the affected creature automatically succeeds on ability checks and saving throws to avoid being moved against its will or knocked prone."+
		" \u2022 Tetanus Tooth. The snake turns into a long, jagged tooth, stabbing at a creature within 20 feet of me. Make a melee spell attack against the target. On a hit, it takes 1d6 piercing damage and 1d6 poison damage, and must succeed on a Constitution saving throw or be poisoned until the end of my next turn."+
		" \u2022 Sandstorm. The snake disintegrates into a cloud of fine particles, surging towards a creature within 30 feet of me. The target must succeed on a Constitution saving throw or be blinded until the start of my next turn."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 3rd level or higher, the poison damage from the Tetanus Tooth option increases by 1d6 for each slot level above 2nd.",
};

SpellsList["soften descent"] = {
	name : "Soften Descent",
	source : [["RGttYR", 294]],
	classes : ["bard", "bender (air)", "druid", "sorcerer", "tamer", "wizard"],
	level : 0,
	school : "Trans",
	time : "1 rea",
	timeFull : "1 reaction, which I take when I am about to hit a surface after falling",
	range : "S",
	rangeMetric : "S",
	components : "S",	
	duration : "Instantaneous",
	description : "ignore first 30 ft when calculating fall dmg",
	descriptionShorter : "ignore first 30 ft when calculating fall dmg",
	descriptionFull : 
		"With a gesture, I cause an updraft in the air, slowing my descent. I ignore the first 30 feet when calculating falling damage."+
		"This spell ignores an additional 30 feet of falling damage when I reach 5th level (60 feet), 11th level (90 feet), and 17th level (120 feet).",
};

SpellsList["spark"] = {
	name : "Spark",
	source : [["RGttYR", 295]],
	classes : ["bender (fire)", "sorcerer", "warlock", "wizard"],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "60 ft",
	rangeMetric : "18 m",
	components : "V,S",	
	duration : "Instantaneous", 
	description : "1d8 Lightning dmg, blinded on crit",
	descriptionShorter : "1d8 Lightning dmg, blinded on crit",
	descriptionCantripDie : "creature I hit `CD`d8 Lightning dmg, blinded on crit",
	descriptionFull : 
		"A spark of bright light arcs from me to a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d8 lightning damage. On a critical hit, the target is also blinded until the end of its next turn."+
		"The spell creates more than one spark when I reach higher levels: two sparks at 5th level, three sparks at 11th level, and four sparks at 17th level. I can direct the sparks at the same target or at different ones. Make a separate attack roll for each spark.",
};

SpellsList["steelskin"] = {
	name : "Steelskin",
	source : [["RGttYR", 295]],
	classes : ["bender (earth)", "druid", "ranger", "sorcerer", "tamer", "wizard"],
	level : 4,
	school : "Trans",
	time : "1 a",
	range : "touch",
	rangeMetric : "touch",
	components : "V,S,M",	
	compMaterial : "A steel figurine",	
	duration : "10 mins",
	description : "willing crea AC 19, gains 2d6 THP at start of its turn",
	descriptionShorter : "willing crea AC 19, gains 2d6 THP at start of its turn",
	descriptionFull : 
		"I reinforce a willing creature’s skin with the tenacity and strength of steel. For the spell’s duration, the target’s AC can’t be lower than 19, and, at the start of each of the target’s turns, it gains 2d6 temporary hit points." + AtHigherLevels + "When I cast this spell using a spell slot of 5th level or higher, the temporary hit points increase by 1d6 for each slot level above 4th.",
};

SpellsList["sundering sky"] = {
	name : "Sundering Sky",
	source : [["RGttYR", 295]],
	classes : ["bender (air)", "druid", "sorcerer", "warlock", "wizard"],
	level : 4,
	school : "Evoc",
	time : "1 a",
	range : "S",
	rangeMetric : "S",
	components : "V,S",
	duration : "Instantaneous",
	save : "Str/Dex",
	description : "leap and land with a loud boom (600 ft), crea near jump and land suffer different effects; see B",
	descriptionShorter : "leap and land with a loud boom (600 ft), crea near jump and land suffer different effects; see B",
	descriptionFull : 
		"With a flourish and a rush of air, I leap up to 60 feet to an unoccupied space I can see, landing with a thunderous boom that can be heard 600 feet away. Each creature within 10 feet of the space from which I jumped must make a Strength saving throw or be pushed 10 feet away from that space and knocked prone. Each creature within 20 feet of where I land must make a Dexterity saving throw, taking 5d10 thunder damage on a failure, or half as much damage on a success."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 5th level or higher, the distance I can leap increases by 30 feet, and the damage increases by 1d10, for each slot level above 4th.",
};

SpellsList["switcheroo"] = {
	name : "Switcheroo",
	source : [["RGttYR", 296]],
	classes : ["bard", "bender (air)", "cleric", "sorcerer", "tamer", "warlock", "wizard"],
	level : 3,
	school : "Trans",
	time : "1 a",
	range : "90 ft",
	rangeMetric : "27 m",
	components : "V,S",	
	duration : "Instantaneous",
	save : "Cha",
	description : "switch places with Large or smaller target, crea auto succeeds if there's no space to teleport",
	descriptionShorter : "switch places with Large or smaller target, crea auto succeeds if there's no space to teleport",
	descriptionFull :
		"I attempt to switch places with a Large or smaller target within range that I can see. The target must succeed on a Charisma saving throw or instantly teleport to my space whilst I teleport to the one it previously occupied. A creature automatically succeeds on this saving throw if there is not enough space to accommodate either of the teleporting creatures. A willing creature can choose to fail the saving throw." + AtHigherLevels + "When I cast this spell using a spell slot of 4th level or higher, the range of this spell increases by 30 feet for each slot level above 3rd. The maximum size of creature I can target increases to Huge when cast at 6th level or higher, and to Gargantuan when cast at 9th level.",
};

SpellsList["tempestuous transformation"] = {
	name : "Tempestuous Transformation",
	source : [["RGttYR", 296]],
	classes : ["bender (air)", "druid", "sorcerer"],
	level : 4,
	school : "Trans",
	time : "1 a",
	range : "S",
	rangeMetric : "S",
	components : "V,S",
	duration : "Conc, 10 mins",
	save : "Dex",
	description : "40 ft fly spd, move thru gaps, resist Bludg, Light, Pierc, Slash, Thunder; see B",
	descriptionShorter : "40 ft fly spd, move thru gaps, no OA, resist Bludg, Light, Pierc, Slash, Thunder; see B",
	descriptionFull : 
		"I endow myself with the shapeless fluidity of the wind. Until the spell ends, I can’t cast spells, and I gain the following benefits:"+
		" \u2022 I gain a flying speed of 40 feet."+
		" \u2022 I can move through gaps as small as 1 inch wide without squeezing, and my movement doesn’t provoke opportunity attacks."+
		" \u2022 I have resistance to bludgeoning, lightning, piercing, slashing, and thunder damage."+
		" \u2022 When I cast the spell and as a bonus action on my subsequent turns for the duration, I can force one creature I can see within 30 feet of me to make a Dexterity saving throw, as a stormy blast extends from me towards it. The target takes 2d8 lightning damage and 2d8 thunder damage on a failed save, or half as much damage on a successful one."+
		"When this spell ends, I must succeed on a DC 15 Constitution saving throw or gain 1 level of exhaustion.",
};

SpellsList["the bends"] = {
	name : "The Bends",
	source : [["RGttYR", 296]],
	classes : ["bender (water)", "druid", "sorcerer", "warlock", "wizard"],
	level : 3,
	school : "Trans",
	time : "1 a",
	range : "90 ft",
	rangeMetric : "27 m",
	components : "V,S",
	duration : "Instantaneous",
	save : "Con",
	description : "5d8 Poison dmg, Poisoned 1 min; saves half, no poisoned, d8 to d10 if completely submerged in water; see B",
	descriptionShorter : "5d8 Poison dmg, Poisoned for 1 min; saves half, no poisoned, d8 to d10 if completely submerged in water; see B",
	descriptionFull : 
		"I assault the internal chemistry of a creature I can see within range, causing bubbles of nitrogen to precipitate in its blood, forcing it to make a Constitution saving throw. On a failed save, the target takes 5d8 poison damage and is poisoned for 1 minute. On a successful save, the target takes half as much damage and isn’t poisoned. If the target is completely submerged in water, increase the damage dice from d8s to d10s."+
		"The target can repeat the saving throw at the end of each of its turns, ending the effect on a success."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd.",
};

SpellsList["wanyudo’s fury"] = {
	name : "Wanyudo’s Fury",
	source : [["RGttYR", 297]],
	classes : ["bender (fire)", "ranger", "sorcerer"],
	level : 2,
	school : "Evoc",
	time : "1 a",
	range : "S",
	rangeMetric : "S",
	components : "S",	
	duration : "Instantaneous",
	save : "Dex",
	description : "move 30 ft in str line, no OA, within 5 ft 4d6 Fire dmg; saves half",
	descriptionShorter : "move 30 ft in str line, no OA, within 5 ft 4d6 Fire dmg; saves half",
	descriptionFull : 
		"With a series of looping cartwheels and magic-enhanced flips, I move up to 30 feet in a straight line, my hands and feet spewing jets of flame. This movement does not provoke opportunity attacks. When I move within 5 feet of a creature, that creature must make a Dexterity saving throw, taking 4d6 fire damage on a failed save, or half as much damage on successful one. A creature can only be forced to make this saving throw once on each turn." + AtHigherLevels + "When I cast this spell using a spell slot of 3rd level or higher, the distance I can move increases by 10 feet, and the damage increases by 1d6, for each slot level above 2nd.",
};

SpellsList["water whip"] = {
	name : "Water Whip",
	source : [["RGttYR", 297]],
	classes : ["bender (water)", "druid", "sorcerer", "wizard"],
	level : 0,
	school : "Trans",
	time : "1 a",
	range : "60 ft",
	rangeMetric : "18 m",
	components : "V,S",	
	duration : "Instantaneous",
	save : "Str",
	description : "req source of water, melee spell attack against crea w/in 30 ft, 1d6 Slashing dmg; see B",
	descriptionShorter : "Req source of water, Melee spell attack against crea w/in 30 ft, 1d6 Slashing dmg; see B",
	descriptionCantripDie : "1 creature that I can see save or `CD`d6 Slashing dmg; req water source",
	descriptionFull : 
		"Choose a source of water that I can see within range that has a volume of at least 4 pints. Make a melee spell attack against a creature within 30 feet of the source of water. On a hit, the target takes 1d6 slashing damage and, if the creature is Large or smaller, I can force it to make a Strength saving throw, pulling it up to 10 feet towards the source of water on a failure."+
		"The spell’s damage increases by 1d6 and the distance it can pull a target increases by 5 feet when I reach 5th level (2d6 and 15 feet), 11th level (3d6 and 20 feet), and 17th level (4d6 and 25 feet).",
};

SpellsList["water wyrm"] = {
	name : "Water Wyrm",
	source : [["RGttYR", 297]],
	classes : ["bender (water)", "druid", "ranger", "sorcerer", "wizard"],
	level : 3,
	school : "Conj",
	time : "1 a",
	range : "S",
	rangeMetric : "S",
	components : "V,S,M",	
	compMaterial : "A dried tadpole",
	duration : "Conc, 1 min",
	save : "Str",
	description : "summon wyrm of water that moves with me, can do stuff on subsequent bonus actions; see B",
	descriptionShorter : "summon wyrm of water that moves with me, can do stuff on subsequent bonus actions; see B",
	descriptionFull : 
		"I conjure a thrashing wyrm of frothing water that moves with me, wielding it as an extension of my body for the duration. When I conjure the wyrm and as a bonus action on my subsequent turns, I can cause one of the following effects with it:"  + 
		"\n   " + toUni("Ice Fang") + ": The wyrm grows frozen fangs—jagged icicles that it uses to bite a creature or object within 20 feet of me. Make a melee spell attack against the target. On a hit, it takes 2d6 piercing damage and 1d6 cold damage." + 
		"\n   " + toUni("Engulf") + ": The wyrm leaves my side, surging toward a Large of smaller creature within 40 feet of me and attempting to engulf it in a torrent of water. The target must succeed on a Strength saving throw or be restrained. While restraining a creature in this way, the only effect I can use with the wyrm is Ice Fang, targeting the restrained creature regardless of range. A creature can use its action to make a Strength check against my spell save DC, freeing itself or a creature within its reach from the wyrm on a success. When the wyrm stops restraining a creature, the spell ends." + 
		"\n   " + toUni("Weird Water") + ": The wyrm assumes a defensive formation around me. Until the start of my next turn, ranged attacks that hit me have their damage reduced by 1d6 plus my spellcasting ability modifier." + 
		AtHigherLevels + "When I cast this spell using a spell slot of 4th level or higher, the cold damage from the Ice Fang option and the damage reduction of the Weird Water option increase by 1d6 for each slot level above 3rd.",
};

SpellsList["white water wall"] = {
	name : "White Water Wall",
	source : [["RGttYR", 298]],
	classes : ["bender (water)", "druid", "sorcerer", "wizard"],
	level : 5,
	school : "Conj",
	time : "1 a",
	range : "120 ft",
	rangeMetric : "36 m",
	components : "V,S,M",
	compMaterial : "A perfectly round pebble",	
	duration : "Conc, 1 min",
	save : "Str",
	description : "create wall of raging water that causes a series of effects; see B",
	descriptionShorter : "create wall of raging water that causes a series of effects; see B",
	descriptionFull : 
		"I create a wall of raging, turbulent water filled with debris. I can make the wall up to 60 feet long, 20 feet high, and 5 feet thick, or a ringed wall up to 20 feet in diameter, 20 feet high, and 5 feet thick. The wall is opaque, and ranged attacks can’t pass through the wall."+
		"If the wall cuts through a creature’s space when it appears, or a creature enters the wall's space, the creature must make a Strength saving throw. A Huge or larger creature automatically succeeds on this saving throw. On a failure a creature ceases to be grappled and becomes entrained by the water. Success or failure, a creature takes 3d10 bludgeoning damage. An entrained creature can’t breathe and has a speed of 0 feet."+
		"If the wall cuts through a creature’s space when it appears, or a creature enters the wall's space, the creature must make a Strength saving throw. A Huge or larger creature automatically succeeds on this saving throw. On a failure a creature ceases to be grappled and becomes entrained by the water. Success or failure, a creature takes 3d10 bludgeoning damage. An entrained creature can’t breathe and has a speed of 0 feet."+
		"White Water Whip. As a bonus action on my turn, I can cause a tendril of white water to grab at a creature within 10 feet of the wall. That creature must succeed on a Strength saving throw or take 3d10 slashing damage and be pulled into the wall where it becomes entrained by it."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 6th level or higher, the damage increases by 1d10 for each slot level above 5th. When I use a spell slot of 7th level or higher, the wall’s maximum length also increases by 30 feet, its thickness increases by 5 feet, and the size of creature that automatically succeeds on the Strength saving throw increases by one for each two slot levels above 5th (to Gargantuan at 7th level and all creatures having to make the saving throw at 9th level).",
};

SpellsList["wind drake"] = {
	name : "Wind Drake",
	source : [["RGttYR", 299]],
	classes : ["bender (air)", "druid", "ranger", "sorcerer", "wizard"],
	level : 1,
	school : "Conj",
	time : "1 a",
	range : "S",
	rangeMetric : "S",
	components : "V,S,M",
	compMaterial : "A dandelion seedhead",	
	duration : "Conc, 1 min",
	save : "Dex",
	description : "conjure a drake that moves with me, as a bns on subsquent turns can cause effects; see B",
	descriptionShorter : "conjure a drake that moves with me, as a bns on subsquent turns can cause effects; see B",
	descriptionFull : 
		"I conjure a tempestuous drake of spiralling wind that moves with me, wielding it as an extension of my body for the duration. When I conjure the drake and as bonus action on my subsequent turns, I can cause one of the following effects with it:"+
		"\n   " + toUni("Thunder Strike") + ": The drake slams into a creature or object within 20 feet of me with a deafening boom. Make a melee spell attack against the target. On a hit, the target takes 1d6 thunder damage."+
		"\n   " + toUni("Vortex Grapple") + ": The drake billows towards a Large or smaller creature within 20 feet of me, attempting to encase it in a vortex of air. The target must succeed on a Dexterity saving throw or be restrained for the duration, or until I use another effect of the wind drake. A target can use an action to make a Strength or Dexterity check against my spell save DC, escaping the drake on a success and ending the spell."+
		"\n   " + toUni("Windstrider") + ": The drake forms a whirling eddy at my feet, increasing my speed by 10 feet, and preventing my movement from provoking opportunity attacks. This effect lasts until the start of my next turn."+
		AtHigherLevels + 
		"When I cast this spell using a spell slot of 2nd level or higher, the damage from the Thunder Strike option increases by 1d6, and the Windstrider option’s bonus to my speed increases by 10 feet, for each slot level above 1st.",
};

SpellsList["wind strike"] = {
	name : "Wind Strike",
	source : [["RGttYR", 299]],
	classes : ["bender (air)", "paladin", "ranger", "wizard"],
	level : 2,
	school : "Trans",
	time : "1 a",
	range : "S",
	rangeMetric : "S",
	components : "S",
	duration : "Instantaneous",
	description : "leap 30 ft, melee attack (multiattack if have), extra 1d8 Thunder dmg per hit; see B",
	descriptionShorter : "leap 30 ft, melee attack (multiattack if have), extra 1d8 Thunder dmg per hit; see B",
	descriptionFull : 
		"With a blast of air, I leap up to 30 feet before making one unarmed strike or melee attack with a weapon I am holding. I can make two attacks if you have the Extra Attack class feature. On a hit, each attack deals an extra 1d8 thunder damage."+
		AtHigherLevels + 
		"When I cast this spell using a spell slot of 3rd level or higher, the distance I can leap increases by 15 feet, and each attack deals an extra 1d8 thunder damage on a hit, for each slot level above 2nd.",
};

// Add weapons (attack cantrips)

WeaponsList["concussion"] = {
	regExpSearch : /^(?=.*concussion).*$/i,
	name : "Concussion",
	source : [["RGttYR", 280]],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 8, "thunder"],
	range : "60 ft",
	description : "Con save, deafened, sound can be heard 100 ft away",
	abilitytodamage : false,
};

WeaponsList["earthen fist"] = {
	regExpSearch : /^(?=.*earthen)(?=.*fist).*$/i,
	name : "Earthen Fist",
	source : [["RGttYR", 281]],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 8, "bludgeoning"],
	range : "10 ft",
	description : "Str save or prone/pushed 5 ft away",
	abilitytodamage : false,
};

WeaponsList["pins & needles"] = {
	regExpSearch : /^(?=.*pins)(?=.*needles).*$/i,
	name : "Pins & Needles",
	source : [["RGttYR", 289]],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 8, "psychic"],
	range : "60 ft",
	description : "fail by 5 or more, DisAdv on next attack roll before end of its next turn",
	abilitytodamage : false,
	dc : true
};

WeaponsList["water whip"] = {
	regExpSearch : /^(?=.*water)(?=.*whip).*$/i,
	name : "Water Whip",
	source : [["RGttYR", 297]],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 6, "slashing"],
	range : "60 ft",
	description : "Large or smaller target make STR save or be pulled 10 ft towards water",
	abilitytodamage : false,
};




















