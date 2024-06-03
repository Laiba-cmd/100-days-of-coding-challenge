let laptop = {
    make: "HP",
    model: "New Elite Series",
    year: 2023,
    describe: function () {
      console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
    },
  };
  laptop.describe();