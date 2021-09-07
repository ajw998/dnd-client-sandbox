export const mockAbilityStats = {
  'mock-fighter': {
    meta: {
      class: 'fighter',
      name: 'Salazar Turami',
    },
    ability: {
      strength: 16,
      dexterity: 9,
      constitution: 15,
      intelligence: 11,
      wisdom: 13,
      charisma: 14,
    },
    features: [
      {
        name: 'Second Wind',
        description:
          'You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level. Once you use this feature, you must finish a short or long rest before you can use it again.',
      },
      {
        name: 'Fighting Style (Defense)',
        description:
          'While you are wearing armor, you gain a +1 bonus to AC. this bonus is already included in your AC.',
      },
      {
        name: 'Position of Privilege',
        description:
          'Thanks to your noble birth, people are inclined to think the best of you. You are welcome in high society, and people assume you have the right to be wherever you are. The common folk make every effort to accommodate you and avoid your displeasure, and other people of high birth treat you as a member of the same social sphere. You can secure an audience with a local noble if you need to',
      },
    ],
    skill: {
      acrobatics: { isProficient: false, value: -1, modifier: 'dexterity' },
      animalHandling: { isProficient: false, value: 1, modifier: 'wisdom' },
      arcana: { isProficient: false, value: 0, modifier: 'intelligence' },
      athletics: { isProficient: true, value: 5, modifier: 'strength' },
      deception: { isProficient: false, value: 2, modifier: 'charisma' },
      history: { isProficient: true, value: 2, modifier: 'intelligence' },
      insight: { isProficient: false, value: 1, modifier: 'wisdom' },
      intimidation: { isProficient: false, value: 2, modifier: 'charisma' },
      investigation: {
        isProficient: false,
        value: 0,
        modifier: 'intelligence',
      },
      medicine: { isProficient: false, value: 1, modifier: 'wisdom' },
      nature: { isProficient: false, value: 0, modifier: 'intelligence' },
      perception: { isProficient: true, value: 3, modifier: 'wisdom' },
      performance: { isProficient: false, value: 2, modifier: 'charisma' },
      persuasion: { isProficient: true, value: 4, modifier: 'charisma' },
      religion: { isProficient: false, value: 0, modifier: 'intelligence' },
      sleightOfHand: {
        isProficient: false,
        value: -1,
        modifier: 'dexterity',
      },
      stealth: { isProficient: false, value: -1, modifier: 'dexterity' },
      survival: { isProficient: false, value: 1, modifier: 'wisdom' },
    },
    state: {
      proficiencyBonus: 2,
      level: 2,
      armor: 14,
      initiative: 3,
      speed: 30,
      maxHp: 20,
      hp: 2,
      hitDice: '1d10',
      deathSaves: { successes: 2, failures: 0 },
      xp: 675,
      gold: 11,
      passiveWisdom: 13,
    },
  },
  'mock-dwarf': {
    meta: {
      class: 'dwarf',
      name: 'Vondal Battlehammer',
    },
    ability: {
      strength: 14,
      dexterity: 8,
      constitution: 15,
      intelligence: 10,
      wisdom: 16,
      charisma: 12,
    },
    features: [
      {
        name: 'Spellcasting Ability',
        description:
          'Wisdom is your spellcasting ability for your cleric spells. The power of your spells comes from your devotion to your deity. You use your Wisdom whenever a cleric spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a cleric spell you cast and when making an attack roll with one.',
      },
      {
        name: 'Disciple of Life',
        description:
          'Whenever you use a spell of 1st level or higher to restore HP, the creature regains additional HP equal to 2 + the spell’s level.',
      },
      {
        name: 'Darkvision',
        description: 'You can see in darkness (shades of gray) up to 60 ft.',
      },
      {
        name: 'Dwarven Resilience',
        description:
          'You have advantage on saves against poison and resistance against poison damage.',
      },
      {
        name: 'Dwarven Toughness',
        description:
          'Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.',
      },
    ],
    skill: {
      acrobatics: { isProficient: false, value: -1, modifier: 'dexterity' },
      animalHandling: { isProficient: false, value: 3, modifier: 'wisdom' },
      arcana: { isProficient: false, value: 0, modifier: 'intelligence' },
      athletics: { isProficient: true, value: 4, modifier: 'strength' },
      deception: { isProficient: false, value: 1, modifier: 'charisma' },
      history: { isProficient: false, value: 0, modifier: 'intelligence' },
      insight: { isProficient: false, value: 3, modifier: 'wisdom' },
      intimidation: { isProficient: true, value: 3, modifier: 'charisma' },
      investigation: {
        isProficient: false,
        value: 0,
        modifier: 'intelligence',
      },
      medicine: { isProficient: true, value: 5, modifier: 'wisdom' },
      nature: { isProficient: false, value: 0, modifier: 'intelligence' },
      perception: { isProficient: false, value: 3, modifier: 'wisdom' },
      performance: { isProficient: false, value: 1, modifier: 'charisma' },
      persuasion: { isProficient: false, value: 1, modifier: 'charisma' },
      religion: { isProficient: true, value: 2, modifier: 'intelligence' },
      sleightOfHand: {
        isProficient: false,
        value: -1,
        modifier: 'dexterity',
      },
      stealth: { isProficient: false, value: -1, modifier: 'dexterity' },
      survival: { isProficient: false, value: 3, modifier: 'wisdom' },
    },
    state: {
      proficiencyBonus: 2,
      level: 2,
      armor: 17,
      initiative: -1,
      speed: 30,
      maxHp: 15,
      hp: 9,
      hitDice: '1d8',
      deathSaves: { successes: 0, failures: 0 },
      xp: 425,
      gold: 3,
      passiveWisdom: 13,
    },
  },
  'mock-rogue': {
    meta: {
      class: 'rogue',
      name: 'Reed Greenbottle',
    },
    features: [
      {
        name: "Thieves' Cant",
        description:
          'You know thieves’ cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. You also understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run.  ',
      },
      {
        name: 'Halfling Nimbleness',
        description:
          'You can move through the space of any creature that is of a size larger than yours.',
      },
      {
        name: 'Lucky',
        description:
          'When you roll a natural 1 on an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.',
      },
      {
        name: 'Naturally Stealthy',
        description:
          'You can attempt to hide when you are obscured by a creature that is at least one size larger than you.',
      },
      {
        name: 'Criminal Contact',
        description:
          'You have a contact who acts as your liaison to a network of other criminals. You know how to get messages to and from your contact, even over great distances; you know the local messengers, corrupt caravan masters, and seedy sailors who can carry messages for you. You can move secret information or stolen goods through your contact in exchange for money or other information you seek.',
      },
    ],
    ability: {
      strength: 8,
      dexterity: 16,
      constitution: 12,
      intelligence: 13,
      wisdom: 10,
      charisma: 16,
    },
    skill: {
      acrobatics: { isProficient: true, value: 5, modifier: 'dexterity' },
      animalHandling: { isProficient: false, value: 0, modifier: 'wisdom' },
      arcana: { isProficient: false, value: 1, modifier: 'intelligence' },
      athletics: { isProficient: false, value: -1, modifier: 'strength' },
      deception: { isProficient: true, value: 5, modifier: 'charisma' },
      history: { isProficient: true, value: 1, modifier: 'intelligence' },
      insight: { isProficient: false, value: 0, modifier: 'wisdom' },
      intimidation: { isProficient: false, value: 3, modifier: 'charisma' },
      investigation: {
        isProficient: true,
        value: 3,
        modifier: 'intelligence',
      },
      medicine: { isProficient: false, value: 0, modifier: 'wisdom' },
      nature: { isProficient: false, value: 1, modifier: 'intelligence' },
      perception: { isProficient: false, value: 0, modifier: 'wisdom' },
      performance: { isProficient: true, value: 5, modifier: 'charisma' },
      persuasion: { isProficient: false, value: 3, modifier: 'charisma' },
      religion: { isProficient: false, value: 1, modifier: 'intelligence' },
      sleightOfHand: { isProficient: true, value: 5, modifier: 'dexterity' },
      stealth: { isProficient: true, value: 7, modifier: 'dexterity' },
      survival: { isProficient: false, value: 0, modifier: 'wisdom' },
    },
    state: {
      proficiencyBonus: 2,
      level: 2,
      armor: 17,
      initiative: -1,
      speed: 30,
      maxHp: 18,
      hp: 11,
      hitDice: '1d8',
      deathSaves: { successes: 1, failures: 0 },
      xp: 575,
      gold: 6,
      passiveWisdom: 10,
    },
  },
  'mock-wizard': {
    meta: {
      class: 'wizard',
      name: 'Naivara Ilphelkiir',
    },
    features: [
      {
        name: 'Spellcasting Ability',
        description:
          'Intelligence is your spellcasting ability for your spells. The saving throw DC to resist a spell you cast is 13. Your attack bonus when you make an attack with a spell is +5. See the rulebook for rules on casting your spells.',
      },
      {
        name: 'Arcane Recovery',
        description:
          'You can regain some of your magical energy by studying your spellbook. Once per day during a short rest, you can choose to recover expended spell slots with a combined level equal to or less than half your wizard level (rounded up).',
      },
      {
        name: 'Darkvision',
        description:
          'You see in dim light within a 60-foot radius of you as if it were bright light, and in darkness in that radius as if it were dim light. You can’t discern color in darkness, only shades of gray.',
      },
      {
        name: 'Fey Ancestry',
        description:
          'You have advantage on saving throws against being charmed, and magic can’t put you to sleep.',
      },
      {
        name: 'Trance',
        description:
          'Elves don’t need to sleep. They meditate deeply, remaining semiconscious, for 4 hours a day and gain the same benefit a human does from 8 hours of sleep.',
      },
      {
        name: 'Shelter of the Faithful',
        description:
          "As a servant of Oghma, you command the respect of those who share your faith, and you can perform the rites of Oghma. You and your companions can expect to receive free healing and care at a temple, shrine, or other established presence of Oghma's faith. Those who share your religion will support you (and only you) at a modest lifestyle. You also have ties to the temple of Oghma in Neverwinter, where you have a residence. When you are in Neverwinter, you can call upon the priests there for assistance that won’t endanger them.",
      },
    ],
    ability: {
      strength: 10,
      dexterity: 15,
      constitution: 14,
      intelligence: 16,
      wisdom: 12,
      charisma: 8,
    },
    skill: {
      acrobatics: { isProficient: false, value: 2, modifier: 'dexterity' },
      animalHandling: { isProficient: false, value: 1, modifier: 'wisdom' },
      arcana: { isProficient: true, value: 5, modifier: 'intelligence' },
      athletics: { isProficient: false, value: 0, modifier: 'strength' },
      deception: { isProficient: false, value: -1, modifier: 'charisma' },
      history: { isProficient: false, value: 3, modifier: 'intelligence' },
      insight: { isProficient: true, value: 3, modifier: 'wisdom' },
      intimidation: { isProficient: false, value: -1, modifier: 'charisma' },
      investigation: {
        isProficient: true,
        value: 5,
        modifier: 'intelligence',
      },
      medicine: { isProficient: false, value: 1, modifier: 'wisdom' },
      nature: { isProficient: false, value: 3, modifier: 'intelligence' },
      perception: { isProficient: true, value: 3, modifier: 'wisdom' },
      performance: { isProficient: false, value: -1, modifier: 'charisma' },
      persuasion: { isProficient: false, value: -1, modifier: 'charisma' },
      religion: { isProficient: true, value: 5, modifier: 'intelligence' },
      sleightOfHand: { isProficient: false, value: 2, modifier: 'dexterity' },
      stealth: { isProficient: false, value: 2, modifier: 'dexterity' },
      survival: { isProficient: false, value: 1, modifier: 'wisdom' },
    },
    state: {
      proficiencyBonus: 2,
      level: 1,
      armor: 12,
      initiative: 2,
      speed: 30,
      maxHp: 8,
      hp: 5,
      hitDice: '1d6',
      deathSaves: { successes: 1, failures: 0 },
      xp: 225,
      gold: 10,
      passiveWisdom: 13,
    },
  },
};
