const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYeah: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  },

  getSummery() {
    console.log(
      `${this.firstName} is ${this.age} years old ${this.job} , and he ${
        this.hasDriversLicense
          ? "has a driver license"
          : "doesn't have a driver license"
      }`
    );
  },
};
jonas.calcAge();
jonas.getSummery();
