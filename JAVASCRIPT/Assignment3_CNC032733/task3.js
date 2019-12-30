var arr = ["red", "green", "orange", "purple"];
document.write(arr + "<br>");
coloratstart = prompt("Enter the color which you want to add at the beginning");
arr.unshift(coloratstart);
document.write(arr + "<br>");

coloratend = prompt("Enter the color which you want to add at the end");
arr.push(coloratend);
document.write(arr + "<br>");

arr.unshift("yellow", "blue");

document.write(arr + "<br>");
arr.shift();
document.write(arr + "<br>");
arr.pop();
document.write(arr + "<br>");

indexofcolor = parseInt(
  prompt("At which index do you want to add the color ?")
);
colorname = prompt("Type the name of color you want add.");
arr[indexofcolor] = colorname;
document.write(arr + "<br>");

colorindex = parseInt(prompt("Enter the index of color you want to delete."));
numberofcolor = parseInt(
  prompt("Enter the number of colors you want to delete.")
);
arr.splice(colorindex, numberofcolor);
document.write(arr + "<br>");
