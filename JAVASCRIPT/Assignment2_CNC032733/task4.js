var num1 = Number(prompt("Enter First Subject number = "));
var num2 = Number(prompt("Enter Second Subject number = "));
var num3 = Number(prompt("Enter Third Subject number = "));

var total = num1 + num2 + num3;
var percentage = (total / 300) * 100;

if (percentage >= 80) {
  document.write(
    "Total Marks: 300 <br />Marks Obtained: " +
      total +
      "<br />Percentage: " +
      percentage +
      "%<br />Grade: A-one<br />Remarks: Excellent"
  );
} else if (percentage >= 70) {
  document.write(
    "Total Marks: 300 <br />Marks Obtained: " +
      total +
      "<br />Percentage: " +
      percentage +
      "%<br />Grade: A<br />Remarks: Good"
  );
}
if (percentage >= 60) {
  document.write(
    "Total Marks: 300 <br />Marks Obtained: " +
      total +
      "<br />Percentage: " +
      percentage +
      "%<br />Grade: B<br />Remarks: You need to improve"
  );
}
if (percentage < 60) {
  document.write(
    "Total Marks: 300 <br />Marks Obtained: " +
      total +
      "<br />Percentage: " +
      percentage +
      "%<br />Grade: Fail<br />Remarks: Sorry"
  );
}
