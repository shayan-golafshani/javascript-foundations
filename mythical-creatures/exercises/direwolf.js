class Direwolf {
  constructor(name, home, otherSize) {
    //properties
    this.name = name;
    this.home = home || 'Beyond the Wall';
    this.size = otherSize || 'Massive';
    this.starksToProtect = []
    this.huntsWhiteWalkers = true;
  }
  //methods
  protect(starkObj) {
    if (this.home === starkObj.location) {
      if (this.starksToProtect.length < 2){
      starkObj.safe = true;
      this.huntsWhiteWalkers = false;
      this.starksToProtect.push(starkObj);
      }
    }
  }

  leave(starkObj){
    var index = this.starksToProtect.indexOf(starkObj)
    this.starksToProtect.splice(index,1);
    starkObj.safe = false;
  }



}
module.exports = Direwolf
