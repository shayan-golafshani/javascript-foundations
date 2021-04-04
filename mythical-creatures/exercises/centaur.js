class Centaur {
  constructor(centaurObj) {
    //properties
    this.name = centaurObj.name;
    this.breed = centaurObj.type;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.count = 0;
  }
  //methods
  shootBow() {
    this.count++
    if (this.count >= 3 || this.layingDown) {
      this.cranky = true;
      return 'NO!'
    }
    return 'Twang!!!'
  }

  run() {
    this.count++
    if (this.count >= 3 || this.layingDown) {
      this.cranky = true;
      return 'NO!'
    }
    return 'Clop clop clop clop!!!'
  }

  sleep() {
    if (this.standing) {
      return 'NO!'
    } else if (this.layingDown) {
      this.cranky = false;
      this.count = 0;
      return 'ZZZZ'
    }
  }

  layDown() {
    this.standing = false;
    this.layingDown = true;
  }

  standUp() {
    this.layingDown = false;
    this.standing = true;
  }

  drinkPotion() {
    if (this.standing) {
      this.cranky = false;
    } else {
      return 'Not while I\'m laying down!'
    }
  }

}

module.exports = Centaur
