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
const modalDate = document.querySelector("[data-modal-date]");
const modalLink = document.querySelector("[data-modal-link]");
const modalsiteLink = document.querySelector("[data-modal-sitelink]");

// Function to open the modal
function openModal(project) {
  // Extract data from the clicked project
  const title = project.getAttribute("data-title");
  const description = project.getAttribute("data-description");
  const imgSrc = project.getAttribute("data-img");
  const date = project.getAttribute("data-date");
  const link = project.getAttribute("data-link");
  const sitelink = project.getAttribute("site-link");

  // Update modal content
  modalTitle.textContent = title;
  modalImg.src = imgSrc;
  modalText.innerHTML = `<p>${description}</p>`;
  modalDate.textContent = date;

  // Check if there's a valid link for sites and project
  if (link) {
    modalLink.href = link;
    modalLink.style.display = "inline"; // Show the link
  } else {
    modalLink.style.display = "none"; // Hide the link
  }
  if (sitelink) {
    modalsiteLink.href = sitelink;
    modalsiteLink.style.display = "inline"; // Show the link
  } else {
    modalsiteLink.style.display = "none"; // Hide the link
  }

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
//for clear// Add event listener to the close button and overlay to close the modal
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
// custom select variables
const select = document.querySelector("[data-select]");
const selectValue = document.querySelector("[data-selecct-value]");

// toggle the select dropdown on click
select.addEventListener("click", function () {
  elementToggleFunc(this);
});
selectItems.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    selectItems.forEach((btn) => btn.classList.remove("active"));
    // Add active class to the clicked button
    button.classList.add("active");

    // Get the category from the button text
    const category = button.textContent;

    // Update the displayed value in the select box
    document.querySelector("[data-selecct-value]").textContent = category;

    // Filter projects based on category
    filterProjects(category);

    // Close the dropdown after selection
    select.classList.remove("active"); // Hide the dropdown
  });
});
// Optional: Close the dropdown when clicking outside of it
document.addEventListener("click", (e) => {
  if (!select.contains(e.target)) {
    select.classList.remove("active"); // Hide the dropdown
  }
});
