// Enums

const petGrade = {
  common: 0,
  rare: 1,
  epic: 2,
  legendary: 3,
  properties: {
    0: { name: 'common', value: 0 },
    1: { name: 'rare', value: 1 },
    2: { name: 'epic', value: 2 },
    3: { name: 'legendary', value: 3 },
  },
};

const itemGrade = {
  damaged: 0,
  normal: 1,
  elite: 2,
  rare: 3,
  epic: 4,
  unique: 5,
  hero: 6,
  legendary: 7,
  dragon: 8,
  properties: {
    0: { name: 'damaged', value: 0 },
    1: { name: 'normal', value: 1 },
    2: { name: 'elite', value: 2 },
    3: { name: 'rare', value: 3 },
    4: { name: 'epic', value: 4 },
    5: { name: 'unique', value: 5 },
    6: { name: 'hero', value: 6 },
    7: { name: 'legendary', value: 7 },
    8: { name: 'dragon', value: 8 },
  },
};

const knightType = {
  knight: 0,
  archer: 1,
  mage: 2,
  properties: {
    0: { name: 'knight', value: 0 },
    1: { name: 'archer', value: 1 },
    2: { name: 'mage', value: 2 },
  },
};

Object.freeze(petGrade);
Object.freeze(itemGrade);
Object.freeze(knightType);
