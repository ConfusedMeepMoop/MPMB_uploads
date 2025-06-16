if (sheetVersion < 13001012) {
  throw "This script was made for a newer version of the sheet (v13.1.14). Please use the latest version and try again.\nYou can get the latest version at www.flapkan.com.";
}
var iFileName = "Zaman's Guide to the End of Time.js";
RequiredSheetVersion("13.1.12");

SourceList["ZGET"] = {
   name: "Zaman's Guide to the End of Time",
   abbreviation: "ZGET",
   abbreviationSpellsheet : "ZG",
   group: "Third Party",
   date: "2025-06-04",
};


/*
 * New Classes
 */

// Gunner Class
ClassList["gunner"] = {
	regExpSearch: /^(?=.*gunner).*$/i,
	name: "Gunner",
	source: [["ZGET", 0]],
	primaryAbility: "Dexterity",
	abilitySave: 2,
	prereqs : "Dexterity 13",
	improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	die: 8,
	saves: ["Dex", "Cha"],
	skillstxt: {
		primary: "Choose two from Acrobatics, Athletics, Intimidation, Perception, Persuasion, Sleight of Hand, Stealth, Survival",
	},
	armorProfs : {
		primary : [true, false, false, false],
		secondary : [true, false, false, false]
	},
	weaponProfs : {
		primary : [true, false, ["Martial Ranged weapons"]],
		secondary : [false, false, ["Martial Ranged weapons"]],
	},
	toolProfs: ["Smith’s Tools or Tinker’s Tools"],
	equipment : "Gunner starting equipment:" + 
		"\n \u2022 A rifle, -or- two pistols;" +
		"\n \u2022 A dungeoneer’s pack -or- an explorer's pack;" +
		"\n \u2022 Smith’s tools -or- tinker’s tools;" +
		"\n \u2022 Leather Armour, a Dagger, and 20 Bullets;"+
		"\n\nAlternatively, choose 4d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
	subclasses : ["Gunner's Creed", []],
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	features : {
		"moxie" : {
			name : "Moxie",
			source: [["ZGET", 0]],
			minlevel : 1,
			description : desc([
				"During combat, I can gain Moxie. I can never have more Moxie than shown on the Gunner table for my level. I can use a Bns to gain 1 Moxie if, on the same turn, I’ve made an attack against a hostile crea or forced a hostile crea to make a saving throw.",
				"Additionally, I gain 1 Moxie each time I do any of the following:",
				" \u2022 Score a Critical Hit on an atk roll against a hostile creature of CR 1⁄2 or higher, or roll a 20 on a saving throw imposed by a hostile crea.",
				" \u2022 The first time each turn that I reduce a hostile crea of CR 1⁄2 or higher to 0 HP.",
				"If I haven’t gained or expended any Moxie for 1 min, I lose all Moxie. I can expend 1 Moxie to reload a firearm when I use its last bullet (no action required), or to take the special Reaction described below, which don’t use my normal Rea. I can still only take one Rea, special or otherwise, on each turn.",
				" \u2022 Point-Blank. When a creature I can see leave my reach, I can expend 1 Moxie to make an OA against that crea. I can choose to make a ranged weapon atk with a firearm I am holding instead of a melee atk.",
				" \u2022 Second Chance. When I fail an ability check, I can expend 1 Moxie to reroll it. I must use the new result.",
				" \u2022 True Grit. When a crea ends its turn, I can expend 1 or more Moxie to gain 1d6 THP per Moxie expended.",
			]),
		},
		"bullet time" : {
			name : "Bullet Time",
			source: [["ZGET", 0]],
			minlevel : 2,
			description : desc([
				"As a Bns, I can enter a state of heightened reflexes until the start of my next turn. During this time, I have Adv on atk rolls, ability checks, and DEX saves, and creatures have DisAdv on atk rolls made against me. In addition, I expend 1 less Moxie the first time I take a special Reaction that would require me to expend Moxie.",
				"Once I’ve used this Bns, I can’t do so again until I finish a Short or Long Rest. Starting at 17th level, I can use it twice before a long rest",
			]),
			action : ["bonus action", ""],
			limfeaname : "Bullet Time",
			usages: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2],
			recovery: "long rest", 			
		},
		"firearm attachments" : {
			name : "Firearm Attachments",
			source: [["ZGET", 0]],
			minlevel : 2,
			description : desc([
				"When I finish a Long Rest, I can apply, remove, or swap any number of attachments from the list at the end of this class on firearms I am holding. The maximum number of attachments I can have in total, as well as the maximum number of attachments that a single firearm can hold at a time, are listed on the Gunner table. I can apply the same attachment to different firearms, but each one counts against my limit.",
				"Attachments are divided into five types: Barrel, Melee, Muzzle, Sights, and Miscellaneous. With the exception of Miscellaneous attachments, I can’t have more than one attachment of any type on the same firearm. In addition, some attachments have a level requirement in this class that I must meet in order to apply them to a firearm.",
				"Other creatures can use firearms bearing attachments I’ve applied using this feature, but those creatures can’t benefit from those attachments.",
			]),
			extraname : "Firearm Attachments",
			extrachoices : ["Extended Barrel", "Sawed-Off Barrel", "Subaquatic Barrel", "Wide Barrel (9th Lvl)", "High-Velocity Barrel (11th Lvl)", "Double Barrel (15th Lvl)", "Adamantine Sights", "Arcanovision Sights (9th Lvl)", "Auto-Targeting Sights (9th Lvl)", "Night Vision Sights", "Telescopic Sights", "Thermal Sights (9th Lvl)", "Bayonet", "Taser", "Grapplehook (5th Lvl)", "Needle (5th Lvl)", "Buckler (9th Lvl)", "Weighted Butt (9th Lvl)", "Scattershot", "Muzzle Flash (5th Lvl)", "Red-Hot Muzzle (5th Lvl)", "Concentration Breaker (9th Lvl)", "Force Pulse (9th Lvl)", "Automatic Reloader", "Decorative Etchings", "Extended Capacity", "Smart Grip", "Arcane Stabiliser (5th Lvl)", "Bipod (9th Lvl)", "Heat Sink (15th Lvl)",],
			extraTimes : levels.map(function (n) {
				return n < 5 ? 2 : n < 8 ? 3 : n < 12 ? 4 : n < 16 ? 5 : 6;
			}),
			"extended barrel" : {
				submenu : "[Barrel]",
				name : "Extended Barrel",
				description : desc([
					"This barrel has been elongated to increase accuracy and range. The normal range of a firearm with this attachment increases by 20 feet, and its long range increases by 60 feet.",
					"When I reach 11th level in the Gunner class, the normal range instead increases by 40 feet, and the long range by 120 feet."
				]),
			},
			"sawed-off barrel" : {
				submenu : "[Barrel]",
				name : "Sawed-Off Barrel",
				description : desc([
					"This barrel has been cut short to facilitate close-quarters combat. Being within 5 feet of a hostile creature doesn’t impose Disadvantage on ranged attack rolls using a firearm. The normal and long ranges of the firearm are both halved (calculated after other attachments that affect range)."
				]),
			},
			"subaquatic barrel" : {
				submenu : "[Barrel]",
				name : "Subaquatic Barrel",
				description : desc([
					"This barrel has been improved to fire underwater. Attacks made using a firearm with this attachment ignore the penalties of underwater combat."
				]),
			},
			"wide barrel (9th lvl)" : {
				submenu : "[Barrel]",
				name : "Wide Barrel (9th Level)",
				description : desc([
					"This wide barrel allows for larger bullets with more stopping power. When I hit a Large or smaller creature with a ranged attack using a firearm with this attachment, the creature is pushed 5 feet directly away from me. If I hit it a second time on the same turn, I can choose to push it another 5 feet or knock it Prone. If I roll a 1 on an attack roll made using the firearm, I am pushed 5 feet directly away from my target.",
					"When I reach 15th level in the Gunner class, this effect applies to Huge or smaller creatures.",
				]),
				prereqeval : function(v) { return classes.known.gunner.level >= 9; },
			},
			"high-velocity barrel (11th lvl)" : {
				submenu : "[Barrel]",
				name : "High-Velocity Barrel (11th Level)",
				description : desc([
					"This magitech barrel accelerates projectiles to near impossible speeds. Ranged attacks made using a firearm with this attachment pass through the first creature or object they hit, as long as it’s Medium or smaller and less than 2 feet thick. If there’s another creature or object no more than 5 feet directly behind the original one, I can target it with the attack as well, making a new attack roll. This attack roll ignores any cover provided by the first creature or object.",
					"When I reach 15th level in the Gunner class, ranged attacks made using a firearm with this attachment pass through magical barriers such as those created by the Tiny Hut, Wall of Force, and Forcecage spells, and ignore the effects of the Shield spell.",
				]),
				prereqeval : function(v) { return classes.known.gunner.level >= 11; },
			},
			"double barrel (15th lvl)" : {
				submenu : "[Barrel]",
				name : "Double Barrel (15th Level)",
				description : desc([
					"This extra barrel makes a firearm twice as dangerous. Attacks made using a firearm with this attachment deal an extra die of damage on a hit. The Reload value of the firearm is halved (calculated after other attachments that affect Reload). This attachment can’t be applied to firearms with Reload (1).",
				]),
				prereqeval : function(v) { return classes.known.gunner.level >= 15; },
			},
			"adamantine sights" : {
				submenu : "[Sights]",
				name : "Adamantine Sights",
				description : desc([
					"Being Prone or targetting a Prone creature more than 5 feet away doesn’t impose Disadvantage on ranged attack rolls made using a firearm with this attachment."
				]),
			},
			"arcanovision sights (9th lvl)" : {
				submenu : "[Sights]",
				name : "Arcanovision Sights (9th Level)",
				description : desc([
					"While looking through this attachment, I see an aura around visible creatures or objects within 30 feet of me that bear magic, as per the Detect Magic spell.", 
					"When I reach 15th level in the Gunner class, I can’t have Disadvantage on ranged attack rolls using the firearm against creatures or objects bearing the aura.",
				]),
				prereqeval : function(v) { return classes.known.gunner.level >= 9; },
			},
			"auto-targeting sights (9th lvl)" : {
				submenu : "[Sights]",
				name : "Auto-Targeting Sights (9th Level)",
				description : desc([
					"When I make a ranged attack roll using a firearm with this attachment against a creature I can see, I can choose not to roll, but instead treat it as if I’d rolled a 10 on the d20. Once I use this attachment, I can’t do it again until I use an action to reset the mechanism.",
				]),
				prereqeval : function(v) { return classes.known.gunner.level >= 9; },
			},
			"night vision sights" : {
				submenu : "[Sights]",
				name : "Night Vision Sights",
				description : desc([
					"I have Darkvision out to 60 feet while looking through this attachment.",
					"When I reach 15th level in the Gunner class, I can also see normally in magical Darkness out to 60 feet while looking through this attachment.",
				]),
			},
			"telescopic sights" : {
				submenu : "[Sights]",
				name : "Telescopic Sights",
				description : desc([
					"Attacking at long range doesn’t impose Disadvantage on ranged weapon attack rolls made using a firearm with this attachment. The attachment also functions as a Spyglass.",
				]),
			},
			"thermal sights (9th lvl)" : {
				submenu : "[Sights]",
				name : "Thermal Sights (9th Level)",
				description : desc([
					"While looking through this attachment, I have Advantage on Wisdom (Perception) checks made to detect creatures that produce body heat, and I can always see those creatures regardless of light conditions or obscurement, as long as they’re not behind Total Cover. Some Constructs, Elementals, and Undead exist at ambient temperature and can’t be seen with this property (GM’s discretion).",
				]),
				prereqeval : function(v) { return classes.known.gunner.level >= 9; },
			},
			"bayonet" : {
				submenu : "[Melee]",
				name : "Bayonet",
				description : desc([
					"This knife, spike, or similar implement allows me to use my firearm as a melee weapon. A firearm with this attachment is also considered a Simple Melee weapon. It deals 1d4 Piercing damage on a hit, and I can use my DEX mod instead of STR for the attack and damage rolls of melee attacks made with it.",
					"The damage of this attachment increases to 1d6 when I reach 5th level in the Gunner class, and again to 1d8 when I reach 11th level in the Gunner class.",
				]),
				weaponOptions: [{
					name: "Bayonet Firearm Attachment",
					source: [["ZGET", 0]],
					regExpSearch : /^(?=.*bayonet)(?=.*firearm)(?=.*attachment).*$/i,
					type : "Simple",
					ability : 2,
					abilitytodamage : true,
					damage : [1, 4, "Piercing"],
					range : "Melee",
					description : "",
					selectNow: true,
				}],
			},
			"taser" : {
				submenu : "[Melee]",
				name : "Taser",
				description : desc([
					"This metal rod crackles with electricity. A firearm with this attachment is also considered a Simple Melee weapon. It deals 1 Lightning damage on a hit, and I can use my DEX mod instead of STR for the attack and damage rolls of melee attacks made with it. If a creature takes damage from this attachment, it can’t take Reactions until the start of its next turn.",
					"The damage of this attachment increases to 1d4 when I reach 9th level in the Gunner class, and again to a 1d6 when I reach 15th level in the Gunner class.",
				]),
				weaponOptions: [{
					name: "Taser Firearm Attachment",
					source: [["ZGET", 0]],
					regExpSearch : /^(?=.*taser)(?=.*firearm)(?=.*attachment).*$/i,
					type : "Simple",
					ability : 2,
					abilitytodamage : true,
					damage : [1, 1, "Lightning"],
					range : "Melee",
					description : "Crea that takes dmg from this attachment, it can’t take Reaction until the start of its next turn.",
					selectNow: true,
				}],
			},
			"grapplehook (5th lvl)" : {
				submenu : "[Melee]",
				name : "Grapplehook (5th Level)",
				description : desc([
					"This sharp hook is connected to the firearm by a short length of chain. A firearm with this attachment is also considered a Simple Melee weapon. It deals 1d4 Piercing dmg on a hit, and I can use my DEX mod instead of STR for the attack and damage rolls of melee attacks made with it. A Medium or smaller creature hit with a melee attack using the firearm with this attachment has the hook embedded in it, and can’t move farther than 10 feet away from me until it or a creature within reach of it uses an action to remove the hook, until I move farther than 10 feet from it, or until I make a melee attack with the firearm against a different creature. I can use a Bonus Action to reel a creature with a hook embedded in it 5 feet towards me.",
					"When I reach 11th level in the Gunner class, the hook can embed itself in Large or smaller creatures.",
				]),
				weaponOptions: [{
					name: "Grapplehook Firearm Attachment",
					source: [["ZGET", 0]],
					regExpSearch : /^(?=.*grapplehook)(?=.*firearm)(?=.*attachment).*$/i,
					type : "Simple",
					ability : 2,
					abilitytodamage : true,
					damage : [1, 4, "Piercing"],
					range : "Melee",
					description : "< Medium crea hit is hooked and can't move farther than 10 ft away",
					selectNow: true,
				}],
				action : ["bonus action", ""],
				prereqeval : function(v) { return classes.known.gunner.level >= 5; },
			},
			"needle (5th lvl)" : {
				submenu : "[Melee]",
				name : "Needle (5th Level)",
				description : desc([
					"This attachment consists of a hollow needle filled with venomous fluid. A firearm with this attachment is also considered a Simple Melee weapon. It deals 1 Piercing damage on a hit, and I can use my DEX mod instead of STR for the attack and damage rolls of melee attacks made with it. When I hit a creature with a melee attack using it, the creature becomes Poisoned until the end of its next turn. After this effect triggers, it can’t trigger again until I use an action to reset the mechanism.",
					"This attachment deals an extra 1d4 Poison damage on a hit with the melee weapon when I reach 11th level in the Gunner class.",
				]),
				weaponOptions: [{
					name: "Needle Firearm Attachment",
					source: [["ZGET", 0]],
					regExpSearch : /^(?=.*needle)(?=.*firearm)(?=.*attachment).*$/i,
					type : "Simple",
					ability : 2,
					abilitytodamage : true,
					damage : [1, 1, "Piercing"],
					range : "Melee",
					description : "Crea hit is Poisoned until end of its next turn; Aft effect triggers, A to reset mechanism",
					selectNow: true,
				}],
				prereqeval : function(v) { return classes.known.gunner.level >= 5; },
			},
			"buckler (9th lvl)" : {
				submenu : "[Melee]",
				name : "Buckler (9th Level)",
				description : desc([
					"This attachment consists of a small shield mounted to the barrel. I gain a +1 bonus to AC while holding a firearm with this attachment.",
				]),
				eval : "AddACMisc(1, \"Buckler Firearm Attachment\", \"I gain a +1 bonus to AC while holding a firearm with this attachment.\")",
				removeeval : "AddACMisc(0, \"Buckler Firearm Attachment\", \"I gain a +1 bonus to AC while holding a firearm with this attachment.\")",
				prereqeval : function(v) { return classes.known.gunner.level >= 9; },
			},
			"weighted butt (9th lvl)" : {
				submenu : "[Melee]",
				name : "Weighted Butt (9th Level)",
				description : desc([
					"This attachment has a dangerous heft to it. A firearm with this attachment is also considered a Simple Melee weapon. It deals 1d4 Bludgeoning damage on a hit, and I can use my DEX mod instead of STR for the attack and damage rolls of melee attacks made with it. When I roll a 4 on the damage die against a creature, the creature is dazed, gaining Disadvantage on the next attack roll it makes before the end of its next turn.",
					"When I reach 15th level in the Gunner class, this damage increases to 1d6, and I daze a creature on a roll of 5 or higher.",
				]),
				weaponOptions: [{
					name: "Weighted Butt Firearm Attachment",
					source: [["ZGET", 0]],
					regExpSearch : /^(?=.*weighted)(?=.*butt)(?=.*firearm)(?=.*attachment).*$/i,
					type : "Simple",
					ability : 2,
					abilitytodamage : true,
					damage : [1, 4, "Bludgeoning"],
					range : "Melee",
					description : "Can potentially give target the Dazed condition depending on dmg roll",
					selectNow: true,
				}],
				prereqeval : function(v) { return classes.known.gunner.level >= 9; },
			},
			"scattershot" : {
				submenu : "[Muzzle]",
				name : "Scattershot",
				description : desc([
					"This attachment breaks bullets into a shower of shrapnel as they exit the barrel. A firearm with this attachment loses its normal and long ranges, and can’t be used to make ranged attack rolls against creatures. Instead, I can use an action to fire shrapnel from it in a 15-foot Cone, making a ranged attack roll. Each creature in the area must succeed on a DEX save with the DC equal to the result of my attack roll or take the damage of the attack. Magical ammunition can’t be fired by a firearm with this attachment, and mundane bullets fired from it are destroyed.",
					"When I reach 11th level in the Gunner class, the area increases to a 20-foot Cone.",
				]),
			},
			"suppressor" : {
				submenu : "[Muzzle]",
				name : "Suppressor",
				description : desc([
					"A firearm with this attachment loses the Loud property.",
					"When I reach 11th level in the Gunner class, making an attack with a firearm using this attachment while hiding doesn’t reveal me to creatures outside of the firearm’s normal range.",
				]),
			},
			"muzzle flash (5th lvl)" : {
				submenu : "[Muzzle]",
				name : "Muzzle Flash (5th Level)",
				description : desc([
					"When I make the first ranged weapon attack using a firearm with this attachment after reloading it, the muzzle produces a blinding flash. Each other creature within 5 feet of me gains Disadvantage on the next attack roll it makes before the end of its next turn. Creatures with Immunity to the Blinded condition ignore this effect.",
				]),
				prereqeval : function(v) { return classes.known.gunner.level >= 5; },
			},
			"red-hot muzzle (5th lvl)" : {
				submenu : "[Muzzle]",
				name : "Red-Hot Muzzle (5th Level)",
				description : desc([
					"This muzzle is built with a deliberate fault that causes it to overheat. When I make the first ranged weapon attack using a firearm with this attachment after it’s reloaded, the muzzle becomes incandescent until the firearm is reloaded again or until I hit with a melee attack using the firearm. A melee attack made using a firearm with an incandescent muzzle deals an extra 1d6 Fire damage on a hit.",
					"When I reach 11th level in the Gunner class, this damage increases to 1d8."
				]),
				prereqeval : function(v) { return classes.known.gunner.level >= 5; },
			},
			"concentration breaker (9th lvl)" : {
				submenu : "[Muzzle]",
				name : "Concentration Breaker (9th Level)",
				description : desc([
					"This muzzle imbues bullets that pass through it with anti-magic properties. Creatures have DisAdv on CON save made to maintain Concentration as a result of taking damage from a ranged weapon attack using a firearm with this attachment."
				]),
				prereqeval : function(v) { return classes.known.gunner.level >= 9; },
			},
			"force pulse (9th lvl)" : {
				submenu : "[Muzzle]",
				name : "Force Pulse (9th Level)",
				description : desc([
					"When I make the first ranged weapon attack using a firearm with this attachment after it’s reloaded, the muzzle produces a pulse of repelling force. Each other Medium or smaller creature within 5 feet of me is pushed 5 feet directly away from me.",
					"When I reach 11th level in the Gunner class, this effect applies to Large or smaller creatures. When I reach 15th level in the Gunner class, this effect applies to Huge or smaller creatures.",
				]),
				prereqeval : function(v) { return classes.known.gunner.level >= 9; },
			},
			"automatic reloader" : {
				submenu : "[Miscellaneous]",
				name : "Automatic Reloader",
				description : desc([
					"The first time that a firearm with this attachment needs to be reloaded, the attachment reloads it automatically (no action required). After this attachment triggers, it can’t trigger again until I spend an action resetting the mechanism.",
				]),
			},
			"decorative etchings" : {
				submenu : "[Miscellaneous]",
				name : "Decorative Etchings",
				description : desc([
					"While visibly holding a firearm with this attachment, I have Advantage on Charisma (Intimidation) and Charisma (Persuasion) checks.",
				]),
			},
			"extended capacity" : {
				submenu : "[Miscellaneous]",
				name : "Extended Capacity",
				description : desc([
					"A firearm with this attachment has its Reload value increased by 1, to a maximum of 6.",
					"The Reload value increases by an additional 1 when I reach 5th, 11th, and 15th levels in the Gunner class.",
				]),
			},
			"smart grip" : {
				submenu : "[Miscellaneous]",
				name : "Smart Grip",
				description : desc([
					"I can’t be disarmed of or otherwise forced to drop a firearm with this attachment.", 
					"When I reach 11th level in the Gunner class, I can’t have Disadvantage on melee attack rolls made using a firearm with this attachment.",
				]),
			},
			"arcane stabiliser (5th lvl)" : {
				submenu : "[Miscellaneous]",
				name : "Arcane Stabiliser (5th Level)",
				description : desc([
					"A firearm with this attachment is considered magical for the purposes of overcoming resistance and immunity to nonmagical attacks and damage. This also applies to attacks made using Melee attachments.",
					"When I reach 11th Level in the Gunner class, the firearm with this attachment gains a +1 bonus to attack and damage rolls made with it. If the firearm already has a bonus to attack and damage rolls, I use the highest of the two. When I reach 15th level in the Gunner class, this bonus increases to +2.",
				]),
				prereqeval : function(v) { return classes.known.gunner.level >= 5; },
			},
			"bipod (9th lvl)" : {
				submenu : "[Miscellaneous]",
				name : "Bipod (9th Level)",
				description : desc([
					"As an action or Bonus Action while standing on the ground and holding a firearm with this attachment, I can unfold and mount a bipod to aid in my aiming. While I remain in the same space with the bipod unfolded, I have Advantage on the first ranged attack roll I make using the firearm on each of my turns. I can fold the bipod back in using an action or Bonus Action. If I move or are moved without first folding the bipod, I have Disadvantage on attack rolls made using the firearm until the bipod is folded.",
				]),
				prereqeval : function(v) { return classes.known.gunner.level >= 9; },
			},
			"heat sink (15th lvl)" : {
				submenu : "[Miscellaneous]",
				name : "Heat Sink (15th Level)",
				description : desc([
					"When I attack using a firearm with this attachment as part of the Attack action, I can choose to make an additional attack as part of the same action, taking 3d6 Fire damage as the weapon overheats. If I take any of this Fire damage, I have DisAdv on the attack roll. After I use this effect, I can’t do so again until I use an action to vent the excess heat.",
				]),
				prereqeval : function(v) { return classes.known.gunner.level >= 15; },
			},
		},
		"subclassfeature3" : {
			name : "Gunner’s Creed",
			source: [["ZGET", 0]],
			minlevel : 3,
			description : desc('Choose a Gunner’s Creed I follow and put it in the "Class" field ')
		},
		"lucky skill" : {
			name : "Lucky Skill",
			source: [["ZGET", 0]],
			minlevel : 3,
			description : desc([
				"Choose a skill or tool in which I am proficient; it becomes my Lucky Skill. When I make an ability check using my Lucky Skill, I can use my Second Chance special Reaction without expending any Moxie.",
			]),
		},
		"quickdraw": {
			name: "Quickdraw",
			source: [["ZGET", 0]],
			minlevel: 6,
			description: desc([
				"When I roll Initiative and I am not surprised, I can use a Reaction to make one weapon attack with a firearm. If the attack hits a hostile creature of CR 1⁄2 or greater, I gain 1 Moxie.",
			]),
		},
		"improved moxie" : {
			name : "Improved Moxie",
			source: [["ZGET", 0]],
			minlevel: 9,
			description: desc([
				"When I would lose all Moxie as a result of not gaining or expending any for 1 minute, I instead lose all but 1 Moxie. In addition, my True Grit special Reaction grants me 1d8 Temporary Hit Points per Moxie expended instead of 1d6, and I gain new special Reactions for which I can expend Moxie:",
				" \u2022 Bullet Clash. When a creature I can see makes a ranged attack while within the normal range of a firearm I am holding, I can expend 1 Moxie to deflect the attack. Make a ranged attack with that firearm. If my attack roll is higher than the triggering attack’s, that attack automatically misses.",
				" \u2022 Close Call. When I make a saving throw, I can expend 1 Moxie to add my Proficiency Bonus to my roll. I can do this after I make the roll, but before the GM determines whether it succeeds or fails.",
				" \u2022 Warning Shot. When a creature you can see moves towards me while within the normal range of a firearm I am holding, I can expend 1 Moxie to stop it in its tracks. Make a ranged attack with that firearm, which deliberately misses the creature. The creature must succeed on a Wisdom saving throw with the DC equal to the result of my attack roll or be Frightened of me until the end of my next turn.",
			]),
		},
		"tough as nails" : {
			name : "Tough as Nails",
			source: [["ZGET", 0]],
			minlevel: 10,
			description: desc([
				"I gain proficiency in Constitution saving throws.",
			]),
			saves: ["Con"],
		},
		"adrenaline rush" : {
			name : "Adrenaline Rush",
			source: [["ZGET", 0]],
			minlevel: 13,
			description: desc([
				"When I take damage that puts me at or below half of my Hit Point maximum, I can use my Reaction to immediately gain an amount of Moxie equal to my maximum Moxie, which can put me over my maximum amount. In addition, my Bullet Time feature immediately activates without expending its use, even if I have no uses of it left.",
				"Once I’ve used this feature, I can’t use it again until I finish a Long Rest.",
			]),
	 		usages: "1",
	  		recovery: "long rest",	
		},
		"double tap" : {
			name : "Double Tap",
			source: [["ZGET", 0]],
			minlevel: 14,
			description: desc([
				"I can take an additional Bonus Action on each of my turns. This Bonus Action can't be used to make an attack.",
			]),
		},
		"ultimate weapon" : {
			name : "Ultimate Weapon",
			source: [["ZGET", 0]],
			minlevel: 20,
			description: desc([
				"I’ve reached the apex of weapon modification. Using 'Choose Feature' above, choose one of the following special attachment options, which doesn’t count against the maximum number of attachments I can have or the maximum number of attachments that a weapon can hold. I can only have one instance of the chosen attachment, and I can move it between different firearms when I finish a Long Rest, but I can’t choose to replace it with a different special attachment from this feature.",
			]),
			choices: ["Arcano-Intelligent Targeting (Miscellaneous)", "Elemental Converter (Miscellaneous)", "Megamag (Miscellaneous)", "Omniscope (Sights)"],
			"arcano-intelligent targeting (miscellaneous)": {
				name: "Arcano-Intelligent Targeting (Miscellaneous)",
				description: desc([
					"When I make a ranged attack using the firearm with this attachment against a creature I can see, I can choose not to roll, but instead treat it as if I’d rolled a 20 on the attack roll. Once I use this attachment, I can’t do it again until the attachment recalibrates over the course of my next Long Rest.",
				]),	
	 			usages: "1",
	  			recovery: "long rest",
			},
			"elemental converter (miscellaneous)": {
				name: "Elemental Converter (Miscellaneous)",
				description: desc([
					"When I make a ranged weapon attack using the firearm with this attachment, I can choose to change its damage type to Acid, Cold, Fire, Lightning, or Thunder. As a Reaction when I take damage of one of those types, I can choose to gain Resistance to the triggering damage type until the end of the turn. Once I do, the next attack I make using the firearm with this attachment before the end of my next turn deals an extra 2d6 damage of the triggering type on a hit.",
				]),
			},
			"megamag (miscellaneous)": {
				name: "Megamag (Miscellaneous)",
				description: desc([
					"This attachment pulls bullets from an extradimensional space, removing the Reload property from the firearm to which it’s applied and causing it to require no ammunition. I can still reload the firearm manually to load special ammunition into it. This attachment can hold six pieces of special ammunition inside, and I can choose to use one when I make a ranged attack with the firearm.",
				]),
			},
			"omniscope (sights)": {
				name: "Omniscope (Sights)",
				description: desc([
					"Attacking at long range doesn’t impose Disadvantage on ranged weapon attack rolls made using the firearm with this attachment. The attachment also functions as a Spyglass. As a Bonus Action while holding the firearm with this attachment, I can activate the scope, choosing either Truesight or X-Ray mode. If I choose Truesight, I have Truesight out to 30 feet while looking through the scope. If I choose X-Ray, I can see into and through solid matter out to 30 feet while looking through the scope. Either mode lasts until I activate the other mode.",
				]),
			},
		},
	},

};

