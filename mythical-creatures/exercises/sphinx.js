class Sphinx {
  constructor() {
    //key-value pairs
    this.riddles = [];
    this.heroesEaten = 0;
  }
  //methods
  collectRiddle(riddle) {
    if (this.riddles.length < 3) {
      this.riddles.push(riddle);
    } else if (this.riddles.length >= 3) {
      this.riddles.push(riddle);
      this.riddles.shift();
    }
  }
  attemptAnswer(answerAttempt) {
    // if(this.riddles[this.riddles.length - 1].answer === answerAttempt){
    //   this.riddles.pop();
    var containsAnswer = false;
    var response;

    for (var i = 0; i < this.riddles.length; i++) {
      if (this.riddles[i].answer === answerAttempt) {
        this.riddles.splice(i, 1);
        containsAnswer = true;
        response = 'That wasn\'t that hard, I bet you don\'t get the next one';
      }
      if (this.riddles.length === 1) {

      }
    }
    if(!containsAnswer){
      this.heroesEaten++;
    } else {
      if (this.riddles.length === 0) {
        response = `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${answerAttempt}"???`
      }

    }
    return response;
  }
}
module.exports = Sphinx
