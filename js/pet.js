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
    pet = null
  ) {
    this.name = name;
    this.grade = grade;
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
