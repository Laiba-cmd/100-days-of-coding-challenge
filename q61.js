var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["bike"] = 0] = "bike";
    VehicleType[VehicleType["Car"] = 1] = "Car";
    VehicleType[VehicleType["bus"] = 2] = "bus";
    VehicleType[VehicleType["rickshaw"] = 3] = "rickshaw";
})(VehicleType || (VehicleType = {}));
// Showing one type of vehicle from the list
console.log(VehicleType.Car); // It shows 0 because enums start counting from 0
// Here, we're just checking what number the Car category got in our list.
