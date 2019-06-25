/**
 * Source Class
 */

class Knight {
  constructor(
    name,
    type,
    attack = 0,
    health = 0,
    defense = 0,
    lucky = 0,
    level = 1,
    exp = 0,
    pet = null,
  ) {
    this.name = name;
    this.type = type;
    this.attack = attack;
    this.health = health;
    this.defense = defense;
    this.lucky = lucky;
    this.level = level;
    this.exp = exp;
    this.pet = pet;
  }
  getName() {
    return this.name;
  }
}

class Pet {
  constructor(
    name,
    grade,
    attack = 0,
    health = 0,
    defense = 0,
    lucky = 0,
    level = 1,
    exp = 0,
    pet = null,
  ) {
    this.name = name;
    this.type = type;
    this.attack = attack;
    this.health = health;
    this.defense = defense;
    this.lucky = lucky;
    this.level = level;
    this.exp = exp;
    this.pet = pet;
  }
  getName() {
    return this.name;
  }
}

class Arms {
  constructor(name, attack, level, grade) {
    this.name = name;
    this.attack = attack;
    this.level = level;
    this.grade = grade;
  }
}

class Armor {
  constructor(name, attack, level, grade) {
    this.name = name;
    this.attack = attack;
    this.level = level;
    this.grade = grade;
  }
}
