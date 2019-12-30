var num1 = Number(prompt("Enter First Number"));
var num2 = Number(prompt("Enter Second Number"));
var op = prompt("Enter Operator (+,-,*,/,%");
var sum = 0;

if (op === "+") {
  sum = eval(num1 + op + num2);
  document.write(num1 + " + " + num2 + " = " + sum);
} else if (op == "-") {
  sum = eval(num1 + op + num2);
  document.write(num1 + " - " + num2 + " = " + sum);
} else if (op == "*") {
  sum = eval(num1 + op + num2);
  document.write(num1 + " * " + num2 + " = " + sum);
} else if (op == "/") {
  sum = eval(num1 + op + num2);
  document.write(num1 + " / " + num2 + " = " + sum);
} else if (op == "%") {
  sum = eval(num1 + op + num2);
  document.write(num1 + " % " + num2 + " = " + sum);
} else {
  document.write("Wrong Input");
}
