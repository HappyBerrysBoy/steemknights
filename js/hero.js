const {
  constant,
  equipPosition,
  petGrade,
  itemGrade,
  unitType,
  heroType,
  enemyType
} = require("./const.js");
const { Unit } = require("./commonClass.js");

class Hero extends Unit {
  constructor(
    nickname,
    name,
    type,
    attack = 0,
    health = 0,
    defense = 0,
    lucky = 0,
    level = 1,
    exp = 0,
    equipments = [],
    skill = null,
    pet = null,
    buff = null,
    nerf = null
  ) {
    super(name, type, level, attack, health, defense, lucky);
    this._nickname = nickname;
    this._exp = exp;
    this._skill = skill;
    this._equipments = equipments;
    this._pet = pet;
    this._buff = buff;
    this._nerf = nerf;
  }
  setEquipment() {}
  toString() {
    return `Nickname:${this._nickname}, Name:${
      this._name
    }, Type:${this.getType()}, Level:${this._level}, Exp:${this._exp}, Attack:${
      this._attack
    }, Health:${this._health}, Defense:${this._defense}, Lucky:${
      this._lucky
    }, Skill:${this._skill}, Pet:${this._pet}, Buff:${this._buff}, Nerf:${
      this._nerf
    }`;
  }
}

let hero = new Hero("anpigon", "knight", "hero", 1, 2, 3, 4);
console.log(hero.getName());
console.log(hero.getType());
console.log(hero.toString());
hero.levelUp(5);
console.log("Level Up(5)!!!");
console.log(hero.toString());

module.exports = { Hero };
