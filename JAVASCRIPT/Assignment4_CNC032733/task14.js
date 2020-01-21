var dt = new Date();
document.write("Current Date: " + dt);
var d = new Date(dt.setHours(dt.getHours() - 1));
document.write("<br/>1 hour ago it was " + d);
