class LunchBox {
  constructor(details) {
    this.owner = details.owner;
    this.material = details.madeOf;
    this.shape = details.shape;
    this.color = details.color
    this.snacks = [];
  }

  acquireSnack(snackType) {
    this.snacks.push(snackType);
    snackType.isInLunchBox = true;
  }

  findHealthySnacks() {
    var healthyOptions = [];
    for (var i = 0; i < this.snacks.length; i++) {
      var currentSnack = this.snacks[i].name;
      var lowSnack = currentSnack.toLowerCase();
      if (lowSnack.includes("fruit")) {
        healthyOptions.push(this.snacks[i].name);
      }
    }
    return healthyOptions;
  }
}

module.exports = LunchBox;
