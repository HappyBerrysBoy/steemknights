const {constant, petGrade, itemGrade, unitType, heroType, enemyType} = require('./const.js');
const {Unit} = require('./commonClass.js');

// 일단은 Hero와 능력치는 동일함. 나중에 달라지는 부분이 있을까봐 따로 클래스 생성
class Enemy extends Unit{
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
    skill = null,
    pet = null,
    buff = null,
    nerf = null,
  ) {
    super(name, type, level, attack, health, defense, lucky);
    this._nickname = nickname;
    this._exp = exp;
    this._skill = skill;
    this._pet = pet;
    this._buff = buff;
    this._nerf = nerf;
  }
  toString(){
    return `Nickname:${this._nickname}, Name:${this._name}, Type:${this.getType()}, Level:${this._level}, Exp:${this._exp}, Attack:${this._attack}, Health:${this._health}, Defense:${this._defense}, Lucky:${this._lucky}, Skill:${this._skill}, Pet:${this._pet}, Buff:${this._buff}, Nerf:${this._nerf}`;
  }
}

let enemy = new Enemy('happyberrysboy', 'goblin', 'enemy', 1, 2, 3, 4);
console.log(enemy.getName());
console.log(enemy.getType());
console.log(enemy.toString());
enemy.levelUp(5);
console.log('Level Up(5)!!!');
console.log(enemy.toString());

module.exports = {Enemy};