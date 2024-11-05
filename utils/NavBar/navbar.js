// Chargement de la barre de navigation
document.addEventListener("DOMContentLoaded", function () {
  fetch(
    "C:/Users/marie/OneDrive/Bureau/InGitHub/mini_projet_1_v1/utils/NavBar/navbar.html"
  )
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar-container").innerHTML = data;
    })
    .catch((error) =>
      console.error("Erreur lors du chargement de la navbar:", error)
    );
});
