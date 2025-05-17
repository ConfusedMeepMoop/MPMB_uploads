if (sheetVersion < 13001012) {
  throw "This script was made for a newer version of the sheet (v13.1.14). Please use the latest version and try again.\nYou can get the latest version at www.flapkan.com.";
}
var iFileName = "Helianas Guide Spells.js";
RequiredSheetVersion("13.1.12");

SourceList["HGtMH"] = {
   name: "Heliana's Guide to Monster Hunting",
   abbreviation: "HGtMH",
   abbreviationSpellsheet : "HG",
   group: "Third Party",
   date: "2025-02-24",
};


/*
 * Spells
 */

SpellsList["acid rain"] = {
	name : "Acid Rain",
	source : [["HGtMH", 502]],
	classes : ["druid", "sorcerer", "warlock", "wizard"],
	level : 3,
	school : "Conj",
	time : "1 a",
	range : "90 ft",
	rangeMetric : "27 m",
	components : "V,S,M",
	compMaterial : "Drop of acid",
	duration : "Conc, 1 min",
	save : "Dex",
	description : "20 ft rad, 60 ft tall cylinder, DEX save, 4d6 Acid dmg; half on success; see B",
	descriptionFull : 
		"With a gentle patter, corrosive raindrops build to an acidic deluge in a 20-foot-radius, 60-foot-tall cylinder, centred on a point within range. When the rain begins, each creature in the area must make a Dexterity saving throw, taking 4d6 acid damage on failure or half as much damage on a success. For the duration, a creature must also make this saving throw when it enters the spell’s area for the first time on its turn or ends its turn there."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 4th level or higher, the acid damage increases by 1d6 for each slot level above 3rd.",
};

SpellsList["arcanomagnetic repulsion"] = {
	name : "Arcanomagnetic Repulsion",
	source : [["HGtMH", 502]],
	classes : ["cleric", "druid", "sorcerer", "warlock", "wizard"],
	level : 2,
	school : "Abjur",
	time : "1 a",
	range : "Self",
	rangeMetric : "Self",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Str",
	description : "Atk using ferrous weapon/ammo DISadv, 20 ft diff terrain, bns STR save, 1d6 Force dmg & prone; see B",
	descriptionFull : 
		"I emit waves of arcanomagnetic energy, distorting the trajectories of ferrous items. For the duration, attacks using ferrous weapons or ammunition made against I have disadvantage. In addition, the area within 20 feet of me is difficult terrain for creatures that are made of ferrous metal or are wearing ferrous armour."+
		"Magnetic Pulse. When I cast this spell and as a bonus action on my subsequent turns, I can force one Huge or smaller creature that is experiencing this difficult terrain to make a Strength saving throw. On a failure, it takes 1d6 force damage and is knocked prone."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 3rd level or higher, the radius of the difficult terrain increases by 5 feet and the damage increases by 1d6 for each slot level above 2nd.",
};

SpellsList["arcanomagnetic storm"] = {
	name : "Arcanomagnetic Storm",
	source : [["HGtMH", 502]],
	classes : ["druid", "sorcerer", "warlock", "wizard"],
	level : 7,
	school : "Evoc",
	time : "1 a",
	range : "150 ft",
	rangeMetric : "45 m",
	components : "V,S,M",
	compMaterial : "Piece of bismuth",
	duration : "Conc, 1 min",
	save : "Dex",
	description : "Ten 10-ft cubes all crea DEX save 4d8 Light; save halves; end turn STR save 1d8 Force & prone; see B",
	descriptionFull : 
		"A storm made of crackling lightning and arcanomagnetic winds appears in a location I choose within range. The area of the storm consists of up to ten 10-foot cubes, which I can arrange as I wish and last until the spell ends. Each cube must have at least one face adjacent to the face of another cube. As a bonus action at the start of each of my turns, I can remove one 10-foot cube, and place another 10-foot cube adjacent to the face of another cube."+
		"Each creature that starts its turn in the area or enters the area for the first time on its turn must make a Dexterity saving throw, taking 4d8 lightning damage on a failure, or half as much damage on a success. Each creature that ends its turn in the area must make a Strength saving throw, taking 4d8 force damage and being knocked prone on a failure, or taking half as much damage and not being knocked prone on a success. A creature made of ferrous metal or wearing ferrous armour has disadvantage on this Strength saving throw."+
		"The area is difficult terrain for any creatures made of ferrous metal or wearing ferrous armour."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 8th level or higher, the lightning and force damage both increase by 1d8 for each slot level above 7th.",
};

SpellsList["aura of impurity"] = {
	name : "Aura of Impurity",
	source : [["HGtMH", 502]],
	classes : ["paladin", "tamer", "warlock"],
	level : 4,
	school : "Abjur",
	time : "1 a",
	range : "Self",
	rangeMetric : "Self",
	components : "V",
	duration : "Conc, 1 min",
	save : "Cha",
	description : "30 ft rad aura, CHA save or drained, -1d4 on ability check/atk roll/save, healed HP halved; see B",
	descriptionFull : 
		"Enervating energy radiates from me in an aura with a 30-foot radius. Until the spell ends, the aura moves with me, centred on me. Each creature of my choice that enters the aura for the first time on its turn or starts its turn there must succeed on a Charisma saving throw or become drained until the end of its next turn. While drained, a creature must roll a d4 and subtract the number rolled from each ability check, attack roll, or saving throw it makes, and any hit points a creature regains are reduced by half.",
};

SpellsList["blinding radiance"] = {
	name : "Blinding Radiance",
	source : [["HGtMH", 503]],
	classes : ["cleric", "paladin", "sorcerer", "warlock"],
	level : 4,
	school : "Evoc",
	time : "1 a",
	range : "Self",
	rangeMetric : "Self",
	components : "V,S,M",
	compMaterial : "Strip of magnesium",
	duration : "Conc, 1 min",
	save : "Con",
	description : "50 ft bright light, crea w/in 10 ft CON save, 3d10 Radiant dmg & blinded; half on success; see B",
	descriptionFull : 
		"Bright light erupts from my form and dazzles those around me. For the duration, I emit bright light in a 50-foot radius and dim light for an additional 50 feet. Each creature that moves within 10 feet of me for the first time on its turn or that starts its turn there must make a Constitution saving throw. On a failure, a creature takes 3d10 radiant damage and is blinded until the start of its next turn. On a success, a creature takes half as much damage and isn’t blinded."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 5th level or higher, the damage increases by 1d10 for each slot level above 4th.",
};

SpellsList["bone cage"] = {
	name : "Bone Cage",
	source : [["HGtMH", 503]],
	classes : ["cleric", "druid", "paladin", "warlock", "wizard"],
	level : 5,
	school : "Necro",
	time : "1 a",
	range : "Self",
	rangeMetric : "Self",
	components : "V,S,M\u2020",
	compMaterial : "The bones of at least one non-animated corpse",
	duration : "1 min",
	save : "Dex",
	description : "Gain THP for each corpse, action to erupt bones, DEX save for piercing dmg = expended THP; see B",
	descriptionFull : 
		"I draw the bones from all corpses within range, forming a carapace of ribcages and femurs. I gain temporary hit points for each Small or larger corpse wholly or partly within range, according to its size, that last for the duration: (see book)"+
		"As an action on a subsequent turn, I can cause my armour of bones to erupt, expending all remaining temporary hit points. Each other creature within range must make a Dexterity saving throw, taking piercing damage equal to my expended temporary hit points on a failure, or half as much damage on a success. Whatever the manner in which the temporary hit points are lost, the bones shatter and can’t be used in this way again."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 6th level or higher, the radius of this spell increases by 10 feet for each slot level above 5th.",
};

SpellsList["can’t trip"] = {
	name : "Can’t Trip",
	source : [["HGtMH", 503]],
	classes : ["bard", "cleric", "druid", "tamer", "wizard"],
	level : 0,
	school : "Abjur",
	time : "1 a",
	range : "30 ft",
	rangeMetric : "9 m",
	components : "V,S",	
	duration : "1 rnd",
	description : "A willing crea I can see, immune to prone until start of my next turn, if alr prone, spell uprights them",
	descriptionFull : 
		"Choose a willing creature within range that I can see. Until the end of my next turn, that creature is immune to the prone condition. If it is already prone and is not restrained, this spell sets it on its feet."+
		"The number of creatures I can simultaneously target with this spell increases by 1 when I reach 5th level (2 creatures), 11th level (3 creatures), and 17th level (4 creatures).",
};

SpellsList["can’trip"] = {
	name : "Can’trip",
	source : [["HGtMH", 503]],
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	level : 0,
	school : "Abjur",
	time : "1 a",
	range : "60 ft",
	rangeMetric : "18 m",
	components : "V,S",	
	duration : "1 rnd",
	description : "Target has to succeed on a spellcasting ability check against spell save DC or waste action",
	descriptionFull : 
		"I temporarily tangle the Weave around a creature within range that I can see. Until the start of my next turn, each time the creature tries to cast a cantrip whilst this spell affects it, it must succeed on a spellcasting ability check against my spell save DC or waste its action (but not a spell slot). The spell ends if the target moves out of the spell’s range."+
		"The maximum level of spell inhibited by this cantrip increases when I reach 5th level (1st-level spells), 11th level (2nd-level spells), and 17th level (3rd-level spells).",
};

SpellsList["cannotrip"] = {
	name : "Cannotrip",
	source : [["HGtMH", 503]],
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	level : 1,
	school : "Abjur",
	time : "1 a",
	range : "60 ft",
	rangeMetric : "18 m",
	components : "V,S",	
	duration : "Conc, 1 min",
	description : "Target crea I can see, must make a spellcasting check each time try to cast spell of equal or lower level",
	descriptionFull : 
		"Choose a creature I can see within range. Each time the target tries to cast a spell of equal or lower level than this spell, it must succeed on a spellcasting ability check against my spell save DC or waste its action (but not its spell slot)."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 2nd level or higher, I inhibit spells 1 spell level higher for each slot level above 1st.",
};

