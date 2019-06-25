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

const equipPosition = {
  rightHand:0,
  leftHand:1,
  body:2,
  gloves:3,
  boots:4,
  belt:5,
  amulet:6,
  ring:7,
  properties: {
    0: { name: 'rightHand', value: 0 },
    1: { name: 'leftHand', value: 1 },
    2: { name: 'body', value: 2 },
    3: { name: 'gloves', value: 3 },
    4: { name: 'boots', value: 4 },
    5: { name: 'belt', value: 5 },
    6: { name: 'amulet', value: 6 },
    7: { name: 'ring', value: 7 },
  }
}

const unitType = {
  hero: 0,
  enemy: 1,
  properties: {
    0: { name: 'hero', value: 0 },
    1: { name: 'enemy', value: 1 },
  },
};

const heroType = {
  knight: 0,
  archer: 1,
  mage: 2,
  properties: {
    0: { name: 'knight', value: 0 },
    1: { name: 'archer', value: 1 },
    2: { name: 'mage', value: 2 },
  },
};

const enemyType = {
  goblin: 0,
  troll: 1,
  orge: 2,
  properties: {
    0: { name: 'goblin', value: 0 },
    1: { name: 'troll', value: 1 },
    2: { name: 'orge', value: 2 },
  },
};


const constant = {
  hero:{
    knight:{
      lvUpAttackStat:7,
      lvUpHealthStat:50,
      lvUpDefenseStat:15,
      lvUpLuckyStat:5,
    },
    archer:{
      lvUpAttackStat:13,
      lvUpHealthStat:40,
      lvUpDefenseStat:9,
      lvUpLuckyStat:8,
    },
    mage:{
      lvUpAttackStat:15,
      lvUpHealthStat:30,
      lvUpDefenseStat:7,
      lvUpLuckyStat:10,
    }
  },
  enemy:{
    goblin:{
      lvUpAttackStat:5,
      lvUpHealthStat:30,
      lvUpDefenseStat:5,
      lvUpLuckyStat:1,
    },
    troll:{
      lvUpAttackStat:12,
      lvUpHealthStat:20,
      lvUpDefenseStat:3,
      lvUpLuckyStat:8,
    },
    orge:{
      lvUpAttackStat:15,
      lvUpHealthStat:40,
      lvUpDefenseStat:20,
      lvUpLuckyStat:4,
    }
  },
  pet:{

  },
  item:{
    knife:{
      equipPosition:0
    }
  }
};

Object.freeze(petGrade);
Object.freeze(itemGrade);
Object.freeze(unitType);
Object.freeze(heroType);
Object.freeze(enemyType);
Object.freeze(equipPosition);


module.exports = {
  constant, 
  petGrade, 
  itemGrade, 
  unitType, 
  heroType, 
  enemyType,
  equipPosition,
};