var laptop = {
    make: "HP",
    model: "New Elite Series",
    year: 2023,
    describe: function () {
        console.log("This laptop is a ".concat(this.year, " ").concat(this.make, " ").concat(this.model, "."));
    },
};
laptop.describe();