// Add weapon die scaling for Melee Firearm Attachments

//Bayonet
addEvals({ atkAdd : [
	function (fields, v) {
		if (v.WeaponName === "bayonet firearm attachment") {
			fields.Damage_Die = function(n){ return n < 5 ? '1d4' : n < 11 ? '1d6' : '1d8'}(classes.known.gunner.level);
		}
	},
	"", // no description means it doesn't appear in the attack line menu's pop-up dialog
	1
] }, "Bayonet Firearm Attachment damage progression", true, "items");
CurrentUpdates.types = []; // don't trigger the changes dialog for this

//Taser
addEvals({ atkAdd : [
	function (fields, v) {
		if (v.WeaponName === "taser firearm attachment") {
			fields.Damage_Die = function(n){ return n < 9 ? '1' : n < 15 ? '1d4' : '1d6'}(classes.known.gunner.level);
		}
	},
	"", // no description means it doesn't appear in the attack line menu's pop-up dialog
	1
] }, "Taser Firearm Attachment damage progression", true, "items");
CurrentUpdates.types = []; // don't trigger the changes dialog for this

//Needle
addEvals({ atkAdd : [
	function (fields, v) {
		if (v.WeaponName === "needle firearm attachment") {
			fields.Damage_Die = function(n){ return n < 11 ? '1' : '1d4'}(classes.known.gunner.level);
		}
	},
	"", // no description means it doesn't appear in the attack line menu's pop-up dialog
	1
] }, "Needle Firearm Attachment damage progression", true, "items");
CurrentUpdates.types = []; // don't trigger the changes dialog for this


