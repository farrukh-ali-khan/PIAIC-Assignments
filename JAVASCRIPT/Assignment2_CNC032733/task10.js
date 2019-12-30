function check() {
  var x = document.getElementById("form1");
  var name = x.elements["pass"].value;
  var pass = "abc";

  if (name == pass) {
    document.write(
      "Correct! The password you entered matches the original password"
    );
  } else if (name === "") {
    document.write("Please enter your password");
  } else if (name !== pass) {
    document.write("Wrong Password");
  }
}
