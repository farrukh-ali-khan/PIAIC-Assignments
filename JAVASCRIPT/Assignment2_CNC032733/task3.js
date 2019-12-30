// A. This is true
var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}

// B. This is false
var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}

// C. Condition c === 13 and c === 14 is true others are false
var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
}
if (c === 13) {
  alert("condition 2 is true");
}
if (++c < 14) {
  alert("condition 3 is true");
}
if (c === 14) {
  alert("condition 4 is true");
}

// D. This Condition is true
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
}

// E. Condition true is working false is not
if (true) {
  alert("True");
}
if (false) {
  alert("False");
}
// F. Car is greater than cat in reality but this equation is true.
if ("car" < "cat") {
  alert("car is smaller than cat");
}
