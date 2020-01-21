var dt = new Date();
document.write("Current Date: " + dt);
document.write(
  "<br/>Elapsed milliseconds since January 1, 1970: " +
    new Date().getTime() / 1000.0
);
document.write(
  "<br/>Elapsed minutes since January 1, 1970: " +
    new Date().getTime() / (1000 * 60)
);
