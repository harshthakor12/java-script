function add(a, b) {
  var sum = a + b;
  return sum;
}

function square(x) {
  var y = x * x;
  return y;
}

function cube(x) {
  var z = x * x * x;
  return z;
}

var output1 = add(2, 3);
console.log("output1 is ", output1);

var output2 = cube(output1);
console.log("output2 is ", output2);

var answer = square(output2);
console.log("answer is ", answer);
