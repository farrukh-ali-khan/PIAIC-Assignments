var time = Number(prompt("Enter the time"));

if (time >= 0000 && time < 1200) {
  document.write("Good morning!");
} else if(time >= 1200 && time < 1700) {
  document.write("Good afternoon!");
}
else if(time >= 1700 && time < 2100) {
  document.write("Good evening!");
}
else if(time >= 2100 && time <= 2359) {
  document.write("Good night!");
}