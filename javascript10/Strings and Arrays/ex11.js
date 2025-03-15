let names = ["Nobita", "Naruto", "Noddy", "Shinchan", "Oswnld"];
let count = 0;
for (let i = 0; i < names.length; i++) {
  let name = names[i];
  for (let j = 0; j < name.length; j++) {
    if (name[j] == "N" || name[j] == "n") {
      count++;
    }
  }
}
console.log(count);
