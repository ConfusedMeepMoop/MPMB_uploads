var iFileName = "Ryoko's Guide to the Yokai Realms.js";
RequiredSheetVersion("13.1.14");

SourceList["RGttYR"] = {
   name: "Ryoko's Guide to the Yokai Realms",
   abbreviation: "RGttYR",
   abbreviationSpellsheet : "RG",
   group: "Third Party",
   date: "2024-10-01",
};


/*
 * Races
 */

// Enkoh

RaceList["hulking enkoh"] = { 
	regExpSearch: /^(?=.*enkoh)(?=.*hulking).*$/i,
	name: "Hulking Enkoh",
	sortname: "Enkoh, Hulking",
	plural: "Hulking Enkoh",
	size : 3,
	dmgres: ["Cold"],
	languageProfs: ["Common", 1],
	scorestxt : "+2 Intelligence, +1 Constitution",
	age: " reach maturity at 15 and live about 80 years",
	height: " are about 5-7 feet tall",
	speed: {walk: {spd: 30, enc: 20}, climb: {spd: 30, enc: 20}},
	features : {
		"chest beating" : {
			name : "Chest Beating",
			minlevel : 1,
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
			action : [["bonus action", ""]]
		}
	},	
	toolProfs : [["carpenter’s tools, glassblower’s tools, jeweller’s tools, mason’s tools, potter’s tools, or smith’s tools.", 1]],
	trait : "Hulking Enkoh"+
		(typePF ? "\n" : "") + " \u2022 Powerful Build: I count as one size larger for my carrying capacity."+
		"\n \u2022 Chest Beating. Proficiency Bonus per long rest, as a bonus action, I can gain resistance to bludgeoning, piercing, and slashing damage, and advantage on Intimidation checks."+
		"\n \u2022 Ice Craft. I gain proficiency with one of the following artisan’s tools: carpenter’s tools, glassblower’s tools, jeweller’s tools, mason’s tools, potter’s tools, or smith’s tools and have advantage on ability checks I make to use these tools to shape ice."+
		"\n \u2022 Natural Cooks. With ingredients worth at least 1 sp, I can prepare a meal for a number of Medium or smaller creatures equal to 2 + my proficiency bonus over the course of a short or long rest. A creature who eats the meal at the end of the rest regains one spent Hit Die and gains temporary hit points equal to 1d6 + my proficiency bonus.",
};

RaceList["springtail enkoh"] = { 
	regExpSearch: /^(?=.*enkoh)(?=.*springtail).*$/i,
	name: "Springtail Enkoh",
	sortname: "Enkoh, Springtail",
	source: [["RGttYR", 119]],
	plural: "Springtail Enkoh",
	dmgres: ["Cold"],
	languageProfs: ["Common", 1],
	scorestxt : "+2 Intelligence, +1 Dexterity",
	age: " reach maturity at 15 and live about 80 years",
		size : 4,
	height: " are about 2-4 feet tall",
	speed: {walk: {spd: 35, enc: 25}, climb: {spd: 35, enc: 25}},
	skillstxt : "Choose any two skills from: Acrobatics, Animal Handling, Nature, Performance, or Survival.",
	action : [["reaction", "Sturdy Tail"]],
	toolProfs : [["carpenter’s tools, glassblower’s tools, jeweller’s tools, mason’s tools, potter’s tools, or smith’s tools.", 1]],
	trait : "Springtail Enkoh"+
		(typePF ? "\n" : "") + " \u2022 Beast Wardens. I have advantage on ability checks to tame or influence Beasts."+
		"\n \u2022 Ice Craft. I gain proficiency with one of the following artisan’s tools: carpenter’s tools, glassblower’s tools, jeweller’s tools, mason’s tools, potter’s tools, or smith’s tools and have advantage on ability checks I make to use these tools to shape ice."+
		"\n \u2022 Springing Leap. My tail adds an incredible spring to my leaps. I can add my Dexterity score to the maximum distance I can cover with a long jump, and I can add my Dexterity modifier to the maximum height I can reach with a high jump. In addition, I can jump my maximum distance with or without a running start. As usual, each foot I jump costs 1 foot of movement."+
		"\n \u2022 Sturdy Tail. My tail can support my weight and balance. When I make an ability check or saving throw to avoid being forcibly moved, I can use my reaction to curl my tail around an object within 5 feet of me that is attached to the ground or another sturdy surface. If I do so, I have advantage on that check or save.",
};

	
// Fuyoren
RaceList["fuyoren"] = {
	regExpSearch: /^(?=.*fuyoren).*$/i,
	name: "Fuyoren",
	sortname: "Fuyoren",
	source: [["RGttYR", 122]],
	plural: "Fuyoren",
	size : 3,
	languageProfs: ["Common", 1],
	scorestxt : "+2 Dexterity, +1 Wisdom",
	savetxt: {text: "Adv. against restrained, paralysed, petrified"},
	age: " reach adulthood at around 18 and live about 150 years",
	speed : {
		walk : { spd : 35, enc : 25 }
	},
	skillstxt : "Choose two from Deception, Insight, Intimidation, Performance, and Persuasion",
	trait : "Fuyoren"+
		"\n \u2022 Plant. My creature type is plant, rather than humanoid." +
		"\n \u2022 Fluid Motion. I have advantage on saving throws to avoid or end the restrained, paralysed, or petrified condition on myself." +
		"\n \u2022 Graceful Step. I can move across any liquid surface, such as water, mud, snow, or quicksand, as if it were solid ground. However, I am not protected from the damaging effects of contact with dangerous surfaces, such as lava or acid. I do not sink into the surface if I end my movement on it." +
		"\n \u2022 Water Magic. Through a 10-minute ritual, I can imbue a vial of ordinary water with magical properties. Choose one of the following effects:" + 
			"\n          \u2022 The water gains the magical properties of holy water. " +
			"\n          \u2022 The water becomes a simple antidote that ends the poisoned condition when drunk by one creature." +
			"\n          \u2022 The water is imbued with vitality. Drinking the vial is enough liquid to hydrate a Large or smaller creature for 24 hours." +
		"\n \u2022 The water bubbles with healing magic. A creature who ingests the vial of water regains 1d4 hit points. The water remains potent for the next 24 hours, after which time it returns to normal. I can use this feature a number of times equal to my proficiency bonus, regaining all expended uses when I finish a long rest." +		
		(typePF ? "\n \u2022 Nature Warden. I gain proficiency with one of the following skills: Acrobatics, Animal Handling, Nature, Survival, or Performance." : ""),
};

// Hanamori
RaceList["hanamori"] = {
	regExpSearch: /^(?=.*hanamori).*$/i,
	name: "Hanamori",
	sortname: "Hanamori",
	source: [["RGttYR", 124]],
	plural: "Hanamori",
	size : [3, 4],
	languageProfs: ["Common", 1],
	scorestxt : "+2 Charisma, +1 Wisdom",
	savetxt: {text: "Adv. against frightened, stunned"},
	age: " reach adulthood at the same rate as humans and live about 60 years",
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	skillstxt : "Choose two from Deception, Insight, Intimidation, Performance, and Persuasion",
	armorOptions : [{
		regExpSearch : /^(?=.*rugged).*$/i,
		name : "Rugged (Con)",
		source : [["RGttYR", 124]],
		ac : "12 + Con",
		selectNow : true
	}],
	trait : "Hanamori"+
		"\n \u2022 Plant. My creature type is plant, rather than humanoid." +
		"\n \u2022 Fiery Countenance. I have advantage on saving throws to avoid or end the frightened or stunned condition on myself." +
		"\n \u2022 Rugged. My tough, lignified exterior is a natural barrier to cuts and abrasions. When I am not wearing armour, my AC is 12 + my Constitution modifier. I can use my natural armour to determine my AC if the armour I wear would leave me with a lower AC. A shield’s benefits apply as normal while I use my natural armour." +
		"\n \u2022 Essence Capture. I have the power to magically capture fragments of a creature’s power when it dies in my proximity. As a reaction when a creature with a CR equal to or lower than my level dies within 10 feet of me, I can capture a fragment of its essence. I gain one of the following effects of my choice:" + 
			"\n          \u2022 I replace my Strength, Dexterity, Intelligence, Wisdom, or Charisma ability score with the same ability score of the creature that died." +
			"\n          \u2022 I gain one special sense of my choice, except truesight, that the creature possessed, out to the same range." +
			"\n          \u2022 I gain resistance to one damage type of my choice to which the creature had resistance or immunity." +
			"\n          \u2022 I gain immunity to one condition of my choice, except exhaustion, to which the creature had immunity." +
		"\n \u2022 This effect lasts until I finish a short or long rest, after which time I return to normal. Once I use this trait, I can’t do so again until I finish a long rest." +		
		(typePF ? "\n \u2022 Gaze Of Death. I gain proficiency with one of the following skills: Intimidation, Medicine, Nature, or Survival." : ""),
};

// Haniwa 
RaceList["haniwa"] = {
	regExpSearch: /^(?=.*haniwa).*$/i,
	name: "Haniwa",
	sortname: "Haniwa",
	source: [["RGttYR", 125]],
	plural: "Haniwa",
	size : [3, 4],
	languageProfs: ["Common", 1],
	scorestxt : "+2 Constitution, +1 Wisdom",
	savetxt: {text: "Adv. against disease, poisoned"},
	age: " are created fully formed and do not grow or age. Their maximum lifespan is unknown and they cannot be magically aged.",
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	skills : ["Religion", "Perception"],
	spellcastingAbility: [4, 5, 6],
	spellcastingBonus: [{
		name: "haniwa",
		spells: ["sanctuary"],
		selection: ["sanctuary"],
		firstCol: "oncelr",
	},{
		name: "haniwa", 
		spells: ["earthen uppercut"],
		selection: ["earthen uppercut"],
		firstCol: "oncelr",		
	}],
	trait : "Haniwa"+
		"\n \u2022 Construct. My creature type is construct, rather than humanoid." +
		"\n \u2022 Clay Companion. Over the course of a long rest, I can fashion a quasi-sentient, clay companion. My companion can take whatever shape I wish, but must use the giant weasel, hawk, mastiff, or mule stat block. Its creature type is Construct, and it also gains my Soul Shell trait. My clay companion understands me, and I can use my bonus action to command it to take any action. In combat, absent commands from me, it takes the Dodge action. The companion disintegrates into shapeless clay when it is reduced to 0 hit points or when I use this trait again." +
		"\n \u2022 Grave Guardian. I am blessed with innate magic of protection and consecration. I can cast the earthen uppercut and sanctuary spells with this trait. Once I cast either of these spells with this trait, I can’t cast that spell with it again until I finish a long rest. I can also cast these spells using any spell slots I have of the appropriate level. Intelligence, Wisdom, or Charisma is my spellcasting ability for these spells when I cast them with this trait (choose when selecting this race)." +
		"\n \u2022 Spirit Ward. My weapon attacks are considered magical for the purpose of overcoming resistances and immunities." + 
		"\n \u2022 Soul Shell. My soul has possessed a Construct, imparting the following benefits:" + 
			"\n          \u2022 I don’t need to eat, drink, or breathe." +
			"\n          \u2022 I have advantage on saving throws I make against disease and to avoid or end the poisoned condition on myself." +
			"\n          \u2022 I can receive the benefits of spells that restore hit points that don’t usually affect Constructs, like cure wounds and healing word." +
		(typePF ? "\n \u2022 Tombkeeper. I gain proficiency in Religion and Perception skills." : ""),
};

// Isetsu
RaceList["isetsu"] = {
	regExpSearch: /^(?=.*isetsu).*$/i,
	name: "Isetsu",
	sortname: "Isetsu",
	source: [["RGttYR", 128]],
	plural: "Isetsu",
	size : 3,
	languageProfs: ["Common", 1],
	scorestxt : "+2 Strength, +1 Constitution",
	age: " grow swiftly, reaching adulthood in less than a decade, and they go on to live for up to a century.",
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	skills : ["Athletics", "Perception"],
	senses : "Darkvision 60 ft",
	weaponOptions : [{
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*isetsu)(?=.*claw).*$/i,
		name : "Isetsu Claws",
		source : [["RGttYR", 128]],
		damage : [1, 6, "piercing"],
		selectNow : true
	}],
	armorOptions : [{
		regExpSearch : /^(?=.*natural)(?=.*armor)(?=.*isetsu).*$/i,
		name : "Natural Armor (Isetsu)",
		source : [["RGttYR", 128]],
		ac : "12 + Con",
		selectNow : true
	}],
	features: [{
		name : "Fortune Favoured",
		source : [["RGttYR", 128]],
	 	usages: "Prof Bonus per ",
		usagescalc: "event.value = How('Proficiency Bonus');",
	  	recovery: "long rest",
	}],
	trait : "Isetsu"+
		"\n \u2022 Brittle Shell. My carapace has a brittle, but tough, outer layer that regenerates over time. When I finish a short or long rest, I gain a +2 bonus to AC if I don’t already have this bonus. This bonus ends after I am hit by an attack roll." +
		"\n \u2022 Claws. I have claws that I can use to make unarmed strikes. If I hit with them, I deal piercing damage equal to 1d6 + my Strength modifier, instead of the bludgeoning damage normal for an unarmed strike. Starting at 5th level, when I hit a creature with an unarmed strike on my turn, I can immediately use a bonus action to attempt to grapple it." +
		"\n \u2022 Natural Armour. My shell acts as a natural source of protection. When I am not wearing armour, my base AC is 12 + my Constitution modifier. I can use my natural armour to determine my AC if the armour I wear would leave me with a lower AC. A shield’s benefits apply as normal while I use my natural armour." +
		"\n \u2022 Fortune Favoured. Be it sheer dumb luck, the result of intense training, or the fruition of a divine blessing, I have an uncanny ability to find fortune in combat. If I miss an attack roll, or fail an ability check or saving throw, I can reroll the attack roll, check, or save. I can use this trait a number of times equal to half my proficiency bonus, and I regain all expended uses when I finish a long rest." + 
		"\n \u2022 Waterborne. I can breathe in both air and water. Additionally, being underwater doesn’t impose disadvantage on my weapon attack rolls." +		
		(typePF ? "\n \u2022 Crustacean Physiology. I gain proficiency in Athletics and Perception skills." : ""),
};

// Kitsune
RaceList["kitsune"] = {
	regExpSearch: /^(?=.*kitsune).*$/i,
	name: "Kitsune",
	sortname: "Kitsune",
	source: [["RGttYR", 131]],
	plural: "Kitsune",
	size : 3,
	languageProfs: ["Common", "Kitsune", 1],
	scorestxt : "+2 Charisma, +1 Dexterity",
	age: " mature at the same rate as humans, reaching adulthood at around 20. They can go on to live up to a millennium.",
	speed : {
		walk : { spd : 35, enc : 25 }
	},
	skillstxt : "Choose one from Deception, Persuasion, or Stealth.",
	senses : "Darkvision 60 ft",
	action: [["action", "Ascendant Form"],["action", "Shapeshifter"]],
	spellcastingAbility: [4, 5, 6],
	spellcastingBonus: [{
		name: "kitsune",
		spells: ["druidcraft", "produce flame"],
		selection: ["druidcraft", "produce flame"],
		firstCol: "atwill",
		times : 2,
	}],
	features: {
		"fox’s wedding3": {
			name: "Disguise Self",
			minlevel: 3,
			usages: 1,
			recovery: "long rest",
			description: desc([
			"When I reach character level 3, I learn the Disguise Self spell.",
			]),
		spellcastingBonus: [{
			name: "kitsune",
			spells: ["disguise self"],
			selection: ["disguise self"],
			times: 1,
			firstCol: "oncelr",
		}],
	}},
	trait : "Kitsune"+
		"\n \u2022 Fey. My creature type is fey, rather than humanoid." +
		"\n \u2022 Ascendant Form. I have the power to take on a magical, ascendant form. As an action, I can radiate bright, white light for 1 hour or until I end the effect as a bonus action. This light penetrates magical darkness, shedding bright light in a 10-foot radius and dim light for an additional 10 feet. Creatures of my choice in the light can add 1d4 to their Intimidation, Perception, and Persuasion ability checks. While in this form, when a creature within 10 feet of me misses an attack roll or fails a saving throw, I can use my reaction to add 1d4 to the result, potentially turning a miss into a hit or a failure into a success. Once I use this trait, I can’t do so again until I finish a long rest." +
		"\n \u2022 Fox’s Wedding. I know the druidcraft and produce flame cantrips. Once I reach 3rd level, I can cast the disguise self spell once with this trait as a 1st-level spell, and I regain the ability to cast it this way when I finish a long rest. I can also cast either of those spells using any spell slots I have of the appropriate level. Intelligence, Wisdom, or Charisma is my spellcasting ability for these spells (choose when selecting this race)." +
		"\n \u2022 Language of Motion. I can articulate ideas through motion, as well as speech. If I spend 1 minute moving my tails and ears, I can communicate a simple message, which can be contrary to any words I may be speaking aloud. This communication is undetectable to any creature that doesn’t speak Kitsune. A creature within 60 feet of me that can see me and speaks Kitsune can understand this message." +
		"\n \u2022 Shapeshifter. As an action, I can transform into the shape of a fox. When I do, my clothing and equipment meld into my form, and I gain no benefits from them while transformed. I determine the specifics of my appearance in fox form, including my colouration and size (choosing from Tiny or Small when I transform). All my other game statistics remain the same. I can’t cast spells that require material or somatic components while in this form, but I can still concentrate on spells and speak as normal. I remain in this form until I use an action to revert to my true form or I die." + 		
		(typePF ? "\n \u2022 Kitsune Guile. I gain proficiency with one of the following skills: Deception, Persuasion, or Stealth." : ""),
};

// Oniborne
RaceList["red oniborne"] = {
	regExpSearch: /^(?=.*oniborne)(?=.*red).*$/i,
	name: "Red Oniborne",
	sortname: "Oniborne, Red",
	source: [["RGttYR", 132]],
	plural: "Red Oniborne",
	languageProfs: ["Common", 1],
	scorestxt : "+2 Constitution, +1 Wisdom",
	age: " reach maturity at around 21 years of age and have long lives, often living up to 400 years.",
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	size : 3,
	height: " are about 5-7 feet tall",
	carryingCapacity : 2,
	skills : ["Intimidation"],
	spellcastingAbility: [4, 5, 6],
	spellcastingBonus: [{
		name: "red oniborne",
		spells: ["prestidigitation"],
		selection: ["prestidigitation"],
		firstCol: "atwill",
	}],
	features: {
		"weeping magic3": {
			name: "Cure Wounds",
			minlevel: 3,
			usages: 1,
			recovery: "long rest",
			description: desc([
			"When I reach character level 3, I learn the Cure Wounds spell.",
			]),
		spellcastingBonus: [{
			name: "red oniborne",
			spells: ["cure wounds"],
			selection: ["cure wounds"],
			times: 1,
			firstCol: "oncelr",
		}],
		},
		"weeping magic5": {
			name: "Enhance Ability",
			minlevel: 5,
			usages: 1,
			recovery: "long rest",
			description: desc([
			"When I reach character level 5, I learn the Enhance Ability spell.",
			]),
		spellcastingBonus: [{
			name: "red oniborne",
			spells: ["enhance ability"],
			selection: ["enhance ability"],
			times: 1,
			firstCol: "oncelr",
		}],
		},
	},
	trait : "Red Oniborne"+
		"\n \u2022 Powerful Build. I count as one size larger when determining my carrying capacity and the weight I can push, drag, or lift." +
		"\n \u2022 Magical Scavenger. Over the course of 1 minute, or as part of a Harvesting check, I can harvest one hard piece of a corpse’s anatomy, fashioning it into a magic weapon. That weapon becomes any melee or Thrown weapon that gives me a +1 bonus to attack and damage rolls I make with it. This bonus increases to +2 at 9th level and +3 at 17th level. The weapon is only magical for me, and in anyone else’s hands it functions as a normal, nonmagical weapon. When I imbue a scavenged weapon with magic in this way, any other weapons I created with this feature become nonmagical." +
		"\n \u2022 Weeping Magic. I know the prestidigitation cantrip. Starting at 3rd level, I can cast cure wounds with this trait. Starting at 5th level, I can also cast enhance ability with this trait. Once I cast cure wounds or enhance ability with this trait, I can’t cast that spell with it again until I finish a long rest. I can also cast either of those spells using any spell slots I have of the appropriate level. Intelligence, Wisdom, or Charisma is my spellcasting ability for these spells when I cast them with this trait (choose when selecting this race). Tears form at the corner of my eyes when I cast a spell using this trait." +
		(typePF ? "\n \u2022 Daunting Stature. I have proficiency in the Intimidation skill." : ""),
};

RaceList["blue oniborne"] = {
	regExpSearch: /^(?=.*oniborne)(?=.*blue).*$/i,
	name: "Blue Oniborne",
	sortname: "Oniborne, Blue",
	source: [["RGttYR", 132]],
	plural: "Blue Oniborne",
	languageProfs: ["Common", 1],
	scorestxt : "+1 Strength, +2 Constitution",
	age: " reach maturity at around 21 years of age and have long lives, often living up to 400 years.",
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	size : 3,
	height: " are about 5-7 feet tall",
	carryingCapacity : 2,
	features: [{
		name : "Compassionate Heart",
		source : [["RGttYR", 134]],
	 	usages: "Prof Bonus per ",
		usagescalc: "event.value = How('Proficiency Bonus');",
	  	recovery: "long rest",	
		action : ["bonus action", ""],
	},{
		name : "Savage Bite",
		source : [["RGttYR", 134]],
	 	usages: "Prof Bonus per ",
		usagescalc: "event.value = How('Proficiency Bonus');",
	  	recovery: "long rest",	
		action : ["reaction", ""],
	}],
	weaponOptions : [{
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*crunching)(?=.*maw).*$/i,
		name : "Crunching Maw",
		source : [["RGttYR", 135]],
		damage : [1, 6, "piercing"],
		selectNow : true
	}],	
	skills : ["Insight", "Persuasion"],
	trait : "Blue Oniborne"+
		"\n \u2022 Powerful Build. I count as one size larger when determining my carrying capacity and the weight I can push, drag, or lift." +
		"\n \u2022 Compassionate Heart. The aid of a blue oniborne is an act of great selflessness imbued with powerful magic. I can take the Help action as a bonus action a number of times equal to my proficiency bonus, and I regain all expended uses when I finish a long rest. In addition, when I take the Help action, I can expend one of my Hit Dice to empower an ally within 5 feet of me, channelling my magic into its body. That creature gains temporary hit points equal to one roll of that die plus my Constitution modifier (minimum 1 temporary hit point)." +
		"\n \u2022 Savage Bite. As a reaction when I take damage from a creature within 5 feet of me, I can magically enlarge my jaw and lash out with a vicious bite. Make an unarmed strike using my Crunching Maw against that creature. This attack scores a critical hit on a roll of 18-20 on the d20. I can use this trait a number of times equal to my proficiency bonus, and I regain all expended uses when I finish a long rest." +
		(typePF ? "\n \u2022 Gift of Empathy. I have proficiency in the Insight and Persuasion skills." : ""),
};

RaceList["green oniborne"] = {
	regExpSearch: /^(?=.*oniborne)(?=.*green).*$/i,
	name: "Green Oniborne",
	sortname: "Oniborne, Green",
	source: [["RGttYR", 132]],
	plural: "Green Oniborne",
	languageProfs: ["Common", 1],
	scorestxt : "+2 Constitution, +1 Charisma",
	age: " reach maturity at around 21 years of age and have long lives, often living up to 400 years.",
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	size : 3,
	height: " are about 5-7 feet tall",
	carryingCapacity : 2,
	skills : ["Performance"],
	features: [{
		name : "Ghastly Visage",
		source : [["RGttYR", 135]],
	 	usages: "Prof Bonus per ",
		usagescalc: "event.value = How('Proficiency Bonus');",
	  	recovery: "long rest",	
		action : ["bonus action", ""],
	}],
	spellcastingAbility: [4, 5, 6],
	spellcastingBonus: [{
		name: "green oniborne",
		spells: ["thaumaturgy"],
		selection: ["thaumaturgy"],
		firstCol: "atwill",
	}],
	features: {
		"weeping magic3": {
			name: "Hellish Rebuke",
			minlevel: 3,
			usages: 1,
			recovery: "long rest",
			description: desc([
			"When I reach character level 3, I learn the Hellish Rebuke spell.",
			]),
		spellcastingBonus: [{
			name: "green oniborne",
			spells: ["hellish rebuke"],
			selection: ["hellish rebuke"],
			times: 1,
			firstCol: "oncelr",
		}],
		},
		"weeping magic5": {
			name: "Enlarge/Reduce",
			minlevel: 5,
			usages: 1,
			recovery: "long rest",
			description: desc([
			"When I reach character level 5, I learn the Enlarge/Reduce spell.",
			]),
		spellcastingBonus: [{
			name: "green oniborne",
			spells: ["enlarge/reduce"],
			selection: ["enlarge/reduce"],
			times: 1,
			firstCol: "oncelr",
		}],
		},
	},
	trait : "Green Oniborne"+
		"\n \u2022 Powerful Build. I count as one size larger when determining my carrying capacity and the weight I can push, drag, or lift." +
		"\n \u2022 Fierce Magic. I know the thaumaturgy cantrip. Starting at 3rd level, I can cast hellish rebuke with this trait. Starting at 5th level, I can also cast enlarge/reduce with this trait. Once I cast hellish rebuke or enlarge/reduce with this trait, I can’t cast that spell with it again until I finish a long rest. I can also cast either of those spells using any spell slots I have of the appropriate level. Intelligence, Wisdom, or Charisma is my spellcasting ability for these spells when I cast them with this trait (choose when selecting this race). The space immediately around me grows warm and humid when I cast a spell using this trait." +
		"\n \u2022 Ghastly Visage. After I take the Attack action on my turn, I can use a bonus action to try and magically frighten a creature within 5 feet of me. That creature must make a Wisdom saving throw (DC = 8 + my Constitution modifier + my proficiency bonus) or be frightened of me for 1 minute. If the target ends its turn more than 30 feet away from me, it can repeat this saving throw, ending the effect on a success. I can use this trait a number of times equal to my proficiency bonus, and I regain all expended uses when I finish a long rest." +
		(typePF ? "\n \u2022 Captivating Quality. I have proficiency in the Performance skill." : ""),
};

// Ryokido
RaceList["ryokido"] = {
	regExpSearch: /^(?=.*ryokido).*$/i,
	name: "Ryokido",
	sortname: "Ryokido",
	source: [["RGttYR", 131]],
	plural: "Ryokido",
	size : 3,
	languageProfs: ["Common", 1],
	scorestxt : "+1 Strength, +1 Wisdom, +1 Charisma",
	savetxt: {text: "Adv. against prone"},
	age: " grow extremely slowly. They are considered young until they reach the age of 80, and go on to live for up to 600 years.",
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	skillstxt : "Choose one from Acrobatics, Athletics, Insight, or Intimidation.",
	senses : "Darkvision 60 ft",
	weaponOptions : [{
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*slashing)(?=.*claw).*$/i,
		name : "Slashing Claws",
		source : [["RGttYR", 136]],
		damage : [1, 6, "slashing"],
		selectNow : true
	}],	
	action: [["action", "Telepathic Bond"],["reaction", "Tough Shell"]],
	features: [{
		name : "Tough Shell",
		source : [["RGttYR", 137]],
	 	usages: "1",
	  	recovery: "long rest",	
	}],
	trait : "Ryokido"+
		"\n \u2022 Heavy Shell. I have advantage on ability checks and saving throws I make to avoid being knocked prone. In addition, when I stand up from being prone, I must use my bonus action, in addition to the amount of movement I spend." +
		"\n \u2022 Slashing Claws. I can use my claws to make unarmed strikes. When I hit with them, the strike deals slashing damage equal to 1d6 + my Strength modifier, instead of the bludgeoning damage normal for an unarmed strike. In addition, when I fall, I can use a reaction to angle my body and cushion the impact through my shell. When I do, I can subtract up to 100 feet from the fall when calculating falling damage. Once I use this reaction, I can’t do so again until I finish a long rest, as my shell recovers from the impact." +
		"\n \u2022 Telepathic Bond. As an action, I can form a telepathic bond with a willing creature I can see within 100 feet of me. For 1 hour, that creature and I can communicate telepathically with each other, even if I don’t share a language. If that creature doesn’t speak any language, the two of us can still communicate rudimentary ideas, images, and feelings. The connection ends early if I use this trait again to bond with a different creature, or if the creature and I are ever more than 100 feet apart." +
		"\n \u2022 Tough Shell. While I am not wearing armour, my base AC is 12 + my Constitution modifier. I can use a shield and still get this benefit." +		
		(typePF ? "\n \u2022 Lionheart. I gain proficiency with one of the following skills: Acrobatics, Athletics, Insight, or Intimidation." : ""),
};

// Tatsumi
RaceList["nishikin tatsumi"] = {
	regExpSearch: /^(?=.*tatsumi)(?=.*nishikin).*$/i,
	name: "Nishikin Tatsumi",
	sortname: "Tatsumi, Nishikin",
	source: [["RGttYR", 139]],
	plural: "Nishikin Tatsumi",
	languageProfs: ["Common", 1],
	scorestxt : "+1 Dexterity, +1 Constitution, +1 Wisdom",
	age: " mature rapidly, reaching adulthood by the age of 14. They go on to live for about two centuries.",
	speed : {
		walk : { spd : 30, enc : 20 }, swim : {spd : 30, enc : 20 }
	},
	size : 3,
	height: " are about 5-7 feet tall",
	carryingCapacity : 2,
	savetxt: {text: "Adv. against grappled."},
	action : [["bonus action", "Moonblessed"], ["reaction", "Slumbering Dragon"]],
	features: [{
		name : "Moonblessed",
		source : [["RGttYR", 141]],
	 	usages: "1",
	  	recovery: "long rest",	
	},{
		name : "Slumbering Dragon",
		source : [["RGttYR", 141]],
	 	usages: "Prof Bonus per ",
		usagescalc: "event.value = How('Proficiency Bonus');",
	  	recovery: "long rest",
	}],
	trait : "Nishikin Tatsumi"+
		"\n \u2022 Amphibious. I can breathe in both air and water." +
		"\n \u2022 Moonblessed. While bathed in moonlight, I can use a bonus action to spend a number of my Hit Dice equal to my proficiency bonus. Roll those dice and add my Constitution modifier; I regain hit points equal to the total. If this healing restores my hit points to maximum, any surplus healing is gained as temporary hit points. Once I use this trait, I can’t do so again until I finish a long rest." +
		"\n \u2022 Powerful Build. I count as one size larger when determining my carrying capacity and the weight I can push, drag, or lift." +
		"\n \u2022 Slippery. I have advantage on ability checks and saving throws made to avoid or end the grappled condition on myself." +
		"\n \u2022 Slumbering Dragon. I can draw upon the bubbling energy I carry within to empower myself. When I make an attack roll, ability check, or saving throw using the ability associated with my primary colouration, I can use my reaction to add 1d6 to the roll. I can use this reaction after rolling the d20, but must decide before the outcome is determined. I can use this trait a number of times equal to my proficiency bonus, and I regain all expended uses when I finish a short or long rest. " +
		"\n \u2022 Draconic Metamorphosis. When I reach 7th level, or when I undergo a significant moment of personal achievement or loss (at the GM’s discretion), I can choose to metamorphose into a ryūjin. My level, class, and other game statistics remain the same, aside from my subrace. I replace my subracial traits from this race with those of the ryūjin, and my ryūjin colour is the same as my nishikin primary colouration. This transformation is one-way and can’t be reversed by any means short of a wish spell. ",
};

RaceList["red ryujin tatsumi"] = {
	regExpSearch: /^(?=.*tatsumi)(?=.*ryujin)(?=.*red).*$/i,
	name: "Red Ryujin Tatsumi",
	sortname: "Tatsumi, Ryujin, Red",
	source: [["RGttYR", 139]],
	plural: "Red Ryujin Tatsumi",
	languageProfs: ["Common", 1],
	scorestxt : "+1 Dexterity, +1 Constitution, +1 Wisdom",
	age: " mature rapidly, reaching adulthood by the age of 14. They go on to live for about two centuries.",
	speed : {
		walk : { spd : 30, enc : 20 }, swim : {spd : 30, enc : 20 }
	},
	size : 3,
	height: " are about 5-7 feet tall",
	savetxt: {text: "Gains Advs. whilst in sunlight to end frightened, paralysed, stunned, sleep"},
	action : [["bonus action", "Cloudstep"], ["action", "Heartening Breath"]],
	features: [{
		name : "Cloudstep",
		source : [["RGttYR", 141]],
	 	usages: "1",
	  	recovery: "long rest",	
	},{
		name : "Heartening Breath",
		source : [["RGttYR", 141]],
	 	usages: "Prof Bonus per ",
		usagescalc: "event.value = How('Proficiency Bonus');",
	  	recovery: "long rest",
	}],
	spellcastingAbility: 1,
	spellcastingBonus: [{
		name: "Red Ryujin Innate Magic",
		"class": "sorcerer",
		level: [0, 0],
		times: 1,
		firstCol: "atwill",
	}],
	trait : "Red Ryujin Tatsumi"+
		"\n \u2022 Amphibious. I can breathe in both air and water." +
		"\n \u2022 Cloudstep. As a bonus action, I can conjure a small cloud under my feet. I gain a flying speed equal to half my walking speed for the next 10 minutes. Once I use this trait, I can’t do so again until I finish a long rest." +
		"\n \u2022 Heartening Breath. I can use my action to exhale a warming, spiralling burst of magical energy in a 30-foot cone. A number of creatures of my choice and me in that area up to my proficiency bonus can add 1d4 to attack rolls, as well as to ability checks and saving throws that use the ability associated with my primary colouration for 1 minute, or until I lose concentration (as if concentrating on a spell). I can use this trait a number of times equal to my proficiency bonus, and I regain all expended uses when I finish a long rest." +
		"\n \u2022 Innate Magic. I learn one cantrip of my choice from the spell list of the class associated with my primary colouration (Red-Sorcerer). My spellcasting ability for this cantrip is the ability associated with my primary colouration (Strength)." +
		"\n \u2022 Sunblessed. While in sunlight, a warm, bubbling vitality thrums through me, giving me advantage on saving throws I make to avoid or end the frightened, paralysed, or stunned condition on myself, or against being put to sleep.",
};

RaceList["gold ryujin tatsumi"] = {
	regExpSearch: /^(?=.*tatsumi)(?=.*ryujin)(?=.*gold).*$/i,
	name: "Gold Ryujin Tatsumi",
	sortname: "Tatsumi, Ryujin, Gold",
	source: [["RGttYR", 139]],
	plural: "Gold Ryujin Tatsumi",
	languageProfs: ["Common", 1],
	scorestxt : "+1 Dexterity, +1 Constitution, +1 Wisdom",
	age: " mature rapidly, reaching adulthood by the age of 14. They go on to live for about two centuries.",
	speed : {
		walk : { spd : 30, enc : 20 }, swim : {spd : 30, enc : 20 }
	},
	size : 3,
	height: " are about 5-7 feet tall",
	savetxt: {text: "Gains Advs. whilst in sunlight to end frightened, paralysed, stunned, sleep"},
	action : [["bonus action", "Cloudstep"], ["action", "Heartening Breath"]],
	features: [{
		name : "Cloudstep",
		source : [["RGttYR", 141]],
	 	usages: "1",
	  	recovery: "long rest",	
	},{
		name : "Heartening Breath",
		source : [["RGttYR", 141]],
	 	usages: "Prof Bonus per ",
		usagescalc: "event.value = How('Proficiency Bonus');",
	  	recovery: "long rest",
	}],
	spellcastingAbility: 2,
	spellcastingBonus: [{
		name: "Gold Ryujin Innate Magic",
		"class": "druid",
		level: [0, 0],
		times: 1,
		firstCol: "atwill",
	}],
	trait : "Red Ryujin Tatsumi"+
		"\n \u2022 Amphibious. I can breathe in both air and water." +
		"\n \u2022 Cloudstep. As a bonus action, I can conjure a small cloud under my feet. I gain a flying speed equal to half my walking speed for the next 10 minutes. Once I use this trait, I can’t do so again until I finish a long rest." +
		"\n \u2022 Heartening Breath. I can use my action to exhale a warming, spiralling burst of magical energy in a 30-foot cone. A number of creatures of my choice and me in that area up to my proficiency bonus can add 1d4 to attack rolls, as well as to ability checks and saving throws that use the ability associated with my primary colouration for 1 minute, or until I lose concentration (as if concentrating on a spell). I can use this trait a number of times equal to my proficiency bonus, and I regain all expended uses when I finish a long rest." +
		"\n \u2022 Innate Magic. I learn one cantrip of my choice from the spell list of the class associated with my primary colouration (Gold-Druid). My spellcasting ability for this cantrip is the ability associated with my primary colouration (Dexterity)." +
		"\n \u2022 Sunblessed. While in sunlight, a warm, bubbling vitality thrums through me, giving me advantage on saving throws I make to avoid or end the frightened, paralysed, or stunned condition on myself, or against being put to sleep.",
};

RaceList["black ryujin tatsumi"] = {
	regExpSearch: /^(?=.*tatsumi)(?=.*ryujin)(?=.*black).*$/i,
	name: "Black Ryujin Tatsumi",
	sortname: "Tatsumi, Ryujin, Black",
	source: [["RGttYR", 139]],
	plural: "Black Ryujin Tatsumi",
	languageProfs: ["Common", 1],
	scorestxt : "+1 Dexterity, +1 Constitution, +1 Wisdom",
	age: " mature rapidly, reaching adulthood by the age of 14. They go on to live for about two centuries.",
	speed : {
		walk : { spd : 30, enc : 20 }, swim : {spd : 30, enc : 20 }
	},
	size : 3,
	height: " are about 5-7 feet tall",
	savetxt: {text: "Gains Advs. whilst in sunlight to end frightened, paralysed, stunned, sleep"},
	action : [["bonus action", "Cloudstep"], ["action", "Heartening Breath"]],
	features: [{
		name : "Cloudstep",
		source : [["RGttYR", 141]],
	 	usages: "1",
	  	recovery: "long rest",	
	},{
		name : "Heartening Breath",
		source : [["RGttYR", 141]],
	 	usages: "Prof Bonus per ",
		usagescalc: "event.value = How('Proficiency Bonus');",
	  	recovery: "long rest",
	}],
	spellcastingAbility: 3,
	spellcastingBonus: [{
		name: "Black Ryujin Innate Magic",
		"class": "warlock",
		level: [0, 0],
		times: 1,
		firstCol: "atwill",
	}],
	trait : "Red Ryujin Tatsumi"+
		"\n \u2022 Amphibious. I can breathe in both air and water." +
		"\n \u2022 Cloudstep. As a bonus action, I can conjure a small cloud under my feet. I gain a flying speed equal to half my walking speed for the next 10 minutes. Once I use this trait, I can’t do so again until I finish a long rest." +
		"\n \u2022 Heartening Breath. I can use my action to exhale a warming, spiralling burst of magical energy in a 30-foot cone. A number of creatures of my choice and me in that area up to my proficiency bonus can add 1d4 to attack rolls, as well as to ability checks and saving throws that use the ability associated with my primary colouration for 1 minute, or until I lose concentration (as if concentrating on a spell). I can use this trait a number of times equal to my proficiency bonus, and I regain all expended uses when I finish a long rest." +
		"\n \u2022 Innate Magic. I learn one cantrip of my choice from the spell list of the class associated with my primary colouration (Black-Warlock). My spellcasting ability for this cantrip is the ability associated with my primary colouration (Constitution)." +
		"\n \u2022 Sunblessed. While in sunlight, a warm, bubbling vitality thrums through me, giving me advantage on saving throws I make to avoid or end the frightened, paralysed, or stunned condition on myself, or against being put to sleep.",
};

RaceList["silver ryujin tatsumi"] = {
	regExpSearch: /^(?=.*tatsumi)(?=.*ryujin)(?=.*silver).*$/i,
	name: "Silver Ryujin Tatsumi",
	sortname: "Tatsumi, Ryujin, Silver",
	source: [["RGttYR", 139]],
	plural: "Silver Ryujin Tatsumi",
	languageProfs: ["Common", 1],
	scorestxt : "+1 Dexterity, +1 Constitution, +1 Wisdom",
	age: " mature rapidly, reaching adulthood by the age of 14. They go on to live for about two centuries.",
	speed : {
		walk : { spd : 30, enc : 20 }, swim : {spd : 30, enc : 20 }
	},
	size : 3,
	height: " are about 5-7 feet tall",
	savetxt: {text: "Gains Advs. whilst in sunlight to end frightened, paralysed, stunned, sleep"},
	action : [["bonus action", "Cloudstep"], ["action", "Heartening Breath"]],
	features: [{
		name : "Cloudstep",
		source : [["RGttYR", 141]],
	 	usages: "1",
	  	recovery: "long rest",	
	},{
		name : "Heartening Breath",
		source : [["RGttYR", 141]],
	 	usages: "Prof Bonus per ",
		usagescalc: "event.value = How('Proficiency Bonus');",
	  	recovery: "long rest",
	}],
	spellcastingAbility: 4,
	spellcastingBonus: [{
		name: "Silver Ryujin Innate Magic",
		"class": "wizard",
		level: [0, 0],
		times: 1,
		firstCol: "atwill",
	}],
	trait : "Red Ryujin Tatsumi"+
		"\n \u2022 Amphibious. I can breathe in both air and water." +
		"\n \u2022 Cloudstep. As a bonus action, I can conjure a small cloud under my feet. I gain a flying speed equal to half my walking speed for the next 10 minutes. Once I use this trait, I can’t do so again until I finish a long rest." +
		"\n \u2022 Heartening Breath. I can use my action to exhale a warming, spiralling burst of magical energy in a 30-foot cone. A number of creatures of my choice and me in that area up to my proficiency bonus can add 1d4 to attack rolls, as well as to ability checks and saving throws that use the ability associated with my primary colouration for 1 minute, or until I lose concentration (as if concentrating on a spell). I can use this trait a number of times equal to my proficiency bonus, and I regain all expended uses when I finish a long rest." +
		"\n \u2022 Innate Magic. I learn one cantrip of my choice from the spell list of the class associated with my primary colouration (Silver-Wizard). My spellcasting ability for this cantrip is the ability associated with my primary colouration (Intelligence)." +
		"\n \u2022 Sunblessed. While in sunlight, a warm, bubbling vitality thrums through me, giving me advantage on saving throws I make to avoid or end the frightened, paralysed, or stunned condition on myself, or against being put to sleep.",
};

RaceList["white ryujin tatsumi"] = {
	regExpSearch: /^(?=.*tatsumi)(?=.*ryujin)(?=.*white).*$/i,
	name: "White Ryujin Tatsumi",
	sortname: "Tatsumi, Ryujin, White",
	source: [["RGttYR", 139]],
	plural: "White Ryujin Tatsumi",
	languageProfs: ["Common", 1],
	scorestxt : "+1 Dexterity, +1 Constitution, +1 Wisdom",
	age: " mature rapidly, reaching adulthood by the age of 14. They go on to live for about two centuries.",
	speed : {
		walk : { spd : 30, enc : 20 }, swim : {spd : 30, enc : 20 }
	},
	size : 3,
	height: " are about 5-7 feet tall",
	savetxt: {text: "Gains Advs. whilst in sunlight to end frightened, paralysed, stunned, sleep"},
	action : [["bonus action", "Cloudstep"], ["action", "Heartening Breath"]],
	features: [{
		name : "Cloudstep",
		source : [["RGttYR", 141]],
	 	usages: "1",
	  	recovery: "long rest",	
	},{
		name : "Heartening Breath",
		source : [["RGttYR", 141]],
	 	usages: "Prof Bonus per ",
		usagescalc: "event.value = How('Proficiency Bonus');",
	  	recovery: "long rest",
	}],
	spellcastingAbility: 5,
	spellcastingBonus: [{
		name: "White Ryujin Innate Magic",
		"class": "cleric",
		level: [0, 0],
		times: 1,
		firstCol: "atwill",
	}],
	trait : "Red Ryujin Tatsumi"+
		"\n \u2022 Amphibious. I can breathe in both air and water." +
		"\n \u2022 Cloudstep. As a bonus action, I can conjure a small cloud under my feet. I gain a flying speed equal to half my walking speed for the next 10 minutes. Once I use this trait, I can’t do so again until I finish a long rest." +
		"\n \u2022 Heartening Breath. I can use my action to exhale a warming, spiralling burst of magical energy in a 30-foot cone. A number of creatures of my choice and me in that area up to my proficiency bonus can add 1d4 to attack rolls, as well as to ability checks and saving throws that use the ability associated with my primary colouration for 1 minute, or until I lose concentration (as if concentrating on a spell). I can use this trait a number of times equal to my proficiency bonus, and I regain all expended uses when I finish a long rest." +
		"\n \u2022 Innate Magic. I learn one cantrip of my choice from the spell list of the class associated with my primary colouration (White-Cleric). My spellcasting ability for this cantrip is the ability associated with my primary colouration (Wisdom)." +
		"\n \u2022 Sunblessed. While in sunlight, a warm, bubbling vitality thrums through me, giving me advantage on saving throws I make to avoid or end the frightened, paralysed, or stunned condition on myself, or against being put to sleep.",
};

RaceList["blue ryujin tatsumi"] = {
	regExpSearch: /^(?=.*tatsumi)(?=.*ryujin)(?=.*blue).*$/i,
	name: "Blue Ryujin Tatsumi",
	sortname: "Tatsumi, Ryujin, Blue",
	source: [["RGttYR", 139]],
	plural: "Blue Ryujin Tatsumi",
	languageProfs: ["Common", 1],
	scorestxt : "+1 Dexterity, +1 Constitution, +1 Wisdom",
	age: " mature rapidly, reaching adulthood by the age of 14. They go on to live for about two centuries.",
	speed : {
		walk : { spd : 30, enc : 20 }, swim : {spd : 30, enc : 20 }
	},
	size : 3,
	height: " are about 5-7 feet tall",
	savetxt: {text: "Gains Advs. whilst in sunlight to end frightened, paralysed, stunned, sleep"},
	action : [["bonus action", "Cloudstep"], ["action", "Heartening Breath"]],
	features: [{
		name : "Cloudstep",
		source : [["RGttYR", 141]],
	 	usages: "1",
	  	recovery: "long rest",	
	},{
		name : "Heartening Breath",
		source : [["RGttYR", 141]],
	 	usages: "Prof Bonus per ",
		usagescalc: "event.value = How('Proficiency Bonus');",
	  	recovery: "long rest",
	}],
	spellcastingAbility: 6,
	spellcastingBonus: [{
		name: "Blue Ryujin Innate Magic",
		"class": "bard",
		level: [0, 0],
		times: 1,
		firstCol: "atwill",
	}],
	trait : "Red Ryujin Tatsumi"+
		"\n \u2022 Amphibious. I can breathe in both air and water." +
		"\n \u2022 Cloudstep. As a bonus action, I can conjure a small cloud under my feet. I gain a flying speed equal to half my walking speed for the next 10 minutes. Once I use this trait, I can’t do so again until I finish a long rest." +
		"\n \u2022 Heartening Breath. I can use my action to exhale a warming, spiralling burst of magical energy in a 30-foot cone. A number of creatures of my choice and me in that area up to my proficiency bonus can add 1d4 to attack rolls, as well as to ability checks and saving throws that use the ability associated with my primary colouration for 1 minute, or until I lose concentration (as if concentrating on a spell). I can use this trait a number of times equal to my proficiency bonus, and I regain all expended uses when I finish a long rest." +
		"\n \u2022 Innate Magic. I learn one cantrip of my choice from the spell list of the class associated with my primary colouration (Blue-Bard). My spellcasting ability for this cantrip is the ability associated with my primary colouration (Charisma)." +
		"\n \u2022 Sunblessed. While in sunlight, a warm, bubbling vitality thrums through me, giving me advantage on saving throws I make to avoid or end the frightened, paralysed, or stunned condition on myself, or against being put to sleep.",
};


// Tengu
RaceList["hanataka tengu"] = {
	regExpSearch: /^(?=.*tengu)(?=.*hanataka).*$/i,
	name: "Hanataka Tengu",
	sortname: "Tengu, Hanataka",
	source: [["RGttYR", 144]],
	plural: "Hanataka Tengu",
	languageProfs: ["Common", 1],
	weaponProfs : [false, false, ["one simple or martial weapon"]],
	scorestxt : "+2 Dexterity, +1 Charisma",
	age: " reach maturity at around 16 years of age, and go on to live for up to 400 years.",
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	size : 3,
	height: " are about 6-7 feet tall",
	toolProfs: ["Artisian Tool from Hanataka Tengu"],
	spellcastingAbility: [4, 5, 6],
	spellcastingBonus: [{
		name: "hanataka tengu",
		spells: ["prestidigitation"],
		selection: ["prestidigitation"],
		firstCol: "atwill",
	},{
		name: "hanataka tengu",
		spells: ["thaumaturgy"],
		selection: ["thaumaturgy"],
		firstCol: "atwill",
	}],
	action : [["bonus action", "Whirlwind Onslaught"]],
	features: [{
		name : "Whirlwind Onslaught",
		source : [["RGttYR", 144]],
	 	usages: "1",
	  	recovery: "short rest",	
	}],
	trait : "Hanataka Tengu"+
		"\n \u2022 Lethal Masters. I have proficiency with one simple or martial weapon of my choice." +
		"\n \u2022 Master of Craft. I am proficient with one kind of artisan’s tools of my choice. When I make a Crafting check using this tool, I can add 1d4 to the result of the check." +
		"\n \u2022 Shadowcaster. I learn the prestidigitation and thaumaturgy cantrips. In addition, I can cast them without components while I am in dim light or darkness. Intelligence, Wisdom, or Charisma is my spellcasting ability for these spells when I cast them with this trait (choose when selecting this race)." +
		"\n \u2022 Whirlwind Onslaught. After I take the Attack action on my turn, I can use my bonus action on that turn to cast a cantrip with a casting time of one action or make a number of melee attacks equal to half my proficiency bonus (rounded up). Each of these attacks must target a different creature. Once I use this trait, I can’t do so again until I finish a short or long rest." +
		(typePF ? "\n \u2022 Nature Guardian. I gain proficiency with one of the following skills: Arcana, Nature, Religion, Stealth, or Survival." : ""),
};

RaceList["karasu tengu"] = {
	regExpSearch: /^(?=.*tengu)(?=.*karasu).*$/i,
	name: "Karasu Tengu",
	sortname: "Tengu, Karasu",
	source: [["RGttYR", 144]],
	plural: "Karasu Tengu",
	languageProfs: ["Common", 1],
	weaponProfs : [false, false, ["one simple or martial weapon"]],
	scorestxt : "+2 Dexterity, +1 Wisdom",
	age: " reach maturity at around 16 years of age, and go on to live for up to 400 years.",
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	size : 3,
	height: " are about 6-7 feet tall",
	dmgres: ["Psychic"],
	skills : ["Deception", "Stealth"],
	action : [["reaction", "Skyrider"]],
	features: [{
		name : "Psychic Battery",
		source : [["RGttYR", 144]],
	 	usages: "1",
	  	recovery: "short rest",	
	}],
	trait : "Karasu Tengu"+
		"\n \u2022 Fortified Mind. I have resistance to psychic damage." +
		"\n \u2022 Psychic Battery. When I take the Attack action on my turn, I can replace one of my attacks with a dizzying psychic assault against a creature I can see within 15 feet of me. That creature must succeed on a Wisdom saving throw (DC equals 8 + my Constitution modifier + my proficiency bonus) or suffer the effects of the confusion spell until the end of its next turn. Once I use this trait, I can’t do so again until I finish a short or long rest." +
		"\n \u2022 Skyrider. When I fall at least 10 feet and aren’t incapacitated, I can use my reaction to extend my vestigial, feathered wings to glide. I take no damage from that fall, and I can move horizontally 2 feet for every 1 foot I  fall. While gliding in this way, I can fall no more than 100 vertical feet on a turn." +
		(typePF ? "\n \u2022 Prankster. I gain proficiency in the Deception and Stealth skills." : ""),
};

/*
 * Bender Class
 */

// Bender Class
ClassList["bender"] = {
	regExpSearch: /^(?=.*bender).*$/i,
	name: "Bender",
	source: [["RGttYR", 157]],
	primaryAbility: "Intelligence, Wisdom, or Charisma",
	abilitySave: 4,
	prereqs: "Intelligence, Wisdom, or Charisma 13",
	improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	die: 8,
	saves: ["Str", "Con"],
	skillstxt: {
		primary: "Choose two from Acrobatics, Athletics, History, Insight, Religion, and Stealth"
	},
	armorProfs : {
		primary : [true, false, false, false],
		secondary : [false, false, false, false]
	},
	weaponProfs : {
		primary : [true, false, ["chakrams", "nunchaku", "shortswords", "shuriken", "starknives", "twinblades"]],
		secondary : [true, false]
	},
	toolProfs: ["One artisan’s tools/musical instrument of my choice"],
	equipment : "Bender starting equipment:" +
		"\n \u2022 A quarterstaff, -or- chakram, -or- any simple weapon;" +
		"\n \u2022 A dungeoneer’s pack -or- an explorer's pack;" +
		"\n \u2022 Leather armour and 10 shuriken;" +
		"\n\nAlternatively, choose 5d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
	subclasses : ["Bender Disciplines", []],
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	spellcastingFactor: 2,
	spellcastingTable: [
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[2, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 1
		[2, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 2
		[3, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 3
		[3, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 4
		[4, 2, 0, 0, 0, 0, 0, 0, 0], //lvl 5
		[4, 2, 0, 0, 0, 0, 0, 0, 0], //lvl 6
		[4, 3, 0, 0, 0, 0, 0, 0, 0], //lvl 7
		[4, 3, 0, 0, 0, 0, 0, 0, 0], //lvl 8
		[4, 3, 2, 0, 0, 0, 0, 0, 0], //lvl 9
		[4, 3, 2, 0, 0, 0, 0, 0, 0], //lvl10
		[4, 3, 3, 0, 0, 0, 0, 0, 0], //lvl11
		[4, 3, 3, 0, 0, 0, 0, 0, 0], //lvl12
		[4, 3, 3, 1, 0, 0, 0, 0, 0], //lvl13
		[4, 3, 3, 1, 0, 0, 0, 0, 0], //lvl14
		[4, 3, 3, 2, 0, 0, 0, 0, 0], //lvl15
		[4, 3, 3, 2, 0, 0, 0, 0, 0], //lvl16
		[4, 3, 3, 3, 1, 0, 0, 0, 0], //lvl17
		[4, 3, 3, 3, 1, 0, 0, 0, 0], //lvl18
		[4, 3, 3, 3, 2, 0, 0, 0, 0], //lvl19
		[4, 3, 3, 3, 2, 0, 0, 0, 0], //lvl20
	],
	spellcastingKnown: {
		cantrips: [2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4],
		spells: "list",
		prepared : true
	},
	spellcastingList : {
		"class" : "bender",
	},
	features : {
		"spellcasting" : {
			name : "Spellcasting",
			source : [["RGttYR", 157]],
			minlevel : 1,
			description : desc([
				"I can cast prepared bender cantrips/spells, using Intelligence, Wisdom, or Charisma as my spellcasting ability",
				"I can use my free hand as a spellcasting focus for my bender spells. This free hand can be used for both the somatic and material components for a spell, provided the material component has no cost and isn’t consumed by the casting."
			]),
		},
		"elemental affinity" : {
			name: "Elemental Affinity",
			source : [["RGttYR", 157]],
			minlevel : 1,
			description : desc('Choose an Elemental Affinity for the bender using the "Choose Feature" button above'),
			additional : levels.map(function (n) {
				return n < 1 ? "" : (n < 6 ? 1 : n < 10 ? 2 : n < 14 ? 3 : 4) + " elemental affinities";
			}),
			extraname : "Elemental Affinity",
			extrachoices : ["Air", "Air 1", "Air 2", "Air 3", "Air 4", "Earth", "Earth 1", "Earth 2", "Earth 3", "Earth 4", "Fire", "Fire 1", "Fire 2", "Fire 3", "Fire 4", "Water", "Water 1", "Water 2", "Water 3", "Water 4"],
			extraTimes : levels.map(function (n) {
				return n < 6 ? 1 : n < 10 ? 2 : n < 14 ? 3 : 4;
			}),
			"air" : {
				submenu : "[Choice at level 1]",
				name : "Air",
				description : desc([
					"The spells associated with the Air element are added to my bender spell list."
				]),
				calcChanges : {
					spellList : [
						function(spList, spName, spType) {
							if(spName !== "bender") return;
							spList.extraspells = spList.extraspells.concat([
								// Cantrips (0 Level)
								"concussion", "dash strike", "smokescreen", "soften descent",
								// 1st level
								"color spray", "expeditious retreat", "feather fall", "fog cloud", "jump", "longstrider", "repulsing palm", "tasha's hideous laughter", "thunderwave", "unseen servant", "wind drake",
								// 2nd level
								"blur", "calm air", "enhance ability", "gust of wind", "levitate", "mirror image", "misty step", "redirect lightning", "shatter", "silence", "wind strike",
								// 3rd level
								"call lightning", "depth charge", "flashbang","fly", "gaseous form", "haste", "switcheroo", "wind wall",
								// 4th level
								"cloud stride", "conjure minor elementals", "dimension door", "freedom of movement", "hallucinatory terrain", "tempestuous transformation",
								// 5th level
								"conjure elemental", "cyclone", "iminada’s umigiri", "mislead", "planar binding", "raiko’s rending rage"]);
							},
						"I gain spells associated with the Air element."
					],
				},
			},
			"earth" : {
				submenu : "[Choice at level 1]",
				name : "Earth",
				description : desc([
					"The spells associated with the Earth element are added to my bender spell list."
				]),
				calcChanges : {
					spellList : [
						function(spList, spName, spType) {
							if(spName !== "bender") return;
							spList.extraspells = spList.extraspells.concat([
								// Cantrips (0 Level)
								"acid splash", "earthen fist", "reinforce", "resistance", "shillelagh",
								// 1st level
								"earthen uppercut", "entangle", "false life", "goodberry", "grease", "shield", "tenser's floating disk", 
								// 2nd level
								"barkskin", "calm earth", "earthskin", "enhance ability", "melf's acid arrow", "protection", "protection from poison", "shielding word", "snakebite", "spike growth",
								// 3rd level
								"acid rain", "meld into stone", "mireball",
								// 4th level
								"conjure minor elementals", "rock tomb", "steelskin", "slatestorm", "stone shape", "stoneskin",
								// 5th level
								"conjure elemental", "eruption", "nomi’s adamantine carapace", "passwall", "planar binding", "wall of stone"]);
							},
						"I gain spells associated with the Earth element."
					],
				},
			},			
			"fire" : {
				submenu : "[Choice at level 1]",
				name : "Fire",
				description : desc([
					"The spells associated with the Fire element are added to my bender spell list."
				]),
				calcChanges : {
					spellList : [
						function(spList, spName, spType) {
							if(spName !== "bender") return;
							spList.extraspells = spList.extraspells.concat([
								// Cantrips (0 Level)
								"dancing lights", "fire bolt", "incendiary strike", "light", "minor illusion", "shocking grasp", "spark",
								// 1st level
								"burning hands", "color spray", "faerie fire", "flash", "hellish rebuke", "heroism", "inner flame",  "silent image",
								// 2nd level
								"calm flames", "continual flame", "enhance ability", "flame blade", "flaming sphere", "heat metal", "invisibility", "redirect lightning", "scorching ray", "wanyudo’s fury",
								// 3rd level
								"daylight", "fireball", "flaming tiger leap", "haste", "lightning bolt", "major image",
								// 4th level
								"conjure minor elementals", "fire shield", "greater invisibility", "lion’s roar", "wall of fire",
								// 5th level
								"conjure elemental", "flame strike", "feverskin", "magatsuchi’s lantern", "planar binding", "raiko’s rending rage"]);
							},
						"I gain spells associated with the Fire element."
					],
				},
			},
			"water" : {
				submenu : "[Choice at level 1]",
				name : "Water",
				description : desc([
					"The spells associated with the Water element are added to my bender spell list."
				]),
				calcChanges : {
					spellList : [
						function(spList, spName, spType) {
							if(spName !== "bender") return;
							spList.extraspells = spList.extraspells.concat([
								// Cantrips (0 Level)
								"guidance", "pins & needles", "ray of frost", "spare the dying", "water whip",
								// 1st level
								"charm person", "command", "create or destroy water", "detect poison and disease", "ice moon", "purify food & drink",
								// 2nd level
								"aid", "bloodweave", "calm emotions", "calm waters", "endoleech", "enhance ability", "hold person", "lesser restoration", "mirror of reflection", "riptide", "suggestion",
								// 3rd level
								"acid rain", "clairvoyance", "extract shirikodama", "hypnotic pattern", "ryoko’s revelation", "sleet storm", "slow", "the bends", "water breathing", "water walk", "water wyrm",
								// 4th level
								"cage of frozen tears", "cloud stride", "compulsion", "conjure minor elementals", "control water", "divination", "ice storm",
								// 5th level
								"bakuryo's blessed blizzard", "cone of cold", "conjure elemental", "dominate person", "hold monster", "iminada’s umigiri", "planar binding", "scrying", "white water wall"]);
							},
						"I gain spells associated with the Water element."
					],
				},
			},
			"air 1" : {
				submenu : "[New Elemental Affinity]",
				name : "Air 1",
				description : desc("I learn one cantrip of my choice from the Air element’s list and add its spells to my bender spell list."),
				spellcastingBonus : [{ 
					spells : ["concussion", "dash strike", "smokescreen", "soften descent"],
					notspells : ["acid splash", "earthen fist", "reinforce", "resistance", "shillelagh", "dancing lights", "fire bolt", "incendiary strike", "light", "minor illusion", "shocking grasp", "spark", "guidance", "pins & needles", "ray of frost", "spare the dying", "water whip"],
					name : "Air Elemental Affinity Cantrip",
					level : [0, 0],
				}],	
				calcChanges : {
					spellList : [
						function(spList, spName, spType) {
							if(spName !== "bender") return;
							spList.extraspells = spList.extraspells.concat([
								// Cantrips (0 Level)
								"concussion", "dash strike", "smokescreen", "soften descent",
								// 1st level
								"color spray", "expeditious retreat", "feather fall", "fog cloud", "jump", "longstrider", "repulsing palm", "tasha's hideous laughter", "thunderwave", "unseen servant", "wind drake",
								// 2nd level
								"blur", "calm air", "enhance ability", "gust of wind", "levitate", "mirror image", "misty step", "redirect lightning", "shatter", "silence", "wind strike",
								// 3rd level
								"call lightning", "depth charge", "flashbang","fly", "gaseous form", "haste", "switcheroo", "wind wall",
								// 4th level
								"cloud stride", "conjure minor elementals", "dimension door", "freedom of movement", "hallucinatory terrain", "tempestuous transformation",
								// 5th level
								"conjure elemental", "cyclone", "iminada’s umigiri", "mislead", "planar binding", "raiko’s rending rage"]);
							},
						"I learn one cantrip of my choice from the Air element’s list and add its spells to my bender spell list."
					],
				},
				prereqeval : function() {return classes.known.bender.level >= 6 && GetFeatureChoice("class", "bender", "elemental affinity", true).indexOf("air") == -1;},
			},
			"air 2" : { 
				submenu : "[improves Air Elemental Affinity]",
				name : "Air 2",
				description : desc([
					"Spells that I cast from the Air Elemental Affinity spell list are cast one level higher than the level of spell slot I expend."
				]),
				prereqeval : function() {return classes.known.bender.level >= 6 && GetFeatureChoice("class", "bender", "elemental affinity", true).indexOf("air") !== -1 || GetFeatureChoice("class", "bender", "elemental affinity", true).indexOf("air 1") !== -1;},
			},
			"air 3" : { 
				submenu : "[improves Air Elemental Affinity]",
				name : "Air 3",
				description : desc([
					"Spells that I cast from the Air Elemental Affinity spell list are cast one level higher than the level of spell slot I expend."
				]),
				prereqeval : function() {return classes.known.bender.level >= 10 && GetFeatureChoice("class", "bender", "elemental affinity", true).indexOf("air 2") !== -1;},
			},
			"air 4" : { 
				submenu : "[improves Air Elemental Affinity]",
				name : "Air 4",
				prereqeval : function() {return classes.known.bender.level >= 14 && GetFeatureChoice("class", "bender", "elemental affinity", true).indexOf("air 3") !== -1;},
				description : desc([
					"Spells that I cast fromthe Air Elemental Affinity spell list are cast one level higher than the level of spell slot I expend."
				]),
			},
			"earth 1" : {
				submenu : "[New Elemental Affinity]",
				name : "Earth 1",
				description : desc("I learn one cantrip of my choice from the Earth element’s list and add its spells to my bender spell list."),
				spellcastingBonus : [{ 
					spells : ["acid splash", "earthen fist", "reinforce", "resistance", "shillelagh",],
					notspells : ["concussion", "dash strike", "smokescreen", "soften descent", "dancing lights", "fire bolt", "incendiary strike", "light", "minor illusion", "shocking grasp", "spark", "guidance", "pins & needles", "ray of frost", "spare the dying", "water whip"],
					name : "Earth Elemental Affinity Cantrip",
					level : [0, 0],
				}],	
				calcChanges : {
					spellList : [
						function(spList, spName, spType) {
							if(spName !== "bender") return;
							spList.extraspells = spList.extraspells.concat([
								// Cantrips (0 Level)
								"acid splash", "earthen fist", "reinforce", "resistance", "shillelagh",
								// 1st level
								"earthen uppercut", "entangle", "false life", "goodberry", "grease", "shield", "tenser's floating disk", 
								// 2nd level
								"barkskin", "calm earth", "earthskin", "enhance ability", "melf's acid arrow", "protection", "protection from poison", "shielding word", "snakebite", "spike growth",
								// 3rd level
								"acid rain", "meld into stone", "mireball",
								// 4th level
								"conjure minor elementals", "rock tomb", "steelskin", "slatestorm", "stone shape", "stoneskin",
								// 5th level
								"conjure elemental", "eruption", "nomi’s adamantine carapace", "passwall", "planar binding", "wall of stone"]);
							},
						"I learn one cantrip of my choice from the Earth element’s list and add its spells to my bender spell list."
					],
				},
				prereqeval : function() {return classes.known.bender.level >= 6 && GetFeatureChoice("class", "bender", "elemental affinity", true).indexOf("earth") == -1;},
			},	
			"earth 2" : { 
				submenu : "[improves Earth Elemental Affinity]",
				name : "Earth 2",
				description : desc([
					"Spells that I cast from the Earth Elemental Affinity spell list are cast one level higher than the level of spell slot I expend."
				]),
				prereqeval : function() {return classes.known.bender.level >= 6 && GetFeatureChoice("class", "bender", "elemental affinity", true).indexOf("earth") !== -1 || GetFeatureChoice("class", "bender", "elemental affinity", true).indexOf("earth 1") !== -1;},
			},	
			"earth 3" : { 
				submenu : "[improves Earth Elemental Affinity]",
				name : "Earth 3",
				description : desc([
					"Spells that I cast from the Earth Elemental Affinity spell list are cast one level higher than the level of spell slot I expend."
				]),
				prereqeval : function() {return classes.known.bender.level >= 10 && GetFeatureChoice("class", "bender", "elemental affinity", true).indexOf("earth 2") !== -1;},
			},
			"earth 4" : { 
				submenu : "[improves Earth Elemental Affinity]",
				name : "Earth 4",
				description : desc([
					"Spells that I cast from the Earth Elemental Affinity spell list are cast one level higher than the level of spell slot I expend."
				]),
				prereqeval : function() {return classes.known.bender.level >= 14 && GetFeatureChoice("class", "bender", "elemental affinity", true).indexOf("earth 3") !== -1;},
			},
			"fire 1" : {
				submenu : "[New Elemental Affinity]",
				name : "Fire 1",
				description : desc("I learn one cantrip of my choice from the Fire element’s list and add its spells to my bender spell list."),
				spellcastingBonus : [{ 
					spells : ["dancing lights", "fire bolt", "incendiary strike", "light", "minor illusion", "shocking grasp", "spark"],
					notspells : ["concussion", "dash strike", "smokescreen", "soften descent", "acid splash", "earthen fist", "reinforce", "resistance", "shillelagh", "guidance", "pins & needles", "ray of frost", "spare the dying", "water whip"],
					name : "Fire Elemental Affinity Cantrip",
					level : [0, 0],
				}],				
				calcChanges : {
					spellList : [
						function(spList, spName, spType) {
							if(spName !== "bender") return;
							spList.extraspells = spList.extraspells.concat([
								// Cantrips (0 Level)
								"dancing lights", "fire bolt", "incendiary strike", "light", "minor illusion", "shocking grasp", "spark",
								// 1st level
								"burning hands", "color spray", "faerie fire", "flash", "hellish rebuke", "heroism", "inner flame",  "silent image",
								// 2nd level
								"calm flames", "continual flame", "enhance ability", "flame blade", "flaming sphere", "heat metal", "invisibility", "redirect lightning", "scorching ray", "wanyudo’s fury",
								// 3rd level
								"daylight", "fireball", "flaming tiger leap", "haste", "lightning bolt", "major image",
								// 4th level
								"conjure minor elementals", "fire shield", "greater invisibility", "lion’s roar", "wall of fire",
								// 5th level
								"conjure elemental", "flame strike", "feverskin", "magatsuchi’s lantern", "planar binding", "raiko’s rending rage"]);
							},
						"I learn one cantrip of my choice from the Fire element’s list and add its spells to my bender spell list."
					],
				},
				prereqeval : function() {return classes.known.bender.level >= 6 && GetFeatureChoice("class", "bender", "elemental affinity", true).indexOf("fire") == -1;},
			},
			"fire 2" : { 
				submenu : "[improves Fire Elemental Affinity]",
				name : "Fire 2",
				description : desc([
					"Spells that I cast from the Fire Elemental Affinity spell list are cast one level higher than the level of spell slot I expend."
				]),
				prereqeval : function() {return classes.known.bender.level >= 6 && GetFeatureChoice("class", "bender", "elemental affinity", true).indexOf("fire") !== -1 || GetFeatureChoice("class", "bender", "elemental affinity", true).indexOf("fire 1") !== -1;},
			},
			"fire 3" : { 
				submenu : "[improves Fire Elemental Affinity]",
				name : "Fire 3",
				description : desc([
					"Spells that I cast from the Fire Elemental Affinity spell list are cast one level higher than the level of spell slot I expend."
				]),
				prereqeval : function() {return classes.known.bender.level >= 10 && GetFeatureChoice("class", "bender", "elemental affinity", true).indexOf("fire 2") !== -1;},
			},
			"fire 4" : { 
				submenu : "[improves Fire Elemental Affinity]",
				name : "Fire 4",
				description : desc([
					"Spells that I cast from the Fire Elemental Affinity spell list are cast one level higher than the level of spell slot I expend."
				]),
				prereqeval : function() {return classes.known.bender.level >= 14 && GetFeatureChoice("class", "bender", "elemental affinity", true).indexOf("fire 3") !== -1;},
			},
			"water 1" : {
				submenu : "[New Elemental Affinity]",
				name : "Water 1",
				description : desc("I learn one cantrip of my choice from the Water element’s list and add its spells to my bender spell list."),
				spellcastingBonus : [{ 
					spells : ["guidance", "pins & needles", "ray of frost", "spare the dying", "water whip"],
					notspells : ["concussion", "dash strike", "smokescreen", "soften descent", "acid splash", "earthen fist", "reinforce", "resistance", "shillelagh", "dancing lights", "fire bolt", "incendiary strike", "light", "minor illusion", "shocking grasp", "spark"],
					name : "Water Elemental Affinity Cantrip",
					level : [0, 0],
				}],	
				calcChanges : {
					spellList : [
						function(spList, spName, spType) {
							if(spName !== "bender") return;
							spList.extraspells = spList.extraspells.concat([
								// Cantrips (0 Level)
								"guidance", "pins & needles", "ray of frost", "spare the dying", "water whip",
								// 1st level
								"charm person", "command", "create or destroy water", "detect poison and disease", "ice moon", "purify food & drink",
								// 2nd level
								"aid", "bloodweave", "calm emotions", "calm waters", "endoleech", "enhance ability", "hold person", "lesser restoration", "mirror of reflection", "riptide", "suggestion",
								// 3rd level
								"acid rain", "clairvoyance", "extract shirikodama", "hypnotic pattern", "ryoko’s revelation", "sleet storm", "slow", "the bends", "water breathing", "water walk", "water wyrm",
								// 4th level
								"cage of frozen tears", "cloud stride", "compulsion", "conjure minor elementals", "control water", "divination", "ice storm",
								// 5th level
								"bakuryo's blessed blizzard", "cone of cold", "conjure elemental", "dominate person", "hold monster", "iminada’s umigiri", "planar binding", "scrying", "white water wall"]);
							},
						"I learn one cantrip of my choice from the Water element’s list and add its spells to my bender spell list."
					],
				},
				prereqeval : function() {return classes.known.bender.level >= 6 && GetFeatureChoice("class", "bender", "elemental affinity", true).indexOf("water") == -1;},
			},
			"water 2" : { 
				submenu : "[improves Water Elemental Affinity]",
				name : "Water 2",
				description : desc([
					"Spells that I cast from the Water Elemental Affinity spell list are cast one level higher than the level of spell slot I expend."
				]),
				prereqeval : function() {return classes.known.bender.level >= 6 && GetFeatureChoice("class", "bender", "elemental affinity", true).indexOf("water") !== -1 || GetFeatureChoice("class", "bender", "elemental affinity", true).indexOf("water 1") !== -1;},
			},
			"water 3" : { 
				submenu : "[improves Water Elemental Affinity]",
				name : "Water 3",
				description : desc([
					"Spells that I cast from the Water Elemental Affinity spell list are cast one level higher than the level of spell slot I expend."
				]),
				prereqeval : function() {return classes.known.bender.level >= 10 && GetFeatureChoice("class", "bender", "elemental affinity", true).indexOf("water 2") !== -1;},
			},
			"water 4" : { 
				submenu : "[improves Water Elemental Affinity]",
				name : "Water 4",
				description : desc([
					"Spells that I cast from the Water Elemental Affinity spell list are cast one level higher than the level of spell slot I expend."
				]),
				prereqeval : function() {return classes.known.bender.level >= 14 && GetFeatureChoice("class", "bender", "elemental affinity", true).indexOf("water 3") !== -1;},
			},
		},
		"elemental strikes" : {
			name : "Elemental Strikes",
			source : [["RGttYR", 160]],
			minlevel : 1,
			description : desc([
				"When I take the Attack action, I can make melee or ranged spell attacks called elemental strikes as one or more of my attacks. The strike deals damage of a type with which I have affinity (my choice when I make the attack).",
				"This damage does not increase with level. However, any magic items that confer a bonus to the attack and damage rolls of my unarmed strikes confer the same bonus to my elemental strikes.",
				"The superior strikes for these attacks are Flurry (for melee attacks) and Battery Strike (for ranged attacks), both unlocked by the tier 2 Pugilist advanced technique."
			]),
			weaponOptions : [{
				baseWeapon : "unarmed strike",
				regExpSearch : /^(?=.*melee)(?=.*elemental)(?=.*strikes).*$/i,
				name : "Elemental Strikes (Melee)",
				source : [["RGttYR", 160]],
				ability : 4,
				abilitytodamage : true,
				damage : [1, 6, ""],
				description : "Damage type based off elemental affinity (my choice)",
				selectNow : true
			},{
				name : "Elemental Strikes (Ranged)",
				regExpSearch : /^(?=.*ranged)(?=.*elemental)(?=.*strikes).*$/i,
				source : [["RGttYR", 160]],
				type : "Natural",
				ability : 4,
				abilitytodamage : true,
				damage : [1, 4, ""],
				range : "60 ft",
				description : "Damage type based off elemental affinity (my choice)",
				selectNow : true,
			}],		
		},
		"elemental combo" : {
			name : "Elemental Combo",
			source : [["RGttYR", 161]],
			minlevel : 2,
			description : desc([
				"On my turn, after I make a weapon attack or elemental strike, or after I cast a levelled spell from my bender spell list, I can release a jet of elemental energy as a bonus action. Make a melee spell attack against a creature within 10 feet of me or a ranged spell attack against a creature within 60 feet of me. On a hit, it deals 1d4 damage of a type with which I have affinity. If the target of this attack is within 10 feet of me, I can add my spellcasting ability modifier to the damage."
			]),	
			weaponOptions : [{
				name : "Elemental Combo",
				regExpSearch : /^(?=.*elemental)(?=.*combo).*$/i,
				source : [["RGttYR", 161]],
				type : "Natural",
				ability : 4,
				abilitytodamage : true,
				damage : [1, 4, ""],
				range : "60 ft",
				description : "Damage type based off elemental affinity (my choice), if target within 10 ft, add spellcasting mod to dmg",
				selectNow : true,
			}],	
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if ((/^(?=.*elemental)(?=.*combo).*$/i).test(v.WeaponTextName) && classes.known.bender && classes.known.bender.level) {
						fields.Damage_Die = (classes.known.bender.level < 6 ? 1 : classes.known.bender.level < 10 ? 2 : classes.known.bender.level < 14 ? 3 : 4) + "d4";
						};
					},
					5
				],
			},
		},
		"subclassfeature3" : {
			name : "Bender Discipline",
			source : [["RGttYR", 161]],
			minlevel : 3,
			description : desc('Choose a Bender Discipline I manifest and put it in the "Class" field ')
		},
		"primordial form" : {
			name : "Primordial Form",
			source : [["RGttYR", 162]],
			minlevel : 11,
			description : desc([
				"As a bonus action, I embody aspects of a chosen element. I choose one of the elements with which I have affinity. For 1 minute, or until I fall unconscious, I can cast 1st-level spells associated with that element even if I do not have them prepared and without expending a spell slot. Note: as spells cast using this feature don’t expend spell slots, they are not automatically upcast to higher levels if I have repeated elemental affinities. In addition, I gain a benefit based on that element."
			]),	
			action : ["bonus action", "Primordial Form"],
			extraLimitedFeatures: [{
				name : "Primordial Form",
				source : [["RGttYR", 162]],
 				usages: "1",
  				recovery: "long rest",
 			}],		
			toNotesPage: [{
				name : "Primordial Form",
				source : [["RGttYR", 162]],
				note: desc([
					"As a bonus action, I embody aspects of a chosen element. I choose one of the elements with which I have affinity. For 1 minute, or until I fall unconscious, I can cast 1st-level spells associated with that element even if I do not have them prepared and without expending a spell slot. Note: as spells cast using this feature don’t expend spell slots, they are not automatically upcast to higher levels if I have repeated elemental affinities. In addition, I gain a benefit based on that element.",
					" \u2022 Air: Untouchable. I have resistance to bludgeoning, slashing, and piercing damage.",
					" \u2022 Fire: Alight. At the end of each of my turns for the duration, creatures of my choice within 10 feet of me take fire damage equal to my bender spellcasting ability modifier (minimum 1).",
					" \u2022 Earth: Solid. I gain a +2 bonus to AC.",
					" \u2022 Water: Fluid. I gain a pool of vitality equal to five times my bender level. At the end of each of my turns for the duration, I can cause up to three creatures of my choice within 10 feet of me to regain 5 hit points (no action required), expending an equal amount of vitality from my pool to do so.",
					"After I use this feature, I can’t do so again until I finish a long rest.",
					"Starting at 17th level, while in my primordial form, I can cast spells of 2nd level or lower without expending a spell slot."
				]),
			}],
		},
		"primordial avatar" : {
			name : "Primordial Avatar",
			source : [["RGttYR", 163]],
			minlevel : 18,
			description : desc([
				"As an action, I become a primordial incarnation of my mortal form. I gain 50 temporary hit points as well as benefits based on my Elemental Affinities, which last for 10 minutes, or until I fall unconscious. After I enter this state using this feature, I can’t do so again until I finish a long rest. I gain one benefit for each elemental affinity I have (new or repeated)."
			]),	
			action : ["bonus action", "Primordial Avatar"],
			extraLimitedFeatures: [{
				name : "Primordial Avatar",
				source : [["RGttYR", 163]],
	 			usages: "1",
	  			recovery: "long rest",
	 		}],		
			toNotesPage: [{
				name : "Primordial Avatar",
				source : [["RGttYR", 163]],
				note: desc([
					"As an action, I become a primordial incarnation of my mortal form. I gain 50 temporary hit points as well as benefits based on my Elemental Affinities, which last for 10 minutes, or until I fall unconscious. After I enter this state using this feature, I can’t do so again until I finish a long rest. I gain one benefit for each elemental affinity I have (new or repeated).",
					"Air Affinities	Benefits",
					"1	My walking speed increases by 15 feet. I gain a flying speed of 60 feet.",
					"2	I am immune to thunder damage and the grappled and restrained conditions.",
					"3	Once on each of my turns, I can cast the misty step spell without expending a spell slot (no action required). I can’t do so while incapacitated.",
					"4	My walking and flying speed increases by 15 feet (30 feet total walking speed increase, and flying speed of 75 feet). I am under the effects of the freedom of movement spell.",
					"Earth Affinities	Benefits",
					"1	I gain a new way to calculate my AC: 14 + my bender spellcasting ability modifier.",
					"2	I am immune to acid damage and automatically succeed on saving throws made to avoid being moved against my will or knocked prone.",
					"3	I gain 3d6 temporary hit points at the start of each of my turns.",
					"4	I can cast the shield or shielding word spell without expending a spell slot or using my reaction. I can’t do so while incapacitated. After I cast either spell in this way, I can’t do so again until the start of my next turn.",
					"Fire Affinities	Benefits",
					"1	The first time I hit a target with an attack on each of my turns, I deal an extra 2d6 fire or lightning damage to it (my choice when I gain this benefit).",
					"2	I am immune to fire damage.",
					"3	I can cast the hellish rebuke spell at 2nd-level without expending a spell slot or using my reaction. I can’t do so while incapacitated. After I cast the spell in this way, I can’t do so again until the start of my next turn.",
					"4	I am under the effects of the fire shield spell (warm shield only).",
					"Water Affinities	Benefits",
					"1	I gain a swimming speed of 60 feet. Once on each of my turns, I can take the Help action targeting any creature I can see within 30 feet of me (no action required).",
					"2	I am immune to cold damage.",
					"3	When a creature I can see within 30 feet of me succeeds on a saving throw or an attack roll, I can force the creature to reroll the d20 and use the lower roll (no action required). After I do so, I can’t do so again until the start of my next turn.",
					"4	I am under the effects of the true seeing spell.",							
				]),
			}],
		},
	},
};

// Bender Subclasses
AddSubClass("bender", "disciple of ferocity", {
	regExpSearch : /^(?=.*disciple)(?=.*ferocity).*$/i,
	subname : "Disciple of Ferocity",
	source : [["RGttYR", 166]],
	spellcastingExtra : ["magic missile", "magic weapon", "blink", "guardian of faith", "arcane hand"],
	features : {
		"subclassfeature3.1" : {
			name : "Bonus Ferocity Spells",
			source : [["RGttYR", 167]],
			minlevel : 3,
			description : desc([
				"Spells are added to my bender spell list. They always take the form of an element associated with my Elemental Affinity. The damage type is one for which I have affinity instead of what is specified for magic missile (I choose when I cast the spell). For blink, I move to a Border-Elemental Plane associated with my Elemental Affinity."
			]),
			calcChanges : {
				spellAdd : [
					function (spellKey, spellObj, spName) {
						if (spellKey == "magic missile") {
							spellObj.description = spellObj.description.replace("Force", "(Elemental Affinity)");
							return true;
						};
					},
					"The damage type is one for which I have affinity instead of what is specified (I choose when I cast the spell)."
				]
			}
		},
		"subclassfeature3.2" : {
			name: "Martial Proficiencies",
      			source: [["RGttYR", 167]],
      			minlevel: 3,
      			description: desc(["I gain proficiency with medium armor, shields, and martial weapons, and I can use any weapon I am proficient with as a spellcasting focus for my bender spells."]),
      			weapons: [false, true],
			armorProfs : [false, true, false, true],
    		},
		"subclassfeature3.3" : {
			name: "Elemental Conduit",
      			source: [["RGttYR", 167]],
      			minlevel: 3,
      			description: desc(["I can use my bender spellcasting ability instead of Strength or Dexterity for weapon attack and damage rolls."]),
    		},
		"subclassfeature7" : {
			name: "Destructive Nature",
      			source: [["RGttYR", 167]],
      			minlevel: 7,
      			description: desc(["Once per turn, when I hit a creature with an attack, I can expend a spell slot to deal extra damage of a type associated with my Elemental Affinity. The extra damage is 2d8 for a 1st-level spell slot, plus 1d8 for each spell level higher than 1st, to a maximum of 6d8."]),
    		},	
		"subclassfeature15" : {
			name: "Elemental Ferocity",
      			source: [["RGttYR", 167]],
      			minlevel: 15,
      			description: desc(["The damage of my Elemental Combo feature increases to 5d4."]),
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if ((/^(?=.*elemental)(?=.*combo).*$/i).test(v.WeaponTextName) && classes.known.bender && classes.known.bender.level) {
						fields.Damage_Die = "5" + "d4";
						};
					},
					5
				],
			},
    		},
		"subclassfeature20" : {
			name: "Primordial Battery",
      			source: [["RGttYR", 167]],
      			minlevel: 20,
      			description: desc(["I can attack three times whenever I take the Attack action on my turn."]),
			action : ["action", "Attack (3 attacks per action)"],
  		},					
}});

AddSubClass("bender", "disciple of fortification", {
	regExpSearch : /^(?=.*disciple)(?=.*fortification).*$/i,
	subname : "Disciple of Fortification",
	source : [["RGttYR", 167]],
	spellcastingExtra : ["shield", "shielding word", "protection from energy", "resilient sphere", "endure"],
	features : {
		"subclassfeature3.1" : {
			name : "Bonus Fortification Spells",
			source : [["RGttYR", 168]],
			minlevel : 3,
			description : desc([
				"Spells are added to my bender spell list. They always take the form of an element associated with my Elemental Affinity. For protection from energy, the damage type must be one for which I have affinity."
			]),
		},
		"subclassfeature3.2" : {
			name: "Defensive Proficiencies",
      			source: [["RGttYR", 168]],
      			minlevel: 3,
      			description: desc(["I gain proficiency with medium and heavy armour and shields. In addition, I can use a shield as a spellcasting focus for my bender spells."]),
      			armorProfs : [false, true, true, true],
    		},
		"subclassfeature3.3" : {
			name: "Primordial Shield",
      			source: [["RGttYR", 168]],
      			minlevel: 3,
      			description: desc(["As a bonus action on my turn, I can create this shield, granting me or a willing creature within 30 feet of me 1d6 temporary hit points. These temporary hit points last until I use this feature again or the target finishes a long rest. The number of temporary hit points increases to 1d10 at 6th level, 2d6 at 10th level, and 2d10 at 14th level."]),
			action : ["bonus action", "Primordial Shield"],
    		},	
		"subclassfeature7" : {
			name: "Redirect Elements",
      			source: [["RGttYR", 168]],
      			minlevel: 7,
      			description: desc(["When a creature I can see within 30 feet of me (including myself) would take damage of a type associated with my Elemental Affinity, I can use my reaction to reduce that damage. The damage is reduced by 2d6 for each time I have chosen affinity with that element. If this reduces the damage to 0, I can make a ranged spell attack, redirecting the energy at a target within 30 feet of the original target. The attack deals damage equal to the amount by which I reduced the triggering damage. The size of these dice increase to d8s at 11th level, d10s at 15th level, and d12s at 20th level."]),		
			action : ["reaction", "Redirect Elements"],
    		},	
		"subclassfeature15" : {
			name: "Elemental Reinforcement",
      			source: [["RGttYR", 169]],
      			minlevel: 15,
      			description: desc(["When I cast a bender spell of 1st level or higher, I can choose one creature I can see within 30 feet of me (including myself) to gain a bonus to AC equal to the base level of the spell until the start of my next turn."]),
    		},
		"subclassfeature20" : {
			name: "Primordial Bulwark",
      			source: [["RGttYR", 169]],
      			minlevel: 20,
      			description: desc([
				"When I roll initiative and am not surprised, I can use my reaction to cast a spell associated with my Elemental Affinity, as shown in the table below, without expending a spell slot. Once I use this feature, I can’t do so again until I finish a long rest.",
				"Elemental Affinity	Spell",
				"Air		Wind Wall",
				"Earth		Wall of Stone",
				"Fire		Wall of Fire",
				"Water		White water Wall"
			]),
			action : ["reaction", "Primordial Bulwark"],
			extraLimitedFeatures: [{
				name : "Primordial Bulwark",
				source : [["RGttYR", 169]],
	 			usages: "1",
	  			recovery: "long rest",
	 		}],	
    		},
}});	

AddSubClass("bender", "disciple of fusion", {
	regExpSearch : /^(?=.*disciple)(?=.*fusion).*$/i,
	subname : "Disciple of Fusion",
	source : [["RGttYR", 170]],
	features : {
		"subclassfeature3.1" : {
			name : "Bonus Cantrips",
			source : [["RGttYR", 170]],
			minlevel : 3,
			description : desc([
				"I learn two additional bender cantrips of my choice, which can be from any element’s list, and don’t count towards the number of cantrips I know."
			]),
			spellcastingBonus : [{
				name : "Disciple of Fusion Cantrips",
				level : [0, 0],
				spells : ["concussion", "dash strike", "smokescreen", "soften descent", "acid splash", "earthen fist", "reinforce", "resistance", "shillelagh", "dancing lights", "fire bolt", "incendiary strike", "light", "minor illusion", "shocking grasp", "spark", "guidance", "pins & needles", "ray of frost", "spare the dying", "water whip"],
				times : 2,
				firstCol : 'atwill'
			}],
		},
		"subclassfeature3.2" : {
			name : "Bonus Spells",
			source : [["RGttYR", 170]],
			minlevel : 3,
			description : desc([
				"I learn one 1st-level bender spell from any element’s list; I always have that spell prepared, and it doesn’t count against the number of spells I can prepare each day. When I reach 5th, 9th, 13th, and 17th level in this class, I learn one 2nd-, 3rd-, 4th-, and 5th-level bender spell in this way, respectively. If I don’t have affinity with the element from which a spell is chosen, the spell is cast as if I had 1 affinity with that element. "
			]),
			spellcastingBonus : [{
				name : "Disciple of Fusion 1st Lvl",
				level : [1, 1],
				spells : ["color spray", "expeditious retreat", "feather fall", "fog cloud", "jump", "longstrider", "repulsing palm", "tasha's hideous laughter", "thunderwave", "unseen servant", "wind drake", "earthen uppercut", "entangle", "false life", "goodberry", "grease", "shield", "tenser's floating disk", "burning hands", "color spray", "faerie fire", "flash", "hellish rebuke", "heroism", "inner flame",  "silent image", "charm person", "command", "create or destroy water", "detect poison and disease", "ice moon", "purify food & drink"],
				prepared : true,
			}],
		},
		"subclassfeature3.3" : {
			name : "Fusionist Spellcasting",
			source : [["RGttYR", 170]],
			minlevel : 3,
			description : desc([
				"When I expend a spell slot of 1st level or higher to cast a spell from my bender spell repertoire, I can augment it with another element, creating an additional effect in a sphere centred on the target of my spell or, if the spell affects an area, the centre of the affected area. I choose the size of the sphere, which can have a maximum radius in feet equal to five times the level of the spell slot expended. The effect depends on the element list from which the spell was drawn, and the element with which I choose to combine it. Any saving throws are against my bender spell save DC.",
				"I can use this feature a number of times equal to my bender spellcasting ability modifier (minimum of once), and regain all expended uses when I finish a short or long rest."
			]),
			toNotesPage: [{
				name : "Fusionist Spellcasting",
				source : [["RGttYR", 170]],
				note: desc([
					"When I expend a spell slot of 1st level or higher to cast a spell from my bender spell repertoire, I can augment it with another element, creating an additional effect in a sphere centred on the target of my spell or, if the spell affects an area, the centre of the affected area. I choose the size of the sphere, which can have a maximum radius in feet equal to five times the level of the spell slot expended. The effect depends on the element list from which the spell was drawn, and the element with which I choose to combine it. Any saving throws are against my bender spell save DC.",
					"I can use this feature a number of times equal to my bender spellcasting ability modifier (minimum of once), and regain all expended uses when I finish a short or long rest.",
					"Air & Earth: Dust. Dust explodes in the sphere. Each creature in the area must succeed on a Constitution saving throw or be blinded until the end of my next turn.",					
					"Air & Fire: Smoke. Cloying smoke fills the sphere until the end of my next turn. For the duration, the area is heavily obscured, creatures in the area can speak only falteringly, and any creature in the area that tries to cast a spell with a verbal component must succeed on a Constitution saving throw or fail to cast the spell, wasting the spellcasting action (but not the spell slot).",
					"Air & Water: Ice. All surfaces in the sphere become covered with a layer of slick ice, turning the area into difficult terrain until the end of my next turn. When the ice appears, each creature standing in the area must succeed on a Dexterity saving throw or fall prone. A creature that enters the area or ends its turn there must also succeed on a Dexterity saving throw or fall prone.",
					"Earth & Fire: Lava. Speckles of molten rock explode in the sphere. Each creature in the area must succeed on a Dexterity saving throw or take 1d6 fire damage per level of spell slot expended.",
					"Earth & Water: Mud. A torrent of sticky mud erupts in the sphere. The area becomes difficult terrain until cleaned, and each creature in the sphere has its speed reduced by 15 feet. A creature can use its action to clean the mud off of itself or another affected creature, removing the speed reduction. A creature can clear a 5-foot-square area of difficult terrain as an action.",
					"Fire & Water: Steam. Steam blooms in the sphere until the end of my next turn. For the duration, the area is heavily obscured, and a creature that ends its turn in the sphere takes 1d4 fire damage per level of the spell slot expended."	
				]),
			}],
		},
		"subclassfeature5" : {
			name : "Bonus Spells",
			source : [["RGttYR", 170]],
			minlevel : 5,
			description : desc([
				"I learn one 2nd-level bender spell from any element’s list; I always have that spell prepared, and it doesn’t count against the number of spells I can prepare each day.8 If I don’t have affinity with the element from which a spell is chosen, the spell is cast as if I had 1 affinity with that element. "
			]),
			spellcastingBonus : [{
				name : "Disciple of Fusion 2nd Lvl",
				level : [2, 2],
				spells : ["blur", "calm air", "enhance ability", "gust of wind", "levitate", "mirror image", "misty step", "redirect lightning", "shatter", "silence", "wind strike", "barkskin", "calm earth", "earthskin", "melf's acid arrow", "protection", "protection from poison", "shielding word", "snakebite", "spike growth", "calm flames", "continual flame", "flame blade", "flaming sphere", "heat metal", "invisibility", "redirect lightning", "scorching ray", "wanyudo’s fury", "aid", "bloodweave", "calm emotions", "calm waters", "endoleech", "hold person", "lesser restoration", "mirror of reflection", "riptide", "suggestion"],
				prepared : true,
			}],
		},
		"subclassfeature7" : {
			name : "Interelemental Casting",
			source : [["RGttYR", 171]],
			minlevel : 7,
			description : desc([
				"When I cast a spell which deals damage of a type associated with an Elemental Affinity, I can change the damage type to one associated with one of my Elemental Affinities. In addition, when a creature I can see casts a spell that deals damage of a type associated with any Elemental Affinity, I can use my reaction to make a spellcasting ability check. The DC for the check equals 10 plus the spell’s level (cantrips are DC 10). On a success, I change the damage type to one associated with one of my Elemental Affinities."
			]),
		},
		"subclassfeature9" : {
			name : "Bonus Spells",
			source : [["RGttYR", 170]],
			minlevel : 9,
			description : desc([
				"I learn one 3rd-level bender spell from any element’s list; I always have that spell prepared, and it doesn’t count against the number of spells I can prepare each day.8 If I don’t have affinity with the element from which a spell is chosen, the spell is cast as if I had 1 affinity with that element. "
			]),
			spellcastingBonus : [{
				name : "Disciple of Fusion 3rd Lvl",
				level : [3, 3],
				spells : ["call lightning", "depth charge", "flashbang","fly", "gaseous form", "haste", "switcheroo", "wind wall", "acid rain", "meld into stone", "mireball", "daylight", "fireball", "flaming tiger leap", "haste", "lightning bolt", "major image", "acid rain", "clairvoyance", "extract shirikodama", "hypnotic pattern", "ryoko’s revelation", "sleet storm", "slow", "the bends", "water breathing", "water walk", "water wyrm"],
				prepared : true,
			}],
		},
		"subclassfeature13" : {
			name : "Bonus Spells",
			source : [["RGttYR", 170]],
			minlevel : 13,
			description : desc([
				"I learn one 4th-level bender spell from any element’s list; I always have that spell prepared, and it doesn’t count against the number of spells I can prepare each day.8 If I don’t have affinity with the element from which a spell is chosen, the spell is cast as if I had 1 affinity with that element. "
			]),
			spellcastingBonus : [{
				name : "Disciple of Fusion 4th Lvl",
				level : [4, 4],
				spells : ["cloud stride", "conjure minor elementals", "dimension door", "freedom of movement", "hallucinatory terrain", "tempestuous transformation", "rock tomb", "steelskin", "slatestorm", "stone shape", "stoneskin", "fire shield", "greater invisibility", "lion’s roar", "wall of fire", "cage of frozen tears", "cloud stride", "compulsion", "control water", "divination", "ice storm"],
				prepared : true,
			}],
		},
		"subclassfeature15" : {
			name : "Unleashed Elements",
			source : [["RGttYR", 171]],
			minlevel : 15,
			description : desc([
				"On my turn, when I use my action to cast a bender sspell of 1st level or higher, I can cast a bender cantrip with a casting time of one action as a bonus action that turn. I can use this feature a number of times equal to my spell bender casting ability modifier (minimum of once) and regain all expended uses when I finish a long rest."
			]),
		},
		"subclassfeature17" : {
			name : "Bonus Spells",
			source : [["RGttYR", 170]],
			minlevel : 17,
			description : desc([
				"I learn one 5th-level bender spell from any element’s list; I always have that spell prepared, and it doesn’t count against the number of spells I can prepare each day.8 If I don’t have affinity with the element from which a spell is chosen, the spell is cast as if I had 1 affinity with that element. "
			]),
			spellcastingBonus : [{
				name : "Disciple of Fusion 5th Lvl",
				level : [5, 5],
				spells : ["conjure elemental", "cyclone", "iminada’s umigiri", "mislead", "planar binding", "raiko’s rending rage", "eruption", "nomi’s adamantine carapace", "passwall", "wall of stone", "flame strike", "feverskin", "magatsuchi’s lantern", "bakuryo's blessed blizzard", "cone of cold", "dominate person", "hold monster", "scrying", "white water wall"],
				prepared : true,
			}],
		},
		"subclassfeature20" : {
			name : "Avatar of Elements",
			source : [["RGttYR", 171]],
			minlevel : 20,
			description : desc([
				"I gain two additional Elemental Affinities of my choice, for a total of six affinities. I can have no more than four affinities for any one element."
			]),
			bonusClassExtrachoices : [{
				"class" : "bender",
				feature : "elemental affinity",
				bonus : 2
			}],
		},
}});

AddSubClass("bender", "disciple of invigoration", {
	regExpSearch : /^(?=.*disciple)(?=.*invigoration).*$/i,
	subname : "Disciple of Invigoration",
	source : [["RGttYR", 172]],
	spellcastingExtra : ["bless", "enhance ability", "haste", "freedom of movement", "greater restoration"],
	features : {
		"subclassfeature3.1" : {
			name : "Inner Vigor",
			source : [["RGttYR", 173]],
			minlevel : 3,
			description : desc([
				"My hit point maximum increases by 3 and increases by 1 again whenever I gain a level in this class. In addition, I can add my bender spellcasting ability modifier to checks I make to maintain my concentration."
			]),
			calcChanges : {
				hp : function (totalHD) {
					return [classes.known.bender.level, "Inner Vigor (Bender)"];
				},
			},
			savetxt: "Add spellcasting mod to Concentration saves",
		},	
		"subclassfeature3.2" : {
			name : "Primordial Pulse",
			source : [["RGttYR", 173]],
			minlevel : 3,
			description : desc([
				"With shrewd timing, I imbue an ally with invigorating energy. When a willing creature I can see within 30 feet of me fails a saving throw or misses an attack roll, I can use my reaction to give it a rejuvenating boost. It immediately rerolls the saving throw or attack roll, with an additional bonus equal to my bender spellcasting ability modifier, and it must use the new result, potentially turning a failed save into a success or a missed attack into a hit. If this rerolled attack hits, it deals extra damage of a type associated with one of my Elemental Affinities (my choice when I take the reaction) equal to my bender spellcasting ability modifier. I can use this feature a number of times equal to my bender spellcasting ability modifier (minimum of once). I regain all expended uses when I finish a long rest."
			]),
			action : ["reaction", "Primordial Pulse"],
		},
		"subclassfeature7" : {
			name : "Distracting Onslaught",
			source : [["RGttYR", 173]],
			minlevel : 7,
			description : desc([
				"Once on my turn, when I deal damage to a creature using a damage type associated with my Elemental Affinity, I can cause the elements to manifest in a distracting array: fire may burst into dazzling lights, water may foam into obscuring spray, and wind or earth may whip up into a cloud. The next time the target makes an attack roll or saving throw before the end of its next turn, it must roll a d8 and subtract that from the result. I can use this feature a number of times equal to my bender spellcasting ability modifier (minimum of once). I regain all expended uses when I finish a long rest."
			]),
		},		
		"subclassfeature15" : {
			name : "Elemental Enhancement",
			source : [["RGttYR", 173]],
			minlevel : 15,
			description : desc([
				"Once per turn when I cast a bender spell of 1st level or higher that targets an ally, I can enhance that spell (no action required). Choose one of the following options:",
				" \u2022 I end one of the following conditions on the creature (my choice): blinded, charmed, deafened, frightened, poisoned, or stunned.",
				" \u2022 The creature can add a d6 to the next attack roll or saving throw it makes before the end of its next turn.",
				" \u2022 The creature can use its reaction to make one weapon attack.",
				" \u2022 The creature can use its reaction to move up to half its speed without provoking opportunity attacks.",
				"If the spell targets more than one ally, I choose which ally gains the benefit. I can use this feature a number of times equal to my bender spellcasting ability modifier (minimum of once) and regain all expended uses when I finish a long rest."
			]),
		},		
		"subclassfeature20" : {
			name : "Primordial Invigoration",
			source : [["RGttYR", 173]],
			minlevel : 20,
			description : desc([
				"When I enter my Primordial Avatar state, I can grant up to five willing creatures within 30 feet of me one level 1 benefit listed in an appropriate Primordial Avatar Benefits table for an element with which I have affinity. I choose a single effect to grant to all the creatures, which lasts until my Primordial Avatar state ends."
			]),
		},
}});


/*
 * Optional Class Features
 */

AddFeatureChoice(ClassList.barbarian.features["fast movement"], true, "Improved Extra Attack", {
	name : "Improved Extra Attack",
	extraname : "Optional Barbarian 5",
	source : [["RGttYR", 148]],
	description : desc([
		"This feature replaces the Extra Attack feature and works with features that interact with Extra Attack.",
		"I can attack twice, instead of once, whenever I take the Attack action on my turn.",
		"When I reach 7th level in this class, the fury of my attacks can knock a foe to the ground. When I take the Attack action and make an attack roll against a creature with advantage, if both of the d20 rolls would hit the target, I can force the target to make a Strength saving throw (DC equals 8 + my proficiency bonus + my attacking ability modifier). On a failure, I can choose to knock the target prone or push it up to 5 feet away from me. Creatures more than one size larger than me automatically succeed on this saving throw. I can use this feature once per turn."
	]),
}, "Optional 5th-level barbarian features");

AddFeatureChoice(ClassList.fighter.features['second wind'], true, "Improved Extra Attack", {
	name : "Improved Extra Attack",
	extraname : "Optional Fighter 5",
	source : [["RGttYR", 149]],
	description : desc([
		"This feature replaces the Extra Attack feature and works with features that interact with Extra Attack.",
		"I can attack twice, instead of once, whenever I take the Attack action on my turn. The number of attacks I can make increases to three when I reach 11th level in this class and to four when I reach 20th level in this class.",
		"When I reach 7th level in this class, I build momentum with each swing I take. When I take the Attack action and make an attack roll against a creature, I can give myself a +1 bonus to all subsequent attack rolls I make against that creature this turn, up to a maximum of +4."
	]),
	prereqeval : function (v) { return classes.known.fighter.level >= 5 ? true : "skip"; }
}, "Optional 5th-level fighter features");

AddFeatureChoice(ClassList.monk.features["slow fall"], true, "Improved Extra Attack", {
	name : "Improved Extra Attack",
	extraname : "Optional Monk 5",
	source : [["RGttYR", 148]],
	description : desc([
		"This feature replaces the Extra Attack feature and works with features that interact with Extra Attack.",
		"I can attack twice, instead of once, whenever I take the Attack action on my turn.",
		"When I reach 7th level in this class, I learn to capture my enemy’s ki as I strike, transferring its life force to revitalise my own. At the end of my turn, I gain temporary hit points equal to thrice the number of weapon attacks I made that hit a non-Construct creature that turn.",
	]),
	prereqeval : function (v) { return classes.known.monk.level >= 5 ? true : "skip"; },
}, "Optional 5th-level monk features");

AddFeatureChoice(ClassList.paladin.features["lay on hands"], true, "Improved Extra Attack", {
	name : "Improved Extra Attack",
	extraname : "Optional Paladin 5",
	source : [["RGttYR", 148]],
	description : desc([
		"This feature replaces the Extra Attack feature and works with features that interact with Extra Attack.",
		"I can attack twice, instead of once, whenever I take the Attack action on my turn.",
		"When I reach 7th level in this class, my zealous righteousness can inspire or demoralise others. When I take the Attack action and hit with two attacks, I can use a bonus action to utter a battlecry, targeting one enemy or ally within 30 feet of me. If the target is a foe that can see or hear me, it must succeed on a Wisdom saving throw (DC equals 8 + my proficiency bonus + my Charisma modifier) or be frightened of me until the end of my next turn. If the target is an ally, the frightened condition ends on it. I can use this feature once per turn.",
	]),
	prereqeval : function (v) { return classes.known.paladin.level >= 5 ? true : "skip"; },
}, "Optional 5th-level paladin features");

AddFeatureChoice(ClassList.ranger.features.spellcasting, true, "Improved Extra Attack (5th lvl)", {
	name : "Improved Extra Attack",
	extraname : "Optional Ranger 5",
	source : [["RGttYR", 148]],
	description : desc([
		"This feature replaces the Extra Attack feature and works with features that interact with Extra Attack.",
		"I can attack twice, instead of once, whenever I take the Attack action on my turn.",
		"When I reach 7th level in this class, the skill and precision of my attacks create and expose weaknesses in my foe’s guard. The second time on my turn that I hit the same creature with a weapon attack, I deal extra damage to it equal to my proficiency bonus.",
	]),
	prereqeval : function (v) { return classes.known.ranger.level >= 5 ? true : "skip"; },
}, "Optional 5th-level ranger features");

AddFeatureChoice(ClassList.bender.features["elemental combo"], true, "Improved Extra Attack", {
	name : "Improved Extra Attack",
	extraname : "Optional Bender 5",
	source : [["RGttYR", 148]],
	description : desc([
		"This feature replaces the Extra Attack feature and works with features that interact with Extra Attack.",
		"I can attack twice, instead of once, whenever I take the Attack action on my turn.",
		"When I reach 7th level in this class, my movements allow me to imbue magic in the elements I bend. When I take the Attack action, I can cast one cantrip in the bender spell list that I know in place of one of my attacks. This cantrip must have a casting time of one action, and it is cast at its lowest level.",
	]),
	prereqeval : function (v) { return classes.known.bender.level >= 5 ? true : "skip"; },
}, "Optional 5th-level bender features");


/*
 * Subclasses
 */

// Barbarian Subclasses
AddSubClass("barbarian", "path of the kaiju", {
	regExpSearch : /^(?=.*kaiju)(?=.*path).*$/i,
	subname : "Path of the Kaiju",
	source : [["RGttYR", 150]],
	features : {
		"subclassfeature3.1" : {
			name : "Aspect of the Kaiju",
			source : [["RGttYR", 150]],
			minlevel : 3,
			description : desc([ "Choose Ascendant Dragon, Eternal Leviathan, Titan Earth, Armoured Kabuto, or Infinite Tempest using the 'Choose Feature' button above. I can switch my chosen kaiju each time I gain a new barbarian level.",
			]),
			choices : ["Ascendant Dragon", "Eternal Leviathan", "Titan Earth", "Armoured Kabuto", "Infinite Tempest"],
			"ascendant dragon" : {
				name : "Ascendant Dragon",
				description : desc(["While raging, I can use an action to let loose a devastating blast of radiant energy from my mouth. Each creature in a 15-foot cone must succeed on a Dexterity saving throw (DC equal to 8 + my Strength modifier + my proficiency bonus), taking 2d10 radiant damage on a failed save, or half as much damage on a successful one. Taking this action counts as making an attack for the purpose of maintaining my rage. The damage of this feature increases by 1d10 when I reach 5th level (3d10), 11th level (4d10), and 17th level (5d10).",
				]),
				weaponOptions : [{
					regExpSearch : /^(?=.*ascendant)(?=.*dragon)(?=.*blast).*$/i,
					name : "Ascendant Dragon Blast",
					source : [["RGttYR", 150]],
					ability : 1,
					type : "Natural",
					damage : ["Q", 10, "radiant"],
					range : "15 ft cone",
					description : "Hits all in area; Dex save, success - half damage",
					abilitytodamage : false,
					dc : true,
					isAlwaysProf : true,
					selectNow : true
				}],			
			},
			"eternal leviathan" : {
				name : "Eternal Leviathan",
				description : desc(["When I enter my rage, or as a bonus action while raging, I can bellow an echoing cry. Each creature of my choice within 10 feet of me must succeed on a Wisdom saving throw (DC equal to 8 + my Constitution modifier + my proficiency bonus) or have disadvantage on attack rolls against any target other than me until the start of my next turn.",
				]),
				action : [["bonus action", "Echoing Cry"]]
			},
			"titan earth" : {
				name : "Titan Earth",
				description : desc(["I can use my Constitution modifier in place of my Strength modifier for Strength checks, as well as for the attack and damage rolls of my unarmed strikes and weapon attacks. These checks and attacks are still considered Strength-based for the purposes of my other features. In addition, I gain tremorsense out to 10 feet."
				]),
				addMod : { type : "skill", field : "Athl", mod : "Con-Str", text : "I can use my Con mod in place of my Str mod." },
				vision : [["Tremorsense", 10]],
			},
			"armoured kabuto" : {
				name : "Armoured Kabuto",
				description : desc(["While raging, if I move at least 15 feet straight towards a target and then immediately hit it with a weapon attack, the target takes an extra 2d8 bludgeoning damage from the attack."
				]),
			},
			"infinite tempest" : {
				name : "Infinite Tempest",
				description : desc(["The first time each turn while raging that I hit a target with a melee attack roll, I deal 1d6 lightning damage to each creature of my choice within 5 feet of the target as lightning spirals out from the point of impact."
				]),
			},			
		},
		"subclassfeature3.2" : {
			name : "Apex Hunter",
			source : [["RGttYR", 150]],
			minlevel : 3,
			description : desc([
				"I gain proficiency in the Medicine and Survival skills. If I already have this proficiency, I gain proficiency in another skill of my choice.",
				"Additionally, I can take the Brace action*, stand up from prone, or mount a creature using only 5 feet of movement.",
				]),
			skills : ["Medicine", "Survival"],
			skillstxt : "I gain proficiency in the Medicine and Survival skills. If I already have this proficiency, I gain proficiency in another skill of my choice.",
		},
		"subclassfeature6" : {
			name : "Kaiju Force",
			source : [["RGttYR", 150]],
			minlevel : 6,
			description : desc([
				"When I enter my  rage, I can increase my size and the size of my equipment. If I am smaller than Large, I become Large, and any objects I am wearing or carrying increase by the same relative amount; my weight increases by a factor of 8 for each size category increased. If I lack the room to become Large, I grow to the maximum attainable size. This growth lasts until my rage ends. Objects enlarged by this feature that are no longer in contact with me at the end of a turn return to the size they were before this feature affected them. While in this form, I can add my Constitution modifier to all Strength checks and Strength saving throws, and my weapon attacks deal an extra 1d4 damage on a hit.",
				]),	
		},
		"subclassfeature10" : {
			name : "Transformation of the Kaiju",
			source : [["RGttYR", 150]],
			minlevel : 10,
			description : desc([ "Choose Ascendant Dragon, Eternal Leviathan, Titan Earth, Armoured Kabuto, or Infinite Tempest using the 'Choose Feature' button above.",
			]),
			choices : ["Ascendant Dragon", "Eternal Leviathan", "Titan Earth", "Armoured Kabuto", "Infinite Tempest"],
			"ascendant dragon" : {
				name : "Ascendant Dragon",
				description : desc(["While raging, me and any objects I am wearing or carrying assume a pseudo-liquid form. In this form, I have resistance to fire damage, I am immune to the grappled and restrained conditions, I gain a swimming speed of 60 feet, I can move through other creatures’ spaces and through gaps as small as 1 inch wide without squeezing (but I can’t stop there), and I gain the benefits of half cover while submerged in water.",
				]),	
				dmgres : ["Fire (in rage)"],
				savetxt: "While raging, immune to grappled, restrained.",
			},
			"eternal leviathan" : {
				name : "Eternal Leviathan",
				description : desc(["While raging, I adopt a translucent, ghastly form. In this form, I have resistance to cold and necrotic damage, and I can move through other creatures and objects as if they were difficult terrain. I take 5 force damage if I end my turn inside an object or creature. If I am inside an object or creature when my rage ends, I am shunted to the nearest unoccupied space and take 5 force damage for every 5 feet travelled.",
				]),
				dmgres : ["Cold (in rage)", "Necrotic (in rage)"],
			},
			"titan earth" : {
				name : "Titan Earth",
				description : desc(["When I use my Kaiju Force feature, if I am smaller than Huge, I become Huge instead of Large, along with anything I am wearing. In addition to the effects of that feature, my reach increases by 5 feet, and my weapon attacks deal an extra 1d4 damage on a hit (2d4 extra damage total) until my rage ends."
				]),
			},
			"armoured kabuto" : {
				name : "Armoured Kabuto",
				description : desc(["While raging, I sprout large, insectoid wings. I have a flying speed equal to my walking speed, and opportunity attacks against me have disadvantage."
				]),
			},
			"infinite tempest" : {
				name : "Infinite Tempest",
				description : desc(["While raging, I crackle with lighting and my blows land with booming claps of thunder. In this form, I have resistance to lightning and thunder damage, and I can use a bonus action to move in a straight line up to 30 feet, passing through other creatures without provoking opportunity attacks. Each creature I pass through in this way must succeed on a Dexterity saving throw (DC equal to 8 + my Constitution modifier + my proficiency bonus) or take 2d6 lightning damage."
				]),
				dmgres : ["Lightning (in rage)"],				
			},			
		},
		"subclassfeature14" : {
			name : "Kaiju Force",
			source : [["RGttYR", 151]],
			minlevel : 14,
			description : desc([
				"While I am raging and have hit points equal to or less than half my hit point maximum, my speed increases by 10 feet, and I can make one weapon attack as a bonus action. Furthermore, if I fail a saving throw, I can choose to succeed instead. I can use this feature to succeed on a saving throw a number of times equal to half my Constitution modifier (minimum of once), and I regain all expended uses when I finish a long rest.",
				]),	
		},			
}});

// Bard Subclasses
AddSubClass("bard", "college of hanabi", {
	regExpSearch : /^(?=.*college)(?=.*hanabi).*$/i,
	subname : "College of Hanabi",
	source : [["RGttYR", 152]],
	features : {
		"subclassfeature3.1" : {
			name : "Burgeoning Inventor",
			source : [["RGttYR", 152]],
			minlevel : 3,
			description : desc([
				"I gain proficiency with alchemist’s supplies, one other set of artisan’s tools of my choice, and all magitech firearms. I can use a set of alchemist’s supplies as a spellcasting focus for my bard spells.",
				"In addition, when I make an ability check using a tool I have proficiency with, I can expend one use of Bardic Inspiration. Roll my Bardic Inspiration die and add the number rolled to my ability check. I can choose to do so after I roll the die for the ability check, but before the GM tells me whether I succeed or fail."
				]),
			weaponProfs : [false, false, ["magitech firearms"]],
			toolProfs: ["Alchemist’s Supplies", "artisan’s tools of my choice"],
		},
		"subclassfeature3.2" : {
			name : "Pyrotechnics",
			source : [["RGttYR", 152]],
			minlevel : 3,
			description : desc([
				"During a long rest, I can create a number of small, magical pyrotechnics equal to my Charisma modifier (minimum one). When I use one of the effects below, I expend one pyrotechnic. I can activate no more than one pyrotechnic per turn. Saving throws are always against my bard spell save DC.",
				]),
			action : [["reaction", "Kodama Candle"], ["action", "Screaming Nue"], ["action", "Raijū’s Rupture"], ["bonus action", "Wanyūdō Wheel"]],
			toNotesPage: [{
				name : "Pyrotechnics",
				source : [["RGttYR", 152]],
				note: desc([
					"During a long rest, I can create a number of small, magical pyrotechnics equal to my Charisma modifier (minimum one). When I use one of the effects below, I expend one pyrotechnic. I can activate no more than one pyrotechnic per turn. Saving throws are always against my bard spell save DC.",
					" \u2022 Kodama Candle. As a reaction when I am targeted by an attack from a creature I can see within 15 feet of me, I can cause this pyrotechnic to emit a burst of light, imposing disadvantage on the triggering attack roll. A creature that doesn’t rely on sight is immune to this effect. In addition, the creature must succeed on a Constitution saving throw or be blinded until the end of its next turn.",
					" \u2022 Screaming Nue. As an action, I can throw this pyrotechnic to a point within 60 feet of me, where it creates smoke and lights in the form of a screaming nue’s head for the next minute. Each creature other than me within 30 feet of the point that can hear or see the effect must succeed on a Wisdom saving throw or be frightened of it. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself and becoming immune to the effect of any Screaming Nue for the next 24 hours on a success.",
					" \u2022 Raijū’s Rupture. As an action, I can throw this pyrotechnic to a point within 60 feet of me, where it explodes, creating a thundering boom that can be heard for 500 feet. Each creature within 10 feet of the pyrotechnic must make a Dexterity saving throw. On a failure, a creature is deafened until the end of its next turn and takes a number of d6s of thunder damage equal to my proficiency bonus. On a success, a creature takes half as much damage and isn’t deafened.",
					" \u2022 Wanyūdō Wheel. As a bonus action, I can light this pyrotechnic, which propels me through the air. Until the end of my turn, I gain a flying speed equal to 30 feet plus ten times my proficiency bonus. This movement does not provoke opportunity attacks.",
				]),
			}],
		},
		"subclassfeature6" : {
			name : "Firework Display",
			source : [["RGttYR", 152]],
			minlevel : 6,
			description : desc([
				"Over the course of 1 minute, I can use 10 gp of fireworks to create an enrapturing display of sporadic bright lights and noise audible for 1,000 feet. I must use my  action each round to imbue the light and smoke with my bardic magic, causing an enthralling story to manifest; if I fail to do this, the display ends with no effect. At the end of the display, I can choose a number of creatures that witnessed it equal to twice my Charisma modifier (minimum one). Each creature must succeed on a Wisdom saving throw against my bard spell save DC or be subject to the effect of the message with which I chose to imbue the display for the next 24 hours. Creatures that do not witness the whole display or that are immune to the charmed condition automatically succeed on this saving throw.",
				]),	
			toNotesPage: [{
				name : "Pyrotechnics",
				source : [["RGttYR", 152]],
				note: desc([
					"Over the course of 1 minute, I can use 10 gp of fireworks to create an enrapturing display of sporadic bright lights and noise audible for 1,000 feet. I must use my  action each round to imbue the light and smoke with my bardic magic, causing an enthralling story to manifest; if I fail to do this, the display ends with no effect. At the end of the display, I can choose a number of creatures that witnessed it equal to twice my Charisma modifier (minimum one). Each creature must succeed on a Wisdom saving throw against my bard spell save DC or be subject to the effect of the message with which I chose to imbue the display for the next 24 hours. Creatures that do not witness the whole display or that are immune to the charmed condition automatically succeed on this saving throw. Choose one of the following messages:",
					" \u2022 Anger. The message is one of injustice and exploitation, fomenting anger in those that watch it. With a mere spark, riots may ensue. Affected creatures are addled by their anger and prone to violence; Deception checks against them have advantage.",
					" \u2022 Fear. The world is a dangerous place, and to step outside one’s home is to invite disaster. People are unlikely to leave their home, let alone interfere in others’ matters, after watching this performance. Intimidation checks have advantage against an affected creature. In addition, the first time the target sees a creature it can’t identify or with whom it is not acquainted, it must make a Wisdom saving throw against my bard spell save DC. On a failure, the affected creature is frightened of that creature until the unknown creature reveals itself to be non-threatening, or is out of sight. While frightened, an affected target can repeat the saving throw at the end of each of its turns, ending the condition on itself and becoming immune to being frightened by this effect for the duration.",
					" \u2022 Generosity. The act of giving and gratitude is epitomised as the paradigm of virtue. Observers are more likely to help others after seeing this display. Affected creatures are charmed by me. While charmed, these creatures help me where possible without large risks, and speak highly of my performance. A creature ceases to be charmed if me or my companions do anything harmful to it.",
					" \u2022 Peace. The story shows the utopia that awaits the world if all act with kindness and goodwill. Feelings of resentment are quelled and acts of violence are less likely after a community sees this display. Affected creatures are subject to the calm emotions spell.",					
				]),
			}],	
			usages : levels.map(function (n) {
					return n < 6 ? 0 : n < 14 ? 1 : 3;
			}),
			recovery: "short rest",		
		},
		"subclassfeature14" : {
			name : "Pyrotechnics",
			source : [["RGttYR", 153]],
			minlevel : 14,
			description : desc([
				"My mastery of the art of hanabi can be seen in even my merest spark. My Firework Display feature can affect up to three times as many creatures, and my Pyrotechnics are enhanced in the following ways:",
				]),
			toNotesPage: [{
				name : "Pyrotechnics",
				source : [["RGttYR", 152]],
				note: desc([
					"My mastery of the art of hanabi can be seen in even my merest spark. My Firework Display feature can affect up to three times as many creatures, and my Pyrotechnics are enhanced in the following ways:",
					" \u2022 Kodama Candle. The range increases to 30 feet, and the pyrotechnic sheds bright light in a 30-foot radius until the start of my next turn, causing all attacks against me to have disadvantage. A creature that doesn’t rely on sight is immune to this effect.",
					" \u2022 Screaming Nue. The radius of the effect increases to 40 feet, and creatures that fail the saving throw also take a number of d8s of psychic damage equal to half my proficiency bonus (rounded down). Creatures that succeed on the saving throw take half as much damage and aren’t otherwise affected.",
					" \u2022 Raijū’s Rupture.The radius of the explosion increases to 20 feet, and the damage dice increase to d8s.",
					" \u2022 Wanyūdō Wheel. The flying speed granted lasts until the end of my next turn. My movement does not provoke opportunity attacks for the duration.",
				]),
			}],
		},		
}});

AddSubClass("bard", "college of masks", {
	regExpSearch : /^(?=.*college)(?=.*masks).*$/i,
	subname : "College of Masks",
	source : [["RGttYR", 154]],
	features : {
		"subclassfeature3.1" : {
			name : "Nōgaku Conjuration",
			source : [["RGttYR", 154]],
			minlevel : 3,
			description : desc([
				"I have the power to conjure magical masks. As a bonus action, I can conjure one mask of my choice from the options below. It appears on my face or levitates in the air around mee, and it lasts for 1 minute or until I use a bonus action to dismiss it or conjure another one.",
				"While conjured, my mask grants me advantage on Performance checks, and I can use it as a spellcasting focus for my bard spells.",
				]),
			toNotesPage: [{
				name : "Pyrotechnics",
				source : [["RGttYR", 154]],
				note: desc([
					"I have the power to conjure magical masks. As a bonus action, I can conjure one mask of my choice from the options below. It appears on my face or levitates in the air around mee, and it lasts for 1 minute or until I use a bonus action to dismiss it or conjure another one.",
					"While conjured, my mask grants me advantage on Performance checks, and I can use it as a spellcasting focus for my bard spells. The type of mask I conjure also grants an additional benefit:",
					" \u2022 Mask of Beauty. When a creature within 30 feet of me that I can see makes a saving throw to resist the effects of an enchantment spell I cast, I can use my reaction to expend one use of my Bardic Inspiration, imposing disadvantage on that roll.",
					" \u2022 Mask of Hope. When a creature within 60 feet of me that can see or hear me rolls a Bardic Inspiration die, I can use my reaction to add my Charisma modifier (minimum of +1) to that roll.",
					" \u2022 Mask of Solitude. When a creature hits me with a melee attack, I can use my reaction to release a blast of force from my mask, dealing 1d8 force damage to the creature and pushing it up to 15 feet away from me.",
					" \u2022 Mask of War. I can add my Charisma modifier (minimum of +1) to the damage roll of a weapon attack I make or a bard spell I cast (no action required). I can use this benefit once per turn.",
					"I can create a mask in this way a number of times equal to my Charisma modifier (minimum once), and I regain all expended uses when I finish a long rest. If I have no uses of this feature remaining, I can create a mask by expending one use of my Bardic Inspiration. ",
				]),
			}],
			recovery: "long rest",
			usagescalc: "event.value = Math.max(1,What('Cha Mod'))", 
		},
		"subclassfeature3.2" : {
			name : "Inspiring Performance",
			source : [["RGttYR", 154]],
			minlevel : 3,
			description : desc([
				"I learn to empower others through the art of performance. If I perform for at least 10 minutes, I can choose a number of creatures up to my Charisma modifier (minimum of 1) who witnessed my performance. Each creature gains temporary hit points equal to my Charisma modifier + my proficiency bonus (minimum 1 temporary hit point) and has advantage on its next initiative roll before it finishes a long rest. Once I inspire a creature in this way, that creature can’t benefit from this feature again until it finishes a long rest.",
				]),
		},		
		"subclassfeature6" : {
			name : "Stagecraft",
			source : [["RGttYR", 154]],
			minlevel : 6,
			description : desc([
				"While I am on the ground or a surface that can support me, I can use a bonus action to target one creature that is no more than one size larger than me within 60 feet of me. That target must succeed on a Charisma saving throw against my bard spell save DC or we both teleport, swapping places. A creature can choose to fail this saving throw. I can use this feature a number of times equal to my Charisma modifier (minimum once), and I regain all expended uses when I finish a long rest.",
				]),
			recovery: "long rest",
			usagescalc: "event.value = Math.max(1,What('Cha Mod'))",
			action : ["bonus action", "Stagecraft"],
		},	
		"subclassfeature14" : {
			name : "Grandiose Transformation",
			source : [["RGttYR", 154]],
			minlevel : 14,
			description : desc([
				"I gain additional benefits depending on the mask I currently have conjured",
			]),
			toNotesPage: [{
				name : "Grandiose Transformation",
				source : [["RGttYR", 154]],
				note: desc([
					"I gain additional benefits depending on the mask I currently have conjured:",
					" \u2022 Mask of Beauty. I gain a bonus to all saving throws equal to my Charisma modifier (minimum of +1).",
					" \u2022 Mask of Hope. When a creature I can see within 90 feet of me falls to 0 hit points but isn’t killed outright, I can use a reaction to expend one use of my Bardic Inspiration. If I do so, the creature is reduced to 1 hit point instead. Once a creature benefits from this feature, it can’t do so again until it finishes a long rest.",
					" \u2022 Mask of Solitude. I have resistance to bludgeoning, piercing, and slashing damage.",
					" \u2022 Mask of War. If I use my action to cast a spell, I can make one weapon attack as a bonus action that turn.",
				]),
			}],
		},
}});

// Cleric Subclasses
AddSubClass("cleric", "shrine warden domain", {
	regExpSearch : /^(?=.*shrine)(?=.*warden).*$/i,
	subname : "Shrine Warden Domain",
	source : [["RGttYR", 174]],
	spellcastingExtra : ["protection from evil and good", "sanctuary", "protection", "silence", "dispel magic", "extract shirikodama", "guardian of faith", "rock tomb", "bakuryo’s blessed blizzard", "magatsuchi’s lantern"],
	features : {
		"subclassfeature1.1" : {
			name : "Bonus Proficiencies",
			source : [["RGttYR", 174]],
			minlevel : 1,
			description : "\n   I gain proficiency with martial weapons and heavy armor",
			armorProfs : [false, false, true, false],
			weaponProfs : [false, true]
		},
		"subclassfeature1.2" : {
			name : "Enrapture",
			source : [["RGttYR", 174]],
			minlevel : 1,
			description : desc([
				"Once per turn, when i hit a creature with an attack roll, I can attempt to expel or trap the creature. That creature must succeed on a Charisma saving throw against my cleric spell save DC or suffer one of the following effects of my choice:",
				" \u2022 The creature is pushed away from me a number of feet equal to five times my proficiency bonus.",
				" \u2022 The creature’s speed is reduced by a number of feet equal to my five times my proficiency bonus until the end of its next turn.",
				"I can use this feature a number of times equal to my Wisdom modifier (minimum once), regaining all expended uses when I finish a long rest.",
			]),
			recovery: "long rest",
			usagescalc: "event.value = Math.max(1,What('Wis Mod'))",
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Consecration",
			source : [["RGttYR", 175]],
			minlevel : 2,
			description : desc([
				"I can use my Channel Divinity to imbue an area with divine magic. As a bonus action, I target a point within 60 feet of me, causing a small, spectral shrine to appear and radiate magic in a 20-foot-radius aura for the next 10 minutes. When I use this feature, I choose a Blessing or Curse from the options below, and then choose a number of creatures I can see up to 1 + my Wisdom modifier (minimum of one creature) to be affected by the shrine’s magic.",
			]),
			toNotesPage: [{
				name : "Channel Divinity: Consecration",
				source : [["RGttYR", 154]],
				note: desc([
					"I can use my Channel Divinity to imbue an area with divine magic. As a bonus action, I target a point within 60 feet of me, causing a small, spectral shrine to appear and radiate magic in a 20-foot-radius aura for the next 10 minutes. When I use this feature, I choose a Blessing or Curse from the options below, and then choose a number of creatures I can see up to 1 + my Wisdom modifier (minimum of one creature) to be affected by the shrine’s magic.",
					" \u2022 Blessing of Fortune. An affected creature in the aura can add 1d4 to an attack roll, ability check, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Blessing of Fortune, but must decide before the outcome is determined. It then can’t gain this benefit again until the start of its next turn.",
					" \u2022 Blessing of Power. When an affected creature in the aura hits a target with an attack roll, it can deal an extra 1d6 radiant damage to that target. It then can’t gain this benefit again until the start of its next turn. This damage increases to 2d6 when I reach 11th level in this class.",
					" \u2022 Blessing of Hope. An affected creature in the aura is immune to the frightened condition, and it gains 1d4 temporary hit points when it ends its turn there.",
					" \u2022 Curse of the Void. An affected creature that enters the aura for the first time on its turn or starts its turn there must succeed on a Constitution saving throw or be blinded until the start of its next turn.",
					" \u2022 Curse of Pain. An affected creature takes 1d8 necrotic damage when it enters the aura for the first time on its turn or starts its turn in the aura. This damage increases to 2d8 when I reach 11th level in this class.",
					" \u2022 Curse of Panic. An affected creature that enters the aura for the first time on its turn or starts its turn there must succeed on a Wisdom saving throw or become frightened of the shrine until the start of its next turn.",
				]),
			}],
			action : ["bonus action", ""],
		},		
		"subclassfeature6" : {
			name : "Shrine Guardian",
			source : [["RGttYR", 175]],
			minlevel : 6,
			description : desc([
				"When I create a shrine with my Consecration Channel Divinity feature, I also summon a Tiny Fey (yokai) spirit to act as its guardian. This shrine guardian is immune to all damage and conditions and can fly. As a bonus action on my turn, I can command it to move the shrine up to 20 feet in any direction. The shrine guardian can also help or hinder nearby creatures. When a creature in the shrine’s aura makes an attack roll, ability check, or saving throw, I can use my reaction to command the shrine guardian to intervene, rolling 1d4 and applying it as a bonus or penalty (my choice) to the creature’s roll. I can use this feature a number of times equal to my Wisdom modifier, regaining all expended uses upon finishing a long rest.",
			]),
			recovery: "long rest",
			usagescalc: "event.value = Math.max(1,What('Wis Mod'))",
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : [["RGttYR", 175]],
			minlevel : 8,
			description : "\n  Once per turn, when I hit a creature with a weapon attack, I can do extra damage",
			additional : levels.map(function (n) {
				if (n < 8) return "";
				return "+" + (n < 14 ? 1 : 2) + "d8 radiant damage";
			}),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.cleric && v.isWeapon) {
							fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 radiant damage';
						}
					},
					"Once per turn, I can have one of my weapon attacks that hit do extra radiant damage."
				]
			}
		},
		"subclassfeature17" : {
			name : "Empowered Consecration",
			source : [["RGttYR", 175]],
			minlevel : 17,
			description : desc([
				"When I use my Consecration Channel Divinity feature, the radius of the shrine’s aura increases to 30 feet. In addition, I can choose all three Blessing or all three Curse options to affect creatures I designate with this feature, rather than just one option.",
			]),
		},		
}});

// Druid Subclasses
AddSubClass("druid", "circle of the yokai", {
	regExpSearch : /^(?=.*druid)(?=.*yokai).*$/i,
	subname : "Circle of the Yokai",
	source : [["RGttYR", 176]],
	spellcastingExtra : ["earthen uppercut", "find familiar", "invisibility", "wanyudo’s fury", "haste", "water wyrm", "compulsion", "lion’s roar", "dominate person", "eruption", "animate objects"],
	features : {
		"subclassfeature2" : {
			name : "Yokai Wild Shape",
			source : [["RGttYR", 176]],
			minlevel : 2,
			description : desc([
					"My circle’s connection to the realms allows me to assume more powerful, yokai forms. In addition to mundane Beasts, I can use my Wild Shape to transform into any Beast, Celestial, Construct, Fey, Fiend, Monstrosity, or Plant yokai with a CR up to the value in the Circle of the Yokai Wild Shapes table for my druid level. I do not gain access to the legendary actions of a creature I transform into.",
					"As an action, I assume the shape of a yokai I have seen before with the following additional benefits:",
					" \u2022 I can speak as normal.",
					" \u2022 I have advantage on Constitution saving throws to maintain concentration on a spell.",
					" \u2022 I can cast spells present in the Circle of the Yokai Spells table or in my Wild Shape form’s statistics. When I cast a spell in this way, it doesn’t require material or somatic components, and I use my spell slots and druid spell save DC.",
				]),
		},
		"subclassfeature6" : {
			name : "Empowered Transformation",
			source : [["RGttYR", 177]],
			minlevel : 6,
			description : desc([
				"My connection to the yokai allows me to channel their power when I draw upon my druidic spellcasting. Immediately after I cast a spell of 1st level or higher, I can use my Wild Shape feature as a reaction. Once I use this reaction, I can’t do so again until I finish a short or long rest. In addition, while I am concentrating on a spell and transformed by my Wild Shape, my weapon attacks count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.",
			]),
			recovery : "short rest",
			usages : "1",
			action : ["reaction", "Empowered Transformation"],
		},
		"subclassfeature10" : {
			name : "Beckon the Yokai",
			source : [["RGttYR", 177]],
			minlevel : 10,
			description : desc([
				"I have the power to call upon the Fey yokai that inhabit objects. I can cast the animate objects spell as an action without using a spell slot or material components. When I cast the spell in this way, the effect lasts for the next 10 minutes, after which time the magic ends and the target returns to normal. Once I do so, I must finish a long rest before I can cast it in this way again.",
			]),
			recovery : "long rest",
			usages : "1",
		},
		"subclassfeature14" : {
			name : "Yokai Fortification",
			source : [["RGttYR", 177]],
			minlevel : 14,
			description : desc([
				"My yokai forms overflow with magic, fortifying my connection to the spirit realm. If I drop to 0 hit points while transformed into a yokai with my Wild Shape, I can use my reaction to instantly use Wild Shape again (expending a use as normal), and any remaining damage carries over to my new form. Once I use this reaction, I can’t do so again until I finish a short or long rest. In addition, while transformed by my Wild Shape, if I use an action to cast a spell, I can use my bonus action on that turn to make one attack.",
			]),
			recovery : "short rest",
			usages : "1",
		},
}});

// Fighter Subclasses
AddSubClass("fighter", "skeletal blade", {
	regExpSearch : /^(?=.*skeletal)(?=.*blade).*$/i,
	subname : "Skeletal Blade",
	source : [["RGttYR", 178]],
	features : {
		"subclassfeature3.1" : {
			name : "Malleable Physique",
			source : [["RGttYR", 178]],
			minlevel : 3,
			description : desc([
				"As an action, I can alter my form. I must remain in a form that has the same basic arrangement of limbs, and I can’t change the colour of my eyes, hair, or skin",
				"A creature can use a INT (Investigation) check vs DC (equals 8 + CON mod + PB) to discern if I am disguised",
				"Transformation lasts until I use an action to end it or I begin a long rest."
				]),
			action : [["action", ""]],
			recovery: "short rest",
			usagescalc: "event.value = Math.max(1,What('Con Mod'))",
		},
		"subclassfeature3.2" : {
			name : "Skeletal Form",
			source : [["RGttYR", 178]],
			minlevel : 3,
			description : desc([
				"As a bonus action, I can enter my skeletal form with a benefit",
				]),
			action : [["bonus action", ""]],
			recovery: "short rest",
			usagescalc: "event.value = Math.max(1,What('Con Mod'))",
		  //Adding in the Skeletal Blade under weapons
			weaponsAdd: ["Skeletal Form"],
			weaponOptions: [{
				name: "Skeletal Form",
				source: [["RGttYR", 178]],
				regExpSearch : /^(?=.*skeletal)(?=.*form).*$/i,
				type : "Martial",
				ability : 1,
				abilitytodamage : true,
				damage: [1, 8, "slashing/piercing"],
				range : "Melee",
				description : "Simple, Finesse, Skewer superior strike, Can't be disarmed of this",
				isMagicWeapon : true,
				isAlwaysProf: true,
			}],
			calcChanges: {
			   atkAdd: [
			      function (fields, v) {
				  if ((/^(?=.*skeletal)(?=.*form).*$/i).test(v.WeaponTextName) && classes.known.fighter && classes.known.fighter.level) {
					fields.Damage_Die = "1d" + (classes.known.fighter.level < 10 ? 8 : classes.known.fighter.level < 15 ? 10 : 12);
				  };
                 	    },
                 	    5
             	   	    ]
    			},
			toNotesPage: [{
				name : "Skeletal Form",
				source : [["RGttYR", 178]],
				note: desc([
					"As a bonus action, I enter my skeletal form, sprouting a magical weapon through my flesh that is considered a simple melee weapon with the finesse property that deals 1d8 slashing or piercing damage on a hit. I cannot be disarmed of the weapon. I gain one of the benefits below:",
					" \u2022 My reach increases by 5 ft",
					" \u2022 My walking speed increases by 10 ft",
					" \u2022 I gain a climbing speed equal to my walking speed",
					" \u2022 I gain a +1 bonus to my AC",
					" \u2022 I gain THP equal to my CON mod at the start of my turn (min 1)",
					"As a bonus action whilst in skeletal form, I can change to a new benefit. The skeletal form lasts for 1 minute",
					"Damage of weapon increases to 1d10 at 10th lvl and 1d12 at 15th lvl"
				])
			}],
		},
		"subclassfeature7" : {
			name : "Osseous Prodigy",
			source : [["RGttYR", 179]],
			minlevel : 7,
			description : desc([
				"When in Skeletal Form, I can choose an additional benefit and a weapon properties & superior strike combination",
			]),
			"osseous prodigy" : {
				name : "Osseous Prodigy",
				source : [["RGttYR", 179]],
				description : desc([
				"When in Skeletal Form, I can choose an additional benefit, and one of the following weapon properties and superior strike combinations:",
				"Impact & Reeling Blow; Light & Hamstring; or Heavy & Shockwave.",
				]),
			},
			autoSelectExtrachoices : [{ extrachoice : "osseous prodigy"}],	
		},
		"subclassfeature10" : {
			name : "Skeletal Knight",
			source : [["RGttYR", 179]],
			minlevel : 10,
			description : desc([
				"I gain a +1 bonus to attack and damage rolls made with my skeletal blade. (+2 at lvl 18)",
				"When I enter Skeletal form, I can choose one benefit",	
			]),
			calcChanges : {
				atkCalc : [
					function (fields, v, output) {
						if ((/^(?=.*skeletal)(?=.*form).*$/i).test(v.WeaponTextName) && classes.known.fighter && classes.known.fighter.level) output.magic += (classes.known.fighter.level < 10 ? 0 : classes.known.fighter.level < 18 ? 1 : 2);
					},
					"I gain a +1 bonus to attack and damage rolls made with my skeletal blade.",
					],
			},
			toNotesPage: [{
				name : "Skeletal Knight",
				source : [["RGttYR", 179]],
				note: desc([
					"I gain a +1 bonus to attack and damage rolls made with my skeletal blade. (+2 at lvl 18)",
					"When I enter Skeletal form, I can choose one of the following benefits:",
					"\u2022 I sprout skeletal wings and gain the ability to magically fly. I gain flying speed equal to my walking speed and can hover",
					"\u2022 I gain resistance to cold, lightning, necrotic, and poison damage",
					"\u2022 When I hit with a melee attack, I add 1d8 necrotic damage",
					"\u2022 A creature grappled by me takes 2d12 piercing damage at the start of their turn",	
				])
			}],
		},
		"subclassfeature15" : {
			name : "One With Nothing",
			source : [["RGttYR", 179]],
			minlevel : 15,
			description : desc([
				"If I am reduced to 0 HP in my Skeletal Form, my transformation ends and I am reduced to 1 HP instead",
			]),
			extraLimitedFeatures : [{
				name : "One With Nothing",
				usages : 1,
				recovery : "short rest",
			}],
		},
		"subclassfeature18" : {
			name : "Living Weapon",
			source : [["RGttYR", 179]],
			minlevel : 18,
			description : desc([
				"When I enter Skeletal Form, I can choose two additional benefits from either the Skeletal Form or Skeletal Knight features",
			]),
			toNotesPage: [{
				name : "Living Weapon",
				source : [["RGttYR", 179]],
				note: desc([
					"When I enter Skeletal Form, I can choose two additional benefits from either the Skeletal Form or Skeletal Knight features",	
				])
			}],
		},
	},
});

// Monk Subclasses
AddSubClass("monk", "way of the eight gates", {
	regExpSearch : /^(?=.*eight)(?=.*gates)((?=.*(monk|monastic))|((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior))).*$/i,
	subname : "Way of the Eight Gates",
	source : [["RGttYR", 180]],
	features : {
		"subclassfeature3.1" : {
			name : "Gate of Earth",
			source : [["RGttYR", 180]],
			minlevel : 3,
			description : desc([
				"When I use Patient Defense or Step of the Wind, I regain HP equal to my WIS mod (min 1)"
		])},
		"subclassfeature3.2" : {
			name : "Gate of Water",
			source : [["RGttYR", 180]],
			minlevel : 3,
			description : desc([
				"I have an additional number of ki/focus points equal to my WIS mod (min 1)"
				]),
			limfeaname : "Ki Points",
			usages : "Monk level + Wisdom modifier per ",
			usagescalc : "event.value = classes.known['monk'].level + What('Wis Mod');",
			recovery : "short rest",
		},
		"subclassfeature3.3" : {
			name : "Gate of Air",
			source : [["RGttYR", 180]],
			minlevel : 3,
			description : " [1 ki/focus point]" + desc([
				"After I hit a creature with a melee weapon attack, I can spend a ki point to issue a challenging roar",
				"If they can hear me, they have disavantage on attack rolls made against creatures other than me until the end of my next turn"
		])},
		"subclassfeature6.1" : {
			name : "Gate of Flame",
			source : [["RGttYR", 180]],
			minlevel : 6,
			description : desc([
				"When I use Flurry of Blows, I can make an additional unarmed strike as part of the same bonus action",
				"I can do this up to a number of times per long rest equal to my WIS mod (min 1), and regain all uses on a Long Rest"
		])},
		"subclassfeature6.2" : {
			name : "Gate of Presence",
			source : [["RGttYR", 180]],
			minlevel : 6,
			description : desc([
				"When I make a Charisma check, I gain a bonus equal to my WIS mod (min 1)"
			]),
		addMod : ["Deception", "Intimidation", "Performance", "Persuasion"].map(function(skill){return { type : "skill", field : skill, mod : "max(Wis|1)", text : "I can add my Wisdom modifier to any Charisma check I make (minimum of +1)." };}),
		},
		"subclassfeature11.1" : {
			name : "Gate of Spirit",
			source : [["RGttYR", 180]],
			minlevel : 11,
			description : "[2 ki/focus point]" + desc([
				"As a bonus action, I can touch one willing creature and expend 2 ki/focus points to grant them THP qual my PB + WIS mod (min 1)",
				"They can immediately use their reaction to make a single weapon attack, dodge, or move up to half their speed without provoking OA"
			]),
		action: [["bonus action", ""]],
		},
		"subclassfeature11.2" : {
			name : "Gate of Mind",
			source : [["RGttYR", 180]],
			minlevel : 11,
			description : desc([
				"I can cast the Telepathic Bond spell, requiring no componetns, recovers on a short or long rest"
			]),
			extraLimitedFeatures: [{
				name : "Telepathic Bond",
				source : [["RGttYR", 180]],
 				usages: "1",
  				recovery: "short rest",
 			}],
		},
		"subclassfeature17" : {
			name : "Gate of Infinity",
			source : [["RGttYR", 180]],
			minlevel : 17,
			description : "[6 ki/focus point]" + desc([
				"As an action, I can use 6 ki points to transcend to a state of apotheosis with benefits"
				]),
			action : [["action", ""]],
			toNotesPage: [{
				name : "State of Apotheosis",
				source : [["RGttYR", 180]],
				note: " [6 ki points]" + desc([
					"As an action, I can use 6 ki points to transcend to a state of apotheosis, with extra benefits:",
					" \u2022 My walking speed increases by 20 ft",
					" \u2022 I gain a +2 bonus to my armor class",
					" \u2022 When I take the Attack action, I can make one additional unarmed strike as part of that action",
					" \u2022 I add my WIS mod to my attack and damage rolls",
					"This lasts for 1 minute"
				])
			}],
		},
}});

// Paladin Subclasses
AddSubClass("paladin", "oath of the yojimbo", {
	regExpSearch : /^(?=.*paladin)(?=.*yojimbo).*$/i,
	subname : "Oath of the Yojimbo",
	source : [["RGttYR", 183]],
	spellcastingExtra : ["heroism", "sanctuary", "earthskin", "warding bond", "spirit guardians", "switcheroo", "death ward", "steelskin", "bakuryo’s blessed blizzard", "wall of force" ],
	features : {
		"subclassfeature3.1" : {
			name : "Channel Divinity: Holy Ward",
			source : [["RGttYR", 183]],
			minlevel : 3,
			description : desc([
				"I can use my Channel Divinity to perform a 1-minute divine ritual of protection, dedicating myself to the service of a willing creature that stays within 30 feet of me during the entire ritual. The target becomes my ward for the next 24 hours, until I use this feature again, or until it dies. For the duration, my ward is immune to the frightened condition while I am conscious and within 60 feet of it. In addition, when my ward hits an enemy I can see with a weapon attack while within 60 feet of me, I can use a reaction and expend one spell slot to cause the attack to deal extra radiant damage to the target. The extra damage is 2d8 for a 1st-level spell slot, plus 1d8 for each spell level higher than 1st, to a maximum of 5d8.",
			]),
		},
		"subclassfeature3.2" : {
			name : "Channel Divinity: Guardian’s Intervention",
			source : [["RGttYR", 183]],
			minlevel : 3,
			description : desc([
				"As a reaction, I can use my Channel Divinity to reduce the damage dealt by an attack to a creature I can see within 30 feet of me. When I do so, the damage the creature takes is reduced by a number of d10s equal to half my paladin level. If this feature reduces that damage to 0, the creature I protected can immediately use its reaction to make one weapon attack against the creature that attacked it.",
			]),
			action : ["reaction", "Guardian’s Intervention"],
		},
		"subclassfeature7" : {
			name : "Daring Protector",
			source : [["RGttYR", 183]],
			minlevel : 7,
			description : desc([
				"My divine power flows out from me. When an ally within 10 feet of me becomes the target of a melee attack, I can use my reaction to move up to my speed towards the attacker. If I end my movement within 5 feet of the attacker, I force it to target me with the attack instead. At 18th level, the range of this feature increases from 10 feet to 30 feet.",
			]),
			action : ["reaction", "Daring Protector"],
		},
		"subclassfeature15" : {
			name : "True Guardian",
			source : [["RGttYR", 183]],
			minlevel : 15,
			description : desc([
				"I am a master at providing aid in battle. I can take the Help action or use my Lay on Hands feature as a bonus action. In addition, when I take the Help action, the creature I helped can add my Charisma modifier (minimum of +1) to the next attack roll or ability check it makes within the next minute.",
			]),
			action : [["bonus action", "Help"],["bonus action", "Lay on Hands"]],
		},
		"subclassfeature20" : {
			name : "Ultimate Protector",
			source : [["RGttYR", 183]],
			minlevel : 20,
			description : desc([
				"As an action, I become an avatar of protection, gaining the following benefits for 1 minute or until I am incapacitated."
				]),
			action : [["action", ""]],
			usages : 1,
			recovery : "long rest",
			toNotesPage: [{
				name : "Ultimate Protector",
				source : [["RGttYR", 183]],
				note: desc([
					"As an action, I become an avatar of protection, gaining the following benefits for 1 minute or until I am incapacitated:",
					" \u2022 Creatures of my choice other than myself that are within 10 feet of me have a +3 bonus to AC.",
					" \u2022 If the creature I have designated as my ward with Holy Ward falls to 0 hit points while within 60 feet of me, I can use my reaction to cause it to fall to 1 hit point instead.",
					" \u2022 My melee weapon attacks deal an extra 2d8 radiant damage while my ward is within 60 feet of me.",
					" \u2022 I can use Guardian’s Intervention without expending a use of my Channel Divinity.",
					"Once I use this feature, I can’t use it again until I finish a long rest, unless I expend a 5th-level spell slot to use it again."
				])
			}],
		},
}});

// Ranger Subclasses
AddSubClass("ranger", "ronin", {
	regExpSearch : /^(?=.*ranger)(?=.*ronin).*$/i,
	subname : "Ronin",
	source : [["RGttYR", 184]],
	spellcastingExtra : ["expeditious retreat", "blur", "remove curse", "death ward", "legend lore"],
	features : {
		"subclassfeature3" : {
			name : "Masterless",
			source : [["RGttYR", 185]],
			minlevel : 3,
			description : desc([
				"I am a solitary warrior, shackled by no code or authority beyond my own. Whenever I make a saving throw to avoid or end the charmed condition on myself, roll a d6 and add the number rolled to the saving throw.",
			]),
		},
		"subclassfeature7" : {
			name : "Cleaving Parry",
			source : [["RGttYR", 185]],
			minlevel : 7,
			description : desc([
				"When a creature makes a weapon attack against me while I have a stowed melee weapon and a free hand, I can use my reaction to attempt to parry that blow, drawing my stowed weapon as I do so. My AC increases by an amount equal to my Dexterity or Strength modifier (my choice) against that attack, and I gain temporary hit points equal to my proficiency bonus + my Wisdom modifier (minimum of 1). After the attack hits or misses, I  can then stow that weapon as a part of this reaction.",
			]),
			action : ["reaction", "Cleaving Parry"],
		},
		"subclassfeature11" : {
			name : "Multi-Weapon Mastery",
			source : [["RGttYR", 185]],
			minlevel : 11,
			description : desc([
				"I have advantage on the first melee weapon attack I make each turn, as well as advantage on the first ranged weapon attack I make each turn. In addition, being within 5 feet of a hostile creature doesn’t impose disadvantage on my ranged attack rolls.",
			]),
		},
		"subclassfeature15" : {
			name : "Relentless Onslaught",
			source : [["RGttYR", 185]],
			minlevel : 15,
			description : desc([
				"The speed and ferocity of my onslaught is legendary. When I take the Attack action, each time I score a critical hit or reduce a creature to 0 hit points as part of that action, I can make one additional weapon attack. I can make up to three additional attacks with this feature per turn.",
			]),
		},
}});

// Rogue Subclasses ( morepurplemorebetter (Joost) did the spellcasting part) 
AddSubClass("rogue", "tamaya", {
	regExpSearch : /^(?=.*rogue)(?=.*tamaya).*$/i,
	subname : "Tamaya",
	source : [["RGttYR", 186]],
	spellcastingFactor : "default0", // this tells the sheet not to count this class as adding caster levels when multiclassing
	spellcastingKnown : {
		// We code this spellcaster as having access to all spells on their list
		cantrips : 3,
		spells : "list"
	},
	spellcastingList : {
		// A list of all the spells this class has access to. Be aware that the ones from non-official sources won't work unless I make a SpellsList entry for them (e.g. "smokescreen").
		spells : [
			// cantrips
			"prestidigitation", "smokescreen", "thaumaturgy",
			// 1st-level
			"entangle", "faerie fire", "fog cloud", "grease", "sleep",
			// 2nd-level
			"calm emotions", "darkness", "shatter", "silence", "spike growth", "web",
			// 3rd-level
			"hypnotic pattern", "mireball", "flashbang", "stinking cloud",
			// 4th-level
			"blinding radiance","confusion", "ice storm", "wall of fire",
			// 5th-level
			"cloudkill", "eruption", "insect plague", "mass cure wounds",
			]
	},
	spellcastingTable : [
		// This table tricks the sheet in showing the rights spells at the right level
		[0, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 0
		[0, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 1
		[0, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 2
		[null, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 3 - access to level 1 spells
		[null, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 4
		[0, null, 0, 0, 0, 0, 0, 0, 0], //lvl 5 - access to level 2 spells
		[0, null, 0, 0, 0, 0, 0, 0, 0], //lvl 6
		[0, null, 0, 0, 0, 0, 0, 0, 0], //lvl 7
		[0, null, 0, 0, 0, 0, 0, 0, 0], //lvl 8
		[0, 0, null, 0, 0, 0, 0, 0, 0], //lvl 9 - access to level 3 spells
		[0, 0, null, 0, 0, 0, 0, 0, 0], //lvl10
		[0, 0, null, 0, 0, 0, 0, 0, 0], //lvl11
		[0, 0, null, 0, 0, 0, 0, 0, 0], //lvl12
		[0, 0, 0, null, 0, 0, 0, 0, 0], //lvl13 - access to level 4 spells
		[0, 0, 0, null, 0, 0, 0, 0, 0], //lvl14
		[0, 0, 0, null, 0, 0, 0, 0, 0], //lvl15
		[0, 0, 0, null, 0, 0, 0, 0, 0], //lvl16
		[0, 0, 0, 0, null, 0, 0, 0, 0], //lvl17 - access to level 5 spells
		[0, 0, 0, 0, null, 0, 0, 0, 0], //lvl18
		[0, 0, 0, 0, null, 0, 0, 0, 0], //lvl19
		[0, 0, 0, 0, null, 0, 0, 0, 0]  //lvl20
	],
	abilitySave : 4,
	features : {
		"subclassfeature3.1" : {
			name : "Pyrotechnician",
			source : [["RGttYR", 186]],
			minlevel : 3,
			description : desc([
				"I am adept at crafting explosives and pyrotechnics from simple ingredients. I gain proficiency with magitech firearms, as well as with two artisan’s tools of my choice.",
				]),
			weaponProfs : [false, false, ["magitech firearms"]],
			toolProfs: ["(1/2) artisan’s tool of my choice", "(2/2) artisan’s tool of my choice"],
		},
		"subclassfeature3.2" : {
			name : "Spellbombs",
			source : [["RGttYR", 186]],
			minlevel : 3,
			description : desc([
				"I have mastered the skill of crafting tiny orbs that, using natural chemicals and sophisticated mechanisms, can replicate magical effects: spellbombs. I have a unique resource I use to craft these bombs: hanabi points. I have a number of hanabi points equal to my rogue level, and I regain all expended points when I finish a long rest.",
				"Over the course of 10 minutes, I can choose one spell from the Tamaya Spellbombs table and store its effects within an armed, nonmagical spellbomb. Constructing a spellbomb also expends hanabi points, as shown in the Tamaya Spellbombs table. Spellbombs weigh half a pound, and disintegrate harmlessly when their creator finishes a long rest.",
				"A creature can use its bonus action to throw a spellbomb up to 60 feet. They are harmless unless detonated. I can use a reaction at any time to detonate a spellbomb that I created whenever it is within 60 feet of me. When a spellbomb detonates, the spell contained within comes into effect, centred on the point at which the spellbomb detonated. If that spell requires concentration, it lasts for the full duration or until it is dispelled.",
				"Spellbomb Ability. Intelligence is my ability for my spellbombs. I use my Intelligence whenever a spellbomb’s effect refers to my spellcasting ability. In addition, I use my Intelligence modifier when setting the saving throw DC for a spellbomb I detonate.",
				"Spellbomb save DC = 8 + my proficiency bonus + my Intelligence modifier",
				]),
			weaponProfs : [false, false, ["magitech firearms"]],
			toolProfs: ["(1/2) artisan’s tool of my choice", "(2/2) artisan’s tool of my choice"],
			// Set the first column's title to "#" for the Hanabi Point Cost. Can change this to any 1- or 2-letter value you want.
            			            // This function sets the number of Hanabi Points Costs to the first column
			calcChanges : {
				spellAdd : [
					function (spellKey, spellObj, spName, isDuplicate) {
						if (spName === "rogue" && !isDuplicate) {
							spellObj.firstCol = spellObj.level ? Math.round(spellObj.level * 2 - 1) : "0";
							spellObj.components = "M"; // only the spellbomb
							spellObj.compMaterial = "A spellbomb"; // only the spellbomb
							spellObj.duration = spellObj.duration.replace(/conc, /i, ''); // remove concentration
							spellObj.time = "1 rea"; // always reaction to activate
							spellObj.range = "60 ft"; // always 60 ft
						}
					}
				]
			},
			usages : levels.map(function (n) {
				return n < 3 ? "" : n;
			}),
			recovery : "long rest",
			additional : "Hanabi Points",
			// This eval makes sure the three cantrips are immediately selected
			eval : function() {
				if (CurrentSpells.rogue) {
					CurrentSpells.rogue.selectCa = ["prestidigitation", "smokescreen", "thaumaturgy"];
				}
			},
		"subclassfeature9" : {
			name : "Initiative Shift",
			source : [["RGttYR", 186]],
			minlevel : 9,
			description : desc([
				"I am adept at using sound, light, and smoke to get the drop on my enemies. When I roll initiative, I can use my reaction to throw out a disorienting barrage of flashbangs and smoke at a point within 60 feet of me. Each creature of my choice within a 20-foot-radius sphere centered on that point must make a Wisdom saving throw against my spellbomb save DC. On a failed save, a creature takes a -10 penalty to its initiative roll.",
			]),
			action : ["reaction", ""],
		},
		"subclassfeature13" : {
			name : "Spellbomb Adept",
			source : [["RGttYR", 187]],
			minlevel : 13,
			description : desc([
				"Through extensive exposure to the raw, volatile components of spellbombs, I am inured to their worst effects. I am immune to damage from my own spellbombs and automatically succeed on saving throws to resist their effects. In addition, I can use an action to detonate a spellbomb that I created that is within 1,000 feet of me.",
			]),
		},
		"subclassfeature17" : {
			name : "Hanabi Primer",
			source : [["RGttYR", 187]],
			minlevel : 17,
			description : desc([
				"As an action, I can expend 3 hanabi points to set and conceal a special explosive spellbomb either upon a surface (such as a table, a section of floor, or a wall) or within an object that can be closed (such as a book or a chest). The spellbomb is nearly invisible and requires a successful Intelligence (Investigation) check (DC equals 8 + my proficiency bonus + my Dexterity modifier) to be found. I decide what triggers the bomb to detonate when I create it. Typical triggers include touching or standing on the bomb, removing an object covering it, approaching within a certain distance of the bomb, or manipulating the object that holds the bomb.",
				"I can further refine the trigger so the bomb detonates only under certain circumstances or according to physical characteristics (such as height or weight), creature type or kind (for example, the bomb could be set to detonate in the presence of Aberrations or drow), or alignment. I can designate a number of creatures equal to my proficiency bonus to not trigger the bomb under these circumstances when I set it.",
				"When triggered, the spellbomb detonates with deafening force in a 20-foot-radius sphere. The sphere spreads around corners. Each creature in the s8phere must make a Dexterity saving throw against my spellbomb save DC. A creature takes 6d6 thunder damage and 6d6 acid, fire, lightning, or poison damage (my choice when I set the spellbomb) on a failed save, or half as much damage on a successful one.",
				"When I create a hanabi primer, any previous primers I have created using this feature disintegrate harmlessly. Once I use this feature, I can’t do so again until I finish a long rest.",
			]),
			action : ["action", "Hanabi Primer (3 Points)"],
		},
                         }}});



// Sorcerer Subclasses
AddSubClass("sorcerer", "spirit caller", {
	regExpSearch : /^(?=.*sorcerer)(?=.*spirit)(?=.*caller).*$/i,
	subname : "Spirit Caller",
	source : [["RGttYR", 188]],
	spellcastingExtra : ["command", "mage armor", "minor illusion", "aid", "mirror image", "plant growth", "phantom steed", "banishment", "guardian of faith", "reincarnate" , "seeming" , "astral projection"],
	spellcastingExtraApplyNonconform: true,
	features : {
		"subclassfeature1.1" : {
			name : "Conduit of the Soul",
			source : [["RGttYR", 188]],
			minlevel : 1,
			action : ["action", ""],
			recovery : "short rest",
			usages : 1,
			description : desc([
				"I can use an action to manifest my spirit, which appears in an unoccupied space within 30 feet of me. It uses the manifested spirit stat block, which uses my proficiency bonus (PB) in several places. While manifested, my spirit shares my initiative count, but it takes its turn immediately after mine. As a bonus action, I can command it to take the Attack action on its next turn; otherwise, it takes the Dodge or Help action (my choice). My spirit remains manifested for 10 minutes, until it is reduced to 0 hit points, or until I lose my concentration, as if concentrating on a spell. I add my Charisma modifier to saving throws I make to maintain concentration on my manifested spirit. After this time, my spirit retreats back into me and disappears. I can use this feature twice. I regain expended uses when I finish a short or long rest.",
			]),
			creaturesAdd: [["Manifested Spirit"]],
			creatureOptions: [{
				name: "Manifested Spirit",
				source: [["RGttYR", 188]],
				size: [4,5],
				type: "Fey",
				alignment: "",
				ac: "13+Prof",
				hp: 10,
				hd: [],
				speed: "30 ft, fly 20 ft (hover)",
				scores: [14, 16, 16, 9, 15, 12],
				passivePerception: "12 + Prof",
				languages: "understands the languages I speak",
				senses: "darkvision 30 ft",
				challengeRating: "2",
				proficiencyBonus: 2,
				proficiencyBonusLinked: true,
				attacksAction: 1,
				attacks: [{
					name: "Spirit Grasp",
              				ability: 1,
          				damage: [1, 8, "necrotic/radiant"],
					range: "5 ft",
					description: "",
					modifiers: ["", "Prof"],
					abilitytodamage: false,
					useSpellMod: "sorcerer",
				},{
					name: "Spirit Rend",
              				ability: 1,
          				damage: [1, 6, "necrotic/radiant"],
					range: "60 ft",
					description: "",
					modifiers: ["", "Prof"],
					abilitytodamage: false,
					useSpellMod: "sorcerer",
				}],
				features: [{
					name: "Summoner",
					description:
						"The manifested spirit obeys the commands of its creator and has the same proficiency bonus. It takes its turn immediately after its summoner, on the same initiative count. The manifested spirit has a challenge rating equal to my proficiency bonus.",
				},{
					name: "Detect",
					description:
						"As a bonus action, the spirit can make a Wisdom (Perception) check.",
				}],
				traits: [{
					name: "Multiattack",
					description:
						"The spirit makes a number of attacks equal to half my proficiency bonus (rounded down).",
				}],
				skills : {
					"Intimidation": 3,
					"Stealth" : 5,
					"Perception" : 4,
				},
				header : "Manifested Spirit",
				calcChanges : {
					hp : function (totalHD, HDobj, prefix) {
						if (!classes.known.sorcerer) return;
						var sorcLvl = classes.known.sorcerer.level;
						var sorcLvl5 = 5 * sorcLvl;
						HDobj.alt.push(5 + sorcLvl5);
						HDobj.altStr.push(" = 10 as a base\n + 5 \xD7 " + sorcLvl + " from five times its creator's sorcerer level (" + sorcLvl5 + ")");
					},
					setAltHp : true
				},
			}],
		},
		"subclassfeature6.1" : {
			name : "Spirit Synchronicity",
			source : [["RGttYR", 188]],
			minlevel : 6,
			description : desc([
				"Spells I cast that don’t have a range of self can originate from my manifested spirit, instead of me, if it is within 120 feet of me.",
			]),
		},
		"subclassfeature6.2" : {
			name : "Spirit Empowerment",
			source : [["RGttYR", 189]],
			minlevel : 6,
			description : desc([
				"When I manifest my spirit using my Conduit of the Soul feature, I can expend any number of sorcery points. When I do, choose one boon from the following list for each point I expend. My manifested spirit gains these boons until it disappears. I can’t select the same boon more than once at the same time, unless stated otherwise.",
			]),
			toNotesPage: [{
				name: "Spirit Empowerment",
				source : [["RGttYR", 189]],
				note: desc([
					"When I manifest my spirit using my Conduit of the Soul feature, I can expend any number of sorcery points. When I do, choose one boon from the following list for each point I expend. My manifested spirit gains these boons until it disappears. I can’t select the same boon more than once at the same time, unless stated otherwise.",
					" \u2022 Resistance. My spirit gains resistance to one damage type of my choice. I can select this boon up to a number of times equal to my proficiency bonus.",
					" \u2022 Extended Stay. The maximum amount of time my spirit can remain manifested increases by 10 minutes. I can select this boon up to a number of times equal to my proficiency bonus.",
					" \u2022 Enlarge. My spirit’s size increases by one category. Its reach increases by 5 feet, and its melee attacks deal an extra 1d8 damage of the attack’s type on a hit.",
					" \u2022 Teleporter. My spirit can use its bonus action to teleport up to 30 feet to an unoccupied space it can see.",
					" \u2022 Frenzy. My spirit has advantage on all melee attack rolls, but attack rolls made against it have advantage.",
					" \u2022 Detonator. When my spirit is reduced to 0 hit points or I lose concentration on it, each creature of my choice within 20 feet of it must succeed on a Dexterity saving throw against my sorcerer spell save DC or take necrotic or radiant damage (my choice on detonation) equal to 2d10 + my sorcerer level.",
					" \u2022 Of One Mind. I can use a bonus action to see through my spirit’s eyes and hear what it hears until the start of my next turn. During this time, I am deaf and blind with regard to my own senses.",
					" \u2022 Devil’s Sight. My spirit can see in dim light and darkness, both magical and nonmagical, to a distance of 120 feet.",
					" \u2022 Enhanced Agility. My spirit’s speed is doubled.",
					" \u2022 Battlefield Squire. After my spirit takes the Help action, it can use a bonus action on that turn to take the Disengage or Dodge action.",
				]),
			}],
		},
		"subclassfeature14" : {
			name : "Explosive Emergence",
			source : [["RGttYR", 190]],
			minlevel : 14,
			description : desc([
				"When I use a bonus action to command my spirit on the same turn it’s summoned, I can have it take one additional action on its first turn. In addition, I gain any damage resistances that my manifested spirit has for the duration of its manifestation.",
			]),
		},
		"subclassfeature18" : {
			name : "Final Form Manifestation",
			source : [["RGttYR", 190]],
			minlevel : 18,
			description : desc([
				"I no longer need to maintain concentration on my manifested spirit. I can cause it to disappear at any time (no action required). I imbue my spirit with further power. When I manifest my spirit, I can choose one additional boon without spending a sorcery point to gain it. In addition, when summoned, I can choose for my spirit’s base size to be Medium or Large. If manifested as a Large spirit, the reach of its Spirit Grasp attack increases by 5 feet.",
			]),
		},
}});

// Warlock Subclasses
AddSubClass("warlock", "the shinigami", {
	regExpSearch : /^(?=.*warlock)(?=.*shinigami).*$/i,
	subname : "the Shinigami",
	source : [["RGttYR", 203]],
	spellcastingExtra : ["see future death", "sleep", "blindness/deafness", "lifesap aura", "animate dead", "speak with dead", "death ward", "greater invisibility", "animate objects", "dominate person" ],
	features : {
		"subclassfeature1.1" : {
			name : "Grim Puppeteer",
			source : [["RGttYR", 203]],
			minlevel : 1,
			action : ["bonus action", ""],
			recovery : "long rest",
			usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
			description : desc([
				"As a bonus action, I can control an unconscious creature/corpse of a certain size and CR within 60 ft for 10 minutes or until concentration is lost",
			]),
			additional: levels.map(function (n) {
				if (n < 1) return "";
				return "Up to " + (n < 6 ? "Large" : n < 14 ? "Huge" : "Gargantuan") + "; See Notes";
			}),
			toNotesPage: [
      			{
				name: "Grim Puppeteer",
				source : [["RGttYR", 203]],
				note: desc([
					"As a bonus action, I can control an unconscious creature/corpse of a certain size and CR within 60 ft for 10 minutes or until concentration is lost",
					"The target must be Large or Smaller & of a CR less than or equal to my warlock lvl (or the CR it had in life if it is a corpse)",
					"The size of target I can control with this feature increases to Huge at 6th lvl and Gargantuan at 14th lvl",
					"The target uses its own stat block with the following changes:",
					" \u2022 It is treated as an Undead if it is a corpse",
					" \u2022 It can't gain HP or recover from the unconscious condition",
					" \u2022 It gains THP equal to my Charisma Mod + 5 * Warlock lvl",
					" \u2022 It can use my spellcasting ability modifier for its attack and damage rolls",
					"When its THP is depleted, my control ends and I cannot use this feature on the same target until I finish a long rest. If the target was unconscious and has more than 0 HP, it regains consciousness when my control ends",
					" The puppet takes its turn immediately after mine and does nothing unless I use a bonus action to command it on my turn to take an action. The action can be one in its stat block or another action",
					"Limited Control. The puppet cannot cast spells, or use any reactions, legendary actions, any lair actions, and any actions that create or summon additional creatures",
					"I can use this feature a number of times equal my CHA mod (min 1), and regain all expended uses on a long rest. If I have no more uses, I can isntead expend a spell slot from my Pact Magic to activate it",
				]),
			}],
		},
		"subclassfeature1.2" : {
			name : "Shinigami Vision",
			source : [["RGttYR", 204]],
			minlevel : 1,
			description : desc([
				"As a bonus action, I can focus on one creature that I can see within 60 ft and become aware of one of its damage vulnerabilities (if any) and one of its damage resistances or damage immunities (if any)",
			]),
			action : ["bonus action", ""],
		},
		"subclassfeature6" : {
			name : "Gift of the Psychopomp",
			source : [["RGttYR", 204]],
			minlevel : 6,
			description : desc([
				"While pupperterring a target using my Grim Puppeteer feature, I can make any spell I cast that targets only me also target my puppet",
			]),
		},
		"subclassfeature10" : {
			name : "Shinigami Domination",
			source : [["RGttYR", 204]],
			minlevel : 10,
			description : desc([
				"I develope the power of precise and meticulous control over my puppets, gaining some benefits and improved uses to my puppet",
			]),
			additional: "See Notes",
			toNotesPage: [{
				name : "Shinigami Domination",
				source : [["RGttYR", 204]],
				note : desc([
				"I can see, hear, and speak through my Grim Puppet using their senses. I can now puppeteer a creatuer for up to one hour or until I lose concentration",
				"A creature interacting with my puppet can use an action to make a WIS (insight) vs my Spell Save DC, identifying something awry on a success",
				"Additionally, my puppet has resistance to nonmagical, non silvered bludgeoning, piercing, and slashing damage",
				]),
			}],
		},
		"subclassfeature14" : {
			name : "Master of Death",
			source : [["RGttYR", 204]],
			minlevel : 14,
			description : desc([
				"When I am reduced to 0 HP, I don't fall unconscious. Instead, my spirit is thrown from my physical form and puppets my own body",
				"Whilst this happens, I can't puppet another creature, I don't make death saving throws, taking damage doesn't result in a failed death save, and I gain THP = CHA mod + 5 * Warlock lvl",
				"My spirit returns to my body immediately if I gain at least one HP",
				"If my THP is depleted, the feature ends and my spirit returns to my body and I fall unconscious",
			]),
			extraLimitedFeatures : [{
				name : "Master of Death",
				usages : 1,
				recovery : "long rest",
			}],
		},	
	},
});


// Wizard Subclasses
AddSubClass("wizard", "shinobi", {
	regExpSearch : /^(?=.*wizard)(?=.*shinobi).*$/i,
	subname : "Shinobi",
	source : [["RGttYR", 205]],
	features : {
		"subclassfeature2.1" : {
			name : "Shinobi Training",
			source : [["RGttYR", 205]],
			minlevel : 2,
			description : desc([
				"I gain proficiency with light armour, hand crossbows, thrown weapons, and finesse weapons; I gain proficiency with the Stealth skill; and I can use a weapon I am proficient with as my spellcasting focus. Finally, I gain darkvision out to 60 feet, or if I already have darkvision, its range is increased by 30 feet.",
				]),
			armor : [true, false, false, false,],
			weaponProfs : [false, false, ["hand crossbows", "thrown weapons", "finesse weapons"]],
			skills : ["Stealth"],
			vision : [["Darkvision", "fixed 60"], ["Darkvision", "+30"]],			
		},
		"subclassfeature2.2" : {
			name : "Shadow Striker",
			source : [["RGttYR", 205]],
			minlevel : 2,
			description : desc([
				"I have learned the art of synchronising spellcasting and weaponry. Immediately after I hit a creature with a weapon attack on my turn, I can use a bonus action and expend one spell slot to deal extra damage to that target, equal to 1d8 damage per level of the spell slot expended. I can then perform one of the following techniques as a part of that bonus action:",
				" \u2022 Cloud of Shadow. I create a small cloud of magical darkness, heavily obscuring the space I am currently occupying. This darkness lasts for 1 minute, and it ends early if I am knocked unconscious. A creature with darkvision can’t see through this darkness, and nonmagical light can’t illuminate it.",
				" \u2022 Enervating Touch. The sting of my blow magically saps the target’s strength. The target must succeed on a Constitution saving throw against my wizard spell save DC or take an extra 1d8 poison damage and be poisoned until the end of my next turn.",
				" \u2022 Shadow Vanishing. I spend 10 feet of movement to teleport to an area of dim light or darkness I can see within 30 feet of me.",
				" \u2022 Shadow Ward. Choose one damage type other than force or radiant. I gain resistance to that damage type until the start of my next turn.",
			]),
			action : ["bonus action", ""],
		},
		"subclassfeature6" : {
			name : "Extra Attack",
			source : [["RGttYR", 206]],
			minlevel : 6,
			description : desc([
				"I can attack twice rather than once when I take the Attack action on my turn. In addition, magical darkness doesn’t impede my vision."
			])
		},
		"subclassfeature10" : {
			name : "Umbral Striker",
			source : [["RGttYR", 206]],
			minlevel : 10,
			description : desc([
				"My command of shadow magic further enhances my lethal capabilities. I can now also choose from the following options when I use my Shadow Striker feature, but only if I empower my attack with a spell slot of 3rd level or higher.",
				" \u2022 Duplicitous Strike. I move in a blur, sprouting magical images in the mind of my target. The target takes an extra 1d8 psychic damage, and it sees illusory duplicates of me until the end of its next turn. Whenever it targets me with an attack, it must roll a d4. On a 1-3, it targets a duplicate instead and the attack misses.",
				" \u2022 Rapid Strikes. I magically strike with blistering speed. Make a weapon attack against a target within range. On a hit, that attack deals an extra 2d8 force damage.",
				" \u2022 Vanish. A shimmering veil of abjuration magic bursts into existence around me. I gain 2d8 temporary hit points. In addition, I turn invisible until the end of my next turn. While invisible in this way, spells I cast don’t require any verbal or somatic components.",
			]),
		},
		"subclassfeature14" : {
			name : "Shadow Savant",
			source : [["RGttYR", 206]],
			minlevel : 14,
			description : desc([
				"The shadows are my eager servants. When another creature I can see moves into an area that is heavily obscured from an effect I have magically created or starts its turn there, I can force it to make a Strength saving throw against my wizard spell save DC (no action required). On a failure, the creature is restrained until the start of its next turn. A creature can be forced to make this saving throw no more than once per turn."
			])
		},
}});


/*
 * Weapons
 */

// Chakram
WeaponsList["chakram"] = {	
	name : "Chakram",
	source : [["RGttYR", 76]],	
	regExpSearch : /^(?=.*chakram).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 4, "slashing"],
	range : "Melee, 30/90 ft",
	description : "Finesse, light, thrown (range 30/90), thrown Versatility (1d6)",
	list : "melee",
	weight : 1,
	monkweapon : true,
};

// Claw
WeaponsList["claw"] = {	
	name : "Claw",
	source : [["RGttYR", 76]],	
	regExpSearch : /^(?=.*claw).*$/i,
	type : "Simple",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 6, "slashing"],
	range : "Melee",
	description : "Attached, light",
	list : "melee",
	weight : 2,
};

// Kusarigama
WeaponsList["kusarigama"] = {	
	name : "Kusarigama",
	source : [["RGttYR", 76]],	
	regExpSearch : /^(?=.*kusarigama).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 4, "slashing"],
	range : "Melee",
	description : "Versatile (1d6), special: counterweight",
	list : "melee",
	weight : 2,
	monkweapon : true,
	action : [["bonus action", "Counterweight"]],
	toNotesPage: [{
		name : "Features",
		page3notes: true,
     	  	note : [
			"Kusarigama are martial melee weapons consisting of a sickle attached to a heavy counterweight by a metal chain. They deal 1d4 slashing damage on a hit, count as monk weapons, and have the Versatile (1d6) property. They also have the Special: Counterweight property. Due to the increased reach of this Special property, kusarigama count as having the Scourge property for the purposes of advanced weapon mastery (see page 83).",
			"\u2022 Special: Counterweight. While wielding a kusarigama with two hands, I can use a bonus action to attack with its counterweight. This attack has a reach of 10 feet and deals 1d4 bludgeoning damage on a hit. I don’t add my ability modifier to the damage of this attack, unless that modifier is negative.",
			],
		}],
	weaponOptions : [{
		regExpSearch : /^(?=.*kusarigama)(?=.*counterweight).*$/i,
		name : "Kusarigama Counterweight",
		source : [["RGttYR", 76]],
		ability : 1,
		type : "kusarigama counterweight",
		damage : [1, 4, "bludgeoning"],
		range : "10 ft",
		description : "Reach 10 ft, While wielding a kusarigama with two hands",
		abilitytodamage : false,
		selectNow : true
	}],
};

// Meteor Hammer
WeaponsList["meteor hammer"] = {	
	name : "Meteor Hammer",
	source : [["RGttYR", 76]],	
	regExpSearch : /^(?=.*meteor)(?=.*hammer).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 6, "bludgeoning"],
	range : "Melee",
	description : "Finesse, scourge, two-handed",
	list : "melee",
	weight : 3,
	monkweapon : true,
};

// Nunchaku
WeaponsList["nunchaku"] = {	
	name : "Nunchaku",
	source : [["RGttYR", 76]],	
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

// Odzutsu
WeaponsList["odzutsu"] = {	
	name : "Odzutsu",
	source : [["RGttYR", 76]],	
	regExpSearch : /^(?=.*odzutsu).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [2, 10, "bludgeoning"],
	range : "150/600 ft",
	description : "Ammunition, two-handed, special: long reload",
	list : "ranged",
	weight : 25,
	toNotesPage: [{
		name : "Features",
		page3notes: true,
     	  	note : [
			"Ōdzutsu are martial ranged weapons consisting of handheld cannons, traditionally made of forged iron or cast bronze. They deal 2d10 bludgeoning damage on a hit, and have the Ammunition (range 150/600), Two-handed, and Special: Long Reload properties.",
			"\u2022 Special: Long Reload. After an attack is made using this weapon, it must be reloaded. Due to the weight and size of this weapon and its ammunition, reloading the weapon takes two actions, which don’t need to be taken consecutively.",
		],
	}],
};

// Rope Dart
WeaponsList["rope dart"] = {	
	name : "Rope Dart",
	source : [["RGttYR", 77]],	
	regExpSearch : /^(?=.*rope)(?=.*dart).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 6, "piercing"],
	range : "Melee",
	description : "Finesse, scourge, two-handed",
	list : "melee",
	weight : 3,
	monkweapon : true,
};

// Sai
WeaponsList["sai"] = {	
	name : "Sai",
	source : [["RGttYR", 77]],	
	regExpSearch : /^(?=.*sai).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 4, "piercing"],
	range : "Melee",
	description : "Finesse, scourge, parry",
	list : "melee",
	weight : 1,
	monkweapon : true,
	action : [["reaction", "Parry"]],
};

// Shuriken
WeaponsList["shuriken"] = {	
	name : "Shuriken",
	source : [["RGttYR", 77]],	
	regExpSearch : /^(?=.*shuriken).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 4, "piercing"],
	range : "20/60 ft",
	description : "Finesse, light, thrown (range 20/60)",
	list : "ranged",
	weight : 0.25,
	monkweapon : true,
};

// Tessen
WeaponsList["tessen"] = {	
	name : "Tessen",
	source : [["RGttYR", 77]],	
	regExpSearch : /^(?=.*tessen).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 4, "slashing"],
	range : "Melee",
	description : "Adaptable (bludg), finesse, light, special: fan shield",
	list : "melee",
	weight : 1,
	monkweapon : true,
	toNotesPage: [{
		name : "Features",
		page3notes: true,
     	  	note : [
			"Tessen are martial melee weapons consisting of folding fans reinforced with wood or metal. The edges contain razor-sharp blades, but they can also be used as bludgeoning weapons when closed. They deal 1d4 slashing damage on a hit, count as monk weapons, and have the Adaptable (bludgeoning), Finesse, and Light properties. They also have the Special: Fan Shield property.",
			"\u2022 Special: Fan Shield. When I am hit by an attack made with a projectile that weighs less than 2 pounds, such as a thrown dagger, dart, arrow, or bullet, while holding this weapon, I can use my reaction to open the tessen and attempt to deflect the projectile. I gain a +2 bonus to AC against the triggering attack, potentially causing it to miss.",
		],
	}],
	action : [["reaction", "Fan Shield"]],	
};

// Tonfa
WeaponsList["tonfa"] = {	
	name : "Tonfa",
	source : [["RGttYR", 77]],	
	regExpSearch : /^(?=.*tonfa).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 6, "bludgeoning"],
	range : "Melee",
	description : "Light, parry",
	list : "melee",
	weight : 2,
	monkweapon : true,
};


/*
 * Magic Items
 */

// All-Terrain Leg
MagicItemsList["all-terrain leg"] = {
	name : "All-Terrain Leg",
	source : [["RGttYR", 243]],
	type : "prosthesis",
 	attunement : true,
	description : "This prosthesis can replace or enhance a leg. It has the Melee (1d6 slashing, Finesse) property and the Hamstring Superior Strike. As a bonus action, I can change the leg shape to gain a benefit.",
	action : [["bonus action", "Modular Limb"]],
	choices : ["uncommon", "rare", "very rare"],
	"uncommon" : {
		name : "Uncommon All-Terrain Leg",
		rarity : "uncommon",
		description : "This prosthesis can replace or enhance a leg. It has the Melee (1d6 slashing, Finesse) property and the Hamstring Superior Strike. As a bonus action, I can change the leg shape to gain a benefit.",
		descriptionFull :
			"\n" + toUni("Prosthesis Properties.") + " This prosthesis can replace or enhance a leg. It has the Melee (1d6 slashing, Finesse) property and the Hamstring Superior Strike." +
			"\n" + toUni("Modular Limb.") + " As a bonus action while wearing this prosthesis, I can change it into one of the following forms, each of which grants a different benefit, or back into a regular leg shape:" +
			"\n \u2022" + toUni("Blade.") + " My walking speed increases by 5 feet." +
			"\n \u2022" + toUni("Claw.") + " I gain a climbing speed equal to my walking speed." +
			"\n \u2022" + toUni("Fin.") + " I gain a swimming speed equal to my walking speed.",
		weaponOptions : {
			name : "Uncommon All-Terrain Leg",
			source : [["RGttYR", 243]],
			regExpSearch : /^(?=.*all-terrain)(?=.*leg).*$/i,
			type : "Martial",
			ability : 1,
			abilitytodamage : true,
			damage : [1, 6, "slashing"],
			range : "Melee",
			description : "Finesse, hamstring superior strike",
			selectNow : true,
		},	
	},
	"rare" : {
		name : "Rare All-Terrain Leg",
		rarity : "rare",
		description : "This prosthesis can replace or enhance a leg. It has the Melee (1d6 slashing, Finesse) property, the Hamstring Superior Strike, and gives a +1 bonus to attacks and damage made with it. As a bonus action, I can change the leg shape to gain a benefit.",
		descriptionFull :
			"\n" + toUni("Prosthesis Properties.") + " This prosthesis can replace or enhance a leg. It has the Melee (1d6 slashing, Finesse) property and the Hamstring Superior Strike." +
			"\n" + toUni("Modular Limb.") + " As a bonus action while wearing this prosthesis, I can change it into one of the following forms, each of which grants a different benefit, or back into a regular leg shape:" +
			"\n \u2022" + toUni("Blade.") + " My walking speed increases by 5 feet." +
			"\n \u2022" + toUni("Claw.") + " I gain a climbing speed equal to my walking speed." +
			"\n \u2022" + toUni("Fin.") + " I gain a swimming speed equal to my walking speed.",
		weaponOptions : {
			name : "Rare All-Terrain Leg, +1",
			source : [["RGttYR", 243]],
			regExpSearch : /^(?=.*all-terrain)(?=.*leg).*$/i,
			type : "Martial",
			ability : 1,
			abilitytodamage : true,
			damage : [1, 6, "slashing"],
			range : "Melee",
			description : "Finesse, hamstring superior strike",
			selectNow : true,
		},	
	},
	"very rare" : {
		name : "Very Rare All-Terrain Leg",
		rarity : "very rare",
		description : "This prosthesis can replace or enhance a leg. It has the Melee (1d6 slashing, Finesse) property, the Hamstring Superior Strike, and gives a +1 bonus to attacks and damage made with it. As a bonus action, I can change the leg shape to gain a benefit, this variant gets additional benefits",
		descriptionFull :
			"\n" + toUni("Prosthesis Properties.") + " This prosthesis can replace or enhance a leg. It has the Melee (1d6 slashing, Finesse) property and the Hamstring Superior Strike." +
			"\n" + toUni("Modular Limb.") + " As a bonus action while wearing this prosthesis, I can change it into one of the following forms, each of which grants a different benefit, or back into a regular leg shape:" +
			"\n \u2022" + toUni("Blade.") + " My walking speed increases by 5 feet, and attacks made with the prosthesis deal an extra 1d4 slashing damage on a hit." +
			"\n \u2022" + toUni("Claw.") + " I gain a climbing speed equal to my walking speed and advantage on saving throws to resist being moved against my will while standing or climbing a surface." +
			"\n \u2022" + toUni("Fin.") + " I gain a swimming speed equal to my walking speed, and can dash as a bonus action underwater.",
		weaponOptions : {
			name : "Very Rare All-Terrain Leg, +1",
			source : [["RGttYR", 243]],
			regExpSearch : /^(?=.*all-terrain)(?=.*leg).*$/i,
			type : "Martial",
			ability : 1,
			abilitytodamage : true,
			damage : [1, 6, "slashing"],
			range : "Melee",
			description : "Finesse, hamstring superior strike, (blade, +1d4 slashing)",
			selectNow : true,
		},
	},
};

// Armor of the Oni King
MagicItemsList["armor of the oni king"] = {
	name : "Armor of the Oni King",
	source : [["RGttYR", 244]],
	type : "armor (medium or heavy)",
	attunement : true,
	description : "",
	action : [["action", "Oni's Aura"]],
	choices : ["rare", "very rare"],
	"rare" : {
		name : "Rare Armor of the Oni King",
		rarity : "rare",
		description : "I have +1 to AC while wearing this. Once per dawn, as an action while wearing this, each creature of my choice within 20 ft of me makes a DC 15 WIS save or be frightened of me for 1 min. If a creature fails the save by 5 or more, and isn't immune to frightened, it is paralysed until the start of their next turn. Repeat the save at the end of their turn, taking 1d6 psychic damage on a fail, or ending the effect on a success.",
		descriptionFull :
			"While wearing this armor, I gain the following benefits :"+
			"\n" + "I have a +1 bonus to AC"+
			"\n" + toUni("Oni’s Aura.") + " As an action, I can release a wave of menacing lethal intent powerful enough to make other creatures tremble with fear. Each creature of my choice within 20 feet of me must make a DC 15 WIS save or be frightened of me for 1 minute. If a creature fails the saving throw by 5 or more and isn’t immune to being frightened, it sees the ghostly image of an enormous oni materialising behind me and is also paralysed until the end of its next turn. A creature frightened in this way must repeat the saving throw at the end of each of its turns, taking 1d6 psychic damage on a failure, or ending the effect on itself on a success. Once this property of the item has been used, it can’t be used again until the next dawn.",
		chooseGear : {
			type : "armor",
			prefixOrSuffix : "brackets",
			excludeCheck : function (inObjKey, inObj) {
				return !(/medium|heavy/i).test(inObj.type);
			},
			descriptionChange : ["replace", "armor"],
			itemName1stPage : ["between", "+1", "of the Oni King"],
		},
		usages : 1,
		recovery : "dawn",
		limfeaname : "Oni's Aura (DC 15)",
	},	
	"very rare" : {
		name : "Very Rare Armor of the Oni King",
		rarity : "very rare",
		description : "I have +2 to AC while wearing this. Once per dawn, as an action while wearing this, each creature of my choice within 20 ft of me makes a DC 16 WIS save or be frightened of me for 1 min. If a creature fails the save by 5 or more, and isn't immune to frightened, it is paralysed until the start of their next turn. Repeat the save at the end of their turn, taking 2d6 psychic damage on a fail, or ending the effect on a success.",
		descriptionFull :
			"While wearing this armor, I gain the following benefits :"+
			"\n" + "I have a +2 bonus to AC"+
			"\n" + toUni("Oni’s Aura.") + " As an action, I can release a wave of menacing lethal intent powerful enough to make other creatures tremble with fear. Each creature of my choice within 20 feet of me must make a DC 16 WIS save or be frightened of me for 1 minute. If a creature fails the saving throw by 5 or more and isn’t immune to being frightened, it sees the ghostly image of an enormous oni materialising behind me and is also paralysed until the end of its next turn. A creature frightened in this way must repeat the saving throw at the end of each of its turns, taking 2d6 psychic damage on a failure, or ending the effect on itself on a success. Once this property of the item has been used, it can’t be used again until the next dawn.",
		chooseGear : {
			type : "armor",
			prefixOrSuffix : "brackets",
			excludeCheck : function (inObjKey, inObj) {
				return !(/medium|heavy/i).test(inObj.type);
			},
			descriptionChange : ["replace", "armor"],
			itemName1stPage : ["between", "+2", "of the Oni King"],
		},
		usages : 1,
		recovery : "dawn",
		limfeaname : "Oni's Aura (DC 16)",
	},
};

// Blo Staff
MagicItemsList["blo staff"] = {
	name : "Blo Staff",
	source : [["RGttYR", 245]],
	type : "staff",
	description : "This quarterstaff can also be used as a blowgun that lacks the Loading property. It has 4 charges and regains 1d4 expended charges daily at dawn.",
	weaponOptions: {
		baseWeapon: "blowgun",
		regExpSearch: /^(?=.*blo)(?=.*staff).*$/i,
		name : "Blo Staff",
		description: "Ammunition",
		selectNow : true,
	},	
	choices : ["uncommon", "rare", "very rare"],
	"uncommon" : {
		name : "Uncommon Blo Staff",
		rarity : "uncommon",
		description : "This quarterstaff can also be used as a blowgun that lacks the Loading property. It has 4 charges and regains 1d4 expended charges daily at dawn.",
		descriptionFull : 
			"This quarterstaff can also be used as a blowgun that lacks the Loading property. It has 4 charges and regains 1d4 expended charges daily at dawn." +
			"\n" + toUni("Blow Dart.") + " When I make a ranged attack using this weapon as a blowgun, I can expend 1 charge to shoot a needle loaded with one of the following poisons of my choice:" +
			"\n \u2022" + toUni("Amani Tox.") + " On a hit, a creature must make a DC 13 CON save. It takes 3d6 poison damage on a failure, or half as much damage on a success." +
			"\n \u2022" + toUni("Bo Tox.") + " On a hit, a creature must succeed on a DC 13 CON save or be poisoned until the end of my next turn. While poisoned in this way, its speed is halved.",
		usages : 4,
		recovery : "dawn",
		additional : "regains 1d4",
	},
	"rare" : {
		name : "Rare Blo Staff",
		rarity : "rare",
		description : "This quarterstaff can also be used as a blowgun that lacks the Loading property. It has 6 charges and regains 1d4 + 2 expended charges daily at dawn.",
		descriptionFull : 
			"This quarterstaff can also be used as a blowgun that lacks the Loading property. It has 6 charges and regains 1d4 + 2 expended charges daily at dawn." +
			"\n" + toUni("Blow Dart.") + " When I make a ranged attack using this weapon as a blowgun, I can expend 1 charge to shoot a needle loaded with one of the following poisons of my choice:" +
			"\n \u2022" + toUni("Amani Tox.") + " On a hit, a creature must make a DC 15 CON save. It takes 4d6 poison damage on a failure, or half as much damage on a success." +
			"\n \u2022" + toUni("Bo Tox.") + " On a hit, a creature must succeed on a DC 15 CON save or be poisoned until the end of my next turn. While poisoned in this way, its speed is 0.",	
		usages : 6,
		recovery : "dawn",
		additional : "regains 1d4+2",
	},	
	"very rare" : {
		name : "Very Rare Blo Staff",
		rarity : "very rare",
		description : "This quarterstaff can also be used as a blowgun that lacks the Loading property. It has 8 charges and regains 1d6 + 2 expended charges daily at dawn.",
		descriptionFull : 
			"This quarterstaff can also be used as a blowgun that lacks the Loading property. It has 8 charges and regains 1d6 + 2 expended charges daily at dawn." +
			"\n" + toUni("Blow Dart.") + " When my make a ranged attack using this weapon as a blowgun, I can expend 1 charge to shoot a needle loaded with one of the following poisons of my choice:" +
			"\n \u2022" + toUni("Amani Tox.") + " On a hit, a creature must make a DC 16 CON save. It takes 5d6 poison damage on a failure, or half as much damage on a success." +
			"\n \u2022" + toUni("Bo Tox.") + " On a hit, a creature must succeed on a DC 16 CON save or be poisoned until the end of my next turn. While poisoned in this way, its speed is 0. If I crit on this attack roll and the creature fails the save, they are paralysed while poisoned this way.",	
		usages : 8,
		recovery : "dawn",
		additional : "regains 1d6+2",
	},		
};

// Bonze’s Bokken, Wind Ripper
MagicItemsList["bonze’s bokken, wind ripper"] = {
	name : "Bonze’s Bokken, Wind Ripper",
	source : [["RGttYR", 245]],
	type : "weapon (any sword)",	
	attunement : true,
	description : "",
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && /^(?=.*bonze)(?=.*bokken)(?=.*wind)(?=.*ripper).*$/i.test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Damage_Type = "Bludgeoning";
				}
			},
			'If I include the word "Bonze’s Bokken, Wind Ripper" in the name of an axe, it will be treated as the magic weapon Bonze’s Bokken, Wind Ripper. It deals bludgeoning damage instead of its normal damage type.',
			1
		],
	},
	choices : ["uncommon", "rare", "very rare", "legendary"],
	"uncommon" : {
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

//Courtesan’s War Fan
MagicItemsList["courtesan’s war fan"] = {
	name : "Courtesan’s War Fan",
	source : [["RGttYR", 246]],
	type : "weapon (tessen)",
	description : "I can charm creatures with a beguiling dance. I can also attune to the item for an additional benefit.",
	choices : ["uncommon", "uncommon (optional attunement)", "very rare", "very rare (optional attunement)"],
	"uncommon" : {
		name : "Uncommon Courtesan’s War Fan",
		rarity : "uncommon",
		description : "Some assassins rely on stealth. Others, like the courtesans of the Courteous Cabal, prefer to hide in plain sight, beguiling their quarry into a stupor before finishing them off with a quick slash.",
		descriptionFull : 
			"Some assassins rely on stealth. Others, like the courtesans of the Courteous Cabal, prefer to hide in plain sight, beguiling their quarry into a stupor before finishing them off with a quick slash." +
			"\n" + toUni("Beguiling Dance.") + " As an action while holding the fan, I can begin a slow, hypnotic dance, causing the fan to glow with an ephemeral, beguiling light. Each Humanoid of my choice that I can see within 15 feet of me must succeed on a Wisdom saving throw contested by my Charisma (Performance) check or be charmed by me for 10 minutes or until I stop dancing. I must use my bonus action on subsequent turns to keep dancing, otherwise the effect ends at the end of my turn. The effect also ends early for a creature if I am ever more than 15 feet from it, or if me or my companions do anything harmful to it. When the effect ends, the creature knows it was charmed by me. Once this property has been used, it can’t be used again until the next dawn.",
		usages : 1,
		recovery : "dawn",
		limfeaname : "Beguiling Dance",
		weaponOptions: {
			baseWeapon: "tessen",
			regExpSearch: /^(?=.*courtesan)(?=.*war)(?=.*fan).*$/i,
			name : "Courtesan’s War Fan",
			selectNow : true,
		},
		action : [["action","Beguiling Dance"]],
	},
	"uncommon (optional attunement)" : {
		name : "Uncommon Courtesan’s War Fan",
		rarity : "uncommon",
		attunement : true,
		description : "Some assassins rely on stealth. Others, like the courtesans of the Courteous Cabal, prefer to hide in plain sight, beguiling their quarry into a stupor before finishing them off with a quick slash.",
		descriptionFull : 
			"Some assassins rely on stealth. Others, like the courtesans of the Courteous Cabal, prefer to hide in plain sight, beguiling their quarry into a stupor before finishing them off with a quick slash." +
			"\n" + toUni("Beguiling Dance.") + " As an action while holding the fan, I can begin a slow, hypnotic dance, causing the fan to glow with an ephemeral, beguiling light. Each Humanoid of my choice that I can see within 15 feet of me must succeed on a Wisdom saving throw contested by my Charisma (Performance) check or be charmed by me for 10 minutes or until I stop dancing. I must use my bonus action on subsequent turns to keep dancing, otherwise the effect ends at the end of my turn. The effect also ends early for a creature if I am ever more than 15 feet from it, or if me or my companions do anything harmful to it. When the effect ends, the creature knows it was charmed by me. Once this property has been used, it can’t be used again until the next dawn." +
			"\n" + toUni("Optional Attunement.") + " If I choose to attune to this item, I become proficient with it and I gain advantage on Charisma (Performance) checks I make while holding it.",
		usages : 1,
		recovery : "dawn",
		limfeaname : "Beguiling Dance",
		weaponOptions: {
			baseWeapon: "tessen",
			regExpSearch: /^(?=.*courtesan)(?=.*war)(?=.*fan).*$/i,
			name : "Courtesan’s War Fan",
			selectNow : true,
		},
		action : [["action","Beguiling Dance"]],
		advantages : [["Performance", true]],
	},
	"very rare" : {
		name : "Very Rare Courtesan’s War Fan",
		rarity : "very rare",
		description : "Some assassins rely on stealth. Others, like the courtesans of the Courteous Cabal, prefer to hide in plain sight, beguiling their quarry into a stupor before finishing them off with a quick slash.",
		descriptionFull : 
			"Some assassins rely on stealth. Others, like the courtesans of the Courteous Cabal, prefer to hide in plain sight, beguiling their quarry into a stupor before finishing them off with a quick slash." +
			"\n" + toUni("Beguiling Dance.") + " As an action while holding the fan, I can begin a slow, hypnotic dance, causing the fan to glow with an ephemeral, beguiling light. Each creature of my choice that I can see within 15 feet of me must succeed on a Wisdom saving throw contested by my Charisma (Performance) check or be charmed by me for 10 minutes or until I stop dancing. I must use my bonus action on subsequent turns to keep dancing, otherwise the effect ends at the end of my turn. The effect also ends early for a creature if I am ever more than 15 feet from it, or if me or my companions do anything harmful to it. When the effect ends, the creature knows it was charmed by me. Once this property has been used, it can’t be used again until the next dawn.",
		usages : 2,
		recovery : "dawn",
		limfeaname : "Beguiling Dance",
		weaponOptions: {
			baseWeapon: "tessen",
			regExpSearch: /^(?=.*courtesan)(?=.*war)(?=.*fan).*$/i,
			name : "+2 Courtesan’s War Fan",
			selectNow : true,
		},
		action : [["action","Beguiling Dance"]],
	},
	"very rare (optional attunement)" : {
		name : "Very Rare Courtesan’s War Fan",
		rarity : "very rare",
		attunement : true,
		description : "Some assassins rely on stealth. Others, like the courtesans of the Courteous Cabal, prefer to hide in plain sight, beguiling their quarry into a stupor before finishing them off with a quick slash.",
		descriptionFull : 
			"Some assassins rely on stealth. Others, like the courtesans of the Courteous Cabal, prefer to hide in plain sight, beguiling their quarry into a stupor before finishing them off with a quick slash." +
			"\n" + toUni("Beguiling Dance.") + " As an action while holding the fan, I can begin a slow, hypnotic dance, causing the fan to glow with an ephemeral, beguiling light. Each creature of my choice that I can see within 15 feet of me must succeed on a Wisdom saving throw contested by my Charisma (Performance) check or be charmed by me for 10 minutes or until I stop dancing. I must use my bonus action on subsequent turns to keep dancing, otherwise the effect ends at the end of my turn. The effect also ends early for a creature if I am ever more than 15 feet from it, or if me or my companions do anything harmful to it. When the effect ends, the creature knows it was charmed by me. Once this property has been used, it can’t be used again until the next dawn." +
			"\n" + toUni("Optional Attunement.") + " If I choose to attune to this item, Ibecome proficient with it and I gain advantage on Charisma (Performance) checks I make while holding it.",
		usages : 2,
		recovery : "dawn",
		limfeaname : "Beguiling Dance",
		weaponOptions: {
			baseWeapon: "tessen",
			regExpSearch: /^(?=.*courtesan)(?=.*war)(?=.*fan).*$/i,
			name : "+2 Courtesan’s War Fan",
			selectNow : true,
		},
		action : [["action","Beguiling Dance"]],
		advantages : [["Performance", true]],
	},
};

//Demonhunter Kimono
MagicItemsList["demonhunter kimono"] = {
	name : "Demonhunter Kimono",
	source : [["RGttYR", 246]],
	type : "wondrous item",
	attunement : true,
	description : "The Demon Hunter clan guards the fiendish artifact and enchants their silken vestments to aid in this endeavour.",
	action : [["bonus action", "Aversion"],["bonus action", "Pursuit (recharge on 3-6)"]],	
	extraLimitedFeatures : [{
		name: "Aversion",
		usages : 1,
		recovery : "dawn",		
	},{
		name: "Pursuit (recharge on 3-6)",
		usages : 1,
		recovery : "dawn",		
	}],	
	choices : ["rare", "very rare", "legendary"],
	"rare" : {
		name : "Rare Demonhunter Kimono",
		rarity : "rare",
		description : "The Demon Hunter clan guards the fiendish artifact and enchants their silken vestments to aid in this endeavour.",
		descriptionFull : 
			"The Demon Hunter clan guards the fiendish artifact and enchants their silken vestments to aid in this endeavour." +
			"\n" + toUni("Aversion.") + " While wearing this kimono, I can use a bonus action to speak its first command word, ‘repel’, causing the printed image on the kimono to mobilise into an illustration of a fiendish soul burning into non-existence. Each creature in a 30-foot cone must succeed on a DC 15 Wisdom saving throw or become frightened of me for 1 minute. Fiends have disadvantage on this saving throw and, while frightened, must take the Dash action and move away from me by the safest available route on each of their turns, unless there is nowhere to move. A Fiend that ends its turn in a location where it doesn’t have line of sight to me can repeat the saving throw, ending the effect on itself on a success. A non-Fiend creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Once this property of the kimono has been used, it can’t be used again until the next dawn." +
			"\n" + toUni("Pursuit.") + " While wearing this kimono, I can use a bonus action to speak its second command word, ‘hunt’, to teleport up to 30 feet to an unoccupied space within 5 feet of a creature that is frightened of me. After this property has been used, roll a d6. On a 1 or 2, it can’t be used again until the next dawn.",
	},
	"very rare" : {
		name : "Very Rare Demonhunter Kimono",
		rarity : "very rare",
		description : "The Demon Hunter clan guards the fiendish artifact and enchants their silken vestments to aid in this endeavour.",
		descriptionFull : 
			"The Demon Hunter clan guards the fiendish artifact and enchants their silken vestments to aid in this endeavour." +
			"\n" + "I have a +1 bonus to AC while I wear this kimono and no armour." +
			"\n" + toUni("Aversion.") + " While wearing this kimono, I can use a bonus action to speak its first command word, ‘repel’, causing the printed image on the kimono to mobilise into an illustration of a fiendish soul burning into non-existence. Each creature in a 30-foot cone must succeed on a DC 16 Wisdom saving throw or become frightened of me for 1 minute. Fiends have disadvantage on this saving throw and, while frightened, must take the Dash action and move away from me by the safest available route on each of their turns, unless there is nowhere to move. A Fiend that ends its turn in a location where it doesn’t have line of sight to me can repeat the saving throw, ending the effect on itself on a success. A non-Fiend creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Once this property of the kimono has been used, it can’t be used again until the next dawn." +
			"\n" + toUni("Pursuit.") + " While wearing this kimono, I can use a bonus action to speak its second command word, ‘hunt’, to teleport up to 45 feet to an unoccupied space within 5 feet of a creature that is frightened of me. After this property has been used, roll a d6. On a 1 or 2, it can’t be used again until the next dawn.",
		extraAC : [{
			mod : 1,
			magic : true,
			text : "I gain a +1 bonus to AC while I'm not wearing armor or using a shield.",
			stopeval : function (v) { return v.wearingArmor || v.usingShield; }
		}],
	},		
	"legendary" : {
		name : "Legendary Demonhunter Kimono",
		rarity : "legendary",
		description : "The Demon Hunter clan guards the fiendish artifact and enchants their silken vestments to aid in this endeavour.",
		descriptionFull : 
			"The Demon Hunter clan guards the fiendish artifact and enchants their silken vestments to aid in this endeavour." +
			"\n" + "I have a +1 bonus to AC while I wear this kimono and no armour." +
			"\n" + toUni("Aversion.") + " While wearing this kimono, I can use a bonus action to speak its first command word, ‘repel’, causing the printed image on the kimono to mobilise into an illustration of a fiendish soul burning into non-existence. Each creature in a 30-foot cone must succeed on a DC 17 Wisdom saving throw or become frightened of me for 1 minute. Fiends have disadvantage on this saving throw and, while frightened, must take the Dash action and move away from me by the safest available route on each of their turns, unless there is nowhere to move. A Fiend that ends its turn in a location where it doesn’t have line of sight to me can repeat the saving throw, ending the effect on itself on a success. A non-Fiend creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Once this property of the kimono has been used, it can’t be used again until the next dawn." +
			"\n" + toUni("Pursuit.") + " While wearing this kimono, I can use a bonus action to speak its second command word, ‘hunt’, to teleport up to 60 feet to an unoccupied space within 5 feet of a creature that is frightened of me. After this property has been used, roll a d6. On a 1 or 2, it can’t be used again until the next dawn.",
		extraAC : [{
			mod : 2,
			magic : true,
			text : "I gain a +2 bonus to AC while I'm not wearing armor or using a shield.",
			stopeval : function (v) { return v.wearingArmor || v.usingShield; }
		}],
	},		
};

// Draakannon
MagicItemsList["draakannon"] = {
	name : "Draakannon",
	source : [["RGttYR", 247]],
	type : "prosthesis",
	description : "This prosthesis can replace or enhance an arm. It has the Blast property and the Piercing Shot Superior Strike.",
	choices : ["common", "uncommon", "rare", "very rare"],
	"common" : {
		name : "Common Draakannon",
		rarity : "common",
		description : "This prosthesis can replace or enhance an arm. It has the Blast property and the Piercing Shot Superior Strike.",
		descriptionFull :
			toUni("Prosthesis Properties.") + " This prosthesis can replace or enhance an arm. It has the Blast (1d6 fire, 20 ft.) property and the Piercing Shot Superior Strike." +
			"\n" + toUni("Draconic Versatility.") + " As an action while wearing this prosthesis, I can change the damage type it deals with its Blast property to one of the following: acid, cold, fire, lightning, or poison.",
		action : [["action", "Draconic Versatility"]],
		weaponOptions : {
			name : "Uncommon Draakannon",
			source : [["RGttYR", 247]],
			regExpSearch : /^(?=.*draakannon).*$/i,
			type : "Martial",
			ability : 1,
			abilitytodamage : true,
			damage : [1, 6, "fire"],
			range : "20 ft",
			description : "Blast, piercing shot superior strike.",
			selectNow : true,
		},		
	},
	"uncommon" : {
		name : "Uncommon Draakannon",
		rarity : "uncommon",
		description : "This prosthesis can replace or enhance an arm, has 4 charges and regains all expended charges daily at dawn.",
		descriptionFull : 
			"This prosthesis has 4 charges and regains all expended charges daily at dawn." +
			"\n" + toUni("Prosthesis Properties.") + " This prosthesis can replace or enhance an arm. It has the Blast (1d6 fire, 20 ft.) property and the Piercing Shot Superior Strike." +
			"\n" + toUni("Draconic Versatility.") + " As an action while wearing this prosthesis, I can change the damage type it deals with its Blast property to one of the following: acid, cold, fire, lightning, or poison." +
			"\n" + toUni("Blast Zone.") + " When I use the prosthesis’ Blast property to propel myself (up to 20 ft), I can expend 1 charge to pump extra firepower into the blast. If I do, each creature within 5 feet of me must make a DC 13 Dexterity saving throw, taking 1d6 damage of the Blast property’s type on a failed save, or half as much damage on a successful one.",
		action : [["action", "Draconic Versatility"]],
		usages : 4,
		recovery : "dawn",
		weaponOptions : {
			name : "Uncommon Draakannon",
			source : [["RGttYR", 247]],
			regExpSearch : /^(?=.*draakannon).*$/i,
			type : "Martial",
			ability : 1,
			abilitytodamage : true,
			damage : [1, 6, "fire"],
			range : "20 ft",
			description : "Blast, piercing shot superior strike.",
			selectNow : true,
		},	
	},
	"rare" : {
		name : "Rare Draakannon",
		rarity : "rare",
		description : "This prosthesis can replace or enhance an arm, has 4 charges and regains all expended charges daily at dawn.",
		descriptionFull : 
			"This prosthesis has 4 charges and regains all expended charges daily at dawn." +
			"\n" + toUni("Prosthesis Properties.") + " This prosthesis can replace or enhance an arm. It has the Blast (1d6 fire, 20 ft.) property and the Piercing Shot Superior Strike." +
			"\n" + toUni("Draconic Versatility.") + " As an action while wearing this prosthesis, I can change the damage type it deals with its Blast property to one of the following: acid, cold, fire, lightning, or poison." +
			"\n" + toUni("Blast Zone.") + " When I use the prosthesis’ Blast property to propel myself (up to 30 ft), I can expend 1 charge to pump extra firepower into the blast. If I do, each creature within 5 feet of me must make a DC 15 Dexterity saving throw, taking 2d6 damage of the Blast property’s type on a failed save, or half as much damage on a successful one.",
		action : [["action", "Draconic Versatility"]],
		usages : 4,
		recovery : "dawn",
		weaponOptions : {
			name : "Rare Draakannon",
			source : [["RGttYR", 247]],
			regExpSearch : /^(?=.*draakannon).*$/i,
			type : "Martial",
			ability : 1,
			abilitytodamage : true,
			damage : [1, 6, "fire"],
			range : "20 ft",
			description : "Blast, piercing shot superior strike.",
			selectNow : true,
		},		
	},
	"very rare" : {
		name : "Very Rare Draakannon",
		rarity : "very rare",
		description : "This prosthesis can replace or enhance an arm, has 4 charges and regains all expended charges daily at dawn.",
		descriptionFull : 
			"This prosthesis has 4 charges and regains all expended charges daily at dawn." +
			"\n" + toUni("Prosthesis Properties.") + " This prosthesis can replace or enhance an arm. It has the Blast (1d6 fire, 20 ft.) property and the Piercing Shot Superior Strike." +
			"\n" + toUni("Draconic Versatility.") + " As an action while wearing this prosthesis, I can change the damage type it deals with its Blast property to one of the following: acid, cold, fire, lightning, or poison." +
			"\n" + toUni("Blast Zone.") + " When I use the prosthesis’ Blast property to propel myself (up to 40 ft), I can expend 1 charge to pump extra firepower into the blast. If I do, each creature within 5 feet of me must make a DC 16 Dexterity saving throw, taking 3d6 damage of the Blast property’s type on a failed save, or half as much damage on a successful one.",
		action : [["bonus action", "Draconic Versatility"]],
		usages : 4,
		recovery : "dawn",
		weaponOptions : {
			name : "Very Rare Draakannon",
			source : [["RGttYR", 247]],
			regExpSearch : /^(?=.*draakannon).*$/i,
			type : "Martial",
			ability : 1,
			abilitytodamage : true,
			damage : [1, 6, "fire"],
			range : "20 ft",
			description : "Blast, piercing shot superior strike.",
			selectNow : true,
		},	
	},
};

// Earthpiercer
MagicItemsList["earthpiercer"] = {
	name : "Earthpiercer",
	source : [["RGttYR", 247]],
	type : "prosthesis",
	description : "This prosthesis can replace or enhance an arm. arm.",
	action : [["reaction", "Hookshot"],["bonus action", "Hookshot"]],
	choices : ["common", "uncommon", "rare", "very rare"],
	"common" : {
		name : "Common Earthpiercer",
		rarity : "common",
		description : "This prosthesis can replace or enhance an arm, has 4 charges and regains all expended charges daily at dawn.",
		descriptionFull : 
			toUni("Prosthesis Properties.") + " This prosthesis can enhance or replace an arm. It has the Hookshot (20 ft.), Launch (1d6 piercing, 20 ft.), and Melee (1d6 piercing, Impact) properties, and the Piercing Shot Superior Strike." +
			"\n" + toUni("Deep Drilling.") + " This prosthesis uses a drill instead of a hook for its Hookshot property. When I hit with an attack roll made to attach the drill to a creature, the creature takes 1d6 piercing damage. When the drill is detached from a creature, that creature takes 1d6 piercing damage.",
		weaponOptions : {
			name : "Common Earthpiercer",
			source : [["RGttYR", 247]],
			regExpSearch : /^(?=.*earthpiercer).*$/i,
			type : "Martial",
			ability : 1,
			abilitytodamage : true,
			damage : [1, 6, "piercing"],
			range : "Melee, 20 ft",
			description : "Hookshot (20 ft), launch (1d6 piercing, 20 ft.), and Melee (1d6 piercing, Impact), Piercing Shot Superior Strike",
			selectNow : true,
		},		
	},
	"uncommon" : {
		name : "Uncommon Earthpiercer",
		rarity : "uncommon",
		description : "This prosthesis can replace or enhance an arm, has 4 charges and regains all expended charges daily at dawn.",
		descriptionFull : 
			toUni("Prosthesis Properties.") + " This prosthesis can enhance or replace an arm. It has the Hookshot (20 ft.), Launch (1d6 piercing, 20 ft.), and Melee (1d6 piercing, Impact) properties, and the Piercing Shot Superior Strike." +
			"\n" + toUni("Deep Drilling.") + " This prosthesis uses a drill instead of a hook for its Hookshot property. When I hit with an attack roll made to attach the drill to a creature, the creature takes 1d6 piercing damage. When the drill is detached from a creature, that creature takes 1d6 piercing damage." +
			"\n" + toUni("Tunneler.") + " This prosthesis has the Mobility (burrow 5 ft.) property.",
		weaponOptions : {
			name : "Uncommon Earthpiercer",
			source : [["RGttYR", 247]],
			regExpSearch : /^(?=.*earthpiercer).*$/i,
			type : "Martial",
			ability : 1,
			abilitytodamage : true,
			damage : [1, 6, "piercing"],
			range : "Melee, 20 ft",
			description : "Hookshot (20 ft), launch (1d6 piercing, 20 ft.), and Melee (1d6 piercing, Impact), Piercing Shot Superior Strike",
			selectNow : true,
		},
		speed : {
			burrow : { spd : 5, enc : 0 },
		},	
	},
	"rare" : {
		name : "Rare Earthpiercer",
		rarity : "rare",
		description : "This prosthesis can replace or enhance an arm, has 4 charges and regains all expended charges daily at dawn.",
		descriptionFull : 
			toUni("Prosthesis Properties.") + " This prosthesis can enhance or replace an arm. It has the Hookshot (20 ft.), Launch (1d6 piercing, 20 ft.), and Melee (1d6 piercing, Impact) properties, and the Piercing Shot Superior Strike." +
			"\n" + toUni("Deep Drilling.") + " This prosthesis uses a drill instead of a hook for its Hookshot property. When I hit with an attack roll made to attach the drill to a creature, the creature takes 1d6 piercing damage. When the drill is detached from a creature, that creature takes 1d6 piercing damage." +
			"\n" + toUni("Tunneler.") + " This prosthesis has the Mobility (burrow 5 ft.) property." +
			"\n" + toUni("Emergency Anchor.") + " I can use the prosthesis’ Hookshot property as a reaction when I am moved against my will, instead of only when I am falling. When I do, I choose how far away I can be moved from the point to which the drill is attached (up to the range of the prosthesis’ Hookshot property).",
		weaponOptions : {
			name : "Rare Earthpiercer",
			source : [["RGttYR", 247]],
			regExpSearch : /^(?=.*earthpiercer).*$/i,
			type : "Martial",
			ability : 1,
			abilitytodamage : true,
			damage : [1, 6, "piercing"],
			range : "Melee, 20 ft",
			description : "Hookshot (20 ft), launch (1d6 piercing, 20 ft.), and Melee (1d6 piercing, Impact), Piercing Shot Superior Strike, Emergency Anchor",
			selectNow : true,
		},
		speed : {
			burrow : { spd : 5, enc : 0 },
		},		
	},
	"very rare" : {
		name : "Very Rare Earthpiercer",
		rarity : "very rare",
		description : "This prosthesis can replace or enhance an arm, has 4 charges and regains all expended charges daily at dawn.",
		descriptionFull : 
			toUni("Prosthesis Properties.") + " This prosthesis can enhance or replace an arm. It has the Hookshot (20 ft.), Launch (1d6 piercing, 20 ft.), and Melee (1d6 piercing, Impact) properties, and the Piercing Shot Superior Strike." +
			"\n" + toUni("Deep Drilling.") + " This prosthesis uses a drill instead of a hook for its Hookshot property. When I hit with an attack roll made to attach the drill to a creature, the creature takes 1d6 piercing damage. When the drill is detached from a creature, that creature takes 1d8 piercing damage." +
			"\n" + toUni("Tunneler.") + " This prosthesis has the Mobility (burrow 5 ft.) property." +
			"\n" + toUni("Emergency Anchor.") + " I can use the prosthesis’ Hookshot property as a reaction when I am moved against my will, instead of only when I am falling. When I do, I choose how far away I can be moved from the point to which the drill is attached (up to the range of the prosthesis’ Hookshot property)." +
			"\n" + toUni("Overcharge.") + " I can use an action to overcharge the drill, increasing its penetrative power. For 10 minutes, while using the prosthesis’ Mobility property to burrow, I can burrow through solid rock, leaving a 5-foot diameter tunnel in my wake. Once this property of the prosthesis has been used, it can’t be used again until the next dawn.",
		weaponOptions : {
			name : "Very Rare Earthpiercer",
			source : [["RGttYR", 247]],
			regExpSearch : /^(?=.*earthpiercer).*$/i,
			type : "Martial",
			ability : 1,
			abilitytodamage : true,
			damage : [1, 6, "piercing"],
			range : "Melee, 20 ft",
			description : "Hookshot (20 ft), launch (1d6 piercing, 20 ft.), and Melee (1d6 piercing, Impact), Piercing Shot Superior Strike, Emergency Anchor",
			selectNow : true,
		},
		speed : {
			burrow : { spd : 5, enc : 0 },
		},
		action : [["action", "Overcharge"]],	
	},
};

// G.R.A.P.P.L.E.R.
MagicItemsList["g.r.a.p.p.l.e.r."] = {
	name : "G.R.A.P.P.L.E.R.",
	source : [["RGttYR", 248]],
	type : "prosthesis",
	description : "This prosthesis can enhance or replace an arm. It has the Hookshot (40 ft.) property.",
	choices : ["common", "uncommon", "rare", "very rare"],
	"common" : {
		name : "Common G.R.A.P.P.L.E.R.",
		rarity : "common",
		description : "This prosthesis can enhance or replace an arm. It has the Hookshot (40 ft.) property.",
		descriptionFull : 
			toUni("Prosthesis Properties.") + " This prosthesis can enhance or replace an arm. It has the Hookshot (40 ft.) property." +
			"\n" + toUni("Improved Hookshot.") + " As an action while the prosthesis’ hook is attached to a target, I can reel myself in. When I do, I move a number of feet up to the item’s Hookshot range in a straight line towards the hook.",
		weaponOptions : {
			name : "Common G.R.A.P.P.L.E.R.",
			source : [["RGttYR", 248]],
			regExpSearch : /^(?=.*g.r.a.p.p.l.e.r.).*$/i,
			type : "AlwaysProf",
			ability : 0,
			abilitytodamage : false,
			damage : [1, 6, "piercing"],
			range : "40 ft",
			description : "Uses STR or DEX for attack roll",
			selectNow : true,
		},
		action : [["action", "Improved Hookshot"]],		
	},
	"uncommon" : {
		name : "Uncommon G.R.A.P.P.L.E.R.",
		rarity : "uncommon",
		description : "This prosthesis can enhance or replace an arm. It has the Hookshot (40 ft.) property.",
		descriptionFull : 
			toUni("Prosthesis Properties.") + " This prosthesis can enhance or replace an arm. It has the Hookshot (40 ft.) property." +
			"\n" + toUni("Improved Hookshot.") + " As an action while the prosthesis’ hook is attached to a target, I can reel myself in. When I do, I move a number of feet up to the item’s Hookshot range in a straight line towards the hook. In addition, the DC of the ability check required to forcefully detach the hook increases to 13." +
			"\n" + toUni("Hooked In.") + " When I hit with an attack roll to attach the prosthesis’ hook to a creature, the creature takes 1d6 piercing damage. When the hook is detached from a creature, that creature takes 1d6 piercing damage.",
		weaponOptions : {
			name : "Uncommon G.R.A.P.P.L.E.R.",
			source : [["RGttYR", 248]],
			regExpSearch : /^(?=.*g.r.a.p.p.l.e.r.).*$/i,
			type : "AlwaysProf",
			ability : 0,
			abilitytodamage : false,
			damage : [1, 6, "piercing"],
			range : "40 ft",
			description : "Uses STR or DEX for attack roll",
			selectNow : true,
		},
		action : [["action", "Improved Hookshot"]],		
	},
	"rare" : {
		name : "Rare G.R.A.P.P.L.E.R.",
		rarity : "rare",
		description : "This prosthesis can enhance or replace an arm. It has the Hookshot (40 ft.) property.",
		descriptionFull : 
			toUni("Prosthesis Properties.") + " This prosthesis can enhance or replace an arm. It has the Hookshot (40 ft.) property." +
			"\n" + toUni("Improved Hookshot.") + " As an action while the prosthesis’ hook is attached to a target, I can reel myself in. When I do, I move a number of feet up to the item’s Hookshot range in a straight line towards the hook. In addition, the DC of the ability check required to forcefully detach the hook increases to 15. I can use the Improved Hookshot property as a bonus action as well as an action, including as part of the same bonus action used to shoot the hook." +
			"\n" + toUni("Hooked In.") + " When I hit with an attack roll to attach the prosthesis’ hook to a creature, the creature takes 1d6 piercing damage. When the hook is detached from a creature, that creature takes 1d6 piercing damage.",
		weaponOptions : {
			name : "Rare G.R.A.P.P.L.E.R.",
			source : [["RGttYR", 248]],
			regExpSearch : /^(?=.*g.r.a.p.p.l.e.r.).*$/i,
			type : "AlwaysProf",
			ability : 0,
			abilitytodamage : false,
			damage : [1, 6, "piercing"],
			range : "40 ft",
			description : "Uses STR or DEX for attack roll",
			selectNow : true,
		},
		action : [["action", "Improved Hookshot"],["bonus action", "Improved Hookshot"]],	
	},
	"very rare" : {
		name : "Very Rare G.R.A.P.P.L.E.R.",
		rarity : "very rare",
		description : "This prosthesis can enhance or replace an arm. It has the Hookshot (40 ft.) property.",
		descriptionFull : 
			toUni("Prosthesis Properties.") + " This prosthesis can enhance or replace an arm. It has the Hookshot (40 ft.) property." +
			"\n" + toUni("Improved Hookshot.") + " As an action while the prosthesis’ hook is attached to a target, I can reel myself in. When I do, I move a number of feet up to the item’s Hookshot range in a straight line towards the hook. In addition, the DC of the ability check required to forcefully detach the hook increases to 16. I can use the Improved Hookshot property as a bonus action as well as an action, including as part of the same bonus action used to shoot the hook."+
			"\n" + toUni("Hooked In.") + " When I hit with an attack roll to attach the prosthesis’ hook to a creature, the creature takes 2d6 piercing damage. When the hook is detached from a creature, that creature takes 2d6 piercing damage.",
		weaponOptions : {
			name : "Very Rare G.R.A.P.P.L.E.R.",
			source : [["RGttYR", 248]],
			regExpSearch : /^(?=.*g.r.a.p.p.l.e.r.).*$/i,
			type : "AlwaysProf",
			ability : 0,
			abilitytodamage : false,
			damage : [2, 6, "piercing"],
			range : "40 ft",
			description : "Uses STR or DEX for attack roll",
			selectNow : true,
		},
		action : [["action", "Improved Hookshot"],["bonus action", "Improved Hookshot"]],	
	},
};

// Glaive of the Green Tyrant
MagicItemsList["glaive of the green tyrant"] = {
	name : "Glaive of the Green Tyrant",
	source : [["RGttYR", 249]],
	type : "prosthesis",
	attunement : true,
	description : "Legend tells of a great warrior queen who, having bested a bronze dragon in a game of wits, sought to wield the power of storms. With this power, she laid waste to entire armies, burning them with flashes of incandescent lightning. Some called her a liberator, others a tyrant. Though defeated by the Hero in Red, some of her power still remains in the Green Tyrant’s ancient weapon.",
	action : [["bonus action","Summon Storm"]],
	limfeaname : "Summon Storm",
	usages : 1,
	recovery : "dawn",
	choices : ["uncommon", "rare", "very rare", "legendary"],
	"uncommon" : {
		name : "Uncommon Glaive of the Green Tyrant",
		rarity : "uncommon",
		description : "Legend tells of a great warrior queen who, having bested a bronze dragon in a game of wits, sought to wield the power of storms. With this power, she laid waste to entire armies, burning them with flashes of incandescent lightning. Some called her a liberator, others a tyrant. Though defeated by the Hero in Red, some of her power still remains in the Green Tyrant’s ancient weapon.",
		descriptionFull : 
			"Legend tells of a great warrior queen who, having bested a bronze dragon in a game of wits, sought to wield the power of storms. With this power, she laid waste to entire armies, burning them with flashes of incandescent lightning. Some called her a liberator, others a tyrant. Though defeated by the Hero in Red, some of her power still remains in the Green Tyrant’s ancient weapon." +
			"\n" + toUni("Summon Storm.") + " With a flourish of this weapon, I can expend a bonus action to whip up a tornado in a 5-foot-diameter, 30-foot-high cylinder of rushing air and crackling lightning centred on a point within 60 feet of me. The tornado lasts for 1 minute. Each creature that enters the area for the first time on a turn or starts its turn there must make a DC 13 Strength saving throw. On a failure, the creature is thrown 10 feet in a random direction, landing prone, and takes 1d4 bludgeoning damage and 1d4 lightning damage. As a bonus action on my turn, I can move the tornado up to 20 feet in a straight line. Each creature whose space the tornado moves through must succeed on a DC 13 Dexterity saving throw or take 1d4 lightning damage. A creature can’t take damage from this effect more than once per turn. Once this property of the weapon has been used, it can’t be used again until the next dawn.",
		weaponOptions : {
			name : "Uncommon Glaive of the Green Tyrant",
			source : [["RGttYR", 249]],
			baseWeapon : "glaive",
			regExpSearch : /^(?=.*glaive)(?=.*green)(?=.*tyrant).*$/i,
			selectNow : true,
		},		
	},
	"rare" : {
		name : "Rare Glaive of the Green Tyrant",
		rarity : "rare",
		description : "Legend tells of a great warrior queen who, having bested a bronze dragon in a game of wits, sought to wield the power of storms. With this power, she laid waste to entire armies, burning them with flashes of incandescent lightning. Some called her a liberator, others a tyrant. Though defeated by the Hero in Red, some of her power still remains in the Green Tyrant’s ancient weapon.",
		descriptionFull : 
			"Legend tells of a great warrior queen who, having bested a bronze dragon in a game of wits, sought to wield the power of storms. With this power, she laid waste to entire armies, burning them with flashes of incandescent lightning. Some called her a liberator, others a tyrant. Though defeated by the Hero in Red, some of her power still remains in the Green Tyrant’s ancient weapon." +
			"\n" + toUni("Summon Storm.") + " With a flourish of this weapon, I can expend a bonus action to whip up a tornado in a 5-foot-diameter, 30-foot-high cylinder of rushing air and crackling lightning centred on a point within 60 feet of me. The tornado lasts for 1 minute. Each creature that enters the area for the first time on a turn or starts its turn there must make a DC 15 Strength saving throw. On a failure, the creature is thrown 10 feet in a random direction, landing prone, and takes 1d8 bludgeoning damage and 1d8 lightning damage. As a bonus action on my turn, I can move the tornado up to 20 feet in a straight line. Each creature whose space the tornado moves through must succeed on a DC 15 Dexterity saving throw or take 1d8 lightning damage. A creature can’t take damage from this effect more than once per turn. Once this property of the weapon has been used, it can’t be used again until the next dawn.",
		weaponOptions : {
			name : "Rare Glaive of the Green Tyrant",
			source : [["RGttYR", 249]],
			baseWeapon : "glaive",
			regExpSearch : /^(?=.*glaive)(?=.*green)(?=.*tyrant).*$/i,
			selectNow : true,
		},	
	},
	"very rare" : {
		name : "Very Rare Glaive of the Green Tyrant",
		rarity : "rare",
		description : "Legend tells of a great warrior queen who, having bested a bronze dragon in a game of wits, sought to wield the power of storms. With this power, she laid waste to entire armies, burning them with flashes of incandescent lightning. Some called her a liberator, others a tyrant. Though defeated by the Hero in Red, some of her power still remains in the Green Tyrant’s ancient weapon.",
		descriptionFull : 
			"Legend tells of a great warrior queen who, having bested a bronze dragon in a game of wits, sought to wield the power of storms. With this power, she laid waste to entire armies, burning them with flashes of incandescent lightning. Some called her a liberator, others a tyrant. Though defeated by the Hero in Red, some of her power still remains in the Green Tyrant’s ancient weapon." +
			"\n" + toUni("Summon Storm.") + " With a flourish of this weapon, I can expend a bonus action to whip up a tornado in a 5-foot-diameter, 30-foot-high cylinder of rushing air and crackling lightning centred on a point within 60 feet of me. The tornado lasts for 1 minute. Each creature that enters the area for the first time on a turn or starts its turn there must make a DC 16 Strength saving throw. On a failure, the creature is thrown 10 feet in a random direction, landing prone, and takes 1d10 bludgeoning damage and 1d10 lightning damage. As a bonus action on my turn, I can move the tornado up to 20 feet in a straight line. Each creature whose space the tornado moves through must succeed on a DC 16 Dexterity saving throw or take 1d10 lightning damage. A creature can’t take damage from this effect more than once per turn. Once this property of the weapon has been used, it can’t be used again until the next dawn.",
		weaponOptions : {
			name : "Very Rare Glaive of the Green Tyrant +1",
			source : [["RGttYR", 249]],
			baseWeapon : "glaive",
			regExpSearch : /^(?=.*glaive)(?=.*green)(?=.*tyrant).*$/i,
			selectNow : true,
		},		
	},
	"legendary" : {
		name : "Legendary Glaive of the Green Tyrant",
		rarity : "legendary",
		description : "Legend tells of a great warrior queen who, having bested a bronze dragon in a game of wits, sought to wield the power of storms. With this power, she laid waste to entire armies, burning them with flashes of incandescent lightning. Some called her a liberator, others a tyrant. Though defeated by the Hero in Red, some of her power still remains in the Green Tyrant’s ancient weapon.",
		descriptionFull : 
			"Legend tells of a great warrior queen who, having bested a bronze dragon in a game of wits, sought to wield the power of storms. With this power, she laid waste to entire armies, burning them with flashes of incandescent lightning. Some called her a liberator, others a tyrant. Though defeated by the Hero in Red, some of her power still remains in the Green Tyrant’s ancient weapon." +
			"\n" + toUni("Summon Storm.") + " With a flourish of this weapon, I can expend a bonus action to whip up a tornado in a 5-foot-diameter, 30-foot-high cylinder of rushing air and crackling lightning centred on a point within 60 feet of me. The tornado lasts for 1 minute. Each creature that enters the area for the first time on a turn or starts its turn there must make a DC 17 Strength saving throw. On a failure, the creature is thrown 10 feet in a random direction, landing prone, and takes 1d12 bludgeoning damage and 1d12 lightning damage. As a bonus action on my turn, I can move the tornado up to 20 feet in a straight line. Each creature whose space the tornado moves through must succeed on a DC 17 Dexterity saving throw or take 1d12 lightning damage. A creature can’t take damage from this effect more than once per turn. Once this property of the weapon has been used, it can’t be used again until the next dawn.",
		weaponOptions : {
			name : "Legendary Glaive of the Green Tyrant +2",
			source : [["RGttYR", 249]],
			baseWeapon : "glaive",
			regExpSearch : /^(?=.*glaive)(?=.*green)(?=.*tyrant).*$/i,
			selectNow : true,
		},		
	}, 
};

//God Speaker Kimono
MagicItemsList["god speaker kimono"] = {
	name : "God Speaker Kimono",
	source : [["RGttYR", 250]],
	type : "wondrous item",
	attunement : true,
	description : "The counterpart to the Demon Hunter clan, the God Speaker clan, guard the angelic relic that inhibits Celestials’ passage onto the Material Plane. The God Speakers see violence against Celestials as a last resort and instead seek to deceive and manipulate them. Their clothing is made from silk of the ether moth, a creature that blinks into the Material Plane only to lay its eggs, and flits out of the Material Plane the moment it emerges from its cocoon.",		
	choices : ["rare", "very rare", "legendary"],
	"rare" : {
		name : "Rare God Speaker Kimono",
		rarity : "rare",
		description : "The counterpart to the Demon Hunter clan, the God Speaker clan, guard the angelic relic that inhibits Celestials’ passage onto the Material Plane. The God Speakers see violence against Celestials as a last resort and instead seek to deceive and manipulate them. Their clothing is made from silk of the ether moth, a creature that blinks into the Material Plane only to lay its eggs, and flits out of the Material Plane the moment it emerges from its cocoon.",
		descriptionFull : 
			"The counterpart to the Demon Hunter clan, the God Speaker clan, guard the angelic relic that inhibits Celestials’ passage onto the Material Plane. The God Speakers see violence against Celestials as a last resort and instead seek to deceive and manipulate them. Their clothing is made from silk of the ether moth, a creature that blinks into the Material Plane only to lay its eggs, and flits out of the Material Plane the moment it emerges from its cocoon." +
			"\n" + toUni("Innocence.") + " While wearing this kimono, I can use a bonus action to speak its first command word, ‘pure’. My aura becomes saturated with celestial energy, manifesting as an almost-visible golden nimbus. I gain advantage on Deception checks for 10 minutes. For the duration, I am immune to magic and other effects that allow other creatures to read my thoughts or determine whether I am lying. Once this property of the item has been used, it can’t be used again until the next dawn." +
			"\n" + toUni("Blink.") + " While wearing this kimono, I can use a bonus action to speak its second command word, ‘shimmer’. My aura implodes, immediately transporting me to the Ethereal Plane. While on the Ethereal Plane, I can see and hear the plane I originated from, which is cast in shades of grey, and I can’t see anything there more than 60 feet away. I can only affect and be affected by other creatures on the Ethereal Plane. Creatures that aren’t there can’t perceive me or interact with me, unless they have the ability to do so. At the start of my next turn, I return to an unoccupied space of my choice that I can see within 10 feet of the space I vanished from. If no unoccupied space is available within that range, I appear in the nearest unoccupied space (chosen at random if more than one space is equally near). This property has no effect if I use it while I am on the Ethereal Plane or a plane that doesn’t border it. After this property has been used, roll a d6. On a 1 or 2, it can’t be used again until the next dawn.",
		action : [["bonus action", "Innocence"],["bonus action", "Blink (recharge on 3-6)"]],
		extraLimitedFeatures : [{
			name: "Innocence",
			usages : 1,
			recovery : "dawn",
		},{
			name: "Blink (recharge on 3-6)",
			usages : 1,
			recovery : "dawn",		
		}],		
	},
	"very rare" : {
		name : "Very Rare God Speaker Kimono",
		rarity : "very rare",
		description : "The counterpart to the Demon Hunter clan, the God Speaker clan, guard the angelic relic that inhibits Celestials’ passage onto the Material Plane. The God Speakers see violence against Celestials as a last resort and instead seek to deceive and manipulate them. Their clothing is made from silk of the ether moth, a creature that blinks into the Material Plane only to lay its eggs, and flits out of the Material Plane the moment it emerges from its cocoon.",
		descriptionFull : 
			"The counterpart to the Demon Hunter clan, the God Speaker clan, guard the angelic relic that inhibits Celestials’ passage onto the Material Plane. The God Speakers see violence against Celestials as a last resort and instead seek to deceive and manipulate them. Their clothing is made from silk of the ether moth, a creature that blinks into the Material Plane only to lay its eggs, and flits out of the Material Plane the moment it emerges from its cocoon." +
			"\n" + toUni("Innocence.") + " While wearing this kimono, I can use a bonus action to speak its first command word, ‘pure’. My aura becomes saturated with celestial energy, manifesting as an almost-visible golden nimbus. I gain advantage on Deception checks for 1 hour. For the duration, I am immune to magic and other effects that allow other creatures to read my thoughts or determine whether I am lying. Once this property of the item has been used, it can’t be used again until the next dawn." +
			"\n" + toUni("Blink.") + " While wearing this kimono, I can use a bonus action to speak its second command word, ‘shimmer’. My aura implodes, immediately transporting me to the Ethereal Plane. While on the Ethereal Plane, I can see and hear the plane I originated from, which is cast in shades of grey, and I can’t see anything there more than 60 feet away. I can only affect and be affected by other creatures on the Ethereal Plane. Creatures that aren’t there can’t perceive me or interact with me, unless they have the ability to do so. At the start of my next turn, I return to an unoccupied space of my choice that I can see within 10 feet of the space I vanished from. If no unoccupied space is available within that range, I appear in the nearest unoccupied space (chosen at random if more than one space is equally near). This property has no effect if I use it while I am on the Ethereal Plane or a plane that doesn’t border it. After this property has been used, roll a d6. On a 1 or 2, it can’t be used again until the next dawn.",
		action : [["bonus action", "Innocence"],["bonus action", "Blink (recharge on 3-6)"]],
		extraLimitedFeatures : [{
			name: "Innocence",
			usages : 1,
			recovery : "dawn",
		},{
			name: "Blink (recharge on 3-6)",
			usages : 1,
			recovery : "dawn",		
		}],
		extraAC : [{
			mod : 1,
			magic : true,
			text : "I gain a +1 bonus to AC while I'm not wearing armor or using a shield.",
			stopeval : function (v) { return v.wearingArmor || v.usingShield; }
		}],
	},
	"legendary" : {
		name : "Legendary God Speaker Kimono",
		rarity : "legendary",
		description : "The counterpart to the Demon Hunter clan, the God Speaker clan, guard the angelic relic that inhibits Celestials’ passage onto the Material Plane. The God Speakers see violence against Celestials as a last resort and instead seek to deceive and manipulate them. Their clothing is made from silk of the ether moth, a creature that blinks into the Material Plane only to lay its eggs, and flits out of the Material Plane the moment it emerges from its cocoon.",
		descriptionFull : 
			"The counterpart to the Demon Hunter clan, the God Speaker clan, guard the angelic relic that inhibits Celestials’ passage onto the Material Plane. The God Speakers see violence against Celestials as a last resort and instead seek to deceive and manipulate them. Their clothing is made from silk of the ether moth, a creature that blinks into the Material Plane only to lay its eggs, and flits out of the Material Plane the moment it emerges from its cocoon." +
			"\n" + toUni("Innocence.") + " While wearing this kimono, I can use a bonus action to speak its first command word, ‘pure’. My aura becomes saturated with celestial energy, manifesting as an almost-visible golden nimbus. I gain advantage on Deception checks for 1 hour. For the duration, I am immune to magic and other effects that allow other creatures to read my thoughts or determine whether I am lying. Once this property of the item has been used, it can’t be used again until the next dawn." +
			"\n" + toUni("Blink.") + " While wearing this kimono, I can use a bonus action to speak its second command word, ‘shimmer’. My aura implodes, immediately transporting me to the Ethereal Plane. While on the Ethereal Plane, I can see and hear the plane I originated from, which is cast in shades of grey, and I can’t see anything there more than 60 feet away. I can only affect and be affected by other creatures on the Ethereal Plane. Creatures that aren’t there can’t perceive me or interact with me, unless they have the ability to do so. At the start of my next turn, I return to an unoccupied space of my choice that I can see within 10 feet of the space I vanished from. If no unoccupied space is available within that range, I appear in the nearest unoccupied space (chosen at random if more than one space is equally near). This property has no effect if I use it while I am on the Ethereal Plane or a plane that doesn’t border it. After this property has been used, roll a d6. On a 1 or 2, it can’t be used again until the next dawn.",
		action : [["bonus action", "Innocence"],["bonus action", "Blink (recharge on 3-8)"]],
		extraLimitedFeatures : [{
			name: "Innocence",
			usages : 1,
			recovery : "dawn",
		},{
			name: "Blink (recharge on 3-8)",
			usages : 1,
			recovery : "dawn",		
		}],			
		extraAC : [{
			mod : 1,
			magic : true,
			text : "I gain a +1 bonus to AC while I'm not wearing armor or using a shield.",
			stopeval : function (v) { return v.wearingArmor || v.usingShield; }
		}],
		dmgres : ["Radiant"],
	},		
};

//Gofu Hat
MagicItemsList["gofu hat"] = {
	name : "Gofu Hat",
	source : [["RGttYR", 250]],
	type : "wondrous item",
	description : "Ink made with the blood of a Celestial. Paper from trees grown in hallowed ground. Precise calligraphy honed with extensive practice. It’s not easy to make a genuine paper charm, but it’s certainly worth the trouble. There’s a reason why superstitious folk continue to scrawl their own imitations, hoping to achieve just a fraction of their power. When first found or crafted, this hat has 1d4 + 2 paper charms hanging from it, which provide good fortune and ward off evil. Once all the charms have been used, the hat becomes a nonmagical item.",		
	action : [["bonus action", "Protective Talismans"]],
	choices : ["uncommon", "rare", "very rare"],
	"uncommon" : {
		name : "Uncommon Gofu Hat",
		rarity : "uncommon",
		description : "Ink made with the blood of a Celestial. Paper from trees grown in hallowed ground. Precise calligraphy honed with extensive practice. It’s not easy to make a genuine paper charm, but it’s certainly worth the trouble. There’s a reason why superstitious folk continue to scrawl their own imitations, hoping to achieve just a fraction of their power. When first found or crafted, this hat has 1d4 + 2 paper charms hanging from it, which provide good fortune and ward off evil. Once all the charms have been used, the hat becomes a nonmagical item.",		
		descriptionFull : 
			"Ink made with the blood of a Celestial. Paper from trees grown in hallowed ground. Precise calligraphy honed with extensive practice. It’s not easy to make a genuine paper charm, but it’s certainly worth the trouble. There’s a reason why superstitious folk continue to scrawl their own imitations, hoping to achieve just a fraction of their power. When first found or crafted, this hat has 1d4 + 2 paper charms hanging from it, which provide good fortune and ward off evil. Once all the charms have been used, the hat becomes a nonmagical item." +
			"\n" + toUni("Protective Talismans.") + " While wearing the hat, I can use a bonus action to detach a charm and stick it on a willing creature within 5 feet of me, upon which the ink on it begins to glow softly. The creature gains the effects of the bless spell and gains 1d6 temporary hit points until the start of my next turn, at which point the charm disintegrates.",
		usages : "1d4+2",		
	},
	"rare" : {
		name : "Rare Gofu Hat",
		rarity : "rare",
		description : "Ink made with the blood of a Celestial. Paper from trees grown in hallowed ground. Precise calligraphy honed with extensive practice. It’s not easy to make a genuine paper charm, but it’s certainly worth the trouble. There’s a reason why superstitious folk continue to scrawl their own imitations, hoping to achieve just a fraction of their power. When first found or crafted, this hat has 1d4 + 2 paper charms hanging from it, which provide good fortune and ward off evil. Once all the charms have been used, the hat becomes a nonmagical item.",		
		descriptionFull : 
			"Ink made with the blood of a Celestial. Paper from trees grown in hallowed ground. Precise calligraphy honed with extensive practice. It’s not easy to make a genuine paper charm, but it’s certainly worth the trouble. There’s a reason why superstitious folk continue to scrawl their own imitations, hoping to achieve just a fraction of their power. When first found or crafted, this hat has 1d4 + 2 paper charms hanging from it, which provide good fortune and ward off evil. Once all the charms have been used, the hat becomes a nonmagical item." +
			"\n" + toUni("Protective Talismans.") + " While wearing the hat, I can use a bonus action to detach a charm and stick it on a willing creature within 5 feet of me, upon which the ink on it begins to glow softly. The creature gains the effects of the bless spell and gains 1d6 temporary hit points until the start of my next turn, at which point the charm disintegrates.",	
		usages : "1d4+2",
	},		
	"very rare" : {
		name : "Very Rare Gofu Hat",
		rarity : "very rare",
		description : "Ink made with the blood of a Celestial. Paper from trees grown in hallowed ground. Precise calligraphy honed with extensive practice. It’s not easy to make a genuine paper charm, but it’s certainly worth the trouble. There’s a reason why superstitious folk continue to scrawl their own imitations, hoping to achieve just a fraction of their power. When first found or crafted, this hat has 1d4 + 2 paper charms hanging from it, which provide good fortune and ward off evil. Once all the charms have been used, the hat becomes a nonmagical item.",		
		descriptionFull : 
			"Ink made with the blood of a Celestial. Paper from trees grown in hallowed ground. Precise calligraphy honed with extensive practice. It’s not easy to make a genuine paper charm, but it’s certainly worth the trouble. There’s a reason why superstitious folk continue to scrawl their own imitations, hoping to achieve just a fraction of their power. When first found or crafted, this hat has 1d4 + 2 paper charms hanging from it, which provide good fortune and ward off evil. Once all the charms have been used, the hat becomes a nonmagical item." +
			"\n" + toUni("Protective Talismans.") + " While wearing the hat, I can use a bonus action to detach a charm and stick it on a willing creature within 5 feet of me, upon which the ink on it begins to glow softly. The creature gains the effects of the bless spell and gains 3d6 temporary hit points until the start of my next turn, at which point the charm disintegrates.",
		usages : "1d6+2",	
	},	
};

// Hakuja-tō
MagicItemsList["hakuja-to"] = {
	name : "Hakuja-to",
	source : [["RGttYR", 251]],
	type : "weapon (any sword)",
	description : "This weapon has 4 charges and regains 1d4 expended charges daily at dawn.",
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "brackets",
		descriptionChange : ["replace", "sword"],
		itemName1stPage : ["brackets ", "Hakuja-to"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /sword|scimitar|rapier/i;
			return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
		}
	},
	choices : ["uncommon", "rare", "very rare"],
	"uncommon" : {
		name : "Uncommon Hakuja-to",
		rarity : "uncommon",
		description : "This weapon has 4 charges and regains 1d4 expended charges daily at dawn.",
		descriptionFull : 
			"This weapon has 4 charges and regains 1d4 expended charges daily at dawn." +
			"\n" + toUni("Renewal.") + " As a bonus action, I can expend 1 charge to cause the sword to shed its outer layer, revealing a new, sharp blade underneath. Until the end of my turn, I gain a +1 bonus to attack and damage rolls made with this sword, and it deals an extra 1d6 damage on a hit." +
			"\n" + toUni("Rebirth.") + " If I am suffering from a condition or effect that allows me to make a saving throw at the start or end of each of my turns to end it, I can use a bonus action to expend 3 charges and shed the outer layer of my skin, repeating the saving throw.",
		usages : 4,
		recovery : "dawn",
		additional : "regains 1d4",
	},
	"rare" : {
		name : "Rare Hakuja-to",
		rarity : "rare",
		description : "This weapon has 5 charges and regains 1d4 + 1 expended charges daily at dawn.",
		descriptionFull : 
			"This weapon has 5 charges and regains 1d4 expended charges daily at dawn." +
			"\n" + toUni("Renewal.") + " As a bonus action, I can expend 1 charge to cause the sword to shed its outer layer, revealing a new, sharp blade underneath. Until the end of my turn, I gain a +2 bonus to attack and damage rolls made with this sword, and it deals an extra 2d6 damage on a hit." +
			"\n" + toUni("Rebirth.") + " If I am suffering from a condition or effect that allows me to make a saving throw at the start or end of each of my turns to end it, I can use a bonus action to expend 2 charges and shed the outer layer of my skin, repeating the saving throw.",
		usages : 5,
		recovery : "dawn",
		additional : "regains 1d4+1",
	},
	"very rare" : {
		name : "Very Rare Hakuja-to",
		rarity : "very rare",
		description : "This weapon has 5 charges and regains 1d4 + 1 expended charges daily at dawn.",
		descriptionFull : 
			"This weapon has 5 charges and regains 1d4 expended charges daily at dawn." +
			"\n" + toUni("Renewal.") + " As a bonus action, I can expend 1 charge to cause the sword to shed its outer layer, revealing a new, sharp blade underneath. Until the end of my turn, I gain a +3 bonus to attack and damage rolls made with this sword, and it deals an extra 3d6 damage on a hit." +
			"\n" + toUni("Rebirth.") + " If I am suffering from a condition or effect that allows me to make a saving throw at the start or end of each of my turns to end it, I can use a bonus action to expend 2 charges and shed the outer layer of my skin, repeating the saving throw with advantage.",
		usages : 5,
		recovery : "dawn",
		additional : "regains 1d4+1",
	},
};

// Hanabi Kicker
MagicItemsList["hanabi kicker"] = {
	name : "Hanabi Kicker",
	source : [["RGttYR", 252]],
	type : "prosthesis",
	attunement : true,
	description : "This prosthesis can replace or enhance a leg. It has the Melee (1d6 bludgeoning, Pugilist) property and the Reeling Blow Superior Strike.",
	action : [["bonus action", "Modular Limb"]],
	choices : ["uncommon", "rare", "very rare"],
	"uncommon" : {
		name : "Uncommon Hanabi Kicker",
		rarity : "uncommon",
		description : "This prosthesis can replace or enhance a leg. It has the Melee (1d6 bludgeoning, Pugilist) property and the Reeling Blow Superior Strike.",
		descriptionFull : 
			toUni("Prosthesis Properties.") + " This prosthesis can replace or enhance a leg. It has the Melee (1d6 bludgeoning, Pugilist) property and the Reeling Blow Superior Strike." +
			"\n" + toUni("Rocket-Assisted Leap.") + " While wearing this prosthesis, my jump distance is doubled, and I can jump up to my maximum distance with or without a running start." +
			"\n" + toUni("Pyrotechnic Kicks.") + " This prosthesis deals an extra 1d4 fire damage to the first target I hit with an unarmed strike using the prosthesis on each of my turns.",
		weaponOptions : {
			name : "Uncommon Hanabi Kicker",
			source : [["RGttYR", 252]],
			regExpSearch : /^(?=.*hanabi)(?=.*kicker).*$/i,
			type : "Martial",
			ability : 1,
			abilitytodamage : true,
			damage : [1, 6, "bludgeoning"],
			range : "Melee",
			description : "Pugilist, Reeling Blow Superior Strike",
			selectNow : true,
		},		
	},
	"rare" : {
		name : "Rare Hanabi Kicker",
		rarity : "rare",
		description : "This prosthesis can replace or enhance a leg. It has the Melee (1d6 bludgeoning, Pugilist) property and the Reeling Blow Superior Strike.",
		descriptionFull : 
			toUni("Prosthesis Properties.") + " This prosthesis can replace or enhance a leg. It has the Melee (1d6 bludgeoning, Pugilist) property and the Reeling Blow Superior Strike." +
			"\n" + toUni("Rocket-Assisted Leap.") + " While wearing this prosthesis, my jump distance is doubled, and I can jump up to my maximum distance with or without a running start." +
			"\n" + toUni("Pyrotechnic Kicks.") + " This prosthesis deals an extra 1d6 fire damage to the first target I hit with an unarmed strike using the prosthesis on each of my turns. If I roll a 6 on the extra damage against a creature, that creature must succeed on a DC 15 Constitution saving throw or be blinded until the end of its next turn.",
		weaponOptions : {
			name : "Rare Hanabi Kicker",
			source : [["RGttYR", 252]],
			regExpSearch : /^(?=.*hanabi)(?=.*kicker).*$/i,
			type : "Martial",
			ability : 1,
			abilitytodamage : true,
			damage : [1, 6, "bludgeoning"],
			range : "Melee",
			description : "Pugilist, Reeling Blow Superior Strike",
			selectNow : true,
		},	
	},
	"very rare" : {
		name : "Very Rare Hanabi Kicker",
		rarity : "very rare",
		description : "This prosthesis can replace or enhance a leg. It has the Melee (1d6 bludgeoning, Pugilist), Flierwork property, and the Reeling Blow Superior Strike.",
		descriptionFull : 
			toUni("Prosthesis Properties.") + " This prosthesis can replace or enhance a leg. It has the Melee (1d6 bludgeoning, Pugilist) property and the Reeling Blow Superior Strike." +
			"\n" + toUni("Rocket-Assisted Leap.") + " While wearing this prosthesis, my jump distance is doubled, and I can jump up to my maximum distance with or without a running start." +
			"\n" + toUni("Pyrotechnic Kicks.") + " This prosthesis deals an extra 1d6 fire damage to the first target I hit with an unarmed strike using the prosthesis on each of my turns. If I roll a 6 on the extra damage against a creature, that creature must succeed on a DC 16 Constitution saving throw or be blinded until the end of its next turn." +
			"\n" + toUni("Flierwork.") + " As a bonus action while wearing this prosthesis, I can increase the output of the rocket built into it, gaining a flying speed of 60 feet for 1 minute. Once this property of the prosthesis has been used, it can’t be used again until the next dawn.",
		weaponOptions : {
			name : "Very Rare Hanabi Kicker",
			source : [["RGttYR", 252]],
			regExpSearch : /^(?=.*hanabi)(?=.*kicker).*$/i,
			type : "Martial",
			ability : 1,
			abilitytodamage : true,
			damage : [1, 6, "bludgeoning"],
			range : "Melee",
			description : "Pugilist, Reeling Blow Superior Strike, Flierwork",
			selectNow : true,
		},
		action : [["bonus action", "Flierwork"]],
		extraLimitedFeatures : [{
			name: "Flierwork",
			usages : 1,
			recovery : "dawn",
		}],			
	},
};

// Helping Hand
MagicItemsList["helping hand"] = {
	name : "Helping Hand",
	source : [["RGttYR", 253]],
	type : "prosthesis",
	attunement : true,
	description : "This prosthesis has 4 charges and regains 1d4 expended charges daily at dawn.",
	choices : ["uncommon", "rare", "very rare"],
	"uncommon" : {
		name : "Uncommon Helping Hand",
		rarity : "uncommon",
		description : "This prosthesis has 4 charges and regains 1d4 expended charges daily at dawn.",
		descriptionFull : 
			"This prosthesis has 4 charges and regains 1d4 expended charges daily at dawn." +
			"\n" + toUni("Prosthesis Properties.") + " This prosthesis can enhance or replace an arm. It has the Hookshot (40 ft.) property. Instead of firing a hook, the prosthesis allows me to manipulate three Tiny mechanical puppets that grab onto the target. Instead of rope, the puppets are connected to the prosthesis by wires of pure magic, which can’t be damaged or destroyed. It otherwise functions in the same way." +
			"\n" + toUni("Improved Hookshot.") + " As an action while the puppets are attached to a target, I can reel myself in. When I do, I move a number of feet up to the item’s Hookshot range in a straight line towards the puppets. In addition, the DC of the ability check required to forcefully detach the puppets increases to 13." +
			"\n" + toUni("Assistance at a Distance.") + " As a bonus action, I can expend 1 charge to take the Help action, manipulating the puppets to support my allies. When I do so to aid an ally in attacking a creature, the target of that attack can be up to 40 feet away from me. Alternatively, I can expend 1 charge as a bonus action to have the puppets feed a potion to a willing creature that me can see within 40 feet of me.",	
		action : [["bonus action", "Assistance at a Distance"]],	
		usages : 4,
		recovery : "dawn",
		additional : "regains 1d4",
	},
	"rare" : {
		name : "Rare Helping Hand",
		rarity : "rare",
		description : "This prosthesis has 5 charges and regains 1d4 + 1 expended charges daily at dawn.",
		descriptionFull : 
			"This prosthesis has 5 charges and regains 1d4 + 1 expended charges daily at dawn." +
			"\n" + toUni("Prosthesis Properties.") + " This prosthesis can enhance or replace an arm. It has the Hookshot (40 ft.) property. Instead of firing a hook, the prosthesis allows me to manipulate three Tiny mechanical puppets that grab onto the target. Instead of rope, the puppets are connected to the prosthesis by wires of pure magic, which can’t be damaged or destroyed. It otherwise functions in the same way." +
			"\n" + toUni("Improved Hookshot.") + " As an action while the puppets are attached to a target, I can reel myself in. When I do, I move a number of feet up to the item’s Hookshot range in a straight line towards the puppets. In addition, the DC of the ability check required to forcefully detach the puppets increases to 15." +
			"\n" + toUni("Assistance at a Distance.") + " As a bonus action, I can expend 1 charge to take the Help action, manipulating the puppets to support my allies. When I do so to aid an ally in attacking a creature, the target of that attack can be up to 40 feet away from me. Alternatively, I can expend 1 charge as a bonus action to have the puppets feed a potion to a willing creature that me can see within 40 feet of me.",		
		action : [["bonus action", "Assistance at a Distance"]],	
		usages : 5,
		recovery : "dawn",
		additional : "regains 1d4+1",
	},
	"very rare" : {
		name : "Very Rare Helping Hand",
		rarity : "very rare",
		description : "This prosthesis has 5 charges and regains 1d4 + 1 expended charges daily at dawn.",
		descriptionFull : 
			"This prosthesis has 5 charges and regains 1d4 + 1 expended charges daily at dawn." +
			"\n" + toUni("Prosthesis Properties.") + " This prosthesis can enhance or replace an arm. It has the Hookshot (40 ft.) property. Instead of firing a hook, the prosthesis allows me to manipulate three Tiny mechanical puppets that grab onto the target. Instead of rope, the puppets are connected to the prosthesis by wires of pure magic, which can’t be damaged or destroyed. It otherwise functions in the same way." +
			"\n" + toUni("Improved Hookshot.") + " As an action while the puppets are attached to a target, I can reel myself in. When I do, I move a number of feet up to the item’s Hookshot range in a straight line towards the puppets. In addition, the DC of the ability check required to forcefully detach the puppets increases to 16." +
			"\n" + toUni("Assistance at a Distance.") + " As a bonus action, I can expend 1 charge to take the Help action, manipulating the puppets to support my allies. When I do so to aid an ally in attacking a creature, the target of that attack can be up to 40 feet away from me. Alternatively, I can expend 1 charge as a bonus action to have the puppets feed a potion to a willing creature that me can see within 40 feet of me." +
			"\n" + toUni("Create Puppets.") + " While wearing this prosthesis, I can cast the animate objects spell. When I do, strings of magic extend from my prosthesis to the objects I animate, which I manipulate like puppets. If one of these objects is ever more than 30 feet away from me, it ceases to be animated by the spell. Once this property of the prosthesis has been used, it can’t be used again until the next dawn.",
		action : [["bonus action", "Assistance at a Distance"]],	
		usages : 5,
		recovery : "dawn",
		additional : "regains 1d4+1",
	},
};

// Iron Kasa
MagicItemsList["iron kasa"] = {
	name : "Iron Kasa",
	source : [["RGttYR", 254]],
	type : "prosthesis",
	description : "This prosthesis can enhance or replace an arm. It has the Hookshot (15 ft.), Integrated (shield), and Launch (1d6 bludgeoning, 15 ft.) properties.",
	choices : ["common", "uncommon", "rare", "very rare"],
	"common" : {
		name : "Common Iron Kasa",
		rarity : "common",
		description : "This prosthesis can enhance or replace an arm. It has the Hookshot (15 ft.), Integrated (shield), and Launch (1d6 bludgeoning, 15 ft.) properties.",
		descriptionFull : 
			"This prosthesis can enhance or replace an arm. It has the Hookshot (15 ft.), Integrated (shield), and Launch (1d6 bludgeoning, 15 ft.) properties."+
			"\n" + toUni("Improved Hookshot.") + " This prosthesis uses a shield instead of a hook for its Hookshot property. As an action while the shield is attached to a target, I can reel myself in. When I do, I move a number of feet up to the item’s Hookshot range in a straight line towards the shield.",
		weaponOptions : {
			name : "Common Iron Kasa",
			source : [["RGttYR", 254]],
			regExpSearch : /^(?=.*iron)(?=.*kasa).*$/i,
			type : "Martial",
			ability : 2,
			abilitytodamage : true,
			damage : [1, 6, "bludgeoning"],
			range : "15 ft",
			description : "Hookshot (15 ft.), Integrated (shield)",
			selectNow : true,
		},
	},
	"uncommon" : {
		name : "Uncommon Iron Kasa",
		rarity : "uncommon",
		description : "This prosthesis can enhance or replace an arm. It has the Hookshot (15 ft.), Integrated (shield), and Launch (1d6 bludgeoning, 15 ft.) properties.",
		descriptionFull : 
			"This prosthesis can enhance or replace an arm. It has the Hookshot (15 ft.), Integrated (shield), and Launch (1d6 bludgeoning, 15 ft.) properties."+
			"\n" + toUni("Improved Hookshot.") + " This prosthesis uses a shield instead of a hook for its Hookshot property. As an action while the shield is attached to a target, I can reel myself in. When I do, I move a number of feet up to the item’s Hookshot range in a straight line towards the shield. In addition, the DC of the ability check required to forcefully detach the shield increases to 13."+
			"\n" + toUni("Saving Throw.") + " As a reaction when a creature I can see within the prosthesis’ Hookshot range is hit by an attack, I can launch the shield in front of it, granting it a +2 bonus to AC against the attack and potentially causing it to miss. In order to use this reaction, the integrated shield must be extended and must not be attached to a target as part of the Hookshot property.",
		weaponOptions : {
			name : "Uncommon Iron Kasa",
			source : [["RGttYR", 254]],
			regExpSearch : /^(?=.*iron)(?=.*kasa).*$/i,
			type : "Martial",
			ability : 2,
			abilitytodamage : true,
			damage : [1, 6, "bludgeoning"],
			range : "15 ft",
			description : "Hookshot (15 ft.), Integrated (shield), Saving Throw",
			selectNow : true,
		},
		action : [["reaction", "Saving Throw"]],
	},
	"rare" : {
		name : "Rare Iron Kasa",
		rarity : "rare",
		description : "This prosthesis can enhance or replace an arm. It has the Hookshot (30 ft.), Integrated (shield), and Launch (1d6 bludgeoning, 15 ft.) properties.",
		descriptionFull : 
			"This prosthesis can enhance or replace an arm. It has the Hookshot (30 ft.), Integrated (shield), and Launch (1d6 bludgeoning, 15 ft.) properties."+
			"\n" + toUni("Improved Hookshot.") + " This prosthesis uses a shield instead of a hook for its Hookshot property. As an action while the shield is attached to a target, I can reel myself in. When I do, I move a number of feet up to the item’s Hookshot range in a straight line towards the shield. In addition, the DC of the ability check required to forcefully detach the shield increases to 15."+
			"\n" + toUni("Saving Throw.") + " As a reaction when a creature I can see within the prosthesis’ Hookshot range is hit by an attack, I can launch the shield in front of it, granting it a +2 bonus to AC against the attack and potentially causing it to miss. In order to use this reaction, the integrated shield must be extended and must not be attached to a target as part of the Hookshot property."+
			"\n" + toUni("Into the Fray.") + " When I cause the Saving Throw property’s triggering attack to miss, I can have the shield attach itself to a surface within 5 feet of the attacked creature and reel myself in as per the Improved Hookshot property as part of the same reaction. When I do, I can make a melee attack against the attacking creature if it’s within my reach. Once this property of the prosthesis has been used, it can’t be used again until the next dawn.",
		weaponOptions : {
			name : "Rare Iron Kasa",
			source : [["RGttYR", 254]],
			regExpSearch : /^(?=.*iron)(?=.*kasa).*$/i,
			type : "Martial",
			ability : 2,
			abilitytodamage : true,
			damage : [1, 6, "bludgeoning"],
			range : "15 ft",
			description : "Hookshot (15 ft.), Integrated (shield), Saving Throw, Into the Fray",
			selectNow : true,
		},
		action : [["reaction", "Saving Throw"]],
		limfeaname : "Into the Fray",
		usages : 1,
		recovery : "dawn",
	},
	"very rare" : {
		name : "Very Rare Iron Kasa",
		rarity : "very rare",
		description : "This prosthesis can enhance or replace an arm. It has the Hookshot (40 ft.), Integrated (shield), and Launch (1d6 bludgeoning, 15 ft.) properties.",
		descriptionFull : 
			"This prosthesis can enhance or replace an arm. It has the Hookshot (40 ft.), Integrated (shield), and Launch (1d6 bludgeoning, 15 ft.) properties."+
			"\n" + toUni("Improved Hookshot.") + " This prosthesis uses a shield instead of a hook for its Hookshot property. As an action while the shield is attached to a target, I can reel myself in. When I do, I move a number of feet up to the item’s Hookshot range in a straight line towards the shield. In addition, the DC of the ability check required to forcefully detach the shield increases to 16."+
			"\n" + toUni("Saving Throw.") + " As a reaction when a creature I can see within the prosthesis’ Hookshot range is hit by an attack, I can launch the shield in front of it, granting it a +2 bonus to AC against the attack and potentially causing it to miss. In order to use this reaction, the integrated shield must be extended and must not be attached to a target as part of the Hookshot property."+
			"\n" + toUni("Into the Fray.") + " When I cause the Saving Throw property’s triggering attack to miss, I can have the shield attach itself to a surface within 5 feet of the attacked creature and reel myself in as per the Improved Hookshot property as part of the same reaction. When I do, I can make a melee attack against the attacking creature if it’s within my reach. Once this property of the prosthesis has been used, it can’t be used again until the next dawn.",
		weaponOptions : {
			name : "Very Rare Iron Kasa",
			source : [["RGttYR", 254]],
			regExpSearch : /^(?=.*iron)(?=.*kasa).*$/i,
			type : "Martial",
			ability : 2,
			abilitytodamage : true,
			damage : [1, 6, "bludgeoning"],
			range : "15 ft",
			description : "Hookshot (15 ft.), Integrated (shield), Saving Throw, Into the Fray",
			selectNow : true,
		},	
		action : [["reaction", "Saving Throw"]],
		limfeaname : "Into the Fray",
		usages : 2,
		recovery : "dawn",
	},
};

// Jishin, Earth Render
MagicItemsList["jishin, earth render"] = {
	name : "Jishin, Earth Render",
	source : [["RGttYR", 255]],
	type : "weapon (any sword)",
	description : "This weapon has 4 charges and regains 1d4 expended charges daily at dawn.",
	attunement : true,
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "brackets",
		descriptionChange : ["replace", "sword"],
		itemName1stPage : ["brackets ", "Jishin, Earth Render"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /sword|scimitar|rapier/i;
			return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
		}
	},
	choices : ["uncommon", "rare", "very rare"],
	"uncommon" : {
		name : "Uncommon Jishin, Earth Render",
		rarity : "uncommon",
		description : "This weapon has 4 charges and regains 1d4 expended charges daily at dawn.",
		descriptionFull : 
			"This weapon has 4 charges and regains 1d4 expended charges daily at dawn." +
			"\n" + toUni("Heat Holder.") + " As an action while holding the sword, I can expend 2 charge to cast the heat metal spell (save DC 13). When heat metal is cast on this weapon, the heat doesn’t propagate past the guard, and its wielder isn’t subjected to the normal effects of the spell. Instead, the weapon deals an extra 1d8 fire damage to each target it hits while affected by the spell."+
			"\n" + toUni("Lavaburst.") + " As an action while holding the sword, I can expend 2 charge to cause a 10-foot-diameter circle of earth centred on a point I can see within 60 feet of me to fracture and warp, spurting forth sprays of lava. For 1 minute or until my concentration ends (as if concentrating on a spell), the area is difficult terrain, and each creature that starts its turn in the area or enters the area for the first time on its turn must make a DC 13 Constitution saving throw, taking 3d6 fire damage on a failed save, or half as much damage on a successful one.",
		usages : 4,
		recovery : "dawn",
		additional : "regains 1d4",
	},
	"rare" : {
		name : "Rare Jishin, Earth Render",
		rarity : "rare",
		description : "This weapon has 4 charges and regains 1d4 expended charges daily at dawn.",
		descriptionFull : 
			"This weapon has 4 charges and regains 1d4 expended charges daily at dawn." +
			"\n" + toUni("Heat Holder.") + " As an action while holding the sword, I can expend 1 charge to cast the heat metal spell (save DC 15). When heat metal is cast on this weapon, the heat doesn’t propagate past the guard, and its wielder isn’t subjected to the normal effects of the spell. Instead, the weapon deals an extra 1d8 fire damage to each target it hits while affected by the spell."+
			"\n" + toUni("Lavaburst.") + " As an action while holding the sword, I can expend 1 charge to cause a 10-foot-diameter circle of earth centred on a point I can see within 60 feet of me to fracture and warp, spurting forth sprays of lava. For 1 minute or until my concentration ends (as if concentrating on a spell), the area is difficult terrain, and each creature that starts its turn in the area or enters the area for the first time on its turn must make a DC 15 Constitution saving throw, taking 3d8 fire damage on a failed save, or half as much damage on a successful one."+
			"\n" + toUni("Tectonic Shift.") + " As an action while holding the sword and standing on earth, I can expend up to 3 charges to cause a nonmagical slab of rock to burst up from the ground at a point I can see within 30 feet of me. The slab is a rectangle 10 feet high, 2 inches thick, and has a length in feet equal to five times the number of charges expended, facing a direction of my choice. The slab is an object made of stone that has AC 15, 60 hit points, and vulnerability to thunder damage. When it is reduced to 0 hit points, it is destroyed.",
		usages : 4,
		recovery : "dawn",
		additional : "regains 1d4",
	},
	"very rare" : {
		name : "Very Rare Jishin, Earth Render",
		rarity : "very rare",
		description : "This weapon has 6 charges and regains 1d4 + 2 expended charges daily at dawn.",
		descriptionFull : 
			"This weapon has 6 charges and regains 1d4 + 2 expended charges daily at dawn." +
			"\n" + toUni("Heat Holder.") + " As an action while holding the sword, I can expend 1 charge to cast the heat metal spell (save DC 16). When heat metal is cast on this weapon, the heat doesn’t propagate past the guard, and its wielder isn’t subjected to the normal effects of the spell. Instead, the weapon deals an extra 2d6 fire damage to each target it hits while affected by the spell."+
			"\n" + toUni("Lavaburst.") + " As an action while holding the sword, I can expend 1 charge to cause a 10-foot-diameter circle of earth centred on a point I can see within 60 feet of me to fracture and warp, spurting forth sprays of lava. For 1 minute or until my concentration ends (as if concentrating on a spell), the area is difficult terrain, and each creature that starts its turn in the area or enters the area for the first time on its turn must make a DC 16 Constitution saving throw, taking 3d8 fire damage on a failed save, or half as much damage on a successful one."+
			"\n" + toUni("Tectonic Shift.") + " As an action while holding the sword and standing on earth, I can expend up to 3 charges to cause a nonmagical slab of rock to burst up from the ground at a point I can see within 30 feet of me. The slab is a rectangle 10 feet high, 2 inches thick, and has a length in feet equal to five times the number of charges expended, facing a direction of my choice. The slab is an object made of stone that has AC 15, 60 hit points, and vulnerability to thunder damage. When it is reduced to 0 hit points, it is destroyed.",
		usages : 4,
		recovery : "dawn",
		additional : "regains 1d4+2",
	},
	"legendary" : {
		name : "Legendary Jishin, Earth Render",
		rarity : "legendary",
		description : "This weapon has 8 charges and regains 1d4 + 4 expended charges daily at dawn.",
		descriptionFull : 
			"This weapon has 8 charges and regains 1d4 + 4 expended charges daily at dawn." +
			"\n" + toUni("Heat Holder.") + " As an action while holding the sword, I can expend 1 charge to cast the heat metal spell (save DC 17). When heat metal is cast on this weapon, the heat doesn’t propagate past the guard, and its wielder isn’t subjected to the normal effects of the spell. Instead, the weapon deals an extra 2d8 fire damage to each target it hits while affected by the spell."+
			"\n" + toUni("Lavaburst.") + " As an action while holding the sword, I can expend 1 charge to cause a 10-foot-diameter circle of earth centred on a point I can see within 60 feet of me to fracture and warp, spurting forth sprays of lava. For 1 minute or until my concentration ends (as if concentrating on a spell), the area is difficult terrain, and each creature that starts its turn in the area or enters the area for the first time on its turn must make a DC 17 Constitution saving throw, taking 3d10 fire damage on a failed save, or half as much damage on a successful one."+
			"\n" + toUni("Tectonic Shift.") + " As an action while holding the sword and standing on earth, I can expend up to 3 charges to cause a nonmagical slab of rock to burst up from the ground at a point I can see within 30 feet of me. The slab is a rectangle 10 feet high, 2 inches thick, and has a length in feet up to 10 ft per charges expended, facing a direction of my choice. The slab is an object made of stone that has AC 15, 60 hit points, and vulnerability to thunder damage. When it is reduced to 0 hit points, it is destroyed. I can expend any number of charges when using the Tectonic Shift property.",
		usages : 4,
		recovery : "dawn",
		additional : "regains 1d4+4",
	},
};

// Kageboshi
MagicItemsList["kageboshi"] = {
	name : "Kageboshi",
	source : [["RGttYR", 256]],
	type : "prosthesis",
	description : "This prosthesis can replace or enhance an arm. It has the Hookshot (30 ft.) and Launch (1d6 slashing, 30 ft.) properties, and the Battery Strike Superior Strike.",
	choices : ["common", "uncommon", "rare", "very rare"],
	"common" : {
		name : "Common Kageboshi",
		rarity : "common",
		description : "This prosthesis can replace or enhance an arm. It has the Hookshot (30 ft.) and Launch (1d6 slashing, 30 ft.) properties, and the Battery Strike Superior Strike.",
		descriptionFull : 
			"This prosthesis can replace or enhance an arm. It has the Hookshot (30 ft.) and Launch (1d6 slashing, 30 ft.) properties, and the Battery Strike Superior Strike."+
			"\n" + toUni("Improved Hookshot.") + " This prosthesis uses an oversized throwing star instead of a hook for its Hookshot property. As an action while the throwing star is attached to a target, I can reel myself in. When I do, I move a number of feet up to the item’s Hookshot range in a straight line towards the throwing star. ",
		weaponOptions : {
			name : "Common Kageboshi",
			source : [["RGttYR", 256]],
			regExpSearch : /^(?=.*kageboshi).*$/i,
			type : "Martial",
			ability : 2,
			abilitytodamage : true,
			damage : [1, 6, "slashing"],
			range : "30 ft",
			description : "Hookshot (30 ft.), Battery Strike Superior Strike",
			selectNow : true,
		},
	},
	"uncommon" : {
		name : "Uncommon Kageboshi",
		rarity : "uncommon",
		description : "This prosthesis can replace or enhance an arm. It has the Hookshot (30 ft.) and Launch (1d6 slashing, 30 ft.) properties, and the Battery Strike Superior Strike.",
		descriptionFull : 
			"This prosthesis can replace or enhance an arm. It has the Hookshot (30 ft.) and Launch (1d6 slashing, 30 ft.) properties, and the Battery Strike Superior Strike."+
			"\n" + toUni("Improved Hookshot.") + " This prosthesis uses an oversized throwing star instead of a hook for its Hookshot property. As an action while the throwing star is attached to a target, I can reel myself in. When I do, I move a number of feet up to the item’s Hookshot range in a straight line towards the throwing star. In addition, the DC of the ability check required to forcefully detach the throwing star increases to 13."+
			"\n" + toUni("Shadow Trick.") + " When I make an attack using the Launch property of the prosthesis, I can unsheathe and throw another weapon, concealing it in the throwing star’s shadow. As part of the same action, make another attack against the same target, using a weapon I'm carrying that has both the Light and Thrown properties. I have advantage on the attack roll. Once this property of the prosthesis has been used, it can’t be used again until the next dawn.",
		limfeaname : "Shadow Trick",
		usages : 1,
		recovery : "dawn",
		weaponOptions : {
			name : "Uncommon Kageboshi",
			source : [["RGttYR", 256]],
			regExpSearch : /^(?=.*kageboshi).*$/i,
			type : "Martial",
			ability : 2,
			abilitytodamage : true,
			damage : [1, 6, "slashing"],
			range : "30 ft",
			description : "Hookshot (30 ft.), Battery Strike Superior Strike, Shadow Trick",
			selectNow : true,
		},	
	},
	"rare" : {
		name : "Rare Kageboshi",
		rarity : "rare",
		description : "This prosthesis can replace or enhance an arm. It has the Hookshot (30 ft.), Launch (1d6 slashing, 30 ft.), and Instant Transmission properties, and the Battery Strike Superior Strike.",
		descriptionFull : 
			"This prosthesis can replace or enhance an arm. It has the Hookshot (30 ft.), Launch (1d6 slashing, 30 ft.), and Instant Transmission properties, and the Battery Strike Superior Strike."+
			"\n" + toUni("Improved Hookshot.") + " This prosthesis uses an oversized throwing star instead of a hook for its Hookshot property. As an action while the throwing star is attached to a target, I can reel myself in. When I do, I move a number of feet up to the item’s Hookshot range in a straight line towards the throwing star. In addition, the DC of the ability check required to forcefully detach the throwing star increases to 15."+
			"\n" + toUni("Shadow Trick.") + " When I make an attack using the Launch property of the prosthesis, I can unsheathe and throw another weapon (or two weapons with the Light and Thrown properties, making an attack roll against the same target with advantage for each one), concealing it in the throwing star’s shadow. As part of the same action, make another attack against the same target, using a weapon I'm carrying that has both the Light and Thrown properties. I have advantage on the attack roll. Once this property of the prosthesis has been used, it can’t be used again until the next dawn."+
			"\n" + toUni("Instant Transmission.") + " When I hit a creature with an attack using the prosthesis’ Launch property, I can immediately teleport to an unoccupied space of my choice within 5 feet of the target (no action required). Once this property of the prosthesis has been used, it can’t be used again until the next dawn.",		
		extraLimitedFeatures : [{
			name: "Shadow Trick",
			usages : 2,
			recovery : "dawn",
			},{
			name: "Instant Transmission",
			usages : 1,
			recovery : "dawn",
		}],
		weaponOptions : {
			name : "Rare Kageboshi",
			source : [["RGttYR", 256]],
			regExpSearch : /^(?=.*kageboshi).*$/i,
			type : "Martial",
			ability : 2,
			abilitytodamage : true,
			damage : [1, 6, "slashing"],
			range : "30 ft",
			description : "Hookshot (30 ft.), Battery Strike Superior Strike, Shadow Trick, Instant Transmission",
			selectNow : true,
		},
	},
	"very rare" : {
		name : "Very Rare Kageboshi",
		rarity : "very rare",
		description : "This prosthesis can replace or enhance an arm. It has the Hookshot (30 ft.), Launch (1d6 slashing, 30 ft.), and Instant Transmission properties, and the Battery Strike Superior Strike.",
		descriptionFull : 
			"This prosthesis can replace or enhance an arm. It has the Hookshot (30 ft.), Launch (1d6 slashing, 30 ft.), and Instant Transmission properties, and the Battery Strike Superior Strike."+
			"\n" + toUni("Improved Hookshot.") + " This prosthesis uses an oversized throwing star instead of a hook for its Hookshot property. As an action while the throwing star is attached to a target, I can reel myself in. When I do, I move a number of feet up to the item’s Hookshot range in a straight line towards the throwing star. In addition, the DC of the ability check required to forcefully detach the throwing star increases to 16."+
			"\n" + toUni("Shadow Trick.") + " When I make an attack using the Launch property of the prosthesis, I can unsheathe and throw another weapon (or two weapons with the Light and Thrown properties, making an attack roll against the same target with advantage for each one), concealing it in the throwing star’s shadow. As part of the same action, make another attack against the same target, using a weapon I'm carrying that has both the Light and Thrown properties. I have advantage on the attack roll. Once this property of the prosthesis has been used, it can’t be used again until the next dawn."+
			"\n" + toUni("Instant Transmission.") + " When I hit a creature with an attack using the prosthesis’ Launch property, I can immediately teleport to an unoccupied space of my choice within 5 feet of the target (no action required). Once this property of the prosthesis has been used, it can’t be used again until the next dawn.",		
		extraLimitedFeatures : [{
			name: "Shadow Trick",
			usages : 2,
			recovery : "dawn",
			},{
			name: "Instant Transmission",
			usages : 2,
			recovery : "dawn",
		}],
		weaponOptions : {
			name : "Very Rare Kageboshi",
			source : [["RGttYR", 256]],
			regExpSearch : /^(?=.*kageboshi).*$/i,
			type : "Martial",
			ability : 2,
			abilitytodamage : true,
			damage : [1, 6, "slashing"],
			range : "30 ft",
			description : "Hookshot (30 ft.), Battery Strike Superior Strike, Shadow Trick, Instant Transmission",
			selectNow : true,
		},	
	},
};

// Kanaboom Stick
MagicItemsList["kanaboom stick"] = {
	name : "Kanaboom Stick",
	source : [["RGttYR", 257]],
	type : "weapon (mace)",
	description : "The fact that demons are reborn after being killed on the Material Plane leaves them with a laissez-faire attitude towards self-preservation. Taking advantage of their innate resistance to the elements, they can often be found in possession of these crudely enchanted maces that leave a minor path of flaming destruction in their wake. The only limit to this weapon is how much punishment its wielder can suffer.",
	choices : ["uncommon", "rare", "very rare"],
	"uncommon" : {
		name : "Uncommon Kanaboom Stick",
		rarity : "uncommon",
		description : "The fact that demons are reborn after being killed on the Material Plane leaves them with a laissez-faire attitude towards self-preservation. Taking advantage of their innate resistance to the elements, they can often be found in possession of these crudely enchanted maces that leave a minor path of flaming destruction in their wake. The only limit to this weapon is how much punishment its wielder can suffer.",
		descriptionFull : 
			"The fact that demons are reborn after being killed on the Material Plane leaves them with a laissez-faire attitude towards self-preservation. Taking advantage of their innate resistance to the elements, they can often be found in possession of these crudely enchanted maces that leave a minor path of flaming destruction in their wake. The only limit to this weapon is how much punishment its wielder can suffer."+
			"\n" + "As an action, I can stick this magic weapon into an open flame or light it as I would a torch. Either way, the metal glows with incandescent heat as lava-like veins lick up the weapon’s length for 10 minutes, shedding dim light in a 15-foot radius."+
			"\n" + toUni("Bigger Booms.") + " While this weapon is lit, it creates fiery explosions with each strike. The first time on each of my turns that I hit a target with an attack using it, me, the target, and each creature within 5 feet of the target must make a DC 13 Dexterity saving throw, taking 2d4 fire damage on a failed save, or half as much damage on a successful one. Flammable objects within this area are set alight if not being worn or carried.",
		weaponOptions : {
			name : "Uncommon Kanaboom Stick",
			baseWeapon : "mace",
			source : [["RGttYR", 257]],
			regExpSearch : /^(?=.*kanaboom)(?=.*stick).*$/i,
			description : "First hit, 5 ft DC13 Dex save 2d4 Fire Dmg; saves half",
			selectNow : true,
		},	
	},
	"rare" : {
		name : "Rare Kanaboom Stick",
		rarity : "rare",
		description : "The fact that demons are reborn after being killed on the Material Plane leaves them with a laissez-faire attitude towards self-preservation. Taking advantage of their innate resistance to the elements, they can often be found in possession of these crudely enchanted maces that leave a minor path of flaming destruction in their wake. The only limit to this weapon is how much punishment its wielder can suffer.",
		descriptionFull : 
			"The fact that demons are reborn after being killed on the Material Plane leaves them with a laissez-faire attitude towards self-preservation. Taking advantage of their innate resistance to the elements, they can often be found in possession of these crudely enchanted maces that leave a minor path of flaming destruction in their wake. The only limit to this weapon is how much punishment its wielder can suffer."+
			"\n" + "As an action, I can stick this magic weapon into an open flame or light it as I would a torch. Either way, the metal glows with incandescent heat as lava-like veins lick up the weapon’s length for 10 minutes, shedding dim light in a 15-foot radius."+
			"\n" + toUni("Bigger Booms.") + " While this weapon is lit, it creates fiery explosions with each strike. The first time on each of my turns that I hit a target with an attack using it, me, the target, and each creature within 5 feet of the target must make a DC 15 Dexterity saving throw, taking 4d4 fire damage on a failed save, or half as much damage on a successful one. Flammable objects within this area are set alight if not being worn or carried.",
		weaponOptions : {
			name : "Rare Kanaboom Stick",
			baseWeapon : "mace",
			source : [["RGttYR", 257]],
			regExpSearch : /^(?=.*kanaboom)(?=.*stick).*$/i,
			description : "First hit, 5 ft DC15 Dex save 4d4 Fire Dmg; saves half",
			selectNow : true,
		},
	},
	"very rare" : {
		name : "Very Rare Kanaboom Stick",
		rarity : "very rare",
		description : "The fact that demons are reborn after being killed on the Material Plane leaves them with a laissez-faire attitude towards self-preservation. Taking advantage of their innate resistance to the elements, they can often be found in possession of these crudely enchanted maces that leave a minor path of flaming destruction in their wake. The only limit to this weapon is how much punishment its wielder can suffer.",
		descriptionFull : 
			"The fact that demons are reborn after being killed on the Material Plane leaves them with a laissez-faire attitude towards self-preservation. Taking advantage of their innate resistance to the elements, they can often be found in possession of these crudely enchanted maces that leave a minor path of flaming destruction in their wake. The only limit to this weapon is how much punishment its wielder can suffer."+
			"\n" + "As an action, I can stick this magic weapon into an open flame or light it as I would a torch. Either way, the metal glows with incandescent heat as lava-like veins lick up the weapon’s length for 10 minutes, shedding dim light in a 15-foot radius."+
			"\n" + toUni("Bigger Booms.") + " While this weapon is lit, it creates fiery explosions with each strike. The first time on each of my turns that I hit a target with an attack using it, me, the target, and each creature within 5 feet of the target must make a DC 16 Dexterity saving throw, taking 8d4 fire damage on a failed save, or half as much damage on a successful one. Flammable objects within this area are set alight if not being worn or carried.",
		weaponOptions : {
			name : "Very Rare Kanaboom Stick",
			baseWeapon : "mace",
			source : [["RGttYR", 257]],
			regExpSearch : /^(?=.*kanaboom)(?=.*stick).*$/i,
			description : "First hit, 5 ft DC16 Dex save 8d4 Fire Dmg; saves half",
			selectNow : true,
		},
	},
};

// Kappa’s Aquatic Visage
MagicItemsList["kappa’s aquatic visage"] = {
	name : "Kappa’s Aquatic Visage",
	source : [["RGttYR", 257]],
	type : "wondrous item",	
	rarity : "rare",
	attunement: true,
	description : "This mask has 7 charges and regains 1d4 + 3 expended charges daily at dawn. If I am knocked prone against my will while wearing it, I must make a DC 15 Dexterity saving throw. On a failed save, the mask loses 1 charge as some of its water is spilled.",
	descriptionFull : 
		"This mask has 7 charges and regains 1d4 + 3 expended charges daily at dawn. If I am knocked prone against my will while wearing it, I must make a DC 15 Dexterity saving throw. On a failed save, the mask loses 1 charge as some of its water is spilled."+
		"\n" + toUni("Aquatic Predator") + " While wearing this mask, I feel more at ease in the water. I gain a swimming speed of 30 feet, and I have advantage on ability checks made to grapple creatures and avoid or escape being grappled while underwater."+
		"\n" + toUni("Water Spells") + " While wearing this mask, I can expend 1 or more charges to cast one of the following spells from it (+7 to hit, save DC 15): create or destroy water (1 charge), water breathing (3 charges), or water wyrm (3 charges)."+
		"\n" + toUni("Curse") + " This item is cursed, and attuning to it extends the curse to me. While cursed in this way, I gain a mild fixation on challenging strangers to sumo wrestling matches, and all other hobbies seem mundane and joyless in comparison.",
	usages : 7,
	recovery : "dawn",
	additional : "regains 1d4+3",
	fixedDC : 15,
	fixedSpAttack : 7,
	spellFirstColTitle : "Ch",
	spellcastingBonus : [{
		name : "1 charge",
		spells : ["create or destroy water"],
		selection : ["create or destroy water"],
		firstCol : 1
	},{
		name : "3 charges",
		spells : ["water breathing"],
		selection : ["water breathing"],
		firstCol : 3
	},{
		name : "3 charges",
		spells : ["water wyrm"],
		selection : ["water wyrm"],
	firstCol : 3
	}],	
}; 
	
// Kappa’s Consuming Visage
MagicItemsList["kappa’s consuming visage"] = {
	name : "Kappa’s Consuming Visage",
	source : [["RGttYR", 257]],
	type : "wondrous item",	
	rarity : "rare",
	attunement: true,
	description : "This mask has 7 charges and regains 1d4 + 3 expended charges daily at dawn. If I am knocked prone against my will while wearing it, I must make a DC 15 Dexterity saving throw. On a failed save, the mask loses 1 charge as some of its water is spilled.",
	descriptionFull : 
		"This mask has 7 charges and regains 1d4 + 3 expended charges daily at dawn. If I am knocked prone against my will while wearing it, I must make a DC 15 Dexterity saving throw. On a failed save, the mask loses 1 charge as some of its water is spilled."+
		"\n" + toUni("Aquatic Predator") + " While wearing this mask, I feel more at ease in the water. I gain a swimming speed of 30 feet, and I have advantage on ability checks made to grapple creatures and avoid or escape being grappled while underwater."+
		"\n" + toUni("Consuming Spells") + " While wearing this mask, I can expend 1 or more charges to cast one of the followings pells from it (+7 to hit, save DC 15): endoleech (2 charges), extract shirikodama (3 charges), or vampiric touch (3 charges)."+
		"\n" + toUni("Curse") + " This item is cursed, and attuning to it extends the curse to me. While cursed in this way, I gain a mild fixation on acquiring and eating cucumbers, with all other food tasting bland and boring in comparison.",
	usages : 7,
	recovery : "dawn",
	additional : "regains 1d4+3",
	fixedDC : 15,
	fixedSpAttack : 7,
	spellFirstColTitle : "Ch",
	spellcastingBonus : [{
		name : "2 charges",
		spells : ["endoleech"],
		selection : ["endoleech"],
		firstCol : 2
	},{
		name : "3 charges",
		spells : ["extract shirikodama"],
		selection : ["extract shirikodama"],
		firstCol : 3
	},{
		name : "3 charges",
		spells : ["vampiric touch"],
		selection : ["vampiric touch"],
	firstCol : 3
	}],	
};

// Kitsune Mask
MagicItemsList["kitsune mask"] = {
	name : "Kitsune Mask",
	source : [["RGttYR", 258]],
	type : "wondrous item",	
	attunement: true,
	description : "This mask has 9 charges, which manifest as nine incorporeal, fox-like tails. It regains 1d6 + 3 expended charges daily at dawn.",
	choices : ["uncommon", "rare", "very rare"],
	"uncommon" : {
		name : "Uncommon Kitsune Mask",
		rarity : "uncommon",
		description : "This mask has 5 charges, which manifest as nine incorporeal, fox-like tails. It regains 1d4 + 1 expended charges daily at dawn.",
		descriptionFull : 
			"This mask has 5 charges, which manifest as nine incorporeal, fox-like tails. It regains 1d4 + 1 expended charges daily at dawn."+
			"\n" + toUni("Soul Vortex") + " As an action while wearing the mask, I can expend 2 charges to conjure a fierce vortex of ethereal fire in a 5-foot-radius, 40-foot-high cylinder centred on a point within 120 feet of me. The vortex lasts for 1 minute, or until my concentration ends, as if concentrating on a spell. Dim light fills the cylinder. When a creature enters the area for the first time on a turn or starts its turn there, it is engulfed in raging purple flames and must make a DC 13 Intelligence saving throw, taking 3d6 psychic damage on a failed save, or half as much damage on a successful one. On each of my turns, I can use an action to move the vortex up to 60 feet in any direction."+
			"\n" + toUni("Spirit Ray") + " As an action while wearing the mask, I can spend 2 to 5 charges to whip a number of tails into ghostly rays which I hurl at creatures within 120 feet of me. I produce three rays for the first two charges spent, and an additional ray for each charge beyond that. Make a ranged spell attack (+5 to hit) for each ray, dealing 2d6 psychic damage on a hit.",
		usages : 9,
		recovery : "dawn",
		additional : "regains 1d6+3",	
	},
	"rare" : {
		name : "Rare Kitsune Mask",
		rarity : "rare",
		description : "This mask has 9 charges, which manifest as nine incorporeal, fox-like tails. It regains 1d6 + 3 expended charges daily at dawn.",
		descriptionFull : 
			"This mask has 9 charges, which manifest as nine incorporeal, fox-like tails. It regains 1d6 + 3 expended charges daily at dawn."+
			"\n" + toUni("Soul Vortex") + " As an action while wearing the mask, I can expend 2 charges to conjure a fierce vortex of ethereal fire in a 5-foot-radius, 40-foot-high cylinder centred on a point within 120 feet of me. The vortex lasts for 1 minute, or until my concentration ends, as if concentrating on a spell. Dim light fills the cylinder. When a creature enters the area for the first time on a turn or starts its turn there, it is engulfed in raging purple flames and must make a DC 15 Intelligence saving throw, taking 3d6 psychic damage on a failed save, or half as much damage on a successful one. On each of my turns, I can use an action to move the vortex up to 60 feet in any direction."+
			"\n" + toUni("Spirit Ray") + " As an action while wearing the mask, I can spend 2 to 5 charges to whip a number of tails into ghostly rays which I hurl at creatures within 120 feet of me. I produce three rays for the first two charges spent, and an additional ray for each charge beyond that. Make a ranged spell attack (+7 to hit) for each ray, dealing 2d6 psychic damage on a hit.",
		usages : 9,
		recovery : "dawn",
		additional : "regains 1d6+3",	
	},
	"very rare" : {
		name : "Rare Kitsune Mask",
		rarity : "rare",
		description : "This mask has 9 charges, which manifest as nine incorporeal, fox-like tails. It regains 1d6 + 3 expended charges daily at dawn.",
		descriptionFull : 
			"This mask has 9 charges, which manifest as nine incorporeal, fox-like tails. It regains 1d6 + 3 expended charges daily at dawn."+
			"\n" + toUni("Soul Vortex") + " As an action while wearing the mask, I can expend 2 charges to conjure a fierce vortex of ethereal fire in a 5-foot-radius, 40-foot-high cylinder centred on a point within 120 feet of me. The vortex lasts for 1 minute, or until my concentration ends, as if concentrating on a spell. Dim light fills the cylinder. When a creature enters the area for the first time on a turn or starts its turn there, it is engulfed in raging purple flames and must make a DC 16 Intelligence saving throw, taking 4d6 psychic damage on a failed save, or half as much damage on a successful one. On each of my turns, I can use an action to move the vortex up to 60 feet in any direction."+
			"\n" + toUni("Spirit Ray") + " As an action while wearing the mask, I can spend 2 to 5 charges to whip a number of tails into ghostly rays which I hurl at creatures within 120 feet of me. I produce three rays for the first two charges spent, and an additional ray for each charge beyond that. Make a ranged spell attack (+8 to hit) for each ray, dealing 3d6 psychic damage on a hit.",
		usages : 9,
		recovery : "dawn",
		additional : "regains 1d6+3",	
	},
};

// Mask of the Oni
MagicItemsList["mask of the oni"] = {
	name : "Mask of the Oni",
	source : [["RGttYR", 258]],
	type : "wondrous item",	
	attunement: true,
	description : "While wearing this mask, I have advantage on Intimidation checks and disadvantage on Persuasion checks. I can communicate with Fiends and Giants as if we shared a language.",
	choices : ["uncommon", "rare", "very rare"],
	"uncommon" : {
		name : "Uncommon Mask of the Oni",
		rarity : "uncommon",
		description : "While wearing this mask, I have advantage on Intimidation checks and disadvantage on Persuasion checks. I can communicate with Fiends and Giants as if we shared a language.",
		descriptionFull : 
			"While wearing this mask, I have advantage on Intimidation checks and disadvantage on Persuasion checks. I can communicate with Fiends and Giants as if we shared a language."+
			"\n" + toUni("Demon’s Deceit") + " While wearing the mask, I can cast the disguise self spell. When the spell is cast in this way, I can seem up to 3 feet taller. The spell ends early if I remove the mask. Once this property of the mask has been used, roll a d6. On a 3 or lower, it can’t be used again until the next dawn."+
			"\n" + toUni("Enhanced Attunement") + " As part of an hour-long ritual, I can agree to complete a task set out by the last attuner of this mask, enhancing my attunement to it. When I do so, the mask fuses onto my face, turning my skin red, my teeth gold, and giving my eyes an ethereal, sanguine glow. I can use the Stalker’s Shroud property. I can’t end my attunement to the mask or remove it until I complete the task set out during the ritual. After I complete the task, if I attempt to end my attunement to the mask, I must first set a task for the next enhanced attuner to complete."+
			"\n \u2022" + toUni("EA: Stalker’s Shroud.") + " As a bonus action while wearing the mask, I can become invisible to a creature within 30 feet of me until the start of my next turn. Once this property of the mask has been used, roll a d6. On a 3 or lower, it can’t be used again until the next dawn.",
		usages : 9,
		recovery : "dawn",
		additional : "regains 1d6+3",	
	},
	"rare" : {
		name : "Rare Mask of the Oni",
		rarity : "rare",
		description : "While wearing this mask, I have advantage on Intimidation checks and disadvantage on Persuasion checks. I can communicate with Fiends and Giants as if we shared a language.",
		descriptionFull : 
			"While wearing this mask, I have advantage on Intimidation checks and disadvantage on Persuasion checks. I can communicate with Fiends and Giants as if we shared a language."+
			"\n" + toUni("Demon’s Deceit") + " While wearing the mask, I can cast the disguise self spell. When the spell is cast in this way, I can seem up to 3 feet taller. The spell ends early if I remove the mask. I can use the Demon’s Deceit property an unlimited number of times, without needing to roll afterward."+
			"\n" + toUni("Enhanced Attunement") + " As part of an hour-long ritual, I can agree to complete a task set out by the last attuner of this mask, enhancing my attunement to it. When I do so, the mask fuses onto my face, turning my skin red, my teeth gold, and giving my eyes an ethereal, sanguine glow. I can use the Stalker’s Shroud property. I can’t end my attunement to the mask or remove it until I complete the task set out during the ritual. After I complete the task, if I attempt to end my attunement to the mask, I must first set a task for the next enhanced attuner to complete."+
			"\n \u2022" + toUni("EA: Stalker’s Shroud.") + " As a bonus action while wearing the mask, I can become invisible to a creature within 30 feet of me until the start of my next turn. Once this property of the mask has been used, roll a d6. On a 3 or lower, it can’t be used again until the next dawn.",
		usages : 9,
		recovery : "dawn",
		additional : "regains 1d6+3",	
	},
	"very rare" : {
		name : "Very Rare Mask of the Oni",
		rarity : "very rare",
		description : "While wearing this mask, I have advantage on Intimidation checks and disadvantage on Persuasion checks. I can communicate with Fiends and Giants as if we shared a language.",
		descriptionFull : 
			"While wearing this mask, I have advantage on Intimidation checks and disadvantage on Persuasion checks. I can communicate with Fiends and Giants as if we shared a language."+
			"\n" + toUni("Demon’s Deceit") + " While wearing the mask, I can cast the disguise self spell. When the spell is cast in this way, I can seem up to 3 feet taller. The spell ends early if I remove the mask. I can use the Demon’s Deceit property an unlimited number of times, without needing to roll afterward."+
			"\n" + toUni("Enhanced Attunement") + " As part of an hour-long ritual, I can agree to complete a task set out by the last attuner of this mask, enhancing my attunement to it. When I do so, the mask fuses onto my face, turning my skin red, my teeth gold, and giving my eyes an ethereal, sanguine glow. I can use the Stalker’s Shroud property. I can’t end my attunement to the mask or remove it until I complete the task set out during the ritual. After I complete the task, if I attempt to end my attunement to the mask, I must first set a task for the next enhanced attuner to complete."+
			"\n \u2022" + toUni("EA: Stalker’s Shroud.") + " As a bonus action while wearing the mask, I can become invisible to a creature within 30 feet of me until the start of my next turn. Once this property of the mask has been used, roll a d6. On a 1, it can’t be used again until the next dawn.",
		usages : 9,
		recovery : "dawn",
		additional : "regains 1d6+3",
	},
};

// Mask of the Tengu
MagicItemsList["mask of the tengu"] = {
	name : "Mask of the Tengu",
	source : [["RGttYR", 259]],
	type : "wondrous item",	
	attunement: true,
	description : "When I don this mask, it shifts to match my features, leaving my nose slightly longer than before, but it is otherwise undetectable.",
	choices : ["uncommon", "rare", "very rare"],
	"uncommon" : {
		name : "Uncommon Mask of the Tengu",
		rarity : "uncommon",
		description : "When I don this mask, it shifts to match my features, leaving my nose slightly longer than before, but it is otherwise undetectable.",
		descriptionFull : 
			"When I don this mask, it shifts to match my features, leaving my nose slightly longer than before, but it is otherwise undetectable."+
			"\n" + toUni("Duplicitous Duplication") + " While wearing this mask, I can use a bonus action to create a perfect illusory image of myself. When I create the duplicate, I can choose to have it step out of my own form into an unoccupied space adjacent to me, or I can have it appear in my space while I move into an unoccupied adjacent space without provoking opportunity attacks. This duplicate lasts for 1 minute, or until I dismiss it as a bonus action. As part of the bonus action used to create the duplicate and as a bonus action on subsequent turns, I can have the illusory duplicate move up to my speed to a space I can see. The illusion is indistinguishable from myself, and creatures can’t tell the difference until they see me physically interact with something (such as hitting a target with an attack) or see the illusion fail to physically interact with something (such as being hit with an attack, which passes right through it). Once this property has been used, roll a d4. On a 3 or lower, it can’t be used again until the next dawn."+
			"\n" + toUni("Switcheroo") + " While wearing this mask, when I am the target of an attack by a creature I can see, but before the creature makes its attack roll, I can use my reaction to try to switch places with a creature no more than one size larger than me that I can see within 30 feet of me. If the creature is unwilling, it must make a DC 13 Charisma saving throw. If the creature is willing or fails the saving throw, we switch places, and the creature becomes the new target of the attack. Alternatively, I can choose to switch places with the illusory duplicate created by the Duplicitous Duplication property. Once this property has been used, it can’t be used again until the next dawn.",
		action : [["bonus action", "Duplicitous Duplication"],["reaction", "Switcheroo"]],	
	},
	"rare" : {
		name : "Rare Mask of the Tengu",
		rarity : "rare",
		description : "When I don this mask, it shifts to match my features, leaving my nose slightly longer than before, but it is otherwise undetectable.",
		descriptionFull : 
			"When I don this mask, it shifts to match my features, leaving my nose slightly longer than before, but it is otherwise undetectable."+
			"\n" + toUni("Duplicitous Duplication") + " While wearing this mask, I can use a bonus action to create a perfect illusory image of myself. When I create the duplicate, I can choose to have it step out of my own form into an unoccupied space adjacent to me, or I can have it appear in my space while I move into an unoccupied adjacent space without provoking opportunity attacks. This duplicate lasts for 1 minute, or until I dismiss it as a bonus action. As part of the bonus action used to create the duplicate and as a bonus action on subsequent turns, I can have the illusory duplicate move up to my speed to a space I can see. The illusion is indistinguishable from myself, and creatures can’t tell the difference until they see me physically interact with something (such as hitting a target with an attack) or see the illusion fail to physically interact with something (such as being hit with an attack, which passes right through it). Once this property has been used, roll a d6. On a 3 or lower, it can’t be used again until the next dawn."+
			"\n" + toUni("Switcheroo") + " While wearing this mask, when I am the target of an attack by a creature I can see, but before the creature makes its attack roll, I can use my reaction to try to switch places with a creature no more than one size larger than me that I can see within 30 feet of me. If the creature is unwilling, it must make a DC 15 Charisma saving throw. If the creature is willing or fails the saving throw, we switch places, and the creature becomes the new target of the attack. Alternatively, I can choose to switch places with the illusory duplicate created by the Duplicitous Duplication property. Once the Switcheroo property has been used, roll a d4. On a 3 or lower, it can’t be used again until the next dawn."+
			"\n" + "While wearing this mask, I can cast the disguise self and minor illusion spells (save DC 15). Once disguise self has been cast in this way, it can’t be cast again using the mask until the next dawn.",
		action : [["bonus action", "Duplicitous Duplication"],["reaction", "Switcheroo"]],
		spellcastingBonus : [{
			name : "Rare Mask of the Tengu",
			spells : ["disguise self"],
			selection : ["disguise self"],
			firstCol : "oncelr"
		},{
			name : "Rare Mask of the Tengu",
			spells : ["minor illusion"],
			selection : ["minor illusion"],
			firstCol : "oncelr"
		}],	
	},
	"very rare" : {
		name : "Very Rare Mask of the Tengu",
		rarity : "very rare",
		description : "When I don this mask, it shifts to match my features, leaving my nose slightly longer than before, but it is otherwise undetectable.",
		descriptionFull : 
			"When I don this mask, it shifts to match my features, leaving my nose slightly longer than before, but it is otherwise undetectable."+
			"\n" + toUni("Duplicitous Duplication") + " While wearing this mask, I can use a bonus action to create a perfect illusory image of myself. When I create the duplicate, I can choose to have it step out of my own form into an unoccupied space adjacent to me, or I can have it appear in my space while I move into an unoccupied adjacent space without provoking opportunity attacks. This duplicate lasts for 1 minute, or until I dismiss it as a bonus action. As part of the bonus action used to create the duplicate and as a bonus action on subsequent turns, I can have the illusory duplicate move up to my speed to a space I can see. The illusion is indistinguishable from myself, and creatures can’t tell the difference until they see me physically interact with something (such as hitting a target with an attack) or see the illusion fail to physically interact with something (such as being hit with an attack, which passes right through it). Once this property has been used, roll a d8. On a 3 or lower, it can’t be used again until the next dawn."+
			"\n" + toUni("Switcheroo") + " While wearing this mask, when I am the target of an attack by a creature I can see, but before the creature makes its attack roll, I can use my reaction to try to switch places with a creature no more than one size larger than me that I can see within 30 feet of me. If the creature is unwilling, it must make a DC 16 Charisma saving throw. If the creature is willing or fails the saving throw, we switch places, and the creature becomes the new target of the attack. Alternatively, I can choose to switch places with the illusory duplicate created by the Duplicitous Duplication property. Once the Switcheroo property has been used, roll a d6. On a 3 or lower, it can’t be used again until the next dawn."+
			"\n" + "While wearing this mask, I can cast the disguise self and minor illusion spells at will (save DC 16).",
		action : [["bonus action", "Duplicitous Duplication"],["reaction", "Switcheroo"]],
		spellcastingBonus : [{
			name : "Very Rare Mask of the Tengu",
			spells : ["disguise self"],
			selection : ["disguise self"],
			firstCol : "atwill",
		},{
			name : "Very Rare Mask of the Tengu",
			spells : ["minor illusion"],
			selection : ["minor illusion"],
			firstCol : "atwill",
		}],	
	},
};

// Mindcutter
MagicItemsList["mindcutter"] = {
	name : "Mindcutter",
	source : [["RGttYR", 260]],
	type : "weapon (chakram)",
	attunement: true,
	description : "This weapon appears to be a metal disk with three prongs. While I wield it, blades of psionic energy form around the prongs, allowing the weapon to be used as a chakram that deals psychic damage instead of slashing damage, and it deals an extra 2d6 psychic damage to the first target it hits on each of my turns.",
	choices : ["uncommon", "rare", "very rare"],
	"uncommon" : {
		name : "Uncommon Mindcutter",
		rarity : "uncommon",
		description : "This weapon appears to be a metal disk with three prongs. While I wield it, blades of psionic energy form around the prongs, allowing the weapon to be used as a chakram that deals psychic damage instead of slashing damage",
		descriptionFull : 
			"This weapon appears to be a metal disk with three prongs. While I wield it, blades of psionic energy form around the prongs, allowing the weapon to be used as a chakram that deals psychic damage instead of slashing damage"+
			"\n" + toUni("Unseen Slice") + " While holding this weapon, I can use a bonus action to phase the chakram into the realm of thought. Until the end of my turn, I gain the following benefits:"+
			"\n" + " \u2022 The chakram is invisible to creatures other than me, granting me advantage on attack rolls made with it against such creatures."+
			"\n" + " \u2022 Making ranged attacks with the chakram doesn’t reveal my position if I am hidden, and the chakram disappears and reappears in my hand after each attack."+
			"\n" + " \u2022 The chakram deals an extra 4d6 psychic damage to the first target it hits on this turn."+
			"\n" + "Once this property of the chakram has been used, it can’t be used again until the next dawn.",
		weaponOptions : {
			name : "Uncommon Mindcutter",
			baseWeapon : "chakram",
			source : [["RGttYR", 260]],
			regExpSearch : /^(?=.*mindcutter).*$/i,
			damage : [1, 4, "pyschic"],
			selectNow : true,
		},
		limfeaname : "Unseen Slice",
		usages : 1,
		recovery : "dawn",	
	},
	"rare" : {
		name : "Rare Mindcutter",
		rarity : "rare",
		description : "This weapon appears to be a metal disk with three prongs. While I wield it, blades of psionic energy form around the prongs, allowing the weapon to be used as a chakram that deals psychic damage instead of slashing damage, and it deals an extra 1d6 psychic damage to the first target it hits on each of my turns.",
		descriptionFull : 
			"This weapon appears to be a metal disk with three prongs. While I wield it, blades of psionic energy form around the prongs, allowing the weapon to be used as a chakram that deals psychic damage instead of slashing damage, and it deals an extra 1d6 psychic damage to the first target it hits on each of my turns."+
			"\n" + toUni("Unseen Slice") + " While holding this weapon, I can use a bonus action to phase the chakram into the realm of thought. Until the end of my turn, I gain the following benefits:"+
			"\n" + " \u2022 The chakram is invisible to creatures other than me, granting me advantage on attack rolls made with it against such creatures."+
			"\n" + " \u2022 Making ranged attacks with the chakram doesn’t reveal my position if I am hidden, and the chakram disappears and reappears in my hand after each attack."+
			"\n" + " \u2022 The chakram deals an extra 5d6 psychic damage instead of 1d6 to the first target it hits on this turn."+
			"\n" + "Once this property of the chakram has been used, it can’t be used again until the next dawn.",
		weaponOptions : {
			name : "Rare Mindcutter",
			baseWeapon : "chakram",
			source : [["RGttYR", 260]],
			regExpSearch : /^(?=.*mindcutter).*$/i,
			damage : [1, 4, "pyschic"],
			description : "First hit, extra 1d6 Pyschic dmg",
			selectNow : true,
		},
		limfeaname : "Unseen Slice",
		usages : 1,
		recovery : "dawn",	
	},
	"very rare" : {
		name : "Very Rare Mindcutter",
		rarity : "very rare",
		description : "This weapon appears to be a metal disk with three prongs. While I wield it, blades of psionic energy form around the prongs, allowing the weapon to be used as a chakram that deals psychic damage instead of slashing damage, and it deals an extra 2d6 psychic damage to the first target it hits on each of my turns.",
		descriptionFull : 
			"This weapon appears to be a metal disk with three prongs. While I wield it, blades of psionic energy form around the prongs, allowing the weapon to be used as a chakram that deals psychic damage instead of slashing damage, and it deals an extra 2d6 psychic damage to the first target it hits on each of my turns."+
			"\n" + toUni("Unseen Slice") + " While holding this weapon, I can use a bonus action to phase the chakram into the realm of thought. Until the end of my turn, I gain the following benefits:"+
			"\n" + " \u2022 The chakram is invisible to creatures other than me, granting me advantage on attack rolls made with it against such creatures."+
			"\n" + " \u2022 Making ranged attacks with the chakram doesn’t reveal my position if I am hidden, and the chakram disappears and reappears in my hand after each attack."+
			"\n" + " \u2022 The chakram deals an extra 6d6 psychic damage instead of 2d6 to the first target it hits on this turn."+
			"\n" + "Once this property of the chakram has been used, it can’t be used again until the next dawn.",
		weaponOptions : {
			name : "Very Rare Mindcutter",
			baseWeapon : "chakram",
			source : [["RGttYR", 260]],
			regExpSearch : /^(?=.*mindcutter).*$/i,
			damage : [1, 4, "pyschic"],
			description : "First hit, extra 2d6 Pyschic dmg",
			selectNow : true,
		},
		limfeaname : "Unseen Slice",
		usages : 1,
		recovery : "dawn",
	},
};

// Needlespitter Karakasa
MagicItemsList["needlespitter karakasa"] = {
	name : "Needlespitter Karakasa",
	source : [["RGttYR", 260]],
	type : "wondrous item",
	attunement: true,
	description : "At the “Not-A-Mimic Emporium”, renowned salesman Tsuku Mogami prides herself in selling weapons, armour, and assorted adventuring gear, all one-hundred percent guaranteed not to be mimics in disguise. And if something can be said about her claims, it’s that they’re technically true.",
	choices : ["uncommon", "rare", "very rare"],
	"uncommon" : {
		name : "Uncommon Needlespitter Karakasa",
		rarity : "uncommon",
		description : "At the “Not-A-Mimic Emporium”, renowned salesman Tsuku Mogami prides herself in selling weapons, armour, and assorted adventuring gear, all one-hundred percent guaranteed not to be mimics in disguise. And if something can be said about her claims, it’s that they’re technically true.",
		descriptionFull : 
			"At the “Not-A-Mimic Emporium”, renowned salesman Tsuku Mogami prides herself in selling weapons, armour, and assorted adventuring gear, all one-hundred percent guaranteed not to be mimics in disguise. And if something can be said about her claims, it’s that they’re technically true."+
			"\n" + toUni("Needle Shower") + " As an action, I can rapidly spin this umbrella in my hands, causing it to discharge needles in every direction. Each other creature within 15 feet of me must make a DC 13 Dexterity saving throw, taking 3d6 piercing damage and 3d6 psychic damage on a failed save, or half as much damage on a successful one. Once this property of the item has been used, it can’t be used again until the next dawn."+
			"\n" + toUni("Sentience") + " The needlespitter karakasa is a sentient chaotic neutral item with an Intelligence of 8, a Wisdom of 14, and a Charisma of 16. It has hearing and darkvision out to a range of 120 feet. It can speak and understand Abyssal and Common."+
			"\n" + toUni("Personality") + " Most needlespitter karakasa are incorrigible pranksters, taking immense joy in mischief of all sorts. They love to be spun and get bored easily, which leads them to indulge in their favourite pastime: scaring folks. Each time I finish a short rest with it nearby, the karakasa attempts to startle me with a loud noise or sudden movement, and I can make a DC 13 Charisma (Performance) check to appear convincingly frightened. The karakasa may also attempt to scare me at a random point throughout the day (GM’s discretion). On a successful check, the karakasa is so pleased that it regains the use of its Needle Shower property. Once the item has regained a use of a property in this way, it can’t regain a use of that property again until the next dawn, but it will still periodically attempt to scare me.",
		limfeaname : "Needle Shower",
		usages : 1,
		recovery : "dawn",
	},
	"rare" : {
		name : "Rare Needlespitter Karakasa",
		rarity : "rare",
		description : "At the “Not-A-Mimic Emporium”, renowned salesman Tsuku Mogami prides herself in selling weapons, armour, and assorted adventuring gear, all one-hundred percent guaranteed not to be mimics in disguise. And if something can be said about her claims, it’s that they’re technically true.",
		descriptionFull : 
			"At the “Not-A-Mimic Emporium”, renowned salesman Tsuku Mogami prides herself in selling weapons, armour, and assorted adventuring gear, all one-hundred percent guaranteed not to be mimics in disguise. And if something can be said about her claims, it’s that they’re technically true."+
			"\n" + toUni("Needle Shower") + " As an action, I can rapidly spin this umbrella in my hands, causing it to discharge needles in every direction. Each other creature within 15 feet of me must make a DC 15 Dexterity saving throw, taking 4d6 piercing damage and 4d6 psychic damage on a failed save, or half as much damage on a successful one. Once this property of the item has been used, it can’t be used again until the next dawn."+
			"\n" + toUni("Sentience") + " The needlespitter karakasa is a sentient chaotic neutral item with an Intelligence of 8, a Wisdom of 14, and a Charisma of 16. It has hearing and darkvision out to a range of 120 feet. It can speak and understand Abyssal and Common."+
			"\n" + toUni("Personality") + " Most needlespitter karakasa are incorrigible pranksters, taking immense joy in mischief of all sorts. They love to be spun and get bored easily, which leads them to indulge in their favourite pastime: scaring folks. Each time I finish a short rest with it nearby, the karakasa attempts to startle me with a loud noise or sudden movement, and I can make a DC 15 Charisma (Performance) check to appear convincingly frightened. The karakasa may also attempt to scare me at a random point throughout the day (GM’s discretion). On a successful check, the karakasa is so pleased that it regains the use of its Needle Shower property. Once the item has regained a use of a property in this way, it can’t regain a use of that property again until the next dawn, but it will still periodically attempt to scare me."+
			"\n" + toUni("Safe Descent") + " When I fall, I can use my reaction to raise and open the umbrella, slowing my rate of descent to 60 feet per round until I land or stop holding the umbrella. For each foot I fall while under the effects of this property, I can move one foot horizontally. When I land, I take no falling damage. Once this property of the item has been used, it can’t be used again until the next dawn. If I succeed on the check to appear scared by the item, I can choose to regain the use of this property instead of the use of Needle Shower.",
		limfeaname : "Needle Shower",
		usages : 1,
		recovery : "dawn",	
	},
	"very rare" : {
		name : "Very Rare Needlespitter Karakasa",
		rarity : "very rare",
		description : "At the “Not-A-Mimic Emporium”, renowned salesman Tsuku Mogami prides herself in selling weapons, armour, and assorted adventuring gear, all one-hundred percent guaranteed not to be mimics in disguise. And if something can be said about her claims, it’s that they’re technically true.",
		descriptionFull : 
			"At the “Not-A-Mimic Emporium”, renowned salesman Tsuku Mogami prides herself in selling weapons, armour, and assorted adventuring gear, all one-hundred percent guaranteed not to be mimics in disguise. And if something can be said about her claims, it’s that they’re technically true."+
			"\n" + toUni("Needle Shower") + " As an action, I can rapidly spin this umbrella in my hands, causing it to discharge needles in every direction. Each other creature within 15 feet of me must make a DC 16 Dexterity saving throw, taking 5d6 piercing damage and 5d6 psychic damage on a failed save, or half as much damage on a successful one. Once this property of the item has been used, it can’t be used again until the next dawn."+
			"\n" + toUni("Sentience") + " The needlespitter karakasa is a sentient chaotic neutral item with an Intelligence of 8, a Wisdom of 14, and a Charisma of 16. It has hearing and darkvision out to a range of 120 feet. It can speak and understand Abyssal and Common."+
			"\n" + toUni("Personality") + " Most needlespitter karakasa are incorrigible pranksters, taking immense joy in mischief of all sorts. They love to be spun and get bored easily, which leads them to indulge in their favourite pastime: scaring folks. Each time I finish a short rest with it nearby, the karakasa attempts to startle me with a loud noise or sudden movement, and I can make a DC 16 Charisma (Performance) check to appear convincingly frightened. The karakasa may also attempt to scare me at a random point throughout the day (GM’s discretion). On a successful check, the karakasa is so pleased that it regains the use of its Needle Shower property. Once the item has regained a use of a property in this way, it can’t regain a use of that property again until the next dawn, but it will still periodically attempt to scare me."+
			"\n" + toUni("Safe Descent") + " When I fall, I can use my reaction to raise and open the umbrella, slowing my rate of descent to 60 feet per round until I land or stop holding the umbrella. For each foot I fall while under the effects of this property, I can move one foot horizontally. When I land, I take no falling damage. Once this property of the item has been used, it can’t be used again until the next dawn. If I succeed on the check to appear scared by the item, I can choose to regain the use of this property instead of the use of Needle Shower."+
			"\n" + "While open, the umbrella can be used as a +1 shield. While closed, it can be used as a +1 spear. I can open or close the umbrella as an action.",
		weaponOptions : {
			name : "+1 Very Rare Needlespitter Karakasa",
			baseWeapon : "spear",
			source : [["RGttYR", 261]],
			regExpSearch : /^(?=.*mindcutter).*$/i,
			description : "Thrown, versatile (1d8); Is a +1 shield when closed, action to open/close",
			selectNow : true,
		},
		limfeaname : "Needle Shower",
		usages : 1,
		recovery : "dawn",	
	},
};

// Nekomata Shamisen
MagicItemsList["nekomata shamisen"] = {
	name : "Nekomata Shamisen",
	source : [["RGttYR", 261]],
	type : "wondrous item",
	description : "Defying explanation, this instrument lends a haunting and sorrowful quality to any song played on it, regardless of the musician’s intent. Though off-putting to some, it appears to be universally appealing to felines of all types, which are drawn by the sound of the shamisen and sometimes even join in as a mewling choir.",
	choices : ["uncommon", "uncommon (optional attunement)", "rare", "rare (optional attunement)", "very rare", "very rare (optional attunement)"],
	"uncommon" : {
		name : "Uncommon Nekomata Shamisen",
		rarity : "uncommon",
		description : "Defying explanation, this instrument lends a haunting and sorrowful quality to any song played on it, regardless of the musician’s intent. Though off-putting to some, it appears to be universally appealing to felines of all types, which are drawn by the sound of the shamisen and sometimes even join in as a mewling choir.",
		descriptionFull : 
			"Defying explanation, this instrument lends a haunting and sorrowful quality to any song played on it, regardless of the musician’s intent. Though off-putting to some, it appears to be universally appealing to felines of all types, which are drawn by the sound of the shamisen and sometimes even join in as a mewling choir."+
			"\n" + toUni("Nekomata’s Call") + " As an action while holding this instrument, I can play a haunting tune to raise the spirits of the dead and bend them to my will. I summon three specters, which appear in unoccupied spaces of my choice within 30 feet of me. Each specter disappears after 1 minute, when it drops to 0 hit points, or if I don’t use a bonus action on my subsequent turns to continue playing the shamisen. The specters are allies to me and my companions. In combat, they share my initiative count, but take their turns immediately after mine. They obey my verbal commands (no action required). If I don’t issue any, they take the Dodge action. Once this property of the instrument has been used, it can’t be used again until the next dawn.",
		limfeaname : "Nekomata’s Call",
		usages : 1,
		recovery : "dawn",
		action : ["reaction", "Spiritual Bond"],
		toNotesPage: [{
		name : "Features",
		page3notes: true,
     	  	note : [
			"Defying explanation, this instrument lends a haunting and sorrowful quality to any song played on it, regardless of the musician’s intent. Though off-putting to some, it appears to be universally appealing to felines of all types, which are drawn by the sound of the shamisen and sometimes even join in as a mewling choir.",
			"Nekomata’s Call. As an action while holding this instrument, I can play a haunting tune to raise the spirits of the dead and bend them to my will. I summon three specters, which appear in unoccupied spaces of my choice within 30 feet of me. Each specter disappears after 1 minute, when it drops to 0 hit points, or if I don’t use a bonus action on my subsequent turns to continue playing the shamisen. The specters are allies to me and my companions. In combat, they share my initiative count, but take their turns immediately after mine. They obey my verbal commands (no action required). If I don’t issue any, they take the Dodge action. Once this property of the instrument has been used, it can’t be used again until the next dawn.",
			],
		}],	
	},
	"uncommon (optional attunement)" : {
		name : "Uncommon Nekomata Shamisen (optional attunement)",
		rarity : "uncommon",
		attunement: true,
		description : "Defying explanation, this instrument lends a haunting and sorrowful quality to any song played on it, regardless of the musician’s intent. Though off-putting to some, it appears to be universally appealing to felines of all types, which are drawn by the sound of the shamisen and sometimes even join in as a mewling choir.",
		descriptionFull : 
			"Defying explanation, this instrument lends a haunting and sorrowful quality to any song played on it, regardless of the musician’s intent. Though off-putting to some, it appears to be universally appealing to felines of all types, which are drawn by the sound of the shamisen and sometimes even join in as a mewling choir."+
			"\n" + toUni("Nekomata’s Call") + " As an action while holding this instrument, I can play a haunting tune to raise the spirits of the dead and bend them to my will. I summon three specters, which appear in unoccupied spaces of my choice within 30 feet of me. Each specter disappears after 1 minute, when it drops to 0 hit points, or if I don’t use a bonus action on my subsequent turns to continue playing the shamisen. The specters are allies to me and my companions. In combat, they share my initiative count, but take their turns immediately after mine. They obey my verbal commands (no action required). If I don’t issue any, they take the Dodge action. Once this property of the instrument has been used, it can’t be used again until the next dawn."+
			"\n" + toUni("Optional Attunement") + " If I choose to attune to this item, I can use the Spiritual Bond property while I remain attuned to it."+
			"\n" + toUni("OA: Spiritual Bond") + " When a creature’s hit point maximum is reduced by the Life Drain action of one of the specters summoned by the Nekomata’s Call property, I can use my reaction to regain hit points equal to the hit point maximum reduction.",
		limfeaname : "Nekomata’s Call",
		usages : 1,
		recovery : "dawn",
		action : ["reaction", "Spiritual Bond"],	
	},
	"rare" : {
		name : "Rare Nekomata Shamisen",
		rarity : "rare",
		description : "Defying explanation, this instrument lends a haunting and sorrowful quality to any song played on it, regardless of the musician’s intent. Though off-putting to some, it appears to be universally appealing to felines of all types, which are drawn by the sound of the shamisen and sometimes even join in as a mewling choir.",
		descriptionFull : 
			"Defying explanation, this instrument lends a haunting and sorrowful quality to any song played on it, regardless of the musician’s intent. Though off-putting to some, it appears to be universally appealing to felines of all types, which are drawn by the sound of the shamisen and sometimes even join in as a mewling choir."+
			"\n" + toUni("Nekomata’s Call") + " As an action while holding this instrument, I can play a haunting tune to raise the spirits of the dead and bend them to my will. I summon three specters, which appear in unoccupied spaces of my choice within 30 feet of me. Each specter disappears after 1 minute, when it drops to 0 hit points, or if I don’t use a bonus action on my subsequent turns to continue playing the shamisen. The specters are allies to me and my companions. In combat, they share my initiative count, but take their turns immediately after mine. They obey my verbal commands (no action required). If I don’t issue any, they take the Dodge action. The Nekomata’s Call property can be used twice, regaining all expended uses daily at dawn.",
		limfeaname : "Nekomata’s Call",
		usages : 2,
		recovery : "dawn",
		action : ["reaction", "Spiritual Bond"],	
	},
	"rare (optional attunement)" : {
		name : "Rare Nekomata Shamisen",
		rarity : "rare",
		description : "Defying explanation, this instrument lends a haunting and sorrowful quality to any song played on it, regardless of the musician’s intent. Though off-putting to some, it appears to be universally appealing to felines of all types, which are drawn by the sound of the shamisen and sometimes even join in as a mewling choir.",
		descriptionFull : 
			"Defying explanation, this instrument lends a haunting and sorrowful quality to any song played on it, regardless of the musician’s intent. Though off-putting to some, it appears to be universally appealing to felines of all types, which are drawn by the sound of the shamisen and sometimes even join in as a mewling choir."+
			"\n" + toUni("Nekomata’s Call") + " As an action while holding this instrument, I can play a haunting tune to raise the spirits of the dead and bend them to my will. I summon three specters, which appear in unoccupied spaces of my choice within 30 feet of me. Each specter disappears after 1 minute, when it drops to 0 hit points, or if I don’t use a bonus action on my subsequent turns to continue playing the shamisen. The specters are allies to me and my companions. In combat, they share my initiative count, but take their turns immediately after mine. They obey my verbal commands (no action required). If I don’t issue any, they take the Dodge action. The Nekomata’s Call property can be used twice, regaining all expended uses daily at dawn."+
			"\n" + toUni("Optional Attunement") + " If I choose to attune to this item, I can use the Spiritual Bond property while I remain attuned to it."+
			"\n" + toUni("OA: Spiritual Bond") + " When a creature’s hit point maximum is reduced by the Life Drain action of one of the specters summoned by the Nekomata’s Call property, I can use my reaction to regain hit points equal to the hit point maximum reduction.",
		limfeaname : "Nekomata’s Call",
		usages : 2,
		recovery : "dawn",
		action : ["reaction", "Spiritual Bond"],
	},
	"very rare" : {
		name : "Very Rare Nekomata Shamisen",
		rarity : "very rare",
		description : "Defying explanation, this instrument lends a haunting and sorrowful quality to any song played on it, regardless of the musician’s intent. Though off-putting to some, it appears to be universally appealing to felines of all types, which are drawn by the sound of the shamisen and sometimes even join in as a mewling choir.",
		descriptionFull : 
			"Defying explanation, this instrument lends a haunting and sorrowful quality to any song played on it, regardless of the musician’s intent. Though off-putting to some, it appears to be universally appealing to felines of all types, which are drawn by the sound of the shamisen and sometimes even join in as a mewling choir."+
			"\n" + toUni("Nekomata’s Call") + " As an action while holding this instrument, I can play a haunting tune to raise the spirits of the dead and bend them to my will. I summon three specters, which appear in unoccupied spaces of my choice within 30 feet of me. Each specter disappears after 1 minute, when it drops to 0 hit points, or if I don’t use a bonus action on my subsequent turns to continue playing the shamisen. The specters are allies to me and my companions. In combat, they share my initiative count, but take their turns immediately after mine. They obey my verbal commands (no action required). If I don’t issue any, they take the Dodge action. The Nekomata’s Call property can be used three times, regaining all expended uses daily at dawn."+
			"\n" + toUni("Optional Attunement") + " If I choose to attune to this item, I can use the Spiritual Bond and Spiritual Burden properties while I remain attuned to it."+
			"\n" + toUni("OA: Spiritual Bond") + " When a creature’s hit point maximum is reduced by the Life Drain action of one of the specters summoned by the Nekomata’s Call property, I can use my reaction to regain hit points equal to the hit point maximum reduction."+
			"\n" + toUni("OA: Spiritual Burden") + " When I take damage, I can use my reaction to share the burden of pain with my choice of one of the specters summoned by the Nekomata’s Call property, as long as it is within 30 feet of me. I take half as much damage instead, and the specter takes the remaining damage.",
		limfeaname : "Nekomata’s Call",
		usages : 3,
		recovery : "dawn",
		action : [["reaction", "Spiritual Bond"],["reaction","Spiritual Burden"]],	
	},
};

// Onikiri, Demon Cutter
MagicItemsList["onikiri, demon cutter"] = {
	name : "Onikiri, Demon Cutter",
	source : [["RGttYR", 262]],
	type : "weapon (any sword)",
	description : "This weapon has 4 charges and regains 1d4 expended charges daily at dawn. While holding it, I can cast the light cantrip on the blade at will.",
	attunement : true,
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "brackets",
		descriptionChange : ["replace", "sword"],
		itemName1stPage : ["brackets ", "Onikiri, Demon Cutter"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /sword|scimitar|rapier/i;
			return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
		}
	},
	choices : ["uncommon", "rare", "very rare", "legendary"],
	"uncommon" : {
		name : "Uncommon Onikiri, Demon Cutter",
		rarity : "uncommon",
		description : "This weapon has 4 charges and regains 1d4 expended charges daily at dawn. While holding it, I can cast the light cantrip on the blade at will.",
		descriptionFull : 
			"This weapon has 4 charges and regains 1d4 expended charges daily at dawn. While holding it, I can cast the light cantrip on the blade at will."+
			"\n" + toUni("Radiant Wrath") + " As a bonus action while holding the sword, I can expend 1 charge to imbue it with crackling radiant energy until the end of my next turn. While imbued, this sword deals an extra 1d4 radiant damage to each target it hits. In addition, the first time I hit with an attack using the imbued sword on each of my turns, each Fiend within 10 feet of the target must succeed on a DC 13 Dexterity saving throw or take 2d4 radiant damage as crackling energy arcs out towards it.",
		action : ["bonus action", "Radiant Wrath"],
		usages : 4,
		recovery : "dawn",
		additional : "regains 1d4",
	},
	"rare" : {
		name : "Rare Onikiri, Demon Cutter",
		rarity : "rare",
		description : "This weapon has 4 charges and regains 1d4 expended charges daily at dawn. While holding it, I can cast the light cantrip on the blade at will.",
		descriptionFull : 
			"This weapon has 4 charges and regains 1d4 expended charges daily at dawn. While holding it, I can cast the light cantrip on the blade at will."+
			"\n" + toUni("Radiant Wrath") + " As a bonus action while holding the sword, I can expend 1 charge to imbue it with crackling radiant energy until the end of my next turn. While imbued, this sword deals an extra 1d6 radiant damage to each target it hits. In addition, the first time I hit with an attack using the imbued sword on each of my turns, each Fiend within 10 feet of the target must succeed on a DC 15 Dexterity saving throw or take 2d6 radiant damage as crackling energy arcs out towards it."+
			"\n" + toUni("Demon Lure") + " As a bonus action while holding the sword, I can expend 2 charges to draw the attention of one creature I can see within 30 feet of me, forcing it to make a DC 15 Wisdom saving throw. Fiends make this saving throw with disadvantage. On a failure, the creature becomes fixated on me for 1 minute. While fixated, the creature is incapacitated and its speed is reduced to 0 feet. This effect ends if I attack any other creature, if I cast a spell, if I am more than 30 feet away from the fixated creature at any point, or if it takes any damage from me or a creature friendly to me.",
		action : [["bonus action", "Radiant Wrath"], ["bonus action", "Demon Lure"]],
		usages : 4,
		recovery : "dawn",
		additional : "regains 1d4",
	},
	"very rare" : {
		name : "Very Rare Onikiri, Demon Cutter",
		rarity : "very rare",
		description : "This weapon has 5 charges and regains 1d4 + 1 expended charges daily at dawn. While holding it, I can cast the light cantrip on the blade at will.",
		descriptionFull : 
			"This weapon has 5 charges and regains 1d4 + 1 expended charges daily at dawn. While holding it, I can cast the light cantrip on the blade at will."+
			"\n" + toUni("Radiant Wrath") + " As a bonus action while holding the sword, I can expend 1 charge to imbue it with crackling radiant energy until the end of my next turn. While imbued, this sword deals an extra 1d8 radiant damage to each target it hits. In addition, the first time I hit with an attack using the imbued sword on each of my turns, each Fiend within 10 feet of the target must succeed on a DC 16 Dexterity saving throw or take 2d8 radiant damage as crackling energy arcs out towards it."+
			"\n" + toUni("Demon Lure") + " As a bonus action while holding the sword, I can expend 2 charges to draw the attention of one creature I can see within 30 feet of me, forcing it to make a DC 16 Wisdom saving throw. Fiends make this saving throw with disadvantage. On a failure, the creature becomes fixated on me for 1 minute. While fixated, the creature is incapacitated and its speed is reduced to 0 feet. This effect ends if I attack any other creature, if I cast a spell, if I am more than 30 feet away from the fixated creature at any point, or if it takes any damage from me or a creature friendly to me.",
		action : [["bonus action", "Radiant Wrath"], ["bonus action", "Demon Lure"]],
		usages : 5,
		recovery : "dawn",
		additional : "regains 1d4+1",
	},
	"legendary" : {
		name : "Legendary Onikiri, Demon Cutter",
		rarity : "legendary",
		description : "This weapon has 5 charges and regains 1d4 + 1 expended charges daily at dawn. While holding it, I can cast the light cantrip on the blade at will.",
		descriptionFull : 
			"This weapon has 5 charges and regains 1d4 + 1 expended charges daily at dawn. While holding it, I can cast the light cantrip on the blade at will."+
			"\n" + toUni("Radiant Wrath") + " As a bonus action while holding the sword, I can expend 1 charge to imbue it with crackling radiant energy until the end of my next turn. While imbued, this sword deals an extra 1d10 radiant damage to each target it hits. In addition, the first time I hit with an attack using the imbued sword on each of my turns, each Fiend within 10 feet of the target must succeed on a DC 17 Dexterity saving throw or take 2d10 radiant damage as crackling energy arcs out towards it."+
			"\n" + toUni("Demon Lure") + " As a bonus action while holding the sword, I can expend 1 charge to draw the attention of one creature I can see within 30 feet of me, forcing it to make a DC 17 Wisdom saving throw. Fiends make this saving throw with disadvantage. On a failure, the creature becomes fixated on me for 1 minute. While fixated, the creature is incapacitated and its speed is reduced to 0 feet. This effect ends if I attack any other creature, if I cast a spell, if I am more than 30 feet away from the fixated creature at any point, or if it takes any damage from me or a creature friendly to me."+
			"\n" + "While holding this sword, I speak, read, and understand Celestial, and I can expend 1 charge to cast the protection from evil and good spell (no concentration required), protecting the target from Fiends only.",
		action : [["bonus action", "Radiant Wrath"], ["bonus action", "Demon Lure"]],
		usages : 5,
		recovery : "dawn",
		additional : "regains 1d4+1",
		spellFirstColTitle : "Ch",
		spellcastingBonus : [{
			name : "Legendary Onikiri, Demon Cutter",
			spells : ["protection from evil and good spell"],
			selection : ["protection from evil and good spell"],
			firstCol : 1,
		}],		
	},
};

// Reaper’s Kama
MagicItemsList["reaper’s kama"] = {
	name : "Reaper’s Kama",
	source : [["RGttYR", 263]],
	type : "prosthesis",
	description : "This prosthesis can enhance or replace an arm. This prosthesis has the Hookshot (30 ft.), Integrated (kusarigama), and Launch (1d6 slashing, 30 ft.) properties.",
	choices : ["common", "uncommon", "rare", "very rare"],
	"common" : {
		name : "Common Reaper’s Kama",
		rarity : "common",
		description : "This prosthesis can enhance or replace an arm. This prosthesis has the Hookshot (30 ft.), Integrated (kusarigama), and Launch (1d6 slashing, 30 ft.) properties.",
		descriptionFull : 
			"This prosthesis can enhance or replace an arm. This prosthesis has the Hookshot (30 ft.), Integrated (kusarigama), and Launch (1d6 slashing, 30 ft.) properties."+
			"\n" + toUni("Improved Hookshot") + " This prosthesis uses a sickle instead of a hook for its Hookshot property. As an action while the sickle is attached to a target, I can reel myself in. When I do, I move a number of feet up to the item’s Hookshot range in a straight line towards the sickle.",
		weaponOptions : [{
			name : "Common Reaper’s Kama",
			source : [["RGttYR", 263]],
			regExpSearch : /^(?=.*reaper)(?=.*kama).*$/i,
			baseWeapon : "kusarigama",
			selectNow : true,
		},{
			name : "Common Reaper’s Kama (Launch)",
			source : [["RGttYR", 263]],
			regExpSearch : /^(?=.*reaper)(?=.*kama)(?=.*launch).*$/i,
			type : "Martial",
			ability : 2,
			abilitytodamage : true,
			damage : [1, 6, "slashing"],
			range : "30 ft",
			description : "Hookshot (30 ft.), Integrated (Kusarigama),",
			selectNow : true,
		}],
	},
	"uncommon" : {
		name : "Uncommon Reaper’s Kama",
		rarity : "uncommon",
		description : "This prosthesis can enhance or replace an arm. This prosthesis has the Hookshot (30 ft.), Integrated (kusarigama), and Launch (1d6 slashing, 30 ft.) properties.",
		descriptionFull : 
			"This prosthesis can enhance or replace an arm. This prosthesis has the Hookshot (30 ft.), Integrated (kusarigama), and Launch (1d6 slashing, 30 ft.) properties."+
			"\n" + toUni("Improved Hookshot") + " This prosthesis uses a sickle instead of a hook for its Hookshot property. As an action while the sickle is attached to a target, I can reel myself in. When I do, I move a number of feet up to the item’s Hookshot range in a straight line towards the sickle. In addition, the DC of the ability check required to forcefully detach the sickle increases to 13."+
			"\n" + toUni("Slicestorm") + " As an action while wearing this prosthesis and the sickle isn’t attached to a target as part of the Hookshot property, I can whip the chain around me, slicing at foes with the sickle at its tip in a whirlwind of steel. Each creature within 10 feet of me must make a DC 13 Dexterity saving throw, taking 4d6 slashing damage on a failed save, or half as much damage on a successful one. Once this property of the prosthesis has been used, it can’t be used again until the next dawn.",
		weaponOptions : [{
			name : "Uncommon Reaper’s Kama",
			source : [["RGttYR", 263]],
			regExpSearch : /^(?=.*reaper)(?=.*kama).*$/i,
			baseWeapon : "kusarigama",
			selectNow : true,
		},{
			name : "Uncommon Reaper’s Kama (Launch)",
			source : [["RGttYR", 263]],
			regExpSearch : /^(?=.*reaper)(?=.*kama)(?=.*launch).*$/i,
			type : "Martial",
			ability : 2,
			abilitytodamage : true,
			damage : [1, 6, "slashing"],
			range : "30 ft",
			description : "Hookshot (30 ft.), Integrated (Kusarigama),",
			selectNow : true,
		}],
		limfeaname : "Slicestorm",
		usages : 1,
		recovery : "dawn",
		action : ["action", "Slicestorm"],	
	},
	"rare" : {
		name : "Rare Reaper’s Kama",
		rarity : "rare",
		description : "This prosthesis can enhance or replace an arm. This prosthesis has the Hookshot (30 ft.), Integrated (kusarigama), and Launch (1d6 slashing, 30 ft.) properties.",
		descriptionFull : 
			"This prosthesis can enhance or replace an arm. This prosthesis has the Hookshot (30 ft.), Integrated (kusarigama), and Launch (1d6 slashing, 30 ft.) properties."+
			"\n" + toUni("Improved Hookshot") + " This prosthesis uses a sickle instead of a hook for its Hookshot property. As an action while the sickle is attached to a target, I can reel myself in. When I do, I move a number of feet up to the item’s Hookshot range in a straight line towards the sickle. In addition, the DC of the ability check required to forcefully detach the sickle increases to 15."+
			"\n" + toUni("Slicestorm") + " As an action while wearing this prosthesis and the sickle isn’t attached to a target as part of the Hookshot property, I can whip the chain around me, slicing at foes with the sickle at its tip in a whirlwind of steel. Each creature within 10 feet of me must make a DC 15 Dexterity saving throw, taking 6d6 slashing damage on a failed save, or half as much damage on a successful one. Once this property of the prosthesis has been used, it can’t be used again until the next dawn.",
		weaponOptions : [{
			name : "+1 Rare Reaper’s Kama",
			source : [["RGttYR", 263]],
			regExpSearch : /^(?=.*reaper)(?=.*kama).*$/i,
			baseWeapon : "kusarigama",
			selectNow : true,
		},{
			name : "+1 Rare Reaper’s Kama (Launch)",
			source : [["RGttYR", 263]],
			regExpSearch : /^(?=.*reaper)(?=.*kama)(?=.*launch).*$/i,
			type : "Martial",
			ability : 2,
			abilitytodamage : true,
			damage : [1, 6, "slashing"],
			range : "30 ft",
			description : "Hookshot (30 ft.), Integrated (Kusarigama),",
			selectNow : true,
		}],
		limfeaname : "Slicestorm",
		usages : 1,
		recovery : "dawn",
		action : ["action", "Slicestorm"],	
	},
	"very rare" : {
		name : "Very Rare Reaper’s Kama",
		rarity : "very rare",
		description : "This prosthesis can enhance or replace an arm. This prosthesis has the Hookshot (30 ft.), Integrated (kusarigama), and Launch (1d6 slashing, 30 ft.) properties.",
		descriptionFull : 
			"This prosthesis can enhance or replace an arm. This prosthesis has the Hookshot (30 ft.), Integrated (kusarigama), and Launch (1d6 slashing, 30 ft.) properties."+
			"\n" + toUni("Improved Hookshot") + " This prosthesis uses a sickle instead of a hook for its Hookshot property. As an action while the sickle is attached to a target, I can reel myself in. When I do, I move a number of feet up to the item’s Hookshot range in a straight line towards the sickle. In addition, the DC of the ability check required to forcefully detach the sickle increases to 15."+
			"\n" + toUni("Slicestorm") + " As an action while wearing this prosthesis and the sickle isn’t attached to a target as part of the Hookshot property, I can whip the chain around me, slicing at foes with the sickle at its tip in a whirlwind of steel. Each creature within 10 feet of me must make a DC 16 Dexterity saving throw, taking 6d6 slashing damage on a failed save, or half as much damage on a successful one. The Slicestorm property can be used three times, regaining all expended uses daily at dawn.",
		weaponOptions : [{
			name : "+1 Very Rare Reaper’s Kama",
			source : [["RGttYR", 263]],
			regExpSearch : /^(?=.*reaper)(?=.*kama).*$/i,
			baseWeapon : "kusarigama",
			selectNow : true,
		},{
			name : "+1 Very Rare Reaper’s Kama (Launch)",
			source : [["RGttYR", 263]],
			regExpSearch : /^(?=.*reaper)(?=.*kama)(?=.*launch).*$/i,
			type : "Martial",
			ability : 2,
			abilitytodamage : true,
			damage : [1, 6, "slashing"],
			range : "30 ft",
			description : "Hookshot (30 ft.), Integrated (Kusarigama),",
			selectNow : true,
		}],
		limfeaname : "Slicestorm",
		usages : 3,
		recovery : "dawn",
		action : ["action", "Slicestorm"],	
	},
};

// Ryuto Nunchaku
MagicItemsList["ryuto nunchaku"] = {
	name : "Ryuto Nunchaku",
	source : [["RGttYR", 264]],
	type : "weapon (nunchaku)",
	description : "This weapon deals an extra 1d4 fire or necrotic damage (my choice) to the first target it hits on each of my turns. While wielding it, I can cast the dancing lights cantrip.",
	choices : ["uncommon", "rare", "very rare"],
	"uncommon" : {
		name : "Uncommon Ryuto Nunchaku",
		rarity : "uncommon",
		description : "While wielding it, I can cast the dancing lights cantrip.",
		descriptionFull : 
			"While wielding it, I can cast the dancing lights cantrip."+
			"\n" + toUni("Ghostly Fireworks") + " When I successfully perform a flourish with my nunchaku, I can immediately cast the faerie fire spell (save DC 13, no action required) with a range of 5 feet. Once this property of the weapon has been used, it can’t be used again until the next dawn.",
		weaponOptions : {
			name : "Uncommon Ryuto Nunchaku",
			source : [["RGttYR", 264]],
			regExpSearch : /^(?=.*ryuto)(?=.*nunchaku).*$/i,
			baseWeapon : "nunchaku",
			selectNow : true,
		},
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (/^(?=.ryuto)(?=.nunchaku).*$/i.test(v.WeaponTextName)) fields.Description += (fields.Description ? '; ' : '') + 'ghostly fireworks';
				},
			"This weapon has the ghostly fireworks property"
   	         	]
       		},
		limfeaname : "Ghostly Fireworks",
		usages : 1,
		recovery : "dawn",
		spellcastingBonus : [{
			name : "Uncommon Ryuto Nunchaku",
			spells : ["dancing lights"],
			selection : ["dancing lights"],
			firstCol : "atwill",
		}],	
	},
	"rare" : {
		name : "Rare Ryuto Nunchaku",
		rarity : "rare",
		description : "This weapon deals an extra 1d4 fire or necrotic damage (my choice) to the first target it hits on each of my turns. While wielding it, I can cast the dancing lights cantrip.",
		descriptionFull : 
			"This weapon deals an extra 1d4 fire or necrotic damage (my choice) to the first target it hits on each of my turns. While wielding it, I can cast the dancing lights cantrip."+
			"\n" + toUni("Ghostly Fireworks") + " When I successfully perform a flourish with my nunchaku, I can immediately cast the faerie fire spell (save DC 15, no action required) with a range of 5 feet. While under the effects of the spell, a creature takes 1d6 fire or necrotic damage (my choice when I cast the spell) at the end of each of its turns as some of the ghostly fire burns away at it. Once this property of the weapon has been used, it can’t be used again until the next dawn.",
		weaponOptions : {
			name : "Rare Ryuto Nunchaku",
			source : [["RGttYR", 264]],
			regExpSearch : /^(?=.*ryuto)(?=.*nunchaku).*$/i,
			baseWeapon : "nunchaku",
			selectNow : true,
		},
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (/^(?=.*ryuto)(?=.*nunchaku).*$/i.test(v.WeaponTextName)) fields.Description += (fields.Description ? '; ' : '') + 'extra 1d4 Fire or Necrotic dmg per hit, ghostly fireworks';
					},
				"This weapon deals an extra 1d4 fire or necrotic damage (my choice) to the targets it hits on each of my turns."
			]
		},
		limfeaname : "Ghostly Fireworks",
		usages : 1,
		recovery : "dawn",
		spellcastingBonus : [{
			name : "Rare Ryuto Nunchaku",
			spells : ["dancing lights"],
			selection : ["dancing lights"],
			firstCol : "atwill",
		}],
	},
	"very rare" : {
		name : "Very Rare Ryuto Nunchaku",
		rarity : "very rare",
		description : "This weapon deals an extra 1d4 fire or necrotic damage (my choice) to the targets it hits on each of my turns. While wielding it, I can cast the dancing lights cantrip.",
		descriptionFull : 
			"This weapon deals an extra 1d4 fire or necrotic damage (my choice) to the targets it hits on each of my turns. While wielding it, I can cast the dancing lights cantrip."+
			"\n" + toUni("Ghostly Fireworks") + " When I successfully perform a flourish with my nunchaku, I can immediately cast the faerie fire spell (save DC 16, no action required) with a range of 5 feet. While under the effects of the spell, a creature takes 1d10 fire or necrotic damage (my choice when I cast the spell) at the end of each of its turns as some of the ghostly fire burns away at it. Once this property of the weapon has been used, it can’t be used again until the next dawn.",
		weaponOptions : {
			name : "Very Rare Ryuto Nunchaku",
			source : [["RGttYR", 264]],
			regExpSearch : /^(?=.*ryuto)(?=.*nunchaku).*$/i,
			baseWeapon : "nunchaku",
			selectNow : true,
		},
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (/^(?=.*ryuto)(?=.*nunchaku).*$/i.test(v.WeaponTextName)) fields.Description += (fields.Description ? '; ' : '') + 'extra 1d4 Fire or Necrotic dmg per hit, ghostly fireworks';
					},
				"This weapon deals an extra 1d4 fire or necrotic damage (my choice) to the targets it hits on each of my turns."
			]
		},
		limfeaname : "Ghostly Fireworks",
		usages : 1,
		recovery : "dawn",
		spellcastingBonus : [{
			name : "Very Rare Ryuto Nunchaku",
			spells : ["dancing lights"],
			selection : ["dancing lights"],
			firstCol : "atwill",
		}],
	},
};

// Scorpion’s Wartail
MagicItemsList["scorpion’s wartail"] = {
	name : "Scorpion’s Wartail",
	source : [["RGttYR", 264]],
	type : "prosthesis",
	description : "This prosthesis can replace, simulate, or enhance a tail, and can be worn by a creature even if doing so would put it over its typical number of limbs. It has the Melee (1d6 piercing, Scourge) property and the Skewer Superior Strike. The reach of attacks made with this prosthesis is increased by an additional 5 feet, to a total of 15 feet.",
	choices : ["uncommon", "rare", "very rare"],
	"uncommon" : {
		name : "Uncommon Scorpion’s Wartail",
		rarity : "uncommon",
		description : "This prosthesis can replace, simulate, or enhance a tail, and can be worn by a creature even if doing so would put it over its typical number of limbs. It has the Melee (1d6 piercing, Scourge) property and the Skewer Superior Strike. The reach of attacks made with this prosthesis is increased by an additional 5 feet, to a total of 15 feet.",
		descriptionFull : 
			"This prosthesis can replace, simulate, or enhance a tail, and can be worn by a creature even if doing so would put it over its typical number of limbs. It has the Melee (1d6 piercing, Scourge) property and the Skewer Superior Strike. The reach of attacks made with this prosthesis is increased by an additional 5 feet, to a total of 15 feet."+
			"\n" + toUni("Get Over Here!") + " Once on each of my turns, when I hit a Medium or smaller creature with an attack using this prosthesis, I can force it to make a DC 13 Strength saving throw. On a failed save, the creature is pulled up to 10 feet closer to me.",
		weaponOptions : {
			name : "Uncommon Scorpion’s Wartail",
			source : [["RGttYR", 264]],
			regExpSearch : /^(?=.*scorpion)(?=.*wartail).*$/i,
			type : "Martial",
			ability : 1,
			abilitytodamage : true,
			damage : [1, 6, "piercing"],
			range : "15 ft",
			description : "Scourge, reach (15ft), skewer superior strike",
			selectNow : true,
		},	
	},
	"rare" : {
		name : "Rare Scorpion’s Wartail",
		rarity : "rare",
		description : "This prosthesis can replace, simulate, or enhance a tail, and can be worn by a creature even if doing so would put it over its typical number of limbs. It has the Melee (1d6 piercing, Scourge) property and the Skewer Superior Strike. The reach of attacks made with this prosthesis is increased by an additional 5 feet, to a total of 15 feet.",
		descriptionFull : 
			"This prosthesis can replace, simulate, or enhance a tail, and can be worn by a creature even if doing so would put it over its typical number of limbs. It has the Melee (1d6 piercing, Scourge) property and the Skewer Superior Strike. The reach of attacks made with this prosthesis is increased by an additional 5 feet, to a total of 15 feet."+
			"\n" + toUni("Get Over Here!") + " Once on each of my turns, when I hit a Medium or smaller creature with an attack using this prosthesis, I can force it to make a DC 15 Strength saving throw. On a failed save, the creature is pulled up to 10 feet closer to me."+
			"\n" + toUni("Venom-Tipped") + " This prosthesis contains a reservoir of powerful venom in its tip. When I hit a creature with an attack using the prosthesis, I can inject the venom into the creature, which must make a DC 15 Constitution saving throw. On a failed save, the creature takes 3d8 poison damage and is poisoned for 1 minute. On a successful save, it takes half as much damage and isn’t poisoned. A creature must repeat the saving throw at the end of each of its turns, ending the effect on a success and taking 3d8 poison damage on a failure. Once this property of the prosthesis has been used, it can’t be used again until the next dawn, when the reservoir magically refills with venom.",
		weaponOptions : {
			name : "Rare Scorpion’s Wartail",
			source : [["RGttYR", 264]],
			regExpSearch : /^(?=.*scorpion)(?=.*wartail).*$/i,
			type : "Martial",
			ability : 1,
			abilitytodamage : true,
			damage : [1, 6, "piercing"],
			range : "15 ft",
			description : "Scourge, reach (15ft), skewer superior strike, venom-tipped",
			selectNow : true,
		},
		limfeaname : "Venom-Tipped",
		usages : 1,
		recovery : "dawn",	
	},
	"very rare" : {
		name : "Very Rare Scorpion’s Wartail",
		rarity : "very rare",
		description : "This prosthesis can replace, simulate, or enhance a tail, and can be worn by a creature even if doing so would put it over its typical number of limbs. It has the Melee (1d6 piercing, Scourge) property and the Skewer Superior Strike. The reach of attacks made with this prosthesis is increased by an additional 5 feet, to a total of 15 feet.",
		descriptionFull : 
			"This prosthesis can replace, simulate, or enhance a tail, and can be worn by a creature even if doing so would put it over its typical number of limbs. It has the Melee (1d6 piercing, Scourge) property and the Skewer Superior Strike. The reach of attacks made with this prosthesis is increased by an additional 5 feet, to a total of 15 feet."+
			"\n" + toUni("Get Over Here!") + " Once on each of my turns, when I hit a Medium or smaller creature with an attack using this prosthesis, I can force it to make a DC 16 Strength saving throw. On a failed save, the creature is pulled up to 15 feet closer to me."+
			"\n" +toUni("Venom-Tipped") + " This prosthesis contains a reservoir of powerful venom in its tip. When I hit a creature with an attack using the prosthesis, I can inject the venom into the creature, which must make a DC 15 Constitution saving throw. On a failed save, the creature takes 5d8 poison damage and is poisoned for 1 minute. On a successful save, it takes half as much damage and isn’t poisoned. A creature must repeat the saving throw at the end of each of its turns, ending the effect on a success and taking 3d8 poison damage on a failure. Once this property of the prosthesis has been used, it can’t be used again until the next dawn, when the reservoir magically refills with venom.",
		weaponOptions : {
			name : "Very Rare Scorpion’s Wartail",
			source : [["RGttYR", 264]],
			regExpSearch : /^(?=.*scorpion)(?=.*wartail).*$/i,
			type : "Martial",
			ability : 1,
			abilitytodamage : true,
			damage : [1, 6, "piercing"],
			range : "20 ft",
			description : "Scourge, reach (20 ft), skewer superior strike, venom-tipped",
			selectNow : true,
		},
		limfeaname : "Venom-Tipped",
		usages : 1,
		recovery : "dawn",	
	},
};

// Shisui, Water Slasher
MagicItemsList["shisui, water slasher"] = {
	name : "Shisui, Water Slasher",
	source : [["RGttYR", 265]],
	type : "weapon (any sword)",
	description : "",
	attunement : true,
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "brackets",
		descriptionChange : ["replace", "sword"],
		itemName1stPage : ["brackets ", "Shisui, Water Slasher"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /sword|scimitar|rapier/i;
			return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
		}
	},
	choices : ["uncommon", "rare", "very rare", "legendary"],
	"uncommon" : {
	 	name : "Uncommon Shisui, Water Slasher",
		rarity : "uncommon",
		description : "This weapon has 6 charges and regains 1d4 + 2 expended charges daily at dawn. If the weapon spends 8 continuous hours fully submerged in running water, it regains all expended charges at the next dawn.",
		descriptionFull : 
			"This weapon has 6 charges and regains 1d4 + 2 expended charges daily at dawn. If the weapon spends 8 continuous hours fully submerged in running water, it regains all expended charges at the next dawn."+
			"\n" + toUni("Aqua Conjuration.") + " As an action while holding this weapon, I can expend 1 charge to create water as per the create or destroy water spell."+
			"\n" + toUni("Jet.") + " As an action, I can expend 2 charges to propel myself forward up to 30 feet in a straight line to an unoccupied space I can see. Each creature in a 10-foot-wide line between my origin and my destination must make a DC 13 Dexterity saving throw as high powered jets of water slice into them. A creature takes 3d6 slashing damage on a failed save, or half as much damage on a successful one."+
			"\n" + toUni("Torrent.") + " When I take the Attack action while holding this weapon, I can expend 1 charge to fire a 2-foot-wide, 15-foot-long line of high pressure water from the blade in place of one of the attacks. Each creature in the area must succeed on a DC 13 Strength saving throw or either be pushed back 5 feet or be knocked prone (my choice for all targets).",
		usages : 6,
		recovery : "dawn",
		additional : "regains 1d4+2",
		action : ["action", "Jet (2 Charges)"],
		spellFirstColTitle: "Ch",
		spellcastingBonus: [{
			name: "1 charge",
			spells: ["create or destroy water"],
			selection: ["create or destroy water"],
			firstCol: 1,
		}],
	},
	"rare" : {
		name : "Rare Shisui, Water Slasher",
		rarity : "rare",
		description : "This weapon has 8 charges and regains 1d6 + 2 expended charges daily at dawn. If the weapon spends 8 continuous hours fully submerged in running water, it regains all expended charges at the next dawn.",
		descriptionFull : 
			"This weapon has 8 charges and regains 1d6 + 2 expended charges daily at dawn. If the weapon spends 8 continuous hours fully submerged in running water, it regains all expended charges at the next dawn."+
			"\n" + toUni("Aqua Conjuration.") + " As an action while holding this weapon, I can expend 1 charge to create water as per the create or destroy water spell."+
			"\n" + toUni("Jet.") + " As an action, I can expend 2 charges to propel myself forward up to 30 feet in a straight line to an unoccupied space I can see. Each creature in a 10-foot-wide line between my origin and my destination must make a DC 15 Dexterity saving throw as high powered jets of water slice into them. A creature takes 4d6 slashing damage on a failed save, or half as much damage on a successful one."+
			"\n" + toUni("Torrent.") + " When I take the Attack action while holding this weapon, I can expend 1 charge to fire a 2-foot-wide, 15-foot-long line of high pressure water from the blade in place of one of the attacks. Each creature in the area must succeed on a DC 15 Strength saving throw or either be pushed back 5 feet or be knocked prone (my choice for all targets).",
		usages : 8,
		recovery : "dawn",
		additional : "regains 1d6+2",
		action : ["action", "Jet (2 Charges)"],
		spellFirstColTitle: "Ch",
		spellcastingBonus: [{
			name: "1 charge",
			spells: ["create or destroy water"],
			selection: ["create or destroy water"],
			firstCol: 1,
		}],
	},
	"very rare" : {
		name : "Very Rare Shisui, Water Slasher",
		rarity : "very rare",
		description : "This weapon has 8 charges and regains 1d6 + 2 expended charges daily at dawn. If the weapon spends 8 continuous hours fully submerged in running water, it regains all expended charges at the next dawn.",
		descriptionFull : 
			"This weapon has 8 charges and regains 1d6 + 2 expended charges daily at dawn. If the weapon spends 8 continuous hours fully submerged in running water, it regains all expended charges at the next dawn."+
			"\n" + toUni("Aqua Conjuration.") + " As an action while holding this weapon, I can expend 1 charge to create water as per the create or destroy water spell."+
			"\n" + toUni("Jet.") + " As an action, I can expend 2 charges to propel myself forward up to 30 feet in a straight line to an unoccupied space I can see. Each creature in a 10-foot-wide line between my origin and my destination must make a DC 16 Dexterity saving throw as high powered jets of water slice into them. A creature takes 6d6 slashing damage on a failed save, or half as much damage on a successful one."+
			"\n" + toUni("Torrent.") + " When I take the Attack action while holding this weapon, I can expend 1 charge to fire a 2-foot-wide, 20-foot-long line of high pressure water from the blade in place of one of the attacks. Each creature in the area must succeed on a DC 16 Strength saving throw or either be pushed back 5 feet or be knocked prone (my choice for all targets).",
		usages : 8,
		recovery : "dawn",
		additional : "regains 1d6+2",
		action : ["action", "Jet (2 Charges)"],
		spellFirstColTitle: "Ch",
		spellcastingBonus: [{
			name: "1 charge",
			spells: ["create or destroy water"],
			selection: ["create or destroy water"],
			firstCol: 1,
		}],
	},
	"legendary" : {
		name : "Legendary Shisui, Water Slasher",
		rarity : "legendary",
		description : "This weapon has 8 charges and regains 1d6 + 2 expended charges daily at dawn. If the weapon spends 8 continuous hours fully submerged in running water, it regains all expended charges at the next dawn.",
		descriptionFull : 
			"This weapon has 8 charges and regains 1d6 + 2 expended charges daily at dawn. If the weapon spends 8 continuous hours fully submerged in running water, it regains all expended charges at the next dawn."+
			"\n" + toUni("Aqua Conjuration.") + " As an action while holding this weapon, I can expend 1 charge to create water as per the create or destroy water spell, or expend 3 charges to  cast the control water spell (DC 17)."+
			"\n" + toUni("Jet.") + " As an action, I can expend 2 charges to propel myself forward up to 30 feet in a straight line to an unoccupied space I can see. Each creature in a 10-foot-wide line between my origin and my destination must make a DC 17 Dexterity saving throw as high powered jets of water slice into them. A creature takes 7d6 slashing damage on a failed save, or half as much damage on a successful one."+
			"\n" + toUni("Torrent.") + " When I take the Attack action while holding this weapon, I can expend 1 charge to fire a 2-foot-wide, 30-foot-long line of high pressure water from the blade in place of one of the attacks. Each creature in the area must succeed on a DC 17 Strength saving throw or either be pushed back 5 feet or be knocked prone (my choice for all targets).",
		usages : 8,
		recovery : "dawn",
		additional : "regains 1d6+2",
		action : ["action", "Jet (2 Charges)"],
		spellFirstColTitle: "Ch",
		spellcastingBonus: [{
			name: "1 charge",
			spells: ["create or destroy water"],
			selection: ["create or destroy water"],
			firstCol: 1,
		},{
			name: "3 charges",
			spells: ["control water"],
			selection: ["control water"],
			fixedDC : 17,
			firstCol: 3,
		}],
		languageProfs : ["Aquan"],
	},
};

// Staff of the Jade Guardian
MagicItemsList["staff of the jade guardian"] = {
	name : "Staff of the Jade Guardian",
	source : [["RGttYR", 266]],
	type : "rod, staff, wand",
	description : "",
	attunement : true,
	prerequisite: "Requires attunement by a spellcaster",
	prereqeval: function (v) { return v.isSpellcaster; },
	spellcastingAbility: "class",
	choices : ["rare", "very rare"],
	"rare" : {
		name : "Rare Staff of the Jade Guardian",
		rarity : "rare",
		description : "This staff has 7 charges and regains 1d4 + 3 expended charges daily at dawn. If I expend the last charge, roll a d20. On a 1, the staff breaks in two with the sound of a mighty roar and is destroyed.",
		descriptionFull : 
			"This staff has 7 charges and regains 1d4 + 3 expended charges daily at dawn. If I expend the last charge, roll a d20. On a 1, the staff breaks in two with the sound of a mighty roar and is destroyed."+
			"\n" + toUni("Guardian’s Resolve.") + " While holding this staff, creatures that lack the Swarm trait can’t enter my space if I am unwilling. Swarms have disadvantage on attack rolls while occupying my space."+
			"\n" + toUni("Spells.") + " While holding this staff, I can expend 1 or more of its charges to cast one of the following spells from it (save DC 15): faithful hound (4 charges), guardian of faith (4 charges), or spirit guardians (3 charges, good or neutral only, regardless of my alignment). All spectral entities created by a spell cast in this way take the appearance of mythical lion dogs.",
		limfeaname : "Staff of the Jade Guardian",
		usages : 7,
		recovery : "dawn",
		additional : "regains 1d4+3",
		spellFirstColTitle: "Ch",
		spellcastingBonus: [{
			name: "3 charges",
			spells: ["spirit guardians"],
			selection: ["spirit guardians"],
			fixedDC : 16,
			firstCol: 3,
		},{
			name: "4 charges",
			spells: ["mordenkainen's faithful hound"],
			selection: ["mordenkainen's faithful hound"],
			firstCol: 4,
		},{
			name: "4 charges",
			spells: ["guardian of faith"],
			selection: ["guardian of faith"],
			firstCol: 4,
		}],	
	},
	"very rare" : {
		name : "Very Rare Staff of the Jade Guardian",
		rarity : "very rare",
		description : "This staff has 12 charges and regains 1d8 + 4 expended charges daily at dawn. If I expend the last charge, roll a d20. On a 1, the staff breaks in two with the sound of a mighty roar and is destroyed.",
		descriptionFull : 
			"This staff has 12 charges and regains 1d8 + 4 expended charges daily at dawn. If I expend the last charge, roll a d20. On a 1, the staff breaks in two with the sound of a mighty roar and is destroyed."+
			"\n" + toUni("Guardian’s Resolve.") + " While holding this staff, creatures that lack the Swarm trait can’t enter my space if I am unwilling. Swarms have disadvantage on attack rolls while occupying my space."+
			"\n" + toUni("Spells.") + " While holding this staff, I can expend 1 or more of its charges to cast one of the following spells from it (save DC 16): faithful hound (4 charges), guardian of faith (4 charges), or spirit guardians (3 charges, good or neutral only, regardless of my alignment). All spectral entities created by a spell cast in this way take the appearance of mythical lion dogs.",
		limfeaname : "Staff of the Jade Guardian",
		usages : 12,
		recovery : "dawn",
		additional : "regains 1d8+4",
		spellFirstColTitle: "Ch",
		spellcastingBonus: [{
			name: "3 charges",
			spells: ["spirit guardians"],
			selection: ["spirit guardians"],
			fixedDC : 16,
			firstCol: 3,
		},{
			name: "4 charges",
			spells: ["mordenkainen's faithful hound"],
			selection: ["mordenkainen's faithful hound"],
			firstCol: 4,
		},{
			name: "4 charges",
			spells: ["guardian of faith"],
			selection: ["guardian of faith"],
			firstCol: 4,
		}],	
	},
};

// Tanuki-Zake
MagicItemsList["tanuki-zake"] = {
	name : "Tanuki-Zake",
	source : [["RGttYR", 266]],
	type : "potion",
	description : "",
	action : ["action", "Drunken Master"],
	choices : ["common", "uncommon", "very rare"],
	"common" : {
	 	name : "Common Tanuki-Zake",
		rarity : "common",
		description : "Among other mischief, tanuki enjoy brewing magical sake, which they trick Humanoids into imbibing, delighting in the drunken antics that unfold. However, they try to ensure their pranks are not overly harmful—the effects of the sake wear out quickly and, should the drinker stumble into a scuffle, they will find themselves strangely empowered by the brew.",
		descriptionFull : 
			"Among other mischief, tanuki enjoy brewing magical sake, which they trick Humanoids into imbibing, delighting in the drunken antics that unfold. However, they try to ensure their pranks are not overly harmful—the effects of the sake wear out quickly and, should the drinker stumble into a scuffle, they will find themselves strangely empowered by the brew."+
			"\n" + toUni("Drunken Master.") + " When I use my action to drink this sake, I become poisoned for 10 minutes. If I have immunity to the poisoned condition, I can choose to be poisoned by the sake regardless. While poisoned in this way, I gain the following benefits:"+
			"\n" + " \u2022 I don’t have disadvantage on melee attack rolls or ability checks that use Strength or Dexterity as a result of the poisoned condition."+
			"\n" + " \u2022 I can spend 5 feet of my movement to stand up from being prone, instead of half my speed.",
	},
	"uncommon" : {
	 	name : "Uncommon Tanuki-Zake",
		rarity : "uncommon",
		description : "Among other mischief, tanuki enjoy brewing magical sake, which they trick Humanoids into imbibing, delighting in the drunken antics that unfold. However, they try to ensure their pranks are not overly harmful—the effects of the sake wear out quickly and, should the drinker stumble into a scuffle, they will find themselves strangely empowered by the brew.",
		descriptionFull : 
			"Among other mischief, tanuki enjoy brewing magical sake, which they trick Humanoids into imbibing, delighting in the drunken antics that unfold. However, they try to ensure their pranks are not overly harmful—the effects of the sake wear out quickly and, should the drinker stumble into a scuffle, they will find themselves strangely empowered by the brew."+
			"\n" + toUni("Drunken Master.") + " When I use my action to drink this sake, I become poisoned for 10 minutes. If I have immunity to the poisoned condition, I can choose to be poisoned by the sake regardless. While poisoned in this way, I gain the following benefits:"+
			"\n" + "\u2022 I don’t have disadvantage on melee attack rolls or ability checks that use Strength or Dexterity as a result of the poisoned condition."+
			"\n" + "\u2022 I gain a +1 bonus to AC."+
			"\n" + "\u2022 I can spend 5 feet of my movement to stand up from being prone, instead of half my speed."+
			"\n" + "\u2022 The first time on each of my turns that I make a melee attack immediately after I stand up from being prone, I have advantage on the attack roll. If the attack is an unarmed strike, it deals an extra 1d6 damage on a hit.",
	},
	"very rare" : {
	 	name : "Very Rare Tanuki-Zake",
		rarity : "very rare",
		description : "Among other mischief, tanuki enjoy brewing magical sake, which they trick Humanoids into imbibing, delighting in the drunken antics that unfold. However, they try to ensure their pranks are not overly harmful—the effects of the sake wear out quickly and, should the drinker stumble into a scuffle, they will find themselves strangely empowered by the brew.",
		descriptionFull : 
			"Among other mischief, tanuki enjoy brewing magical sake, which they trick Humanoids into imbibing, delighting in the drunken antics that unfold. However, they try to ensure their pranks are not overly harmful—the effects of the sake wear out quickly and, should the drinker stumble into a scuffle, they will find themselves strangely empowered by the brew."+
			"\n" + toUni("Drunken Master.") + " When I use my action to drink this sake, I become poisoned for 10 minutes. If I have immunity to the poisoned condition, I can choose to be poisoned by the sake regardless. While poisoned in this way, I gain the following benefits:"+
			"\n" + "\u2022 I don’t have disadvantage on melee attack rolls or ability checks that use Strength or Dexterity as a result of the poisoned condition."+
			"\n" + "\u2022 I gain a +1 bonus to AC."+
			"\n" + "\u2022 I can spend 5 feet of my movement to stand up from being prone, instead of half my speed."+
			"\n" + "\u2022 On each of my turns that I make melee attacks immediately after I stand up from being prone, I have advantage on the attack roll. If the attack is an unarmed strike, it deals an extra 1d6 damage on a hit.",
	},
};

// Wanyūdō’s Burden
MagicItemsList["wanyudo’s burden"] = {
	name : "Wanyudo’s Burden",
	source : [["RGttYR", 267]],
	type : "wondrous item",
	description : "This amulet has 3 charges and regains all expended charges daily at dawn.",
	choices : ["uncommon", "rare", "very rare"],
	"uncommon" : {
		name : "Uncommon Wanyudo’s Burden",
		rarity : "uncommon",
		description : "This amulet has 3 charges and regains all expended charges daily at dawn.",
		descriptionFull : 
			"This amulet has 3 charges and regains all expended charges daily at dawn."+
			"\n" + toUni("Firedrinker.") + " As a reaction when I take fire damage while wearing this amulet, I can expend 1 charge to reduce that damage by 3d6, as the demonic visage sucks a portion of the flames into its mouth. Then choose one of the following options:"+
			"\n \u2022" + toUni("Consume.") + " I regain hit points equal to half the damage reduced."+
			"\n \u2022" + toUni("Exhale.") + " The demonic visage immediately spits out those flames at a creature of my choice within 10 feet of me. The target must make a DC 13 Dexterity saving throw, taking 3d6 fire damage on a failed save, or half as much damage on a successful one.",
		limfeaname : "Wanyudo’s Burden",
		usages : 3,
		recovery : "dawn",
		action : ["reaction", "Firedrinker (1 charge)"],
		extraLimitedFeatures : [{
			name : "Flaming Trail",
			usages : 1,
			recovery : "dawn",
		}],	
	},
	"rare" : {
		name : "Rare Wanyudo’s Burden",
		rarity : "rare",
		description : "This amulet has 3 charges and regains all expended charges daily at dawn.",
		descriptionFull : 
			"This amulet has 3 charges and regains all expended charges daily at dawn."+
			"\n" + toUni("Firedrinker.") + " As a reaction when I take fire damage while wearing this amulet, I can expend 1 charge to reduce that damage by 3d6, as the demonic visage sucks a portion of the flames into its mouth. Then choose one of the following options:"+
			"\n \u2022" + toUni("Consume.") + " I regain hit points equal to half the damage reduced."+
			"\n \u2022" + toUni("Exhale.") + " The demonic visage immediately spits out those flames at a creature of my choice within 10 feet of me. The target must make a DC 15 Dexterity saving throw, taking 3d6 fire damage on a failed save, or half as much damage on a successful one."+
			"\n" + toUni("Flaming Trail.") + " After the necklace has drunk enough fire, it unlocks a powerful new ability. While this necklace has 0 charges and I am wearing it, I can cast the wall of fire spell (save DC 15). When cast in this way, the amulet animates, detaches from its string, and spins across the battlefield, leaving a trail of fire in its wake that grows into the wall, which can be in any shape instead of just a circle or a straight line. After the wall is formed, the amulet returns to me and attaches itself to the string once more. While wearing the amulet, I take no damage from the spell cast using it. Once this property of the amulet has been used, it can’t be used again until the next dawn.",
		limfeaname : "Wanyudo’s Burden",
		usages : 3,
		recovery : "dawn",
		action : ["reaction", "Firedrinker (1 charge)"],
		extraLimitedFeatures : [{
			name : "Flaming Trail",
			usages : 1,
			recovery : "dawn",
		}],	
	},
	"very rare" : {
		name : "Very Rare Wanyudo’s Burden",
		rarity : "very rare",
		description : "This amulet has 3 charges and regains all expended charges daily at dawn.",
		descriptionFull : 
			"This amulet has 3 charges and regains all expended charges daily at dawn."+
			"\n" + toUni("Firedrinker.") + " As a reaction when I take fire damage while wearing this amulet, I can expend 1 charge to reduce that damage by 3d6, as the demonic visage sucks a portion of the flames into its mouth. Then choose one of the following options:"+
			"\n \u2022" + toUni("Consume.") + " I regain hit points equal to half the damage reduced."+
			"\n \u2022" + toUni("Exhale.") + " The demonic visage immediately spits out those flames at a creature of my choice within 10 feet of me. The target must make a DC 16 Dexterity saving throw, taking 3d6 fire damage on a failed save, or half as much damage on a successful one."+
			"\n" + toUni("Flaming Trail.") + " After the necklace has drunk enough fire, it unlocks a powerful new ability. While this necklace has 0 charges and I am wearing it, I can cast the wall of fire spell (save DC 16). When cast in this way, the amulet animates, detaches from its string, and spins across the battlefield, leaving a trail of fire in its wake that grows into the wall, which can be in any shape instead of just a circle or a straight line. After the wall is formed, the amulet returns to me and attaches itself to the string once more. While wearing the amulet, I take no damage from the spell cast using it. Once this property of the amulet has been used, it can’t be used again until the next dawn.",
		limfeaname : "Wanyudo’s Burden",
		usages : 3,
		recovery : "dawn",
		action : ["reaction", "Firedrinker (1 charge)"],
		extraLimitedFeatures : [{
			name : "Flaming Trail",
			usages : 2,
			recovery : "dawn",
		}],	
	},
};

// Windweaver
MagicItemsList["windweaver"] = {
	name : "Windweaver",
	source : [["RGttYR", 268]],
	type : "prosthesis",
	description : "This prosthesis can replace, simulate, or enhance a tail, and can be worn by a creature even if doing so would put it over its typical number of limbs. It has the Melee (1d6 piercing, Scourge) property and the Skewer Superior Strike. The reach of attacks made with this prosthesis is increased by an additional 5 feet, to a total of 15 feet.",
	attunement : true,
	choices : ["uncommon", "rare", "very rare"],
	"uncommon" : {
		name : "Uncommon Windweaver",
		rarity : "uncommon",
		description : "This prosthesis can enhance or replace an arm, and has a built-in war fan that can be used to propel myself with blasts of magical wind. It has the Blast (2d6 bludgeoning, 30 ft.) and Integrated (tessen) properties.",
		descriptionFull : 
			"This prosthesis can enhance or replace an arm, and has a built-in war fan that can be used to propel myself with blasts of magical wind. It has the Blast (2d6 bludgeoning, 30 ft.) and Integrated (tessen) properties."+
			"\n" + toUni("Stick the Landing.") + " When I fall, I can use my reaction to unleash a blast of wind moments before I hit the ground, cushioning me and reducing the falling damage I take to 0.",
		weaponOptions : [{
			name : "Uncommon Windweaver (Blast)",
			source : [["RGttYR", 268]],
			regExpSearch : /^(?=.*windweaver)(?=.*blast).*$/i,
			type : "Martial",
			ability : 2,
			abilitytodamage : true,
			damage : [2, 6, "bludgeoning"],
			range : "30 ft",
			description : "Blast (2d6 bludgeoning, 30 ft.), integrated (tessen)",
			selectNow : true,
		},{
			name : "Uncommon Windweaver (Tessen)",
			source : [["RGttYR", 268]],
			regExpSearch : /^(?=.*windweaver)(?=.*tessen).*$/i,
			baseWeapon : "tessen",
			selectNow : true,
		}],
		action : ["reaction", "Stick the Landing"],
	},
	"rare" : {
		name : "Rare Windweaver",
		rarity : "rare",
		description : "This prosthesis can enhance or replace an arm, and has a built-in war fan that can be used to propel myself with blasts of magical wind. It has the Blast (2d6 bludgeoning, 30 ft.) and Integrated (tessen) properties.",
		descriptionFull : 
			"This prosthesis can enhance or replace an arm, and has a built-in war fan that can be used to propel myself with blasts of magical wind. It has the Blast (2d6 bludgeoning, 30 ft.) and Integrated (tessen) properties."+
			"\n" + toUni("Stick the Landing.") + " When I fall, I can use my reaction to unleash a blast of wind moments before I hit the ground, cushioning me and reducing the falling damage I take to 0."+
			"\n" + toUni("Wind Tunnel.") + " When I use the prosthesis’ Blast property to propel myself, I can choose to create an even larger blast of wind. If I do, I can move up to 60 feet instead of 30 feet, and I don’t provoke opportunity attacks while doing so. In addition, when I move within 5 feet of a creature during this movement, it must succeed on a DC 15 Strength saving throw or be knocked prone. A creature can only be forced to make this saving throw once on each turn. Once this property of the prosthesis has been used, it can’t be used again until the next dawn.",
		weaponOptions : [{
			name : "Rare Windweaver (Blast)",
			source : [["RGttYR", 268]],
			regExpSearch : /^(?=.*windweaver)(?=.*blast).*$/i,
			type : "Martial",
			ability : 2,
			abilitytodamage : true,
			damage : [2, 6, "bludgeoning"],
			range : "30 ft",
			description : "Blast (2d6 bludgeoning, 30 ft.), wind tunnel",
			selectNow : true,
		},{
			name : "Rare Windweaver (Tessen)",
			source : [["RGttYR", 268]],
			regExpSearch : /^(?=.*windweaver)(?=.*tessen).*$/i,
			baseWeapon : "tessen",
			description : "Adaptable (bludg), finesse, light, special: fan shield; Wind tunnel",
			selectNow : true,
		}],
		action : ["reaction", "Stick the Landing"],
		limfeaname : "Wind Tunnel",
		usages : 1,
		recovery : "dawn",	
	},
	"very rare" : {
		name : "Very Rare Windweaver",
		rarity : "very rare",
		description : "This prosthesis can enhance or replace an arm, and has a built-in war fan that can be used to propel myself with blasts of magical wind. It has the Blast (2d6 bludgeoning, 30 ft.) and Integrated (tessen) properties.",
		descriptionFull : 
			"This prosthesis can enhance or replace an arm, and has a built-in war fan that can be used to propel myself with blasts of magical wind. It has the Blast (2d6 bludgeoning, 30 ft.) and Integrated (tessen) properties."+
			"\n" + toUni("Stick the Landing.") + " When I fall, I can use my reaction to unleash a blast of wind moments before I hit the ground, cushioning me and reducing the falling damage I take to 0. This feature can also be used on a creature that falls within 15 ft of me."+
			"\n" + toUni("Wind Tunnel.") + " When I use the prosthesis’ Blast property to propel myself, I can choose to create an even larger blast of wind. If I do, I can move up to 60 feet instead of 30 feet, and I don’t provoke opportunity attacks while doing so. In addition, when I move within 5 feet of a creature during this movement, it must succeed on a DC 16 Strength saving throw or take 2d6 bludgeoning damage and be knocked prone. A creature can only be forced to make this saving throw once on each turn. Once this property of the prosthesis has been used, it can’t be used again until the next dawn.",
		weaponOptions : [{
			name : "Very Rare Windweaver (Blast)",
			source : [["RGttYR", 268]],
			regExpSearch : /^(?=.*windweaver)(?=.*blast).*$/i,
			type : "Martial",
			ability : 2,
			abilitytodamage : true,
			damage : [2, 6, "bludgeoning"],
			range : "30 ft",
			description : "Blast (2d6 bludgeoning, 30 ft.), integrated (tessen), wind tunnel",
			selectNow : true,
		},{
			name : "Very Rare Windweaver (Tessen)",
			source : [["RGttYR", 268]],
			regExpSearch : /^(?=.*windweaver)(?=.*tessen).*$/i,
			baseWeapon : "tessen",
			description : "Adaptable (bludg), finesse, light, special: fan shield; Wind tunnel",
			selectNow : true,
		}],
		action : ["reaction", "Stick the Landing"],
		limfeaname : "Wind Tunnel",
		usages : 1,
		recovery : "dawn",	
	},
};

// Wraithclaw
MagicItemsList["wraithclaw"] = {
	name : "Wraithclaw",
	source : [["RGttYR", 269]],
	type : "prosthesis",
	description : "This prosthesis can replace, simulate, or enhance a tail, and can be worn by a creature even if doing so would put it over its typical number of limbs. It has the Melee (1d6 piercing, Scourge) property and the Skewer Superior Strike. The reach of attacks made with this prosthesis is increased by an additional 5 feet, to a total of 15 feet.",
	attunement : true,
	choices : ["uncommon", "rare", "very rare"],
	"uncommon" : {
		name : "Uncommon Wraithclaw",
		rarity : "uncommon",
		description : "This prosthesis consists of a ghostly limb, solid to the touch, and can enhance or replace an arm. It has the Hookshot (20 ft.) and Melee (2d6 necrotic, Pugilist) properties, and the Flurry Superior Strike. Instead of firing a hook, the arm stretches and the hand grabs on to the target, but otherwise functions in the same way. While wearing the prosthesis, I can use a bonus action to cause it to dissolve into thin air or to make it reform.",
		descriptionFull : 
			"This prosthesis consists of a ghostly limb, solid to the touch, and can enhance or replace an arm. It has the Hookshot (20 ft.) and Melee (2d6 necrotic, Pugilist) properties, and the Flurry Superior Strike. Instead of firing a hook, the arm stretches and the hand grabs on to the target, but otherwise functions in the same way. While wearing the prosthesis, I can use a bonus action to cause it to dissolve into thin air or to make it reform."+
			"\n" + toUni("Ghostly Reach.") + " The reach of weapons I hold using only the prosthesis, as well as unarmed strikes made using the prosthesis, increases by 5 feet."+
			"\n" + toUni("Improved Hookshot.") + " As an action while the hand is attached to a target, I can reel myself in. When I do, I move a number of feet up to the item’s Hookshot range in a straight line towards the hand. In addition, the DC of the ability check required to forcefully detach the hook increases to 13."+ 
			"\n" + toUni("Hundred Claws.") + " While wearing the prosthesis, I can use an action to summon a barrage of ghostly hands tha assault a creature within 10 feet of me. Make a melee spell attack against it (+5 to hit). On a hit, the creature takes 2d6 necrotic damage, and I can immediately attack it in this way again as part of the same action. I can make a maximum of three attacks with each use of this property. Once the property has been used, it can’t be used again until the next dawn.",
		weaponOptions : [{
			name : "Uncommon Wraithclaw",
			source : [["RGttYR", 268]],
			regExpSearch : /^(?=.*wraithclaw).*$/i,
			type : "Martial",
			ability : 2,
			abilitytodamage : true,
			damage : [2, 6, "necrotic"],
			range : "Melee",
			description : "Hookshot (20 ft.), melee (2d6 necrotic, Pugilist) properties, flurry superior strike.",
			selectNow : true,
		}],
		action : ["action", "Hundred Claws"],
		limfeaname : "Hundred Claws",
		usages : 1,
		recovery : "dawn",	
	},
	"rare" : {
		name : "Rare Wraithclaw",
		rarity : "rare",
		description : "This prosthesis consists of a ghostly limb, solid to the touch, and can enhance or replace an arm. It has the Hookshot (20 ft.) and Melee (2d6 necrotic, Pugilist) properties, and the Flurry Superior Strike. Instead of firing a hook, the arm stretches and the hand grabs on to the target, but otherwise functions in the same way. While wearing the prosthesis, I can use a bonus action to cause it to dissolve into thin air or to make it reform.",
		descriptionFull : 
			"This prosthesis consists of a ghostly limb, solid to the touch, and can enhance or replace an arm. It has the Hookshot (20 ft.) and Melee (2d6 necrotic, Pugilist) properties, and the Flurry Superior Strike. Instead of firing a hook, the arm stretches and the hand grabs on to the target, but otherwise functions in the same way. While wearing the prosthesis, I can use a bonus action to cause it to dissolve into thin air or to make it reform."+
			"\n" + toUni("Ghostly Reach.") + " The reach of weapons I hold using only the prosthesis, as well as unarmed strikes made using the prosthesis, increases by 5 feet."+
			"\n" + toUni("Improved Hookshot.") + " As an action while the hand is attached to a target, I can reel myself in. When I do, I move a number of feet up to the item’s Hookshot range in a straight line towards the hand. In addition, the DC of the ability check required to forcefully detach the hook increases to 15."+ 
			"\n" + toUni("Hundred Claws.") + " While wearing the prosthesis, I can use an action to summon a barrage of ghostly hands tha assault a creature within 10 feet of me. Make a melee spell attack against it (+7 to hit). On a hit, the creature takes 3d6 necrotic damage, and I can immediately attack it in this way again as part of the same action. I can make a maximum of four attacks with each use of this property. The Hundred Claws property can be used three times, regaining all expended uses daily at dawn.",
		weaponOptions : [{
			name : "Rare Wraithclaw",
			source : [["RGttYR", 268]],
			regExpSearch : /^(?=.*wraithclaw).*$/i,
			type : "Martial",
			ability : 2,
			abilitytodamage : true,
			damage : [2, 6, "necrotic"],
			range : "Melee",
			description : "Hookshot (20 ft.), melee (2d6 necrotic, Pugilist) properties, flurry superior strike.",
			selectNow : true,
		}],
		action : ["action", "Hundred Claws"],
		limfeaname : "Hundred Claws",
		usages : 3,
		recovery : "dawn",	
	},
	"very rare" : {
		name : "Very Rare Wraithclaw",
		rarity : "very rare",
		description : "This prosthesis consists of a ghostly limb, solid to the touch, and can enhance or replace an arm. It has the Hookshot (20 ft.) and Melee (2d6 necrotic, Pugilist) properties, and the Flurry Superior Strike. Instead of firing a hook, the arm stretches and the hand grabs on to the target, but otherwise functions in the same way. While wearing the prosthesis, I can use a bonus action to cause it to dissolve into thin air or to make it reform.",
		descriptionFull : 
			"This prosthesis consists of a ghostly limb, solid to the touch, and can enhance or replace an arm. It has the Hookshot (20 ft.) and Melee (2d6 necrotic, Pugilist) properties, and the Flurry Superior Strike. Instead of firing a hook, the arm stretches and the hand grabs on to the target, but otherwise functions in the same way. While wearing the prosthesis, I can use a bonus action to cause it to dissolve into thin air or to make it reform."+
			"\n" + toUni("Ghostly Reach.") + " The reach of weapons I hold using only the prosthesis, as well as unarmed strikes made using the prosthesis, increases by 5 feet."+
			"\n" + toUni("Improved Hookshot.") + " As an action while the hand is attached to a target, I can reel myself in. When I do, I move a number of feet up to the item’s Hookshot range in a straight line towards the hand. In addition, the DC of the ability check required to forcefully detach the hook increases to 16."+ 
			"\n" + toUni("Hundred Claws.") + " While wearing the prosthesis, I can use an action to summon a barrage of ghostly hands tha assault a creature within 10 feet of me. Make a melee spell attack against it (+8 to hit). On a hit, the creature takes 4d6 necrotic damage, and I can immediately attack it in this way again as part of the same action. I can make a maximum of four attacks with each use of this property. The Hundred Claws property can be used four times, regaining all expended uses daily at dawn.",
		weaponOptions : [{
			name : "Rare Wraithclaw",
			source : [["RGttYR", 268]],
			regExpSearch : /^(?=.*wraithclaw).*$/i,
			type : "Martial",
			ability : 2,
			abilitytodamage : true,
			damage : [2, 6, "necrotic"],
			range : "Melee",
			description : "Hookshot (20 ft.), melee (2d6 necrotic, Pugilist) properties, flurry superior strike.",
			selectNow : true,
		}],
		action : ["action", "Hundred Claws"],
		limfeaname : "Hundred Claws",
		usages : 4,
		recovery : "dawn",	
	},
};

// Wyrm’s Breath Grenade
MagicItemsList["wyrm’s breath grenade"] = {
	name : "Wyrm’s Breath Grenade",
	source : [["RGttYR", 270]],
	type : "wondrous item",
	description : "Within a beautifully sculpted exterior is housed a dragon’s biomantically-sustained toxin gland, pungent incense, and crushed diamond. Available in a variety of hues, the metal from which this grenade-like contraption is fashioned always matches the dragon from which the organ was harvested.",
	action : ["action", "Wyrm’s Breath Grenade"],
	limfeaname : "Wyrm’s Breath Grenade",
	usages : 1,
	recovery : "dawn",
	additional : "with gold costs",
	choices : ["bronze, repulsion; rare", "copper, slow; rare", "brass, sleep; very rare", "gold, weakening; very rare", "silver, paralysing; legendary"],
	"bronze, repulsion; rare" : {
		name : "Bronze, Repulsion; Rare",
		rarity : "rare",
		description : "Within a beautifully sculpted exterior is housed a dragon’s biomantically-sustained toxin gland, pungent incense, and crushed diamond. Available in a variety of hues, the metal from which this grenade-like contraption is fashioned always matches the dragon from which the organ was harvested.",
		descriptionFull : 
			"Within a beautifully sculpted exterior is housed a dragon’s biomantically-sustained toxin gland, pungent incense, and crushed diamond. Available in a variety of hues, the metal from which this grenade-like contraption is fashioned always matches the dragon from which the organ was harvested."+
			"\n" + "As an action, I can throw this magical device onto a surface I can see within 60 feet of me. Upon impact, the incense ignites, billowing out in a pungent, 15-foot-radius sphere, carrying with it the dragon’s magic. A creature that starts its turn in the area or enters the area for the first time on a turn must make the associated saving throw, suffering the associated effects on a failure. Creatures are affected even if they hold their breath or don’t need to breathe. The cloud lasts for 1 minute or until a strong wind (at least 20 miles per hour) disperses it. Once a grenade has been used, it can’t be used again until the next dawn, and it must be refilled with 100 gp of good-quality incense, as well as a specified value of diamond dust."+
			"\n" + "A creature must succeed on a DC 15 Strength saving throw or be flung up to 60 feet from the centre of the sphere, landing prone and taking 2d6 bludgeoning damage. If a creature collides with another creature, both creatures take an extra 2d6 bludgeoning damage. If a creature collides with a solid object, it takes 4d6 bludgeoning damage instead. Diamond dust: 400 gp.",	
	},
	"copper, slow; rare" : {
		name : "Copper, Slow; Rare",
		rarity : "rare",
		description : "Within a beautifully sculpted exterior is housed a dragon’s biomantically-sustained toxin gland, pungent incense, and crushed diamond. Available in a variety of hues, the metal from which this grenade-like contraption is fashioned always matches the dragon from which the organ was harvested.",
		descriptionFull : 
			"Within a beautifully sculpted exterior is housed a dragon’s biomantically-sustained toxin gland, pungent incense, and crushed diamond. Available in a variety of hues, the metal from which this grenade-like contraption is fashioned always matches the dragon from which the organ was harvested."+
			"\n" + "As an action, I can throw this magical device onto a surface I can see within 60 feet of me. Upon impact, the incense ignites, billowing out in a pungent, 15-foot-radius sphere, carrying with it the dragon’s magic. A creature that starts its turn in the area or enters the area for the first time on a turn must make the associated saving throw, suffering the associated effects on a failure. Creatures are affected even if they hold their breath or don’t need to breathe. The cloud lasts for 1 minute or until a strong wind (at least 20 miles per hour) disperses it. Once a grenade has been used, it can’t be used again until the next dawn, and it must be refilled with 100 gp of good-quality incense, as well as a specified value of diamond dust."+
			"\n" + "A creature must succeed on a DC 15 Constitution saving throw or suffer the effects of the slow spell until the end of its next turn. Diamond dust: 300 gp.",
		spellcastingBonus: [{
			name: "Copper, Slow; Rare",
			spells: ["slow"],
			selection: ["slow"],
			fixedDC : 15,
		}],
	},
	"brass, sleep; very rare" : {
		name : "Brass, Sleep; Very Rare",
		rarity : "very rare",
		description : "Within a beautifully sculpted exterior is housed a dragon’s biomantically-sustained toxin gland, pungent incense, and crushed diamond. Available in a variety of hues, the metal from which this grenade-like contraption is fashioned always matches the dragon from which the organ was harvested.",
		descriptionFull : 
			"Within a beautifully sculpted exterior is housed a dragon’s biomantically-sustained toxin gland, pungent incense, and crushed diamond. Available in a variety of hues, the metal from which this grenade-like contraption is fashioned always matches the dragon from which the organ was harvested."+
			"\n" + "As an action, I can throw this magical device onto a surface I can see within 60 feet of me. Upon impact, the incense ignites, billowing out in a pungent, 15-foot-radius sphere, carrying with it the dragon’s magic. A creature that starts its turn in the area or enters the area for the first time on a turn must make the associated saving throw, suffering the associated effects on a failure. Creatures are affected even if they hold their breath or don’t need to breathe. The cloud lasts for 1 minute or until a strong wind (at least 20 miles per hour) disperses it. Once a grenade has been used, it can’t be used again until the next dawn, and it must be refilled with 100 gp of good-quality incense, as well as a specified value of diamond dust."+
			"\n" + "A creature must succeed on a DC 16 Constitution saving throw or be affected by a heavy drowsiness that causes it to fall unconscious until the start of its next turn. A creature with 80 or more hit points is immune to this effect. This effect ends for a creature if the creature takes damage, or if another creature uses an action to wake it. Diamond dust: 700 gp.",	
	},
	"gold, weakening; very rare" : {
		name : "Gold, Weakening; Very Rare",
		rarity : "very rare",
		description : "Within a beautifully sculpted exterior is housed a dragon’s biomantically-sustained toxin gland, pungent incense, and crushed diamond. Available in a variety of hues, the metal from which this grenade-like contraption is fashioned always matches the dragon from which the organ was harvested.",
		descriptionFull : 
			"Within a beautifully sculpted exterior is housed a dragon’s biomantically-sustained toxin gland, pungent incense, and crushed diamond. Available in a variety of hues, the metal from which this grenade-like contraption is fashioned always matches the dragon from which the organ was harvested."+
			"\n" + "As an action, I can throw this magical device onto a surface I can see within 60 feet of me. Upon impact, the incense ignites, billowing out in a pungent, 15-foot-radius sphere, carrying with it the dragon’s magic. A creature that starts its turn in the area or enters the area for the first time on a turn must make the associated saving throw, suffering the associated effects on a failure. Creatures are affected even if they hold their breath or don’t need to breathe. The cloud lasts for 1 minute or until a strong wind (at least 20 miles per hour) disperses it. Once a grenade has been used, it can’t be used again until the next dawn, and it must be refilled with 100 gp of good-quality incense, as well as a specified value of diamond dust."+
			"\n" + "A creature must succeed on a DC 16 Constitution saving throw or have disadvantage on all ability checks, attack rolls, and saving throws, and also deal half damage with weapon attacks that use Strength until the end of its next turn. Diamond dust: 1,200 gp.",	
	},
	"silver, paralysing; legendary" : {
		name : "Silver, Paralysing; Legendary",
		rarity : "legendary",
		description : "Within a beautifully sculpted exterior is housed a dragon’s biomantically-sustained toxin gland, pungent incense, and crushed diamond. Available in a variety of hues, the metal from which this grenade-like contraption is fashioned always matches the dragon from which the organ was harvested.",
		descriptionFull : 
			"Within a beautifully sculpted exterior is housed a dragon’s biomantically-sustained toxin gland, pungent incense, and crushed diamond. Available in a variety of hues, the metal from which this grenade-like contraption is fashioned always matches the dragon from which the organ was harvested."+
			"\n" + "As an action, I can throw this magical device onto a surface I can see within 60 feet of me. Upon impact, the incense ignites, billowing out in a pungent, 15-foot-radius sphere, carrying with it the dragon’s magic. A creature that starts its turn in the area or enters the area for the first time on a turn must make the associated saving throw, suffering the associated effects on a failure. Creatures are affected even if they hold their breath or don’t need to breathe. The cloud lasts for 1 minute or until a strong wind (at least 20 miles per hour) disperses it. Once a grenade has been used, it can’t be used again until the next dawn, and it must be refilled with 100 gp of good-quality incense, as well as a specified value of diamond dust."+
			"\n" + "A creature must succeed on a DC 17 Constitution saving throw or be paralysed until the start of its next turn. Diamond dust: 2,400 gp.",	
	},
};

// Xyxlwood Bonsai
MagicItemsList["xyxlwood bonsai"] = {
	name : "Xyxlwood Bonsai",
	source : [["RGttYR", 270]],
	type : "wondrous item",
	description : "This exceptionally fast-growing, animated Xyxlwood tree writhes its roots in delight whenever I sprinkle it with fresh water. Measuring 6 inches cubed, this magical plant needs almost constant care lest it become an unkempt shrubbery. Each day, the bonsai bonds with the creature that tends to it best, also known as its gardener.",
	choices : ["uncommon", "rare"],
	"uncommon" : {
		name : "Uncommon Xyxlwood Bonsai",
		rarity : "uncommon",
		description : "This exceptionally fast-growing, animated Xyxlwood tree writhes its roots in delight whenever I sprinkle it with fresh water. Measuring 6 inches cubed, this magical plant needs almost constant care lest it become an unkempt shrubbery. Each day, the bonsai bonds with the creature that tends to it best, also known as its gardener.",
		descriptionFull : 
			"This exceptionally fast-growing, animated Xyxlwood tree writhes its roots in delight whenever I sprinkle it with fresh water. Measuring 6 inches cubed, this magical plant needs almost constant care lest it become an unkempt shrubbery. Each day, the bonsai bonds with the creature that tends to it best, also known as its gardener."+
			"\n" + toUni("Goodboy Berry.") + " So long as the following conditions were met during the last 24 hours, the bonsai produces 2d4 berries, as per the goodberry spell, each day at dawn:"+
			"\n" + " \u2022 The bonsai was in bright light for at least 1 hour in total."+
			"\n" + " \u2022 The bonsai received more than a quarter of a gallon of fresh water but no more than half a gallon, or twice as much water during hot weather."+
			"\n" + " \u2022 A creature spent at least 10 minutes pruning and tending to the bonsai. When a creature prunes the bonsai, it must make a DC 11 Dexterity (Nature) check. On a failed check, the number of berries produced at the next dawn is reduced by one die."+ 
			"\n" + "The berries produced by the bonsai remain for 24 hours. At the end of this time, their potency dissipates and they rot away."+
			"\n" + toUni("Calming Practice.") + " Each day at dawn, if the bonsai produces at least one berry, the last creature to successfully prune and tend to it is suffused with a sense of calm until the next dawn. Once during that time, the creature can cast the calm emotions spell (save DC 13), centred on itself.",	
	},
	"rare" : {
		name : "Rare Xyxlwood Bonsai",
		rarity : "rare",
		description : "This exceptionally fast-growing, animated Xyxlwood tree writhes its roots in delight whenever I sprinkle it with fresh water. Measuring 6 inches cubed, this magical plant needs almost constant care lest it become an unkempt shrubbery. Each day, the bonsai bonds with the creature that tends to it best, also known as its gardener.",
		descriptionFull : 
			"This exceptionally fast-growing, animated Xyxlwood tree writhes its roots in delight whenever I sprinkle it with fresh water. Measuring 6 inches cubed, this magical plant needs almost constant care lest it become an unkempt shrubbery. Each day, the bonsai bonds with the creature that tends to it best, also known as its gardener."+
			"\n" + toUni("Goodboy Berry.") + " So long as the following conditions were met during the last 24 hours, the bonsai produces 4d4 berries, as per the goodberry spell, each day at dawn:"+
			"\n" + " \u2022 The bonsai was in bright light for at least 1 hour in total."+
			"\n" + " \u2022 The bonsai received more than a quarter of a gallon of fresh water but no more than half a gallon, or twice as much water during hot weather."+
			"\n" + " \u2022 A creature spent at least 10 minutes pruning and tending to the bonsai. When a creature prunes the bonsai, it must make a DC 13 Dexterity (Nature) check. On a failed check, the number of berries produced at the next dawn is reduced by one die."+ 
			"\n" + "The berries produced by the bonsai remain for 24 hours. At the end of this time, their potency dissipates and they rot away."+
			"\n" + toUni("Calming Practice.") + " Each day at dawn, if the bonsai produces at least one berry, the last creature to successfully prune and tend to it is suffused with a sense of calm until the next dawn. Once during that time, the creature can cast the calm emotions spell (save DC 15), centred on itself."+
			"\n" + toUni("Serene Mind.") + " Once while suffused with a sense of calm as per the Calming Practice property, a creature can use an action to gain resistance to psychic damage for 1 hour.",
	},
};

// Yukimono
MagicItemsList["yukimono"] = {
	name : "Yukimono",
	source : [["RGttYR", 271]],
	type : "wondrous item",
	description : "This kimono has 3 charges, represented by the same number of blue wisps floating around it, and regains 1d3 expended charges daily at dawn. As a bonus action, I can make the wisps invisible or visible again.",
	attunement : true,
	choices : ["uncommon", "rare", "very rare"],
	"uncommon" : {
		name : "Uncommon Yukimono",
		rarity : "uncommon",
		description : "This kimono has 3 charges, represented by the same number of blue wisps floating around it, and regains 1d3 expended charges daily at dawn. As a bonus action, I can make the wisps invisible or visible again.",
		descriptionFull : 
			"This kimono has 3 charges, represented by the same number of blue wisps floating around it, and regains 1d3 expended charges daily at dawn. As a bonus action, I can make the wisps invisible or visible again."+
			"\n" + toUni("Immaterial Step.") + " While wearing this kimono, other creatures’ spaces aren’t considered difficult terrain forme, and I can move through a hostile creature’s space regardless of its size. When I move into a creature’s space using this property, I take 1d4 force damage, which can’t be reduced or prevented in any way. I can’t willingly end my turn in another creature’s space."+
			"\n" + toUni("Minor Possession.") + " As a bonus action while wearing this kimono, I can expend 1 charge to speak its command word, instructing one of the blue wisps to possess a creature I can see within 30 feet of me. The creature must succeed on a DC 13 Charisma saving throw or the wisp enters the creature and can exert limited control over its body for 1 minute, disrupting its movements. For the duration, the creature’s speed is halved, and it has disadvantage on the first attack roll it makes on each of its turns. The creature can repeat the saving throw at the end of each of its turns, ending the effect on a success. This property has no effect on Constructs and Undead.",
		limfeaname : "Yukimono",
		usages : 3,
		recovery : "dawn",
		additional : "regains 1d3",
		action : ["bonus action", "Minor Possession"],	
	},
	"rare" : {
		name : "Rare Yukimono",
		rarity : "rare",
		description : "This kimono has 6 charges, represented by the same number of blue wisps floating around it, and regains 1d4 + 2 expended charges daily at dawn. As a bonus action, I can make the wisps invisible or visible again.",
		descriptionFull : 
			"This kimono has 6 charges, represented by the same number of blue wisps floating around it, and regains 1d4 + 2 expended charges daily at dawn. As a bonus action, I can make the wisps invisible or visible again."+
			"\n" + toUni("Immaterial Step.") + " While wearing this kimono, other creatures’ spaces aren’t considered difficult terrain forme, and I can move through a hostile creature’s space regardless of its size. When I move into a creature’s space using this property, I take 1d4 force damage, which can’t be reduced or prevented in any way. I can’t willingly end my turn in another creature’s space."+
			"\n" + toUni("Minor Possession.") + " As a bonus action while wearing this kimono, I can expend 1 charge to speak its command word, instructing one of the blue wisps to possess a creature I can see within 30 feet of me. The creature must succeed on a DC 15 Charisma saving throw or the wisp enters the creature and can exert limited control over its body for 1 minute, disrupting its movements. For the duration, the creature’s speed is halved, and it has disadvantage on the first attack roll it makes on each of its turns. The creature can repeat the saving throw at the end of each of its turns, ending the effect on a success. This property has no effect on Constructs and Undead."+
			"\n" + toUni("Major Possession.") + " While wearing this kimono, I can use an action to force several of the blue wisps into a creature at the same time, expending 4 charges to cast the dominate person spell (save DC 15).",
		limfeaname : "Yukimono",
		usages : 6,
		recovery : "dawn",
		additional : "regains 1d4+2",
		action : [["bonus action", "Minor Possession"],["action", "Major Possession"]],
		spellFirstColTitle: "Ch",
		spellcastingBonus: [{
			name: "4 charges",
			spells: ["dominate person"],
			selection: ["dominate person"],
			fixedDC : 15,	
			firstCol: 4,
		}],	
	},
	"very rare" : {
		name : "Very Rare Yukimono",
		rarity : "very rare",
		description : "This kimono has 6 charges, represented by the same number of blue wisps floating around it, and regains 1d4 + 2 expended charges daily at dawn. As a bonus action, I can make the wisps invisible or visible again.",
		descriptionFull : 
			"This kimono has 6 charges, represented by the same number of blue wisps floating around it, and regains 1d4 + 2 expended charges daily at dawn. As a bonus action, I can make the wisps invisible or visible again."+
			"\n" + toUni("Immaterial Step.") + " While wearing this kimono, other creatures’ spaces aren’t considered difficult terrain forme, and I can move through a hostile creature’s space regardless of its size. When I move into a creature’s space using this property, I take 1d4 force damage, which can’t be reduced or prevented in any way. I can’t willingly end my turn in another creature’s space."+
			"\n" + toUni("Minor Possession.") + " As a bonus action while wearing this kimono, I can expend 1 charge to speak its command word, instructing one of the blue wisps to possess a creature I can see within 30 feet of me. The creature must succeed on a DC 16 Charisma saving throw or the wisp enters the creature and can exert limited control over its body for 1 minute, disrupting its movements. For the duration, the creature’s speed is halved, and it has disadvantage on the first attack roll it makes on each of its turns. The creature can repeat the saving throw at the end of each of its turns, ending the effect on a success. This property has no effect on Constructs and Undead."+
			"\n" + toUni("Major Possession.") + " While wearing this kimono, I can use an action to force several of the blue wisps into a creature at the same time, expending 4 charges to cast the dominate person spell (save DC 16).",
		limfeaname : "Yukimono",
		usages : 6,
		recovery : "dawn",
		additional : "regains 1d4+2",
		action : [["bonus action", "Minor Possession"],["action", "Major Possession"]],
		spellFirstColTitle: "Ch",
		spellcastingBonus: [{
			name: "4 charges",
			spells: ["dominate person"],
			selection: ["dominate person"],
			fixedDC : 15,	
			firstCol: 4,
		}],
		dmgres : ["Cold"],
	},
};


/*
 * Backgrounds
 */


BackgroundList["elementalist"] = {
	regExpSearch : /elementalist/i,
	name : "Elementalist",
	source : [["RGttYR", 209]],
	skills : ["Acrobatics", "Nature"],
	gold : 15,
	scorestxt: ["(Optional) +2 and +1 -or- +1 to each from Strength, Constitution, Wisdom"],
	languageProfs : ["Primordial (Optional)"],
	toolProfs : [["Choose one Artisan’s Tools"]],
	equipleft : [
		["Artisan's tools (same as above)", "", ""],
		["Backpack", 1, 5],
		["Traveller's Clothes,", 1, 4],
		["Healer’s Kit", 1, 3]
	],
	equipright : [""],
	feature : "Primordial Sense",
	trait : [
		"I am the life of the party! I love showing off my skills and power and do so at every opportunity to rapturous applause, of course.",
		"I push myself endlessly. A moment not spent training is a moment wasted, and I allow myself little time for relaxation or friendship.",
		"I have vivid dreams and occasionally perform elemental magic while asleep.",
		"I am fascinated by magic of all kinds. I often let my curiosity get the best of me and ask endless questions of magic users and beings.",
		"I wear my emotions on my sleeves. Whether I’m happy or sad, everyone will know about it.",
		"My body is a temple. I am extremely particular about what I eat and drink, and I have lengthy, intricate morning ablutions."
	],
	ideal : [
		["Perfection",
			"Perfection. I want to be the best version of me I can be. I will accept nothing less of myself and expect the same of others."
		],
		["Pacifism",
			"Pacifism. I always seek a nonviolent solution and only fight when I see no other choice."
		],
		["Community",
			"Community. I want to use my power to help others. I seek a meaningful role in the world where I can do my part."
		],
		["Teacher",
			"Teacher. The lessons I’ve learned have been painful — a long road of broken bones and bloodied fists. I want to share the wisdom I’ve gained with others so the struggle was not in vain."
		],
		["Student",
			"Student. There is so much to discover in the world; I will never stop exploring and growing."
		],
		["Aggression",
			"Aggression. I worked hard for the power I have damn right I want to use it. I throw myself into challenges and dangerous situations. If I think I can beat me, bring it on."
		],
	],
	bond : [
		"There is no law I won’t break to protect those I care about.",
		"Although I do care for others, my duty is to myself. I come first in my book.",
		"The teacher who taught me the secrets of element bending remains a trusted friend and confidant. I make great efforts to keep in touch; they are family to me.",
		"I stole a treatise on bending and studied in secret. Now the people I took it from are looking for me.",
		"I struggle to feel like I belong. I pursue power in the hope it will keep me useful to those around me.",
		"I once lost control of my power and grievously wounded an innocent. I am still searching for a way to make it up to them."
	],
	flaw : [
		"I push myself too hard. Sometimes I leave myselF weak and vulnerable in the pursuit of strength.",
		"I am not subtle. I am loud, flashy, and eager to fight.",
		"I am afraid of my own power. I second-guess myself and doubt my ability to wield it responsibly.",
		"Despite wielding elemental powers of earth, I don’t like sand. It’s coarse and rough and irritating, and it gets everywhere.",
		"I am noble to a fault, always play fair, and am seen as predictable and naive.",
		"I am forever changing my mind and struggle to focus on a single thing."
	],
	eval : function() {
		if (!IsNotImport) return;
		var featOptions = ['elemental fighting', 'elemental initiate'].filter(feat => CurrentFeats.known.indexOf(feat) === -1);
		if (!featOptions.length) {
			return;
		} else if (featOptions.length === 1) {
			var selectedFeat = featOptions[0];
		} else {
			var featNames = featOptions.map(feat => FeatsList[feat].name);
			var selectedFeat = featOptions[AskUserOptions("Elementalist bonus feat", "The Elementalist background offers a choice of a bonus feat.", featNames, 'radio', true, 'I can change what I select here by changing the feat selection in the corresponding section of the sheet.\nBe aware that if I change the selected feat and remove this background feature, the changed feat will not automatically be removed.', true)];
		}
		AddFeat(FeatsList[selectedFeat].name);
		SetFeatureChoice("background", "elementalist", false, selectedFeat);
	},
	removeeval : function() {
		var selectedFeat = GetFeatureChoice("background", "elementalist");
		if (selectedFeat) RemoveFeat(selectedFeat);
	}
};

BackgroundFeatureList["primordial sense"] = {  
	description : "I can use an action to attune to my environment and accurately predict what the weather will be at my location for the next 24 hours. After using this feature to predict the weather, I can perform a 10 minute ritual to influence it. If I do, there is a 50 percent chance the weather will change over the next 24 hours to match a condition I specify from among foggy, overcast, raining, snowing, sunny, or windy. My influence over the weather is limited: I  can’t conjure any weather effects that would cause harm to plants and animals, and if the source of the weather is anything other than natural (such as from a magically conjured storm), I cannot influence it. Once I perform this ritual, I can’t do so again until the next dawn.", 
	source : [["RGttYR", 209]],
};

BackgroundList["hanabi engineer"] = {
	regExpSearch: /^(?=.*hanabi)(?=.*engineer).*$/i,
	name : "Hanabi Engineer",
	source : [["RGttYR", 210]],
	skills : ["Investigation", "Sleight of Hand"],
	gold : 5,
	scorestxt: ["(Optional) +2 and +1 -or- +1 to each from Dexterity, Constitution, Intelligence"],
	languageProfs : ["Common sign language (Optional)"],
	toolProfs : [["Choose one Artisan’s Tools"]],
	equipleft : [
		["Artisan's tools (same as above)", "", ""],
		["Pouch", 2, 1],
		["Traveller's Clothes,", 1, 4],
		["Basic prosthesis with an integrated weapon of my choice", "", ""]
	],
	equipright : [""],
	feature : "Hanabi Apprentice",
	trait : [
		"Excessive verbosity is prized among my idiosyncrasies.",
		"I tend to get extremely excitable when discussing my passions.",
		"I love to blow stuff up.",
		"I am swiftly irritated by philistines who fail to appreciate my artistry.",
		"I articulate every word with wild gestures and movements.",
		"I sleep hanging upside down; the rush of blood to my head often sparks great ideas."
	],
	ideal : [
		["Ambition",
			"Ambition. I strive to be recognised as the best in the world at what I do."
		],
		["Altruism",
			"Altruism. I aim to make the world a better place using my gifts."
		],
		["Money",
			"Money. I intend to amass great wealth on the back of my talents."
		],
		["Teacher",
			"Teacher. I live to pass down knowledge, and I take great delight in teaching others all that I know."
		],
		["Progress",
			"Progress. I aspire to wake up every day a little better than I was the day before."
		],
		["Chore Aversion",
			"Chore Aversion. I am willing to work extremely hard to find a way to be lazy. If it takes a week to make a tool that handles a boring job that would have taken me 10 minutes, so be it."
		],
	],
	bond : [
		"I am deeply attached to my tools, giving them names and talking to them as I work.",
		"I count several famous inventors and merchants among my close friends.",
		"I blew up my first workshop at the age of nine and have gone through several more over the years. Numerous landlords have bounties on my head.",
		"I have dear friends who count on me for their prostheses and gear. I devote countless hours to caring for them at no charge.",
		"A rival engineer once stole an invention of mine and claimed credit. I will never forgive them and secretly seek revenge.",
		"I am under contract from a noble to produce an immensely complex and powerful item, reporting regular updates on its construction to them."
	],
	flaw : [
		"If anything I create is less than perfect, I throw it away in disgust.",
		"I often forget to charge for my work. The joy of creating is all I need.",
		"My eagerness to explosively solve my problems sometimes gets me into more trouble than it’s worth.",
		"I put my trust wholeheartedly in technology, dismissing any potential magical or social solution to a problem.",
		"I get anxious when plans go awry, making it a struggle to adapt on the go.",
		"I spend every penny I earn immediately; there always seems to be something new to buy."
	],
	eval : function() {
		if (!IsNotImport) return;
		var featOptions = ['prosthesis adept', 'prosthesis fighting'].filter(feat => CurrentFeats.known.indexOf(feat) === -1);
		if (!featOptions.length) {
			return;
		} else if (featOptions.length === 1) {
			var selectedFeat = featOptions[0];
		} else {
			var featNames = featOptions.map(feat => FeatsList[feat].name);
			var selectedFeat = featOptions[AskUserOptions("Hanabi Engineerbonus feat", "The Hanabi Engineer background offers a choice of a bonus feat.", featNames, 'radio', true, 'I can change what I select here by changing the feat selection in the corresponding section of the sheet.\nBe aware that if I change the selected feat and remove this background feature, the changed feat will not automatically be removed.', true)];
		}
		AddFeat(FeatsList[selectedFeat].name);
		SetFeatureChoice("background", "hanabi engineer", false, selectedFeat);
	},
	removeeval : function() {
		var selectedFeat = GetFeatureChoice("background", "hanabi engineer");
		if (selectedFeat) RemoveFeat(selectedFeat);
	}
};

BackgroundFeatureList["hanabi apprentice"] = {  
	description : "As an associate of the college of hanabi, I have access to a large network of tinkerers, merchants, and manufacturers. I know the right technical jargon to seamlessly integrate with other inventors, and I can count on the support of the college for information and lodgings in communities where it has a strong presence. Alumni of the college might be able to procure “top shelf” components and magic items unavailable to those outside the clique, or they may put me in touch with affluent merchants or tribes interested in purchasing my wares.", 
	source : [["RGttYR", 211]],
};

BackgroundList["kaiju tracker"] = {
	regExpSearch: /^(?=.*kaiju)(?=.*tracker).*$/i,
	name : "Kaiju Tracker",
	source : [["RGttYR", 212]],
	skills : ["Athletics", "Survival"],
	gold : 5,
	scorestxt: ["(Optional) +2 and +1 -or- +1 to each from Dexterity, Constitution, Wisdom"],
	languageProfs : ["Draconic, Giant, or Primordial (Optional)"],
	toolProfs : [["Herbalism Kit"]],
	equipleft : [
		["Herbalism Kit", 1, 3],
		["Backpack", 1, 5],
		["Traveller's Clothes,", 1, 4],
		["Hunting Trap", 1, 25],
		["A grappling hook prosthesis", "", ""],
		["50 feet of hempen rope", "", ""],
	],
	equipright : [""],
	feature : "Trail of Destruction",
	trait : [
		"I live for the thrill of danger! Certainty of death? Small chance of success? What are we waiting for?",
		"I have seen devastation and loss that would break most people. I have survived by closing my heart to it.",
		"I will never settle down. I need to always be on the road, and I’ll die on my feet.",
		"Every dawn, without fail, I take an hour to clean and sharpen my weapons.",
		"I love myths of heroes and villains. I constantly retell old folktales and draw parallels to real life.",
		"I try to conscript anyone I meet into joining me on foolhardy adventures."
	],
	ideal : [
		["Vengeance",
			"Vengeance. Once wronged, I never let go. I am seeking a way to exact vengeance on those who have done me harm."
		],
		["Travel",
			"Travel. I want to see everything and be the first to traverse every plane in existence."
		],
		["Harvester",
			"Harvester. I believe the secret to mythical elixirs and weapons lies in harvesting components from incredible creatures. I want to harvest the bodies of gods."
		],
		["Hasty",
			"Hasty. If something is worth doing, it’s worth doing now. I have no time for debate or consideration."
		],
		["Guardian",
			"Guardian. I struggle to connect with people, but I want to keep them safe, even if they never know who I am."
		],
		["Legend",
			"Legend. I want to be remembered and leave a legacy that bards will sing of for generations."
		],
	],
	bond : [
		"There are many monsters in this world. I will protect those who cannot protect themselves.",
		"A kaiju destroyed my home and people. It will die by my hand, or I will die trying.",
		"Those I travel with are closer than kin.",
		"I am enamoured with kaiju—their size, grace, and power. I wish only to observe and understand how such beings exist.",
		"My faith has been shaken upon seeing the devastation wrought by the evils in this world. I am struggling to overcome my doubt in the god I have long served.",
		"I make friends with animals quickly and loathe to harm beasts, even dangerous ones."
	],
	flaw : [
		"My obsession with killing monsters risks turning me into one.",
		"I judge myself harshly. A single failure is enough to send me spiralling into despair.",
		"My thrill seeking behaviour puts me and others at risk.",
		"My word is absolute; I struggle to entertain other perspectives or ideas.",
		"My love for treasure and gold often leads my morals astray.",
		"Only the mission’s success matters; the body count is irrelevant."
	],
	eval : function() { AddFeat("Kaiju Hunter"); },
	removeeval : function() { RemoveFeat("Kaiju Hunter"); }
};

BackgroundFeatureList["trail of destruction"] = {  
	description : "Nonmagical difficult terrain doesn’t impede my movement.", 
	source : [["RGttYR", 211]],
};

BackgroundList["raised by yokai"] = {
	regExpSearch: /^(?=.*raised)(?=.*yokai).*$/i,
	name : "Raised By Yokai",
	source : [["RGttYR", 213]],
	skills : ["Animal Handling", "Perception"],
	gold : 0,
	scorestxt: ["(Optional) +2 and +1 -or- +1 to each from Dexterity, Constitution, Wisdom"],
	languageProfs : ["Abyssal, Sylvan, or Infernal (Optional)"],
	toolProfs : [["Poisoner's kit"]],
	equipleft : [
		["Poisoner's kit", 1, 2],
		["Pouch", 2, 1],
		["Traveller's Clothes,", 1, 4],
		["Dagger", 1, 1],
		["Lamp,", 1, 1],
		["Vial of basic poison,", 1, ""],
		["Rare gem worth 10 gp", 1, ""],
	],
	equipright : [""],
	feature : "Natural Envoy",
	trait : [
		"I revere the natural world, finding tremendous delight in even the simplest aspects of nature.",
		"I care little for fancy foods or exuberance. I am baffled by the obsession with money shared by most humanoids.",
		"I prefer the company of animals and spirits. I find other people tiresome and dull.",
		"Having grown up surrounded by magic, I am extremely difficult to impress. Even the most dazzling displays of power from great wizards and sorcerers seem utterly mundane.",
		"Having been raised outside of typical societies, I am acutely aware of my unfamiliarity with most customs and go to tremendous lengths to avoid offending people.",
		"I become anxious and fidgety if I spend too long sitting or lying down, especially while indoors."
	],
	ideal : [
		["Family",
			"Family. I want to reconnect with my kin; I am searching for my people and discovering my history."
		],
		["Unity",
			"Unity. I have seen firsthand the patience and kindness of spirits. I wish to bring the material and spiritual realms closer together, creating a more harmonious world."
		],
		["Power",
			"Power. I grew up around powerful magic, and I’m looking for more."
		],
		["Independence",
			"Independence. I don’t care what anyone else thinks or does. I didn’t need them before, and I don’t need them now. I’m on my own incredible journey, and they’re lucky to have a cameo in it."
		],
		["Kindness",
			"Kindness. I survived due to the nurture and protection of gentle yokai. I wish to extend that same gift of kindness to others."
		],
		["Mischief",
			"Mischief. I’ve embraced my chaotic life, and I take great pleasure in spreading a little chaos wherever I go."
		],
	],
	bond : [
		"My familiar and I share a bond so deep that we can’t survive without each other.",
		"Unbeknownst to me, my direct kin are famous, wealthy, and looking for me.",
		"I trust the yokai who raised me more than any humanoid ally.",
		"The yokai who raised me departed this world when I came of age. Now I search for where they went.",
		"My true kin were killed by a mysterious organisation, leaving me an orphan. I’m hunting them down to inflict retribution.",
		"I have strange dreams of kin I’ve never known being snatched away. I love my yokai family, but I’m secretly beginning to wonder if I was stolen by them as a child."
	],
	flaw : [
		"The letter of the law means absolutely nothing to me; I am guided solely by my own moral compass.",
		"I hide my past, fearing I’ll never truly fit in with other people.",
		"I believe myself to be better than others; having been raised by yokai, I’ve witnessed magical feats that most could never dream of.",
		"I am very slow to trust humanoids and find it hard to take them at their word.",
		"I am extremely swift to anger when I believe someone has disrespected nature or the spirits that dwell therein.",
		"I put too much faith in my own abilities; I believe myself to be almost invincible."
	],
	eval : function() { AddFeat("Spirit Bonded"); },
	removeeval : function() { RemoveFeat("Spirit Bonded"); }
};

BackgroundFeatureList["natural envoy"] = {  
	description : "I grew up surrounded by yokai and understand their ways and quirks better than most. I have advantage on ability checks to peacefully interact with Beasts and Yokai.", 
	source : [["RGttYR", 213]],
};


/*
 * Feats
 */

FeatsList["boon of ashura"] = {
	name : "Boon of Ashura",
	source : [["RGttYR", 216]],
	descriptionFull : "I gain the following benefits. \n \u2022 Ability Score Increase. Increase my Strength or Constitution score by 1, to a maximum of 20. \n \u2022 I can take one additional reaction in a round, but I can only take one reaction on a turn. I can take an additional reaction in this way a number of times equal to my proficiency bonus, and I regain all expended uses when I finish a long rest.",
	description : "I gain an extra reaction a number of times equal to my prof bonus [+1 Strength or Constitution]",
	scorestxt : "+1 Strength or Constitution",
	limfeaname : "Boon of Ashura",
	usagescalc: "event.value = How('Proficiency Bonus');",
	recovery : "long rest",
};

FeatsList["boon of jorogumo"] = {
	name : "Boon of Jorogumo",
	source : [["RGttYR", 216]],
	descriptionFull : "I gain the following benefits. \n \u2022 I gain proficiency in my choice of either the Deception or Persuasion skills. \n \u2022 I can cast the disguise self spell a number of times equal to my proficiency bonus, and I regain all expended uses when I finish a long rest. \n \u2022 I have a climbing speed equal to my walking speed. In addition, I can move up, down, and across vertical surfaces and upside down along ceilings, while leaving my hands free. \n \u2022 I ignore difficult terrain caused by webbing.",
	description : "I gain prof in either deception/persuasion. I can cast disguise self. I gain climbing speed and ignore difficult terrain caused by webbing.",
	skillstxt : "Choose either Deception or Persuasion",
	limfeaname : "Boon of Jorogumo",
	usagescalc: "event.value = How('Proficiency Bonus');",
	recovery : "long rest",
};

FeatsList["boon of komainu"] = {
	name : "Boon of Komainu",
	source : [["RGttYR", 216]],
	descriptionFull : "I gain the following benefits. \n \u2022 As an action, I can ignite a glowing mane of radiant energy around my neck, which lasts until I dismiss it as a bonus action or I fall unconscious. While my mane is ignited, I shed dim light in a 10-foot radius, and a creature I am grappling takes 2d4 radiant damage at the start of its turn. \n \u2022 As a bonus action, I can harden my body to stone. Until the start of my next turn, gain a +2 bonus to AC while I am not wearing heavy armour, have advantage on Constitution saving throws, and have disadvantage on Dexterity saving throws. I can use this benefit a number of times equal to my proficiency bonus, and I regain all expended uses when I finish a long rest.",
	description : "Action to ignite mane, shed 10 ft rad dim light, 2d4 Radiant for grappled crea. Bonus action + 2 AC until start of next turn, Adv. CON save, DisAdv. Dex save.",
	limfeaname : "Boon of Komainu (+2 AC)",
	usagescalc: "event.value = How('Proficiency Bonus');",
	recovery : "long rest",
	action : [["action", "Boon of Komainu (Ignite)"],["bonus action", "Boon of Komainu (+2 AC)"]],
	toNotesPage: [{
	name : "Features",
	page3notes: true,
     	note : [
		"I gain the following benefits.",
		" \u2022 As an action, I can ignite a glowing mane of radiant energy around my neck, which lasts until I dismiss it as a bonus action or I fall unconscious. While my mane is ignited, I shed dim light in a 10-foot radius, and a creature I am grappling takes 2d4 radiant damage at the start of its turn.",
		" \u2022 As a bonus action, I can harden my body to stone. Until the start of my next turn, gain a +2 bonus to AC while I am not wearing heavy armour, have advantage on Constitution saving throws, and have disadvantage on Dexterity saving throws. I can use this benefit a number of times equal to my proficiency bonus, and I regain all expended uses when I finish a long rest.",
		],
	}],
};

FeatsList["boon of nue"] = {
	name : "Boon of Nue",
	source : [["RGttYR", 216]],
	descriptionFull : "I gain the following benefits. \n \u2022 At the start of my turn, I can roll a d6. If the result on the die is even, I gain a bonus to the next attack roll, ability check, or saving throw I make before the end of this turn equal to the result. If the result is odd, I take poison damage equal to the result, which can’t be reduced or prevented in any way. I can use this feature a number of times equal to my proficiency bonus, and I regain all expended uses when I finish a short or long rest. \n \u2022 As a bonus action, I can grant myself a flying speed equal to my walking speed until the end of my turn. I fall if I end my turn in the air with nothing holding me aloft. I can use this benefit a number of times equal to my proficiency bonus, and I regain all expended uses when I finish a short or long rest.",
	description : "Action to ignite mane, shed 10 ft rad dim light, 2d4 Radiant for grappled crea. Bonus action + 2 AC until start of next turn, Adv. CON save, DisAdv. Dex save.",
	extraLimitedFeatures : [{
		name: "Boon of Nue (d6)",
		usagescalc: "event.value = How('Proficiency Bonus');",
		recovery : "long rest",
	},{
		name: "Boon of Nue (Fly)",
		usagescalc: "event.value = How('Proficiency Bonus');",
		recovery : "long rest",
	}],
	action : ["bonus action", "Boon of Nue (Fly)"],
	toNotesPage: [{
	name : "Features",
	page3notes: true,
     	note : [
		"I gain the following benefits.",
		" \u2022 At the start of my turn, I can roll a d6. If the result on the die is even, I gain a bonus to the next attack roll, ability check, or saving throw I make before the end of this turn equal to the result. If the result is odd, I take poison damage equal to the result, which can’t be reduced or prevented in any way. I can use this feature a number of times equal to my proficiency bonus, and I regain all expended uses when I finish a short or long rest.",
		" \u2022 As a bonus action, I can grant myself a flying speed equal to my walking speed until the end of my turn. I fall if I end my turn in the air with nothing holding me aloft. I can use this benefit a number of times equal to my proficiency bonus, and I regain all expended uses when I finish a short or long rest.",
		],
	}],
};

FeatsList["boon of omukade"] = {
	name : "Boon of Omukade",
	source : [["RGttYR", 216]],
	descriptionFull : "I gain the following benefits. \n \u2022 Ability Score Increase. Increase my Constitution score by 1, to a maximum of 20. \n \u2022 Choose one damage type from among acid, cold, fire, lightning, poison, and thunder when I select this feat. I gain resistance to that damage type and, when I take damage of that type, I can use a reaction to become empowered. When I do, the first damage roll I make within the next minute deals an extra 1d8 damage of that type. This damage increases by 1d8 when I reach 5th level (2d8), 11th level (3d8), and 17th level (4d8). I can use this reaction a number of times equal to my proficiency bonus, and I regain all expended uses when I finish a long rest.",
	description : "I gain resistance to one of the following; acid, cold, fire, lightning, poison, and thunder, and when I take damage of that type I can use my reaction to become empower [+1 Constitution]",
	scorestxt : "+1 Constitution",
	limfeaname : "Boon of Omukade",
	usagescalc: "event.value = How('Proficiency Bonus');",
	recovery : "long rest",
	scores: [0, 0, 1, 0, 0, 0],
};

FeatsList["boon of wanyudo"] = {
	name : "Boon of Wanyudo",
	source : [["RGttYR", 217]],
	descriptionFull : "I gain the following benefits. \n \u2022 My speed increases by 10 feet. \n \u2022 When I am prone, standing up costs me only 5 feet of movement. \n \u2022 If I move at least 10 feet in a straight line towards a creature and are within reach of it, I can immediately use a bonus action to attempt a charging slam against that creature. Make a Strength (Athletics) check, contested by the target’s Strength (Athletics) or Dexterity (Acrobatics) check (target’s choice). Whoever loses the contest falls prone. I can use this benefit a number of times equal to my proficiency bonus, and I regain all expended uses when I finish a short or long rest.",
	description : "+10 Speed, standing from prone only costs 5 ft, if I move 10 ft straight, I can use a bonus action to do an Athletics vs Athletics/Acrobatics, loser falls prone",
	speed : { allModes : "+10" },
	limfeaname : "Boon of Wanyudo",
	usagescalc: "event.value = How('Proficiency Bonus');",
	recovery : "long rest",
};

FeatsList["cantrip combatant"] = {
	name : "Cantrip Combatant",
	source : [["RGttYR", 217]],
	prerequisite : "Class feature that gives me extra attack, ability to cast cantrip",
	descriptionFull : "I gain the following benefits.\n \u2022 Ability Score Increase. Increase one ability score of my choice by 1, to a maximum of 20.\n \u2022 When I use an action to cast a cantrip that requires me  to make an unarmed strike or melee attack with a weapon I am holding as part of casting the spell, I can make one weapon attack as a bonus action on that turn.",
	description : "When cast a cantrip that requires me to make a melee attack with a weapon, I can make a weapon attack as a bonus action [+1 to one ability score of my choice]",
	scorestxt : "+1 to one ability score of my choice",
};

FeatsList["combo striker"] = {
	name : "Combo Striker",
	source : [["RGttYR", 217]],
	descriptionFull : "I gain the following benefits.\n \u2022 Ability Score Increase. Increase one ability score of my choice by 1, to a maximum of 20. \n \u2022 I can collaborate in a combo attack, even if I have already collaborated in one since my last long rest. Once I use this benefit, I can’t use it again until I finish a long rest. \n \u2022 When I initiate a combo attack, one willing creature of my choice that I can see can collaborate in that combo without preventing them from collaborating in another combo attack before they finish a long rest. Once I use this benefit, I can't use it again until I finish a long rest.",
	description : "Once per long rest, I can collaborate in an extra combo attack. One willing creature can join combo attacks initiated by me without affecting their combo attack limit once per long rest [+1 to one ability score of my choice]",
	scorestxt : "+1 to one ability score of my choice",
};

FeatsList["dedicated combatant"] = {
	name : "Dedicated Combatant",
	source : [["RGttYR", 217]],
	descriptionFull : "My fervent commitment to combat training puts my advanced weapon mastery on par with the most dedicated of specialists. I can calculate my martial level using my full level in any class that is considered a half-martial, and half my levels in any class that is considered a non-martial.",
	description : "I can calculate my martial level using my full level in any class that is considered a half-martial, and half my levels in any class that is considered a non-martial.",
};

FeatsList["double throw"] = {
	name : "Double Throw",
	source : [["RGttYR", 217]],
	descriptionFull : "I gain the following benefits. \n \u2022 Ability Score Increase. Increase my Strength or Dexterity score by 1, to a maximum of 20. \n \u2022 Once on each of my turns when I make a ranged weapon attack using a weapon that has both the Light and Thrown properties, and I don’t have disadvantage on the attack roll, I can choose to throw two weapons with a single flick of the wrist. If I do, make a separate attack roll with disadvantage for each weapon. If I had advantage on the original attack, I don’t suffer disadvantage on the two attacks made using this feat. These attacks can be against different targets.",
	description : "Once per turn, when using weapon with light and thrown property, I can throw two weapons instead provided I do not have DisAdv. The two attacks are made at DisAdv unless I had Adv on the attack [+1 Strength or Dexterity]",
	scorestxt : "+1 Strength or Dexterity",
};

FeatsList["elemental fighting"] = {
	name : "Elemental Fighting",
	source : [["RGttYR", 217]],
	description : "When I make an unarmed strike, I can choose to deal dmg equal 1d8 + STR mod equal to damage type among acid, cold, fire, lightning, and thunder.",
	descriptionFull : "I have studied the meticulous movements and magical arts of element bending to the extent that I can channel crude but potent blasts of elemental energy through my body. When I select this feat, choose one damage type from among acid, cold, fire, lightning, and thunder. When I make an unarmed strike, I can choose for the strike to deal damage of that type equal to 1d8 + my Strength modifier, instead of the bludgeoning damage normal for an unarmed strike. Damage I deal in this way ignores resistance.",
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.baseWeaponName == "unarmed strike" && fields.Damage_Die == 1) {
						fields.Damage_Die = '1d8',
						fields.Description += (fields.Description ? '; ' : '') + 'Choose acid, cold, fire, lightning, or thunder damage';
			};
	}]},   
};

FeatsList["elemental initiate"] = {
	name : "Elemental Initiate",
	source : [["RGttYR", 218]],
	description : "I learn spells from the selected element, and can use a reaction to gain resistance to the associated damage type",
	descriptionFull : 
		"I have acquired a portion of a bender’s connection to an element. Choose one of the four elements from the bender’s Elemental Affinity feature: air, earth, fire, or water. I gain the following benefits:" +
		" \u2022 I learn one cantrip and one 1st-level spell from the chosen element’s spell list. I can cast the 1st-level spell without a spell slot, and I must finish a long rest before I can cast it in this way again. I can also cast the spell using any spell slots I have. My spellcasting ability for this feat’s spells is Intelligence, Wisdom, or Charisma (choose when I select this feat)." +
		" \u2022 When I take this feat, choose one damage type associated with the element I chose. When I take damage of that type, I can use a reaction to gain resistance to that damage type, including the triggering damage, until the start of my next turn." +
		"I can select this feat multiple times.",
	action : ["reaction", "Elemental Initiate"],
	choices : ["Air", "Earth", "Fire", "Water"],
	"air" : {
		spellcastingBonus : [{
			name : "Elemental Initiate (Air)",
			level : [0, 0],
			spells : ["concussion", "dash strike", "smokescreen", "soften descent"],
			firstCol : 'atwill'
		},{
			name : "Elemental Initiate (Air)",
			level : [1, 1],
			spells : ["color spray", "expeditious retreat", "feather fall", "fog cloud", "jump", "longstrider", "repulsing palm", "tasha's hideous laughter", "thunderwave", "unseen servant", "wind drake"],
			firstCol : 'oncelr'
		}],
	},
	"earth" : {
		spellcastingBonus : [{
			name : "Elemental Initiate (Earth)",
			level : [0, 0],
			spells : ["acid splash", "earthen fist", "reinforce", "resistance", "shillelagh"],
			firstCol : 'atwill'
		},{
			name : "Elemental Initiate (Earth)",
			level : [1, 1],
			spells : ["earthen uppercut", "entangle", "false life", "goodberry", "grease", "shield", "tenser's floating disk"],
			firstCol : 'oncelr'
		}],
	},	
	"fire" : {
		spellcastingBonus : [{
			name : "Elemental Initiate (Fire)",
			level : [0, 0],
			spells : ["dancing lights", "fire bolt", "incendiary strike", "light", "minor illusion", "shocking grasp", "spark"],
			firstCol : 'atwill'
		},{
			name : "Elemental Initiate (Fire)",
			level : [1, 1],
			spells : ["burning hands", "color spray", "faerie fire", "flash", "hellish rebuke", "heroism", "inner flame",  "silent image"],
			firstCol : 'oncelr'
		}],
	},
	"water" : {
		spellcastingBonus : [{
			name : "Elemental Initiate (Water)",
			level : [0, 0],
			spells : ["guidance", "pins & needles", "ray of frost", "spare the dying", "water whip"],
			firstCol : 'atwill'
		},{
			name : "Elemental Initiate (Water)",
			level : [1, 1],
			spells : ["charm person", "command", "create or destroy water", "detect poison and disease", "ice moon", "purify food & drink"],
			firstCol : 'oncelr'
		}],
	},		
};

FeatsList["extra attack tactician"] = {
	name : "Extra Attack Tactician",
	source : [["RGttYR", 218]],
	prerequisite : "Improved Extra Attack feature (optional class feature from RGttYR",
	descriptionFull : "I gain the following benefits.\n \u2022 Ability Score Increase. Increase my Strength or Dexterity score by 1, to a maximum of 20. \n \u2022 Choose one class from among barbarian, bender, fighter, monk, paladin, and ranger. I can use the 7th-level benefit of the Improved Extra Attack feature from that class a number of times equal to my proficiency bonus, regaining all expended uses when I finish a long rest. I can only benefit from one Improved Extra Attack feature per turn (choose when I make my first attack). \n \u2022 I can select this feat multiple times.",
	description : "From the chosen class, I can use the 7th level benefit of the Improved Extra Attack feature a number of times equal my prof bonus [+1 Strength or Dexterity]",
	scorestxt : "+1 Strength or Dexterity",
	choices: ["Barbarian", "Bender", "Fighter", "Monk", "Paladin", "Ranger"],
	"barbarian": {
		description: "I gain the 7th-level benefit of the Improved Extra Attack feature from the chosen class [+1 Strength]",
		toNotesPage: [{
			name : "Features",
			page3notes: true,
		     	note : [
				"The fury of my attacks can knock a foe to the ground. When I take the Attack action and make an attack roll against a creature with advantage, if both of the d20 rolls would hit the target, I can force the target to make a Strength saving throw (DC equals 8 + my proficiency bonus + my attacking ability modifier). On a failure, I can choose to knock the target prone or push it up to 5 feet away from me. Creatures more than one size larger than me automatically succeed on this saving throw. I can use this feature once per turn."
			],
		}],
	},
	"bender": {
		description: "I gain the 7th-level benefit of the Improved Extra Attack feature from the chosen class [+1 Strength]",
		toNotesPage: [{
			name : "Features",
			page3notes: true,
		     	note : [
				"My movements allow me to imbue magic in the elements I bend. When I take the Attack action, I can cast one cantrip in the bender spell list that I know in place of one of my attacks. This cantrip must have a casting time of one action, and it is cast at its lowest level. For example, if I am an 11th-level bender and use this feature to replace an attack with a casting of fire bolt, the cantrip deals 1d10 damage (instead of 3d10)."
			],
		}],
	},
	"fighter": {
		description: "I gain the 7th-level benefit of the Improved Extra Attack feature from the chosen class [+1 Strength]",
		toNotesPage: [{
			name : "Features",
			page3notes: true,
		     	note : [
				"I build momentum with each swing I take. When I take the Attack action and make an attack roll against a creature, I can give myself a +1 bonus to all subsequent attack rolls I make against that creature this turn, up to a maximum of +4."
			],
		}],
	},
	"monk": {
		description: "I gain the 7th-level benefit of the Improved Extra Attack feature from the chosen class [+1 Strength]",
		toNotesPage: [{
			name : "Features",
			page3notes: true,
		     	note : [
				"I learn to capture my enemy’s ki as I strike, transferring its life force to revitalise my own. At the end of my turn, I gain temporary hit points equal to thrice the number of weapon attacks I made that hit a non-Construct creature that turn.",
			],
		}],
	},
	"paladin": {
		description: "I gain the 7th-level benefit of the Improved Extra Attack feature from the chosen class [+1 Strength]",
		toNotesPage: [{
			name : "Features",
			page3notes: true,
		     	note : [
				"My zealous righteousness can inspire or demoralise others. When I take the Attack action and hit with two attacks, I can use a bonus action to utter a battlecry, targeting one enemy or ally within 30 feet of me. If the target is a foe that can see or hear me, it must succeed on a Wisdom saving throw (DC equals 8 + my proficiency bonus + my Charisma modifier) or be frightened of me until the end of my next turn. If the target is an ally, the frightened condition ends on it. I can use this feature once per turn.",
			],
		}],
	},
	"ranger": {
		description: "I gain the 7th-level benefit of the Improved Extra Attack feature from the chosen class [+1 Strength]",
		toNotesPage: [{
			name : "Features",
			page3notes: true,
		     	note : [
				"The skill and precision of my attacks create and expose weaknesses in my foe’s guard. When I take the Attack action and hit a creature with an attack roll, the next attack roll I make against the target before the end of my next turn is made with advantage. I can use this feature once per turn.",
			],
		}],
	},
};

FeatsList["fearsome flourisher"] = {
	name : "Fearsome Flourisher",
	source : [["RGttYR", 218]],
	descriptionFull : "I speed with nunchaku can strike fear into my foes: \n \u2022 When I take the Attack action and attack with a nunchaku, I can use a bonus action to make one additional nunchaku attack. This attack uses the same ability modifier as the primary attack and the weapon’s damage die for this attack is a d4. \n \u2022 When I take the Flourish special action with nunchaku, I can use a bonus action to make it especially intimidating towards one creature within my reach. If I don’t fail on my Dexterity check to flourish the weapon, my target must succeed on a Wisdom saving throw or become frightened of me until the start of my next turn. The DC for the saving throw equals 8 + my Dexterity modifier. If I am proficient in the Intimidation skill, I can add my proficiency bonus to the DC.",
	description : "When I take the Atk action with a Nunchaku, Bns extra atk, 1d4 dmg. When I take the Flourish special action with nunchaku, I can use a bonus action to frighten one creaturee within reach.",
	weaponOptions : [{
		regExpSearch : /^(?=.*nunchaku)(?=.*extra).*$/i,
		name : "Nunchaku Extra Attack",
		source : [["RGttYR", 218]],
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

FeatsList["focused discipline"] = {
	name : "Focused Discipline",
	source : [["RGttYR", 218]],
	descriptionFull : "My diligence and focused training has granted me the following benefits: \n \u2022 Choose one skill proficiency granted to me by my class. My proficiency bonus is doubled for ability checks made using that skill. \n \u2022 Choose one saving throw proficiency granted to me by my class. Whenever I make that saving throw, I can treat a d20 roll of 9 or lower as a 10. \n If I lose this feat because I do not meet its prerequisite, I gain the Multidisciplinary feat instead.",
	description : "I can double my prof on one skill granted to me by my class. I can choose one of the saving throw proficiencies granted to me by my class and treat all saves 9 or lower as 10. If I losse this feat due to multiclassing, I get the Multidisciplinary feat instead",
	toNotesPage: [{
	name : "Features",
	page3notes: true,
     	note : [
		"My diligence and focused training has granted me the following benefits:",
		" \u2022 Choose one skill proficiency granted to me by my class. My proficiency bonus is doubled for ability checks made using that skill.",
		" \u2022 Choose one saving throw proficiency granted to me by my class. Whenever I make that saving throw, I can treat a d20 roll of 9 or lower as a 10.",
		"If I lose this feat because I do not meet its prerequisite, I gain the Multidisciplinary feat instead.",
		],
	}],
	prerequisite : "4th level, not a multiclass character",
	prereqeval : function(v) { return v.characterLevel >= 4; },
};

FeatsList["kaiju hunter"] = {
	name : "Kaiju Hunter",
	source : [["RGttYR", 218]],
	description : "I am practised in the ways of fighting colossal creatures, granting me benefits.",
	descriptionFull : 
		"I am practised in the ways of fighting colossal creatures, granting me the following benefits:" +
		" \u2022 Mounting a creature costs me only 5 feet of movement, rather than half my speed." +
		" \u2022 I can brace myself by spending only 5 feet of movement, instead of half my speed." +
		" \u2022 I have advantage on ability checks to identify vulnerable areas." +
		" \u2022 I ignore the difficult terrain caused by moving on a creature more than two sizes larger than me." +
		" \u2022 Immediately after a creature I can see that is at least one size larger than me hits or misses me with a melee attack roll, I can use my reaction to make a weapon attack against that creature.",
	toNotesPage: [{
	name : "Features",
	page3notes: true,
     	note : [
		"I am practised in the ways of fighting colossal creatures, granting me the following benefits:",
		" \u2022 Mounting a creature costs me only 5 feet of movement, rather than half my speed.",
		" \u2022 I can brace* myself by spending only 5 feet of movement, instead of half my speed.",
		" \u2022 I have advantage on ability checks to identify vulnerable areas.",
		" \u2022 I ignore the difficult terrain caused by moving on a creature more than two sizes larger than me.",
		" \u2022 Immediately after a creature I can see that is at least one size larger than me hits or misses me with a melee attack roll, I can use my reaction to make a weapon attack against that creature.",
		],
	}],
};

FeatsList["kusarigama master"] = {
	name : "Kusarigama Master",
	source : [["RGttYR", 218]],
	descriptionFull : 
		"I have mastered the use of the kusarigama, learning additional techniques to trip and harass my foes. I add my  ability modifier to the damage roll made with a kusarigama’s counterweight. In addition, when I make this attack against a Medium or smaller target, I can choose to deal no damage. If I do, the target makes a Strength (Athletics) or Dexterity (Acrobatics) check (target’s choice), contested by my attack roll. If it fails the contest, choose one of the following effects:"+ 
		" \u2022 The target is disarmed of one object it is holding of my choice, which is pulled towards me and falls at my feet."+
		" \u2022 The target is knocked prone."+
		" \u2022 The target is pulled 5 feet towards me. If that leaves it within my reach, it is grappled by me. While a creature is grappled in this way, I can’t make attacks using the kusarigama’s counterweight.",
	description : "I can add my ability mod to dmg roll for kusarigama’s counterweight. In addition, if this attack is made against a crea Medium or smaller, I can forgo damage for a benefit.",
	weaponOptions : [{
		regExpSearch : /^(?=.*kusarigama)(?=.*counterweight).*$/i,
		name : "Kusarigama Counterweight",
		source : [["RGttYR", 76]],
		ability : 1,
		type : "kusarigama counterweight",
		damage : [1, 4, "bludgeoning"],
		range : "10 ft",
		description : "Reach 10 ft, While wielding a kusarigama with two hands",
		abilitytodamage : true,
		selectNow : true
	}],
	toNotesPage: [{
	name : "Features",
	page3notes: true,
     	note : [
		"I have mastered the use of the kusarigama, learning additional techniques to trip and harass my foes. I add my  ability modifier to the damage roll made with a kusarigama’s counterweight. In addition, when I make this attack against a Medium or smaller target, I can choose to deal no damage. If I do, the target makes a Strength (Athletics) or Dexterity (Acrobatics) check (target’s choice), contested by my attack roll. If it fails the contest, choose one of the following effects:",
		" \u2022 The target is disarmed of one object it is holding of my choice, which is pulled towards me and falls at my feet.",
		" \u2022 The target is knocked prone.",
		" \u2022 The target is pulled 5 feet towards me. If that leaves it within my reach, it is grappled by me. While a creature is grappled in this way, I can’t make attacks using the kusarigama’s counterweight.",
		],
	}],
	prerequisite : "Proficiency with kusarigama",
	prereqeval : function(v) {
		return v.martialWeaponsProf || (/kusarigama/i).test(v.otherWeaponsProf);
	},
};

FeatsList["magic of the blade"] = {
	name : "Magic of the Blade",
	source : [["RGttYR", 219]],
	descriptionFull : 
		"I have the power to synchronise magic and swordplay, granting me the following benefits:"+
		" \u2022 Ability Score Increase. Increase one ability score of my choice by 1, to a maximum of 20."+ 
		" \u2022 I learn two cantrips that require me to make an unarmed strike or melee attack with a weapon I am holding as part of casting the spell. My spellcasting ability for these spells is Intelligence, Wisdom, or Charisma (choose when I select this feat).",
	description : "I learn two cantrips that require me to make an unarmed strike or melee attack with a weapon I am holding as part of casting the spell. My spellcasting ability for these spells is Intelligence, Wisdom, or Charisma (choose when I select this feat) [+1 to one ability score of my choice]",
	scorestxt : "+1 to one ability score of my choice",
};

FeatsList["martial initiate"] = {
	name : "Martial Initiate",
	source : [["RGttYR", 219]],
	descriptionFull : 
		"I have the power to synchronise magic and swordplay, granting me the following benefits:"+
		" \u2022 Ability Score Increase. Increase one ability score of my choice by 1, to a maximum of 20."+ 
		" \u2022 I learn two tier 1 advanced techniques of my choice from any technique tree. I must meet the prerequisites for those techniques to learn them.",
	description : "I learn two tier 1 advanced techniques of my choice from any technique tree. I must meet the prerequisites for those techniques to learn them. [+1 to one ability score of my choice]",
	scorestxt : "+1 to one ability score of my choice",
	prerequisite : "4th level, not a multiclass character",
	prereqeval : function(v) { return v.characterLevel >= 4; },
};

FeatsList["multidisciplinary"] = {
	name : "Multidisciplinary",
	source : [["RGttYR", 219]],
	descriptionFull : 
		"I are adept at pulling from different disciplines to employ a variety of tactics both in battle and outside it. When I take this feat, and each time I gain my 1st level in a new class, choose one of the following benefits:"+
		" \u2022 I gain proficiency in one skill and one type of artisan’s tools of my choice."+
		" \u2022 Choose one saving throw proficiency that the class I have multiclassed into normally provides at 1st level. I become proficient in that saving throw.",
	description : "I gain proficiency in one skill and one artisian's tools. I also gain one saving throw proficiency from the class I multiclassed into",
	toNotesPage: [{
	name : "Features",
	page3notes: true,
     	note : [
		"I are adept at pulling from different disciplines to employ a variety of tactics both in battle and outside it. When I take this feat, and each time I gain my 1st level in a new class, choose one of the following benefits:",
		" \u2022 I gain proficiency in one skill and one type of artisan’s tools of my choice.",
		" \u2022 Choose one saving throw proficiency that the class I have multiclassed into normally provides at 1st level. I become proficient in that saving throw.",
		],
	}],
	skillstxt : "Proficiency with one skill",
	toolProfs : "One artisian's tools of my choice",
	prerequisite : "Are a multiclass character",
};

FeatsList["prosthesis adept"] = {
	name : "Prosthesis Adept",
	source : [["RGttYR", 219]],
	description : "I can tinker with my prosthesis, manipulating its function over the course of an hour, which can be done as part of a short or long rest. Doing so enhances it by adding one property",
	descriptionFull : 
		"I can tinker with my prosthesis, manipulating its function over the course of an hour, which can be done as part of a short or long rest. Doing so enhances it by adding one of the following properties:" +
		" \u2022 Blast (1d6 thunder, 20 ft.). The prosthesis gains the Piercing Shot Superior Strike." +
		" \u2022 Hookshot (30 ft.)" +
		" \u2022 Integrated (any)" +
		" \u2022 Launch (1d6*, 30 ft.). The prosthesis gains the Battery Strike Superior Strike." +
		" \u2022 Melee (1d8*, 5 ft.). The prosthesis gains the Reeling Blow Superior Strike." +
		" \u2022 Mobility (climb or swim, 30 ft.)." +
		"The modification lasts until I tinker with my prosthesis again.",
	toNotesPage: [{
	name : "Features",
	page3notes: true,
     	note : [
		"I can tinker with my prosthesis, manipulating its function over the course of an hour, which can be done as part of a short or long rest. Doing so enhances it by adding one of the following properties:",
		" \u2022 Blast (1d6 thunder, 20 ft.). The prosthesis gains the Piercing Shot Superior Strike.",
		" \u2022 Hookshot (30 ft.)",
		" \u2022 Integrated (any)",
		" \u2022 Launch (1d6*, 30 ft.). The prosthesis gains the Battery Strike Superior Strike.",
		" \u2022 Melee (1d8*, 5 ft.). The prosthesis gains the Reeling Blow Superior Strike.",
		" \u2022 Mobility (climb or swim, 30 ft.).",
		"The modification lasts until I tinker with my prosthesis again.",
		],
	}],
};

FeatsList["prosthesis fighting"] = {
	name : "Prosthesis Fighting",
	source : [["RGttYR", 220]],
	description : "The range of my attacks using prosthesis' blast or launch property increases by 10 ft. My melee reach increases by 5 ft. I deal one extra die of damage when hitting with my prosthesis' blast, launch, or melee property.",
	descriptionFull : 
		"I am a master of wielding prostheses in battle, granting me the following benefits:" +
		" \u2022 The range of attacks I make using a prosthesis’ Blast or Launch property increases by 10 feet." +
		" \u2022 The reach of any melee attacks I make using prostheses with the Melee property increases by 5 feet." +
		" \u2022 I deal one extra die of damage when I hit a target using a prosthesis’ Blast, Launch, or Melee property.",	
	toNotesPage: [{
	name : "Features",
	page3notes: true,
     	note : [
		"I am a master of wielding prostheses in battle, granting me the following benefits:",
		" \u2022 The range of attacks I make using a prosthesis’ Blast or Launch property increases by 10 feet.",
		" \u2022 The reach of any melee attacks I make using prostheses with the Melee property increases by 5 feet.",
		" \u2022 I deal one extra die of damage when I hit a target using a prosthesis’ Blast, Launch, or Melee property.",
		],
	}],
};

FeatsList["prosthesis master"] = {
	name : "Prosthesis Master",
	source : [["RGttYR", 220]],
	descriptionFull : 
		"I have practised extensively with magical prostheses, training my mind and body to wield their magic as naturally as I breathe. I gain the following benefits:"+
		" \u2022 I am considered proficient with any attacks made using a prosthesis."+ 
		" \u2022 I can attune to one magical prosthesis without counting against the number of magic items to which I can attune.",
	description : "I am proficient with attacks made using prosthesis. I can attune to one magical prosthesis without taking up an attunement slot.",
	prerequisite : "8th level",
	prereqeval : function(v) { return v.characterLevel >= 8; },
	weaponProf : [false, false, ["Prosthesis"]],
};

FeatsList["spirit bonded"] = {
	name : "Spirit Bonded",
	source : [["RGttYR", 220]],
	description : "I have formed a friendship with a spirit, who wishes to act as my familiar.",
	descriptionFull : 
		"I have formed a friendship with a spirit, who wishes to act as my familiar." +
		"\n I learn the find familiar spell and can cast it without components or a spell slot. When I cast it in this way, my familiar ignores the restriction that prevents it from attacking. After I cast the spell with this feat, I can’t do so again until I finish a long rest." +
		"\n When I select this feat, choose one of the following familiar forms: bancho-gama, betobeto-kun, ko-inari, kawawappa, or senryōka. I can summon my familiar in the chosen form or one of those listed in the spell’s description. When I summon my familiar in the chosen form, it gains temporary hit points equal to my level, and the 1st-level improvement on its Improvement Tree. When I reach 5th level, these temporary hit points are doubled, and I can also grant it one of the 3rd-level improvements on its Improvement Tree.",
	toNotesPage: [{
	name : "Features",
	page3notes: true,
     	note : [
		"I have formed a friendship with a spirit, who wishes to act as my familiar.",
		"I learn the find familiar spell and can cast it without components or a spell slot. When I cast it in this way, my familiar ignores the restriction that prevents it from attacking. After I cast the spell with this feat, I can’t do so again until I finish a long rest.",
		"When I select this feat, choose one of the following familiar forms: bancho-gama, betobeto-kun, ko-inari, kawawappa, or senryōka. I can summon my familiar in the chosen form or one of those listed in the spell’s description. When I summon my familiar in the chosen form, it gains temporary hit points equal to my level, and the 1st-level improvement on its Improvement Tree. When I reach 5th level, these temporary hit points are doubled, and I can also grant it one of the 3rd-level improvements on its Improvement Tree.",
		],
	}],
	spellcastingBonus: {
		name: "Once per dawn",
		spells: ["find familiar"],
		selection: ["find familiar"],
		firstCol: "oncelr",
	},
	spellChanges: {
		"find familiar": {
			components: "",
			compMaterial: "",
			allowUpCasting: false,
		description:
			"summon familiar, could be yokai or as normal",
		changes:
			"With the Spirit Bonded feat, I can cast Find Familiar without components or a spell slot.",
		},
	},
};

FeatsList["tengu training"] = {
	name : "Tengu Training",
	source : [["RGttYR", 220]],
	descriptionFull : 
		"The tutelage of a hanataka tengu, or countless hours of careful study of hanataka treatise on combat, has granted me the following benefits:"+
		" \u2022 Increase my Dexterity or Wisdom score by 1, to a maximum of 20."+ 
		" \u2022 I gain proficiency with one Finesse weapon of my choice."+
		" \u2022 As a reaction when a creature misses me with a melee attack while I am holding a Finesse weapon, I can make one weapon attack with that weapon against the creature. I can use this benefit a number of times equal to my proficiency bonus, and my regain all expended uses when I finish a long rest.",
	description : "I gain proficiency with one Finesse weapon of my choice. When holding a Finesse weapon and a creature misses me with a melee attack, I can make one weapon attack against the creature using my reaction. [+1 Dexterity or Wisdom]",
	weaponProf : [false, false, ["One Finesse weapon of my choice"]],
	scorestxt : "+1 Dexterity or Wisdom",
	action : ["reaction", ""],
	limfeaname : "Tengu Training (reaction)",
	usagescalc: "event.value = How('Proficiency Bonus');",
	recovery : "long rest",
};

FeatsList["tessen master"] = {
	name : "Tessen Master",
	source : [["RGttYR", 220]],
	descriptionFull : 
			"I have learned to manipulate the tessen in new ways, using its pointed spokes as weapons and tossing it at my foes from a distance. I gain the following benefits:"+
			" \u2022 Increase my Strength or Dexterity score by 1, to a maximum of 20."+
			" \u2022 For me, a tessen has the Adaptable (Piercing) and Thrown (range 20/60) properties."+
			" \u2022 While wielding a tessen, I gain a special reaction that I can take once during each round. This reaction can only be used to attempt to deflect a projectile with the tessen’s Special: Fan Shield property, and I can’t use it on the same turn that I take my normal reaction.",
	description : "Tessen gains the Adaptable (Piercing) and Thrown (range 20/60) properties. I gain a special reaction to deflect projectiles with the tessen’s Special: Fan Shield property. I can’t use it on the same turn that I take my normal reaction. [+1 Strength or Dexterity]",
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.baseWeaponName == "tessen") {
					fields.Proficiency = true;
					if (v.isMeleeWeapon) fields.Description += (fields.Description ? '; ' : '') + 'adaptable (pierc), thrown (range 20/60)';
				};
			},
			"For me, a tessen has the Adaptable (Piercing) and Thrown (range 20/60) properties."
		]
	},
	scorestxt : "+1 Strength or Dexterity",
	action : ["reaction", "Tessen Master (special reaction)"],
	toNotesPage: [{
	name : "Features",
	page3notes: true,
     	note : [
		"I have learned to manipulate the tessen in new ways, using its pointed spokes as weapons and tossing it at my foes from a distance. I gain the following benefits:",
		" \u2022 Increase my Strength or Dexterity score by 1, to a maximum of 20.",
		" \u2022 For me, a tessen has the Adaptable (Piercing) and Thrown (range 20/60) properties.",
		" \u2022 While wielding a tessen, I gain an extra reaction that I can take once during each round. This reaction can only be used to attempt to deflect a projectile with the tessen’s Special: Fan Shield property, and I can’t use it on the same turn that I take my normal reaction.",
		],
	}],
	prerequisite : "Proficiency with tessen",
	prereqeval : function(v) {
		return v.martialWeaponsProf || (/tessen/i).test(v.otherWeaponsProf);
	},
};

//Racial Feats

FeatsList["adaptive colouration"] = {
	name : "Adaptive Colouration",
	source : [["RGttYR", 221]],
	prerequisite : "Being a Tatsumi",
	prereqeval : function(v) { return CurrentRace.known.indexOf('tatsumi') !== -1; },
	descriptionFull : 
		"I am able to shift my colouration, a rare ability possessed by few of my kin, granting me the following benefits:"+
		" \u2022 I have advantage on Stealth checks made to avoid being seen."+
		" \u2022 Choose one colour from my Koi Dragon Colour trait when I select this feat. When I use my Slumbering Dragon or Heartening Breath trait, I can choose to empower ability checks, attack rolls, and saving throws associated with either my primary colouration or the one I chose with this feat.",
	description : "I have advantage on Stealth checks made to avoid being seen. When I use my Slumbering Dragon or Heartening Breath trait, I can choose to empower ability checks, attack rolls, and saving throws associated with either my primary colouration or the one I chose with this feat.",
};

FeatsList["draconic fury"] = {
	name : "Draconic Fury",
	source : [["RGttYR", 221]],
	prerequisite : "Being a Ryujin Tatsumi",
	prereqeval : function(v) { return CurrentRace.known.indexOf('ryujin tatsumi') !== -1; },
	descriptionFull : 
		"I have learned to channel my draconic energy into a damaging breath weapon, granting me the following benefits:"+
		" \u2022 Increase my Constitution score by 1, to a maximum of 20."+
		" \u2022 When I select this feat, choose one damage type from among acid, cold, fire, lightning, poison, and thunder. When I use my Heartening Breath trait, I can choose to expel a 30-foot cone of destructive energy instead. Each creature in the area must make a Dexterity saving throw (DC = 8 + my Constitution modifier + my proficiency bonus), taking 1d12 damage of the type I chose on a failed save, or half as much damage on a successful one. This damage increases by 1d12 when I reach 5th level (2d12), 11th level (3d12), and 17th level (4d12).",
	description : "I can turn Heartening Breath into a damaging breath weapon. [+1 Constitution]",
	scores: [0, 0, 1, 0, 0, 0],
	choices: ["Acid", "Cold", "Fire", "Lightning", "Poison", "Thunder"],
	"acid": {
		weaponOptions : [{
			regExpSearch : /^(?=.*heartening)(?=.*breath)(?=.*weapon).*$/i,
			name : "Heartening Breath Weapon",
			source : [["RGttYR", 221]],
			ability : 3,
			type : "Natural",
			damage : ["C", 12, "acid"],
			range : "30-ft cone",
			description : "Hits all in area; Dex save, success - half damage",
			abilitytodamage : false,
			dc : true,
			selectNow : true
		}],
	},
	"cold": {
		weaponOptions : [{
			regExpSearch : /^(?=.*heartening)(?=.*breath)(?=.*weapon).*$/i,
			name : "Heartening Breath Weapon",
			source : [["RGttYR", 221]],
			ability : 3,
			type : "Natural",
			damage : ["C", 12, "cold"],
			range : "30-ft cone",
			description : "Hits all in area; Dex save, success - half damage",
			abilitytodamage : false,
			dc : true,
			selectNow : true
		}],
	},
	"fire": {
		weaponOptions : [{
			regExpSearch : /^(?=.*heartening)(?=.*breath)(?=.*weapon).*$/i,
			name : "Heartening Breath Weapon",
			source : [["RGttYR", 221]],
			ability : 3,
			type : "Natural",
			damage : ["C", 12, "fire"],
			range : "30-ft cone",
			description : "Hits all in area; Dex save, success - half damage",
			abilitytodamage : false,
			dc : true,
			selectNow : true
		}],
	},
	"lightning": {
		weaponOptions : [{
			regExpSearch : /^(?=.*heartening)(?=.*breath)(?=.*weapon).*$/i,
			name : "Heartening Breath Weapon",
			source : [["RGttYR", 221]],
			ability : 3,
			type : "Natural",
			damage : ["C", 12, "lightning"],
			range : "30-ft cone",
			description : "Hits all in area; Dex save, success - half damage",
			abilitytodamage : false,
			dc : true,
			selectNow : true
		}],
	},
	"poison": {
		weaponOptions : [{
			regExpSearch : /^(?=.*heartening)(?=.*breath)(?=.*weapon).*$/i,
			name : "Heartening Breath Weapon",
			source : [["RGttYR", 221]],
			ability : 3,
			type : "Natural",
			damage : ["C", 12, "poison"],
			range : "30-ft cone",
			description : "Hits all in area; Dex save, success - half damage",
			abilitytodamage : false,
			dc : true,
			selectNow : true
		}],
	},
	"thunder": {
		weaponOptions : [{
			regExpSearch : /^(?=.*heartening)(?=.*breath)(?=.*weapon).*$/i,
			name : "Heartening Breath Weapon",
			source : [["RGttYR", 221]],
			ability : 3,
			type : "Natural",
			damage : ["C", 12, "thunder"],
			range : "30-ft cone",
			description : "Hits all in area; Dex save, success - half damage",
			abilitytodamage : false,
			dc : true,
			selectNow : true
		}],
	},
};

FeatsList["enkoh’s might"] = {
	name : "Enkoh’s Might",
	source : [["RGttYR", 221]],
	prerequisite : "Being a Hulking Enkoh",
	prereqeval : function(v) { return CurrentRace.known.indexOf('hulking enkoh') !== -1; },
	descriptionFull : 
		"I possess explosive strength, impressive even compared to my hulking kin, granting me the following benefits:"+
		" \u2022 My Strength score increases by 1, to a maximum of 20."+
		" \u2022 As a bonus action, I can attempt to shove a creature no more than one size larger than me within my reach. Make a Strength (Athletics) check, contested by the target’s Strength (Athletics) or Dexterity (Acrobatics) check (target’s choice). If I win the contest, I either knock the target prone or push it up to 15 feet away. I can use this feat a number of times equal to my proficiency bonus, and I regain all expended uses when I finish a long rest.",
	description : "As a bonus action, shove creature no more than one size larger than me within reach. My Str(Athletics) vs target's Str(Athletics)/Dex(Acro). If I win target is prone or pushed 15 ft. [+1 Strength]",
	scores: [1, 0, 0, 0, 0, 0],
	limfeaname : "Enkoh’s Might",
	usagescalc: "event.value = How('Proficiency Bonus');",
	recovery : "long rest",
	action : ["bonus action", ""],
	toNotesPage: [{
	name : "Features",
	page3notes: true,
     	note : [
		"I possess explosive strength, impressive even compared to my hulking kin, granting me the following benefits:",
		" \u2022 My Strength score increases by 1, to a maximum of 20.",
		" \u2022 As a bonus action, I can attempt to shove a creature no more than one size larger than me within my reach. Make a Strength (Athletics) check, contested by the target’s Strength (Athletics) or Dexterity (Acrobatics) check (target’s choice). If I win the contest, I either knock the target prone or push it up to 15 feet away. I can use this feat a number of times equal to my proficiency bonus, and I regain all expended uses when I finish a long rest.",
		],
	}],
};

FeatsList["gift of the lion turtle"] = {
	name : "Gift of the Lion Turtle",
	source : [["RGttYR", 221]],
	prerequisite : "Being a Ryokido",
	prereqeval : function(v) { return CurrentRace.known.indexOf('ryokido') !== -1; },
	descriptionFull : 
		"Some lion turtles, such as myself, are blessed with unusual command over their telepathic abilities. My mastery of this power grants me the following benefits:"+
		" \u2022 Increase one ability score of my choice by 1, to a maximum of 20."+
		" \u2022 I can cast the detect thoughts and suggestion spells without expending a spell slot. Once I cast detect thoughts or suggestion with this feat, I can’t cast that spell with it again until I finish a long rest. I can also cast either of those spells using any spell slots I have of the appropriate level. Intelligence, Wisdom, or Charisma is my spellcasting ability for these spells when I cast them with this feat (choose when I select this feat).",
	description : "[+1 to one ability score of my choice]",
	scorestxt : "+1 to one ability score of my choice",
	spellcastingBonus : [{
		name : "Gift of the Lion Turtle",
		spells : ["detect thoughts"],
		selection : ["detect thoughts"],
		firstCol : "oncelr"
	},{
		name : "Gift of the Lion Turtle",
		spells : ["suggestion"],
		selection : ["suggestion"],
		firstCol : "oncelr"
	}],
	toNotesPage: [{
	name : "Features",
	page3notes: true,
     	note : [
		"Some lion turtles, such as myself, are blessed with unusual command over their telepathic abilities. My mastery of this power grants me the following benefits:",
		" \u2022 Increase one ability score of my choice by 1, to a maximum of 20.",
		" \u2022 I can cast the detect thoughts and suggestion spells without expending a spell slot. Once I cast detect thoughts or suggestion with this feat, I can’t cast that spell with it again until I finish a long rest. I can also cast either of those spells using any spell slots I have of the appropriate level. Intelligence, Wisdom, or Charisma is my spellcasting ability for these spells when I cast them with this feat (choose when I select this feat).",
		],
	}],
};

FeatsList["hanamori physiology"] = {
	name : "Hanamori Physiology",
	source : [["RGttYR", 221]],
	prerequisite : "Being a Hanamori",
	prereqeval : function(v) { return CurrentRace.known.indexOf('hanamori') !== -1; },
	descriptionFull : 
		"My hyperactive hanamori physiology causes my body to adapt to changes in the environment instantly, granting me the following benefits:"+
		" \u2022 I have advantage on saving throws to avoid exhaustion brought about by the environment, such as extreme heat or cold."+
		" \u2022 When I take acid, cold, fire, lightning, or thunder damage, I can use my reaction to gain resistance to that damage type, including against the triggering damage, until the end of my next turn. I can use this benefit a number of times equal to my proficiency bonus, and I regain all expended uses when I finish a long rest.",
	description : "I have Adv on saves to avoid exhaustion due to environment. When I take acid, cold, fire, lightning, or thunder damage, I can use my reaction to gain resistance to that damage type, including against the triggering damage, until the end of my next turn.",
	limfeaname : "Hanamori Physiology",
	usagescalc: "event.value = How('Proficiency Bonus');",
	recovery : "long rest",
	action : ["reaction", ""],
	savetxt: "Adv. to avoid exhaustion due to environment",
	toNotesPage: [{
	name : "Features",
	page3notes: true,
     	note : [
		"My hyperactive hanamori physiology causes my body to adapt to changes in the environment instantly, granting me the following benefits:",
		" \u2022 I have advantage on saving throws to avoid exhaustion brought about by the environment, such as extreme heat or cold.",
		" \u2022 When I take acid, cold, fire, lightning, or thunder damage, I can use my reaction to gain resistance to that damage type, including against the triggering damage, until the end of my next turn. I can use this benefit a number of times equal to my proficiency bonus, and I regain all expended uses when I finish a long rest.",
		],
	}],
};

FeatsList["haniwa soulbinding"] = {
	name : "Haniwa Soulbinding",
	source : [["RGttYR", 222]],
	prerequisite : "Being a Haniwa",
	prereqeval : function(v) { return CurrentRace.known.indexOf('haniwa') !== -1; },
	descriptionFull : 
		"My innate creation magic is potent enough that I can pour more of my essence into my clay companion. When I create a companion, it can use one of the following stat blocks instead of one listed in the Clay Companion trait: black bear, giant goat, giant octopus, or warhorse."+
		" \u2022 Once I reach 5th level, I can create Clay Companions that use the dire wolf, giant spider, and giant toad stat blocks.",
	description : "When I create a companion, it can use one of the following stat blocks instead of one listed in the Clay Companion trait: black bear, giant goat, giant octopus, or warhorse. Once I reach 5th level, I can create Clay Companions that use the dire wolf, giant spider, and giant toad stat blocks.",
	toNotesPage: [{
	name : "Features",
	page3notes: true,
     	note : [
		"My innate creation magic is potent enough that I can pour more of my essence into my clay companion. When I create a companion, it can use one of the following stat blocks instead of one listed in the Clay Companion trait: black bear, giant goat, giant octopus, or warhorse."+
		" \u2022 Once I reach 5th level, I can create Clay Companions that use the dire wolf, giant spider, and giant toad stat blocks.",
		],
	}],
};

FeatsList["isetsu magic"] = {
	name : "Isetsu Magic",
	source : [["RGttYR", 222]],
	prerequisite : "Being an Isetsu",
	prereqeval : function(v) { return CurrentRace.known.indexOf('isetsu') !== -1; },
	descriptionFull :  
		"My connection with the ocean allows me to wield a measure of water magic, granting me the following benefits:"+
		" \u2022 Increase one ability score of my choice by 1, to a maximum of 20."+ 
		" \u2022 I learn the water whip cantrip."+ 
		" \u2022 I can cast the riptide and water breathing spells without expending a spell slot. Once I cast riptide or water breathing with this feat, I can’t cast that spell with it again until I finish a long rest. I can also cast either of those spells using any spell slots I have of the appropriate level."+ 
		" \u2022 Intelligence, Wisdom, or Charisma is my spellcasting ability for these spells when I cast them with this feat (choose when I select this feat).",
	description : "I learn the water whip cantrip. I can cast the riptide and water breathing spells once per long rest. [+1 to one ability score of my choice]",
	scorestxt : "+1 to one ability score of my choice",
	spellcastingBonus : [{
		name : "Isetsu Magic",
		spells : ["water whip"],
		selection : ["water whip"],
		firstCol : "atwill"
	},{
		name : "Isetsu Magic",
		spells : ["riptide"],
		selection : ["riptide"],
		firstCol : "oncelr"
	},{
		name : "Isetsu Magic",
		spells : ["water breathing"],
		selection : ["water breathing"],
		firstCol : "oncelr"
	}],
};

FeatsList["karasu trickery"] = {
	name : "Karasu Trickery",
	source : [["RGttYR", 222]],
	prerequisite : "Being a Karasu Tengu",
	prereqeval : function(v) { return CurrentRace.known.indexOf('karasu tengu') !== -1; },
	descriptionFull : 
		"I am a virtuoso of mischief and trickery even among karasu, granting me the following benefits:"+
		" \u2022 Increase my Charisma score by 1, to a maximum of 20."+
		" \u2022 Whenever myself and at least one other creature I can see make an ability check or saving throw at the same time, such as rolling for initiative, a contested check, or a saving throw against an area of effect, I can swap my result on the d20 for the other creature’s. I receive their result, and they receive mine. Once I use this benefit, I can’t do so again until I finish a short or long rest.",
	description : "Whenever myself and at least one other creature I can see make an ability check or saving throw at the same time, such as rolling for initiative, a contested check, or a saving throw against an area of effect, I can swap my result on the d20 for the other creature’s. I receive their result, and they receive mine. [+1 Charisma]",
	scores: [0, 0, 0, 0, 0, 1],
	limfeaname : "Karasu Trickery",
	usages: "1",
	recovery : "long rest",
	toNotesPage: [{
	name : "Features",
	page3notes: true,
     	note : [
		"I am a virtuoso of mischief and trickery even among karasu, granting me the following benefits:",
		" \u2022 Increase my Charisma score by 1, to a maximum of 20.",
		" \u2022 Whenever myself and at least one other creature I can see make an ability check or saving throw at the same time, such as rolling for initiative, a contested check, or a saving throw against an area of effect, I can swap my result on the d20 for the other creature’s. I receive their result, and they receive mine. Once I use this benefit, I can’t do so again until I finish a short or long rest.",
		],
	}],
};

FeatsList["kitsune’s blessing"] = {
	name : "Kitsune’s Blessing",
	source : [["RGttYR", 222]],
	prerequisite : "Being a Kitsune",
	prereqeval : function(v) { return CurrentRace.known.indexOf('kitsune') !== -1; },
	descriptionFull : 
		"I possess natural magic beyond that of a typical kitsune. I gain the following benefits:"+
		" \u2022 I can cast spells while transformed using my Shapeshifter trait without requiring material components, unless they have a gold cost."+
		" \u2022 While transformed using my Shapeshifter trait, I can use my fox’s bite to make unarmed strikes, using Strength or Dexterity for my attack and damage rolls. When I hit with it, the strike deals piercing damage equal to 1d6 + my Strength or Dexterity modifier (my choice)."+
		" \u2022 I gain the Multiattack action. While transformed using my Shapeshifter trait, I can use an action to make a number of unarmed strikes equal to half my proficiency bonus (rounded up)."+
		" \u2022 While transformed using my Shapeshifter trait, my AC equals 12 + my Dexterity modifier.",
	description : "I gain benefits whilst transformed using my Shapeshifter trait.",
	limfeaname : "Kitsune’s Blessing",
	usages: "1",
	recovery : "long rest",
	toNotesPage: [{
	name : "Features",
	page3notes: true,
     	note : [
		"I possess natural magic beyond that of a typical kitsune. I gain the following benefits:",
		" \u2022 I can cast spells while transformed using my Shapeshifter trait without requiring material components, unless they have a gold cost.",
		" \u2022 While transformed using my Shapeshifter trait, I can use my fox’s bite to make unarmed strikes, using Strength or Dexterity for my attack and damage rolls. When I hit with it, the strike deals piercing damage equal to 1d6 + my Strength or Dexterity modifier (my choice).",
		" \u2022 I gain the Multiattack action. While transformed using my Shapeshifter trait, I can use an action to make a number of unarmed strikes equal to half my proficiency bonus (rounded up).",
		" \u2022 While transformed using my Shapeshifter trait, my AC equals 12 + my Dexterity modifier.",
		],
	}],
};

FeatsList["oni regeneration"] = {
	name : "Oni Regeneration",
	source : [["RGttYR", 222]],
	prerequisite : "Being a Oniborne",
	prereqeval : function(v) { return CurrentRace.known.indexOf('oniborne') !== -1; },
	descriptionFull : 
		"The incredible fortitude and longevity of my ancestors flows through me, granting me the following benefits:"+
		" \u2022 Increase my Constitution score by 1, to a maximum of 20."+
		" \u2022 As a reaction when I take damage, I can spend a number of my Hit Dice up to my proficiency bonus to heal myself. Roll the dice, add my Constitution modifier, and regain a number of hit points equal to the total (minimum of 1). I can use this benefit a number of times equal to my proficiency bonus, and I regain all expended uses when I finish a long rest.",
	description : "As a reaction when I take damage, I can spend a number of my Hit Dice up to my proficiency bonus to heal myself. Roll the dice, add my Constitution modifier, and regain a number of hit points equal to the total (minimum of 1). [+1 Constitution]",
	scores: [0, 0, 1, 0, 0, 0],
	limfeaname : "Oni Regeneration",
	usagescalc: "event.value = How('Proficiency Bonus');",
	recovery : "long rest",
	action : ["reaction", ""],
	toNotesPage: [{
	name : "Features",
	page3notes: true,
     	note : [
		"The incredible fortitude and longevity of my ancestors flows through me, granting me the following benefits:",
		" \u2022 Increase my Constitution score by 1, to a maximum of 20.",
		" \u2022 As a reaction when I take damage, I can spend a number of my Hit Dice up to my proficiency bonus to heal myself. Roll the dice, add my Constitution modifier, and regain a number of hit points equal to the total (minimum of 1). I can use this benefit a number of times equal to my proficiency bonus, and I regain all expended uses when I finish a long rest.",
		],
	}],
};

FeatsList["seasonal determinism"] = {
	name : "Seasonal Determinism",
	source : [["RGttYR", 223]],
	prerequisite : "Being a Fuyoren",
	prereqeval : function(v) { return CurrentRace.known.indexOf('fuyoren') !== -1; },
	descriptionFull : 
		"I have learned to channel my draconic energy into a damaging breath weapon, granting me the following benefits:"+
		" \u2022 Increase my Constitution score by 1, to a maximum of 20."+
		" \u2022 When I select this feat, choose one damage type from among acid, cold, fire, lightning, poison, and thunder. When I use my Heartening Breath trait, I can choose to expel a 30-foot cone of destructive energy instead. Each creature in the area must make a Dexterity saving throw (DC = 8 + my Constitution modifier + my proficiency bonus), taking 1d12 damage of the type I chose on a failed save, or half as much damage on a successful one. This damage increases by 1d8 when I reach 5th level (2d12), 11th level (3d12), and 17th level (4d12).",
	description : "I gain a benefit depending on the season I'm born in",
	choices: ["Spring", "Summer", "Autumn", "Winter"],
	"spring": {
		name : "Seasonal Determinism (Spring)",
		description : "As a bonus action, I can cause the next attack roll made against me before the start of my next turn to have disadvantage. Spd +5ft [+1 Dexterity]",
		scores: [0, 1, 0, 0, 0, 0],
		speed : { allModes : "+5" },
		action : ["bonus action", ""],
	},
	"summer": {
		name : "Seasonal Determinism (Summer)",
		description : "As a bonus action, I can give myself Adv on the next attack roll or ability check I make before the start of my next turn.  [+1 Charisma]",
		scores: [0, 0, 0, 0, 0, 1],
		action : ["bonus action", ""],
		usagescalc: "event.value = How('Proficiency Bonus');",
		recovery : "long rest",
	},
	"autumn": {
		name : "Seasonal Determinism (Autumn)",
		description : "As a bonus action, I can Hide whilst in dim light or darkness. I gain darkvision 30ft or +30ft if I already have it. [+1 Wisdom]",
		scores: [0, 0, 0, 0, 1, 0],
		vision : [["Darkvision", "fixed 30"], ["Darkvision", "+30"]],	
		action : ["bonus action", "Hide"],
	},
	"winter": {
		name : "Seasonal Determinism (Winter)",
		description : "I gain an additional option for the Water Magic trait. [+1 Constitution]",
		scores: [0, 0, 1, 0, 0, 0],
		action : ["bonus action", ""],
		weaponOptions : [{
			regExpSearch : /^(?=.*water)(?=.*magic)(?=.*vial).*$/i,
			name : "Water Magic Vial",
			source : [["RGttYR", 223]],
			ability : 1,
			type : "Improvised Weapons",
			damage : ["C", 8, "cold"],
			range : "20 ft",
			description : "Shatters on hit, crea reduce 10ft spd until start of its next turn",
			abilitytodamage : true,
			selectNow : true
		}],
		toNotesPage: [{
		name : "Features",
		page3notes: true,
	     	note : [
			"My Constitution score increases by 1, to a maximum of 20. In addition, when I create a magical vial of water with my Water Magic trait, I can choose the following option as an effect:",
			" \u2022 The water freezes and crackles with evocation magic. When a creature holding the vial takes the Attack action, it can use one attack to hurl the vial towards a target within 20 feet of it. The creature makes a ranged attack against the target, treating the vial as an improvised weapon. On a hit, the vial shatters, and the target takes 1d8 cold damage. If the target is a creature, its speed is also reduced by 10 feet until the end of its next turn. The cruel evocation magic I imbue in the vial increases in potency as I level up. The cold damage dealt by the vial increases by 1d8 when I reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
			],
		}],
	},
};

FeatsList["shadowmage"] = {
	name : "Shadowmage",
	source : [["RGttYR", 223]],
	prerequisite : "Being a Hanataka Tengu",
	prereqeval : function(v) { return CurrentRace.known.indexOf('hanataka tengu') !== -1; },
	descriptionFull : 
		"The yokai magic that flows through my veins lets me draw on a wider pool of magic than is typical to most hanataka, granting me the following benefits:"+
		" \u2022 Increase my Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20."+
		" \u2022 I learn two cantrips of my choice from the druid or sorcerer spell list. I can cast these cantrips without any spell components while in dim light or darkness. My spellcasting ability for these spells is the ability score I increased with this feat.",
	description : "I learn two cantrips of my choice from the druid or sorcerer spell list. I can cast these cantrips without any spell components while in dim light or darkness. [+1 Intelligence, Wisdom, or Charisma]",
	scorestxt : "+1 Intelligence, Wisdom, or Charisma",
	choices : ["Druid", "Sorcerer"],
	"druid" : {
		description : "I learn two cantrips of my choice from the druid spell list. I can cast these cantrips without any spell components while in dim light or darkness. [+1 Intelligence, Wisdom, or Charisma]",
		spellcastingBonus : [{
			name : "Druid cantrip",
			'class' : 'druid',
			level : [0, 0],
			firstCol : "atwill",
			times : 2
		}],
	},
	"sorcerer" : {
		description : "I learn two cantrips of my choice from the sorcerer spell list. I can cast these cantrips without any spell components while in dim light or darkness. [+1 Intelligence, Wisdom, or Charisma]",
		spellcastingBonus : [{
			name : "Sorcerer cantrip",
			'class' : 'sorcerer',
			level : [0, 0],
			firstCol : "atwill",
			times : 2
		}],
	},
};

FeatsList["springtail agility"] = {
	name : "Springtail Agility",
	source : [["RGttYR", 222]],
	prerequisite : "Being a Springtail Enkoh",
	prereqeval : function(v) { return CurrentRace.known.indexOf('springtail enkoh') !== -1; },
	descriptionFull : 
		"I am uncommonly agile and dexterous, even relative to my springtail kin, granting me the following benefits:"+
		" \u2022 Increase my Dexterity score by 1, to a maximum of 20."+
		" \u2022 As a bonus action, I can leap a number of feet equal to five times my proficiency bonus. This leap doesn’t cost me any movement but my speed must be greater than 0 feet, and it does not provoke opportunity attacks. I can use this benefit a number of times equal to my proficiency bonus, and I regain all expended uses when I finish a long rest.",
	description : "As a bonus action, I can leap a number of feet equal to five times my proficiency bonus. This leap doesn’t cost me any movement but my speed must be greater than 0 feet, and it does not provoke opportunity attacks. [+1 Dexterity]",
	scores: [0, 1, 0, 0, 0, 0],
	limfeaname : "Springtail Agility",
	usagescalc: "event.value = How('Proficiency Bonus');",
	recovery : "long rest",
	action : ["bonus action", ""],
	toNotesPage: [{
	name : "Features",
	page3notes: true,
     	note : [
		"I am uncommonly agile and dexterous, even relative to my springtail kin, granting me the following benefits:",
		" \u2022 Increase my Dexterity score by 1, to a maximum of 20.",
		" \u2022 As a bonus action, I can leap a number of feet equal to five times my proficiency bonus. This leap doesn’t cost me any movement but my speed must be greater than 0 feet, and it does not provoke opportunity attacks. I can use this benefit a number of times equal to my proficiency bonus, and I regain all expended uses when I finish a long rest.",
		],
	}],
}; 

