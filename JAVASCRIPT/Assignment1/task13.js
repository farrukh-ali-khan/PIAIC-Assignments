var num = 10;
document.write("Result<br />The value of a = " + num);
var sum = num;
sum = ++num;
document.write("<br /><br />The value of ++a is = ");
document.write(sum);
document.write("<br />Now the value of a is = ");
document.write(sum);
document.write("<br /><br />The value of a++ is = ");
sum = num++;
document.write(sum);
document.write("<br />Now the value of a is = ");
document.write(sum + 1);
sum = --num;
document.write("<br /><br />The value of --a is = ");
document.write(sum);
document.write("<br />Now the value of a is = ");
document.write(sum);
sum = num--;
document.write("<br /><br />The value of a-- is = ");
document.write(sum);
document.write("<br />Now the value of a is = ");
document.write(sum - 1);
