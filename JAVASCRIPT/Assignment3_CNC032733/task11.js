var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
var input = prompt(
  "Welcome to ABC bakery. What do you want to order sir/ma'am?"
);
var found = false;
for (var i = 0; i < arr.length; i++) {
  if (arr[i] == input) {
    document.write(
      input + " is <b>available</b> at index " + i + " in our bakery"
    );
    found = true;
    break;
  }
}
if (!found) {
  document.write(
    "We are sorry. " + input + " is <b>not available</b> in our bakery!"
  );
}
