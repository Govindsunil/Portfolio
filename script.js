"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};
// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});
//Navigation bar
// Select all the navigation buttons
const navLinks = document.querySelectorAll(".navbar-link");

// Select all the sections (about, resume, portfolio, etc.)
const pages = document.querySelectorAll("[data-page]");

// Function to handle page change
function navigateToPage() {
  // Remove 'active' class from all links and sections
  navLinks.forEach((link) => link.classList.remove("active"));
  pages.forEach((page) => page.classList.remove("active"));

  // Add 'active' class to the clicked link and corresponding section
  this.classList.add("active");
  const targetPage = this.textContent.trim().toLowerCase();
  document.querySelector(`[data-page="${targetPage}"]`).classList.add("active");
}

// Add click event listeners to each nav link
navLinks.forEach((link) => {
  link.addEventListener("click", navigateToPage);
});

/// for pop up
// Select the project items and modal elements
const projectItems = document.querySelectorAll("[data-project-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const overlay = document.querySelector("[data-overlay]");
const closeModalBtn = document.querySelector("[data-modal-close-btn]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalImg = document.querySelector("[data-modal-img]");
const modalText = document.querySelector("[data-modal-text]");

// Function to open the modal
function openModal(project) {
  // Extract data from the clicked project
  const title = project.getAttribute("data-title");
  const description = project.getAttribute("data-description");
  const imgSrc = project.getAttribute("data-img");

  // Update modal content
  modalTitle.textContent = title; // Set the title in the modal
  modalImg.src = imgSrc; // Update the image in the modal
  modalText.innerHTML = `<p>${description}</p>`; // Update the description text

  // Display the modal
  modalContainer.classList.add("active");
  overlay.classList.add("active");
}

// Function to close the modal
function closeModal() {
  modalContainer.classList.remove("active");
  overlay.classList.remove("active");
}

// Add event listeners to the project items
projectItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent the default anchor link behavior
    openModal(item); // Open modal with the clicked item data
  });
});
//for clear
// Add event listener to the close button and overlay to close the modal
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
// Select all filter buttons and project items
const filterButtons = document.querySelectorAll("[data-filter-btn]");
const selectItems = document.querySelectorAll("[data-select-item]");
// const projectItems = document.querySelectorAll(".project-item");

// Function to filter projects
function filterProjects(category) {
  projectItems.forEach((item) => {
    const projectCategory = item.querySelector(".project-category").textContent;

    // Show or hide items based on the selected category
    if (category === "All" || projectCategory === category) {
      item.style.display = "block"; // Show item
    } else {
      item.style.display = "none"; // Hide item
    }
  });
}

// Event listeners for filter buttons
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    // Add active class to the clicked button
    button.classList.add("active");

    // Get the category from the button text
    const category = button.textContent;

    // Filter projects based on category
    filterProjects(category);
  });
});

// Event listeners for select items
selectItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Get the category from the selected item
    const category = item.textContent;

    // Filter projects based on category
    filterProjects(category);

    // Update the select value display
    document.querySelector("[data-selecct-value]").textContent = category;

    // Close the select list after selection (optional)
    const selectList = item.closest(".select-list");
    selectList.style.display = "none"; // Hide the select list
  });
});

// Optional: Toggle select list visibility
document.querySelector("[data-select]").addEventListener("click", () => {
  const selectList = document.querySelector(".select-list");
  selectList.style.display =
    selectList.style.display === "block" ? "none" : "block";
});

// Close select list when clicking outside (optional)
document.addEventListener("click", (event) => {
  const selectBox = document.querySelector(".filter-select-box");
  if (!selectBox.contains(event.target)) {
    const selectList = document.querySelector(".select-list");
    selectList.style.display = "none"; // Hide the select list
  }
});
