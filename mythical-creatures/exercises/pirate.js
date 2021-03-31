class Pirate {
  constructor(name, job) {
    //key value pairs
    this.name = name;
    this.job = job || 'scallywag';
    this.cursed = false;
    this.booty = 0;
    this.shipsRobbed = 0;


  }
  //methods
  robShip() {
    if (this.shipsRobbed < 5) {
      this.booty += 100;
      this.shipsRobbed++;
      return 'YAARRR!'
    } else {
      this.cursed = true;
      return 'ARG! I\'ve been cursed!'
    }
  }

  liftCurse(){
    if(!this.cursed){
      return 'You don\'t need to lift a curse!'
    }

    if(this.booty >= 300){
      this.booty -= 300;
      this.cursed = false;
      return 'Your curse has been lifted!'
    }
  }
}

module.exports = Pirate
