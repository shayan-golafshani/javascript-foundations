class Ogre {
  constructor(OgreObj){
    this.name = OgreObj.name;
    this.home = OgreObj.abode ||'Swamp';
    this.swings = 0;
  }

  encounter(human){
    human.encounterCounter++;
    //console.log(human.encounterCounter);
    if(human.encounterCounter % 3 === 0){
      //console.log("Swing battah battah")
      this.swings++
    }
    if(this.swings === 2){
      human.knockedOut = true;
      //console.log("Inside if");
    }
  }

  swingAt(human){
      this.swings++;
      //console.log(this.swings);
      // if (this.swings === 2) {
      //   human.knockedOut = true;
      //   console.log("Inside if");
      // }
  }

  apologize(human){
    human.knockedOut = false;
  }
}
module.exports = Ogre
