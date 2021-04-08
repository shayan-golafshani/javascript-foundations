class Human {
  constructor(name) {
    //key-value pairs:
    this.name = name;
    this.encounterCounter = 0;
    this.knockedOut = false;
  }
  //methods:
  noticesOgre() {
    console.log("Before Conditional" + this.encounterCounter)
    if (this.encounterCounter === 3 || this.encounterCounter === 6) {
      console.log("IF Conditional" + this.encounterCounter)
      return true;
    } else {
      console.log("Else Conditional" + this.encounterCounter)
      return false;
    }
  }
}
module.exports = Human
