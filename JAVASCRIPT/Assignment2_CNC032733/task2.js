var color = prompt(
  "For which Traffic signal light you need to know?(red, yellow, green)"
);

if (color === "red") {
  alert('Must Stop');
} else if (color === "yellow") {
  alert("Ready To Move");
} else if (color === "green") {
    alert("Move now")
} else {
  alert("Wrong option.");
}
