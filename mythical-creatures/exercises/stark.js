const Direwolf = require('../exercises/direwolf');
class Stark{
  constructor(starkObj){
    starkObj = starkObj || {};
     this.name = starkObj.name;
     this.location = starkObj.area || 'Winterfell';
     this.safe = false;
  }
  sayHouseWords(){
    if(this.safe){
      return 'The North Remembers'
    }
    return 'Winter is Coming'
  }

  callDirewolf(name, location){
    this.safe = true;
    var direwolf = new Direwolf(name, location);
    direwolf.home = this.location;
    //console.log(direwolf)
    direwolf.protect(this);
    return direwolf;
  }

}
module.exports = Stark
