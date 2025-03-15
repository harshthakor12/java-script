let form = document.getElementById("signup");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let name = document.getElementById("name").value;

  let email = document.getElementById("email").value;

  let country = document.getElementById("country").value;

  let phone = document.getElementById("phone").value;

  let password = document.getElementById("password").value;

  let student = {
    name,

    email,

    country,

    phone,

    password,
  };
  console.log(student);
});
let forn = document.getElementById("signin");

forn.addEventListener("submit", (event) => {
  event.preventDefault();

  let name = document.getElementById("signin-name").value;

  let email = document.getElementById("signin-email").value;

  let password = document.getElementById("signin-password").value;

  let student = {
    name,

    email,

    password,
  };
  console.log(student);
});
