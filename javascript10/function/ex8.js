function mySplit(str) {
  var output = [];
  var bag = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] != " ") {
      bag = bag + str[i];
    } else {
      if (bag != "") {
        output.push(bag);
      }
      bag = "";``
    }
  }
  output.push(bag);
  return output;
}

var str = "The quick brown fox";
console.log(mySplit(str));
