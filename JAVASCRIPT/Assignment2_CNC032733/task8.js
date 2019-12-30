var num = Number(prompt("Enter the number = "));

if (num > 0) {
  document.write(num + " is Positive");
} else if (num === 0) {
  document.write(num + " is Zero");
}
else if(num < 0){
  document.write(num + " is Negative");
}
else {
  document.write("Wrong input");
}