SpellsList["chameleon skin"] = {
	name : "Chameleon Skin",
	source : [["HGtMH", 504]],
	classes : ["bard", "druid", "ranger", "tamer", "wizard"],
	level : 1,
	school : "Trans",
	time : "1 a",
	range : "Touch",
	rangeMetric : "Touch",
	components : "V,S,M",
	compMaterial : "Red, yellow, and blue pigment",
	duration : "Conc, 10 mins",
	description : "Target can take hide action as bns, if target did not move creas have DisAdv on Perception to see; see B",
	descriptionFull : 
		"I imbue a creature I touch with pigment so that its skin, and anything it wears or carries, slowly shifts hues to match its surroundings. For the duration, the target can take the Hide action as a bonus action on each of its turns, even when only lightly obscured."+
		"If the target did not move during its last turn, creatures have disadvantage on any Wisdom (Perception) checks made to see the target. Creatures who do not rely on sight, such as those with tremorsense, are immune to this effect."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 2nd level or higher, I can target one additional creature for each slot level above 1st.",
};

SpellsList["concussion"] = {
	name : "Concussion",
	source : [["HGtMH", 504]],
	classes : ["druid", "sorcerer", "warlock", "wizard"],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "60 ft",
	rangeMetric : "18 m",
	components : "V,S",
	duration : "Instantaneous",
	save : "Con",
	description : "CON save or 1d8 Thunder dmg & deafened",
	descriptionCantripDie : "CON save or `CD`d8 Thunder dmg & deafened",
	descriptionFull : 
		"With a thdoom that can be heard 100 feet away, I cause a sudden increase in the air pressure surrounding a creature I can see within range. The target must succeed on a Constitution saving throw or take 1d8 thunder damage and become deafened until the start of my next turn."+
		"This spell’s damage increases by 1d8 when I reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
};

SpellsList["conjure anomaly"] = {
	name : "Conjure Anomaly",
	source : [["HGtMH", 504]],
	classes : ["warlock", "wizard"],
	level : 5,
	school : "Conj",
	time : "1 min",
	range : "90 ft",
	rangeMetric : "27 m",
	components : "V,S,M",	
	compMaterial : "An aberration component",
	duration : "Conc, 1 h",
	description : "CR < 5 aberration, obeys command, no actions required, if conc broken lose control",
	descriptionFull : 
		"I call forth an aberration at random from the Anomalies, a distant and bizarre plane. Choose an unoccupied space within range. An aberration of challenge rating 5 or lower (GM’s choice) appears in the space. The aberration disappears when it drops to 0 hit points or when the spell ends."+
		"The aberration is friendly to me and my companions for the duration. Roll initiative for the aberration, which has its own turns. It obeys any verbal commands that I issue to it (no action required by me). If I don’t issue any commands to the aberration, it defends itself from hostile creatures, but otherwise takes no actions."+
		"If my concentration is broken, the aberration doesn’t disappear. Instead, I lose control of the aberration, it becomes hostile towards me and my companions, and it might attack. An uncontrolled aberration can’t be dismissed by me, and it disappears 1 hour after I summoned it."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 6th level or higher, the challenge rating increases by 1 for each slot level above 5th.",
};

SpellsList["corrupting ichor"] = {
	name : "Corrupting Ichor",
	source : [["HGtMH", 504]],
	classes : ["druid", "sorcerer", "warlock", "wizard"],
	level : 1,
	school : "Necro",
	time : "1 a",
	range : "60 ft",
	rangeMetric : "18 m",
	components : "S,M",	
	compMaterial : "Some phlegm",
	duration : "Instantaneous",
	description : "2d8 Necrotic dmg, action to remove phlegm, 1d4 necrotic dmg at start of turn and healed HP halved",
	descriptionFull : 
		"I spit a globule of phlegm at one creature within range. Make a ranged spell attack against the target. On a hit, the target takes 2d8 necrotic damage. In addition, until it uses its action to wipe off the phlegm, it takes 1d4 necrotic damage at the start of each of its turns and any hit points regained are reduced by half."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 2nd level or higher, the damage at the start of the target’s next turn increases by 1d4 for each slot level above 1st.",
};

SpellsList["daydream"] = {
	name : "Daydream",
	source : [["HGtMH", 505]],
	classes : ["bard", "druid", "warlock"],
	level : 1,
	school : "Ench",
	time : "1 a",
	range : "30 ft",
	rangeMetric : "9 m",
	components : "V,S,M",	
	compMaterial : "A tiny, four-panelled window",
	duration : "Conc, 1 min",
	save : "Wis",
	description : "WIS save or DISadv on Perception checks, crea immune to charm isn't affected; see B",
	descriptionFull : 
		"I float some mildly distracting thoughts into the mind of a humanoid I can see within range. The target must succeed on a Wisdom saving throw or have disadvantage on Wisdom (Perception) checks (taking a -5 penalty to its passive Perception as a result of this disadvantage) until the spell ends. A creature immune to being charmed is unaffected by this spell."+
		"A creature that succeeds on the saving throw by 5 or more is aware that an attempt was made to influence it with magic. Otherwise, the creature remains unaware of the magic that affected it."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 2nd level or higher, I can target one additional creature for each slot level above 1st, or I can extend the range of the spell by 30 feet for each slot level above 1st.",
};

SpellsList["depth charge"] = {
	name : "Depth Charge",
	source : [["HGtMH", 505]],
	classes : ["druid", "sorcerer", "warlock", "wizard"],
	level : 3,
	school : "Ench",
	time : "1 a",
	range : "90 ft",
	rangeMetric : "27 m",
	components : "V,S,M",	
	compMaterial : "Some metamorphic rock",
	duration : "Instantaneous",
	save : "Con",
	description : "20 ft rad sphere each crea CON save, 7d6 Thunder (9d6 if submerged); half on success; see B",
	descriptionFull : 
		"With a boom that can be heard 300 feet away (or 1,000 feet in a liquid), a pulse of thunder ripples out from a point I choose within range. Each creature in a 20-foot-radius sphere centred on that point must make a Constitution saving throw. A target takes 7d6 thunder damage on a failed save, or half as much damage on a successful one. This damage increases to 9d6 if the affected creature is submerged in a liquid."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.",
};

SpellsList["dreamwalk"] = {
	name : "Dreamwalk",
	source : [["HGtMH", 505]],
	classes : ["bard", "druid", "ranger", "warlock", "wizard"],
	level : 2,
	school : "Ench",
	time : "1 a",
	range : "30 ft",
	rangeMetric : "9 m",
	components : "V,S,M",	
	compMaterial : "A tiny dreamcatcher",
	duration : "24 h",
	description : "Ten willing crea can know when they are targetted by dream spell and sleep even if they usually cannot",
	descriptionFull : 
		"Choose up to ten willing creatures I can see within range. For the duration, they gain the ability to lucidly dream whenever they sleep. While lucid dreaming, a creature always knows if the dream spell is being used to target it. In addition, when I cast this spell, each creature affected by it can choose to instantly fall asleep, even if that creature has a trait that normally prevents it from being magically put to sleep (such as elves’ Fey Ancestry).",
	ritual : true,
};

SpellsList["eelskin"] = {
	name : "Eelskin",
	source : [["HGtMH", 505]],
	classes : ["druid", "sorcerer", "tamer", "warlock", "wizard"],
	level : 2,
	school : "Evoc",
	time : "1 a/bns",
	range : "Touch",
	rangeMetric : "Touch",
	components : "V,S,M",	
	compMaterial : "Some jellied eel",
	duration : "Conc, 1 min",
	description : "Crea unarmeed strikes/natural weapons become magical, first hit on its turn +1d8 Light dmg; see B",
	descriptionFull : 
		"I cause the skin of a willing creature I touch to produce a slimy, electrified mucous. The creature’s unarmed strikes and natural weapon attacks become magical for the duration of the spell. The first time the creature hits with an unarmed strike or an attack using a natural weapon on its turn, it deals an additional 1d8 lightning damage as the stored lightning discharges."+ 
		"Slimy. For the duration, the creature has advantage on checks and saves made to avoid being grappled or restrained, and disadvantage on any attempts it makes to grapple another creature."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 4th level or higher, the damage increasesd by 1d8 for each two slot levels above 2nd.",
};

SpellsList["endoleech"] = {
	name : "Endoleech",
	source : [["HGtMH", 506]],
	classes : ["druid", "sorcerer", "warlock", "wizard"],
	level : 2,
	school : "Evoc",
	time : "1 a",
	range : "Touch",
	rangeMetric : "Touch",
	components : "V,S,M",	
	compMaterial : "A toenail lost to frostbite",
	duration : "Instantaneous",
	description : "Melee spell atk 5d6 Cold dmg & can't take rea & 15 ft spd reduce, my spd + 15 ft; see B",
	descriptionFull : 
		"I touch a creature, absorbing the energy from its body and bolstering my metabolism. Make a melee spell attack against a creature I can reach. On a hit, the target takes 5d6 cold damage and can’t take reactions until the end of its next turn. In addition, until the end of its next turn, its speed is reduced by 15 feet and my speed is increased by 15 feet."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd.",
};

SpellsList["endure"] = {
	name : "Endure",
	source : [["HGtMH", 506]],
	classes : ["cleric", "druid", "paladin", "ranger", "tamer", "warlock"],
	level : 5,
	school : "Necro",
	time : "1 a",
	range : "60 ft",
	rangeMetric : "18 m",
	components : "V,S,M\u2020",
	compMaterial : "Gem-encrusted cockroach worth 250 gp",
	duration : "1 min",
	description : "Crea immune to exhaustion, poisoned, incap, stunned, paralysed, unconsciousness for duration; see B",
	descriptionFull : 
		"Choose a willing creature I can see within range; it ceases to heed the pained calls of its body, needing neither food nor water to exist. An affected creature ignores the effects of exhaustion, the poisoned condition, and cannot be incapacitated, stunned, paralysed, or fall unconscious. Each time an affected creature takes damage that would reduce its hit points to 0, it makes a death saving throw instead. If the creature fails 3 death saving throws, it dies."+
		"When the spell ends, the creature gains a level of exhaustion for each death saving throw it failed. If the creature is resurrected after dying from these failed death saving throws, it does not regain consciousness for a duration equal to the time for which this spell affected it. When it wakes, it gains 3 levels of exhaustion."+
		"If the creature is still alive when the spell ends, it falls unconscious for a duration equal to the time for which this spell affected it. Whilst unconscious in this way, the creature can not be awakened by any means short of a wish spell."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 6th level or higher, I can increase the duration to 10 minutes (6th level), 1 hour (7th level), 8 hours (8th level), or 1 day (9th level).",
};

