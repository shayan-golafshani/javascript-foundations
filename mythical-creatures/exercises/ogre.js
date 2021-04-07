class Ogre {
  constructor(OgreObj){
    this.name = OgreObj.name;
    this.home = OgreObj.abode ||'Swamp';
    this.swings = 0;
  }

  encounter(human){
    human.encounterCounter += 1;
  }

  swingAt(human){
    this.swings++;
      console.log(human.noticesOgre());
      if (human.encounterCounter / 3 === 1) {
        this.swings++;
      } else if (human.encounterCounter / 6 === 1) {
        this.swings++;
      } else {
        return false;
      }
  }
}
module.exports = Ogre
