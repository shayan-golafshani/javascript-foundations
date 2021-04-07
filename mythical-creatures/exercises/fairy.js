class Fairy{
  constructor(name){
    this.name = name;
    this.dust = 10;
    this.disposition = 'Good natured';
    this.clothes = {
      dresses: ['Iris']
    }
    this.humanWards = [];
    this.stolenInfantCount = 0;
  }

  receiveBelief(){
    this.dust++;
  }

  believe(){
    this.dust += 10;
  }

  becomeProvoked(){
    this.disposition = "Vengeful";
  }

  makeDresses(flowers){
    var flower;
    for (var i = 0; i < flowers.length; i++){
      flower = flowers[i]
      this.clothes.dresses.push(flower)
    }
  }

  replaceInfant(infant){


    if (this.disposition !== 'Vengeful') {
        return infant;
    } else {

      this.stolenInfantCount++;
      
      if(this.stolenInfantCount > 2){
        this.disposition = 'Good natured';
        this.stolenInfantCount = 0;
      }

      infant.disposition = 'Malicious';
      this.humanWards.push(infant);

      return infant;
    }
  }

}
module.exports = Fairy
