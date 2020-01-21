var age = Number(prompt("Enter your age: "));
document.write("Your age is " + age);
var d = new Date().getFullYear();
document.write("<br />Your birth year is " + (Number(d) - age));
