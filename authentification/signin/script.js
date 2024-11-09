function signUp() {
  const username = document.getElementById("signUpUsername").value;
  const email = document.getElementById("signUpEmail").value;
  const password = document.getElementById("signUpPassword").value;
  const phone = document.getElementById("signUpPhone").value;
  const specialty = document.getElementById("signUpSpecialty").value;

  const message = document.getElementById("signUpMessage");

  // Vérifier si l'utilisateur existe déjà
  const existingUser = users.find((u) => u.email === email);
  if (existingUser) {
    message.style.color = "red";
    console.log("Un utilisateur avec cet e-mail existe déjà.");
    message.textContent =
      "Erreur : Un utilisateur avec cet e-mail existe déjà.";
    return;
  }
  console.log("my test 1");

  // Créer un nouvel utilisateur
  const newUser = {
    username,
    email,
    password,
    phone,
    specialty,
  };
  users.push(newUser);
  console.log("my test 2");
  // Sauvegarder dans le local storage
  saveUsersToLocalStorage();
  console.log("my test 3");
  // Afficher un message de succès
  message.style.color = "green";
  message.textContent = "Utilisateur ajouté avec succès !";

  console.table(JSON.parse(localStorage.getItem("users")) || defaultUsers);
}
