// login.js
function signIn() {
  const email = document.getElementById("signInEmail").value;
  const password = document.getElementById("signInPassword").value;
  const message = document.getElementById("signInMessage");

  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    message.style.color = "green";
    message.textContent = "Connexion réussie !";
    console.log("Informations de l'utilisateur:", user);
  } else {
    message.style.color = "red";
    message.textContent = "Erreur : E-mail ou mot de passe incorrect.";
  }
}
