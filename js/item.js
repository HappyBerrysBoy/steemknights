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

// id : primary key(for sell)
class Item {
  constructor(id, name, level, grade, attack, health, defense, lucky) {
    this._id = id;
    this._name = name;
    this._level = level;
    this._grade = grade;
    this._attack = attack;
    this._health = health;
    this._defense = defense;
    this._lucky = lucky;
    this._equipPosition = constant.item[name].equipPosition;
  }
  getGradeVal() {
    return this._grade;
  }
  getGradeName() {
    return itemGrade.properties[this._grade].name;
  }
  getEquipPositionVal() {
    return this._equipPosition;
  }
  getEquipPosition() {
    return equipPosition.properties[this._equipPosition].name;
  }
  toString() {
    console.log(
      `Id:${this._id}, Name:${this._name}, Level:${this._level}, Grade:${
        this._grade
      }, Attack:${this._attack}, Health:${this._health}, Defense:${
        this._defense
      }, Lucky:${this._lucky}, EquipPosition:${this.getEquipPosition()}`
    );
  }
}

let item = new Item("1", "knife", 1, 5, 10, 0, 5, 5);
console.log(item.getGradeVal());
console.log(item.getGradeName());
item.toString();