SpellsList["enrage"] = {
	name : "Enrage",
	source : [["HGtMH", 506]],
	classes : ["bard", "sorcerer", "warlock"],
	level : 3,
	school : "Ench",
	time : "1 a",
	range : "120 ft",
	rangeMetric : "36 m",
	components : "V,S,M",
	compMaterial : "A red handkerchief",
	duration : "Conc, 1 min",
	save : "Cha",
	description : "20 ft rad each humanoid CHA save or become enraged; see B",
	descriptionFull : 
		"I attempt to create violent emotions in a group of people. Each humanoid in a 20-foot-radius sphere centred on a point I choose within range must make a Charisma saving throw; a creature can choose to fail this saving throw if it wishes. A creature that fails this saving throw becomes enraged for the duration."+ 
		"While enraged, a target becomes hostile towards all creatures. An enraged creature that is concentrating on a spell must succeed on a DC 10 Constitution saving throw at the start of each of its turns or lose concentration on the spell."+
		"As an action, I can force an enraged creature to use its reaction to make one melee weapon attack against one randomly determined creature within the enraged creature’s reach. If the enraged creature was friendly towards the target of its attack before this spell was cast, the enraged creature can repeat the saving throw immediately after making the attack, ending the effect on itself on a success."+
		"An enraged creature can repeat the saving throw whenever it takes damage, ending the effect on itself on a success. When the spell ends, the creature reverts to its previous disposition again, unless the GM rules otherwise."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 4th level or higher and use an action to force an enraged creature to make a melee weapon attack, I can force one additional enraged creature to make a melee weapon attack for each slot level above 3rd.",
};

SpellsList["ferocious strike"] = {
	name : "Ferocious Strike",
	source : [["HGtMH", 506]],
	classes : ["bard", "druid", "sorcerer", "tamer", "warlock"],
	level : 0,
	school : "Trans",
	time : "1 a",
	range : "Self",
	rangeMetric : "Self",
	components : "V,S",
	duration : "Instantaneous",
	description : "Weapon atk, on hit extra 1d4 dmg of weapon's type",
	descriptionCantripDie : "Weapon atk for additional `CD`d4 dmg",
	descriptionFull : 
		"With a pulse of adrenaline, a tremendous ferocity comes upon me. Make one weapon attack against a target within my reach or range. If this attack hits, the target takes additional 1d4 damage of the weapon’s damage type."+
		"This spell’s damage increases by 1d4 when I reach 5th level (2d4), 11th level (3d4) and 17th level (4d4).",
};

SpellsList["feverskin"] = {
	name : "Feverskin",
	source : [["HGtMH", 507]],
	classes : ["cleric", "druid", "sorcerer", "tamer", "warlock", "wizard"],
	level : 5,
	school : "Trans",
	time : "1 a",
	range : "Self",
	rangeMetric : "Self",
	components : "V,S,M\u2020",
	compMaterial : "A red hot chilli pepper, which the spell consumes",
	duration : "Conc, 1 min",
	description : "Melee spell attack, 6d6 Fire dmg, action repeat. Walk spd +15 ft, +2d6 THP at start of each turn; see B",
	descriptionFull : 
		"I eat a chilli pepper, my metabolism increases, and my skin begins to burn to the touch. Make a melee spell attack against a creature within my reach. On a hit, the target takes 6d6 fire damage. Until the spell ends, I can use an action on each of my subsequent turns to make this attack again."+
		"For the duration, my walking speed increases by 15 feet, and I gain 2d6 temporary hit points at the start of each of my turns."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 6th level or higher, the damage increases by 1d6 for each slot level above 5th.",
};

SpellsList["firther’s shadow"] = {
	name : "Firther’s Shadow",
	source : [["HGtMH", 507]],
	classes : ["sorcerer", "warlock", "wizard"],
	level : 3,
	school : "Ench",
	time : "1 a",
	range : "90 ft",
	rangeMetric : "27 m",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Int",
	description : "INT save 4d10 Psychic dmg & learn something about crea, roll table; see B",
	descriptionFull : 
		"I warp and distort the memories of a creature I can see within range, bringing forth hideous and disturbing mental images. The creature must make an Intelligence saving throw. On a failed save, the creature takes 4d10 psychic damage and I learn something about the creature (roll a d6 and consult the following table): (see book)"+
		"On a successful save, the creature takes half as much damage and I don’t learn anything. A creature with an Intelligence score of 4 or lower automatically succeeds on the saving throw."+
		"If a creature fails the initial saving throw then, on each of my turns for the duration, I can use my action to force the creature to make an Intelligence saving throw. On a failure, the creature takes 4d6 psychic damage and I learn something about the creature (roll a d6 and consult the table above). On a success, the creature takes half as much damage, I don’t learn anything, and the spell ends. The spell also ends if the target is ever outside the spell’s range."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 4th level or higher, the initial and ongoing damage increases by 1d10 and 1d6, respectively, for each slot level above 3rd.",
};

SpellsList["fixit"] = {
	name : "Fixit",
	source : [["HGtMH", 507]],
	classes : ["bard", "cleric", "sorcerer", "warlock", "wizard"],
	level : 1,
	school : "Trans",
	time : "1 min",
	range : "Touch",
	rangeMetric : "Touch",
	components : "V,S,M",
	compMaterial : "Adhesive tape with ducks drawn on it",
	duration : "10 min",
	description : "Imbue a broken item no more than 20 ft, making it whole once more; see B",
	descriptionFull : 
		"I imbue a broken item no larger than 20 feet in any dimension with pure belief. For the duration, the item is whole once more. In addition, if I am familiar with the item’s magical function (GM’s discretion) and its rarity was no higher than common, the item regains its magical properties for the duration."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 3rd level or higher, the rarity of the item that can regain its magical properties increases to uncommon (3rd level), rare (5th level), very rare (7th level), or legendary (9th level).",
};

SpellsList["flare"] = {
	name : "Flare",
	source : [["HGtMH", 508]],
	classes : ["cleric", "sorcerer", "wizard"],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "60 ft",
	rangeMetric : "18 m",
	components : "V,S,M",	
	compMaterial : "A strip of magnesium",
	duration : "Instantaneous",
	description : "1d8 Radiant dmg, if crit, adv on atk against target until end of my next turn, alternatively shoot flare",
	descriptionCantripDie : "Ranged hit for `CD`d8 Radiant dmg",
	descriptionFull : 
		"I launch a pulse of radiant energy at a target within range. Make a ranged spell attack against the target. On a hit, the target takes 1d8 radiant damage. On a critical hit, the target is covered in glittering mystical light, granting advantage on attack rolls against the target until the end of my next turn."+
		"Alternatively, I can launch the pulse at a point in the air within range where it slowly falls towards the ground. Until the end of my next turn, the flare sheds bright light in a 20-foot radius and dim light for an additional 20 feet."+
		"This spell’s damage increases by 1d8 and the radius of the bright and dim light both increase by 10 feet when I reach 5th level (2d8, 30 feet), 11th level (3d8, 40 feet), and 17th level (4d8, 50 feet).",
};

SpellsList["flipperform"] = {
	name : "Flipperform",
	source : [["HGtMH", 508]],
	classes : ["druid", "ranger", "sorcerer", "tamer", "wizard"],
	level : 1,
	school : "Trans",
	time : "1 a",
	range : "30 ft",
	rangeMetric : "9 m",
	components : "V,S,M",
	compMaterial : "A fish’s fin",
	duration : "1 h",
	description : "One willing crea grows webbed fingers and gains swim spd = walk spd",
	descriptionFull : 
		"I change the morphology of a willing creature within range. It grows webbed fingers and gains a swimming speed equal to its walking speed."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 2nd level or higher, I can affect one additional creature for each slot level above 1st. In addition, the duration of the spell doubles for each slot level above 1st.",
	ritual : true,
};

SpellsList["food coma"] = {
	name : "Food Coma",
	source : [["HGtMH", 508]],
	classes : ["bard", "cleric", "druid", "paladin", "tamer"],
	level : 3,
	school : "Ench",
	time : "1 a",
	range : "Touch",
	rangeMetric : "Touch",
	components : "V,S,M\u2020",
	compMaterial : "A turkey drumstick and a cranberry-coloured ruby worth at least 50 gp",
	duration : "1 h",
	description : "One willing crea unconscious for 1 h, at the end restore all HP; see B",
	descriptionFull : 
		"I crush a ruby into dust, sprinkling it over a turkey drumstick, which wafts with an alluring aroma. A willing creature that entirely consumes the meat of this drumstick falls asleep and is unconscious for 1 hour, drowning out the sound of relatives asking whether they have a boyfriend yet or when they expect to have babies."+
		"I can only be woken early by taking damage or by a greater restoration or wish spell. At the end of the hour, I wake feeling refreshed and have all of my hit points restored. If I am woken prematurely, the spell ends with no effect and I am grumpy."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 4th level or higher, I may enchant an additional turkey drumstick (and hence affect one additional creature) for each slot level above 3rd.",
	ritual : true,
};

