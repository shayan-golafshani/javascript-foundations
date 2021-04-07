class Human {
  constructor(name) {
    //key-value pairs:
    this.name = name;
    this.encounterCounter = 0;
  }
  //methods:
  noticesOgre() {
    if (this.encounterCounter / 3 === 1) {
      return true;
    } else if (this.encounterCounter / 6 === 1) {
      return true;
    } else {
      return false;
    }
  }
}
module.exports = Human
