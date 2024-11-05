// Fonction de validation du formulaire
function validateForm() {
  // Récupération des valeurs du formulaire
  const username = document.getElementById("signUpUsername").value;
  const email = document.getElementById("signUpEmail").value;
  const password = document.getElementById("signUpPassword").value;
  const phone = document.getElementById("signUpPhone").value;
  const specialty = document.getElementById("signUpSpecialty").value;

  // Effacer les messages d'erreur précédents
  clearErrors();

  // Appel des fonctions de validation pour chaque champ
  let isValid = true;
  if (!validateUsername(username)) isValid = false;
  if (!validateEmail(email)) isValid = false;
  if (!validatePassword(password)) isValid = false;
  if (!validatePhone(phone)) isValid = false;
  if (!validateSpecialty(specialty)) isValid = false;

  // Afficher le message de succès si toutes les validations sont réussies
  if (isValid) {
    document.getElementById("signUpMessage").textContent =
      "Inscription réussie !";
  }

  return isValid;
}

// Efface tous les messages d'erreur
function clearErrors() {
  document.getElementById("usernameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("phoneError").textContent = "";
  document.getElementById("specialtyError").textContent = "";
}

// Validation du nom d'utilisateur
function validateUsername(username) {
  if (username.length < 3) {
    document.getElementById("usernameError").textContent =
      "Le nom d'utilisateur doit contenir au moins 3 caractères.";
    return false;
  }
  return true;
}

// Validation de l'email
function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent =
      "Veuillez entrer une adresse e-mail valide.";
    return false;
  }
  return true;
}

// Validation du mot de passe
function validatePassword(password) {
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!passwordPattern.test(password)) {
    document.getElementById("passwordError").textContent =
      "Le mot de passe doit contenir au moins 8 caractères, une lettre et un chiffre.";
    return false;
  }
  return true;
}

// Validation du numéro de téléphone
function validatePhone(phone) {
  const phonePattern = /^\d{8,}$/; // Modifié pour accepter au moins 8 chiffres
  if (!phonePattern.test(phone)) {
    document.getElementById("phoneError").textContent =
      "Le numéro de téléphone doit contenir uniquement des chiffres et au moins 8 caractères.";
    return false;
  }
  return true;
}

// Validation de la spécialité
function validateSpecialty(specialty) {
  if (specialty.trim() === "") {
    document.getElementById("specialtyError").textContent =
      "La spécialité ne peut pas être vide.";
    return false;
  }
  return true;
}