//Weighted Butt
addEvals({ atkAdd : [
	function (fields, v) {
		if (v.WeaponName === "weighted butt firearm attachment") {
			fields.Damage_Die = function(n){ return n < 15 ? '1d4' : '1d6'}(classes.known.gunner.level);
		}
	},
	"", // no description means it doesn't appear in the attack line menu's pop-up dialog
	1
] }, "Weighted Butt Firearm Attachment damage progression", true, "items");
CurrentUpdates.types = []; // don't trigger the changes dialog for this




// Gunner Subclasses

AddSubClass("gunner", "deadeye's creed", {
	regExpSearch : /^(?=.*deadeye)(?=.*creed).*$/i,
	subname : "Deadeye’s Creed",
	source: [["ZGET", 0]],
	features : {
		"subclassfeature3.1" : {
			name: "Stakeout",
      			source: [["ZGET", 0]],
      			minlevel: 3,
      			description: desc(["I gain proficiency in the Perception and Stealth skills. Choose one of these skills to become an extra Lucky Skill, as per my Lucky Skill feature."]),
			skills : ["Perception", "Stealth"],
    		},
		"subclassfeature3.2" : {
			name: "Deadeye’s Flair",
      			source: [["ZGET", 0]],
      			minlevel: 3,
      			description: desc([
				"I learn uniqu ways to gain and spend Moxie:",
				" \u2022 Careful Aim. At the end of each of my turns, I gain 1 Moxie if I hit a hostile creature of CR 1⁄2 or higher with a ranged weapon attack using a firearm and didn’t spend any of my movement that turn.",
				" \u2022 Calculated Ricochet. When I miss with a ranged weapon attack using a firearm, I can expend 1 Moxie as a special Reaction to reroll the attack roll against a different target within range of the weapon and 30 feet of the original target.",
			]),
    		},
		"subclassfeature7.1" : {
			name: "Scoping Mechanism",
      			source: [["ZGET", 0]],
      			minlevel: 7,
      			description: desc([
				"When I apply attachments at the end of a Long Rest, I can apply an additional Sight attachment to one of my firearms, even if the firearm already has a different Sight attachment. This extra attachment doesn’t count against my total number of attachments or the maximum attachments a firearm can hold.",
				"In addition, the number I need to roll on the d20 to score a Critical Hit with a firearm is reduced by 1 for each Sight attachment applied to it.",
			]),
			extraname : "Scoping Mechanism Firearm Attachments",
			extrachoices : ["Adamantine Sights", "Arcanovision Sights (9th Lvl)", "Auto-Targeting Sights (9th Lvl)", "Night Vision Sights", "Telescopic Sights", "Thermal Sights (9th Lvl)"],
			extraTimes : 1,
			"adamantine sights" : {
				submenu : "[Sights]",
				name : "Adamantine Sights",
				description : desc([
					"Being Prone or targetting a Prone creature more than 5 feet away doesn’t impose Disadvantage on ranged attack rolls made using a firearm with this attachment."
				]),
			},
			"arcanovision sights (9th lvl)" : {
				submenu : "[Sights]",
				name : "Arcanovision Sights (9th Level)",
				description : desc([
					"While looking through this attachment, I see an aura around visible creatures or objects within 30 feet of me that bear magic, as per the Detect Magic spell.", 
					"When I reach 15th level in the Gunner class, I can’t have Disadvantage on ranged attack rolls using the firearm against creatures or objects bearing the aura.",
				]),
				prereqeval : function(v) { return classes.known.gunner.level >= 9; },
			},
			"auto-targeting sights (9th lvl)" : {
				submenu : "[Sights]",
				name : "Auto-Targeting Sights (9th Level)",
				description : desc([
					"When I make a ranged attack roll using a firearm with this attachment against a creature I can see, I can choose not to roll, but instead treat it as if I’d rolled a 10 on the d20. Once I use this attachment, I can’t do it again until I use an action to reset the mechanism.",
				]),
				prereqeval : function(v) { return classes.known.gunner.level >= 9; },
			},
			"night vision sights" : {
				submenu : "[Sights]",
				name : "Night Vision Sights",
				description : desc([
					"I have Darkvision out to 60 feet while looking through this attachment.",
					"When I reach 15th level in the Gunner class, I can also see normally in magical Darkness out to 60 feet while looking through this attachment.",
				]),
			},
			"telescopic sights" : {
				submenu : "[Sights]",
				name : "Telescopic Sights",
				description : desc([
					"Attacking at long range doesn’t impose Disadvantage on ranged weapon attack rolls made using a firearm with this attachment. The attachment also functions as a Spyglass.",
				]),
			},
			"thermal sights (9th lvl)" : {
				submenu : "[Sights]",
				name : "Thermal Sights (9th Level)",
				description : desc([
					"While looking through this attachment, I have Advantage on Wisdom (Perception) checks made to detect creatures that produce body heat, and I can always see those creatures regardless of light conditions or obscurement, as long as they’re not behind Total Cover. Some Constructs, Elementals, and Undead exist at ambient temperature and can’t be seen with this property (GM’s discretion).",
				]),
				prereqeval : function(v) { return classes.known.gunner.level >= 9; },
			},
    		},	
		"subclassfeature7.2" : {
			name: "Marksman’s Insight",
      			source: [["ZGET", 0]],
      			minlevel: 7,
      			description: desc([
				"I can use a Bns to examine a creature through a Sights attachment on a firearm I am holding, making an Investigation (Intelligence) check with the DC equal to 8 + half of the creature’s level or CR. On a success, choose a condition or damage type. The GM tells me whether the creature has Vulnerability, Resistance, or Immunity to the chosen condition or damage type. Success or fail, I can’t use this feature again on the same creature for 24 hours.",
			]),
			action : ["bonus action", ""],
    		},
		"subclassfeature11" : {
			name: "One Shot, One Kill",
      			source: [["ZGET", 0]],
      			minlevel: 11,
      			description: desc([
				"I can forgo additional shots to gamble it all on a single bullet—and the more I put on the line, the more I stand to win. Once per turn, when I reload a firearm, I can choose to load it with a single bullet instead of its maximum amount. If I do, the next attack made with that firearm before it’s reloaded again deals extra damage depending on the firearm’s Reload value, as detailed in the table below.",
				"Reload Value	Extra Damage",
				"Reload (1)	None",
				"Reload (2)	1d6",
				"Reload (3)	2d6",
				"Reload (4)	3d6",
				"Reload (5)	4d6",
				"Reload (6)	5d6",
			]),
    		},
		"subclassfeature15" : {
			name: "Steady Breath",
      			source: [["ZGET", 0]],
      			minlevel: 15,
      			description: desc([
				"As a Bonus Action, I can choose to start holding my breath, and I must concentrate on this as if concentrating on a spell. If I maintain Concentration on this effect until my next turn, I have Advantage on the first attack roll I make that turn, after which my Concentration ends.",
				"Additionally, when I make an Intelligence, Wisdom, or Charisma saving throw while concentrating on this feature, I can choose to stop concentrating on it to use my Close Call special Reaction without expending Moxie.",
			]),
			action : ["bonus action", ""],
    		},
		"subclassfeature18" : {
			name: "Re-Ricochet",
      			source: [["ZGET", 0]],
      			minlevel: 18,
      			description: desc([
				"I can use my Calculated Ricochet special Reaction when the attack would hit its target, causing it to miss instead so I can reroll the attack roll.",
				"In addition, after I use my Calculated Ricochet special Reaction to reroll an attack roll, I can expend 1 Moxie to reroll the attack roll again, with Advantage, against a different creature within 30 feet of the second target, which can be the original one.",
			]),
  		},					
}});