SpellsList["frogskin"] = {
	name : "Frogskin",
	source : [["HGtMH", 508]],
	classes : ["druid", "sorcerer", "tamer", "warlock", "wizard"],
	level : 4,
	school : "Trans",
	time : "1 a",
	range : "Self",
	rangeMetric : "Self",
	components : "V,S,M",
	compMaterial : "Some frogspawn",
	duration : "Conc, 1 min",
	description : "Melee spell attack, 3d10 Poison dmg & poisoned, action to repeat. Has slimy feature for duration; see B",
	descriptionFull : 
		"I morph my skin and clothing into that of a slimy, poisonous frog. Make a melee spell attack against a creature within my reach. On a hit, the target takes 3d10 poison damage and is poisoned until the end of my next turn. Until the spell ends, I can use an action on each of my subsequent turns to make this attack again."+
		"Slimy. For the duration, I have advantage on checks and saves made to avoid being grappled or restrained, and disadvantage on any attempts I make to grapple a target. Each creature grappling me, or that I am grappling, must make a Constitution saving throw at the start of each of its turns, taking 3d10 poison damage on a failure, or half as much damage on a success."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 5th level or higher, both damages increase by 1d10 for each slot level above 4th.",
};

SpellsList["fungal infection"] = {
	name : "Fungal Infection",
	source : [["HGtMH", 508]],
	classes : ["druid", "warlock", "wizard"],
	level : 4,
	school : "Necro",
	time : "1 a",
	range : "90 ft",
	rangeMetric : "27 ft",
	components : "V,S,M",
	compMaterial : "A mushroom",
	duration : "Conc, 1 min",
	save : "Con",
	description : "15 ft rad sphere CON save or become cursed, choices in book; see B",
	descriptionFull : 
		"With an exhalation, fungal spores waft their way towards a point within range. Each creature in a 15-foot-radius sphere centred on that point must succeed on a Constitution saving throw or become cursed until the spell ends."+
		"When I cast the spell, choose one of the following fungi to grow on the cursed creatures:"+
		" \u2022 Amanita Rotgut. The creature immediately takes 2d6 poison damage and becomes poisoned. While poisoned in this way, the creature takes 2d6 poison damage at the end of each of its subsequent turns."+
		" \u2022 Necrotising Zygomycosis. The creature immediately takes 2d8 necrotic damage, and takes 2d8 necrotic damage at the start of each of its turns."+
		" \u2022 Psilocybin Quickitrippiae. The creature begins ‘tripping’. It must roll a d4 at the start of each of its turns. On a 1, the creature doesn’t move or take actions this turn."+
		" \u2022 Paralysing Mucorales. At the end of each of the creature’s turns, it becomes stunned until the start of its next turn. If the creature fails a saving throw against this spell by 5 or more then, if it would be stunned, it is paralysed instead."+
		" \u2022 Raging Henbane. The creature becomes charmed by me and must use its reaction at the start of each of its turns to make one weapon attack against a randomly determined creature within its reach/range other than me."+
		" \u2022 Veiled Lady. The creature’s vision darkens to a pinhole; the creature has disadvantage on Dexterity saving throws, and ranged attacks have advantage against the creature."+
		"An affected creature can repeat the saving throw at the end of each of its turns (after the effects of this spell have triggered), ending the effect on itself on a success."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 5th level or higher, the damage (both initial and later) of Amanita Rotgut and Necrotising Zygomycosis increases by 1d6 and 1d8, respectively, for each slot level above 4th. When I cast this spell using a spell slot of 6th level or higher, I can choose two different fungi to grow on affected targets instead of one.",
};

SpellsList["gravity repulsion"] = {
	name : "Gravity Repulsion",
	source : [["HGtMH", 509]],
	classes : ["sorcerer", "warlock", "wizard"],
	level : 4,
	school : "Evoc",
	time : "1 a",
	range : "Self",
	rangeMetric : "Self",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Str",
	description : "Ranged weapon atk has DISadv, 20 ft diff terrain, bns to Gravity Pulse; see B",
	descriptionFull : 
		"I emit waves of gravitational energy, distorting the trajectories of incoming projectiles and making movement difficult. For the duration, ranged weapon attacks made against I have disadvantage. In addition, the area within 20 feet of me is difficult terrain for creatures of my choice that I can see."+
		"Gravity Pulse. When I cast this spell and as a bonus action on my subsequent turns, I can create a gravity pulse, forcing one Huge or smaller creature of my choice that I can see within 20 feet of me to make a Strength saving throw. On a failure, the creature is pushed 10 feet in a direction of my choice and falls prone, taking 3d6 force damage."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 5th level or higher, the radius of the difficult terrain increases by 5 feet, and gravity pulse’s damage and range increase by 1d6 and 5 feet, respectively, for each slot level above 4th.",
};

SpellsList["gravity smash"] = {
	name : "Gravity Smash",
	source : [["HGtMH", 509]],
	classes : ["sorcerer", "warlock", "wizard"],
	level : 5,
	school : "Evoc",
	time : "1 a",
	range : "120 ft",
	rangeMetric : "36 m",
	components : "V,S",
	duration : "Conc, 1 rnd",
	save : "Str",
	description : "When spell end 40 ft rad, 100 ft tall cylinder, STR save 8d10 Force dmg & prone; half on success; see B",
	descriptionFull : 
		"I strike the ground, choosing a point I can see within range to begin accumulating gravity. A 40-foot-radius, 100-foot-high cylinder centred on that point becomes difficult terrain until the start of my next turn. When the spell ends, the gravity reaches a critical magnitude, smashing all creatures in the cylinder downwards; each creature in the area must make a Strength saving throw. If the spell lasts its full duration and ends at the start of my next turn, then, on a failed saving throw, a creature takes 8d10 force damage and is knocked prone. If the spell ends before the start of my next turn, a creature takes 4d10 force damage on a failure instead. On a successful save, a creature takes half as much damage and isn’t knocked prone."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 6th level or higher, both damage values increase by 1d10 for each slot level above 5th.",
};

SpellsList["howl"] = {
	name : "Howl",
	source : [["HGtMH", 510]],
	classes : ["druid", "tamer"],
	level : 0,
	school : "Trans",
	time : "1 a",
	range : "Self",
	rangeMetric : "Self",
	components : "V",	
	duration : "1 rnd",
	description : "Howl, 1000 ft, target can understand, if others who can understand howl; see B",
	descriptionFull : 
		"I utter a bestial, magically-augmented howl that can be heard for 1,000 feet. The howl can manifest as any animal call I’ve heard, such as the screech of a hawk or trumpet of an elephant. Choose one creature with whom I am familiar as the recipient: if it can hear my howl, it understands my meaning and can respond in a likewise manner."+
		"Creatures other than my recipient that hear the howl and that are under the effects of the comprehend languages spell or similar magic, or that can understand beasts, can understand the howl’s meaning. Otherwise, the howl is unintelligible to creatures that can hear it.",
};

SpellsList["humperdink’s halitosis"] = {
	name : "Humperdink’s Halitosis",
	source : [["HGtMH", 510]],
	classes : ["bard", "sorcerer", "warlock"],
	level : 1,
	school : "Trans",
	time : "1 a",
	range : "Self",
	rangeMetric : "Self",
	components : "V,S",
	duration : "Conc, 1 rnd",
	save : "Con",
	description : "15 ft cone CON save 3d4 Acid dmg; half on success; see B",
	descriptionFull : 
		"I belch forward acidic fumes, afflicting those in a 15-foot cone before me. The fumes spread around corners. All creatures in the area must make a Constitution saving throw, taking 3d4 acid damage on a failure or half as much damage on a success."+ 
		"The fumes linger until the end of my next turn or until dispersed by a moderate or stronger wind. Any creature ending its turn in the area must make a Constitution saving throw, taking 3d4 acid damage or half as much damage on a success."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 2nd level or higher, the damage (both initial and later) increases by 1d4 for each slot level above 1st.",
};

SpellsList["incorporeality"] = {
	name : "Incorporeality",
	source : [["HGtMH", 510]],
	classes : ["bard", "cleric", "druid", "sorcerer", "tamer", "warlock", "wizard"],
	level : 5,
	school : "Trans",
	time : "1 a",
	range : "Touch",
	rangeMetric : "Touch",
	components : "V,S",
	duration : "Conc, 1 min",
	description : "One willing crea becomes translucent, can choose to be incorporal (no action); see B",
	descriptionFull : 
		"I touch a willing creature, causing it, and everything it is wearing and carrying, to become translucent. At the start of each of the target’s turns for the duration, it can choose to become incorporeal (no action required) until the end of its turn. While incorporeal, it has advantage on Stealth checks; it gains resistance to nonmagical bludgeoning, piercing, and slashing damage; and it can move through other creatures and objects as if they were difficult terrain. If the target ends its turn inside an object, it is shunted to the nearest unoccupied space, taking 1d10 force damage for every 5 feet it is shunted."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 6th level or higher, I can choose to increase the spell’s duration, or the number of targets, for each slot level above 5th. If I choose duration, the duration increases in increments to 10 minutes (6th level), 1 hour (7th level), 8 hours (8th level), or 24 hours (9th level). If I choose to increase the number of targets, the number increases by 1 for each slot level.",
};

SpellsList["inequality"] = {
	name : "Inequality",
	source : [["HGtMH", 510]],
	classes : ["bard", "cleric", "paladin", "tamer"],
	level : 2,
	school : "Ench",
	time : "1 a",
	range : "30 ft",
	rangeMetric : "9 m",
	components : "V,S,M",
	compMaterial : "A drop of blood and water, mixed",
	duration : "Conc, 1 min",
	save : "Cha",
	description : "Favour & Disfavour two crea, Disfavoured crea CHA save or efffects occur; see B",
	descriptionFull : 
		"I twist the fates of two creatures I can see, both of whom must be within range. Choose one target to favour and one to disfavour. The disfavoured target must succeed on a Charisma saving throw or the following effects occur:"+
		" \u2022 Whenever the favoured target makes an attack roll or saving throw before the spell ends, the favoured target can roll a d4 and add the number rolled to the attack or saving throw."+
		" \u2022 Whenever the disfavoured target makes an attack roll or saving throw before the spell ends, the disfavoured target must roll a d4 and subtract the number rolled from the attack or saving throw."+
		" \u2022 The disfavoured target’s speed is halved, whilst the favoured target’s speed increases by half."+
		"The disfavoured target’s speed is halved, whilst the favoured target’s speed increases by half."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 4th level or higher, I can link two other creatures, favouring one, and disfavouring the other, for each two slot levels above 2nd.",
};

