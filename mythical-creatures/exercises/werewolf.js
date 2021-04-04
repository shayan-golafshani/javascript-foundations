class Werewolf {
  constructor(name) {
    //properties
    this.name = name;
    this.form = 'human';
    this.hungry = false;

  }
  //methods
  completeTransformation() {
    if (this.form === 'wolf') {
      this.form = 'human';
      this.hungry = false;
      return 'Where are I?'
    } else {
      this.form = 'wolf';
      this.hungry = true;
      return 'Aaa-Woooo!'
    }
  }

  eatVictim(victim){
    if(this.hungry){
      victim.alive = false;
      this.form = 'human';
      return `Yum, ${victim.name} was delicious.`
    } else if (this.form === 'human'){
      return `No way am I eating ${victim.name}, I'd like a burger!`
    }
  }

}

module.exports = Werewolf