AddSubClass("gunner", "slugger's creed", {
	regExpSearch : /^(?=.*slugger)(?=.*creed).*$/i,
	subname : "Slugger's Creed",
	source: [["ZGET", 0]],
	features : {
		"subclassfeature3.1" : {
			name: "Close-Quarters Expert",
      			source: [["ZGET", 0]],
      			minlevel: 3,
      			description: desc(["I gain proficiency in the Acrobatics skill, and it becomes an extra Lucky Skill for me, as per my Lucky Skill class feature. In addition, I gain proficiency with Martial weapons that lack the Two-Handed property."]),
			weapons: [true, false, ["Martial weapons that lack the Two-Handed property"]],
    		},
		"subclassfeature3.2" : {
			name: "Slugger’s Flair",
      			source: [["ZGET", 0]],
      			minlevel: 3,
      			description: desc([
				"Alternating between gunshots and melee attacks, I unleash devastating combos. I learn unique ways to gain and spend Moxie:",
				" \u2022 Blade & Bullet. The first time I hit with a ranged weapon attack using a firearm and a melee weapon attack on the same turn, I gain 1 Moxie.",
				" \u2022 Tacticool Reload. Immediately after I reload a firearm, I can expend 1 Moxie as a special Reaction to make a melee weapon attack.",
			]),
    		},
		"subclassfeature7.1" : {
			name: "Lead to the Face",
      			source: [["ZGET", 0]],
      			minlevel: 7,
      			description: desc([
				"When I apply attachments at the end of a Long Rest, I can apply the Sawed-Off Barrel attachment to one of my firearms, even if the firearm already has a different Barrel attachment. This extra attachment doesn’t count against my total number of attachments",
			]),
    		},	
		"subclassfeature7.2" : {
			name: "Bullet Ballet",
      			source: [["ZGET", 0]],
      			minlevel: 7,
      			description: desc([
				"When I gain or expend 1 or more Moxie, I can move 5 feet without provoking OA. If the Moxie is expended as part of a Rea, I can choose to move immediately before or after I take that Reaction.",
			]),
    		},
		"subclassfeature11" : {
			name: "Concealed Parry",
      			source: [["ZGET", 0]],
      			minlevel: 11,
      			description: desc([
				"My heightened reflexes allow me to deflect attacks using my firearms. As a Reaction when a creature hits me with a melee attack while I am holding a firearm, I gain a +2 bonus to AC against the triggering attack, potentially causing it to miss."
			]),
			action : ["reaction", ""],
    		},
		"subclassfeature15" : {
			name: "Bulletstorm",
      			source: [["ZGET", 0]],
      			minlevel: 15,
      			description: desc([
				"As an action, I can weave across the battlefield in a whirlwind of steel and gunpowder. Until the end of my turn, I can make a weapon attack against a creature (no action required) the first time I move within 5 feet of it. Once I’ve used this feature, I can’t use it again until I finish a Long Rest."
			]),
			action : ["action", ""],
	 		usages: "1",
	  		recovery: "long rest",
    		},
		"subclassfeature18" : {
			name: "Counter-Strike",
      			source: [["ZGET", 0]],
      			minlevel: 18,
      			description: desc(["The bonus to AC from my Concealed Parry feature increases to +3. If the triggering attack misses, I can make a weapon attack against the attacking creature as part of the same Reaction."]),
  		},					
}});


