// Taux de conversion (1 Euro = 3.2 Dinars)
const exchangeRate = 3.2;

// Fonction pour afficher/masquer les colonnes selon le choix de la devise
function toggleCurrency() {
  const selectedCurrency = document.getElementById("currencySelector").value;

  const dinarColumns = document.querySelectorAll(".price-dinar");
  const euroColumns = document.querySelectorAll(".price-euro");
  const dinarColumnHeader = document.getElementById("dinarColumnHeader");
  const euroColumnHeader = document.getElementById("euroColumnHeader");

  if (selectedCurrency === "euro") {
    // Convertir les prix en Dinar vers Euro et afficher la colonne Euro
    dinarColumns.forEach((price, index) => {
      const dinarValue = parseFloat(
        price.textContent.replace(/[^0-9.-]+/g, "")
      ); // Retirer les caractères non numériques
      if (!isNaN(dinarValue)) {
        const euroValue = (dinarValue / exchangeRate).toFixed(2); // Conversion Dinar -> Euro
        euroColumns[index].textContent = euroValue; // Afficher le prix en Euro
      }
    });

    // Afficher la colonne Euro et cacher la colonne Dinar
    dinarColumnHeader.style.display = "none";
    euroColumnHeader.style.display = "table-cell";
    dinarColumns.forEach((column) => (column.style.display = "none"));
    euroColumns.forEach((column) => (column.style.display = "table-cell"));
  } else {
    // Revenir à l'affichage des prix en Dinar
    euroColumns.forEach((price, index) => {
      const euroValue = parseFloat(price.textContent.replace(/[^0-9.-]+/g, "")); // Retirer les caractères non numériques
      if (!isNaN(euroValue)) {
        const dinarValue = (euroValue * exchangeRate).toFixed(2); // Conversion Euro -> Dinar
        dinarColumns[index].textContent = dinarValue; // Afficher le prix en Dinar
      }
    });

    // Afficher la colonne Dinar et cacher la colonne Euro
    euroColumnHeader.style.display = "none";
    dinarColumnHeader.style.display = "table-cell";
    dinarColumns.forEach((column) => (column.style.display = "table-cell"));
    euroColumns.forEach((column) => (column.style.display = "none"));
  }
}

// Initialisation par défaut: afficher les prix en Dinar
document.addEventListener("DOMContentLoaded", () => {
  toggleCurrency();
});
