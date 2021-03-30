class Vampire {
  constructor(name, pet) {
    //key values
    this.name = name;
    this.pet = pet || 'bat';
    this.thirsty = true;
    this.ouncesDrank = 0;
  }
  //methods
  drink() {
    this.thirsty = false;

    //   if(this.ouncesDrank < 50){
    //     this.ouncesDrank += 10;
    // } else {
    //     return 'I\'m too full to drink anymore!'
    //   }

    return this.ouncesDrank < 50 ?
      this.ouncesDrank += 10 : 'I\'m too full to drink anymore!'

  }
}

module.exports = Vampire
