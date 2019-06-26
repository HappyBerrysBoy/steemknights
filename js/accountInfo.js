const {
  constant,
  petGrade,
  itemGrade,
  unitType,
  heroType,
  enemyType
} = require("./const.js");

class Account {
  constructor(
    account,
    lastBirthTime = new Date().toLocaleString(),
    knightLv = 1,
    archerLv = 1,
    mageLv = 1,
    itemList = []
  ) {
    this._account = account;
    this._lastBirthTime = lastBirthTime;
    this._itemList = itemList;
  }
  getAccount() {
    return this._account;
  }
  getLastBirthTime() {
    return this._lastBirthTime;
  }
  setCurrentStatus() {}
  toString() {
    return `Name:${this._name}, Type:${this.getType()}, Level:${
      this._level
    }, Attack:${this._attack}, Health:${this._health}, Defense:${
      this._defense
    }, Lucky:${this._lucky}`;
  }
}

module.exports = { Unit };