/*
 * Weapons
 */

/*
 * Martial Ranged Weapons
 */


// Blunderbuss
WeaponsList["blunderbuss (zaman's)"] = {	
	name : "Blunderbuss (Zaman's)",
	source: [["ZGET", 0]],	
	regExpSearch : /^(?=.*blunderbuss)(?=.*zaman).*$/i,
	type : "Martial",
	ability : 2,
	abilitytodamage : true,
	damage : [3, 4, "piercing"],
	range : "20/60 ft",
	description : "Ammunition (range 20/60), Loud (1000), Reload (1), Two-Handed;",
	list : "ranged",
	weight : 5,
};

// Musket
WeaponsList["musket (zaman's)"] = {	
	name : "Musket (Zaman's)",
	source: [["ZGET", 0]],	
	regExpSearch : /^(?=.*musket)(?=.*zaman).*$/i,
	type : "Martial",
	ability : 2,
	abilitytodamage : true,
	damage : [1, 12, "piercing"],
	range : "80/240 ft",
	description : "Ammunition (range 80/240), Loud (1000), Reload (1), Two-Handed;",
	list : "ranged",
	weight : 10,
};

// Pistol
WeaponsList["pistol (zaman's)"] = {	
	name : "Pistol (Zaman's)",
	source: [["ZGET", 0]],	
	regExpSearch : /^(?=.*pistol)(?=.*zaman).*$/i,
	type : "Martial",
	ability : 2,
	abilitytodamage : true,
	damage : [1, 6, "piercing"],
	range : "40/120 ft",
	description : "Ammunition (range 40/120), Light, Loud (500), Reload (2);",
	list : "ranged",
	weight : 2,
};

// Revolver
WeaponsList["revolver (zaman's)"] = {	
	name : "Revolver (Zaman's)",
	source: [["ZGET", 0]],	
	regExpSearch : /^(?=.*revolver)(?=.*zaman).*$/i,
	type : "Martial",
	ability : 2,
	abilitytodamage : true,
	damage : [1, 8, "piercing"],
	range : "60/240 ft",
	description : "Ammunition (range 60/240), Loud (500), Reload (6);",
	list : "ranged",
	weight : 2,
};

// Rifle
WeaponsList["rifle (zaman's)"] = {	
	name : "Rifle (Zaman's)",
	source: [["ZGET", 0]],	
	regExpSearch : /^(?=.*rifle)(?=.*zaman).*$/i,
	type : "Martial",
	ability : 2,
	abilitytodamage : true,
	damage : [1, 10, "piercing"],
	range : "120/480 ft",
	description : "Ammunition (range 120/480), Loud (1000), Reload (2), Two-Handed;",
	list : "ranged",
	weight : 5,
};


/*
 * Magic Items
 */