SpellsList["influenza"] = {
	name : "Influenza",
	source : [["HGtMH", 511]],
	classes : ["cleric", "druid", "warlock"],
	level : 2,
	school : "Necro",
	time : "1 a",
	range : "Self",
	rangeMetric : "Self",
	components : "V,S,M",
	compMaterial : "Some pollen",
	duration : "Conc, 1 min",
	save : "Dex",
	description : "30 ft cone DEX save, 2d6 Poison dmg & poisoned; success half. Whilst poisoned, d12 for effect; see B",
	descriptionFull : 
		"With a mighty sneeze that can be heard up to 300 feet away, I blast forth a 30-foot cone of phlegm, bad breath, and viral pathogens. Each creature in the area must make a Dexterity saving throw. On a failed save, a creature takes 3d6 poison damage and is poisoned for the duration. On a successful save, the creature takes half as much damage and isn’t poisoned. A poisoned creature can make a Constitution saving throw at the end of each of its turns, ending the effect on itself on a success."+
		"Whilst poisoned in this way, a creature must roll a d12 at the start of each of its turns. On a 3 or lower, it is racked by a coughing fit and becomes incapacitated until the start of its next turn. Each creature within 5 feet of a creature when it becomes incapacitated in this way must succeed on a Constitution saving throw or also become poisoned in this way for the spell’s duration."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 and the value a poisoned creature must roll on the d12 to cause a coughing fit increases by 1 for each slot level above 3rd.",
};

SpellsList["initiative"] = {
	name : "Initiative",
	source : [["HGtMH", 511]],
	classes : ["bard", "ranger", "sorcerer", "tamer", "wizard",],
	level : 1,
	school : "Ench",
	time : "1 rea",
	timeFull : "1 reaction, which I take when initiative is rolled",
	range : "30 ft",
	rangeMetric : "9 m",
	components : "V,S,M",
	compMaterial : "A coffee bean",
	duration : "Instantaneous",
	description : "One illing crea. If surprised, no longer surprised & take turn as normal, else, ADV on initiative",
	descriptionFull : 
		"As a reaction when initiative is rolled, choose a willing creature I can see within range; it begins to subtly jitter as its pupils dilate. If the target is surprised, it is no longer surprised, and takes its turn on the first round as normal. If the target is not surprised, it gains advantage on the initiative roll that prompted this spell."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 2nd level or higher, I may target one additional creature for each spell slot above 1st.",
};

SpellsList["lungburst"] = {
	name : "Lungburst",
	source : [["HGtMH", 511]],
	classes : ["sorcerer", "warlock", "wizard"],
	level : 6,
	school : "Evoc",
	time : "1 a",
	range : "90 ft",
	rangeMetric : "27 m",
	components : "V,S",
	duration : "Instantaneous",
	save : "Con",
	description : "One crea CON save, 7d6 Thunder & 7d6 Necrotic dmg & begins suffocating; half on success; see B",
	descriptionFull : 
		"I cause rapid unpredictable changes in the internal air pressure of a creature I can see within range, rupturing its breathing apparatus. The creature must make a Constitution saving throw. A creature that is holding its breath makes this saving throw with disadvantage. On a failure, a creature takes 7d6 thunder damage, 7d6 necrotic damage, and immediately begins suffocating. On a success, a creature takes half as much damage and does not begin suffocating. A creature suffocating in this way can repeat the saving throw at the end of each of its turns, ending its suffocation on a success."+
		"A creature that does not need to breathe is immune to the effects of this spell. A greater restoration, heal, or wish spell can restore a creature’s ability to breathe, and end its suffocation."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 7th level or higher, the thunder and necrotic damage both increase by 1d6 for each slot level above 6th.",
};

SpellsList["magnetite shard"] = {
	name : "Magnetite Shard",
	source : [["HGtMH", 511]],
	classes : ["druid", "sorcerer", "warlock", "wizard"],
	level : 3,
	school : "Evoc",
	time : "1 a",
	range : "90 ft",
	rangeMetric : "27 m",
	components : "V,S,M",
	compMaterial : "A piece of magnetite",
	duration : "Instantaneous",
	save : "Dex",
	description : "20ft rad sphere, DEX save, 4d6 Cold & 3d6 Pierc dmg; success half, crea w/ ferrous DISadv on save",
	descriptionFull : 
		"I fling a supercooled piece of magnetite at a point I can see within range, where it detonates in an explosion of icy, metallic shards. Each creature in a 20-foot-radius sphere centred on that point must make a Dexterity saving throw, taking 4d6 cold damage and 3d6 piercing damage on a failure, or half as much damage on a success. Creatures made of a ferrous material or wearing ferrous armour have disadvantage on this saving throw."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 4th level or higher, the cold damage increases by 1d6 for each slot level above 3rd.",
};

SpellsList["magnetobolt"] = {
	name : "Magnetobolt",
	source : [["HGtMH", 512]],
	classes : ["druid", "sorcerer", "warlock", "wizard"],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "90 ft",
	rangeMetric : "27 m",
	components : "V,S",
	duration : "Instantaneous",
	save : "Str",
	description : "Ranged spell atk, 1d6 Force dmg, STR save or Prone. Crea w/ ferrous material DISadv on save",
	descriptionCantripDie : "Ranged hit for `CD`d6 Force dmg, STR save or Prone. Crea w/ ferrous material DISadv on save",
	descriptionFull : 
		"A near-invisible pulse of arcanomagnetic energy shoots towards a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d6 force damage and must succeed on a Strength saving throw or be knocked prone. A creature made of ferrous metal or wearing ferrous armour has disadvantage on this saving throw."+
		"This spell’s damage increases by 1d6 when I reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
};

SpellsList["mass leech"] = {
	name : "Mass Leech",
	source : [["HGtMH", 512]],
	classes : ["cleric", "tamer", "warlock", "wizard"],
	level : 3,
	school : "Necro",
	time : "1 a",
	range : "Self",
	rangeMetric : "Self",
	components : "V,S,M",
	compMaterial : "A live leech that has fed on humanoid blood in the past 24 hours",
	duration : "Instantaneous",
	save : "Con",
	description : "Each crea w/in 20 ft, CON save, 2d8 Necro dmg; success half. Caster regains HP; see B",
	descriptionFull : 
		"I drain the life force of those around me, turning their limbs heavy and their bones cold. Each creature of my choice within 20 feet of me must make a Constitution saving throw. A target takes 2d8 necrotic damage on a failure, or half as much damage on a success. The caster regains hit points equal to half the total amount of necrotic damage dealt to Small or larger creatures."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd.",
};

SpellsList["maechamagic"] = {
	name : "Mechamagic",
	source : [["HGtMH", 512]],
	classes : ["bard", "wizard"],
	level : 4,
	school : "Trans",
	time : "1 a",
	range : "Touch",
	rangeMetric : "Touch",
	components : "V,S,M",
	compMaterial : "Adhesive tape with gorillas drawn on it",
	duration : "1 h",
	save : "Con",
	description : "Touch one item, instilling it with a property, end spell by touching item/casting it again; see B",
	descriptionFull : 
		"I touch one item, instilling it with levels of belief worthy of a kobold and granting it one of the following properties, based on the item type, for the duration."+
		" \u2022 Armour. A creature wearing this armour gains 1d4 temporary hit points at the start of each of its turns."+
		" \u2022 Belt. A creature wearing this belt gains a flying speed of 30 feet."+
		" \u2022 Boots. A creature wearing these boots has its walking speed increased by 10 feet and its jump distance tripled."+
		" \u2022 Cloak. A creature wearing this cloak has advantage on Stealth checks it makes to hide and can hide while only lightly obscured."+
		" \u2022 Gloves. A creature wearing these gloves gains a climbing speed equal to its walking speed and can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check. Additionally, it has advantage on any ability checks it makes related to grappling."+
		" \u2022 Headwear. A creature wearing this headwear doesn’t need to breathe, has advantage on saving throws against being poisoned, and has resistance to poison damage."+
		"I can end this spell early by touching the item. The spell ends if I cast it again."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 5th level or higher, I can target one additional item for each slot level above 4th.",
};

SpellsList["mireball"] = {
	name : "Mireball",
	source : [["HGtMH", 512]],
	classes : ["bard", "druid", "sorcerer", "wizard"],
	level : 3,
	school : "Conj",
	time : "1 a",
	range : "150 ft",
	rangeMetric : "45 m",
	components : "V,S,M",
	compMaterial : "A tiny ball of guano and mud",
	duration : "1 min",
	save : "Str",
	description : "15 ft rad sphere, STR save, 3d10 Bludg & Prone; half on success;see B",
	descriptionFull : 
		"A blob of gloopy mud splunks from my pointed finger to a point I choose within range, where it splooges with a wet burp into an explosion of sludge. Each creature in a 15-foot-radius sphere centred on that point must make a Strength saving throw. On a failed save, a target takes 3d10 bludgeoning damage and is knocked prone. On a successful one, it takes half as much damage and is not knocked prone."+
		"In addition, all surfaces within the area become covered in unpredictably slick and sticky patches of mud for the duration. The first time a creature moves through the muddy area on its turn it must succeed on a Dexterity saving throw against my spell save DC or fall prone. A creature moving through the area at half speed doesn’t need to make the saving throw."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 5th level or higher, I can target one additional item for each slot level above 4th.",
};

SpellsList["mortiferous pulse"] = {
	name : "Mortiferous Pulse",
	source : [["HGtMH", 513]],
	classes : ["druid", "warlock"],
	level : 2,
	school : "Necro",
	time : "1 a",
	range : "Self",
	rangeMetric : "Self",
	components : "V,S,M",
	compMaterial : "A dead animal",
	duration : "Instantaneous",
	save : "Dex",
	description : "5 ft wide, 50 ft long line extending from me DEX save, 3d8 Necrotic dmg; half on save;see B",
	descriptionFull : 
		"I summon a bolt of negative energy to stimulate and transmit necrotic pathogens into those that stand before me, decaying their internal viscera. Each creature in a 5-foot-wide, 50-foot-long line extending from me must make a Dexterity saving throw, taking 3d8 necrotic damage on a failed save, or half as much damage on a successful one."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd.",
};

