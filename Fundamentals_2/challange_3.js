let mark = {
  fullName: "Mark Miller",
  height: 1.69,
  mass: 78,
  calcBMI: function () {
    this.bmi = Math.round(this.mass / (this.height * this.height));
    return this.bmi;
  },
  getSummery: function () {
    return `${this.fullName}'s BMI (${this.bmi})`;
  },
};
mark.calcBMI();

let john = {
  fullName: "John Smith",
  height: 1.95,
  mass: 92,
  calcBMI: function () {
    this.bmi = Math.round(this.mass / (this.height * this.height));
    return this.bmi;
  },
  getSummery() {
    return `${this.fullName}'s BMI (${this.bmi})`;
  },
};
john.calcBMI();

let markHigherBMI = mark.bmi > john.bmi;

markHigherBMI;

if (markHigherBMI)
  console.log(mark.getSummery() + ` is higher than ${john.getSummery()}`);
