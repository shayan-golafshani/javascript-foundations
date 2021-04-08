class Golfer {
  constructor(golferObj) {
    this.name = golferObj.name;
    this.handicap = golferObj.handicap;
    this.frustration = 0;
    this.confidence = 0;
  }
  //methods
  calculateAvg(score) {
    return `I usually shoot a ${score + this.handicap} on average.`
  }
  playRound(golfCourse) {
    if (golfCourse.difficulty === 'hard') {
      this.frustration = 500;
    } else if (golfCourse.difficulty === 'moderate') {
      this.frustration = 100;
    }
  }

  hitTheRange() {
    this.confidence += 10;
  }

  marvel(golfCourse) {
    return `I love the ${golfCourse.features[0]} and ${golfCourse.features[1]} on this course!`
  }

  whatYaShoot(score) {
    this.frustration = 0;
    var expression;
    switch (score) {
      case -2:
      case -1:
        return 'I AM THE GREATEST GOLFER ALIVE!';
      case 0:
        this.frustration = 10;
        return 'Booyah!';
      case 2:
        this.frustration = 30;
        return 'Doh!';
      case 3:
      case 4:
        this.frustration = 20;
        return 'Doh!';
    }
  }
}

module.exports = Golfer;
