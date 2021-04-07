class Sphinx {
  constructor(){
    //key-value pairs
    this.riddles = [];
  }
  //methods
  collectRiddle(riddle){
    if (this.riddles.length < 3) {
      this.riddles.push(riddle);
    } else if (this.riddles.length >= 3) {
      this.riddles.push(riddle);
      this.riddles.shift();
    }
  }
  attemptAnswer(answerAttempt){
    if(this.riddles[this.riddles.length - 1].answer === answerAttempt){
      this.riddles.pop();
      return 'That wasn\'t that hard, I bet you don\'t get the next one';
    }
  }
}
module.exports = Sphinx
