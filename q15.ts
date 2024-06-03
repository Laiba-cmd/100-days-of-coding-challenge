let guestArray: string[] =["zara","ara","arib"];

let cannotAttend: string = "arib";
console.log(`${cannotAttend}can not come it,for dinner`)

let newGuest: string = "mahi"
guestArray[guestArray.indexOf(cannotAttend)]=newGuest;
console.log(guestArray);

guestArray.map((items)=> console.log(`hello, ${items} you are invited to dinner.`))