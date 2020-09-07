function makeCar(givenRate, givenBrakeRate) {
  return {
    speed: 0,
    rate: givenRate,
    brakeRate: givenBrakeRate,

    accelerate() {
      this.speed += this.rate;
    },

    brake() {
      let newSpeed = this.speed - this.brakeRate;
      this.speed = newSpeed < 0 ? 0 : newSpeed;
    }
  }
}

let sedan = makeCar(8, 6);
sedan.accelerate();
sedan.speed;
// = 8
sedan.brake();
sedan.speed;
// = 2
sedan.brake();
sedan.speed;
