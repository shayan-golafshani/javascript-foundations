class Fairy{
  constructor(name){
    this.name = name;
    this.dust = 10;
    this.disposition = 'Good natured'
    this.clothes = {
      dresses: ['Iris']
    }
  }

  receiveBelief(){
    this.dust++;
  }

  believe(){
    this.dust += 10;
  }

  becomeProvoked(){
    this.disposition = "Vengeful"
  }

  makeDresses(flowers){
    var flower;
    for (var i = 0; i < flowers.length; i++){
      flower = flowers[i]
      this.clothes.dresses.push(flower)
    }
  }

  replaceInfant(infant){
    if(this.disposition === 'Vengeful'){
      console.log('nothin')
      infant.disposition = 'Malicious'
      return infant;
    } else if (this.disposition !== 'Vengeful') {

    }
  }

}
module.exports = Fairy
