class Hobbit {
  constructor(hobbitObject){
    //properties
    this.name = hobbitObject.name;
    this.age = 0;
    this.adult = false;
    this.old = false;
    this.hasRing;
  }
  //methods
  celebrateBirthday(){
    this.age++;

    //age if-else if ladder
    if(this.age < 33){
      this.adult = false;
    } else if (this.age >= 33 && this.age < 101) {
      this.adult = true;
    }
    else {
      this.old = true;
    }
  }
  getRing(){
    if(this.name !== 'Frodo'){
      this.hasRing = false;
      return 'You can\'t have it!'
    } else {
      this.hasRing = true;
      return 'Here is the ring!'
    }
  }

}



module.exports = Hobbit
