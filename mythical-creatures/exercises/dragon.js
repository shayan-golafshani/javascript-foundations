class Dragon {
  constructor(name,rider){
    //key value pairs
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.meals = 0;
  }
  //methods
  greet(){
    return `Hi, ${this.rider}!`
  }
  eat(){
    this.meals++
    if(this.meals >= 3){
      this.hungry = false;
    }
  }
}

module.exports = Dragon
