var op = prompt("Enter operator (+,-,/,*,%) = ");
var a = Number(prompt("Enter number 1 = "));
var b = Number(prompt("Enter number 2 = "));

var sum = 0;

switch (op) {
  case "+":
    sum = eval(a + op + b);
    document.write("Addition of " + a + " and " + b + " = " + sum);
    break;
  case "-":
    sum = eval(a + op + b);
    document.write("Subtraction of " + a + " and " + b + " = " + sum);
    break;
  case "/":
    sum = eval(a + op + b);
    document.write("Division of " + a + " and " + b + " = " + sum);
    break;
  case "*":
    sum = eval(a + op + b);
    document.write("Multiplication of " + a + " and " + b + " = " + sum);
    break;
  case "%":
    sum = eval(a + op + b);
    document.write("Modulus of " + a + " and " + b + " = " + sum);
    break;
  default:
    break;
}
