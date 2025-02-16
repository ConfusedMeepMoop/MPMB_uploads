if (sheetVersion < 13001012) {
  throw "This script was made for a newer version of the sheet (v13.1.14). Please use the latest version and try again.\nYou can get the latest version at www.flapkan.com.";
}
var iFileName = "Obojima Tales from the Tall Grass.js";
RequiredSheetVersion("13.1.12");

SourceList["OTftTG"] = {
   name: "Obojima Tales from the Tall Grass",
   abbreviation: "OTftTG",
   abbreviationSpellsheet : "O",
   group: "Third Party",
   date: "2024-12-31",
};


/*
 * Races
 */

// Dara
RaceList["blue dara"] = { 
	regExpSearch: /^(?=.*blue)(?=.*dara).*$/i,
	name: "Blue Dara",
	sortname: "Dara, Blue",
	plural: "Blue Dara",
	size : 3,
	speed: {walk: {spd: 30, enc: 20}},	
	languageProfs: ["Common", 1],
	scorestxt : "+2 & +1 to any ability score of my choice",
	age: " takes a month to be a fully functioning member of society and live about 100 years",
	skillstxt : "I gain proficiency in three skills of my choice.",
	features : {
		"create talisman" : {
			name : "Create Talisman",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			action : [["action", ""]]
		},
		"knowledge talisman" : {
			name : "Knowledge Talisman",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			action : [["action", ""]]
		},
		"sacred revelation" : {
			name : "Sacred Revelation",
			minlevel : 1,
			action : [["action", ""]]
		},
		"impart knowledge" : {
			name : "Impart Knowledge",
			minlevel : 10,
			action : [["action", ""]]
		}
	},
	trait : "Blue Dara"+
		"\n \u2022 Create Talisman. As an action, I can create a magical paper talisman, which can bestow unique abilities to any creature in possession of it. When I do so, choose one of the following forms for the talisman:"+
		"\n     \u2022 Sun Talisman. A creature in possession of this talisman can use its bonus action to activate the talisman, granting it the benefit of the Disengage or Dash action (its choice)."+
		"\n     \u2022 Earth Talisman. When a creature in possession of this talisman is reduced to 0 hit points but not killed outright, the talisman activates, causing the creature to drop to 1 hit point instead."+
		"\n     \u2022 Moon Talisman. This paper talisman can be placed on any weapon as an action. The next time this weapon successfully hits a target, the talisman activates, dealing extra radiant damage equal to my level."+
		"\n The talisman lasts for 1 hour or until it is activated. Once I use this trait, I can’t do so again until I finish a long rest."+
		"\n \u2022 Knowledge Talisman. As an action, I can create a knowledge talisman. When a creature in possession of this talisman makes an ability check, it can activate the talisman, rolling a d6 and adding the number rolled to the check; the creature can roll the die before or after making the ability check. The talisman lasts for 1 hour or until it is activated. Once I use this trait, I can’t do so again until I finish a long rest."+
		"\n \u2022 Sacred Revelation. I possess an innate gift allowing me to perceive and absorb information from the peculiar glyphs strewn across the island. These glyphs take the form of intricate symbols resembling thumbprints and hold the potential to convey anything from simple messages, to complex skills to me. As an action I can touch and absorb any information stored inside one of these glyphs."+
		"\n \u2022 Impart Knowledge. When I reach 10th level, I gain the ability to impart messages through dara glyphs. As an action I can press my hand against any surface and create a thumbprint shaped glyph unique to me. When creating this glyph I recite a message, which is stored inside the magical symbol. The glyph can only be seen by other dara and can be absorbed by using the Sacred Revelation ability.",
	toNotesPage: [{
		name : "Blue Dara",
		source : [["OTftTG", 127]],
		note: desc([
			"\u2022 Create Talisman. As an action, I can create a magical paper talisman, which can bestow unique abilities to any creature in possession of it. When I do so, choose one of the following forms for the talisman:",
			"    \u2022 Sun Talisman. A creature in possession of this talisman can use its bonus action to activate the talisman, granting it the benefit of the Disengage or Dash action (its choice).",
			"    \u2022 Earth Talisman. When a creature in possession of this talisman is reduced to 0 hit points but not killed outright, the talisman activates, causing the creature to drop to 1 hit point instead.",
			"    \u2022 Moon Talisman. This paper talisman can be placed on any weapon as an action. The next time this weapon successfully hits a target, the talisman activates, dealing extra radiant damage equal to my level.",
			"The talisman lasts for 1 hour or until it is activated. Once I use this trait, I can’t do so again until I finish a long rest.",
			"\u2022 Knowledge Talisman. As an action, I can create a knowledge talisman. When a creature in possession of this talisman makes an ability check, it can activate the talisman, rolling a d6 and adding the number rolled to the check; the creature can roll the die before or after making the ability check. The talisman lasts for 1 hour or until it is activated. Once I use this trait, I can’t do so again until I finish a long rest.",
			"\u2022 Sacred Revelation. I possess an innate gift allowing me to perceive and absorb information from the peculiar glyphs strewn across the island. These glyphs take the form of intricate symbols resembling thumbprints and hold the potential to convey anything from simple messages, to complex skills to me. As an action I can touch and absorb any information stored inside one of these glyphs.",
			"\u2022 Impart Knowledge. When I reach 10th level, I gain the ability to impart messages through dara glyphs. As an action I can press my hand against any surface and create a thumbprint shaped glyph unique to me. When creating this glyph I recite a message, which is stored inside the magical symbol. The glyph can only be seen by other dara and can be absorbed by using the Sacred Revelation ability.",
		])
	}],
};

RaceList["red dara"] = { 
	regExpSearch: /^(?=.*red)(?=.*dara).*$/i,
	name: "Red Dara",
	sortname: "Dara, Red",
	plural: "Red Dara",
	size : 4,
	speed: {walk: {spd: 25, enc: 15}},	
	languageProfs: ["Common", 1],
	scorestxt : "+2 & +1 to any ability score of my choice",
	age: " takes a month to be a fully functioning member of society and live about 100 years",
	skillstxt : "I gain proficiency in three skills of my choice.",
	features : {
		"create talisman" : {
			name : "Create Talisman",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			action : [["action", ""]]
		},
		"knowledge talisman" : {
			name : "Knowledge Talisman",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			action : [["action", ""]]
		},
		"sacred revelation" : {
			name : "Sacred Revelation",
			minlevel : 1,
			action : [["action", ""]]
		},
		"might knowledge" : {
			name : "Might Knowledge",
			minlevel : 1,
			action : [["action", ""]]
		}
	},
	trait : "Red Dara"+
		"\n \u2022 Create Talisman. As an action, I can create a magical paper talisman, which can bestow unique abilities to any creature in possession of it. When I do so, choose one of the following forms for the talisman:"+
		"\n     \u2022 Sun Talisman. A creature in possession of this talisman can use its bonus action to activate the talisman, granting it the benefit of the Disengage or Dash action (its choice)."+
		"\n     \u2022 Earth Talisman. When a creature in possession of this talisman is reduced to 0 hit points but not killed outright, the talisman activates, causing the creature to drop to 1 hit point instead."+
		"\n     \u2022 Moon Talisman. This paper talisman can be placed on any weapon as an action. The next time this weapon successfully hits a target, the talisman activates, dealing extra radiant damage equal to my level."+
		"\n The talisman lasts for 1 hour or until it is activated. Once I use this trait, I can’t do so again until I finish a long rest."+
		"\n \u2022 Might Talisman. As an action, I can create a might talisman. When a creature in possession of this talisman makes a saving throw, it can activate the talisman, rolling a d6 and adding the number rolled to the save; the creature can roll the die before or after making the saving throw. The talisman lasts for 1 hour or until it is activated. Once I use this trait, I can’t do so again until you finish a long rest."+
		"\n \u2022 Sacred Revelation. I possess an innate gift allowing me to perceive and absorb information from the peculiar glyphs strewn across the island. These glyphs take the form of intricate symbols resembling thumbprints and hold the potential to convey anything from simple messages, to complex skills to me. As an action I can touch and absorb any information stored inside one of these glyphs."+
		"\n \u2022 Impart Knowledge. When I reach 10th level, I gain the ability to impart messages through dara glyphs. As an action I can press my hand against any surface and create a thumbprint shaped glyph unique to me. When creating this glyph I recite a message, which is stored inside the magical symbol. The glyph can only be seen by other dara and can be absorbed by using the Sacred Revelation ability.",
	toNotesPage: [{
		name : "Red Dara",
		source : [["OTftTG", 127]],
		note: desc([
			"\u2022 Create Talisman. As an action, I can create a magical paper talisman, which can bestow unique abilities to any creature in possession of it. When I do so, choose one of the following forms for the talisman:",
			"    \u2022 Sun Talisman. A creature in possession of this talisman can use its bonus action to activate the talisman, granting it the benefit of the Disengage or Dash action (its choice).",
			"    \u2022 Earth Talisman. When a creature in possession of this talisman is reduced to 0 hit points but not killed outright, the talisman activates, causing the creature to drop to 1 hit point instead.",
			"    \u2022 Moon Talisman. This paper talisman can be placed on any weapon as an action. The next time this weapon successfully hits a target, the talisman activates, dealing extra radiant damage equal to my level.",
			"The talisman lasts for 1 hour or until it is activated. Once I use this trait, I can’t do so again until I finish a long rest.",
			"\u2022 Might Talisman. As an action, I can create a might talisman. When a creature in possession of this talisman makes a saving throw, it can activate the talisman, rolling a d6 and adding the number rolled to the save; the creature can roll the die before or after making the saving throw. The talisman lasts for 1 hour or until it is activated. Once I use this trait, I can’t do so again until you finish a long rest.",
			"\u2022 Sacred Revelation. I possess an innate gift allowing me to perceive and absorb information from the peculiar glyphs strewn across the island. These glyphs take the form of intricate symbols resembling thumbprints and hold the potential to convey anything from simple messages, to complex skills to me. As an action I can touch and absorb any information stored inside one of these glyphs.",
			"\u2022 Impart Knowledge. When I reach 10th level, I gain the ability to impart messages through dara glyphs. As an action I can press my hand against any surface and create a thumbprint shaped glyph unique to me. When creating this glyph I recite a message, which is stored inside the magical symbol. The glyph can only be seen by other dara and can be absorbed by using the Sacred Revelation ability.",
		])
	}],
};

// Elf
RaceList["courage oaka elf"] = { 
	regExpSearch: /^(?=.*courage)(?=.*oaka)(?=.*elf).*$/i,
	name: "Courage Oaka Elf",
	sortname: "Elf, Courage Oaka",
	plural: "Courage Oaka Elves",
	size : 3,
	speed: {walk: {spd: 30, enc: 20}},	
	vision : [["Darkvision", 60]],
	languageProfs: ["Common"],
	scorestxt : "+2 & +1 to any ability score of my choice",
	age: " reach adulthood in their late teens and live less than a century.",
	features : {
		"ethereal sight" : {
			name : "Ethereal Sight",
			minlevel : 1,
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
			action : [["action", ""]]
		},
		"courage oaka1" : {
			name : "Resistance",
			minlevel : 1,
			spellcastingAbility: 6,
			spellcastingBonus: [{
				name: "Courage Oaka",
				spells: ["resistance"],
				selection: ["resistance"],
				times: 1,
			}],
			calcChanges : {
				spellAdd : [
					function (spellKey, spellObj, spName, isDuplicate) {
						if (spName === "courage oaka elf" && !isDuplicate) {
							spellObj.components = "V,S";
						}
					}
				]
			}
		},
		"courage oaka3" : {
			name : "Heroism",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingAbility: 6,
			spellcastingBonus: [{
				name: "Courage Oaka",
				spells: ["heroism"],
				selection: ["heroism"],
				times: 1,
				firstCol: "oncelr",
			}],
		},
	},
	trait : "Courage Oaka Elf"+
		"\n \u2022 Ethereal Sight. My ocular prowess doesn’t stop at darkvision. Additionally, I can use an action to shift my sight into the ethereal, allowing me to see creatures on the Spirit Realm, which appear as glowing outlines of themselves. This effect lasts for 1 hour. I can use this trait a number of times equal to my proficiency bonus, and I regain all expended uses of it when I finish a long rest."+
		"\n \u2022 Courage. I know the Resistance cantrip and can cast it without requiring material components. When I reach 3rd level, I can cast Heroism as a 2nd-level spell once with this trait, and I regain the ability to do so when I finish a long rest. Charisma is my spellcasting ability for these spells.",
};
	
RaceList["fury oaka elf"] = { 
	regExpSearch: /^(?=.*fury)(?=.*oaka)(?=.*elf).*$/i,
	name: "Fury Oaka Elf",
	sortname: "Elf, Fury Oaka",
	plural: "Fury Oaka Elves",
	size : 3,
	speed: {walk: {spd: 30, enc: 20}},	
	vision : [["Darkvision", 60]],
	languageProfs: ["Common"],
	scorestxt : "+2 & +1 to any ability score of my choice",
	age: " reach adulthood in their late teens and live less than a century.",
	features : {
		"ethereal sight" : {
			name : "Ethereal Sight",
			minlevel : 1,
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
			action : [["action", ""]]
		},
		"fury oaka1" : {
			name : "Sacred Flame",
			minlevel : 1,
			spellcastingAbility: 6,
			spellcastingBonus: [{
				name: "Fury Oaka",
				spells: ["sacred flame"],
				selection: ["sacred flame"],
				times: 1,
			}],
		},
		"fury oaka3" : {
			name : "Shatter",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingAbility: 6,
			spellcastingBonus: [{
				name: "Fury Oaka",
				spells: ["shatter"],
				selection: ["shatter"],
				times: 1,
				firstCol: "oncelr",
			}],
			calcChanges : {
				spellAdd : [
					function (spellKey, spellObj, spName, isDuplicate) {
						if (spName === "fury oaka elf" && !isDuplicate) {
							spellObj.components = "V,S";
						}
					}
				]
			}
		},
	},
	trait : "Fury Oaka Elf"+
		"\n \u2022 Ethereal Sight. My ocular prowess doesn’t stop at darkvision. Additionally, I can use an action to shift my sight into the ethereal, allowing me to see creatures on the Spirit Realm, which appear as glowing outlines of themselves. This effect lasts for 1 hour. I can use this trait a number of times equal to my proficiency bonus, and I regain all expended uses of it when I finish a long rest."+
		"\n \u2022 Fury. I know the Sacred Flame cantrip. When I reach 3rd level, I can cast Shatter once with this trait, requiring no material components, and I regain the ability to do so when I finish a long rest. Charisma is my spellcasting ability for these spells.",
};

RaceList["harmony oaka elf"] = { 
	regExpSearch: /^(?=.*harmony)(?=.*oaka)(?=.*elf).*$/i,
	name: "Harmony Oaka Elf",
	sortname: "Elf, Harmony Oaka",
	plural: "Harmony Oaka Elves",
	size : 3,
	speed: {walk: {spd: 30, enc: 20}},	
	vision : [["Darkvision", 60]],
	languageProfs: ["Common"],
	scorestxt : "+2 & +1 to any ability score of my choice",
	age: " reach adulthood in their late teens and live less than a century.",
	features : {
		"ethereal sight" : {
			name : "Ethereal Sight",
			minlevel : 1,
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
			action : [["action", ""]]
		},
		"harmony oaka1" : {
			name : "Guidance",
			minlevel : 1,
			spellcastingAbility: 6,
			spellcastingBonus: [{
				name: "Harmony Oaka",
				spells: ["guidance"],
				selection: ["guidance"],
				times: 1,
			}],
		},
		"harmony oaka3" : {
			name : "Calm Emotions",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingAbility: 6,
			spellcastingBonus: [{
				name: "Harmony Oaka",
				spells: ["calm emotions"],
				selection: ["calm emotions"],
				times: 1,
				firstCol: "oncelr",
			}],
		},
	},
	trait : "Harmony Oaka Elf"+
		"\n \u2022 Ethereal Sight. My ocular prowess doesn’t stop at darkvision. Additionally, I can use an action to shift my sight into the ethereal, allowing me to see creatures on the Spirit Realm, which appear as glowing outlines of themselves. This effect lasts for 1 hour. I can use this trait a number of times equal to my proficiency bonus, and I regain all expended uses of it when I finish a long rest."+
		"\n \u2022 Harmony. I know the Guidance cantrip. When I reach 3rd level, I can cast Calm Emotions once with this trait, and I regain the ability to do so when I finish a long rest. Charisma is my spellcasting ability for these spells.",
};

RaceList["nature oaka elf"] = { 
	regExpSearch: /^(?=.*nature)(?=.*oaka)(?=.*elf).*$/i,
	name: "Nature Oaka Elf",
	sortname: "Elf, Nature Oaka",
	plural: "Nature Oaka Elves",
	size : 3,
	speed: {walk: {spd: 30, enc: 20}},	
	vision : [["Darkvision", 60]],
	languageProfs: ["Common"],
	scorestxt : "+2 & +1 to any ability score of my choice",
	age: " reach adulthood in their late teens and live less than a century.",
	features : {
		"ethereal sight" : {
			name : "Ethereal Sight",
			minlevel : 1,
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
			action : [["action", ""]]
		},
		"nature oaka1" : {
			name : "Dancing Lights",
			minlevel : 1,
			spellcastingAbility: 6,
			spellcastingBonus: [{
				name: "Nature Oaka",
				spells: ["dancing lights"],
				selection: ["dancing lights"],
				times: 1,
			}],
			calcChanges : {
				spellAdd : [
					function (spellKey, spellObj, spName, isDuplicate) {
						if (spName === "nature oaka elf" && !isDuplicate) {
							spellObj.components = "V,S";
						}
					}
				]
			}
		},
		"nature oaka3" : {
			name : "Animal Messenger",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingAbility: 6,
			spellcastingBonus: [{
				name: "Nature Oaka",
				spells: ["animal messenger"],
				selection: ["animal messenger"],
				times: 1,
				firstCol: "oncelr",
			}],
			calcChanges : {
				spellAdd : [
					function (spellKey, spellObj, spName, isDuplicate) {
						if (spName === "nature oaka elf" && !isDuplicate) {
							spellObj.components = "V,S";
						}
					}
				]
			}
		},
	},
	trait : "Nature Oaka Elf"+
		"\n \u2022 Ethereal Sight. My ocular prowess doesn’t stop at darkvision. Additionally, I can use an action to shift my sight into the ethereal, allowing me to see creatures on the Spirit Realm, which appear as glowing outlines of themselves. This effect lasts for 1 hour. I can use this trait a number of times equal to my proficiency bonus, and I regain all expended uses of it when I finish a long rest."+
		"\n \u2022 Nature. I know the Dancing Lights* cantrip and can cast it without requiring material components. When I reach 3rd level, I can cast Animal Messenger once with this trait, requiring no material components, and I regain the ability to do so when I finish a long rest. Charisma is my spellcasting ability for these spells.",
};

RaceList["purity oaka elf"] = { 
	regExpSearch: /^(?=.*purity)(?=.*oaka)(?=.*elf).*$/i,
	name: "Purity Oaka Elf",
	sortname: "Elf, Purity Oaka",
	plural: "Purity Oaka Elves",
	size : 3,
	speed: {walk: {spd: 30, enc: 20}},	
	vision : [["Darkvision", 60]],
	languageProfs: ["Common"],
	scorestxt : "+2 & +1 to any ability score of my choice",
	age: " reach adulthood in their late teens and live less than a century.",
	features : {
		"ethereal sight" : {
			name : "Ethereal Sight",
			minlevel : 1,
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
			action : [["action", ""]]
		},
		"purity oaka1" : {
			name : "Spare the Dying",
			minlevel : 1,
			spellcastingAbility: 6,
			spellcastingBonus: [{
				name: "Purity Oaka",
				spells: ["spare the dying"],
				selection: ["spare the dying"],
				times: 1,
			}],
		},
		"purity oaka3" : {
			name : "Lesser Restoration",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingAbility: 6,
			spellcastingBonus: [{
				name: "Purity Oaka",
				spells: ["lesser restoration"],
				selection: ["lesser restoration"],
				times: 1,
				firstCol: "oncelr",
			}],
		},
	},
	trait : "Purity Oaka Elf"+
		"\n \u2022 Ethereal Sight. My ocular prowess doesn’t stop at darkvision. Additionally, I can use an action to shift my sight into the ethereal, allowing me to see creatures on the Spirit Realm, which appear as glowing outlines of themselves. This effect lasts for 1 hour. I can use this trait a number of times equal to my proficiency bonus, and I regain all expended uses of it when I finish a long rest."+
		"\n \u2022 Purity. I know the Spare the Dying cantrip. When I reach 3rd level, I can cast Lesser Restoration once with this trait, and I regain the ability to do so when I finish a long rest. Charisma is my spellcasting ability for these spells.",
};

RaceList["selflessness oaka elf"] = { 
	regExpSearch: /^(?=.*selflessness)(?=.*oaka)(?=.*elf).*$/i,
	name: "Selflessness Oaka Elf",
	sortname: "Elf, Selflessness Oaka",
	plural: "Selflessness Oaka Elves",
	size : 3,
	speed: {walk: {spd: 30, enc: 20}},	
	vision : [["Darkvision", 60]],
	languageProfs: ["Common"],
	scorestxt : "+2 & +1 to any ability score of my choice",
	age: " reach adulthood in their late teens and live less than a century.",
	features : {
		"ethereal sight" : {
			name : "Ethereal Sight",
			minlevel : 1,
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
			action : [["action", ""]]
		},
		"selflessness oaka1" : {
			name : "Resilient Friendship",
			minlevel : 1,
			spellcastingAbility: 6,
			spellcastingBonus: [{
				name: "Selflessness Oaka",
				spells: ["resilient friendship"],
				selection: ["resilient friendship"],
				times: 1,
			}],
		},
		"selflessness oaka3" : {
			name : "Gift",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingAbility: 6,
			spellcastingBonus: [{
				name: "Selflessness Oaka",
				spells: ["gift"],
				selection: ["gift"],
				times: 1,
				firstCol: "oncelr",
			}],
		},
	},
	trait : "Selflessness Oaka Elf"+
		"\n \u2022 Ethereal Sight. My ocular prowess doesn’t stop at darkvision. Additionally, I can use an action to shift my sight into the ethereal, allowing me to see creatures on the Spirit Realm, which appear as glowing outlines of themselves. This effect lasts for 1 hour. I can use this trait a number of times equal to my proficiency bonus, and I regain all expended uses of it when I finish a long rest."+
		"\n \u2022 Selflessness. I know the Resilient Friendship cantrip. When I reach 3rd level, I can cast Gift once with this trait, and I regain the ability to do so when I finish a long rest. Charisma is my spellcasting ability for these spells.",
};

// Nakudama
RaceList["nakudama"] = { 
	regExpSearch: /^(?=.*nakudama).*$/i,
	name: "Nakudama",
	sortname: "Nakudama",
	plural: "Nakudama",
	size : 4,
	speed: {
		walk: { spd: 25, enc: 15},
		swim : { spd : 30, enc : 20 }
	},	
	vision : [["Darkvision", 60]],
	languageProfs: ["Common", "Naku Naku"],
	scorestxt : "+2 & +1 to any ability score of my choice",
	age: " reach adulthood by the age of 10 and live an average of 45 years.",
	features : {
		"grasping tongue" : {
			name : "Grasping Tongue",
			minlevel : 1,
			action : [["bonus action", ""]]
		},
		"latching tongue" : {
			name : "Latching Tongue",
			minlevel : 1,
			action : [["bonus action", ""]]
		},
	},
	trait : "Nakudama"+
		"\n \u2022 Amphibious: I can breathe air and water"+
		"\n \u2022 Standing Leap. My long jump is up to 20 feet and my high jump is up to 15 feet, with or without a running start."+
		"\n \u2022 Grasping Tongue. As a bonus action, I can lash out my tongue at an object I can see within 15 feet of me that weighs no more than 5 pounds and pull it to me, catching it in my open hand or allowing it to fall at my feet. If the object is being worn or carried by a creature, the creature must succeed on a contested Strength check or have the object pulled away from it."+
		"\n \u2022 Latching Tongue. As a bonus action, I can extend my tongue to latch onto a surface or creature that is at least one size larger than me, pulling myself toward it. The target must be no more than 15 feet away from me.",
};


/*
 * Subclasses
 */

// Barbarian Subclasses
AddSubClass("barbarian", "path of the belly brewer", {
	regExpSearch : /^(?=.*belly)(?=.*brewer)(?=.*path).*$/i,
	subname : "Path of the Belly Brewer",
	source : [["OTftTG", 132]],
	features : {
		"subclassfeature3.1" : {
			name : "Belly Concoction",
			source : [["OTftTG", 132]],
			minlevel : 3,
			description : desc([ 
				"When I rage, choose combat, utility, or whimsy. I gain the effects of the chosen belly concoction, as detailed below. I can change my belly concoction each time I rage.",
				"   \u2022 COMBAT. I can use my reaction when I am hit by a ranged attack, deflecting it with my belly. When I do so, the damage I take from the attack is reduced by 1d12 + my Constitution modifier + my barbarian level.",
				"Additionally, immediately before I make a melee weapon attack on my turn, I can use my bonus action to stretch my arms, increasing my reach by 5 feet for the rest of the turn. The first time I hit while your my are stretched in this way, the attack deals an extra 1d6 damage of the weapon’s type.",
				"   \u2022 UTILITY. As a bonus action, I can consume any object I can fit in my mouth. When I do so, I can expend one of my Hit Dice as part of this bonus action to heal myself. Roll the die, add my Constitution modifier, and regain a number of hit points equal to the total (minimum of 1). Swallowing an object in this way destroys it, provided the object isn’t magical. I can use this feature a number of times equal to my proficiency bonus, and I regain all expended uses when I finish a long rest.",
				"   \u2022 WHIMSY. While in this state, I gain one of the following effects at the start of each of my turns:",
				"      ◊ I teleport to an unoccupied space within 10 feet of me that I can see.",
				"      ◊ I take 1d4 necrotic damage; the next ability check I make before the end of my turn gains a bonus equal to the number rolled.",
				"      ◊ I can immediately take the Help action as a bonus action.",
				"Additionally, I gain a random visual effect that accompanies the other whimsical features."
			]),	
		},
		"subclassfeature3.2" : {
			name : "Side Effects",
			source : [["OTftTG", 133]],
			minlevel : 3,
			description : desc([ 
				"I learn the Prestidigitation and Thaumaturgy cantrips."
			]),
			spellcastingBonus: [{
				name: "Path of the Belly Brewer",
				spells: ["prestidigitation"],
				selection: ["prestidigitation"],
				times: 1,
			},{
				name: "Path of the Belly Brewer",
				spells: ["thaumaturgy"],
				selection: ["thaumaturgy"],
				times: 1,
			}],	
		},
		"subclassfeature6" : {
			name : "Quick Brew",
			source : [["OTftTG", 133]],
			minlevel : 6,
			description : desc([ 
				"Beginning at 6th level, I’ve learned how to better control the effects my belly concoction produces. Choose a common potion that I would normally consume. I can activate the effects of the chosen potion as a bonus action. Once I activate it, I can’t do so again until I finish a long rest. If the potion’s effects require a saving throw, the DC equals 8 + my proficiency bonus + my Constitution modifier.",
				"Each time I gain a level in this class, I can swap my chosen potion with a different one."
			]),
			usages : 1,
			recovery: "long rest",	
			action : [["bonus action", ""]]			
		},
		"subclassfeature10" : {
			name : "Lingering Effects",
			source : [["OTftTG", 133]],
			minlevel : 10,
			description : desc([ 
				"When I finish a long rest, choose one of the following conditions: blinded, charmed, exhaustion, frightened, paralyzed, petrified, poisoned, prone, restrained, or stunned. I have advantage on saving throws against that condition until I choose a different one with this feature."
			]),	
		},	
		"subclassfeature14" : {
			name : "Lingering Effects",
			source : [["OTftTG", 133]],
			minlevel : 14,
			description : desc([ 
				"Starting at 14th level, I learn an additional common potion as well as an uncommon potion, using my Quick Brew feature. Each time I gain a level in this class, I can swap one of my chosen potions with a different one."
			]),	
		},	
	},
});

// Bard Subclasses
AddSubClass("bard", "college of masks", {
	regExpSearch : /^(?=.*college)(?=.*masks).*$/i,
	subname : "College of Masks",
	source : [["OTftTG", 133]],
	features : {
		"subclassfeature3.1" : {
			name : "Tools of Performance",
			source : [["OTftTG", 134]],
			minlevel : 3,
			description : desc([
				"I gain the ability to weave arcane boons into theater masks, which grant me abilities while I wear them. I craft two masks of my choice, which are detailed under the “Masks” section below. I am able to craft one additional mask of my choice when I reach 7th, 11th, and 15th level in this class. Each time I craft a new mask, I can also replace one mask I’ve already crafted with a different one.",
				"While wearing a mask I gain the abilities granted by it. I can don or swap masks as an action or bonus action. If an ability from a mask requires a saving throw, the DC is equal to my bard spell save DC.",
				]),
			toNotesPage: [{
				name : "Masks",
				source : [["OTftTG", 134]],
				note: desc([
					"\u2022 Fish. While wearing this mask I gain a swimming speed equal to my walking speed and the ability to breathe underwater. Additionally, I know the Water Bullet and Whelm Weapon spells.",
					"\u2022 Fox. While wearing this mask, I can move through a hostile creature’s space, regardless of its size, and another creature’s space isn’t difficult terrain for me. Additionally, my AC increases by 1 and when I make a Dexterity saving throw, I can use my reaction to gain advantage on the roll.",
					"\u2022 Old Man. While wearing this mask, I can cast Detect Magic and Identify at will, without expending a spell slot or material components.",
					"\u2022 Protagonist. When I roll initiative while wearing this mask, I gain temporary hit points equal to half my bard level (rounded up). As a bonus action, I can mark a creature as my antagonist for 1 minute. For the duration, I have advantage on ability checks involving my antagonist. Additionally, when I see my antagonist make an attack, I can use my reaction and expend a use of my Bardic Inspiration, rolling a Bardic Inspiration die to reduce the attack roll by the number rolled on the die.",
					"\u2022 Sea Urchin. While wearing this mask, I can use a bonus action and expend a use of my Bardic Inspiration, rolling a Bardic Inspiration die to heal myself for a number of hit points equal to the number rolled plus half my bard level (rounded up). Additionally, I can use an action to attempt to immobilize a creature I can see within 30 feet of me, injecting it with magical toxins. The target must succeed on a Constitution saving throw or become restrained for 1 minute. At the end of each of its turns, the target can repeat the saving throw, ending the effect on itself on a success. I can use this ability a number of times equal to my proficiency bonus, and I regain all expended uses of it when I finish a long rest.",
					"\u2022 Stone. While wearing this mask, I gain proficiency in the Athletics skill and all bludgeoning, piercing, and slashing damage I take from nonmagical attacks is reduced by 2. Additionally, I have advantage on ability checks and saving throws against being pushed, pulled, or knocked prone while wearing the mask.",
					"\u2022 Demon (7th Level Required). While wearing this mask I gain the abilities Arcane Memory and Demon Eye.",
					"   \u2022 Arcane Memory. While wearing this mask, I can use an action and expend a spell slot of 1st level or higher to magically learn whether a creature or object I specify has been within a 20-foot radius of my current location in the past 24 hours. If I expend a spell slot of 3rd level or higher, I get a brief vision of the creature or object while it was there, and I learn the exact time the creature or object was present.",
					"   \u2022 Demon Eye. As an action, I gain the ability to magically see through solid objects to a range of 15 feet. My vision penetrates most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.",
					"\u2022 Golem (7th Level Required). While wearing this mask, my weapon attacks deal an extra 1d8 damage on a hit. If I am Small, I don’t have disadvantage on my attack rolls with weapons as a result of the heavy property. In addition, my attacks and spells deal double damage to objects and structures.",
					"\u2022 Spirit (7th Level Required). While wearing this mask, I know the Speak with Dead spell. Additionally, I can expend a use of my Bardic Inspiration to temporarily move through the Spirit Realm. Whenever I would move, I instead step through the veil and into the Spirit Realm in the area where it overlaps with my current plane. I remain in the Spirit Realm until I stop moving or my turn ends. If I occupy the same spot as a solid object or creature when this happens, I am immediately shunted to the nearest unoccupied space that I can occupy and take 1d10 Force dmg. While on the Spirit Realm, I can only affect and be affected by other creatures on that plane. Creatures that aren’t in the Spirit Realm can’t perceive me and can’t interact with me, unless a special ability or magic has given them the ability to do so. I ignore all objects and effects that aren’t on the Spirit Realm, allowing me to move through objects I perceive on the plane I originated from. This effect lasts until the end of my turn.",
					"\u2022 Harpy (11th Level Required). While wearing this mask I have a flying speed of 30 feet and resistance to psychic damage."
				]),
			}],
			extraname : "Masks",
			extraTimes : levels.map(function (n) {
				return n < 3 ? 0 : n < 7 ? 2 : n < 11 ? 3 : n < 15 ? 4 : 5;
			}),
			extrachoices : ["Demon (7th Level Required)", "Harpy (11th Level Required)", "Fish", "Fox", "Golem (7th Level Required)", "Old Man", "Protagonist", "Sea Urchin", "Spirit (7th Level Required)", "Stone"],
			"demon (7th level required)" : {
				name : "Demon (7th Level Required)",
				description : desc([
					"While wearing this mask I gain the abilities Arcane Memory and Demon Eye.",
					"   \u2022 Arcane Memory. While wearing this mask, I can use an action and expend a spell slot of 1st level or higher to magically learn whether a creature or object I specify has been within a 20-foot radius of my current location in the past 24 hours. If I expend a spell slot of 3rd level or higher, I get a brief vision of the creature or object while it was there, and I learn the exact time the creature or object was present.",
					"   \u2022 Demon Eye. As an action, I gain the ability to magically see through solid objects to a range of 15 feet. My vision penetrates most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.",
				]),	
				prereqeval : function(v) { return classes.known.bard.level >= 7; }
			},
			"harpy (11th level required)" : {
				name : "Harpy (11th Level Required)",
				description : desc([
					"While wearing this mask I have a flying speed of 30 feet and resistance to psychic damage.",
				]),	
				dmgres : ["Psychic"],
				speed : {
					fly : { spd : 30, enc : 20 }
				},
				prereqeval : function(v) { return classes.known.bard.level >= 11; }
			},
			"fish" : {
				name : "Fish",
				description : desc(["While wearing this mask I gain a swimming speed equal to my walking speed and the ability to breathe underwater. Additionally, I know the Water Bullet and Whelm Weapon spells.",
				]),
				speed : {
					swim : { spd : "walk", enc : "walk" }
				},
				spellcastingBonus: [{
					name: "Fish Mask",
					spells: ["water bullet"],
					selection: ["water bullet"],
					times: 1,
				},{
					name: "Fish Mask",
					spells: ["whelm weapon"],
					selection: ["whelm weapon"],
					times: 1,
				}],				
			},
			"fox" : {
				name : "Fox",
				description : desc(["While wearing this mask, I can move through a hostile creature’s space, regardless of its size, and another creature’s space isn’t difficult terrain for me. Additionally, my AC increases by 1 and when I make a Dexterity saving throw, I can use my reaction to gain advantage on the roll.",
				]),
				extraAC : [{
					mod : 1,
					magic : true,
					text : "I gain a +1 bonus to AC while wearing this mask.",
				}],
				action : [["reaction", "Fox Mask (Adv on DEX save)"]],		
			},
			"golem (7th level required)" : {
				name : "Golem (7th Level Required)",
				description : desc(["While wearing this mask, my weapon attacks deal an extra 1d8 damage on a hit. If I am Small, I don’t have disadvantage on my attack rolls with weapons as a result of the heavy property. In addition, my attacks and spells deal double damage to objects and structures.",
				]),
				prereqeval : function(v) { return classes.known.bard.level >= 7; }
			},
			"old man" : {
				name : "Old Man",
				description : desc(["While wearing this mask, I can cast Detect Magic and Identify at will, without expending a spell slot or material components.",
				]),
				spellcastingBonus: [{
					name: "Old Man Mask",
					spells: ["detect magic", "identify"],
					selection: ["detect magic", "identify"],
					times: 2,
					firstCol: "atwill",
				}],
				calcChanges : {
					spellAdd : [
						function (spellKey, spellObj, spName, isDuplicate) {
							if (spName === "nature oaka elf" && !isDuplicate) {
								spellObj.components = "V,S";
							}
						}
					]
				}
			},
			"protagonist" : {
				name : "Protagonist",
				description : desc(["When I roll initiative while wearing this mask, I gain temporary hit points equal to half my bard level (rounded up). As a bonus action, I can mark a creature as my antagonist for 1 minute. For the duration, I have advantage on ability checks involving my antagonist. Additionally, when I see my antagonist make an attack, I can use my reaction and expend a use of my Bardic Inspiration, rolling a Bardic Inspiration die to reduce the attack roll by the number rolled on the die.",
				]),
				action : [["bonus action", "Protagonist Mask (mark Antagonist)"], ["reaction", "Protagonist Mask"]],		
			},	
			"sea urchin" : {
				name : "Sea Urchin",
				description : desc(["While wearing this mask, I can use a bonus action and expend a use of my Bardic Inspiration, rolling a Bardic Inspiration die to heal myself for a number of hit points equal to the number rolled plus half my bard level (rounded up). Additionally, I can use an action to attempt to immobilize a creature I can see within 30 feet of me, injecting it with magical toxins. The target must succeed on a Constitution saving throw or become restrained for 1 minute. At the end of each of its turns, the target can repeat the saving throw, ending the effect on itself on a success. I can use this ability a number of times equal to my proficiency bonus, and I regain all expended uses of it when I finish a long rest.",
				]),
				action : [["bonus action", "Sea Urchin Mask (heal)"], ["action", "Sea Urchin Mask (immonilize)"]],		
			},
			"spirit (7th level required)" : {
				name : "Spirit (7th Level Required)",
				description : desc([
					"While wearing this mask, I know the Speak with Dead spell. Additionally, I can expend a use of my Bardic Inspiration to temporarily move through the Spirit Realm. Whenever I would move, I instead step through the veil and into the Spirit Realm in the area where it overlaps with my current plane. I remain in the Spirit Realm until I stop moving or my turn ends. If I occupy the same spot as a solid object or creature when this happens, I am immediately shunted to the nearest unoccupied space that I can occupy and take 1d10 Force dmg. While on the Spirit Realm, I can only affect and be affected by other creatures on that plane. Creatures that aren’t in the Spirit Realm can’t perceive me and can’t interact with me, unless a special ability or magic has given them the ability to do so. I ignore all objects and effects that aren’t on the Spirit Realm, allowing me to move through objects I perceive on the plane I originated from. This effect lasts until the end of my turn.",
				]),	
				spellcastingBonus: [{
					name: "Spirit Mask",
					spells: ["speak with dead"],
					selection: ["speak with dead"],
					times: 1,
				}],
				prereqeval : function(v) { return classes.known.bard.level >= 7; }
			},	
			"stone" : {
				name : "Stone",
				description : desc(["While wearing this mask, I gain proficiency in the Athletics skill and all bludgeoning, piercing, and slashing damage I take from nonmagical attacks is reduced by 2. Additionally, I have advantage on ability checks and saving throws against being pushed, pulled, or knocked prone while wearing the mask.",
				]),
				skills : ["Athletics"],	
			},
		},	
		"subclassfeature3.2" : {
			name : "Copycat",
			source : [["OTftTG", 134]],
			minlevel : 3,
			description : desc([
				"Starting at 3rd level, I gain the ability to quickly shift my appearance to match that of a person. As an action, I can expend one use of Bardic Inspiration to cast the Alter Self spell, using the spell’s Change Appearance option to transform into another humanoid I have seen. When cast in this way, the spell has the following changes:",
				"   ◊ It doesn’t require my concentration, but I can still end the spell at any time (no action required).",
				"   ◊ I gain 5 temporary hit points, and the spell ends early if I lose all these hit points or die.",
				"   ◊ I gain new equipment that I would associate with the target and are aware of it possessing, such as its clothing, armor, weapons, and other small belongings. Any equipment gained in this way has no magical properties, even if the original object used by the target does.",
				"   ◊ Any equipment I was wearing or carrying merges into my new form and I can’t activate, use, wield, or otherwise benefit from any of it.",
			]),			
		},
		"subclassfeature6" : {
			name : "Many-Masked Performance",
			source : [["OTftTG", 134]],
			minlevel : 6,
			description : desc([ 
				"At 6th level, I gain the ability to enthrall an audience with a dramatic performance. Over the course of 1 minute, I can engage in a captivating performance and attempt to cause nearby creatures to become charmed, frightened, or fall unconscious (my choice). Choose a number of creatures up to my bard level within 60 feet of me that can hear me. When the performance ends, each target must succeed on a Wisdom saving throw against my spell save DC or be subjected to the chosen condition. Once I use this feature, I can’t use it again until I finish a long rest."
			]),
			usages : 1,
			recovery: "long rest",			
		},
		"subclassfeature14" : {
			name : "Gift of Theatre",
			source : [["OTftTG", 134]],
			minlevel : 14,
			description : desc([ 
				"At 14th level, I gain the ability to give one of my theater masks to an ally within 5 feet of me. As an action, I temporarily release the incantation that binds my theater mask to me, allowing one of my allies to use it. The mask can be used in this way for 1 minute and only one other creature can be designated to use it. Once I’ve given an ally a theater mask, I can’t do so again until I finish a short or long rest."
			]),	
			usages : 1,
			recovery: "short rest",	
			action : ["action", "Gift of Theatre"],			
		},
	},
});

// Druid Subclasses
AddSubClass("druid", "circle of petal", {
	regExpSearch : /^(?=.*druid)(?=.*petal).*$/i,
	subname : "Circle of the Petal",
	source : [["OTftTG", 136]],
	features : {
		"subclassfeature2" : {
			name : "Petal Dance",
			source : [["OTftTG", 136]],
			minlevel : 2,
			description : desc([
					"As a bonus action, I can expend a use of my Wild Shape to call on this power and conjure a resilient cloud of petals that functions as an extension of my own being. This cloud lasts for 1 hour. While enveloped by the cloud, my AC increases by 1 and I gain the following benefits:",
					" \u2022 As a bonus action, I can cause my petals to lunge toward a creature I can see within 30 feet of me, slashing at its body. Make a ranged spell attack against the target using my spell attack bonus. On a hit, the target takes 1d6 slashing damage. This damage increases by 1d6 when I reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
					" \u2022 Additionally, when I or a creature I can see within 10 feet of me takes damage, I can use my reaction to reduce that damage by an amount equal to my druid level + my Wisdom modifier. Once I’ve used my petal cloud in this way, the cloud dissipates.",
			]),
			action : ["bonus action", ""],
			weaponOptions: [{
				name: "Petal Dance",
				source: [["OTftTG", 136]],
				regExpSearch : /^(?=.*petal)(?=.*dance).*$/i,
  				type : "AlwaysProf",
 				ability : 5,
  				damage : ["C", 6, "slashing"],
  				range : "30 ft",
  				description : "Ranged spell attack when Petal Dance is active",
				isAlwaysProf: true,
				selectNow: true,
			}],
		},	
		"subclassfeature6" : {
			name : "Petal Beast Mimicry",
			source : [["OTftTG", 136]],
			minlevel : 6,
			description : desc([ 
				"As an action, you can summon a spirit that has the appearance of a creature of your choice. This spirit arrives as a great wind that overtakes the petals before transforming into the desired beast, which you control. The spirits uses the bestial spirit statistics, with the following changes:",
				"   ◊ Its hit points are equal to three times my druid level.",
				"   ◊ When it takes the attack action its attack modifier is equal to my spell attack modifier.",
				"   ◊ In addition to its walking speed, it has a flying speed of 20 feet and can hover.",
				"   ◊ It can move through the space of other creatures as if they were difficult terrain.",
				"The spirit appears in an unoccupied space of my choice within 30 feet of me and acts on my turn. The spirit can only take the Dash and Attack action. If the spirit is reduced to 0 hit points, it explodes in a stunning spectacle of cascading petals. Until the end of my next turn, all creatures within a 20-foot radius centered on the spirit are affected by the Faerie Fire spell. Alternatively, the spirit disappears after 1 minute or if I dismiss it early (no action required).",
				"Starting at 11th level, I can expend two uses of this ability to summon two bestial spirits, instead of one, when I use this action.",
				"I have two uses of this feature, and gain an additional use of it when I reach certain levels in this class: 11th level (three uses) and 16th level (four uses). I regain all expended uses of this feature when I finish a long rest."
			]),
			usages: levels.map(function (n) {
				return n < 6 ? 0 : n < 11 ? 2 : n < 16 ? 3 : 4;
			}),
			recovery: "long rest",	
			creaturesAdd : [["Bestial Spirit", true]],
			creatureOptions : [{
				name : "Bestial Spirit",
				source : [["OTftTG", 137]],
				size : 3,
				type : "Spirit",
				alignment : "Unaligned",
				ac : 15,
				hp : 38,
				hd : [8,6],
				speed : "40 ft, fly 20 ft (hover)",
				scores : [15, 15, 15, 9, 12, 9],
				passivePerception : 13,
				senses : "",
				languages : "Common",
				skills : {
					"Intimidation" : 1,
					"Perception" : 3,
					"Stealth" : 4,
				},
				challengeRating : "1",
				proficiencyBonus : 2,
				attacksAction : 1,
				attacks : [{
					name : "Chomp",
					ability : 5,
					damage : [2, 6, "piercing"],
					range : "Melee",
					description : "If the target is a creature, it must succeed on a DC 14 STR save or be prone",
					modifiers : ["", "Prof"],
					abilitytodamage : false,
					useSpellMod : "druid"
				}],	
				traits : [{
					name : "Promising Threat",
					description : "The bestial spirit has advantage on Charisma (Intimidation) checks if the target has seen it hit a creature with its chomp attack in the past minute."
				}],
				actions : [{
					name : "Devour (Reaction)",
					description : "When the bestial spirit reduces a creature to 0 hit points, it consumes some of the creature’s essence, regaining 1d10 hit points."
				}],				
				calcChanges: {
					hp: function (totalHD, HDobj, prefix) {
						if (!classes.known.druid) return;
						var drdLvl = classes.known.druid.level;
						var drdLvl3 = 3 * drdLvl;
						HDobj.alt.push(drdLvl3);
						HDobj.altStr.push(
							" = 0 as a base\n + three times its creator's druid level (" +
							drdLvl3 +
							")"
						);
					},
					setAltHp: true,	
				},
			}],
		},
		"subclassfeature10" : {
			name : "Spirit of Obojima",
			source : [["OTftTG", 137]],
			minlevel : 10,
			description : desc([ 
				"Starting at 10th level, the spirit of Obojima comes to my aid in both subtle and grand ways. Whenever making a Wisdom (Survival) check to find a path or creature, the wind carries a collection of brilliant white petals in the direction I seek. I have advantage when making these skill checks.",
				"Additionally, I can use an action to magically call forth a massive swarm of petals, which create a great barrier. In a space that I can see, a wall of shifting petals forms. This wall is 1 foot thick, 15 feet tall, and up to 60 feet long. It appears in any orientation I choose, as a horizontal or vertical barrier or at an angle. It can be free floating or resting on a solid surface. If the wall cuts through a creature’s space when it appears, the creature is pushed to one side of the wall (my choice which side).",
				"Nothing can physically pass through the wall except for creatures designated by me. It is immune to all damage, as the petals magically heal any hole that would be created by an attack or effect. This wall lasts a number of minutes equal to my druid level.",
				"Once I use the petal barrier, I can’t use it again until I finish a long rest."
			]),	
			usages : 1,
			recovery : "long rest",
		},	
		"subclassfeature14" : {
			name : "Winds of Revival",
			source : [["OTftTG", 137]],
			minlevel : 14,
			description : desc([ 
				"Starting at 14th level, the spirit of Obojima comes to my aid in your times of greatest need. When I am reduced to 0 hit points, I instead regain half of my hit points and are lifted to my feet amidst a turbulent tempest of petals.",
				"I can then immediately use my reaction to send a wave of concussive wind sweeping out from me. Each creature in a 10-foot radius centered on me must succeed on a Strength saving throw against my spell save DC or be pushed 15 feet away from me and suffer 2d8 slashing damage.",
				"Once I use this feature, I must finish a long rest before I can use it again."
			]),	
			usages : 1,
			recovery: "long rest",			
		},
	},
});

// Fighter Subclasses
AddSubClass("fighter", "spirit-fused", {
	regExpSearch : /^(?=.*spirit)(?=.*fused).*$/i,
	subname : "Spirit-Fused",
	source : [["OTftTG", 138]],
	features : {
		"subclassfeature3.1" : {
			name : "Essence Dice",
			source : [["OTftTG", 138]],
			minlevel : 3,
			description : desc([
				"Starting at 3rd level, I gain the ability to channel spirit energy into my attacks. I have a pool of four d6s that I spend to fuel this ability, which are called essence dice. When I make a weapon attack roll against a creature, I can expend a die from my pool to add it to the roll. Alternatively, I can expend a die from my pool to add it to the attack’s damage roll. I can choose to do this either before or after making the attack roll, but before any effects of the attack are applied.",
				"I regain all of my expended essence dice when I finish a short or long rest.",
				"I gain an additional d6 for my essence dice pool at certain levels in this class: 7th level (5d6), 10th level (6d6), 15th level (7d6), and 18th level (8d6)."
			]),
			usages: levels.map(function (n) {
				return n < 3 ? 0 : n < 7 ? 4 : n < 10 ? 5 : n < 15 ? 6 : n < 18 ? 7 : 8;
			}),
		  	recovery: "short rest",
		},
		"subclassfeature3.2" : {
			name : "Object Channeling",
			source : [["OTftTG", 138]],
			minlevel : 3,
			description : desc([
				"Beginning at 3rd level, I gain the ability to channel my internal spirit energy into objects, creating an array of effects. I learn one Channeling Option of my choice (see “Channeling Options” below). In addition, I gain an object of my choice that I can use to channel the option through.",
				"Once I use this feature, I can’t do so again until I finish a short or long rest.",
				"I also gain proficiency in the Salvage skill."
			]),
			usages: levels.map(function (n) {
				return n < 3 ? 0 : n < 7 ? 1 : n < 9 ? 3 : n < 13 ? 4 : n < 17 ? 5 : 6;
			}),
		  	recovery: "short rest", 
			extraname : "Object Channeling Options",
			extraTimes : levels.map(function (n) {
				return n < 3 ? 0 : n < 7 ? 1 : n < 18 ? 2 : 3;
			}),
			extrachoices : ["Ballooning Bag", "Entangling Cord", "Find the Thing", "First Age Steed", "Goggled Vision", "Leaping Sneakers", "Pocket Voice", "Water Jettison"],
			"ballooning bag" : {
				name : "Ballooning Bag",
				description : desc([
					"As a bonus action, I cause a bag (such as a canvas sack, backpack, fanny pack, or satchel) that I am holding or is on my person to rapidly inflate with air. The bag then floats upward, lifting me off the ground and carrying me up to 30 feet straight into the air. I hover in place there until I let go of the bag (no action required) or until the start of my next turn, at which point the bag gently floats back to the ground. Alternatively, when falling I can use my reaction to cause the bag to inflate, granting me the benefits of Feather Fall.",
				]),	
				action : [["action", "Ballooning Bag"],["reaction", "Ballooning Bag (feather fall)"]],	
			},
			"entangling cord" : {
				name : "Entangling Cord",
				description : desc([
					"When taking the attack action, I can choose to replace one of my attacks with an entangling strike. Choose an object that features tendril-like properties (such as a tape measure, game controller, extension cord, rope, or chain). The object can be on my person or within 30 feet of me, provided I can see it. When I do so, the object springs to life, stretching out towards a creature I can see within 15 feet of it. Make a ranged attack using my Constitution modifier + my proficiency bonus. On a hit, the target is pulled up to 15 feet towards the object.",
				]),	
				weaponOptions: [{
					name: "Entangling Cord",
					source: [["OTftTG", 139]],
					regExpSearch : /^(?=.*entangling)(?=.*cord).*$/i,
  					type : "AlwaysProf",
 					ability : 3,
 	 				damage : [0, 0, ""],
  					range : "15 ft",
  					description : "On a hit, the target is pulled up to 15 feet towards the object",
					isAlwaysProf: true,
					selectNow: true,
				}],
			},
			"find the thing" : {
				name : "Find the Thing",
				description : desc([
					"As an action, I focus my energy through a navigational object (such as a compass, GPS, or map). Doing so allows me to cast the Locate Object spell with the following changes:",
					"   \u2022 The spell doesn't require you to concentrate on it.",
					"   \u2022 The spell's duration is 1 hour.",
					"   \u2022 The spell can detect an object within 1 mile of me instead of 1,000 feet.",
				]),
				spellcastingBonus: [{
					name: "Find the Thing",
					spells: ["locate object"],
					selection: ["locate object"],
					times: 1,
				}],				
			},
			"first age steed" : {
				name : "First Age Steed",
				description : desc([
					"I enact a ritual that creates a bond with a special vehicle of my choice (such as a bicycle, moped, or similar object I can sit on). This vehicle can only carry one creature, has a walking speed of 60 feet, and does not have a flying speed. As an action, I can summon that vehicle to my side. While summoned the vehicle is indestructible and disappears in a puff of smoke after 1 hour.",
				]),	
				action : [["action", "Summon First Age Steed"]],	
			},
			"goggled vision" : {
				name : "Goggled Vision",
				description : desc([
					"While wearing an ocular covering (such as ski goggles, spectacles, sunglasses, or a welding mask), I can use an action to see in dim light within 60 feet of me as if it were bright light, and in darkness as if it were dim light. I can’t discern color in darkness, only shades of gray. Additionally, I have advantage on Intelligence (Investigation) checks to determine if something is an illusion. These effects on my goggles last for 1 hour.",
				]),	
				action : [["action", "Goggled Vision"]],	
			},
			"leaping sneakers" : {
				name : "Leaping Sneakers",
				description : desc([
					"While wearing a pair of shoes I can use a bonus action to add a spring to my step. For 1 hour, I gain the benefits of the Jump spell.",
				]),	
				action : [["bonus action", "Leaping Sneakers"]],	
			},
			"pocket voice" : {
				name : "Pocket Voice",
				description : desc([
					"I spend 1 minute enacting a ritual that binds my voice to an object I can see that looks as if it would produce a sound (such as a boombox, pair of headphones, statue with a mouth, portrait of a person, radio, or jewelry box). My voice stays bound to the object for 1 hour, or until I dismiss the effect as a bonus action. While bound, everything I say can also be heard through the object.",
				]),	
			},
			"water jettison" : {
				name : "Water Jettison",
				description : desc([
					"As a bonus action, I spray a misty stream of water from a container on my person (such as a waterskin, soda can, squirt water bottle, or spray bottle). Doing so moves me 10 feet backwards in a straight line and grants me the benefits of the Disengage action.",
				]),	
				action : [["bonus action", "Water Jettison"]],	
			},
			toNotesPage: [{
				name : "Channeling Options",
				source : [["OTftTG", 139]],
				note: desc([
					"\u2022 Ballooning Bag. As a bonus action, I cause a bag (such as a canvas sack, backpack, fanny pack, or satchel) that I am holding or is on my person to rapidly inflate with air. The bag then floats upward, lifting me off the ground and carrying me up to 30 feet straight into the air. I hover in place there until I let go of the bag (no action required) or until the start of my next turn, at which point the bag gently floats back to the ground. Alternatively, when falling I can use my reaction to cause the bag to inflate, granting me the benefits of Feather Fall.",
					"\u2022 Entangling Cord. When taking the attack action, I can choose to replace one of my attacks with an entangling strike. Choose an object that features tendril-like properties (such as a tape measure, game controller, extension cord, rope, or chain). The object can be on my person or within 30 feet of me, provided I can see it. When I do so, the object springs to life, stretching out towards a creature I can see within 15 feet of it. Make a ranged attack using my Constitution modifier + my proficiency bonus. On a hit, the target is pulled up to 15 feet towards the object.",
					"\u2022 Find the Thing. As an action, I focus my energy through a navigational object (such as a compass, GPS, or map). Doing so allows me to cast the Locate Object spell with the following changes:",
					"   \u2022 The spell doesn't require you to concentrate on it.",
					"   \u2022 The spell's duration is 1 hour.",
					"   \u2022 The spell can detect an object within 1 mile of me instead of 1,000 feet.",
					"\u2022 First Age Steed. I enact a ritual that creates a bond with a special vehicle of my choice (such as a bicycle, moped, or similar object I can sit on). This vehicle can only carry one creature, has a walking speed of 60 feet, and does not have a flying speed. As an action, I can summon that vehicle to my side. While summoned the vehicle is indestructible and disappears in a puff of smoke after 1 hour.",
					"\u2022 Goggled Vision. While wearing an ocular covering (such as ski goggles, spectacles, sunglasses, or a welding mask), I can use an action to see in dim light within 60 feet of me as if it were bright light, and in darkness as if it were dim light. I can’t discern color in darkness, only shades of gray. Additionally, I have advantage on Intelligence (Investigation) checks to determine if something is an illusion. These effects on my goggles last for 1 hour.",
					"\u2022 Leaping Sneakers. While wearing a pair of shoes I can use a bonus action to add a spring to my step. For 1 hour, I gain the benefits of the Jump spell.",
					"\u2022 Pocket Voice. I spend 1 minute enacting a ritual that binds my voice to an object I can see that looks as if it would produce a sound (such as a boombox, pair of headphones, statue with a mouth, portrait of a person, radio, or jewelry box). My voice stays bound to the object for 1 hour, or until I dismiss the effect as a bonus action. While bound, everything I say can also be heard through the object.",
					"\u2022 Water Jettison. As a bonus action, I spray a misty stream of water from a container on my person (such as a waterskin, soda can, squirt water bottle, or spray bottle). Doing so moves me 10 feet backwards in a straight line and grants me the benefits of the Disengage action.",
				]),
			}],
		},
		"subclassfeature7" : {
			name : "Spirit Battery",
			source : [["OTftTG", 139]],
			minlevel : 7,
			description : desc([
				"Starting at 7th level, I learn the Jolt cantrip with the following changes:",
				"   \u2022 When I target a machine with the spell, the machine is powered for 1 hour instead of 18 seconds.",
				"   \u2022 My spell attack modifier is equal to my Constitution modifier + my proficiency modifier.",
				"Additionally, once on each of my turns when I hit a target with a weapon attack as part of the attack action, I  can replace its damage with that of the Jolt cantrip. When I do so, I roll the Jolt cantrip's damage dice (which deals lightning damage) in place of the weapon's damage dice, and I can gain no other benefits to the attack's damage from other features or spells.",
				"I count as the spirit creature type."
			]),
			usages: levels.map(function (n) {
				return n < 3 ? 0 : n < 7 ? 4 : n < 10 ? 5 : n < 15 ? 6 : n < 18 ? 7 : 8;
			}),
		  	recovery: "short rest",
			spellcastingBonus: [{
				name: "Spirit Battery",
				spells: ["jolt"],
				selection: ["jolt"],
				times: 1,
			}],	
		},
		"subclassfeature10" : {
			name : "Improvised Armor",
			source : [["OTftTG", 139]],
			minlevel : 10,
			description : desc([ 
				"Starting at 10th level, I learn to channel my energy into objects I am wearing, causing them to become harder than steel for a brief moment. When I am hit by an attack, I can use my reaction to roll one of my essence dice, adding the number rolled to my AC for that attack, potentially causing the attack to miss me."
			]),	
			action : ["reaction", "Improvised Armor"],			
		},
		"subclassfeature15" : {
			name : "Backup Battery",
			source : [["OTftTG", 139]],
			minlevel : 15,
			description : desc([ 
				"At 15th level, I learn to draw on the spirit energy within me to gain a quick rush of energy. I gain an additional use of my Second Wind feature. When my hit points drop below my fighter level while you have a use of Second Wind, I can choose to expend a use of Second Wind immediately (no action required)."
			]),	
			usages: 1,
			additional : "Second Wind",	
		},
		"subclassfeature18" : {
			name : "Junk Master",
			source : [["OTftTG", 139]],
			minlevel : 18,
			description : desc([ 
				"Starting at 18th level, I gain an additional channeling option from the Object Channeling feature. In addition, when I roll initiative and have no uses of my Object Channeling feature left, I regain two uses of that feature."
			]),	
		},
	},
});

// Monk Subclasses
AddSubClass("monk", "way of the sheep dragon shepherd", {
	regExpSearch : /^(?=.*sheep)(?=.*dragon)(?=.*shepherd)((?=.*(monk|monastic))|((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior))).*$/i,
	subname : "Way of the Sheep Dragon Shepherd",
	source : [["OTftTG", 140]],
	features : {
		"subclassfeature3" : {
			name : "Herding Sheep",
			source : [["OTftTG", 140]],
			minlevel : 3,
			description : desc([
				"At 3rd level, I gain the ability to herd my allies, calling them closer or moving them out of danger. As a bonus action, I can spend 1 or more ki points to cause a willing creature that I can see within 60 feet of me to move toward me or in any other direction. This movement doesn’t provoke opportunity attacks. If the creature moves toward me, it can move up to 15 feet per ki point spent; if it moves in any other direction, it can move up to 10 feet per ki point spent. A creature can’t move in this way more than its speed would allow. At higher levels, when I use this feature I can target additional creatures. At 5th level I can target 2 creatures, 3 creatures at 10th, and 4 creatures at 15th."
			]),
			action: [["bonus action", ""]],			
		},
		"subclassfeature6.1" : {
			name : "Wind Shot",
			source : [["OTftTG", 141]],
			minlevel : 6,
			description : desc([
				"When I reach 6th level, I gain the ability to mimic the sheep dragon's wind pistol, blasting enemies with powerful gale forces at a distance. When I make an unarmed strike, I can instead choose to make a special attack, firing a compressed blast of air from my mouth. This ranged weapon attack has a range of 60 feet, and it uses the same attack bonus and damage die as my unarmed strike.",
				"Additionally, when I hit a target with this special attack, I can choose to spend 1 ki point to force the target to make a Strength saving throw against my ki save DC. On a failed save, the target is knocked prone or pushed 10 feet away from me (my choice)."
			]),
			weaponOptions: [{
				baseWeapon: "unarmed strike",
				name: "Wind Shot",
				source: [["OTftTG", 140]],
				regExpSearch : /^(?=.*wind)(?=.*shot).*$/i,
  				range : "60 ft",
  				description : "On hit, can spend 1 ki pt, target make a STR save or be prone/pushed 10 ft back",
				selectNow: true,
			}],		
		},
		"subclassfeature6.2" : {
			name : "Intercepting Maneuver",
			source : [["OTftTG", 141]],
			minlevel : 6,
			description : desc([
				"Also at 6th level, my protective nature comes out in heightened moments of skillful deflection for a nearby ally. As a reaction, when a friendly creature within 10 feet of me is hit by an attack, I can spend 1 ki point to reduce the damage it takes by an amount equal to one roll of my Martial Arts die + my Dexterity modifier."
			]),
			action: [["reaction", ""]],		
		},
		"subclassfeature11" : {
			name : "Take to the Skies",
			source : [["OTftTG", 141]],
			minlevel : 11,
			description : desc([
				"By the time I reach 11th level, I’ve mastered a unique technique that lets me glide on the wind, just like a majestic sheep dragon. When I use my Step of the Wind, I also gain a flying speed equal to my walking speed. This flying speed lasts until the end of my turn. Additionally, when I use my Step of the Wind, I simultaneously take both the Disengage and Dash action."
			]),	
		},
		"subclassfeature17" : {
			name : "Guide to the Herd",
			source : [["OTftTG", 141]],
			minlevel : 17,
			description : desc([
				"At 17th level, my vigilant watch of my companions while in the midst of combat allows me to give them cues as to when they should raise their defenses. Whenever I use my Patient Defense to gain the benefits of the Dodge action, I can spend 1 additional ki point to share that benefit with my allies. Each friendly creature that can see or hear me and is within 30 feet of me can immediately use its reaction to also gain the benefits of the Dodge action until the start of my next turn."
			]),	
		},
	},
});

// Paladin Subclasses
AddSubClass("paladin", "oath of the river", {
	regExpSearch : /^(?=.*paladin)(?=.*river).*$/i,
	subname : "Oath of the River",
	source : [["OTftTG", 142]],
	spellcastingExtra : ["bless", "whelm weapon", "find steed", "lesser restoration", "water breathing", "water walk", "control water", "freedom of movement", "mass cure wounds", "submerge" ],
	features : {
		"subclassfeature3.1" : {
			name : "Channel Divinity: Rushing Rapids",
			source : [["OTftTG", 142]],
			minlevel : 3,
			description : desc([
				"As an action, I can cause a forceful wave of water to erupt outward in a 20-foot radius centered on me. Each Large or smaller creature of my choice in the area must succeed on a Strength saving throw or be pushed 5 feet outside of it.",
			]),
			action: [["action", ""]],	
		},
		"subclassfeature3.2" : {
			name : "Channel Divinity: Blessed Pool",
			source : [["OTftTG", 142]],
			minlevel : 3,
			description : desc([
				"As a bonus action, I speak gentle yet courageous words that encourage my allies and heal them. Choose a number of creatures up to twice my Charisma modifier (minimum 2) that I can see within 30 feet of me. Each creature regains 2d6 hit points.",
			]),
			action: [["bonus action", ""]],	
		},
		"subclassfeature7" : {
			name : "Aura of the River",
			source : [["OTftTG", 143]],
			minlevel : 7,
			description : desc([
				"Starting at 7th level, I emanate an aura that causes the area around me to feel as if wading into a body of water, slowing down my enemies as they approach. The area within 10 feet of me is considered difficult terrain for other creatures. I can designate any number of creatures I can see to be unaffected by it (no action required). In addition, the first time I hit a Large or smaller creature on my turn with a melee attack, I can use my aura to move the target up to 10 feet to an unoccupied space I choose.",
				"At 18th level, the area within 30 feet of me, instead of 10 feet, is considered difficult terrain for other creatures.",
			]),
		},
		"subclassfeature15" : {
			name : "Shielding Spirit",
			source : [["OTftTG", 143]],
			minlevel : 7,
			description : desc([
				"Beginning at 15th level, whenever I make a Dexterity saving throw, I can use my reaction to halve any damage I would take from the effect. When I do so, I can also expend a spell slot to extend this benefit to nearby allies. Choose a number of creatures within 10 feet of me equal to the level of the spell slot expended; the damage is also halved for each of those creatures.",
			]),
			action: [["reaction", ""]],
		},
		"subclassfeature20" : {
			name : "Form of the River",
			source : [["OTftTG", 143]],
			minlevel : 20,
			description : desc([
				"Starting at 20th level, I can manifest the powerful visage of a river spirit around my body. As a bonus action, I gain the following benefits for 1 minute:",
				"   \u2022 I gain a swimming speed of 60 feet, and my walking speed increases by 15 feet.",
				"   \u2022 I have advantage on all saving throws.",
				"   \u2022 Whenever I successfully move a creature with my aura I can choose to deal 2d8 bludgeoning damage to it.",
				"Once I use this bonus action, I can’t use it again until I finish a long rest, unless I expend a 5th-level spell slot to use it again."
				]),
			action : [["bonus action", ""]],
			usages : 1,
			recovery : "short rest", 
			toNotesPage: [{
				name : "Form of the River",
				source : [["OTftTG", 143]],
				note: desc([
					"Starting at 20th level, I can manifest the powerful visage of a river spirit around my body. As a bonus action, I gain the following benefits for 1 minute:",
					"   \u2022 I gain a swimming speed of 60 feet, and my walking speed increases by 15 feet.",
					"   \u2022 I have advantage on all saving throws.",
					"   \u2022 Whenever I successfully move a creature with my aura I can choose to deal 2d8 bludgeoning damage to it.",
					"Once I use this bonus action, I can’t use it again until I finish a long rest, unless I expend a 5th-level spell slot to use it again."
				])
			}],
		},
	},
});

// Ranger Subclasses
AddSubClass("ranger", "corrupted", {
	regExpSearch : /^(?=.*ranger)(?=.*corrupted).*$/i,
	subname : "Corrupted",
	source : [["OTftTG", 143]],
	features : {
		"subclassfeature3.1" : {
			name : "1st Manifestation",
			source : [["OTftTG", 143]],
			minlevel : 3,
			description : desc([
				"Starting at 3rd level, the Corruption within begins to manifest in combat. Whenever I take damage, I also receive a curse marker; if the damage was from a critical hit, I receive two curse markers instead. These markers will remain active until the end of my next turn, and the maximum number of curse markers I can accumulate at a time is 2. When I hit a creature with a weapon attack, all the curse markers I have gained are instantly consumed, dealing an extra 1d4 necrotic damage to the target for each curse marker consumed.",
				"Alternatively, I can use a bonus action to call upon my Corruption to immediately gain the maximum number of curse markers available to me. When I use this ability, I can’t gain more than my maximum number of curse markers.",
				"The number of curse markers I can accumulate at once increases when I reach certain levels in this class: 3 at 5th level, 4 at 11th level, and 5 at 17th level."
			]),
		},
		"subclassfeature3.2" : {
			name : "2nd Manifestation",
			source : [["OTftTG", 144]],
			minlevel : 3,
			description : desc([
				"At 3rd level, I start to observe peculiar happenings within my own body. At times I notice that my limbs and torso exhibit independent movements, seemingly acting of their own volition.",
				"When I make a Strength or Dexterity check, I can choose to replace the result with a number equal to 10 + my ranger level. I can wait until after you roll the d20 before deciding to use this feature, but must decide before the GM says whether the roll succeeds or fails. I can use this feature a number of times equal to half my proficiency bonus (rounded up), and I regain all expended uses when I finish a long rest."
			]),
			usages : levels.map(function(n) {
				return n < 3 ? "" : n < 6 ? 1 : n < 18 ? 2 : 3;
			}),
			recovery : "long rest"	
		},
		"subclassfeature7" : {
			name : "3rd Manifestation",
			source : [["OTftTG", 144]],
			minlevel : 7,
			description : desc([
				"Starting at 7th level, when I make a weapon attack against a creature, I can expend one curse marker to roll a d4 and add it to the attack roll. I can choose to use a curse marker in this way before or after making the attack roll. I can expend a curse marker in this way only once per turn.",
				"Additionally, whenever I take damage, I can use my reaction to reduce the damage taken by an amount equal to my ranger level. Once I reduce damage in this way, I can’t do so again until I finish a short or long rest."
			]),
			usages : 1,
			recovery : "short rest"
		},		
		"subclassfeature11" : {
			name : "4th Manifestation",
			source : [["OTftTG", 144]],
			minlevel : 11,
			description : desc([ "Choose one ailment using the 'Choose Feature' button above.",
			]),
			choices : ["Graying Vision", "Failing Lungs", "Losing Feeling"],
			"graying vision" : {
				name : "Graying Vision",
				description : desc(["My eyes weaken and the world around me begins to lose some of its colorful luster. To adjust to my slowly worsening vision, I’ve gained blindsight out to a range of 15 feet. In addition, I automatically detect visual illusions if their Intelligence (Investigation) check DC is less than or equal to my ranger spell save DC.",
				]),	
				vision : [["Blindsight", 15]]
			},
			"failing lungs" : {
				name : "Failing Lungs",
				description : desc([
					"My lungs have begun to ache and my days are filled with excessive coughing. At times you feel myself gasping for air, and it’s in those moments I’ve learned to steal another’s breath. As an action, I pull my next breath from a creature I can see. The target falls prone and can’t take reactions until the start of my next turn. Additionally, all of my curse markers are consumed, dealing 1d4 necrotic damage to the creature for each marker consumed in this way.",
					"Alternatively, I can give my breath to another creature. Whenever a creature I can see makes a Dexterity saving throw, I can use my reaction to give it advantage on the saving throw and increase its speed by 15 feet until the start of my next turn."
				]),
			action: [["action", "Steal Breath"], ["reaction", "Give Breath"]],
			},
			"losing feeling" : {
				name : "Losing Feeling",
				description : desc(["Numbness creeps into my muscles and bones and across my skin. The vibrancy of feeling gives way to a broad antagonism. My hands and arms instead burn with a cold ethereal flame, which only I can see. As a bonus action, I can target a creature I can see within 60 feet of me, enveloping it with the same cursed flames. When I deal damage with my curse markers to a creature that has been enveloped by my flames, each curse marker deals an extra 1d6 necrotic damage, instead of 1d4. Once I use this feature, I can’t use it again until I finish a short or long rest."
				]),
			action: [["bonus action", ""]],
			usages : 1,
			recovery : "short rest"
			},
		},
		"subclassfeature15" : {
			name : "5th Manifestation",
			source : [["OTftTG", 144]],
			minlevel : 15,
			description : desc([
				"Starting at 15th level, I gain the ability to call upon the Corruption which greatly alters my natural capabilities. As a bonus action, I can activate this feature, doubling my walking speed, increasing my AC by 2, and allowing me to make two additional attacks when taking the Attack action. In addition, all attacks are treated as if I have the maximum number of curse markers accumulated. The effects of this feature last until the start of my next turn. I can use this ability without negative effects once per long rest.",
				"If I use this feature a second time before finishing a long rest, in addition to the effects wearing off at the start of my next turn, I also suffer one level of exhaustion and immediately drop to 1 hit point if I have more than 1 hit point at the start of my turn.",
				"Once I use this feature a second time, I can’t use it again until I finish a long rest.",
			]),
			usages : 1,
			recovery : "long rest"
		},
	},
});

// Rogue Subclasses
AddSubClass("rogue", "waxwork", {
	regExpSearch : /^(?=.*rogue)(?=.*waxwork).*$/i,
	subname : "Waxwork",
	source : [["OTftTG", 145]],
	features : {
		"subclassfeature3.1" : {
			name : "Conjure Flame",
			source : [["OTftTG", 145]],
			minlevel : 3,
			description : desc([
				"At 3rd level, I learn the Dancing Lights cantrip (the lights appear as floating candles) and the Produce Flame cantrip."
			]),
			spellcastingBonus: [{
				name: "Conjure Flame",
				spells: ["dancing lights","produce flame"],
				selection: ["dancing lights","produce flame"],
				times: 2,
			}],	
		},
		"subclassfeature3.2" : {
			name : "Wick Points",
			source : [["OTftTG", 138]],
			minlevel : 3,
			description : desc([
				"Beginning at 3rd level, I gain the ability to channel my internal spirit energy into objects, creating an array of effects. I learn one Channeling Option of my choice (see “Channeling Options” below). In addition, I gain an object of my choice that I can use to channel the option through.",
				"Once I use this feature, I can’t do so again until I finish a short or long rest.",
				"I also gain proficiency in the Salvage skill."
			]),
			usages : [0, 0, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
		  	recovery: "short rest", 
			extraname : "Wax Enchantments",
			extraTimes : levels.map(function (n) {
				return n < 3 ? 0 : n < 5 ? 3 : n < 10 ? 5 : n < 15 ? 7 : 9;
			}),
			extrachoices : ["Blooming Light", "Bocha Glue Wax", "Candle Pop", "Delicacy", "Fish Fat Candle", "Flooding Abundance", 
					"Iron Seal", "Lost Wax Carving", "Maker’s Mark", "Shielding Seal", "Spark Shower", "Waxlings", "Wick Whip", 
					"Burning Delay (5th Level Required)", "Detonate (5th Level Required)", "Consuming Flame (10th Level Required)"],
			"blooming light" : {
				name : "Blooming Light",
				description : desc([
					"As an action, I can spend 1 wick point to ignite a dark green candle, which burns in a similar hue, shedding dim light in a 10-foot radius centered on itself. Creatures in the candle’s light are hidden from divination magic, and they can’t be targeted by such magic or perceived through magical scrying sensors. This effect lasts for 1 hour.",
				]),	
				action : ["action", ""],	
			},
			"bocha glue wax" : {
				name : "Bocha Glue Wax",
				description : desc([
					"Bocha glue is a delicate mixture of the finest waxes available and a collection of ingredients known only to the Waxwork Rogues. When enchanted properly, it can temporarily hold any two objects together. As an action, I can spend 1 wick point to create an adhesive bond between two objects using just a small amount of bocha glue. The two objects remain bound together for 24 hours, at which point the enchantment fades and the two objects are separated. A creature within reach of the objects can use an action to make a Strength (Athletics) check against my Enchantment save DC, breaking the bond early on a success.",
				]),
				action : ["action", "Bocha Glue Wax (1 WP)"],	
			},
			"candle pop" : {
				name : "Candle Pop",
				description : desc([
					"Bocha glue is a delicate mixture of the finest waxes available and a collection of ingredients known only to the Waxwork Rogues. When enchanted properly, it can temporarily hold any two objects together. As an action, I can spend 1 wick point to create an adhesive bond between two objects using just a small amount of bocha glue. The two objects remain bound together for 24 hours, at which point the enchantment fades and the two objects are separated. A creature within reach of the objects can use an action to make a Strength (Athletics) check against my Enchantment save DC, breaking the bond early on a success.",
				]),
				action : ["bonus action", "Candle Pop (2 WP)"],
			},
			"delicacy" : {
				name : "Delicacy",
				description : desc([
					"As an action, I can spend 1 wick point to imbue the tart flavor of a Pyramid Melon and the healing properties of a river spirit into my candle. As a bonus action, a creature can consume the candle, causing it to regain 1d6 hit points and providing enough nourishment to sustain it for one day. A candle holds this enchantment for 24 hours, after which the properties of delicacy fade. I can have no more than 2 candles with this enchantment at a time.",
				]),
				action : [["action", "Imbue Delicacy (1 WP)"],["bonus action", "Consume Delicacy"]],
			},
			"fish fat candle" : {
				name : "Fish Fat Candle",
				description : desc([
					"As an action, I can spend 1 wick point to ignite and throw an oily brick of blubber candle wax that lands in an unoccupied space I can see on the ground within 60 feet of me. One round after the candle lands, it emits a cloud of colorful smoke that creates a heavily obscured area in a 20-foot radius centered on it. The candle continues to spew smoke for 1 minute and creates a visible trail in the sky that can be seen from 10 miles away.",
				]),
				action : ["action", "Fish Fat Candle (1 WP)"],	
			},
			"flooding abundance" : {
				name : "Flooding Abundance",
				description : desc([
					"As an action, I can spend 2 wick points to ignite and throw a tea light candle into an unoccupied space I can see on the ground within 60 feet of me. After landing, the candle melts rapidly, bubbling and boiling with an overwhelming amount of wax, which flows over and fills a 15-foot-square centered on the candle. The wax remains for 1 minute. It is flammable, and a 5-foot square of wax exposed to fire burns away in 3 rounds, dealing 2d6 fire damage to any creature that starts its turn in the fire. All spaces covered in the wax are difficult terrain for the duration.",
				]),
				action : ["action", "Flooding Abundance (2 WP)"],	
			},
			"iron seal" : {
				name : "Iron Seal",
				description : desc([
					"As an action, I can spend 1 wick point to melt and press the wax seal of iron onto any door or object with a lid. Once imbued with my seal, the object becomes magically shut and can’t be opened unless a creature makes a successful Strength (Athletics) check against my Enchantment save DC, at which point the seal breaks. The iron seal lasts until it is broken or dispelled (as if it were a 1st-level spell). I can use an action to touch one of my iron seals and end its effects early.",
				]),
				action : ["action", "Iron Seal (1 WP)"],	
			},
			"lost wax carving" : {
				name : "Lost Wax Carving",
				description : desc([
					"Using the lost form of wax carving I craft a detailed replica of an object. When using the wax carving technique, I can spend 2 wick points over the course of 10 minutes to produce the effects of the Duplicate spell. The object I duplicate can be no larger than a 1-foot cube.",
				]),	
			},
			"maker’s mark" : {
				name : "Maker’s Mark",
				description : desc([
					"When I make an attack with a one-handed weapon as part of the Attack action on my turn, I can spend 1 wick point to make an unarmed strike as part of the same action using a signet ring. This attack deals bludgeoning damage equal to 1d4 + my Dexterity modifier, plus an extra 1d6 fire damage. This attack can benefit from my Sneak Attack, provided I haven’t already dealt my Sneak Attack damage this turn. I can use this enchantment once per turn.",
				]),	
			},
			"shielding seal" : {
				name : "Shielding Seal",
				description : desc([
					"As an action, I can spend 1 wick point to melt and press the wax seal of shielding onto a willing creature or object, protecting it from incoming damage. The target of the seal gains 5 temporary hit points, which last for 24 hours. I can grant an additional 5 temporary hit points for each additional wick point spent, to a maximum of 15 temporary hit points. I can only have one shielding seal active at a time. Creating a shielding seal while another seal of the same type is already active ends the effects of the initial seal early.",
				]),
				action : ["action", "Shielding Seal (1 WP)"],	
			},
			"spark shower" : {
				name : "Spark Shower",
				description : desc([
					"As an action, I can spend 1 wick point to melt and press the wax seal of shielding onto a willing creature or object, protecting it from incoming damage. The target of the seal gains 5 temporary hit points, which last for 24 hours. I can grant an additional 5 temporary hit points for each additional wick point spent, to a maximum of 15 temporary hit points. I can only have one shielding seal active at a time. Creating a shielding seal while another seal of the same type is already active ends the effects of the initial seal early.",
				]),
				action : ["bonus action", "Spark Shower (2 WP)"],	
			},
			"waxlings" : {
				name : "Waxlings",
				description : desc([
					"By reaching through the veil and into the Spirit Realm, I can temporarily pull and trap a minor spirit within a candle, granting the candle sentience. As an action, I can spend 2 wick points to summon a waxling, casting the Find Familiar* spell with the following changes:",
					"   \u2022 In place of an animal familiar, I instead imbue life into a candle, which causes it to grow appendages and eyes.",
					"   \u2022 My waxling familiar uses the statistics of a rat.",
					"   \u2022 I can command the familiar to use its action to touch a flammable object that isn’t being worn or carried and ignite it.",
					"   \u2022 The familiar sheds bright light in a 5-foot radius and dim light for an additional 10 feet.",
					"   \u2022 I can’t temporarily dismiss the familiar.",
					"   \u2022 The familiar is dismissed permanently after 1 hour or when it is reduced to 0 hit points.",
					"   \u2022 I can have more than one of these familiars at a time.",
				]),
				action : ["action", "Waxlings (2 WP)"],	
			},
			"wick whip" : {
				name : "Wick Whip",
				description : desc([
					"As an action, I can spend 1 wick point to melt and press the wax seal of shielding onto a willing creature or object, protecting it from incoming damage. The target of the seal gains 5 temporary hit points, which last for 24 hours. I can grant an additional 5 temporary hit points for each additional wick point spent, to a maximum of 15 temporary hit points. I can only have one shielding seal active at a time. Creating a shielding seal while another seal of the same type is already active ends the effects of the initial seal early.",
				]),
				action : ["bonus action", "Wick Whip (3 WP)"],	
				weaponOptions: [{
					name: "Wick Whip",
					source: [["OTftTG", 147]],
					regExpSearch : /^(?=.*wick)(?=.*whip).*$/i,
  					type : "AlwaysProf",
 					ability : 2,
 	 				damage : [3, 4, "fire"],
  					range : "10 ft",
  					description : "Finesse, light, reach",
					isAlwaysProf: true,
					selectNow: true,
				}],
			},
			"burning delay (5th level required)" : {
				name : "Burning Delay (5th Level Required)",
				description : desc([
					"I can spend 3 additional wick points to simultaneously activate Burning Delay when I use one of the following candle enchantments: candle pop, fish fat candle, or detonate. When I do so, I delay that enchantment’s activation by 1 round, 1 minute, or 10 minutes (my choice).",
				]),	
				prereqeval : function(v) { return classes.known.rogue.level >= 5; }
			},
			"detonate (5th level required)" : {
				name : "Detonate (5th Level Required)",
				description : desc([
					"As an action, I can spend 3 wick points to ignite and throw a dark black candle at a point I can see within 60 feet of me. A brilliant eruption of flame sweeps out from the candle, causing each creature in a 20-foot-radius sphere centered on that point to make a Dexterity saving throw. A target takes 2d6 fire damage and 2d8 thunder damage on a failed save, or half as much damage on a successful one. When I use this enchantment, I can spend additional wick points to increase the fire damage dealt by 1d6 for each additional wick point spent. The fire spreads around corners. It ignites flammable objects in the area that aren't being worn or carried.",
				]),	
				action : ["action", "Detonate (3 WP)"],
				prereqeval : function(v) { return classes.known.rogue.level >= 5; }
			},
			"consuming flame (10th level required)" : {
				name : "Consuming Flame (10th Level Required)",
				description : desc([
					"When I see a hostile creature within 60 feet of me casting a spell, I can use my reaction and spend 3 wick points to quickly ignite the flame of a thin white candle and cast Counterspell. If the spell was successfully countered and was 3rd level or lower, I can spend an additional 2 wick points to reactivate this ability and store the spell inside your candle. While holding the candle, I can cast any spell stored in it. The spell uses the slot level, spell save DC, spell attack modifier, and spellcasting ability of the original caster, but is otherwise treated as if I cast the spell. Once the spell has been cast, the candle is sundered and becomes unusable. A spell can be stored inside a candle for 24 hours, after which the spell fades and is no longer able to be used.",
				]),
				action : ["reaction", "Consuming Flame (3 WP)"],	
				prereqeval : function(v) { return classes.known.rogue.level >= 10; }	
			},
			toNotesPage: [{
				name : "Wax Enchantments",
				source : [["OTftTG", 146]],
				note: desc([
					"\u2022 Blooming Light. As an action, I can spend 1 wick point to ignite a dark green candle, which burns in a similar hue, shedding dim light in a 10-foot radius centered on itself. Creatures in the candle’s light are hidden from divination magic, and they can’t be targeted by such magic or perceived through magical scrying sensors. This effect lasts for 1 hour.",
					"\u2022 Bocha Glue Wax. Bocha glue is a delicate mixture of the finest waxes available and a collection of ingredients known only to the Waxwork Rogues. When enchanted properly, it can temporarily hold any two objects together. As an action, I can spend 1 wick point to create an adhesive bond between two objects using just a small amount of bocha glue. The two objects remain bound together for 24 hours, at which point the enchantment fades and the two objects are separated. A creature within reach of the objects can use an action to make a Strength (Athletics) check against my Enchantment save DC, breaking the bond early on a success.",
					"\u2022 Candle Pop. As a bonus action, I can spend 2 wick points to ignite and hurl a misshapen yellow candle at a creature I can see within 60 feet of me. The target must make a Dexterity saving throw to avoid being partially encased in wax as the candle explodes on impact. On a failed save, the target is restrained by the wax. At the end of each of its turns, a restrained target can repeat the saving throw, ending the effect on itself on a success.",
					"\u2022 Delicacy. As an action, I can spend 1 wick point to imbue the tart flavor of a Pyramid Melon and the healing properties of a river spirit into my candle. As a bonus action, a creature can consume the candle, causing it to regain 1d6 hit points and providing enough nourishment to sustain it for one day. A candle holds this enchantment for 24 hours, after which the properties of delicacy fade. I can have no more than 2 candles with this enchantment at a time.",
					"\u2022 Fish Fat Candle. As an action, I can spend 1 wick point to ignite and throw an oily brick of blubber candle wax that lands in an unoccupied space I can see on the ground within 60 feet of me. One round after the candle lands, it emits a cloud of colorful smoke that creates a heavily obscured area in a 20-foot radius centered on it. The candle continues to spew smoke for 1 minute and creates a visible trail in the sky that can be seen from 10 miles away.",
					"\u2022 Flooding Abundance. As an action, I can spend 2 wick points to ignite and throw a tea light candle into an unoccupied space I can see on the ground within 60 feet of me. After landing, the candle melts rapidly, bubbling and boiling with an overwhelming amount of wax, which flows over and fills a 15-foot-square centered on the candle. The wax remains for 1 minute. It is flammable, and a 5-foot square of wax exposed to fire burns away in 3 rounds, dealing 2d6 fire damage to any creature that starts its turn in the fire. All spaces covered in the wax are difficult terrain for the duration.",
					"\u2022 Iron Seal. As an action, I can spend 1 wick point to melt and press the wax seal of iron onto any door or object with a lid. Once imbued with my seal, the object becomes magically shut and can’t be opened unless a creature makes a successful Strength (Athletics) check against my Enchantment save DC, at which point the seal breaks. The iron seal lasts until it is broken or dispelled (as if it were a 1st-level spell). I can use an action to touch one of my iron seals and end its effects early.",
					"\u2022 Lost Wax Carving. Using the lost form of wax carving I craft a detailed replica of an object. When using the wax carving technique, I can spend 2 wick points over the course of 10 minutes to produce the effects of the Duplicate spell. The object I duplicate can be no larger than a 1-foot cube.",
					"\u2022 Maker’s Mark. When I make an attack with a one-handed weapon as part of the Attack action on my turn, I can spend 1 wick point to make an unarmed strike as part of the same action using a signet ring. This attack deals bludgeoning damage equal to 1d4 + my Dexterity modifier, plus an extra 1d6 fire damage. This attack can benefit from my Sneak Attack, provided I haven’t already dealt my Sneak Attack damage this turn. I can use this enchantment once per turn.",
					"\u2022 Shielding Seal. As an action, I can spend 1 wick point to melt and press the wax seal of shielding onto a willing creature or object, protecting it from incoming damage. The target of the seal gains 5 temporary hit points, which last for 24 hours. I can grant an additional 5 temporary hit points for each additional wick point spent, to a maximum of 15 temporary hit points. I can only have one shielding seal active at a time. Creating a shielding seal while another seal of the same type is already active ends the effects of the initial seal early.",
					"\u2022 Spark Shower. As a bonus action, I can spend 2 wick points to bring my free hand to my mouth, igniting my next breath. Exhaling creates a dazzling shower of sparks aimed toward a creature within 5 feet of me. I have advantage on the next weapon attack roll I make against the target this turn, and the target can’t make opportunity attacks until the end of my turn.",
					"\u2022 Waxlings. By reaching through the veil and into the Spirit Realm, I can temporarily pull and trap a minor spirit within a candle, granting the candle sentience. As an action, I can spend 2 wick points to summon a waxling, casting the Find Familiar* spell with the following changes:",
					"   \u2022 In place of an animal familiar, I instead imbue life into a candle, which causes it to grow appendages and eyes.",
					"   \u2022 My waxling familiar uses the statistics of a rat.",
					"   \u2022 I can command the familiar to use its action to touch a flammable object that isn’t being worn or carried and ignite it.",
					"   \u2022 The familiar sheds bright light in a 5-foot radius and dim light for an additional 10 feet.",
					"   \u2022 I can’t temporarily dismiss the familiar.",
					"   \u2022 The familiar is dismissed permanently after 1 hour or when it is reduced to 0 hit points.",
					"   \u2022 I can have more than one of these familiars at a time.",
					"\u2022 Wick Whip. As a bonus action, I can spend 3 wick points to ignite a 10-foot length of candlewick that has been soaking in the stomach acid of a dragon frog. The flames burn at an intense heat that warps the air around them, shedding bright light in a 15-foot radius and dim light for an additional 15 feet. The wick burns for 1 minute, during which I can use it as a melee weapon that I am considered proficient with. It deals 3d4 fire damage on a hit (adding my ability modifier to the damage roll as normal), and it has the finesse, light, and reach properties.",
					"\u2022 Burning Delay (5th Level Required). I can spend 3 additional wick points to simultaneously activate Burning Delay when I use one of the following candle enchantments: candle pop, fish fat candle, or detonate. When I do so, I delay that enchantment’s activation by 1 round, 1 minute, or 10 minutes (my choice).",
					"\u2022 Detonate. (5th Level Required) As an action, I can spend 3 wick points to ignite and throw a dark black candle at a point I can see within 60 feet of me. A brilliant eruption of flame sweeps out from the candle, causing each creature in a 20-foot-radius sphere centered on that point to make a Dexterity saving throw. A target takes 2d6 fire damage and 2d8 thunder damage on a failed save, or half as much damage on a successful one. When I use this enchantment, I can spend additional wick points to increase the fire damage dealt by 1d6 for each additional wick point spent. The fire spreads around corners. It ignites flammable objects in the area that aren't being worn or carried.",
					"\u2022 Consuming Flame (10th Level Required). When I see a hostile creature within 60 feet of me casting a spell, I can use my reaction and spend 3 wick points to quickly ignite the flame of a thin white candle and cast Counterspell. If the spell was successfully countered and was 3rd level or lower, I can spend an additional 2 wick points to reactivate this ability and store the spell inside your candle. While holding the candle, I can cast any spell stored in it. The spell uses the slot level, spell save DC, spell attack modifier, and spellcasting ability of the original caster, but is otherwise treated as if I cast the spell. Once the spell has been cast, the candle is sundered and becomes unusable. A spell can be stored inside a candle for 24 hours, after which the spell fades and is no longer able to be used.",
				]),
			}],
		},
		"subclassfeature9" : {
			name : "Burn Cycle",
			source : [["OTftTG", 147]],
			minlevel : 9,
			description : desc([
				"Starting at 9th level, I can ignite my weapons in a flash of hot white flames when I successfully catch an enemy off guard. When I deal Sneak Attack damage on my turn, I can spend wick points to deal extra fire damage to the target, in addition to the weapon’s damage. The extra damage is 1d6 for each wick point spent, to a maximum of 4d6.",
			]),
		},
		"subclassfeature13" : {
			name : "Advanced Enchantments",
			source : [["OTftTG", 147]],
			minlevel : 13,
			description : desc([
				"When I reach 13th level, some of my enchantments become more potent. I now use the alternate enchantments features found below [in notes]. If I have yet to learn any of the following enchantments, I may learn one as part of this feature.",
			]),
			toNotesPage: [{
				name : "Advanced Enchantments",
				source : [["OTftTG", 147]],
				note: desc([
					"When I reach 13th level, some of my enchantments become more potent. I now use the alternate enchantments features found below. If I have yet to learn any of the following enchantments, I may learn one as part of this feature.",
					"\u2022 Blooming Light. Starting at 13th level, the effects of blooming light lasts for 8 hours.",
					"\u2022 Burning Delay. Starting at 13th level, I can delay the effects of my candle enchantments by 1 round, 3 rounds, 1 minute, 10 minutes, or 1 hour.",
					"\u2022 Candle Pop. Starting at 13th level, candle pop affects the target and each creature within 5 feet of it.",
					"\u2022 Delicacy. Starting at 13th level, the creature regains 1d12 hit points, instead of 1d6, and I can have up to 4 candles with this enchantment at a time.",
					"\u2022 Maker’s Mark. Starting at 13th level, maker’s mark has no limit to the number of times I can use it per turn.",
					"\u2022 Shielding Seal. Starting at 13th level, I can have up to three shielding seals active at a time, instead of one.",
					"\u2022 Waxlings. Starting at 13th level, I can spend 3 wicks points as an action, instead of 2, to summon two waxlings simultaneously."
				]),
			}],
		},	
		"subclassfeature17" : {
			name : "Spirit Flame",
			source : [["OTftTG", 147]],
			minlevel : 17,
			description : desc([
				"At 17th level, I learn to craft a specialty candle made of pink wax. As a bonus action, I can ignite this candle, which burns for 1 minute. As long as the burning candle is on my person, I gain benefits from it [see notes].",
			]),
			usages : 1,
			recovery : "long rest",
			action : ["bonus action", "Spirit Flame"],	
			toNotesPage: [{
				name : "Spirit Flame",
				source : [["OTftTG", 147]],
				note: desc([
					"At 17th level, I learn to craft a specialty candle made of pink wax. As a bonus action, I can ignite this candle, which burns for 1 minute. As long as the burning candle is on my person, I gain the following benefits:",
					"   \u2022 The wick point cost of my enchantments is reduced by 1.",
					"   \u2022 I have immunity to fire damage.",
					"   \u2022 Spirits have disadvantage on attack rolls against me",
					"If I fall prone while the burning candle is on my person, I must succeed on a DC 15 Dexterity saving throw or the candle is extinguished early. Once I use this feature, I can’t use it again until I finish a long rest."
				]),
			}],
		},	
	},
});

// Sorcerer Subclasses
AddSubClass("sorcerer", "oni bloodline", {
	regExpSearch : /^(?=.*sorcerer)(?=.*oni)(?=.*bloodline).*$/i,
	subname : "Oni Bloodline",
	source : [["OTftTG", 148]],
	features : {
		"subclassfeature1.1" : {
			name : "Arcane Prison",
			source : [["OTftTG", 148]],
			minlevel : 1,
			description : desc([
				"Each oni trait becomes available to me based on how many sorcery points I am missing from my total, represented by the table below. Regaining sorcery points can cause me to lose one or more oni traits. Each oni trait has both a physical and an arcane manifestation, which lasts until I finish a long rest.",			
			]),
		},
		"subclassfeature1.2" : {
			name : "Oni Traits",
			source : [["OTftTG", 148]],
			minlevel : 1,
			description : desc([
				"0–1 Socery points missing, Eyes. My eyes shimmer with an almost mesmerizing quality. As an action, I can activate my innate ocular charm. For 1 minute, I have advantage on all Charisma checks directed at one creature of my choice that isn’t hostile toward me, provided it can see my eyes. When the effect ends, the creature must make a Wisdom saving throw against my spell save DC. On a success, the target realizes that I used magic to influence its mood and becomes hostile toward me. A creature prone to violence might attack me. Another creature might seek retribution in other ways (at the GM’s discretion), depending on the nature of my interaction with it.",
				"2–4 Socery points missing, Horns. I gain horns which rapidly grow and jut out from my head. When casting a cantrip that requires me to make a melee or ranged spell attack, I can instead make a melee spell attack using my horns, channeling the spell through them. When I hit a creature with a cantrip cast in this way, the target takes an extra 1d6 piercing damage. Additionally, when a hostile creature’s movement provokes an opportunity attack from me, I can use my reaction to cast a cantrip at the creature using my horns rather than making an opportunity attack. The spell must have a casting time of 1 action and must target only that creature.",
				"5–9 Socery points missing, Skin. The hue of my skin turns to a dull red, green, or blue color and I adopt the regenerative powers of the oni. Whenever I cast a spell of 1st level or higher, I regain a number of hit points equal to the spell’s level + my Constitution modifier. I don’t gain this benefit if I activate the Tongue trait for that casting.",
				"10–14 Socery points missing, Tongue. With every incantation cast, the twisted and demonic voice of the First Oni can be heard within my speech. When I cast a spell that requires a verbal component and targets a single creature, I can also use my bonus action to cause the target to recoil in fear. The target must make a Wisdom saving throw against my spell save DC. On a failed save, the target must use its reaction, if available, to move up to half its speed away from me or fall prone (my choice).",
				"15 or more Socery points missing, Hair. My hair turns a shocking white and stretches towards the ground as it grows to cover my back. I gain a +2 bonus to my AC.",				
			]),
			toNotesPage: [{
				name : "Oni Traits",
				source : [["OTftTG", 147]],
				note: desc([
					"0–1 Socery points missing, Eyes. My eyes shimmer with an almost mesmerizing quality. As an action, I can activate my innate ocular charm. For 1 minute, I have advantage on all Charisma checks directed at one creature of my choice that isn’t hostile toward me, provided it can see my eyes. When the effect ends, the creature must make a Wisdom saving throw against my spell save DC. On a success, the target realizes that I used magic to influence its mood and becomes hostile toward me. A creature prone to violence might attack me. Another creature might seek retribution in other ways (at the GM’s discretion), depending on the nature of my interaction with it.",
					"2–4 Socery points missing, Horns. I gain horns which rapidly grow and jut out from my head. When casting a cantrip that requires me to make a melee or ranged spell attack, I can instead make a melee spell attack using my horns, channeling the spell through them. When I hit a creature with a cantrip cast in this way, the target takes an extra 1d6 piercing damage. Additionally, when a hostile creature’s movement provokes an opportunity attack from me, I can use my reaction to cast a cantrip at the creature using my horns rather than making an opportunity attack. The spell must have a casting time of 1 action and must target only that creature.",
					"5–9 Socery points missing, Skin. The hue of my skin turns to a dull red, green, or blue color and I adopt the regenerative powers of the oni. Whenever I cast a spell of 1st level or higher, I regain a number of hit points equal to the spell’s level + my Constitution modifier. I don’t gain this benefit if I activate the Tongue trait for that casting.",
					"10–14 Socery points missing, Tongue. With every incantation cast, the twisted and demonic voice of the First Oni can be heard within my speech. When I cast a spell that requires a verbal component and targets a single creature, I can also use my bonus action to cause the target to recoil in fear. The target must make a Wisdom saving throw against my spell save DC. On a failed save, the target must use its reaction, if available, to move up to half its speed away from me or fall prone (my choice).",
					"15 or more Socery points missing, Hair. My hair turns a shocking white and stretches towards the ground as it grows to cover my back. I gain a +2 bonus to my AC.",				
				]),
			}],
		},
		"subclassfeature6" : {
			name : "Ogre Manipulation",
			source : [["OTftTG", 149]],
			minlevel : 6,
			description : desc([
				"Starting at 6th level, I can manifest one of my oni traits, regardless of how many sorcery points I am missing. As a bonus action, I can gain one of the oni traits I could normally obtain through the expenditure of sorcery points and draw it out early. This trait lasts for 1 minute, and I lose it if I haven’t gained the trait by normal means in that time. Once I use this feature, I can’t do so again until I finish a long rest.",
			]),
			action : ["bonus action", "Ogre Manipulation"],
			usages : 1,
			recovery : "long rest",
		},
		"subclassfeature14" : {
			name : "Boiling Power",
			source : [["OTftTG", 149]],
			minlevel : 14,
			description : desc([
				"Starting at 6th level, I can manifest one of my oni traits, regardless of how many sorcery points I am missing. As a bonus action, I can gain one of the oni traits I could normally obtain through the expenditure of sorcery points and draw it out early. This trait lasts for 1 minute, and I lose it if I haven’t gained the trait by normal means in that time. Once I use this feature, I can’t do so again until I finish a long rest.",
			]),
			toNotesPage: [{
				name : "Oni Traits",
				source : [["OTftTG", 147]],
				note: desc([
					"Oni Traits (Level 14)",
					"Eyes. In addition to the benefits I normally have, I learn the Zone of Truth spell, which I can cast without expending a spell slot. When I cast it, only one creature of my choice within 60 feet of me is affected by the spell. The target must make its saving throw against the spell at the start of each of its turns, provided it can see my eyes; the spell ends early if the target can no longer see my eyes.",
					"Horns. The extra damage dealt by my horns increases to 1d12.",
					"Skin. Whenever I cast a spell of 1st level or higher, I now regain a number of hit points equal to twice the spell’s level + my Constitution modifier.",
					"Tongue. When I activate the Tongue trait using a spell slot of 5th level or higher, in place of the trait’s normal effects, I can instead cause the target to tremble in fear, becoming hyper fixated on me. The target’s passive Wisdom (Perception) score is reduced to 5 and it takes a −5 penalty to its AC against all attacks that aren’t made by me. This effect lasts until the start of my next turn.",			
				]),
			}],
		},
		"subclassfeature18" : {
			name : "Transformation",
			source : [["OTftTG", 149]],
			minlevel : 18,
			description : desc([
				"Beginning at 18th level, I can fully embody the fabled visage of my demon ancestor without needing to exhaust my sorcerous power. As an action, I can instantly manifest all of my oni traits, regardless of how many sorcery points I am missing. While manifesting my oni traits in this way, I gain resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks, and I can’t be charmed or frightened.",
				"This effect lasts for 1 minute, after which I lose any trait I haven’t gained by normal means in that time. Once I use this feature, I can’t do so again until I finish a long rest, unless I spend 5 sorcery points to use it again.",
			]),
			action : ["action", ""],
			usages : 1,
			recovery : "long rest",
		},
	},
});

// Warlock Subclasses
AddSubClass("warlock", "the lantern", {
	regExpSearch : /^(?=.*warlock)(?=.*lantern).*$/i,
	subname : "the Lantern",
	source : [["OTftTG", 150]],
	spellcastingExtra : ["faerie fire", "identify", "locate object", "swallow magic", "daylight", "nondetection", "guardian of faith", "locate creature", "create spirit train stop", "tamh gon’s fiery festival feast" ],
	features : {
		"subclassfeature1.1" : {
			name : "Illuminating Aura",
			source : [["OTftTG", 150]],
			minlevel : 1,
			description : desc([
				"Starting at 1st level, the essence of my spirit patron is channeled into a lantern, where it appears as a minor form of itself. I can use my lantern as a spellcasting focus for my warlock spells.",
				"As a bonus action, I can activate my lantern, causing it to shed bright light in a 20-foot radius and dim light for an additional 20 feet. This light lasts for 1 minute, or until I let go of the lantern or choose to end this effect early (no action required). For the duration, I gain the following benefits:",
				"   \u2022 Whenever I see a creature in my lantern’s bright light make a saving throw, I can use my reaction to grant that creature a bonus to the save equal to my Charisma modifier (minimum of +1).",
				"   \u2022 Whenever a hostile creature within my lantern’s dim light fails a saving throw, it takes radiant damage equal to half my warlock level (rounded up).",
				"Once I use this feature, I can’t do so again until I finish a short or long rest."
			]),
			action : ["bonus action", ""],
			usages : 1,
			recovery : "short rest",
		},
		"subclassfeature1.2" : {
			name : "Revealing Light",
			source : [["OTftTG", 150]],
			minlevel : 1,
			description : desc([
				"Starting at 1st level, I can use an action to cause my lantern to illuminate with a vibrant maroon light, which sheds bright light in a 10-foot radius and dim light for an additional 10 feet. Invisible creatures and objects are visible as long as they are in the lantern’s bright light. The lantern sheds light in this manner for 1 hour or until I snuff it out early as a bonus action. Once I use this feature, I can’t do so again until I finish a short or long rest."
			]),
			action : [["action", ""],["bonus action", "Snuff Revealing Light"]],
			usages : 1,
			recovery : "short rest",
		},
		"subclassfeature6.1" : {
			name : "Dangerous Tool",
			source : [["OTftTG", 151]],
			description : desc([
				"Starting at 6th level, my Illuminating Aura no longer ends if I let go of my lantern. While I am not holding my lantern, I can magically take control of it for 1 minute (no action required), using it as if it were a Spiritual Weapon cast as a 2nd-level spell. My lantern continues to act as my spellcasting focus while using this feature, even though I am no longer holding the lantern.",
				"The level at which Spiritual Weapon is cast increases when I reach certain levels in this class, increasing to a 4th-level spell at 10th level and a 6th-level spell at 15th level.",
				"Once I take control of my lantern in this way, I can’t do so again until I finish a long rest, unless I expend a warlock spell slot to take control of it again."
			]),
			usages : 1,
			recovery : "long rest",
		},
		"subclassfeature6.2" : {
			name : "Oracle Illumination",
			source : [["OTftTG", 151]],
			minlevel : 6,
			description : desc([
				"Beginning at 6th level, I can spend an action to magically connect my mind to a light source such as a candle or torch that I can see or are familiar with. The light source acts as if it were the sensor created by the Clairvoyance spell, granting me the same benefits. I can use the light source in this way for 10 minutes or until I use this feature again. Once I use this feature on a light source, I can’t use it on the same light source again until I finish a long rest."
			]),
			action : ["action", ""],
			usages : 1,
			recovery : "long rest",
		},
		"subclassfeature10" : {
			name : "Brilliant Illumination",
			source : [["OTftTG", 151]],
			minlevel : 10,
			description : desc([
				"Starting at 10th level, while my lantern’s Illuminating Aura is active I can use an action to cause the light to flare with an overwhelmingly brilliant flash. Each creature other than me illuminated by either my lantern’s bright light or dim light (my choice) must make a Constitution saving throw against my warlock spell save DC. On a failed save, a creature takes radiant damage equal to 2d8 + my warlock level and is blinded until the end of my next turn. On a successful save, the creature takes half as much damage and isn’t blinded.",
				"Once I use this feature, I can’t do so again until I finish a short or long rest."
			]),
			action : ["action", ""],
			usages : 1,
			recovery : "short rest",
		},
		"subclassfeature14" : {
			name : "Brighter Still",
			source : [["OTftTG", 151]],
			minlevel : 14,
			description : desc([
				"At 14th level, I gain the ability to activate my lantern’s Illuminating Aura at will. Features such as Dangerous Tool and Brilliant Illumination that work in conjunction with Illuminating Aura are still limited to the number of uses described in their respective features. Additionally, while holding my lantern, I can use an action to cause it to illuminate with a pale blue light, revealing a glowing arcane path to a location I am familiar with, as if casting the Find the Path* spell.", 
				"Once I use my lantern in this way, I can’t do so again until I finish a long rest."
			]),
			action : ["action", ""],
			usages : 1,
			recovery : "long rest",
		},
	},
});

// Wizard Subclasses
AddSubClass("wizard", "origami mage", {
	regExpSearch : /^(?=.*wizard)(?=.*origami)(?=.*mage).*$/i,
	subname : "Origami Mage",
	source : [["OTftTG", 152]],
	features : {
		"subclassfeature2.1" : {
			name : "An Arcane Art",
			source : [["OTftTG", 152]],
			minlevel : 2,
			description : desc([
				"At 2nd level, I learn to weave magic into origami, allowing me to create magnificent moving art pieces, which act on my behalf. As a bonus action, I can fold and imbue life into a paper construct that takes a form I choose from the list below. When crafted, an origami construct becomes bound to me or another creature of my choice that I can see within 60 feet of me.",
				"A creature with a bound origami construct gains the unique effects and features listed for that construct. A creature can’t have more than one of the same origami construct bound to it at a time, unless stated otherwise. A bound construct occupies the same space as the creature it’s bound to.",
				"These constructs stay imbued with life for a number of hours equal to half my wizard level. Origami constructs have an AC equal to my spell save DC, are immune to poison and psychic damage, and are destroyed when they take any damage. I can use this feature to create an origami construct a number of times equal to my proficiency bonus, and I regain all expended uses when I finish a long rest."
			]),	
			action : ["bonus action", ""],			
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",	
		},
		"subclassfeature2.2" : {
			name : "Origami Constructs",
			source : [["OTftTG", 152]],
			minlevel : 2,
			description : desc([
				"\u2022 Bird. While the origami bird is bound to my person, I gain proficiency in the Perception skill. Additionally, I deal an additional 2 slashing damage whenever I hit a target with a ranged attack.",
				"\u2022 Cat. While the origami cat is bound to my person, I gain proficiency in the Stealth skill. Additionally, once on each of my turns when I hit a target with a melee weapon attack, the origami cat can make a melee spell attack against the same target. Its attack modifier is equal to my weapon attack modifier, and on a hit, the target takes 1d6 slashing damage. The origami cat’s damage increases when I reach certain levels in this class: 1d8 at 5th level, 1d10 at 11th level, and 1d12 at 17th level.",
				"\u2022 Crab. While the origami crab is bound to my person, I gain a +1 bonus to my AC and proficiency in the Athletics skill. If the wizard that crafted this origami crab creates another, this origami crab is destroyed.",
				"\u2022 Dragon. While the origami dragon is bound to my person, I have disadvantage on Dexterity (Stealth) checks and can’t benefit from being invisible. Additionally, I take 1d4 fire damage at the start of each of my turns. I can have multiple origami dragons bound to me at the same time. When the construct is destroyed, it quickly pops in an audible explosion, dealing 2d6 fire damage to each creature within 5 feet of it.",
				"\u2022 Frog. While the origami frog is bound to my person, I gain proficiency in the Acrobatics skill. As a reaction, when I would fail a Dexterity saving throw, I can add a bonus to the roll equal to the spellcasting ability modifier of the wizard that crafted the construct; using this feature destroys the origami frog."		
			]),
			toNotesPage: [{
				name : "Origami Constructs",
				source : [["OTftTG", 152]],
				note: desc([
					"\u2022 Bird. While the origami bird is bound to my person, I gain proficiency in the Perception skill. Additionally, I deal an additional 2 slashing damage whenever I hit a target with a ranged attack.",
					"\u2022 Cat. While the origami cat is bound to my person, I gain proficiency in the Stealth skill. Additionally, once on each of my turns when I hit a target with a melee weapon attack, the origami cat can make a melee spell attack against the same target. Its attack modifier is equal to my weapon attack modifier, and on a hit, the target takes 1d6 slashing damage. The origami cat’s damage increases when I reach certain levels in this class: 1d8 at 5th level, 1d10 at 11th level, and 1d12 at 17th level.",
					"\u2022 Crab. While the origami crab is bound to my person, I gain a +1 bonus to my AC and proficiency in the Athletics skill. If the wizard that crafted this origami crab creates another, this origami crab is destroyed.",
					"\u2022 Dragon. While the origami dragon is bound to my person, I have disadvantage on Dexterity (Stealth) checks and can’t benefit from being invisible. Additionally, I take 1d4 fire damage at the start of each of my turns. I can have multiple origami dragons bound to me at the same time. When the construct is destroyed, it quickly pops in an audible explosion, dealing 2d6 fire damage to each creature within 5 feet of it.",
					"\u2022 Frog. While the origami frog is bound to my person, I gain proficiency in the Acrobatics skill. As a reaction, when I would fail a Dexterity saving throw, I can add a bonus to the roll equal to the spellcasting ability modifier of the wizard that crafted the construct; using this feature destroys the origami frog."		
				]),
			}],
		},
		"subclassfeature2.3" : {
			name : "Origami Familiar",
			source : [["OTftTG", 153]],
			minlevel : 2,
			description : desc([
				"At 2nd level, I learn the Find Familiar spell; I always have it prepared, and it doesn’t count against the number of spells I can prepare each day. My familiar appears as an origami version of itself, is immune to poison and psychic damage, and is a construct, instead of a celestial, fey, or fiend. In addition to the familiar’s normal statistics, it also gains access to the following abilities.",
				"\u2022 Camouflage. I can command my familiar to shift into a flattened paper form. In this form the familiar looks nearly indistinguishable from a normal piece of paper. If a creature uses its action to examine the familiar, it can discern the familiar for what it is with a successful Intelligence (Investigation) check against my spell save DC. The familiar can use an action to shift back into its origami form.",
				"\u2022 Last Resort. As an action, my origami familiar can dive toward a creature, unfurling itself and wrapping around the target’s face, as if a sheet of paper blown by the wind. The target must make a Dexterity saving throw against my spell save DC or become blinded for 1 minute. A creature blinded by the paper or one that can touch the creature can use its action to make a Strength check against my spell save DC. On a success, the target is no longer blinded. When this effect ends, my familiar is destroyed.",
				"\u2022 Reconnaissance. As an action, I can command my familiar to spy. The origami familiar will then spend 1 minute listening to any and all sounds within 15 feet of itself, recording what is overhears on its paper body. It then returns to me and dispels its familiar form, leaving behind a transcript of its findings written in a language of my choice that I know."
			]),
			spellcastingBonus: [{
				name: "Origami Familiar",
				spells: ["find familiar"],
				selection: ["find familiar"],
				times: 1,
				firstCol: "markedbox",
			}],
		},
		"subclassfeature6.1" : {
			name : "Binding Release",
			source : [["OTftTG", 153]],
			minlevel : 6,
			description : desc([
				"Starting at 6th level, I can use a bonus action to move one of my origami constructs to a creature that I can see within 30 feet of it."
			]),	
			action : ["bonus action", ""],			
		},
		"subclassfeature6.2" : {
			name : "Paper Path",
			source : [["OTftTG", 153]],
			minlevel : 6,
			description : desc([
				"Also at 6th level, when I cast a spell with a range of touch, my origami construct can deliver the spell as if it had cast the spell. My construct must be within 100 feet of me. If the spell requires an attack roll, I use I attack modifier for the roll."
			]),				
		},
		"subclassfeature10" : {
			name : "Origami Servant",
			source : [["OTftTG", 153]],
			minlevel : 10,
			description : desc([
				"Beginning at 10th level, I learn the Unseen Servant spell; I always have it prepared, and it doesn’t count against the number of spells I can prepare each day. In addition, I can cast it without expending a spell slot, but the maximum number of servants I can have at a time is equal to half my wizard level (rounded up). When I cast it, it has the following changes:",
				"   \u2022 The spell lasts for a number of hours equal to my proficiency bonus, instead of 1 hour.",
				"   \u2022 My servant appears as a visible origami version of itself.",
				"   \u2022 My servant is immune to poison and psychic damage.",
				"   \u2022 My servant can move through a space as narrow as 1 inch wide without squeezing.",
				"   \u2022 When I use my bonus action to command a servant, I can issue a unique command to each servant I have created as part of the same bonus action.",
				"   \u2022 My servant falls at a rate of 60 feet per round and takes no falling damage.",
				"   \u2022 My servant can see invisible creatures and objects as if they were visible.",
				"   \u2022 As an action, while my servant is within 100 feet of me, I can see through my servant’s eyes and hear what it hears until the start of my next turn, gaining the benefits of any special senses that the servant has. During this time, I am deaf and blind with regard to my own senses."
			]),
			spellcastingBonus: [{
				name: "Origami Servant",
				spells: ["unseen servant"],
				selection: ["unseen servant"],
				times: 1,
				firstCol: "markedbox",
			}],
			toNotesPage: [{
				name : "Origami Servant",
				source : [["OTftTG", 153]],
				note: desc([
					"Beginning at 10th level, I learn the Unseen Servant spell; I always have it prepared, and it doesn’t count against the number of spells I can prepare each day. In addition, I can cast it without expending a spell slot, but the maximum number of servants I can have at a time is equal to half my wizard level (rounded up). When I cast it, it has the following changes:",
					"   \u2022 The spell lasts for a number of hours equal to my proficiency bonus, instead of 1 hour.",
					"   \u2022 My servant appears as a visible origami version of itself.",
					"   \u2022 My servant is immune to poison and psychic damage.",
					"   \u2022 My servant can move through a space as narrow as 1 inch wide without squeezing.",
					"   \u2022 When I use my bonus action to command a servant, I can issue a unique command to each servant I have created as part of the same bonus action.",
					"   \u2022 My servant falls at a rate of 60 feet per round and takes no falling damage.",
					"   \u2022 My servant can see invisible creatures and objects as if they were visible.",
					"   \u2022 As an action, while my servant is within 100 feet of me, I can see through my servant’s eyes and hear what it hears until the start of my next turn, gaining the benefits of any special senses that the servant has. During this time, I am deaf and blind with regard to my own senses."
				]),
			}],
		},
		"subclassfeature14" : {
			name : "Arcane Refresh",
			source : [["OTftTG", 153]],
			minlevel : 14,
			description : desc([
				"At 14th level, my origami constructs return the magic I lent them when I imbued them with life whenever they are destroyed. When one of my constructs is destroyed, I can regain 10 hit points or regain a spell slot of 2nd level or lower (my choice).",
				"Additionally, when one of my constructs would take damage, I can use my reaction to negate the damage against it. Once I use this ability, I can’t do so again until I finish a long rest."
			]),	
			action : ["reaction", ""],
			usages : 1,
			recovery : "long rest",						
		},
	},
});


/*
 * Backgrounds
 */

BackgroundList["apprentice of aha"] = {
	regExpSearch: /^(?=.*apprentice)(?=.*aha).*$/i,
	name : "Apprentice of AHA",
	source : [["OTftTG", 154]],
	skills : ["History", "Investigation"],
	toolProfs : [["Choose one Artisan’s Tools"]],
	equipleft : [
		["Explorer’s Pack", 1, 55],
		["Candle", 5, ""],
		["Shovel", 1, 5],
		["Signal Whistle", 1, ""],
		["Journal full of old research from my time as an apprentice", 1, ""],
		["Gold Flowers", 13, ""],
	],
	equipright : [""],
	feature : "Wise Reputation",
	trait : [
		""
	],
	ideal : [
		""
	],
	bond : [
		""
	],
	flaw : [
		""
	],
};
BackgroundFeatureList["wise reputation"] = {  
	description : "Due to my time spent in the field I’ve met or are familiar with many of the intellectuals and creative minds in Obojima’s villages.", 
	source : [["OTftTG", 154]],
};

BackgroundList["apprentice diver"] = {
	regExpSearch: /^(?=.*apprentice)(?=.*diver).*$/i,
	name : "Apprentice Diver",
	source : [["OTftTG", 154]],
	skills : ["Athletics", "Nature"],
	toolProfs : [["Divers Armor"]],
	equipleft : [
		["Explorer’s Pack", 1, 55],
		["Chest", 1, 25],
		["Grappling Hook", 1, 4],
		["Fishing Tackle", 1, 4],
		["Faction coin marking which lodge I trained under", 1, ""],
		["Gold Flowers", 11, ""],
	],
	equipright : [""],
	feature : "Once A Member Always A Member",
	trait : [
		""
	],
	ideal : [
		""
	],
	bond : [
		""
	],
	flaw : [
		""
	],
};
BackgroundFeatureList["once a member always a member"] = {  
	description : "When visiting either of the Coastal Diver’s Lodges, I always have free room and board. Additionally, the lodge will assist me in my endeavors as best they can.", 
	source : [["OTftTG", 154]],
};

BackgroundList["apprentice witch"] = {
	regExpSearch: /^(?=.*apprentice)(?=.*witch).*$/i,
	name : "Apprentice Witch",
	source : [["OTftTG", 154]],
	skills : ["Arcana", "Survival"],
	toolProfs : [["Alchemist’s supplies"]],
	equipleft : [
		["Alchemist’s Supplies", 1, 8],
		["Common ingredients (which I know the attributes for)", 9, ""],
		["Hat or robe from my time as an apprentice", 1, ""],
		["Gold Flowers", 9, ""],
	],
	equipright : [""],
	feature : "Sibling Student",
	trait : [
		""
	],
	ideal : [
		""
	],
	bond : [
		""
	],
	flaw : [
		""
	],
};
BackgroundFeatureList["sibling student"] = {  
	description : "I have a close and trustworthy friend who studied under the same witch as me and has now made it into one of the six main covens. When needed, they act as my liaison to the coven or covens they’re connected to.",
	source : [["OTftTG", 154]],
};

BackgroundList["courier brigade cadet"] = {
	regExpSearch: /^(?=.*courier)(?=.*brigade)(?=.*cadet).*$/i,
	name : "Courier Brigade Cadet",
	source : [["OTftTG", 155]],
	skills : ["Stealth", "Survival"],
	toolProfs : [["Cobbler’s tools"]],
	equipleft : [
		["Explorer’s Pack", 1, 55],
		["Cobbler’s Tools", 1, 5],
		["Climber's Kit", 1, 12],
		["Hooded Lantern", 1, 2],
		["Old uniform issued by the courier brigade", 1, ""],
		["Gold Flowers", 11, ""],
	],
	equipright : [""],
	feature : "Pocket Map",
	trait : [
		""
	],
	ideal : [
		""
	],
	bond : [
		""
	],
	flaw : [
		""
	],
};
BackgroundFeatureList["pocket map"] = {  
	description : "I have an old worn out pocket map of the island from my time as a cadet. The map is inscribed with a handful of paths known only to the Courier Brigade.",
	source : [["OTftTG", 155]],
};

BackgroundList["mechanic"] = {
	regExpSearch: /^(?=.*mechanic).*$/i,
	name : "Mechanic",
	source : [["OTftTG", 155]],
	skills : ["Mechanics", "Salvage"],
	toolProfs : [["Artisan’s Tools of my choice", 3]],
	equipleft : [
		["Explorer’s Pack", 1, 55],
		["Abacus", 1, 2],
		["Ball Bearings (1000)", 1, 2],
		["Block and Tackle", 1, 5],
		["Oil", 1, 1],
		["Unfinished Mechanical Trinket", 1, ""],
		["Gold Flowers", 15, ""],
	],
	equipright : [""],
	feature : "Machine Whisperer",
	trait : [
		""
	],
	ideal : [
		""
	],
	bond : [
		""
	],
	flaw : [
		""
	],
};
BackgroundFeatureList["machine whisperer"] = {  
	description : "I have a knack for machines and can tell what state one is in by spending a few minutes with it. Machines that have been sundered are unusable and should be scrapped for parts. Machines in disrepair could potentially function again if someone fixed them up, and functioning machines do just that. Function!",
	source : [["OTftTG", 155]],
};


/*
 * Weapons
 */

/*
 * Simple Melee
 */

// Boat Oar
WeaponsList["boat oar"] = {	
	name : "Boat Oar",
	source : [["OTftTG", 158]],	
	regExpSearch : /^(?=.*boat)(?=.*oar).*$/i,
	type : "Simple",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 10, "bludgeoning"],
	range : "Melee",
	description : "Two-handed",
	list : "melee",
	weight : 8,
};

// Boomerang
WeaponsList["boomerang"] = {	
	name : "Boomerang",
	source : [["OTftTG", 158]],	
	regExpSearch : /^(?=.*boomerang).*$/i,
	type : "Simple",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 6, "slashing"],
	range : "Melee",
	description : "Finesse, thrown (60/180 ft.), returns to unoccupied space adjacent to thrower, reaction to catch",
	tooltip : "Special: When thrown, the boomerang returns to an unoccupied space adjacent to me. As a reaction, I can choose to catch it.",
	special : true,
	list : "melee",
	weight : 1,
};

// Butterfly Staff
WeaponsList["butterfly staff"] = {	
	name : "Butterfly Staff",
	source : [["OTftTG", 158]],	
	regExpSearch : /^(?=.*butterfly)(?=.*staff).*$/i,
	type : "Simple",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 4, "bludgeoning"],
	range : "Melee",
	description : "Finesse, versatile (1d6), can grapple a Small or smaller creature up to 10 ft away (uses attack mod)",
	tooltip : "Special: I can use the staff to grapple a Small or smaller creature that is up to 10 feet away from me. When I do so, I use my attack modifier for the weapon in place of my Strength (Athletics) check. While grappling a creature in this way, I can’t make another attack with the butterfly staff.",
	special : true,
	list : "melee",
	weight : 1,
};

// Fan
WeaponsList["fan"] = {	
	name : "Fan",
	source : [["OTftTG", 158]],	
	regExpSearch : /^(?=.*fan).*$/i,
	type : "Simple",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 4, "slashing"],
	range : "Melee",
	description : "Finesse, light, reaction to reduce incoming dmg by DEX mod when hit by a ranged attack",
	tooltip : "Special: When I am hit by a ranged weapon attack, I can use my reaction to reduce the incoming damage of the attack by a number equal to my Dexterity modifier.",
	special : true,
	list : "melee",
	weight : 0.25,
};

// Frying Pan
WeaponsList["frying pan"] = {	
	name : "Frying Pan",
	source : [["OTftTG", 158]],	
	regExpSearch : /^(?=.*frying)(?=.*pan).*$/i,
	type : "Simple",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 6, "bludgeoning"],
	range : "Melee",
	description : "Versatile (1d8), bonus action +1 AC til end of next turn if not wearing a shield",
	tooltip : "Special: When wielding a frying pan, I can use my bonus action to add a +1 bonus to my AC until the end of my next turn. I can’t gain this benefit while wielding a shield.",
	special : true,
	list : "melee",
	weight : 6,
};

// Iron Tea Kettle
WeaponsList["iron tea kettle"] = {	
	name : "Iron Tea Kettle",
	source : [["OTftTG", 158]],	
	regExpSearch : /^(?=.*iron)(?=.*tea)(?=.*kettle).*$/i,
	type : "Simple",
	ability : 1,
	abilitytodamage : true,
	damage : [2, 4, "bludgeoning"],
	range : "Melee",
	description : "",
	list : "melee",
	weight : 2,
};

// Shovel
WeaponsList["shovel"] = {	
	name : "Shovel",
	source : [["OTftTG", 158]],	
	regExpSearch : /^(?=.*shovel).*$/i,
	type : "Simple",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 6, "bludgeoning/slashing"],
	range : "Melee",
	description : "Versatile (1d8), does either bldgn or slashing dmg",
	list : "melee",
	weight : 4,
};

// Umbrella
WeaponsList["umbrella"] = {	
	name : "Umbrella",
	source : [["OTftTG", 158]],	
	regExpSearch : /^(?=.*umbrella).*$/i,
	type : "Simple",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 4, "bludgeoning"],
	range : "Melee",
	description : "Finesse, can use reaction to reduce falling damage",
	tooltip : "Special: Whenever I take falling damage while wielding an umbrella, I can use my reaction to reduce the damage by a number equal to twice my proficiency bonus.",
	special : true,
	list : "melee",
	weight : 2,
};

/*
 * Martial Melee
 */

// Bellow Flute
WeaponsList["bellow flute"] = {	
	name : "Bellow Flute",
	source : [["OTftTG", 159]],	
	regExpSearch : /^(?=.*bellow)(?=.*flute).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 6, "bludgeoning"],
	range : "Melee",
	description : "Finesse",
	list : "melee",
	weight : 0.25,
};

// Candlemaker’s Club
WeaponsList["candlemaker’s club"] = {	
	name : "Candlemaker’s Club",
	source : [["OTftTG", 159]],	
	regExpSearch : /^(?=.*candlemaker)(?=.*club).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [2, 6, "bludgeoning"],
	range : "Melee",
	description : "Heavy, two-handed, bonus action to extinguish flame within 5 ft",
	tooltip : "Special: While wielding a candlemaker’s club, I can use a bonus action to extinguish a flame within 5 feet of me.",
	special : true,
	list : "melee",
	weight : 10,
};

// Dandelion Spear
WeaponsList["dandelion spear"] = {	
	name : "Dandelion Spear",
	source : [["OTftTG", 159]],	
	regExpSearch : /^(?=.*dandelion)(?=.*spear).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 8, "piercing"],
	range : "Melee",
	description : "Heavy, reach, versatile (1d10)",
	list : "melee",
	weight : 6,
};

// Drive Shaft
WeaponsList["drive shaft"] = {	
	name : "Drive Shaft",
	source : [["OTftTG", 159]],	
	regExpSearch : /^(?=.*drive)(?=.*shaft).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [3, 4, "bludgeoning"],
	range : "Melee",
	description : "Heavy, two-handed",
	list : "melee",
	weight : 20,
};

// Field Spear
WeaponsList["field spear"] = {	
	name : "Field Spear",
	source : [["OTftTG", 159]],	
	regExpSearch : /^(?=.*field)(?=.*spear).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 6, "slashing"],
	range : "Melee",
	description : "Finesse, thrown (30/90 ft.), versatile (1d8)",
	list : "melee",
	weight : 1,
};

// Lom Lom Dagger
WeaponsList["lom lom dagger"] = {	
	name : "Lom Lom Dagger",
	source : [["OTftTG", 159]],	
	regExpSearch : /^(?=.*lom)(?=.*dagger).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 6, "slashing"],
	range : "Melee",
	description : "Finesse, light, thrown (20/60 ft.)",
	list : "melee",
	weight : 1,
};

// Secret Stone Sword
WeaponsList["secret stone sword"] = {	
	name : "Secret Stone Sword",
	source : [["OTftTG", 159]],	
	regExpSearch : /^(?=.*secret)(?=.*stone)(?=.*sword).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 6, "bludgeoning"],
	range : "Melee",
	description : "Light, versatile (1d8)",
	list : "melee",
	weight : 1,
};

// Shepherd Crook
WeaponsList["shepherd crook"] = {	
	name : "Shepherd Crook",
	source : [["OTftTG", 159]],	
	regExpSearch : /^(?=.*shepherd)(?=.*crook).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 6, "bludgeoning"],
	range : "Melee",
	description : "Reach, bonus action to make a conested STR check against crea within range, moved to a spot within 5 ft of me",
	tooltip : "Special: As a bonus action, I can make a contested Strength check against a creature within range, moving the target to another unoccupied space within 5 feet of me on a success.",
	special : true,
	list : "melee",
	weight : 4,
};

// Tapper Sack
WeaponsList["tapper sack"] = {	
	name : "Tapper Sack",
	source : [["OTftTG", 159]],	
	regExpSearch : /^(?=.*tapper)(?=.*sack).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 6, "bludgeoning"],
	range : "Melee",
	description : "Reach, versatile (1d8)",
	list : "melee",
	weight : 5,
};

// Vertebrae Sword
WeaponsList["vertebrae sword"] = {	
	name : "Vertebrae Sword",
	source : [["OTftTG", 159]],	
	regExpSearch : /^(?=.*vertebrae)(?=.*sword).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 8, "piercing"],
	range : "Melee",
	description : "Reach, bonus action to + 1d8 piercing dmg max 5 times before unusable",
	tooltip : "Special: When I successfully hit a creature with a vertebrae sword, I can use a bonus action to rake and twist the weapon, breaking off some of the sword's boney barbs and dealing an extra 1d8 piercing damage. The vertebrae sword can only be used in this way 5 times before it becomes unusable as a weapon.",
	special : true,
	list : "melee",
	weight : 1,
};

// Vaulter’s Axe
WeaponsList["vaulter’s axe"] = {	
	name : "Vaulter’s Axe",
	source : [["OTftTG", 159]],	
	regExpSearch : /^(?=.*vaulter)(?=.*axe).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 10, "slashing"],
	range : "Melee",
	description : "Heavy, reach, two-handed, as part of movement can vault 15 ft over a crea or obstacle ignoring nonmagical diff terrain",
	tooltip : "Special: As part of my movement, I can use the vaulter's axe to launch myself 15 feet over a creature or obstacle. Using my movement in this way ignores nonmagical difficult terrain.",
	special : true,
	list : "melee",
	weight : 15,
};

/*
 * Martial Ranged
 */

// Nakudama Bubble Rod
WeaponsList["nakudama bubble rod"] = {	
	name : "Nakudama Bubble Rod",
	source : [["OTftTG", 159]],	
	regExpSearch : /^(?=.*nakudama)(?=.*bubble)(?=.*rod).*$/i,
	type : "Martial",
	ability : 2,
	abilitytodamage : true,
	damage : [2, 4, "bludgeoning"],
	range : "50/200 ft",
	description : "Ammunition",
	list : "ranged",
	weight : 1,
	ammo : "bolt",
};


/*
 * Feats
 */

FeatsList["boomerang expert"] = {
	name : "Boomerang Expert",
	source : [["OTftTG", 162]],
	descriptionFull : "I gain the following benefits. \n \u2022 The damage die for the boomerang is now a d8 for me. \n \u2022 Attacking at long range doesn't impose disadvantage on ranged attack rolls made with a boomerang. \n \u2022 I automatically catch the boomerang after throwing it without needing to use my reaction.",
	description : "Damage die for Boomerang is d8. Attacking at long range does not impose Disadvantage for Boomerang. I automatically catch the Boomerang after throwing it without using my reaction.",
};

FeatsList["bumbling fool"] = {
	name : "Bumbling Fool",
	source : [["OTftTG", 162]],
	descriptionFull : 
		"I have a peculiar way of fumbling through life that somehow always works out in my favor, succeeding in situations through what others might view as accidental luck. When I fail an ability check and roll a number on the die equal to half my level (rounded up) or lower, I can choose to replace the die roll with a 15 instead. I can use this ability three times, and I regain all expended uses when I finish a long rest.",
	description : "When I fail an ability check and roll a number on the die equal to half my level (rounded up) or lower, I can choose to replace the die roll with a 15 instead. I can use this ability three times, and I regain all expended uses when I finish a long rest.",
	limfeaname : "Bumbling Fool",
	usages: "3",
	recovery : "long rest",
};

FeatsList["canden and moon’s master cut"] = {
	name : "Canden and Moon’s Master Cut",
	source : [["OTftTG", 162]],
	prerequisite : "Must have beaten a master at Master Canden and Moon’s Sword School",
	descriptionFull : 
		"Having trained with the masters of the first sword school of Obojima, I’ve picked up a handful of useful skills. I gain the following benefits:"+
		" \u2022 My walking speed increases by 5 feet."+
		" \u2022 Immediately after rolling initiative, I can use my reaction before the first turn of combat to draw a weapon and move up to half my speed (rounded up). If I end this movement within reach of another creature, I can use the weapon to make one melee attack against that creature."+
		" \u2022 When I am hit by an attack, I can use a reaction to assume a defensive stance, allowing me to fend off incoming strikes. Until the start of my next turn, I have a +5 bonus to AC, including against the triggering attack. Once I assume this stance, I can’t do so again until you finish a long rest.",
	description : "My walking speed increases by 5 ft. After rolling init, reaction to move up to half my spd (round up), if I end this within reach of another creature, I can make one melee attack against that creature. Once per long rest, after being hit I can use a reaction to assume a defensive stance, +5 AC until start of my next turn.",
	speed : { walk : { spd : "+5", enc : "+5" } },
	action : [["reaction", ""],["reaction", "Defensive Stance"]],
	limfeaname : "Defensive Stance",
	usages: "1",
	recovery : "long rest",
};

FeatsList["cloud hopper"] = {
	name : "Cloud Hopper",
	source : [["OTftTG", 162]],
	descriptionFull : 
		"My exposure to the great wind spirit has changed me. I gain the following benefits:"+
		" \u2022 When I move on my turn, I can choose to conjure tiny clouds below my feet, allowing me to move into unoccupied spaces in the air. I can move a number of feet in this way equal to 5 × my proficiency bonus before the clouds stop appearing. Ending this movement while in the air causes me to fall as normal."+
		" \u2022 I learn the Fog Cloud and Gust of Wind spells, each of which I can cast once without expending a spell slot. I regain the ability to cast these two spells in this way when I finish a long rest. I can also cast the spells using spell slots I have of the appropriate level. My spellcasting ability for this spell is Intelligence, Wisdom, or Charisma (my choice).",
	description : 
		"When I move, I can conjure tiny clouds that allow me to move through 5 x PB ft in air. I fall as normal if I end this movement in air. I learn Fog Cloud and Gust of Wind which I can cast once a long rest without spell slots. I can also cast these spells with the appropriate spell slot, my spell casting ability is either INT, WIS, or CHA. (my choice)",
	spellcastingBonus: [{
		name: "Cloud Hopper",
		spells: ["fog cloud", "gust of wind"],
		selection: ["fog cloud", "gust of wind"],
		times: 2,
		firstCol: "oncelr",
	}],	
};

FeatsList["coven witch"] = {
	name : "Coven Witch",
	source : [["OTftTG", 162]],
	prerequisite : "Must be a member of a witches coven",
	descriptionFull : 
		"I become an official member of a witches coven. I gain the following benefits:"+
		" \u2022 Increase my Intelligence or Wisdom score by 1, to a maximum of 20."+
		" \u2022 I learn two random common and uncommon potion recipes from my coven."+
		" \u2022 I learn two 1st-level spells of my choice. The 1st-level spells must be from the divination, conjuration, or transmutation school of magic. I can cast each of these spells once without expending a spell slot. I regain the ability to cast these two spells in this way when I finish a long rest. I can also cast these spells using spell slots I have of the appropriate level. The spells’ spellcasting ability is the ability increased by this feat.",
	description : 
		"I learn two random common and uncommon potion recipes from my coven. I learn two 1st lvl spells of my choice from the divination, conjuration, or transmutation school of magic which I can cast once a long rest without spell slots. I can also cast these spells with the appropriate spell slot, my spell casting ability is the ability increased by this feat. [+1 Intelligence or Wisdom]",
	spellcastingBonus: [{
		name : "Coven Witch",
		'class': "any",
		school : ["Div", "Conj", "Trans"],
		level : [1, 1],
		times: 2,
		firstCol: "oncelr",
	}],	
	scorestxt : "+1 Intelligence or Wisdom",
};

FeatsList["forager"] = {
	name : "Forager",
	source : [["OTftTG", 162]],
	descriptionFull : 
		"I’ve spent countless hours exploring the island searching for ingredients. I gain the following benefits:"+
		" \u2022 Increase my Wisdom score by 1, to a maximum of 20."+
		" \u2022 I gain proficiency in the Survival skill. If I already have this proficiency, I instead gain expertise with that skill, which means my proficiency bonus is doubled for any ability check I make using it."+
		" \u2022 I produce twice the number of common or uncommon ingredients when foraging.",
	description : 
		"I gain proficiency in Survival or expertise if I already have proficiency. I produce twice the number of common or uncommn ingredients when foraging. [+1 Wisdom]",
	scores : [0, 0, 0, 0, 1, 0],
	skills : ["Survival", "increment"],
};

FeatsList["freediver"] = {
	name : "Freediver",
	source : [["OTftTG", 163]],
	descriptionFull : 
		"I have undergone extensive underwater training. I gain the following benefits:"+
		" \u2022 Increase my Constitution score by 1, to a maximum of 20."+
		" \u2022 I gain a swimming speed equal to twice my Constitution score (rounded up to the nearest 5 feet). If I already have a swimming speed, it instead increases by 10 feet."+
		" \u2022 I triple my Constitution modifier when calculating how long I can hold my breath."+
		" \u2022 I gain resistance to cold damage.",
	description : 
		"I gain a swim speed equal to 2 * CON score (round up 5 ft). If I already have a swim speed, it is increased by 10 ft instead. I triple my CON mod when calculating how long I can hold my breath. I gain resistance to Cold dmg. [+1 Constitution]",
	scores : [0, 0, 1, 0, 0, 0],
	dmgres : ["Cold"], 
};

FeatsList["group combatant"] = {
	name : "Group Combatant",
	source : [["OTftTG", 163]],
	descriptionFull : 
		"I’ve honed my fighting skills and are just as comfortable fighting a group of enemies as I am facing a combatant one on one. I gain the following benefits:"+
		" \u2022 Bludgeoning, piercing, and slashing damage that I take from nonmagical attacks is reduced by 2, to a minimum of 1."+
		" \u2022 Creatures don’t gain advantage on attacks made against me using the optional flanking rules."+
		" \u2022 After I provoke an opportunity attack on my turn, my movement doesn't provoke opportunity attacks for the rest of the turn.",
	description : 
		"Nonmagical Blud, Pierc, Slash dmg I take is reduced by 2, minimum 1. Creatures don't gain Adv from flanking me. After I provoke an OA, my movement doesn't provoke OA for the rest of the turn.",
};

FeatsList["light foot"] = {
	name : "Light Foot",
	source : [["OTftTG", 163]],
	descriptionFull : 
		"I am exceptionally speedy and agile. I gain the following benefits:"+
		" \u2022 While I am not wearing heavy armor, I gain a +1 bonus to my AC."+
		" \u2022 Whenever I take the Attack action, I can forgo one of my attacks to move up to half my speed."+
		" \u2022 Nonmagical difficult terrain costs me no extra movement."+
		" \u2022 I can move through a hostile creature's space, regardless of its size.",		
	description : 
		"While I am not wearing heavy armor, I gain a +1 bonus to my AC. Whenever I take the Attack action, I can forgo one of my attacks to move up to half my speed. Nonmagical difficult terrain costs me no extra movement. I can move through a hostile creature's space, regardless of its size.",
	extraAC : [{
		mod : 1,
		magic : true,
		text : "While I am not wearing heavy armor, I gain a +1 bonus to my AC.",
		stopeval : function (v) { return v.heavyArmor; }
	}],
};

FeatsList["magically mischievous"] = {
	name : "Magically Mischievous",
	source : [["OTftTG", 163]],
	descriptionFull : 
		"I’ve picked up a few magical tricks that assist my nefarious skills. I gain the following benefits:"+
		" \u2022 I gain proficiency in the Sleight of Hand skill. If I already have proficiency, I gain expertise instead, which means my proficiency bonus is doubled for any ability check I make with it."+
		" \u2022 When I succeed on a Dexterity (Sleight of Hand) check to steal something, I can magically turn the object I stole invisible as part of the same action, as if I had cast the Obscure Object spell. The object must be small enough to fit in the palm of my hand, and this effect lasts for 1 minute. I can use this ability a number of times per day equal to my proficiency bonus, and I regain all expended uses when I finish a long rest.",		
	description : 
		"I gain proficiency in Sleight of Hand or expertise if I already have proficiency. When I suceed on a Sleight of Hand check to steal something, I can magically turn the stolen object invisible as if I had cast the Obscure Object spell, the object must be small to fit the palm of my hand and this effect lasts for a minute. I can do this a number of times equal to my proficiency bonus, regaining on a long rest.",
	skills : ["Sleight of Hand", "increment"],
	limfeaname : "Magically Mischievous",
	usages : "Prof Bonus per ",
	usagescalc : "event.value = How('Proficiency Bonus');",
	recovery : "long rest",
};

FeatsList["member of aha"] = {
	name : "Member of AHA",
	source : [["OTftTG", 163]],
	prerequisite : "Must be a member of AHA",
	descriptionFull : 
		"I have become an official member of AHA. I gain the following benefits:"+
		" \u2022 Increase my Intelligence score by 1, to a maximum of 20."+
		" \u2022 I learn the Jolt cantrip. I also learn one of the following spells of my choice: Comprehend Languages, Detect Magic, Identify, or Illusory Script. I can cast the chosen spell once without expending a spell slot, and I must finish a long rest before I can cast it in this way again. I can also cast the spell using any spell slots I have. Intelligence is my spellcasting ability for these spells.",
	description : 
		"I learn that Jolt cantrip, and one spell from the following: Comprehend Languages, Detect Magic, Identify, or Illusory Script. I can cast the chosen spell without expending a spell slot once per long rest or with an appropriate spell slot. Intelligence is my spell casting ability for these spells. [+1 Intelligence]",
	spellcastingAbility : 4,
	spellcastingBonus: [{
		name : "Member of AHA",
		spells: ["jolt"],
		selection: ["jolt"],
		times: 1,
	},{
		name : "Member of AHA",
		spells: ["comprehend languages", "detect magic", "identify", "illusory script"],
		times: 1,
		firstCol: "oncelr",
	}],				
	scores : [0, 0, 0, 1, 0, 0],
};

FeatsList["minor corruption"] = {
	name : "Minor Corruption",
	source : [["OTftTG", 163]],
	descriptionFull : 
		"I was exposed to the Corruption, a dark magic that's poisoning the island. It’s now begun to alter me as well. I gain the following benefits:"+
		" \u2022 I gain a +1 bonus to AC while I have less than half of my hit points remaining."+
		" \u2022 I can draw upon the Corruption within me to channel my magical power. I don’t need to use a spellcasting focus for my spells, allowing me to ignore the material components specified for the spell, unless the component indicates a cost or is consumed by the spell."+
		" \u2022 As a reaction, when I take damage, I can temporarily negate an amount of the damage equal to three times my level; I take any excess damage as normal. At the end of my next turn, I must make a Constitution saving throw, the DC of which is equal to 10 or one-third the damage I would have taken, whichever number is higher. On a failed save, I immediately take the negated damage. I must continue to make a Constitution saving throw at the end of each of my turns for 1 minute or until I fail the save, at which point I take the negated damage. Once I take this reaction, I can’t do so again until I finish a long rest.",		
	description : 
		"I gain +1 AC when I have less than half my HP. I can ignore the Material components of spells, unless the component has a cost or is consumed by the spell. Once per long rest as a reaction, I can temporarily negate dmg = 3 * my Lvl, taking excess dmg as normal. At the end of my next turns for 1 min, CON save (DC 10 or 1/3 of dmg I would have taken, whichever higher). Upon failure, I take the negated damage.",
	action : ["reaction", "Minor Corruption"],
	usages : 1, 	
	recovery : "long rest", 
};

FeatsList["nakudama’s electric bloodline"] = {
	name : "Nakudama’s Electric Bloodline",
	source : [["OTftTG", 164]],
	prerequisite : "Must be a Nakudama",
	prereqeval : function(v) { return CurrentRace.known.indexOf('nakudama') !== -1; },
	descriptionFull : 
		"Although it's uncommon in today's day and age, some Nakudama are able to awaken the now dormant skills held by their warring ancestors. I gain the following benefits:"+
		" \u2022 I have resistance to lightning damage."+
		" \u2022 I have an electrified tongue that I can use to make unarmed strikes. It has the finesse and reach properties, and when I hit with it, the strike deals lightning damage equal to 1d6 + my Strength or Dexterity modifier, instead of the bludgeoning damage normal for an unarmed strike. The damage from my tongue increases when I reach 5th level (1d8), 11th level (1d10), and 17th level (1d12)."+
		" \u2022 When I become grappled by a creature, I can use my reaction to force the creature to make a Constitution saving throw (DC 8 + my Constitution modifier + my proficiency bonus). On a failed save, the creature takes 1d10 lightning damage and the grapple ends.",
	description : 
		"I have resistance to lightning damage. I have an electrified tongue that I can make unarmed strikes with that deals 1d6 + STR/DEX Lighting dmg. The dmg increases as I level up. When I'm grappled, I can use a reaction to force the grappler to make a CON save (DC 8 + CON mod + PB), crea takes 1d10 Lightning and grapple ends.",
	dmgres : ["Lightning"],
	action : ["reaction", "Nakudama’s Electric Bloodline"],
	weaponOptions : [{
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*electrified)(?=.*tongue).*$/i,
		name : "Electrified Tongue",
		source : [["OTftTG", 164]],
		description : "Finesse, reach",			
		selectNow : true,
	}],	
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (v.baseWeaponName == "unarmed strike") {
					var aNakudamaDie = function (n) {
						return n < 5 ? 6 : n < 11 ? 8 : n < 17 ? 10 : 12;
					}(CurrentRace.level);
						fields.Damage_Die = '1d' + aNakudamaDie;
				}
			},
			"",
			5
		]
	},
};

FeatsList["nakudama’s toxin bloodline"] = {
	name : "Nakudama’s Toxin Bloodline",
	source : [["OTftTG", 164]],
	prerequisite : "Must be a Nakudama",
	prereqeval : function(v) { return CurrentRace.known.indexOf('nakudama') !== -1; },
	descriptionFull : 
		"Although it's uncommon in today's day and age, some Nakudama are able to awaken the now dormant skills held by their warring ancestors. I gain the following benefits:"+
		" \u2022 I have resistance to poison damage."+
		" \u2022 I have advantage on saving throws against being poisoned."+
		" \u2022 I can cause my cheeks to swell and bubble out as my mouth fills with liquid poison. As an action, I can spit several globs of poison in quick succession, targeting a number of creatures equal to my proficiency bonus. Each target must be within 30 feet of me and must make a Constitution saving throw (DC 8 + my Constitution modifier + my proficiency bonus). A target takes poison damage equal to 1d8 + my proficiency bonus on a failed save, or half as much damage on a successful one.",
	description : 
		"I have resistance to poison damage and Adv for saves against Poisoned. As an action, I can spit poison at a number of crea equal to my Prof Bonus. Each target makes a CON save (DC 8 + CON mod + PB), 1d8 + PB Poison dmg; half on success",
	dmgres : ["Poison"],
	savetxt: "Adv. against Poisoned.",
	action : ["action", "Nakudama’s Toxin Bloodline"],
	weaponOptions : [{
		regExpSearch : /^(?=.*nakudama)(?=.*toxin)(?=.*bloodline).*$/i,
		name : "Nakudama’s Toxin Bloodline",
		source : [["OTftTG", 164]],
		type : "Natural",
		ability : 3,
		abilitytodamage : false,
		damage : [1, 8, "poison"],
		range : "30 ft",
		description : "Target up to PB number of targets, CON save; half on success",
		dc : true,	
		modifiers : ["dc", "Prof"],		
		selectNow : true,
	}],	
};

FeatsList["postal knight"] = {
	name : "Postal Knight",
	source : [["OTftTG", 164]],
	prerequisite : "Must be a member of the Courier Brigade",
	descriptionFull : 
		"I have trained as a member of the Courier Brigade. I gain the following benefits:"+
		" \u2022 Increase my Constitution or Wisdom score by 1, to a maximum of 20."+
		" \u2022 I gain proficiency in the Athletics and Survival skills."+
		" \u2022 Exhaustion doesn't cause me to have disadvantage on ability checks.",	
	description : 
		"I gain proficiency in the Athletics and Survival skills. Exhaustion doesn't cause me to have disadvantage on ability checks. [+1 Constitution or Wisdom]",			
	skills : ["Athletics", "Survival"],
	scorestxt : "+1 Constitution or Wisdom",
};

FeatsList["potion brewer"] = {
	name : "Potion Brewer",
	source : [["OTftTG", 164]],
	descriptionFull : 
		"My expertise and understanding of magical potions and elixirs allow me to finesse ingredients and recipes to my specifications. I gain the following benefits:"+
		" \u2022 When brewing potions, I can choose to take the second-highest ingredient attribute number from my potion recipe, instead of the first."+
		" \u2022 When brewing a potion, I can roll percentile dice. If I roll a number equal to or lower than my level, I create two potions instead of one.",	
	description : 
		"When brewing potions, I can choose to take the second-highest ingredient attribute number from my potion recipe, instead of the first. When brewing a potion, I can roll percentile dice. If I roll a number equal to or lower than my level, I create two potions instead of one.",
};

FeatsList["tellu and scale’s master cut"] = {
	name : "Tellu and Scale’s Master Cut",
	source : [["OTftTG", 164]],
	prerequisite : "Must have beaten a master at Master Tellu and Scale’s Sword School",
	descriptionFull : 
		"Having trained with the masters of the valley sword school, I have learned the usefulness of quickly changing between different fighting techniques in the midst of battle. I gain the following benefits:"+
		" \u2022 One Handed. While wielding a versatile weapon in one hand, my quick movements and agile defense allow me to regain ground even when my enemy advances. Once before the start of my next turn when I am missed by a melee attack from a creature within my reach, the attacker takes damage from my weapon equal to twice my proficiency bonus."+
		" \u2022 Two Handed. When wielding a versatile weapon in two hands, my powerful stance allows me to catch my target off guard. Whenever an enemy within my reach makes a melee weapon attack against me and misses, I can use my reaction to attempt to knock the attacker off balance. The target must succeed on a Dexterity saving throw (DC 8 + my Strength modifier + my proficiency bonus) or be knocked prone.",	
	description : 
		"One Handed. Once before the start of my next turn, while wielding a versatile weapon one handed and an enemy within reach misses a melee attack against me, the attacker takes dmg from my weapon equal to 2 * Prof. Two Handed. When wielding a versatile weapon in two hands and an enemy misses a melee weapon attack against me, I can use a reaction to force a DEX save against the attacker (DC 8 + STR mod + PB), or be knocked prone.",
	action : ["reaction", "Tellu and Scale’s Master Cut"],
};

FeatsList["toraf and bolder’s master cut"] = {
	name : "Toraf and Bolder’s Master Cut",
	source : [["OTftTG", 164]],
	prerequisite : "Must have beaten a master at Master Toraf and Bolder’s Sword School",
	descriptionFull : 
		"Having trained with the masters of the mountain sword school, I’ve learned how to pull off difficult weapon maneuvers which allow me to target specific parts of a creature's anatomy. I gain the following benefits:"+
		" \u2022 Head Strike. Before I make a melee attack with a weapon that I am proficient with, I can choose to take a −5 penalty to the attack roll. If the attack hits, the target has disadvantage on the next attack roll it makes before the end of its next turn."+
		" \u2022 Torso Strike. Before I make a melee attack with a weapon that I am proficient with, I can choose to take a −5 penalty to the attack roll. If the attack hits, the target can’t speak until the start of my next turn, after which it is immune to the effects of Torso Strike for the next minute."+
		" \u2022 Leg Strike. Before I make a melee attack with a weapon that I am proficient with, you can choose to take a −5 penalty to the attack roll. If the attack hits, the target's speed is reduced by 10 feet (to a minimum speed of 10 feet). This effect lasts until the start of my next turn."+
		"I can only use one of these strikes per attack.",
	description : 
		"Each one of these strikes involves taking a -5 penalty to the attack roll in exchange for the following benefits. Head Strike. If hit, DisAdv on target's next attack roll before end of its next turn. Torso Strike. If hit, target can't speak until start of my next turn, target is also immune to Torso Strike for 1 min. Leg Strike. If hit, target speed reduces by 10 ft (to a min of 10 ft) until start of my next turn. One strike per attack.",
};

FeatsList["vocalist arcanist"] = {
	name : "Vocalist Arcanist",
	source : [["OTftTG", 165]],
	descriptionFull : 
		"My unique method of weaving song into magic allows me to enhance my spells through my magical vocals. When I cast a spell that forces a target to make a saving throw or requires me to make a spell attack roll, I can choose to enhance the spell through song. I can wait until after I roll the d20 before deciding to use this, but must decide before the GM says whether the roll succeeds or fails."+
		"When I do so, make a Charisma (Performance) check. The DC for this check is equal to 10 + the spell’s level. On a success, my proficiency bonus is doubled for the spell attack roll or my save DC for that casting of the spell."+
		"Once I have succeeded on this check three times, I can’t use this benefit again until the next dawn.",
	description : 
		"When I cast a spell that forces a target to make a saving throw or requires me to make a spell attack roll, I can choose to enhance the spell through song. I can wait until after I roll the d20 before deciding to use this, but must decide before the GM says whether the roll succeeds or fails. I make a Performance check, DC 10 + the spell’s level. On a success, my Prof Bonus is doubled for the spell attack roll or my save DC for that casting of the spell.",
	usages : "3 success", 	
	recovery : "dawn", 
};

FeatsList["wetland explorer"] = {
	name : "Wetland Explorer",
	source : [["OTftTG", 165]],
	descriptionFull : 
		"My deep knowledge of the dangerous creatures that inhabit the world aid me in both fighting and tracking them. I gain the following benefits:"+
		" \u2022 Select two creature types of my choice. Whenever I roll initiative at the start of a combat that has one or more hostile creatures of the chosen type, I can add my proficiency bonus to the roll. If a creature has magically altered its form to appear as another creature type, I don’t gain this benefit."+
		" \u2022 I gain a +5 bonus to Dexterity (Stealth) and Wisdom (Survival) checks involving one or more of the chosen creature types."+
		" \u2022 I gain a +2 bonus to attack rolls made against a target of the chosen creature type.",
	description : 
		"I choose two creature types, whenever I roll Initiative in a combat that has one or more hostile crea of the same type, I add my PB to my Init. If the crea has magically altered its form to appear as another crea type, this bonus does not apply. I gain a +5 bonus to Stealth or Survival checks involving one or more of the chosen crea type. I gain +2 bonus to attack rolls against the chosen crea type.",
};


/*
 * Hero’s Journey Boon System
 */

FeatsList["acceptance"] = {
	name : "Acceptance",
	source : [["OTftTG", 251]],
	descriptionFull : 
		"Characteristics: Those who have gone through a deep and harrowing journey and came to face a truth so difficult that it hurt to accept it—and yet they did it anyways and eventually came to peace with that truth."+
		"Boon Ability: When making a skill check I can choose to add a +5 bonus to the roll. Once I use this boon, I can’t do so again until I finish a long rest.",
	description : 
		"When making a skill check I can choose to add a +5 bonus to the roll. Once I use this boon, I can’t do so again until I finish a long rest.",
};

FeatsList["envy"] = {
	name : "Envy",
	source : [["OTftTG", 251]],
	descriptionFull : 
		"Characteristics: Someone whose insecurities or past trauma have driven them to desire what others have. This person covets something so much that they’d be willing to do anything to get it, even at the expense of their loved ones."+
		"Boon Ability: Choose an ally creature that I can see and gain proficiency in a skill they have proficiency in. This effect lasts for 1 hour. While I have proficiency in the chosen skill, the ally I copied it from has disadvantage in all checks that use that skill.",
	description : 
		"Choose an ally creature that I can see and gain proficiency in a skill they have proficiency in. This effect lasts for 1 hour. While I have proficiency in the chosen skill, the ally I copied it from has disadvantage in all checks that use that skill.",
};

FeatsList["fearful"] = {
	name : "Fearful",
	source : [["OTftTG", 251]],
	descriptionFull : 
		"Characteristics: Through one impactful moment or a slow build over time, this person has been stricken with a deep and overwhelming fear. This fear now clouds their judgment and overrides their emotions—it controls their life."+
		"Boon Ability: If I am hit by an attack while an ally creature is within 5 feet of me, I can choose to have the ally take the damage instead of me. Once I use this boon, I can’t do so again until I finish a long rest.",
	description : 
		"If I am hit by an attack while an ally creature is within 5 feet of me, I can choose to have the ally take the damage instead of me. Once I use this boon, I can’t do so again until I finish a long rest.",
};

FeatsList["forgiveness"] = {
	name : "Forgiveness",
	source : [["OTftTG", 251]],
	descriptionFull : 
		"Characteristics: By accepting their emotions, this person can let go of their anger and frustrations, forgiving those who’ve wronged them and rekindling the damaged relationship."+
		"Boon Ability: When I am hit by an attack, I can choose to cause all subsequent attacks made by the creature to be made at disadvantage. This effect lasts until the end of my next turn. Once I use this boon, I can’t do so again until I finish a long rest",
	description : 
		"When I am hit by an attack, I can choose to cause all subsequent attacks made by the creature to be made at disadvantage. This effect lasts until the end of my next turn. Once I use this boon, I can’t do so again until I finish a long rest",
};

FeatsList["hate"] = {
	name : "Hate",
	source : [["OTftTG", 251]],
	descriptionFull : 
		"Characteristics: A person full of hate is blind to the effects their actions can have. To fulfill their vendetta they’re willing to alienate and even hurt those close to them."+
		"Boon Ability: When I make an attack roll or skill check I can choose to change the roll to a 20. If I choose to do this all Charisma, Intelligence, and Wisdom checks are made at disadvantage for the next hour. Once I use this boon, I can’t do so again until I finish a long rest",
	description : 
		"When I make an attack roll or skill check I can choose to change the roll to a 20. If I choose to do this all Charisma, Intelligence, and Wisdom checks are made at disadvantage for the next hour. Once I use this boon, I can’t do so again until I finish a long rest",
};

FeatsList["heroic"] = {
	name : "Heroic",
	source : [["OTftTG", 251]],
	descriptionFull : 
		"Characteristics: A person who puts fear behind themselves and stands up in a time of need to the very best they can. Whether they fail or not they give everything they can to do what is right."+
		"Boon Ability: When I would fail a Wisdom, Charisma, or Intelligence saving throw, I can instead choose to succeed. Once I use this boon, I can’t do so again until I finish a long rest.",
	description : 
		"When I would fail a Wisdom, Charisma, or Intelligence saving throw, I can instead choose to succeed. Once I use this boon, I can’t do so again until I finish a long rest.",
};

FeatsList["mercy"] = {
	name : "Mercy",
	source : [["OTftTG", 252]],
	descriptionFull : 
		"Characteristics: Those with the power to deal out judgment onto others but have the compassion and understanding to hold back."+
		"Boon Ability: When I make an attack that would drop a creature below zero hit points, I can choose to forgo the damage, making a Charisma skill check with advantage instead. Once I use this boon, I can’t do so again until I finish a long rest.",
	description : 
		"When I make an attack that would drop a creature below zero hit points, I can choose to forgo the damage, making a Charisma skill check with advantage instead. Once I use this boon, I can’t do so again until I finish a long rest.",
};

FeatsList["shame"] = {
	name : "Shame",
	source : [["OTftTG", 252]],
	descriptionFull : 
		"Characteristics: Devastated by a mistake they’ve made or a circumstance forced on them, this person now hates a part of themselves. This thing feels as if it is out in the open for all to see, and they can’t stand the thought of others judging them for it."+
		"Boon Ability: As a bonus action, all creatures within 60 feet of me must succeed on a Wisdom saving throw or be unable to look in my direction until the end of my next turn. The DC for this boon is equal to 10 + my level. Once I use this boon, I can’t do so again until I finish a long rest",
	description : 
		"As a bonus action, all creatures within 60 feet of me must succeed on a Wisdom saving throw or be unable to look in my direction until the end of my next turn. The DC for this boon is equal to 10 + my level. Once I use this boon, I can’t do so again until I finish a long rest",
	action : ["bonus action", ""],
};

FeatsList["selfishness"] = {
	name : "Selfishness",
	source : [["OTftTG", 252]],
	descriptionFull : 
		"Characteristics: Someone whose actions have worsened the lives of those closest to them. A character that, when they could have done the right thing, chose the path for the betterment of themselves over others."+
		"Boon Ability: When I take damage, I can choose to regain 2 hit points for each ally I have within 30 feet of me. When I do so, each ally suffers a number of Necrotic damage equal to the hit points I recovered. Once I use this boon, I can’t do so again until I finish a long rest",
	description : 
		"When I take damage, I can choose to regain 2 hit points for each ally I have within 30 feet of me. When I do so, each ally suffers a number of Necrotic damage equal to the hit points I recovered. Once I use this boon, I can’t do so again until I finish a long rest",
};

FeatsList["selfless"] = {
	name : "selfless",
	source : [["OTftTG", 252]],
	descriptionFull : 
		"Characteristics: Above all else, this person puts those around them before themselves. They wish to help the people they care the most about, sometimes to the detriment of their well-being."+
		"Boon Ability: On my turn, I can forgo my action, allowing a character that can see or hear me to take an action or move. Once I use this boon, I can’t do so again until I finish a long rest",
	description : 
		"On my turn, I can forgo my action, allowing a character that can see or hear me to take an action or move. Once I use this boon, I can’t do so again until I finish a long rest",
};


/*
 * Magic Items
 */

MagicItemsList["anglerfish helm"] = {
	name : "Anglerfish Helm",
	sortname : "Helm, Anglerfish",
	source : [["OTftTG", 167]],
	type : "wondrous item",
	rarity : "uncommon",
	attunement: true,
	description : 
		"While wearing this helmet, the duration of the Water Breathing spell is doubled when cast on me, and I can cause the helmet’s antenna to shed bright light in a 20-foot radius and dim light for an additional 20 feet. Additionally, I can cast Charm Person from the helmet as a 3rd-level spell. Once I do so, I can’t use this property again until the next dawn.",
	descriptionFull:
		"While wearing this helmet, the duration of the Water Breathing spell is doubled when cast on me, and I can cause the helmet’s antenna to shed bright light in a 20-foot radius and dim light for an additional 20 feet." +
		"\n" +
		"Additionally, I can cast Charm Person from the helmet as a 3rd-level spell. Once I do so, I can’t use this property again until the next dawn.",
	spellcastingAbility: "class",
	spellcastingBonus: [{
		name: "Anglerfish Helm",
		spells: ["charm person"],
		selection: ["charm person"],
		firstCol: "oncelr",
	}],
};

MagicItemsList["baffled candle"] = {
	name : "Baffled Candle",
	sortname : "Candle, Baffled",
	source : [["OTftTG", 167]],
	type : "wondrous item",
	rarity : "uncommon",
	description : 
		"While lit, a creature holding this candle becomes invisible. The candle can burn for 1d4 + 3 minutes. Once the candle fully burns down, the item is destroyed.",
	descriptionFull:
		"While lit, a creature holding this candle becomes invisible. The candle can burn for 1d4 + 3 minutes. Once the candle fully burns down, the item is destroyed.",
};

MagicItemsList["bell of resonance"] = {
	name : "Bell of Resonance",
	sortname : "Bell, Resonance",
	source : [["OTftTG", 167]],
	type : "wondrous item",
	rarity : "uncommon",
	description : 
		"The sound of this little bell causes metal to vibrate violently. As an action, I can ring the bell, causing all creatures wielding metal weapons within 30 feet of the bell to make a DC 14 Strength saving throw. On a failed save, the creature drops its weapon. Once I use this property, it can’t be used again until the next dawn.",
	descriptionFull:
		"The sound of this little bell causes metal to vibrate violently. As an action, I can ring the bell, causing all creatures wielding metal weapons within 30 feet of the bell to make a DC 14 Strength saving throw. On a failed save, the creature drops its weapon. Once I use this property, it can’t be used again until the next dawn.",
	action : ["action", "Bell of Resonance"],
	usages : 1,
	recovery : "dawn",
};

MagicItemsList["boots of the stampede"] = {
	name : "Boots of the Stampede",
	sortname : "Boots, Stampede",
	source : [["OTftTG", 167]],
	type : "wondrous item",
	rarity : "uncommon",
	description : 
		"While wearing these boots, I can move an additional 15 feet whenever I take the Dash action.",
	descriptionFull:
		"While wearing these boots, I can move an additional 15 feet whenever I take the Dash action.",
};

MagicItemsList["burnright brand hair dryer"] = {
	name : "Burnright Brand Hair Dryer",
	sortname : "Hair, Dryer, Burnright, Brand",
	source : [["OTftTG", 167]],
	type : "wondrous item",
	rarity : "rare",
	attunement: true,
	description : 
		"This hair dryer has 7 charges. It regains 1d6 + 1 expended charges daily at dawn. While holding it, i can use an action to cast one of the following spells: Burning Hands (1 charge), Cone of Cold (5 charges), or Gust of Wind (2 charges).",
	descriptionFull:
		"This hair dryer has 7 charges. It regains 1d6 + 1 expended charges daily at dawn. While holding it, i can use an action to cast one of the following spells: Burning Hands (1 charge), Cone of Cold (5 charges), or Gust of Wind (2 charges).",
	usages : 7,
	recovery : "dawn",
	additional : "regains 1d6+1",
	spellFirstColTitle : "Ch",
	spellcastingBonus : [{
		name : "1 charge",
		spells : ["burning hands"],
		selection : ["burning hands"],
		firstCol : 1
	},{
		name : "2 charges",
		spells : ["gust of wind"],
		selection : ["gust of wind"],
		firstCol : 2
	},{
		name : "5 charges",
		spells : ["cone of cold"],
		selection : ["cone of cold"],
		firstCol : 5
	}],
};

MagicItemsList["censer of arguing spirits"] = {
	name : "Censer of Arguing Spirits",
	sortname : "Censer, Arguing, Spirits",
	source : [["OTftTG", 168]],
	type : "wondrous item",
	rarity : "rare",
	description : 
		"This tarnished and dented teapot appears like an unimportant mundane item. Sloshing sounds can be heard from within the pot when shaken, and it always feels warm to the touch. When the lid is removed, three tendrils of colored smoke rise from its blackened center. At the top of the tendrils are the smushed faces of 3 elderly men, all of which quickly begin to bicker amongst themselves. I can ask each man one question, and he will answer to the best of his ability. Once I have asked them all a question, they begin to ignore you and continue to argue amongst themselves until the lid is replaced at the top of the pot."+
		"It’s unknown who these men were, but each seems to retain knowledge from their past lives. Once I ask one of the men a question, I can’t ask him another question until 7 days have passed.",
	descriptionFull:
		"When the lid is removed, three tendrils of colored smoke rise from its blackened center. At the top of the tendrils are the smushed faces of 3 elderly men, all of which quickly begin to bicker amongst themselves. I can ask each man one question, and he will answer to the best of his ability. Once I have asked them all a question, they begin to ignore you and continue to argue amongst themselves until the lid is replaced at the top of the pot. Once I ask one of the men a question, I can’t ask him another question until 7 days have passed.",
	usages : 1, 
	recovery : "7 Days",
};

MagicItemsList["canseco bat"] = {
	name : "Canseco Bat",
	sortname : "Bat, Canseco",
	source : [["OTftTG", 168]],
	type : "weapon (warhammer)",
	rarity : "uncommon",
	attunement: true,
	description : 
		"This baseball bat uses the statistics of a +1 warhammer. If a hostile creature misses me with a ranged spell attack while wielding this bat, I can use my reaction to redirect the attack at another creature I can see within 30 feet of me, using this weapon’s attack bonus for the new attack roll. Once I use this property, I can’t do so again until the next dawn.",
	descriptionFull:
		"This baseball bat uses the statistics of a +1 warhammer. If a hostile creature misses me with a ranged spell attack while wielding this bat, I can use my reaction to redirect the attack at another creature I can see within 30 feet of me, using this weapon’s attack bonus for the new attack roll. Once I use this property, I can’t do so again until the next dawn.",
	weaponOptions: {
		baseWeapon: "warhammer",
		regExpSearch: /^(?=.*canseco)(?=.*bat).*$/i,
		name : "+1 Canseco Bat",
		selectNow : true,
	},	
	action : ["reaction", "Canseco Bat (Redirect Attack)"], 
	usages : 1,
	recovery : "dawn",
};

MagicItemsList["cloud-touched boomerang"] = {
	name : "Cloud-touched Boomerang",
	sortname : "Boomerang, Cloud-touched",
	source : [["OTftTG", 168]],
	type : "weapon (boomerang)",
	rarity : "common",
	attunement: true,
	description : 
		"I can choose to activate this boomerang’s swirling vortex whenever I attack with it. On a hit, the target must succeed on a DC 12 Strength saving throw or fall prone.",
	descriptionFull:
		"I can choose to activate this boomerang’s swirling vortex whenever I attack with it. On a hit, the target must succeed on a DC 12 Strength saving throw or fall prone.",
	weaponOptions: {
		baseWeapon: "boomerang",
		regExpSearch: /^(?=.*cloud-touched)(?=.*boomerang).*$/i,
		name : "Cloud-touched Boomerang",
		description: "Choose to activate swirling vortx when attacking, on a hit, target DC 12 STR save or prone",		
		selectNow : true,
	},	
};

MagicItemsList["coin’s edge"] = {
	name : "Coin’s Edge",
	sortname : "Coin’s, Edge",
	source : [["OTftTG", 168]],
	type : "wondrous item",
	rarity : "common",
	description : 
		"This magical coin has the symbol of a dagger on it. When the coin is flipped into the air, it transforms into a mundane dagger. Once this property is used, it can’t be undone.",
	descriptionFull:
		"This magical coin has the symbol of a dagger on it. When the coin is flipped into the air, it transforms into a mundane dagger. Once this property is used, it can’t be undone.",
};

MagicItemsList["corrupted pendant"] = {
	name : "Corrupted Pendant",
	sortname : "Pendant, Corrupted",
	source : [["OTftTG", 169]],
	type : "wondrous item",
	rarity : "rare",
	description : 
		"While wearing this pendant, I can use an action to regain a number of hit points equal to one-third of my hit point maximum. Once I regain hit points in this way, I can’t benefit from a short rest until the next dawn. Once this property has been used, it can’t be used again until the next dawn, after which point I must spend 1 hour performing a revitalizing ritual on the pendant for it to regain the use of this property. The ritual consumes three common potion ingredients.",
	descriptionFull:
		"This finely crafted gemstone pendant has a dark Corruption sealed within it. Wearing it gives me the oddest desire to visit the ocean. While wearing this pendant, I can use an action to regain a number of hit points equal to one-third of my hit point maximum. Using the corrupted pendant in this way causes an unnatural rush that drains my body and prevents me from resting normally. Once I regain hit points in this way, I can’t benefit from a short rest until the next dawn."+
		"Once this property has been used, it can’t be used again until the next dawn, after which point I must spend 1 hour performing a revitalizing ritual on the pendant for it to regain the use of this property. The ritual consumes three common potion ingredients.",
	action : ["action", "Corrupted Pendant (regain 1/3 max HP)"], 
	usages : 1,
	recovery : "dawn",
};

MagicItemsList["crt tv & chicken timer"] = {
	name : "CRT TV & Chicken Timer",
	sortname : "CRT, TV, Chicken, Timer",
	source : [["OTftTG", 169]],
	type : "wondrous item",
	rarity : "uncommon",
	description : 
		"As an action, the chicken timer can be set to eleven minutes and fourteen seconds. When the timer begins to count down, the TV starts to show a fuzzy video of a 10-foot-radius sphere centered on the chicken timer. Once the chicken timer goes off, the TV turns off again. Once the timer has been used in his way, it can’t be used again until the next dawn.",
	descriptionFull:
		"As an action, the chicken timer can be set to eleven minutes and fourteen seconds. When the timer begins to count down, the TV starts to show a fuzzy video of a 10-foot-radius sphere centered on the chicken timer. Once the chicken timer goes off, the TV turns off again. Once the timer has been used in his way, it can’t be used again until the next dawn.", 
	usages : 1,
	recovery : "dawn",
};

MagicItemsList["cube of cubes"] = {
	name : "Cube of Cubes",
	sortname : "Cube, Cubes",
	source : [["OTftTG", 169]],
	type : "wondrous item",
	rarity : "rare",
	attunement: true,
	description : 
		"This Frst Age puzzle is seemingly impossible to fully solve as its tiles are constantly shifting and turning. As an action, I can solve a side of the puzzle, unlocking one of the six spells trapped inside and releasing its power. Roll a d6 and use the table below to determine which spell I cast as part of the action to solve the puzzle. Spells cast through the puzzle use a spellcasting modifier of +4, a spell attack bonus of +7, and a spell save DC of 15. Once the puzzle has been used to cast a spell, it can’t do so again until the next dawn.",
	descriptionFull:
		"This Frst Age puzzle is seemingly impossible to fully solve as its tiles are constantly shifting and turning. As an action, I can solve a side of the puzzle, unlocking one of the six spells trapped inside and releasing its power. Roll a d6 and use the table below to determine which spell I cast as part of the action to solve the puzzle. Spells cast through the puzzle use a spellcasting modifier of +4, a spell attack bonus of +7, and a spell save DC of 15."+
		"\u2022 1 (blue)—Water Bullet"+
		"\u2022 2 (green)—Forest Guard"+
		"\u2022 3 (white)—Cure Wounds"+
		"\u2022 4 (yellow)—Enlarge/Reduce"+
		"\u2022 5 (red)—Flaming Sphere"+
		"\u2022 6 (orange)—Pacify Person"+
		"Once the puzzle has been used to cast a spell, it can’t do so again until the next dawn.",
	action : ["action", ""],
	fixedDC : 15,
	fixedSpAttack : 7,
	usages : 1,
	recovery : "dawn",
	spellFirstColTitle : "Di",
	spellcastingBonus : [{
		name : "1 (blue)",
		spells : ["water bullet"],
		selection : ["water bullet"],
		firstCol : 1
	},{
		name : "2 (green)",
		spells : ["forest guard"],
		selection : ["forest guard"],
		firstCol : 2
	},{
		name : "3 (white)",
		spells : ["cure wounds"],
		selection : ["cure wounds"],
		firstCol : 3
	},{
		name : "4 (yellow)",
		spells : ["enlarge/reduce"],
		selection : ["enlarge/reduce"],
		firstCol : 4
	},{
		name : "5 (red)",
		spells : ["flaming sphere"],
		selection : ["flaming sphere"],
		firstCol : 5
	},{
		name : "6 (orange)",
		spells : ["pacify person"],
		selection : ["pacify person"],
		firstCol : 6
	}],
};

MagicItemsList["eye kite"] = {
	name : "Eye Kite",
	sortname : "Kite, Eye",
	source : [["OTftTG", 170]],
	type : "wondrous item",
	rarity : "common",
	attunement: true,
	description : 
		"These unique kites can be shaped like an octopus, crane, or dragon. As an action, while flying the kite, I can see through it as if it were a pair of eyes looking down from the sky. While looking through the kite, I gain all the visual benefits I would normally have and can see in all directions facing downward.",
	descriptionFull:
		"These unique kites can be shaped like an octopus, crane, or dragon. As an action, while flying the kite, I can see through it as if it were a pair of eyes looking down from the sky. While looking through the kite, I gain all the visual benefits I would normally have and can see in all directions facing downward.",
	action : ["action", ""],
};

MagicItemsList["familiar’s collar"] = {
	name : "Familiar’s Collar",
	sortname : "Collar, Familiar’s",
	source : [["OTftTG", 170]],
	type : "wondrous item",
	rarity : "common",
	attunement: true,
	description : 
		"While worn by a friendly beast I can activate the Control Animal spell at will, targeting only the creature wearing the collar.",
	descriptionFull:
		"While worn by a friendly beast I can activate the Control Animal spell at will, targeting only the creature wearing the collar.",
	spellcastingBonus : [{
		name : "Familiar’s Collar",
		spells : ["control animal"],
		selection : ["control animal"],
		firstCol : "oncelr",
	}],
};

MagicItemsList["field cauldron"] = {
	name : "Field Cauldron",
	sortname : "Cauldron, Field",
	source : [["OTftTG", 170]],
	type : "wondrous item",
	rarity : "uncommon",
	description : 
		"This miniature cauldron is used by adventuring witches to brew potions out on the road and stretch their ingredients even further. When used alongside alchemy supplies to brew an uncommon potion or rarer, I also brew a random common potion.",
	descriptionFull:
		"This miniature cauldron is used by adventuring witches to brew potions out on the road and stretch their ingredients even further. When used alongside alchemy supplies to brew an uncommon potion or rarer, I also brew a random common potion.",
};

MagicItemsList["fisherman’s spear"] = {
	name : "Fisherman’s Spear",
	sortname : "Spear, Fisherman’s",
	source : [["OTftTG", 170]],
	type : "weapon (spear)",
	rarity : "common",
	attunement: true,
	description : 
		"When I make a melee attack with the spear, I can cause it to magically extend, targeting a creature up to 15 feet away from me. For every 5 feet the spear extends beyond its normal reach, I take a −1 penalty to the attack roll.",
	descriptionFull:
		"This well-crafted spear has a worn oak haft that magically springs forward at the call of its wielder. When I make a melee attack with the spear, I can cause it to magically extend, targeting a creature up to 15 feet away from me. For every 5 feet the spear extends beyond its normal reach, I take a −1 penalty to the attack roll.",
	weaponOptions: {
		baseWeapon: "spear",
		regExpSearch: /^(?=.*fisherman)(?=.*spear).*$/i,
		name : "Fisherman’s Spear",
		description: "When attacking, can magically extend up to 15 ft, -1 to attack roll per 5 ft",
		selectNow : true,
	},	

};

MagicItemsList["flying broomstick"] = {
	name : "Flying Broomstick",
	sortname : "Broomstick, Flying",
	source : [["OTftTG", 170]],
	type : "wondrous item",
	rarity : "uncommon",
	description : 
		"The Flying Broomstick has a flying speed of 60 feet. It can carry up to 1,000 pounds, and I can command it to fly back to me in an instant if it’s within 100 feet of me.",
	descriptionFull:
		"An ordinary broom that has the extraordinary power to fly and is surprisingly comfortable to ride. It’s controlled by my thoughts, hovering beneath me when I desire and able to carry me through the air. It has a flying speed of 60 feet. It can carry up to 1,000 pounds, and I can command it to fly back to me in an instant if it’s within 100 feet of me. While flying, the broom can leave a trail behind it, such as a trail of clouds, leaves, sparks, smoke, or bubbles.",
};

MagicItemsList["keys to the sandcastle"] = {
	name : "Keys to the Sandcastle",
	sortname : "Keys, Sandcastle",
	source : [["OTftTG", 171]],
	type : "wondrous item",
	rarity : "uncommon",
	description : 
		"This enchanted toy has 50 charges. While I am holding it, I can expend 1 charge as an action to speak its command word and cast the Sand Structure spell. When all of the toy’s charges are expended, it becomes a nonmagical knicknack.",
	descriptionFull:
		"This enchanted toy has 50 charges. While I am holding it, I can expend 1 charge as an action to speak its command word and cast the Sand Structure spell. When all of the toy’s charges are expended, it becomes a nonmagical knicknack.",
	usages : 50,
	spellFirstColTitle : "Ch",
	spellcastingBonus : [{
		name : "1 charge",
		spells : ["sand structure"],
		selection : ["sand structure"],
		firstCol : 1
	}],
};

MagicItemsList["keytar"] = {
	name : "Keytar",
	sortname : "Keytar",
	source : [["OTftTG", 171]],
	type : "wondrous item",
	rarity : "uncommon",
	attunement: true,
	description : 
		"As part of a minute-long performance, I can attempt to pick a lock that I can see within 15 ft using a Performance check. If I failt to unlock the lock using the keytar, I cannot attempt to do so again until 24 hrs have passed.",
	descriptionFull:
		"As part of a minute-long performance on this First Age instrument, I can choose a lock I can see within 15 feet of me and attempt to pick it using the magic of music. Trying to pick a lock in this way requires no other tools besides the keytar. When I do so, I make a Charisma (Performance) check against the lock’s DC, instead of the Dexterity check normally required. If I fail to unlock the lock using the keytar, I can’t attempt to do so again until 24 hours have passed.",
};

MagicItemsList["gametoy"] = {
	name : "Gametoy",
	sortname : "Gametoy",
	source : [["OTftTG", 171]],
	type : "wondrous item",
	rarity : "very rare",
	attunement: true,
	description : 
		"While I am attuned to the Gametoy with a cartridge inserted into it, I gain proficiency in the skill stored within the cartridge. While holding the Gametoy, I can use an action to remove, insert, or swap a cartridge. The Gametoy comes with one cartridge with a random skill proficiency stored inside.",
	descriptionFull:
		"Each Gametoy cartridge contains a unique skill proficiency. While I am attuned to the Gametoy with a cartridge inserted into it, I gain proficiency in the skill stored within the cartridge. While holding the Gametoy, I can use an action to remove, insert, or swap a cartridge. The Gametoy comes with one cartridge with a random skill proficiency stored inside.",
	skillstxt : "I gain proficiency in the skill stored within the cartridge.",
	action : ["action", "Gametoy"],
};

MagicItemsList["guardian spheres"] = {
	name : "Guardian Spheres",
	sortname : "Spheres, Guardian",
	source : [["OTftTG", 171]],
	type : "wondrous item",
	rarity : "uncommon",
	attunement: true,
	description : 
		"There are 1d4 + 1 Guardian Spheres in a set, each with 5 HP that will automatically sacrifice to reduce the total damage of an incoming attack targeting the user. Once a sphere is reduced to 0 hit points, it goes inert and drops to the ground. Guardian Spheres recover their hit points at dawn each day.",
	descriptionFull:
		"These ancient Nakudama devices float around the user at all times, intercepting incoming attacks on their own. Each Guardian Sphere has 5 hit points, which it will automatically sacrifice to reduce the total damage of an incoming attack targeting the user. Once a sphere is reduced to 0 hit points, it goes inert and drops to the ground. Guardian Spheres recover their hit points at dawn each day. There are 1d4 + 1 Guardian Spheres in a set.",
	usages : "5 HP",
	recovery : "dawn",
};

MagicItemsList["heron’s eye ring"] = {
	name : "Heron’s Eye Ring",
	sortname : "Eye Ring, Heron’s",
	source : [["OTftTG", 172]],
	type : "ring",
	rarity : "rare",
	attunement: true,
	description : 
		"There are 1d4 + 1 Guardian Spheres in a set, each with 5 HP that will automatically sacrifice to reduce the total damage of an incoming attack targeting the user. Once a sphere is reduced to 0 hit points, it goes inert and drops to the ground. Guardian Spheres recover their hit points at dawn each day.",
	descriptionFull:
		"While wearing this ring I gain a +3 bonus to Wisdom (Insight and Perception) checks."+
		"Spells. The ring has 6 charges. While wearing it, I can use an action to expend some of its charges to cast one of the following spells from it:"+
		"◊ Dispel Magic (3 charges)"+
		"◊ Find Traps (2 charges)"+
		"◊ See Invisibility (2 charges)"+
		"◊ Shared Vision (2 charges)"+
		"◊ Spell Signature (2 charges)"+
		"The ring regains 1d4 + 2 expended charges daily at dawn.",
	addMod : ["Insight", "Perception"].map(function(skill){return{ type : "skill", field : skill, mod : 3, text : "Heron’s Eye Ring gives me a +3 to Insight and Perception" };}),
	skillstxt : "While wearing this ring I gain a +3 bonus to Wisdom (Insight and Perception) checks.",
	usages : 6,
	recovery : "dawn",
	additional : "regains 1d4+2",
	spellFirstColTitle : "Ch",
	spellcastingBonus : [{
		name : "2 charges",
		spells : ["find traps"],
		selection : ["find traps"],
		firstCol : 2
	},{
		name : "2 charges",
		spells : ["see invisibility"],
		selection : ["see invisibility"],
		firstCol : 2
	},{
		name : "2 charges",
		spells : ["shared vision"],
		selection : ["shared vision"],
		firstCol : 2
	},{
		name : "2 charges",
		spells : ["spell signature"],
		selection : ["spell signature"],
		firstCol : 2
	},{
		name : "3 charges",
		spells : ["dispel magic"],
		selection : ["dispel magic"],
		firstCol : 3
	}],
};

MagicItemsList["hover hopper"] = {
	name : "Hover Hopper",
	sortname : "Hover, Hopper",
	source : [["OTftTG", 172]],
	type : "wondrous item",
	rarity : "common",
	attunement: true,
	description : 
		"While inflated and attached to my person, any falling damage I take is halved, and the maximum number of feet I can cover with my standing long and high jump is equal to my Strength or Dexterity score.",
	descriptionFull:
		"These magic balloons inflate and deflate at a moment’s notice when their command word is spoken. While inflated and attached to my person, any falling damage I take is halved, and the maximum number of feet I can cover with my standing long and high jump is equal to my Strength or Dexterity score.",
};

MagicItemsList["hurler’s gloves"] = {
	name : "Hurler’s Gloves",
	sortname : "Gloves, Hurler’s",
	source : [["OTftTG", 172]],
	type : "wondrous item",
	rarity : "uncommon",
	attunement: true,
	description : 
		"While wearing these rugged gloves, I gain a +2 bonus to damage rolls with thrown weapons. Additionally, the weapon’s ranges are increased by 15 feet.",
	descriptionFull:
		"While wearing these rugged gloves, I gain a +2 bonus to damage rolls with thrown weapons. Additionally, the weapon’s ranges are increased by 15 feet.",
	calcChanges : {
		atkCalc : [
			function (fields, v, output) {
				if (/^(?=.*thrown).*$/i.test(v.WeaponText)) output.extraDmg += 2;
			},
			"I gain a +2 bonus to damage rolls with thrown weapons."
		],
		atkAdd: [
			function (fields, v) {
				if (/^(?=.*thrown).*$/i.test(v.WeaponText)) {
				var rangeNumbers = fields.Range.match(/\d+([.,]\d+)?/g);
				var notNumbers = fields.Range.split(RegExp(rangeNumbers.join("|")));
				fields.Range = "";
				rangeNumbers.forEach(function (dR, idx) {
				fields.Range +=
				(notNumbers[idx] ? notNumbers[idx] : "") +
				(parseFloat(dR.toString().replace(",", ".")) +
				(idx == 0 ? 15 : 15));
            			});
			}},
		],
	},
};

MagicItemsList["instaprint camera"] = {
	name : "Instaprint Camera",
	sortname : "Camera, Instaprint",
	source : [["OTftTG", 172]],
	type : "wondrous item",
	rarity : "uncommon",
	description : 
		"Crea/obj that bear magic are revealed to have a faint aura around it, which corresponds to one of the schools of magic, if the effect has any. The camera has 1d12 + 4 film cards, which can be used to take photos.",
	descriptionFull:
		"Creatures or objects that bear magic are revealed to have a magical effect in the photos taken by this camera. The creature or object is shown to have a faint aura around it, which corresponds to one of the schools of magic, if the effect has any. The camera has 1d12 + 4 film cards, which can be used to take photos.",
};

MagicItemsList["jabbadoon’s feather"] = {
	name : "Jabbadoon’s Feather",
	sortname : "Feather, Jabbadoon’s",
	source : [["OTftTG", 172]],
	type : "wondrous item",
	rarity : "uncommon",
	description : 
		"While holding this enchanted object, a creature becomes as light as a feather.",
	descriptionFull:
		"While holding this enchanted object, a creature becomes as light as a feather.",
};

MagicItemsList["lafula’s iron teapot"] = {
	name : "Lafula’s Iron Teapot",
	sortname : "Iron Teapot, Lafula’s",
	source : [["OTftTG", 173]],
	type : "wondrous item",
	rarity : "very rare",
	description : 
		"When used to brew tea, the maker chooses one of the effects from the Bestow Curse spell, producing 6 portions. The curse lasts for 1 year or until removed. A creature affected by the tea’s curse can’t be affected by a different curse produced by the tea. Once used to brew tea, can’t do so again for 1 month.",
	descriptionFull:
		"Lafula’s Iron Teapot is tarnished with the wicked magic of the mage Lafula. Tea brewed inside the pot imparts a curse upon those who consume it. When used to brew tea, the maker chooses one of the effects from the Bestow Curse spell. A pot of tea produces 6 portions. A creature that consumes the tea is affected by the curse chosen by the maker. The curse lasts for 1 year or until removed. A creature affected by the tea’s curse can’t be affected by a different curse produced by the tea. Once I use the iron teapot to brew tea, I can’t do so again for 1 month.",
	usages : 6,
	recovery : "month",
	spellcastingBonus : [{
		name : "Lafula’s Iron Teapot",
		spells : ["bestow curse"],
		selection : ["bestow curse"],
	}],
};

MagicItemsList["lunar weapon"] = {
	name : "Lunar Weapon",
	nameTest : "Lunar",
	source : [["OTftTG", 173]],
	type : "weapon (any)",
	rarity : "uncommon",
	attunement: true,
	description : 
		"This weapon is crafted with strands of moonlight. At night, attacks with it deal an extra 1d8 radiant damage on a hit.",
	descriptionFull:
		"This weapon is crafted with strands of moonlight. At night, attacks with it deal an extra 1d8 radiant damage on a hit.",
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "suffix",
		descriptionChange : ["replace", "weapon"]
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (/^(?=.*lunar).*$/i.test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'At night, +1d8 Radiant damage';
				}
			},
			'If I include the words "Lunar" in a the name of a sword, it will be treated as the magic Lunar weapon. At night, attacks with it deal an extra 1d8 radiant damage on a hit.'
		]
	}
};

MagicItemsList["oiki’s pinwheel"] = {
	name : "Oiki’s Pinwheel",
	sortname : "Pinwheel, Oiki’s",
	source : [["OTftTG", 173]],
	type : "wondrous item",
	rarity : "rare",
	description : 
		"Action to force hostile crea within 120 ft to do a DC 15 WIS save or be stunned until the pinwheel stops spinning. The pinwheel spins for 1 min or indefinitely if there's a strong wind. Affected crea repeat the save at the end of their turns.",
	descriptionFull:
		"As an action, Oiki’s Pinwheel can be spun and placed on the ground. Each hostile creature within 120 feet of the pinwheel that can see it must succeed on a DC 15 Wisdom saving throw or be stunned until the pinwheel stops spinning. The pinwheel spins for 1 minute, or it spins indefinitely as long as it is within a strong wind. An affected creature can repeat the saving throw at the ends of each of its turns, ending the effect on itself on a success."+
		"Once Oiki’s Pinwheel stops spinning, its magic transfers to another random pinwheel on the same plane of existence.",
	action : ["action", ""],
};

MagicItemsList["only members jacket"] = {
	name : "Only Members Jacket",
	source : [["OTftTG", 173]],
	type : "wondrous item",
	rarity : "uncommon",
	description : 
		"Action to disguise into the humanoid chosen when the jacket was enchanted. DC 14 Investigation to see through the illusion. Illusion ends when jacket is taken off",
	descriptionFull:
		"This stylish jacket has illusionary magic sewn into its seams. While wearing the jacket, I can use an action to take on an illusory disguise chosen by the jacket’s enchanter. The jacket makes me—including my clothing, armor, weapons, and other belongings on my person—look like the humanoid chosen when the jacket was enchanted."+
		"To discern that I am disguised, a creature can use its action to inspect my appearance and must succeed on a DC 14 Intelligence (Investigation) check."+
		"The disguise lasts until the jacket is taken off.",
	action : ["action", ""],
};

MagicItemsList["painter’s sun hat"] = {
	name : "Painter’s Sun Hat",
	source : [["OTftTG", 174]],
	type : "wondrous item",
	rarity : "common",
	description : 
		"Action to create illusion of humanoid I am familiar with. The illusion will not hold up to physical inspection. A DC 10 Investigation check reveals the figure is an illusion.",
	descriptionFull:
		"This well-made hat can come in any shape, size, or form and from casual inspection seems to be mundane in nature. However, when the hat is placed on the ground as an action and its command word is spoken, it begins to float into the air. The hovering hat then produces an illusion of a humanoid of my choice that I am familiar with, with the caveat that the illusion is wearing the hat. The figure can’t move and fails to hold up to physical inspection. The illusion remains until the hat is moved out of place, or until the command word is spoken once more, causing the hat to float back to the ground. A DC 10 Intelligence (Investigation) check reveals the figure is an illusion.",
	action : ["action", ""],
};

MagicItemsList["pendants of belonging"] = {
	name : "Pendants of Belonging",
	source : [["OTftTG", 174]],
	type : "wondrous item",
	rarity : "uncommon",
	description : 
		"These pendants come in sets of four, six, or eight. While worn, a creature always knows the direction of the other pendants in its set.",
	descriptionFull:
		"These pendants come in sets of four, six, or eight. While worn, a creature always knows the direction of the other pendants in its set.",
};

MagicItemsList["punch card"] = {
	name : "Punch Card",
	source : [["OTftTG", 174]],
	type : "wondrous item",
	rarity : "uncommon",
	description : 
		"This old punch card punches a hole in the card every time the crea carrying it is hit by an attack. When found, the card has 1d6 punches already in it. When the tenth hole is punched in the card, the magic is released, reducing the incoming attack’s damage to 0. The card’s magic then fades.",
	descriptionFull:
		"This old punch card from a long-forgotten tea shop somehow holds a unique enchantment, which punches a hole in the card every time the creature carrying it is hit by an attack; a hole can’t be punched in the card by any means other than this enchantment. When found, the card has 1d6 punches already in it. When the tenth hole is punched in the card, the magic is released, reducing the incoming attack’s damage to 0. The card’s magic then fades.",
};

MagicItemsList["roake’s clay urn"] = {
	name : "Roake’s Clay Urn",
	source : [["OTftTG", 174]],
	type : "wondrous item",
	rarity : "uncommon",
	description : 
		"Action to speak ritualistic phrases unqiue to it, a spirit of my choice (CR < 3) that can see or hear me within 30 ft makes a WIS save or be sealed in the urn. Once Roake’s Clay Urn has been used to seal a spirit, it can’t be used again.",
	descriptionFull:
		"As an action, I can present this clay urn and speak a handful of ritualistic phrases unique to it. One spirit of my choice that can see or hear me within 30 feet of me must make a DC 13 Wisdom saving throw. On a failed save, it is pulled inside the clay urn and sealed away. If the spirit has a challenge rating of 3 or higher, it automatically succeeds on the save."+
		"While the spirit is sealed inside, it is in a state of slumber. It doesn’t need to eat or breathe, it doesn’t suffer from any wounds or illnesses, and it ceases to age. The creature is released when the urn’s seal is broken or the urn is destroyed. At which point, the creature reappears in the nearest unoccupied space to the urn, waking up as if no time had passed."+
		"Once Roake’s Clay Urn has been used to seal a spirit, it can’t be used again.",
	action : ["action", ""],
};

MagicItemsList["ruby red bike"] = {
	name : "Ruby Red Bike",
	source : [["OTftTG", 175]],
	type : "wondrous item",
	rarity : "rare",
	description : 
		"Bicycle with walking spd of 70 ft. Once per dawn, after moving at least 60 ft on the bicycle, I can produce a fiery wall as if from the Wall of Fire spell.",
	descriptionFull:
		"This bicycle has a walking speed of 70 feet. After using this bicycle to move at least 60 feet on my turn, I can use an action to produce a fiery wall in the path I took, as if from the Wall of Fire spell. Once this property of the bicycle has been used, it can’t be used again until the next dawn.", 
	usages : 1,
	recovery : "dawn",
	spellcastingBonus : [{
		name : "Ruby Red Bike",
		spells : ["wall of fire"],
		selection : ["wall of fire"],
		firstCol : "oncelr",
	}],
};

MagicItemsList["scarf of muffling"] = {
	name : "Scarf of Muffling",
	source : [["OTftTG", 175]],
	type : "wondrous item",
	rarity : "uncommon",
	description : 
		"As an action, I can throw the scarf at a crea within 60 feet of me. Target must succeed a DC 14 DEX save or the scarf magically wraps around its mouth, preventing it from speaking. A crea can use its action to make a DC 14 Strength check, pulling the scarf off itself or another crea within its reach on a success. The scarf can be thrown in this way 3 times, and it regains all expended uses daily at dawn.",
	descriptionFull:
		"This soft and well loved scarf wraps snugly around the wearer’s neck, making anyone who adorns its feel extra cozy. As an action, I can throw the scarf at a creature within 60 feet of me. The target must succeed a DC 14 Dexterity saving throw or the scarf magically wraps around its mouth, preventing it from speaking. A creature can use its action to make a DC 14 Strength check, pulling the scarf off itself or another creature within its reach on a success. The scarf can be thrown in this way 3 times, and it regains all expended uses daily at dawn.", 
	action : ["action", ""],
	usages : 3,
	recovery : "dawn",
};

MagicItemsList["scuttling lantern"] = {
	name : "Scuttling Lantern",
	source : [["OTftTG", 175]],
	type : "wondrous item",
	rarity : "common",
	description : 
		"Action to touch the Lantern to activate it (bright light 30 ft rad, dim light 30 ft rad) or deactivate it. While lit, I can command the lantern to move 20 ft in any direction (no action required). Deactivates if more than 500 ft away. The lantern can move through water and across any solid surface. If commanded to follow me, it will remain within 10 ft of me, provided no obstacles.",
	descriptionFull:
		"As an action, I can touch the Scuttling Lantern to activate it (causing it to shed bright light in a 30-foot radius and dim light for an additional 30 feet) or deactivate it (snuffing out the light). While the lantern is lit, I can command it to move once on each of my turns (no action required), provided I am the one who activated it. When I do so, the lantern moves up to 20 feet in a direction of my choice. It deactivates if it is ever more than 500 feet away from me. The lantern can move through water and across any solid surface (including up, down, and across vertical surfaces and upside down along ceilings). If I command the lantern to follow me, it will always remain within 10 feet of me, provided no obstacles impede its path.",
	action : ["action", "Light/Snuff Lantern"],
};

MagicItemsList["sibling purses"] = {
	name : "Sibling Purses",
	source : [["OTftTG", 175]],
	type : "wondrous item",
	rarity : "uncommon",
	description : 
		"These two sibling coin pouches open up 5 inches wide and can hold up to 5 pounds each. When I place an object into one of the pouches, and the other pouch is within 20 feet of it, I can cause the object to teleport into the other pouch, provided there is room to accommodate the object.",
	descriptionFull:
		"These two sibling coin pouches open up 5 inches wide and can hold up to 5 pounds each. When I place an object into one of the pouches, and the other pouch is within 20 feet of it, I can cause the object to teleport into the other pouch, provided there is room to accommodate the object.",
};

MagicItemsList["soda cans"] = {
	name : "Soda Cans",
	source : [["OTftTG", 176]],
	type : "wondrous item",
	rarity : "uncommon",
	description : 
		"◊ Melon Soda. This beverage grants the effect of 1 random common combat potion."+
		"◊ Cola Soda. This beverage grants the effect of 1 random common utility potion."+
		"◊ Fish Sauce Soda. This beverage grants the effect of 1 random common whimsical potion.",
	descriptionFull:
		"There are a number of these strange beverages on the island, and only those brave enough to drink them know their magical effects."+
		"◊ Melon Soda. This beverage grants the effect of 1 random common combat potion."+
		"◊ Cola Soda. This beverage grants the effect of 1 random common utility potion."+
		"◊ Fish Sauce Soda. This beverage grants the effect of 1 random common whimsical potion.",
};

MagicItemsList["solar amulet"] = {
	name : "Solar Amulet",
	source : [["OTftTG", 176]],
	type : "wondrous item",
	rarity : "uncommon",
	attunement: true,
	description : 
		"Whenever I regain hit points from a spell or magical effect while wearing this amulet, I regain an additional 3 hit points.",
	descriptionFull:
		"Whenever I regain hit points from a spell or magical effect while wearing this amulet, I regain an additional 3 hit points.",
};

MagicItemsList["splinter bow"] = {
	name : "Splinter Bow",
	nameTest : "Splinter",
	source : [["OTftTG", 176]],
	type : "weapon (any bow)",
	rarity : "uncommon",
	attunement: true,
	description : 
		"This magical bow allows me to target two crea within 10 ft of each other. When I use the bow in this way, I make only one attack roll, which applies to both targets. If the attack hits at least one of the targets, roll damage normally; each target takes half the amount of damage rolled (rounded down).",
	descriptionFull:
		"This magical bow can split arrows as I fire it, allowing me to target two creatures within 10 feet of each other. When I use the bow in this way, I make only one attack roll, which applies to both targets. If the attack hits at least one of the targets, roll damage normally; each target takes half the amount of damage rolled (rounded down).",
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "suffix",
		descriptionChange : ["replace", "bow"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /bow/i;
			return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (/^(?=.*splinter).*$/i.test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'Can target 2 crea within 10 ft of each other';
				}
			},
			'If I include the words "Splinter" in a the name of a sword, it will be treated as the magic Splinter Bow and can target 2 crea within 10 ft of each other.'
		]
	}
};

MagicItemsList["sticky hand"] = {
	name : "Sticky Hand",
	source : [["OTftTG", 176]],
	type : "wondrous item",
	rarity : "common",
	description : 
		"While holding this children’s toy in one hand, I can cast the Retrieve spell.", 
	descriptionFull:
		"While holding this children’s toy in one hand, I can cast the Retrieve spell.", 
	spellcastingBonus : [{
		name : "Sticky Hand",
		spells : ["retrieve"],
		selection : ["retrieve"],
		firstCol: "atwill",
	}],
};

MagicItemsList["sunbaked cassettes"] = {
	name : "Sunbaked Cassettes",
	source : [["OTftTG", 176]],
	type : "wondrous item",
	rarity : "uncommon",
	attunement: true,
	prerequisite: "Requires attunement by a spellcaster",
	prereqeval: function (v) {
		return v.isSpellcaster;
	},
	description : 
		"Bns to roll a d4; on a 3 or lower, I regain an expended spell slot of a lvl equal to the roll (if no expended spell slots of that lvl, instead regain a slot of the next-highest lvl expended). On a 4, I teleport 30 ft in a random direction. Once a spell slot is regained in this way, can’t do so again until the next dawn.",
	descriptionFull:
		"This sun-damaged cassette is beginning to lose hold of the magic stored inside it. As a bonus action, I can hold the cassette out in front of me in an attempt to draw out its power. Roll a d4; on a roll of 3 or lower, I regain an expended spell slot of a level equal to the number rolled (if I don’t have any expended spell slots of that level, I instead regain a spell slot of the next-highest level that I have expended). On a roll of 4, I teleport 30 feet in a random direction. Once I regain a spell slot in this way I can’t do so again until the next dawn.",
	action : ["bonus action", ""],
	usages : 1,
	recovery : "dawn",
};

MagicItemsList["talisman of the phoenix"] = {
	name : "Talisman of the Phoenix",
	source : [["OTftTG", 177]],
	type : "wondrous item",
	rarity : "rare",
	attunement: true,
	prerequisite: "Requires attunement by a spellcaster",
	prereqeval: function (v) {
		return v.isSpellcaster;
	},
	description : 
		"This talisman has 1d4 charges. When I fail a Death save while the talisman is on my person, I can expend a charge to succeed instead.",
	descriptionFull:
		"This talisman has 1d4 charges. When I fail a death saving throw while the talisman is on my person, I can choose to expend a charge to succeed instead. Once all of the talisman’s charges have been used, it burns up in a flash, leaving behind a pile of ashes. It then reforms with 1d4 charges somewhere else on the same plane.",
	usages : "1d4",
	recovery : "dawn",
};

MagicItemsList["travel wok"] = {
	name : "Travel Wok",
	source : [["OTftTG", 177]],
	type : "weapon (frying pan)",
	rarity : "rare",
	description : 
		"The wok is considered a +1 frying pan, which deals an extra 1d4 fire damage on a hit. The wok can cook food without fire and crea that eat the food within an hour of preparation gain 1d6 THP that lasts an hour. Once this property has been used, it can’t be used again until the next dawn.",
	descriptionFull:
		"Unlike other frying pans, this enchanted wok both imbues its food with healing properties and heats up to strike a burning blow against its enemies. The wok is considered a +1 frying pan, which deals an extra 1d4 fire damage on a hit."+
		"Not only can the wok cook food without the need for a fire, creatures that eat food prepared in the wok within an hour of it being cooked gain 1d6 temporary hit points. Temporary hit points gained by the wok’s food last for 1 hour. Once this property has been used, it can’t be used again until the next dawn.",
	usages : 1,
	recovery : "dawn",
	weaponOptions : [{
		baseWeapon : "frying pan",
		regExpSearch : /^(?=.*travel)(?=.*wok).*$/i,
		name : "Travel Wok",
		source : [["OTftTG", 177]],
		description : "Versatile (1d8), bns +1 AC til end of next turn if no shield, +1d4 Fire dmg",
		modifiers : [1, 1],
		selectNow : true
	}],
};

MagicItemsList["umbrella of shielding"] = {
	name : "Umbrella of Shielding",
	source : [["OTftTG", 177]],
	type : "weapon (umbrella)",
	rarity : "uncommon",
	attunement: true,
	description : 
		"It is considered a +1 umbrella. While wielding the umbrella and targeted by a ranged weapon attack, I can use my reaction to gain a +5 bonus to my AC for that attack.",
	descriptionFull:
		"This silk umbrella is reinforced with iron, making it as durable as it is heavy. It is considered a +1 umbrella. While wielding the umbrella and targeted by a ranged weapon attack, I can use my reaction to gain a +5 bonus to my AC for that attack, potentially causing the attack to miss me.",
	usages : 1,
	recovery : "dawn",
	weaponOptions : [{
		baseWeapon : "umbrella",
		regExpSearch : /^(?=.*umbrella).*$/i,
		name : "Umbrella of Shielding",
		source : [["OTftTG", 177]],
		description : "Finesse, reaction to reduce falling damage, reaction to +5 AC from ranged weapon attack",
		modifiers : [1, 1],
		selectNow : true
	}],
};

MagicItemsList["weapon of the sun and moon"] = {
	name : "Weapon of the Sun and Moon",
	nameTest : "of the Sun and Moon",
	source : [["OTftTG", 177]],
	type : "weapon (any)",
	rarity : "rare",
	attunement: true,
	description : 
		"A 1-hour ritual with both the Lunar Weapon and Solar Amulet forms this as a +1 weapon with two Eclipse Powers. ",
	descriptionFull:
		"A creature in possession of both the Lunar Weapon and the Solar Amulet can perform a 1-hour ritual (as if attuning to a magic item) to combine those items, forming the Weapon of the Sun and Moon."+
		"In addition to having the properties of both the Lunar Weapon and the Solar Amulet, this weapon is considered a +1 Weapon and gains two Eclipse Powers. During the day, the Weapon of the Sun and Moon can use its Eclipse Power to cast the Darkness spell; this version of the spell creates a 60-foot-radius sphere of darkness, instead of its normal size. During the night, it can use its Eclipse Power to cast the Daylight spell. Once the daytime Eclipse Power is used, it can’t be used again until the next dawn; once the nighttime Eclipse Power is used, it can’t be used again until the next dusk.",
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "prefix",
		descriptionChange : ["replace", "weapon"],
	},
	calcChanges : {
		atkCalc : [
			function (fields, v, output) {
				if (/^(?=.*sun)(?=.*moon).*$/i.test(v.WeaponTextName)) {
					output.extraHit += 1;
					output.extraDmg += 1;
				}
			},
			'If I include the words "Sun" and "Moon" in a the name of a weapon, it will be treated as the magic Weapon of the Sun and Moon, becoming a +1 weapon.'
		],
		atkAdd : [
			function (fields, v) {
				if (/^(?=.*sun)(?=.*moon).*$/i.test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
				}
			},
			'If I include the words "Sun" and "Moon" in a the name of a weapon, it will be treated as the magic Weapon of the Sun and Moon, becoming a +1 weapon.'
		],
		spellAdd : [
			function (spellKey, spellObj, spName, isDuplicate) {
				if (spellKey !== "darkness") return;
					if (spellObj.description === SpellsList["darkness"].description) spellObj.description = "60-ft rad darkness on point or object; darkvision doesn't work; only magical light of SL 3+ works in it";
			},
			"This version of the spell creates a 60-foot-radius sphere of darkness, instead of its normal size."
		],
	},
	extraLimitedFeatures : [{
		name : "Daytime Eclipse Power",
		usages : 1,
		recovery : "dawn",
	},{
		name : "Nighttime Eclipse Power",
		usages : 1,
		recovery : "dusk",
	}],
	spellcastingBonus : [{
		name : "Daytime Eclipse Power",
		spells : ["darkness"],
		selection : ["darkness"],
		firstCol : "oncelr",
	},{
		name : "Nighttime Eclipse Power",
		spells : ["daylight"],
		selection : ["daylight"],
		firstCol : "oncelr",
	}],
};

MagicItemsList["yappa mask"] = {
	name : "Yappa Mask",
	source : [["OTftTG", 177]],
	type : "wondrous item",
	rarity : "uncommon",
	description : 
		"While holding this children’s toy in one hand, I can cast the Retrieve spell.", 
	descriptionFull:
		"While wearing the Yappa Mask, my creature type changes to Spirit. In addition, I am able to speak and understand Torum, the spirit language.",
	languages : "Torum",
};

/*
 * Combat Potions
 */

//Common Combat Potions
MagicItemsList["rabbit’s speed"] = {
	name : "Rabbit’s Speed",
	source : [["OTftTG", 220]],
	type : "potion",
	rarity : "common",
	description : 
		"For the next 10 minutes, my walking speed increases by 5 feet.", 
	descriptionFull:
		"Within seconds of downing this potion, I feel a distinct lightness and spring in my step. For the next 10 minutes, my walking speed increases by 5 feet.",
};

MagicItemsList["weapon master’s elixir"] = {
	name : "Weapon Master’s Elixir",
	source : [["OTftTG", 220]],
	type : "potion",
	rarity : "common",
	description : 
		"For the next 24 hours, I gain proficiency with a melee weapon of my choice.", 
	descriptionFull:
		"When I drink this potion, I gain a sense of clarity and focus, and the swing of a certain weapon becomes second nature to me. For the next 24 hours, I gain proficiency with a melee weapon of my choice.",
};

MagicItemsList["spirit of salyri"] = {
	name : "Spirit of Salyri",
	source : [["OTftTG", 220]],
	type : "potion",
	rarity : "common",
	description : 
		"For the next 24 hours, I gain proficiency with one type of armor of my choice.",
	descriptionFull:
		"This potion is said to contain the spirit of Salyri, a great Obojiman warrior known for her fighting prowess. Anyone who drinks this potion gains a certain understanding of how to effectively wear armor in combat. For the next 24 hours, I gain proficiency with one type of armor of my choice.",
};

MagicItemsList["beast hide"] = {
	name : "Beast Hide",
	source : [["OTftTG", 220]],
	type : "potion",
	rarity : "common",
	description : 
		"For 1 minute, I have resistance to cold damage.",
	descriptionFull:
		"Drinking this potion thickens my skin and grows patches of fur all around my body. Frost that would normally freeze my skin instead melts on contact. For 1 minute, I have resistance to cold damage.",
};

MagicItemsList["spirit armor"] = {
	name : "Spirit Armor",
	source : [["OTftTG", 220]],
	type : "potion",
	rarity : "common",
	description : 
		"For the next hour, the target has an AC of 15 while it isn’t wearing armor. This effect ends if the target dons armor.",
	descriptionFull:
		"When poured on a creature that isn’t wearing armor, this potion covers the target with a magical force. For the next hour, the target has an AC of 15 while it isn’t wearing armor. This effect ends if the target dons armor.",
};

MagicItemsList["displacement field"] = {
	name : "Displacement Field",
	source : [["OTftTG", 220]],
	type : "potion",
	rarity : "common",
	description : 
		"Until the start of my next turn, all attacks against me are made with disadvantage.",
	descriptionFull:
		"Drinking this silvery, glittering potion causes me to shimmer and flicker, making me appear to be standing next to my actual location. Until the start of my next turn, all attacks against me are made with disadvantage.",
};

MagicItemsList["shepherd’s bane"] = {
	name : "Shepherd’s Bane",
	source : [["OTftTG", 221]],
	type : "potion",
	rarity : "common",
	description : 
		"When I drink this potion, I grow claws which last for 1 hour. For the duration, my unarmed strikes using my claws deal slashing damage equal to 1d6 plus my Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.",
	descriptionFull:
		"It is said that this potion was first brewed in the Gale Fields by a young shepherd looking to protect their flock. The irony was not lost on them when they drank the potion and took on wolflike features. When I drink this potion, I grow claws which last for 1 hour. For the duration, my unarmed strikes using my claws deal slashing damage equal to 1d6 plus my Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.",
};

MagicItemsList["bottled bomb"] = {
	name : "Bottled Bomb",
	source : [["OTftTG", 221]],
	type : "potion",
	rarity : "common",
	description : 
		"When thrown at a point that I can see within 60 feet of me, this volatile liquid explodes. Each creature within 5 feet of the explosion must make a DC 14 Dexterity saving throw, taking 1d8 force damage on a failed save, or half as much damage on a successful one.",
	descriptionFull:
		"When thrown at a point that I can see within 60 feet of me, this volatile liquid explodes. Each creature within 5 feet of the explosion must make a DC 14 Dexterity saving throw, taking 1d8 force damage on a failed save, or half as much damage on a successful one.",
};

MagicItemsList["wonder juice"] = {
	name : "Wonder Juice",
	source : [["OTftTG", 221]],
	type : "potion",
	rarity : "common",
	description : 
		"For 1 minute, everything I am wearing or carrying is considered magical, allowing weapons I wield to overcome resistance and immunity to nonmagical attacks and damage.",
	descriptionFull:
		"When I drink this multicolored potion, I instantly feel magical. For 1 minute, everything I am wearing or carrying is considered magical, allowing weapons I wield to overcome resistance and immunity to nonmagical attacks and damage.",
};

MagicItemsList["candlecap"] = {
	name : "Candlecap",
	source : [["OTftTG", 221]],
	type : "potion",
	rarity : "common",
	description : 
		"For an hour, I gain the following benefits. I shed bright light in 20 ft and dim light for 20 ft. Once on my turn, I can +1d4 Fire dmg to my unarmed strikes. Additionally, I can take an action to deal AOE 2d4 Fire dmg to all crea within 5 ft of me; using this ability causes the effects of the potion to end early",
	descriptionFull:
		"After imbibing this potion, I gain lively flaming locks, which last for 1 hour and shed bright light in a 20-foot radius and dim light for an additional 20 feet. Once on each of my turns for the duration, I can cause an unarmed strike made with my head to deal an extra 1d4 fire damage. Additionally, I can take an action to cause the flame on my head to flare up and burst outward, dealing 2d4 fire damage to all other creatures within 5 feet of me; using this ability causes the effects of this potion to end early.",
};

MagicItemsList["eagle’s vision"] = {
	name : "Eagle’s Vision",
	source : [["OTftTG", 221]],
	type : "potion",
	rarity : "common",
	description : 
		"For the next minute, attacking at long range doesn’t impose disadvantage on my ranged weapon attack rolls.",
	descriptionFull:
		"When I drink this potion, my eyes grow slightly larger and turn the golden color of an eagle. For the next minute, attacking at long range doesn’t impose disadvantage on my ranged weapon attack rolls.",
};

MagicItemsList["paranoia"] = {
	name : "Paranoia",
	source : [["OTftTG", 221]],
	type : "potion",
	rarity : "common",
	description : 
		"For the next 8 hours, I can’t be surprised.",
	descriptionFull:
		"When I drink this potion, I gain heightened senses along with the sneaking suspicion that I am being stalked. For the next 8 hours, I can’t be surprised.",
};

MagicItemsList["bottled torch"] = {
	name : "Bottled Torch",
	source : [["OTftTG", 221]],
	type : "potion",
	rarity : "common",
	description : 
		"For 1 minute, I can make a melee weapon attack with the fiery blade as if it were an improvised weapon. On a hit, the target takes 2d4 fire damage. The blade disappears early if it is submerged in water.",
	descriptionFull:
		"When uncorked, this potion spews a hot yellow flame from its bottle for 1 minute, which resembles the shape of a blade. For the duration, I can make a melee weapon attack with the fiery blade as if it were an improvised weapon. On a hit, the target takes 2d4 fire damage. The blade disappears early if it is submerged in water.",
};

MagicItemsList["static shock"] = {
	name : "Static Shock",
	source : [["OTftTG", 222]],
	type : "potion",
	rarity : "common",
	description : 
		"Immediately after a creature touches me  or hits me with a melee attack made with a metal weapon in the next 24 hours, I can use my reaction to send a charge of static electricity back at that creature, dealing 1d10 lightning damage to it. Once I do so, the effects of this potion end.",
	descriptionFull:
		"This potion makes me feel tingly as it charges me up with static electricity. Immediately after a creature touches me  or hits me with a melee attack made with a metal weapon in the next 24 hours, I can use my reaction to send a charge of static electricity back at that creature, dealing 1d10 lightning damage to it. Once I do so, the effects of this potion end.",
};

MagicItemsList["incoming!"] = {
	name : "Incoming!",
	source : [["OTftTG", 222]],
	type : "potion",
	rarity : "common",
	description : 
		"For 1 minute, I gain a +2 bonus to AC against ranged attacks.",
	descriptionFull:
		"Upon drinking this potion, I become hyper-aware of threats from afar and my reflexes snap into action, empowering me to slip out of harm’s way or knock missiles aside. For 1 minute, I gain a +2 bonus to AC against ranged attacks.",
};

MagicItemsList["lightning breath"] = {
	name : "Lightning Breath",
	source : [["OTftTG", 222]],
	type : "potion",
	rarity : "common",
	description : 
		"For the duration, I can use a bonus action to exhale an arc of lightning at a creature I can see within 30 feet of me. The target must make a DC 12 Dexterity saving throw, taking 1d10 lightning damage on a failed save, or half as much damage on a successful one. Once I exhale this lightning, the effects of this potion end.",
	descriptionFull:
		"For 24 hours after drinking this shimmering gold liquid, my voice gains a crackling quality to it and my breath sparks and sputters. For the duration, I can use a bonus action to exhale an arc of lightning at a creature I can see within 30 feet of me. The target must make a DC 12 Dexterity saving throw, taking 1d10 lightning damage on a failed save, or half as much damage on a successful one. Once I exhale this lightning, the effects of this potion end.",
};

MagicItemsList["heroism"] = {
	name : "Heroism",
	source : [["OTftTG", 222]],
	type : "potion",
	rarity : "common",
	description : 
		"I gain advantage on the next attack roll I make within the next 24 hours.",
	descriptionFull:
		"When I drink this glowing red elixir, I gain advantage on the next attack roll I make within the next 24 hours.",
};

MagicItemsList["slugskin"] = {
	name : "Slugskin",
	source : [["OTftTG", 222]],
	type : "potion",
	rarity : "common",
	description : 
		"For the next minute, I have resistance to piercing damage. While the potion is active, I can choose to exude a slime trail as part of my movement.",
	descriptionFull:
		"Drinking this potion makes my skin thick, slippery, and rubbery. Spears and sharp objects that would normally pierce my skin have a hard time getting through this tough texture. For the next minute, I have resistance to piercing damage. While the potion is active, I can choose to exude a slime trail as part of my movement.",
};

MagicItemsList["thunderbelch"] = {
	name : "Thunderbelch",
	source : [["OTftTG", 222]],
	type : "potion",
	rarity : "common",
	description : 
		"Roll a d4 to determine the number of rounds I belch. On my turn that round, I must use my action to release the belch. Each creature other than me within 10 feet of me must make a DC 14 Constitution saving throw. On a failed save, a creature takes 3d8 thunder damage and is deafened until the end of my next turn. On a successful save, the creature takes half as much damage and isn’t deafened.",
	descriptionFull:
		"Upon ingesting this fiercely fizzing potion, roll a d4 to determine the number of rounds before I let forth a thunderous belch of epic proportions. On my turn that round, I must use my action to release the belch. Each creature other than me within 10 feet of me must make a DC 14 Constitution saving throw. On a failed save, a creature takes 3d8 thunder damage and is deafened until the end of my next turn. On a successful save, the creature takes half as much damage and isn’t deafened.",
};

MagicItemsList["seeking smoke"] = {
	name : "Seeking Smoke",
	source : [["OTftTG", 222]],
	type : "potion",
	rarity : "common",
	description : 
		"When thrown at a creature that I can see within 30 feet of me, this shimmering liquid explodes, releasing a billowing cloud of smoke. The targeted creature must succeed on a DC 12 Dexterity saving throw, or be coated in a cloak of smoke for 1 minute. A creature coated in smoke has disadvantage on Dexterity (stealth) checks made to hide.",
	descriptionFull:
		"When thrown at a creature that I can see within 30 feet of me, this shimmering liquid explodes, releasing a billowing cloud of smoke. The targeted creature must succeed on a DC 12 Dexterity saving throw, or be coated in a cloak of smoke for 1 minute. A creature coated in smoke has disadvantage on Dexterity (stealth) checks made to hide.",
};

MagicItemsList["dancing juice"] = {
	name : "Dancing Juice",
	source : [["OTftTG", 223]],
	type : "potion",
	rarity : "common",
	description : 
		"I can coat one melee weapon with this potion. Crea hit with this weapon in the next hour can be forced to make a CON save or have their spd reduced to 0 until the end of its next turn, after which the convulsing ends",
	descriptionFull:
		"I can coat one melee weapon with this potion. When I hit a creature with the coated weapon in the next hour, I can force it to make a DC 12 Constitution saving throw. On a failed save, the weapon is no longer coated in the potion, and the target begins to convulse in a manner that could be mistaken for an awkward, clumsy series of dance steps. The target’s speed is reduced to 0 until the end of its next turn, after which the convulsing ends.",
};

MagicItemsList["prickleskin"] = {
	name : "Prickleskin",
	source : [["OTftTG", 223]],
	type : "potion",
	rarity : "common",
	description : 
		"These spines lay flat but can be controlled by me to stand on end. When I successfully grapple a creature and as a bonus action while it remains grappled, I can deal 1d4 piercing damage to the target. The effects of this potion last for 1 minute.",
	descriptionFull:
		"Drinking this potion causes spines to emerge all over my body. These spines lay flat but can be controlled by me to stand on end. When I successfully grapple a creature and as a bonus action while it remains grappled, I can deal 1d4 piercing damage to the target. The effects of this potion last for 1 minute.",
};

MagicItemsList["tiny bubbles"] = {
	name : "Tiny Bubbles",
	source : [["OTftTG", 223]],
	type : "potion",
	rarity : "common",
	description : 
		"Drinking this pink causes a bubble to fill a 20 ft cube I can see within 30 ft of me. If the bubbles are left untouched, they float in place, remaining there for 1 hour. When a crea enters the bubble for the first time a turn, DEX save or the bubble bursts dealing 1d6 Thunder dmg to all crea inside the cube. The sound can be heard a mile away.",
	descriptionFull:
		"Drinking this pink, bitter-tasting potion, causes hundreds of small, iridescent bubbles to emerge from my nose and mouth and fill a 20-foot cube that I can see within 30 feet of me. If the bubbles are left untouched, they float in place, remaining there for 1 hour. When a creature enters a space occupied by the bubbles for the first time on a turn, it must make a DC 13 Dexterity saving throw. On a failed save, a cacophony of popping erupts as the bubbles burst, dealing 1d6 thunder damage to all creatures inside the cube. The sound of the bubbles popping can be heard from a mile away.",
};

MagicItemsList["claws of the crab king"] = {
	name : "Claws of the Crab King",
	source : [["OTftTG", 223]],
	type : "potion",
	rarity : "common",
	description : 
		"My hands turn into a handsome set of powerful crab claws. For 1 minute, my unarmed strikes using the claws deal double damage to objects and structures, and I make grapple checks using them with advantage. The claws can’t wield weapons or shields or do anything that requires manual precision, such as using tools or magic items or performing the somatic components of a spell.",
	descriptionFull:
		"My hands turn into a handsome set of powerful crab claws. For 1 minute, my unarmed strikes using the claws deal double damage to objects and structures, and I make grapple checks using them with advantage. The claws can’t wield weapons or shields or do anything that requires manual precision, such as using tools or magic items or performing the somatic components of a spell.",
};

MagicItemsList["rubberskin"] = {
	name : "Rubberskin",
	source : [["OTftTG", 223]],
	type : "potion",
	rarity : "common",
	description : 
		"When I drink this blue goo, my skin turns into a thick gray rubber. For 1 hour, I have resistance to lightning damage.",
	descriptionFull:
		"When I drink this blue goo, my skin turns into a thick gray rubber. For 1 hour, I have resistance to lightning damage.",
};

MagicItemsList["keening voice"] = {
	name : "Keening Voice",
	source : [["OTftTG", 223]],
	type : "potion",
	rarity : "common",
	description : 
		"When imbibed, this potion gives the drinker’s vocal cords a magic resonance. As a bonus action, I can make a ranged attack against a creature within 60 feet of me, using my Charisma (Performance) bonus for the attack bonus. The target is unaffected if can’t hear me. On a hit, the target takes 1d6 thunder damage. The effect of this potion lasts for 1 hour.",
	descriptionFull:
		"When I open this potion, a keening wail comes out of the bottle. When imbibed, this potion gives the drinker’s vocal cords a magic resonance. As a bonus action, I can make a ranged attack against a creature within 60 feet of me, using my Charisma (Performance) bonus for the attack bonus. The target is unaffected if can’t hear me. On a hit, the target takes 1d6 thunder damage. The effect of this potion lasts for 1 hour.",
};

MagicItemsList["kinetic pop"] = {
	name : "Kinetic Pop",
	source : [["OTftTG", 223]],
	type : "potion",
	rarity : "common",
	description : 
		"When poured over a nonmagical weapon, this potion fills the mundane item with kinetic energy, causing it to vibrate with anticipation. The next time I hit a creature with the weapon, the energy explodes, doubling the damage rolled by the weapon’s damage dice. The effects of this potion end after 1 hour or once the energy explodes.",
	descriptionFull:
		"When poured over a nonmagical weapon, this potion fills the mundane item with kinetic energy, causing it to vibrate with anticipation. The next time I hit a creature with the weapon, the energy explodes, doubling the damage rolled by the weapon’s damage dice. The effects of this potion end after 1 hour or once the energy explodes.",
};

MagicItemsList["healing gas"] = {
	name : "Healing Gas",
	source : [["OTftTG", 224]],
	type : "potion",
	rarity : "common",
	description : 
		"When thrown at a point that I can see within 60 feet of me, this volatile liquid explodes, releasing a crimson ball of gas. Each creature within 5 feet of the explosion regains a number of hit points equal to 1d4 + 1.",
	descriptionFull:
		"When thrown at a point that I can see within 60 feet of me, this volatile liquid explodes, releasing a crimson ball of gas. Each creature within 5 feet of the explosion regains a number of hit points equal to 1d4 + 1.",
};

MagicItemsList["cinderskin"] = {
	name : "Cinderskin",
	source : [["OTftTG", 224]],
	type : "potion",
	rarity : "common",
	description : 
		"When thrown at a point that I can see within 60 feet of me, this volatile liquid explodes, releasing a crimson ball of gas. Each creature within 5 feet of the explosion regains a number of hit points equal to 1d4 + 1.",
	descriptionFull:
		"When I drink this bubbling, black potion, my skin becomes encrusted with charcoal. For 1 hour, I have resistance to fire damage.",
};

MagicItemsList["iron mind"] = {
	name : "Iron Mind",
	source : [["OTftTG", 224]],
	type : "potion",
	rarity : "common",
	description : 
		"After imbibing this elixir, my eyes glow with a silveryblue hue. For 1 hour, I gain advantage on saving throws against being charmed and resistance to psychic damage.",
	descriptionFull:
		"After imbibing this elixir, my eyes glow with a silveryblue hue. For 1 hour, I gain advantage on saving throws against being charmed and resistance to psychic damage.",
};

//Uncommon Combat Potions
MagicItemsList["gargoyle hooch"] = {
	name : "Gargoyle Hooch",
	source : [["OTftTG", 224]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"Within seconds of swallowing the potion, my skin turns to living stone. For the next hour, I gain a +2 bonus to AC, and my walking speed is reduced by 5 feet.",
	descriptionFull:
		"This gray liquid tastes like mud and makes my tongue numb. Within seconds of swallowing the potion, my skin turns to living stone. For the next hour, I gain a +2 bonus to AC, and my walking speed is reduced by 5 feet.",
};

MagicItemsList["elixir of jipampa"] = {
	name : "Elixir of Jipampa",
	source : [["OTftTG", 224]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"For the next 24 hours I gain a +5 bonus to initiative rolls. Additionally, if a trigger would allow me to take a reaction, but I have already used my reaction this round, I can choose to take a second reaction; using this ability causes the effects of this potion to end early.",
	descriptionFull:
		"When I drink this potion, I can feel my nervous system gain a boost of furtive energy from the rabbit spirit, Jipampa. My pupils dilate and my reflexes become enhanced. For the next 24 hours I gain a +5 bonus to initiative rolls. Additionally, if a trigger would allow me to take a reaction, but I have already used my reaction this round, I can choose to take a second reaction; using this ability causes the effects of this potion to end early.",
};

MagicItemsList["catspeed"] = {
	name : "Catspeed",
	source : [["OTftTG", 225]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"Once within the next 24 hours when I take the Attack action, I can make two additional attacks as part of that action. Once I do so, the effects of this potion end. While the potion is active, I gain the ability to purr like a cat.",
	descriptionFull:
		"When I drink this potion, I am overwhelmed by a warm lethargic feeling that rests like a blanket over an intense burst of energy I feel swirling inside of me. Once within the next 24 hours when I take the Attack action, I can make two additional attacks as part of that action. Once I do so, the effects of this potion end. While the potion is active, I gain the ability to purr like a cat.",
};

MagicItemsList["durability"] = {
	name : "Durability",
	source : [["OTftTG", 225]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"When I drink this potion, my skin becomes as tough as thick leather that, for a short time, repairs itself. For 1 minute, I gain 10 temporary hit points at the start of each of my turns.",
	descriptionFull:
		"When I drink this potion, my skin becomes as tough as thick leather that, for a short time, repairs itself. For 1 minute, I gain 10 temporary hit points at the start of each of my turns.",
};

MagicItemsList["fire shield"] = {
	name : "Fire Shield",
	source : [["OTftTG", 225]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"The next time I would take fire damage, I take no damage and instead regain a number of hit points equal to half the damage I would have taken. The effects of this potion last for 24 hours or until I regain hit points in this way.",
	descriptionFull:
		"This potion burns like a hot tamale when I drink it and fills me with fiery strength. The next time I would take fire damage, I take no damage and instead regain a number of hit points equal to half the damage I would have taken. The effects of this potion last for 24 hours or until I regain hit points in this way.",
};

MagicItemsList["tunnel vision"] = {
	name : "Tunnel Vision",
	source : [["OTftTG", 225]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"The effects of this potion last for 1 minute. For the duration, the first time I hit a target with a weapon attack on each of my turns, it deals an extra 1d12 damage of the same type. Until the potion’s effects end, I also take a −2 penalty to AC.",
	descriptionFull:
		"Drinking this potion causes me to hyperfixate on my strikes but potentially opens me to counterattacks. The effects of this potion last for 1 minute. For the duration, the first time I hit a target with a weapon attack on each of my turns, it deals an extra 1d12 damage of the same type. Until the potion’s effects end, I also take a −2 penalty to AC.",
};

MagicItemsList["ratatam’s glowskin elixir"] = {
	name : "Ratatam’s Glowskin Elixir",
	source : [["OTftTG", 225]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"Once consumed, my skin sheds dim light in a 10 ft rad. As a bns, I can intensify the light—shedding bright light in a 10 ft rad, and dim light for an additional 10 ft—or diminish the light. Action to force each crea within 30 ft of me that can see, DC 16 CON save or blinded for 1 min. Affected crea repeat save at the end of each of its turns. The effects of this potion last for 8 hours or until I use the flare.",
	descriptionFull:
		"When I drink this potion, my skin begins to shed dim light in a 10-foot radius around me. As a bonus action, I can choose to intensify this light—shedding bright light in a 10-foot radius, and dim light for an additional 10 feet—or diminish the intensity again. Additionally, I can take an action to produce a flare of blinding light around me. Each creature within 30 feet of me that can see must succeed on a DC 16 Constitution saving throw or become blinded for 1 minute. An affected creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. The effects of this potion last for 8 hours or until I use the flare.",
};

MagicItemsList["don’t hit me juice"] = {
	name : "Don’t Hit Me Juice",
	source : [["OTftTG", 225]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"When thrown at a creature I can see within 30 feet of me. The target must succeed on a DC 16 WIS save or be pacified for 1 min. A pacified creature can’t attack, cast a spell that affects an enemy, or deal damage to another creature. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
	descriptionFull:
		"When thrown at a creature I can see within 30 feet of me, this bright pink elixir breaks, covering the creature in juice. The target must succeed on a DC 16 Wisdom saving throw or be pacified for 1 minute. A pacified creature can’t attack, cast a spell that affects an enemy, or deal damage to another creature. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
};

MagicItemsList["invulnerability"] = {
	name : "Invulnerability",
	source : [["OTftTG", 226]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"Until the start of my next turn, I am immune to all damage. On my next turn, I can’t move or take actions, as a wave of lethargy sweeps over me.",
	descriptionFull:
		"When I open this potion, it bursts forth with a symphonic fanfare. Until the start of my next turn, I am immune to all damage. On my next turn, I can’t move or take actions, as a wave of lethargy sweeps over me.",
};

MagicItemsList["bottled bind"] = {
	name : "Bottled Bind",
	source : [["OTftTG", 226]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"When thrown at a creature I can see within 30 feet of me. The target must succeed on a DC 15 STR save or become restrained for 1 min. The restrained target can use its action to make a DC 15 STR check. On a success, the target is no longer restrained.",
	descriptionFull:
		"When thrown at a creature I can see within 30 feet of me, this thick mudlike potion breaks, covering the creature in tacky glue. The target must succeed on a DC 15 Strength saving throw or become restrained for 1 minute. The restrained target can use its action to make a DC 15 Strength check. On a success, the target is no longer restrained.",
};

MagicItemsList["respiratory distress"] = {
	name : "Respiratory Distress",
	source : [["OTftTG", 226]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"I can throw it at a point I can see within 60 feet of me, causing it to break open and expand into a 15 ft rad cloud. Each crea within the cloud when it appears must make a DC 15 CON save. On a failed save, a creature spends its reaction coughing and snorting and its concentration is broken if it was concentrating.",
	descriptionFull:
		"This potion reacts instantly with air, rapidly expanding into a 15-foot-radius cloud of irritating gas when exposed. I can throw it at a point I can see within 60 feet of me, causing it to break open and release the cloud there. Each creature within the cloud when it appears must make a DC 15 Constitution saving throw. On a failed save, a creature spends its reaction coughing and snorting and its concentration is broken if it was concentrating.",
};

MagicItemsList["pumpkin patch guard"] = {
	name : "Pumpkin Patch Guard",
	source : [["OTftTG", 226]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"When consumed, my head transforms into a Jack-O’-Lantern. From my newly formed eyes I cast a cone of glowing light, which causes creatures in a 15 ft cone to be under the effects of the Faerie Fire spell. At the start of each of my turns while the effects last, I decide which way the cone faces and whether the cone is active. The effect of the potions lasts for 1 min.",
	descriptionFull:
		"When consumed, this warming harvest beverage transforms my head into a Jack-O’-Lantern. From my newly formed eyes I cast a cone of glowing light, which causes creatures in a 15-foot cone to be under the effects of the Faerie Fire spell. At the start of each of my turns while the effects last, I decide which way the cone faces and whether the cone is active. The effect of the potions lasts for 1 minute.",
};

MagicItemsList["sheep dragon brew"] = {
	name : "Sheep Dragon Brew",
	source : [["OTftTG", 226]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"One swig of this hearty potion will see me growing a thick coat of sheep dragon wool all around my body. Besides keeping me warm, it aids my survival and protects me from the cold. For the duration my AC increases by 1, and I gain resistance to cold damage. The effects of the potion last for 1 hour.",
	descriptionFull:
		"One swig of this hearty potion will see me growing a thick coat of sheep dragon wool all around my body. Besides keeping me warm, it aids my survival and protects me from the cold. For the duration my AC increases by 1, and I gain resistance to cold damage. The effects of the potion last for 1 hour.",
};

MagicItemsList["enhanced static shock"] = {
	name : "Enhanced Static Shock",
	source : [["OTftTG", 226]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"Immediately after a creature touches me or hits me with a melee attack made with a metal weapon in the next 24 hours, I can use my reaction to send a charge of static electricity back at that creature, dealing 3d10 lightning damage to it. Once I do so, the effects of this potion end.",
	descriptionFull:
		"This potion makes me feel tingly as it charges me up with static electricity. Immediately after a creature touches me or hits me with a melee attack made with a metal weapon in the next 24 hours, I can use my reaction to send a charge of static electricity back at that creature, dealing 3d10 lightning damage to it. Once I do so, the effects of this potion end.",
};

MagicItemsList["enhanced lightning breath"] = {
	name : "Enhanced Lightning Breath",
	source : [["OTftTG", 227]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"For 24 hr after drinking this, I can use a bns to exhale an arc of lightning at a creature I can see within 30 ft of me. The target must make a DC 16 DEX save, taking 3d10 lightning damage on a failed save, or half as much damage on a successful one. Once I exhale this lightning, the effects of this potion end.",
	descriptionFull:
		"For 24 hours after drinking this shimmering gold liquid, my voice gains a crackling quality to it and my breath sparks and sputters. For the duration, I can use a bonus action to exhale an arc of lightning at a creature I can see within 30 feet of me. The target must make a DC 16 Dexterity saving throw, taking 3d10 lightning damage on a failed save, or half as much damage on a successful one. Once I exhale this lightning, the effects of this potion end.",
};

MagicItemsList["enhanced bottled bomb"] = {
	name : "Enhanced Bottled Bomb",
	source : [["OTftTG", 227]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"When thrown at a point that I can see within 60 ft of me, this volatile liquid explodes. Each creature within 5 ft of the explosion must make a DC 16 DEX save, taking 3d8 force damage on a failed save, or half as much damage on a successful one.",
	descriptionFull:
		"When thrown at a point that I can see within 60 feet of me, this volatile liquid explodes. Each creature within 5 feet of the explosion must make a DC 16 Dexterity saving throw, taking 3d8 force damage on a failed save, or half as much damage on a successful one.",
};

MagicItemsList["wrathful spirit"] = {
	name : "Wrathful Spirit",
	source : [["OTftTG", 227]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"When consumed, Roll 2d8. For the duration, whenever I cast a spell, I can cause one target that took damage from it to take extra Force dmg equal to the number rolled. The effects of this potion last for 1 min.",
	descriptionFull:
		"When consumed, I feel the essence of a long-dead spirit overwhelm me. I feel on edge and have an undertone of rage that boils below the surface. Roll 2d8. For the duration, whenever I cast a spell, I can cause one target that took damage from it to take extra force damage equal to the number rolled. The effects of this potion last for 1 minute.",
};

MagicItemsList["rapid withdrawal"] = {
	name : "Rapid Withdrawal",
	source : [["OTftTG", 227]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"When I drink this potion, motes of pink light erupt from my body and orbit around me. For 1 min, whenever I take damage from a hostile creature, I can use my reaction to teleport up to 15 ft to an unoccupied space I can see.",
	descriptionFull:
		"When I drink this potion, motes of pink light erupt from my body and orbit around me. For 1 minute, whenever I take damage from a hostile creature, I can use my reaction to teleport up to 15 feet to an unoccupied space I can see.",
};

MagicItemsList["life-steal"] = {
	name : "Life-steal",
	source : [["OTftTG", 227]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"This dangerous and disliked potion transforms when used. As an action, I can uncork the potion and point it toward a crea within 10 ft of me. The target takes 3d6 Necrotic dmg, and the potion transforms into a healing elixir. A creature that consumes this elixir regains a number of hit points equal to the Necrotic dmg dealt.",
	descriptionFull:
		"This dangerous and disliked potion transforms when used. As an action, I can uncork the potion and point it toward a creature within 10 feet of me. The target takes 3d6 necrotic damage, and the potion transforms into a healing elixir. A creature that consumes this elixir regains a number of hit points equal to the necrotic damage dealt.",
};

MagicItemsList["demonskin"] = {
	name : "Demonskin",
	source : [["OTftTG", 227]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"Once I drink it, my skin takes on a glowing burgundy hue and my eyes turn a sickly crimson. For 1 min, I gain a +2 bonus to AC and resistance to Cold, Fire, and Lightning dmg, as well as Bludgeoning, Piercing, and Slashing dmg from nonmagical attacks. Until the potion’s effects end, my creature type changes to Demon (Fiend).",
	descriptionFull:
		"Uncorking this potion, I am immediately assaulted with a powerfully pungent, acrid odor. Once I drink it, my skin takes on a glowing burgundy hue and my eyes turn a sickly crimson. For 1 minute, I gain a +2 bonus to AC and resistance to cold, fire, and lightning damage, as well as bludgeoning, piercing, and slashing damage from nonmagical attacks. Until the potion’s effects end, my creature type changes to Demon (Fiend).",
};

//Rare Combat Potions
MagicItemsList["withered will"] = {
	name : "Withered Will",
	source : [["OTftTG", 228]],
	type : "potion",
	rarity : "rare",
	description : 
		"After drinking this, I gain the ability to breathe a cloud of withering vapor. For the next min, I can use a bns to exhale a 60 ft cone. Each crea in that area must make a DC 17 CON save. On a failed save, a crea’s speed is halved, it can’t take reactions, and it has DISadv on attack rolls until the start of my next turn. At the start of my next turn, roll a d6. I regain the use of this ability on a roll of 4–6.",
	descriptionFull:
		"After drinking this light and dewy potion, I gain the ability to breathe a cloud of withering vapor. For the next minute, I can use a bonus action to exhale a cloud in a 60-foot cone. Each creature in that area must make a DC 17 Constitution saving throw. On a failed save, a creature’s speed is halved, it can’t take reactions, and it has disadvantage on attack rolls until the start of my next turn. At the start of my next turn, roll a d6. I regain the use of this ability on a roll of 4–6.",
};

MagicItemsList["astounding vigor"] = {
	name : "Astounding Vigor",
	source : [["OTftTG", 228]],
	type : "potion",
	rarity : "rare",
	description : 
		"When I drink this hearty potion, I feel the strongest and healthiest I’ve ever felt. For the duration, I gain a number of temporary hit points equal to my hit point maximum. The effects of this potion last for 24 hours or until these temporary hit points are lost.",
	descriptionFull:
		"When I drink this hearty potion, I feel the strongest and healthiest I’ve ever felt. For the duration, I gain a number of temporary hit points equal to my hit point maximum. The effects of this potion last for 24 hours or until these temporary hit points are lost.",
};

MagicItemsList["many hands"] = {
	name : "Many Hands",
	source : [["OTftTG", 228]],
	type : "potion",
	rarity : "rare",
	description : 
		"Long, spectral arms reach out from my body. Anyone who can see me when the hands first emerge, DC 19 WIS save or be frightened until the start of my next turn; friendly crea have ADV on this save. All other crea within 20 ft of me, DC 19 CON save. On fail, takes 10d6 Necrotic dmg and can’t regain HP until the start of my next turn. On save, the creature takes half dmg, and suffers no other effect.",
	descriptionFull:
		"When I drink this potion I can call upon an ancient and devious spirit known as Many Hands. When I do, a host of long, spindly, spectral arms reach out from my body. Anyone who can see me when the hands first emerge must succeed on a DC 19 Wisdom saving throw or be frightened until the start of my next turn; creatures that are friendly to me have advantage on this save. Additionally, the arms lash out from me, clawing at all other creatures within 20 feet of me. Each creature in that area must make a DC 19 Constitution saving throw. On a failed save, a target takes 10d6 necrotic damage and can’t regain hit points until the start of my next turn. On a successful save, the creature takes half as much damage, but suffers no other effect.",
};

MagicItemsList["epic bottled bomb"] = {
	name : "Epic Bottled Bomb",
	source : [["OTftTG", 228]],
	type : "potion",
	rarity : "rare",
	description : 
		"When thrown at a point that I can see within 60 ft of me, this volatile liquid explodes. Each crea within 30 ft of the explosion must make a DC 19 DEX save, taking 20d6 Force damage on a failed save; half as much dmg on a success.",
	descriptionFull:
		"When thrown at a point that I can see within 60 feet of me, this volatile liquid explodes. Each creature within 30 feet of the explosion must make a DC 19 Dexterity saving throw, taking 20d6 force damage on a failed save, or half as much damage on a successful one.",
};

MagicItemsList["essence of great rivers"] = {
	name : "Essence of Great Rivers",
	source : [["OTftTG", 229]],
	type : "potion",
	rarity : "rare",
	description : 
		"For the next 24 hours, I can call on their strength to aid me. If I fail a saving throw, I can choose to succeed instead. I can do so three times before the magic of the potion fades.",
	descriptionFull:
		"This crystal clear potion captures the essence of the four great river spirits Mu, Go, Yon, and Din. For the next 24 hours, I can call on their strength to aid me. If I fail a saving throw, I can choose to succeed instead. I can do so three times before the magic of the potion fades.",
};

MagicItemsList["carla cackletooth’s corruption cocktail"] = {
	name : "Carla Cackletooth’s Corruption Cocktail",
	source : [["OTftTG", 229]],
	type : "potion",
	rarity : "rare",
	description : 
		"When poured out, it summons 10 corrupted muks, which are at my beck and call and under my control until destroyed.",
	descriptionFull:
		"This potion was invented by none other than the legendary Carla Cackletooth, a witch of considerable potion making prowess. When poured out, it summons 10 corrupted muks, which are at my beck and call and under my control until destroyed.",
};

MagicItemsList["hunter’s speed"] = {
	name : "Hunter’s Speed",
	source : [["OTftTG", 229]],
	type : "potion",
	rarity : "rare",
	description : 
		"Roll a d4. For the duration, I gain a Flying spf of 90 ft, and whenever I take the Attack action, I can make an additional number of attacks equal to 1 + the number rolled on the d4. The effects of this potion last for 1 min.",
	descriptionFull:
		"When this amber potion is consumed, I gain the attributes of the Hunter, one of the great beasts of Obojima. Roll a d4. For the duration, I gain a flying speed of 90 feet, and whenever I take the Attack action, I can make an additional number of attacks equal to 1 + the number rolled on the d4. The effects of this potion last for 1 minute.",
};

MagicItemsList["hero’s blade"] = {
	name : "Hero’s Blade",
	source : [["OTftTG", 229]],
	type : "potion",
	rarity : "rare",
	description : 
		"When poured over a weapon, this heroic elixir stains it blue and causes it to shimmer as if it were a gemstone reflecting light. For the next min, the weapon gains a +3 bonus to attack and damage rolls. Until this effect ends, creatures hit by this weapon don’t benefit from any damage immunities or resistances they have, if any, for 1 min.",
	descriptionFull:
		"When poured over a weapon, this heroic elixir stains it blue and causes it to shimmer as if it were a gemstone reflecting light. For the next minute, the weapon gains a +3 bonus to attack and damage rolls. Until this effect ends, creatures hit by this weapon don’t benefit from any damage immunities or resistances they have, if any, for 1 minute.",
};

MagicItemsList["severed reaction"] = {
	name : "Severed Reaction",
	source : [["OTftTG", 229]],
	type : "potion",
	rarity : "rare",
	description : 
		"While under the effects of this potion, I can take two rea each round instead of one. Each time I take a second reaction, I lose a number of HP equal to half my level. This potion’s effect is permanent, and it doesn’t count against the number of potions I can have affecting me at once.",
	descriptionFull:
		"Consuming this foggy brew gives me a headache I can never quite alleviate. While under the effects of this potion, I can take two reactions each round instead of one. Each time I take a second reaction, I lose a number of hit points equal to half my level. This potion’s effect is permanent, and it doesn’t count against the number of potions I can have affecting me at once.",
};

MagicItemsList["dragon frog transmutation"] = {
	name : "Dragon Frog Transmutation",
	source : [["OTftTG", 229]],
	type : "potion",
	rarity : "rare",
	description : 
		"After guzzling down this froggy potion, I turn into an Ancient Dragon Frog, as if by the true polymorph spell. This transformation lasts for 1 min, or 10 min if a Dragon Fang of Yutro was used when brewing this potion.",
	descriptionFull:
		"After guzzling down this froggy potion, I turn into an Ancient Dragon Frog, as if by the true polymorph spell. This transformation lasts for 1 minute, or 10 minutes if a Dragon Fang of Yutro was used when brewing this potion.",
};


/*
 * Utility Potions
 */

//Common Utility Potions
MagicItemsList["sensorius maximus"] = {
	name : "Sensorius Maximus",
	source : [["OTftTG", 230]],
	type : "potion",
	rarity : "common",
	description : 
		"For the next hour, I gain a +3 bonus to Wisdom (Perception) checks.",
	descriptionFull:
		"This effervescent green potion tastes like an old sock. When imbibed, it heightens all the senses with an expansive, almost euphoric feeling. For the next hour, I gain a +3 bonus to Wisdom (Perception) checks.",
};

MagicItemsList["flip and skip"] = {
	name : "Flip and Skip",
	source : [["OTftTG", 230]],
	type : "potion",
	rarity : "common",
	description : 
		"For the next hour, I gain a +3 bonus to Dexterity (Acrobatics) checks.",
	descriptionFull:
		"This blue potion sparkles and fizzes when opened and makes my tongue tingle when imbibed. For the next hour, I gain a +3 bonus to Dexterity (Acrobatics) checks.",
};

MagicItemsList["brute brew"] = {
	name : "Brute Brew",
	source : [["OTftTG", 230]],
	type : "potion",
	rarity : "common",
	description : 
		"For the next hour, I gain a +3 bonus to Strength (Athletics) checks.",
	descriptionFull:
		"Drinking this brownish broth fills my sinews with ogreish power. For the next hour, I gain a +3 bonus to Strength (Athletics) checks.",
};

MagicItemsList["animal affinity"] = {
	name : "Animal Affinity",
	source : [["OTftTG", 230]],
	type : "potion",
	rarity : "common",
	description : 
		"For the next hour, I gain a +3 bonus to Wisdom (Animal Handling) checks.",
	descriptionFull:
		"This potion has a violet color and smells like a spring meadow. When I drink it, I become very calm and are able to sense the subtle cues from all kinds of animals. For the next hour, I gain a +3 bonus to Wisdom (Animal Handling) checks.",
};

MagicItemsList["detective’s tonic"] = {
	name : "Detective’s Tonic",
	source : [["OTftTG", 230]],
	type : "potion",
	rarity : "common",
	description : 
		"For the next hour, I gain a +3 bonus to Intelligence (Investigation) checks.",
	descriptionFull:
		"This subtle bourbon-flavored potion burns when consumed. For the next hour, I gain a +3 bonus to Intelligence (Investigation) checks.",
};

MagicItemsList["cave diver"] = {
	name : "Cave Diver",
	source : [["OTftTG", 230]],
	type : "potion",
	rarity : "common",
	description : 
		"When poured on my hands and feet, they temporarily become stained with a deep indigo color. For the next 10 minutes, I gain the ability to move up, down, and across vertical surfaces and upside down along ceilings, while leaving my hands free. I also gain a climbing speed equal to my walking speed.",
	descriptionFull:
		"When poured on my hands and feet, they temporarily become stained with a deep indigo color. For the next 10 minutes, I gain the ability to move up, down, and across vertical surfaces and upside down along ceilings, while leaving my hands free. I also gain a climbing speed equal to my walking speed.",
};

MagicItemsList["cave diver"] = {
	name : "Cave Diver",
	source : [["OTftTG", 230]],
	type : "potion",
	rarity : "common",
	description : 
		"When poured on my hands and feet, they temporarily become stained with a deep indigo color. For the next 10 minutes, I gain the ability to move up, down, and across vertical surfaces and upside down along ceilings, while leaving my hands free. I also gain a climbing speed equal to my walking speed.",
	descriptionFull:
		"When poured on my hands and feet, they temporarily become stained with a deep indigo color. For the next 10 minutes, I gain the ability to move up, down, and across vertical surfaces and upside down along ceilings, while leaving my hands free. I also gain a climbing speed equal to my walking speed.",
};

MagicItemsList["perfect memory"] = {
	name : "Perfect Memory",
	source : [["OTftTG", 231]],
	type : "potion",
	rarity : "common",
	description : 
		"For 1 hour after drinking this potion, everything I see and hear is recorded perfectly in my memory. I can recall these memories up to 24 hours later. After that, all the memories begin to fade with only the most memorable parts remaining.",
	descriptionFull:
		"For 1 hour after drinking this potion, everything I see and hear is recorded perfectly in my memory. I can recall these memories up to 24 hours later. After that, all the memories begin to fade with only the most memorable parts remaining.",
};

MagicItemsList["eyes of akibu"] = {
	name : "Eyes of Akibu",
	source : [["OTftTG", 231]],
	type : "potion",
	rarity : "common",
	description : 
		"For 4 hours, I can see up to 300 feet away as if looking at something one-tenth as far away from me.",
	descriptionFull:
		"When this potion is poured over my eyes, my longrange vision enhances. For 4 hours, I can see up to 300 feet away as if looking at something one-tenth as far away from me.",
};

MagicItemsList["glowskin"] = {
	name : "Glowskin",
	source : [["OTftTG", 231]],
	type : "potion",
	rarity : "common",
	description : 
		"For 4 hours, I can see up to 300 feet away as if looking at something one-tenth as far away from me.",
	descriptionFull:
		"When this potion is poured over my eyes, my longrange vision enhances. For 4 hours, I can see up to 300 feet away as if looking at something one-tenth as far away from me.",
};

MagicItemsList["tiny telekinesis"] = {
	name : "Tiny Telekinesis",
	source : [["OTftTG", 231]],
	type : "potion",
	rarity : "common",
	description : 
		"For the next min, I gain the ability to move an inanimate obj (no more than 5 inches in diameter and 1 lb in weight, not worn or carried) within 60 ft of me with my mind using an action. I can move the obj up to 30 ft in any direction, and I can’t move it more than 60 ft away from me.",
	descriptionFull:
		"When I drink this potion, I feel a slight pressure behind my eyes as though something is pushing on the inside of my skull trying to get out. For the next minute, I gain the ability to move an inanimate object within 60 feet of me with my mind. The object can be no larger than 5 inches in diameter and weigh no more than 1 pound, and it can’t be worn or carried. Moving an object in this way requires an action. I can move the object up to 30 feet in any direction, and I can’t move it more than 60 feet away from me.",
};

MagicItemsList["irresistible charm"] = {
	name : "Irresistible Charm",
	source : [["OTftTG", 231]],
	type : "potion",
	rarity : "common",
	description : 
		"For the next 10 minutes, I gain expertise in the Persuasion skill, which means I can add twice my proficiency bonus to any ability check I make with it.",
	descriptionFull:
		"Once imbibed, a tingling sensation builds within me, bubbling up into a giddy euphoria of confident charm. For the next 10 minutes, I gain expertise in the Persuasion skill, which means I can add twice my proficiency bonus to any ability check I make with it.",
};

MagicItemsList["pathseeking"] = {
	name : "Pathseeking",
	source : [["OTftTG", 231]],
	type : "potion",
	rarity : "common",
	description : 
		"This potion is brewed for the specific task of detecting tracks left by a secret path potion. These tracks appear to me as glowing footprints made with uncanny detail. I also gain the ability to see into the Spirit Realm (Ethereal Plane). The effects of this potion last for 1 hour.",
	descriptionFull:
		"This potion is brewed for the specific task of detecting tracks left by a secret path potion. These tracks appear to me as glowing footprints made with uncanny detail. I also gain the ability to see into the Spirit Realm (Ethereal Plane). The effects of this potion last for 1 hour.",
};

MagicItemsList["iron belly"] = {
	name : "Iron Belly",
	source : [["OTftTG", 231]],
	type : "potion",
	rarity : "common",
	description : 
		"When imbibed, I gain 5 temporary hit points and resistance to poison damage for 1 hour.",
	descriptionFull:
		"Legend has it that Obojiman rangers would use this potion during long treks in the wilderness so they could eat unknown roots and fungi as well as drink from lakes and lowland streams without fear of illness. When imbibed, I gain 5 temporary hit points and resistance to poison damage for 1 hour.",
};

MagicItemsList["face of fugari"] = {
	name : "Face of Fugari",
	source : [["OTftTG", 231]],
	type : "potion",
	rarity : "common",
	description : 
		"For the next minute, I have advantage on Charisma (Intimidation) checks.",
	descriptionFull:
		"Fugari is a figure of legend, a dragon frog who would glower at his subjects, filling them with dread at being swallowed whole. Drinking this potion gives me a grim, bullfroggish demeanor which strikes fear into those who view me. For the next minute, I have advantage on Charisma (Intimidation) checks.",
};

MagicItemsList["duck foot"] = {
	name : "Duck Foot",
	source : [["OTftTG", 232]],
	type : "potion",
	rarity : "common",
	description : 
		"For the next hour, I gain a swimming speed of 40 feet and am able to make a very convincing quacking sound.",
	descriptionFull:
		"When I drink this brackish-smelling potion, my hands and feet begin to tingle. Within seconds, they turn a bright orange and become webbed like a mallard’s feet. For the next hour, I gain a swimming speed of 40 feet and am able to make a very convincing quacking sound.",
};

MagicItemsList["potion of fog"] = {
	name : "Potion of Fog",
	source : [["OTftTG", 232]],
	type : "potion",
	rarity : "common",
	description : 
		"I duplicate the effect of the Fog Cloud spell (no concentration required) centered on me. The cloud lasts for 1 hr, and it moves with me, remaining centered on me. As an action, I can cause it to remain centered on that space for the duration. The fog produces a scent of my choice.",
	descriptionFull:
		"When I drink this potion, a billow of thick fog pours from my mouth, duplicating the effect of the Fog Cloud spell (no concentration required) centered on me. The cloud lasts for 1 hour, and it moves with me, remaining centered on me. As an action, I can expel all remaining fog from my stomach, causing it to remain centered on that space for the duration. The fog produces a scent of my choice.",
};

MagicItemsList["secret path"] = {
	name : "Secret Path",
	source : [["OTftTG", 232]],
	type : "potion",
	rarity : "common",
	description : 
		"When applied to a pair of boots, it allows the wearer to leave a trail of magical tracks invisible to the naked eye. This trail is only visible to creatures who can see invisible objects or has imbibed a pathseeking potion. The boots leave tracks for 24 hours, and the tracks last for one month before fading from view.",
	descriptionFull:
		"When this potion is applied to a pair of boots, it allows their wearer to leave a trail of magical tracks that are invisible to the naked eye. This trail is only visible to a creature who can see invisible objects (such as one benefiting from see invisibility or truesight) or has imbibed a pathseeking potion. When this potion is brewed, the creator can choose the color of the tracks. The boots leave tracks for 24 hours, and the tracks last for one month before fading from view.",
};

MagicItemsList["grandma’s turnip soup"] = {
	name : "Grandma’s Turnip Soup",
	source : [["OTftTG", 232]],
	type : "potion",
	rarity : "common",
	description : 
		"When I consume it during a short rest, I can roll 1d4 Hit Dice (adding my CON mod to each and regaining HP equal to the total) without expending them.",
	descriptionFull:
		"This potion tastes like a soup made with love. When I consume it during a short rest, I can roll 1d4 Hit Dice (adding my Constitution modifier to each and regaining hit points equal to the total) without expending them.",
};

MagicItemsList["herbalist’s aid"] = {
	name : "Herbalist’s Aid",
	source : [["OTftTG", 232]],
	type : "potion",
	rarity : "common",
	description : 
		"For the next hour, I gain a +3 bonus to all ability checks made to locate an ingredient.",
	descriptionFull:
		"Drinking this highly sought-after potion grants me a unique sense helpful for detecting ingredients. For the next hour, I gain a +3 bonus to all ability checks made to locate an ingredient.",
};

MagicItemsList["homeward tonic"] = {
	name : "Homeward Tonic",
	source : [["OTftTG", 232]],
	type : "potion",
	rarity : "common",
	description : 
		"For the next 24 hours, I always know the direction of the place I consider home, provided it is on the same plane of existence.",
	descriptionFull:
		"This fiery red elixir smells of home and drinking it gives a sensation of comfort when consumed. For the next 24 hours, I always know the direction of the place I consider home, provided it is on the same plane of existence.",
};

MagicItemsList["soft paw"] = {
	name : "Soft Paw",
	source : [["OTftTG", 232]],
	type : "potion",
	rarity : "common",
	description : 
		"For the next 10 minutes, I have advantage on Dexterity checks.",
	descriptionFull:
		"When consumed, this liquorice-flavored potion turns my hands and feet into fur-covered paws. For the next 10 minutes, I have advantage on Dexterity checks.",
};

MagicItemsList["potion of healing touch"] = {
	name : "Potion of Healing Touch",
	source : [["OTftTG", 232]],
	type : "potion",
	rarity : "common",
	description : 
		"As a bns, I can touch a creature, causing it to regain 2d4 hit points. This potion’s effects last 1 hour or until I have used this ability.",
	descriptionFull:
		"When this glowing blue potion is poured on my hands, it gives me the ability to heal. As a bns, I can touch a creature, causing it to regain 2d4 hit points. This potion’s effects last 1 hour or until I have used this ability.",
};

MagicItemsList["cat’s eye"] = {
	name : "Cat’s Eye",
	source : [["OTftTG", 233]],
	type : "potion",
	rarity : "common",
	description : 
		"When I imbibe this potion, my eyes become catlike, and I can choose their color. For the next hour, I gain darkvision out to a range of 60 ft. If I already have darkvision from another source, its range increases by 30 ft.",
	descriptionFull:
		"When I imbibe this potion, my eyes become catlike, and I can choose their color. For the next hour, I gain darkvision out to a range of 60 feet. If I already have darkvision from another source, its range increases by 30 feet.",
};

MagicItemsList["liquid mending"] = {
	name : "Liquid Mending",
	source : [["OTftTG", 233]],
	type : "potion",
	rarity : "common",
	description : 
		"I can pour this potion over an object to repair a single break or tear in it, as if by the Mending spell.",
	descriptionFull:
		"Also known as “craftsman in a bottle,” this well-loved potion is found in most homes and shops. I can pour this potion over an object to repair a single break or tear in it, as if by the Mending spell.",
};

MagicItemsList["liquid lockpick"] = {
	name : "Liquid Lockpick",
	source : [["OTftTG", 233]],
	type : "potion",
	rarity : "common",
	description : 
		"I can pour the potion into a lock, loosening the mechanism inside and decreasing the DC to pick it by 1d4. Once a lock’s DC is reduced by this potion, its DC can’t be reduced by another liquid lockpick potion. The effects of this potion last for 1 hour.",
	descriptionFull:
		"Although frowned upon in many villages, this useful potion is still sought after by many islanders for both wholesome and nefarious reasons. I can pour the potion into a lock, loosening the mechanism inside and decreasing the DC to pick it by 1d4. Once a lock’s DC is reduced by this potion, its DC can’t be reduced by another liquid lockpick potion. The effects of this potion last for 1 hour.",
};

MagicItemsList["language lore"] = {
	name : "Language Lore",
	source : [["OTftTG", 233]],
	type : "potion",
	rarity : "common",
	description : 
		"For 1 hour after drinking it, I understand the literal meaning of any spoken language that I hear.",
	descriptionFull:
		"This grayish potion tastes like chewed up paper. For 1 hour after drinking it, I understand the literal meaning of any spoken language that I hear.",
};

MagicItemsList["pig snout"] = {
	name : "Pig Snout",
	source : [["OTftTG", 233]],
	type : "potion",
	rarity : "common",
	description : 
		"For the next hour, I become very fond of truffles, perhaps even to the point of belligerence, and I have advantage on Wisdom (Perception) checks that rely on smell.",
	descriptionFull:
		"After drinking this pink pastel potion, there is a brief uncomfortable transformation, where the imbiber grows a beautiful, snuffling pig snout. For the next hour, I become very fond of truffles, perhaps even to the point of belligerence, and I have advantage on Wisdom (Perception) checks that rely on smell.",
};

MagicItemsList["machine oil"] = {
	name : "Machine Oil",
	source : [["OTftTG", 233]],
	type : "potion",
	rarity : "common",
	description : 
		"When poured over a machine that is in working condition, this dark black liquid powers up the device, allowing it to function as if it were whelmed by a spirit or activated by the Jolt spell. The machine stays powered by this potion for 1 minute.",
	descriptionFull:
		"When poured over a machine that is in working condition, this dark black liquid powers up the device, allowing it to function as if it were whelmed by a spirit or activated by the Jolt spell. The machine stays powered by this potion for 1 minute.",
};

MagicItemsList["potion of soft steps"] = {
	name : "Potion of Soft Steps",
	source : [["OTftTG", 233]],
	type : "potion",
	rarity : "common",
	description : 
		"For the next 10 minutes, I gain a +2 bonus to Dexterity (Stealth) checks, and I leave no discernible tracks.",
	descriptionFull:
		"When I drink this frothy brew, I float an inch off the ground and walk on a cushion of air. For the next 10 minutes, I gain a +2 bonus to Dexterity (Stealth) checks, and I leave no discernible tracks.",
};

MagicItemsList["liquid cat"] = {
	name : "Liquid Cat",
	source : [["OTftTG", 233]],
	type : "potion",
	rarity : "common",
	description : 
		"This lively swirling concoction transforms and solidifies into a friendly cat when poured out. The cat serves me as a familiar, as if from the Find Familiar spell. The cat disappears after 24 hours.",
	descriptionFull:
		"This lively swirling concoction transforms and solidifies into a friendly cat when poured out. The cat serves me as a familiar, as if from the Find Familiar spell. The cat disappears after 24 hours.",
};

//Uncommon Utility Potions
MagicItemsList["twin vision"] = {
	name : "Twin Vision",
	source : [["OTftTG", 234]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"Two crea share the pot, half each. When the second half of the potion is consumed, the first crea can see through the eyes of the second, gaining the benefits of any special senses that crea has, but is blind with regard to its own senses. Either crea, action to stop/start shared vision. Lasts for 8 hr, and it can’t be used if the crea are more than 1 mile apart.",
	descriptionFull:
		"This potion must be shared with another creature, each of them ingesting half of the potion. When the second half of the potion is consumed, the first creature gains the ability to see through the eyes of the second creature, gaining the benefits of any special senses that creature has. While seeing in this way, the first creature is blind with regard to its own senses. Either creature can use its action to stop shared vision or reactivate it. This ability lasts for 8 hours, and it can’t be used if the creatures are more than 1 mile apart.",
};

MagicItemsList["twin vision"] = {
	name : "Twin Vision",
	source : [["OTftTG", 234]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"Can either be imbibed or poured on a 1-ft square. Any spirit of CR 5 or lower within 30 ft of you or the square, DC 15 CHA save. On a fail, the spirit is teleported to a random unoccupied space that is 35 ft away from you or the square, and can’t willingly move to a space within range for 1 min. A spirit that hasn’t made this save must immediately do so if it moves within range.",
	descriptionFull:
		"This potion can either be imbibed or poured on a 1-foot square causing the nearby area to become repulsive to spirits. Any spirit that has a challenge rating of 5 or lower within 30 feet of you or the square must make a DC 15 Charisma saving throw. On a failed save, the spirit is teleported to a random unoccupied space that is 35 feet away from you or the square, and can’t willingly move to a space within range for 1 minute. A spirit that hasn’t made this save must immediately do so if it moves within range, becoming affected by the repellant for the duration on a failed save.",
};

MagicItemsList["essence of the river spirit"] = {
	name : "Essence of the River Spirit",
	source : [["OTftTG", 234]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"When the vial is opened, I can pour the liquid into a small pool of water, such as a bath or hot spring, transforming it into a healing pool. A crea that soaks in the pool for at least 10 min regains 4d4 + 4 hit points. The pool loses its magic after 1 hr or once six crea have benefited from this effect.",
	descriptionFull:
		"This small, stoppered vial contains a clear liquid that shimmers with a faint blue light. When the vial is opened, I can pour the liquid into a small pool of water, such as a bath or hot spring, transforming it into a healing pool. A creature that soaks in the pool for at least 10 minutes regains 4d4 + 4 hit points. The pool loses its magic after 1 hour or once six creatures have benefited from this effect.",
};

MagicItemsList["potion of freezing"] = {
	name : "Potion of Freezing",
	source : [["OTftTG", 234]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"Pouring this grayish blue potion into any liquid will cause that liquid to freeze solid for 1 hour, after which it begins to thaw as normal. This effect can freeze no more than a 20-foot cube of liquid.",
	descriptionFull:
		"Pouring this grayish blue potion into any liquid will cause that liquid to freeze solid for 1 hour, after which it begins to thaw as normal. This effect can freeze no more than a 20-foot cube of liquid.",
};

MagicItemsList["potion of attunement"] = {
	name : "Potion of Attunement",
	source : [["OTftTG", 234]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"As an action, I can pour a drop of this potion onto a magic item that requires attunement and drink the rest. Once I do so, I instantly become attuned to that item.",
	descriptionFull:
		"As an action, I can pour a drop of this potion onto a magic item that requires attunement and drink the rest. Once I do so, I instantly become attuned to that item.",
};

MagicItemsList["water breathing"] = {
	name : "Water Breathing",
	source : [["OTftTG", 235]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"For 1 hour, I can breathe underwater.",
	descriptionFull:
		"This tropical fruity elixir tastes just as delicious as my favorite juice. For the duration, I can breathe underwater. The effects of the potion last for 1 hour.",
};

MagicItemsList["liquid dispel"] = {
	name : "Liquid Dispel",
	source : [["OTftTG", 235]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"When thrown at a creature, object, or magical effect within 30 feet of me, this potion breaks, releasing its contents on the target. Any spell of 3rd level or lower on the target immediately ends.",
	descriptionFull:
		"When thrown at a creature, object, or magical effect within 30 feet of me, this potion breaks, releasing its contents on the target. Any spell of 3rd level or lower on the target immediately ends.",
};

MagicItemsList["pocket stomach"] = {
	name : "Pocket Stomach",
	source : [["OTftTG", 235]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"When imbibed, my stomach temporarily functions as a bag of holding, allowing me to store any object I can fit in your mouth inside its extradimensional space. The effects of this potion last for a 1 hour, after which I throw up anything consumed.",
	descriptionFull:
		"When imbibed, my stomach temporarily functions as a bag of holding, allowing me to store any object I can fit in your mouth inside its extradimensional space. The effects of this potion last for a 1 hour, after which I throw up anything consumed.",
};

MagicItemsList["liquid arcana"] = {
	name : "Liquid Arcana",
	source : [["OTftTG", 235]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"The brewer of this potion rolls a d4 to determine the maximum level of the spell slot it can restore. When I drink it, I immediately regain an expended spell slot of that level or lower.",
	descriptionFull:
		"The brewer of this potion rolls a d4 to determine the maximum level of the spell slot it can restore. When I drink it, I immediately regain an expended spell slot of that level or lower.",
};

MagicItemsList["arcane solvent"] = {
	name : "Arcane Solvent",
	source : [["OTftTG", 235]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"When this potion is applied to a magic item, any creature that was attuned to it is no longer attuned. If the item is being worn or carried by the attuned creature, it can resist the effects of this potion with a successful DC 13 Wisdom saving throw.", 
	descriptionFull:
		"When this potion is applied to a magic item, any creature that was attuned to it is no longer attuned. If the item is being worn or carried by the attuned creature, it can resist the effects of this potion with a successful DC 13 Wisdom saving throw.", 
};

MagicItemsList["gardner’s solution"] = {
	name : "Gardner’s Solution",
	source : [["OTftTG", 235]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"When this oily, greenish potion is rubbed on a plant, the plant instantly grows to full maturity. If the plant is too big for the space—such as a redwood tree—it will stop growing once it has reasonably filled the space. If the potion is imbibed, it does nothing, but it tastes like maple syrup.", 
	descriptionFull:
		"When this oily, greenish potion is rubbed on a plant, the plant instantly grows to full maturity. If the plant is too big for the space—such as a redwood tree—it will stop growing once it has reasonably filled the space. If the potion is imbibed, it does nothing, but it tastes like maple syrup.", 
};

MagicItemsList["potion of exertion"] = {
	name : "Potion of Exertion",
	source : [["OTftTG", 235]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"When I drink this potion, I gain a surge of manic energy allowing me to take another action this round at initiative count 1.",
	descriptionFull:
		"When I drink this potion, I gain a surge of manic energy allowing me to take another action this round at initiative count 1.",
};

MagicItemsList["breakfast in a bottle"] = {
	name : "Breakfast in a Bottle",
	source : [["OTftTG", 235]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"The brewer of this potion rolls a d4 to determine the number of servings it creates. A creature that consumes a serving of it feels satiated for the day, and its exhaustion level is reduced by 1. It takes 1 minute to consume one serving, and once a creature benefits from this effect, it can’t do so again until it finishes a long rest. The food spoils after 24 hours, losing its magic.",
	descriptionFull:
		"The brewer of this potion rolls a d4 to determine the number of servings it creates. A creature that consumes a serving of it feels satiated for the day, and its exhaustion level is reduced by 1. It takes 1 minute to consume one serving, and once a creature benefits from this effect, it can’t do so again until it finishes a long rest. The food spoils after 24 hours, losing its magic.",
};

MagicItemsList["twin telepathy"] = {
	name : "Twin Telepathy",
	source : [["OTftTG", 236]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"This potion must be shared with another creature, each of them ingesting half of the potion. When consumed, the potion allows the imbibers to communicate telepathically across any distance. The effects of this potion last for 24 hours.",
	descriptionFull:
		"This potion must be shared with another creature, each of them ingesting half of the potion. When consumed, the potion allows the imbibers to communicate telepathically across any distance. The effects of this potion last for 24 hours.",
};

MagicItemsList["potion of reprieve"] = {
	name : "Potion of Reprieve",
	source : [["OTftTG", 236]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"When imbibed, this potion offers temporary relief from an ill effect. For the next hour, I gain the benefit of an effect of my choice from the Greater Restoration spell. When this potion’s effects end, I lose the chosen benefit, causing the ill effect to return.",
	descriptionFull:
		"When imbibed, this potion offers temporary relief from an ill effect. For the next hour, I gain the benefit of an effect of my choice from the Greater Restoration spell. When this potion’s effects end, I lose the chosen benefit, causing the ill effect to return.",
};

MagicItemsList["uncanny focus"] = {
	name : "Uncanny Focus",
	source : [["OTftTG", 236]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"For 1 minute after imbibing this purplish liquid, I have advantage on Constitution saving throws made to maintain concentration on spells. In addition, becoming incapacitated doesn’t cause me to lose concentration on a spell.",
	descriptionFull:
		"For 1 minute after imbibing this purplish liquid, I have advantage on Constitution saving throws made to maintain concentration on spells. In addition, becoming incapacitated doesn’t cause me to lose concentration on a spell.",
};

MagicItemsList["meditative trance"] = {
	name : "Meditative Trance",
	source : [["OTftTG", 236]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"For 1 minute after imbibing this purplish liquid, I have advantage on Constitution saving throws made to maintain concentration on spells. In addition, becoming incapacitated doesn’t cause me to lose concentration on a spell.",
	descriptionFull:
		"This violet colored potion smells like lavender and citrus. The next time I take a short rest after ingesting it, I enjoy a deep, dreamless sleep, granting me the benefits of a long rest, even if I already benefited from a long rest in the past 24 hours.",
};

MagicItemsList["potion of holistic wellness"] = {
	name : "Potion of Holistic Wellness",
	source : [["OTftTG", 236]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"When I uncork this potion of scintillating liquid, my senses are calmed with the smell of vanilla and honey along with a warm spring breeze. When imbibed, I feel like my whole soul is embraced in a loving hug, causing me to regain 4d8 + 4 hit points, and removing any conditions affecting me, excluding the grappled, prone, or restrained condition.",
	descriptionFull:
		"When I uncork this potion of scintillating liquid, my senses are calmed with the smell of vanilla and honey along with a warm spring breeze. When imbibed, I feel like my whole soul is embraced in a loving hug, causing me to regain 4d8 + 4 hit points, and removing any conditions affecting me, excluding the grappled, prone, or restrained condition.",
};

MagicItemsList["sharp mind"] = {
	name : "Sharp Mind",
	source : [["OTftTG", 236]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"When I drink this potion, my mind becomes charged with magical energy. For the next 8 hours, I gain a +2 bonus to Intelligence saving throws, and I gain resistance to psychic damage. In addition, I can devour whole tomes of text, reading 10 times faster than normal.",
	descriptionFull:
		"When I drink this potion, my mind becomes charged with magical energy. For the next 8 hours, I gain a +2 bonus to Intelligence saving throws, and I gain resistance to psychic damage. In addition, I can devour whole tomes of text, reading 10 times faster than normal.",
};

MagicItemsList["mind over might"] = {
	name : "Mind Over Might",
	source : [["OTftTG", 236]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"When consumed, this chalky elixir turns an intellectual scholar into an athlete. For the next 24 hours, I can use my Intelligence or Wisdom modifier (my choice), in place of my Strength or Dexterity modifier, when making Strength (Athletics) and Dexterity (Acrobatics) checks. I also gain proficiency in those skills for the duration, if I don’t already have it.",
	descriptionFull:
		"When consumed, this chalky elixir turns an intellectual scholar into an athlete. For the next 24 hours, I can use my Intelligence or Wisdom modifier (my choice), in place of my Strength or Dexterity modifier, when making Strength (Athletics) and Dexterity (Acrobatics) checks. I also gain proficiency in those skills for the duration, if I don’t already have it.",
};

//Rare Utility Potions
MagicItemsList["simulacrum elixir"] = {
	name : "Simulacrum Elixir",
	source : [["OTftTG", 234]],
	type : "potion",
	rarity : "rare",
	description : 
		"When consumed, this numbing concoction sends me into a deep sleep. When I awake, my mind has taken over a perfect clone of myself. Clone has half my max HP but does not have my equipment, uses my stats but is a construct. The clone lacks the ability to learn or become more powerful, so it never increases its level or other abilities, nor can it regain expended spell slots; see Book",
	descriptionFull:
		"When consumed, this numbing concoction sends me into a deep sleep. When I awake, my mind has taken over a perfect clone of myself. The clone appears to be the same as me in every way, but it has half of my hit point maximum and is formed without any equipment other than mundane clothes. Otherwise, the clone uses all of my statistics, except that it is a construct. The clone lacks the ability to learn or become more powerful, so it never increases its level or other abilities, nor can it regain expended spell slots."+ "While the clone exists, my original body stays in a constant deep sleep, where it requires no nourishment, but it can still suffer damage as normal. The clone lasts until I dismiss it or it drops to 0 hit points, at which point it disappears in a cloud of butterflies. When it disappears, my mind returns to my original body.", 
};

MagicItemsList["hidden hand"] = {
	name : "Hidden Hand",
	source : [["OTftTG", 237]],
	type : "potion",
	rarity : "rare",
	description : 
		"When consumed, this grainy potion heightens my senses and gives me a sunken feeling of untapped strength. For the next 24 hours, I gain telekinetic powers as if I was under the effects of the Telekinesis spell.", 
	descriptionFull:
		"When consumed, this grainy potion heightens my senses and gives me a sunken feeling of untapped strength. For the next 24 hours, I gain telekinetic powers as if I was under the effects of the Telekinesis spell.", 
};

MagicItemsList["last resort"] = {
	name : "Last Resort",
	source : [["OTftTG", 237]],
	type : "potion",
	rarity : "rare",
	description : 
		"A cocoon begins forming around me. The cocoon becomes fully formed at the start of my next turn, and I can’t be contacted or interacted with in any way. Cocoon immune to all damage, can’t be moved or destroyed by any means short of a wish spell. While in the cocoon, I am in stasis and don’t need to eat or breathe. The cocoon lasts between 1 hour and 4 decades; see Book",
	descriptionFull:
		"When this potion is downed, a crystalline cocoon begins forming around me. The cocoon becomes fully formed at the start of my next turn, and I can’t be contacted or interacted with in any way. The cocoon is immune to all damage, and it can’t be moved or destroyed by any means short of a wish spell. While in the cocoon, I am in stasis and don’t need to eat or breathe. The cocoon lasts between 1 hour and 4 decades. Roll on the table below to determine the measurement of time for the effect, from hours to decades. Then roll a d4 to determine the exact amount of time the cocoon exists.",
};

MagicItemsList["elixir of echoes"] = {
	name : "Elixir of Echoes",
	source : [["OTftTG", 238]],
	type : "potion",
	rarity : "rare",
	description : 
		"When consumed, I gain the ability to copy a spell that was cast by another crea within both 100 ft and the last min, provided I am aware of the casting. I hold the copied spell for 1 min, without expending a spell slot or material components. If the spell requires a saving throw or spell attack roll, I use the DC and attack bonus of the creature that originally cast the spell.",
	descriptionFull:
		"When I drink this potion, I gain the ability to cast a spell that was cast by another creature within the last minute. The spell has to have been cast within 100 feet of me, and I must be aware that the spell was cast. Once imbibed, I can cast the copied spell once within the next minute, without expending a spell slot or material components. If the spell requires a saving throw or spell attack roll, I use the DC and attack bonus of the creature that originally cast the spell.",
};

MagicItemsList["blessing of the moon spirit"] = {
	name : "Blessing of the Moon Spirit",
	source : [["OTftTG", 238]],
	type : "potion",
	rarity : "rare",
	description : 
		"This potion’s effects are permanent. While moonlight touches me, I can use a bonus action to expend three hit dice. I can use this ability once per long rest. When I first consume this potion, my hit point maximum is increased by 2d10. This doesn’t count against the number of potions I can have affecting me at once.",
	descriptionFull:
		"After drinking this potion, which glows like a full moon, I gain a strange and wondrous affinity for the moon’s light. This potion’s effects are permanent. While moonlight touches me, I can use a bonus action to expend three hit dice. I can use this ability once per long rest. When I first consume this potion, my hit point maximum is increased by 2d10. This doesn’t count against the number of potions I can have affecting me at once.",
	action: ["bonus action", ""],
};

MagicItemsList["bowark’s bombastic beer"] = {
	name : "Bowark’s Bombastic Beer",
	source : [["OTftTG", 238]],
	type : "potion",
	rarity : "rare",
	description : 
		"When consumed this beer gives me a warm euphoric calm that makes me feel like everything will be alright. Until this potion’s effects end, I can choose to reroll any ability check, attack roll, or saving throw I make. I can reroll in this way a total of 7 times before the potion wears off.",
	descriptionFull:
		"This potion was discovered by accident by the great brewmaster, Bowark. Unsealing it fills the room with a strong scent of hops and yeasty goodness. When consumed this beer gives me a warm euphoric calm that makes me feel like everything will be alright. Until this potion’s effects end, I can choose to reroll any ability check, attack roll, or saving throw I make. I can reroll in this way a total of 7 times before the potion wears off.",
};

MagicItemsList["unified might"] = {
	name : "Unified Might",
	source : [["OTftTG", 238]],
	type : "potion",
	rarity : "rare",
	description : 
		"When consumed, this potion produces a burning sensation that fills my body, leaving me with newfound intellectual and physical strength. For the next hour, two ability scores of my choice increase to 25.",
	descriptionFull:
		"When consumed, this potion produces a burning sensation that fills my body, leaving me with newfound intellectual and physical strength. For the next hour, two ability scores of my choice increase to 25.",
};

MagicItemsList["umi’s powerful undertow"] = {
	name : "Umi’s Powerful Undertow",
	source : [["OTftTG", 238]],
	type : "potion",
	rarity : "rare",
	description : 
		"For the next hour, a spell I cast that produces or manipulates water in some capacity, is cast is made one level higher. Spells that use water to deal damage deal an extra 2d12 bludgeoning damage. Alternatively, I can throw the potion into an unoccupied space within 30 ft of me, summoning three water elementals in the nearest unoccupied spaces. These creatures are under my control until destroyed.",
	descriptionFull:
		"This potent elixir allows the drinker to enhance their aquatic spells with the ocean’s wrath. For the next hour, when I cast a spell that produces or manipulates water in some capacity, the spell is cast as if using a spell slot of one level higher. Additionally, spells that use water to deal damage to a creature or object, deal an extra 2d12 bludgeoning damage. Alternatively, I can throw the potion into an unoccupied space within 30 feet of me, breaking the glass and summoning three water elementals in the nearest unoccupied spaces. These creatures are under my control until destroyed.",
};

MagicItemsList["island nectar"] = {
	name : "Island Nectar",
	source : [["OTftTG", 239]],
	type : "potion",
	rarity : "rare",
	description : 
		"Consuming this sweet potion gives me a calming sensation before reinvigorating my life force and pushing me into action. I regain 100 hit points, and as part of the same bonus action to consume it, I can immediately make a melee weapon attack, cast a spell that targets only one creature or object, or move up to my speed.",
	descriptionFull:
		"Consuming this sweet potion gives me a calming sensation before reinvigorating my life force and pushing me into action. I regain 100 hit points, and as part of the same bonus action to consume it, I can immediately make a melee weapon attack, cast a spell that targets only one creature or object, or move up to my speed.",
};

MagicItemsList["elixir of omnimind"] = {
	name : "Elixir of Omnimind",
	source : [["OTftTG", 239]],
	type : "potion",
	rarity : "rare",
	description : 
		"This pale blue potion smells like ozone. When I drink it, my mind expands, and I gain a brief but exceptional capacity to comprehend the vast complexities of the arcane. For the next minute, I can concentrate on two spells at the same time. If I am forced to make a Constitution saving throw to maintain my concentration, I must make a separate saving throw for each spell.",
	descriptionFull:
		"This pale blue potion smells like ozone. When I drink it, my mind expands, and I gain a brief but exceptional capacity to comprehend the vast complexities of the arcane. For the next minute, I can concentrate on two spells at the same time. If I am forced to make a Constitution saving throw to maintain my concentration, I must make a separate saving throw for each spell.",
};


/*
 * Whimsical Potions
 */

MagicItemsList["melodious bird calls"] = {
	name : "Melodious Bird Calls",
	source : [["OTftTG", 239]],
	type : "potion",
	rarity : "common",
	description : 
		"When I drink this frothy liquid, I can perfectly mimic the call of any songbird for 24 hours.",
	descriptionFull:
		"When I drink this frothy liquid, I can perfectly mimic the call of any songbird for 24 hours.",
};

MagicItemsList["projected thoughts"] = {
	name : "Projected Thoughts",
	source : [["OTftTG", 239]],
	type : "potion",
	rarity : "common",
	description : 
		"When I drink this gritty potion, a 1-foot-diameter bubble emerges from the top of my head. The bubble lasts for 1 hour and moves with me, remaining centered on me. Until this effect ends, I can choose to project my thoughts into the bubble, where they manifest as illusory but silent words or images (my choice), which anyone can see.",
	descriptionFull:
		"When I drink this gritty potion, a 1-foot-diameter bubble emerges from the top of my head. The bubble lasts for 1 hour and moves with me, remaining centered on me. Until this effect ends, I can choose to project my thoughts into the bubble, where they manifest as illusory but silent words or images (my choice), which anyone can see.",
};

MagicItemsList["intoxicating aroma"] = {
	name : "Intoxicating Aroma",
	source : [["OTftTG", 239]],
	type : "potion",
	rarity : "common",
	description : 
		"When consumed, I smell of an expertly crafted perfume. The effects of this potion last for 22 years. This doesn’t count against the number of potions I can have affecting my body at once.",
	descriptionFull:
		"When consumed, I smell of an expertly crafted perfume. The effects of this potion last for 22 years. This doesn’t count against the number of potions I can have affecting my body at once.",
};

MagicItemsList["ladybug kinship"] = {
	name : "Ladybug Kinship",
	source : [["OTftTG", 239]],
	type : "potion",
	rarity : "common",
	description : 
		"When opened, this potion begins to evaporate quickly. For 1 minute, as the potion evaporates, ladybugs fly out of the bottle at a rate of 500 per round. The potion stops producing ladybugs once it has fully evaporated.",
	descriptionFull:
		"When opened, this potion begins to evaporate quickly. For 1 minute, as the potion evaporates, ladybugs fly out of the bottle at a rate of 500 per round. The potion stops producing ladybugs once it has fully evaporated.",
};

MagicItemsList["essence of umami"] = {
	name : "Essence of Umami",
	source : [["OTftTG", 240]],
	type : "potion",
	rarity : "common",
	description : 
		"This potion makes everything taste amazing. When I pour it on any food, no matter if it’s a hunk of tofu or a slab of slow-roasted brisket, essence of umami makes it glow with magic. When the food is tasted, it magically gives the taster their own personal version of the ultimate culinary experience.",
	descriptionFull:
		"This potion makes everything taste amazing. When I pour it on any food, no matter if it’s a hunk of tofu or a slab of slow-roasted brisket, essence of umami makes it glow with magic. When the food is tasted, it magically gives the taster their own personal version of the ultimate culinary experience.",
};

MagicItemsList["vocal stranger"] = {
	name : "Vocal Stranger",
	source : [["OTftTG", 240]],
	type : "potion",
	rarity : "common",
	description : 
		"Once imbibed, I can perfectly mimic the speech of a person I am not familiar with. If I can’t think of a person I have never met, I instead mimic a random voice. The effects of the potion last for 1 hour.",
	descriptionFull:
		"Once imbibed, I can perfectly mimic the speech of a person I am not familiar with. If I can’t think of a person I have never met, I instead mimic a random voice. The effects of the potion last for 1 hour.",
};

MagicItemsList["beard brew"] = {
	name : "Beard Brew",
	source : [["OTftTG", 240]],
	type : "potion",
	rarity : "common",
	description : 
		"Drinking this fuzzy liquid gives the sensation of wool rubbing against my entire body. When consumed, I instantly grow facial hair, even if I would not normally be able to do so. The style of facial hair is random, and it stays on my face until shaven off. This doesn’t count against the number of potions I can have affecting my body at once.",
	descriptionFull:
		"Drinking this fuzzy liquid gives the sensation of wool rubbing against my entire body. When consumed, I instantly grow facial hair, even if I would not normally be able to do so. The style of facial hair is random, and it stays on my face until shaven off. This doesn’t count against the number of potions I can have affecting my body at once.",
};

MagicItemsList["photosynthetic skin"] = {
	name : "Photosynthetic Skin",
	source : [["OTftTG", 240]],
	type : "potion",
	rarity : "common",
	description : 
		"This vibrant green potion tastes like freshly cut grass. For the next 24 hours, while the sun is out I regain 1 hit point at the start of every hour.",
	descriptionFull:
		"This vibrant green potion tastes like freshly cut grass. For the next 24 hours, while the sun is out I regain 1 hit point at the start of every hour.",
};

MagicItemsList["paradise plumage"] = {
	name : "Paradise Plumage",
	source : [["OTftTG", 240]],
	type : "potion",
	rarity : "common",
	description : 
		"After drinking this potion, I am instantly adorned with striking and distinctive plumage. I can control it to create dazzling displays of shimmering feathers, iridescent colors, and stunning patterns. When I do so, I gain advantage on all Charisma (Performance) checks made to distract or amaze. The effects of this potion last for 24 hours.",
	descriptionFull:
		"After drinking this potion, I am instantly adorned with striking and distinctive plumage. I can control it to create dazzling displays of shimmering feathers, iridescent colors, and stunning patterns. When I do so, I gain advantage on all Charisma (Performance) checks made to distract or amaze. The effects of this potion last for 24 hours.",
};

MagicItemsList["musical mixer"] = {
	name : "Musical Mixer",
	source : [["OTftTG", 240]],
	type : "potion",
	rarity : "common",
	description : 
		"When uncorked, this silvery elixir produces beautiful, ethereal music for 1 hour as it slowly evaporates.",
	descriptionFull:
		"When uncorked, this silvery elixir produces beautiful, ethereal music for 1 hour as it slowly evaporates.",
};

MagicItemsList["stink brew"] = {
	name : "Stink Brew",
	source : [["OTftTG", 240]],
	type : "potion",
	rarity : "common",
	description : 
		"It stinks and now so do you! After drinking this potion, all other creatures within 15 feet of me must succeed on a DC 13 Constitution saving throw or be unable to willingly move closer to me for the duration. A creature that hasn’t yet made this save must immediately do so when it moves within 15 feet of me. The effects of the potion last 1d4 rounds.",
	descriptionFull:
		"It stinks and now so do you! After drinking this potion, all other creatures within 15 feet of me must succeed on a DC 13 Constitution saving throw or be unable to willingly move closer to me for the duration. A creature that hasn’t yet made this save must immediately do so when it moves within 15 feet of me. The effects of the potion last 1d4 rounds.",
};

MagicItemsList["duko the trickster’s elixir"] = {
	name : "Duko the Trickster’s Elixir",
	source : [["OTftTG", 240]],
	type : "potion",
	rarity : "common",
	description : 
		"This potion is easily mistaken for brackish water. Once I drink it, I can produce an egg, rock, coin, or 2-foot-long string from my mouth. This effect lasts until utilized. This doesn’t count against the number of potions I can have affecting my body at once.",
	descriptionFull:
		"This potion is easily mistaken for brackish water. Once I drink it, I can produce an egg, rock, coin, or 2-foot-long string from my mouth. This effect lasts until utilized. This doesn’t count against the number of potions I can have affecting my body at once.",
};

MagicItemsList["manifested nostalgia"] = {
	name : "Manifested Nostalgia",
	source : [["OTftTG", 241]],
	type : "potion",
	rarity : "common",
	description : 
		"After consuming this clear and flavorless potion, I quickly undergo a radical transformation, becoming the child version of myself for the next 4 hours. For the duration, I am one size smaller (to a minimum of Small), and my Strength and Dexterity become 10, unless those scores are already less than 10.",
	descriptionFull:
		"After consuming this clear and flavorless potion, I quickly undergo a radical transformation, becoming the child version of myself for the next 4 hours. For the duration, I am one size smaller (to a minimum of Small), and my Strength and Dexterity become 10, unless those scores are already less than 10.",
};

MagicItemsList["pigment"] = {
	name : "Pigment",
	source : [["OTftTG", 241]],
	type : "potion",
	rarity : "common",
	description : 
		"When consumed, this multicolored potion allows me to produce a variety of oil paints from the tips of my  fingers. I can change the color of the paints at will, and they never seem to run out. The effects of the potion last for 8 hours.",
	descriptionFull:
		"When consumed, this multicolored potion allows me to produce a variety of oil paints from the tips of my  fingers. I can change the color of the paints at will, and they never seem to run out. The effects of the potion last for 8 hours.",
};

MagicItemsList["audio oddity"] = {
	name : "Audio Oddity",
	source : [["OTftTG", 241]],
	type : "potion",
	rarity : "common",
	description : 
		"When opened, this embarrassing and noisy potion sounds like a man sobbing. When consumed, this potion strangely mutes the sound produced by any spell cast by the imbiber for the next 1 hour.",
	descriptionFull:
		"When opened, this embarrassing and noisy potion sounds like a man sobbing. When consumed, this potion strangely mutes the sound produced by any spell cast by the imbiber for the next 1 hour.",
};

MagicItemsList["hindsight"] = {
	name : "Hindsight",
	source : [["OTftTG", 241]],
	type : "potion",
	rarity : "common",
	description : 
		"A well-known potion amongst investigators and merchants, this thick brew acquires special insight on an object when poured over it. The only downside is that I must then lick the brew off the object to obtain any of this information. When poured and then licked off, the potion reveals a minor but useful bit of information about the object",
	descriptionFull:
		"A well-known potion amongst investigators and merchants, this thick brew acquires special insight on an object when poured over it. The only downside is that I must then lick the brew off the object to obtain any of this information. When poured and then licked off, the potion reveals a minor but useful bit of information about the object",
};

MagicItemsList["super singing"] = {
	name : "Super Singing",
	source : [["OTftTG", 241]],
	type : "potion",
	rarity : "common",
	description : 
		"When consumed, this potion tastes as if it were a freshly brewed tea with the perfect amount of honey mixed in. For the next hour, I am unable to speak without singing, and I have advantage on Charisma (Performance) checks using my voice.",
	descriptionFull:
		"When consumed, this potion tastes as if it were a freshly brewed tea with the perfect amount of honey mixed in. For the next hour, I am unable to speak without singing, and I have advantage on Charisma (Performance) checks using my voice.",
};

MagicItemsList["fluffplum tonic"] = {
	name : "Fluffplum Tonic",
	source : [["OTftTG", 241]],
	type : "potion",
	rarity : "common",
	description : 
		"This nearly weightless liquid grants to drinkers the attributes of a dandelion, allowing them to float safely to the ground when falling and be easily carried by the wind. For the next hour, I am under the effects of the Feather Fall spell and weigh no more than 1 pound.",
	descriptionFull:
		"This nearly weightless liquid grants to drinkers the attributes of a dandelion, allowing them to float safely to the ground when falling and be easily carried by the wind. For the next hour, I am under the effects of the Feather Fall spell and weigh no more than 1 pound.",
};

MagicItemsList["merriment"] = {
	name : "Merriment",
	source : [["OTftTG", 241]],
	type : "potion",
	rarity : "common",
	description : 
		"For the next hour, I become incredibly intoxicated. For the duration, I gain expertise in a skill of my choice, which means my proficiency bonus is doubled for any ability check I make with it. Until this effect ends, all ability checks I make that don’t use the chosen skill are made with disadvantage.",
	descriptionFull:
		"Is this just booze? For the next hour, I become incredibly intoxicated. For the duration, I gain expertise in a skill of my choice, which means my proficiency bonus is doubled for any ability check I make with it. Until this effect ends, all ability checks I make that don’t use the chosen skill are made with disadvantage.",
};

MagicItemsList["bubble message"] = {
	name : "Bubble Message",
	source : [["OTftTG", 241]],
	type : "potion",
	rarity : "common",
	description : 
		"As part of the bonus action to consume this potion, I speak a message and hiccup a bubble, which magically contains the message inside it. I then describe a creature I am familiar with and the bubble floats to that creature, traveling at a speed of 1 mile per hour, and then pops. The bubble pops early if it takes any damage. When the bubble pops, it releases the contained message in my voice.",
	descriptionFull:
		"As part of the bonus action to consume this potion, I speak a message and hiccup a bubble, which magically contains the message inside it. I then describe a creature I am familiar with and the bubble floats to that creature, traveling at a speed of 1 mile per hour, and then pops. The bubble pops early if it takes any damage. When the bubble pops, it releases the contained message in my voice.",
};

MagicItemsList["crystal clear"] = {
	name : "Crystal Clear",
	source : [["OTftTG", 242]],
	type : "potion",
	rarity : "common",
	description : 
		"This aqua-blue potion feels cold to the touch and raises the hairs on my arm when opened. When poured into a non-magical liquid, it turns the liquid invisible for 1d4 hours. If the liquid the potion is poured into is larger than a 20-foot cube, the potion has no effect.",
	descriptionFull:
		"This aqua-blue potion feels cold to the touch and raises the hairs on my arm when opened. When poured into a non-magical liquid, it turns the liquid invisible for 1d4 hours. If the liquid the potion is poured into is larger than a 20-foot cube, the potion has no effect.",
};

MagicItemsList["elder elixir"] = {
	name : "Elder Elixir",
	source : [["OTftTG", 242]],
	type : "potion",
	rarity : "common",
	description : 
		"This unassuming potion temporarily doubles my age when consumed. The effects of the potion last 1d12 months. This doesn’t count against the number of potions I can have affecting my body at once.",
	descriptionFull:
		"This unassuming potion temporarily doubles my age when consumed. The effects of the potion last 1d12 months. This doesn’t count against the number of potions I can have affecting my body at once.",
};

MagicItemsList["witch’s hidden gem"] = {
	name : "Witch’s Hidden Gem",
	source : [["OTftTG", 242]],
	type : "potion",
	rarity : "common",
	description : 
		"This bland and underwhelming-looking potion coats my mouth and gullet as I drink it, leaving a thin film. For the next hour, all liquid I consume turns into wine when I drink it.",
	descriptionFull:
		"This bland and underwhelming-looking potion coats my mouth and gullet as I drink it, leaving a thin film. For the next hour, all liquid I consume turns into wine when I drink it.",
};

MagicItemsList["carbonated snake"] = {
	name : "Carbonated Snake",
	source : [["OTftTG", 242]],
	type : "potion",
	rarity : "common",
	description : 
		"When shaken and pointed in a direction, the contents of this zippy elixir shoot out of the bottle, turning into a poisonous snake midair and landing in a space within 10 feet of me.",
	descriptionFull:
		"When shaken and pointed in a direction, the contents of this zippy elixir shoot out of the bottle, turning into a poisonous snake midair and landing in a space within 10 feet of me.",
};

MagicItemsList["shadow child"] = {
	name : "Shadow Child",
	source : [["OTftTG", 242]],
	type : "potion",
	rarity : "common",
	description : 
		"I am filled with intense feelings of confusion before an apparition emerges from my body that resembles a young girl with onyx skin and hair and piercing green eyes. Only I can see it, and it can’t speak. It functions as the Unseen Servant spell and lasts for 1 hour.",
	descriptionFull:
		"I am filled with intense feelings of confusion before an apparition emerges from my body that resembles a young girl with onyx skin and hair and piercing green eyes. Only I can see it, and it can’t speak. It functions as the Unseen Servant spell and lasts for 1 hour.",
};

MagicItemsList["hsirebbig"] = {
	name : "Hsirebbig",
	source : [["OTftTG", 242]],
	type : "potion",
	rarity : "common",
	description : 
		"This bitter potion grants me a special form of speech that sounds like absolute gibberish to anyone who isn’t also under the effects of a hsirebbig potion. Even spells like comprehend languages fail to decipher this speech. The effects of this potion last 24 hours.",
	descriptionFull:
		"This bitter potion grants me a special form of speech that sounds like absolute gibberish to anyone who isn’t also under the effects of a hsirebbig potion. Even spells like comprehend languages fail to decipher this speech. The effects of this potion last 24 hours.",
};

MagicItemsList["sky swimming"] = {
	name : "Sky Swimming",
	source : [["OTftTG", 242]],
	type : "potion",
	rarity : "common",
	description : 		
		"After drinking this potion, I feel the sudden and unpleasant feeling of wearing soaking-wet clothing. For the next 10 minutes, I gain a flying speed of 15 feet and can hover, but it looks and feels as if I am swimming through the sky. While flying in this way, I must also obey the rules for underwater combat.",
	descriptionFull:
		"After drinking this potion, I feel the sudden and unpleasant feeling of wearing soaking-wet clothing. For the next 10 minutes, I gain a flying speed of 15 feet and can hover, but it looks and feels as if I am swimming through the sky. While flying in this way, I must also obey the rules for underwater combat.",
};

MagicItemsList["passing memory"] = {
	name : "Passing Memory",
	source : [["OTftTG", 242]],
	type : "potion",
	rarity : "common",
	description : 
		"When brewed, this powerful elixir stores one of the creator’s memories of their choice within it. When consumed by another creature, that creature gains the stored memory.",
	descriptionFull:
		"When brewed, this powerful elixir stores one of the creator’s memories of their choice within it. When consumed by another creature, that creature gains the stored memory.",
};

MagicItemsList["bottled slime"] = {
	name : "Bottled Slime",
	source : [["OTftTG", 243]],
	type : "potion",
	rarity : "common",
	description : 
		"This mischievous little slime can sometimes form in place of a potion. If noticed before being consumed, it can be thrown to an unoccupied space within 30 feet of me, releasing the slime when it shatters. After hurling the potion, a soda slime appears in the space and acts of its own volition.",
	descriptionFull:
		"This mischievous little slime can sometimes form in place of a potion. If noticed before being consumed, it can be thrown to an unoccupied space within 30 feet of me, releasing the slime when it shatters. After hurling the potion, a soda slime appears in the space and acts of its own volition.",
};

MagicItemsList["oil of the trademark flourish"] = {
	name : "Oil of the Trademark Flourish",
	source : [["OTftTG", 243]],
	type : "potion",
	rarity : "common",
	description : 
		"When I apply this oil to an object, I assign a signature sound that accompanies the object when it’s used. This effect is permanent, unless removed as is a curse.",
	descriptionFull:
		"When I apply this oil to an object, I assign a signature sound that accompanies the object when it’s used. This effect is permanent, unless removed as is a curse.",
};

MagicItemsList["mosspot"] = {
	name : "Mosspot",
	source : [["OTftTG", 243]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"After drinking this earthy mixture, my form quickly shifts and shrinks. I immediately polymorph into a mossling spirit, as if by the spell. This effect doesn’t require my concentration and ends after 1 hour.",
	descriptionFull:
		"After drinking this earthy mixture, my form quickly shifts and shrinks. I immediately polymorph into a mossling spirit, as if by the spell. This effect doesn’t require my concentration and ends after 1 hour.",
};

MagicItemsList["incredible luck"] = {
	name : "Incredible Luck",
	source : [["OTftTG", 243]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"After drinking this wonderful liquid my spirits lift and optimistic feelings pour over me. I gain advantage on the next 1d4 ability checks, attack rolls, or saving throws I make.",
	descriptionFull:
		"After drinking this wonderful liquid my spirits lift and optimistic feelings pour over me. I gain advantage on the next 1d4 ability checks, attack rolls, or saving throws I make.",
};

MagicItemsList["grand friendship"] = {
	name : "Grand Friendship",
	source : [["OTftTG", 243]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"This potion can be divided into as many as eight parts. When two or more creatures consume this golden elixir, they gain a conditional ability to fly. For the next 24 hours, creatures that consumed the elixir gain a flying speed of 60 feet, but only while holding hands with all other creatures that partook of the potion.",
	descriptionFull:
		"This potion can be divided into as many as eight parts. When two or more creatures consume this golden elixir, they gain a conditional ability to fly. For the next 24 hours, creatures that consumed the elixir gain a flying speed of 60 feet, but only while holding hands with all other creatures that partook of the potion.",
};

MagicItemsList["witch’s lament"] = {
	name : "Witch’s Lament",
	source : [["OTftTG", 243]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"Once consumed, this potion calls forth a rain cloud that weeps for me. Then in a flash of lightning, my head takes on the form of an anthropomorphic animal chosen by the GM. This effect is permanent.",
	descriptionFull:
		"Once consumed, this potion calls forth a rain cloud that weeps for me. Then in a flash of lightning, my head takes on the form of an anthropomorphic animal chosen by the GM. This effect is permanent.",
};

MagicItemsList["spirit appendage"] = {
	name : "Spirit Appendage",
	source : [["OTftTG", 244]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"This bitter unappealing elixir turns my stomach and is often a fight to keep down my gullet. Once consumed, I grow a 6-foot-long prehensile tail, which takes a form decided by the GM. The tail can be used as if it were a third arm and can easily support my own weight. The tail lasts for 1d12 days before falling off.",
	descriptionFull:
		"This bitter unappealing elixir turns my stomach and is often a fight to keep down my gullet. Once consumed, I grow a 6-foot-long prehensile tail, which takes a form decided by the GM. The tail can be used as if it were a third arm and can easily support my own weight. The tail lasts for 1d12 days before falling off.",
};

MagicItemsList["move a thing"] = {
	name : "Move a Thing",
	source : [["OTftTG", 244]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"When poured over an object that weighs 500 pounds or less, it begins to weigh lighter and lighter. The object weighs up to 1d100 pounds less at the start of every hour until it weighs exactly 10 pounds. It remains weighing 10 pounds for 1 week, after which the effects of this potion fade.",
	descriptionFull:
		"When poured over an object that weighs 500 pounds or less, it begins to weigh lighter and lighter. The object weighs up to 1d100 pounds less at the start of every hour until it weighs exactly 10 pounds. It remains weighing 10 pounds for 1 week, after which the effects of this potion fade.",
};

MagicItemsList["gobble gunk"] = {
	name : "Gobble Gunk",
	source : [["OTftTG", 244]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"This unappealing potion allows the imbiber to eat whatever they can fit in their mouth with no ill effect—metal, poison, seawater: I name it, I eat it. The effects of this potion last 1 hour. Any magical objects consumed in this way are hurled back up after the end of the hour.",
	descriptionFull:
		"This unappealing potion allows the imbiber to eat whatever they can fit in their mouth with no ill effect—metal, poison, seawater: I name it, I eat it. The effects of this potion last 1 hour. Any magical objects consumed in this way are hurled back up after the end of the hour.",
};

MagicItemsList["pocket portal"] = {
	name : "Pocket Portal",
	source : [["OTftTG", 244]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"When buried and left to sit for 24 hours, this potion will sprout and form a temporary portal to the Spirit Realm from knotted roots and mud. The portal stays open for 24 hours before closing.",
	descriptionFull:
		"When buried and left to sit for 24 hours, this potion will sprout and form a temporary portal to the Spirit Realm from knotted roots and mud. The portal stays open for 24 hours before closing.",
};

MagicItemsList["don’t eat dirt"] = {
	name : "Don’t Eat Dirt",
	source : [["OTftTG", 244]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"When consumed, this viscous brew tastes like wet soil. For the duration, I become immune to the prone condition. Whenever I would fall prone, I instead stand up as if an invisible force kept me that way. Even by choice, I cannot go prone. The effects of this potion last 10 days.",
	descriptionFull:
		"When consumed, this viscous brew tastes like wet soil. For the duration, I become immune to the prone condition. Whenever I would fall prone, I instead stand up as if an invisible force kept me that way. Even by choice, I cannot go prone. The effects of this potion last 10 days.",
};

MagicItemsList["lunar elixir"] = {
	name : "Lunar Elixir",
	source : [["OTftTG", 244]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"When poured out, this silvery liquid rapidly expands and coats the surrounding area, creating a chalky white sheen across everything it touches. For the next 8 hours, gravity in a 20-foot-radius, 300-foot-high cylinder centered on the potion is like the moon’s gravity. The jump distance for all creatures inside the cylinder is tripled, and falling damage taken inside the cylinder is halved.",
	descriptionFull:
		"When poured out, this silvery liquid rapidly expands and coats the surrounding area, creating a chalky white sheen across everything it touches. For the next 8 hours, gravity in a 20-foot-radius, 300-foot-high cylinder centered on the potion is like the moon’s gravity. The jump distance for all creatures inside the cylinder is tripled, and falling damage taken inside the cylinder is halved.",
};

MagicItemsList["lifetime supply"] = {
	name : "Lifetime Supply",
	source : [["OTftTG", 244]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"When consumed, this potion causes my hair to grow at an accelerated rate. Roll 1d4 + 2 and multiply it by 100 to find out how many feet of hair I grow. After 1 minute, the potion wears off and all my hair falls out.",
	descriptionFull:
		"When consumed, this potion causes my hair to grow at an accelerated rate. Roll 1d4 + 2 and multiply it by 100 to find out how many feet of hair I grow. After 1 minute, the potion wears off and all my hair falls out.",
};

MagicItemsList["invisible tonic"] = {
	name : "Invisible Tonic",
	source : [["OTftTG", 244]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"When poured over an object that is Small or smaller, the object becomes invisible. The effects of this potion last until removed, as if it were a curse.",
	descriptionFull:
		"When poured over an object that is Small or smaller, the object becomes invisible. The effects of this potion last until removed, as if it were a curse.",
};

MagicItemsList["liquid disguise"] = {
	name : "Liquid Disguise",
	source : [["OTftTG", 245]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"When brewed, this potion takes on the essence of a random humanoid within 1 mile. A creature that consumes the potion takes on the visage of that creature for the next 24 hours.",
	descriptionFull:
		"When brewed, this potion takes on the essence of a random humanoid within 1 mile. A creature that consumes the potion takes on the visage of that creature for the next 24 hours.",
};

MagicItemsList["spirit sweets"] = {
	name : "Spirit Sweets",
	source : [["OTftTG", 245]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"A spirit with a CR of 8 or lower that consumes this potion becomes drunk and happy for 1d4 days. Alternatively, the potion can be poured out, attracting spirits with a challenge rating of 2 or lower that are within 1 mile. When poured out, the potion attracts spirits for 8 hours or until it is consumed.",
	descriptionFull:
		"This bitter concoction tastes and smells horrible to physical beings, yet couldn’t taste more delicious to spirits, many of which would trade quite a bit for a sip of the brew. A spirit with a challenge rating of 8 or lower that consumes this potion becomes drunk and happy for 1d4 days. Alternatively, the potion can be poured out, attracting spirits with a challenge rating of 2 or lower that are within 1 mile. When poured out, the potion attracts spirits for 8 hours or until it is consumed.",
};

MagicItemsList["a new look"] = {
	name : "A New Look",
	source : [["OTftTG", 245]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"When consumed, this unassuming elixir magically transforms my head into a random anthropomorphic animal, such as a horse, panda, pig, or raccoon. This effect lasts until removed, as if it were a curse. This doesn’t count against the number of potions I can have affecting my body at once.",
	descriptionFull:
		"When consumed, this unassuming elixir magically transforms my head into a random anthropomorphic animal, such as a horse, panda, pig, or raccoon. This effect lasts until removed, as if it were a curse. This doesn’t count against the number of potions I can have affecting my body at once.",
};

MagicItemsList["shadow puppet"] = {
	name : "Shadow Puppet",
	source : [["OTftTG", 245]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"Once consumed, this potion gives sentience to my shadow. The shadow starts to act independently of me but is still bound to my body. It has its own emotions and personality but can’t interact with the world in any way beyond what a normal shadow could. The effects of this potion last until removed, as if it were a curse. This doesn’t count against the number of potions I can have affecting my body at once.",
	descriptionFull:
		"Once consumed, this potion gives sentience to my shadow. The shadow starts to act independently of me but is still bound to my body. It has its own emotions and personality but can’t interact with the world in any way beyond what a normal shadow could. The effects of this potion last until removed, as if it were a curse. This doesn’t count against the number of potions I can have affecting my body at once.",
};

MagicItemsList["object embodiment"] = {
	name : "Object Embodiment",
	source : [["OTftTG", 245]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"When I drink this metallic potion, my body twists and alters into an object of my choice, as if by the true polymorph spell. This effect doesn’t require my concentration and ends after 1 hour.",
	descriptionFull:
		"When I drink this metallic potion, my body twists and alters into an object of my choice, as if by the true polymorph spell. This effect doesn’t require my concentration and ends after 1 hour.",
};

MagicItemsList["phoenix elixir"] = {
	name : "Phoenix Elixir",
	source : [["OTftTG", 245]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"When imbibed, this elixir burns my throat and ignites an ember within me. For 24 hours, I am immune to fire damage. When the potion’s magic finally fades, the fire inside of me burns intensely from within, consuming me in flames and turning my body to ash. 1 hour later I appear in the nearest bonfire, reborn anew. All objects and clothing that were on my person when I was turned to ash are left by my original body.",
	descriptionFull:
		"When imbibed, this elixir burns my throat and ignites an ember within me. For 24 hours, I am immune to fire damage. When the potion’s magic finally fades, the fire inside of me burns intensely from within, consuming me in flames and turning my body to ash. 1 hour later I appear in the nearest bonfire, reborn anew. All objects and clothing that were on my person when I was turned to ash are left by my original body.",
};

MagicItemsList["unknown elixir"] = {
	name : "Unknown Elixir",
	source : [["OTftTG", 246]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"I gain the ability to cast one random spell of 6th level or lower, without expending a spell slot. This spell uses a save DC of 17 and a spell attack bonus of +9. The effects of this potion last until the spell is cast. This doesn’t count against the number of potions I can have affecting my  body at once.",
	descriptionFull:
		"This bizarre blend of flavors reminds me of freshly cut grass, petroleum jelly, and honey. When consumed, it sits in my stomach like a rock and slowly swells in power. I gain the ability to cast one random spell of 6th level or lower, without expending a spell slot. This spell uses a save DC of 17 and a spell attack bonus of +9. The effects of this potion last until the spell is cast. This doesn’t count against the number of potions I can have affecting my body at once.",
};

MagicItemsList["illusion in a bottle"] = {
	name : "Illusion in a Bottle",
	source : [["OTftTG", 246]],
	type : "potion",
	rarity : "uncommon",
	description : 
		"When this potion is poured out, an illusion of my choice appears in its space, as if by the Major Image spell. A creature that uses its action to examine the image can determine that it is an illusion with a successful DC 18 Intelligence (Investigation) check. The illusion lasts for 1 hour.",
	descriptionFull:
		"When this potion is poured out, an illusion of my choice appears in its space, as if by the Major Image spell. A creature that uses its action to examine the image can determine that it is an illusion with a successful DC 18 Intelligence (Investigation) check. The illusion lasts for 1 hour.",
};

MagicItemsList["homegrown"] = {
	name : "Homegrown",
	source : [["OTftTG", 246]],
	type : "potion",
	rarity : "rare",
	description : 
		"When poured over a surface that is at least a 50-footsquare area and isn’t obstructed by obstacles (such as trees or boulders), this pungent liquid begins to quickly foam and expand. After 1 minute, a newly formed and furnished home of grand size appears in the space.",
	descriptionFull:
		"When poured over a surface that is at least a 50-footsquare area and isn’t obstructed by obstacles (such as trees or boulders), this pungent liquid begins to quickly foam and expand. After 1 minute, a newly formed and furnished home of grand size appears in the space.",
};

MagicItemsList["new life"] = {
	name : "New Life",
	source : [["OTftTG", 246]],
	type : "potion",
	rarity : "rare",
	description : 
		"I take on the illusionary form of a crea I am familiar with. This illusory disguise is perfect in every way, matching the visage and voice. Only crea with the ability to detect magic or see through illusions (as with truesight) can discern this disguise. It last for 7 years or until removed, as if it were a curse. This doesn’t count against the number of potions I can have affecting my body at once.",
	descriptionFull:
		"The brewer of this potion chooses the likeness of a humanoid that they are familiar with. When imbibed, I take on the illusionary form of the chosen creature. This illusory disguise is perfect in every way and matches both the creature’s visage and its voice. Only creatures with the ability to detect magic or see through illusions (as with truesight) can discern this disguise. The effects of this potion last for 7 years or until removed, as if it were a curse. This doesn’t count against the number of potions I can have affecting my body at once.",
};

MagicItemsList["mind transfer"] = {
	name : "Mind Transfer",
	source : [["OTftTG", 247]],
	type : "potion",
	rarity : "rare",
	description : 
		"First crea that touches me after I've imbibed, I inhabit them, my body falls unconscious. I can force it to make a contested INT/WIS check (we choose which) at the start of each of its turns. If I succeed, I gain total control until the start of its next turn. If the crea dies while I inhabit it, I also die. This lasts for 1 hr, until I dismiss the effect (action), or until the crea is targeted by a Dispel Evil and Good spell.",
	descriptionFull:
		"When imbibed, this acrid elixir loosens my soul from my body and prepares it for transfer. The first time I am touched by a creature after consuming this potion, my mind and soul transfer into that creature’s body. While inhabiting the creature’s body, I can force it to make a contested INT or WIS check (we both choose which ability to use) at the start of each of its turns. If I succeed, I gain total control over the creature until the start of its next turn. While my mind and soul are away, my body is left unconscious. If the creature dies while my mind and soul are still inside it, I also die. I inhabit the creature’s body for 1 hour, until I dismiss the effect as an action, or until the creature is targeted by a Dispel Evil and Good* spell.",
};

MagicItemsList["ups-a-daisy"] = {
	name : "Ups-a-daisy",
	source : [["OTftTG", 247]],
	type : "potion",
	rarity : "rare",
	description : 
		"When poured over a creature or object, this creamy elixir instantly awakens the target, as if by the Awaken spell. The awakened creature remains charmed by me for 1 year, instead of 30 days.",
	descriptionFull:
		"When poured over a creature or object, this creamy elixir instantly awakens the target, as if by the Awaken spell. The awakened creature remains charmed by me for 1 year, instead of 30 days.",
};

MagicItemsList["spiritual rebuke"] = {
	name : "Spiritual Rebuke",
	source : [["OTftTG", 247]],
	type : "potion",
	rarity : "rare",
	description : 
		"When poured, this dark elixir stains the earth and creates a 10-foot cube that is void of the island’s magic, as if it were under the effects of the Antimagic Field spell This effect lasts for 1 year.",
	descriptionFull:
		"When poured, this dark elixir stains the earth and creates a 10-foot cube that is void of the island’s magic, as if it were under the effects of the Antimagic Field spell This effect lasts for 1 year.",
};

MagicItemsList["newly found magic"] = {
	name : "Newly Found Magic",
	source : [["OTftTG", 247]],
	type : "potion",
	rarity : "rare",
	description : 
		"When consumed, I feel a rush of magical inspiration flow through me. I instantly learn a random 3rd-level spell. I can cast it without expending a spell slot, and once I do so, I can’t cast it in this way again until I finish a long rest. This potion’s effect is permanent, and it doesn’t count against the number of potions I can have affecting me at once.",
	descriptionFull:
		"When consumed, I feel a rush of magical inspiration flow through me. I instantly learn a random 3rd-level spell. I can cast it without expending a spell slot, and once I do so, I can’t cast it in this way again until I finish a long rest. This potion’s effect is permanent, and it doesn’t count against the number of potions I can have affecting me at once.",
};

MagicItemsList["crafter’s brew"] = {
	name : "Crafter’s Brew",
	source : [["OTftTG", 248]],
	type : "potion",
	rarity : "rare",
	description : 
		"The crafter’s brew can be added to any larger container of water or a small body of water to create an enchanting bath. The first nonmagical object submerged in the water for at least 1 minute gains a permanent magical effect. This effect is random and powerful enough that the item’s rarity should be considered uncommon or higher.",
	descriptionFull:
		"The crafter’s brew can be added to any larger container of water or a small body of water to create an enchanting bath. The first nonmagical object submerged in the water for at least 1 minute gains a permanent magical effect. This effect is random and powerful enough that the item’s rarity should be considered uncommon or higher.",
};

MagicItemsList["dancing feet"] = {
	name : "Dancing Feet",
	source : [["OTftTG", 248]],
	type : "potion",
	rarity : "rare",
	description : 
		"After drinking this potion, I no longer walk or run— now I dance. My stylish moves increase my walking speed by 10 ft, give you a +5 bonus to Charisma (Performance) checks that involve dancing, and grant me proficiency in Dexterity saving throws if I don’t already have it. This lasts until you dismiss the potion’s effects as an action.",
	descriptionFull:
		"After drinking this potion, I no longer walk or run— now I dance. Going from one place to another is no longer a mundane trudge, a shuffling expression of ennui. How I get from point A to point B is now a dazzling dance performance. From smooth, elven waltzes, to Nakudama hops and gyrations, to the interpretive dance forms of the dara, I explore them all. My stylish moves increase my walking speed by 10 ft, give you a +5 bonus to Charisma (Performance) checks that involve dancing, and grant me proficiency in Dexterity saving throws if I don’t already have it. This lasts until you dismiss the potion’s effects as an action.",
	speed: {walk: "+10"},
	saves: ["Dex"],
	
};

MagicItemsList["chicken chaser"] = {
	name : "Chicken Chaser",
	source : [["OTftTG", 248]],
	type : "potion",
	rarity : "rare",
	description : 
		"My hair turns dark red, and I can speak with chickens permanently, as if by the Speak with Animals. (One time use) I can crow a sacred and thunderous cackle that summons 100 chickens in a 20-ft rad centered on me. Each crea in the area (excluding me) DC 19 DEX save, taking 30d6 Slashing dmg on a fail, or half on success. This doesn’t count against the number of potions I can have affecting my body at once.",
	descriptionFull:
		"When I drink this potion, my hair (if any) turns dark red, and I gain the ability to speak with chickens permanently, as if by the Speak with Animals spell. Additionally, I can crow a sacred and thunderous cackle that summons 100 chickens in a 20-foot radius centered on me. These chickens appear running from a distance, digging out from the ground below, and falling from the sky in a veritable tsunami of flapping, clucking poultry. Each creature in the area (excluding me) must make a DC 19 DEX save, taking 30d6 slashing damage on a failed save, or half as much damage on a successful one. Once I've summoned the chickens in this way, I can’t do so again. This doesn’t count against the number of potions I can have affecting my body at once.",
};

MagicItemsList["disappearing act"] = {
	name : "Disappearing Act",
	source : [["OTftTG", 248]],
	type : "potion",
	rarity : "rare",
	description : 
		"When consumed, my body vanishes along with all the items I was wearing or carrying, and my sentience is transferred into a random object within 100 miles of me.",
	descriptionFull:
		"When consumed, my body vanishes along with all the items I was wearing or carrying, and my sentience is transferred into a random object within 100 miles of me.",
};



