SpellsList["peppermint plate"] = {
	name : "Peppermint Plate",
	source : [["HGtMH", 513]],
	classes : ["cleric", "paladin", "sorcerer", "tamer", "warlock", "wizard"],
	level : 1,
	school : "Abjur",
	time : "1 a",
	range : "Self",
	rangeMetric : "Self",
	components : "V,S,M",
	compMaterial : "Well-chewed peppermint chewing gum",
	duration : "Conc, 1 h",
	description : "+1 AC, once per turn, if a crea hits me with melee atk, they take 1d4 Fire dmg;see B",
	descriptionFull : 
		"A protective layer of hot, hard peppermint icing coats me. For the duration, I gain a +1 bonus to AC and if a creature hits me with a melee attack, the creature takes 1d4 fire damage. This damage can trigger no more than once per turn."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 2nd level or higher, the fire damage increases by 1d4 for each slot level above 1st.",
};

SpellsList["pins & needles"] = {
	name : "Pins & Needles",
	source : [["HGtMH", 513]],
	classes : ["druid", "sorcerer", "warlock", "wizard"],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "60 ft",
	rangeMetric : "18 m",
	components : "V,S",
	duration : "Instantaneous",
	save : "Con",
	description : "CON save, 1d8 Psychic dmg, if fail by 5 or more DISadv on next atk before the end off its next turn",
	descriptionCantripDie : "`CD`d8 Psychic dmg, if fail by 5 or more DISadv on next atk before the end off its next turn",
	descriptionFull : 
		"I momentarily shut down a small part of the nervous system of a creature I can see within range, before overstimulating it and causing crippling pain. The creature must succeed on a Constitution saving throw or take 1d8 psychic damage. If the target fails its saving throw by 5 or more, it has disadvantage on the next attack roll it makes before the end of its next turn as it temporarily loses full control of a part of its body."+
		"This spell’s damage increases by 1d8 when I reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
};

SpellsList["power word shield"] = {
	name : "Power Word Shield",
	source : [["HGtMH", 513]],
	classes : ["bard", "cleric", "sorcerer", "wizard"],
	level : 7,
	school : "Abjur",
	time : "1 rea",
	timeFull : "1 reaction, which I take when a creature I can see is the target of an attack or spell",
	range : "60 ft",
	rangeMetric : "18 m",
	components : "V",
	duration : "1 rnd",
	description : "Crea can see wi/in range, immune to all PW & dmg except Psychic, ADV on all saves;see B",
	descriptionFull : 
		"With a word, a translucent shield bubbles out from a creature I can see within range. Until the end of its next turn, it is immune to all damage types except psychic, it has advantage on all saving throws, and all other power word spells have no effect on it. If the creature is poisoned, that condition is removed, and if the creature is aflame, the fires are extinguished.",
};

SpellsList["preserve"] = {
	name : "Preserve",
	source : [["HGtMH", 513]],
	classes : ["cleric", "druid", "paladin", "ranger", "tamer", "wizard"],
	level : 2,
	school : "Abjur",
	time : "1 a",
	range : "60 ft",
	rangeMetric : "18 m",
	components : "V,S,M",
	compMaterial : "Some ether",
	duration : "24 h",
	save : "Cha",
	description : "10 ft sphere within range, CHA save or become soulbound;see B",
	descriptionFull : 
		"With a flare of brilliant octarine light, each creature within a 10-foot-radius sphere centred on a point I can see within range must succeed on a Charisma saving throw or become soulbound for the duration, its magical essence tied to its physical (or incorporeal) form. If a creature dies while soulbound, its magic is bound to its components for 24 hours allowing harvesting to start at any time within this period (see page 87 for the rules on harvesting). Once harvesting starts on a corpse under the effect of this spell, the spell ends for that corpse. Creatures possessing robust or more powerful essence (typically, those of CR 7 or higher) automatically succeed on this saving throw."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 4th level or higher, the strength of the essence possessed by creatures that allows them to automatically succeed on the saving throw increases by one tier for each two slot levels above 2nd. Creatures with potent or more powerful essence (typically CR 12 or higher) automatically succeed at 4th level, mythic (typically CR 18 or higher) at 6th level, and deific (typically CR 25 or higher) at 8th level.",
};

SpellsList["primal scent"] = {
	name : "Primal Scent",
	source : [["HGtMH", 514]],
	classes : ["druid", "tamer"],
	level : 0,
	school : "Div",
	time : "1 a",
	range : "Self",
	rangeMetric : "Self",
	components : "S",
	duration : "Conc, 1 min",
	description : "ADV on next ability check that relies on smell, roll of <4 is treated as 5",
	descriptionFull : 
		"I inhale deeply, magically enhancing the scents that surround me. I have advantage on the next ability check I make that relies on smell, and I can treat a roll of 4 or lower as a 5."+
		"When I reach higher levels, this spell gives me an increasingly astute ability to identify the source of the scents around me. When I reach 5th level, whenever I make an ability check that relies on smell, I can treat a d20 roll of 7 or lower as an 8. At 11th level, a roll of 10 or lower is treated as an 11, and at 17th level, a roll of 13 or lower is treated as a 14.",
};

SpellsList["protection"] = {
	name : "Protection",
	source : [["HGtMH", 514]],
	classes : ["bard", "cleric", "druid", "paladin", "ranger", "tamer"],
	level : 2,
	school : "Abjur",
	time : "1 a",
	range : "30 ft",
	rangeMetric : "9 m",
	components : "V,S,M\u2020",
	compMaterial : "A miniature silver shield worth 10 gp, which the spell consumes",
	duration : "Conc, 1 h",
	description : "Wards one willing crea I can see, before target next takes dmg (except Psychic), ward triggers;see B",
	descriptionFull : 
		"I trace a warding sigil in the air, sending it to slowly circle a willing creature I can see within range for the next hour. Immediately before the target next takes damage, except psychic damage, the ward triggers. Until the end of the target’s next turn, it has resistance to all damage excluding psychic, including the triggering damage. The warding sigil then disappears, and the spell ends on the target."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 3rd level or higher, I may target one additional creature for each slot level above 2nd.",
};

SpellsList["riptide"] = {
	name : "Riptide",
	source : [["HGtMH", 514]],
	classes : ["druid", "sorcerer", "warlock", "wizard"],
	level : 2,
	school : "Trans",
	time : "1 a",
	range : "300 ft",
	rangeMetric : "90 m",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Str",
	description : "Wards crea I can see STR save, dragged 30 ft & swim spd 0 ft;see B",
	descriptionFull : 
		"Choose one creature I can see within range that is in at least 2 feet of water and choose a direction. Turbulent currents wrap around the creature. For the duration, the target must make a Strength saving throw at the start of each of its turns. On a failure, it is dragged 30 feet in the direction I chose, and its swimming speed is reduced to 0 feet until the start of its next turn. On a success, the creature can move normally until the start of its next turn."+
		"As a bonus action on my turn, I can change the direction of the underwater currents. The spell ends early if the creature is ever out of the spell’s range, or is no longer in water at least 2 feet deep.",
};

SpellsList["shackles of pain"] = {
	name : "Shackles of Pain",
	source : [["HGtMH", 514]],
	classes : ["bard", "cleric", "paladin", "warlock"],
	level : 4,
	school : "Abjur",
	time : "1 a",
	range : "60 ft",
	rangeMetric : "18 m",
	components : "V,S,M",
	compMaterial : "A pair of manacles",
	duration : "Conc, 1 min",
	save : "Cha",
	description : "Link vitality off source to target, target CHA save or be linked for 1 min;see B",
	descriptionFull : 
		"I link the vitality of a willing creature within range—the source—to the psyche of another creature within range—the target. The target must succeed on a Charisma saving throw or become linked to the source for 1 minute. Each time the source takes damage, the target takes psychic damage equal to half the damage the source took. If I myself am the source, the creature takes this damage immediately before I make a Constitution saving throw to maintain my concentration. Whenever the target takes damage in this way, it can repeat the saving throw, ending the effect on a success.",
};

SpellsList["shielding word"] = {
	name : "Shielding Word",
	source : [["HGtMH", 514]],
	classes : ["bard", "cleric", "paladin", "sorcerer", "tamer"],
	level : 2,
	school : "Abjur",
	time : "1 rea",
	timeFull : "1 reaction, which I take when a creature within range that I can see is hit by an attack from an attacker I can see or fails a Strength or Dexterity saving throw",
	range : "30 ft",
	rangeMetric : "9 m",
	components : "V",
	duration : "1 rnd",
	description : "Crea gaint 15 THP before it takes triggering dmg, THP lasts until start of the crea next turn",
	descriptionFull : 
		"With a word, I coat a creature in a shimmering shield that absorbs the energy of incoming blows. The creature gains 15 temporary hit points the instant before it takes the triggering damage. These hit points last until the start of the creature’s next turn."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 3rd level or higher, I may choose to either increase the range of the spell by 30 feet or increase the number of temporary hit points gained by 5, for each slot level above 2nd.",
};

SpellsList["smokescreen"] = {
	name : "Smokescreen",
	source : [["HGtMH", 515]],
	classes : ["druid", "sorcerer", "tamer", "wizard"],
	level : 0,
	school : "Conj",
	time : "1 a",
	range : "Self",
	rangeMetric : "Self",
	components : "V,S,M",
	compMaterial : "A puffball mushroom",
	duration : "Conc, 1 rnd",
	save : "Con",
	description : "5 ft diameter, 10 ft tall cylinder centred on me, heavily obsucred. Cloud can remain or move with me",
	descriptionFull : 
		"I spew a thick cloud of dense black smoke that forms a 5-foot-diameter, 10-foot-high cylinder centred on me that lasts until the start of my next turn. The smoke heavily obscures its area. When I cast the spell, I can choose whether the cloud remains in the location where I cast it or if it moves with me, centred on me."+
		"When I reach higher levels, the size of the cloud I can create with this spell increases. When I reach 5th level, the cloud has a maximum diameter and height of 15 feet; at 11th level this increases to 25 feet; and at 17th level this increases to 40 feet. I choose how big the cloud is in each dimension up to this maximum each time that I cast it.",
};