// Caster Blaster
MagicItemsList["caster blaster"] = {
	name : "Caster Blaster",
	source: [["ZGET", 0]],
	type : "weapon (any firearm)",
	description : "",
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isRangedWeapon && /zaman/i.test(v.baseWeaponName) && /blunderbuss|musket|pistol|revolver|rifle/i.test(v.baseWeaponName) && (/^(?=.*caster)(?=.*blaster).*$/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
				}
			},
			'If I include the word "Caster Blaster" in the name of a firearm, it will be treated as the magic weapon Caster Blaster.'
		],
	},
	choices : ["uncommon", "rare", "very rare"],
	choicesNotInMenu : true,
	"uncommon" : {
		rarity : "uncommon",
		description : 
			"This weapon has 30 charges and regains all expended charges daily at dawn. The firearm doesn’t have the Reload property, and doesn’t require ammunition. Instead, it shoots rays of magical energy, dealing Force damage instead of its normal damage type, and I must expend 1 charge each time I make an attack with it.", 
		descriptionFull : 
			"This weapon has 30 charges and regains all expended charges daily at dawn. The firearm doesn’t have the Reload property, and doesn’t require ammunition. Instead, it shoots rays of magical energy, dealing Force damage instead of its normal damage type, and I must expend 1 charge each time I make an attack with it."+
			"\n   " + toUni("Hex-Rays.") + " A few of the crystals in this weapon have been infused with elemental magic. When I make an attack with this weapon, I can choose to empower it with one of the following options. Once an option has been used, it can’t be used again until the next dawn."+
			"\n   \u2022 " + toUni("Cold.") + " The attack deals an extra 2d6 Cold damage and the target’s Speed is halved until the start of my next turn."+
			"\n   \u2022 " + toUni("Fire.") + " The attack deals an extra 3d6 Fire damage."+
			"\n   \u2022 " + toUni("Lightning.") + " The attack deals an extra 2d6 Lightning damage and it’s made with Advantage if the target is wearing armour made of metal."+
			"\n   \u2022 " + toUni("Poison.") + " The attack deals an extra 1d6 Poison damage and the target is Poisoned until the start of my next turn."+
			"\n   " + toUni("Hextech Recharge.") + " As an action, I can slot a gemstone worth 50 GP or more into the firearm, which immediately destroys the gemstone and regains 10 charges. Once this property of the weapon has been used, it can’t be used again until the next dawn.",
		usages : 30,
		recovery : "dawn",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : ["between", "Caster Blaster", "[uncommon]"],
			descriptionChange : ["replace", "firearm"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /blunderbuss|musket|pistol|revolver|rifle/i;
				return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
			}
		},
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if ((/^(?=.*caster)(?=.*blaster).*$/i).test(v.WeaponTextName) !== -1) fields.Damage_Type = 'Force';
				},
				"The Caster Blaster shoots rays of magical energy, dealing Force damage instead of its normal damage type."
			]
		},
	},
	"rare" : {
		rarity : "rare",
		description : 
			"This weapon has 35 charges and regains all expended charges daily at dawn. The firearm doesn’t have the Reload property, and doesn’t require ammunition. Instead, it shoots rays of magical energy, dealing Force damage instead of its normal damage type, and I must expend 1 charge each time I make an attack with it.", 
		descriptionFull : 
			"This weapon has 35 charges and regains all expended charges daily at dawn. The firearm doesn’t have the Reload property, and doesn’t require ammunition. Instead, it shoots rays of magical energy, dealing Force damage instead of its normal damage type, and I must expend 1 charge each time I make an attack with it."+
			"\n   " + toUni("Hex-Rays.") + " A few of the crystals in this weapon have been infused with elemental magic. When I make an attack with this weapon, I can choose to empower it with one of the following options. Once an option has been twice, it can’t be used again until the next dawn."+
			"\n   \u2022 " + toUni("Cold.") + " The attack deals an extra 2d6 Cold damage and the target’s Speed is halved until the start of my next turn."+
			"\n   \u2022 " + toUni("Fire.") + " The attack deals an extra 3d6 Fire damage."+
			"\n   \u2022 " + toUni("Lightning.") + " The attack deals an extra 2d6 Lightning damage and it’s made with Advantage if the target is wearing armour made of metal."+
			"\n   \u2022 " + toUni("Poison.") + " The attack deals an extra 1d6 Poison damage and the target is Poisoned until the start of my next turn."+
			"\n   " + toUni("Hextech Recharge.") + " As an action, I can slot a gemstone worth 50 GP or more into the firearm, which immediately destroys the gemstone and regains 10 charges. Once this property of the weapon has been used, it can’t be used again until the next dawn.",
		usages : 35,
		recovery : "dawn",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : ["between", "Caster Blaster", "[rare]"],
			descriptionChange : ["replace", "firearm"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /blunderbuss|musket|pistol|revolver|rifle/i;
				return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
			}
		},
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if ((/^(?=.*caster)(?=.*blaster).*$/i).test(v.WeaponTextName) !== -1) fields.Damage_Type = 'Force';
				},
				"The Caster Blaster shoots rays of magical energy, dealing Force damage instead of its normal damage type."
			]
		},
	},
	"very rare" : {
		rarity : "very rare",
		description : 
			"This weapon has 40 charges and regains all expended charges daily at dawn. The firearm doesn’t have the Reload property, and doesn’t require ammunition. Instead, it shoots rays of magical energy, dealing Force damage instead of its normal damage type, and I must expend 1 charge each time I make an attack with it.", 
		descriptionFull : 
			"This weapon has 40 charges and regains all expended charges daily at dawn. The firearm doesn’t have the Reload property, and doesn’t require ammunition. Instead, it shoots rays of magical energy, dealing Force damage instead of its normal damage type, and I must expend 1 charge each time I make an attack with it."+
			"\n   " + toUni("Hex-Rays.") + " A few of the crystals in this weapon have been infused with elemental magic. When I make an attack with this weapon, I can choose to empower it with one of the following options. I can choose to empower an attack with up to two of the available options simultaneously. Once an option has been thrice, it can’t be used again until the next dawn."+
			"\n   \u2022 " + toUni("Cold.") + " The attack deals an extra 2d6 Cold damage and the target’s Speed is halved until the start of my next turn."+
			"\n   \u2022 " + toUni("Fire.") + " The attack deals an extra 3d6 Fire damage."+
			"\n   \u2022 " + toUni("Lightning.") + " The attack deals an extra 2d6 Lightning damage and it’s made with Advantage if the target is wearing armour made of metal."+
			"\n   \u2022 " + toUni("Poison.") + " The attack deals an extra 1d6 Poison damage and the target is Poisoned until the start of my next turn."+
			"\n   " + toUni("Hextech Recharge.") + " As an action, I can slot a gemstone worth 50 GP or more into the firearm, which immediately destroys the gemstone and regains 10 charges. Once this property of the weapon has been used, it can’t be used again until the next dawn.",
		usages : 40,
		recovery : "dawn",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : ["between", "Caster Blaster", "[very rare]"],
			descriptionChange : ["replace", "firearm"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /blunderbuss|musket|pistol|revolver|rifle/i;
				return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
			}
		},
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if ((/^(?=.*caster)(?=.*blaster).*$/i).test(v.WeaponTextName)!== -1) fields.Damage_Type = 'Force';
				},
				"The Caster Blaster shoots rays of magical energy, dealing Force damage instead of its normal damage type."
			]
		},
	},
};

// Piecemaker
MagicItemsList["piecemaker"] = {
	name : "Piecemaker",
	source: [["ZGET", 0]],
	type : "weapon (any firearm)",
	description : "",
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isRangedWeapon && /zaman/i.test(v.baseWeaponName) && /blunderbuss|musket|pistol|revolver|rifle/i.test(v.baseWeaponName) && (/^(?=.*piecemaker).*$/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
				}
			},
			'If I include the word "Piecemaker" in the name of a firearm, it will be treated as the magic weapon Piecemaker.'
		],
	},
	choices : ["uncommon", "rare", "very rare"],
	choicesNotInMenu : true,
	"uncommon" : {
		rarity : "uncommon",
		description : 
			"Originally named the ‘Peacemaker’, this field combat device has built in protections to prevent its agents from exceeding their mandate. If the magic within the firearm detects that a target is unarmed, the agent is unable to discharge the weapon.", 
		descriptionFull : 
			"Originally named the ‘Peacemaker’, this field combat device has built in protections to prevent its agents from exceeding their mandate. If the magic within the firearm detects that a target is unarmed, the agent is unable to discharge the weapon."+
			"\n   " + toUni("Elemental Ammunition.") + " After this weapon is reloaded, choose one of the following damage types: Acid, Cold, Fire, Lightning, or Thunder. The bullets loaded into the weapon are destroyed and replaced with blasts of elemental energy, which deal the chosen type of damage instead of the weapon’s normal damage type. If the weapon is reloaded again, any energy left in it dissipates."+
			"\n   " + toUni("Conflict Avoidance.") + " If the target of my attack is an unarmed creature, the weapon doesn’t fire and the attack is wasted. The piecemaker is sophisticated enough to detect whether a creature has natural weapons, such as a bear’s claws and bite. If a creature’s natural weapons are restricted—such as handcuffed claws, or a muzzled maw—the piecemaker deems the target to be unarmed. Unarmed strikes notably aren’t classified as weapons. For this reason, the Shadow Enclave’s agents often manage to escape confrontations with the FBI unscathed.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : ["between", "Piecemaker", "[uncommon]"],
			descriptionChange : ["replace", "firearm"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /blunderbuss|musket|pistol|revolver|rifle/i;
				return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
			}
		},
	},
	"rare" : {
		rarity : "rare",
		description : 
			"Originally named the ‘Peacemaker’, this field combat device has built in protections to prevent its agents from exceeding their mandate. If the magic within the firearm detects that a target is unarmed, the agent is unable to discharge the weapon.", 
		descriptionFull : 
			"Originally named the ‘Peacemaker’, this field combat device has built in protections to prevent its agents from exceeding their mandate. If the magic within the firearm detects that a target is unarmed, the agent is unable to discharge the weapon."+
			"\n   " + toUni("Elemental Ammunition.") + " After this weapon is reloaded, choose one of the following damage types: Acid, Cold, Fire, Lightning, or Thunder. The bullets loaded into the weapon are destroyed and replaced with blasts of elemental energy, which deal the chosen type of damage instead of the weapon’s normal damage type. If the weapon is reloaded again, any energy left in it dissipates."+
			"\n   " + toUni("Conflict Avoidance.") + " If the target of my attack is an unarmed creature, the weapon doesn’t fire and the attack is wasted. The piecemaker is sophisticated enough to detect whether a creature has natural weapons, such as a bear’s claws and bite. If a creature’s natural weapons are restricted—such as handcuffed claws, or a muzzled maw—the piecemaker deems the target to be unarmed. Unarmed strikes notably aren’t classified as weapons. For this reason, the Shadow Enclave’s agents often manage to escape confrontations with the FBI unscathed."+
			"\n   " + toUni("Enhance Ammo.") + " As a Bonus Action while holding this weapon, I can enhance the energy currently loaded into it. Each attack made with the firearm before it’s reloaded again has an additional effect depending on the chosen damage type. Once this property of the weapon has been used, it can’t be used again until the next dawn."+
			"\n   \u2022 " + toUni("Acid Dissolution.") + " When I hit a creature wearing nonmagical metal armour with an Acid attack, roll a d20. On an 11 or higher, its armour suffers a cumulative -1 penalty to the AC it offers. The armour is destroyed if the penalty reduces its AC to 10."+
			"\n   \u2022 " + toUni("Cold Deceleration.") + " A creature hit by a Cold attack must succeed on a DC 15 Constitution saving throw or have its Speed reduced to 0 feet until the end of its next turn."+
			"\n   \u2022 " + toUni("Fire Explosion.") + " The target hit by a Fire attack and each creature within 5 feet of it must succeed on a DC 15 Dexterity saving throw or take 1d6 Fire damage."+
			"\n   \u2022 " + toUni("Lightning Inhibition.") + " A creature hit by a Lightning attack must succeed on a DC 15 Constitution saving throw or be unable to take Reactions until the start of its next turn. A creature that fails this saving throw by 10 or more is Incapacitated until the end of its next turn unless it is Immune to being stunned."+
			"\n   \u2022 " + toUni("Thunder Disorientation.") + " A creature hit by a Thunder attack must succeed on a DC 15 CON save or be Deafened until the end of its next turn and have DisAdv on the next attack roll or ability check it makes before then.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : ["between", "Piecemaker Mk.2", "[rare]"],
			descriptionChange : ["replace", "firearm"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /blunderbuss|musket|pistol|revolver|rifle/i;
				return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
			}
		},
		action : ["bonus action", "Enhance Ammo"],
	},
	"very rare" : {
		rarity : "very rare",
		description : 
			"Originally named the ‘Peacemaker’, this field combat device has built in protections to prevent its agents from exceeding their mandate. If the magic within the firearm detects that a target is unarmed, the agent is unable to discharge the weapon.", 
		descriptionFull : 
			"Originally named the ‘Peacemaker’, this field combat device has built in protections to prevent its agents from exceeding their mandate. If the magic within the firearm detects that a target is unarmed, the agent is unable to discharge the weapon."+
			"\n   " + toUni("Elemental Ammunition.") + " After this weapon is reloaded, choose one of the following damage types: Acid, Cold, Fire, Lightning, or Thunder. The bullets loaded into the weapon are destroyed and replaced with blasts of elemental energy, which deal the chosen type of damage instead of the weapon’s normal damage type. If the weapon is reloaded again, any energy left in it dissipates."+
			"\n   " + toUni("Conflict Avoidance.") + " If the target of my attack is an unarmed creature, the weapon doesn’t fire and the attack is wasted. The piecemaker is sophisticated enough to detect whether a creature has natural weapons, such as a bear’s claws and bite. If a creature’s natural weapons are restricted—such as handcuffed claws, or a muzzled maw—the piecemaker deems the target to be unarmed. Unarmed strikes notably aren’t classified as weapons. For this reason, the Shadow Enclave’s agents often manage to escape confrontations with the FBI unscathed."+
			"\n   " + toUni("Enhance Ammo.") + " As a Bonus Action while holding this weapon, I can enhance the energy currently loaded into it. Each attack made with the firearm before it’s reloaded again has an additional effect depending on the chosen damage type. Once this property of the weapon has been used, it can’t be used again until the next dawn."+
			"\n   \u2022 " + toUni("Acid Dissolution.") + " When I hit a creature wearing nonmagical metal armour with an Acid attack, roll a d20. On an 11 or higher, its armour suffers a cumulative -1 penalty to the AC it offers. The armour is destroyed if the penalty reduces its AC to 10."+
			"\n   \u2022 " + toUni("Cold Deceleration.") + " A creature hit by a Cold attack must succeed on a DC 16 Constitution saving throw or have its Speed reduced to 0 feet until the end of its next turn."+
			"\n   \u2022 " + toUni("Fire Explosion.") + " The target hit by a Fire attack and each creature within 5 feet of it must succeed on a DC 16 Dexterity saving throw or take 1d6 Fire damage."+
			"\n   \u2022 " + toUni("Lightning Inhibition.") + " A creature hit by a Lightning attack must succeed on a DC 16 Constitution saving throw or be unable to take Reactions until the start of its next turn. A creature that fails this saving throw by 10 or more is Incapacitated until the end of its next turn unless it is Immune to being stunned."+
			"\n   \u2022 " + toUni("Thunder Disorientation.") + " A creature hit by a Thunder attack must succeed on a DC 16 CON save or be Deafened until the end of its next turn and have DisAdv on the next attack roll or ability check it makes before then.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : ["between", "+3 Piecemaker Mk.3", "[very rare]"],
			descriptionChange : ["replace", "firearm"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /blunderbuss|musket|pistol|revolver|rifle/i;
				return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
			}
		},
		action : ["bonus action", "Enhance Ammo"],
	},
};

