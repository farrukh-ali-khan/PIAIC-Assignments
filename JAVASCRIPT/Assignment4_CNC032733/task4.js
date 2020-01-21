var email = prompt("Enter email\n");
while (
  !email
    .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
) {
  email = prompt("Wrong Email");
}
