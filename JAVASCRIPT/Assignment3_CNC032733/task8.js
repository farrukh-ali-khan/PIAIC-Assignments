document.write("Counting: ");

for (i = 1; i <= 15; i++) {
  document.write(i + ", ");
}
document.write("<br>Reverse counting: ");
for (i = 10; i > 0; i--) {
  document.write(i + ", ");
}
document.write("<br>Even: ");
for (i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    document.write(i + ", ");
  }
}
document.write("<br>Odd: ");

for (i = 1; i < 20; i++) {
  if (i % 2 !== 0) {
    document.write(i + ", ");
  }
}

document.write("<br>Series: ");

for (i = 1; i < 22; i++) {
  if (i % 2 == 0) {
    document.write(i + "k, ");
  }
}
