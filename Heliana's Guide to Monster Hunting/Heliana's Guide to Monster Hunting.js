var iFileName = "Helianas Guide to Monster Hunting.js";
RequiredSheetVersion("13.1.14");

SourceList["HGtMH"] = {
   name: "Heliana's Guide to Monster Hunting",
   abbreviation: "HGtMH",
   abbreviationSpellsheet : "HG",
   group: "Third Party",
   date: "2025-02-24",
};

/*
 * Races
 */

// Cnidaran
RaceList["nematocyst cnidaran"] = { 
	regExpSearch: /^(?=.*nematocyst)(?=.*cnidaran).*$/i,
	name: "Nematocyst Cnidaran",
	sortname: "Cnidaran, Nematocyst",
	plural: "Nematocyst Cnidaran",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		swim : { spd : "walk", enc : "walk" }
	},	
	languageProfs: ["Common", 1],
	scores : [0, 1, 2, 0, 0, 0],
	age: "A cnidaran medusozoa reaches maturity at around 20 years of age and can live up to 200 years.",
	dmgres : ["Poison"],
	savetxt : {
		adv_vs : ["Poisoned"]
	},
	weaponOptions: [{
		name: "Nematocyst",
		source : [["HGtMH", 156]],
		regExpSearch : /^(?=.*nematocyst).*$/i,
		baseWeapon : "unarmed strike",
  		type : "Martial",
 		ability : 1,
 		abilitytodamage : true,
  		damage : [1, 4, "piercing"],
  		range : "Melee",
  		description : "Finesse",
		isAlwaysProf: true,
		selectNow: true,
	}],
	features : {
		"neurotoxin" : {
			name : "Neurotoxin",
			minlevel : 1,
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
			action : [["bonus action", ""]],
		},
	},
	trait : "Nematocyst Cnidaran"+
		"\n \u2022 Speed. My walking speed is 30 feet and I have a swimming speed equal to my walking speed."+
		"\n \u2022 Amphibious. I can breathe air and water."+
		"\n \u2022 Nematocyst. I have a long, barbed appendage, a natural weapon which I can use to make unarmed strikes. If I hit with this finesse weapon, I can deal piercing damage equal to 1d4 + my Strength or Dexterity modifier (my choice), instead of the bludgeoning damage normal for an unarmed strike."+
		"\n \u2022 Neurotoxin. As a bonus action, I can secrete a toxin and apply it to one weapon or piece of ammunition, which lasts for 1 hour. The first time I hit a creature with this weapon or ammunition, the creature must succeed on a CON save (DC equals 8 + my CON mod + my PB) or be paralysed until the start of its next turn. Alternatively, I can use a bonus action to inject the toxin when I hit a creature with my nematocyst. I can use this feature a number of times equal to my proficiency bonus, and I regain all expended uses when I finish a long rest."+
		"\n \u2022 Toxic Adaptation. I have advantage on saving throws against being poisoned, and I have resistance to poison damage.",
	toNotesPage: [{
		name : "Nematocyst Cnidaran",
		source : [["HGtMH", 156]],
		note: desc([
			"\u2022 Speed. My base walking speed is 30 feet and I have a swimming speed equal to my walking speed.",
			"\u2022 Amphibious. I can breathe air and water.",
			"\u2022 Nematocyst. I have a long, barbed appendage, a natural weapon which I can use to make unarmed strikes. If I hit with this finesse weapon, I can deal piercing damage equal to 1d4 + my Strength or Dexterity modifier (my choice), instead of the bludgeoning damage normal for an unarmed strike.",
			"\u2022 Neurotoxin. As a bonus action, I can secrete a toxin and apply it to one weapon or piece of ammunition, which lasts for 1 hour. The first time I hit a creature with this weapon or ammunition, the creature must succeed on a CON save (DC equals 8 + my CON mod + my PB) or be paralysed until the start of its next turn. Alternatively, I can use a bonus action to inject the toxin when I hit a creature with my nematocyst. I can use this feature a number of times equal to my proficiency bonus, and I regain all expended uses when I finish a long rest.",
			"\u2022 Toxic Adaptation. I have advantage on saving throws against being poisoned, and I have resistance to poison damage.",
		])
	}],
};

RaceList["shimmerskin cnidaran"] = { 
	regExpSearch: /^(?=.*shimmerskin)(?=.*cnidaran).*$/i,
	name: "Shimmerskin Cnidaran",
	sortname: "Cnidaran, Shimmerskin",
	plural: "Shimmerskin Cnidaran",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		swim : { spd : "walk", enc : "walk" }
	},	
	languageProfs: ["Common", 1],
	scores : [0, 0, 1, 0, 0, 2],
	age: "A cnidaran medusozoa reaches maturity at around 20 years of age and can live up to 200 years.",
	features : {
		"shimmerskin" : {
			name : "Shimmerskin",
			minlevel : 1,
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
			action : [["bonus action", ""]],
		},
		"hypnotic phosphorescence1" : {
			name : "Minor Illusion",
			minlevel : 1,
			spellcastingBonus: [{
				name: "Shimmerskin Cnidaran",
				spells: ["minor illusion"],
				selection: ["minor illusion"],
				times: 1,
				spellcastingAbility: 6,
			}]
		},
		"hypnotic phosphorescence3" : {
			name : "Charm Person",
			minlevel : 3,
			spellcastingBonus: [{
				name: "Shimmerskin Cnidaran",
				spells: ["charm person"],
				selection: ["charm person"],
				times: 1,
				firstCol: "oncelr",
				spellcastingAbility: 6,
			}]
		},
		"hypnotic phosphorescence5" : {
			name : "Suggestion",
			minlevel : 5,
			spellcastingBonus: [{
				name: "Shimmerskin Cnidaran",
				spells: ["suggestion"],
				selection: ["suggestion"],
				times: 1,
				firstCol: "oncelr",
				spellcastingAbility: 6,
			}]
		},
	},
	trait : "Shimmerskin Cnidaran"+
		"\n \u2022 Speed. My walking speed is 30 feet and I have a swimming speed equal to my walking speed."+
		"\n \u2022 Amphibious. I can breathe air and water."+
		"\n \u2022 Shimmerskin. As a bonus action, I can cause my skin to shimmer in a pleasing array of colours for 10 minutes. For the duration, I have advantage on all Charisma checks. Once I use this trait, I can’t do so again until I finish a long rest."+
		"\n \u2022 Hypnotic Phosphorescence. I know the minor illusion cantrip. Starting at 3rd level, I can cast the charm person spell once with this trait, and I regain the ability to do so when I finish a long rest. Starting at 5th level, I can cast the suggestion spell once with this trait, and I regain the ability to do so when I finish a long rest. I can also cast these spells using any spell slots I have of the appropriate level."+
		"\n Charisma is my spellcasting ability for these spells. When I cast them with this trait, they don’t require material or somatic components.",
	toNotesPage: [{
		name : "Shimmerskin Cnidaran",
		source : [["HGtMH", 156]],
		note: desc([
			"\u2022 Speed. My walking speed is 30 feet and I have a swimming speed equal to my walking speed.",
			"\u2022 Amphibious. I can breathe air and water.",
			"\u2022 Shimmerskin. As a bonus action, I can cause my skin to shimmer in a pleasing array of colours for 10 minutes. For the duration, I have advantage on all Charisma checks. Once I use this trait, I can’t do so again until I finish a long rest.",
			"\u2022 Hypnotic Phosphorescence. I know the minor illusion cantrip. Starting at 3rd level, I can cast the charm person spell once with this trait, and I regain the ability to do so when I finish a long rest. Starting at 5th level, I can cast the suggestion spell once with this trait, and I regain the ability to do so when I finish a long rest. I can also cast these spells using any spell slots I have of the appropriate level.",
			"Charisma is my spellcasting ability for these spells. When I cast them with this trait, they don’t require material or somatic components.",
		])
	}],
};

// Cyclopian
RaceList["cyclopian"] = { 
	regExpSearch: /^(?=.*cyclopian).*$/i,
	name: "Cyclopian",
	sortname: "Cyclopian",
	plural: "Cyclopian",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		climb : { spd : 20, enc : 10 },
	},
	languageProfs: ["Common", "Undercommon", 1],
	scores : [0, 0, 0, 2, 0, 0],
	scorestxt : "+2 Intelligence, +1 Dexterity/Wisdom",
	age: "Cyclopians reach maturity in their early teens and typically live as long as humans.",
	vision : [["Darkvision", 60]],
	skillstxt : "Choose two of the following skills: Arcana, History, Insight, Investigation, Medicine, Perception, Religion, and Stealth.",
	features : {
		"savant of secrets" : {
			name : "Savant of Secrets",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			action : [["action", ""]],
		},
	},
	trait : "Cyclopian"+
		"\n \u2022 Creature Type. I am a humanoid. I am also considered an aberration for any prerequisite or effect that requires me to be an aberration."+
		"\n \u2022 Knowledge Seeker. I have proficiency in my choice of two of the following skills: Arcana, History, Insight, Investigation, Medicine, Perception, Religion, and Stealth."+
		"\n \u2022 Savant of Secrets. As an action, I can enter a cyclotrance for 1 minute. For the duration, I have advantage on Perception, Investigation, and Insight checks. Once I activate this trait, I can’t do so again until I finish a long rest."+
		"\n \u2022 Thought for Food. Each day that I discover significant new information (GM’s discretion), I need only half as much food and water as normal and I have advantage on Constitution saving throws. These benefits last until I finish a long rest."+
		"\n \u2022 Top Shelf. I have a climbing speed of 20 feet.",
	toNotesPage: [{
		name : "Cyclopian",
		source : [["HGtMH", 158]],
		note: desc([
			"\u2022 Creature Type. I am a humanoid. I am also considered an aberration for any prerequisite or effect that requires me to be an aberration.",
			"\u2022 Knowledge Seeker. Learning is an almost irresistible compulsion amongst cyclopians and often leads them to dangerous locations. I have proficiency in my choice of two of the following skills: Arcana, History, Insight, Investigation, Medicine, Perception, Religion, and Stealth.",
			"\u2022 Savant of Secrets. I can tap into my ancestral ability to spot the telltale signs of hidden traps, passages, and secrets. As an action, I can enter a cyclotrance for 1 minute. For the duration, I have advantage on Perception, Investigation, and Insight checks. Once I activate this trait, I can’t do so again until I finish a long rest.",
			"\u2022 Thought for Food. Information is nourishing for cyclopians, in the truest sense of the word. Each day that I discover significant new information (GM’s discretion), I need only half as much food and water as normal and I have advantage on Constitution saving throws. These benefits last until I finish a long rest."+
			"\u2022 Top Shelf. Generations spent climbing to the top shelves of tall libraries have led to a selective pressure on the ability to climb within cyclopians. I have a climbing speed of 20 feet.",
		])
	}],
};

// Gobboc
RaceList["gobboc"] = { 
	regExpSearch: /^(?=.*gobboc).*$/i,
	name: "Gobboc",
	sortname: "Gobboc",
	plural: "Gobboc",
	size : 4,
	speed : {
		walk : { spd : 25, enc : 15 },
	},
	languageProfs: ["Common", 1],
	scores : [0, 2, 0, 0, 0, 0],
	scorestxt : "+2 Dexterity, +1 Charisma/Wisdom",
	age: "Gobbocs grow quickly and die young. They walk hours after hatching, reach adulthood by age 7, and live around 30 years.",
	vision : [["Darkvision", 60]],
	features : {
		"coward’s creed" : {
			name : "Coward’s Creed",
			minlevel : 1,
			action : [["bonus action", "Coward’s Creed (after hit melee attack)"]],
		},
		"gallus domesticus" : {
			name : "Gallus Domesticus",
			minlevel : 1,
			spellcastingBonus: [{
				name: "Gallus Domesticus",
				spells: ["polymorph"],
				selection: ["polymorph"],
				times: 1,
				spellcastingAbility: 6,
			}]
		},
	},
	trait : "Gobboc"+
		"\n \u2022 Commune with Fowl Folk. I have the ability to communicate in a limited manner with feathered beasts and monstrosities. They can understand the meaning of my words, though I have no special ability to understand them in return. I have advantage on all checks I make to influence them."+
		"\n \u2022 Coward’s Creed. After successfully hitting with a melee attack, I can take the Disengage action as a bonus action."+
		"\n \u2022 Feathered. My light bones and feathered form reduce the impact of gravity; I take only half damage from falling."+
		"\n \u2022 Gallus Domesticus. I can cast the polymorph spell on myself with this trait, using Charisma as my spellcasting ability. When I use this version of polymorph, I always assume the form of a Tiny chicken (see statblock below). Once I cast the spell, I can’t cast it again with this trait until I finish a long rest."+
		"\n \u2022 Headless Chicken. When I am reduced to 0 hit points, but not killed outright, I don’t immediately fall unconscious. Instead, I can immediately move up to my speed without provoking opportunity attacks. I then fall unconscious as if I had been reduced to 0 hit points in the space where I finish this movement.",
	toNotesPage: [{
		name : "Gobboc",
		source : [["HGtMH", 160]],
		note: desc([
			"\u2022 Commune with Fowl Folk. I have the ability to communicate in a limited manner with feathered beasts and monstrosities. They can understand the meaning of my words, though I have no special ability to understand them in return. I have advantage on all checks I make to influence them.",
			"\u2022 Coward’s Creed. After successfully hitting with a melee attack, I can take the Disengage action as a bonus action.",
			"\u2022 Feathered. My light bones and feathered form reduce the impact of gravity; I take only half damage from falling.",
			"\u2022 Gallus Domesticus. I can cast the polymorph spell on myself with this trait, using Charisma as my spellcasting ability. When I use this version of polymorph, I always assume the form of a Tiny chicken (see statblock below). Once I cast the spell, I can’t cast it again with this trait until I finish a long rest.",
			"\u2022 Headless Chicken. When I am reduced to 0 hit points, but not killed outright, I don’t immediately fall unconscious. Instead, I can immediately move up to my speed without provoking opportunity attacks. I then fall unconscious as if I had been reduced to 0 hit points in the space where I finish this movement.",
		])
	}],
};

// Golynn
RaceList["golynn"] = { 
	regExpSearch: /^(?=.*golynn).*$/i,
	name: "Golynn",
	sortname: "Golynn",
	plural: "Golynn",
	size : 4,
	speed : {
		walk : { spd : 30, enc : 20 },
		burrow : { spd : 15, enc : 5 },
	},
	languageProfs: ["Common", 1],
	scores : [1, 0, 2, 0, 0, 0],
	age: "Golynn grow rapidly and reach maturity at 10 years of age. On average, they live about 150 years.",
	vision : [["Tremorsense", 5]],
	armorOptions : [{
		regExpSearch : /^(?=.*natural)(?=.*armou?r).*$/i,
		name : "Natural Armour",
		source : [["HGtMH", 162]],
		ac : 13,
		selectNow : true
	}],
	carryingCapacity : 2,
	trait : "Golynn"+
		"\n \u2022 Natural Armour. My body is covered in thick, keratinous scales. When I am not wearing armour, my AC is 13 + my DEX mod. I can use my natural armour to determine my AC if the armour I wear would leave me with a lower AC. A shield’s benefits apply as normal while I use my natural armour."+
		"\n \u2022 Powerful Build. I count as one size larger when determining my carrying capacity and the weight I can push, drag, or lift."+
		"\n \u2022 Shovel Talons. My wide, powerful claws are perfect for creating tunnels and burrows. I have a burrowing speed of 15 feet, but can only use it to tunnel through soft earth, or loose stone."+
		"\n \u2022 Drill Dervish. While burrowing underground, I can shift the ground under a creature’s feet, potentially causing it to fall over. If I burrow directly under a Large or smaller creature that is standing on the ground, the creature must succeed on a Strength saving throw or be knocked prone. The DC for this saving throw equals 8 + my STR mod + my PB."+
		"\n \u2022 Tremorsense. Knowing where the next meal like a juicy, giant earthworm—can be found while underground requires a specific adaptation. I have tremorsense out to a range of 5 feet. As an action, I can hone my senses, increasing the range of this sense out to 20 feet until the end of my next turn.",
	toNotesPage: [{
		name : "Golynn",
		source : [["HGtMH", 156]],
		note: desc([
			"\u2022 Natural Armour. My body is covered in thick, keratinous scales. When I am not wearing armour, my AC is 13 + my DEX mod. I can use my natural armour to determine my AC if the armour I wear would leave me with a lower AC. A shield’s benefits apply as normal while I use my natural armour.",
			"\u2022 Powerful Build. I count as one size larger when determining my carrying capacity and the weight I can push, drag, or lift.",
			"\u2022 Shovel Talons. My wide, powerful claws are perfect for creating tunnels and burrows. I have a burrowing speed of 15 feet, but can only use it to tunnel through soft earth, or loose stone.",
			"\u2022 Drill Dervish. While burrowing underground, I can shift the ground under a creature’s feet, potentially causing it to fall over. If I burrow directly under a Large or smaller creature that is standing on the ground, the creature must succeed on a Strength saving throw or be knocked prone. The DC for this saving throw equals 8 + my STR mod + my PB.",
			"\u2022 Tremorsense. Knowing where the next meal like a juicy, giant earthworm—can be found while underground requires a specific adaptation. I have tremorsense out to a range of 5 feet. As an action, I can hone my senses, increasing the range of this sense out to 20 feet until the end of my next turn.",
		])
	}],
};

// Lotol
RaceList["lotol"] = { 
	regExpSearch: /^(?=.*lotol).*$/i,
	name: "Lotol",
	sortname: "Lotol",
	plural: "Lotol",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	languageProfs: ["Common", 1],
	scores : [0, 0, 1, 0, 2, 0],
	age: "Newborn lotol metamorphose into their adult form in 1 year and reach full maturity after 10 years. They typically live between 40 and 50 years.",
	savetxt : {
		adv_vs : ["Wis", "Grappled/Restrained"]
	},
	trait : "Lotol"+
		"\n \u2022 Oblivious. My mind is a simple place, the influence of outside forces washing over it like crashing waves over smooth sea glass. I have advantage on Wisdom saving throws."+
		"\n \u2022 Slippery Skin. I have advantage on ability checks and saving throws made to avoid or end the grappled or restrained conditions on myself."+
		"\n \u2022 Adaptive Polymorphism. Each lotol’s lineage is unique, and certain traits follow clans or families, or mutate by chance in individuals. Choose two of the following adaptations. When I gain a level, I can choose to replace one of these adaptations with another when I finish my next long rest."+
		"    \n \u2022 Aqueous Adaptation. I gain a swimming speed equal to my walking speed and can breathe underwater."+
		"    \n \u2022 Gecko Cling. I gain a climbing speed of 20 feet and I have advantage on ability checks and saving throws made to maintain grapples and prevent myself from being disarmed of an object I am holding."+
		"    \n \u2022 Darkvision. Accustomed to life in the murky underbrush, I have superior vision in dark and dim conditions. I can see in dim light within 60 feet of me as if it were bright light, and in darkness as if it were dim light. I can’t discern colour in darkness, only shades of grey."+
		"    \n \u2022 Prehensile Tongue. My long, extendable tongue can be used to grab Tiny objects out of arm’s reach. As a bonus action, I can use my tongue to grab a Tiny object within 20 feet of me. If the object weighs less than 10 pounds, isn’t being worn or carried, and isn’t fixed to any surface, I pull the object back to me."+
		"    \n \u2022 Shocking Skin. I learn the shocking grasp cantrip. Constitution is my spellcasting ability for this spell. When a creature within 5 feet of me hits me with a melee attack, I can use a reaction to cast the shocking grasp cantrip, targeting the attacker. I can use it a number of times equal to my proficiency bonus, and I regain all expended uses when I finish a long rest.",
	toNotesPage: [{
		name : "Lotol",
		source : [["HGtMH", 164]],
		note: desc([
			"\u2022 Oblivious. My mind is a simple place, the influence of outside forces washing over it like crashing waves over smooth sea glass. I have advantage on Wisdom saving throws.",
			"\u2022 Slippery Skin. I have advantage on ability checks and saving throws made to avoid or end the grappled or restrained conditions on myself.",
			"\u2022 Adaptive Polymorphism. Each lotol’s lineage is unique, and certain traits follow clans or families, or mutate by chance in individuals. Choose two of the following adaptations. When I gain a level, I can choose to replace one of these adaptations with another when I finish my next long rest.",
			"    \u2022 Aqueous Adaptation. I gain a swimming speed equal to my walking speed and can breathe underwater.",
			"    \u2022 Gecko Cling. I gain a climbing speed of 20 feet and I have advantage on ability checks and saving throws made to maintain grapples and prevent myself from being disarmed of an object I am holding.",
			"    \u2022 Darkvision. Accustomed to life in the murky underbrush, I have superior vision in dark and dim conditions. I can see in dim light within 60 feet of me as if it were bright light, and in darkness as if it were dim light. I can’t discern colour in darkness, only shades of grey.",
			"    \u2022 Prehensile Tongue. My long, extendable tongue can be used to grab Tiny objects out of arm’s reach. As a bonus action, I can use my tongue to grab a Tiny object within 20 feet of me. If the object weighs less than 10 pounds, isn’t being worn or carried, and isn’t fixed to any surface, I pull the object back to me.",
			"    \u2022 Shocking Skin. I learn the shocking grasp cantrip. Constitution is my spellcasting ability for this spell. When a creature within 5 feet of me hits me with a melee attack, I can use a reaction to cast the shocking grasp cantrip, targeting the attacker. I can use it a number of times equal to my proficiency bonus, and I regain all expended uses when I finish a long rest.",
		])
	}],
};

// Mycelian (30 ft)
RaceList["mycelian 30 ft"] = { 
	regExpSearch: /^(?=.*mycelian)(?=.*30)(?=.*ft).*$/i,
	name: "Mycelian",
	sortname: "Mycelian, 30 ft",
	plural: "Mycelians",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	languageProfs: ["Common", 1],
	scores : [0, 0, 2, 0, 0, 0],
	scorestxt : "+2 Constitution, +1 one other ability score",
	age: "In the right conditions, a corpse inoculated with mycelial spores can rise as a newly-formed, adult mycelian in under a month. Mycelians tend to wear out a host in less than 7 years, and periodically redeploy their personal spores to animate a new, fresher corpse. Theoretically, a mycelian can live on indefinitely, their minds and personalities changing with each rebirth.",
	features : {
		"spore spray" : {
			name : "Spore Spray",
			minlevel : 1,
			action : [["reaction", ""]],
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
		},
	},
	trait : "Mycelian (30 ft)"+
		"\n \u2022 Symbiotic Assimilation. My unique lifecycle allows me to co-opt some of the adaptations of my host corpse. Choose two of the following adaptations; the race to which my host corpse belonged must have had this racial trait in order for me to choose it (GM’s discretion)."+
		"    \n \u2022 Damage Resistance (Multiple). I have resistance to one damage type determined by my host body’s race."+
		"    \n \u2022 Darkvision (Multiple). The darkened chambers of The Low are my home. I have superior vision in dark and dim conditions. I can see in dim light within 60 feet of me as if it were bright light, and in darkness as if it were dim light. I can’t discern colour in darkness, only shades of grey."+
		"    \n \u2022 Dwarven Resilience (Dwarf). I have advantage on saving throws against poison, and I have resistance against poison damage."+
		"    \n \u2022 Halfling Nimbleness (Halfling). I can move through the space of any creature that is of a size larger than mine."+
		"    \n \u2022 Muscle Memory (Any). I gain proficiency in one skill of my choice. I can take this option multiple times."+
		"    \n \u2022 Natural Weapon (Multiple). I have a physical characteristic, such as horns, claws, or teeth, that acts as a natural melee weapon which I can use to make unarmed strikes. If I hit with it, I deal bludgeoning, piercing, or slashing damage (depending on the body part) equal to my Strength modifier plus a damage die determined by my host body’s race, instead of the bludgeoning damage normal for an unarmed strike."+
		"    \n \u2022 Powerful Build (Multiple). I count as one size larger when determining my carrying capacity and the weight I can push, drag, or lift."+
		"    \n \u2022 Relentless Endurance (Half-Orc). When I am reduced to 0 hit points but not killed outright, I can drop to 1 hit point instead. I can’t use this trait again until I finish a long rest."+
		"\n \u2022 Spore Spray. As a reaction when a creature within 10 feet of me hits me with a melee attack, I can attempt to poison it with a burst of spores. The target must succeed on a Constitution saving throw (DC = 8 + my Constitution modifier + my proficiency bonus) or take 1d8 poison damage and become poisoned until the end of its next turn. I can use it a number of times equal to my proficiency bonus, and I regain all expended uses when I finish a long rest. This damage increases to 2d8 at 5th level."+
		"\n \u2022 Insporeation. When I die within 100 feet of a humanoid corpse that has been dead no longer than 24 hours, and that hasn’t been subjected to magic that accelerates decay or prevents decay (such as the gentle repose spell), I can use my dying breath to eject spores to inhabit that corpse. Roll percentile dice. If I roll a number equal to or higher than the distance between my body and the corpse in feet, my spores take hold. For example, a target 30 feet away requires a roll of 30 or higher to succeed. On a success, the new body rises again in 2d6 days. I gain the benefits of a long rest and lose my previous Symbiotic Assimilation adaptations, gaining new ones according to the race of the target corpse. On a failure, I die as normal.",
	toNotesPage: [{
		name : "Mycelian (30 ft)",
		source : [["HGtMH", 166]],
		note: desc([
			"\u2022 Symbiotic Assimilation. My unique lifecycle allows me to co-opt some of the adaptations of my host corpse. Choose two of the following adaptations; the race to which my host corpse belonged must have had this racial trait in order for me to choose it (GM’s discretion).",
			"    \u2022 Damage Resistance (Multiple). I have resistance to one damage type determined by my host body’s race.",
			"    \u2022 Darkvision (Multiple). The darkened chambers of The Low are my home. I have superior vision in dark and dim conditions. I can see in dim light within 60 feet of me as if it were bright light, and in darkness as if it were dim light. I can’t discern colour in darkness, only shades of grey.",
			"    \u2022 Dwarven Resilience (Dwarf). I have advantage on saving throws against poison, and I have resistance against poison damage.",
			"    \u2022 Halfling Nimbleness (Halfling). I can move through the space of any creature that is of a size larger than mine.",
			"    \u2022 Muscle Memory (Any). I gain proficiency in one skill of my choice. I can take this option multiple times.",
			"    \u2022 Natural Weapon (Multiple). I have a physical characteristic, such as horns, claws, or teeth, that acts as a natural melee weapon which I can use to make unarmed strikes. If I hit with it, I deal bludgeoning, piercing, or slashing damage (depending on the body part) equal to my Strength modifier plus a damage die determined by my host body’s race, instead of the bludgeoning damage normal for an unarmed strike.",
			"\u2022 Spore Spray. As a reaction when a creature within 10 feet of me hits me with a melee attack, I can attempt to poison it with a burst of spores. The target must succeed on a Constitution saving throw (DC = 8 + my Constitution modifier + my proficiency bonus) or take 1d8 poison damage and become poisoned until the end of its next turn. I can use it a number of times equal to my proficiency bonus, and I regain all expended uses when I finish a long rest. This damage increases to 2d8 at 5th level."+
			"\u2022 Insporeation. When I die within 100 feet of a humanoid corpse that has been dead no longer than 24 hours, and that hasn’t been subjected to magic that accelerates decay or prevents decay (such as the gentle repose spell), I can use my dying breath to eject spores to inhabit that corpse. Roll percentile dice. If I roll a number equal to or higher than the distance between my body and the corpse in feet, my spores take hold. For example, a target 30 feet away requires a roll of 30 or higher to succeed. On a success, the new body rises again in 2d6 days. I gain the benefits of a long rest and lose my previous Symbiotic Assimilation adaptations, gaining new ones according to the race of the target corpse. On a failure, I die as normal.",
		]),
	}],
};

// Mycelian (25 ft)
RaceList["mycelian 25 ft"] = { 
	regExpSearch: /^(?=.*mycelian)(?=.*25)(?=.*ft).*$/i,
	name: "Mycelian",
	sortname: "Mycelian, 30 ft",
	plural: "Mycelians",
	size : [3, 4],
	speed : {
		walk : { spd : 25, enc : 15 },
	},
	languageProfs: ["Common", 1],
	scores : [0, 0, 2, 0, 0, 0],
	scorestxt : "+2 Constitution, +1 one other ability score",
	age: "In the right conditions, a corpse inoculated with mycelial spores can rise as a newly-formed, adult mycelian in under a month. Mycelians tend to wear out a host in less than 7 years, and periodically redeploy their personal spores to animate a new, fresher corpse. Theoretically, a mycelian can live on indefinitely, their minds and personalities changing with each rebirth.",
	features : {
		"spore spray" : {
			name : "Spore Spray",
			minlevel : 1,
			action : [["reaction", ""]],
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
		},
	},
	trait : "Mycelian (25 ft)"+
		"\n \u2022 Symbiotic Assimilation. My unique lifecycle allows me to co-opt some of the adaptations of my host corpse. Choose two of the following adaptations; the race to which my host corpse belonged must have had this racial trait in order for me to choose it (GM’s discretion)."+
		"    \n \u2022 Damage Resistance (Multiple). I have resistance to one damage type determined by my host body’s race."+
		"    \n \u2022 Darkvision (Multiple). The darkened chambers of The Low are my home. I have superior vision in dark and dim conditions. I can see in dim light within 60 feet of me as if it were bright light, and in darkness as if it were dim light. I can’t discern colour in darkness, only shades of grey."+
		"    \n \u2022 Dwarven Resilience (Dwarf). I have advantage on saving throws against poison, and I have resistance against poison damage."+
		"    \n \u2022 Halfling Nimbleness (Halfling). I can move through the space of any creature that is of a size larger than mine."+
		"    \n \u2022 Muscle Memory (Any). I gain proficiency in one skill of my choice. I can take this option multiple times."+
		"    \n \u2022 Natural Weapon (Multiple). I have a physical characteristic, such as horns, claws, or teeth, that acts as a natural melee weapon which I can use to make unarmed strikes. If I hit with it, I deal bludgeoning, piercing, or slashing damage (depending on the body part) equal to my Strength modifier plus a damage die determined by my host body’s race, instead of the bludgeoning damage normal for an unarmed strike."+
		"    \n \u2022 Powerful Build (Multiple). I count as one size larger when determining my carrying capacity and the weight I can push, drag, or lift."+
		"    \n \u2022 Relentless Endurance (Half-Orc). When I am reduced to 0 hit points but not killed outright, I can drop to 1 hit point instead. I can’t use this trait again until I finish a long rest."+
		"\n \u2022 Spore Spray. As a reaction when a creature within 10 feet of me hits me with a melee attack, I can attempt to poison it with a burst of spores. The target must succeed on a Constitution saving throw (DC = 8 + my Constitution modifier + my proficiency bonus) or take 1d8 poison damage and become poisoned until the end of its next turn. I can use it a number of times equal to my proficiency bonus, and I regain all expended uses when I finish a long rest. This damage increases to 2d8 at 5th level."+
		"\n \u2022 Insporeation. When I die within 100 feet of a humanoid corpse that has been dead no longer than 24 hours, and that hasn’t been subjected to magic that accelerates decay or prevents decay (such as the gentle repose spell), I can use my dying breath to eject spores to inhabit that corpse. Roll percentile dice. If I roll a number equal to or higher than the distance between my body and the corpse in feet, my spores take hold. For example, a target 30 feet away requires a roll of 30 or higher to succeed. On a success, the new body rises again in 2d6 days. I gain the benefits of a long rest and lose my previous Symbiotic Assimilation adaptations, gaining new ones according to the race of the target corpse. On a failure, I die as normal.",
	toNotesPage: [{
		name : "Mycelian (25 ft)",
		source : [["HGtMH", 166]],
		note: desc([
			"\u2022 Symbiotic Assimilation. My unique lifecycle allows me to co-opt some of the adaptations of my host corpse. Choose two of the following adaptations; the race to which my host corpse belonged must have had this racial trait in order for me to choose it (GM’s discretion).",
			"    \u2022 Damage Resistance (Multiple). I have resistance to one damage type determined by my host body’s race.",
			"    \u2022 Darkvision (Multiple). The darkened chambers of The Low are my home. I have superior vision in dark and dim conditions. I can see in dim light within 60 feet of me as if it were bright light, and in darkness as if it were dim light. I can’t discern colour in darkness, only shades of grey.",
			"    \u2022 Dwarven Resilience (Dwarf). I have advantage on saving throws against poison, and I have resistance against poison damage.",
			"    \u2022 Halfling Nimbleness (Halfling). I can move through the space of any creature that is of a size larger than mine.",
			"    \u2022 Muscle Memory (Any). I gain proficiency in one skill of my choice. I can take this option multiple times.",
			"    \u2022 Natural Weapon (Multiple). I have a physical characteristic, such as horns, claws, or teeth, that acts as a natural melee weapon which I can use to make unarmed strikes. If I hit with it, I deal bludgeoning, piercing, or slashing damage (depending on the body part) equal to my Strength modifier plus a damage die determined by my host body’s race, instead of the bludgeoning damage normal for an unarmed strike.",
			"\u2022 Spore Spray. As a reaction when a creature within 10 feet of me hits me with a melee attack, I can attempt to poison it with a burst of spores. The target must succeed on a Constitution saving throw (DC = 8 + my Constitution modifier + my proficiency bonus) or take 1d8 poison damage and become poisoned until the end of its next turn. I can use it a number of times equal to my proficiency bonus, and I regain all expended uses when I finish a long rest. This damage increases to 2d8 at 5th level."+
			"\u2022 Insporeation. When I die within 100 feet of a humanoid corpse that has been dead no longer than 24 hours, and that hasn’t been subjected to magic that accelerates decay or prevents decay (such as the gentle repose spell), I can use my dying breath to eject spores to inhabit that corpse. Roll percentile dice. If I roll a number equal to or higher than the distance between my body and the corpse in feet, my spores take hold. For example, a target 30 feet away requires a roll of 30 or higher to succeed. On a success, the new body rises again in 2d6 days. I gain the benefits of a long rest and lose my previous Symbiotic Assimilation adaptations, gaining new ones according to the race of the target corpse. On a failure, I die as normal.",
		]),
	}],
};

// Ombrask, Cnidaran
RaceList["ombrask cnidaran"] = { 
	regExpSearch: /^(?=.*cnidaran)(?=.*ombrask).*$/i,
	name: "Cnidaran Ombrask",
	sortname: "Ombrask, Cnidaran",
	plural: "Ombrasks",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	languageProfs: ["Common", "Undercommon"],
	scores : [0, 2, 1, 0, 0, 0],
	scorestxt : "+2 Dexterity, +1 Constitution",
	age: "Ombrasks live as long as the race from which they originated.",
	vision : [["Darkvision", 60]],
	dmgres : ["Radiant"],
	savetxt : {
		adv_vs : ["Blinded"]
	},
	skills : ["Stealth"],
	features : {
		"fade away" : {
			name : "Fade Away",
			minlevel : 5,
			spellcastingBonus: [{
				name: "Fade Away",
				spells: ["invisibility"],
				selection: ["invisibility"],
				times: 1,
				spellcastingAbility: 3,
			}]
		},
		"voice thief" : {
			name : "Voice Thief",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			action : [["reaction", ""]],
		},
	},
	trait : "Ombrask, Cnidaran"+
		"\n \u2022 Fade Away. When I reach 5th level, I can cast the invisibility spell on myself once with this trait, requiring no material components, and I regain the ability to do so when I finish a long rest. Constitution is my spellcasting ability for this spell. I can also cast this spell using any spell slots I have of the appropriate level."+
		"\n \u2022 Lightbender. Light naturally sculpts around my skin. I have advantage on saving throws against being blinded, and I have resistance to radiant damage."+
		"\n \u2022 Trackless. The Shadow Plane is a dangerous place and ombrasks quickly learn to move in the shadows, leaving scarce tracks in their wake. I have proficiency in the Stealth skill."+
		"\n \u2022 Voice Thief. While an ombrask can potentially understand any number of languages, it is a naturally mute creature. When a creature that can speak dies within 30 feet of me, I can use my reaction to absorb a piece of its psyche. After I have used this reaction, I can’t do so again until I finish a long rest. After I have absorbed a psyche, I can perfectly mimic the creature’s voice, cadence, and speech patterns indefinitely. I can hold a number of pieces of psyche (and mimic a number of voices) equal to my proficiency bonus. If absorbing a new piece of psyche would put me over this limit, I must choose one psyche to be replaced.",
	toNotesPage: [{
		name : "Ombrask, Cnidaran",
		source : [["HGtMH", 169]],
		note: desc([
			"\u2022 Fade Away. When I reach 5th level, I can cast the invisibility spell on myself once with this trait, requiring no material components, and I regain the ability to do so when I finish a long rest. Constitution is my spellcasting ability for this spell. I can also cast this spell using any spell slots I have of the appropriate level."+
			"\u2022 Lightbender. Light naturally sculpts around my skin. I have advantage on saving throws against being blinded, and I have resistance to radiant damage."+
			"\u2022 Trackless. The Shadow Plane is a dangerous place and ombrasks quickly learn to move in the shadows, leaving scarce tracks in their wake. I have proficiency in the Stealth skill."+
			"\u2022 Voice Thief. While an ombrask can potentially understand any number of languages, it is a naturally mute creature. When a creature that can speak dies within 30 feet of me, I can use my reaction to absorb a piece of its psyche. After I have used this reaction, I can’t do so again until I finish a long rest. After I have absorbed a psyche, I can perfectly mimic the creature’s voice, cadence, and speech patterns indefinitely. I can hold a number of pieces of psyche (and mimic a number of voices) equal to my proficiency bonus. If absorbing a new piece of psyche would put me over this limit, I must choose one psyche to be replaced.",
		]),
	}],
};

// Ombrask, Cyclopian
RaceList["ombrask cyclopian"] = { 
	regExpSearch: /^(?=.*cyclopian)(?=.*ombrask).*$/i,
	name: "Cyclopian Ombrask",
	sortname: "Ombrask, Cyclopian",
	plural: "Ombrasks",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	languageProfs: ["Common", "Undercommon"],
	scores : [0, 2, 0, 1, 0, 0],
	scorestxt : "+2 Dexterity, +1 Intelligence",
	age: "Ombrasks live as long as the race from which they originated.",
	vision : [["Darkvision", 60]],
	dmgres : ["Radiant"],
	savetxt : {
		adv_vs : ["Blinded"]
	},
	skills : ["Stealth"],
	features : {
		"fade away" : {
			name : "Fade Away",
			minlevel : 5,
			spellcastingBonus: [{
				name: "Fade Away",
				spells: ["invisibility"],
				selection: ["invisibility"],
				times: 1,
				spellcastingAbility: 3,
			}]
		},
		"voice thief" : {
			name : "Voice Thief",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			action : [["reaction", ""]],
		},
	},
	trait : "Ombrask, Cyclopian"+
		"\n \u2022 Fade Away. When I reach 5th level, I can cast the invisibility spell on myself once with this trait, requiring no material components, and I regain the ability to do so when I finish a long rest. Constitution is my spellcasting ability for this spell. I can also cast this spell using any spell slots I have of the appropriate level."+
		"\n \u2022 Lightbender. Light naturally sculpts around my skin. I have advantage on saving throws against being blinded, and I have resistance to radiant damage."+
		"\n \u2022 Trackless. The Shadow Plane is a dangerous place and ombrasks quickly learn to move in the shadows, leaving scarce tracks in their wake. I have proficiency in the Stealth skill."+
		"\n \u2022 Voice Thief. While an ombrask can potentially understand any number of languages, it is a naturally mute creature. When a creature that can speak dies within 30 feet of me, I can use my reaction to absorb a piece of its psyche. After I have used this reaction, I can’t do so again until I finish a long rest. After I have absorbed a psyche, I can perfectly mimic the creature’s voice, cadence, and speech patterns indefinitely. I can hold a number of pieces of psyche (and mimic a number of voices) equal to my proficiency bonus. If absorbing a new piece of psyche would put me over this limit, I must choose one psyche to be replaced.",
	toNotesPage: [{
		name : "Ombrask, Cyclopian",
		source : [["HGtMH", 169]],
		note: desc([
			"\u2022 Fade Away. When I reach 5th level, I can cast the invisibility spell on myself once with this trait, requiring no material components, and I regain the ability to do so when I finish a long rest. Constitution is my spellcasting ability for this spell. I can also cast this spell using any spell slots I have of the appropriate level."+
			"\u2022 Lightbender. Light naturally sculpts around my skin. I have advantage on saving throws against being blinded, and I have resistance to radiant damage."+
			"\u2022 Trackless. The Shadow Plane is a dangerous place and ombrasks quickly learn to move in the shadows, leaving scarce tracks in their wake. I have proficiency in the Stealth skill."+
			"\u2022 Voice Thief. While an ombrask can potentially understand any number of languages, it is a naturally mute creature. When a creature that can speak dies within 30 feet of me, I can use my reaction to absorb a piece of its psyche. After I have used this reaction, I can’t do so again until I finish a long rest. After I have absorbed a psyche, I can perfectly mimic the creature’s voice, cadence, and speech patterns indefinitely. I can hold a number of pieces of psyche (and mimic a number of voices) equal to my proficiency bonus. If absorbing a new piece of psyche would put me over this limit, I must choose one psyche to be replaced.",
		]),
	}],
};

// Ombrask, Dwarf
RaceList["ombrask dwarf"] = { 
	regExpSearch: /^(?=.*dwarf)(?=.*ombrask).*$/i,
	name: "Dwarf Ombrask",
	sortname: "Ombrask, Dwarf",
	plural: "Ombrasks",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	languageProfs: ["Common", "Undercommon"],
	scores : [0, 2, 1, 0, 0, 0],
	scorestxt : "+2 Dexterity, +1 Constitution",
	age: "Ombrasks live as long as the race from which they originated.",
	vision : [["Darkvision", 60]],
	dmgres : ["Radiant"],
	savetxt : {
		adv_vs : ["Blinded"]
	},
	skills : ["Stealth"],
	features : {
		"fade away" : {
			name : "Fade Away",
			minlevel : 5,
			spellcastingBonus: [{
				name: "Fade Away",
				spells: ["invisibility"],
				selection: ["invisibility"],
				times: 1,
				spellcastingAbility: 3,
			}]
		},
		"voice thief" : {
			name : "Voice Thief",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			action : [["reaction", ""]],
		},
	},
	trait : "Ombrask, Dwarf"+
		"\n \u2022 Fade Away. When I reach 5th level, I can cast the invisibility spell on myself once with this trait, requiring no material components, and I regain the ability to do so when I finish a long rest. Constitution is my spellcasting ability for this spell. I can also cast this spell using any spell slots I have of the appropriate level."+
		"\n \u2022 Lightbender. Light naturally sculpts around my skin. I have advantage on saving throws against being blinded, and I have resistance to radiant damage."+
		"\n \u2022 Trackless. The Shadow Plane is a dangerous place and ombrasks quickly learn to move in the shadows, leaving scarce tracks in their wake. I have proficiency in the Stealth skill."+
		"\n \u2022 Voice Thief. While an ombrask can potentially understand any number of languages, it is a naturally mute creature. When a creature that can speak dies within 30 feet of me, I can use my reaction to absorb a piece of its psyche. After I have used this reaction, I can’t do so again until I finish a long rest. After I have absorbed a psyche, I can perfectly mimic the creature’s voice, cadence, and speech patterns indefinitely. I can hold a number of pieces of psyche (and mimic a number of voices) equal to my proficiency bonus. If absorbing a new piece of psyche would put me over this limit, I must choose one psyche to be replaced.",
	toNotesPage: [{
		name : "Ombrask, Dwarf",
		source : [["HGtMH", 169]],
		note: desc([
			"\u2022 Fade Away. When I reach 5th level, I can cast the invisibility spell on myself once with this trait, requiring no material components, and I regain the ability to do so when I finish a long rest. Constitution is my spellcasting ability for this spell. I can also cast this spell using any spell slots I have of the appropriate level."+
			"\u2022 Lightbender. Light naturally sculpts around my skin. I have advantage on saving throws against being blinded, and I have resistance to radiant damage."+
			"\u2022 Trackless. The Shadow Plane is a dangerous place and ombrasks quickly learn to move in the shadows, leaving scarce tracks in their wake. I have proficiency in the Stealth skill."+
			"\u2022 Voice Thief. While an ombrask can potentially understand any number of languages, it is a naturally mute creature. When a creature that can speak dies within 30 feet of me, I can use my reaction to absorb a piece of its psyche. After I have used this reaction, I can’t do so again until I finish a long rest. After I have absorbed a psyche, I can perfectly mimic the creature’s voice, cadence, and speech patterns indefinitely. I can hold a number of pieces of psyche (and mimic a number of voices) equal to my proficiency bonus. If absorbing a new piece of psyche would put me over this limit, I must choose one psyche to be replaced.",
		]),
	}],
};

// Ombrask, Elf
RaceList["ombrask elf"] = { 
	regExpSearch: /^(?=.*elf)(?=.*ombrask).*$/i,
	name: "Elf Ombrask",
	sortname: "Ombrask, Elf",
	plural: "Ombrasks",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	languageProfs: ["Common", "Undercommon"],
	scores : [0, 2, 0, 0, 0, 0],
	scorestxt : "+2 Dexterity, +1 Intelligence/Wisdom/Charisma",
	age: "Ombrasks live as long as the race from which they originated.",
	vision : [["Darkvision", 60]],
	dmgres : ["Radiant"],
	savetxt : {
		adv_vs : ["Blinded"]
	},
	skills : ["Stealth"],
	features : {
		"fade away" : {
			name : "Fade Away",
			minlevel : 5,
			spellcastingBonus: [{
				name: "Fade Away",
				spells: ["invisibility"],
				selection: ["invisibility"],
				times: 1,
				spellcastingAbility: 3,
			}]
		},
		"voice thief" : {
			name : "Voice Thief",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			action : [["reaction", ""]],
		},
	},
	trait : "Ombrask, Elf"+
		"\n \u2022 Fade Away. When I reach 5th level, I can cast the invisibility spell on myself once with this trait, requiring no material components, and I regain the ability to do so when I finish a long rest. Constitution is my spellcasting ability for this spell. I can also cast this spell using any spell slots I have of the appropriate level."+
		"\n \u2022 Lightbender. Light naturally sculpts around my skin. I have advantage on saving throws against being blinded, and I have resistance to radiant damage."+
		"\n \u2022 Trackless. The Shadow Plane is a dangerous place and ombrasks quickly learn to move in the shadows, leaving scarce tracks in their wake. I have proficiency in the Stealth skill."+
		"\n \u2022 Voice Thief. While an ombrask can potentially understand any number of languages, it is a naturally mute creature. When a creature that can speak dies within 30 feet of me, I can use my reaction to absorb a piece of its psyche. After I have used this reaction, I can’t do so again until I finish a long rest. After I have absorbed a psyche, I can perfectly mimic the creature’s voice, cadence, and speech patterns indefinitely. I can hold a number of pieces of psyche (and mimic a number of voices) equal to my proficiency bonus. If absorbing a new piece of psyche would put me over this limit, I must choose one psyche to be replaced.",
	toNotesPage: [{
		name : "Ombrask, Elf",
		source : [["HGtMH", 169]],
		note: desc([
			"\u2022 Fade Away. When I reach 5th level, I can cast the invisibility spell on myself once with this trait, requiring no material components, and I regain the ability to do so when I finish a long rest. Constitution is my spellcasting ability for this spell. I can also cast this spell using any spell slots I have of the appropriate level."+
			"\u2022 Lightbender. Light naturally sculpts around my skin. I have advantage on saving throws against being blinded, and I have resistance to radiant damage."+
			"\u2022 Trackless. The Shadow Plane is a dangerous place and ombrasks quickly learn to move in the shadows, leaving scarce tracks in their wake. I have proficiency in the Stealth skill."+
			"\u2022 Voice Thief. While an ombrask can potentially understand any number of languages, it is a naturally mute creature. When a creature that can speak dies within 30 feet of me, I can use my reaction to absorb a piece of its psyche. After I have used this reaction, I can’t do so again until I finish a long rest. After I have absorbed a psyche, I can perfectly mimic the creature’s voice, cadence, and speech patterns indefinitely. I can hold a number of pieces of psyche (and mimic a number of voices) equal to my proficiency bonus. If absorbing a new piece of psyche would put me over this limit, I must choose one psyche to be replaced.",
		]),
	}],
};

// Ombrask, Dragonborn
RaceList["ombrask dragonborn"] = { 
	regExpSearch: /^(?=.*dragonborn)(?=.*ombrask).*$/i,
	name: "Dragonborn Ombrask",
	sortname: "Ombrask, Dragonborn",
	plural: "Ombrasks",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	languageProfs: ["Common", "Undercommon"],
	scores : [1, 2, 0, 0, 0, 0],
	scorestxt : "+2 Dexterity, +1 Strength",
	age: "Ombrasks live as long as the race from which they originated.",
	vision : [["Darkvision", 60]],
	dmgres : ["Radiant"],
	savetxt : {
		adv_vs : ["Blinded"]
	},
	skills : ["Stealth"],
	features : {
		"fade away" : {
			name : "Fade Away",
			minlevel : 5,
			spellcastingBonus: [{
				name: "Fade Away",
				spells: ["invisibility"],
				selection: ["invisibility"],
				times: 1,
				spellcastingAbility: 3,
			}]
		},
		"voice thief" : {
			name : "Voice Thief",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			action : [["reaction", ""]],
		},
	},
	trait : "Ombrask, Dragonborn"+
		"\n \u2022 Fade Away. When I reach 5th level, I can cast the invisibility spell on myself once with this trait, requiring no material components, and I regain the ability to do so when I finish a long rest. Constitution is my spellcasting ability for this spell. I can also cast this spell using any spell slots I have of the appropriate level."+
		"\n \u2022 Lightbender. Light naturally sculpts around my skin. I have advantage on saving throws against being blinded, and I have resistance to radiant damage."+
		"\n \u2022 Trackless. The Shadow Plane is a dangerous place and ombrasks quickly learn to move in the shadows, leaving scarce tracks in their wake. I have proficiency in the Stealth skill."+
		"\n \u2022 Voice Thief. While an ombrask can potentially understand any number of languages, it is a naturally mute creature. When a creature that can speak dies within 30 feet of me, I can use my reaction to absorb a piece of its psyche. After I have used this reaction, I can’t do so again until I finish a long rest. After I have absorbed a psyche, I can perfectly mimic the creature’s voice, cadence, and speech patterns indefinitely. I can hold a number of pieces of psyche (and mimic a number of voices) equal to my proficiency bonus. If absorbing a new piece of psyche would put me over this limit, I must choose one psyche to be replaced.",
	toNotesPage: [{
		name : "Ombrask, Dragonborn",
		source : [["HGtMH", 169]],
		note: desc([
			"\u2022 Fade Away. When I reach 5th level, I can cast the invisibility spell on myself once with this trait, requiring no material components, and I regain the ability to do so when I finish a long rest. Constitution is my spellcasting ability for this spell. I can also cast this spell using any spell slots I have of the appropriate level."+
			"\u2022 Lightbender. Light naturally sculpts around my skin. I have advantage on saving throws against being blinded, and I have resistance to radiant damage."+
			"\u2022 Trackless. The Shadow Plane is a dangerous place and ombrasks quickly learn to move in the shadows, leaving scarce tracks in their wake. I have proficiency in the Stealth skill."+
			"\u2022 Voice Thief. While an ombrask can potentially understand any number of languages, it is a naturally mute creature. When a creature that can speak dies within 30 feet of me, I can use my reaction to absorb a piece of its psyche. After I have used this reaction, I can’t do so again until I finish a long rest. After I have absorbed a psyche, I can perfectly mimic the creature’s voice, cadence, and speech patterns indefinitely. I can hold a number of pieces of psyche (and mimic a number of voices) equal to my proficiency bonus. If absorbing a new piece of psyche would put me over this limit, I must choose one psyche to be replaced.",
		]),
	}],
};

// Ombrask, Gnome
RaceList["ombrask gnome"] = { 
	regExpSearch: /^(?=.*gnome)(?=.*ombrask).*$/i,
	name: "Gnome Ombrask",
	sortname: "Ombrask, Gnome",
	plural: "Ombrasks",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	languageProfs: ["Common", "Undercommon"],
	scores : [0, 2, 0, 1, 0, 0],
	scorestxt : "+2 Dexterity, +1 Intelligence",
	age: "Ombrasks live as long as the race from which they originated.",
	vision : [["Darkvision", 60]],
	dmgres : ["Radiant"],
	savetxt : {
		adv_vs : ["Blinded"]
	},
	skills : ["Stealth"],
	features : {
		"fade away" : {
			name : "Fade Away",
			minlevel : 5,
			spellcastingBonus: [{
				name: "Fade Away",
				spells: ["invisibility"],
				selection: ["invisibility"],
				times: 1,
				spellcastingAbility: 3,
			}]
		},
		"voice thief" : {
			name : "Voice Thief",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			action : [["reaction", ""]],
		},
	},
	trait : "Ombrask, Gnome"+
		"\n \u2022 Fade Away. When I reach 5th level, I can cast the invisibility spell on myself once with this trait, requiring no material components, and I regain the ability to do so when I finish a long rest. Constitution is my spellcasting ability for this spell. I can also cast this spell using any spell slots I have of the appropriate level."+
		"\n \u2022 Lightbender. Light naturally sculpts around my skin. I have advantage on saving throws against being blinded, and I have resistance to radiant damage."+
		"\n \u2022 Trackless. The Shadow Plane is a dangerous place and ombrasks quickly learn to move in the shadows, leaving scarce tracks in their wake. I have proficiency in the Stealth skill."+
		"\n \u2022 Voice Thief. While an ombrask can potentially understand any number of languages, it is a naturally mute creature. When a creature that can speak dies within 30 feet of me, I can use my reaction to absorb a piece of its psyche. After I have used this reaction, I can’t do so again until I finish a long rest. After I have absorbed a psyche, I can perfectly mimic the creature’s voice, cadence, and speech patterns indefinitely. I can hold a number of pieces of psyche (and mimic a number of voices) equal to my proficiency bonus. If absorbing a new piece of psyche would put me over this limit, I must choose one psyche to be replaced.",
	toNotesPage: [{
		name : "Ombrask, Gnome",
		source : [["HGtMH", 169]],
		note: desc([
			"\u2022 Fade Away. When I reach 5th level, I can cast the invisibility spell on myself once with this trait, requiring no material components, and I regain the ability to do so when I finish a long rest. Constitution is my spellcasting ability for this spell. I can also cast this spell using any spell slots I have of the appropriate level."+
			"\u2022 Lightbender. Light naturally sculpts around my skin. I have advantage on saving throws against being blinded, and I have resistance to radiant damage."+
			"\u2022 Trackless. The Shadow Plane is a dangerous place and ombrasks quickly learn to move in the shadows, leaving scarce tracks in their wake. I have proficiency in the Stealth skill."+
			"\u2022 Voice Thief. While an ombrask can potentially understand any number of languages, it is a naturally mute creature. When a creature that can speak dies within 30 feet of me, I can use my reaction to absorb a piece of its psyche. After I have used this reaction, I can’t do so again until I finish a long rest. After I have absorbed a psyche, I can perfectly mimic the creature’s voice, cadence, and speech patterns indefinitely. I can hold a number of pieces of psyche (and mimic a number of voices) equal to my proficiency bonus. If absorbing a new piece of psyche would put me over this limit, I must choose one psyche to be replaced.",
		]),
	}],
};

// Ombrask, Gobboc
RaceList["ombrask gobboc"] = { 
	regExpSearch: /^(?=.*gobboc)(?=.*ombrask).*$/i,
	name: "Gobboc Ombrask",
	sortname: "Ombrask, Gobboc",
	plural: "Ombrasks",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	languageProfs: ["Common", "Undercommon"],
	scores : [0, 2, 0, 0, 0, 0],
	scorestxt : "+2 Dexterity, +1 Wisdom/Charisma",
	age: "Ombrasks live as long as the race from which they originated.",
	vision : [["Darkvision", 60]],
	dmgres : ["Radiant"],
	savetxt : {
		adv_vs : ["Blinded"]
	},
	skills : ["Stealth"],
	features : {
		"fade away" : {
			name : "Fade Away",
			minlevel : 5,
			spellcastingBonus: [{
				name: "Fade Away",
				spells: ["invisibility"],
				selection: ["invisibility"],
				times: 1,
				spellcastingAbility: 3,
			}]
		},
		"voice thief" : {
			name : "Voice Thief",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			action : [["reaction", ""]],
		},
	},
	trait : "Ombrask, Gobboc"+
		"\n \u2022 Fade Away. When I reach 5th level, I can cast the invisibility spell on myself once with this trait, requiring no material components, and I regain the ability to do so when I finish a long rest. Constitution is my spellcasting ability for this spell. I can also cast this spell using any spell slots I have of the appropriate level."+
		"\n \u2022 Lightbender. Light naturally sculpts around my skin. I have advantage on saving throws against being blinded, and I have resistance to radiant damage."+
		"\n \u2022 Trackless. The Shadow Plane is a dangerous place and ombrasks quickly learn to move in the shadows, leaving scarce tracks in their wake. I have proficiency in the Stealth skill."+
		"\n \u2022 Voice Thief. While an ombrask can potentially understand any number of languages, it is a naturally mute creature. When a creature that can speak dies within 30 feet of me, I can use my reaction to absorb a piece of its psyche. After I have used this reaction, I can’t do so again until I finish a long rest. After I have absorbed a psyche, I can perfectly mimic the creature’s voice, cadence, and speech patterns indefinitely. I can hold a number of pieces of psyche (and mimic a number of voices) equal to my proficiency bonus. If absorbing a new piece of psyche would put me over this limit, I must choose one psyche to be replaced.",
	toNotesPage: [{
		name : "Ombrask, Gobboc",
		source : [["HGtMH", 169]],
		note: desc([
			"\u2022 Fade Away. When I reach 5th level, I can cast the invisibility spell on myself once with this trait, requiring no material components, and I regain the ability to do so when I finish a long rest. Constitution is my spellcasting ability for this spell. I can also cast this spell using any spell slots I have of the appropriate level."+
			"\u2022 Lightbender. Light naturally sculpts around my skin. I have advantage on saving throws against being blinded, and I have resistance to radiant damage."+
			"\u2022 Trackless. The Shadow Plane is a dangerous place and ombrasks quickly learn to move in the shadows, leaving scarce tracks in their wake. I have proficiency in the Stealth skill."+
			"\u2022 Voice Thief. While an ombrask can potentially understand any number of languages, it is a naturally mute creature. When a creature that can speak dies within 30 feet of me, I can use my reaction to absorb a piece of its psyche. After I have used this reaction, I can’t do so again until I finish a long rest. After I have absorbed a psyche, I can perfectly mimic the creature’s voice, cadence, and speech patterns indefinitely. I can hold a number of pieces of psyche (and mimic a number of voices) equal to my proficiency bonus. If absorbing a new piece of psyche would put me over this limit, I must choose one psyche to be replaced.",
		]),
	}],
};

// Ombrask, Golynn
RaceList["ombrask golynn"] = { 
	regExpSearch: /^(?=.*golynn)(?=.*ombrask).*$/i,
	name: "Golynn Ombrask",
	sortname: "Ombrask, Golynn",
	plural: "Ombrasks",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	languageProfs: ["Common", "Undercommon"],
	scores : [0, 2, 1, 0, 0, 0],
	scorestxt : "+2 Dexterity, +1 Constitution",
	age: "Ombrasks live as long as the race from which they originated.",
	vision : [["Darkvision", 60]],
	dmgres : ["Radiant"],
	savetxt : {
		adv_vs : ["Blinded"]
	},
	skills : ["Stealth"],
	features : {
		"fade away" : {
			name : "Fade Away",
			minlevel : 5,
			spellcastingBonus: [{
				name: "Fade Away",
				spells: ["invisibility"],
				selection: ["invisibility"],
				times: 1,
				spellcastingAbility: 3,
			}]
		},
		"voice thief" : {
			name : "Voice Thief",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			action : [["reaction", ""]],
		},
	},
	trait : "Ombrask, Golynn"+
		"\n \u2022 Fade Away. When I reach 5th level, I can cast the invisibility spell on myself once with this trait, requiring no material components, and I regain the ability to do so when I finish a long rest. Constitution is my spellcasting ability for this spell. I can also cast this spell using any spell slots I have of the appropriate level."+
		"\n \u2022 Lightbender. Light naturally sculpts around my skin. I have advantage on saving throws against being blinded, and I have resistance to radiant damage."+
		"\n \u2022 Trackless. The Shadow Plane is a dangerous place and ombrasks quickly learn to move in the shadows, leaving scarce tracks in their wake. I have proficiency in the Stealth skill."+
		"\n \u2022 Voice Thief. While an ombrask can potentially understand any number of languages, it is a naturally mute creature. When a creature that can speak dies within 30 feet of me, I can use my reaction to absorb a piece of its psyche. After I have used this reaction, I can’t do so again until I finish a long rest. After I have absorbed a psyche, I can perfectly mimic the creature’s voice, cadence, and speech patterns indefinitely. I can hold a number of pieces of psyche (and mimic a number of voices) equal to my proficiency bonus. If absorbing a new piece of psyche would put me over this limit, I must choose one psyche to be replaced.",
	toNotesPage: [{
		name : "Ombrask, Golynn",
		source : [["HGtMH", 169]],
		note: desc([
			"\u2022 Fade Away. When I reach 5th level, I can cast the invisibility spell on myself once with this trait, requiring no material components, and I regain the ability to do so when I finish a long rest. Constitution is my spellcasting ability for this spell. I can also cast this spell using any spell slots I have of the appropriate level."+
			"\u2022 Lightbender. Light naturally sculpts around my skin. I have advantage on saving throws against being blinded, and I have resistance to radiant damage."+
			"\u2022 Trackless. The Shadow Plane is a dangerous place and ombrasks quickly learn to move in the shadows, leaving scarce tracks in their wake. I have proficiency in the Stealth skill."+
			"\u2022 Voice Thief. While an ombrask can potentially understand any number of languages, it is a naturally mute creature. When a creature that can speak dies within 30 feet of me, I can use my reaction to absorb a piece of its psyche. After I have used this reaction, I can’t do so again until I finish a long rest. After I have absorbed a psyche, I can perfectly mimic the creature’s voice, cadence, and speech patterns indefinitely. I can hold a number of pieces of psyche (and mimic a number of voices) equal to my proficiency bonus. If absorbing a new piece of psyche would put me over this limit, I must choose one psyche to be replaced.",
		]),
	}],
};

// Ombrask, Half-Elf
RaceList["ombrask half-elf"] = { 
	regExpSearch: /^(?=.*half-elf)(?=.*ombrask).*$/i,
	name: "Half-Elf Ombrask",
	sortname: "Ombrask, Half-Elf",
	plural: "Ombrasks",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	languageProfs: ["Common", "Undercommon"],
	scores : [0, 2, 0, 0, 0, 1],
	scorestxt : "+2 Dexterity, +1 Charisma",
	age: "Ombrasks live as long as the race from which they originated.",
	vision : [["Darkvision", 60]],
	dmgres : ["Radiant"],
	savetxt : {
		adv_vs : ["Blinded"]
	},
	skills : ["Stealth"],
	features : {
		"fade away" : {
			name : "Fade Away",
			minlevel : 5,
			spellcastingBonus: [{
				name: "Fade Away",
				spells: ["invisibility"],
				selection: ["invisibility"],
				times: 1,
				spellcastingAbility: 3,
			}]
		},
		"voice thief" : {
			name : "Voice Thief",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			action : [["reaction", ""]],
		},
	},
	trait : "Ombrask, Half-Elf"+
		"\n \u2022 Fade Away. When I reach 5th level, I can cast the invisibility spell on myself once with this trait, requiring no material components, and I regain the ability to do so when I finish a long rest. Constitution is my spellcasting ability for this spell. I can also cast this spell using any spell slots I have of the appropriate level."+
		"\n \u2022 Lightbender. Light naturally sculpts around my skin. I have advantage on saving throws against being blinded, and I have resistance to radiant damage."+
		"\n \u2022 Trackless. The Shadow Plane is a dangerous place and ombrasks quickly learn to move in the shadows, leaving scarce tracks in their wake. I have proficiency in the Stealth skill."+
		"\n \u2022 Voice Thief. While an ombrask can potentially understand any number of languages, it is a naturally mute creature. When a creature that can speak dies within 30 feet of me, I can use my reaction to absorb a piece of its psyche. After I have used this reaction, I can’t do so again until I finish a long rest. After I have absorbed a psyche, I can perfectly mimic the creature’s voice, cadence, and speech patterns indefinitely. I can hold a number of pieces of psyche (and mimic a number of voices) equal to my proficiency bonus. If absorbing a new piece of psyche would put me over this limit, I must choose one psyche to be replaced.",
	toNotesPage: [{
		name : "Ombrask, Half-Elf",
		source : [["HGtMH", 169]],
		note: desc([
			"\u2022 Fade Away. When I reach 5th level, I can cast the invisibility spell on myself once with this trait, requiring no material components, and I regain the ability to do so when I finish a long rest. Constitution is my spellcasting ability for this spell. I can also cast this spell using any spell slots I have of the appropriate level."+
			"\u2022 Lightbender. Light naturally sculpts around my skin. I have advantage on saving throws against being blinded, and I have resistance to radiant damage."+
			"\u2022 Trackless. The Shadow Plane is a dangerous place and ombrasks quickly learn to move in the shadows, leaving scarce tracks in their wake. I have proficiency in the Stealth skill."+
			"\u2022 Voice Thief. While an ombrask can potentially understand any number of languages, it is a naturally mute creature. When a creature that can speak dies within 30 feet of me, I can use my reaction to absorb a piece of its psyche. After I have used this reaction, I can’t do so again until I finish a long rest. After I have absorbed a psyche, I can perfectly mimic the creature’s voice, cadence, and speech patterns indefinitely. I can hold a number of pieces of psyche (and mimic a number of voices) equal to my proficiency bonus. If absorbing a new piece of psyche would put me over this limit, I must choose one psyche to be replaced.",
		]),
	}],
};

// Ombrask, Half-Orc
RaceList["ombrask half-orc"] = { 
	regExpSearch: /^(?=.*half-orc)(?=.*ombrask).*$/i,
	name: "Half-Orc Ombrask",
	sortname: "Ombrask, Half-Orc",
	plural: "Ombrasks",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	languageProfs: ["Common", "Undercommon"],
	scores : [1, 2, 0, 0, 0, 0],
	scorestxt : "+2 Dexterity, +1 Strength",
	age: "Ombrasks live as long as the race from which they originated.",
	vision : [["Darkvision", 60]],
	dmgres : ["Radiant"],
	savetxt : {
		adv_vs : ["Blinded"]
	},
	skills : ["Stealth"],
	features : {
		"fade away" : {
			name : "Fade Away",
			minlevel : 5,
			spellcastingBonus: [{
				name: "Fade Away",
				spells: ["invisibility"],
				selection: ["invisibility"],
				times: 1,
				spellcastingAbility: 3,
			}]
		},
		"voice thief" : {
			name : "Voice Thief",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			action : [["reaction", ""]],
		},
	},
	trait : "Ombrask, Half-Orc"+
		"\n \u2022 Fade Away. When I reach 5th level, I can cast the invisibility spell on myself once with this trait, requiring no material components, and I regain the ability to do so when I finish a long rest. Constitution is my spellcasting ability for this spell. I can also cast this spell using any spell slots I have of the appropriate level."+
		"\n \u2022 Lightbender. Light naturally sculpts around my skin. I have advantage on saving throws against being blinded, and I have resistance to radiant damage."+
		"\n \u2022 Trackless. The Shadow Plane is a dangerous place and ombrasks quickly learn to move in the shadows, leaving scarce tracks in their wake. I have proficiency in the Stealth skill."+
		"\n \u2022 Voice Thief. While an ombrask can potentially understand any number of languages, it is a naturally mute creature. When a creature that can speak dies within 30 feet of me, I can use my reaction to absorb a piece of its psyche. After I have used this reaction, I can’t do so again until I finish a long rest. After I have absorbed a psyche, I can perfectly mimic the creature’s voice, cadence, and speech patterns indefinitely. I can hold a number of pieces of psyche (and mimic a number of voices) equal to my proficiency bonus. If absorbing a new piece of psyche would put me over this limit, I must choose one psyche to be replaced.",
	toNotesPage: [{
		name : "Ombrask, Half-Orc",
		source : [["HGtMH", 169]],
		note: desc([
			"\u2022 Fade Away. When I reach 5th level, I can cast the invisibility spell on myself once with this trait, requiring no material components, and I regain the ability to do so when I finish a long rest. Constitution is my spellcasting ability for this spell. I can also cast this spell using any spell slots I have of the appropriate level."+
			"\u2022 Lightbender. Light naturally sculpts around my skin. I have advantage on saving throws against being blinded, and I have resistance to radiant damage."+
			"\u2022 Trackless. The Shadow Plane is a dangerous place and ombrasks quickly learn to move in the shadows, leaving scarce tracks in their wake. I have proficiency in the Stealth skill."+
			"\u2022 Voice Thief. While an ombrask can potentially understand any number of languages, it is a naturally mute creature. When a creature that can speak dies within 30 feet of me, I can use my reaction to absorb a piece of its psyche. After I have used this reaction, I can’t do so again until I finish a long rest. After I have absorbed a psyche, I can perfectly mimic the creature’s voice, cadence, and speech patterns indefinitely. I can hold a number of pieces of psyche (and mimic a number of voices) equal to my proficiency bonus. If absorbing a new piece of psyche would put me over this limit, I must choose one psyche to be replaced.",
		]),
	}],
};

// Ombrask, Halfling
RaceList["ombrask halfling"] = { 
	regExpSearch: /^(?=.*halfling)(?=.*ombrask).*$/i,
	name: "Halfling Ombrask",
	sortname: "Ombrask, Halfling",
	plural: "Ombrasks",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	languageProfs: ["Common", "Undercommon"],
	scores : [0, 2, 0, 0, 0, 1],
	scorestxt : "+2 Dexterity, +1 Charisma",
	age: "Ombrasks live as long as the race from which they originated.",
	vision : [["Darkvision", 60]],
	dmgres : ["Radiant"],
	savetxt : {
		adv_vs : ["Blinded"]
	},
	skills : ["Stealth"],
	features : {
		"fade away" : {
			name : "Fade Away",
			minlevel : 5,
			spellcastingBonus: [{
				name: "Fade Away",
				spells: ["invisibility"],
				selection: ["invisibility"],
				times: 1,
				spellcastingAbility: 3,
			}]
		},
		"voice thief" : {
			name : "Voice Thief",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			action : [["reaction", ""]],
		},
	},
	trait : "Ombrask, Halfling"+
		"\n \u2022 Fade Away. When I reach 5th level, I can cast the invisibility spell on myself once with this trait, requiring no material components, and I regain the ability to do so when I finish a long rest. Constitution is my spellcasting ability for this spell. I can also cast this spell using any spell slots I have of the appropriate level."+
		"\n \u2022 Lightbender. Light naturally sculpts around my skin. I have advantage on saving throws against being blinded, and I have resistance to radiant damage."+
		"\n \u2022 Trackless. The Shadow Plane is a dangerous place and ombrasks quickly learn to move in the shadows, leaving scarce tracks in their wake. I have proficiency in the Stealth skill."+
		"\n \u2022 Voice Thief. While an ombrask can potentially understand any number of languages, it is a naturally mute creature. When a creature that can speak dies within 30 feet of me, I can use my reaction to absorb a piece of its psyche. After I have used this reaction, I can’t do so again until I finish a long rest. After I have absorbed a psyche, I can perfectly mimic the creature’s voice, cadence, and speech patterns indefinitely. I can hold a number of pieces of psyche (and mimic a number of voices) equal to my proficiency bonus. If absorbing a new piece of psyche would put me over this limit, I must choose one psyche to be replaced.",
	toNotesPage: [{
		name : "Ombrask, Halfling",
		source : [["HGtMH", 169]],
		note: desc([
			"\u2022 Fade Away. When I reach 5th level, I can cast the invisibility spell on myself once with this trait, requiring no material components, and I regain the ability to do so when I finish a long rest. Constitution is my spellcasting ability for this spell. I can also cast this spell using any spell slots I have of the appropriate level."+
			"\u2022 Lightbender. Light naturally sculpts around my skin. I have advantage on saving throws against being blinded, and I have resistance to radiant damage."+
			"\u2022 Trackless. The Shadow Plane is a dangerous place and ombrasks quickly learn to move in the shadows, leaving scarce tracks in their wake. I have proficiency in the Stealth skill."+
			"\u2022 Voice Thief. While an ombrask can potentially understand any number of languages, it is a naturally mute creature. When a creature that can speak dies within 30 feet of me, I can use my reaction to absorb a piece of its psyche. After I have used this reaction, I can’t do so again until I finish a long rest. After I have absorbed a psyche, I can perfectly mimic the creature’s voice, cadence, and speech patterns indefinitely. I can hold a number of pieces of psyche (and mimic a number of voices) equal to my proficiency bonus. If absorbing a new piece of psyche would put me over this limit, I must choose one psyche to be replaced.",
		]),
	}],
};

// Ombrask, Human
RaceList["ombrask human"] = { 
	regExpSearch: /^(?=.*human)(?=.*ombrask).*$/i,
	name: "Human Ombrask",
	sortname: "Ombrask, Human",
	plural: "Ombrasks",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	languageProfs: ["Common", "Undercommon"],
	scores : [0, 2, 0, 0, 0, 0],
	scorestxt : "+2 Dexterity, +1 Any ability except Dex",
	age: "Ombrasks live as long as the race from which they originated.",
	vision : [["Darkvision", 60]],
	dmgres : ["Radiant"],
	savetxt : {
		adv_vs : ["Blinded"]
	},
	skills : ["Stealth"],
	features : {
		"fade away" : {
			name : "Fade Away",
			minlevel : 5,
			spellcastingBonus: [{
				name: "Fade Away",
				spells: ["invisibility"],
				selection: ["invisibility"],
				times: 1,
				spellcastingAbility: 3,
			}]
		},
		"voice thief" : {
			name : "Voice Thief",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			action : [["reaction", ""]],
		},
	},
	trait : "Ombrask, Human"+
		"\n \u2022 Fade Away. When I reach 5th level, I can cast the invisibility spell on myself once with this trait, requiring no material components, and I regain the ability to do so when I finish a long rest. Constitution is my spellcasting ability for this spell. I can also cast this spell using any spell slots I have of the appropriate level."+
		"\n \u2022 Lightbender. Light naturally sculpts around my skin. I have advantage on saving throws against being blinded, and I have resistance to radiant damage."+
		"\n \u2022 Trackless. The Shadow Plane is a dangerous place and ombrasks quickly learn to move in the shadows, leaving scarce tracks in their wake. I have proficiency in the Stealth skill."+
		"\n \u2022 Voice Thief. While an ombrask can potentially understand any number of languages, it is a naturally mute creature. When a creature that can speak dies within 30 feet of me, I can use my reaction to absorb a piece of its psyche. After I have used this reaction, I can’t do so again until I finish a long rest. After I have absorbed a psyche, I can perfectly mimic the creature’s voice, cadence, and speech patterns indefinitely. I can hold a number of pieces of psyche (and mimic a number of voices) equal to my proficiency bonus. If absorbing a new piece of psyche would put me over this limit, I must choose one psyche to be replaced.",
	toNotesPage: [{
		name : "Ombrask, Human",
		source : [["HGtMH", 169]],
		note: desc([
			"\u2022 Fade Away. When I reach 5th level, I can cast the invisibility spell on myself once with this trait, requiring no material components, and I regain the ability to do so when I finish a long rest. Constitution is my spellcasting ability for this spell. I can also cast this spell using any spell slots I have of the appropriate level."+
			"\u2022 Lightbender. Light naturally sculpts around my skin. I have advantage on saving throws against being blinded, and I have resistance to radiant damage."+
			"\u2022 Trackless. The Shadow Plane is a dangerous place and ombrasks quickly learn to move in the shadows, leaving scarce tracks in their wake. I have proficiency in the Stealth skill."+
			"\u2022 Voice Thief. While an ombrask can potentially understand any number of languages, it is a naturally mute creature. When a creature that can speak dies within 30 feet of me, I can use my reaction to absorb a piece of its psyche. After I have used this reaction, I can’t do so again until I finish a long rest. After I have absorbed a psyche, I can perfectly mimic the creature’s voice, cadence, and speech patterns indefinitely. I can hold a number of pieces of psyche (and mimic a number of voices) equal to my proficiency bonus. If absorbing a new piece of psyche would put me over this limit, I must choose one psyche to be replaced.",
		]),
	}],
};

// Ombrask, Oozekin
RaceList["ombrask oozekin"] = { 
	regExpSearch: /^(?=.*oozekin)(?=.*ombrask).*$/i,
	name: "Oozekin Ombrask",
	sortname: "Ombrask, Oozekin",
	plural: "Ombrasks",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	languageProfs: ["Common", "Undercommon"],
	scores : [0, 2, 1, 0, 0, 0],
	scorestxt : "+2 Dexterity, +1 Constitution",
	age: "Ombrasks live as long as the race from which they originated.",
	vision : [["Darkvision", 60]],
	dmgres : ["Radiant"],
	savetxt : {
		adv_vs : ["Blinded"]
	},
	skills : ["Stealth"],
	features : {
		"fade away" : {
			name : "Fade Away",
			minlevel : 5,
			spellcastingBonus: [{
				name: "Fade Away",
				spells: ["invisibility"],
				selection: ["invisibility"],
				times: 1,
				spellcastingAbility: 3,
			}]
		},
		"voice thief" : {
			name : "Voice Thief",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			action : [["reaction", ""]],
		},
	},
	trait : "Ombrask, Oozekin"+
		"\n \u2022 Fade Away. When I reach 5th level, I can cast the invisibility spell on myself once with this trait, requiring no material components, and I regain the ability to do so when I finish a long rest. Constitution is my spellcasting ability for this spell. I can also cast this spell using any spell slots I have of the appropriate level."+
		"\n \u2022 Lightbender. Light naturally sculpts around my skin. I have advantage on saving throws against being blinded, and I have resistance to radiant damage."+
		"\n \u2022 Trackless. The Shadow Plane is a dangerous place and ombrasks quickly learn to move in the shadows, leaving scarce tracks in their wake. I have proficiency in the Stealth skill."+
		"\n \u2022 Voice Thief. While an ombrask can potentially understand any number of languages, it is a naturally mute creature. When a creature that can speak dies within 30 feet of me, I can use my reaction to absorb a piece of its psyche. After I have used this reaction, I can’t do so again until I finish a long rest. After I have absorbed a psyche, I can perfectly mimic the creature’s voice, cadence, and speech patterns indefinitely. I can hold a number of pieces of psyche (and mimic a number of voices) equal to my proficiency bonus. If absorbing a new piece of psyche would put me over this limit, I must choose one psyche to be replaced.",
	toNotesPage: [{
		name : "Ombrask, Oozekin",
		source : [["HGtMH", 169]],
		note: desc([
			"\u2022 Fade Away. When I reach 5th level, I can cast the invisibility spell on myself once with this trait, requiring no material components, and I regain the ability to do so when I finish a long rest. Constitution is my spellcasting ability for this spell. I can also cast this spell using any spell slots I have of the appropriate level."+
			"\u2022 Lightbender. Light naturally sculpts around my skin. I have advantage on saving throws against being blinded, and I have resistance to radiant damage."+
			"\u2022 Trackless. The Shadow Plane is a dangerous place and ombrasks quickly learn to move in the shadows, leaving scarce tracks in their wake. I have proficiency in the Stealth skill."+
			"\u2022 Voice Thief. While an ombrask can potentially understand any number of languages, it is a naturally mute creature. When a creature that can speak dies within 30 feet of me, I can use my reaction to absorb a piece of its psyche. After I have used this reaction, I can’t do so again until I finish a long rest. After I have absorbed a psyche, I can perfectly mimic the creature’s voice, cadence, and speech patterns indefinitely. I can hold a number of pieces of psyche (and mimic a number of voices) equal to my proficiency bonus. If absorbing a new piece of psyche would put me over this limit, I must choose one psyche to be replaced.",
		]),
	}],
};

// Ombrask, Opteran
RaceList["ombrask opteran"] = { 
	regExpSearch: /^(?=.*opteran)(?=.*ombrask).*$/i,
	name: "Opteran Ombrask",
	sortname: "Ombrask, Opteran",
	plural: "Ombrasks",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	languageProfs: ["Common", "Undercommon"],
	scores : [0, 2, 0, 0, 0, 1],
	scorestxt : "+2 Dexterity, +1 Charisma",
	age: "Ombrasks live as long as the race from which they originated.",
	vision : [["Darkvision", 60]],
	dmgres : ["Radiant"],
	savetxt : {
		adv_vs : ["Blinded"]
	},
	skills : ["Stealth"],
	features : {
		"fade away" : {
			name : "Fade Away",
			minlevel : 5,
			spellcastingBonus: [{
				name: "Fade Away",
				spells: ["invisibility"],
				selection: ["invisibility"],
				times: 1,
				spellcastingAbility: 3,
			}]
		},
		"voice thief" : {
			name : "Voice Thief",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			action : [["reaction", ""]],
		},
	},
	trait : "Ombrask, Opteran"+
		"\n \u2022 Fade Away. When I reach 5th level, I can cast the invisibility spell on myself once with this trait, requiring no material components, and I regain the ability to do so when I finish a long rest. Constitution is my spellcasting ability for this spell. I can also cast this spell using any spell slots I have of the appropriate level."+
		"\n \u2022 Lightbender. Light naturally sculpts around my skin. I have advantage on saving throws against being blinded, and I have resistance to radiant damage."+
		"\n \u2022 Trackless. The Shadow Plane is a dangerous place and ombrasks quickly learn to move in the shadows, leaving scarce tracks in their wake. I have proficiency in the Stealth skill."+
		"\n \u2022 Voice Thief. While an ombrask can potentially understand any number of languages, it is a naturally mute creature. When a creature that can speak dies within 30 feet of me, I can use my reaction to absorb a piece of its psyche. After I have used this reaction, I can’t do so again until I finish a long rest. After I have absorbed a psyche, I can perfectly mimic the creature’s voice, cadence, and speech patterns indefinitely. I can hold a number of pieces of psyche (and mimic a number of voices) equal to my proficiency bonus. If absorbing a new piece of psyche would put me over this limit, I must choose one psyche to be replaced.",
	toNotesPage: [{
		name : "Ombrask, Opteran",
		source : [["HGtMH", 169]],
		note: desc([
			"\u2022 Fade Away. When I reach 5th level, I can cast the invisibility spell on myself once with this trait, requiring no material components, and I regain the ability to do so when I finish a long rest. Constitution is my spellcasting ability for this spell. I can also cast this spell using any spell slots I have of the appropriate level."+
			"\u2022 Lightbender. Light naturally sculpts around my skin. I have advantage on saving throws against being blinded, and I have resistance to radiant damage."+
			"\u2022 Trackless. The Shadow Plane is a dangerous place and ombrasks quickly learn to move in the shadows, leaving scarce tracks in their wake. I have proficiency in the Stealth skill."+
			"\u2022 Voice Thief. While an ombrask can potentially understand any number of languages, it is a naturally mute creature. When a creature that can speak dies within 30 feet of me, I can use my reaction to absorb a piece of its psyche. After I have used this reaction, I can’t do so again until I finish a long rest. After I have absorbed a psyche, I can perfectly mimic the creature’s voice, cadence, and speech patterns indefinitely. I can hold a number of pieces of psyche (and mimic a number of voices) equal to my proficiency bonus. If absorbing a new piece of psyche would put me over this limit, I must choose one psyche to be replaced.",
		]),
	}],
};

// Ombrask, Rakin
RaceList["ombrask rakin"] = { 
	regExpSearch: /^(?=.*rakin)(?=.*ombrask).*$/i,
	name: "Rakin Ombrask",
	sortname: "Ombrask, Rakin",
	plural: "Ombrasks",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	languageProfs: ["Common", "Undercommon"],
	scores : [0, 2, 0, 0, 0, 0],
	scorestxt : "+2 Dexterity, +1 Constitution/Intelligence/Wisdom/Charisma",
	age: "Ombrasks live as long as the race from which they originated.",
	vision : [["Darkvision", 60]],
	dmgres : ["Radiant"],
	savetxt : {
		adv_vs : ["Blinded"]
	},
	skills : ["Stealth"],
	features : {
		"fade away" : {
			name : "Fade Away",
			minlevel : 5,
			spellcastingBonus: [{
				name: "Fade Away",
				spells: ["invisibility"],
				selection: ["invisibility"],
				times: 1,
				spellcastingAbility: 3,
			}]
		},
		"voice thief" : {
			name : "Voice Thief",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			action : [["reaction", ""]],
		},
	},
	trait : "Ombrask, Rakin"+
		"\n \u2022 Fade Away. When I reach 5th level, I can cast the invisibility spell on myself once with this trait, requiring no material components, and I regain the ability to do so when I finish a long rest. Constitution is my spellcasting ability for this spell. I can also cast this spell using any spell slots I have of the appropriate level."+
		"\n \u2022 Lightbender. Light naturally sculpts around my skin. I have advantage on saving throws against being blinded, and I have resistance to radiant damage."+
		"\n \u2022 Trackless. The Shadow Plane is a dangerous place and ombrasks quickly learn to move in the shadows, leaving scarce tracks in their wake. I have proficiency in the Stealth skill."+
		"\n \u2022 Voice Thief. While an ombrask can potentially understand any number of languages, it is a naturally mute creature. When a creature that can speak dies within 30 feet of me, I can use my reaction to absorb a piece of its psyche. After I have used this reaction, I can’t do so again until I finish a long rest. After I have absorbed a psyche, I can perfectly mimic the creature’s voice, cadence, and speech patterns indefinitely. I can hold a number of pieces of psyche (and mimic a number of voices) equal to my proficiency bonus. If absorbing a new piece of psyche would put me over this limit, I must choose one psyche to be replaced.",
	toNotesPage: [{
		name : "Ombrask, Rakin",
		source : [["HGtMH", 169]],
		note: desc([
			"\u2022 Fade Away. When I reach 5th level, I can cast the invisibility spell on myself once with this trait, requiring no material components, and I regain the ability to do so when I finish a long rest. Constitution is my spellcasting ability for this spell. I can also cast this spell using any spell slots I have of the appropriate level."+
			"\u2022 Lightbender. Light naturally sculpts around my skin. I have advantage on saving throws against being blinded, and I have resistance to radiant damage."+
			"\u2022 Trackless. The Shadow Plane is a dangerous place and ombrasks quickly learn to move in the shadows, leaving scarce tracks in their wake. I have proficiency in the Stealth skill."+
			"\u2022 Voice Thief. While an ombrask can potentially understand any number of languages, it is a naturally mute creature. When a creature that can speak dies within 30 feet of me, I can use my reaction to absorb a piece of its psyche. After I have used this reaction, I can’t do so again until I finish a long rest. After I have absorbed a psyche, I can perfectly mimic the creature’s voice, cadence, and speech patterns indefinitely. I can hold a number of pieces of psyche (and mimic a number of voices) equal to my proficiency bonus. If absorbing a new piece of psyche would put me over this limit, I must choose one psyche to be replaced.",
		]),
	}],
};

// Ombrask, Tiefling
RaceList["ombrask tiefling"] = { 
	regExpSearch: /^(?=.*tiefling)(?=.*ombrask).*$/i,
	name: "Tiefling Ombrask",
	sortname: "Ombrask, Tiefling",
	plural: "Ombrasks",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	languageProfs: ["Common", "Undercommon"],
	scores : [0, 2, 0, 0, 0, 1],
	scorestxt : "+2 Dexterity, +1 Charisma",
	age: "Ombrasks live as long as the race from which they originated.",
	vision : [["Darkvision", 60]],
	dmgres : ["Radiant"],
	savetxt : {
		adv_vs : ["Blinded"]
	},
	skills : ["Stealth"],
	features : {
		"fade away" : {
			name : "Fade Away",
			minlevel : 5,
			spellcastingBonus: [{
				name: "Fade Away",
				spells: ["invisibility"],
				selection: ["invisibility"],
				times: 1,
				spellcastingAbility: 3,
			}]
		},
		"voice thief" : {
			name : "Voice Thief",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			action : [["reaction", ""]],
		},
	},
	trait : "Ombrask, Tiefling"+
		"\n \u2022 Fade Away. When I reach 5th level, I can cast the invisibility spell on myself once with this trait, requiring no material components, and I regain the ability to do so when I finish a long rest. Constitution is my spellcasting ability for this spell. I can also cast this spell using any spell slots I have of the appropriate level."+
		"\n \u2022 Lightbender. Light naturally sculpts around my skin. I have advantage on saving throws against being blinded, and I have resistance to radiant damage."+
		"\n \u2022 Trackless. The Shadow Plane is a dangerous place and ombrasks quickly learn to move in the shadows, leaving scarce tracks in their wake. I have proficiency in the Stealth skill."+
		"\n \u2022 Voice Thief. While an ombrask can potentially understand any number of languages, it is a naturally mute creature. When a creature that can speak dies within 30 feet of me, I can use my reaction to absorb a piece of its psyche. After I have used this reaction, I can’t do so again until I finish a long rest. After I have absorbed a psyche, I can perfectly mimic the creature’s voice, cadence, and speech patterns indefinitely. I can hold a number of pieces of psyche (and mimic a number of voices) equal to my proficiency bonus. If absorbing a new piece of psyche would put me over this limit, I must choose one psyche to be replaced.",
	toNotesPage: [{
		name : "Ombrask, Tiefling",
		source : [["HGtMH", 169]],
		note: desc([
			"\u2022 Fade Away. When I reach 5th level, I can cast the invisibility spell on myself once with this trait, requiring no material components, and I regain the ability to do so when I finish a long rest. Constitution is my spellcasting ability for this spell. I can also cast this spell using any spell slots I have of the appropriate level."+
			"\u2022 Lightbender. Light naturally sculpts around my skin. I have advantage on saving throws against being blinded, and I have resistance to radiant damage."+
			"\u2022 Trackless. The Shadow Plane is a dangerous place and ombrasks quickly learn to move in the shadows, leaving scarce tracks in their wake. I have proficiency in the Stealth skill."+
			"\u2022 Voice Thief. While an ombrask can potentially understand any number of languages, it is a naturally mute creature. When a creature that can speak dies within 30 feet of me, I can use my reaction to absorb a piece of its psyche. After I have used this reaction, I can’t do so again until I finish a long rest. After I have absorbed a psyche, I can perfectly mimic the creature’s voice, cadence, and speech patterns indefinitely. I can hold a number of pieces of psyche (and mimic a number of voices) equal to my proficiency bonus. If absorbing a new piece of psyche would put me over this limit, I must choose one psyche to be replaced.",
		]),
	}],
};

// Oozekin
RaceList["oozekin"] = { 
	regExpSearch: /^(?=.*oozekin).*$/i,
	name: "Oozekin",
	sortname: "Oozekin",
	plural: "Oozekin",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	languageProfs: ["Common", 1],
	scores : [1, 0, 2, 0, 0, 0],
	scorestxt : "+1 Strength, +2 Constitution",
	age: "An oozekin’s age is nearly impossible to discern. However, the compounds that sustain them appear to deteriorate quickly after 70 years.",
	vision : [["Darkvision", 60]],
	dmgres : ["Acid"],
	features : {
		"acidic flesh" : {
			name : "Acidic Flesh",
			minlevel : 1,
			spellcastingBonus: [{
				name: "Acidic Flesh",
				spells: ["acid splash"],
				selection: ["acid splash"],
				firstCol: "atwill",
				spellcastingAbility: 3,
			}],
		},
		"reshapeable" : {
			name : "Reshapeable",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			action : [["action", ""]],
		},
	},
	trait : "Oozekin"+
		"\n \u2022 Size. My size can be Medium or Small. If I am Small, I grow to Medium size over 2d4 days. When I am Medium, I can use an action to discard a piece of myself to become Small."+
		"\n \u2022 Acidic Flesh. I have resistance to acid damage, and I know the acid splash cantrip. If I cast the spell targeting a creature I am currently grappling or grappled by, the target automatically fails its saving throw. Constitution is my spellcasting ability for this spell."+
		"\n \u2022 Reshapeable. Starting at 3rd level I can, as an action, alter my body to assume the form of a cube or a puddle for up to 1 hour. After I do so, I can’t do so again until I finish a long rest. While in either of these forms, I can’t talk; manipulate objects; make attacks; or cast spells. I can end this effect early as an action. The form I assume has the following effects:"+
		"    \n \u2022 Cube Form. My walking speed is halved and my body becomes a 5-foot cube. I can safely store any items I am carrying, holding, or wearing in a vesicle within my body. Creatures directly behind me have three-quarters cover against attacks that originate on the opposite side of me. I also gain a new action option, the Engulf action:"+
		"        \n \u2022 Engulf. I move up to my speed and can attempt to move into the space of one creature of equal or smaller size than me, which must make a Dexterity saving throw (DC = 8 + my Strength modifier + my proficiency bonus). On a failure, if I am not already grappling a creature, the creature becomes grappled by me. While grappled in this way, the creature is restrained and takes acid damage at the start of each of its turns as if it had failed a saving throw against my acid splash cantrip. On a success, I expend the movement but remain in the space from which my movement originated."+
		"    \n \u2022 Puddle Form. My walking speed is halved as I collapse into a 5-foot-diameter pool. I can’t hold or carry items and any objects I am holding, carrying, or wearing when I transform fall to the ground in my space. While in this form, attack rolls by creatures further than 5 feet away from me have disadvantage to hit me, I non-magically gain the benefits of the spider climb spell, and I can travel through spaces as small as 1 inch wide without squeezing.",	
	toNotesPage: [{
		name : "Oozekin",
		source : [["HGtMH", 171]],
		note: desc([		
			"\u2022 Size. My size can be Medium or Small. If I am Small, I grow to Medium size over 2d4 days. When I am Medium, I can use an action to discard a piece of myself to become Small.",
			"\u2022 Acidic Flesh. I have resistance to acid damage, and I know the acid splash cantrip. If I cast the spell targeting a creature I am currently grappling or grappled by, the target automatically fails its saving throw. Constitution is my spellcasting ability for this spell.",
			"\u2022 Reshapeable. Starting at 3rd level I can, as an action, alter my body to assume the form of a cube or a puddle for up to 1 hour. After I do so, I can’t do so again until I finish a long rest. While in either of these forms, I can’t talk; manipulate objects; make attacks; or cast spells. I can end this effect early as an action. The form I assume has the following effects:",
			"    \u2022 Cube Form. My walking speed is halved and my body becomes a 5-foot cube. I can safely store any items I am carrying, holding, or wearing in a vesicle within my body. Creatures directly behind me have three-quarters cover against attacks that originate on the opposite side of me. I also gain a new action option, the Engulf action:",
			"        \u2022 Engulf. I move up to my speed and can attempt to move into the space of one creature of equal or smaller size than me, which must make a Dexterity saving throw (DC = 8 + my Strength modifier + my proficiency bonus). On a failure, if I am not already grappling a creature, the creature becomes grappled by me. While grappled in this way, the creature is restrained and takes acid damage at the start of each of its turns as if it had failed a saving throw against my acid splash cantrip. On a success, I expend the movement but remain in the space from which my movement originated.",
			"    \u2022 Puddle Form. My walking speed is halved as I collapse into a 5-foot-diameter pool. I can’t hold or carry items and any objects I am holding, carrying, or wearing when I transform fall to the ground in my space. While in this form, attack rolls by creatures further than 5 feet away from me have disadvantage to hit me, I non-magically gain the benefits of the spider climb spell, and I can travel through spaces as small as 1 inch wide without squeezing.",	
		]),
	}],
};

// Larval Opteran
RaceList["larval opteran"] = { 
	regExpSearch: /^(?=.*larval)(?=.*opteran).*$/i,
	name: "Larval Opteran",
	sortname: "Opteran, Larval",
	plural: "Opteran",
	size : 4,
	speed : {
		walk : { spd : 25, enc : 15 },
	},
	languageProfs: ["Common", 1],
	scores : [0, 0, 0, 0, 0, 2],
	scorestxt : "+2 Charisma only",
	age: "Opterans age based on their environment. They can live for centuries in their larval forms, but under great stress, they pupate and hatch into their adult forms. Tragically, they only live for 2 to 3 years after emerging as adults.",
	vision : [["Darkvision", 60]],
	savetxt : {
		adv_vs : ["Prone"]
	},
	features : {
		"string shot" : {
			name : "String Shot",
			minlevel : 1,
			action : [["action", ""]],
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "short rest",
		},
	},
	trait : "Larval Opteran"+
		"\n \u2022 Many-Footed (Larval Form Only). Having many legs and a low centre of gravity gives me extraordinary balance. I have advantage on ability checks made to maintain my balance and on ability checks and saving throws made to avoid the prone condition."+
		"\n \u2022 String Shot (Larval Form Only). As an action, I can fire a torrent of sticky string at a creature I can see within 15 feet of me. The target must succeed on a Dexterity saving throw (DC equals 8 + my Constitution modifier + my proficiency bonus) or become restrained for 1 minute. A creature can use its action to make a Strength check against the aforementioned DC, freeing itself or a restrained creature within its reach on a success. I can use it a number of times equal to my proficiency bonus, and I regain all expended uses when I finish a short or long rest."+
		"\n \u2022 Metamorphosis. At 1st level, I am a larval opteran. When I reach 5th level, I can choose to undergo a metamorphosis over the course of 24 hours. After this period elapses, I emerge as an adult opteran: I lose the Many-Footed and String Shot traits, and I gain the Flight and Radiant Wing traits. I can delay this change until I reach 6th level, at which point it happens spontaneously. (Coded under 'Adult Opteran' race)",
	toNotesPage: [{
		name : "Larval Opteran",
		source : [["HGtMH", 173]],
		note: desc([
			"\u2022 Many-Footed (Larval Form Only). Having many legs and a low centre of gravity gives me extraordinary balance. I have advantage on ability checks made to maintain my balance and on ability checks and saving throws made to avoid the prone condition.",
			"\u2022 String Shot (Larval Form Only). As an action, I can fire a torrent of sticky string at a creature I can see within 15 feet of me. The target must succeed on a Dexterity saving throw (DC equals 8 + my Constitution modifier + my proficiency bonus) or become restrained for 1 minute. A creature can use its action to make a Strength check against the aforementioned DC, freeing itself or a restrained creature within its reach on a success. I can use it a number of times equal to my proficiency bonus, and I regain all expended uses when I finish a short or long rest.",
			"\u2022 Metamorphosis. At 1st level, I am a larval opteran. When I reach 5th level, I can choose to undergo a metamorphosis over the course of 24 hours. After this period elapses, I emerge as an adult opteran: I lose the Many-Footed and String Shot traits, and I gain the Flight and Radiant Wing traits. I can delay this change until I reach 6th level, at which point it happens spontaneously. (Coded under 'Adult Opteran' race)",
		]),
	}],
};

// Adult Opteran
RaceList["adult opteran"] = { 
	regExpSearch: /^(?=.*adult)(?=.*opteran).*$/i,
	name: "Adult Opteran",
	sortname: "Opteran, Adult",
	plural: "Opteran",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		fly : { spd : 20, enc : 10 },
	},
	languageProfs: ["Common", 1],
	scores : [0, 0, 0, 0, 0, 2],
	scorestxt : "+2 Charisma only",
	age: "Opterans age based on their environment. They can live for centuries in their larval forms, but under great stress, they pupate and hatch into their adult forms. Tragically, they only live for 2 to 3 years after emerging as adults.",
	vision : [["Darkvision", 60]],
	trait : "Adult Opteran"+
		"\n \u2022 Metamorphosis. When I reach 5th level, I can choose to undergo a metamorphosis over the course of 24 hours. After this period elapses, I emerge as an adult opteran: I lose the Many-Footed and String Shot traits, and I gain the Flight and Radiant Wing traits. I can delay this change until I reach 6th level, at which point it happens spontaneously."+
		"\n \u2022 Flight (Adult Form Only). As an adult opteran, I have a flying speed of 20 feet. To use this speed, I can’t be wearing medium or heavy armour."+
		"\n \u2022 Radiant Wing (Adult Form Only). Those wings would dazzle any performance. I have advantage on all Charisma checks.",
	toNotesPage: [{
		name : "Adult Opteran",
		source : [["HGtMH", 173]],
		note: desc([
			"\u2022 Metamorphosis. When I reach 5th level, I can choose to undergo a metamorphosis over the course of 24 hours. After this period elapses, I emerge as an adult opteran: I lose the Many-Footed and String Shot traits, and I gain the Flight and Radiant Wing traits. I can delay this change until I reach 6th level, at which point it happens spontaneously.",
			"\u2022 Flight (Adult Form Only). As an adult opteran, I have a flying speed of 20 feet. To use this speed, I can’t be wearing medium or heavy armour.",
			"\u2022 Radiant Wing (Adult Form Only). Those wings would dazzle any performance. I have advantage on all Charisma checks.",	
		]),
	}],
};

// Rakin, Urkin
RaceList["urkin rakin"] = { 
	regExpSearch: /^(?=.*urkin)(?=.*rakin).*$/i,
	name: "Urkin Rakin",
	sortname: "Rakin, Urkin",
	plural: "Rakin",
	size : 4,
	speed : {
		walk : { spd : 30, enc : 20 },
		climb : { spd : "walk", enc : "walk" },
	},
	languageProfs: ["Common", "Thieves’ Cant", 1],
	scores : [0, 2, 0, 0, 0, 0],
	scorestxt : "+2 Dexterity, +1 Intelligence/Charisma",
	age: "Rakin age slightly quicker than humans, reaching adulthood by 14. They live to be around 70 years old.",
	vision : [["Darkvision", 60]],
	skillstxt : "Choose one from Sleight of Hand, or Stealth",
	features : {
		"nimble dodge" : {
			name : "Nimble Dodge",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			action : [["reaction", ""]],
		},
	},
	trait : "Urkin Rakin"+
		"\n \u2022 Deft Climber. I have a climbing speed equal to my walking speed."+
		"\n \u2022 Streetwise. I gain proficiency in my choice of the Sleight of Hand or Stealth skills. Additionally, I know thieves’ cant."+
		"\n \u2022 Nimble Dodge. When I am forced to make a Dexterity saving throw against an effect I can see, I can use my reaction to gain advantage on the saving throw. Success or failure, immediately after the effect occurs, I can move up to my speed without provoking opportunity attacks. Once I use this trait, I must finish a short or long rest before I can use it again.",	
	toNotesPage: [{
		name : "Urkin Rakin",
		source : [["HGtMH", 175]],
		note: desc([
			"\u2022 Deft Climber. I have a climbing speed equal to my walking speed.",
			"\u2022 Streetwise. I gain proficiency in my choice of the Sleight of Hand or Stealth skills. Additionally, I know thieves’ cant.",
			"\u2022 Nimble Dodge. When I am forced to make a Dexterity saving throw against an effect I can see, I can use my reaction to gain advantage on the saving throw. Success or failure, immediately after the effect occurs, I can move up to my speed without provoking opportunity attacks. Once I use this trait, I must finish a short or long rest before I can use it again.",	
		]),
	}],
};

// Rakin, Posskin
RaceList["posskin rakin"] = { 
	regExpSearch: /^(?=.*posskin)(?=.*rakin).*$/i,
	name: "Posskin Rakin",
	sortname: "Rakin, Posskin",
	plural: "Rakin",
	size : 4,
	speed : {
		walk : { spd : 30, enc : 20 },
		climb : { spd : "walk", enc : "walk" },
	},
	languageProfs: ["Common", 1],
	scores : [0, 2, 1, 0, 0, 0],
	scorestxt : "+2 Dexterity, +1 Constitution",
	age: "Rakin age slightly quicker than humans, reaching adulthood by 14. They live to be around 70 years old.",
	vision : [["Darkvision", 60]],
	dmgres : ["Poison"],
	savetxt : {
		adv_vs : ["Poison", "Disease"]
	},
	weaponOptions: [{
		name: "Bite",
		source : [["HGtMH", 176]],
		regExpSearch : /^(?=.*bite).*$/i,
		baseWeapon : "unarmed strike",
  		type : "Martial",
 		ability : 1,
 		abilitytodamage : true,
  		damage : [1, 6, "slashing"],
  		range : "Melee",
		selectNow: true,
	}],
	features : {
		"play dead" : {
			name : "Play Dead",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			action : [["reaction", ""],["bonus action", "End Play Dead"]],
		},
	},
	trait : "Posskin Rakin"+
		"\n \u2022 Deft Climber. I have a climbing speed equal to my walking speed."+
		"\n \u2022 Bite. I have a maw of sharp teeth that I can use to make unarmed strikes. When I hit with it, the strike deals 1d6 + my Strength modifier slashing damage, instead of the bludgeoning damage normal for an unarmed strike."+
		"\n \u2022 Scavenger. I have advantage on saving throws against disease and poison, and I have resistance to poison damage."+
		"\n \u2022 Play Dead. When I take damage that reduces me to half my hit point maximum or lower, I can use my reaction to play dead, lowering my heart rate and relaxing my muscles as I fall prone For the next hour, or until I use my bonus action to end the effect early, a creature that spares me a casual glance sees only a corpse. A creature that uses its action while within 5 feet of me to make an Intelligence (Investigation) check contested by my Constitution (Deception) check sees through the trick on a success. After I use this feature, I can’t do so again until I finish a short or long rest.",
	toNotesPage: [{
		name : "Posskin Rakin",
		source : [["HGtMH", 176]],
		note: desc([
			"\u2022 Deft Climber. I have a climbing speed equal to my walking speed.",
			"\u2022 Bite. I have a maw of sharp teeth that I can use to make unarmed strikes. When I hit with it, the strike deals 1d6 + my Strength modifier slashing damage, instead of the bludgeoning damage normal for an unarmed strike.",
			"\u2022 Scavenger. I have advantage on saving throws against disease and poison, and I have resistance to poison damage.",
			"\u2022 Play Dead. When I take damage that reduces me to half my hit point maximum or lower, I can use my reaction to play dead, lowering my heart rate and relaxing my muscles as I fall prone For the next hour, or until I use my bonus action to end the effect early, a creature that spares me a casual glance sees only a corpse. A creature that uses its action while within 5 feet of me to make an Intelligence (Investigation) check contested by my Constitution (Deception) check sees through the trick on a success. After I use this feature, I can’t do so again until I finish a short or long rest.",
		]),
	}],
};

// Rakin, Tanukin
RaceList["tanukin rakin"] = { 
	regExpSearch: /^(?=.*tanukin)(?=.*rakin).*$/i,
	name: "Tanukin Rakin",
	sortname: "Rakin, Tanukin",
	plural: "Rakin",
	size : 4,
	speed : {
		walk : { spd : 30, enc : 20 },
		climb : { spd : "walk", enc : "walk" },
	},
	languageProfs: ["Common", 1],
	scores : [0, 2, 0, 0, 0, 0],
	scorestxt : "+2 Dexterity, +1 Wisdom/Charisma",
	age: "Rakin age slightly quicker than humans, reaching adulthood by 14. They live to be around 70 years old.",
	vision : [["Darkvision", 60]],
	skillstxt : "Choose one from Deception, or Persuasion",	
	features : {
		"tanukin magic1" : {
			name : "Minor Illusion",
			minlevel : 1,
			spellcastingBonus: [{
				name: "Tanukin Rakin",
				spells: ["minor illusion"],
				selection: ["minor illusion"],
				times: 1,
			}]
		},
		"tanukin magic3" : {
			name : "Disguise Self",
			minlevel : 3,
			spellcastingBonus: [{
				name: "Tanukin Rakin",
				spells: ["disguise self"],
				selection: ["disguise self"],
				times: 1,
				firstCol: "oncelr",
			}]
		},
		"tanukin magic5" : {
			name : "Alter Self",
			minlevel : 5,
			spellcastingBonus: [{
				name: "Tanukin Rakin",
				spells: ["alter self"],
				selection: ["alter self"],
				times: 1,
				firstCol: "oncelr",
			}]
		},
	},
	trait : "Tanukin Rakin"+
		"\n \u2022 Deft Climber. I have a climbing speed equal to my walking speed."+
		"\n \u2022 Adept Trickster. I gain proficiency in my choice of the Deception or Persuasion skills."+
		"\n \u2022 Wild Speech. I have the ability to communicate in a limited manner with beasts. They can understand the meaning of my words, though I have no special ability to understand them in return."+
		"\n \u2022 Tanukin Magic. I know the minor illusion cantrip. When I reach 3rd level, I can cast the disguise self spell once with this trait and regain the ability to do so when I finish a long rest. When I reach 5th level, I can cast the alter self spell once with this trait and regain the ability to do so when I finish a long rest. Charisma or Wisdom is my spellcasting ability for these spells (my choice when I gain this trait). I can also cast either of these spells using any spell slots I have of the appropriate level.", 
	toNotesPage: [{
		name : "Tanukin Rakin",
		source : [["HGtMH", 177]],
		note: desc([
			"\u2022 Deft Climber. I have a climbing speed equal to my walking speed.",
			"\u2022 Adept Trickster. I gain proficiency in my choice of the Deception or Persuasion skills.",
			"\u2022 Wild Speech. I have the ability to communicate in a limited manner with beasts. They can understand the meaning of my words, though I have no special ability to understand them in return.",
			"\u2022 Tanukin Magic. I know the minor illusion cantrip. When I reach 3rd level, I can cast the disguise self spell once with this trait and regain the ability to do so when I finish a long rest. When I reach 5th level, I can cast the alter self spell once with this trait and regain the ability to do so when I finish a long rest. Charisma or Wisdom is my spellcasting ability for these spells (my choice when I gain this trait). I can also cast either of these spells using any spell slots I have of the appropriate level.", 
		]),
	}],
};


/*
 * Subclasses
 */

// Bard Subclasses
AddSubClass("bard", "college of cuisine", {
	regExpSearch : /^(?=.*college)(?=.*cuisine).*$/i,
	subname : "College of Cuisine",
	source : [["HGtMH", 180]],
	features : {
		"subclassfeature3.1" : {
			name : "Culinary Exploration",
			source : [["HGtMH", 180]],
			minlevel : 3,
			description : desc([
				"I gain proficiency with cook’s utensils, which I can use as a spellcasting focus, and my proficiency bonus is doubled for any ability checks I make that uses these utensils to prepare food.",
				"In addition, whenever I craft a food (see page 141), I can add one additional ingredient to the recipe, conferring the benefits of that ingredient to the dish on a successful Cooking check.",
				]),
			toolProfs: ["Cook’s Utensils"],
		},
		"subclassfeature3.2" : {
			name : "Petit Fours",
			source : [["HGtMH", 180]],
			minlevel : 3,
			description : desc([
				"During a short or long rest, I can create a number of magical treats equal to my Charisma modifier (minimum one). Choose one of the flavours from the list below with which to imbue these treats, which remain magical until I finish a short or long rest.",
				"A creature can use an action or bonus action to eat a treat, gaining a benefit based on the treat’s flavour which, unless otherwise stated, lasts until the end of its next turn.",
				"As a bonus action, I can expend one use of my Bardic Inspiration, teleporting any number of treats on my person next to creatures I can see within 60 feet of me, where they remain, hovering near the creature’s mouth. Such a creature can use its reaction to eat the treat, or it can do so on its next turn as a bonus action. Otherwise, the treat falls to the ground.",
				" \u2022 Bitter. The creature gains resistance to poison damage and has advantage on saving throws made to resist the poisoned condition.",
				" \u2022 Salty. The creature gains advantage on Wisdom saving throws and is immune to the charmed condition.",
				" \u2022 Sour. The creature’s weapon attacks deal bonus acid damage equal to one roll of my Bardic Inspiration die.",
				" \u2022 Sweet. The creature gains temporary hit points equal to one roll of my Bardic Inspiration die plus my Charisma modifier (minimum 1) that last for 1 hour.",
				" \u2022 Umami. The creature gains a +2 bonus to its AC.",
			]),
			toNotesPage: [{
				name : "Petit Fours",
				source : [["HGtMH", 180]],
				note: desc([
					"During a short or long rest, I can create a number of magical treats equal to my Charisma modifier (minimum one). Choose one of the flavours from the list below with which to imbue these treats, which remain magical until I finish a short or long rest.",
					"A creature can use an action or bonus action to eat a treat, gaining a benefit based on the treat’s flavour which, unless otherwise stated, lasts until the end of its next turn.",
					"As a bonus action, I can expend one use of my Bardic Inspiration, teleporting any number of treats on my person next to creatures I can see within 60 feet of me, where they remain, hovering near the creature’s mouth. Such a creature can use its reaction to eat the treat, or it can do so on its next turn as a bonus action. Otherwise, the treat falls to the ground.",
					" \u2022 Bitter. The creature gains resistance to poison damage and has advantage on saving throws made to resist the poisoned condition.",
					" \u2022 Salty. The creature gains advantage on Wisdom saving throws and is immune to the charmed condition.",
					" \u2022 Sour. The creature’s weapon attacks deal bonus acid damage equal to one roll of my Bardic Inspiration die.",
					" \u2022 Sweet. The creature gains temporary hit points equal to one roll of my Bardic Inspiration die plus my Charisma modifier (minimum 1) that last for 1 hour.",
					" \u2022 Umami. The creature gains a +2 bonus to its AC.",
				]),
			}],
		},
		"subclassfeature6" : {
			name : "Culinary Specialisation",
			source : [["HGtMH", 180]],
			minlevel : 6,
			description : desc([
				"Choose Slow Cooking, Fast Food, or Patissier using the 'Choose Feature' button above.",
			]),
			choices : ["Slow Cooking", "Fast Food", "Patissier"],
			"slow cooking" : {
				name : "Slow Cooking",
				description : desc(["I gain proficiency with medium armour, heavy armour, shields, and martial weapons. At the start of each of my turns, I gain temporary hit points equal to my proficiency bonus.",
				]),
				armor : [false, true, true, true],
				weapons: [false, true],
			},
			"fast food" : {
				name : "Fast Food",
				description : desc(["I gain proficiency with medium armour and I can attack twice, instead of once, whenever I take the Attack action on my turn.",
				]),
				armor : [false, true, false, false],
			},
			"patissier" : {
				name : "Patissier",
				description : desc([
					"I learn two spells of my choice from any spell list. A spell I choose must be of a level I can cast, as shown on the Bard table, or a cantrip. These don’t count against the number of bard spells I know.",
					"In addition, when I finish a short rest, I can expend one use of my Bardic Inspiration, rolling the die and recovering a number of levels of spell slots with a combined value equal to or less than the value rolled, and none of the spell slots can be 6th level or higher. Once I use this feature, I can’t do so again until I finish a long rest.",
				]),
				spellcastingBonus: [{
					name: "Magic Initiate Cantrips",
					"class": "all",
					level: [0, 3],
					times: 2,
				}],
				usages : 1,
				recovery : "long rest",	
			},
		},
		"subclassfeature14" : {
			name : "Executive Chef",
			source : [["HGtMH", 181]],
			minlevel : 14,
			description : desc([
				"My confidence and authority in the kitchen translates to battlefield command. When a creature that can hear me rolls one of my Bardic Inspiration dice or eats one of my Petit Fours, I can shout authoritative, verbal encouragement (no action required). The creature can immediately use its reaction to either make one weapon attack or move up to its speed without provoking opportunity attacks. A creature that eats a Petit Fours can attack or move as described as part of the same reaction, action, or bonus action used to eat the Petit Fours.",
			]),
		},
	},
});

// Cleric Subclasses
AddSubClass("cleric", "hunt domain", {
	regExpSearch : /^(?=.*hunt).*$/i,
	subname : "Hunt Domain",
	source : [["HGtMH", 183]],
	spellcastingExtra : ["entangle", "longstrider", "locate animals or plants", "pass without trace", "conjure animals", "haste", "freedom of movement", "locate creature", "commune with nature", "hold monster"],
	features : {
		"subclassfeature1.1" : {
			name : "Bonus Proficiencies",
			source : [["HGtMH", 184]],
			minlevel : 1,
			description : "\n   I gain proficiency with two martial weapons of my choice. I also gain proficiency in one of the following skills of my choice: Animal Handling, Nature, or Survival.",
			weaponProfs : [false, false, "Martial Weapon (1/2)", "Martial Weapon (2/2)"],
			skillstxt : "Choose one from Animal Handling, Nature, or Survival.",	
		},
		"subclassfeature1.2" : {
			name : "Mark Prey",
			source : [["HGtMH", 184]],
			minlevel : 1,
			description : "\n   As a bonus action, I choose a creature I can see within 90 feet and mystically mark it as my quarry for the next hour. For the duration, I deal an extra 1d6 damage to the target whenever I hit it with a weapon attack, and I have advantage on any Wisdom (Perception) or Wisdom (Survival) check I make to find it. If I use this feature to mark a new creature, any previous marks disappear.",
			action : ["bonus action", ""],
			additional : levels.map(function (n) {
				if (n < 8) return "";
				return "+" + (n < 8 ? 1 : n < 14 ? 2 : 3) + "d6 damage";
			}),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.cleric && v.isWeapon) {
							fields.Description += (fields.Description ? '; ' : '') + 'If marked +' + (classes.known.cleric.level < 8 ? 1 : classes.known.cleric.level < 14 ? 2 : 3) + 'd6 damage';
						}
					},
					"I deal an extra 1d6 damage to the marked target whenever I hit it with a weapon attack."
				]
			}
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Honed Instincts",
			source : [["HGtMH", 184]],
			minlevel : 2,
			description : desc([
				"I can use my Channel Divinity to gain preternatural insights into one creature I can see within 120 feet of me (no action required). I can choose one of the following lists of information to learn about the target when I use this Channel Divinity:",
				" \u2022 Proficiencies. I learn the saving throws and skills with which the creature is proficient.", 
				" \u2022 Physiology. I learn the creature’s damage resistances, immunities, and vulnerabilities, as well as its condition immunities.",
				"In addition, the next time I hit the target with a weapon attack within the next minute, I deal the attack’s maximum damage instead of rolling.",
			]),
		},
		"subclassfeature6" : {
			name : "Pack Hunter",
			source : [["HGtMH", 184]],
			minlevel : 6,
			description : desc([
				"I learn to work with other hunters, helping them avoid my quarry’s blows, or to strike with greater ferocity. As a reaction, I can embolden creatures friendly to me with my hunters’ instincts, issuing either the Kill or Retreat command. I have a number of uses of this feature equal to my Wisdom modifier (minimum of once), and regain all expended uses when I finish a short or long rest.",
				" \u2022 Kill. When a creature other than me hits a target which is currently affected by my Mark Prey feature, I can use my reaction to deal the feature’s extra damage to the creature.", 
				" \u2022 Retreat. When the target of my Mark Prey feature targets a creature that I can see within 60 feet of me with an attack, I can use my reaction to embolden the creature being attacked. The attacked creature can choose to use its reaction to move up to half its speed without provoking opportunity attacks immediately before the attack occurs, potentially causing the attack to miss if the creature moves out of the attackers reach/range.",
			]),
			recovery: "short rest",
			usagescalc: "event.value = Math.max(1,What('Wis Mod'))",
			action : ["reaction", ""],
		},
		"subclassfeature8" : {
			name : "Unflinching Mark",
			source : [["HGtMH", 184]],
			minlevel : 8,
			description : desc([
				"The bonus damage of my Mark Prey feature increases to 2d6. When I reach 14th level, the extra damage increases to 3d6.",
			]),
		},
		"subclassfeature17" : {
			name : "Rite of the Hunt",
			source : [["HGtMH", 184]],
			minlevel : 17,
			description : desc([
				"At 17th level, I can compel a creature to chase or avoid me. As a bonus action while I can see the target of my Mark Prey feature and it is within 120 feet of me, I can force the creature to make a Wisdom saving throw against my cleric spell save DC. On a failure, I choose whether the creature is afflicted by Chase or Avoid for the next minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on a success. These effects are suppressed while I can’t see the creature, and the effects end early if the creature is no longer affected by my Mark Prey feature. A creature that succeeds on a saving throw against this ability is immune to its effects for the next 24 hours.",
			]),
			toNotesPage: [{
				name : "Rite of the Hunt",
				source : [["HGtMH", 184]],
				note: desc([
					"At 17th level, I can compel a creature to chase or avoid me. As a bonus action while I can see the target of my Mark Prey feature and it is within 120 feet of me, I can force the creature to make a Wisdom saving throw against my cleric spell save DC. On a failure, I choose whether the creature is afflicted by Chase or Avoid for the next minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on a success. These effects are suppressed while I can’t see the creature, and the effects end early if the creature is no longer affected by my Mark Prey feature. A creature that succeeds on a saving throw against this ability is immune to its effects for the next 24 hours.",
					" \u2022 Chase. The creature is drawn to me. For the duration, it has disadvantage on attack rolls against creatures other than me, and must make a Wisdom saving throw the first time it attempts to move to a space that is more than 30 feet away from me on its turn. On a failed save, it can’t move more than 30 feet away from me that turn. On a success, this effect doesn’t restrict the target’s movement for that turn.",
					" \u2022 Avoid. The creature is repelled by me. For the duration, it has disadvantage on attack rolls against me, and must make a Wisdom saving throw the first time it attempts to move to a space within 30 feet of me on its turn. On a failed save, it can’t willingly move closer to me that turn. On a success, this effect doesn’t restrict the target’s movement for that turn.",
				]),
			}],
			action : ["bonus action", ""],
		},
	},
});

// Druid Subclasses
AddSubClass("druid", "circle of the hive", {
	regExpSearch : /^(?=.*druid)(?=.*hive).*$/i,
	subname : "Circle of the Hive",
	source : [["HGtMH", 185]],
	spellcastingExtra : ["blur", "web", "fly", "hypnotic pattern", "arcane eye", "giant insect", "insect plague", "mislead"],
	features : {
		"subclassfeature2.1" : {
			name : "Swarm Shape",
			source : [["HGtMH", 186]],
			minlevel : 2,
			description : desc([
					"When I use my Wild Shape feature, I can turn into a swarm of creatures, adhering to the normal limitations on CR and speed.",
			]),
		},		
		"subclassfeature2.2" : {
			name : "Symbiotic Biosphere",
			source : [["HGtMH", 186]],
			minlevel : 2,
			description : desc([
					"The symbiotes that inhabit my body flit in and around me, harmless until threatened. As a bonus action, I can release pheromones, stimulating hyper-aggression in my symbiotes for the next minute. When I am targeted by a melee attack from a creature within 15 feet of me on its turn, I can cause the swarm to retaliate, forcing the attacker to make a Constitution saving throw against my druid spell save DC. A creature takes 2d6 poison damage on a failure, or half as much damage on a success. The poison damage increases to 3d6 at 6th level, 4d6 at 10th level, and 5d6 at 14th level. After the swarm retaliates in this way, it can’t do so again until the start of my next turn.",
					"I can use this feature a number of times equal to my Wisdom modifier (minimum of once) and regain all expended uses when I finish a long rest.",
					"In addition, I can communicate with arthropods using pheromones, conveying basic emotions and ideas.",
			]),
			recovery: "long rest",
			usagescalc: "event.value = Math.max(1,What('Wis Mod'))",
			action : ["bonus action", ""],
		},	
		"subclassfeature6" : {
			name : "Protect the Monarch",
			source : [["HGtMH", 186]],
			minlevel : 6,
			description : desc([
				"My connection to the arthropods I host becomes deeper; they regard me as a worker bee would its queen, and they gladly sacrifice themselves to protect me. While my Symbiotic Biosphere feature is activated, whenever I take damage from a source I can see, I can use my reaction to command the insect symbiotes to swarm in front of me, deflecting some of the incoming energy. I reduce the incoming damage by an amount equal to my Wisdom modifier plus half my druid level.",
			]),
			action : ["reaction", ""],
		},
		"subclassfeature10" : {
			name : "Honeydrenaline",
			source : [["HGtMH", 186]],
			minlevel : 10,
			description : desc([
				"I have attracted a species of flying arthropod that produces a mixture of sugar and adrenaline with amazing, stimulating properties. As a bonus action, I can send these creatures to invigorate a willing creature I can see within 30 feet of me. The creature regains hit points equal to my druid level and can immediately use its reaction to move up to its speed. This movement doesn’t provoke opportunity attacks.",
				"I can use this feature a number of times equal to my Wisdom modifier (minimum of once), and I regain all expended uses when I finish a long rest.",
			]),
			recovery : "long rest",
			usagescalc: "event.value = Math.max(1,What('Wis Mod'))",
			action : ["bonus action", ""],
		},
		"subclassfeature14" : {
			name : "Swarmsense",
			source : [["HGtMH", 186]],
			minlevel : 14,
			description : desc([
				"Hosting such a variety of tiny beings has permanently altered my personal biosphere. I gain the following benefits:",
				" \u2022 Blindsight and tremorsense out to a range of 10 feet.",
				" \u2022 Resistance to poison damage.",
				" \u2022 Immunity to the poisoned condition.",
				" \u2022 Advantage on saving throws made to maintain my concentration.",
				" \u2022 Advantage on initiative rolls.",
			]),
			vision : [["Blindsight", 10],["Tremorsense", 10]],
			dmgres : ["Poison"],
			savetxt : {
				immune : ["poisoned"],
				adv_vs : ["concentration"],
			},
			advantages : [["Initiative", true]],
		},
	}
});

// Paladin Subclasses
AddSubClass("paladin", "oath of the harvest", {
	regExpSearch : /^(?=.*paladin)(?=.*harvest).*$/i,
	subname : "Oath of the Harvest",
	source : [["HGtMH", 187]],
	spellcastingExtra : ["heroism", "purify food and drink", "prayer of healing", "warding bond", "beacon of hope", "create food and water", "death ward", "otiluke's resilient sphere", "greater restoration", "mass cure wounds"],
	features : {
		"subclassfeature3.1" : {
			name : "Oath Tools",
			source : [["HGtMH", 187]],
			minlevel : 3,
			description : desc([
				"I gain proficiency with cook’s utensils.",
			]),
			toolProfs: ["Cook’s Utensils"],
		},
		"subclassfeature3.2" : {
			name : "Channel Divinity: Vow of Sustenance",
			source : [["HGtMH", 188]],
			minlevel : 3,
			description : desc([
				"As a bonus action, I can place a ward around one creature I can see within 60 feet of me. When I use this bonus action, and at the start of each of its turns for the next minute, the creature gains temporary hit points equal to twice my Charisma modifier (minimum 2).",
			]),
			action : ["bonus action", ""],
		},
		"subclassfeature3.3" : {
			name : "Channel Divinity: Share Vitality",
			source : [["HGtMH", 188]],
			minlevel : 3,
			description : desc([
				"As a bonus action, I can take any amount of necrotic damage up to my current number of hit points, which can’t be reduced in any way. Up to four creatures I can see within 30 feet of me regain hit points equal to half the necrotic damage taken.",
			]),
			action : ["bonus action", ""],
		},
		"subclassfeature7" : {
			name : "Aura of Rejuvenation",
			source : [["HGtMH", 188]],
			minlevel : 7,
			description : desc([
				"I emanate an aura that increases the potency of magical healing and hearty meals. Whenever a creature of my choice within 10 feet of me regains hit points from a spell, potion, magical effect, or food, it regains an additional 1d6 hit points.",
				"When a creature rolls one or more Hit Dice to regain hit points during a short rest, it regains 1 additional hit point for each Hit Dice expended in this way, so long as it spends the majority of the short rest within 10 feet of me.",
				"When I reach 18th level in this class, the range of the aura increases to 30 feet.",
			]),
		},
		"subclassfeature15" : {
			name : "Host of Heroes",
			source : [["HGtMH", 188]],
			minlevel : 15,
			description : desc([
				"Over the course of an hour (which can be done during a short rest), I can magically augment a meal (mundane or magical) for me and up to nine other creatures, using 25 gp of rare spices and 25 gp of diamond dust. Once consumed, a creature that partakes of the feast gains the following benefits for the next 8 hours:",
				" \u2022 The creature has advantage on Constitution saving throws.",
				" \u2022 The creature has resistance to poison damage.",
				" \u2022 The creature is immune to the frightened condition.",
				" \u2022 The creature gains 2d10 temporary hit points.",
				"After I use this feature, I can’t do so again until I finish a long rest.",
			]),
 			usages: "1",
			recovery : "long rest",
		},
		"subclassfeature20" : {
			name : "Avatar of Nourishment",
			source : [["HGtMH", 188]],
			minlevel : 20,
			description : desc([
				"As a bonus action, I become a wellspring of lifeforce, gaining benefits for the next minute"
				]),
			action : [["bonus action", ""]],
			usages : 1,
			recovery : "long rest",
			toNotesPage: [{
				name : "Avatar of Nourishment",
				source : [["HGtMH", 187]],
				note: desc([
					"As a bonus action, I become a wellspring of lifeforce, gaining the following benefits for the next minute:",
					" \u2022 At the start of each of my turns, each creature of my choice within 30 feet of me (including me) regains hit points equal to my Charisma modifier (minimum 1) and gains temporary hit points equal to my Charisma modifier (minimum of 1).",
					" \u2022 As bonus action, I can cast the revivify spell without having it prepared and without expending a spell slot (material components are still required).",
					" \u2022 Whenever a creature within 30 feet of me takes damage, I can use my reaction to grant the creature resistance to that damage.",
					"After I use this feature, I can’t do so again until I finish a long rest, unless I expend a 5th-level spell slot to use it again.",
				])
			}],
		},
	}
});

// Ranger Subclasses
AddSubClass("ranger", "trapper", {
	regExpSearch : /^(?=.*ranger)(?=.*trapper).*$/i,
	subname : "Trapper",
	source : [["HGtMH", 189]],
	features : {
		"subclassfeature3.1" : {
			name : "Trapper’s Tools",
			source : [["HGtMH", 189]],
			minlevel : 3,
			description : desc([
				"I gain proficiency with thieves’ tools and I add double my proficiency bonus to any ability check I make using those tools to disarm or manipulate a trap.",
			]),
			toolProfs: ["Thieves’ Tools"],
		},
		"subclassfeature3.2" : {
			name : "Trapped Weapons",
			source : [["HGtMH", 189]],
			minlevel : 3,
			description : desc([
				"When I finish a short or long rest, I can augment one weapon or up to twenty pieces of ammunition that I am holding with a concealed, magical augmentation. I decide whether the augmentation deals acid, cold, fire, or lightning damage. The augmentation lasts until I finish a short or long rest.",
				"Once per turn, when I hit a target with a weapon attack using the augmented weapon or ammunition, I can activate the concealed augment (no action required). The target of my attack takes 1d8 extra damage of the associated type. At 11th level, I can augment one additional item or up to 20 additional pieces of ammunition when I finish a short or long rest, and the damage increases to 2d8.",
			]),
			additional : levels.map(function (n) {
				if (n < 8) return "";
				return "+" + (n < 11 ? 1 : 2) + "d8 damage";
			}),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.ranger && v.isWeapon) {
							fields.Description += (fields.Description ? '; ' : '') + 'If augmented +' + (classes.known.ranger.level < 11 ? 1 : 2) + 'd8 damage';
						}
					},
					"Once per turn, when I hit a target with a weapon attack using the augmented weapon or ammunition I can deal an extra 1d8 Acid/Cold/Fire/Lightning damage, at 11th lvl this damage becomes 2d8",
				]
			}
		},
		"subclassfeature3.3" : {
			name : "Set Trap",
			source : [["HGtMH", 190]],
			minlevel : 3,
			description : desc([
				"At 3rd level, and later at 5th, 9th, 13th, and 17th level, I learn how to make new traps. Details of these traps can be found on notes pages below.",
			]),
			toNotesPage: [{
				name : "Set Trap",
				source : [["HGtMH", 190]],
				note: desc([
					" \u2022 Physical Traps. Creating a physical trap takes 1 hour (which can be done during a short/long rest) and uses trap-making materials (valued in gp) specified in the trap’s description. After a physical trap activates, its materials are consumed and the trap can’t be used again. However, over the course of 10 minutes, I can salvage half the trap-making materials used in the physical trap’s construction if it hasn’t activated yet.",
					" \u2022 Magical Traps. Immediately after I finish a long rest, I can create magical traps—up to a number equal to my Wisdom modifier (minimum 1)—choosing from the options in the Ranger Traps section. Some of these traps require me to expend spell slots in their creation. When I finish a long rest, all undeployed magical traps lose their effects. When I deploy a magical trap, I can choose a size of creature and a distance of up to 30 feet. When a creature of that size or larger comes within the specified distance of an armed trap, the trap activates. As another option, I can intentionally activate an armed magical trap within 150 feet of me using a bonus action or a reaction (with no specific trigger).",
					" \u2022 Deploying a Trap. As an action, I can throw a trap I have created to an unoccupied space I can see on the ground within 30 feet of me, where it arms itself at the start of my next turn. A trap deployed in this way is plainly visible to all creatures. Over the course of 1 minute, I can conceal a trap. A concealed trap can be noticed by a creature that uses its action to make a Wisdom (Perception) check against my ranger save DC and succeeds.",
					" \u2022 Disarming a Trap. Attempting to move an armed trap causes it to activate, unleashing its effects. A creature within reach of a trap can use its action to make a Dexterity (thieves’ tools) check (for physical traps) or a spellcasting ability (Arcana) check (for magical traps) against my ranger save DC. On a success, the trap is disarmed. On a failure, the trap activates and the creature has disadvantage on any saving throw it makes to resist the trap’s effects. As an action, I can remotely disarm one of my traps that is within 150 feet of me.",
					" \u2022 Trap Effects. Spell effects created by a trap don’t require concentration. When a trap calls for a saving throw, the DC equals my ranger spell save DC. I can have multiple traps deployed, but any attempt to deploy a magical trap whose centre is within 40 feet of the centre of another magical trap fails. Creatures with truesight or that are under the influence of the detect magic spell can notice a magical trap’s presence, even if it has been concealed.",		
				])
			},{
				name : "Ranger Traps",
				source : [["HGtMH", 192]],
				note: desc([
					" \u2022 Bear Trap. (Physical; 4 gp of trap-making materials) I trap a 5-foot square with a mechanical, toothy-jawed trap. When a Large or smaller creature enters the trapped area, crea must succeed on a DEX save or take 2d8 Piercing damage, and its speed becomes 0 feet unless it’s immune to being grappled. A crea can use its action to make a Strength (Athletics) check against my ranger save DC, freeing the trapped creature on a success.",
					" \u2022 Tanglevine. (Magical; 1st-level spell slot) When activated, twisted, knotting roots burst through the ground, creating an effect identical to the entangle spell within a 20-foot-radius circle centred on the trap for the next minute.",
					" \u2022 Snare Trap. (Physical; 2 gp of trap-making materials) I trap a 5-foot square with ropes and vines. When a Large or smaller creature moves into the trapped area, the trap activates and the creature must succeed on a Strength saving throw or be knocked prone, and its speed becomes 0 feet unless it’s immune to being grappled. A creature can use its action to make a Strength (Athletics) check against my ranger save DC, freeing the trapped creature on a success.",
					" \u2022 Solestriker (Magical; 1st-level spell slot) When activated, hard spikes and thorns sprout in a 20-foot-radius circle centred on the trap, creating an effect identical to the spike growth spell for the next minute.",
				])
			}],
		},
		"subclassfeature5" : {
			name : "Ranger Traps",
			source : [["HGtMH", 190]],
			minlevel : 5,
			description : desc([
				"At 5th level, I learn how to make new traps. Details of these traps can be found on notes pages below.",
			]),
			toNotesPage: [{
				name : "Ranger Traps",
				source : [["HGtMH", 192]],
				note: desc([
					" \u2022 Immolation. (Magical; 2nd-level spell slot) When activated, a 20-foot-radius sphere of flame erupts, centred on the trap. Each creature in the area when the trap detonates must make a DEX save, taking 6d6 Fire dmg on a failure, or half as much damage on a success.",
					" \u2022 Miasma. (Magical; 2nd-level spell slot) When activated, a 20-foot-radius sphere centred on the trap fills with gas for the next minute or until strong wind disperses it. The gas spreads around corners, lightly obscures the area, and penetrates through creatures’ skin, affecting them even if they hold their breath or don’t need to breathe. When a creature enters the area for the first time on its turn or starts its turn there, it must make a CON save. On a failure, a creature takes 3d6 Poison dmg and becomes poisoned until the start of its next turn. On a success, a creature takes half as much damage and isn’t poisoned. While poisoned in this way, a creature has disadvantage on saving throws it makes to maintain its concentration.",
					" \u2022 Soulbind. (Magical; 2nd-level spell slot) When activated, there is a flare of brilliant octarine light, and each creature in a 20-foot-radius sphere centred on the trap must succeed on a CHA save or become soulbound, as per the preserve spell (see page 513). In addition, while a creature is soulbound in this way, it can’t benefit from being invisible. Creatures possessing robust or more powerful essence within their bodies (typically, those of CR 7 or higher) automatically succeed on this saving throw. I can expend a spell slot of 4th level or higher when I create this trap instead of a 2nd-level slot. When I do so, creatures with robust or less powerful essence (typically CR 11 or lower) must make the saving throw, while creatures with potent or more powerful essence automatically succeed.",
					" \u2022 Pit Trap. (Physical; 2 gp of trap-making materials) Because of their nature, pit traps are deployed in the space in which they are created as soon as their construction is finished, and can’t be moved. After the trap activates, I can spend 1 minute recovering it, allowing it to be used again. I dig a 7-foot-deep hole in dirt, or another diggable surface, in a 5-foot square. I can choose to fill the pit with sharpened stakes, spikes, or any other sharp materials. When a Medium or smaller creature moves into the trapped area, it must make a DEX save. On a failure, it falls into the pit, where it lands prone, taking 4d8 piercing damage if the trap is filled with spikes. On a success, it avoids the trap, falling prone in the nearest unoccupied space to the trap. A creature that succeeds on the save by 5 or more doesn’t fall prone.",
				])
			}],
		},
		"subclassfeature7.1" : {
			name : "Tracker",
			source : [["HGtMH", 190]],
			minlevel : 7,
			description : desc([
				"When I make an ability check to find or follow tracks, I can add my proficiency bonus to the result of the check, even if I am not proficient in the relevant skill. If I am already proficient in the relevant skill, my proficiency bonus is doubled for that check.",
			]),
		},
		"subclassfeature7.2" : {
			name : "Trapper’s Avoidance",
			source : [["HGtMH", 190]],
			minlevel : 7,
			description : desc([
				"When I am subjected to a trap’s activation effect that allows me to make a saving throw to take only half damage, I instead take no damage if I succeed on the saving throw, and only half damage if I fail. In addition, if a trap makes an attack roll against me, that attack roll has disadvantage.", 
				"This feature doesn’t function against a trap’s ongoing effects. See book for further clarification.",
			]),
		},
		"subclassfeature9" : {
			name : "Ranger Traps",
			source : [["HGtMH", 190]],
			minlevel : 9,
			description : desc([
				"At 9th level, I learn how to make new traps. Details of these traps can be found on notes pages below.",
			]),
			toNotesPage: [{
				name : "Ranger Traps",
				source : [["HGtMH", 193]],
				note: desc([
					" \u2022 Bewilderment. (Magical; 3rd-level spell slot) When activated, horrifying illusions abound and psychic energy twists the minds of creatures. Each creature in a 20-foot-radius sphere centred on the trap must make a WIS save. On a failure, a creature takes 3d10 psychic damage and becomes affected as per the confusion spell for the next minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
					" \u2022 Net Trap. (Physical; 10 gp of trap-making materials) With a large, concealed net of rope or vines, and an apparatus hidden in branches or a cave’s ceiling, I create a 20-foot square trapped area. Choose a 5-foot square within the trapped area to act as the trigger. When a Small or larger creature enters this square, the trap activates and each creature in the area must succeed on a DEX save or be restrained and hoisted 20 feet up into the air (or as high as the canopy/ceiling allows). A creature can use its action to make a Strength check against my ranger save DC, freeing itself or another creature within its reach on a success. Dealing 5 slashing damage to the net (AC 10) ends the effect and destroys the net. If there is a Huge or larger creature in the trapped area when it triggers, the trap breaks and has no effect.",
					" \u2022 Thunder Charge. (Magical; 3rd-level spell slot) When activated, a 30-foot-radius sphere centred on the trap erupts with deafening thunder. Each creature in the area must succeed on a CON save or take 8d6 Thunder damage and be deafened for the next minute. The noise can be heard 2,000 feet away, or even further in echoey locations or underwater.",
				])
			}],
		},
		"subclassfeature11" : {
			name : "Leave No Trace",
			source : [["HGtMH", 191]],
			minlevel : 11,
			description : desc([
				"When I deploy a trap, I can expend a spell slot of 1st level or higher to disguise the trap with illusion magic, causing it to become invisible the moment it leaves my hands. Creatures don’t see where the trap lands and, if it’s a physical trap, have disadvantage on saving throws made to avoid the trap’s effects.",
				"In addition, I learn the invisibility spell, which counts as a ranger spell for me, but doesn’t count against the number of ranger spells I know. I can cast it once without using a spell slot, and I regain the ability to cast it in this way when I finish a short or long rest.",
			]),
			spellcastingBonus: [{
				name: "Trapper",
				spells: ["invisibility"],
				selection: ["invisibility"],
				times: 1,
				firstCol: "oncesr",
			}],
		},
		"subclassfeature13" : {
			name : "Ranger Traps",
			source : [["HGtMH", 190]],
			minlevel : 13,
			description : desc([
				"At 13th level, I learn how to make new traps. Details of these traps can be found on notes pages below.",
			]),
			toNotesPage: [{
				name : "Ranger Traps",
				source : [["HGtMH", 194]],
				note: desc([
					" \u2022 Catapult Trap. (Physical; 15 gp of trap-making materials) Because of their nature, catapult traps are deployed in the space in which they are created as soon as their construction is finished, and can’t be moved. With bent trees, springs, or elastic rope, I create a 20-foot square of tension. Choose a 5-foot square within the trapped area to act as the trigger. When a Small or larger creature enters this square, the trap activates and each creature in the area must make a DEX save. On a success, a creature can use its reaction to move up to its speed so that it is no longer in the area. If it’s still in the area, it is affected as if it failed its save. A creature that fails the saving throw is flung 60 feet in a direction I decide when I deploy the trap, landing prone and taking 6d10 bludgeoning damage. If there is a Gargantuan creature in the trapped area when it triggers, the trap breaks and has no effect.",
					" \u2022 Infection. (Magical; 4th-level spell slot) When I create this trap, choose one of the diseases from the contagion spell. When activated, pustulant boils grow and erupt on surfaces in a 20-foot-radius sphere centred on the trap. Each creature in the area must make a CON save. On a failure, a creature is affected as if hit by the attack in the contagion spell (using the disease I chose).",
					" \u2022 Snapfrost. (Magical; 4th-level spell slot) When activated, the area within a 20-foot-radius sphere centred on the trap suddenly drops to a debilitatingly low temperature for the next minute. When a creature enters the area for the first time on its turn or starts its turn there, it must make a CON save. On a failure, a creature takes 6d6 cold damage and, until the start of its next turn, its speed is halved and it can’t take reactions. On a success, a creature takes half as much damage and isn’t otherwise affected.",
				])
			}],
		},
		"subclassfeature15" : {
			name : "Booby Trap",
			source : [["HGtMH", 191]],
			minlevel : 15,
			description : desc([
				"When I finish a long rest, I can choose one of the following magical effects with which to augment my body until I finish a long rest. After triggering an effect that activates when I am reduced to 0 hit points, that effect can’t trigger again until I finish a long rest.",
			]),
			toNotesPage: [{
				name : "Booby Trap",
				source : [["HGtMH", 191]],
				note: desc([
					"When I finish a long rest, I can choose one of the following magical effects with which to augment my body until I finish a long rest. After triggering an effect that activates when I am reduced to 0 hit points, that effect can’t trigger again until I finish a long rest.",
					" \u2022 Defibrillate. Once per turn, when a creature hits me with a melee attack, I can trigger an electrical discharge (no action required). The creature is unable to take reactions until the start of its next turn unless it is immune to lightning damage, and I can immediately move up to 10 feet without provoking opportunity attacks. After I move using this feature, I can’t do so again until the start of my next turn. When I am reduced to 0 hit points and not killed outright, I can instead drop to 1 hit point and immediately take an extra turn, interrupting the current turn. If I don’t regain any hit points before the end of my next turn, I drop to 0 hit points, fall unconscious, and begin making death saving throws as normal.",
					" \u2022 Dissolve. Once per turn, when a creature within 5 feet of me hits me with a melee attack, I can trigger a spurt of acid to coat its weapon or limb (no action required). If the melee attack was a spell attack or made with a natural weapon, the creature takes 1d6 acid damage. If the result of the attack roll meets my AC and is made with a ferrous, non-magical, non-natural weapon, the acid causes the metal to weaken and the weapon is destroyed. When I am reduced to 0 hit points, all my concealed acid charges gush outward. Each creature within 10 feet of me must make a DEX save against my ranger spell save DC. On a failed save, a creature takes 10d4 acid damage and an additional 5d4 acid damage at the start of each of its turns for the next minute until it uses an action to wipe itself clean. In addition, on a failure, if the creature rolled a 1 on the d20 for its saving throw and is wearing nonmagical, ferrous armour, the armour seizes. While wearing the armour, the creature’s speed is halved, its  AC is reduced by 2, and it has disadvantage on DEX saves.",
					" \u2022 Entomb. Once per turn, when a creature within 5 feet of me hits me with a melee attack, I can trigger a burst of cold that ripples along the attacker’s limb (no action required). The creature takes 1d4 cold damage and its speed is reduced by 15 feet until the end of its next turn unless it is immune to cold damage. When I am reduced to 0 hit points, I become entombed in a block of clear ice that has AC 15, 100 hit points, immunity to cold damage, and vulnerability to fire damage. This icy block lasts for 1 minute or until it is destroyed. While the ice persists, I have total cover against all effects and I don’t make death saving throws. If I regain 1 or more hit points, the icy block melts at the start of my next turn.",
					" \u2022 Self-Destruct. Once per turn, when a creature within 5 feet of me hits me with a melee attack, I can cause a small, shaped charge to detonate (no action required). I take 1 fire damage and the creature takes 1d8 fire damage. When I am reduced to 0 hit points, I erupt in an immense ball of fire and immediately fail one death saving throw. Each creature within 20 feet of me must make a DEX save against my ranger spell save DC. A creature takes 14d6 fire damage on a failed saving throw, or half as much damage on a successful one.",
				])
			}],
		},
		"subclassfeature17" : {
			name : "Ranger Traps",
			source : [["HGtMH", 190]],
			minlevel : 17,
			description : desc([
				"At 17th level, I learn how to make new traps. Details of these traps can be found on notes pages below.",
			]),
			toNotesPage: [{
				name : "Ranger Traps",
				source : [["HGtMH", 194]],
				note: desc([
					" \u2022 Banisher. (Magical; 5th-level spell slot) When activated, a 10-foot-radius sphere centred on the trap flares into life, attempting to suck all creatures in it into a harmless demiplane. Each creature in the area when the trap activates must succeed on a CHA save or be transported to the demiplane for the next minute. At the end of this minute, the creature reappears in the space it left, or in the nearest unoccupied space if that space is occupied.",
					" \u2022 Gravity Well. (Magical; 5th-level spell slot) When activated, gravity begins accumulating in a 30-foot-radius circle centred on the trap. The trapped area becomes difficult terrain until the end of my next turn. Each creature in the area when the trap activates must succeed on a DEX save or be knocked prone. Furthermore, each creature in the area that is concentrating must make a CON save. On a failed save, the creature’s concentration is broken. A creature that starts its turn in the area must succeed on a STR save or take 2d8 force damage and be pulled 15 feet towards the trap’s centre. At the end of my next turn, the gravity reaches a critical mass and each creature in the area must make a STR save. On a failure, a creature is knocked prone, pulled to the trap’s centre, and takes 6d8 force damage. On a success, a creature isn’t knocked prone or moved, and takes half as much force damage.",
				])
			}],
		},		
}});

// Sorcerer Subclasses
AddSubClass("sorcerer", "skinshifter", {
	regExpSearch : /^(?=.*sorcerer)(?=.*skinshifter).*$/i,
	subname : "Skinshifter",
	source : [["HGtMH", 195]],
	spellcastingExtra : ["chameleon skin", "inflict wounds", "barkskin", "protection from poison", "vampiric touch", "zippit!", "freedom of movement", "frogskin", "feverskin", "greater restoration"],
	spellcastingExtraApplyNonconform: true,
	features : {
		"subclassfeature1" : {
			name : "Skinshift",
			source : [["HGtMH", 195]],
			minlevel : 1,
			description : desc([
				"My spellcasting stimulates the latent changeability of my body. Immediately after I cast a sorcerer spell of 1st level or higher, roll a d20. If the result is equal to or lower than one-third of my sorcerer level (minimum 1), roll on the Skinshift Adaptations table to magically alter my body in a random way until the end of my next turn. Immediately after I roll on this table, I can spend 1 sorcery point (no action required) to extend the duration of the effect to 10 minutes. If an effect calls for a saving throw, the DC equals my sorcerer spell save DC.",
				"Modify Shift. When I reach 6th level in this class, I can add a bonus to the result of the d20 I roll on the Skinshift Adaptations table equal to up to half my sorcerer level. For example, at 6th level, if I rolled a 19 on the d20, I could choose any result between 19 and 22.",
			]),
			toNotesPage: [{
				name : "Skinshift Adaptations",
				source : [["HGtMH", 196]],
				note: desc([
					"d20*	Effect",
					"1	Paper Skin**. I have vulnerability to Pierc. and Slash. damage.",
					"2	Brittle Bones. I have vulnerability to Bludg. and Thunder damage.",
					"3	Elemental Sensitivity.  I have vulnerability to Acid, Cold, Fire, and Light. damage.",
					"4	Left Footed. My right foot becomes a left foot. -1 penalty to AC and my speed is reduced by 10 feet.",
					"5	The Wobbles. My inner ear is filled with fluid. I have disadvantage on DEX saves and on Perception checks that rely on hearing.",
					"6	Sunlight Sensitivity. I have disadvantage on attack rolls and on Perception checks that rely on sight when I, the target of my attack, or whatever I am trying to perceive by sight is in direct sunlight.",
					"7	Pins and Needles. I have disadvantage on attack rolls.",
					"8	Shrink. I decrease one size category, as per the Reduce effect of the enlarge/reduce spell.",
					"9	Firefly. I can cast the light cantrip with myself as the target.",
					"10	Malleable Visage. I change appearance, as per the effect in the Alter Self spell, to appear like a humanoid I’ve seen before (GM’s choice).",
					"11	Natural Weapon. I grow a natural weapon of my choice. My unarmed strikes deal 1d8 Bludg., Pierc., or Slash. damage, appropriate to the natural weapon I chose.",
					"12	Amphibisprings. With enhanced muscles and a ratcheting mechanism in my tendons, my jumping distance is tripled.",
					"13	Aqueous Adaptation. I can breathe underwater and gain a swimming speed equal to my walking speed.",
					"14	Tentacle Arm. One of my limbs becomes a tentacle. My reach with this is 5 feet greater than normal, and it can hold weapons and items as normal. I have advantage on ability checks made to grapple with it.",
					"15	Growth. I increase one size category, as per the Enlarge effect of the enlarge/reduce spell.",
					"16	Aerial Adaptation. I gain a flying spd equal to my walking spd.",
					"17	Elemental Resistance. I gain resistance to an elemental damage type. Roll a d4 to determine which type: 1, Acid; 2, Cold; 3, Fire; 4, Light.",
					"18	Rubber Skin**. I gain resistance to Bludg. damage.",
					"19	Crystal Skin**. I gain resistance to Pierc. damage.",
					"20	Steel Skin**. I gain resistance to Slash. damage.",
					"21	Tumour Skin**. At the start of each of my turns, I gain THP equal to my CHA mod (minimum 1).",
					"22	Stimulated Metabolism+. My spd increases by 10 ft and, when I take the Attack action on my turn, I can attack twice instead of once.",
					"23	Empowered Strikes. My unarmed strikes are magical and have a bonus to attack and damage rolls equal to half my PB, rounded down.",
					"24	Shimmerskin**. My skin shimmers in a pleasing array of colours, or changes to match my background. For the duration, I have ADV on CHA checks. For the duration, I can use a bns to swap between this effect and the effects of the chameleon skin spell.",
					"25	Secreted Toxin. My unarmed strikes deal an additional 1d6 Poison or Acid dmg on a hit (my choice when I gain this adaptation). In addition, a crea that is grappling I must succeed on a CON save at the end of each of my turns or take this damage.",
					"26	Scaleskin**. While I am not wearing armour, I gain a +2 to my AC.",
					"27	Relentless Metabolism+. When I am reduced to 0 HP but not killed outright, I can drop to 1 HP instead, and I lose this adaptation. If I benefit from this adaptation more than once before I finish a long rest, I gain one level of exhaustion each time I benefit from it after the first.",
					"28	Salamander Skin**. I have resistance to Fire dmg. As a bns while I am grappling or are grappled by a creature, I can make my skin fiery hot for a moment. Any creature touching me must make a CON save, taking 3d6 fire dmg on a failure or half as much dmg on a success.",
				])
			},{
				name : "Skinshift Adaptations",
				source : [["HGtMH", 196]],
				note: desc([
					"d20*	Effect",
					"29	Fortified Metabolism+. I have ADV on CON checks and CON saves, as well as any checks or saves made to avoid the exhaustion condition.",
					"30	Reflective Carapace**. When I am targeted by a magic missile spell or a spell that requires a ranged attack roll, roll a d6. On a 1-3, I am affected as normal. On a 4-5, I am unaffected. On a 6, I am unaffected, and the effect is reflected back at the caster as though it originated from me, turning the caster into the target.",
					"\n *	See Modify Shift. When I reach 6th level in this class, I can add a bonus to the result of the d20 I roll on the Skinshift Adaptations table equal to up to half my sorcerer level. For example, at 6th level, if I rolled a 19 on the d20, I could choose any result between 19 and 22.",
					"**	I can only benefit from one of these adaptations at a time. If I gain one of these adaptations while I already benefit from one, the older one is lost.",
					"+	I can only benefit from one of these adaptations at a time. If I gain one of these adaptations while I already benefit from one, the older one is lost.",
				])
			}],
		},
		"subclassfeature6" : {
			name : "Selective Shift",
			source : [["HGtMH", 197]],
			minlevel : 6,
			description : desc([
				"As a bonus action, I can spend 1 or more sorcery points to magically transform my body for the next 10 minutes. For each sorcery point I spend, I gain one adaptation of my choice from the Skinshift Adaptations table, the effects of which last until the transformation ends. The adaptation must have a value in the d20 column equal to or lower than 20 plus half my sorcerer level. If I gain a random skinshift adaptation that replaces one I already had (for example, tumour skin replacing rubber skin), this new adaptation lasts for the duration of the transformation.",
			]),
			action : [["bonus action", ""]],
		},
		"subclassfeature14" : {
			name : "Reactive Mutations",
			source : [["HGtMH", 197]],
			minlevel : 14,
			description : desc([
				"Immediately after I take damage, I can use my reaction to spend 1 sorcery point and gain resistance to that damage type for 10 minutes or until I use this feature again. If I take multiple types of damage simultaneously, I choose one of the damage types to gain resistance to.",
			]),
			action : [["reaction", ""]],
		},
		"subclassfeature18" : {
			name : "Shapeshift",
			source : [["HGtMH", 197]],
			minlevel : 18,
			description : desc([
				"I unleash my inner shapeshifter, allowing my body to react to all manner of environmental stimuli. As bonus action, I can cause a metabolic cascade that transforms my body for 10 minutes, granting me the following effects:",
				" \u2022 All grapple and restraining effects on me immediately end.",
				" \u2022 I gain six adaptations of my choice from the Skinshift Adaptations table. For these, I ignore the restrictions on which adaptations I can have simultaneously.",
				" \u2022 I can’t use the Reactive Mutations or Selective Shift skinshifter features, and it ends if it is active.",
				" \u2022 Immediately after I take damage, I gain resistance to that damage type. I can simultaneously sustain three damage resistances in this way; if I gain another resistance from this feature while at my limit, the oldest one is lost.",
				"After I activate this feature, I can’t do so again until I finish a long rest.",
			]),
			action : [["bonus action", ""]],
			usages : 1,
			recovery : "long rest",
		},
	},
});

// Warlock Subclasses
AddSubClass("warlock", "the parasite", {
	regExpSearch : /^(?=.*warlock)(?=.*parasite).*$/i,
	subname : "the Parasite",
	source : [["HGtMH", 217]],
	spellcastingExtra : ["heroism", "sanctuary", "enhance ability", "enlarge/reduce", "haste", "spirit guardians", "evard's black tentacles", "freedom of movement", "contagion", "dominate person" ],
	spellcastingExtraApplyNonconform: true,
	features : {
		"subclassfeature1.1" : {
			name : "Parasitic Weapon",
			source : [["HGtMH", 217]],
			minlevel : 1,
			description : desc([
				"My patron can manifest on and protrude from my body in the form of a parasitic weapon—claws, teeth, tendrils, or other appendages. As a bonus action, I can manifest this parasitic weapon; I gain a new attack option that I can use when I take the Attack action on my turn. This special attack is a melee spell attack, with a reach equal to five times my proficiency bonus. The attack deals 1d12 bludgeoning, piercing, or slashing damage on a hit (my choice when I manifest the weapon). I don’t add my ability modifier to the damage of the parasitic weapon.",
				"The parasitic weapon retracts back into my body if I am incapacitated or I use a bonus action to end it.",
				"Parasitic Flurry. The number of attacks I can make with my parasitic weapons when I take the Attack action on my turn increases when I reach certain levels in this class, increasing to two attacks at 5th level, three attacks at 11th level, and four attacks at 17th level. If I have another feature that allows me to make multiple attacks as part of the Attack action (such as Extra Attack), making any of those extra attacks each replace one of these parasitic weapon attacks.",
				"Magical Weapons. Starting at 6th level, my attacks with my parasitic weapon count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.",
			]),
			action : ["bonus action", ""],
			weaponOptions: [{
				name: "Parasitic Weapon",
				source : [["HGtMH", 217]],
				regExpSearch : /^(?=.*parasitic)(?=.*weapon).*$/i,
				type : "AlwaysProf",
				ability : 6,
				abilitytodamage : false,
				damage : [1, 12, "Bludg/Pierc/Slash"],
				range : "",
				description : "Two attacks at 5th, three at 11th, four at 17th.",
				isAlwaysProf: true,
				selectNow: true,
			}],
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if ((/^(?=.*parasitic)(?=.*weapon).*$/i).test(v.WeaponTextName) && classes.known.warlock && classes.known.warlock.level) {
						fields.Range = (classes.known.warlock.level < 5 ? 10 : classes.known.warlock.level < 9 ? 15 : classes.known.warlock.level < 13 ? 20 : classes.known.warlock.level < 17 ? 25 : 30) + "ft";
						};
					},
					5
				],
			},
		},
		"subclassfeature1.2" : {
			name : "Symbiotic Reinforcement",
			source : [["HGtMH", 218]],
			minlevel : 1,
			description : desc([
				"Invested in my survival, my patron manifests in protective ways. I can use my Charisma modifier in place of my Strength modifier when making Strength saving throws. In addition, as a bonus action, I can cause my patron to manifest in my free hand as a shield, with which I am proficient. This shield disappears if I am incapacitated or if I dismiss it as a bonus action. When I reach 10th level in this class, this shield increases my AC by 3 instead of 2.",
			]),
			action : ["bonus action", ""],
			addMod : { type : "save", field : "Str", mod : "-Str+Cha", text : "I can use my Charisma modifier in place of my Strength modifier when making Strength saving throws."},
			shieldAdd : "Symbiotic Reinforcement",
		},
		"subclassfeature6.1" : {
			name : "Liquefied Body",
			source : [["HGtMH", 218]],
			minlevel : 6,
			description : desc([
				"As a bonus action, I can transform my body into a viscous, liquid form for 10 minutes. I choose whether my equipment falls to the ground in my space or merges into my new form. For the duration, I can squeeze through a space as narrow as 6 inches wide, and moving through difficult terrain costs me no extra movement. After I use this feature, I can’t do so again until I finish a short or long rest.",
			]),
			action : [["bonus action", ""]],
			usages : 1,
			recovery : "short rest",
		},
		"subclassfeature6.2" : {
			name : "Birth Parasite",
			source : [["HGtMH", 218]],
			minlevel : 6,
			description : desc([
				"Over the course of 1 minute, I can extrude an independent piece of my patron, causing it to manifest in an unoccupied space within 5 feet of me. This parasite acts as a familiar, as if with the find familiar spell. See this creature’s game statistics in the parasitic ooze stat block (page 219), which uses my proficiency bonus (PB) in several places.",
				"If I have the Pact of the Chain feature, the parasite counts as a familiar for me for the purpose of applying any benefits from that feature or my invocations.",
				"After I birth a parasite, I can’t do so again until I finish a short or long rest. If I use this feature while I already have a parasite, the previous one dissolves in a puddle of goo.",
			]),
			creaturesAdd : [["Parasitic Ooze", true]],
			creatureOptions : [{
				name : "Parasitic Ooze",
				source : [["HGtMH", 219]],
				size : 5,
				type : "Ooze",
				alignment : "unaligned",
				ac : "8+Prof" ,
				hp : "" ,
				hd : [],
				speed : "5 + 5*Prof ft, climb 5 + 5*Prof ft ",
				scores : [11, 6, 16, 7, 10, 5],
				damage_resistances: "necrotic",
				condition_immunities : "blinded, charmed, deafened, exhaustion, frightened, prone",
				senses : "Darkvision 60 ft (blind beyond this radius)",
				passivePerception : 10,
				languages : "understands the languages I speak",
				challengeRating : "",
				saves : ["", 0, 5, "", "", ""],
				skills : {
					"stealth" : 2,
				},
				proficiencyBonus : 2,
				proficiencyBonusLinked : true,
				attacksAction : 1,
				attacks : [{
					name : "Pseudopod",
					ability : 6,
					damage : [1, 6, "bludgeoning"],
					range : "Melee",
					description : "",
					modifiers : ["", "Prof"],
					abilitytodamage : false,
					useSpellMod : "warlock"
				}],
				features : [{
					name : "Creator",
					description : "The Parasite Ooze acts as a familiar, as if with the find familiar spell.",
				}],
				traits: [{
					name: "Amorphous",
					description:
						"The ooze can move through a space as narrow as 1 inch wide without squeezing.",
					},{
					name: "False Appearance",
					description:
						"While the ooze remains motionless, it is indistinguishable from an oily pool or wet rock.",
					},{
					name: "Spider Climb",
					description:
						"The ooze can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
					},{
					name: "Detonate Ooze (The Parasite 10)",
					minlevel: 10,
					description:
						"Detonate Ooze. The ooze moves up to its speed and then explodes, causing it to drop to 0 hit points. Each creature within 10 feet of the ooze must make a Dexterity saving throw against my warlock spell save DC. On a failed save, a creature takes 4d6 necrotic damage and is blinded until the end of my next turn. On a successful save, the creature takes half as much damage and isn’t blinded.",
					},{
					name: "Symbiote’s Ward (The Parasite 10)",
					minlevel: 10,
					description:
						"Symbiote’s Ward. The ooze moves up to its speed and attaches to the body of a willing creature within 5 feet of it. While attached in this way, the ooze is incapacitated, has a speed of 0 feet, and I can communicate telepathically with the creature it’s attached to, whether or not I share a common language. Whenever the creature the ooze is attached to takes damage, the ooze takes the damage instead. As a bonus action, I can command the ooze to detach from the creature.",
				}],
				minlevelLinked: ["warlock"],		
				header: "Parasitic Ooze",
				calcChanges: {
					hp: function (totalHD, HDobj, prefix) {
						if (!classes.known.warlock) return;
						var warLvl = classes.known.warlock.level;
						var paraOozeHP = 3 * warLvl + 5;
						HDobj.alt.push(paraOozeHP);
						HDobj.altStr.push(
						" = 5 as a base\n + three times its creator's warlock level (" +
							paraOozeHP +
							")"
						);
					},
					setAltHp: true,
				},
			}],
		},
		"subclassfeature6.3" : {
			name : "Magical Parasitic Weapon",
			source : [["HGtMH", 217]],
			minlevel : 6,
			description : desc([
				"Magical Weapons. Starting at 6th level, my attacks with my parasitic weapon count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.",
			]),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if ((/^(?=.*parasitic)(?=.*weapon).*$/i).test(v.WeaponTextName) && classes.known.warlock && classes.known.warlock.level && !v.theWea.isMagicWeapon && !(/counts as( a)? magical/i).test(fields.Description)) {
							fields.Description += (fields.Description ? '; ' : '') + 'Counts as magical';
						};
					},
					"Magical Weapons. Starting at 6th level, my attacks with my parasitic weapon count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.",
				],
			},
		},
		"subclassfeature10.1" : {
			name : "Transmit Parasite",
			source : [["HGtMH", 219]],
			minlevel : 10,
			description : desc([
				"At 10th level, I learn new ways to use my parasitic ooze to aid my friends or harm my foes. As a bonus action while my parasitic ooze isn’t incapacitated, I can command it to immediately use one of the options below.",
				"Detonate Ooze. The ooze moves up to its speed and then explodes, causing it to drop to 0 hit points. Each creature within 10 feet of the ooze must make a Dexterity saving throw against my warlock spell save DC. On a failed save, a creature takes 4d6 necrotic damage and is blinded until the end of my next turn. On a successful save, the creature takes half as much damage and isn’t blinded.",
				"Symbiote’s Ward. The ooze moves up to its speed and attaches to the body of a willing creature within 5 feet of it. While attached in this way, the ooze is incapacitated, has a speed of 0 feet, and I can communicate telepathically with the creature it’s attached to, whether or not I share a common language. Whenever the creature the ooze is attached to takes damage, the ooze takes the damage instead. As a bonus action, I can command the ooze to detach from the creature.",
			]),
			action : [["bonus action", ""]],
		},
		"subclassfeature10.2" : {
			name : "Symbiotic Reinforcement",
			source : [["HGtMH", 218]],
			minlevel : 10,
			description : desc([
				"When I reach 10th level in this class, this shield increases my AC by 3 instead of 2.",
			]),
			shieldAdd : ["Symbiotic Reinforcement", 3, 0],
		},
		"subclassfeature14" : {
			name : "Virulent Form",
			source : [["HGtMH", 219]],
			minlevel : 14,
			description : desc([
				"My patron allows me to unleash a modicum of its true power as it envelops my form. As an action, I can gain the following benefits for 1 minute:",
				" \u2022 I grow in size by one category—from Medium to Large, for example. If I lack the room to grow, my size doesn’t change.",
				" \u2022 I gain a number of temporary hit points equal to my Charisma modifier (minimum 1) at the start of each of my turns.",
				" \u2022 The damage dice of my parasitic weapon increases to 2d8.",
				" \u2022 My parasitic weapon attacks score a critical hit on a roll of 19 or 20.",
				" \u2022 Whenever I take damage from a creature within my parasitic weapon’s reach, I can use my reaction to make an attack with the parasitic weapon against that creature.",
				"Once I use this feature, I can’t do so again until I finish a short or long rest."
			]),
			action : [["action", ""]],
			usages : 1,
			recovery : "short rest",
		},
	},
});

// Eldritch Invocation options
AddWarlockInvocation("Parasitic Leech (prereq: Parasite patron)", {
	name : "Parasitic Leech",
	source : [["HGtMH", 219]],
	submenu : "[prereq: Parasite patron]",
	description : desc([
		"When I score a critical hit with my parasitic weapon or reduce a creature to 0 HP with it, I gain a number of THP equal to the number rolled on the weapon’s damage dice. If I later gain the Pact of the Blade feature, I gain this benefit to critical hits scored with my pact weapon."
	]),
	prereqeval : function(v) { return (/parasite/).test(classes.known.warlock.subclass); },
});

AddWarlockInvocation("Agonizing Blast [Parasite Patron, Optional] (2+)", {
	name : "Agonizing Blast [Parasite Patron]",
	source : [["HGtMH", 219]],
	submenu : "[prereq: Parasite patron]",
	description : desc([
		"I add my Charisma modifier to the damage of my parasitic weapon."
	]),
	calcChanges: {
		atkCalc: [
			function (fields, v, output) {
				if ((/^(?=.*parasitic)(?=.*weapon).*$/i).test(v.WeaponTextName)) output.extraDmg += What('Cha Mod');
			},
		"I add my Charisma modifier to the damage of my parasitic weapon."
		],
	},
	prereqeval : function(v) { 
		return classes.known.warlock.level >= 2 && (/parasite/).test(classes.known.warlock.subclass); 
	},
});

AddWarlockInvocation("Eldritch Spear [Parasite Patron, Optional] (2+)", {
	name : "Eldritch Spear [Parasite Patron]",
	source : [["HGtMH", 219]],
	submenu : "[prereq: Parasite patron]",
	description : desc([
		"I add my Charisma modifier to the damage of my parasitic weapon."
	]),
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if ((/^(?=.*parasitic)(?=.*weapon).*$/i).test(v.WeaponTextName) && classes.known.warlock && classes.known.warlock.level) {
					fields.Range = (classes.known.warlock.level < 5 ? 25 : classes.known.warlock.level < 9 ? 37 : classes.known.warlock.level < 13 ? 50 : classes.known.warlock.level < 17 ? 62 : 75) + "ft";
				};
			},
			5
		],
	},
	prereqeval : function(v) { 
		return classes.known.warlock.level >= 2 && (/parasite/).test(classes.known.warlock.subclass); 
	},
});

AddWarlockInvocation("Repelling Blast [Parasite Patron, Optional] (2+)", {
	name : "Repelling Blast [Parasite Patron]",
	source : [["HGtMH", 219]],
	submenu : "[prereq: Parasite patron]",
	description : desc([
		"I add my Charisma modifier to the damage of my parasitic weapon."
	]),
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if ((/^(?=.*parasitic)(?=.*weapon).*$/i).test(v.WeaponTextName) && classes.known.warlock && classes.known.warlock.level) {
					fields.Description += '; Target pushed back 10 ft';
				};
			},
			"When I hit a Large or smaller creature with Eldritch Blast, I can push the creature up to 10 feet straight away from me.",
			51,
		],
	},
	prereqeval : function(v) { 
		return classes.known.warlock.level >= 2 && (/parasite/).test(classes.known.warlock.subclass); 
	},
});

// Wizard Subclasses
AddSubClass("wizard", "biomancy", {
	regExpSearch : /^(?=.*wizard)(?=.*biomancy).*$/i,
	subname : "School of Biomancy",
	source : [["HGtMH", 220]],
	features : {
		"subclassfeature2.1" : {
			name : "Biomancy Savant",
			source : [["HGtMH", 220]],
			minlevel : 2,
			description : desc([
				"Beginning when I select this school at 2nd level, the gold and time I must spend to copy a biomancy spell into my spellbook is halved. In addition, I gain proficiency with surgeon’s tools, and the some spells are considered biomancy spells for me instead of their normal school (see book).",
			]),
			toolProfs: ["Surgeon’s Tools"],		
		},
		"subclassfeature2.2" : {
			name : "Biostimulation",
			source : [["HGtMH", 220]],
			minlevel : 2,
			description : desc([
				"I learn to channel biomantic magic into my cells, restoring my vitality. When I use a spell slot to cast a biomancy spell of 1st level or higher, I can simultaneously redirect a strand of the spell’s magic to energise and repair myself or my target’s body. Myself or my target (my choice) regains a number of hit points equal to twice the spell’s level.",
			]),	
		},
		"subclassfeature6" : {
			name : "Self Improvement",
			source : [["HGtMH", 220]],
			minlevel : 6,
			description : desc([
				"I can perform minor surgery on my body, improving myself in a very literal sense. Over the course of 1 hour (which can be done during a rest), I can enhance myself with one bio-magical improvement, choosing from the following options:",
				" \u2022 Amphibisprings. With enhanced quads and a ratcheting mechanism in my achilles, my jumping distance is tripled.",
				" \u2022 Extra Appendage. I gain a prehensile tail or an extra arm, allowing me to hold one more thing and conferring advantage on any ability checks I make to climb.",
				" \u2022 Detachable Hand. As an action, I can detach my hand and imbue it with biomantic magic. The hand follows the rules of the unseen servant spell, except it is not invisible and waits patiently if ever more than 60 feet away from me. If my hand is ever reduced to 0 hit points, it is destroyed, and I grow a new one over the course of a short or long rest.",
				" \u2022 Firefly Skin. I can cast the light cantrip at will with myself as the target. As a bonus action, I can flash brightly for a moment; each creature within 5 feet of myself that can see me must succeed on a Constitution saving throw against my wizard spell save DC or be blinded until the end of my next turn. After I use this bonus action, I can’t do so again until I finish a short or long rest.",
				" \u2022 Owl Eyes. I gain darkvision out to a range of 120 feet.",
				" \u2022 Slime. I exude slime; checks made to grapple me have disadvantage.",
				" \u2022 Scales. My skin is covered in overlapping scales. I gain a +1 bonus to AC when I am not wearing armour.",
				" \u2022 Spidersense. I gain a 1d4 bonus to my initiative rolls.",
				" \u2022 Talon. One of my hands is replaced with a wicked giant hawk’s talon, a natural weapon that I can use to make unarmed strikes. If I hit with it, I deal slashing damage equal to 1d8 + my Strength modifier, instead of the bludgeoning damage normal for an unarmed strike. If I am grappling a creature with this talon, I can automatically deal this damage to the grappled creature once on each of my turns as a bonus action.",
				" \u2022 Third Leg. My speed increases by 10 feet and I have advantage on ability checks and saving throws made against effects that would knock me prone.",
				" \u2022 Trimorphism. I can cast the enlarge/reduce spell on myself at will (no material components or concentration required).",
				"My body has enough latent biomantic magic to sustain one improvement at a time. When I reach 10th and 14th level, I can sustain up to two and three improvements at a time, respectively. If I gain a new improvement while I have my maximum number of sustainable improvements active, I must choose one improvement to lose; this improvement withers away and ceases to function the moment I finish the surgery on my new improvement."
			]),
			toNotesPage: [{
				name : "Self Improvement",
				source : [["HGtMH", 221]],
				note: desc([
					"I can perform minor surgery on my body, improving myself in a very literal sense. Over the course of 1 hour (which can be done during a rest), I can enhance myself with one bio-magical improvement, choosing from the following options:",
					" \u2022 Amphibisprings. With enhanced quads and a ratcheting mechanism in my achilles, my jumping distance is tripled.",
					" \u2022 Extra Appendage. I gain a prehensile tail or an extra arm, allowing me to hold one more thing and conferring advantage on any ability checks I make to climb.",
					" \u2022 Detachable Hand. As an action, I can detach my hand and imbue it with biomantic magic. The hand follows the rules of the unseen servant spell, except it is not invisible and waits patiently if ever more than 60 feet away from me. If my hand is ever reduced to 0 hit points, it is destroyed, and I grow a new one over the course of a short or long rest.",
					" \u2022 Firefly Skin. I can cast the light cantrip at will with myself as the target. As a bonus action, I can flash brightly for a moment; each creature within 5 feet of myself that can see me must succeed on a Constitution saving throw against my wizard spell save DC or be blinded until the end of my next turn. After I use this bonus action, I can’t do so again until I finish a short or long rest.",
					" \u2022 Owl Eyes. I gain darkvision out to a range of 120 feet.",
					" \u2022 Slime. I exude slime; checks made to grapple me have disadvantage.",
					" \u2022 Scales. My skin is covered in overlapping scales. I gain a +1 bonus to AC when I am not wearing armour.",
					" \u2022 Spidersense. I gain a 1d4 bonus to my initiative rolls.",
					" \u2022 Talon. One of my hands is replaced with a wicked giant hawk’s talon, a natural weapon that I can use to make unarmed strikes. If I hit with it, I deal slashing damage equal to 1d8 + my Strength modifier, instead of the bludgeoning damage normal for an unarmed strike. If I am grappling a creature with this talon, I can automatically deal this damage to the grappled creature once on each of my turns as a bonus action.",
					" \u2022 Third Leg. My speed increases by 10 feet and I have advantage on ability checks and saving throws made against effects that would knock me prone.",
					" \u2022 Trimorphism. I can cast the enlarge/reduce spell on myself at will (no material components or concentration required).",
					"My body has enough latent biomantic magic to sustain one improvement at a time. When I reach 10th and 14th level, I can sustain up to two and three improvements at a time, respectively. If I gain a new improvement while I have my maximum number of sustainable improvements active, I must choose one improvement to lose; this improvement withers away and ceases to function the moment I finish the surgery on my new improvement."
				]),
			}],
		},
		"subclassfeature10" : {
			name : "Spell Splitter",
			source : [["HGtMH", 221]],
			minlevel : 10,
			description : desc([
				"My fiddling self-improvement has led to the ability to benefit from the magic I create. When I cast a wizard spell that targets only one creature and doesn’t have a range of self, I can choose to simultaneously target myself with the same spell. I can use this feature a number of times equal to my Intelligence modifier (minimum once), regaining all expended uses when I finish a long rest.",
			]),
			recovery : "long rest",
			usagescalc: "event.value = Math.max(1,What('Int Mod'))",
		},
		"subclassfeature14" : {
			name : "Endocrine Overload",
			source : [["HGtMH", 221]],
			minlevel : 14,
			description : desc([
				"Over the course of 1 hour (which can be done during a rest), I can craft a capsule of potent stimulants, choosing from either the Brutish or Swift archetypes, and embed it within my adrenal gland. With a slight tensing of my brain muscles, I can crack this capsule as a bonus action, stimulating my body. For the next minute, I gain the following benefits based on the archetype I chose:",
				"BRUTISH",
				" \u2022 If I am smaller than Large, I become Large, and my weight increases proportionately. If I lack the room to become Large, my size doesn’t change.",
				" \u2022 My Strength score increases to match my Intelligence score if it isn’t already higher.",
				" \u2022 I have advantage on Strength and Constitution checks and Strength and Constitution saving throws.",
				" \u2022 I grow an appendage with which I can make melee weapon attacks. When I grow the weapon, I decide whether it deals bludgeoning, piercing, or slashing damage. I are proficient with this weapon and use my Strength modifier for attack and damage rolls. The weapon deals 2d10 damage.",
				" \u2022 I can attack twice, instead of once, when I  take the Attack action on my turn. I ignore this benefit if I already have a feature, like Extra Attack, that lets me attack more than once when I take the Attack action on my turn.",
				" \u2022 I gain temporary hit points equal to twice my Intelligence modifier (minimum of 2) at the start of each of my turns.",
				"SWIFT",
				" \u2022 My Dexterity score increases to match my Intelligence score if it isn’t already higher.",
				" \u2022 I have advantage on Dexterity checks and saving throws.",
				" \u2022 My cantrips with a casting time of 1 action have a casting time of 1 action or 1 bonus action.",
				" \u2022 I gain the benefits of the haste spell, which can’t be dispelled:",
				"	\u2022 My speed is doubled.",
				"	\u2022 I gain a +2 bonus to AC.",
				"	\u2022 I can take one additional action on each of my turns, which can be used only to take the Attack (one weapon attack only), Dash, Disengage, Hide, or Use an Object action.",
				"Relapse. When the minute elapses, I gain one level of exhaustion, and I can’t move or take actions until the end of my next turn, as a wave of lethargy sweeps over me. I must craft another capsule before I can use this feature again.",
			]),
			toNotesPage: [{
				name : "Self Improvement",
				source : [["HGtMH", 221]],
				note: desc([
					"Over the course of 1 hour (which can be done during a rest), I can craft a capsule of potent stimulants, choosing from either the Brutish or Swift archetypes, and embed it within my adrenal gland. With a slight tensing of my brain muscles, I can crack this capsule as a bonus action, stimulating my body. For the next minute, I gain the following benefits based on the archetype I chose:",
					"BRUTISH",
					" \u2022 If I am smaller than Large, I become Large, and my weight increases proportionately. If I lack the room to become Large, my size doesn’t change.",
					" \u2022 My Strength score increases to match my Intelligence score if it isn’t already higher.",
					" \u2022 I have advantage on Strength and Constitution checks and Strength and Constitution saving throws.",
					" \u2022 I grow an appendage with which I can make melee weapon attacks. When I grow the weapon, I decide whether it deals bludgeoning, piercing, or slashing damage. I are proficient with this weapon and use my Strength modifier for attack and damage rolls. The weapon deals 2d10 damage.",
					" \u2022 I can attack twice, instead of once, when I  take the Attack action on my turn. I ignore this benefit if I already have a feature, like Extra Attack, that lets me attack more than once when I take the Attack action on my turn.",
					" \u2022 I gain temporary hit points equal to twice my Intelligence modifier (minimum of 2) at the start of each of my turns.",
					"SWIFT",
					" \u2022 My Dexterity score increases to match my Intelligence score if it isn’t already higher.",
					" \u2022 I have advantage on Dexterity checks and saving throws.",
					" \u2022 My cantrips with a casting time of 1 action have a casting time of 1 action or 1 bonus action.",
					" \u2022 I gain the benefits of the haste spell, which can’t be dispelled:",
					"	\u2022 My speed is doubled.",
					"	\u2022 I gain a +2 bonus to AC.",
					"	\u2022 I can take one additional action on each of my turns, which can be used only to take the Attack (one weapon attack only), Dash, Disengage, Hide, or Use an Object action.",
					"Relapse. When the minute elapses, I gain one level of exhaustion, and I can’t move or take actions until the end of my next turn, as a wave of lethargy sweeps over me. I must craft another capsule before I can use this feature again.",
				])
			}],
		},
	},
});


/*
 * Feats 
 */

/*
 * Combat Feats
 */

FeatsList["blade barrier"] = {
	name : "Blade Barrier",
	source : [["HGtMH", 223]],
	descriptionFull : "My expertise with twinblades allows me to turn my defensive flourish into an offensive strike. When I use the Whirl special bonus action with a twinblade, I gain the following features: \n \u2022 I can make one additional melee attack with the weapon. This attack uses the same ability modifier as the primary attack, and the weapon’s damage die for this attack is a d4. \n \u2022 Until the start of my next turn, other creatures provoke an opportunity attack from me when they enter I reach or make a melee attack against I while within my reach.",
	description : "When use Whirl Bns with Twinblade, can make one additional melee atk, d4 + mod dmg, & until the start of my next turn, other creas provoke OA from me when they enter my reach or make a melee atk against me within my reach.",
	weaponOptions : [{
		regExpSearch : /^(?=.*twinblade)(?=.*extra).*$/i,
		name : "Twinblade Extra Attack",
		source : [["HGtMH", 223]],
		ability : 1,
		type : "twinblade extra attack",
		damage : [1, 4, "slashing"],
		range : "Melee",
		description : "Finesse, When use Whirl Bns with Twinblade",
		abilitytodamage : true,
		selectNow : true
	}],
	prerequisite : "Proficiency with twinblade",
	prereqeval : function(v) {
		return v.martialWeaponsProf || (/twinblade/i).test(v.otherWeaponsProf);
	},
};

FeatsList["cat’s caress"] = {
	name : "Cat’s Caress",
	source : [["HGtMH", 223]],
	descriptionFull : "Manipulating my bladed digits with preternatural delicacy, I can switch from exsanguinating slash to soft caress with a deft flick. \n \u2022 After I take the Attack action using a claw in one hand, I can use a bonus action to make up to two melee attacks with a different claw that I am holding in the other hand. I don’t add my ability modifier to the damage of the bonus attack(s), unless that modifier is negative, or I have the two-weapon Fighting Style. \n \u2022 I have advantage to hit a target I am grappling with an attack using a claw. \n \u2022 I can equip or unequip either a single or a pair of claws using either a bonus action or action.",
	description : "When Atk with Claw, Bns two additional melee atks, don't add mod to dmg unless mod is negative or I have two-weapon FS. Adv to hit target I'm grappling. Don/doff claws with either Bns or Action",
	prerequisite : "Proficiency with claw",
	prereqeval : function(v) {
		return v.simpleWeaponsProf || (/claw/i).test(v.otherWeaponsProf);
	},
};

FeatsList["fearsome flourisher"] = {
	name : "Fearsome Flourisher",
	source : [["HGtMH", 223]],
	descriptionFull : "I speed with nunchaku can strike fear into my foes: \n \u2022 When I take the Attack action and attack with a nunchaku, I can use a bonus action to make one additional nunchaku attack. This attack uses the same ability modifier as the primary attack and the weapon’s damage die for this attack is a d4. \n \u2022 When I take the Flourish special action with nunchaku, I can use a bonus action to make it especially intimidating towards one creature within my reach. If I don’t fail on my Dexterity check to flourish the weapon, my target must succeed on a Wisdom saving throw or become frightened of me until the start of my next turn. The DC for the saving throw equals 8 + my Dexterity modifier. If I am proficient in the Intimidation skill, I can add my proficiency bonus to the DC.",
	description : "When I take the Atk action with a Nunchaku, Bns extra atk, 1d4 dmg. When I take the Flourish special action with nunchaku, I can use a bonus action to frighten one creaturee within reach.",
	weaponOptions : [{
		regExpSearch : /^(?=.*nunchaku)(?=.*extra).*$/i,
		name : "Nunchaku Extra Attack",
		source : [["HGtMH", 223]],
		ability : 1,
		type : "nunchaku extra attack",
		damage : [1, 4, "bludgeoning"],
		range : "Melee",
		description : "Finesse, As bonus action after Attack action with only a Nunchaku",
		abilitytodamage : true,
		selectNow : true
	}],
	action : [["bonus action", "Nunchaku (after attack with Nunchaku)"],["bonus action", "Frighten (after Flourish special attack)"]],
	toNotesPage: [{
	name : "Features",
	page3notes: true,
     	note : [
		"I speed with nunchaku can strike fear into my foes:",
		" \u2022 When I take the Attack action and attack with a nunchaku, I can use a bonus action to make one additional nunchaku attack. This attack uses the same ability modifier as the primary attack and the weapon’s damage die for this attack is a d4.",
		" \u2022 When I take the Flourish special action with nunchaku, I can use a bonus action to make it especially intimidating towards one creature within my reach. If I don’t fail on my Dexterity check to flourish the weapon, my target must succeed on a Wisdom saving throw or become frightened of me until the start of my next turn. The DC for the saving throw equals 8 + my Dexterity modifier. If I am proficient in the Intimidation skill, I can add my proficiency bonus to the DC.",
		],
	}],
	prerequisite : "Proficiency with nunchaku",
	prereqeval : function(v) {
		return v.martialWeaponsProf || (/nunchaku/i).test(v.otherWeaponsProf);
	},
};

FeatsList["scourge master"] = {
	name : "Scourge Master",
	source : [["HGtMH", 223]],
	descriptionFull : "My skill with whips and tetherhooks allows me to manipulate items at a distance. \n \u2022 Increase my Strength or Dexterity score by 1, to a maximum of 20. \n \u2022 When I hit a creature with an attack using a tetherhook or whip, I can use a bonus action to attempt to disarm the creature of a shield, or of one item it is holding. Make a Strength or Dexterity check (my choice) contested by the target’s Strength check. If I succeed, the item is dropped on the ground midway between myself and the creature. \n \u2022 I can use y whip or tetherhook to grab items weighing less than 1 lb within the reach of my weapon, pulling them back to my person.",
	description : "Hit crea w/ tetherhook/whip, Bns disarm target of shield/ held item, STR/DEX check (my choice) vs target's STR check, item dropped on ground midway btwn crea and I. Pull item <1lb within reach w/ weapon[+1 Strength or Dexterity]",
	action : [["bonus action", "Scourge Master (Disarm)"]],
	scorestxt : "+1 Strength or Dexterity",
	prerequisite : "Proficiency with whip or tetherhook",
	prereqeval : function(v) {
		return v.simpleWeaponsProf || v.martialWeaponsProf || (/whip/i).test(v.otherWeaponsProf) || (/tetherhook/i).test(v.otherWeaponsProf);
	},
};

FeatsList["spray ‘n’ pray"] = {
	name : "Spray ‘N’ Pray",
	source : [["HGtMH", 223]],
	descriptionFull : "I’ve learnt to unleash the full potential of mechanised ranged weapons, leaving aiming down to lady luck. I gain the following benefits: \n \u2022 I can reload firearms and tommybows as a bonus action or an action. \n \u2022 Being within 5 feet of a hostile creature doesn’t impose disadvantage on my ranged attack rolls. \n \u2022 When I use the Attack action and attack with a one-handed weapon, I can use a bonus action to attack with a one-handed firearm or tommybow I am holding. \n \u2022 After I take the Attack action with a tommybow or magitech firearm, I can use a bonus action to quickly make one or two additional ranged weapon attacks using the same weapon. If I choose to make two attacks, I take a -5 penalty to both attack rolls. I don’t add my ability modifier to the damage of the bonus attack(s), unless that modifier is negative.",
	description : "Can Bns/Action to reload. No DisAdv w/in 5ft. When Atk w/ one-handed weapon, Bns to Atk w/ one-handed firearm/ tommybow. After Atk w/ tommybow/firearm, Bns 1-2 extra atk. If 2 atk, -5 to roll, no mod to dmg unless neg.",
	action : [["bonus action", "One-handed firearm/tommybow"],["bonus action", "1-2 Extra shots"]],
	prerequisite : "Proficiency with magitech firearm or tommybow",
	prereqeval : function(v) {
		return v.martialWeaponsProf || (/magitech/i).test(v.otherWeaponsProf) || (/tommybow/i).test(v.otherWeaponsProf);
	},
};

/*
 * Crafting Feats
 */

FeatsList["expert enchanter"] = {
	name : "Expert Enchanter",
	source : [["HGtMH", 224]],
	descriptionFull : "I manipulate magical essence with a quick and subtle touch. \n \u2022 Increase my Intelligence, Wisdom, or Charisma by 1, to a maximum of 20. \n \u2022 When I make an Enchanting check with a skill with which I am proficient, my proficiency bonus is doubled. \n \u2022 When I roll for enchanting quirks, I can apply a bonus or penalty to the result of the roll equal to half my proficiency bonus. \n \u2022 Each hour I spend enchanting an item counts as 2 hours towards the item’s completion.",
	description : "My PB is doubled when Enchanting check is a skill I am proficient with. Can add/subtract to the result equal to half my PB for enchanting quirk. Each hour spent enchanting counts as two. [+1 Intelligence, Wisdom, or Charisma]",
	scorestxt : "+1 Intelligence, Wisdom, or Charisma",
};

FeatsList["expert forger"] = {
	name : "Expert Forger",
	source : [["HGtMH", 224]],
	descriptionFull : "An expert with my chosen tools, I can subtly alter an item’s final form. \n \u2022 When I make a Manufacturing check with a tool with which I am proficient, my proficiency bonus is doubled. \n \u2022 When I forge an item and roll for enchanting and/or manufacturing quirks, I can apply a bonus or penalty to the result of the roll equal to half my proficiency bonus. \n \u2022 Each hour I spend forging an item counts as 2 hours towards the item’s completion.",
	description : "My PB is doubled when Manufacturing check is a skill I am prof with. Can add/subtract to the result equal to half my PB for enchanting and/or manufacturing quirk. Each hour spent forging count as two.[Strength, Dexterity, or Constitution]",
	scorestxt : "+1 Strength, Dexterity, or Constitution",
};

FeatsList["field cook"] = {
	name : "Field Cook",
	source : [["HGtMH", 224]],
	descriptionFull : "Able to whip up a tasty meal from the barest ingredients, my meals fuel the resolve of the most stalwart adventurers. \n \u2022 I gain proficiency with cook’s utensils. \n \u2022 I can replace one type of ingredient in a recipe with any other ingredient type. \n \u2022 Before rolling for quirks, I can choose to replace one roll on the boon table with inspiration, granting inspiration to each creature that consumes at least one portion of my meal. \n \u2022 After rolling for quirks, I can remove one flaw of my choice, or add a boon to the dish by rolling on the boons table (my choice).",
	description : "Gain prof w/ cook’s utensils. Can replace one ingredient in a recipe. Before rolling quirk, I can choose to replace one roll on the boon w/ inspiration. After rolling quirk, I can remove one flaw of my choice/add one boon by rolling on table.",
	toolProfs: [["Cook's Utensils"]],
};

FeatsList["forgemaster"] = {
	name : "Forgemaster",
	source : [["HGtMH", 224]],
	descriptionFull : "My deftness with my tools of choice is unparalleled. \n \u2022 Increase my Strength, Dexterity, or Constitution by 1, to a maximum of 20. \n \u2022 When I make a Manufacturing check with a tool with which I am proficient, I have advantage on the roll. \n \u2022 I gain proficiency with 2 tools of my choice. \n \u2022 Each hour I spend forging an item counts as 3 hours towards the item’s completion.",
	description : "I have Adv on Manufacturing check with a tool I am prof in. I gain prof w/ two tools. Each hour spent forging counts as three. [+1 Strength, Dexterity, or Constitution]",
	scorestxt : "+1 Strength, Dexterity, or Constitution",
	toolProfs: [["Tool Proficiency", 2]],
	prerequisite : "Expert Forger feat",
	prereqeval : function(v) { return CurrentFeats.known.indexOf("expert forger") !== -1; },
};

FeatsList["jack of all tools"] = {
	name : "Jack of all Tools",
	source : [["HGtMH", 224]],
	descriptionFull : "I learn to wield tools with precision and efficiency, improvising where necessary. \n \u2022 Increase my Strength, Dexterity, or Constitution by 1, to a maximum of 20. \n \u2022 I gain proficiency with 3 tools of my choice. \n \u2022 When I make a Manufacturing check using a tool with which I am not proficient, I can add half my proficiency bonus instead, and do not suffer any disadvantage due to not having proficiency with the tool. \n \u2022 Each hour I spend manufacturing an item counts as 2 hours towards the item’s completion.",
	description : "I gain prof w/ three tools. When I make a Manufacturing check using a tool I'm not prof in, I can add half my PB and not suffer DisAdv. Each hour spent manufacturing counts as two. [+1 Strength, Dexterity, or Constitution]",
	scorestxt : "+1 Strength, Dexterity, or Constitution",
	toolProfs: [["Tool Proficiency", 3]],
};

FeatsList["weavebonder"] = {
	name : "Weavebonder",
	source : [["HGtMH", 224]],
	descriptionFull : "With a nuanced touch, I can manipulate even the smallest ebbs and flows of an item’s magic. \n \u2022 Increase my Intelligence, Wisdom, or Charisma by 1, to a maximum of 20. \n \u2022 When I make an Enchanting check with a skill with which I am proficient, I have advantage on the roll. \n \u2022 When I roll for a quirk’s random element (such as damage type, skill, or creature type), I can roll the die twice and choose either result. \n \u2022 Each hour I spend enchanting an item counts as 3 hours towards the item’s completion.",
	description : "I have Adv on Enchanting check with a skill I am prof in. When I roll for a quirk's random element, I can roll the die twice and choose either result. Each hour spent forging counts as three. [+1 Intelligence, Wisdom, or Charisma]",
	scorestxt : "+1 Intelligence, Wisdom, or Charisma",
	prerequisite : "Expert Enchanter feat",
	prereqeval : function(v) { return CurrentFeats.known.indexOf("expert enchanter") !== -1; },
};

/*
 * Harvesting Feats
 */

FeatsList["expert harvester"] = {
	name : "Expert Harvester",
	source : [["HGtMH", 225]],
	descriptionFull : "I have a knack for retrieving exceptional components from the gnarliest of corpses. \n \u2022 Increase my Dexterity or Intelligence by 1, to a maximum of 20. \n \u2022 When I make a Harvesting check using a skill with which I am proficient, my proficiency bonus is doubled. \n \u2022 When I attempt to harvest a creature for which I don’t have the required skill proficiency, I can add my proficiency bonus to the result of the roll. \n \u2022 If I am helping with a Harvesting check, I add my full proficiency bonus to the check’s result, regardless of whether I am proficient in the requisite skill. \n \u2022 I do not suffer disadvantage on my Harvesting checks as a result of choosing to perform both the Assessment and Carving checks alone.",
	description : "My PB is doubled when Harvesting check is a skill I am prof with. When I help/harvest a crea for which the required skill I don't have prof in, I can add my PB. No DisAdv on checks when harvesting alone. [+1 Dexterity or Intelligence]",
	scorestxt : "+1 Dexterity or Intelligence",
};

FeatsList["reapmaster"] = {
	name : "Reapmaster",
	source : [["HGtMH", 225]],
	descriptionFull : "Few hunters can match my knowledge and skill in obtaining pristine components. \n \u2022 Increase my Dexterity or Intelligence by 1, to a maximum of 20. \n \u2022 I gain proficiency in one skill from the following options: Arcana, Investigation, Medicine, Nature, Religion, or Survival. \n \u2022 When I make a Harvesting check using a skill with which I am proficient, I have advantage on the roll.",
	description : "I gain proficiency in one skill from the following options: Arcana, Investigation, Medicine, Nature, Religion, or Survival. I have Adv on a Harvesting check using a skill with which I am proficient [+1 Dexterity or Intelligence]",
	scorestxt : "+1 Dexterity or Intelligence",
	prerequisite : "Expert Harvester feat",
	prereqeval : function(v) { return CurrentFeats.known.indexOf("expert harvester") !== -1; },
};


/*
 * Weapons
 */


/*
 * Simple Melee Weapons
 */

// Claw
WeaponsList["claw"] = {	
	name : "Claw",
	source : [["HGtMH", 109]],	
	regExpSearch : /^(?=.*claw).*$/i,
	type : "Simple",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 6, "slashing"],
	range : "Melee",
	description : "Attached, light",
	list : "melee",
	weight : 2,
	toNotesPage: [{
		name : "Features",
		page3notes: true,
     	  	note : [
			"Attached. I can’t be disarmed of this weapon, but donning or doffing the weapon takes an action.I can use a hand equipped with this weapon to hold items, but can’t attack with the weapon while doing so. Additionally, I have disadvantage on attack rolls using other weapons held in a hand equipped with this weapon and on Sleight of Hand checks using the hand that is equipped with this weapon.",
		],
	}],
};


/*
 * Simple Ranged Weapons
 */

// Slingshot
WeaponsList["slingshot"] = {	
	name : "Slingshot",
	source : [["HGtMH", 109]],	
	regExpSearch : /^(?=.*slingshot).*$/i,
	type : "Simple",
	ability : 2,
	abilitytodamage : true,
	damage : [1, 6, "bludgeoning"],
	range : "20/60 ft",
	description : "Ammunition, two-handed",
	list : "ranged",
	weight : 0.25,
};

// Light Tommybow
WeaponsList["light tommybow"] = {	
	name : "Light Tommybow",
	source : [["HGtMH", 109]],	
	regExpSearch : /^(?=.*light)(?=.*tommybow).*$/i,
	type : "Simple",
	ability : 2,
	abilitytodamage : true,
	damage : [1, 8, "piercing"],
	range : "80/160 ft",
	description : "Ammunition, reload, two-handed",
	list : "ranged",
	weight : 0.25,
	toNotesPage: [{
		name : "Features",
		page3notes: true,
     	  	note : [
			"Tommybows are repeating crossbows that mirror the three types of normal crossbows: hand, heavy, and light. They are composed of vertically-stacked bows upon a crossbow’s chassis, an unwieldy arrangement that reduces their effective range in comparison to their crossbow counterparts.",
			"\u2022 Reload. Tommybows replace the loading property of their crossbow counterpart with the reload property. The cost of the item is proportional to the amount of ammunition it can hold (the value in parentheses), with the maximum reload (6) tommybow costing six times its crossbow equivalent’s price.",
		],
	}],
};


/*
 * Martial Melee Weapons
 */

// Nunchaku
WeaponsList["nunchaku"] = {	
	name : "Nunchaku",
	source : [["HGtMH", 109]],	
	regExpSearch : /^(?=.*nunchaku).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 6, "bludgeoning"],
	range : "Melee",
	description : "Finesse, versatile (1d8), special: flourish",
	list : "melee",
	weight : 2,
	monkweapon : true,
	toNotesPage: [{
		name : "Features",
		page3notes: true,
     	  	note : [
			"Nunchaku are martial melee weapons composed of two hard batons connected to one another by a short chain or tether. They deal 1d6 bludgeoning damage on a hit, count as monk weapons, and have the Finesse, Versatile (1d8), and Special: Flourish properties.",
			"\u2022 Special: Flourish. When I am wielding the nunchaku in two hands and take the Attack action on my turn, I can attempt to flourish with the weapon immediately before I make my first attack. To flourish, make a DC 13 Dexterity check, adding my proficiency bonus if I am proficient with nunchaku. On a success, I gain a +2 bonus to the first attack roll I make this turn. On a failure, I deal bludgeoning damage to myself equal to my proficiency bonus and gain no bonus from my flourishes this turn.",
		],
	}],
};

// Tetherhook
WeaponsList["tetherhook"] = {	
	name : "Tetherhook",
	source : [["HGtMH", 110]],	
	regExpSearch : /^(?=.*tetherhook).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 8, "piercing"],
	range : "Melee",
	description : "Reach, two-handed, special: hookpull",
	list : "melee",
	weight : 3,
	toNotesPage: [{
		name : "Features",
		page3notes: true,
     	  	note : [
			"A tetherhook is a martial melee weapon with the reach, two-handed, and Special: Hookpull properties. It is comprised of a hook attached to a chain or strap and deals 1d8 piercing damage on a hit.",
			"\u2022 Special: Hookpull. As a bns immediately after I hit a target no more than one size larger than me with an attack using the tetherhook, I can attempt to hook the target using the tetherhook’s reach. Make a STR (Athletics) check contested by the target’s STR (Athletics) or DEX (Acrobatics) check (the target chooses the ability to use). If I succeed, the target is hooked and can’t move further away from me. A hooked creature is no longer hooked if I release the tether with both hands, but only one hand is required to keep a creature hooked. A hooked creature can use its action to escape. To do so, it must succeed on a STR (Athletics) or DEX (Acrobatics) check contested by my STR (Athletics) check.",
			"	As part of the bns to hook the target, and as a bns on any of my subsequent turns while it remains hooked, I can pull the creature 5 feet closer to me. If the target is an object that isn’t fixed in place and that weighs less than my push, drag, or lift capacity, I can pull it 5 feet closer to me as a bns after I hit it with an attack.",
		],
	}],
	action : [["bonus action", "Hookpull"]],	
};

// Twinblade
WeaponsList["twinblade"] = {	
	name : "Twinblade",
	source : [["HGtMH", 110]],	
	regExpSearch : /^(?=.*twinblade).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [2, 4, "slashing"],
	range : "Melee",
	description : "Finesse, two-handed, special: whirl",
	list : "melee",
	weight : 5,
	toNotesPage: [{
		name : "Features",
		page3notes: true,
     	  	note : [
			"Twinblades are martial melee weapons; double-bladed polearms that rely on the user’s dexterity to keep them in constant motion. They have the finesse and two-handed properties, and deal 2d4 slashing damage on a hit. They also have the Special: Whirl property.",
			"\u2022 Special: Whirl. When I am wielding the twinblade in two hands, I can use a bns to attempt to whirl the weapon. To whirl, make a DC 10 DEX check, adding my proficiency bonus if I am proficient with twinblades. On a success, I gain a +1 bonus to my AC until the start of my next turn, the whirling blades acting as a barrier against attacks. On a result of 15 or higher, I gain a +2 bonus, instead. On a failure, I deal slashing damage to myself equal to my proficiency bonus and gain no bonus to my AC from the whirl this turn.",
		],
	}],
	action : [["bonus action", "Whirl"]],
};


/*
 * Martial Ranged Weapons
 */

// Hand Tommybow
WeaponsList["hand tommybow"] = {	
	name : "Hand Tommybow",
	source : [["HGtMH", 110]],	
	regExpSearch : /^(?=.*hand)(?=.*tommybow).*$/i,
	type : "Martial",
	ability : 2,
	abilitytodamage : true,
	damage : [1, 6, "piercing"],
	range : "30/60 ft",
	description : "Ammunition, light, reload",
	list : "ranged",
	weight : 4,
	toNotesPage: [{
		name : "Features",
		page3notes: true,
     	  	note : [
			"Tommybows are repeating crossbows that mirror the three types of normal crossbows: hand, heavy, and light. They are composed of vertically-stacked bows upon a crossbow’s chassis, an unwieldy arrangement that reduces their effective range in comparison to their crossbow counterparts.",
			"\u2022 Reload. Tommybows replace the loading property of their crossbow counterpart with the reload property. The cost of the item is proportional to the amount of ammunition it can hold (the value in parentheses), with the maximum reload (6) tommybow costing six times its crossbow equivalent’s price.",
		],
	}],
};

// Heavy Tommybow
WeaponsList["heavy tommybow"] = {	
	name : "Heavy Tommybow",
	source : [["HGtMH", 110]],	
	regExpSearch : /^(?=.*heavy)(?=.*tommybow).*$/i,
	type : "Martial",
	ability : 2,
	abilitytodamage : true,
	damage : [1, 10, "piercing"],
	range : "100/200 ft",
	description : "Ammunition, heavy, reload, two-handed",
	list : "ranged",
	weight : 23,
	toNotesPage: [{
		name : "Features",
		page3notes: true,
     	  	note : [
			"Tommybows are repeating crossbows that mirror the three types of normal crossbows: hand, heavy, and light. They are composed of vertically-stacked bows upon a crossbow’s chassis, an unwieldy arrangement that reduces their effective range in comparison to their crossbow counterparts.",
			"\u2022 Reload. Tommybows replace the loading property of their crossbow counterpart with the reload property. The cost of the item is proportional to the amount of ammunition it can hold (the value in parentheses), with the maximum reload (6) tommybow costing six times its crossbow equivalent’s price.",
		],
	}],
};


/*
 * Magitech Firearms
 */

// Magitech Blunderbuss
WeaponsList["magitech blunderbuss"] = {	
	name : "Magitech Blunderbuss",
	source : [["HGtMH", 110]],	
	regExpSearch : /^(?=.*magitech)(?=.*blunderbuss).*$/i,
	type : "Martial",
	ability : 2,
	abilitytodamage : true,
	damage : [3, 4, "piercing"],
	range : "20/60 ft",
	description : "Ammunition, loud (1000), reload (1), two-handed",
	list : "ranged",
	weight : 5,
	toNotesPage: [{
		name : "Features",
		page3notes: true,
     	  	note : [
			"Loud (1000). The sound of the weapon (typically a firearm) discharging alerts all hearing creatures within a number of feet as specified by the number in parentheses after the loud property. This range is doubled in echoey locations, such as cave systems, and where sound travels faster, such as underwater.",
			"Reload (1). A limited number of shots, specified by the number in parentheses after the reload property, can be made with this weapon. A character must then reload it using an action.",
		],
	}],
};

// Magitech Musket
WeaponsList["magitech musket"] = {	
	name : "Magitech Musket",
	source : [["HGtMH", 110]],	
	regExpSearch : /^(?=.*magitech)(?=.*musket).*$/i,
	type : "Martial",
	ability : 2,
	abilitytodamage : true,
	damage : [1, 10, "piercing"],
	range : "80/240 ft",
	description : "Ammunition, loud (1000), reload (1), two-handed",
	list : "ranged",
	weight : 10,
	toNotesPage: [{
		name : "Features",
		page3notes: true,
     	  	note : [
			"Loud (1000). The sound of the weapon (typically a firearm) discharging alerts all hearing creatures within a number of feet as specified by the number in parentheses after the loud property. This range is doubled in echoey locations, such as cave systems, and where sound travels faster, such as underwater.",
			"Reload (1). A limited number of shots, specified by the number in parentheses after the reload property, can be made with this weapon. A character must then reload it using an action.",
		],
	}],
};

// Magitech Pistol
WeaponsList["magitech pistol"] = {	
	name : "Magitech Pistol",
	source : [["HGtMH", 110]],	
	regExpSearch : /^(?=.*magitech)(?=.*pistol).*$/i,
	type : "Martial",
	ability : 2,
	abilitytodamage : true,
	damage : [1, 8, "piercing"],
	range : "40/120 ft",
	description : "Ammunition, loud (500), reload (2)",
	list : "ranged",
	weight : 2,
	toNotesPage: [{
		name : "Features",
		page3notes: true,
     	  	note : [
			"Loud (500). The sound of the weapon (typically a firearm) discharging alerts all hearing creatures within a number of feet as specified by the number in parentheses after the loud property. This range is doubled in echoey locations, such as cave systems, and where sound travels faster, such as underwater.",
			"Reload (2). A limited number of shots, specified by the number in parentheses after the reload property, can be made with this weapon. A character must then reload it using an action.",
		],
	}],
};

// Magitech Revolver
WeaponsList["magitech revolver"] = {	
	name : "Magitech Revolver",
	source : [["HGtMH", 110]],	
	regExpSearch : /^(?=.*magitech)(?=.*revolver).*$/i,
	type : "Martial",
	ability : 2,
	abilitytodamage : true,
	damage : [1, 10, "piercing"],
	range : "60/240 ft",
	description : "Ammunition, loud (500), reload (6)",
	list : "ranged",
	weight : 2,
	toNotesPage: [{
		name : "Features",
		page3notes: true,
     	  	note : [
			"Loud (500). The sound of the weapon (typically a firearm) discharging alerts all hearing creatures within a number of feet as specified by the number in parentheses after the loud property. This range is doubled in echoey locations, such as cave systems, and where sound travels faster, such as underwater.",
			"Reload (6). A limited number of shots, specified by the number in parentheses after the reload property, can be made with this weapon. A character must then reload it using an action.",
		],
	}],
};

// Magitech Rifle
WeaponsList["magitech rifle"] = {	
	name : "Magitech Rifle",
	source : [["HGtMH", 110]],	
	regExpSearch : /^(?=.*magitech)(?=.*rifle).*$/i,
	type : "Martial",
	ability : 2,
	abilitytodamage : true,
	damage : [1, 12, "piercing"],
	range : "120/480 ft",
	description : "Ammunition, loud (500), reload (6), two-handed",
	list : "ranged",
	weight : 8,
	toNotesPage: [{
		name : "Features",
		page3notes: true,
     	  	note : [
			"Loud (500). The sound of the weapon (typically a firearm) discharging alerts all hearing creatures within a number of feet as specified by the number in parentheses after the loud property. This range is doubled in echoey locations, such as cave systems, and where sound travels faster, such as underwater.",
			"Reload (6). A limited number of shots, specified by the number in parentheses after the reload property, can be made with this weapon. A character must then reload it using an action.",
		],
	}],
};



/*
 * Magic Items
 */

/*
 * Polyhedrooze 
 */

// Bomboozler
MagicItemsList["bomboozler"] = {
	name : "Bomboozler",
	source : [["HGtMH", 441]],
	type : "wondrous item",
	description : "Within this sturdy, corrosion-resistant polyhedron is a phial of ooze acid; a caustic substance with remarkable powers of biological alteration.",
	choices : ["rare", "very rare"],
	"rare" : {
		name : "Rare Bomboozler",
		rarity : "rare",
		description : "Within this sturdy, corrosion-resistant polyhedron is a phial of ooze acid; a caustic substance with remarkable powers of biological alteration.",
		descriptionFull : 
			"Within this sturdy, corrosion-resistant polyhedron is a phial of ooze acid; a caustic substance with remarkable powers of biological alteration."+
			"\n" + toUni("Caustic Calamity.") + " As an action, I can press a button on the polyhedron, crushing the phial, and then toss the device up to 60 feet away. The resulting chemical reaction produces an explosion of acid in a 20-foot radius. Each creature in the area must make a DC 15 Dexterity saving throw, taking 4d6 acid damage on a failed save, or half as much damage on a successful one. In addition, the reaction produces unpredictable biomantic effects on a failed saving throw. Roll a d10 and consult the table below to determine the effect. If a creature comes under an effect lasting 1 minute, it can make a DC 15 Constitution saving throw at the end of each of its turns, ending the effect on itself on a success. Once this property of the item has been used, it can’t be used again until the next dawn and a new phial of ooze acid has been installed in the device.",
		limfeaname : "Bomboozler",
		usages : 1,
		recovery : "dawn",
		additional : "requires new phial of ooze acid",
		action : [["action", ""]],
		toNotesPage: [{
			name : "Rare Bomboozler",
			source : [["HGtMH", 441]],
			note: desc([
				"Within this sturdy, corrosion-resistant polyhedron is a phial of ooze acid; a caustic substance with remarkable powers of biological alteration.",
				"Caustic Calamity. As an action, I can press a button on the polyhedron, and then toss the device up to 60 ft away. The resulting chemical reaction produces an explosion of acid in a 20-ft rad. Each crea in the area must make a DC 15 DEX save, taking 4d6 Acid dmg on a failed save; half as much damage on success. In addition, the Rea produces unpredictable biomantic effects on a failed save. Roll a d10 and consult the table below to determine the effect. If a crea comes under an effect lasting 1 min, it can make a DC 15 CON save at the end of each of its turns, ending the effect on itself on a success.",
				"Once this property of the item has been used, it can’t be used again until the next dawn and a new phial of ooze acid has been installed in the device.",
				"d10	Effect",
				"1	The creature can’t regain hit points for 1 min.",
				"2	Creature takes 2d6 Acid dmg at the start of each of its turns for 1 min.",
				"3	Creature has DisAdv on attack rolls for 1 min.",
				"4	Creature is restrained until the end of my next turn.",
				"5	Creature is blinded until the end of my next turn.",
				"6	Creature is under the effect of the faerie fire spell for 1 min.",
				"7	Creature is under the effect of the bane spell for 1 min.",
				"8	Creature is under the reduce effect of the enlarge/reduce spell for 1 min.",
				"9	Creature is under the effect of the zippit! spell for 1 min.",
				"10	Roll twice on the table, rerolling any further 10s and duplicate results.",
			]),
		}],
	},
	"very rare" : {
		name : "Very Rare Bomboozler",
		rarity : "very rare",
		description : "Within this sturdy, corrosion-resistant polyhedron is a phial of ooze acid; a caustic substance with remarkable powers of biological alteration.",
		descriptionFull : 
			"Within this sturdy, corrosion-resistant polyhedron is a phial of ooze acid; a caustic substance with remarkable powers of biological alteration."+
			"\n" + toUni("Caustic Calamity.") + " As an action, I can press a button on the polyhedron, crushing the phial, and then toss the device up to 60 feet away. The resulting chemical reaction produces an explosion of acid in a 20-foot radius. Each creature in the area must make a DC 16 Dexterity saving throw, taking 4d6 acid damage on a failed save, or half as much damage on a successful one. In addition, the reaction produces unpredictable biomantic effects on a failed saving throw. Roll a d10 twice (ignoring any duplicate results) and consult the table below to determine the effect. If a creature comes under an effect lasting 1 minute, it can make a DC 16 Constitution saving throw at the end of each of its turns, ending the effect on itself on a success. The item has the Trigger Warning property."+ "Once this property of the item has been used, it can’t be used again until the next dawn and a new phial of ooze acid has been installed in the device."+
			"\n" + toUni("Trigger Warning.") + " Instead of throwing the bomb, I can use an action to plant it on a surface and set it to detonate in a specific situation. As an action, a creature can disarm a bomb set to explode in this way with a successful DC 16 Dexterity (Sleight of Hand) check. On a failed check, the bomb goes off and the creature that made the check automatically fails the saving throw. Choose one of the following detonation options:"+
			"\n \u2022 " + toUni("Major Possession.") + " Choose a range between 0 and 20 feet. The first Small or larger creature to move within that distance of the bomb after I leave the area sets it off. A creature that succeeds on a DC 16 DEX (Stealth) check can approach the bomb without triggering it."+
			"\n \u2022 " + toUni("Time Bomb.") + " Choose an amount of time ranging from 1 to 100 rounds. On initiative count 20 of the round I choose, the bomb explodes.",
		limfeaname : "Bomboozler",
		usages : 1,
		recovery : "dawn",
		additional : "requires new phial of ooze acid",
		action : [["action", ""]],
		toNotesPage: [{
			name : "Very Rare Bomboozler",
			source : [["HGtMH", 441]],
			note: desc([
				"Within this sturdy, corrosion-resistant polyhedron is a phial of ooze acid; a caustic substance with remarkable powers of biological alteration.",
				"Caustic Calamity. As an action, I can press a button on the polyhedron, and then toss the device up to 60 ft away. The resulting chemical reaction produces an explosion of acid in a 20-ft rad. Each crea in the area must make a DC 15 DEX save, taking 4d6 Acid dmg on a failed save; half as much damage on success. In addition, the Rea produces unpredictable biomantic effects on a failed save. Roll a d10 twice (ignoring any duplicate results) and consult the table below to determine the effect. If a crea comes under an effect lasting 1 min, it can make a DC 15 CON save at the end of each of its turns, ending the effect on itself on a success. The item has the Trigger Warning property.",
				"Once this property of the item has been used, it can’t be used again until the next dawn and a new phial of ooze acid has been installed in the device.",
				"Trigger Warning. Instead of throwing the bomb, I can use an action to plant it on a surface and set it to detonate in a specific situation. As an action, a creature can disarm a bomb set to explode in this way with a successful DC 16 DEX (Sleight of Hand) check. On a failed check, the bomb goes off and the creature that made the check automatically fails the saving throw. Choose one of the following detonation options:",
				"\u2022 Major Possession. Choose a range between 0 and 20 feet. The first Small or larger creature to move within that distance of the bomb after I leave the area sets it off. A creature that succeeds on a DC 16 DEX (Stealth) check can approach the bomb without triggering it.",
				"\u2022 Time Bomb. Choose an amount of time ranging from 1 to 100 rounds. On initiative count 20 of the round I choose, the bomb explodes.",
				"d10	Effect",
				"1	The creature can’t regain hit points for 1 min.",
				"2	Creature takes 2d6 Acid dmg at the start of each of its turns for 1 min.",
				"3	Creature has DisAdv on attack rolls for 1 min.",
				"4	Creature is restrained until the end of my next turn.",
				"5	Creature is blinded until the end of my next turn.",
				"6	Creature is under the effect of the faerie fire spell for 1 min.",
				"7	Creature is under the effect of the bane spell for 1 min.",
				"8	Creature is under the reduce effect of the enlarge/reduce spell for 1 min.",
				"9	Creature is under the effect of the zippit! spell for 1 min.",
				"10	Roll twice on the table, rerolling any further 10s and duplicate results.",
			]),
		}],
	},	
};

// Caltrooze
MagicItemsList["caltrooze"] = {
	name : "Caltrooze",
	source : [["HGtMH", 442]],
	type : "wondrous item",	
	rarity : "uncommon",
	description : "A typical bag of these 1-inch health and safety nightmares contains 20 caltroozes. Small bubbles of acid forming and bursting inside the caltroozes cause them to roll and shift.",
	descriptionFull : 
		"Filled with a caustic mixture that discharges when stepped on, these tetrahedral caltrops present a much more dangerous hazard than their mundane variety. A typical bag of these 1-inch health and safety nightmares contains 20 caltroozes. Small bubbles of acid forming and bursting inside the caltroozes cause them to roll and shift."+
		"\n" + toUni("Caltrops.") + " As an action, I can spread a single bag of caltroozes to cover a 5-foot square. Any creature that enters the area must succeed on a DC 15 Dexterity saving throw or stop moving and take 1 piercing damage. Until the creature regains at least 1 hit point, its walking speed is reduced by 10 feet. A creature that moves through the area of the caltroozes at half speed makes the saving throw against them with advantage."+
		"\n" + toUni("Corrosive Chaos.") + " If a creature fails the Dexterity saving throw, roll a d4 and consult the table below to determine what additional effects take place:"+
		"\n" + "After a creature fails a saving throw against the caltroozes, they are emptied of acid, and I can’t use this property again until I spend 10 minutes decanting a phial of biomantic acid into all the caltrops. The caltroozes can still be used as regular caltrops that deal magical piercing damage.",
	action : [["action", ""]],
	toNotesPage: [{
		name : "Caltrooze",
		source : [["HGtMH", 442]],
		note: desc([
			"Filled with a caustic mixture that discharges when stepped on, these tetrahedral caltrops present a much more dangerous hazard than their mundane variety. A typical bag of these 1-inch health and safety nightmares contains 20 caltroozes. Small bubbles of acid forming and bursting inside the caltroozes cause them to roll and shift.",
			"Caltrops. As an action, I can spread a single bag of caltroozes to cover a 5-ft square. Any creature that enters the area must succeed on a DC 15 DEX save or stop moving and take 1 Piercing dmg. Until the crea regains at least 1 HP, its walking spd is reduced by 10 ft. A crea that moves through the area of the caltroozes at half spd makes the save against them with Adv.",
			"Corrosive Chaos. If a creature fails the DEX save, roll a d4 and consult the table below to determine what additional effects take place:",
			"d4	Effect",
			"1	Creature takes an additional 6d6 Acid dmg.",
			"2	While the creature’s spd is reduced by the caltroozes, it must succeed on a DC 15 DEX save at the end of each of its turns or fall prone.",
			"3	While the creature’s spd is reduced by the caltroozes, it takes 1d4 Acid dmg for every 5 ft it walks or climbs.",
			"4	While the creature’s spd is reduced by the caltroozes, it has DisAdv on DEX save.",
			"After a creature fails a save against the caltroozes, they are emptied of acid, and I can’t use this property again until I spend 10 mins decanting a phial of biomantic acid into all the caltrops. The caltroozes can still be used as regular caltrops that deal magical Piercing dmg.",
		]),
	}],	
};

// Flooze
MagicItemsList["flooze"] = {
	name : "Flooze",
	source : [["HGtMH", 443]],
	type : "weapon (flail)",
	attunement: true,
	description : "The versatility of the magically-enhanced ooze used to craft this flail can’t be overstated. Its high tensile strength allows its ‘chain’ to stretch in response to its wearer’s thoughts, while the flail’s head boasts a hardness and density comparable to steel.",
	usages : 8,
	recovery : "dawn",
	additional : "regains 1d4+4",
	choices : ["uncommon", "very rare"],
	"uncommon" : {
		name : "Uncommon Flooze",
		rarity : "uncommon",
		description : "This magic flail deals an extra 1d6 acid damage to the first target it hits on each of my turns. The flail has 8 charges and regains 1d4 + 4 expended charges daily at dawn. It has the Reachier property.",
		descriptionFull : 
			"The versatility of the magically-enhanced ooze used to craft this flail can’t be overstated. Its high tensile strength allows its ‘chain’ to stretch in response to its wearer’s thoughts, while the flail’s head boasts a hardness and density comparable to steel."+
			"\n" + "This magic flail deals an extra 1d6 acid damage to the first target it hits on each of my turns. The flail has 8 charges and regains 1d4 + 4 expended charges daily at dawn."+
			"\n" + toUni("Reachier.") + " While holding the flail, I can expend up to 4 charges (no action required) to increase my reach with this weapon by 5 feet for each charge expended until the end of my turn.",
		weaponOptions : {
			name : "Uncommon Flooze",
			baseWeapon : "flail",
			source : [["HGtMH", 443]],
			regExpSearch : /^(?=.*flooze).*$/i,
			description : "+1d6 Acid dmg on first target hit, Reachier",
			selectNow : true,
		},
	},
	"very rare" : {
		name : "Very Rare Flooze",
		rarity : "very rare",
		description : "This magic flail deals an extra 1d8 Acid damage to any target it hits. The flail has 8 charges and regains 1d4 + 4 expended charges daily at dawn. It has the Reachier property.",
		descriptionFull : 
			"The versatility of the magically-enhanced ooze used to craft this flail can’t be overstated. Its high tensile strength allows its ‘chain’ to stretch in response to its wearer’s thoughts, while the flail’s head boasts a hardness and density comparable to steel."+
			"\n" +
			"This magic flail deals an extra 1d8 Acid damage to any target it hits. The flail has 8 charges and regains 1d4 + 4 expended charges daily at dawn."+
			"\n" +
			toUni("Reachier.") +
			" While holding the flail, I can expend up to 4 charges (no action required) to increase my reach with this weapon by 5 feet for each charge expended until the end of my turn."+
			"\n" +
			toUni("Sticky Fingers.") +
			" When I hit a Medium or smaller creature that is holding a weapon or item with an attack using the flooze, I can choose to disarm it of one weapon instead of dealing damage to it. The target must succeed on a DC 16 Strength saving throw or let go of its item, which becomes stuck in the flail. A creature within reach of the flooze can use an action to make a DC 16 Strength check, liberating the stuck weapon on a success. Success or failure, a creature takes 1d4 acid damage when it takes this action. The flail can only hold 2 weapons at a time, and a nonmagical weapon that remains in the flail for 1 minute is completely dissolved. While the flail has weapons in it, I can choose to deal my choice of piercing or slashing damage with it on each hit, instead of the usual bludgeoning damage.",
		weaponOptions : {
			name : "Very Rare Flooze",
			baseWeapon : "flail",
			source : [["HGtMH", 443]],
			regExpSearch : /^(?=.*flooze).*$/i,
			description : "+1d8 Acid dmg, Reachier, Sticky Fingers",
			selectNow : true,
		},
	},
};	

// Goo Luck Dice
MagicItemsList["goo luck dice"] = {
	name : "Goo Luck Dice",
	source : [["HGtMH", 444]],
	type : "wondrous item",	
	rarity : "common",
	description : "A sticky string connects this pair of translucent dice, which jiggle enthusiastically with the slightest movement. Their vibrant colour is sure to turn heads, making them an excellent accessory.",
	descriptionFull : 
		"A sticky string connects this pair of translucent dice, which jiggle enthusiastically with the slightest movement. Their vibrant colour is sure to turn heads, making them an excellent accessory."+
		"\n" + toUni("Lucky.") + " These dice impart luck when socketed on weapons, mounts, or vehicles. Once they’ve been used to reroll a 1, they can’t be used again until the next dawn."+
		"\n \u2022 " + toUni("Flashy Fashion.") + " When applied to the handle of a weapon, its wielder can reroll a 1 on an attack roll and must use the new result."+
		"\n \u2022 " + toUni("Pimp My Ride.") + " When hung from a Small or larger object (or willing, non-humanoid creature) that is serving as a mount or vehicle, the vehicle/mount can reroll a 1 on an attack roll, ability check, or saving throw and must use the new result.",
	usages : 1,
	recovery : "dawn",
};

// Oozemat Coat
MagicItemsList["oozemat coat"] = {
	name : "Oozemat Coat",
	source : [["HGtMH", 444]],
	type : "wondrous item",	
	rarity : "rare",
	attunement: true,
	description : "Woven from an oozed-based, biosynthetic polymer, this practical garment is the number one choice for field researchers and lab workers alike. It provides the high adaptability and resilience necessary to protect its wearer from any unfortunate accidents that may occur during the noble pursuit of science.",
	descriptionFull : 
		"Woven from an oozed-based, biosynthetic polymer, this practical garment is the number one choice for field researchers and lab workers alike. It provides the high adaptability and resilience necessary to protect its wearer from any unfortunate accidents that may occur during the noble pursuit of science."+
		"\n" + toUni("Adaptive Resistance.") + " The versatile fabric of the coat is capable of modifying itself to best suit my needs. After I finish a long rest while attuned to the coat, choose one of the following damage types: acid, fire, lightning, or poison. I gain resistance to the chosen damage type until I finish my next long rest."+
		"\n" + toUni("Occupational Hazards.") + " While I wear this item, I take half of any damage I would take as the result of failing a Harvesting check.",	
};

// Slime-in-a-Skull
MagicItemsList["slime-in-a-skull"] = {
	name : "Slime-in-a-Skull",
	source : [["HGtMH", 445]],
	type : "wondrous item",
	attunement: true,
	description : "Within this humanoid skull resides a friendly ooze who wishes only to be helpful to the owner of its home. Joyful gurgling sounds can occasionally be heard emanating from the eye sockets and, very rarely, a curious eye will peek out of the mouth. The skull has 2 charges and regains all expended charges daily at dawn.",
	usages : 2,
	recovery : "dawn",
	choices : ["uncommon", "very rare"],
	"uncommon" : {
		name : "Uncommon Slime-in-a-Skull",
		rarity : "uncommon",
		description : "Within this humanoid skull resides a friendly ooze who wishes only to be helpful to the owner of its home. Joyful gurgling sounds can occasionally be heard emanating from the eye sockets and, very rarely, a curious eye will peek out of the mouth. The skull has 2 charges and regains all expended charges daily at dawn.",
		descriptionFull : 
			"Within this humanoid skull resides a friendly ooze who wishes only to be helpful to the owner of its home. Joyful gurgling sounds can occasionally be heard emanating from the eye sockets and, very rarely, a curious eye will peek out of the mouth. The skull has 2 charges and regains all expended charges daily at dawn."+
			"\n" + toUni("Summon Ooze.") + " While holding the skull, I can use an action to expend 1 charge and call forth the ooze that lives within. It expands into its normal Large size in an unoccupied space within 5 ft of me. The ooze uses the saddle slime stat block and returns to the skull when it drops to 0 HP or after 1 hr. If the ooze is reduced to 0 HP, it can’t be summoned again for 1 hr. The ooze is an ally to me and my companions. In combat, it shares my initiative count, but it takes its turn immediately after mine. It obeys my verbal commands (no action required). If I don’t issue any, it takes the Dodge action and uses its move to avoid danger.",
		creaturesAdd : [["Saddle Slime", true]],
		creatureOptions : [{
			name : "Saddle Slime",
			source : [["HGtMH", 445]],
			size : 2,
			type : "Ooze",
			alignment : "unaligned",
			ac : "8" ,
			hp : "51" ,
			hd : [],
			speed : "30 ft., climb 30 ft.",
			scores : [16, 6, 16, 5, 6, 5],
			damage_immunities : "acid",
			condition_immunities : "charmed, deafened, exhaustion, frightened, poisoned",
			senses : "Darkvision 60 ft, Blindsight 10 ft",
			passivePerception : 8,
			languages : "understands the languages its summoner speaks",
			challengeRating : "1",
			proficiencyBonus : "2",
			attacksAction : 1,
			attacks : [{
				name : "Pseudopod",
				ability : 1,
				damage : [1, 6, "bludgeoning"],
				range : "Melee",
				description : "1d6 Acid dmg",
				abilitytodamage : true,
			}],
			actions : [{
				name : "Corrode Object (3/Day)",
				description : "The ooze touches a Medium or smaller nonmagical object that isn’t being worn or carried, causing it to corrode and dissolve over the course of 1 minute.",
				joinString : "\n   ",
			}],
			features : [{
				name : "Summoner",
				description : "The ooze is an ally to me and my companions. In combat, it shares my initiative count, but it takes its turn immediately after mine. It obeys my verbal commands (no action required). If I don’t issue any, it takes the Dodge action and uses its move to avoid danger.",
			}],
			traits: [{
				name: "Born for the Saddle",
					description: "The ooze grips firmly onto any object that is inserted into its body to be used as a saddle. A creature riding the ooze on one such saddle has advantage on saving throws made to avoid being dismounted.",
				},{
				name: "Spider Climb",
					description: "The ooze can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
			}],	
			header : "Summon",	
		}],	
	},
	"very rare" : {
		name : "Very Rare Slime-in-a-Skull",
		rarity : "very rare",
		description : "The skull has 2 charges and regains all expended charges daily at dawn. When the ooze is summoned, the skull is enlarged and serves as a skeletal structure for it. The ooze uses the wyrmskull ooze stat block.",
		descriptionFull : 
			"Within this magically shrunk wyvern’s skull resides a friendly ooze who wishes only to be helpful to the owner of its home. Joyful gurgling sounds can occasionally be heard emanating from the eye sockets and, very rarely, a curious eye will peek out of the mouth. The skull has 2 charges and regains all expended charges daily at dawn."+
			"\n" + toUni("Summon Ooze.") + " While holding the skull, I can use an action to expend 1 charge and call forth the ooze that lives within. It expands into its normal Large size in an unoccupied space within 5 ft of me. The ooze uses the wyrmskull ooze stat block and returns to the skull when it drops to 0 HP or after 1 hr. If the ooze is reduced to 0 HP, it can’t be summoned again for 1 hr. The ooze is an ally to me and my companions. In combat, it shares my initiative count, but it takes its turn immediately after mine. It obeys my verbal commands (no action required). If I don’t issue any, it takes the Dodge action and uses its move to avoid danger.",
		creaturesAdd : [["Wyrmskull Ooze", true]],
		creatureOptions : [{
			name : "Wyrmskull Ooze",
			source : [["HGtMH", 446]],
			size : 2,
			type : "Ooze",
			alignment : "unaligned",
			ac : "13" ,
			hp : "114" ,
			hd : [],
			speed : "30 ft., climb 30 ft.",
			scores : [18, 9, 18, 7, 10, 5],
			damage_immunities : "acid",
			condition_immunities : "charmed, deafened, exhaustion, frightened, poisoned",
			senses : "Darkvision 60 ft, Blindsight 30 ft",
			passivePerception : 13,
			languages : "understands the languages its summoner speaks",
			challengeRating : "3",
			proficiencyBonus : "2",
			attacksAction : 2,
			attacks : [{
				name : "Bite",
				ability : 1,
				damage : [1, 8, "piercing"],
				range : "Melee",
				description : "Grappled on hit (DC 14 escape), grappled crea, 1d6 Acid dmg at start of its turn. Only one grapple at at time, can't bite",
				abilitytodamage : true,
			},{
				name : "Pseudopod",
				ability : 1,
				damage : [1, 6, "bludgeoning"],
				range : "Melee",
				description : "1d6 Acid dmg",
				abilitytodamage : true,
			}],
			actions : [{
				name : "Corrode Object (3/Day)",
				description : "The ooze touches a Medium or smaller nonmagical object that isn’t being worn or carried, causing it to corrode and dissolve over the course of 1 minute.",
				joinString : "\n   ",
			}],
			features : [{
				name : "Summoner",
				description : "The ooze is an ally to me and my companions. In combat, it shares my initiative count, but it takes its turn immediately after mine. It obeys my verbal commands (no action required). If I don’t issue any, it takes the Dodge action and uses its move to avoid danger.",
			}],
			traits: [{
				name: "Spider Climb",
					description: "The ooze can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
			}],	
			header : "Summon",	
		}],	
	},
};

// Ventilation Unit D-20
MagicItemsList["ventilation unit d-20"] = {
	name : "Ventilation Unit D-20",
	source : [["HGtMH", 446]],
	type : "wondrous item",	
	rarity : "rare",
	attunement: true,
	description : "This icosahedral helmet has two chemicals that are distilled from the ooze, piped through the tubes, and mixed together into an oxygen analogue, allowing its wearer to breathe in otherwise impossible conditions.",
	descriptionFull : 
		"A magically-refilling reservoir of ooze is contained within this icosahedral helmet. Two chemicals are distilled from the ooze, piped through the tubes, and mixed together into an oxygen analogue, allowing its wearer to breathe in otherwise impossible conditions."+
		"\n" + toUni("Breathe Easy.") + " While wearing this helmet, I can breathe normally in any environment, and I have Adv on saves made against harmful gases and vapours that I inhale (such as the stinking cloud effect, inhaled poisons, and the breath weapons of some dragons, but not contact toxins like cloudkill)."+
		"\n" + toUni("Biomantic Overload.") + " While wearing this helmet, I can use a Bns to ingest the chemicals in it before they are combined into a gas, causing my body to go into a mutated state of enhanced adaptability for 1 min. During this time, immediately after I take damage from any source, I gain resistance to that dmg type. This resistance lasts until I take damage of another type (at which point I gain resistance to that new damage type) or until the effect ends. If I take damage of multiple types simultaneously, the damage type to which I become resistant is determined randomly (GM’s discretion). Once this property of the helmet has been used, it can’t be used again until the next dawn.",
	usages : 1,
	recovery : "dawn",	
};

/*
 * The Shining Shrine
 */
// Bonze’s Bokken, Wind Ripper
MagicItemsList["bonze’s bokken, wind ripper"] = {
	name : "Bonze’s Bokken, Wind Ripper",
	source : [["RGttYR", 245]],
	type : "weapon (any sword)",	
	attunement : true,
	description : "This weapon has 5 charges and regains 1d4 + 1 expended charges daily at dawn. It deals bludgeoning damage instead of its normal damage type.",
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && /^(?=.*bonze)(?=.*bokken)(?=.*wind)(?=.*ripper).*$/i.test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Damage_Type = "Bludgeoning";
				}
			},
			'It deals bludgeoning damage instead of its normal damage type.',
			1
		],
	},
	choices : ["uncommon", "rare", "very rare", "legendary"],
	"uncommon" : {
		name : "Uncommon Bonze’s Bokken, Wind Ripper",
		rarity : "uncommon",
		description : "This weapon has 5 charges and regains 1d4 + 1 expended charges daily at dawn. It deals bludgeoning damage instead of its normal damage type.",
		descriptionFull : 
			"This weapon has 5 charges and regains 1d4 + 1 expended charges daily at dawn. It deals bludgeoning damage instead of its normal damage type." +
			"\n" + toUni("Gale.") + " While holding this sword, I can use an action to cause strong winds to swirl within a cube originating from me up to 15 feet on a side until the end of my next turn, dispersing any gases in the area. The cube does not move with me." +
			"\n" + toUni("Wind Rip.") + " With a swish, I can send a concussive wave of sound streaking towards a target. When I take the Attack action with this sword, I can replace any number of attacks with ranged spell attacks known as ‘wind rips’. Wind rips have a normal range of 30 feet and a long range of 60 feet, use the same ability modifier as the sword for its attack rolls, deal 1d8 thunder damage on a hit, and can be heard up to 100 feet away. If I score a critical hit against a creature with a wind rip, that creature is deafened until the end of its next turn.",
		usages : 5,
		recovery : "dawn",
		additional : "regains 1d4+1",
		chooseGear : {
		type : "weapon",
		prefixOrSuffix : "brackets",
		descriptionChange : ["replace", "sword"],
		itemName1stPage : ["brackets ", "Bonze’s Bokken, Wind Ripper"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /sword|scimitar|rapier/i;
			return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
			}
		},
		action : [["action","Gale"]],
	},
	"rare" : {
		name : "Rare Bonze’s Bokken, Wind Ripper",
		rarity : "rare",
		description : "This weapon has 5 charges and regains 1d4 + 1 expended charges daily at dawn. It deals bludgeoning damage instead of its normal damage type.",
		descriptionFull : 
			"This weapon has 5 charges and regains 1d4 + 1 expended charges daily at dawn. It deals bludgeoning damage instead of its normal damage type." +
			"\n" + toUni("Gale.") + " While holding this sword, I can use an action to cause strong winds to swirl within a cube originating from me up to 15 feet on a side until the end of my next turn, dispersing any gases in the area. The cube does not move with me." +
			"\n" + toUni("Wind Rip.") + " With a swish, I can send a concussive wave of sound streaking towards a target. When I take the Attack action with this sword, I can replace any number of attacks with ranged spell attacks known as ‘wind rips’. Wind rips have a normal range of 30 feet and a long range of 60 feet, use the same ability modifier as the sword for its attack rolls, deal 1d10 thunder damage on a hit, and can be heard up to 100 feet away. If I score a critical hit against a creature with a wind rip, that creature is deafened until the end of its next turn." +
			"\n" + toUni("Gust Rider.") + " As a bonus action while holding the sword, I can expend 1 charge, causing a sustained gust to lift me. I gain a flying speed of 40 feet until the end of my turn.",	
		usages : 5,
		recovery : "dawn",
		additional : "regains 1d4+1",
		chooseGear : {
		type : "weapon",
		prefixOrSuffix : "brackets",
		descriptionChange : ["replace", "sword"],
		itemName1stPage : ["brackets ", "Bonze’s Bokken, Wind Ripper"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /sword|scimitar|rapier/i;
			return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
			}
		},
		action : [["bonus action", "Gust Rider (1 charge)"],["action","Gale"]],
	},
	"very rare" : {
		name : "Very Rare Bonze’s Bokken, Wind Ripper",
		rarity : "very rare",
		description : "This weapon has 5 charges and regains 1d4 + 1 expended charges daily at dawn. It deals bludgeoning damage instead of its normal damage type.",
		descriptionFull : 
			"This weapon has 5 charges and regains 1d4 + 1 expended charges daily at dawn. It deals bludgeoning damage instead of its normal damage type." +
			"\n" + toUni("Gale.") + " While holding this sword, I can use an action to cause strong winds to swirl within a cube originating from me up to 15 feet on a side until the end of my next turn, dispersing any gases in the area. The cube does not move with me." +
			"\n" + toUni("Wind Rip.") + " With a swish, I can send a concussive wave of sound streaking towards a target. When I take the Attack action with this sword, I can replace any number of attacks with ranged spell attacks known as ‘wind rips’. Wind rips have a normal range of 30 feet and a long range of 60 feet, use the same ability modifier as the sword for its attack rolls, deal 1d12 thunder damage on a hit, and can be heard up to 100 feet away. If I score a critical hit against a creature with a wind rip, that creature is deafened until the end of its next turn." +
			"\n" + toUni("Gust Rider.") + " As a bonus action while holding the sword, I can expend 1 charge, causing a sustained gust to lift me. I gain a flying speed of 50 feet until the end of my turn.",	
		usages : 5,
		recovery : "dawn",
		additional : "regains 1d4+1",
		chooseGear : {
		type : "weapon",
		prefixOrSuffix : "brackets",
		descriptionChange : ["replace", "sword"],
		itemName1stPage : ["brackets ", "+1", "Bonze’s Bokken, Wind Ripper"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /sword|scimitar|rapier/i;
			return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
			}
		},
		action : [["bonus action","Gust Rider (1 charge)"],["action","Gale"]],
	},
	"legendary" : {
		name : "Legendary Bonze’s Bokken, Wind Ripper",
		rarity : "legendary",
		description : "This weapon has 5 charges and regains 1d4 + 1 expended charges daily at dawn. It deals bludgeoning damage instead of its normal damage type.",
		descriptionFull : 
			"This weapon has 5 charges and regains 1d4 + 1 expended charges daily at dawn. It deals bludgeoning damage instead of its normal damage type." +
			"\n" + toUni("Gale.") + " While holding this sword, I can use an action to cause strong winds to swirl within a cube originating from me up to 15 feet on a side until the end of my next turn, dispersing any gases in the area. The cube does not move with me." +
			"\n" + toUni("Wind Rip.") + " With a swish, I can send a concussive wave of sound streaking towards a target. When I take the Attack action with this sword, I can replace any number of attacks with ranged spell attacks known as ‘wind rips’. Wind rips have a normal range of 30 feet and a long range of 60 feet, use the same ability modifier as the sword for its attack rolls, deal 1d12 thunder damage on a hit, and can be heard up to 100 feet away. If I score a critical hit against a creature with a wind rip, that creature is deafened until the end of its next turn." +
			"\n" + toUni("Gust Rider.") + " As a bonus action while holding the sword, I can expend 1 charge, causing a sustained gust to lift me. I gain a flying speed of 50 feet until the end of my turn." +
			"\n" + toUni("Fly.") + " While holding the sword, I can expend 2 charges to cast the fly spell on myself.",	
		usages : 5,
		recovery : "dawn",
		additional : "regains 1d4+1",
		chooseGear : {
		type : "weapon",
		prefixOrSuffix : "brackets",
		descriptionChange : ["replace", "sword"],
		itemName1stPage : ["brackets ", "+2", "Bonze’s Bokken, Wind Ripper"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /sword|scimitar|rapier/i;
			return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
			}
		},
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && /^(?=.*bonze)(?=.*bokken)(?=.*wind)(?=.*ripper).*$/i.test(v.WeaponTextName)) {
						v.theWea.isMagicWeapon = true;
						fields.Damage_Type = "Bludgeoning";
					}
				},
				'It deals bludgeoning damage instead of its normal damage type.',
				1
			],
		},
		action : [["bonus action","Gust Rider (1 charge)"],["action","Gale"]],
		languageProfs : ["Auran"],
		spellFirstColTitle : "Ch",
		spellcastingBonus: [{
		name: "2 charge",
		spells: ["fly"],
		selection: ["fly"],
		firstCol: 2,
		}],
	},
};

// Ring of Birdseye Maple
MagicItemsList["ring of birdseye maple"] = {
	name : "Ring of Birdseye Maple",
	source : [["HGtMH", 448]],
	type : "Ring",	
	choices : ["uncommon", "uncommon (optional attunement)"],
	"uncommon" : {
		name : "Uncommon Ring of Birdseye Maple",
		rarity : "uncommon",
		description : "This ring has 5 charges and regains 1d4 + 1 expended charges daily at dawn. While wearing the ring, whenever I touch a plant or wooden surface, I can expend 1 charge to cause an eye to grow anywhere on that plant/surface within 60 feet of me. The eye lasts for 1 hour or until I cease touching the plant/surface, whichever comes first. I can see out of the eye, which has darkvision out to 60 feet, for as long as I remain touching the plant/surface. While I look out of the eye, I am blinded with regards to my own senses.",
		descriptionFull : 
			"This ring has 5 charges and regains 1d4 + 1 expended charges daily at dawn. While wearing the ring, whenever I touch a plant or wooden surface, I can expend 1 charge to cause an eye to grow anywhere on that plant/surface within 60 feet of me. The eye lasts for 1 hour or until I cease touching the plant/surface, whichever comes first. I can see out of the eye, which has darkvision out to 60 feet, for as long as I remain touching the plant/surface. While I look out of the eye, I am blinded with regards to my own senses."+
			"\n" + "The eye has a Dexterity (Stealth) modifier of +8. It has AC 10 and 5 hit points. For any damage dealt to the eye, I also take as psychic damage. When the eye is reduce to 0 hit points, it disappears and the effect ends.",
		usages : 5,
		recovery : "dawn",
		additional : "regains 1d4+1",	
	},
	"uncommon (optional attunement)" : {
		name : "Uncommon Ring of Birdseye Maple (OA)",
		rarity : "uncommon",
		description : "This ring has 5 charges and regains 1d4 + 1 expended charges daily at dawn. While wearing the ring, whenever I touch a plant or wooden surface, I can expend 1 charge to cause an eye to grow anywhere on that plant/surface within 60 feet of me. The eye lasts for 1 hour or until I cease touching the plant/surface, whichever comes first. I can see out of the eye, which has darkvision out to 60 feet, for as long as I remain touching the plant/surface. While I look out of the eye, I am blinded with regards to my own senses.",
		descriptionFull : 
			"This ring has 5 charges and regains 1d4 + 1 expended charges daily at dawn. While wearing the ring, whenever I touch a plant or wooden surface, I can expend 1 charge to cause an eye to grow anywhere on that plant/surface within 60 feet of me. The eye lasts for 1 hour or until I cease touching the plant/surface, whichever comes first. I can see out of the eye, which has darkvision out to 60 feet, for as long as I remain touching the plant/surface. While I look out of the eye, I am blinded with regards to my own senses."+
			"\n" + "The eye has a Dexterity (Stealth) modifier of +8. It has AC 10 and 5 hit points. For any damage dealt to the eye, I also take as psychic damage. When the eye is reduce to 0 hit points, it disappears and the effect ends."+
			"\n" + "\u2022 Optional Attunement. While I am attuned to the ring, if I stop touching the plant/surface in which I have grown an eye, the eye persists for 1 hour or until I create a new eye. In addition, it gains the Eyesoar property."+
			"\n" + toUni("OA: Eyesoar.") + "\u2022 So long as the eye is within 300 feet of me, I can use an action to look through the eye. While looking through the eye, I can use my action to move the eye up to 30 feet along the plant/surface.",
		usages : 5,
		recovery : "dawn",
		additional : "regains 1d4+1",	
	},
};

// Suncatcher
MagicItemsList["suncatcher"] = {
	name : "Suncatcher",
	source : [["HGtMH", 448]],
	type : "Rod, staff, wand",	
	attunement: true,
	prerequisite: "Requires attunement by a spellcaster",
	prereqeval: function (v) { return v.isSpellcaster; },
	description : "This weapon has 7 charges. It regains 1 expended charge for each hour it spends in direct sunlight and 1d6 + 1 expended charges daily at dawn.",
	usages : 7,
	recovery : "dawn",
	additional : "regains 1d6+1",
	savetxt : {
		adv_vs : ["charmed"],
	},
	choices : ["uncommon", "rare", "very rare"],
	"uncommon" : {
		name : "Uncommon Suncatcher",
		rarity : "uncommon",
		description : "This weapon has 7 charges. It regains 1 expended charge for each hour it spends in direct sunlight and 1d6 + 1 expended charges daily at dawn.",
		descriptionFull : 
			"This weapon has 7 charges. It regains 1 expended charge for each hour it spends in direct sunlight and 1d6 + 1 expended charges daily at dawn."+
			"\n" + toUni("Radiant Absorption.") + " When a creature within 30 ft of me takes radiant damage, I can use my reaction to expend 1 charge and absorb some of the energy. The damage the creature takes is reduced by 1d8 plus my spellcasting ability modifier (minimum reduction of 1)." +
			"\n" + toUni("Radiant Deliverance.") + " When I hit a target with a spell attack while holding the suncatcher, I can spend up to 3 charges to imbue the attack with radiant energy. On a hit, the attack deals an additional 1d6 radiant damage per charge expended."+
			"\n" + toUni("Dreamcatcher.") + " While attuned to the suncatcher, I am aware when a creature is using the dream spell to contact me and can choose to end the spell early.",
	},
	"rare" : {
		name : "Rare Suncatcher",
		rarity : "rare",
		description : "This weapon has 7 charges. It regains 1 expended charge for each hour it spends in direct sunlight and 1d6 + 1 expended charges daily at dawn.",
		descriptionFull : 
			"This weapon has 7 charges. It regains 1 expended charge for each hour it spends in direct sunlight and 1d6 + 1 expended charges daily at dawn."+
			"\n" + toUni("Radiant Absorption.") + " When a creature within 30 ft of me takes radiant damage, I can use my reaction to expend 1 charge and absorb some of the energy. The damage the creature takes is reduced by 2d8 plus my spellcasting ability modifier (minimum reduction of 1)." +
			"\n" + toUni("Radiant Deliverance.") + " When I hit a target with a spell attack while holding the suncatcher, I can spend up to 3 charges to imbue the attack with radiant energy. On a hit, the attack deals an additional 1d6 radiant damage per charge expended."+
			"\n" + toUni("Dreamcatcher.") + " While attuned to the suncatcher, I am aware when a creature is using the dream spell to contact me and can choose to end the spell early.",
		spellFirstColTitle: "Ch",
		spellcastingAbility: "class",
		spellcastingBonus: [{
			name: "cantrip",
			spells: ["flare", "light"],
			selection: ["flare", "light"],
			firstCol: "atwill",
		},{
			name: "1 charge",
			spells: ["daydream"],
			selection: ["daydream"],
			firstCol: 1,
		}],
	},
	"very rare" : {
		name : "Very Rare Suncatcher",
		rarity : "rare",
		description : "This weapon has 7 charges. It regains 1 expended charge for each hour it spends in direct sunlight and 1d6 + 1 expended charges daily at dawn.",
		descriptionFull : 
			"This weapon has 7 charges. It regains 1 expended charge for each hour it spends in direct sunlight and 1d6 + 1 expended charges daily at dawn."+
			"\n" + toUni("Radiant Absorption.") + " When a creature within 30 ft of me takes radiant damage, I can use my reaction to expend 1 charge and absorb some of the energy. The damage the creature takes is reduced by 3d8 plus my spellcasting ability modifier (minimum reduction of 1)." +
			"\n" + toUni("Radiant Deliverance.") + " When I hit a target with a spell attack while holding the suncatcher, I can spend up to 3 charges to imbue the attack with radiant energy. On a hit, the attack deals an additional 1d6 radiant damage per charge expended."+
			"\n" + toUni("Dreamcatcher.") + " While attuned to the suncatcher, I am aware when a creature is using the dream spell to contact me and can choose to end the spell early.",
		spellFirstColTitle: "Ch",
		spellcastingAbility: "class",
		spellcastingBonus: [{
			name: "cantrip",
			spells: ["flare", "light"],
			selection: ["flare", "light"],
			firstCol: "atwill",
		},{
			name: "1 charge",
			spells: ["daydream"],
			selection: ["daydream"],
			firstCol: 1,
		},{
			name: "4 charges",
			spells: ["blinding radiance"],
			selection: ["blinding radiance"],
			firstCol: 4,
		}],
	},	
};

// Suneater Featherfrond
MagicItemsList["suneater featherfrond"] = {
	name : "Suneater Featherfrond",
	source : [["HGtMH", 450]],
	type : "wondrous item",
	rarity : "common",
	description : "Sun Torch. As a bonus action, I can light or snuff out the featherfrond. While lit, it sheds bright light in a 20-foot radius and dim light for an additional 20 feet.",
	descriptionFull : 
		"When this featherfrond is socketed on a holdable or wearable item, the item becomes augmented and attuneable. The item gains the Sun Torch property for as long as a creature is attuned to it."+
		"\n" + toUni("Sun Torch.") + " As a bonus action, I can light or snuff out the featherfrond. While lit, it sheds bright light in a 20-foot radius and dim light for an additional 20 feet.",
	action : [["bonus action","Sun Torch"]],
};

// Sunfeather Shroud
MagicItemsList["sunfeather shroud"] = {
	name : "Sunfeather Shroud",
	source : [["HGtMH", 450]],
	type : "wondrous item",	
	attunement: true,
	description : "The feathers of a suneater owlbear possess a brilliant dichromatic effect causing it to sparkle in the sunlight, conferring the ability to dance between patches of sunlight. Particularly well-crafted specimens can augment the magic of the featherfronds, allowing them to generate blinding flashes of light.",
	choices : ["uncommon", "rare", "very rare"],
	"uncommon" : {
		name : "Uncommon Sunfeather Shroud",
		rarity : "uncommon",
		description : "The Sunfeather Shroud has the Sunstep property.",
		descriptionFull : 
			"The feathers of a suneater owlbear possess a brilliant dichromatic effect causing it to sparkle in the sunlight, conferring the ability to dance between patches of sunlight. Particularly well-crafted specimens can augment the magic of the featherfronds, allowing them to generate blinding flashes of light."+
			"\n" + toUni("Sunstep.") + " When I am in bright light, I can use a bonus action to teleport up to 60 feet to an unoccupied space I can see that is also in bright light. When I do so, roll a d6. On a 1, I can’t use the Sunstep property again until the next dawn.",
	},
	"rare" : {
		name : "Rare Sunfeather Shroud",
		rarity : "rare",
		description : "The Sunfeather Shroud has the Sunstep property and the Blinding Flash. While I wear this shroud, I have advantage on Intimidation checks.",
		descriptionFull : 
			"The feathers of a suneater owlbear possess a brilliant dichromatic effect causing it to sparkle in the sunlight, conferring the ability to dance between patches of sunlight. Particularly well-crafted specimens can augment the magic of the featherfronds, allowing them to generate blinding flashes of light."+
			"\n" + toUni("Sunstep.") + " When I am in bright light, I can use a bonus action to teleport up to 60 feet to an unoccupied space I can see that is also in bright light. When I do so, roll a d6. On a 1, I can’t use the Sunstep property again until the next dawn."+
			"\n" + "While I wear this shroud, I have advantage on Intimidation checks."+
			"\n" + toUni("Blinding Flash.") + " As an action, I can cause the featherfronds to erupt in a dazzling display of bright light. Each creature within 15 feet of me must succeed on a DC 15 Constitution saving throw or be blinded for 1 minute. A blinded creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Once I activate this property, I can’t do so again until the shroud spends at least 1 hour absorbing bright, direct daylight.",
	},
	"very rare" : {
		name : "Very Rare Sunfeather Shroud",
		description : "The Sunfeather Shroud has the Sunstep property and the Blinding Flash. While I wear this shroud, I have advantage on Intimidation checks and resistance to radiant damage.",
		descriptionFull : 
			"The feathers of a suneater owlbear possess a brilliant dichromatic effect causing it to sparkle in the sunlight, conferring the ability to dance between patches of sunlight. Particularly well-crafted specimens can augment the magic of the featherfronds, allowing them to generate blinding flashes of light."+
			"\n" + toUni("Sunstep.") + " When I am in bright light, I can use a bonus action to teleport up to 60 feet to an unoccupied space I can see that is also in bright light."+
			"\n" + "While I wear this shroud, I have advantage on Intimidation checks and resistance to radiant damage."+
			"\n" + toUni("Blinding Flash.") + " As an action, I can cause the featherfronds to erupt in a dazzling display of bright light. Each creature within 15 feet of me must succeed on a DC 15 Constitution saving throw or be blinded for 1 minute. A blinded creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Once I activate this property, I can’t do so again until the shroud spends at least 1 hour absorbing bright, direct daylight.",
		dmgres : ["Radiant"],
	},	
};

// Sunwing Bow
MagicItemsList["sunwing bow"] = {
	name : "Sunwing Bow",
	nameTest : "Sunwing",
	source : [["HGtMH", 452]],
	type : "weapon (any bow)",
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && /bow/i.test(v.baseWeaponName) && /sunwing/i.test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
				}
			},
			'If I include the word "Sunwing" in the name of a bow, it will be treated as the magic weapon Sunwing Bow.'
		],
	},
	choices : ["uncommon", "rare", "rare (optional attunement)", "very rare", "very rare (optional attunement)"],
	"uncommon" : {
		name : "Uncommon Sunwing Bow",
		rarity : "uncommon",
		description : "The Sunwing Bow is a +2 bow with the Sunshot and Irradiation properties.",
		usages : 3,
		recovery : "dawn",
		additional : "regains 1",
		descriptionFull : 
			"Sinew harvested from a suneater owlbear’s spine can imbue arrows with low-level radiation, which is passed onto a target when struck by the ammunition. The magic of suneater respiration lies in their photometabolism; they can convert sunlight into pure, concentrated radiant energy, unleashing unholy beams of destructive force."+
			"\n" + "I gain a +1 bonus to attack and damage rolls made with this magic weapon."+
			"\n" + toUni("Sunshot.") + " While in sunlight, this bow doesn’t need ammunition. If I draw this weapon’s bowstring without nocking an arrow, it produces its own ammunition, automatically creating a radiant arrow when I make a ranged attack with it. The attack deals radiant damage instead of the weapon’s normal damage. The arrow created by this weapon vanishes the instant after it hits or misses a target."+
			"\n" + toUni("Irradiation.") +	" A creature that takes radiant damage from this bow becomes magically marked for 1 hour. During this time, it leaves an invisible trail that can be seen by creatures with truesight or creatures using the detect magic spell. The trail fades after 1 hour.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : "brackets",
			itemName1stPage : ["suffix", "Rare Sunwing"],
			descriptionChange : ["replace", "bow"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /bow/i;
				return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
			}
		},
		calcChanges : {
			atkCalc : [
				function (fields, v, output) {
					if (!v.theWea.isMagicWeapon && v.isRangedWeapon && /bow/i.test(v.baseWeaponName) && /^(?=.*sunwing).*$/i.test(v.WeaponTextName)) {
						v.theWea.isMagicWeapon = true;
						output.magic = v.thisWeapon[1] + 1;
					}
				}, ''
			]
		},
	},
	"rare" : {
		name : "Rare Sunwing Bow",
		rarity : "rare",
		description : "The Sunwing Bow is a +2 bow with the Sunshot and Irradiation properties.",
		usages : 3,
		recovery : "dawn",
		additional : "regains 1",
		descriptionFull : 
			"Sinew harvested from a suneater owlbear’s spine can imbue arrows with low-level radiation, which is passed onto a target when struck by the ammunition. The magic of suneater respiration lies in their photometabolism; they can convert sunlight into pure, concentrated radiant energy, unleashing unholy beams of destructive force."+
			"\n" + "I gain a +2 bonus to attack and damage rolls made with this magic weapon."+
			"\n" + toUni("Sunshot.") + " While in sunlight, this bow doesn’t need ammunition. If I draw this weapon’s bowstring without nocking an arrow, it produces its own ammunition, automatically creating a radiant arrow when I make a ranged attack with it. The attack deals radiant damage instead of the weapon’s normal damage. The arrow created by this weapon vanishes the instant after it hits or misses a target."+
			"\n" + toUni("Irradiation.") + " A creature that takes radiant damage from this bow becomes magically marked for 1 hour. During this time, it leaves an invisible trail that can be seen by creatures with truesight or creatures using the detect magic spell. The trail fades after 1 hour.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : "brackets",
			itemName1stPage : ["suffix", "Rare Sunwing"],
			descriptionChange : ["replace", "bow"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /bow/i;
				return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
			}
		},
		calcChanges : {
			atkCalc : [
				function (fields, v, output) {
					if (!v.theWea.isMagicWeapon && v.isRangedWeapon && /bow/i.test(v.baseWeaponName) && /^(?=.*sunwing).*$/i.test(v.WeaponTextName)) {
						v.theWea.isMagicWeapon = true;
						output.magic = v.thisWeapon[1] + 2;
					}
				}, ''
			]
		},
	},
	"rare (optional attunement)" : {
		name : "Rare Sunwing Bow (OA)",
		rarity : "rare",
		attunement: true,
		description : "The Sunwing Bow is a +2 bow with the Sunshot, Irradiation, and OA: Solar Beam properties.",
		usages : 3,
		recovery : "dawn",
		additional : "regains 1",
		action : ["action", "Solar Beam"],
		descriptionFull : 
			"Sinew harvested from a suneater owlbear’s spine can imbue arrows with low-level radiation, which is passed onto a target when struck by the ammunition. The magic of suneater respiration lies in their photometabolism; they can convert sunlight into pure, concentrated radiant energy, unleashing unholy beams of destructive force."+
			"\n" + "I gain a +2 bonus to attack and damage rolls made with this magic weapon."+
			"\n" + toUni("Sunshot.") + " While in sunlight, this bow doesn’t need ammunition. If I draw this weapon’s bowstring without nocking an arrow, it produces its own ammunition, automatically creating a radiant arrow when I make a ranged attack with it. The attack deals radiant damage instead of the weapon’s normal damage. The arrow created by this weapon vanishes the instant after it hits or misses a target."+
			"\n" + toUni("Irradiation.") + " A creature that takes radiant damage from this bow becomes magically marked for 1 hour. During this time, it leaves an invisible trail that can be seen by creatures with truesight or creatures using the detect magic spell. The trail fades after 1 hour."+
			"\n" + toUni("Optional Attunement.") +	" If I choose to attune to this weapon, it gains the Solar Beam property and has 3 charges. The sunwing bow regains 1 expended charge daily at dawn. If it is exposed to dawn’s light, it regains all expended charges instead."+
			"\n" + toUni("OA: Solar Beam.") + " As an action, I can expend 1 charge to fire a beam of solar energy in a 5-footwide, 60-foot-long line originating from me. Each creature in the area must make a DC 15 Dexterity saving throw, taking 3d8 radiant damage on a failed save, or half as much damage on a successful one.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : "brackets",
			itemName1stPage : ["between", "Rare Sunwing", "(OA)"],
			descriptionChange : ["replace", "bow"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /bow/i;
				return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
			}
		},
		calcChanges : {
			atkCalc : [
				function (fields, v, output) {
					if (!v.theWea.isMagicWeapon && v.isRangedWeapon && /bow/i.test(v.baseWeaponName) && /^(?=.*sunwing).*$/i.test(v.WeaponTextName)) {
						v.theWea.isMagicWeapon = true;
						output.magic = v.thisWeapon[1] + 2;
					}
				}, ''
			]
		},
	},
	"very rare" : {
		name : "Very Rare Sunwing Bow",
		rarity : "very rare",
		description : "The Sunwing Bow is a +3 bow with the Sunshot, Irradiation, and OA: Solar Beam properties.",
		usages : 3,
		recovery : "dawn",
		additional : "regains 1",
		descriptionFull : 
			"Sinew harvested from a suneater owlbear’s spine can imbue arrows with low-level radiation, which is passed onto a target when struck by the ammunition. The magic of suneater respiration lies in their photometabolism; they can convert sunlight into pure, concentrated radiant energy, unleashing unholy beams of destructive force."+
			"\n" +
			"I gain a +3 bonus to attack and damage rolls made with this magic weapon."+
			"\n" +
			toUni("Sunshot.") +
			" While in sunlight, this bow doesn’t need ammunition. If I draw this weapon’s bowstring without nocking an arrow, it produces its own ammunition, automatically creating a radiant arrow when I make a ranged attack with it. The attack deals radiant damage instead of the weapon’s normal damage. The arrow created by this weapon vanishes the instant after it hits or misses a target."+
			"\n" +
			toUni("Irradiation.") +	
			" A creature that takes radiant damage from this bow becomes magically marked for 1 hour. During this time, it leaves an invisible trail that can be seen by creatures with truesight or creatures using the detect magic spell. The trail fades after 1 hour.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : "brackets",
			itemName1stPage : ["suffix", "Rare Sunwing"],
			descriptionChange : ["replace", "bow"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /bow/i;
				return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
			}
		},
		calcChanges : {
			atkCalc : [
				function (fields, v, output) {
					if (!v.theWea.isMagicWeapon && v.isRangedWeapon && /bow/i.test(v.baseWeaponName) && /^(?=.*sunwing).*$/i.test(v.WeaponTextName)) {
						v.theWea.isMagicWeapon = true;
						output.magic = v.thisWeapon[1] + 3;
					}
				}, ''
			]
		},
	},
	"very rare (optional attunement)" : {
		name : "Very Rare Sunwing Bow (OA)",
		rarity : "very rare",
		attunement: true,
		description : "The Sunwing Bow is a +3 bow with the Sunshot, Irradiation, and OA: Solar Beam properties.",
		usages : 3,
		recovery : "dawn",
		additional : "regains 1",
		action : ["action", "Solar Beam"],
		descriptionFull : 
			"Sinew harvested from a suneater owlbear’s spine can imbue arrows with low-level radiation, which is passed onto a target when struck by the ammunition. The magic of suneater respiration lies in their photometabolism; they can convert sunlight into pure, concentrated radiant energy, unleashing unholy beams of destructive force."+
			"\n" + "I gain a +3 bonus to attack and damage rolls made with this magic weapon."+
			"\n" + toUni("Sunshot.") + " While in sunlight, this bow doesn’t need ammunition. If I draw this weapon’s bowstring without nocking an arrow, it produces its own ammunition, automatically creating a radiant arrow when I make a ranged attack with it. The attack deals radiant damage instead of the weapon’s normal damage. The arrow created by this weapon vanishes the instant after it hits or misses a target."+
			"\n" + toUni("Irradiation.") + " A creature that takes radiant damage from this bow becomes magically marked for 1 hour. During this time, it leaves an invisible trail that can be seen by creatures with truesight or creatures using the detect magic spell. The trail fades after 1 hour."+
			"\n" + toUni("Optional Attunement.") +	 " If I choose to attune to this weapon, it gains the Solar Beam property and has 3 charges. The sunwing bow regains 1 expended charge daily at dawn. If it is exposed to dawn’s light, it regains all expended charges instead."+
			"\n" + toUni("OA: Solar Beam.") + " As an action, I can expend 1 charge to fire a beam of solar energy in a 5-footwide, 60-foot-long line originating from me. Each creature in the area must make a DC 16 Dexterity saving throw, taking 6d8 radiant damage on a failed save, or half as much damage on a successful one."+
			"\n" + toUni("OA: Daylight.") + " When I take the Attack action, I can use one attack to fire a radiant arrow from this bow at a surface within the bow’s range and expend 1 charge. A magical effect identical to the daylight spell manifests for 1 hour, centred wherever the arrow strikes the surface.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : "brackets",
			itemName1stPage : ["between", "Rare Sunwing", "(OA)"],
			descriptionChange : ["replace", "bow"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /bow/i;
				return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
			}
		},
		calcChanges : {
			atkCalc : [
				function (fields, v, output) {
					if (!v.theWea.isMagicWeapon && v.isRangedWeapon && /bow/i.test(v.baseWeaponName) && /^(?=.*sunwing).*$/i.test(v.WeaponTextName)) {
						v.theWea.isMagicWeapon = true;
						output.magic = v.thisWeapon[1] + 3;
					}
				}, ''
			]
		},
	},
};

// Breastplank
MagicItemsList["breastplank"] = {
	name : "Breastplank",
	source : [["HGtMH", 453]],
	type : "armor (breastplate, half plate, or plate)",
	attunement : true,
	description : "The mundane appearance of this suit of armour belies the danger of its true nature. The wood feels soft and sticky to the touch, and eyes and teeth spontaneously form all over its surface as the mimic grows bolder… and hungrier.",
	choices : ["uncommon", "rare", "very rare"],
	"uncommon" : {
		name : "Uncommon Breastplank",
		rarity : "uncommon",
		description : "This armor has the Sticky Situation property",
		descriptionFull : 
			"The mundane appearance of this suit of armour belies the danger of its true nature. The wood feels soft and sticky to the touch, and eyes and teeth spontaneously form all over its surface as the mimic grows bolder… and hungrier."+
			"\n" + toUni("Sticky Situation.") + " While I am wearing this armour, creatures have disadvantage on ability checks made to avoid or escape being grappled by me. A creature grappled by me takes 1d10 acid damage at the start of each of its turns.",
		chooseGear : {
			type : "armor",
			prefixOrSuffix : "brackets",
			excludeCheck : function (inObjKey, inObj) {
				return !(/plate/i).test(inObj.name);
			},
		},
	},
	"rare" : {
		name : "Rare Breastplank",
		rarity : "rare",
		description : "This armor has the Sticky Situation and Quick Grip properties",
		descriptionFull : 
			"The mundane appearance of this suit of armour belies the danger of its true nature. The wood feels soft and sticky to the touch, and eyes and teeth spontaneously form all over its surface as the mimic grows bolder… and hungrier."+
			"\n" + toUni("Sticky Situation.") + " While I am wearing this armour, creatures have disadvantage on ability checks made to avoid or escape being grappled by me. A creature grappled by me takes 1d12 acid damage at the start of each of its turns."+
			"\n" + toUni("Quick Grip.") + " While wearing this armour, I can attempt to grapple a creature as a bonus action.",
		chooseGear : {
			type : "armor",
			prefixOrSuffix : "brackets",
			excludeCheck : function (inObjKey, inObj) {
				return !(/plate/i).test(inObj.name);
			},
		},
	},
	"very rare" : {
		name : "Very Rare Breastplank",
		rarity : "very rare",
		description : "This armor has the Sticky Situation, Quick Grip, and Tongue Lash properties",
		descriptionFull : 
			"The mundane appearance of this suit of armour belies the danger of its true nature. The wood feels soft and sticky to the touch, and eyes and teeth spontaneously form all over its surface as the mimic grows bolder… and hungrier."+
			"\n" + toUni("Sticky Situation.") + " While I am wearing this armour, creatures have disadvantage on ability checks made to avoid or escape being grappled by me. A creature grappled by me takes 1d12 acid damage at the start of each of its turns."+
			"\n" + toUni("Quick Grip.") + " While wearing this armour, I can attempt to grapple a creature as a bonus action."+
			"\n" + toUni("Tongue Lash.") + " While wearing this armour, I can use a bonus action to cause the mimic’s tongue to elongate and attempt to pull a creature I can see within 15 feet of me. The target must succeed on a DC 16 Strength saving throw or take 1d6 bludgeoning damage and be pulled up to 15 feet towards me. A Huge or larger creature automatically succeeds on this saving throw. If this property pulls a creature to within 5 feet of me, I can immediately attempt to grapple it as part of the same bonus action.",			
		chooseGear : {
			type : "armor",
			prefixOrSuffix : "brackets",
			excludeCheck : function (inObjKey, inObj) {
				return !(/plate/i).test(inObj.name);
			},
		},
	},
};

// Headbanger Lute
MagicItemsList["headbanger lute"] = {
	name : "Headbanger Lute",
	source : [["HGtMH", 454]],
	type : "Club or greatclub",
	attunement : true,
	description : "The shapechanging abilities of the mimic infuse this musical instrument, a lute, with the propensity to subtly alter its shape and produce excellent acoustics. It also exudes a corrosive acid that can be a useful addition when the musician’s plan to charm a foe with a sweet serenade doesn’t go to plan.",
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && /club/i.test(v.baseWeaponName) && /headbanger/i.test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + '+1d8 Acid dmg on first target it hits on a turn';
				}
			},
			'If I include the word "Headbanger" in the name of a hammer, it will be treated as the magic weapon Headbanger Lute. The weapon deals an extra 1d8 Acid damage to the first target that it hits on a turn.'
		],
	},
	action : ["bonus action", "Ventriloquism"],
	choices : ["uncommon", "very rare"],
	"uncommon" : {
		name : "Uncommon Headbanger Lute",
		rarity : "uncommon",
		description : "This magic weapon deals an additional 1d8 acid damage to the first target that it hits on a turn. If I have proficiency with lutes, I am considered proficient with this weapon as well. This magic weapon has the Ventriloquism property",
		descriptionFull : 
			"The shapechanging abilities of the mimic infuse this musical instrument, a lute, with the propensity to subtly alter its shape and produce excellent acoustics. It also exudes a corrosive acid that can be a useful addition when the musician’s plan to charm a foe with a sweet serenade doesn’t go to plan."+
			"\n" + "This magic weapon deals an additional 1d8 acid damage to the first target that it hits on a turn. If I have proficiency with lutes, I am considered proficient with this weapon as well."+
			"\n" + toUni("Ventriloquism.") + " As a bonus action while holding the lute, I can command it to mimic simple sounds it has been exposed to, such as a person whispering, swords clashing, or simple melodies. I can choose for the sounds to originate from any point within 30 feet of me that I can see. A creature that hears the sounds can tell they’re imitations with a successful DC 13 Intelligence (Investigation) check.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : "brackets",
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /club/i;
				return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
			}
		},
	},
	"very rare" : {
		name : "Very Rare Headbanger Lute",
		rarity : "very rare",
		description : "This magic weapon deals an additional 1d8 acid damage to the first target that it hits on a turn. If I have proficiency with lutes, I am considered proficient with this weapon as well. This magic weapon has the Ventriloquism and Club Music properties",
		descriptionFull : 
			"The shapechanging abilities of the mimic infuse this musical instrument, a lute, with the propensity to subtly alter its shape and produce excellent acoustics. It also exudes a corrosive acid that can be a useful addition when the musician’s plan to charm a foe with a sweet serenade doesn’t go to plan."+
			"\n" + "This magic weapon deals an additional 1d8 acid damage to the first target that it hits on a turn. If I have proficiency with lutes, I am considered proficient with this weapon as well."+
			"\n" + toUni("Ventriloquism.") + " As a bonus action while holding the lute, I can command it to mimic simple sounds it has been exposed to, such as a person whispering, swords clashing, or simple melodies. I can choose for the sounds to originate from any point within 30 feet of me that I can see. A creature that hears the sounds can tell they’re imitations with a successful DC 16 Intelligence (Investigation) check."+
			"\n" + toUni("Club Music.") + " As an action while holding the lute, I can play one of two brief but powerful songs. Once a song has been played, I can’t play that song again until the next dawn."+
			"\n" + " \u2022" + toUni("1. Panic! at the Tavern.") + " I let loose a fast, chaotic melody that sows panic in the minds of my foes, forcing each creature of my choice within 15 feet of me that can hear me to make a DC 16 Wisdom saving throw. On a failed save, a creature takes 6d6 psychic damage and is frightened of me for 1 minute. On a success, a creature takes half as much damage and isn’t frightened. A creature can repeat this saving throw at the end of each of its turns, ending the effect on itself on a success."+
			"\n" + " \u2022" + toUni("2. Mithrallica.") + " I unleash an ear-shattering power chord that blows my foes away, forcing each creature in a 25-foot cone to make a DC 16 Strength saving throw. On a failed save, a creature takes 6d6 thunder damage and is pushed 20 feet away from me, knocked prone, and deafened for 1 minute. On a successful save, a creature takes half as much damage and suffers no other effects. A creature can repeat this saving throw at the end of each of its turns, ending the deafened condition on itself on a success.",
		action : [["action", "Club Music"]],
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : "brackets",
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /club/i;
				return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
			}
		},
	},
};

// Mawling Maul (made neater by morepurplemorebetter (Joost))
MagicItemsList["mawling hammer"] = {
	name : "Mawling Hammer", 
	nameTest : "Mawling",
	source : [["HGtMH", 455]],
	type : "Weapon (any hammer)",
	description : "Burning with ravenous hunger and unquenchable hanger, this mimic-infused hammer struggles relentlessly against the sturdy iron chains that bind it. Loosening the chains stimulates the weapon's digestive juices which, if not quenched, can have caustic consequences for its wielder.",
	action : [["bonus action", "Mimic Unleashed"]],
	calcChanges : { // Moved to main object to avoid duplications, added `maul` to the regex, and fixed the mawling regex from being unnecessary complex
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && /club|hammer|mace|maul/i.test(v.baseWeaponName) && /mawling/i.test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
				}
			},
			'If I include the word "Mawling" in the name of a hammer, it will be treated as the magic weapon Mawling Maul.'
		],
	},
	choices : ["uncommon", "rare"],
	choicesNotInMenu : true, // So that the item only appears once in the in-line menu
	"uncommon" : {
		// Removed name, as this is now handled by the chooseGear attribute
		rarity : "uncommon",
		description : "Burning with ravenous hunger and unquenchable hanger, this mimic-infused weapon struggles relentlessly against the sturdy iron chains that bind it. Loosening the chains stimulates the weapon’s digestive juices which, if not quenched, can have caustic consequences for its wielder.", 
		descriptionFull : 
			"Burning with ravenous hunger and unquenchable hanger, this mimic-infused weapon struggles relentlessly against the sturdy iron chains that bind it. Loosening the chains stimulates the weapon's digestive juices which, if not quenched, can have caustic consequences for its wielder."+
			"\n   " + toUni("Mimic Unleashed") + ". As a bonus action while holding the hammer, I can loosen the chains restraining the mimic, leaving it free to mercilessly maul my foes. While the chains are loose, the hammer bites targets that it hits, dealing an extra 1d4 piercing damage. If I end my turn holding the hammer while the chains are loose, and I didn't hit a creature with an attack using the hammer that turn, the hammer's excess digestive juices pour down the handle and I take 1d4 acid damage. The chains tighten on their own if the hammer isn't held for 1 minute or if I use a bonus action to tighten the chains while holding the weapon.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : ["between", "Mawling", "[uncommon]"], // Changed so it handles the choice correctly
			descriptionChange : ["replace", "hammer"], // Added so the weapon type is written in the description as well.
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /club|hammer|mace|maul/i;
				return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
			}
		},
	},
	"rare" : {
		// Removed name, as this is now handled by the chooseGear attribute
		rarity : "rare",
		description : "Burning with ravenous hunger and unquenchable hanger, this mimic-infused weapon struggles relentlessly against the sturdy iron chains that bind it. Loosening the chains stimulates the weapon’s digestive juices which, if not quenched, can have caustic consequences for its wielder.", 
		descriptionFull : 
			"Burning with ravenous hunger and unquenchable hanger, this mimic-infused weapon struggles relentlessly against the sturdy iron chains that bind it. Loosening the chains stimulates the weapon's digestive juices which, if not quenched, can have caustic consequences for its wielder."+
			"\n   " + toUni("Mimic Unleashed") + ". As a bonus action while holding the hammer, I can loosen the chains restraining the mimic, leaving it free to mercilessly maul my foes. While the chains are loose, the hammer bites targets that it hits, dealing an extra 1d6 piercing damage. If I end my turn holding the hammer while the chains are loose, and I didn't hit a creature with an attack using the hammer that turn, the hammer's excess digestive juices pour down the handle and I take 1d6 acid damage. The chains tighten on their own if the hammer isn't held for 1 minute or if I use a bonus action to tighten the chains while holding the weapon."+
			"\n   " + toUni("Bilious Blow") + ". When I roll a 20 on an attack roll made with this hammer, the mimic spews bile all over the target, covering it completely. A creature covered in bile takes 1d4 acid damage at the start of each of its turns until it or another creature uses its action to scrape or wash the bile off. Increase this acid damage to 2d4 if the chains were loose when the hammer hit.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : ["between", "Mawling", "[rare]"], // Changed so it handles the choice correctly
			descriptionChange : ["replace", "hammer"], // Added so the weapon type is written in the description as well.
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /club|hammer|mace|maul/i;
				return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
			}
		},
	},
};

// Mimickey
MagicItemsList["mimickey"] = {
	name : "Mimickey",
	source : [["HGtMH", 456]],
	type : "wondrous item",
	rarity : "common",
	description : "This bone and flesh keyring can be socketed on any weapon or held item. As an action, I can hold the item by the keyring and spin it in a circle, causing the socketed item to shrink to the size of a key. Using an action to spin it while key-sized returns it to its normal size.",
	descriptionFull : 
		"This bone and flesh keyring can be socketed on any weapon or held item. As an action, I can hold the item by the keyring and spin it in a circle, causing the socketed item to shrink to the size of a key. Using an action to spin it while key-sized returns it to its normal size.",
};

// Spelleater Tome
MagicItemsList["spelleater tome"] = {
	name : "Spelleater Tome",
	source : [["HGtMH", 456]],
	type : "wondrous item",
	attunement : true,
	description : "This book has 8 charges and regains 1d4 + 4 expended charges daily at dawn. It can be used as a spellbook and as a spellcasting focus by wizards.",
	usages : 8,
	recovery : "dawn",
	additional : "regains 1d4+4",
	action : ["action", "Living Library"],
	choices : ["uncommon", "rare"],
	"uncommon" : {
		name : "Uncommon Spelleater Tome",
		rarity : "uncommon",
		description : "This book has 8 charges and regains 1d4 + 4 expended charges daily at dawn. It can be used as a spellbook and as a spellcasting focus by wizards. It has the Living Library property.",
		descriptionFull : 
			"Learning and developing new spells can be a tedious and time-consuming process. Luckily, the spelleater tome is a shortcut to becoming a spell-slinging savant. Originally a creation of Jonjo Starr, the tome has become a favourite among lazy wizarding apprentices the world over."+
			"\n" +
			"This book has 8 charges and regains 1d4 + 4 expended charges daily at dawn. It can be used as a spellbook and as a spellcasting focus by wizards."+
			"\n" +
			toUni("Living Library.") +
			" This tome is capable of copying and storing magical information. As an action, I can give it a spell scroll of 2nd level or lower, which it devours, destroying the scroll and adding the spell to its pages. While holding the book, I can cast one of the spells stored within it by expending a number of charges equal to the spell’s level (save DC 13, +5 to hit; 1 charge for cantrips). The tome can store up to five spells in this way. If storing a new spell would take it above this maximum, I can choose one of its current spells to be replaced. When found, the book already contains one 1st-level spell and one 2nd-level spell, randomly determined.",
	},
	"rare" : {
		name : "Rare Spelleater Tome",
		rarity : "rare",
		description : "This book has 8 charges and regains 1d4 + 4 expended charges daily at dawn. It can be used as a spellbook and as a spellcasting focus by wizards. It has the Living Library and Arcane Feast properties",
		descriptionFull : 
			"Learning and developing new spells can be a tedious and time-consuming process. Luckily, the spelleater tome is a shortcut to becoming a spell-slinging savant. Originally a creation of Jonjo Starr, the tome has become a favourite among lazy wizarding apprentices the world over."+
			"\n" +
			"This book has 8 charges and regains 1d4 + 4 expended charges daily at dawn. It can be used as a spellbook and as a spellcasting focus by wizards."+
			"\n" +
			toUni("Living Library.") +
			" This tome is capable of copying and storing magical information. As an action, I can give it a spell scroll of 5th level or lower, which it devours, destroying the scroll and adding the spell to its pages. While holding the book, I can cast one of the spells stored within it by expending a number of charges equal to the spell’s level (save DC 15, +7 to hit; 1 charge for cantrips). The tome can store up to seven spells in this way. If storing a new spell would take it above this maximum, I can choose one of its current spells to be replaced. When found, the book already contains one 1st-level spell and one 2nd-level spell, randomly determined."+
			"\n" +
			toUni("Arcane Feast.") +
			" I can allow the book to consume the corpse of a spellcaster over the course of 10 minutes, after which it regains 2 expended charges. Once this property of the book has been used, it can’t be used again until the next dawn.",
		limfeaname : "Arcane Feast",
		usages : 1,
		recovery : "dawn",
	},
};

// Haemscale
MagicItemsList["haemscale"] = {
	name : "Haemscale",
	source : [["HGtMH", 457]],
	type : "armour (medium or heavy)",
	attunement : true,
	description : "This armour has 7 charges and regains 1d4 + 3 expended charges daily at dawn.",
	usages : 7,
	recovery : "dawn",
	additional : "regains 1d4+3",
	choices : ["uncommon", "rare", "legendary"],
	"uncommon" : {
		name : "Uncommon Haemscale",
		rarity : "uncommon",
		description : "This armour has 7 charges and regains 1d4 + 3 expended charges daily at dawn. The armour has the Arcanomagnetic Repulsion property.",
		descriptionFull : 
			"Fashioned from the claws and shard-scales of a magnetite dragon, this protective armour can become temporarily weightless when exposed to extreme cold. The wearer of this armour can exert minor control over ferrous metals within a close proximity."+
			"\n" + "This armour has 7 charges and regains 1d4 + 3 expended charges daily at dawn."+
			"\n" + toUni("Arcanomagnetic Repulsion.") + " I can expend 1 charge to create one of the following effects while I wear this armour."+
			"\n" + "\u2022 Repulse. When I am targeted by a weapon attack using a ferrous weapon or ammunition, I can use my reaction to cause a pulse of arcanomagnetism to throw the weapon or ammunition off course, imposing disadvantage on the attack roll."+
			"\n" + "\u2022 Aura. As a bonus action, I can create an arcanomagnetic aura with a 20-foot radius centred on me that moves with me and that lasts until the start of my next turn. This area is difficult terrain for creatures of my choice that are made of ferrous metal or wearing ferrous armour.",
		chooseGear : {
			type : "armor",
			prefixOrSuffix : ["between", "Haemscale", "[uncommon]"],
			excludeCheck : function (inObjKey, inObj) {
				return !(/medium|heavy/i).test(inObj.type) || (/hide/i).test(inObj.name);
			}
		}
	},
	"rare" : {
		name : "Rare Haemscale",
		rarity : "rare",
		description : "This armour has 7 charges and regains 1d4 + 3 expended charges daily at dawn. The armour has the Arcanomagnetic Repulsion and Superconductor properties. While I wear this armour, I have resistance to cold damage.",
		descriptionFull : 
			"Fashioned from the claws and shard-scales of a magnetite dragon, this protective armour can become temporarily weightless when exposed to extreme cold. The wearer of this armour can exert minor control over ferrous metals within a close proximity."+
			"\n" + "This armour has 7 charges and regains 1d4 + 3 expended charges daily at dawn."+
			"\n" + toUni("Arcanomagnetic Repulsion.") + " I can expend 1 charge to create one of the following effects while I wear this armour."+
			"\n" + "\u2022 Repulse. When I am targeted by a weapon attack using a ferrous weapon or ammunition, I can use my reaction to cause a pulse of arcanomagnetism to throw the weapon or ammunition off course, imposing disadvantage on the attack roll."+
			"\n" + "\u2022 Aura. As a bonus action, I can create an arcanomagnetic aura with a 30-foot radius centred on me that moves with me and that lasts until the start of my next turn. This area is difficult terrain for creatures of my choice that are made of ferrous metal or wearing ferrous armour."+
			"\n" + toUni("Superconductor.") + " Whenever I take cold damage while I wear this armour, I gain a flying speed of 30 feet until the end of my next turn.",
		chooseGear : {
			type : "armor",
			prefixOrSuffix : ["between", "Haemscale", "[rare]"],
			excludeCheck : function (inObjKey, inObj) {
				return !(/medium|heavy/i).test(inObj.type) || (/hide/i).test(inObj.name);
			}
		},
		dmgres : ["Cold"],
	},
	"legendary" : {
		name : "Legendary Haemscale",
		rarity : "Legendary",
		description : "This armour has 7 charges and regains 1d4 + 3 expended charges daily at dawn. The armour has the Arcanomagnetic Repulsion and Superconductor properties. While I wear this armour, I have resistance to cold damage. ",
		descriptionFull : 
			"Fashioned from the claws and shard-scales of a magnetite dragon, this protective armour can become temporarily weightless when exposed to extreme cold. The wearer of this armour can exert minor control over ferrous metals within a close proximity."+
			"\n" + "This armour has 7 charges and regains 1d4 + 3 expended charges daily at dawn."+
			"\n" + toUni("Arcanomagnetic Repulsion.") + " I can expend 1 charge to create one of the following effects while I wear this armour."+
			"\n" + " \u2022 Repulse. When I am targeted by a weapon attack using a ferrous weapon or ammunition, I can use my reaction to cause a pulse of arcanomagnetism to throw the weapon or ammunition off course, imposing disadvantage on the attack roll."+
			"\n" + " \u2022 Aura. As a bonus action, I can create an arcanomagnetic aura with a 40-foot radius centred on me that moves with me and that lasts until the start of my next turn. This area is difficult terrain for creatures of my choice that are made of ferrous metal or wearing ferrous armour."+
			"\n" + toUni("Superconductor.") + " Whenever I take cold damage while I wear this armour, I gain a flying speed of 40 feet until the end of my next turn."+
			"\n" + toUni("Swordstorm.") + " As an action, I can cast the blade barrier spell (save DC 17), adding any ferrous objects in the vicinity to the barrier. At the GM’s discretion, if there are many ferrous objects in the area, increase the barrier’s damage by 2d10. Once I activate this property, I can’t do so again until the following dawn.",
		chooseGear : {
			type : "armor",
			prefixOrSuffix : ["between", "Haemscale", "[legendary]"],
			excludeCheck : function (inObjKey, inObj) {
				return !(/medium|heavy/i).test(inObj.type) || (/hide/i).test(inObj.name);
			}
		},
		dmgres : ["Cold"],
		action : ["action", "Swordstorm"],
		limfeaname : "Swordstorm",
		usages : 1,
		recovery : "dawn",
	},
};

// Haemstrike
MagicItemsList["haemstrike"] = {
	name : "Haemstrike",
	source : [["HGtMH", 458]],
	type : "Weapon (any hammer)",
	description : "",
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && /hammer|maul/i.test(v.baseWeaponName) && /haemstrike/i.test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
				}
			},
			'If I include the word "Haemstrike" in the name of a hammer, it will be treated as the magic weapon Haemstrike.'
		],
	},
	choices : ["uncommon", "uncommon (optional attunement)", "rare", "rare (optional attunement)", "very rare", "very rare (optional attunement)"],
	choicesNotInMenu : true,
	"uncommon" : {
		name : "Uncommon Haemstrike",
		rarity : "uncommon",
		description : "This weapon is naturally attracted to foes bearing ferrous metals, allowing it to strike them with more force. Those who align themselves more closely with the weapon are granted the ability to manipulate gravity, telekinetically pulling creatures and objects into range of its jagged-faced swings.", 
		descriptionFull : 
			"This weapon is naturally attracted to foes bearing ferrous metals, allowing it to strike them with more force. Those who align themselves more closely with the weapon are granted the ability to manipulate gravity, telekinetically pulling creatures and objects into range of its jagged-faced swings."+ 
			"\n" + "I gain a +2 bonus to attack and damage rolls made with this magic weapon against targets made of ferrous metal or wearing ferrous armour.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : ["between", "Haemstrike", "[uncommon]"], 
			descriptionChange : ["replace", "hammer"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /club|hammer|mace|maul/i;
				return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
			}
		},
	},
	"uncommon (optional attunement)" : {
		name : "Uncommon Haemstrike (OA)",
		rarity : "uncommon",
		attunement : true,
		description : "This weapon is naturally attracted to foes bearing ferrous metals, allowing it to strike them with more force. Those who align themselves more closely with the weapon are granted the ability to manipulate gravity, telekinetically pulling creatures and objects into range of its jagged-faced swings.", 
		descriptionFull : 
			"This weapon is naturally attracted to foes bearing ferrous metals, allowing it to strike them with more force. Those who align themselves more closely with the weapon are granted the ability to manipulate gravity, telekinetically pulling creatures and objects into range of its jagged-faced swings."+ 
			"\n" + "I gain a +2 bonus to attack and damage rolls made with this magic weapon against targets made of ferrous metal or wearing ferrous armour."+
			"\n" + toUni("Optional Attunement.") +	 " If I choose to attune to this weapon, it gains the Attraction property. When I activate a property granted by this optional attunement, roll a d4. On a 1, haemstrike’s optional attunement properties can’t be activated until the next dawn."+
			"\n" + toUni("OA: Attraction.") + " As a bonus action, I can point haemstrike at a target I can see within 30 feet of me. If the target is an object that weighs less than 300 pounds, the object is pulled up to 15 feet towards me. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be pulled up to 15 feet straight towards me. If the creature is made of ferrous metal or is wearing ferrous armour, it has disadvantage on the saving throw. Large or larger creatures automatically succeed on this saving throw.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : ["between", "Haemstrike", "[uncommon]"], 
			descriptionChange : ["replace", "hammer"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /club|hammer|mace|maul/i;
				return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
			}
		},
		action : [["bonus action", "Attraction"]],
	},
	"rare" : {
		name : "Rare Haemstrike",
		rarity : "rare",
		description : "This weapon is naturally attracted to foes bearing ferrous metals, allowing it to strike them with more force. Those who align themselves more closely with the weapon are granted the ability to manipulate gravity, telekinetically pulling creatures and objects into range of its jagged-faced swings.", 
		descriptionFull : 
			"This weapon is naturally attracted to foes bearing ferrous metals, allowing it to strike them with more force. Those who align themselves more closely with the weapon are granted the ability to manipulate gravity, telekinetically pulling creatures and objects into range of its jagged-faced swings."+ 
			"\n" + "The weapon has a +1 bonus to attack and damage rolls made with it."+
			"\n" + "I gain a +3 bonus to attack and damage rolls made with this magic weapon against targets made of ferrous metal or wearing ferrous armour.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : ["between", "Haemstrike", "[rare]"], 
			descriptionChange : ["replace", "hammer"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /club|hammer|mace|maul/i;
				return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
			}
		},
		calcChanges : {
			atkCalc : [
				function (fields, v, output) {
					if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && /hammer|maul/i.test(v.baseWeaponName) && /^(?=.*haemstrike).*$/i.test(v.WeaponTextName)) {
						v.theWea.isMagicWeapon = true;
						output.magic = v.thisWeapon[1] + 1;
					}
				}, ''
			]
		},
	},
	"rare (optional attunement)" : {
		name : "Rare Haemstrike (OA)",
		rarity : "rare",
		attunement : true,
		description : "This weapon is naturally attracted to foes bearing ferrous metals, allowing it to strike them with more force. Those who align themselves more closely with the weapon are granted the ability to manipulate gravity, telekinetically pulling creatures and objects into range of its jagged-faced swings.", 
		descriptionFull : 
			"This weapon is naturally attracted to foes bearing ferrous metals, allowing it to strike them with more force. Those who align themselves more closely with the weapon are granted the ability to manipulate gravity, telekinetically pulling creatures and objects into range of its jagged-faced swings."+ 
			"\n" + "The weapon has a +1 bonus to attack and damage rolls made with it."+
			"\n" + "I gain a +3 bonus to attack and damage rolls made with this magic weapon against targets made of ferrous metal or wearing ferrous armour."+
			"\n" + toUni("Optional Attunement.") +	 " If I choose to attune to this weapon, it gains the Attraction and Magnetic Shockwave properties. When I activate a property granted by this optional attunement, roll a d4. On a 1, haemstrike’s optional attunement properties can’t be activated until the next dawn."+
			"\n" + toUni("OA: Attraction.") + " As a bonus action, I can point haemstrike at a target I can see within 30 feet of me. If the target is an object that weighs less than 600 pounds, the object is pulled up to 15 feet towards me. If the target is a creature, it must succeed on a DC 15 Strength saving throw or be pulled up to 15 feet straight towards me. If the creature is made of ferrous metal or is wearing ferrous armour, it has disadvantage on the saving throw. Huge or larger creatures automatically succeed on this saving throw."+
			"\n" + toUni("OA: Magnetic Shockwave.") + " Once per turn when I hit a target with haemstrike, I can cause an eruption of supercooled magnetite shards. Each creature other than me within 5 feet of the target must succeed on a DC 15 Dexterity saving throw, taking 1d6 cold damage and 1d6 piercing damage on a failed save, or half as much damage on a success. Creatures made of ferrous metal or wearing ferrous armour have disadvantage on this saving throw.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : ["between", "Haemstrike", "[rare]"], 
			descriptionChange : ["replace", "hammer"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /hammer|maul/i;
				return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
			}
		},
		action : [["bonus action", "Attraction"]],
		calcChanges : {
			atkCalc : [
				function (fields, v, output) {
					if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && /hammer|maul/i.test(v.baseWeaponName) && /^(?=.*haemstrike).*$/i.test(v.WeaponTextName)) {
						v.theWea.isMagicWeapon = true;
						output.magic = v.thisWeapon[1] + 1;
					}
				}, ''
			]
		},
	},
	"very rare" : {
		name : "Very Rare Haemstrike",
		rarity : "very rare",
		description : "This weapon is naturally attracted to foes bearing ferrous metals, allowing it to strike them with more force. Those who align themselves more closely with the weapon are granted the ability to manipulate gravity, telekinetically pulling creatures and objects into range of its jagged-faced swings.", 
		descriptionFull : 
			"This weapon is naturally attracted to foes bearing ferrous metals, allowing it to strike them with more force. Those who align themselves more closely with the weapon are granted the ability to manipulate gravity, telekinetically pulling creatures and objects into range of its jagged-faced swings."+ 
			"\n" + "The weapon has a +2 bonus to attack and damage rolls made with it."+
			"\n" + "I gain a +3 bonus to attack and damage rolls made with this magic weapon against targets made of ferrous metal or wearing ferrous armour.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : ["between", "Haemstrike", "[very rare]"], 
			descriptionChange : ["replace", "hammer"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /hammer|maul/i;
				return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
			}
		},
		calcChanges : {
			atkCalc : [
				function (fields, v, output) {
					if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && /hammer|maul/i.test(v.baseWeaponName) && /^(?=.*haemstrike).*$/i.test(v.WeaponTextName)) {
						v.theWea.isMagicWeapon = true;
						output.magic = v.thisWeapon[1] + 2;
					}
				}, ''
			]
		},
	},
	"very rare (optional attunement)" : {
		name : "Very Rare Haemstrike (OA)",
		rarity : "very rare",
		attunement : true,
		description : "This weapon is naturally attracted to foes bearing ferrous metals, allowing it to strike them with more force. Those who align themselves more closely with the weapon are granted the ability to manipulate gravity, telekinetically pulling creatures and objects into range of its jagged-faced swings.", 
		descriptionFull : 
			"This weapon is naturally attracted to foes bearing ferrous metals, allowing it to strike them with more force. Those who align themselves more closely with the weapon are granted the ability to manipulate gravity, telekinetically pulling creatures and objects into range of its jagged-faced swings."+ 
			"\n" + "The weapon has a +2 bonus to attack and damage rolls made with it."+
			"\n" + "I gain a +3 bonus to attack and damage rolls made with this magic weapon against targets made of ferrous metal or wearing ferrous armour."+
			"\n" + toUni("Optional Attunement.") + " If I choose to attune to this weapon, it gains the Attraction, Magnetic Shockwave, and Dragon’s Roar properties. When I activate a property granted by this optional attunement, roll a d4. On a 1, haemstrike’s optional attunement properties can’t be activated until the next dawn."+
			"\n" + toUni("OA: Attraction.") + " As a bonus action, I can point haemstrike at a target I can see within 30 feet of me. If the target is an object that weighs less than 1000 pounds, the object is pulled up to 15 feet towards me. If the target is a creature, it must succeed on a DC 16 Strength saving throw or be pulled up to 15 feet straight towards me. If the creature is made of ferrous metal or is wearing ferrous armour, it has disadvantage on the saving throw. Gargantuan or larger creatures automatically succeed on this saving throw."+
			"\n" + toUni("OA: Magnetic Shockwave.") + " Once per turn when I hit a target with haemstrike, I can cause an eruption of supercooled magnetite shards. Each creature other than me within 5 feet of the target must succeed on a DC 15 Dexterity saving throw, taking 1d6 cold damage and 1d6 piercing damage on a failed save, or half as much damage on a success. Creatures made of ferrous metal or wearing ferrous armour have disadvantage on this saving throw."+
			"\n" + toUni("OA: Dragon’s Roar.") + " While holding haemstrike, I can use a bonus action to make it release an intimidating roar. Each creature other than me within 15 feet of me must succeed on a DC 16 Wisdom saving throw or become frightened of me until the end of my next turn.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : ["between", "Haemstrike", "[very rare]"], 
			descriptionChange : ["replace", "hammer"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /hammer|maul/i;
				return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
			}
		},
		action : [["bonus action", "Attraction"], ["bonus action", "Dragon’s Roar"]],
		calcChanges : {
			atkCalc : [
				function (fields, v, output) {
					if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && /hammer|maul/i.test(v.baseWeaponName) && /^(?=.*haemstrike).*$/i.test(v.WeaponTextName)) {
						v.theWea.isMagicWeapon = true;
						output.magic = v.thisWeapon[1] + 2;
					}
				}, ''
			]
		},
	},
};

// Magnetite Horn
MagicItemsList["magnetite horn"] = {
	name : "Magnetite Horn",
	source : [["HGtMH", 459]],
	type : "Wondrous item",
	rarity : "uncommon",
	description : "Fashioned from the harvested horn of a magnetite dragon, this charm can be socketed on a ferrous weapon or on a worn item that contains iron, conferring different benefits to each.", 
	descriptionFull : 
		"Fashioned from the harvested horn of a magnetite dragon, this charm can be socketed on a ferrous weapon or on a worn item that contains iron, conferring different benefits to each."+ 
		"\n" + toUni("Ferrous Weapon.") + " While I hold the socketed weapon, when I am hit by a weapon attack made with a ferrous weapon or ammunition that I can see, I can use my reaction to activate the magnetic properties of the horn. When I do so, the attack’s weapon or ammunition is pulled towards my own, giving me a +1 bonus to my AC against the attack as I attempt to parry it and possibly turning the hit into a miss."+
		"\n" + toUni("Ferrous Worn Item.") + " While I wear the socketed item, when a creature within 5 feet of me is targeted by a weapon attack made with a ferrous weapon or ammunition, I can use my reaction to activate the magnetic properties of the horn. When I do so, roll a d20. On an 11 or higher, I become the target of the attack instead.",
};

// Shard Crown
MagicItemsList["shard crown"] = {
	name : "Shard Crown",
	source : [["HGtMH", 460]],
	type : "Wondrous item",
	attunement : true,
	description : "",
	action : [["action", "Bloodbend"]],
	choices : ["rare", "very rare", "legendary"],
	choicesNotInMenu : true,
	"rare" : {
		name : "Rare Shard Crown",
		rarity : "rare",
		description : "From the horn and eyes of a magnetite dragon is crafted this crown of magnetite. The creature’s commanding presence and power over the blood of others allow the wearer of this object to bend its foes to its will.", 
		descriptionFull : 
			"From the horn and eyes of a magnetite dragon is crafted this crown of magnetite. The creature’s commanding presence and power over the blood of others allow the wearer of this object to bend its foes to its will."+
			"\n" + "Critical hits against I made with ferrous weapons or ammunition become normal hits while I wear this crown. In addition, while wearing this crown, I know the magnetobolt cantrip (page 512; +7 to hit or my spellcasting attack modifier, whichever is higher) and, in extreme cold, I can cast the levitate spell on myself at will."+
			"\n" + "The crown has 5 charges and regains 1d4 + 1 expended charges daily at dawn."+	
			"\n" + toUni("Bloodbend.") + " As an action, I can expend 1 charge as I gesture to a creature I can see within 30 feet of me and speak a one-word command. If the target has blood, it must succeed on a DC 15 Wisdom saving throw or instantly use its reaction to follow the command (GM’s discretion). If the creature has no reaction remaining, it must use its reaction to follow the command the next time it  regains it. The property has no effect on a target that doesn’t have blood. Commands include:"+
			"\n \u2022 " + toUni("Throw.") + " The creature throws an object it is holding in a direction I choose with all its might."+
			"\n \u2022 " + toUni("Sit.") + " The creature sits, falling prone and not moving until the end of its next turn."+
			"\n \u2022 " + toUni("Attack.") + " The creature makes one weapon attack against a creature of my choice within its reach/range.",
		usages : 5,
		recovery : "dawn",
		additional : "regains 1d4+1",
		fixedDC : 15,
		fixedSpAttack : 7,
		spellcastingBonus: [{
			spells: ["magnetobolt"],
			selection: ["magnetobolt"],
		},{
			spells: ["levitate"],
			selection: ["levitate"],
			firstCol : "atwill",
		}],
		calcChanges : {
			spellAdd : [
				function (spellKey, spellObj, spName) {
					if (spellKey == 'levitate') {
					spellObj.description = "[*In Extreme Cold] crea/obj \u2264500lb save or rise vertically, up to 20 ft; a move target 20 ft";
					}
				},
				"In extreme cold, I can cast the levitate spell on myself at will."
			]
		},
	},
	"very rare" : {
		name : "Very Rare Shard Crown",
		rarity : "very rare",
		description : "From the horn and eyes of a magnetite dragon is crafted this crown of magnetite. The creature’s commanding presence and power over the blood of others allow the wearer of this object to bend its foes to its will.", 
		descriptionFull : 
			"From the horn and eyes of a magnetite dragon is crafted this crown of magnetite. The creature’s commanding presence and power over the blood of others allow the wearer of this object to bend its foes to its will."+
			"\n" + "Critical hits against I made with ferrous weapons or ammunition become normal hits while I wear this crown. In addition, while wearing this crown, I know the magnetobolt cantrip (page 512; +8 to hit or my spellcasting attack modifier, whichever is higher) and, in extreme cold, I can cast the levitate and fly spell on myself at will."+
			"\n" + "The crown has 8 charges and regains 1d4 + 4 expended charges daily at dawn."+	
			"\n" + toUni("Bloodbend.") + " As an action, I can expend 1 charge as I gesture to a creature I can see within 30 feet of me and speak a one-word command. If the target has blood, it must succeed on a DC 16 Wisdom saving throw or instantly use its reaction to follow the command (GM’s discretion). If the creature has no reaction remaining, it must use its reaction to follow the command the next time it  regains it. The property has no effect on a target that doesn’t have blood. Commands include:"+
			"\n \u2022 " + toUni("Throw.") + " The creature throws an object it is holding in a direction I choose with all its might."+
			"\n \u2022 " + toUni("Sit.") + " The creature sits, falling prone and not moving until the end of its next turn."+
			"\n \u2022 " + toUni("Attack.") + " The creature makes one weapon attack against a creature of my choice within its reach/range."+
			"\n" + toUni("Magnetovision.") + " As a bonus action, I can expend 1 charge allowing me to sense the locations of all ferrous metals within 60 feet of me for the next 10 minutes. This vision is blocked by a thin sheet of lead.",
		action : [["bonus action", "Magnetovision"]],
		usages : 8,
		recovery : "dawn",
		additional : "regains 1d4+4",
		fixedDC : 16,
		fixedSpAttack : 8,
		spellcastingBonus: [{
			spells: ["magnetobolt"],
			selection: ["magnetobolt"],
		},{
			spells: ["levitate"],
			selection: ["levitate"],
			firstCol : "atwill",
		},{
			spells: ["fly"],
			selection: ["fly"],
			firstCol : "atwill",
		}],
		calcChanges : {
			spellAdd : [
				function (spellKey, spellObj, spName) {
					if (spellKey == 'levitate') {
					spellObj.description = "[*In Extreme Cold] crea/obj \u2264500lb save or rise vertically, up to 20 ft; a move target 20 ft";
					}
					if (spellKey == 'fly') {
					spellObj.description = "[*In Extreme Cold] I gain 60 feet fly speed and hover";
					}
				},
				"In extreme cold, I can cast the levitate and fly spells on myself at will."
			]
		},
	},
	"legendary" : {
		name : "Legendary Shard Crown",
		rarity : "legendary",
		description : "From the horn and eyes of a magnetite dragon is crafted this crown of magnetite. The creature’s commanding presence and power over the blood of others allow the wearer of this object to bend its foes to its will.", 
		descriptionFull : 
			"From the horn and eyes of a magnetite dragon is crafted this crown of magnetite. The creature’s commanding presence and power over the blood of others allow the wearer of this object to bend its foes to its will."+
			"\n" + "Critical hits against I made with ferrous weapons or ammunition become normal hits while I wear this crown. In addition, while wearing this crown, I know the magnetobolt cantrip (page 512; +9 to hit or my spellcasting attack modifier, whichever is higher) and, in extreme cold, I can cast the levitate and fly spell on myself at will."+
			"\n" + "The crown has 12 charges and regains 1d8 + 4 expended charges daily at dawn."+	
			"\n" + toUni("Bloodbend.") + " As an action, I can expend 1 charge as I gesture to a creature I can see within 30 feet of me and speak a one-word command. If the target has blood, it must succeed on a DC 17 Wisdom saving throw or instantly use its reaction to follow the command (GM’s discretion). If the creature has no reaction remaining, it must use its reaction to follow the command the next time it  regains it. The property has no effect on a target that doesn’t have blood. Commands include:"+
			"\n \u2022 " + toUni("Throw.") + " The creature throws an object it is holding in a direction I choose with all its might."+
			"\n \u2022 " + toUni("Sit.") + " The creature sits, falling prone and not moving until the end of its next turn."+
			"\n \u2022 " + toUni("Attack.") + " The creature makes one weapon attack against a creature of my choice within its reach/range."+
			"\n" + toUni("Magnetovision.") + " As a bonus action, I can expend 1 charge allowing me to sense the locations of all ferrous metals within 60 feet of me for the next 10 minutes. This vision is blocked by a thin sheet of lead."+
			"\n" + toUni("Crown of Shards.") + " As a bonus action, I can expend 1 charge to shoot a shard of magnetite at a target within 90 feet of me. Make a ranged spell attack (+9 to hit), which deals 4d6 piercing damage on a hit. This shard can bend around corners and ignores half and three-quarters cover.",
		action : [["bonus action", "Magnetovision"],["bonus action", "Crown of Shards"]],
		usages : 12,
		recovery : "dawn",
		additional : "regains 1d8+4",
		fixedDC : 17,
		fixedSpAttack : 9,
		spellcastingBonus: [{
			spells: ["magnetobolt"],
			selection: ["magnetobolt"],
		},{
			spells: ["levitate"],
			selection: ["levitate"],
			firstCol : "atwill",
		},{
			spells: ["fly"],
			selection: ["fly"],
			firstCol : "atwill",
		}],
		calcChanges : {
			spellAdd : [
				function (spellKey, spellObj, spName) {
					if (spellKey == 'levitate') {
					spellObj.description = "[*In Extreme Cold] crea/obj \u2264500lb save or rise vertically, up to 20 ft; a move target 20 ft";
					}
					if (spellKey == 'fly') {
					spellObj.description = "[*In Extreme Cold] I gain 60 feet fly speed and hover";
					}
				},
				"In extreme cold, I can cast the levitate and fly spells on myself at will."
			]
		},
		weaponOptions: [{
			name : "Crown of Shards",
  			source : [["HGtMH", 460]],
  			regExpSearch : /^(?=.*crown)(?=.*shards).*$/i,
  			type : "Spell",
  			ability : 0,
  			abilitytodamage : false,
			modifiers: [9,""],
  			damage : [4, 6, "piercing"],
  			range : "90 ft",
  			description : "Bns atk; Can bend around corners & ignores half/three-quarters cover",
			useSpellMod : "legendary shard crown",
			selectNow: true,
		}],
	},
};

// Snow Wolf Cowl
MagicItemsList["snow wolf cowl"] = {
	name : "Snow Wolf Cowl",
	source : [["HGtMH", 461]],
	type : "Wondrous item",
	attunement : true,
	description : "",
	action : [["action", "Wolf Form"], ["bonus action", "End Polymorph"]],
	usages : 1,
	recovery : "dawn",
	calcChanges : {
		spellAdd : [
			function (spellKey, spellObj, spName, isDuplicate) {
				if (spellKey == 'polymorph') {
					spellObj.duration = spellObj.duration.replace(/conc, /i, ''); // remove concentration
				}
			}
		]
	},
	choices : ["uncommon", "rare", "very rare"],
	choicesNotInMenu : true,
	"uncommon" : {
		name : "Uncommon Snow Wolf Cowl",
		rarity : "uncommon",
		description : "Few warriors can claim to have single-handedly bested a full-grown snow wolf. Those that do can have the head of such a monster enchanted by a clan shaman, granting them the power to transform into the beast. Such cowls are prized trophies amongst the frozen Norse clans, symbols of might and status.", 
		descriptionFull : 
			"Few warriors can claim to have single-handedly bested a full-grown snow wolf. Those that do can have the head of such a monster enchanted by a clan shaman, granting them the power to transform into the beast. Such cowls are prized trophies amongst the frozen Norse clans, symbols of might and status."+
			"\n" + toUni("Wolf Form.") + " As an action, I can cast the polymorph spell on myself. When cast in this manner, the spell doesn’t require concentration, and I can only transform into a dire wolf, ignoring the spell’s normal restrictions on CR and creature type, with the following changes:"+
			"\n \u2022 " + " I can speak Common, Giant, and Winter Wolf in my wolf form."+
			"\n \u2022 " + " The attack modifier for my attacks in wolf form is +7, and the save DC for my Cold Breath and Bite actions is 15."+
			"\n" + " I can end this spell early as a bonus action. Once this property of the cowl has been used, it can’t be used again until the next dawn.",
		spellcastingBonus: [{
			spells: ["polymorph"],
			selection: ["polymorph"],
			firstCol: "oncelr",
		}],
		calcChanges : {
			spellAdd : [
				function (spellKey, spellObj, spName) {
					if (spellKey == 'polymorph') {
					spellObj.description = "I transform into a Dire Wolf, can speak Common, Giant, and Winter Wolf.";
					}
				},
				"I can only polymorph into a Dire Wolf. Whilst transformed I can speak Common, Giant, and Winter Wolf."
			]
		},
	},
	"rare" : {
		name : "Rare Snow Wolf Cowl",
		rarity : "rare",
		description : "Few warriors can claim to have single-handedly bested a full-grown snow wolf. Those that do can have the head of such a monster enchanted by a clan shaman, granting them the power to transform into the beast. Such cowls are prized trophies amongst the frozen Norse clans, symbols of might and status.", 
		descriptionFull : 
			"Few warriors can claim to have single-handedly bested a full-grown snow wolf. Those that do can have the head of such a monster enchanted by a clan shaman, granting them the power to transform into the beast. Such cowls are prized trophies amongst the frozen Norse clans, symbols of might and status."+
			"\n" + toUni("Wolf Form.") + " As an action, I can cast the polymorph spell on myself. When cast in this manner, the spell doesn’t require concentration, and I can only transform into a winter wolf, ignoring the spell’s normal restrictions on CR and creature type, with the following changes:"+
			"\n \u2022 " + " I can speak Common, Giant, and Winter Wolf in my wolf form."+
			"\n \u2022 " + " The attack modifier for my attacks in wolf form is +7, and the save DC for my Cold Breath and Bite actions is 15."+
			"\n" + " I can end this spell early as a bonus action. Once this property of the cowl has been used, it can’t be used again until the next dawn.",
		spellcastingBonus: [{
			spells: ["polymorph"],
			selection: ["polymorph"],
			firstCol: "oncelr",
		}],
		calcChanges : {
			spellAdd : [
				function (spellKey, spellObj, spName) {
					if (spellKey == 'polymorph') {
					spellObj.description = "I transform into a Winter Wolf, can speak Common, Giant, and Winter Wolf. +7 to hit, DC 15 saves";
					}
				},
				"I can only polymorph into a Winter Wolf. Whilst transformed I can speak Common, Giant, and Winter Wolf. The attack modifier for my attacks in wolf form is +7, and the save DC for my Cold Breath and Bite actions is 15"
			]
		},
	},
	"very rare" : {
		name : "Very Rare Snow Wolf Cowl",
		rarity : "very rare",
		description : "Few warriors can claim to have single-handedly bested a full-grown snow wolf. Those that do can have the head of such a monster enchanted by a clan shaman, granting them the power to transform into the beast. Such cowls are prized trophies amongst the frozen Norse clans, symbols of might and status.", 
		descriptionFull : 
			"Few warriors can claim to have single-handedly bested a full-grown snow wolf. Those that do can have the head of such a monster enchanted by a clan shaman, granting them the power to transform into the beast. Such cowls are prized trophies amongst the frozen Norse clans, symbols of might and status."+
			"\n" + toUni("Wolf Form.") + " As an action, I can cast the polymorph spell on myself. When cast in this manner, the spell doesn’t require concentration, and I can only transform into a winter wolf, ignoring the spell’s normal restrictions on CR and creature type, with the following changes:"+
			"\n \u2022 " + " I can speak Common, Giant, and Winter Wolf in my wolf form."+
			"\n \u2022 " + " The attack modifier for my attacks in wolf form is +9, the save DC for my Cold Breath and Bite actions is 16, my HP in wolf form is 100. I have resistance to cold damage when I wear this cowl."+
			"\n" + " I can end this spell early as a bonus action. Once this property of the cowl has been used, it can’t be used again until the next dawn.",
		spellcastingBonus: [{
			spells: ["polymorph"],
			selection: ["polymorph"],
			firstCol: "oncelr",
		}],
		calcChanges : {
			spellAdd : [
				function (spellKey, spellObj, spName) {
					if (spellKey == 'polymorph') {
					spellObj.description = "I transform into a Winter Wolf w/ 100 HP, can speak Common, Giant, and Winter Wolf. +9 to hit, DC 16";
					}
				},
				"I can only polymorph into a Winter Wolf. Whilst transformed I can speak Common, Giant, and Winter Wolf. The attack modifier for my attacks in wolf form is +9, the save DC for my Cold Breath and Bite actions is 16, and my HP is 100"
			]
		},
		dmgres : ["Cold"],
	},
};

// Wyrm’s Breath Grenade
MagicItemsList["wyrm’s breath grenade"] = {
	name : "Wyrm’s Breath Grenade",
	source : [["HGtMH", 462]],
	type : "Wondrous item",
	description : "",
	choices : ["brass, sleep [very rare]", "bronze, repulsion [rare]", "copper, slow [rare]", "gold, weakening [very rare]", "silver, paralysing [legendary]"],
	choicesNotInMenu : true,
	"brass, sleep [very rare]" : {
		name : "Brass, Sleep [Very Rare]",
		rarity : "very rare",
		description : "Within the beautifully sculpted exterior is housed a dragon’s biomantically-sustained toxin gland, pungent incense, and crushed diamond. Available in a variety of hues, the metal of this grenade-like contraption matches the dragon from which the organ was harvested.", 
		descriptionFull : 
			"Within the beautifully sculpted exterior is housed a dragon’s biomantically-sustained toxin gland, pungent incense, and crushed diamond. Available in a variety of hues, the metal of this grenade-like contraption matches the dragon from which the organ was harvested."+
			"\n" + " As an action, I can throw this magical device onto a surface I can see within 60 feet. Upon impact, the incense ignites, billowing out in a pungent, 15-foot-radius sphere, carrying with it the dragon’s magic. A creature that starts its turn in the area or enters the area for the first time on its turn must make the associated saving throw, suffering the associated effects on a failure. Creatures are affected even if they hold their breath or don’t need to breathe. The cloud lasts for 1 minute or until a strong wind (at least 20 miles per hour) disperses it."+
			"\n" + "Once a grenade has been used, it can’t be used again until the following dawn, and it must be refilled with 100 gp of good-quality incense, as well as a specified value of diamond dust."+
			"\n" + toUni("Brass, Sleep.") + " A creature must succeed on a DC 16 Constitution saving throw or be affected by a heavy drowsiness that causes it to fall unconscious until the start of its next turn. A creature with 80 or more hit points is immune to this effect. This effect ends for a creature if the creature takes damage, or if another creature uses an action to wake it. Diamond dust: 600 gp.",
	},
	"bronze, repulsion [rare]" : {
		name : "Bronze, Repulsion [Rare]",
		rarity : "rare",
		description : "Within the beautifully sculpted exterior is housed a dragon’s biomantically-sustained toxin gland, pungent incense, and crushed diamond. Available in a variety of hues, the metal of this grenade-like contraption matches the dragon from which the organ was harvested.", 
		descriptionFull : 
			"Within the beautifully sculpted exterior is housed a dragon’s biomantically-sustained toxin gland, pungent incense, and crushed diamond. Available in a variety of hues, the metal of this grenade-like contraption matches the dragon from which the organ was harvested."+
			"\n" + " As an action, I can throw this magical device onto a surface I can see within 60 feet. Upon impact, the incense ignites, billowing out in a pungent, 15-foot-radius sphere, carrying with it the dragon’s magic. A creature that starts its turn in the area or enters the area for the first time on its turn must make the associated saving throw, suffering the associated effects on a failure. Creatures are affected even if they hold their breath or don’t need to breathe. The cloud lasts for 1 minute or until a strong wind (at least 20 miles per hour) disperses it."+
			"\n" + "Once a grenade has been used, it can’t be used again until the following dawn, and it must be refilled with 100 gp of good-quality incense, as well as a specified value of diamond dust."+
			"\n" + toUni("Bronze, Repulsion.") + " A creature must succeed on a DC 15 Strength saving throw or be flung up to 60 feet from the centre of the sphere, landing prone and taking 2d6 bludgeoning damage. If a creature collides with another creature, both creatures take an additional 2d6 bludgeoning damage. If a creature collides with a solid object, it takes 4d6 bludgeoning damage instead. Diamond dust: 400 gp.",
	},
	"copper, slow [rare]" : {
		name : "Copper, Slow [Rare]",
		rarity : "rare",
		description : "Within the beautifully sculpted exterior is housed a dragon’s biomantically-sustained toxin gland, pungent incense, and crushed diamond. Available in a variety of hues, the metal of this grenade-like contraption matches the dragon from which the organ was harvested.", 
		descriptionFull : 
			"Within the beautifully sculpted exterior is housed a dragon’s biomantically-sustained toxin gland, pungent incense, and crushed diamond. Available in a variety of hues, the metal of this grenade-like contraption matches the dragon from which the organ was harvested."+
			"\n" + " As an action, I can throw this magical device onto a surface I can see within 60 feet. Upon impact, the incense ignites, billowing out in a pungent, 15-foot-radius sphere, carrying with it the dragon’s magic. A creature that starts its turn in the area or enters the area for the first time on its turn must make the associated saving throw, suffering the associated effects on a failure. Creatures are affected even if they hold their breath or don’t need to breathe. The cloud lasts for 1 minute or until a strong wind (at least 20 miles per hour) disperses it."+
			"\n" + "Once a grenade has been used, it can’t be used again until the following dawn, and it must be refilled with 100 gp of good-quality incense, as well as a specified value of diamond dust."+
			"\n" + toUni("Copper, Slow.") + " A creature must succeed on a DC 15 Constitution saving throw or suffer the effects of the slow spell until the start of its next turn. Diamond dust: 300 gp.",
	},
	"gold, weakening [very rare]" : {
		name : "Gold, Weakening [Very Rare]",
		rarity : "very rare",
		description : "Within the beautifully sculpted exterior is housed a dragon’s biomantically-sustained toxin gland, pungent incense, and crushed diamond. Available in a variety of hues, the metal of this grenade-like contraption matches the dragon from which the organ was harvested.", 
		descriptionFull : 
			"Within the beautifully sculpted exterior is housed a dragon’s biomantically-sustained toxin gland, pungent incense, and crushed diamond. Available in a variety of hues, the metal of this grenade-like contraption matches the dragon from which the organ was harvested."+
			"\n" + " As an action, I can throw this magical device onto a surface I can see within 60 feet. Upon impact, the incense ignites, billowing out in a pungent, 15-foot-radius sphere, carrying with it the dragon’s magic. A creature that starts its turn in the area or enters the area for the first time on its turn must make the associated saving throw, suffering the associated effects on a failure. Creatures are affected even if they hold their breath or don’t need to breathe. The cloud lasts for 1 minute or until a strong wind (at least 20 miles per hour) disperses it."+
			"\n" + "Once a grenade has been used, it can’t be used again until the following dawn, and it must be refilled with 100 gp of good-quality incense, as well as a specified value of diamond dust."+
			"\n" + toUni("Gold, Weakening.") + " A creature must succeed on a DC 16 Constitution saving throw or have disadvantage on all ability checks, attack rolls, and saving throws, and also deal half damage with Strength-based attacks until the end of its next turn. Diamond dust: 1200 gp.",
	},
	"silver, paralysing [legendary]" : {
		name : "Silver, Paralysing [Legendary]",
		rarity : "legendary",
		description : "Within the beautifully sculpted exterior is housed a dragon’s biomantically-sustained toxin gland, pungent incense, and crushed diamond. Available in a variety of hues, the metal of this grenade-like contraption matches the dragon from which the organ was harvested.", 
		descriptionFull : 
			"Within the beautifully sculpted exterior is housed a dragon’s biomantically-sustained toxin gland, pungent incense, and crushed diamond. Available in a variety of hues, the metal of this grenade-like contraption matches the dragon from which the organ was harvested."+
			"\n" + " As an action, I can throw this magical device onto a surface I can see within 60 feet. Upon impact, the incense ignites, billowing out in a pungent, 15-foot-radius sphere, carrying with it the dragon’s magic. A creature that starts its turn in the area or enters the area for the first time on its turn must make the associated saving throw, suffering the associated effects on a failure. Creatures are affected even if they hold their breath or don’t need to breathe. The cloud lasts for 1 minute or until a strong wind (at least 20 miles per hour) disperses it."+
			"\n" + "Once a grenade has been used, it can’t be used again until the following dawn, and it must be refilled with 100 gp of good-quality incense, as well as a specified value of diamond dust."+
			"\n" + toUni("Silver, Paralysing.") + " A creature must succeed on a DC 17 Constitution saving throw or be paralysed until the start of its next turn. Diamond dust: 2400 gp.",
	},
};

// Infested Cultist’s Skull
MagicItemsList["infested cultist’s skull"] = {
	name : "Infested Cultist’s Skull",
	source : [["HGtMH", 463]],
	type : "Wondrous item",
	description : "",
	usages : 7,
	recovery : "dawn",
	additional : "regains 1d4",
	choices : ["uncommon", "very rare"],
	choicesNotInMenu : true,
	"uncommon" : {
		name : "Uncommon Infested Cultist’s Skull",
		rarity : "uncommon",
		description : "This humanoid skull is infested by a parasitic purple plant from an unknown plane. The longer I stare, the more I could swear that the petals sway in response to an unseen wind.", 
		descriptionFull : 
			"This humanoid skull is infested by a parasitic purple plant from an unknown plane. The longer I stare, the more I could swear that the petals sway in response to an unseen wind."+
			"\n" + "The skull contains 7 petals. While holding it, I can use an action to pluck a petal to cast the guiding bolt spell (+5 to hit), dealing necrotic damage instead of radiant. The skull regrows 1d4 plucked petals daily at dawn. If I pluck the last petal, the skull crumbles to dust and is destroyed."+
			"\n" + toUni("Curse.") + " This skull is cursed, and plucking 3 or more petals in a day extends this curse to me. Until the curse is broken with remove curse or similar magic, I am unwilling to part with the skull, keeping it within reach at all times."+
			"\n" + "While cursed, whenever I finish a long rest, a black petal grows on my head. These black petals cannot be removed physically, and any attempt to do so causes me to take 2d6 necrotic damage. If I travel to a different plane while cursed, I grow a further 1d4 black petals."+	
			"\n" + "When the seventh petal has grown on my skull, I die and my body turns to dust, except for my skull, which becomes a new infested cultist’s skull. If the curse is removed, the petals on my head and the infested cultist’s skull are destroyed and crumble to dust.",
		fixedSpAttack : 5,
		spellcastingBonus: [{
			spells: ["guiding bolt"],
			selection: ["guiding bolt"],
		}],
	},
	"very rare" : {
		name : "Very Rare Infested Cultist’s Skull",
		rarity : "very rare",
		description : "This humanoid skull is infested by a parasitic purple plant from an unknown plane. The longer I stare, the more I could swear that the petals sway in response to an unseen wind.", 
		descriptionFull : 
			"This humanoid skull is infested by a parasitic purple plant from an unknown plane. The longer I stare, the more I could swear that the petals sway in response to an unseen wind."+
			"\n" + "The skull contains 7 petals. While holding it, I can use an action to pluck a petal to cast the blight spell (DC 16), dealing necrotic damage instead of radiant. The skull regrows 1d4 plucked petals daily at dawn. If I pluck the last petal, the skull crumbles to dust and is destroyed."+
			"\n" + toUni("Curse.") + " This skull is cursed, and plucking 3 or more petals in a day extends this curse to me. Until the curse is broken with remove curse or similar magic, I am unwilling to part with the skull, keeping it within reach at all times."+
			"\n" + "While cursed, whenever I finish a long rest, a black petal grows on my head. These black petals cannot be removed physically, and any attempt to do so causes me to take 2d6 necrotic damage. If I travel to a different plane while cursed, I grow a further 1d4 black petals."+	
			"\n" + "When the seventh petal has grown on my skull, I die and my body turns to dust, except for my skull, which becomes a new infested cultist’s skull. If the curse is removed, the petals on my head and the infested cultist’s skull are destroyed and crumble to dust.",
		fixedDC : 16,
		spellcastingBonus: [{
			spells: ["blight"],
			selection: ["blight"],
		}],
	},
};

// Lady’s Veil
MagicItemsList["lady’s veil"] = {
	name : "Lady’s Veil",
	source : [["HGtMH", 463]],
	type : "Wondrous item",
	attunement : true,
	rarity : "common",
	description : "This fine-meshed shroud can be socketed on any worn headgear or armour, such as a helmet, cloak, breastplate, or crown. Looking through the mesh, an attuned wearer can detect corpses and creatures ripe for decomposition.", 
	descriptionFull : 
		"This fine-meshed shroud can be socketed on any worn headgear or armour, such as a helmet, cloak, breastplate, or crown. Looking through the mesh, an attuned wearer can detect corpses and creatures ripe for decomposition."+
		"\n" + " As an action, I can open my awareness to magically detect corpses and undead. Until the end of my next turn, I know the location of any corpse or undead creature within 60 feet of me that isn’t behind total cover, and that isn’t protected from divination magic. This sense doesn’t tell me anything about a creature’s capabilities or identity. After I activate this property, I can’t do so again until the following dawn.",
	action : [["action", ""]],
	usages : 1,
	recovery : "dawn",
};

// Longspike
MagicItemsList["longspike"] = {
	name : "Longspike",
	source : [["HGtMH", 464]],
	type : "Weapon (rapier)",
	description : "",
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && /rapier/i.test(v.baseWeaponName) && /longspike/i.test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
				}
			},
			'If I include the word "Longspike" in the name of a rapier, it will be treated as the magic weapon Longspike.'
		],
	},
	choices : ["uncommon", "uncommon (optional attunement)", "very rare", "very rare (optional attunement)"],
	choicesNotInMenu : true,
	"uncommon" : {
		name : "Uncommon Longspike",
		rarity : "uncommon",
		description : "The longspike grants its user the ability to strike from afar, without resorting to the use of unwieldy polearms. When grasped with force, the long, narrow blade extends, increasing the reach of its wielder’s thrust, and can implant a rapidly-growing net of hyphal tethers that can bind and constrict a foe.", 
		descriptionFull : 
			"The longspike grants its user the ability to strike from afar, without resorting to the use of unwieldy polearms. When grasped with force, the long, narrow blade extends, increasing the reach of its wielder’s thrust, and can implant a rapidly-growing net of hyphal tethers that can bind and constrict a foe."+
			"\n" + toUni("Hyphal Stretch.") + " On my turn, I can squeeze the longspike (no action required), causing it to lengthen and increasing the reach of melee attacks I make with it by 5 feet until the end of my turn.",
		weaponOptions : [{
			baseWeapon : "rapier",
			regExpSearch : /^(?=.*longspike).*$/i,
			name : "Uncommon Longspike",
			source : [["HGtMH", 464]],
			description : "(No action required) increase reach by 5 ft",
			selectNow : true
		}],
	},
	"uncommon (optional attunement)" : {
		name : "Uncommon Longspike (OA)",
		rarity : "uncommon",
		attunement : true,
		description : "The longspike grants its user the ability to strike from afar, without resorting to the use of unwieldy polearms. When grasped with force, the long, narrow blade extends, increasing the reach of its wielder’s thrust, and can implant a rapidly-growing net of hyphal tethers that can bind and constrict a foe.", 
		descriptionFull : 
			"The longspike grants its user the ability to strike from afar, without resorting to the use of unwieldy polearms. When grasped with force, the long, narrow blade extends, increasing the reach of its wielder’s thrust, and can implant a rapidly-growing net of hyphal tethers that can bind and constrict a foe."+
			"\n" + toUni("Hyphal Stretch.") + " On my turn, I can squeeze the longspike (no action required), causing it to lengthen and increasing the reach of melee attacks I make with it by 5 feet until the end of my turn."+
			"\n" + toUni("Optional Attunement.") +	 " I can choose to attune to this weapon, causing it to gain the Hyphal Grasp property while I remain attuned to it."+
			"\n" + toUni("OA: Hyphal Grasp.") + " As a bonus action while holding the rapier, I can speak its command word to cause writhing hyphal filaments to grow from it. The next time I hit a creature with a weapon attack using longspike within the next minute, the target must succeed on a DC 13 Strength saving throw or be restrained by the magical hyphae for 1 minute. An affected creature can use an action to repeat the saving throw, ending the effect on a success. After I activate this property, roll a d6. On a 1-2, I can’t activate this property again until the following dawn.",
		weaponOptions : [{
			baseWeapon : "rapier",
			regExpSearch : /^(?=.*longspike).*$/i,
			name : "Uncommon Longspike",
			source : [["HGtMH", 464]],
			description : "(No action required) increase reach by 5 ft; OA: Hyphal Grasp",
			selectNow : true
		}],
		action : [["bonus action", "OA: Hyphal Grasp"]],
	},
	"very rare" : {
		name : "Very Rare Longspike",
		rarity : "very rare",
		description : "The longspike grants its user the ability to strike from afar, without resorting to the use of unwieldy polearms. When grasped with force, the long, narrow blade extends, increasing the reach of its wielder’s thrust, and can implant a rapidly-growing net of hyphal tethers that can bind and constrict a foe.", 
		descriptionFull : 
			"The longspike grants its user the ability to strike from afar, without resorting to the use of unwieldy polearms. When grasped with force, the long, narrow blade extends, increasing the reach of its wielder’s thrust, and can implant a rapidly-growing net of hyphal tethers that can bind and constrict a foe."+
			"\n" + toUni("Hyphal Stretch.") + " On my turn, I can squeeze the longspike (no action required), causing it to lengthen and increasing the reach of melee attacks I make with it by 5 feet until the end of my turn.",
		weaponOptions : [{
			baseWeapon : "rapier",
			regExpSearch : /^(?=.*longspike).*$/i,
			name : "Very Rare Longspike",
			source : [["HGtMH", 464]],
			description : "(No action required) increase reach by 5 ft",
			modifiers : [2, 2],
			selectNow : true
		}],
	},
	"very rare (optional attunement)" : {
		name : "Very Rare Longspike (OA)",		
		rarity : "very rare",
		attunement : true,
		description : "The longspike grants its user the ability to strike from afar, without resorting to the use of unwieldy polearms. When grasped with force, the long, narrow blade extends, increasing the reach of its wielder’s thrust, and can implant a rapidly-growing net of hyphal tethers that can bind and constrict a foe.", 
		descriptionFull : 
			"The longspike grants its user the ability to strike from afar, without resorting to the use of unwieldy polearms. When grasped with force, the long, narrow blade extends, increasing the reach of its wielder’s thrust, and can implant a rapidly-growing net of hyphal tethers that can bind and constrict a foe."+
			"\n" + "I gain a +2 bonus to attack and damage rolls I make with this magic weapon."+
			"\n" + toUni("Hyphal Stretch.") + " On my turn, I can squeeze the longspike (no action required), causing it to lengthen and increasing the reach of melee attacks I make with it by 5 feet until the end of my turn."+
			"\n" + toUni("Optional Attunement.") +	 " I can choose to attune to this weapon, causing it to gain the Hyphal Grasp property while I remain attuned to it."+
			"\n" + toUni("OA: Hyphal Grasp.") + " As a bonus action while holding the rapier, I can speak its command word to cause writhing hyphal filaments to grow from it. The next time I hit a creature with a weapon attack using longspike within the next minute, the target must succeed on a DC 16 Strength saving throw or be restrained by the magical hyphae for 1 minute. An affected creature can use an action to repeat the saving throw, ending the effect on a success. After I activate this property, roll a d6. On a 1-2, I can’t activate this property again until the following dawn."+
			"\n" + toUni("OA: Hyphal Parasite.") + " When I hit a creature with this weapon I can use a bonus action to cast the fungal infection spell on it (save DC 16, no concentration required). After I activate this property, roll a d6. On a 1-2, I can’t activate this property again until the following dawn.",
		weaponOptions : [{
			baseWeapon : "rapier",
			regExpSearch : /^(?=.*longspike).*$/i,
			name : "Very Rare Longspike",
			source : [["HGtMH", 464]],
			description : "(No action required) increase reach by 5 ft; OA: Hyphal Grasp; OA: Hyphal Parasite",
			modifiers : [2, 2],
			selectNow : true
		}],
		action : [["bonus action", "OA: Hyphal Grasp"], ["bonus action", "OA: Hyphal Parasite"]],
		fixedDC : 16,
		spellcastingBonus: [{
			spells: ["fungal infection"],
			selection: ["fungal infection"],
		}],
		calcChanges : {
			spellAdd : [
				function (spellKey, spellObj, spName, isDuplicate) {
					if (spellKey == 'fungal infection') {
						spellObj.duration = spellObj.duration.replace(/conc, /i, ''); // remove concentration
					}
				}
			]
		},
	},
};

// Mycelial Cloak
MagicItemsList["mycelial cloak"] = {
	name : "Mycelial Cloak",
	source : [["HGtMH", 465]],
	type : "Wondrous item",
	attunement : true,
	rarity : "rare",
	description : "This hearty-scented cape is knitted from microscopic threads of autumn-hued mycelia. With alarming rapidity, the hyphae can drain a corpse, leaving it an emaciated husk and restoring its wearer to robust, good health.", 
	descriptionFull : 
		"This hearty-scented cape is knitted from microscopic threads of autumn-hued mycelia. With alarming rapidity, the hyphae can drain a corpse, leaving it an emaciated husk and restoring its wearer to robust, good health."+
		"\n" + toUni("Detritivore.") + " As a bonus action, I can target one Small or larger corpse, or one Small or larger creature with 0 hit points I can see within 15 feet of me, causing my mycelia to burrow over to it and rapidly drain it of nutrients. If the target is alive, it must succeed on a DC 15 Constitution saving throw or fail a death saving throw. Undead have disadvantage on this saving throw. On a failure, or if the target is a corpse, I regain 6d6 hit points. After I activate this feature, I can’t do so again until I finish a short or long rest."+
		"\n" + toUni("Mycelial Deconstruction.") + " As an action, I can wrap the cloak around myself, causing my body, and all the items I am wearing or holding, to dissolve into thousands of mycelial threads. I gain a burrowing speed equal to my walking speed, I can burrow through nonmagical unworked earth and stone, and I don’t disturb the material I  move through."+
		"\n" + "While in this form, I can pass through any microscopic gap large enough for a fungal hypha; have resistance to bludgeoning, piercing, and slashing damage; and can’t talk, manipulate objects, cast spells, or attack. I can reform in an unoccupied space as an action. After I activate this feature, I can’t do so again until I finish a short or long rest.",
	action : [["bonus action", "Detritivore"], ["action", "Mycelial Deconstruction"]],
	usages : 1,
	recovery : "short rest",
};

// Overgrown Barkshield
MagicItemsList["overgrown barkshield"] = {
	name : "Overgrown Barkshield",
	source : [["HGtMH", 466]],
	type : "Armour (shield)",
	attunement : true,
	description : "",
	action : [["action", "Vines and Thorns"]],
	choices : ["uncommon", "rare", "very rare"],
	choicesNotInMenu : true,
	"uncommon" : {
		name : "Uncommon Overgrown Barkshield",
		rarity : "uncommon",
		description : "This crude shield made of bark and wood teems with life as if it were still part of a tree. The smell of sap and various fragrant flowers perfumes the air around me.", 
		descriptionFull : 
			"This crude shield made of bark and wood teems with life as if it were still part of a tree. The smell of sap and various fragrant flowers perfumes the air around me."+
			"\n" + toUni("Bark Armour.") + " As an action, I can place the shield on my torso and speak the command word, causing the wood and vines to wrap around my figure. For one hour, or until I end this effect as an action, I am unable to hold a shield and I gain the following benefits:"+
			"\n \u2022 " + " I gain 1d8 temporary hit points."+
			"\n \u2022 " + " I gain the benefits of the barkskin spell (no concentration required)."+
			"\n \u2022 " + " I have advantage on saving throws made to resist being poisoned."+
			"\n" + "When this effect ends, the barkshield falls from its place on my torso, fading to a lifeless shade of grey. This property can’t be used again until I finish a long rest when the shield blooms with life once more."+
			"\n" + toUni("Vines and Thorns.") + " While attuned to this shield, I can use an action to animate one of the shield’s thorny vines and make a melee weapon attack (+5 to hit) against one target within 30 feet of me. On a hit, the target takes 2d8 piercing damage, and, if the target is a Large or smaller creature, or an object that weighs less than 500 pounds, I pull it up to 10 feet closer to me.",
	},
	"rare" : {
		name : "Rare Overgrown Barkshield",
		rarity : "rare",
		description : "This crude shield made of bark and wood teems with life as if it were still part of a tree. The smell of sap and various fragrant flowers perfumes the air around me.", 
		descriptionFull : 
			"This crude shield made of bark and wood teems with life as if it were still part of a tree. The smell of sap and various fragrant flowers perfumes the air around me."+
			"\n" + toUni("Bark Armour.") + " As an action, I can place the shield on my torso and speak the command word, causing the wood and vines to wrap around my figure. For one hour, or until I end this effect as an action, I am unable to hold a shield and I gain the following benefits:"+
			"\n \u2022 " + " I gain 3d8 temporary hit points."+
			"\n \u2022 " + " I gain the benefits of the barkskin spell (no concentration required)."+
			"\n \u2022 " + " I have advantage on saving throws made to resist being poisoned."+
			"\n" + "When this effect ends, the barkshield falls from its place on my torso, fading to a lifeless shade of grey. This property can’t be used again until I finish a long rest when the shield blooms with life once more."+
			"\n" + toUni("Vines and Thorns.") + " While attuned to this shield, I can use an action to animate one of the shield’s thorny vines and make a melee weapon attack (+8 to hit) against one target within 30 feet of me. On a hit, the target takes 3d8 piercing damage, and, if the target is a Large or smaller creature, or an object that weighs less than 500 pounds, I pull it up to 10 feet closer to me.",
	},
	"very rare" : {
		name : "Very Rare Overgrown Barkshield",
		rarity : "very rare",
		description : "This crude shield made of bark and wood teems with life as if it were still part of a tree. The smell of sap and various fragrant flowers perfumes the air around me.", 
		descriptionFull : 
			"This crude shield made of bark and wood teems with life as if it were still part of a tree. The smell of sap and various fragrant flowers perfumes the air around me."+
			"\n" + toUni("Bark Armour.") + " As an action, I can place the shield on my torso and speak the command word, causing the wood and vines to wrap around my figure. For one hour, or until I end this effect as an action, I am unable to hold a shield and I gain the following benefits:"+
			"\n \u2022 " + " I gain 5d8 temporary hit points."+
			"\n \u2022 " + " I gain the benefits of the barkskin spell (no concentration required)."+
			"\n \u2022 " + " I have advantage on saving throws made to resist being poisoned."+
			"\n" + "When this effect ends, the barkshield falls from its place on my torso, fading to a lifeless shade of grey. This property can’t be used again until I finish a long rest when the shield blooms with life once more."+
			"\n" + toUni("Vines and Thorns.") + " While attuned to this shield, I can use an action to animate one of the shield’s thorny vines and make a melee weapon attack (+10 to hit) against one target within 30 feet of me. On a hit, the target takes 4d8 piercing damage, and, if the target is a Large or smaller creature, or an object that weighs less than 500 pounds, I pull it up to 10 feet closer to me.",
	},
};

// Painblinder Mycaxe
MagicItemsList["painblinder mycaxe"] = {
	name : "Painblinder Mycaxe", 
	nameTest : "Painblinder",
	source : [["HGtMH", 467]],
	type : "Weapon (any axe)",
	description : "",
	action : [["bonus action", "Painblind Spores"]],
	calcChanges : { 
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && /axe/i.test(v.baseWeaponName) && /painblinder/i.test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
				}
			},
			'If I include the word "Painblinder" in the name of an axe, it will be treated as the magic weapon Painblinder Mycaxe.'
		],
	},
	choices : ["uncommon", "rare"],
	choicesNotInMenu : true, 
	"uncommon" : {
		name : "Uncommon Painblinder Mycaxe",
		rarity : "uncommon",
		description : "The wood and iron of this once-pristine axe have been utterly devoured and replaced by a variety of fruiting fungi. Gills funnel along the axe’s blade, holding millions of spores in biomantic suspension, ready to unleash their pain-inhibiting effects when inhaled.", 
		descriptionFull : 
			"The wood and iron of this once-pristine axe have been utterly devoured and replaced by a variety of fruiting fungi. Gills funnel along the axe’s blade, holding millions of spores in biomantic suspension, ready to unleash their pain-inhibiting effects when inhaled."+
			"\n" + toUni("Painblind Spores.") + " As a bonus action while holding this axe, I can inhale its spores, numbing my extremities and stimulating muscle recruitment. Until the start of my next turn, melee weapon attacks I make with this weapon have a +2 bonus to damage rolls and I have resistance to bludgeoning, piercing, and slashing damage."+
			"\n" + "If I use my bonus action to inhale more spores at the beginning of my next turn, the effects continue without interruption. I can prolong the effects in this manner for up to 1 minute, after which the effects end. When the effects end, I become poisoned for a number of minutes equal to ten times the number of rounds I was under the influence of the spores. Once I have benefitted from the Painblind Spores, I can’t benefit from them again until after I finish a long rest.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : ["between", "Painblinder", "[uncommon]"],
			descriptionChange : ["replace", "axe"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /axe/i;
				return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
			}
		},
		calcChanges: {
			atkCalc: [
				function (fields, v, output) {
					if (/painblinder/i.test(v.WeaponTextName)) output.extraDmg += 2;
				},
				"Melee weapon attacks I make with this weapon have a +2 bonus to damage rolls"
			],
		},
		usages : 1,
		recovery : "long rest",
	},
	"rare" : {
		name : "Rare Painblinder Mycaxe",
		rarity : "rare",
		description : "The wood and iron of this once-pristine axe have been utterly devoured and replaced by a variety of fruiting fungi. Gills funnel along the axe’s blade, holding millions of spores in biomantic suspension, ready to unleash their pain-inhibiting effects when inhaled.", 
		descriptionFull : 
			"The wood and iron of this once-pristine axe have been utterly devoured and replaced by a variety of fruiting fungi. Gills funnel along the axe’s blade, holding millions of spores in biomantic suspension, ready to unleash their pain-inhibiting effects when inhaled."+
			"\n" + toUni("Painblind Spores.") + " As a bonus action while holding this axe, I can inhale its spores, numbing my extremities and stimulating muscle recruitment. Until the start of my next turn, melee weapon attacks I make with this weapon have a +3 bonus to damage rolls and I have resistance to bludgeoning, piercing, and slashing damage."+
			"\n" + "While under the influence of Painblind Spores, I have advantage on Strength and Constitution checks as well as Strength and Constitution saving throws."+
			"\n" + "If I use my bonus action to inhale more spores at the beginning of my next turn, the effects continue without interruption. I can prolong the effects in this manner for up to 1 minute, after which the effects end. When the effects end, I become poisoned for a number of minutes equal to ten times the number of rounds I was under the influence of the spores. Once I have benefitted from the Painblind Spores, I can’t benefit from them again until after I finish a short or long rest.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : ["between", "Painblinder", "[rare]"],
			descriptionChange : ["replace", "axe"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /axe/i;
				return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
			}
		},
		calcChanges: {
			atkCalc: [
				function (fields, v, output) {
					if (/painblinder/i.test(v.WeaponTextName)) output.extraDmg += 3;
				},
				"Melee weapon attacks I make with this weapon have a +3 bonus to damage rolls"
			],
		},
		usages : 1,
		recovery : "short rest",
	},
};

// Ring of Fungal Symbiosis
MagicItemsList["ring of fungal symbiosis"] = {
	name : "Ring of Fungal Symbiosis",
	source : [["HGtMH", 468]],
	type : "Ring",
	description : "",
	choices : ["uncommon", "uncommon (optional attunement)", "very rare", "very rare (optional attunement)"],
	choicesNotInMenu : true,
	"uncommon" : {
		name : "Uncommon Ring of Fungal Symbiosis",
		rarity : "uncommon",
		description : "Parasite or symbiote, the exact classification of this loop of living fungus is up for debate. When worn for an extended period, the ring co-opts its host, producing an assortment of fruiting fungal bodies each day. Whether those are of benefit or not is entirely up to how they’re used.", 
		descriptionFull : 
			"Parasite or symbiote, the exact classification of this loop of living fungus is up for debate. When worn for an extended period, the ring co-opts its host, producing an assortment of fruiting fungal bodies each day. Whether those are of benefit or not is entirely up to how they’re used."+
			"\n" + "Whenever I finish a long rest during which I wear this ring, I find a selection of toadstools has grown on the limb that sports this ring. Roll a d4 twice and consult the list below to determine which two mushrooms have grown."+
			"\n" + toUni("1-Boomshroom.") + " As an action, a creature can throw this volatile mushroom at a point it can see within 60 feet of it, where it explodes in a 10-foot-radius sphere of flames. Each creature in the area must make a DC 13 Dexterity saving throw, taking 4d6 fire damage on a failed save, or half as much damage on a successful one. The fire ignites flammable objects in the area that aren’t being worn or carried."+
			"\n" + toUni("2-Bloomshroom.") + " As an action, a creature can eat this mushroom, regaining 2d4 + 2 hit points and gaining advantage on all Constitution saving throws for 1 minute."+
			"\n" + toUni("3-Doomshroom.") + " As an action, a creature can throw this dusky mushroom at a point it can see within 60 feet of it, where it explodes in a 10-foot-radius sphere of purple spores. Each creature in the area must succeed on a DC 13 Constitution saving throw or become afflicted by the bane spell for 1 minute. An affected creature can repeat the saving throw at the end of each of its turns, ending the effect on a success."+
			"\n" + toUni("4-Gloomshroom.") + " As an action, a creature can eat this mushroom. For the next hour, it gains darkvision out to a range of 60 feet. If it already has darkvision, the range of this vision is increased by 30 feet."+
			"\n" + "The mushrooms last on my arm until I finish a long rest, but lose all magical effects 10 minutes after they are plucked. I can pluck a mushroom as part of the action to use it.",
	},
	"uncommon (optional attunement)" : {
		name : "Uncommon Ring of Fungal Symbiosis (OA)",
		rarity : "uncommon",
		attunement : true,
		description : "Parasite or symbiote, the exact classification of this loop of living fungus is up for debate. When worn for an extended period, the ring co-opts its host, producing an assortment of fruiting fungal bodies each day. Whether those are of benefit or not is entirely up to how they’re used.", 
		descriptionFull : 
			"Parasite or symbiote, the exact classification of this loop of living fungus is up for debate. When worn for an extended period, the ring co-opts its host, producing an assortment of fruiting fungal bodies each day. Whether those are of benefit or not is entirely up to how they’re used."+
			"\n" + "Whenever I finish a long rest during which I wear this ring, I find a selection of toadstools has grown on the limb that sports this ring. Roll a d4 twice and consult the list below to determine which two mushrooms have grown."+
			"\n" + toUni("1-Boomshroom.") + " As an action, a creature can throw this volatile mushroom at a point it can see within 60 feet of it, where it explodes in a 10-foot-radius sphere of flames. Each creature in the area must make a DC 13 Dexterity saving throw, taking 4d6 fire damage on a failed save, or half as much damage on a successful one. The fire ignites flammable objects in the area that aren’t being worn or carried."+
			"\n" + toUni("2-Bloomshroom.") + " As an action, a creature can eat this mushroom, regaining 2d4 + 2 hit points and gaining advantage on all Constitution saving throws for 1 minute."+
			"\n" + toUni("3-Doomshroom.") + " As an action, a creature can throw this dusky mushroom at a point it can see within 60 feet of it, where it explodes in a 10-foot-radius sphere of purple spores. Each creature in the area must succeed on a DC 13 Constitution saving throw or become afflicted by the bane spell for 1 minute. An affected creature can repeat the saving throw at the end of each of its turns, ending the effect on a success."+
			"\n" + toUni("4-Gloomshroom.") + " As an action, a creature can eat this mushroom. For the next hour, it gains darkvision out to a range of 60 feet. If it already has darkvision, the range of this vision is increased by 30 feet."+
			"\n" + "The mushrooms last on my arm until I finish a long rest, but lose all magical effects 10 minutes after they are plucked. I can pluck a mushroom as part of the action to use it."+
			"\n" + toUni("Optional Attunement.") + " I can choose to attune to this item. While attuned, I can roll the d4 to determine which mushrooms grew four times instead of twice.",
	},
	"very rare" : {
		name : "Very Rare Ring of Fungal Symbiosis",
		rarity : "very rare",
		description : "Parasite or symbiote, the exact classification of this loop of living fungus is up for debate. When worn for an extended period, the ring co-opts its host, producing an assortment of fruiting fungal bodies each day. Whether those are of benefit or not is entirely up to how they’re used.", 
		descriptionFull : 
			"Parasite or symbiote, the exact classification of this loop of living fungus is up for debate. When worn for an extended period, the ring co-opts its host, producing an assortment of fruiting fungal bodies each day. Whether those are of benefit or not is entirely up to how they’re used."+
			"\n" + "Whenever I finish a long rest during which I wear this ring, I find a selection of toadstools has grown on the limb that sports this ring. Roll a d4 twice and consult the list below to determine which two mushrooms have grown."+
			"\n" + toUni("1-Boomshroom.") + " As an action, a creature can throw this volatile mushroom at a point it can see within 60 feet of it, where it explodes in a 10-foot-radius sphere of flames. Each creature in the area must make a DC 16 Dexterity saving throw, taking 4d6 fire damage on a failed save, or half as much damage on a successful one. The fire ignites flammable objects in the area that aren’t being worn or carried."+
			"\n" + toUni("2-Bloomshroom.") + " As an action, a creature can eat this mushroom, regaining 2d4 + 2 hit points and gaining advantage on all Constitution saving throws for 1 minute."+
			"\n" + toUni("3-Doomshroom.") + " As an action, a creature can throw this dusky mushroom at a point it can see within 60 feet of it, where it explodes in a 10-foot-radius sphere of purple spores. Each creature in the area must succeed on a DC 16 Constitution saving throw or become afflicted by the bane spell for 1 minute. An affected creature can repeat the saving throw at the end of each of its turns, ending the effect on a success."+
			"\n" + toUni("4-Gloomshroom.") + " As an action, a creature can eat this mushroom. For the next hour, it gains darkvision out to a range of 60 feet. If it already has darkvision, the range of this vision is increased by 30 feet."+
			"\n" + toUni("5-Rheumshroom.") + " As an action, a creature can throw this sticky mushroom at a point it can see within 60 feet of it, where it explodes in a 10-foot-radius sphere of arthritis-inducing spores. Each creature in the area must succeed on a DC 16 Constitution saving throw or suffer the effects of the slow spell for 1 minute. An affected creature can repeat the saving throw at the end of each of its turns, ending the effect on a success."+
			"\n" + toUni("6-Zoomshroom.") + " As an action, a creature can eat this mushroom, gaining the benefits of the haste spell for 1 minute. At the start of each of the affected creature’s turns, roll a d6. On a 1, the effect ends and the wave of lethargy described in the spell sweeps over it."+
			"\n" + "The mushrooms last on my arm until I finish a long rest, but lose all magical effects 10 minutes after they are plucked. I can pluck a mushroom as part of the action to use it.",
	},
	"very rare (optional attunement)" : {
		name : "Very Rare Ring of Fungal Symbiosis (OA)",		
		rarity : "very rare (optional attunement)",
		attunement : true,
		description : "Parasite or symbiote, the exact classification of this loop of living fungus is up for debate. When worn for an extended period, the ring co-opts its host, producing an assortment of fruiting fungal bodies each day. Whether those are of benefit or not is entirely up to how they’re used.", 
		descriptionFull : 
			"Parasite or symbiote, the exact classification of this loop of living fungus is up for debate. When worn for an extended period, the ring co-opts its host, producing an assortment of fruiting fungal bodies each day. Whether those are of benefit or not is entirely up to how they’re used."+
			"\n" + "Whenever I finish a long rest during which I wear this ring, I find a selection of toadstools has grown on the limb that sports this ring. Roll a d4 twice and consult the list below to determine which two mushrooms have grown."+
			"\n" + toUni("1-Boomshroom.") + " As an action, a creature can throw this volatile mushroom at a point it can see within 60 feet of it, where it explodes in a 10-foot-radius sphere of flames. Each creature in the area must make a DC 16 Dexterity saving throw, taking 4d6 fire damage on a failed save, or half as much damage on a successful one. The fire ignites flammable objects in the area that aren’t being worn or carried."+
			"\n" + toUni("2-Bloomshroom.") + " As an action, a creature can eat this mushroom, regaining 2d4 + 2 hit points and gaining advantage on all Constitution saving throws for 1 minute."+
			"\n" + toUni("3-Doomshroom.") + " As an action, a creature can throw this dusky mushroom at a point it can see within 60 feet of it, where it explodes in a 10-foot-radius sphere of purple spores. Each creature in the area must succeed on a DC 16 Constitution saving throw or become afflicted by the bane spell for 1 minute. An affected creature can repeat the saving throw at the end of each of its turns, ending the effect on a success."+
			"\n" + toUni("4-Gloomshroom.") + " As an action, a creature can eat this mushroom. For the next hour, it gains darkvision out to a range of 60 feet. If it already has darkvision, the range of this vision is increased by 30 feet."+
			"\n" + toUni("5-Rheumshroom.") + " As an action, a creature can throw this sticky mushroom at a point it can see within 60 feet of it, where it explodes in a 10-foot-radius sphere of arthritis-inducing spores. Each creature in the area must succeed on a DC 16 Constitution saving throw or suffer the effects of the slow spell for 1 minute. An affected creature can repeat the saving throw at the end of each of its turns, ending the effect on a success."+
			"\n" + toUni("6-Zoomshroom.") + " As an action, a creature can eat this mushroom, gaining the benefits of the haste spell for 1 minute. At the start of each of the affected creature’s turns, roll a d6. On a 1, the effect ends and the wave of lethargy described in the spell sweeps over it."+
			"\n" + "The mushrooms last on my arm until I finish a long rest, but lose all magical effects 10 minutes after they are plucked. I can pluck a mushroom as part of the action to use it."+
			"\n" + toUni("Optional Attunement.") + " I can choose to attune to this item. While attuned, I can roll the d4 to determine which mushrooms grew four times instead of twice."+
			"\n" + toUni("OA: Fungal Plating.") + " When I finish a long rest while wearing the ring, hard sheets of organic mycoprotein cover my body. I gain the benefits of the barkskin spell for the next 24 hours (no concentration required). While this magical effect persists, I gain 5 temporary hit points at the start of each of my turns.",
	},
};

// Sporespreader
MagicItemsList["sporespreader"] = {
	name : "Sporespreader", 
	source : [["HGtMH", 469]],
	type : "Rod, staff, or wand",
	description : "",
	attunement : true,
	prerequisite: "Requires attunement by a spellcaster",
	prereqeval: function (v) { return v.isSpellcaster; },
	spellcastingAbility: "class",
	choices : ["uncommon", "rare"],
	choicesNotInMenu : true,
	"uncommon" : {
		name : "Uncommon Sporespreader",
		rarity : "uncommon",
		description : "Used as a magical focus of the more humanoid-esque, ‘customer-facing’ hyphan colonists, sporespreaders are enchanted to facilitate the calming and assimilation of would-be interlopers. The magic in these foci can poison foes with infectious spores or generate obscuring thick black clouds to allow their wielders to flee dangerous situations.", 
		descriptionFull : 
			"Used as a magical focus of the more humanoid-esque, ‘customer-facing’ hyphan colonists, sporespreaders are enchanted to facilitate the calming and assimilation of would-be interlopers. The magic in these foci can poison foes with infectious spores or generate obscuring thick black clouds to allow their wielders to flee dangerous situations."+
			"\n" + "This focus has 7 charges and regains 1d4 + 3 expended charges daily at dawn. While holding the sporespreader, I can use an action to expend 1 or more of its charges to cast one of the following spells from it, using my spell save DC and spellcasting ability: calm emotions (2 charges) and charm person (1 charge)."+
			"\n" + "I can also cast the spore cloud and smokescreen cantrips from the focus without using any charges.",
		usages: 7,
		recovery: "dawn",
		additional: "regains 1d4+3",
		spellFirstColTitle: "Ch",
		spellcastingBonus: [{
			name: "0 charges",
			spells: ["spore cloud", "smokescreen"],
			selection: ["spore cloud", "smokescreen"],
			firstCol: "atwill",
			times : 2,
		},{
			name: "1 charge",
			spells: ["charm person"],
			selection: ["charm person"],
			firstCol: 1
		},{
			name: "2 charges",
			spells: ["calm emotions"],
			selection: ["calm emotions"],
			firstCol: 2
		}],
	},
	"rare" : {
		name : "Rare Sporespreader",
		rarity : "rare",
		description : "Used as a magical focus of the more humanoid-esque, ‘customer-facing’ hyphan colonists, sporespreaders are enchanted to facilitate the calming and assimilation of would-be interlopers. The magic in these foci can poison foes with infectious spores or generate obscuring thick black clouds to allow their wielders to flee dangerous situations.", 
		descriptionFull : 
			"Used as a magical focus of the more humanoid-esque, ‘customer-facing’ hyphan colonists, sporespreaders are enchanted to facilitate the calming and assimilation of would-be interlopers. The magic in these foci can poison foes with infectious spores or generate obscuring thick black clouds to allow their wielders to flee dangerous situations."+
			"\n" + "This focus has 10 charges and regains 1d6 + 4 expended charges daily at dawn. While holding the sporespreader, I can use an action to expend 1 or more of its charges to cast one of the following spells from it, using my spell save DC and spellcasting ability: calm emotions (2 charges) and charm person (1 charge)."+
			"\n" + "I can also cast the spore cloud and smokescreen cantrips from the focus without using any charges.",
		usages: 10,
		recovery: "dawn",
		additional: "regains 1d6+4",
		spellFirstColTitle: "Ch",
		spellcastingBonus: [{
			name: "0 charges",
			spells: ["spore cloud", "smokescreen"],
			selection: ["spore cloud", "smokescreen"],
			firstCol: "atwill",
			times : 2,
		},{
			name: "1 charge",
			spells: ["charm person"],
			selection: ["charm person"],
			firstCol: 1
		},{
			name: "2 charges",
			spells: ["calm emotions", "mortiferous pulse"],
			selection: ["calm emotions", "mortiferous pulse"],
			firstCol: 2,
			times : 2,
		},{
			name: "3 charges",
			spells: ["enrage"],
			selection: ["enrage"],
			firstCol: 3
		}],
	},
};

// Broodmother’s Embrace
MagicItemsList["broodmother’s embrace"] = {
	name : "Broodmother’s Embrace", 
	source : [["HGtMH", 470]],
	type : "Wondrous item",
	description : "",
	action : [["action", "Tentacle Lash"],["action", "Chrysalis"]],
	limfeaname : "Chrysalis",
	usages : 1,
	recovery : "dawn",
	attunement : true,
	choices : ["rare", "very rare", "legendary"],
	choicesNotInMenu : true,
	"rare" : {
		name : "Rare Broodmother’s Embrace",
		rarity : "rare",
		description : "This thick, rubbery overcoat sports several writhing tentacles that can biomantically fuse with their wearer, acting as gills, propulsion, and a formidable, concealed weapon. When in danger, the coat can encapsulate me in a protective chrysalis, nourishing me with stored regenerative mucous.", 
		descriptionFull : 
			"This thick, rubbery overcoat sports several writhing tentacles that can biomantically fuse with their wearer, acting as gills, propulsion, and a formidable, concealed weapon. When in danger, the coat can encapsulate me in a protective chrysalis, nourishing me with stored regenerative mucous."+
			"\n" + "While wearing the coat underwater, tentacles wrap around my throat, fusing with my vascular system and allowing me to breathe underwater. The tentacles also propel me, giving me a swimming speed of 40 feet."+
			"\n" + toUni("Tentacle Lash.") + " As an action, I can make a melee spell attack (+7 to hit) against a creature within 10 feet of me. On a hit, the creature takes 3d8 bludgeoning damage, and, if it is Medium or smaller, must make a DC 15 Strength saving throw or be knocked prone."+
			"\n" + toUni("Chrysalis.") + " I can use an action to cause the coat to expand and harden, encasing me in a regenerative, chitinous casing which grants me 20 temporary hit points. While encased, my speed is reduced to 0 feet, I can’t take actions or reactions (except the action to emerge from the chrysalis), and I regain 2d6 hit points at the start of each of my turns. I can regain no more than 30 hit points in this way while encased. These effects end when the temporary hit points are lost, after 1 minute, or when I decide to emerge from the chrysalis as an action, whichever comes first. After I activate this property, I can’t do so again until the next dawn.",
		weaponOptions: [{
			name : "Tentacle Lash",
  			source : [["HGtMH", 470]],
  			regExpSearch : /^(?=.*tentacle)(?=.*lash).*$/i,
  			type : "Spell",
  			ability : 0,
  			abilitytodamage : false,
			modifiers: [7,""],
  			damage : [3, 8, "bludgeoning"],
  			range : "10 ft",
  			description : "On hit if crea Medium or smaller DC 15 STR save or prone",
			selectNow: true,
		}],
		speed : { swim : { spd : 40, enc : 30 } }
	},
	"very rare" : {
		name : "Very Rare Broodmother’s Embrace",
		rarity : "very rare",
		description : "This thick, rubbery overcoat sports several writhing tentacles that can biomantically fuse with their wearer, acting as gills, propulsion, and a formidable, concealed weapon. When in danger, the coat can encapsulate me in a protective chrysalis, nourishing me with stored regenerative mucous.", 
		descriptionFull : 
			"This thick, rubbery overcoat sports several writhing tentacles that can biomantically fuse with their wearer, acting as gills, propulsion, and a formidable, concealed weapon. When in danger, the coat can encapsulate me in a protective chrysalis, nourishing me with stored regenerative mucous."+
			"\n" + "While wearing the coat underwater, tentacles wrap around my throat, fusing with my vascular system and allowing me to breathe underwater. The tentacles also propel me, giving me a swimming speed of 50 feet."+
			"\n" + toUni("Tentacle Lash.") + " As an action, I can make a melee spell attack (+8 to hit) against a creature within 15 feet of me. On a hit, the creature takes 4d8 bludgeoning damage, and, if it is Large or smaller, must make a DC 16 Strength saving throw or be knocked prone."+
			"\n" + toUni("Chrysalis.") + " I can use an action to cause the coat to expand and harden, encasing me in a regenerative, chitinous casing which grants me 40 temporary hit points. While encased, my speed is reduced to 0 feet, I can’t take actions or reactions (except the action to emerge from the chrysalis), and I regain 4d6 hit points at the start of each of my turns. I can regain no more than 60 hit points in this way while encased. These effects end when the temporary hit points are lost, after 1 minute, or when I decide to emerge from the chrysalis as an action, whichever comes first. After I activate this property, I can’t do so again until the next dawn.",
		weaponOptions: [{
			name : "Tentacle Lash",
  			source : [["HGtMH", 470]],
  			regExpSearch : /^(?=.*tentacle)(?=.*lash).*$/i,
  			type : "Spell",
  			ability : 0,
  			abilitytodamage : false,
			modifiers: [8,""],
  			damage : [4, 8, "bludgeoning"],
  			range : "15 ft",
  			description : "On hit if crea Large or smaller DC 16 STR save or prone",
			selectNow: true,
		}],
		speed : { swim : { spd : 50, enc : 40 } }
	},
	"legendary" : {
		name : "Legendary Broodmother’s Embrace",
		rarity : "legendary",
		description : "This thick, rubbery overcoat sports several writhing tentacles that can biomantically fuse with their wearer, acting as gills, propulsion, and a formidable, concealed weapon. When in danger, the coat can encapsulate me in a protective chrysalis, nourishing me with stored regenerative mucous.", 
		descriptionFull : 
			"This thick, rubbery overcoat sports several writhing tentacles that can biomantically fuse with their wearer, acting as gills, propulsion, and a formidable, concealed weapon. When in danger, the coat can encapsulate me in a protective chrysalis, nourishing me with stored regenerative mucous."+
			"\n" + "While wearing the coat underwater, tentacles wrap around my throat, fusing with my vascular system and allowing me to breathe underwater. The tentacles also propel me, giving me a swimming speed of 60 feet."+
			"\n" + "The coat’s many eyes enhance my peripheral vision; while wearing the coat I have advantage on initiative checks while not blinded."+
			"\n" + toUni("Tentacle Lash.") + " As an action, I can make a melee spell attack (+8 to hit) against a creature within 15 feet of me. On a hit, the creature takes 4d8 bludgeoning damage, and, if it is Large or smaller, must make a DC 16 Strength saving throw or be knocked prone."+
			"\n" + toUni("Chrysalis.") + " I can use an action to cause the coat to expand and harden, encasing me in a regenerative, chitinous casing which grants me 60 temporary hit points. While encased, my speed is reduced to 0 feet, I can’t take actions or reactions (except the action to emerge from the chrysalis), and I regain 6d6 hit points at the start of each of my turns. I can regain no more than 90 hit points in this way while encased. These effects end when the temporary hit points are lost, after 1 minute, or when I decide to emerge from the chrysalis as an action, whichever comes first. After I activate this property, I can’t do so again until the next dawn.",	
		weaponOptions: [{
			name : "Tentacle Lash",
  			source : [["HGtMH", 470]],
  			regExpSearch : /^(?=.*tentacle)(?=.*lash).*$/i,
  			type : "Spell",
  			ability : 0,
  			abilitytodamage : false,
			modifiers: [9,""],
  			damage : [5, 8, "bludgeoning"],
  			range : "20 ft",
  			description : "On hit if crea Large or smaller DC 17 STR save or prone",
			selectNow: true,
		}],
		speed : { swim : { spd : 60, enc : 50 } },
		advantages : [["Initiative", true]],
	},
};

// Broodmother’s Eye
MagicItemsList["broodmother’s eye"] = {
	name : "Broodmother’s Eye",
	source : [["HGtMH", 472]],
	type : "Wondrous item",
	attunement : true,
	rarity : "common",
	description : "The socketed aboleth’s eye fixes on a humanoid that I can see within 60 feet of me that isn’t hostile towards me, making me seem both alluring and imposing (no action required). For the next minute, I have advantage on all Charisma (Persuasion and Intimidation) checks made to interact with the creature. After this minute elapses, the creature realizes that I used magic to influence its mood. How it reacts is at the GM’s discretion.", 
	descriptionFull : 
		"While socketed in an item, the item gains the Intense Stare property."+
		"\n" + toUni("Intense Stare.") + " The socketed aboleth’s eye fixes on a humanoid that I can see within 60 feet of me that isn’t hostile towards me, making me seem both alluring and imposing (no action required). For the next minute, I have advantage on all Charisma (Persuasion and Intimidation) checks made to interact with the creature. After this minute elapses, the creature realizes that I used magic to influence its mood. How it reacts is at the GM’s discretion."+
		"\n" + "Once I use this property, I can’t do so again until the next dawn.",
	usages : 1,
	recovery : "dawn",
};

// Broodslinger
MagicItemsList["broodslinger"] = {
	name : "Broodslinger",
	source : [["HGtMH", 472]],
	type : "Wondrous item",
	description : "",
	attunement : true,
	choices : ["uncommon", "rare", "very rare"],
	choicesNotInMenu : true,
	"uncommon" : {
		name : "Uncommon Broodmother’s Embrace",
		rarity : "uncommon",
		description : "This magic item can hold a maximum of 10 charges. Whenever I finish a short or long rest, I can expend any number of Hit Dice to charge the broodslinger. For each Hit Die spent in this way, roll each die and add my Constitution modifier. The broodslinger regains a number of charges equal to the total.", 
		descriptionFull : 
			"This magic item can hold a maximum of 10 charges. Whenever I finish a short or long rest, I can expend any number of Hit Dice to charge the broodslinger. For each Hit Die spent in this way, roll each die and add my Constitution modifier. The broodslinger regains a number of charges equal to the total."+
			"\n" + toUni("Spikes.") + " My unarmed strikes deal 1 additional piercing damage on a hit."+
			"\n" + toUni("Mucous Spit.") + " As an action, I can cause the broodslinger to spit a globule of acidic mucous at a target within 60 feet of me. Make a ranged spell attack (+5 to hit). On a hit, the target takes 2d6 acid damage. I can expend charges immediately before making the attack roll to enhance the mucous in the following way (no action required):"+
			"\n \u2022 " +  toUni("Splashing Mucous (1 Charge):") + " Hit or miss, acid splashes onto adjacent creatures. The target, and each creature within 5 feet of the target, must succeed on a DC 13 Dexterity saving throw or take 1d4 acid damage.",
		usages : 10,
		recovery : "short rest",
		additional : "expend Hit Dice, regain HD + Con Mod",
		weaponOptions: [{
			name : "Mucous Spit",
  			source : [["HGtMH", 473]],
  			regExpSearch : /^(?=.*mucous)(?=.*spit).*$/i,
  			type : "Spell",
  			ability : 0,
  			abilitytodamage : false,
			modifiers: [5,""],
  			damage : [2, 6, "acid"],
  			range : "60 ft",
  			description : "Splashing Mucous (1 Charge)",
			selectNow: true,
		}],
		calcChanges: {
			atkAdd : [
				function (fields, v) {
					if (v.baseWeaponName == 'unarmed strike') 
					output.extraDmg += 1;
					fields.Description += (fields.Description ? '; ' : '') + '+1 piercing dmg;';
				},
				"My unarmed strikes deal 1 additional piercing damage on a hit"
			],
		},
	},
	"rare" : {
		name : "Rare Broodmother’s Embrace",
		rarity : "rare",
		description : "This magic item can hold a maximum of 15 charges. Whenever I finish a short or long rest, I can expend any number of Hit Dice to charge the broodslinger. For each Hit Die spent in this way, roll each die and add my Constitution modifier. The broodslinger regains a number of charges equal to the total.", 
		descriptionFull : 
			"This magic item can hold a maximum of 15 charges. Whenever I finish a short or long rest, I can expend any number of Hit Dice to charge the broodslinger. For each Hit Die spent in this way, roll each die and add my Constitution modifier. The broodslinger regains a number of charges equal to the total."+
			"\n" + toUni("Spikes.") + " My unarmed strikes deal 1d4 additional piercing damage on a hit."+
			"\n" + toUni("Mucous Spit.") + " As an action, I can cause the broodslinger to spit a globule of acidic mucous at a target within 60 feet of me. Make a ranged spell attack (+7 to hit). On a hit, the target takes 3d6 acid damage. I can expend charges immediately before making the attack roll to enhance the mucous in the following way (no action required):"+
			"\n \u2022 " +  toUni("Splashing Mucous (1 Charge):") + " Hit or miss, acid splashes onto adjacent creatures. The target, and each creature within 5 feet of the target, must succeed on a DC 15 Dexterity saving throw or take 2d4 acid damage."+
			"\n \u2022 " +  toUni("Parasitic Mucous (2 Charges):") + " Parasites with the potential to poison infest the mucous. On a hit, the target must succeed on a DC 15 Constitution saving throw or be infected with a parasite and become poisoned. While poisoned, the creature can’t regain hit points. An affected creature can repeat the saving throw at the end of each of its turns, ending the effect on a success."+
			"\n" + "I can only enhance the mucous using one option at a time.",
		usages : 15,
		recovery : "short rest",
		additional : "expend Hit Dice, regain HD + Con Mod",
		weaponOptions: [{
			name : "Mucous Spit",
  			source : [["HGtMH", 473]],
  			regExpSearch : /^(?=.*mucous)(?=.*spit).*$/i,
  			type : "Spell",
  			ability : 0,
  			abilitytodamage : false,
			modifiers: [7,""],
  			damage : [3, 6, "acid"],
  			range : "60 ft",
  			description : "Splashing Mucous (1 Charge), Parasitic Mucous (2 Charges)",
			selectNow: true,
		}],
		calcChanges: {
			atkAdd : [
				function (fields, v) {
					if (v.baseWeaponName == 'unarmed strike') 
					fields.Description += (fields.Description ? '; ' : '') + '+1d4 piercing dmg;';
				},
				"My unarmed strikes deal 1d4 additional piercing damage on a hit"
			],
		},
	},
	"very rare" : {
		name : "Very Rare Broodmother’s Embrace",
		rarity : "very rare",
		description : "This magic item can hold a maximum of 20 charges. Whenever I finish a short or long rest, I can expend any number of Hit Dice to charge the broodslinger. For each Hit Die spent in this way, roll each die and add my Constitution modifier. The broodslinger regains a number of charges equal to the total.", 
		descriptionFull : 
			"This magic item can hold a maximum of 20 charges. Whenever I finish a short or long rest, I can expend any number of Hit Dice to charge the broodslinger. For each Hit Die spent in this way, roll each die and add my Constitution modifier. The broodslinger regains a number of charges equal to the total."+
			"\n" + toUni("Spikes.") + " My unarmed strikes deal 2d4 additional piercing damage on a hit."+
			"\n" + toUni("Mucous Spit.") + " As an action, I can cause the broodslinger to spit a globule of acidic mucous at a target within 60 feet of me. Make a ranged spell attack (+8 to hit). On a hit, the target takes 4d6 acid damage. I can expend charges immediately before making the attack roll to enhance the mucous in the following way (no action required):"+
			"\n \u2022 " +  toUni("Splashing Mucous (1 Charge):") + " Hit or miss, acid splashes onto adjacent creatures. The target, and each creature within 5 feet of the target, must succeed on a DC 16 Dexterity saving throw or take 3d4 acid damage."+
			"\n \u2022 " +  toUni("Parasitic Mucous (2 Charges):") + " Parasites with the potential to poison infest the mucous. On a hit, the target must succeed on a DC 16 Constitution saving throw or be infected with a parasite and become poisoned. While poisoned, the creature can’t regain hit points. An affected creature can repeat the saving throw at the end of each of its turns, ending the effect on a success."+
			"\n \u2022 " +  toUni("Infectious Mucous (4 Charges):") + " An infectious disease pervades the mucous. On a hit, the target must succeed on a DC 16 Constitution saving throw or be infected and poisoned as if by the contagion spell. Roll a d6 to determine contagion’s disease at random."+
			"\n" + "I can only enhance the mucous using one option at a time.",
		usages : 20,
		recovery : "short rest",
		additional : "expend Hit Dice, regain HD + Con Mod",
		weaponOptions: [{
			name : "Mucous Spit",
  			source : [["HGtMH", 473]],
  			regExpSearch : /^(?=.*mucous)(?=.*spit).*$/i,
  			type : "Spell",
  			ability : 0,
  			abilitytodamage : false,
			modifiers: [8,""],
  			damage : [4, 6, "acid"],
  			range : "60 ft",
  			description : "Splashing Mucous (1 Charge), Parasitic Mucous (2 Charges), Infectious Mucous (4 Charges)",
			selectNow: true,
		}],
		calcChanges: {
			atkAdd : [
				function (fields, v) {
					if (v.baseWeaponName == 'unarmed strike') 
					fields.Description += (fields.Description ? '; ' : '') + '+2d4 piercing dmg;';
				},
				"My unarmed strikes deal 2d4 additional piercing damage on a hit"
			],
		},
	},
};

// Tome of Living Memories
MagicItemsList["tome of living memories"] = {
	name : "Tome of Living Memories",
	source : [["HGtMH", 474]],
	type : "Wondrous item",
	description : "",
	prerequisite : "Requires attunement by a wizard",
	prereqeval : function(v) { return classes.known.wizard ? true : false; },
	choices : ["uncommon", "uncommon (optional attunement)", "rare", "rare (optional attunement)", "very rare", "very rare (optional attunement)"],
	choicesNotInMenu : true,
	"uncommon" : {
		name : "Uncommon Tome of Living Memories",
		rarity : "uncommon",
		description : "The pages of this book are littered with the shifting memories of all the aboleth broodmother’s eyes have seen. This deluge of information includes historical occurrences, the gods, and all things arcane, in addition to several spells. Unfortunately, the script is a shifting mire of letters that only the most astute can decipher.", 
		descriptionFull : 
			"The pages of this book are littered with the shifting memories of all the aboleth broodmother’s eyes have seen. This deluge of information includes historical occurrences, the gods, and all things arcane, in addition to several spells. Unfortunately, the script is a shifting mire of letters that only the most astute can decipher."+
			"\n" + toUni("Knowledge from Beyond.") + " Over the course of a minute, I can attempt to discern information from the broodmother’s memories. Make a DC 10 Intelligence check. On a success, I gain proficiency in Arcana, History, Nature, and Religion for the next 10 minutes. On a failure, I take psychic damage equal to my level."+
			"\n" + toUni("Shrouded Spells.") + " In a similar manner, I can spend 10 minutes attempting to cast one of the following spells, requiring no material components and without expending a spell slot. At the end of the 10 minutes, make an Intelligence check. The DC equals 10 plus the spell’s level. On a success, I cast the spell. On a failure, I don’t cast the spell and I take psychic damage equal to twice the spell’s level."+
			"\n \u2022 " + " Identify (1st level), Augury (2nd level), Clairvoyance (3rd level)",
		spellcastingBonus: [{
			name: "Tome of Living Memories",
			spells: ["identify", "augury", "clairvoyance"],
			selection: ["identify", "augury", "clairvoyance"],
			times : 3,
		}],
	},
	"uncommon (optional attunement)" : {
		name : "Uncommon Tome of Living Memories (OA)",
		rarity : "uncommon",
		attunement : true,
		description : "The pages of this book are littered with the shifting memories of all the aboleth broodmother’s eyes have seen. This deluge of information includes historical occurrences, the gods, and all things arcane, in addition to several spells. Unfortunately, the script is a shifting mire of letters that only the most astute can decipher.", 
		descriptionFull : 
			"The pages of this book are littered with the shifting memories of all the aboleth broodmother’s eyes have seen. This deluge of information includes historical occurrences, the gods, and all things arcane, in addition to several spells. Unfortunately, the script is a shifting mire of letters that only the most astute can decipher."+
			"\n" + toUni("Knowledge from Beyond.") + " Over the course of a minute, I can attempt to discern information from the broodmother’s memories. Make a DC 10 Intelligence check. On a success, I gain proficiency in Arcana, History, Nature, and Religion for the next 10 minutes. On a failure, I take psychic damage equal to my level."+
			"\n" + toUni("Shrouded Spells.") + " In a similar manner, I can spend 10 minutes attempting to cast one of the following spells, requiring no material components and without expending a spell slot. At the end of the 10 minutes, make an Intelligence check. The DC equals 10 plus the spell’s level. On a success, I cast the spell. On a failure, I don’t cast the spell and I take psychic damage equal to twice the spell’s level."+
			"\n \u2022 " + " Identify (1st level), Augury (2nd level), Clairvoyance (3rd level)"+
			"\n" + toUni("Optional Attunement.") + " A wizard can attune to this item, which becomes augmented with the Knowing Tome property for the duration."+
			"\n" + toUni("OA: Knowing Tome.") + " I can use this tome as a spellbook and an arcane focus. While I use it as my spellbook, I may cast the following spells as if I had them prepared: comprehend languages and detect thoughts.",
		spellcastingBonus: [{
			name: "Tome of Living Memories",
			spells: ["identify", "augury", "clairvoyance", "comprehend languages", "detect thoughts"],
			selection: ["identify", "augury", "clairvoyance", "comprehend languages", "detect thoughts"],
			times : 5,
		}],
	},
	"rare" : {
		name : "Rare Tome of Living Memories",
		rarity : "rare",
		description : "The pages of this book are littered with the shifting memories of all the aboleth broodmother’s eyes have seen. This deluge of information includes historical occurrences, the gods, and all things arcane, in addition to several spells. Unfortunately, the script is a shifting mire of letters that only the most astute can decipher.", 
		descriptionFull : 
			"The pages of this book are littered with the shifting memories of all the aboleth broodmother’s eyes have seen. This deluge of information includes historical occurrences, the gods, and all things arcane, in addition to several spells. Unfortunately, the script is a shifting mire of letters that only the most astute can decipher."+
			"\n" + toUni("Knowledge from Beyond.") + " Over the course of a minute, I can attempt to discern information from the broodmother’s memories. Make a DC 10 Intelligence check. On a success, I gain proficiency in Arcana, History, Nature, and Religion for the next 10 minutes. On a failure, I take psychic damage equal to my level."+
			"\n" + toUni("Shrouded Spells.") + " In a similar manner, I can spend 10 minutes attempting to cast one of the following spells, requiring no material components and without expending a spell slot. At the end of the 10 minutes, make an Intelligence check. The DC equals 10 plus the spell’s level. On a success, I cast the spell. On a failure, I don’t cast the spell and I take psychic damage equal to twice the spell’s level."+
			"\n \u2022 " + " Identify (1st level), Augury (2nd level), Clairvoyance (3rd level), Divination (4th level), Legend lore (5th level)",
		spellcastingBonus: [{
			name: "Tome of Living Memories",
			spells: ["identify", "augury", "clairvoyance", "divination", "legend lore"],
			selection: ["identify", "augury", "clairvoyance", "divination", "legend lore"],
			times : 5,
		}],
	},
	"rare (optional attunement)" : {
		name : "Rare Tome of Living Memories (OA)",
		rarity : "rare",
		attunement : true,
		description : "The pages of this book are littered with the shifting memories of all the aboleth broodmother’s eyes have seen. This deluge of information includes historical occurrences, the gods, and all things arcane, in addition to several spells. Unfortunately, the script is a shifting mire of letters that only the most astute can decipher.", 
		descriptionFull : 
			"The pages of this book are littered with the shifting memories of all the aboleth broodmother’s eyes have seen. This deluge of information includes historical occurrences, the gods, and all things arcane, in addition to several spells. Unfortunately, the script is a shifting mire of letters that only the most astute can decipher."+
			"\n" + toUni("Knowledge from Beyond.") + " Over the course of a minute, I can attempt to discern information from the broodmother’s memories. Make a DC 10 Intelligence check. On a success, I gain proficiency in Arcana, History, Nature, and Religion for the next 10 minutes. On a failure, I take psychic damage equal to my level."+
			"\n" + toUni("Shrouded Spells.") + " In a similar manner, I can spend 10 minutes attempting to cast one of the following spells, requiring no material components and without expending a spell slot. At the end of the 10 minutes, make an Intelligence check. The DC equals 10 plus the spell’s level. On a success, I cast the spell. On a failure, I don’t cast the spell and I take psychic damage equal to twice the spell’s level."+
			"\n \u2022 " + " Identify (1st level), Augury (2nd level), Clairvoyance (3rd level), Divination (4th level), Legend lore (5th level)"+
			"\n" + toUni("Optional Attunement.") + " A wizard can attune to this item, which becomes augmented with the Knowing Tome property for the duration."+
			"\n" + toUni("OA: Knowing Tome.") + " I can use this tome as a spellbook and an arcane focus. While I use it as my spellbook, I may cast the following spells as if I had them prepared: comprehend languages and detect thoughts."+
			"\n" + "When I cast spells from the Shrouded Spells property using this tome, it is the disembodied voice of Slkvol the broodmother that answers. The Knowing Tome property becomes augmented as follows: While I use this tome as my spellbook, I can prepare 1 additional wizard spell and I know the guidance cantrip, which is a wizard spell for me.",
		spellcastingBonus: [{
			name: "Tome of Living Memories",
			spells: ["identify", "augury", "clairvoyance", "comprehend languages", "detect thoughts", "comprehend languages", "detect thoughts", "guidance"],
			selection: ["identify", "augury", "clairvoyance", "comprehend languages", "detect thoughts", "comprehend languages", "detect thoughts", "guidance"],
			times : 8,
		}],
	},
	"very rare" : {
		name : "Very Rare Tome of Living Memories",
		rarity : "very rare",
		description : "The pages of this book are littered with the shifting memories of all the aboleth broodmother’s eyes have seen. This deluge of information includes historical occurrences, the gods, and all things arcane, in addition to several spells. Unfortunately, the script is a shifting mire of letters that only the most astute can decipher.", 
		descriptionFull : 
			"The pages of this book are littered with the shifting memories of all the aboleth broodmother’s eyes have seen. This deluge of information includes historical occurrences, the gods, and all things arcane, in addition to several spells. Unfortunately, the script is a shifting mire of letters that only the most astute can decipher."+
			"\n" + toUni("Knowledge from Beyond.") + " Over the course of a minute, I can attempt to discern information from the broodmother’s memories. Make a DC 10 Intelligence check. On a success, I gain proficiency in Arcana, History, Nature, and Religion for the next 10 minutes. On a failure, I take psychic damage equal to my level."+
			"\n" + toUni("Shrouded Spells.") + " In a similar manner, I can spend 10 minutes attempting to cast one of the following spells, requiring no material components and without expending a spell slot. At the end of the 10 minutes, make an Intelligence check. The DC equals 10 plus the spell’s level. On a success, I cast the spell. On a failure, I don’t cast the spell and I take psychic damage equal to twice the spell’s level."+
			"\n \u2022 " + " Identify (1st level), Augury (2nd level), Clairvoyance (3rd level), Divination (4th level), Legend lore (5th level), Contact other plane (5th level), Find the path (6th level)",
		spellcastingBonus: [{
			name: "Tome of Living Memories",
			spells: ["identify", "augury", "clairvoyance", "divination", "legend lore", "contact other plane", "find the path"],
			selection: ["identify", "augury", "clairvoyance", "divination", "legend lore", "contact other plane", "find the path"],
			times : 7,
		}],
	},
	"very rare (optional attunement)" : {
		name : "Very Rare Tome of Living Memories (OA)",
		rarity : "very rare",
		attunement : true,
		description : "The pages of this book are littered with the shifting memories of all the aboleth broodmother’s eyes have seen. This deluge of information includes historical occurrences, the gods, and all things arcane, in addition to several spells. Unfortunately, the script is a shifting mire of letters that only the most astute can decipher.", 
		descriptionFull : 
			"The pages of this book are littered with the shifting memories of all the aboleth broodmother’s eyes have seen. This deluge of information includes historical occurrences, the gods, and all things arcane, in addition to several spells. Unfortunately, the script is a shifting mire of letters that only the most astute can decipher."+
			"\n" + toUni("Knowledge from Beyond.") + " Over the course of a minute, I can attempt to discern information from the broodmother’s memories. Make a DC 10 Intelligence check. On a success, I gain proficiency in Arcana, History, Nature, and Religion for the next 10 minutes. On a failure, I take psychic damage equal to my level."+
			"\n" + toUni("Shrouded Spells.") + " In a similar manner, I can spend 10 minutes attempting to cast one of the following spells, requiring no material components and without expending a spell slot. At the end of the 10 minutes, make an Intelligence check. The DC equals 10 plus the spell’s level. On a success, I cast the spell. On a failure, I don’t cast the spell and I take psychic damage equal to twice the spell’s level."+
			"\n \u2022 " + " Identify (1st level), Augury (2nd level), Clairvoyance (3rd level), Divination (4th level), Legend lore (5th level), Contact other plane (5th level), Find the path (6th level)"+
			"\n" + toUni("Optional Attunement.") + " A wizard can attune to this item, which becomes augmented with the Knowing Tome property for the duration."+
			"\n" + toUni("OA: Knowing Tome.") + " I can use this tome as a spellbook and an arcane focus. While I use it as my spellbook, I may cast the following spells as if I had them prepared: comprehend languages and detect thoughts."+
			"\n" + "When I cast spells from the Shrouded Spells property using this tome, it is the disembodied voice of Slkvol the broodmother that answers. The Knowing Tome property becomes augmented as follows: While I use this tome as my spellbook, I can prepare 2 additional wizard spells and I know the guidance cantrip, which is a wizard spell for me.",
		spellcastingBonus: [{
			name: "Tome of Living Memories",
			spells: ["identify", "augury", "clairvoyance", "comprehend languages", "detect thoughts", "comprehend languages", "detect thoughts", "guidance", "contact other plane", "find the path"],
			selection: ["identify", "augury", "clairvoyance", "comprehend languages", "detect thoughts", "comprehend languages", "detect thoughts", "guidance", "contact other plane", "find the path"],
			times : 10,
		}],
	},
};

// Astral Luggage
MagicItemsList["astral luggage"] = {
	name : "Astral Luggage",
	source : [["HGtMH", 476]],
	type : "Wondrous item",
	description : "",
	choices : ["uncommon", "uncommon (optional attunement)", "very rare", "very rare (optional attunement)"],
	choicesNotInMenu : true,
	"uncommon" : {
		name : "Uncommon Astral Luggage",
		rarity : "uncommon",
		description : "This luggage contains a filtered portal to the edges of the Astral Plane, specifically the areas where beings from The Anomalies slink from their far-away plane to the timeless astral expanse.",
		descriptionFull : 
			"This luggage contains a filtered portal to the edges of the Astral Plane, specifically the areas where beings from The Anomalies slink from their far-away plane to the timeless astral expanse."+
			"\n" + toUni("Portal.") + " The astral luggage can be opened to a two-foot-by-one-foot opening. This opening repels creatures, prohibiting their entry, but any object I place inside the luggage floats off into the Astral Plane."+
			"\n" + toUni("Special Fastenings.") + " On the luggage are several special buckles, zips, or clips, which I can unfasten to cause magical effects. Once I unfasten a fastening, it can’t be unfastened again until the next dawn, at which point it reseals itself. If a save DC is required, use DC 13. I gain the following action options:"+
			"\n \u2022 " + toUni("Ebony Clasp.") + " As an action, I can unfasten the clasp and throw the luggage at a point I can see within 30 feet of me, where it instantly opens, spewing squirming ebony tentacles in a 20-foot square. This area becomes affected by the black tentacles spell for 1 minute (no concentration required). When the spell ends, the tentacles disappear and the luggage closes.",
	},
	"uncommon (optional attunement)" : {
		name : "Uncommon Astral Luggage (OA)",
		rarity : "uncommon",
		attunement : true,
		description : "This luggage contains a filtered portal to the edges of the Astral Plane, specifically the areas where beings from The Anomalies slink from their far-away plane to the timeless astral expanse.",
		descriptionFull : 
			"This luggage contains a filtered portal to the edges of the Astral Plane, specifically the areas where beings from The Anomalies slink from their far-away plane to the timeless astral expanse."+
			"\n" + toUni("Portal.") + " The astral luggage can be opened to a two-foot-by-one-foot opening. This opening repels creatures, prohibiting their entry, but any object I place inside the luggage floats off into the Astral Plane."+
			"\n" + toUni("Special Fastenings.") + " On the luggage are several special buckles, zips, or clips, which I can unfasten to cause magical effects. Once I unfasten a fastening, it can’t be unfastened again until the next dawn, at which point it reseals itself. If a save DC is required, use DC 15. I gain the following action options:"+
			"\n \u2022 " + toUni("Ebony Clasp.") + " As an action, I can unfasten the clasp and throw the luggage at a point I can see within 30 feet of me, where it instantly opens, spewing squirming ebony tentacles in a 20-foot square. This area becomes affected by the black tentacles spell for 1 minute (no concentration required). When the spell ends, the tentacles disappear and the luggage closes. If I am attuned to the luggage I am immune to this spell’s effects.",
	},
	"very rare" : {
		name : "Very Rare Astral Luggage",
		rarity : "very rare",
		description : "This luggage contains a filtered portal to the edges of the Astral Plane, specifically the areas where beings from The Anomalies slink from their far-away plane to the timeless astral expanse.",
		descriptionFull : 
			"This luggage contains a filtered portal to the edges of the Astral Plane, specifically the areas where beings from The Anomalies slink from their far-away plane to the timeless astral expanse."+
			"\n" + toUni("Portal.") + " The astral luggage can be opened to a two-foot-by-one-foot opening. This opening repels creatures, prohibiting their entry, but any object I place inside the luggage floats off into the Astral Plane."+
			"\n" + toUni("Special Fastenings.") + " On the luggage are several special buckles, zips, or clips, which I can unfasten to cause magical effects. Once I unfasten a fastening, it can’t be unfastened again until the next dawn, at which point it reseals itself. If a save DC is required, use DC 15. I gain the following action options:"+
			"\n \u2022 " + toUni("Ebony Clasp.") + " As an action, I can unfasten the clasp and throw the luggage at a point I can see within 30 feet of me, where it instantly opens, spewing squirming ebony tentacles in a 20-foot square. This area becomes affected by the black tentacles spell for 1 minute (no concentration required). When the spell ends, the tentacles disappear and the luggage closes."+
			"\n \u2022 " + toUni("Amethyst Buckle.") + " As an action, I can unfasten this buckle and throw the luggage at a point I can see within 30 feet of me, where it instantly opens and casts the conjure anomaly spell (no concentration required)."+
			"\n \u2022 " + toUni("Moonstone Dial.") + " As an action, I can turn this dial to a symbol representing a specific plane, and press it, causing it to unfasten. As part of the same action, I can throw it to a point I can see within 30 feet of me, where it instantly opens. Until the end of my next turn, the luggage’s opening becomes a portal to a random location on the chosen plane that Medium or smaller creatures can move through using 5 feet of movement. At the end of my next turn, the luggage folds in on itself and appears at that location on the destination plane.",
	},
	"very rare (optional attunement)" : {
		name : "Very Rare Astral Luggage (OA)",
		rarity : "very rare",
		attunement : true,
		description : "This luggage contains a filtered portal to the edges of the Astral Plane, specifically the areas where beings from The Anomalies slink from their far-away plane to the timeless astral expanse.",
		descriptionFull : 
			"This luggage contains a filtered portal to the edges of the Astral Plane, specifically the areas where beings from The Anomalies slink from their far-away plane to the timeless astral expanse."+
			"\n" + toUni("Portal.") + " The astral luggage can be opened to a two-foot-by-one-foot opening. This opening repels creatures, prohibiting their entry, but any object I place inside the luggage floats off into the Astral Plane."+
			"\n" + toUni("Special Fastenings.") + " On the luggage are several special buckles, zips, or clips, which I can unfasten to cause magical effects. Once I unfasten a fastening, it can’t be unfastened again until the next dawn, at which point it reseals itself. If a save DC is required, use DC 15. I gain the following action options:"+
			"\n \u2022 " + toUni("Ebony Clasp.") + " As an action, I can unfasten the clasp and throw the luggage at a point I can see within 30 feet of me, where it instantly opens, spewing squirming ebony tentacles in a 20-foot square. This area becomes affected by the black tentacles spell for 1 minute (no concentration required). When the spell ends, the tentacles disappear and the luggage closes. If I am attuned to the luggage I am immune to this spell’s effects."+
			"\n \u2022 " + toUni("Amethyst Buckle.") + " As an action, I can unfasten this buckle and throw the luggage at a point I can see within 30 feet of me, where it instantly opens and casts the conjure anomaly spell (no concentration required). If I am attuned to this item, the aberration conjured is under my control; otherwise, the aberration is hostile to all creatures."+
			"\n \u2022 " + toUni("Moonstone Dial.") + " As an action, I can turn this dial to a symbol representing a specific plane, and press it, causing it to unfasten. As part of the same action, I can throw it to a point I can see within 30 feet of me, where it instantly opens. Until the end of my next turn, the luggage’s opening becomes a portal to a random location on the chosen plane that Medium or smaller creatures can move through using 5 feet of movement. At the end of my next turn, the luggage folds in on itself and appears at that location on the destination plane. If I am attuned to the luggage, I can attempt to direct the portal to a specific location, as per the teleport spell.",
	},
};			

// Dreamy the Lucid
MagicItemsList["dreamy the lucid"] = {
	name : "Dreamy the Lucid",
	source : [["HGtMH", 477]],
	type : "Wondrous item",
	rarity : "uncommon",
	description : "These adorable stuffed toys can be found in bedrooms following the intrusion of a dreamholder into a settlement’s collective dreamscape. Each toy’s magic gives the villagers autonomy over their dreams, and acts as a preventative measure should another aberration try to take over the villagers’ dreams again.", 
	descriptionFull : 
		"These adorable stuffed toys can be found in bedrooms following the intrusion of a dreamholder into a settlement’s collective dreamscape. Each toy’s magic gives the villagers autonomy over their dreams, and acts as a preventative measure should another aberration try to take over the villagers’ dreams again."+
		"\n" + "While this toy is on my person, magic can’t put me to sleep. If I fall asleep while holding this stuffy, its stimulating enchantment magic activates my psyche, causing me to become a lucid dreamer. While lucid dreaming in this way, I am aware if a creature uses the dream spell to influence me. In addition, if I am asleep when initiative is rolled, I instantly awaken and aren’t surprised.",
};

// Hammer Time
MagicItemsList["hammer time"] = {
	name : "Hammer Time",
	source : [["HGtMH", 477]],
	type : "Weapon (any hammer)",
	action : [["bonus action", "Chronal Blink"]],
	description : "",
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && /club|hammer|mace|maul/i.test(v.baseWeaponName) && /time/i.test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
				}
			},
			'If I include the word "Time" in the name of a hammer, it will be treated as the magic weapon Hammer Time.'
		],
	},
	choices : ["uncommon", "very rare"],
	choicesNotInMenu : true,
	"uncommon" : {
		rarity : "uncommon",
		description : "Never has the saying “smash something into next week” been so apt. With an hourglass filled with brilliant platinum sand, this magical impact weapon utilises the dreamholder’s command over time dilation to throw its victims forward in time.", 
		descriptionFull : 
			"Never has the saying “smash something into next week” been so apt. With an hourglass filled with brilliant platinum sand, this magical impact weapon utilises the dreamholder’s command over time dilation to throw its victims forward in time."+ 
			"\n" + "This weapon has 3 charges and regains all expended charges daily at dawn."+
			"\n" + toUni("Chronal Blink.") + " As a bonus action, I can twist the weapon’s pommel, expending 1 charge and causing the sand to begin churning in defiance of gravity. The next creature I hit with an attack using this weapon within the next minute must make a DC 15 Charisma saving throw. On a failed saving throw, the target disappears as it gets shunted forwards in time, reappearing in the space from which it disappeared, or the nearest unoccupied space if that space is occupied, at the end of my next turn.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : ["between", "", "Time [uncommon]"], 
			descriptionChange : ["replace", "hammer"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /club|hammer|mace|maul/i;
				return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
			}
		},

		usages : 3,
		recovery : "dawn",
		additional: "regains 1d6+4",

	},
	"very rare" : {
		rarity : "very rare",
		description : "Never has the saying “smash something into next week” been so apt. With an hourglass filled with brilliant platinum sand, this magical impact weapon utilises the dreamholder’s command over time dilation to throw its victims forward in time.", 
		descriptionFull : 
			"Never has the saying “smash something into next week” been so apt. With an hourglass filled with brilliant platinum sand, this magical impact weapon utilises the dreamholder’s command over time dilation to throw its victims forward in time."+ 
			"\n" + "This weapon has 7 charges and regains all expended charges daily at dawn."+
			"\n" + toUni("Chronal Blink.") + " As a bonus action, I can twist the weapon’s pommel, expending 1 charge and causing the sand to begin churning in defiance of gravity. The next creature I hit with an attack using this weapon within the next minute must make a DC 16 Charisma saving throw. On a failed saving throw, the target disappears as it gets shunted forwards in time, reappearing in the space from which it disappeared, or the nearest unoccupied space if that space is occupied, at the end of my next turn."+
			"\n" + toUni("Detachable Eye.") + " As an action, I can detach the eye from the centre of the weapon’s shaft, placing it on a surface to which it adheres for the next hour. The eye relays a constant stream of visual information to the larger eye on the weapon, which transforms to become a screen through which I can view what the smaller eye can see. At the end of the hour, the smaller eye teleports back to the weapon. Once I use this property, it can’t be used again until the next dawn.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : ["between", "", "Time [very rare]"],
			descriptionChange : ["replace", "hammer"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /club|hammer|mace|maul/i;
				return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
			}
		},
		extraLimitedFeatures : [{
			name : "Hammer Time",
			usages : 7,
			recovery : "dawn",
		},{
			name : "Detachable Eye",
			usages : 1,
			recovery : "dawn",
		}],
	},
};

// Robes of Beaureve
MagicItemsList["robes of beaureve"] = {
	name : "Robes of Beaureve",
	source : [["HGtMH", 478]],
	type : "Wondrous item",
	attunement : true,
	action : [["bonus action", "Incorporeality"]],
	description : "",
	choices : ["rare", "legendary"],
	choicesNotInMenu : true,
	"rare" : {
		name : "Rare Robes of Beaureve",
		rarity : "rare",
		description : "Made from the stuff of dreams, the cuffs and hem of this ethereal robe fade into translucent purple smoke, and the robes’ lining is sewn from the fabric of the night sky. A creature wearing these robes can become temporarily incorporeal, slipping through locked doors, blood-thirsty demons, or out of uncomfortable conversations. Owners of such a garment also find themselves incredibly productive, with dishes cleaned and chainmail oiled each morning...",
		descriptionFull : 
			"Made from the stuff of dreams, the cuffs and hem of this ethereal robe fade into translucent purple smoke, and the robes’ lining is sewn from the fabric of the night sky. A creature wearing these robes can become temporarily incorporeal, slipping through locked doors, blood-thirsty demons, or out of uncomfortable conversations. Owners of such a garment also find themselves incredibly productive, with dishes cleaned and chainmail oiled each morning..."+ 
			"\n" + "This robe has 3 charges and regains all expended charges daily at dawn."+
			"\n" + toUni("Incorporeality.") + " As a bonus action, I can expend 1 charge to become incorporeal until the start of my next turn. While incorporeal, I gain resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks, and can move through other creatures and objects as if they were difficult terrain. If I end my turn inside a creature or object, I am shunted to the nearest unoccupied space, taking 1d10 force damage for every 5 feet I am shunted."+
			"\n" + toUni("Spellcasting.") + " I can spend charges to cast the following spells (save DC 15). I must spend a number of charges equal to the level at which I cast the spell."+
			"\n" + "Daydream, Sleep, Dreamwalk"+
			"\n" + toUni("Sleepwalker.") + " I can’t be put to sleep against my will. When I fall into a nonmagical sleep while wearing these robes, I can specify one intention, such as ‘organising my collection of buttons’ or ‘oiling my chainmail’. While I sleep, I can perform light activities that fulfil this intention while still meeting the requirements of a long rest.",
		usages : 3,
		recovery : "dawn",
		fixedDC : 15,
		spellcastingBonus: [{
			name: "Robes of Beaureve",
			spells: ["daydream", "sleep", "dreamwalk"],
			selection: ["daydream", "sleep", "dreamwalk"],
			times : 3,
		}],
	},
	"legendary" : {
		name : "Legendary Robes of Beaureve",
		rarity : "legendary",
		description : "Made from the stuff of dreams, the cuffs and hem of this ethereal robe fade into translucent purple smoke, and the robes’ lining is sewn from the fabric of the night sky. A creature wearing these robes can become temporarily incorporeal, slipping through locked doors, blood-thirsty demons, or out of uncomfortable conversations. Owners of such a garment also find themselves incredibly productive, with dishes cleaned and chainmail oiled each morning...",
		descriptionFull : 
			"Made from the stuff of dreams, the cuffs and hem of this ethereal robe fade into translucent purple smoke, and the robes’ lining is sewn from the fabric of the night sky. A creature wearing these robes can become temporarily incorporeal, slipping through locked doors, blood-thirsty demons, or out of uncomfortable conversations. Owners of such a garment also find themselves incredibly productive, with dishes cleaned and chainmail oiled each morning..."+ 
			"\n" + "This robe has 3 charges and regains all expended charges daily at dawn."+
			"\n" + toUni("Incorporeality.") + " As a bonus action, I can expend 1 charge to become incorporeal until the start of my next turn. While incorporeal, I gain resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks, and can move through other creatures and objects as if they were difficult terrain. If I end my turn inside a creature or object, I am shunted to the nearest unoccupied space, taking 1d10 force damage for every 5 feet I am shunted."+
			"\n" + toUni("Spellcasting.") + " I can spend charges to cast the following spells (save DC 17). I must spend a number of charges equal to the level at which I cast the spell."+
			"\n" + "Daydream, Sleep, Dreamwalk, Dream, Astral Projection"+
			"\n" + toUni("Sleepwalker.") + " I can’t be put to sleep against my will. When I fall into a nonmagical sleep while wearing these robes, I can specify one intention, such as ‘organising my collection of buttons’ or ‘oiling my chainmail’. While I sleep, I can perform light activities that fulfil this intention while still meeting the requirements of a long rest."+
			"\n" + toUni("Language of the Anomalies.") + " While I wear these robes, I can speak, read, and write Deep Speech, and have advantage on Charisma checks made to interact with aberrations.",
		usages : 9,
		recovery : "dawn",
		additional: "regains 1d6+3",
		fixedDC : 17,
		spellcastingBonus: [{
			name: "Robes of Beaureve",
			spells: ["daydream", "sleep", "dreamwalk", "dream", "astral projection"],
			selection: ["daydream", "sleep", "dreamwalk", "dream", "astral projection"],
			times : 5,
		}],
		languageProfs : ["Deep Speech"],
	},
};

// Second Chance
MagicItemsList["second chance"] = {
	name : "Second Chance",
	source : [["HGtMH", 479]],
	type : "Wondrous item",
	rarity : "uncommon",
	description : "A pocketwatch that keeps perfect time is always a useful bit of kit. Socketed on any clothing or armour, this specimen is even more special, allowing its user a second chance to perform some action.", 
	descriptionFull : 
		"A pocketwatch that keeps perfect time is always a useful bit of kit. Socketed on any clothing or armour, this specimen is even more special, allowing its user a second chance to perform some action."+
		"\n" + "As a bonus action, immediately before I make an ability check or attack roll, I can activate the stopwatch, setting a call-back marker. After I make the ability check or attack roll (and after I know the outcome), I can choose to rewind time by a few seconds to the moment I took the bonus action (no action required). I must then reroll the ability check or attack roll and use the new result. Whether or not I choose to rewind to the callback marker, after I use this property, it can’t be used again until the next dawn.",
	usages : 1,
	recovery : "dawn",
	action : [["bonus action", ""]],
};

// Time Splitter
MagicItemsList["time splitter"] = {
	name : "Time Splitter", 
	source : [["HGtMH", 479]],
	type : "Weapon (any axe)",
	attunement : true,
	description : "",
	action : [["bonus action", "Pause"],["bonus action", "Time Dilation"]],
	calcChanges : { 
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && /axe/i.test(v.baseWeaponName) && (/^(?=.*time)(?=.*splitter).*$/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
				}
			},
			'If I include the word "Time Splitter" in the name of an axe, it will be treated as the magic weapon Time Splitter.'
		],
	},
	spellcastingBonus: [{
		name: "Time Splitter",
		spells: ["haste"],
		selection: ["haste"],
		times : 1,
	}],
	choices : ["uncommon", "rare"],
	choicesNotInMenu : true, 
	"uncommon" : {
		rarity : "uncommon",
		description : "The time splitter is just the tool for an almighty adventurer who’s always a little too slow to get where they need to be exactly in the nick of time. Harnessing the time dilative power of the dreamholder, this magic weapon lets its wielder swing back in time, or speed the flow of time for itself, allowing it to act more quickly.", 
		descriptionFull : 
			"The time splitter is just the tool for an almighty adventurer who’s always a little too slow to get where they need to be exactly in the nick of time. Harnessing the time dilative power of the dreamholder, this magic weapon lets its wielder swing back in time, or speed the flow of time for itself, allowing it to act more quickly."+
			"\n" + "This magic weapon has 4 charges and regains 1d4 expended charges daily at dawn."+
			"\n" + toUni("Pause.") + " As a bonus action, I can flip the axe around anti-clockwise in my hands, expending 1 charge. Until the end of my next turn, any creature or object that moves leaves a ghostly image of itself at the moment I activated this property. I can target this ghostly image with attacks, spells, and effects as if the creature were still in that space, though the effects appear on the target wherever it is now."+
			"\n" + toUni("Time Dilation.") + " As a bonus action, I can tap into this weapon’s chronomantic magic, casting the haste spell on myself (no concentration required). When I do so, the GM rolls 1d3; the result (which the GM keeps secret) is how many rounds the spell lasts (ending at the end of my turn). After I activate this property, I can’t do so again until the next dawn.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : ["between", "Time Splitter", "[uncommon]"],
			descriptionChange : ["replace", "axe"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /axe/i;
				return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
			}
		},
		extraLimitedFeatures : [{
			name : "Time Splitter",
			usages : 4,
			recovery : "dawn",
			additional: "regains 1d4",
		},{
			name : "Time Dilation",
			usages : 1,
			recovery : "dawn",
		}],
	},
	"rare" : {
		rarity : "rare",
		description : "The time splitter is just the tool for an almighty adventurer who’s always a little too slow to get where they need to be exactly in the nick of time. Harnessing the time dilative power of the dreamholder, this magic weapon lets its wielder swing back in time, or speed the flow of time for itself, allowing it to act more quickly.", 
		descriptionFull : 
			"The time splitter is just the tool for an almighty adventurer who’s always a little too slow to get where they need to be exactly in the nick of time. Harnessing the time dilative power of the dreamholder, this magic weapon lets its wielder swing back in time, or speed the flow of time for itself, allowing it to act more quickly."+
			"\n" + "This magic weapon has 4 charges and regains 1d4 expended charges daily at dawn."+
			"\n" + toUni("Pause.") + " As a bonus action, I can flip the axe around anti-clockwise in my hands, expending 1 charge. Until the end of my next turn, any creature or object that moves leaves a ghostly image of itself at the moment I activated this property. I can target this ghostly image with attacks, spells, and effects as if the creature were still in that space, though the effects appear on the target wherever it is now."+
			"\n" + toUni("Time Dilation.") + " As a bonus action, I can tap into this weapon’s chronomantic magic, casting the haste spell on myself (no concentration required). When I do so, the GM rolls 1d4 + 1; the result (which the GM keeps secret) is how many rounds the spell lasts (ending at the end of my turn). After I activate this property, I can’t do so again until the next dawn.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : ["between", "Time Splitter", "[rare]"],
			descriptionChange : ["replace", "axe"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /axe/i;
				return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
			}
		},
		extraLimitedFeatures : [{
			name : "Time Splitter",
			usages : 9,
			recovery : "dawn",
			additional: "regains 1d6+3",
		},{
			name : "Time Dilation",
			usages : 1,
			recovery : "dawn",
		}],
	},
};

// Claws of Corruption
MagicItemsList["claws of corruption"] = {
	name : "Claws of Corruption", 
	source : [["HGtMH", 480]],
	type : "Weapon (claw)",
	attunement : true,
	description : "",
	choices : ["uncommon", "very rare"],
	choicesNotInMenu : true, 
	"uncommon" : {
		rarity : "uncommon",
		description : "These rough, menacing gauntlets, constructed from the razor-sharp claws of the pygmy rakshasa, thrum with the power of its hellish essence. The pointed tips of the claws easily dig into rock and metal alike, letting their wearer climb the roughest surfaces with feline agility.", 
		descriptionFull : 
			"These rough, menacing gauntlets, constructed from the razor-sharp claws of the pygmy rakshasa, thrum with the power of its hellish essence. The pointed tips of the claws easily dig into rock and metal alike, letting their wearer climb the roughest surfaces with feline agility."+
			"\n" + "The claws have 4 charges and regain all expended charges daily at dawn."+
			"\n" + toUni("Rakshasa’s Corruption.") + " Blows from this weapon can cause a target’s magical energy to turn foul and consume it from within. When I hit a creature with an attack using one of these claws, I can expend 1 charge to attempt to curse it (no action required). The target must succeed on a DC 13 Wisdom saving throw or be cursed for 1 minute. When a cursed creature starts its turn while under the effect of a spell or while concentrating on a spell, it takes 1d6 necrotic damage."+
			"\n" + toUni("Catclimb.") + " While wearing a pair of these claws, I gain a climbing speed equal to my walking speed.",
		weaponOptions: {
			baseWeapon: "claw",
			regExpSearch: /^(?=.*claws)(?=.*corruption).*$/i,
			name: "Claws of Corruption",
			source: [["HGtMH", 480]],
			description: "Attached, light; Rakshasa’s Corruption",
			selectNow: true,			
		},
		usages : 4,
		recovery : "dawn",
		additional: "regains 1d4",
		speed: { climb: { spd: "walk", enc: "walk" } },
	},
	"very rare" : {
		rarity : "very rare",
		description : "These rough, menacing gauntlets, constructed from the razor-sharp claws of the pygmy rakshasa, thrum with the power of its hellish essence. The pointed tips of the claws easily dig into rock and metal alike, letting their wearer climb the roughest surfaces with feline agility.", 
		descriptionFull : 
			"These rough, menacing gauntlets, constructed from the razor-sharp claws of the pygmy rakshasa, thrum with the power of its hellish essence. The pointed tips of the claws easily dig into rock and metal alike, letting their wearer climb the roughest surfaces with feline agility."+
			"\n" + "The claws have 4 charges and regain all expended charges daily at dawn."+
			"\n" + toUni("Rakshasa’s Corruption.") + " Blows from this weapon can cause a target’s magical energy to turn foul and consume it from within. When I hit a creature with an attack using one of these claws, I can expend 1 charge to attempt to curse it (no action required). The target must succeed on a DC 16 Wisdom saving throw or be cursed for 1 minute. When a cursed creature starts its turn while under the effect of a spell or while concentrating on a spell, it takes 2d6 necrotic damage."+
			"\n" + toUni("Catclimb.") + " While wearing a pair of these claws, I gain a climbing speed equal to my walking speed.",
		weaponOptions: {
			baseWeapon: "claw",
			regExpSearch: /^(?=.*claws)(?=.*corruption).*$/i,
			name: "Claws of Corruption",
			source: [["HGtMH", 480]],
			description: "Attached, light; Rakshasa’s Corruption",
			modifiers: [1, 1], 
			selectNow: true,			
		},
		usages : 5,
		recovery : "dawn",
		additional: "regains 1d4",
		speed: { climb: { spd: "walk", enc: "walk" } },
	},
};

// Collar of the Cat
MagicItemsList["collar of the cat"] = {
	name : "Collar of the Cat",
	source : [["HGtMH", 480]],
	type : "Wondrous item",
	rarity : "common",
	description : "While socketed on armour, clothing, a focus, or a weapon, I have a preternatural ability to land on my feet. I have advantage on checks made to maintain my footing and I can subtract up to 20 feet from the fall when calculating falling damage.", 
	descriptionFull : 
		"While socketed on armour, clothing, a focus, or a weapon, I have a preternatural ability to land on my feet. I have advantage on checks made to maintain my footing and I can subtract up to 20 feet from the fall when calculating falling damage.", 
};

// Eye of the Tiger
MagicItemsList["eye of the tiger"] = {
	name : "Eye of the Tiger",
	source : [["HGtMH", 481]],
	type : "Ring",
	description : "",
	choices : ["uncommon", "very rare"],
	choicesNotInMenu : true,
	"uncommon" : {
		name : "Uncommon Eye of the Tiger",
		rarity : "uncommon",
		description : "The tiger’s eye gemstone at the centre of this ring gleams with the devious malice peculiar to the fiendish pygmy rakshasa. Spinning slowly in its socket, it studies its wearer and surroundings, almost as if waiting for a time to pounce.",
		descriptionFull : 
			"The tiger’s eye gemstone at the centre of this ring gleams with the devious malice peculiar to the fiendish pygmy rakshasa. Spinning slowly in its socket, it studies its wearer and surroundings, almost as if waiting for a time to pounce."+
			"\n" + "The ring has 5 charges and regains all expended charges daily at dawn."+
			"\n" + toUni("Arcane Interference.") + " While wearing the ring, whenever I am the target of a spell or make a saving throw against a spell’s area of effect, I can use my reaction to tug at the Weave, consuming 1 charge and attempting to unravel the spell’s magic. If the spell is of 2nd level or lower, roll a d4 and consult the table below to determine the effect, which occurs immediately before the spell’s effect. If the spell is 3rd level or higher, this property has no effect."+
			"\n" + toUni("d4	Effects") +
			"\n" + toUni("1	") + "The caster of the spell must make a DC 13 Wisdom saving throw, taking force damage equal to 1d6 plus an additional 1d6 for each level of the spell on a failed save, or half as much damage on a successful one."+
			"\n" + toUni("2	") + "The spell’s potency is diminished. If the spell requires an attack roll, the roll is made with disadvantage. If it requires me to make a saving throw, I have advantage on it."+
			"\n" + toUni("3	") + "I absorb a portion of the spell’s energy, gaining temporary hit points equal to 1d6 plus an additional 1d6 for each level of the spell. These temporary hit points last for 1 minute."+
			"\n" + toUni("4	") + "I am unaffected by the spell.",
		usages : 5,
		recovery : "dawn",
	},
	"very rare" : {
		name : "Very Rare Eye of the Tiger",
		rarity : "very rare",
		description : "The tiger’s eye gemstone at the centre of this ring gleams with the devious malice peculiar to the fiendish pygmy rakshasa. Spinning slowly in its socket, it studies its wearer and surroundings, almost as if waiting for a time to pounce.",
		descriptionFull : 
			"The tiger’s eye gemstone at the centre of this ring gleams with the devious malice peculiar to the fiendish pygmy rakshasa. Spinning slowly in its socket, it studies its wearer and surroundings, almost as if waiting for a time to pounce."+
			"\n" + "The ring has 6 charges and regains all expended charges daily at dawn."+
			"\n" + toUni("Arcane Interference.") + " While wearing the ring, whenever I am the target of a spell or make a saving throw against a spell’s area of effect, I can use my reaction to tug at the Weave, consuming 1 charge and attempting to unravel the spell’s magic. If the spell is of 5th level or lower, roll a d4 and consult the table below to determine the effect, which occurs immediately before the spell’s effect. If the spell is 6th level or higher, this property has no effect."+
			"\n" + toUni("d4	Effects") +
			"\n" + toUni("1	") + "The caster of the spell must make a DC 16 Wisdom saving throw, taking force damage equal to 1d6 plus an additional 1d6 for each level of the spell on a failed save, or half as much damage on a successful one."+
			"\n" + toUni("2	") + "The spell’s potency is diminished. If the spell requires an attack roll, the roll is made with disadvantage. If it requires me to make a saving throw, I have advantage on it."+
			"\n" + toUni("3	") + "I absorb a portion of the spell’s energy, gaining temporary hit points equal to 1d6 plus an additional 1d6 for each level of the spell. These temporary hit points last for 1 minute."+
			"\n" + toUni("4	") + "I am unaffected by the spell.",
		usages : 6,
		recovery : "dawn",
	},
};

// Feline’s Fury
MagicItemsList["feline’s fury"] = {
	name : "Feline’s Fury", 
	source : [["HGtMH", 482]],
	type : "Weapon (any tommybow)",
	attunement : true,
	description : "",
	rarity : "rare",
	action : [["action", "Rakshasa’s Revenge"]],
	calcChanges : { 
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isRangedWeapon && /tommybow/i.test(v.baseWeaponName) && (/^(?=.*feline)(?=.*fury).*$/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
				}
			},
			'If I include the word "Feline’s Fury" in the name of an axe, it will be treated as the magic weapon Feline’s Fury.'
		],
	},
	description : "An ostentatiously ornate tommybow, the goldleaf bows are decorated with an array of bedazzling jewels. Rubies and sapphires sparkle with the fire and ice of the Hells, emeralds carry a vitriolic venom, and the diamonds glow with warm, bright sunlight, a delight peculiar to the pygmy rakshasa.", 
	descriptionFull : 
		"An ostentatiously ornate tommybow, the goldleaf bows are decorated with an array of bedazzling jewels. Rubies and sapphires sparkle with the fire and ice of the Hells, emeralds carry a vitriolic venom, and the diamonds glow with warm, bright sunlight, a delight peculiar to the pygmy rakshasa."+
		"\n" + "This tommybow consists of five vertically stacked bows, each of which sports a pair of matched, randomly determined gemstones. Roll a d4 to determine each bow’s gemstone pairs: 1, diamonds; 2, emeralds; 3, rubies; 4, sapphires."+
		"\n" + toUni("Rakshasa’s Revenge.") + " I can use an action to imbue a piece of ammunition with one of the following spells (save DC 15) and fire the ammunition at a point or target within range: daylight (diamond), fireball (ruby), sleet storm (sapphire), or stench (emerald; see page 515). When the ammunition hits a target or surface, it unleashes the imbued spell centred on that point. These spells do not require concentration. I can choose to fire at a point on a surface or at a target; if I miss the target, the effect is centred on whichever surface the ammunition hits (GM’s discretion). The gems are destroyed when the spell is cast and their pieces fall to the ground."+
		"\n" + toUni("Recharge.") + " I can spend 1 minute replacing a pair of gemstones with diamonds, emeralds, rubies, or sapphires worth at least 100 gp each. So long as the gemstones are matching, then, at the next dawn, they sparkle with arcane power and can be used to imbue the bolts with the associated spells.",
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : ["between", "Feline’s Fury", "[rare]"],
		descriptionChange : ["replace", "tommybow"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /tommybow/i;
			return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
		}
	},
	fixedDC : 17,
	spellcastingBonus: [{
		name: "Feline’s Fury",
		spells: ["daylight", "fireball", "sleet storm", "stench"],
		selection: ["daylight", "fireball", "sleet storm", "stench"],
		times : 4,
	}],
	calcChanges : {
		spellAdd : [
			function (spellKey, spellObj, spName, isDuplicate) {
				if (spellKey == 'sleet storm') {
					spellObj.duration = spellObj.duration.replace(/conc, /i, ''); // remove concentration
				}
				if (spellKey == 'stench') {
					spellObj.duration = spellObj.duration.replace(/conc, /i, ''); // remove concentration
				}
			}
		]
	},
};

// Felinobelix
MagicItemsList["felinobelix"] = {
	name : "Felinobelix",
	source : [["HGtMH", 482]],
	type : "Wondrous item",
	description : "",
	choices : ["rare", "legendary"],
	choicesNotInMenu : true,
	"rare" : {
		name : "Rare Felinobelix",
		rarity : "rare",
		description : "This foot-high, black, stone cat statue has 3 charges and regains all expended charges daily at dawn. Whenever I roll a die, I can expend 1 charge to roll another die of the same size (no action required). I can then choose which of the die rolls to use. I can choose to spend the charge after I roll the die, but before the outcome is determined.",
		descriptionFull : 
			"This foot-high, black, stone cat statue has 3 charges and regains all expended charges daily at dawn. Whenever I roll a die, I can expend 1 charge to roll another die of the same size (no action required). I can then choose which of the die rolls to use. I can choose to spend the charge after I roll the die, but before the outcome is determined."+
			"\n" + "If the result of the re-rolled die is a 1, a devil is summoned. Consult the chart below to determine which devil."+
			"\n" + toUni("Attuner’s Level	Devil (CR)") +
			"\n" + toUni("1-4	") + "Imp (1)"+
			"\n" + toUni("5-8	") + "Barbed devil (5)"+
			"\n" + toUni("9-12	") + "Bone devil (9)"+
			"\n" + toUni("13-16	") + "Ice devil (14)"+
			"\n" + toUni("17-20	") + "Pit fiend (20)"+
			"\n" + "The devil is always the same individual, who has progressed further in the infernal hierarchy with each visitation. It is hostile towards all creatures, but is especially hateful towards me, as it believes I am stealing its luck.",
		usages : 3,
		recovery : "dawn",
	},
	"legendary" : {
		name : "Legendary Felinobelix",
		rarity : "legendary",
		description : "This foot-high, black, stone cat statue has 6 charges and regains all expended charges daily at dawn. Whenever I roll a die, I can expend 1 charge to roll another die of the same size (no action required). I can then choose which of the die rolls to use. I can choose to spend the charge after I roll the die, but before the outcome is determined.",
		descriptionFull : 
			"This foot-high, black, stone cat statue has 6 charges and regains all expended charges daily at dawn. Whenever I roll a die, I can expend 1 charge to roll another die of the same size (no action required). I can then choose which of the die rolls to use. I can choose to spend the charge after I roll the die, but before the outcome is determined."+
			"\n" + "If the result of the re-rolled die is a 1, a devil is summoned. Consult the chart below to determine which devil."+
			"\n" + toUni("Attuner’s Level	Devil (CR)") +
			"\n" + toUni("1-4	") + "Imp (1)"+
			"\n" + toUni("5-8	") + "Barbed devil (5)"+
			"\n" + toUni("9-12	") + "Bone devil (9)"+
			"\n" + toUni("13-16	") + "Ice devil (14)"+
			"\n" + toUni("17-20	") + "Pit fiend (20)"+
			"\n" + "The devil is always the same individual, who has progressed further in the infernal hierarchy with each visitation. It is hostile towards all creatures, but is especially hateful towards me, as it believes I am stealing its luck."+
			"\n" + "As a reaction when another creature I can see within 30 feet of me rolls a die, I can expend 1 charge to cause it to roll a second die of the same size; I choose which of the dice to use. If the result of the re-rolled die is a 1, a devil is summoned.",
		usages : 6,
		recovery : "dawn",
		action : [["reaction", ""]],
	},
};

// Splinterspray Tommybow
MagicItemsList["splinterspray tommybow"] = {
	name : "Splinterspray Tommybow", 
	source : [["HGtMH", 483]],
	type : "Weapon (any tommybow)",
	description : "",
	action : [["action", "Splinterspray"],["action", "Reload Splinterspray"]],
	calcChanges : { 
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isRangedWeapon && /tommybow/i.test(v.baseWeaponName) && /splinterspray/i.test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
				}
			},
			'If I include the word "Splinterspray" in the name of an axe, it will be treated as the magic weapon Splinterspray Tommybow.'
		],
	},
	choices : ["uncommon", "rare", "very rare"],
	choicesNotInMenu : true,
	"uncommon" : {
		rarity : "uncommon",
		description : "Originally fashioned for low-accuracy ride-by assassinations in urban settings, this magical tommybow retains its predecessors’ ability to self-load bolts from an attached magazine, while magically enhancing the attacks to spray splinters of wood and metal towards a target.", 
		descriptionFull : 
			"Originally fashioned for low-accuracy ride-by assassinations in urban settings, this magical tommybow retains its predecessors’ ability to self-load bolts from an attached magazine, while magically enhancing the attacks to spray splinters of wood and metal towards a target."+
			"\n" + "This magical tommybow has 6 charges and regains all expended charges daily at dawn."+
			"\n" + toUni("Splinterspray.") + " As an action, I can pull the trigger extra hard, expending 1 charge, and causing the ammunition to splinter into thousands of woodand-metal shards. Instead of the normal attack against a single target, make separate attack rolls against two creatures within 5 feet of each other. On a hit, a creature takes piercing damage equal to 2d4 (plus any modifiers normally added)."+
			"\n" + toUni("Reload (3).") + " After I make three attacks with this weapon, I must reload it using an action.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : ["between", "Splinterspray", "[uncommon]"],
			descriptionChange : ["replace", "tommybow"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /tommybow/i;
				return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
			}
		},
		usages : 6,
		recovery : "dawn",	
	},
	"rare" : {
		rarity : "rare",
		description : "Originally fashioned for low-accuracy ride-by assassinations in urban settings, this magical tommybow retains its predecessors’ ability to self-load bolts from an attached magazine, while magically enhancing the attacks to spray splinters of wood and metal towards a target.", 
		descriptionFull : 
			"Originally fashioned for low-accuracy ride-by assassinations in urban settings, this magical tommybow retains its predecessors’ ability to self-load bolts from an attached magazine, while magically enhancing the attacks to spray splinters of wood and metal towards a target."+
			"\n" + "This magical tommybow has 6 charges and regains all expended charges daily at dawn."+
			"\n" + toUni("Splinterspray.") + " As an action, I can pull the trigger extra hard, expending 1 charge, and causing the ammunition to splinter into thousands of woodand-metal shards. Instead of the normal attack against a single target, make separate attack rolls against two creatures within 5 feet of each other. On a hit, a creature takes piercing damage equal to 3d4 (plus any modifiers normally added)."+
			"\n" + toUni("Reload (3).") + " After I make three attacks with this weapon, I must reload it using an action.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : ["between", "Splinterspray", "[rare]"],
			descriptionChange : ["replace", "tommybow"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /tommybow/i;
				return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
			}
		},
		usages : 9,
		recovery : "dawn",	
	},
	"very rare" : {
		rarity : "very rare",
		description : "Originally fashioned for low-accuracy ride-by assassinations in urban settings, this magical tommybow retains its predecessors’ ability to self-load bolts from an attached magazine, while magically enhancing the attacks to spray splinters of wood and metal towards a target.", 
		descriptionFull : 
			"Originally fashioned for low-accuracy ride-by assassinations in urban settings, this magical tommybow retains its predecessors’ ability to self-load bolts from an attached magazine, while magically enhancing the attacks to spray splinters of wood and metal towards a target."+
			"\n" + "This magical tommybow has 6 charges and regains all expended charges daily at dawn."+
			"\n" + toUni("Splinterspray.") + " As an action, I can pull the trigger extra hard, expending 1 charge, and causing the ammunition to splinter into thousands of woodand-metal shards. Instead of the normal attack against a single target, make separate attack rolls against two creatures within 5 feet of each other. On a hit, a creature takes piercing damage equal to 4d4 (plus any modifiers normally added)."+
			"\n" + toUni("Reload (3).") + " After I make three attacks with this weapon, I must reload it using an action.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : ["between", "Splinterspray", "[very rare]"],
			descriptionChange : ["replace", "tommybow"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /tommybow/i;
				return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
			}
		},
		usages : 12,
		recovery : "dawn",	
	},
};

// Tail’s End
MagicItemsList["tail’s end"] = {
	name : "Tail’s End", 
	source : [["HGtMH", 484]],
	type : "Weapon (any sword)",
	description : "",
	action : [["bonus action", "Split at the Seams"]],
	calcChanges : { 
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && /sword|scimitar|rapier/i.test(v.baseWeaponName) && /^(?=.*tail)(?=.*end).*$/i.test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
				}
			},
			'If I include the word "Tail’s End" in the name of an axe, it will be treated as the magic weapon Tail’s End.'
		],
	},
	choices : ["rare", "very rare"],
	choicesNotInMenu : true,
	"rare" : {
		rarity : "rare",
		description : "The blade of this wicked khopesh is composed of several individual sections linked by a sturdy chain running through the weapon’s length. Always dry to the touch, this magical blade appears to continuously absorb any water with which it comes into contact.", 
		descriptionFull : 
			"The blade of this wicked khopesh is composed of several individual sections linked by a sturdy chain running through the weapon’s length. Always dry to the touch, this magical blade appears to continuously absorb any water with which it comes into contact."+
			"\n" + toUni("Split at the Seams.") + " As a bonus action, I can press a button hidden on the weapon’s hilt to cause the sections comprising the blade to magically detach from one another, remaining connected by the chain. Until reformed as a sword as a bonus action, this weapon loses its former sword properties and gains those of a whip."+
			"\n" + toUni("Unquenchable Thirst.") + " When I roll a 20 on an attack roll made with this weapon, it releases a deadly burst of desiccating, negative energy that drains moisture from a target, forcing it to make a DC 15 Constitution saving throw. On a failed save, the target takes 6d6 necrotic damage and is desiccated for 1 minute. On a successful save, a creature takes half as much damage and isn’t desiccated. A desiccated creature’s skin turns dry and brittle, rupturing with ease, and causing the creature to take an additional 1d4 slashing damage whenever it takes bludgeoning, force, piercing, slashing, or thunder damage. A desiccated creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. This property has no effect on creatures without skin or on those immune to necrotic damage.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : ["between", "Tail’s End", "[rare]"],
			descriptionChange : ["replace", "blade"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /sword|scimitar|rapier/i;
				return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
			}
		},	
	},
	"very rare" : {
		rarity : "very rare",
		description : "The blade of this wicked khopesh is composed of several individual sections linked by a sturdy chain running through the weapon’s length. Always dry to the touch, this magical blade appears to continuously absorb any water with which it comes into contact.", 
		descriptionFull : 
			"The blade of this wicked khopesh is composed of several individual sections linked by a sturdy chain running through the weapon’s length. Always dry to the touch, this magical blade appears to continuously absorb any water with which it comes into contact."+
			"\n" + toUni("Split at the Seams.") + " As a bonus action, I can press a button hidden on the weapon’s hilt to cause the sections comprising the blade to magically detach from one another, remaining connected by the chain. Until reformed as a sword as a bonus action, this weapon loses its former sword properties and gains those of a whip."+
			"\n" + toUni("Unquenchable Thirst.") + " When I roll a 20 on an attack roll made with this weapon, it releases a deadly burst of desiccating, negative energy that drains moisture from a target, forcing it to make a DC 16 Constitution saving throw. On a failed save, the target takes 10d6 necrotic damage and is desiccated for 1 minute. On a successful save, a creature takes half as much damage and isn’t desiccated. A desiccated creature’s skin turns dry and brittle, rupturing with ease, and causing the creature to take an additional 1d8 slashing damage whenever it takes bludgeoning, force, piercing, slashing, or thunder damage. A desiccated creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. This property has no effect on creatures without skin or on those immune to necrotic damage.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : ["between", "Tail’s End", "[very rare]"],
			descriptionChange : ["replace", "blade"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /sword|scimitar|rapier/i;
				return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
			}
		},
	},
};


// Crawly & Rolly Turrit
MagicItemsList["crawly & rolly turrit"] = {
	name : "Crawly & Rolly Turrit",
	source : [["HGtMH", 485]],
	type : "wondrous item",
	attunement: true,
	description : "",
	usages : 1,
	recovery : "dawn",
	choices : ["rare", "very rare"],
	choicesNotInMenu : true,
	"rare" : {
		name : "Rare Crawly & Rolly Turrit",
		rarity : "rare",
		description : "Weighing approximately 10 pounds, this 1-foot-cubed turret is bristling with armaments. From its crudely chiselled ‘bitey-bit’, to the side-mounted ‘kannon-boom’, and the fore-mounted ‘spikeys’, this magically-automated turret has but one key flaw: stairs.",
		descriptionFull : 
			"Weighing approximately 10 pounds, this 1-foot-cubed turret is bristling with armaments. From its crudely chiselled ‘bitey-bit’, to the side-mounted ‘kannon-boom’, and the fore-mounted ‘spikeys’, this magically-automated turret has but one key flaw: stairs."+
			"\n" + toUni("Deploy.") + " As an action, I can deploy the rolly turrit, which magically animates for the next 10 minutes. During this time, it is under my mental control while within 100 feet of me. In combat, the turret shares my initiative count, but it takes its turn immediately after mine. It can move and use its reaction on its own, but the only action it takes on its turn is the Dodge action, unless I take a bonus action on my turn to command it to take another action. That action can be one in its stat block or some other action. If I am incapacitated, the turret can take any action of its choice, not just Dodge."+
			"\n" + "Once the turret has been activated, it can’t be activated again until the following dawn."+
			"\n" + toUni("Death & Healing.") + " While the turret has at least 1 hit point, it regains 2d6 hit points if the mending spell is cast on it. If the turret is reduced to 0 hit points, it shatters and can’t be activated again until a creature with proficiency in smith’s tools or tinker’s tools spends 1 hour to make a DC 15 Dexterity (smith’s or tinker’s tools) check. On a success, the turret regains 1 hit point and can be activated as normal.",
		creaturesAdd : [["Rolly Turrit", true]],
		creatureOptions : [{
			name : "Rolly Turrit",
			source : [["HGtMH", 485]],
			size : 5,
			type : "Construct",
			alignment : "unaligned",
			ac : "15" ,
			hp : "44" ,
			hd : [],
			speed : "35 ft.",
			scores : [8, 16, 17, 1, 4, 1],
			damage_immunities : "poison; psychic",
			condition_immunities : "blinded, charmed, deafened, exhaustion, frightened, paralysed, petrified, poisoned",
			senses : "Darkvision 60 ft",
			passivePerception : 7,
			languages : "-",
			challengeRating : "2",
			proficiencyBonus : "2",
			attacksAction : 2,
			attacks : [{
				name : "Chomp",
				ability : 2,
				damage : [1, 6, "piercing"],
				range : "Melee",
				description : "",
				abilitytodamage : true,
			},{
				name : "Cannonette",
				ability : 2,
				damage : [1, 6, "bludgeoning"],
				range : "30/120 ft",
				description : "",
				abilitytodamage : true,
			}],
			traits : [{
				name: "Backfire",
					description: "Whenever the turret is critically hit, it backfires. Each creature within 10 feet of the turret (including the turret) must succeed on a DC 15 Dexterity saving throw or take 14 (4d6) piercing damage as shards of metal shoot outwards. The turret automatically fails this saving throw.",
			},{
				name: "Spikey Charge",
					description: "If the turret moves at least 15 feet straight toward a target and then hits it with a bite attack on the same turn, the target takes an extra 3 (1d6) piercing damage. If the target is a Small or smaller creature, it must succeed on a DC 15 Strength saving throw or be knocked prone.",
			},{
				name: "Wheels",
					description: "The turret can’t navigate over ledges greater than 6 inches in height. If it tries to, it tumbles and is knocked prone.",
			}],
			header : "Item",	
		}],	
	},
	"very rare" : {
		name : "Very Rare Crawly & Rolly Turrit",
		rarity : "very rare",
		description : "Weighing approximately 10 pounds, this 1-foot-cubed turret is bristling with armaments. From its crudely chiselled ‘bitey-bit’, to the side-mounted ‘kannon-boom’, and the fore-mounted ‘spikeys’, this magically-automated turret has but one key flaw: stairs.",
		descriptionFull : 
			"Weighing approximately 10 pounds, this 1-foot-cubed turret is bristling with armaments. From its crudely chiselled ‘bitey-bit’, to the side-mounted ‘kannon-boom’, and the fore-mounted ‘spikeys’, this magically-automated turret has but one key flaw: stairs."+
			"\n" + toUni("Deploy.") + " As an action, I can deploy the rolly turrit, which magically animates for the next 10 minutes. During this time, it is under my mental control while within 100 feet of me. In combat, the turret shares my initiative count, but it takes its turn immediately after mine. It can move and use its reaction on its own, but the only action it takes on its turn is the Dodge action, unless I take a bonus action on my turn to command it to take another action. That action can be one in its stat block or some other action. If I am incapacitated, the turret can take any action of its choice, not just Dodge."+
			"\n" + "Once the turret has been activated, it can’t be activated again until the following dawn."+
			"\n" + toUni("Death & Healing.") + " While the turret has at least 1 hit point, it regains 2d6 hit points if the mending spell is cast on it. If the turret is reduced to 0 hit points, it shatters and can’t be activated again until a creature with proficiency in smith’s tools or tinker’s tools spends 1 hour to make a DC 16 Dexterity (smith’s or tinker’s tools) check. On a success, the turret regains 1 hit point and can be activated as normal.",
		creaturesAdd : [["Crawly Turrit", true]],
		creatureOptions : [{
			name : "Crawly Turrit",
			source : [["HGtMH", 486]],
			size : 5,
			type : "Construct",
			alignment : "unaligned",
			ac : "17" ,
			hp : "60" ,
			hd : [],
			speed : "40 ft., climb 40 ft.",
			scores : [8, 18, 20, 1, 7, 1],
			damage_immunities : "poison; psychic",
			condition_immunities : "blinded, charmed, deafened, exhaustion, frightened, paralyzed, petrified, poisoned",
			senses : "Darkvision 60 ft",
			passivePerception : 7,
			languages : "-",
			challengeRating : "3",
			proficiencyBonus : "2",
			attacksAction : 1,
			attacks : [{
				name : "Bite",
				ability : 2,
				damage : [1, 6, "piercing"],
				range : "Melee",
				description : "+1d6 dmg (see Draconic Infusion)",
				abilitytodamage : true,
			},{
				name : "Breath Bolt",
				ability : 3,
				damage : [2, 10, ""],
				range : "Melee",
				description : "Dmg type based off Draconic Infusion",
				abilitytodamage : true,
			}],
			actions : [{
				name : "Breath Weapon (1/Day)",
				description : "The turret exhales elemental energy in a 20 ft cone. Each creature in that area must make a DC 16 DEX save, taking 6d6 damage (see Draconic Infusion) on a failed save, or half on success.",
				joinString : "\n   ",
			}],
			traits: [{
				name: "Draconic Infusion",
					description: "The damage type that the turret’s Bite, Breath Bolt, and Breath Weapon deals depends on the dragon breath sac with which it was infused: acid (black or copper); cold (silver or white); fire (brass, gold, or red); lightning (blue or bronze); or poison (green).",
			},{
				name: "Spider Climb",
					description: "The turret can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
			}],	
			header : "Item",	
		}],	
	},	
};

// Dimensional Doorknob
MagicItemsList["dimensional doorknob"] = {
	name : "Dimensional Doorknob",
	source : [["HGtMH", 487]],
	type : "Wondrous item",
	rarity : "rare",
	description : "The dimensional doorknob is a must-have addition to the arsenal of any thief that lacks the necessary dexterity to pick locks themselves. In addition, the doorknob’s built-in escape magic allows for a quick getaway when things go south. As a guard wanders a museum of precious relics, the bowels of a jail, or the vault of a treasury, they might find only unlocke doors and a momentary glowing purple light as a thief teleports from the scene of its crime.", 
	descriptionFull : 
		"The dimensional doorknob is a must-have addition to the arsenal of any thief that lacks the necessary dexterity to pick locks themselves. In addition, the doorknob’s built-in escape magic allows for a quick getaway when things go south. As a guard wanders a museum of precious relics, the bowels of a jail, or the vault of a treasury, they might find only unlocke doors and a momentary glowing purple light as a thief teleports from the scene of its crime."+
		"\n" + toUni("Skeleton Key.") + " As an action, I can place the doorknob over a keyhole where, for the next minute, it attempts to pick the lock. The dimensional doorknob acts as a set of thieves’ tools and automatically unlocks locks with a DC of 15 or lower. For higher difficulty locks, the doorknob has a +7 modifier to its Dexterity (thieves’ tools) check."+
		"\n" + toUni("Dortal.") + " As an action while holding the doorknob, I can cast the dimension door spell. When I do so, a glowing purple portal appears in my space until the start of my next turn. Any creature up to 1 size larger than me can pass through the portal. After I activate this property, I can’t do so again until the following dawn.",
	spellcastingBonus: [{
		name: "Dimensional Doorknob",
		spells: ["dimension door"],
		selection: ["dimension door"],
	}],
	limfeaname : "Dortal",
	usages : 1,
	recovery : "dawn",
};

// Dragonmaw Shield
MagicItemsList["dragonmaw shield"] = {
	name : "Dragonmaw Shield",
	source : [["HGtMH", 487]],
	type : "Wondrous item",
	attunement: true,
	rarity : "rare",
	description : "With a hinged lower portion, this shield has the appearance of a dragon’s roaring mouth, complete with fiery interior. The dragonmaw shield’s opening is, in fact, a portal to a pocket dimension. This pocket dimension is a 10-foot cube containing a forge that, due to the insulating properties of pocket dimensions, never cools. It’s perfect for getting rid of trash, destroying incriminating evidence, or smelting down looted weapons.",
	descriptionFull : 
		"With a hinged lower portion, this shield has the appearance of a dragon’s roaring mouth, complete with fiery interior. The dragonmaw shield’s opening is, in fact, a portal to a pocket dimension. This pocket dimension is a 10-foot cube containing a forge that, due to the insulating properties of pocket dimensions, never cools. It’s perfect for getting rid of trash, destroying incriminating evidence, or smelting down looted weapons."+
		"\n" + toUni("Gnash.") + " When a creature misses me with a melee weapon attack, I can use my reaction to force the creature to make a DC 15 Dexterity saving throw as the shield chomps at their weapon with its fiery maw. On a failed save, the creature takes 1d10 fire damage as the shield breathes a plume of scalding air at them. In addition, if the creature’s weapon is nonmagical, then any flammable components, such as those made of wood, are destroyed.",
};

// Gunnspier
MagicItemsList["gunnspier"] = {
	name : "Gunnspier", 
	source : [["HGtMH", 488]],
	type : "Weapon (any polearm)",
	description : "",
	action : [["bonus action", "Point Blank Shot"],["action", "Reload Gunnspier"]],
	calcChanges : { 
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && /halberd|glaive|lance|quarterstaff|spear|twinblade|pike/i.test(v.baseWeaponName) && /gunnspier/i.test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
				}
			},
			'If I include the word "Gunnspier" in the name of an axe, it will be treated as the magic weapon Gunnspier.'
		],
	},
	choices : ["rare", "very rare"],
	choicesNotInMenu : true,
	"rare" : {
		rarity : "rare",
		description : "“Stab, bang, hope.” If consulted, these are the instructions any kobold will give on using a gunnspier. With a lengthy reload time and complete lack of accuracy, this matchlock-augmented polearm is usable at only one range: point blank. It also comes with a lovely ribbon and a neat basket to hold all my spare shot. Cute.", 
		descriptionFull : 
			"“Stab, bang, hope.” If consulted, these are the instructions any kobold will give on using a gunnspier. With a lengthy reload time and complete lack of accuracy, this matchlock-augmented polearm is usable at only one range: point blank. It also comes with a lovely ribbon and a neat basket to hold all my spare shot. Cute."+
			"\n" + "I gain a +1 bonus to attack and damage rolls made with this magic weapon."+
			"\n" + toUni("Point Blank Shot.") + " When I hit a target with an attack using a loaded gunnspier, I can use a bonus action to pull the trigger, firing a plum-sized leaden ball at the target. The attack deals an additional 2d8 bludgeoning damage. As an action, I can reload the gunnspier."+
			"\n" + toUni("Backfire.") + " When I use Point Blank Shot and roll an 8 on both of the additional bludgeoning damage dice, the gunnspier backfires. Each creature within 10 feet of me (including me) must succeed on a DC 15 Dexterity saving throw or take 4d6 piercing damage as shrapnel erupts from the weapon.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : ["between", "Gunnspier", "[rare]"],
			descriptionChange : ["replace", "polearm"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /halberd|glaive|lance|quarterstaff|spear|twinblade|pike/i;
				return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
			}
		},	
		calcChanges: {
			atkCalc: [
				function (fields, v, output) {
					if (/gunnspier/i.test(v.WeaponTextName)) output.magic = v.thisWeapon[1] + 1;
				},
				"I gain a +1 bonus to attack and damage rolls made with this magic weapon."
			],
		},
	},
	"very rare" : {
		rarity : "very rare",
		description : "“Stab, bang, hope.” If consulted, these are the instructions any kobold will give on using a gunnspier. With a lengthy reload time and complete lack of accuracy, this matchlock-augmented polearm is usable at only one range: point blank. It also comes with a lovely ribbon and a neat basket to hold all my spare shot. Cute.", 
		descriptionFull : 
			"“Stab, bang, hope.” If consulted, these are the instructions any kobold will give on using a gunnspier. With a lengthy reload time and complete lack of accuracy, this matchlock-augmented polearm is usable at only one range: point blank. It also comes with a lovely ribbon and a neat basket to hold all my spare shot. Cute."+
			"\n" + "I gain a +2 bonus to attack and damage rolls made with this magic weapon."+
			"\n" + toUni("Point Blank Shot.") + " When I hit a target with an attack using a loaded gunnspier, I can use a bonus action to pull the trigger, firing a plum-sized leaden ball at the target. The attack deals an additional 3d8 bludgeoning damage. As an action, I can reload the gunnspier."+
			"\n" + toUni("Chomp.") + " The pneumatic-powered dragon’s maw can run along the length of the gun’s barrel before biting into a target skewered by its point. When I hit a target with an attack using the gunnspier, I can use a bonus action to deal an additional 1d10 piercing damage to it as part of the attack.",
		action : [["bonus action", "Chomp"]],
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : ["between", "Gunnspier", "[very rare]"],
			descriptionChange : ["replace", "polearm"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /halberd|glaive|lance|quarterstaff|spear|twinblade|pike/i;
				return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
			}
		},
		calcChanges: {
			atkCalc: [
				function (fields, v, output) {
					if (/gunnspier/i.test(v.WeaponTextName)) output.magic = v.thisWeapon[1] + 2;
				},
				"I gain a +2 bonus to attack and damage rolls made with this magic weapon."
			],
		},	
	},
};

// Kobbold Flaymefrower
MagicItemsList["kobbold flaymefrower"] = {
	name : "Kobbold Flaymefrower",
	source : [["HGtMH", 489]],
	type : "Wondrous item",
	attunement: true,
	description : "",
	action : [["action", "Dragon’s Breath"]],
	choices : ["uncommon", "very rare"],
	choicesNotInMenu : true,
	"uncommon" : {
		name : "Uncommon Kobbold Flaymefrower",
		rarity : "uncommon",
		description : "Great for keeping weeds in check, the flaymefrower can be dynamically adjusted to spray in a wide cone or a focused line. Just keep an eye on the pressure, as it looks like the rats have been chewing at the intestine hose again.",
		descriptionFull : 
			"Great for keeping weeds in check, the flaymefrower can be dynamically adjusted to spray in a wide cone or a focused line. Just keep an eye on the pressure, as it looks like the rats have been chewing at the intestine hose again."+
			"\n" + "Worn like a backpack or satchel, this patchwork vessel of scrap metal can hold a maximum of 12 charges. Over the course of an hour, I can feed one of the following fuel options into the backpack, causing it to regain expended charges depending on the fuel’s quality:"+
			"\n \u2022 " + "1 sp of seasoned wood: 1d4 charges."+
			"\n \u2022 " + "5 gp of high-quality coal or oil: 1d4 + 3 charges."+
			"\n \u2022 " + "Core of fire, or breath sac of a red, gold, or brass dragon: all expended charges."+
			"\n" + toUni("Dragon’s Breath.") + " While holding the flaymefrower’s maw, I can use an action to speak one of the flaymefrower’s two command words, expending 1 charge and causing it to spout a gout of flame in a 10-foot cone or a 5-foot-wide, 20-foot-long line (my choice). As part of the same action, I can squeeze the maw, injecting more fuel and expending up to 3 additional charges. The size of the cone increases by 5 feet or the length of the line increases by 20 feet, for each additional charge expended. Each creature in the area must make a DC 13 Dexterity saving throw, taking 2d10 fire damage on a failed save, or half as much damage on a successful one. The fire ignites any flammable objects in the area that aren’t being worn or carried."+
			"\n" + toUni("Backfire.") + " When I use Dragon’s Breath and roll a total of 19 or higher on the fire damage dice, the flaymefrower backfires. Each creature within 10 feet of me (including me) must succeed on a DC 13 Dexterity saving throw or take 4d6 fire damage as gouts of flame burst from the make-shift hose.",
	},
	"very rare" : {
		name : "Very Rare Kobbold Flaymefrower",
		rarity : "very rare",
		description : "Great for keeping weeds in check, the flaymefrower can be dynamically adjusted to spray in a wide cone or a focused line. Just keep an eye on the pressure, as it looks like the rats have been chewing at the intestine hose again.",
		descriptionFull : 
			"Great for keeping weeds in check, the flaymefrower can be dynamically adjusted to spray in a wide cone or a focused line. Just keep an eye on the pressure, as it looks like the rats have been chewing at the intestine hose again."+
			"\n" + "Worn like a backpack or satchel, this patchwork vessel of scrap metal can hold a maximum of 12 charges. Over the course of an hour, I can feed one of the following fuel options into the backpack, causing it to regain expended charges depending on the fuel’s quality:"+
			"\n \u2022 " + "1 sp of seasoned wood: 1d4 charges."+
			"\n \u2022 " + "5 gp of high-quality coal or oil: 1d4 + 3 charges."+
			"\n \u2022 " + "Core of fire, or breath sac of a red, gold, or brass dragon: all expended charges."+
			"\n" + toUni("Dragon’s Breath.") + " While holding the flaymefrower’s maw, I can use an action to speak one of the flaymefrower’s two command words, expending 1 charge and causing it to spout a gout of flame in a 10-foot cone or a 5-foot-wide, 20-foot-long line (my choice). As part of the same action, I can squeeze the maw, injecting more fuel and expending up to 3 additional charges. The size of the cone increases by 5 feet or the length of the line increases by 20 feet, for each additional charge expended. Each creature in the area must make a DC 16 Dexterity saving throw, taking 4d6 fire damage on a failed save, or half as much damage on a successful one. The fire ignites any flammable objects in the area that aren’t being worn or carried."+
			"\n" + toUni("Coldfire Flame.") + " As a bonus action, I can twist the dragon’s maw 180 degrees, causing the flame to burn blue and deal cold damage instead of fire damage. This change lasts until I use a bonus action to turn it back.",
		action : [["bonus action", "Coldfire Flame"]],
	},
};

// Kobold Wristbow
MagicItemsList["kobold wristbow"] = {
	name : "Kobold Wristbow", 
	source : [["HGtMH", 490]],
	type : "Weapon (hand crossbow)",
	rarity : "common",
	action : [["bonus action", "Quickshot"],["bonus action", "Reload"],["action", "Reload"]],
	description : "Something about this cobbled-together, wrist-mounted, bow-like contraption looks wrong. It shouldn’t hold together. There’s nothing even holding the string in place. It must be magic. There’s no writing on it but, if there was, it’d be written as: “Kobbold RystBo.”", 
	descriptionFull : 
		"Something about this cobbled-together, wrist-mounted, bow-like contraption looks wrong. It shouldn’t hold together. There’s nothing even holding the string in place. It must be magic. There’s no writing on it but, if there was, it’d be written as: “Kobbold RystBo.”"+
		"\n" + toUni("Handsfree.") + " The kobold wristbow does not require a free hand to hold or fire."+
		"\n" + toUni("Quickshot.") + " In response to my mental command, I can release the bowstring and make a ranged weapon attack with the loaded wristbow as a bonus action. I must reload a wristbow before firing again."+
		"\n" + toUni("Reload.") + " I can reload the kobold wristbow using either a bonus action or an action. This requires at least 1 free hand.",
	weaponOptions: {
		baseWeapon: "hand crossbow",
		regExpSearch: /^(?=.*kobold)(?=.*wristbow).*$/i,
		name: "Kobold Wristbow",
		source: [["HGtMH", 490]],
		description: "Attached, light; Quickshot",
		selectNow: true,			
	},	
};

// Magik Oil
MagicItemsList["magik oil"] = {
	name : "Magik Oil", 
	source : [["HGtMH", 490]],
	type : "Wondrous item",
	rarity : "common",
	description : "This magik oil can be socketed on any item I don’t mind getting oil stains on. The slow drip of oil from its never-closing spout imbues the item to which it is attached with magic, rendering the item much more durable. Metal can’t be corroded by acid and wood & clothing cease being flammable. Strong magic, such as that from a 6th-level spell or higher, can overcome this enhanced resilience. If socketed on a weapon, that weapon’s damage becomes magical. If socketed on armour, the oil lubricates the joints, removing any disadvantage on Dexterity (Stealth) checks the armour normally imposes.",
	descriptionFull : 
		"This magik oil can be socketed on any item I don’t mind getting oil stains on. The slow drip of oil from its never-closing spout imbues the item to which it is attached with magic, rendering the item much more durable. Metal can’t be corroded by acid and wood & clothing cease being flammable. Strong magic, such as that from a 6th-level spell or higher, can overcome this enhanced resilience. If socketed on a weapon, that weapon’s damage becomes magical. If socketed on armour, the oil lubricates the joints, removing any disadvantage on Dexterity (Stealth) checks the armour normally imposes.",
};

// Pneuma Blade
MagicItemsList["pneuma blade"] = {
	name : "Pneuma Blade", 
	source : [["HGtMH", 488]],
	type : "Weapon (longsword or greatsword)",
	description : "",
	calcChanges : { 
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && /longsword|greatsword/i.test(v.baseWeaponName) && /pneuma/i.test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
				}
			},
			'If I include the word "Pneuma" in the name of a longsword or greatsword, it will be treated as the magic weapon Pneuma Blade.'
		],
	},
	choices : ["rare", "very rare"],
	choicesNotInMenu : true,
	"rare" : {
		rarity : "rare",
		description : "This blade shouldn’t work; the pneumatic seals are made of earwax and leather, the sprockets’ teeth are all different sizes, and the structure itself is held together by an adhesive tape decorated with small ducks. The only explanation is that the sheer force of the kobold mechamagicians’ belief is encapsulated within this magic sword, allowing it to chomp at its enemies.",
		descriptionFull : 
			"“Stab, bang, hope.” If consulted, these are the instructions any kobold will give on using a gunnspier. With a lengthy reload time and complete lack of accuracy, this matchlock-augmented polearm is usable at only one range: point blank. It also comes with a lovely ribbon and a neat basket to hold all my spare shot. Cute."+
			"\n" + "I gain a +1 bonus to attack and damage rolls made with this magic weapon."+
			"\n" + toUni("Point Blank Shot.") + " When I hit a target with an attack using a loaded gunnspier, I can use a bonus action to pull the trigger, firing a plum-sized leaden ball at the target. The attack deals an additional 2d8 bludgeoning damage. As an action, I can reload the gunnspier."+
			"\n" + toUni("Backfire.") + " When I use Point Blank Shot and roll an 8 on both of the additional bludgeoning damage dice, the gunnspier backfires. Each creature within 10 feet of me (including me) must succeed on a DC 15 Dexterity saving throw or take 4d6 piercing damage as shrapnel erupts from the weapon.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : ["between", "Pneuma", "[rare]"],
			descriptionChange : ["replace", "blade"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /longsword|greatsword/i;
				return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
			}
		},	
		calcChanges: {
			atkAdd : [
				function (fields, v) {
					if (/pneuma/i.test(v.WeaponTextName)) 
					fields.Description += (fields.Description ? '; ' : '') + '+1d8 poison dmg if Pneumatic Strike used;';
				},
				"When I hit a creature with an attack that uses Pneumatic Strike, the pathogens that live within the rusty blade are reinvigorated by its magic, and the attack deals an additional 1d8 poison damage."
			],
		},
	},
	"very rare" : {
		rarity : "very rare",
		description : "This blade shouldn’t work; the pneumatic seals are made of earwax and leather, the sprockets’ teeth are all different sizes, and the structure itself is held together by an adhesive tape decorated with small ducks. The only explanation is that the sheer force of the kobold mechamagicians’ belief is encapsulated within this magic sword, allowing it to chomp at its enemies.",
		descriptionFull : 
			"This blade shouldn’t work; the pneumatic seals are made of earwax and leather, the sprockets’ teeth are all different sizes, and the structure itself is held together by an adhesive tape decorated with small ducks. The only explanation is that the sheer force of the kobold mechamagicians’ belief is encapsulated within this magic sword, allowing it to chomp at its enemies."+
			"\n" + toUni("Pneumatic Strike.") + " After I make an attack roll with this weapon, but before the result of the attack is determined, I can use a bonus action to pull the blade’s trigger. With a pneumatic thrust, the top of the weapon arcs forward and I gain a +5 bonus to the attack roll."+
			"\n" + toUni("Heated Weapon") + " When I hit a creature with an attack that uses Pneumatic Strike, the attack deals an additional 2d8 fire damage."+
			"\n" + toUni("Burnout.") + " When I use the Heated Weapon property of this weapon and roll an 8 on both of the additional fire damage dice, the heating mechanism backfires. Each creature within 10 feet of me (including me) must succeed on a DC 16 Dexterity saving throw or take 4d6 fire damage as scalding pneumatic fluid bursts out.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : ["between", "Pneuma", "[very rare]"],
			descriptionChange : ["replace", "blade"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /longsword|greatsword/i;
				return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
			}
		},	
		calcChanges: {
			atkAdd : [
				function (fields, v) {
					if (/pneuma/i.test(v.WeaponTextName)) 
					fields.Description += (fields.Description ? '; ' : '') + '+2d8 fire dmg if Pneumatic Strike used;';
				},
				"When I hit a creature with an attack that uses Pneumatic Strike, the attack deals an additional 2d8 fire damage.",
			],
		},
	},
};

// Jaw Breakers
MagicItemsList["jaw breakers"] = {
	name : "Jaw Breakers",
	source : [["HGtMH", 492]],
	type : "Weapon (any two melee)",
	description : "",
	calcChanges : { 
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapo && /^(?=.*jaw)(?=.*breakers).*$/i.test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
				}
			},
			'If I include the word "Jaw Breakers" in the name of an axe, it will be treated as the magic weapon Jaw Breakers.'
		],
	},
	allowDuplicates : true,
	choices : ["rare", "very rare"],
	choicesNotInMenu : true,
	"rare" : {
		rarity : "rare",
		description : "Forged as a pair, these magic weapons are crafted from the matching upper and lower jaw bones of a tarrasque. Their innate magic—and one of the reasons the tar-rasque’s bite is so powerful—creates an arcanomagnetic pull between the two jawbones, dealing devastating damage to whatever lies between them.",
		descriptionFull : 
			"Forged as a pair, these magic weapons are crafted from the matching upper and lower jaw bones of a tarrasque. Their innate magic—and one of the reasons the tar-rasque’s bite is so powerful—creates an arcanomagnetic pull between the two jawbones, dealing devastating damage to whatever lies between them."+
			"\n" + "I gain a +1 bonus to attack and damage rolls I make with each of these magic weapons. These weapons deal piercing damage instead of their usual damage type."+
			"\n" + toUni("Chomp.") + " When I engage in two-weapon fighting using these two weapons and hit the same target with both weapons, the attack I make with my second weapon deals an additional 1d8 damage."+
			"\n" + toUni("Optional Attunement.") + " I can choose to attune to a pair of jaw breakers. They count as a single magic item with regard to the number of magic items I can attune to. When I do so, the weapons gain the Swirling Dervish property while I am attuned to them."+
			"\n" + toUni("OA: Swirling Dervish.") + " Harnessing the power of the blades, I leap over a target, becoming a tornado of lacerating blades. As an action while I wield both jaw breakers, I can perform a magically-enhanced jump, attacking creatures I pass over. This jump has a maximum distance of 20 feet, is a straight line, must end in an unoccupied space, does not provoke opportunity attacks, and each foot I clear on the jump costs one foot of movement. I can make one attack against a creature under me in each 5-foot space over which I jump. These attacks always alternate main-hand, then off-hand."+
			"\n" + "For example, if I jumped over one Huge creature, I could make three attacks against it (the second one dealing Chomp’s extra damage on a hit). If I jumped over three Medium creatures, I could make one attack against each (with no extra damage from Chomp).",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : ["between", "Jaw Breakers", "[rare]"],
			descriptionChange : ["replace", "weapon"],
			excludeCheck : function (inObjKey, inObj) {
				return (!(/melee/i).test(inObj.range));
			}
		},	
		calcChanges: {
			atkCalc: [
				function (fields, v, output) {
					if (/^(?=.*jaw)(?=.*breakers).*$/i.test(v.WeaponTextName)) output.magic = v.thisWeapon[1] + 1;
				},
				"I gain a +1 bonus to attack and damage rolls made with this magic weapon."
			],
			atkAdd : [
				function (fields, v) {
					if (/^(?=.*jaw)(?=.*breakers).*$/i.test(v.WeaponTextName))
					fields.Description += (fields.Description ? '; ' : '') + 'Chomp';
				},
				"When I hit a creature with an attack that uses Pneumatic Strike, the attack deals an additional 2d8 fire damage.",
			],
		},
		allowDuplicates : true,
	},
	"very rare" : {
		description : "Forged as a pair, these magic weapons are crafted from the matching upper and lower jaw bones of a tarrasque. Their innate magic—and one of the reasons the tar-rasque’s bite is so powerful—creates an arcanomagnetic pull between the two jawbones, dealing devastating damage to whatever lies between them.",
		descriptionFull : 
			"Forged as a pair, these magic weapons are crafted from the matching upper and lower jaw bones of a tarrasque. Their innate magic—and one of the reasons the tar-rasque’s bite is so powerful—creates an arcanomagnetic pull between the two jawbones, dealing devastating damage to whatever lies between them."+
			"\n" + "I gain a +1 bonus to attack and damage rolls I make with each of these magic weapons. These weapons deal piercing damage instead of their usual damage type."+
			"\n" + toUni("Chomp.") + " When I engage in two-weapon fighting using these two weapons and hit the same target with both weapons, the attack I make with my second weapon deals an additional 1d8 damage."+
			"\n" + toUni("Optional Attunement.") + " I can choose to attune to a pair of jaw breakers. They count as a single magic item with regard to the number of magic items I can attune to. When I do so, the weapons gain the Swirling Dervish property while I am attuned to them."+
			"\n" + toUni("OA: Swirling Dervish.") + " Harnessing the power of the blades, I leap over a target, becoming a tornado of lacerating blades. As an action while I wield both jaw breakers, I can perform a magically-enhanced jump, attacking creatures I pass over. This jump has a maximum distance of 25 feet, is a straight line, must end in an unoccupied space, does not provoke opportunity attacks, and each foot I clear on the jump costs one foot of movement. I can make one attack against a creature under me in each 5-foot space over which I jump. These attacks always alternate main-hand, then off-hand."+
			"\n" + "For example, if I jumped over one Huge creature, I could make three attacks against it (the second one dealing Chomp’s extra damage on a hit). If I jumped over three Medium creatures, I could make one attack against each (with no extra damage from Chomp).",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : ["between", "Jaw Breakers", "[very rare]"],
			descriptionChange : ["replace", "weapon"],
			excludeCheck : function (inObjKey, inObj) {
				return (!(/melee/i).test(inObj.range));
			}
		},	
		calcChanges: {
			atkCalc: [
				function (fields, v, output) {
					if (/^(?=.*jaw)(?=.*breakers).*$/i.test(v.WeaponTextName)) output.magic = v.thisWeapon[1] + 2;
				},
				"I gain a +2 bonus to attack and damage rolls made with this magic weapon."
			],
		},
		allowDuplicates : true,
	},
};

// Tarrobe
MagicItemsList["tarrobe"] = {
	name : "Tarrobe",
	source : [["HGtMH", 493]],
	type : "Wondrous item",
	attunement: true,
	description : "",
	choices : ["uncommon", "legendary"],
	choicesNotInMenu : true,
	"uncommon" : {
		name : "Uncommon Tarrobe",
		rarity : "uncommon",
		description : "Fossilised bones and oilcloth, a lipid-rich mesh of viscous crude oil and lipophilic fibres, forms the basis of this magical robe. In the same way the oil refracts light in rainbow hues, the cloth has a natural resistance to magic, occasionally sending spells ricocheting back at the caster.",
		descriptionFull : 
			"Fossilised bones and oilcloth, a lipid-rich mesh of viscous crude oil and lipophilic fibres, forms the basis of this magical robe. In the same way the oil refracts light in rainbow hues, the cloth has a natural resistance to magic, occasionally sending spells ricocheting back at the caster."+
			"\n" + toUni("Oily Barrage.") + " While I wear this robe, I can cast a variety of oil-based spells. This robe has 7 charges and regains 1d6 + 1 charges daily at dawn. I can expend charges to cast the following spells (save DC 15, +7 to hit). Some spells are changed to be oil-based."+
			"\n \u2022 " + "Grease (1 charge)"+
			"\n \u2022 " + "Create or destroy oil (2 charges; as create or destroy water, but oil instead of water)"+
			"\n \u2022 " + "Mireball (3 charges; instead of mud, thick, rancid fat and oil are conjured)"+
			"\n" + toUni("Spell Reflection.") + " While I wear this robe, any time I am targeted by a magic missile spell, a line spell, or a spell that requires a ranged attack roll, roll a d8. On a 1-7, I am affected as normal. On an 8, I am unaffected, and the effect is reflected back at the caster as though it originated from me, turning the caster into the target.",
		usages : 7,
		recovery : "dawn",
		additional: "regains 1d6+1",
		spellFirstColTitle: "Ch",
		fixedSpAttack : 7,
		fixedDC : 15,
		spellcastingBonus: [{
			name: "1 charge",
			spells: ["grease"],
			selection: ["grease"],
			firstCol: 1
		},{
			name: "2 charges",
			spells: ["create or destroy water"],
			selection: ["create or destroy water"],
			firstCol: 2,
			times : 2,
		},{
			name: "3 charges",
			spells: ["mireball"],
			selection: ["mireball"],
			firstCol: 3
		}],
	},
	"legendary" : {
		name : "Legendary Tarrobe",
		rarity : "legendary",
		description : "Fossilised bones and oilcloth, a lipid-rich mesh of viscous crude oil and lipophilic fibres, forms the basis of this magical robe. In the same way the oil refracts light in rainbow hues, the cloth has a natural resistance to magic, occasionally sending spells ricocheting back at the caster.",
		descriptionFull : 
			"Fossilised bones and oilcloth, a lipid-rich mesh of viscous crude oil and lipophilic fibres, forms the basis of this magical robe. In the same way the oil refracts light in rainbow hues, the cloth has a natural resistance to magic, occasionally sending spells ricocheting back at the caster."+
			"\n" + toUni("Oily Barrage.") + " While I wear this robe, I can cast a variety of oil-based spells. This robe has 7 charges and regains 1d6 + 1 charges daily at dawn. I can expend charges to cast the following spells (save DC 15, +7 to hit). Some spells are changed to be oil-based."+
			"\n \u2022 " + "Grease (1 charge)"+
			"\n \u2022 " + "Create or destroy oil (2 charges; as create or destroy water, but oil instead of water)"+
			"\n \u2022 " + "Mireball (3 charges; instead of mud, thick, rancid fat and oil are conjured)"+
			"\n \u2022 " + "Bone Cage and Conjure Elemental (tar elemental only, see page 589)"+
			"\n" + toUni("Spell Reflection.") + " While I wear this robe, any time I am targeted by a magic missile spell, a line spell, or a spell that requires a ranged attack roll, roll a d8. On a 1-6, I am affected as normal. On a 7 or 8, I am unaffected, and the effect is reflected back at the caster as though it originated from me, turning the caster into the target.",
		usages : 12,
		recovery : "dawn",
		additional: "regains 1d8+4",
		spellFirstColTitle: "Ch",
		fixedSpAttack : 7,
		fixedDC : 15,
		spellcastingBonus: [{
			name: "1 charge",
			spells: ["grease"],
			selection: ["grease"],
			firstCol: 1
		},{
			name: "2 charges",
			spells: ["create or destroy water"],
			selection: ["create or destroy water"],
			firstCol: 2,
		},{
			name: "3 charges",
			spells: ["mireball"],
			selection: ["mireball"],
			firstCol: 3
		},{
			name: "5 charges",
			spells: ["bone cage", "conjure elemental"],
			selection: ["bone cage", "conjure elemental"],
			firstCol: 5,
			times : 2,
		}],
		languageProfs : ["Terran"],
	},
};

// Terrorasque
MagicItemsList["terrorasque"] = {
	name : "Terrorasque",
	source : [["HGtMH", 492]],
	type : "Weapon (any two-handed melee),",
	attunement: true,
	description : "",
	action : [["action", "Ferocious Blow"],["bonus action", "Terrorise"]],
	calcChanges : { 
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && /terrorasque/i.test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
				}
			},
			'If I include the word "Terrorasque" in the name of an axe, it will be treated as the magic weapon Terrorasque.'
		],
	},
	choices : ["rare", "very rare"],
	choicesNotInMenu : true,
	"rare" : {
		rarity : "rare",
		description : "From the fossilised teeth of a tar-rasque is extracted the magic of rage and ferocity. Upon attuning to this weapon, I gain the ability to unleash terrifyingly monstrous roars and swing the enormous, bone-handled blade with astounding aggression.",
		descriptionFull : 
			"From the fossilised teeth of a tar-rasque is extracted the magic of rage and ferocity. Upon attuning to this weapon, I gain the ability to unleash terrifyingly monstrous roars and swing the enormous, bone-handled blade with astounding aggression."+
			"\n" + "I gain a +1 bonus to attack and damage rolls I make with this magic weapon. This weapon has 5 charges and regains 1d4 + 1 charges daily at dawn."+
			"\n" + toUni("Ferocious Blow.") + " As an action, I can expend 1 charge to call upon the spirit of the tar-rasque and make a mighty swing with this weapon. If the attack hits, roll four times as many damage dice for the weapon as normal for this attack. This dice multiplication does not affect additional damage from abilities such as smite or sneak attack, and is unaffected by critical hits. If the attack misses, I fall prone and my speed is reduced to 0 feet until the start of my next turn."+
			"\n" + toUni("Terrorise.") + " As a bonus action, or as part of the bonus action I use to activate the Rage class feature, I can brandish the terrorasque, amplifying my yell with that of a tar-rasque’s. Each hostile creature within 60 feet of me that can hear I must succeed on a DC 15 Wisdom saving throw or be frightened of me for 1 minute. An affected creature can repeat the saving throw at the end of each of its turns, ending the effect for itself on a success. After I use this property, I can’t do so again for 1 hour.",
		usages : 5,
		recovery : "dawn",
		additional: "regains 1d4+1",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : ["between", "Terrorasque", "[rare]"],
			descriptionChange : ["replace", "weapon"],
			excludeCheck : function (inObjKey, inObj) {
				return !(/melee/i).test(inObj.range) || !(/((^|[^+-]\b)2|\btwo).?hand(ed)?s?\b/i).test(inObj.description);
			}
		},	
		calcChanges: {
			atkCalc: [
				function (fields, v, output) {
					if (/terrorasque/i.test(v.WeaponTextName)) output.magic = v.thisWeapon[1] + 1;
				},
				"I gain a +1 bonus to attack and damage rolls made with this magic weapon."
			],
		},
	},
	"very rare" : {
		description : "From the fossilised teeth of a tar-rasque is extracted the magic of rage and ferocity. Upon attuning to this weapon, I gain the ability to unleash terrifyingly monstrous roars and swing the enormous, bone-handled blade with astounding aggression.",
		descriptionFull : 
			"From the fossilised teeth of a tar-rasque is extracted the magic of rage and ferocity. Upon attuning to this weapon, I gain the ability to unleash terrifyingly monstrous roars and swing the enormous, bone-handled blade with astounding aggression."+
			"\n" + "I gain a +1 bonus to attack and damage rolls I make with this magic weapon. This weapon has 5 charges and regains 1d4 + 1 charges daily at dawn."+
			"\n" + toUni("Ferocious Blow.") + " As an action, I can expend 1 charge to call upon the spirit of the tar-rasque and make a mighty swing with this weapon. If the attack hits, roll five times as many damage dice for the weapon as normal for this attack. This dice multiplication does not affect additional damage from abilities such as smite or sneak attack, and is unaffected by critical hits. If the attack misses, I fall prone and my speed is reduced to 0 feet until the start of my next turn."+
			"\n" + toUni("Terrorise.") + " As a bonus action, or as part of the bonus action I use to activate the Rage class feature, I can brandish the terrorasque, amplifying my yell with that of a tar-rasque’s. Each hostile creature within 60 feet of me that can hear I must succeed on a DC 16 Wisdom saving throw or be frightened of me for 1 minute. An affected creature can repeat the saving throw at the end of each of its turns, ending the effect for itself on a success. After I use this property, I can’t do so again for 1 hour."+
			"\n" + toUni("Tar Strike.") + " As an action, I can mentally command this weapon to ooze tar, expending 1 charge as I make one attack against a creature with it. On a hit, the target suffers the weapon attack’s normal effects and is restrained for 1 minute. The creature can use its action to make a DC 16 Strength check, ending the restrained condition on a success.",
		usages : 7,
		recovery : "dawn",
		additional: "regains 1d6+1",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : ["between", "Terrorasque", "[very rare]"],
			descriptionChange : ["replace", "weapon"],
			excludeCheck : function (inObjKey, inObj) {
				return !(/melee/i).test(inObj.range) || !(/((^|[^+-]\b)2|\btwo).?hand(ed)?s?\b/i).test(inObj.description);
			}
		},	
		calcChanges: {
			atkCalc: [
				function (fields, v, output) {
					if (/terrorasque/i.test(v.WeaponTextName)) output.magic = v.thisWeapon[1] + 2;
				},
				"I gain a +2 bonus to attack and damage rolls made with this magic weapon."
			],
		},
		action : [["action", "Tar Strike"]],
	},
};

// Tinytar
MagicItemsList["tinytar"] = {
	name : "Tinytar", 
	source : [["HGtMH", 494]],
	type : "Wondrous item",
	rarity : "common",
	description : "With the sentient tar of a tar elemental and a dose of enchantment magic, one can craft this friendly and amenable little helper. When applied to anything I can hold, the tinytar ensures I don’t accidentally drop it.",
	descriptionFull : 
		"With the sentient tar of a tar elemental and a dose of enchantment magic, one can craft this friendly and amenable little helper. When applied to anything I can hold, the tinytar ensures I don’t accidentally drop it."+
		"\n" + toUni("Grippy.") + " This small, magical phial contains an animate and excitable tar. When applied to the handle of a weapon, shield or other held item, the first creature to hold that item can’t be disarmed of the item against its will. The creature can still sheathe or drop the item if it desires; the tinytar is very intuitive. As an action, I can hold the magical phial to the tinytar causing it to shlink back inside.",
};

// Viscous Symbiote
MagicItemsList["viscous symbiote"] = {
	name : "Viscous Symbiote",
	source : [["HGtMH", 495]],
	type : "Wondrous item",
	attunement: true,
	description : "",
	choices : ["rare", "very rare", "legendary"],
	choicesNotInMenu : true,
	"rare" : {
		name : "Rare Viscous Symbiote",
		rarity : "rare",
		description : "While unworn, this item appears as a puddle of viscous tar and bone shards. When I attune to this amorphous ooze, it slides up my arms, enhancing them with an extra-cutaneous layer of malleable, oily muscle.",
		descriptionFull : 
			"While unworn, this item appears as a puddle of viscous tar and bone shards. When I attune to this amorphous ooze, it slides up my arms, enhancing them with an extra-cutaneous layer of malleable, oily muscle."+
			"\n" + toUni("Armhancements.") + " While attuned to this item, whenever I make an ability check that uses Strength, I can treat a d20 roll of 7 or lower as an 8."+
			"\n" + toUni("Malleable Skin.") + " When I make a melee attack on my turn, my reach for it is 5 feet greater than normal.",
		calcChanges: {
			atkAdd : [
				function (fields, v) {
					if (v.isMeleeWeapon)
					fields.Description += (fields.Description ? '; ' : '') + 'Melee reach +5ft on my turn;';
				},
				"When I make a melee attack on my turn, my reach for it is 5 feet greater than normal.",
			],
		},
	},
	"very rare" : {
		name : "Very Rare Viscous Symbiote",
		rarity : "very rare",
		description : "While unworn, this item appears as a puddle of viscous tar and bone shards. When I attune to this amorphous ooze, it slides up my arms, enhancing them with an extra-cutaneous layer of malleable, oily muscle.",
		descriptionFull : 
			"While unworn, this item appears as a puddle of viscous tar and bone shards. When I attune to this amorphous ooze, it slides up my arms, enhancing them with an extra-cutaneous layer of malleable, oily muscle."+
			"\n" + toUni("Armhancements.") + " While attuned to this item, whenever I make an ability check that uses Strength, I can treat a d20 roll of 7 or lower as an 8."+
			"\n" + toUni("Malleable Skin.") + " When I make a melee attack on my turn, my reach for it is 5 feet greater than normal."+
			"\n" + "I gain 3 temporary hit points at the start of each of my turns."+ 
			"\n" + toUni("Claws.") + " Protruding from my tar-coated hands are long claws; natural weapons which I can use to make unarmed strikes. If I hit with them, I deal slashing damage equal to 2d4 + my Strength modifier instead of the bludgeoning damage normal for an unarmed strike.",
		calcChanges: {
			atkAdd : [
				function (fields, v) {
					if (v.isMeleeWeapon)
					fields.Description += (fields.Description ? '; ' : '') + 'Melee reach +5ft on my turn;';
				},
				"When I make a melee attack on my turn, my reach for it is 5 feet greater than normal.",
			],
		},
		weaponOptions : [{
			baseWeapon : "unarmed strike",
			regExpSearch : /^(?=.*viscous)(?=.*symbiote)(?=.*claws).*$/i,
			name : "Viscous Symbiote Claws",
			source : [["HGtMH", 495]],
			damage : [2, 4, "slashing"],
			selectNow : true
		}],
	},
	"legendary" : {
		name : "Legendary Viscous Symbiote",
		rarity : "legendary",
		description : "While unworn, this item appears as a puddle of viscous tar and bone shards. When I attune to this amorphous ooze, it slides up my arms, enhancing them with an extra-cutaneous layer of malleable, oily muscle.",
		descriptionFull : 
			"While unworn, this item appears as a puddle of viscous tar and bone shards. When I attune to this amorphous ooze, it slides up my arms, enhancing them with an extra-cutaneous layer of malleable, oily muscle."+
			"\n" + toUni("Armhancements.") + " While attuned to this item, whenever I make an ability check that uses Strength, I can treat a d20 roll of 7 or lower as an 8."+
			"\n" + toUni("Malleable Skin.") + " When I make a melee attack on my turn, my reach for it is 5 feet greater than normal."+
			"\n" + "I gain 5 temporary hit points at the start of each of my turns."+ 
			"\n" + toUni("Claws.") + " Protruding from my tar-coated hands are long claws; natural weapons which I can use to make unarmed strikes. If I hit with them, I deal slashing damage equal to 2d4 + my Strength modifier instead of the bludgeoning damage normal for an unarmed strike."+
			"\n" + toUni("Mask.") + " This oily symbiote can react to danger, enhancing my senses. As a reaction when initiative is rolled, I can command the oil to cover my face for the next minute. For the duration, I have advantage on initiative checks and Dexterity saving throws, and gain blindsight out to 30 feet. After I activate this ability, I can’t do so again until the following dawn."+
			"\n" + toUni("Reactive Tentacles.") + " My symbiote protects me from incoming blows. Whenever I am the target of a melee attack by an attacker I can see within 10 feet of me, I can use my reaction to make a melee attack (+9 to hit) against that attacker immediately after its attack concludes. This attack deals 2d8 piercing damage on a hit.",
		calcChanges: {
			atkAdd : [
				function (fields, v) {
					if (v.isMeleeWeapon)
					fields.Description += (fields.Description ? '; ' : '') + 'Melee reach +5ft on my turn;';
				},
				"When I make a melee attack on my turn, my reach for it is 5 feet greater than normal.",
			],
		},
		weaponOptions : [{
			baseWeapon : "unarmed strike",
			regExpSearch : /^(?=.*viscous)(?=.*symbiote)(?=.*claws).*$/i,
			name : "Viscous Symbiote Claws",
			source : [["HGtMH", 495]],
			damage : [2, 4, "slashing"],
			selectNow : true
		},{
			regExpSearch : /^(?=.*reactive)(?=.*tentacles).*$/i,
			name : "Reactive Tentacles",
			source : [["HGtMH", 495]],
			type : "AlwaysProf",
			range : "Melee, 10 ft",
			damage : [2, 8, "piercing"],
			modifiers : [9, ""],
			selectNow : true
		}],
	},
};

// Eyes of Googly
MagicItemsList["eyes of googly"] = {
	name : "Eyes of Googly", 
	source : [["HGtMH", 496]],
	type : "Wondrous item",
	rarity : "common",
	description : "Firm, and always slightly moist to the touch, this pair of eyes wanders of their own accord. When placed on a single object that can fit inside a 5-foot cube, the object becomes sentient. It can’t speak, and has statistics the GM deems appropriate.",
	descriptionFull : 
		"Firm, and always slightly moist to the touch, this pair of eyes wanders of their own accord. When placed on a single object that can fit inside a 5-foot cube, the object becomes sentient. It can’t speak, and has statistics the GM deems appropriate.",
};

// Grill of Barbecuing
MagicItemsList["grill of barbecuing"] = {
	name : "Grill of Barbecuing", 
	source : [["HGtMH", 496]],
	type : "Wondrous item",
	rarity : "uncommon",
	description : "To accompany the launch of her book, Heliana commissioned the ever-useful artificer, L’Arsène Upin, to produce a line of portable kitchen backpacks. In addition to improving flavour and nutritional value, the pockets of these grill-backpacks always contain the cumin, shallots, or other ingredients that I forgot to pack.",
	descriptionFull : 
		"To accompany the launch of her book, Heliana commissioned the ever-useful artificer, L’Arsène Upin, to produce a line of portable kitchen backpacks. In addition to improving flavour and nutritional value, the pockets of these grill-backpacks always contain the cumin, shallots, or other ingredients that I forgot to pack."+
		"\n" + toUni("Extra-Dimensional Pantry.") + " One pocket of this grill-backpack is a gateway to a pocket dimension that magically refills with sustenance at dawn each day. It has enough vegetables and sundries for one magical meal or for a day’s rations for one creature. The nature of the food that a creature extracts from the pocket dimension is always a reflection of what the creature desires at that moment. The pocket only allows items to be taken from it; any attempt to put something into this pocket results in the item being fired back out."+
		"\n" + toUni("Sous-Chef.") + " The grill’s inbuilt cooking monitor adjusts its own temperature to improve the end result of foods cooked with it. When I cook a magical meal using this grill, it gains one additional boon from the Cooking Boons table at random (page 152)."+
		"\n" + toUni("Tools for the Job.") + " The grill of barbecuing comes with all the paraphernalia needed for cooking and acts as cook’s utensils.",	
};


// Heliana's Guide to Monster Hunting
MagicItemsList["heliana's guide to monster hunting"] = {
	name : "Heliana's Guide to Monster Hunting",
	source : [["HGtMH", 497]],
	type : "Wondrous item",
	attunement: true,
	description : "",
	action : [["action", "Fantastic Phalanges and Where to Find Them"],["action", "Know Thy Enemy"]],
	choices : ["uncommon", "very rare"],
	choicesNotInMenu : true,
	"uncommon" : {
		name : "Uncommon Heliana’s Guide to Monster Hunting",
		rarity : "uncommon",
		description : "Full of useful knowledge and heavy enough to crush a skull, Heliana’s Guide to Monster Hunting is nothing if not handy. The personalised quotes from Heliana, Peeper’s deft proofing and editing, and the numerous ink stains and spilled watercolours give this hefty tome a homemade feel.",
		descriptionFull : 
			"Full of useful knowledge and heavy enough to crush a skull, Heliana’s Guide to Monster Hunting is nothing if not handy. The personalised quotes from Heliana, Peeper’s deft proofing and editing, and the numerous ink stains and spilled watercolours give this hefty tome a homemade feel."+
			"\n" + toUni("Fantastic Phalanges and Where to Find Them.") + " As an action, I can open this book and stare intently at its pages, which turn of their own accord to settle on an anatomical diagram of the corpse nearest to the book. I immediately learn all the harvestable parts of the corpse, as well as their Component DCs."+
			"\n" + toUni("Know Thy Enemy.") + " As an action, I can place an object that belonged to a creature—such as its scat, scales, or clothing—between the pages of this book. One minute later, the book tells me one piece of information about the creature. At the GM’s discretion, this may be: its saving throw proficiencies, damage resistances, immunities, and vulnerabilities; condition immunities; creature’s type; one of its traits; or one of the clues acquired during a hunt. Placing more objects that belonged to that creature (or a creature with the same statblock) yields no further results."+
			"\n" + toUni("Weapon of the Learned.") + " This book can be used as a simple melee weapon that deals 1d6 bludgeoning damage on a hit. If I am proficient in Arcana, History, Nature, or Religion, I am proficient with this weapon.",
		weaponOptions : [{
			regExpSearch : /^(?=.*heliana)(?=.*guide)(?=.*monster)(?=.*hunting).*$/i,
			name : "Heliana’s Guide to Monster Hunting",
			source : [["HGtMH", 495]],
			type : "Simple",
			ability : 1,
			abilitytodamage : true,
			range : "Melee",
			damage : [1, 6, "bludgeoning"],
			description : "Proficient with weapon if prof with Arcana/History/Nature/Religion",
			selectNow : true
		}],
	},
	"very rare" : {
		name : "Very Rare Heliana’s Guide to Monster Hunting",
		rarity : "very rare",
		description : "Full of useful knowledge and heavy enough to crush a skull, Heliana’s Guide to Monster Hunting is nothing if not handy. The personalised quotes from Heliana, Peeper’s deft proofing and editing, and the numerous ink stains and spilled watercolours give this hefty tome a homemade feel.",
		descriptionFull : 
			"Full of useful knowledge and heavy enough to crush a skull, Heliana’s Guide to Monster Hunting is nothing if not handy. The personalised quotes from Heliana, Peeper’s deft proofing and editing, and the numerous ink stains and spilled watercolours give this hefty tome a homemade feel."+
			"\n" + toUni("Fantastic Phalanges and Where to Find Them.") + " As an action, I can open this book and stare intently at its pages, which turn of their own accord to settle on an anatomical diagram of the corpse nearest to the book. I immediately learn all the harvestable parts of the corpse, as well as their Component DCs."+
			"\n" + toUni("Know Thy Enemy.") + " As an action, I can place an object that belonged to a creature—such as its scat, scales, or clothing—between the pages of this book. One minute later, the book tells me two pieces of information about the creature. At the GM’s discretion, this may be: its saving throw proficiencies, damage resistances, immunities, and vulnerabilities; condition immunities; creature’s type; one of its traits; or one of the clues acquired during a hunt. Placing more objects that belonged to that creature (or a creature with the same statblock) yields no further results."+
			"\n" + toUni("Weapon of the Learned.") + " This book can be used as a simple melee weapon that deals 1d6 bludgeoning damage on a hit. If I am proficient in Arcana, History, Nature, or Religion, I am proficient with this weapon."+
			"\n" + toUni("Anatomiser.") + " If I read this book for 1 hour, I gain proficiency in one of the following skills of my choice for the next 24 hours: Arcana, Investigation, Nature, Medicine, Religion, or Survival. Once I use this feature, I can’t use it again for 24 hours.",
		weaponOptions : [{
			regExpSearch : /^(?=.*heliana)(?=.*guide)(?=.*monster)(?=.*hunting).*$/i,
			name : "Heliana’s Guide to Monster Hunting",
			source : [["HGtMH", 495]],
			type : "Simple",
			ability : 1,
			abilitytodamage : true,
			range : "Melee",
			damage : [1, 6, "bludgeoning"],
			description : "Proficient with weapon if prof with Arcana/History/Nature/Religion",
			selectNow : true
		}],
	},
};

// L'Arsene's Quadnoculars
MagicItemsList["l'arsene's quadnoculars"] = {
	name : "L'Arsene's Quadnoculars", 
	source : [["HGtMH", 496]],
	type : "Wondrous item",
	rarity : "rare",
	action : [["action", "Spectacular Analytica"]],
	description : "L’Arsène’s Quadnoculars grant their wearer the ability to identify the magic items that could be constructed from a recently slain creature.",
	descriptionFull : 
		"L’Arsène’s Quadnoculars grant their wearer the ability to identify the magic items that could be constructed from a recently slain creature."+
		"\n" + toUni("Spectacular Analytica.") + " As an action, I can flick through the filters of these goggles and stare intently at a corpse within 60 feet of me. I immediately learn the general function (or the specific mechanics, at the GM’s discretion) of the possible magic items that can be crafted from the creature’s harvestable components, as well as the effects of the magical meals I could make from it.",	
};





































