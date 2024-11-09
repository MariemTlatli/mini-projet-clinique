const defaultUsers = [
  {
    username: "testuser1",
    email: "testuser1@example.com",
    password: "password123",
    phone: "0123456789",
    specialty: "Cardiologie",
  },
  {
    username: "testuser2",
    email: "testuser2@example.com",
    password: "password456",
    phone: "0987654321",
    specialty: "Pédiatrie",
  },
];

// Charger les utilisateurs depuis le local storage ou utiliser les utilisateurs par défaut
const users = JSON.parse(localStorage.getItem("users")) || defaultUsers;

// Sauvegarder les utilisateurs dans le local storage
function saveUsersToLocalStorage() {
  localStorage.setItem("users", JSON.stringify(users));
}
