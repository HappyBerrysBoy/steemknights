const {
  constant,
  equipPosition,
  petGrade,
  itemGrade,
  unitType,
  heroType,
  enemyType
} = require("./const.js");
const db = require("../data.json");

class Account {
  constructor(
    account,
    heros = {},
    lastBirthTime = new Date().toLocaleString()
  ) {
    this._account = account;
    this._lastBirthTime = lastBirthTime;
    this._heros = heros;

    this._knight = heros[heroType.properties[heroType.knight].name];
    this._archer = heros[heroType.properties[heroType.archer].name];
    this._mage = heros[heroType.properties[heroType.mage].name];
  }
  getAccount() {
    return this._account;
  }
  getLastBirthTime() {
    return this._lastBirthTime;
  }
  setCurrentStatus() {}
  toString() {
    console.log(heroType["knight"]);
    console.log(heroType.properties[0].name);
    console.log(heroType.properties[heroType.knight].name);
    console.log(this._knight.nickname);
    console.log(this._archer.nickname);
    console.log(this._mage.nickname);
    // console.log(
    //   `Account:${
    //     this._account
    //   }, LastBirthTime:${this.getLastBirthTime()}, KnightLv:${
    //     this._knightLv
    //   }, ArcherLv:${this._archerLv}, MageLv:${this._mageLv}, ItemList:${
    //     this._itemList
    //   }`
    // );
  }
}

const accout = new Account(db.account, db.heros);
accout.toString();
