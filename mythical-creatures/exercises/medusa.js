var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    //key-values
    this.name = name;
    this.statues = [];
  }
  //methods
  gazeAtVictim(victim) {
    var victimStatue = new Statue(victim.name);

    if (this.statues.length > 2){
      this.statues.push(victimStatue);
      var freedStatue = this.statues.shift()
      var freedVictim = new Person(freedStatue.name);
      freedVictim.mood = 'relieved';
      return freedVictim;
    }
      this.statues.push(victimStatue);
  }
}

module.exports = Medusa, Person, Statue
