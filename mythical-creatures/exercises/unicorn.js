class Unicorn {
  constructor(name, color) {
    this.name = name;
    this.color = color || 'white';
  }
  isWhite(){
    // if(this.color !== 'white'){
    //   return false
    // } else {
    //   return true;
    // }

  return this.color !== 'white' ? false : true
  }
  says(string){
    return `**;* ${string} *;**`
  }
}

module.exports = Unicorn;
