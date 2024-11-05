// signup.js
function signUp() {
  const username = document.getElementById("signUpUsername").value;
  const email = document.getElementById("signUpEmail").value;
  const password = document.getElementById("signUpPassword").value;
  const phone = document.getElementById("signUpPhone").value;
  const specialty = document.getElementById("signUpSpecialty").value;

  const message = document.getElementById("signUpMessage");

  const existingUser = users.find((u) => u.email === email);
  if (existingUser) {
    message.style.color = "red";
    message.textContent =
      "Erreur : Un utilisateur avec cet e-mail existe déjà.";
    return;
  }
  

  const newUser = {
    username,
    email,
    password,
    phone,
    specialty,
  };
  users.push(newUser);

  message.style.color = "green";
  message.textContent = "Utilisateur ajouté avec succès !";
  console.log("Nouveaux utilisateurs:", users);
}
