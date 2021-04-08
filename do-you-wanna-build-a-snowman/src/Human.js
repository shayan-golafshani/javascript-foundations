var Snowman = require('./Snowman');

class Human {
  constructor(name) {
    //properties
    this.name = name;
    this.wantsToBuildASnowman = true;
    this.materials = {
      snowballs: 0,
      coal: 0,
      buttons: 0,
      carrots: 0
    };
  }
  //methods
  gatherMaterials(key, num) {
    this.materials[key] += num;
  }

  buildASnowman() {
    return new Snowman(this.materials);
  }

  placeMagicHat(){
    var snowman = this.buildASnowman()
    snowman.canWearMagicHat();
    return snowman.magicHat ? 'Woah, this snowman is coming to life!':'I guess I didn\'t build it correctly.';
  }

}

module.exports = Human;
