let ladder = {
  ladder: 0,
  up: function () { 
    this.ladder++;
    return this;
  },
  down: function () { 
    this.ladder--;
    return this;
  },
  showStep: function () { 
    console.log(this.ladder);
    return this;
  }
};
ladder.up().up().down().showStep();