SpellsList["spark"] = {
	name : "Spark",
	source : [["HGtMH", 515]],
	classes : ["sorcerer", "warlock", "wizard"],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "60 ft",
	rangeMetric : "18 m",
	components : "V,S",
	duration : "Instantaneous",
	description : "Ranged spell atk for each spark, 1d8 Lightning dmg, on a crit Blinded; CL5:2, CL11:3, CL17:4 beams",
	descriptionCantripDie : "Spell attack for `CD` spark(s), each 1d8 Lightning dmg",
	descriptionFull : 
		"A spark of bright light arcs from me to a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d8 lightning damage. On a critical hit, the target is also blinded until the end of its next turn."+
		"The spell creates more than one spark when I reach higher levels: two sparks at 5th level, three sparks at 11th level, and four sparks at 17th level. I can direct the sparks at the same target or at different ones. Make a separate attack roll for each spark.",
	dynamicDamageBonus : { multipleDmgMoments : true }
};

SpellsList["spore cloud"] = {
	name : "Spore Cloud",
	source : [["HGtMH", 515]],
	classes : ["druid", "sorcerer", "warlock"],
	level : 0,
	school : "Conj",
	time : "1 a",
	range : "Self",
	rangeMetric : "Self",
	components : "V,S,M",
	compMaterial : "A toadstool",
	duration : "Instantaneous",
	save : "Con",
	description : "Each creat w/in 5 ft CON save, 1d4 Poison dmg, if fail by 5 or more Poisoned until end of its next turn",
	descriptionCantripDie : "Each creat w/in 5 ft CON save, `CD`d4 Poison dmg, if fail by 5 or more Poisoned until end of its next turn",
	descriptionFull : 
		"I produce a cloud of virulent spores. Each creature within 5 feet of me, other than me, must succeed on a Constitution saving throw or take 1d4 poison damage. A creature that fails the saving throw by 5 or more is poisoned until the end of its next turn."+
		"The spell’s damage increases by 1d4 when I reach 5th level (2d4), 11th level (3d4), and 17th level (4d4).",
};

SpellsList["stalker’s eye"] = {
	name : "Stalker’s Eye",
	source : [["HGtMH", 515]],
	classes : ["bard", "druid", "tamer"],
	level : 0,
	school : "Ench",
	time : "1 a",
	range : "Touch",
	rangeMetric : "Touch",
	components : "V,S,M",
	compMaterial : "Small magnifying lens",
	duration : "Conc, 1 min",
	description : "First atk whilst under the effect of spell is made with ADV, spell improves at lvls 5, 11, 17;see B",
	descriptionFull : 
		"A willing creature I touch gains a preternatural ability to perceive the weaknesses in a creature’s defences. The first time the creature makes an attack while under the effect of this spell, it makes the attack with advantage. After it makes an attack, the spell ends."+
		"This spell augments the creature’s ability to strike at vital points when I reach certain levels. When I reach 5th level, the augmented attack scores a critical hit on a roll of 19 or 20. At 11th level, this range is increased to 18 to 20, and at 17th level, this range becomes 17 to 20.",
};

SpellsList["stench"] = {
	name : "Stench",
	source : [["HGtMH", 515]],
	classes : ["bard", "druid", "sorcerer", "warlock", "wizard"],
	level : 3,
	school : "Conj",
	time : "1 a",
	range : "90 ft",
	rangeMetric : "27 m",
	components : "V,S,M",
	compMaterial : "A skunk’s tail",
	duration : "Conc, 1 min",
	save : "Con",
	description : "20 ft rad sphere, CON save, 3d6 Poison & Poisoned until end of next turn; half on success;see B",
	descriptionFull : 
		"Emanating from a point within range, a noxious, 20-foot-radius sphere of colourless fumes creates a choking, eye-watering miasma that penetrates through creatures’ skin."+
		"When a creature enters the spell’s area for the first time on its turn or starts its turn there, it must make a Constitution saving throw. It takes 3d6 poison damage and becomes poisoned until the end of its next turn on a failure, or takes half as much damage and is not poisoned on a success. Whilst poisoned in this way, a creature has disadvantage on saving throws made to maintain its concentration."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.",
};

SpellsList["sugar rush"] = {
	name : "Sugar Rush",
	source : [["HGtMH", 516]],
	classes : ["bard", "cleric", "paladin", "sorcerer", "tamer"],
	level : 2,
	school : "Trans",
	time : "1 a",
	range : "30 ft",
	rangeMetric : "9 m",
	components : "V,S,M",
	compMaterial : "Some candy",
	duration : "Conc, 1 min",
	description : "Willing crea w/in range, spd + 15ft, + 1 AC, bns dash, disengage, hide, use obj;see B",
	descriptionFull : 
		"Choose a willing creature that I can see within range. Until the spell ends, the target’s speed is increased by 15 feet, and it gains a +1 bonus to AC. As a bonus action on each of its turns, it can take the Dash, Disengage, Hide, or Use an Object action."+
		"When the spell ends, or if an affected creature does not spend movement up to its walking speed by the end of its turn, it then develops a stomach ache and is poisoned until the end of its next turn"+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 3rd level or higher, I can target one additional creature for each slot level above 2nd.",
};

SpellsList["swarm"] = {
	name : "Swarm",
	source : [["HGtMH", 516]],
	classes : ["druid", "sorcerer", "warlock"],
	level : 0,
	school : "Conj",
	time : "1 a",
	range : "90 ft",
	rangeMetric : "27 m",
	components : "V,S,M",
	compMaterial : "A spider sac",
	duration : "1 rnd",
	save : "Dex",
	description : "DEX save, 1d10 Poison dmg & poisoned until end of its next turn",
	descriptionCantripDie : "DEX save, `CD`d10 Poison dmg & poisoned until end of its next turn",
	descriptionFull : 
		"Choose a target within range; a cloud of minuscule poisonous spiders floats on gossamer strands towards it. The target must succeed on a Dexterity saving throw to avoid the spiders or become poisoned until the end of its next turn."+
		"This spell deals poison damage on a failed saving throw when I reach certain levels. When I reach 5th level, a creature takes 1d10 poison damage; at 11th level this increases to 2d10; and at 17th level this increases to 3d10.",
};

SpellsList["switcheroo"] = {
	name : "Switcheroo",
	source : [["HGtMH", 516]],
	classes : ["bard", "cleric", "sorcerer", "tamer", "warlock", "wizard"],
	level : 3,
	school : "Trans",
	time : "1 a",
	range : "90 ft",
	rangeMetric : "27 m",
	components : "V,S",
	duration : "Instantaneous",
	save : "Cha",
	description : "Switch places w/ Large or smaller crea, CHA save or switch, crea auto succeed if not enough space",
	descriptionFull : 
		"I attempt to switch places with a Large or smaller target within range that I can see. The target must succeed on a Charisma saving throw or instantly teleport to my space whilst I teleport to the one it previously occupied."+
		"A creature automatically succeeds on this saving throw if there is not enough space to accommodate either of the teleporting creatures. A willing creature may choose to fail the saving throw."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 4th level or higher, the range of this spell increases by 30 feet for each slot level above 3rd. The maximum size of this spell’s target increases to Huge when cast at 6th level or higher, and to Gargantuan when cast at 9th level.",
};

SpellsList["tentacle lash"] = {
	name : "Tentacle Lash",
	source : [["HGtMH", 516]],
	classes : ["druid", "ranger", "warlock", "wizard"],
	level : 4,
	school : "Trans",
	time : "1 a",
	range : "Self",
	rangeMetric : "Self",
	components : "V,S,M",
	compMaterial : "A miniature plunger",
	duration : "Conc, 1 min",
	save : "Str",
	description : "30 ft range melee spell atk, 5d8 Bludg dmg, if Huge or smaller STR save and suffer an effect;see B",
	descriptionFull : 
		"One of my arms elongates into a long, wet, suckered tentacle. When I cast this spell, and as an action on each of my turns, I can make a melee spell attack against a creature within 30 feet of me. On a hit, the target takes 5d8 bludgeoning damage and it must make a Strength saving throw if it is Huge or smaller. On a failure, I can choose one of the following effects:"+
		"\u2022 The target is knocked prone."+
		"\u2022 The target is shoved 5 feet in a direction of my choice."+
		"\u2022 I disarm the target; I take one item the target is holding and return it to my person."+
		"The tentacle also serves as an appendage that can be used like a grappling hook or rope (GM’s discretion)."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 5th level or higher, the damage increases by 1d8 for each slot level above 4th.",
};

SpellsList["the bends"] = {
	name : "The Bends",
	source : [["HGtMH", 517]],
	classes : ["druid", "sorcerer", "warlock", "wizard"],
	level : 3,
	school : "Trans",
	time : "1 a",
	range : "90 ft",
	rangeMetric : "27 m",
	components : "V,S",
	duration : "Instantaneous",
	save : "Con",
	description : "Target see w/in range CON save, 5d8 Poison dmg & poisoned 1 min; half on success;see B",
	descriptionFull : 
		"I assault the internal chemistry of a creature I can see within range, causing bubbles of nitrogen to precipitate in its blood, forcing it to make a Constitution saving throw. On a failed save, the target takes 5d8 poison damage and is poisoned for 1 minute. On a successful save, the target takes half as much damage and isn’t poisoned. If the target is completely submerged in water, increase the damage dice from d8s to d10s."+
		"The target can repeat the saving throw at the end of each of its turns, ending the effect on a success."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd.",
};

