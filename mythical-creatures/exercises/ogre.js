class Ogre {
  constructor(OgreObj){
    this.name = OgreObj.name;
    this.home = OgreObj.abode ||'Swamp';
    this.swings = 0;
  }

  encounter(human){
    human.encounterCounter++;
    if(human.encounterCounter % 3 === 0){
      this.swings++
    }
  }

  swingAt(human){
      this.swings++;
      console.log(this.swings);
      if (this.swings === 2) {
        human.knockedOut = true;
      }
  }
}
module.exports = Ogre
