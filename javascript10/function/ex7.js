function customJoin(arr, char) {
  if (char == undefined) {
    char = ",";
  }
  var bag = "";
  for (var i = 0; i < arr.length; i++) {
    if (i != arr.length - 1) {
      bag = bag + arr[i] + char;
    } else {
      bag = bag + arr[i];
    }
  }
  return bag;
}

var arr = ["M", "A", "N"];
console.log(customJoin(arr));
