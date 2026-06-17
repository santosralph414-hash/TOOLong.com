let cart = [];
let currentItem = "";
let currentAvailable = false;
let currentRole = "Student"; // default role

// Handle role selection
function selectRole(role) {
  currentRole = role;
  document.getElementById("roleDisplay").textContent = "Current Role: " + role;
}

// Show item details in modal
function showDetails(item, price, desc, available) {
  currentItem = item;
  currentAvailable = available;

  document.getElementById("modalTitle").textContent = item;
  document.getElementById("modalPrice").textContent = price;
  document.getElementById("modalDesc").textContent = desc;

  const modalButton = document.get
