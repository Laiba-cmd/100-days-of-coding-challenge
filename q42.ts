let magicians: string[] = ["Harry", "David", "Dai"];

function show_magicians(magicians: string[]) {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}

function make_great(magicians: string[]) {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = magicians[i] + " the Great magician";
  }
}

make_great(magicians); // Modifies the original array
show_magicians(magicians); // Shows modified names