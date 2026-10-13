
"use strict";

// Mobile navigation menu
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", function () {
  const isOpen = navigation.classList.toggle("active");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the mobile menu when a navigation link is clicked
navigation.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navigation.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Interactive FAQ accordion
const faqButtons = document.querySelectorAll(".faq-question");

faqButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const faqItem = button.closest(".faq-item");
    const isOpen = faqItem.classList.toggle("open");

    button.setAttribute("aria-expanded", String(isOpen));
  });
});

// Quote request form
const quoteForm = document.getElementById("quoteForm");
const formMessage = document.getElementById("formMessage");

quoteForm.addEventListener("submit", function (event) {
  // Prevent the browser from reloading the page
  event.preventDefault();

  // Check required fields and email format
  if (!quoteForm.reportValidity()) {
    return;
  }

  // Demonstration only: no information is sent to a server
  formMessage.textContent =
    "Thank you! Your form is valid. " +
    "Connect a backend to receive real quote requests.";

  // Reset the form after successful validation
  quoteForm.reset();
});

// Automatically display the current year in the footer
document.getElementById("year").textContent =
  new Date().getFullYear();