SpellsList["totem arrows"] = {
	name : "Totem Arrows",
	source : [["HGtMH", 517]],
	classes : ["druid", "ranger"],
	level : 4,
	school : "Trans",
	time : "1 a",
	range : "Touch",
	rangeMetric : "Touch",
	components : "V,S,M",
	compMaterial : "A quiver containing at least one piece of ammunition",
	duration : "Conc, 1 h",
	description : "Imbue ammo with spirit for effects, bns change spirit;see B",
	descriptionFull : 
		"I touch a quiver containing arrows or bolts, imbuing the ammunition currently in it with the spirit of a creature, plant, or fungus. For the duration, any creature hit (or in the case of ‘Hawk’, targeted) by one of the pieces of ammunition is subject to the effect of the spirit currently imbuing the quiver (see below), in addition to the attack’s normal effects. As a bonus action, I can change which spirit imbues the quiver."+
		"\u2022 Cat. The target takes an additional 1d6 slashing damage. If the attack roll was made with advantage, the additional damage is increased to 2d6."+
		"\u2022 Elk. The target takes an additional 1d6 bludgeoning damage and must succeed on a Strength saving throw or be knocked prone or shoved 5 feet in a direction of my choice (my choose when the target is hit)."+
		"\u2022 Hawk. The attack ignores half and three-quarters cover."+
		"\u2022 Hogweed. The target must succeed on a Constitution saving throw or become blinded until the end of its next turn."+
		"\u2022 Psilocybin. The target must succeed on a Wisdom saving throw or begin ‘tripping’ for the spell’s duration. Whilst tripping, the creature must roll a d4 at the start of each of its turns. On a 1, the target is incapacitated until the end of its turn and the effect ends. On a 2-4, the target behaves as normal, and the effect continues."+
		"\u2022 Roc. The target must succeed on a Strength saving throw or its speed becomes 0 feet and it is lifted 20 feet into the air until the end of its next turn, when it begins falling. If there isn’t enough room to be lifted 20 feet, the creature is lifted to the maximum possible height."+
		"\u2022 Snake. The target takes an additional 1d6 poison damage and must succeed on a Constitution saving throw or become poisoned for the spell’s duration. It can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."+
		"\u2022 Spider. The target must succeed on a Dexterity saving throw or become restrained until the end of its next turn. The target can use its action to make a Strength (Athletics) or Dexterity (Acrobatics) check against my spell save DC, ending the effect on itself on a success."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 5th level or higher, the duration of this spell is concentration, up to 8 hours.",
};

SpellsList["water whip"] = {
	name : "Water Whip",
	source : [["HGtMH", 517]],
	classes : ["druid", "sorcerer", "warlock"],
	level : 0,
	school : "Trans",
	time : "1 a",
	range : "60 ft",
	rangeMetric : "18 m",
	components : "V,S",	
	duration : "Instantaneous",
	save : "Str",
	description : "req source of water, melee spell attack against crea w/in 30 ft, 1d6 Slashing dmg; see B",
	descriptionCantripDie : "1 creature that I can see save or `CD`d6 Slashing dmg; req water source",
	descriptionFull : 
		"Choose a source of water that I can see within range that has a volume of at least 4 pints. Make a melee spell attack against a creature within 30 feet of the source of water. On a hit, the target takes 1d6 slashing damage and, if the creature is Large or smaller, I can force it to make a Strength saving throw, pulling it up to 10 feet towards a point on the surface of the source of water on a failure."+
		"The spell’s damage increases by 1d6 and the distance it can pull a target increases by 5 feet when I reach 5th level (2d6 and 15 feet), 11th level (3d6 and 20 feet), and 17th level (4d6 and 25 feet).",
};

SpellsList["weavebend"] = {
	name : "Weavebend",
	source : [["HGtMH", 518]],
	classes : ["sorcerer", "warlock", "wizard"],
	level : 4,
	school : "Abjur",
	time : "1 rea",
	timeFull : "1 reaction, which I take when I see a creature within range casting a spell",
	range : "60 ft",
	rangeMetric : "18 m",
	components : "S",
	duration : "Instantaneous",
	description : "Redirect spell cast by a crea I can see;see B",
	descriptionFull : 
		"I attempt to redirect a spell cast by a creature I can see. If the creature is casting a spell of 3rd level or lower, I can redirect the spell. If the spell involves a ranged spell attack, I can cause the ranged spell attack to target a different target of my choice within 10 feet of its original target. If the spell has an area of effect, I can shift the area of effect up to 10 feet in any direction. If the creature is casting a spell of 4th level or higher, make an ability check using my spellcasting ability. The DC equals 10 + the spell’s level. On a success, the creature’s spell is redirected as described."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 5th level or higher, the spell is automatically redirected as described if its level is less than the level of the spell slot I used.",
};

SpellsList["weave entanglement"] = {
	name : "Weave Entanglement",
	source : [["HGtMH", 518]],
	classes : ["bard", "sorcerer", "wizard"],
	level : 6,
	school : "Abjur",
	time : "1 a",
	range : "90 ft",
	rangeMetric : "27 m",
	components : "V,S,M",
	compMaterial : "A piece of felt",
	duration : "Conc, 1 min",
	description : "20 ft rad sphere, whenever crea tries to cast spell, spellcasting ability check or effect;see B",
	descriptionFull : 
		"I imperceptibly tangle the threads of the Weave in a 20-foot-radius sphere centred on a point I can see within range. Whenever a creature attempts to cast a spell of 1st level or higher in this area, it must make an ability check with its spellcasting ability against my spell save DC. On a success, the spell is cast as normal. On a failure, the spellcaster casts the spell and produces an additional effect. Roll a d10 and consult the following table to determine the additional effect:"+
		"d10	Effect"+
		"1	The spellcaster casts gravity smash"+
		"2	The spellcaster casts phantasmal killer"+
		"3	The spellcaster casts confusion"+
		"4	The spellcaster casts fireball"+
		"5	The spellcaster casts zippit!"+
		"6	The spellcaster casts web"+
		"7 The spellcaster casts darkness"+
		"8 The spellcaster casts silence"+
		"9 The spellcaster regains 2d10 hit points."+
		"10 The spellcaster doesn’t expend a spell slot to cast its spell."+
		"Any additional spell cast this way targets or is centred on the spellcaster, who has no control over the spell’s effects. The DC for any saving throws equals the spellcaster’s spell save DC. In the case of concentration spells, no concentration is required. At initiative count 20 of each round, roll a d20 for each ongoing additional effect. On a roll of 11 or higher, that effect ends."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 7th level or higher, I increase the radius of the area affected by 10 feet for each slot level above 6th.",
};

SpellsList["zippit!"] = {
	name : "Zippit!",
	source : [["HGtMH", 518]],
	classes : ["bard", "druid", "sorcerer", "warlock", "wizard"],
	level : 3,
	school : "Trans",
	time : "1 rea",
	timeFull : "1 reaction, which I take when a creature within range vocalises",
	range : "60 ft",
	rangeMetric : "18 m",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Con/Str",
	description : "CON save or be silenced, if silenced spell slot not wasted but action is;see B",
	descriptionFull : 
		"In response to a creature vocalizing, I make a sharp sound and hold a finger up in an attempt to interrupt them. The target must succeed on a Constitution saving throw or become silenced as its mouth is fused shut for the duration. If I silence a target that is casting a spell with verbal components, the target’s spell slot isn’t expended, but its action is wasted."+
		"At the end of each of its turns, the target can make a Strength saving throw as it tries to tear open its mouth. On a success, the target takes 1d8 slashing damage and is no longer silenced. Alternatively, as an action, the target can use a bladed implement to cut open its mouth, taking 1d8 slashing damage and ending the silence."+
		AtHigherLevels +
		"When I cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd.",
};


/*
 * Add weapons (attack cantrips)
 */ 

WeaponsList["concussion"] = {
	regExpSearch : /^(?=.*concussion).*$/i,
	name : "Concussion",
	source : [["HGtMH", 504]],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 8, "thunder"],
	range : "60 ft",
	description : "Deafened until start of my next turn",
	abilitytodamage : false,
	dc: true
};

WeaponsList["ferocious strike"] = {
	regExpSearch : /^(?=.*ferocious)(?=.*strike).*$/i,
	name : "Ferocious Strike",
	source : [["HGtMH", 506]],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 4, ""],
	range : "Self",
	description : "+1d4 dmg to weapon attack",
	abilitytodamage : false,
};

WeaponsList["flare"] = {
	regExpSearch : /^(?=.*flare).*$/i,
	name : "Flare",
	source : [["HGtMH", 508]],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 8, "radiant"],
	range : "60 ft",
	description : "",
	abilitytodamage : false,
};

WeaponsList["magnetobolt"] = {
	regExpSearch : /^(?=.*magnetobolt).*$/i,
	name : "Magnetobolt",
	source : [["HGtMH", 512]],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 6, "force"],
	range : "90 ft",
	description : "On hit, STR save or Prone, crea w/ ferrous material DISadv on save",
	abilitytodamage : false,
};

WeaponsList["pins & needles"] = {
	regExpSearch : /^(?=.*pins)(?=.*needles).*$/i,
	name : "Pins & Needles",
	source : [["HGtMH", 513]],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 8, "psychic"],
	range : "60 ft",
	description : "If fail by 5 or more DISadv on next atk before the end off its next turn",
	abilitytodamage : false,
};

WeaponsList["spark"] = {
	regExpSearch : /^(?=.*spark).*$/i,
	name : "Spark",
	source : [["HGtMH", 515]],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 8, "lightning"],
	range : "60 ft",
	description : "If crit, target is blinded",
	abilitytodamage : false,
};

WeaponsList["spore cloud"] = {
	regExpSearch : /^(?=.*spore)(?=.*cloud).*$/i,
	name : "Spore Cloud",
	source : [["HGtMH", 515]],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 4, "poison"],
	range : "60 ft",
	description : "If fail by 5 or more poisoned until end of its next turn",
	abilitytodamage : false,
};

WeaponsList["swarm"] = {
	regExpSearch : /^(?=.*swarm).*$/i,
	name : "Swarm",
	source : [["HGtMH", 516]],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 10, "poison"],
	range : "90 ft",
	description : "If fail, poisoned",
	abilitytodamage : false,
};


WeaponsList["water whip"] = {
	regExpSearch : /^(?=.*water)(?=.*whip).*$/i,
	name : "Water Whip",
	source : [["HGtMH", 517]],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 6, "slashing"],
	range : "60 ft",
	description : "Large or smaller target make STR save or be pulled 10 ft towards water",
	abilitytodamage : false,
};