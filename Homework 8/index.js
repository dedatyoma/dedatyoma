let ladder = {
  ladder: 0,
  up: function () { 
    this.ladder++;
    return this;
  },
  down: function () {
    if (this.ladder > 0) {
      this.ladder--;
    } else {
      console.log("You are already on the ground floor!");
    }
    return this;
  },
  showStep: function () { 
    console.log(this.ladder);
    return this;
  }
};
ladder.up().up().down().showStep();