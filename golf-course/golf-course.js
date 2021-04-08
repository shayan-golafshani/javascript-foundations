class GolfCourse {
  constructor(name, difficulty, numOpens, features) {
    this.name = name;
    this.difficulty = difficulty;
    this.openings = numOpens;
    this.features = features;
    this.currentlyPlaying = [];
  }
  //methods
  checkInGroup(group) {

    var golfersOnCourse = this.currentlyPlaying.length;
    var slotsOpen = this.openings - golfersOnCourse;
    var nextGroupSize = group.length;

    if (nextGroupSize <= slotsOpen) {
      for (var i = 0; i < group.length; i++) {
        this.currentlyPlaying.unshift(group[i].name);
        this.openings--;
      }
      return 'You\'re checked in. Have fun!'
    } else {
      return 'Sorry, we are currently booked! Please come back later.'
    }
  }

}

module.exports = GolfCourse;
