const {
  constant,
  equipPosition,
  petGrade,
  itemGrade,
  unitType,
  heroType,
  enemyType
} = require("./const.js");

class Unit {
  constructor(
    name,
    type, // 'H':Hero, 'E':enemy
    level = 1,
    attack = 0,
    health = 0,
    defense = 0,
    lucky = 0
  ) {
    this._name = name;
    this._type = unitType[type];
    this._level = level;
    this._attack = attack;
    this._health = health;
    this._defense = defense;
    this._lucky = lucky;
  }
  getName() {
    return this._name;
  }
  getType() {
    return unitType.properties[this._type].name;
  }
  toString() {
    return `Name:${this._name}, Type:${this.getType()}, Level:${
      this._level
    }, Attack:${this._attack}, Health:${this._health}, Defense:${
      this._defense
    }, Lucky:${this._lucky}`;
  }
  levelUp(val) {
    if (val < 1) return;

    const lvUpVal = constant[this.getType()][this._name];

    this._level = val;
    this._attack += lvUpVal.lvUpAttackStat * val;
    this._health += lvUpVal.lvUpHealthStat * val;
    this._defense += lvUpVal.lvUpDefenseStat * val;
    this._lucky += lvUpVal.lvUpLuckyStat * val;
  }
}

module.exports = { Unit };
