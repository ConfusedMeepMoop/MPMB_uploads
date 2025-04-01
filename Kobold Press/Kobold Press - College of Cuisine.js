if (sheetVersion < 13001012) {
  throw "This script was made for a newer version of the sheet (v13.1.14). Please use the latest version and try again.\nYou can get the latest version at www.flapkan.com.";
}
var iFileName = "College of Cuisine [Kobold Press].js";
RequiredSheetVersion("13.1.12");

SourceList["KP"] = {
   name: "Kobold Press",
   abbreviation: "KP",
   abbreviationSpellsheet : "KP",
   group: "Third Party",
   date: "2025-04-01",
};


/*
 * Subclasses
 */

// Bard Subclasses
AddSubClass("bard", "college of cuisine", {
	regExpSearch : /^(?=.*college)(?=.*cuisine).*$/i,
	subname : "College of Cuisine",
	source : [["KP", 0]],
	features : {
		"subclassfeature3.1" : {
			name : "Bonus Proficiencies",
			source : [["KP", 0]],
			minlevel : 3,
			description : desc([
				"I gain proficiency in cook’s utensils and brewer’s supplies. I can use either of these tools as my spellcasting focus.",
			]),
			toolProfs: ["Cook’s Utensils", "Brewer’s Supplies"],
		},
		"subclassfeature3.2" : {
			name : "Magical Treats",
			source : [["KP", 0]],
			minlevel : 3,
			description : desc([
				"Each day, I can infuse a number of treats equal to my Charisma modifier. Infusing a treat takes an action. When you infuse a treat, spend one use of Bardic Inspiration and choose a spell of 1st or 2nd level that targets a single creature and that takes 1 action to cast. You expend a spell slot of the same level as the spell, placing that spell in the treat. Infused treats lose their magic after 24 hours.",
				"I or another creature can eat a treat as an action, gaining the benefit of the spell for the maximum listed duration. If a creature is incapable of eating a treat due to a condition, including but not limited to being paralyzed, incapacitated, or unconscious, another creature can use their action to feed it to the indisposed creature. No creature can benefit from the effects of more than one treat at the same time.",
				"A creature eating a treat also gains the benefit of my Bardic Inspiration, which they must use before the duration of the infused spell elapses or 10 minutes pass, whichever is greater. Neither I nor the creature eating the treat needs to concentrate on this spell. If the spell can affect more than one creature at higher levels, I can infuse more than one treat when I expend the appropriate spell slot, but each treat I infuse costs me one of my uses of Magical Treats and one use of Bardic Inspiration. If the spell I am infusing into a treat has a material component, I must expend that component. If the spell can affect multiple creatures when I expend a higher-level spell slot and it has a material component, I must expend the component only once, regardless of the number of treats I infuse with the spell.",
				"The level of spell I can infuse into treats increases when I reach certain levels in the class. At 5th level, I can also infuse 3rd-level spells into treats. At 10th level, I can also infuse 4th- and 5th-level spells into treats. At 15th-level, I can also infuse 6th-, 7th-, and 8th-level spells into treats.",
			]),
			action : [["action", "Infusing treat"],["action", "Eat/feed treat"]],
			recovery: "long rest",
			usagescalc: "event.value = Math.max(1,What('Cha Mod'))",
			toNotesPage: [{
				name : "Magical Treats",
				source : [["KP", 0]],
				note: desc([
					"Each day, I can infuse a number of treats equal to my Charisma modifier. Infusing a treat takes an action. When you infuse a treat, spend one use of Bardic Inspiration and choose a spell of 1st or 2nd level that targets a single creature and that takes 1 action to cast. You expend a spell slot of the same level as the spell, placing that spell in the treat. Infused treats lose their magic after 24 hours.",
					"I or another creature can eat a treat as an action, gaining the benefit of the spell for the maximum listed duration. If a creature is incapable of eating a treat due to a condition, including but not limited to being paralyzed, incapacitated, or unconscious, another creature can use their action to feed it to the indisposed creature. No creature can benefit from the effects of more than one treat at the same time.",
					"A creature eating a treat also gains the benefit of my Bardic Inspiration, which they must use before the duration of the infused spell elapses or 10 minutes pass, whichever is greater. Neither I nor the creature eating the treat needs to concentrate on this spell. If the spell can affect more than one creature at higher levels, I can infuse more than one treat when I expend the appropriate spell slot, but each treat I infuse costs me one of my uses of Magical Treats and one use of Bardic Inspiration. If the spell I am infusing into a treat has a material component, I must expend that component. If the spell can affect multiple creatures when I expend a higher-level spell slot and it has a material component, I must expend the component only once, regardless of the number of treats I infuse with the spell.",
					"The level of spell I can infuse into treats increases when I reach certain levels in the class. At 5th level, I can also infuse 3rd-level spells into treats. At 10th level, I can also infuse 4th- and 5th-level spells into treats. At 15th-level, I can also infuse 6th-, 7th-, and 8th-level spells into treats.",
				]),
			}],
		},
		"subclassfeature6" : {
			name : "Special Treats",
			source : [["KP", 0]],
			minlevel : 6,
			description : desc([
				"Each time I use Magical Treats to infuse food or drink, I choose one of the following options. A creature eating that treat then gains the benefit of this new infusion, in addition to all previous benefits:",
				" \u2022 Gain temporary hit points equal to 1d8 + my Charisma modifier.",
				" \u2022 Spend 1 Hit Dice to regain hit points. At 14th level, the creature can spend up to half their Hit Dice.",
				" \u2022 Increase speed by 10 feet for 10 minutes or for the duration of the spell infused in the treat, whichever is greater. At 14th level, this increases to 20 feet.",
				" \u2022 End one disease affecting the creature.",
				" \u2022 End one of the following conditions affecting the creature: blinded, deafened, poisoned. At 14th level, this also includes charmed and frightened.",
			]),
			toNotesPage: [{
				name : "Special Treats",
				source : [["KP", 0]],
				note: desc([
					"Each time I use Magical Treats to infuse food or drink, I choose one of the following options. A creature eating that treat then gains the benefit of this new infusion, in addition to all previous benefits:",
					" \u2022 Gain temporary hit points equal to 1d8 + my Charisma modifier.",
					" \u2022 Spend 1 Hit Dice to regain hit points. At 14th level, the creature can spend up to half their Hit Dice.",
					" \u2022 Increase speed by 10 feet for 10 minutes or for the duration of the spell infused in the treat, whichever is greater. At 14th level, this increases to 20 feet.",
					" \u2022 End one disease affecting the creature.",
					" \u2022 End one of the following conditions affecting the creature: blinded, deafened, poisoned. At 14th level, this also includes charmed and frightened.",
				]),
			}],
		},
		"subclassfeature14" : {
			name : "Culinary Champion",
			source : [["KP", 0]],
			minlevel : 14,
			description : desc([
				"Whenever I infuse a treat using Magical Treats, I can infuse a second treat with the same action. I only expend one spell slot, one use of Bardic Inspiration, and one use of Magical Treats, even though I am infusing two treats. If I am infusing treats with a spell that can affect multiple targets when cast at higher levels and I expend the appropriate spell slot, the first two treats I infuse cost only one use of Bardic Inspiration and one use of Magical Treats.",
				"In addition, when I infuse a treat, I can choose two options from the list of benefits under Special Treats, along with the following new options, applying both to the treat:",
				" \u2022 Reduce the creature’s exhaustion by one level.",
				" \u2022 End one curse, including that of a cursed magic item.",
				" \u2022 End any reduction to one of the creature’s ability scores.",
				" \u2022 End one effect that reduces the creature’s hit point maximum.",
			]),
			toNotesPage: [{
				name : "Special Treats",
				source : [["KP", 0]],
				note: desc([
					"Whenever I infuse a treat using Magical Treats, I can infuse a second treat with the same action. I only expend one spell slot, one use of Bardic Inspiration, and one use of Magical Treats, even though I am infusing two treats. If I am infusing treats with a spell that can affect multiple targets when cast at higher levels and I expend the appropriate spell slot, the first two treats I infuse cost only one use of Bardic Inspiration and one use of Magical Treats.",
					"In addition, when I infuse a treat, I can choose two options from the list of benefits under Special Treats, along with the following new options, applying both to the treat:",
					" \u2022 Reduce the creature’s exhaustion by one level.",
					" \u2022 End one curse, including that of a cursed magic item.",
					" \u2022 End any reduction to one of the creature’s ability scores.",
					" \u2022 End one effect that reduces the creature’s hit point maximum.",
				]),
			}],
		},
	},
});