// Timestopper
MagicItemsList["timestopper"] = {
	name : "Timestopper",
	source: [["ZGET", 0]],
	type : "weapon (any firearm)",
	attunement: true,
	description : "",
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isRangedWeapon && /zaman/i.test(v.baseWeaponName) && /blunderbuss|musket|pistol|revolver|rifle/i.test(v.baseWeaponName) && (/^(?=.*timestopper).*$/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
				}
			},
			'If I include the word "Timestopper" in the name of a firearm, it will be treated as the magic weapon Timestopper.'
		],
	},
	usages : 3,
	recovery : "dawn",
	choices : ["uncommon", "rare", "very rare"],
	choicesNotInMenu : true,
	"uncommon" : {
		rarity : "uncommon",
		description : 
			"The weapon has 3 charges and regains all expended charges daily at dawn.", 
		descriptionFull : 
			"The weapon has 3 charges and regains all expended charges daily at dawn."+
			"\n   " + toUni("Future Problem.") + " When I hit with an attack roll using this weapon, I can expend 1 charge to cause the bullet to be sent into the future just before making contact, delaying the hit and dealing no damage to the target. At the start of my next turn, the bullet reappears and hits the target regardless of where it is, dealing its normal damage plus an extra 3d6 Force damage."+
			"\n   " + toUni("Temporal Bifurcation.") + " Whenever I score a critical hit with this magic weapon, the bullet splits in two. One of the bullets hits the target, dealing the normal damage for the attack, while the other is sent into the future as per the Future Problem property. The future bullet’s damage doesn’t get doubled from the critical hit.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : ["between", "Timestopper", "[uncommon]"],
			descriptionChange : ["replace", "firearm"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /blunderbuss|musket|pistol|revolver|rifle/i;
				return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
			}
		},
	},
	"rare" : {
		rarity : "rare",
		description : 
			"I gain a +1 bonus to attack and damage rolls made with this magic weapon. The weapon has 3 charges and regains all expended charges daily at dawn.", 
		descriptionFull : 
			"I gain a +1 bonus to attack and damage rolls made with this magic weapon. The weapon has 3 charges and regains all expended charges daily at dawn."+
			"\n   " + toUni("Future Problem.") + " When I hit with an attack roll using this weapon, I can expend 1 charge to cause the bullet to be sent into the future just before making contact, delaying the hit and dealing no damage to the target. At the start of my next turn, the bullet reappears and hits the target regardless of where it is, dealing its normal damage plus an extra 3d6 Force damage."+
			"\n   " + toUni("Temporal Bifurcation.") + " Whenever I score a critical hit with this magic weapon, the bullet splits in two. One of the bullets hits the target, dealing the normal damage for the attack, while the other is sent into the future as per the Future Problem property. The future bullet’s damage doesn’t get doubled from the critical hit.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : ["between", "+1 Timestopper", "[uncommon]"],
			descriptionChange : ["replace", "firearm"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /blunderbuss|musket|pistol|revolver|rifle/i;
				return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
			}
		},
	},
	"very rare" : {
		rarity : "very rare",
		description : 
			"I gain a +2 bonus to attack and damage rolls made with this magic weapon. The weapon has 3 charges and regains all expended charges daily at dawn.", 
		descriptionFull : 
			"I gain a +2 bonus to attack and damage rolls made with this magic weapon. The weapon has 3 charges and regains all expended charges daily at dawn."+
			"\n   " + toUni("Future Problem.") + " When I hit with an attack roll using this weapon, I can expend 1 charge to cause the bullet to be sent into the future just before making contact, delaying the hit and dealing no damage to the target. At the start of my next turn, the bullet reappears and hits the target regardless of where it is, dealing its normal damage plus an extra 3d8 Force damage."+
			"\n   " + toUni("Temporal Bifurcation.") + " Whenever I score a critical hit with this magic weapon, the bullet splits in two. One of the bullets hits the target, dealing the normal damage for the attack, while the other is sent into the future as per the Future Problem property. The future bullet’s damage doesn’t get doubled from the critical hit.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : ["between", "+2 Timestopper", "[uncommon]"],
			descriptionChange : ["replace", "firearm"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /blunderbuss|musket|pistol|revolver|rifle/i;
				return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
			}
		},
	},
};


/*
 * Magic Ammunition
 */

MagicItemsList["deceiver’s kiss (bullet)"] = {
	name : "Deceiver’s Kiss (Bullet)",
	source: [["ZGET", 0]],
	type : "ammunition (bullet)",
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isRangedWeapon && /bullet/i.test(inObj.icon) && /blunderbuss|musket|pistol|revolver|rifle/i.test(v.baseWeaponName) && (/^(?=.*piecemaker).*$/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
				}
			},
			'If I include the word "Piecemaker" in the name of a bullet, it will be treated as the magic ammunition Piecemaker.'
		],
	},
	choices : ["uncommon", "rare", "very rare"],
	choicesNotInMenu : true,
	"uncommon" : {
		rarity : "uncommon",
		description : 
			"When I hit a creature with an attack using this ammunition, it must succeed on a DC 13 Wisdom saving throw or believe that a creature of my choice that it can see within 30 feet of it was the shooter. Until the end of my next turn, the target considers the chosen creature an enemy, and attacks it if it’s the closest hostile creature.",
		descriptionFull : 
			toUni("Et Tu?") + " When I hit a creature with an attack using this ammunition, it must succeed on a DC 13 Wisdom saving throw or believe that a creature of my choice that it can see within 30 feet of it was the shooter. Until the end of my next turn, the target considers the chosen creature an enemy, and attacks it if it’s the closest hostile creature.",
		chooseGear : {
			type : "ammo",
			prefixOrSuffix : ["between", "Deceiver’s Kiss", "[uncommon]"],
			excludeCheck : function (inObjKey, inObj) {
				return /vials|flasks|arrows|grenades|needles/i.test(inObj.icon);
			}
		},
	},
	"rare" : {
		rarity : "rare",
		description : 
			"When I hit a creature with an attack using this ammunition, it must succeed on a DC 15 Wisdom saving throw or believe that a creature of my choice that it can see within 30 feet of it was the shooter. Until the end of my next turn, the target considers the chosen creature an enemy, and attacks it if it’s the closest hostile creature.",
		descriptionFull : 
			toUni("Et Tu?") + " When I hit a creature with an attack using this ammunition, it must succeed on a DC 15 Wisdom saving throw or believe that a creature of my choice that it can see within 30 feet of it was the shooter. Until the end of my next turn, the target considers the chosen creature an enemy, and attacks it if it’s the closest hostile creature. The effects last for 1 minute. An affected creature can repeat the saving throw at the end of each of its turns, ending the effect on a success.",
		chooseGear : {
			type : "ammo",
			prefixOrSuffix : ["between", "Deceiver’s Kiss", "[rare]"],
			excludeCheck : function (inObjKey, inObj) {
				return /vials|flasks|arrows|grenades|needles/i.test(inObj.icon);
			}
		},
	},
	"very rare" : {
		rarity : "very rare",
		description : 
			"When I hit a creature with an attack using this ammunition, it must succeed on a DC 16 Wisdom saving throw or believe that a creature of my choice that it can see within 30 feet of it was the shooter. Until the end of my next turn, the target considers the chosen creature an enemy, and attacks it if it’s the closest hostile creature.",
		descriptionFull : 
			toUni("Et Tu?") + " When I hit a creature with an attack using this ammunition, it must succeed on a DC 16 Wisdom saving throw or believe that a creature of my choice that it can see within 30 feet of it was the shooter. Until the end of my next turn, the target considers the chosen creature an enemy, and attacks it if it’s the closest hostile creature. The effects last for 1 minute and the affected creature has Advantage on attack rolls against the creature that it believes was the shooter. An affected creature can repeat the saving throw at the end of each of its turns, ending the effect on a success.",
		chooseGear : {
			type : "ammo",
			prefixOrSuffix : ["between", "Deceiver’s Kiss", "[very rare]"],
			excludeCheck : function (inObjKey, inObj) {
				return /vials|flasks|arrows|grenades|needles/i.test(inObj.icon);
			}
		},
	},
};

