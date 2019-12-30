var names = [];
var score = [];
names.push(prompt("Enter first student's name"));
names.push(prompt("Enter second student's name"));
names.push(prompt("Enter third student's name"));

score.push(prompt("Enter first student's score"));
score.push(prompt("Enter second student's score"));
score.push(prompt("Enter third student's score"));

var totalMarks = 500;
for (i = 0; i < names.length; i++) {
  document.write(
    "Score of " +
      names[i] +
      " is " +
      score[i] +
      ". Percentage:" +
      (score[i] / totalMarks) * 100 +
      "%<br>"
  );
}
