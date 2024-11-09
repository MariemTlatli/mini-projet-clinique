function signIn() {
  const email = document.getElementById("signInEmail").value;
  const password = document.getElementById("signInPassword").value;
  const message = document.getElementById("signInMessage");

  // Récupère les utilisateurs depuis le localStorage ou utilise une liste par défaut si elle n'existe pas
  const users = JSON.parse(localStorage.getItem("users")) || defaultUsers;

  // Trouve l'utilisateur correspondant
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    // message de confirmation que les coordonnée sont bien correctes
    message.style.color = "green";
    message.textContent = "Connexion réussie !";
    console.log("Informations de l'utilisateur:", user);

    // Stockage dans local-storage
    localStorage.setItem("loggedInUser", JSON.stringify(user));

    // voir les coordonnées correcte ou pas
    console.table(JSON.parse(localStorage.getItem("users")) || defaultUsers);

    console.log("loggedInUser : ");
    console.log(localStorage.getItem("loggedInUser"));
  } else {
    // Si les informations sont incorrectes, affiche un message d'erreur
    message.style.color = "red";
    message.textContent = "Erreur : E-mail ou mot de passe incorrect.";
  }
}