MagicItemsList["timethief (bullet)"] = {
	name : "Timethief (Bullet)",
	source: [["ZGET", 0]],
	type : "ammunition (bullet)",
	choices : ["uncommon", "rare", "very rare"],
	choicesNotInMenu : true,
	"uncommon" : {
		rarity : "uncommon",
		description : 
			"Although chronocrime is a nebulous, abstract concept to most people, the authorities of Kasbat Azzaman have long struggled to stifle its rise in the city. An estimated total of one year’s worth of time is stolen from the populace on a monthly basis, and underground time-trafficking markets pop up as quickly as they’re shut down.",
		descriptionFull : 
			"Although chronocrime is a nebulous, abstract concept to most people, the authorities of Kasbat Azzaman have long struggled to stifle its rise in the city. An estimated total of one year’s worth of time is stolen from the populace on a monthly basis, and underground time-trafficking markets pop up as quickly as they’re shut down."+
			toUni("Chronocrime.") + " When I hit a creature with an attack using this ammunition, it must make a DC 13 CON save. On a failed save, the creature can’t take Reactions or Legendary Action until the end of its next turn, and I can take an additional Reaction until the start of my next turn. I can still only take one Reaction on each turn.",
		chooseGear : {
			type : "ammo",
			prefixOrSuffix : ["between", "Timethief", "[uncommon]"],
			excludeCheck : function (inObjKey, inObj) {
				return /vials|flasks|arrows|grenades|needles/i.test(inObj.icon);
			}
		},
	},
	"rare" : {
		rarity : "rare",
		description : 
			"Although chronocrime is a nebulous, abstract concept to most people, the authorities of Kasbat Azzaman have long struggled to stifle its rise in the city. An estimated total of one year’s worth of time is stolen from the populace on a monthly basis, and underground time-trafficking markets pop up as quickly as they’re shut down.",
		descriptionFull : 
			"Although chronocrime is a nebulous, abstract concept to most people, the authorities of Kasbat Azzaman have long struggled to stifle its rise in the city. An estimated total of one year’s worth of time is stolen from the populace on a monthly basis, and underground time-trafficking markets pop up as quickly as they’re shut down."+
			toUni("Chronocrime.") + " When I hit a creature with an attack using this ammunition, it must make a DC 15 CON save. On a failed save, the creature can’t take Reactions or Legendary Action until the end of its next turn.",
		chooseGear : {
			type : "ammo",
			prefixOrSuffix : ["between", "Timethief", "[rare]"],
			excludeCheck : function (inObjKey, inObj) {
				return /vials|flasks|arrows|grenades|needles/i.test(inObj.icon);
			}
		},
	},
	"very rare" : {
		rarity : "very rare",
		description : 
			"Although chronocrime is a nebulous, abstract concept to most people, the authorities of Kasbat Azzaman have long struggled to stifle its rise in the city. An estimated total of one year’s worth of time is stolen from the populace on a monthly basis, and underground time-trafficking markets pop up as quickly as they’re shut down.",
		descriptionFull : 
			"Although chronocrime is a nebulous, abstract concept to most people, the authorities of Kasbat Azzaman have long struggled to stifle its rise in the city. An estimated total of one year’s worth of time is stolen from the populace on a monthly basis, and underground time-trafficking markets pop up as quickly as they’re shut down."+
			toUni("Chronocrime.") + " When I hit a creature with an attack using this ammunition, it must make a DC 16 CON save. On a failed save, the creature can’t take Reactions or Legendary Action until the end of its next turn, and I can take an additional Reaction until the start of my next turn. I can still only take one Reaction on each turn. A creature that fails the saving throw has its Speed halved until the end of its next turn. My Walk Speed is increased by the same amount until the start of my next turn.",
		chooseGear : {
			type : "ammo",
			prefixOrSuffix : ["between", "Timethief", "[very rare]"],
			excludeCheck : function (inObjKey, inObj) {
				return /vials|flasks|arrows|grenades|needles/i.test(inObj.icon);
			}
		},
	},
};

MagicItemsList["powder pellet (bullet)"] = {
	name : "Powder Pellet (Bullet)",
	source: [["ZGET", 0]],
	type : "ammunition (bullet)",
	choices : ["uncommon", "rare", "very rare"],
	choicesNotInMenu : true,
	"uncommon" : {
		rarity : "uncommon",
		description : 
			"In order to ignite a revolution, one brave soul needs to light the match. Curiously, the same principle applies to enormous clouds of highly combustible gunpowder.",
		descriptionFull : 
			"In order to ignite a revolution, one brave soul needs to light the match. Curiously, the same principle applies to enormous clouds of highly combustible gunpowder."+
			toUni("Combustion Cloud.") + " After I make an attack using this ammunition, it creates a cloud of gunpowder in a 10-foot-radius Sphere centred on the target, regardless of whether the attack hits or misses. The cloud spreads around corners, its area is Heavily Obscured, and creatures within it can’t breathe. It lasts for 1 minute, or until it’s dispersed by a strong wind. If a flame touches any part of the cloud, the entire cloud etonates, and creatures within it must make a DC 13 DEX save. A creature takes 3d6 Fire and 3d6 Thunder damage on a failed save, or half as much damage on a success.",
		chooseGear : {
			type : "ammo",
			prefixOrSuffix : ["between", "Powder Pellet", "[very rare]"],
			excludeCheck : function (inObjKey, inObj) {
				return /vials|flasks|arrows|grenades|needles/i.test(inObj.icon);
			}
		},
	},
	"rare" : {
		rarity : "rare",
		description : 
			"In order to ignite a revolution, one brave soul needs to light the match. Curiously, the same principle applies to enormous clouds of highly combustible gunpowder.",
		descriptionFull : 
			"In order to ignite a revolution, one brave soul needs to light the match. Curiously, the same principle applies to enormous clouds of highly combustible gunpowder."+
			toUni("Combustion Cloud.") + " After I make an attack using this ammunition, it creates a cloud of gunpowder in a 15-foot-radius Sphere centred on the target, regardless of whether the attack hits or misses. The cloud spreads around corners, its area is Heavily Obscured, and creatures within it can’t breathe. It lasts for 1 minute, or until it’s dispersed by a strong wind. If a flame touches any part of the cloud, the entire cloud etonates, and creatures within it must make a DC 14 DEX save. A creature takes 4d6 Fire and 4d6 Thunder damage on a failed save, or half as much damage on a success.",
		chooseGear : {
			type : "ammo",
			prefixOrSuffix : ["between", "Powder Pellet", "[very rare]"],
			excludeCheck : function (inObjKey, inObj) {
				return /vials|flasks|arrows|grenades|needles/i.test(inObj.icon);
			}
		},
	},
	"very rare" : {
		rarity : "very rare",
		description : 
			"In order to ignite a revolution, one brave soul needs to light the match. Curiously, the same principle applies to enormous clouds of highly combustible gunpowder.",
		descriptionFull : 
			"In order to ignite a revolution, one brave soul needs to light the match. Curiously, the same principle applies to enormous clouds of highly combustible gunpowder."+
			toUni("Combustion Cloud.") + " After I make an attack using this ammunition, it creates a cloud of gunpowder in a 20-foot-radius Sphere centred on the target, regardless of whether the attack hits or misses. The cloud spreads around corners, its area is Heavily Obscured, and creatures within it can’t breathe. It lasts for 1 minute, or until it’s dispersed by a strong wind. If a flame touches any part of the cloud, the entire cloud etonates, and creatures within it must make a DC 16 DEX save. A creature takes 5d6 Fire and 5d6 Thunder damage on a failed save, or half as much damage on a success.",
		chooseGear : {
			type : "ammo",
			prefixOrSuffix : ["between", "Powder Pellet", "[very rare]"],
			excludeCheck : function (inObjKey, inObj) {
				return /vials|flasks|arrows|grenades|needles/i.test(inObj.icon);
			}
		},
	},
};














