document.addEventListener('DOMContentLoaded', () => {
  // Add fadeIn class to all elements with 'new-layout' class
  const elements = document.querySelectorAll('.new-layout');
  elements.forEach(element => {
    element.classList.add('fadeIn');
  });

  // Ensure hero section covers the whole first page
  document.querySelector(".hero").style.height = "100vh";

  // Modal Logic
  function toggleModal(planName) {
    const modal = document.getElementById("modal");
    const modalText = document.getElementById("modal-text");
    const isVisible = modal.style.display === "block";

    if (isVisible) {
      modal.style.display = "none";
    } else {
      modalText.innerText = `You have selected the ${planName}. Proceed to confirm?`;
      modal.style.display = "block";
    }
  }

  // Confirm Sign-Up
  function confirmSignup() {
    alert("Thank you for signing up! We will contact you soon.");
    toggleModal();  // Close modal after confirmation
  }

  // Open Modal on Sign Up Button Click
  document.querySelectorAll(".membership-box button").forEach(button => {
    button.addEventListener("click", function () {
      const planName = this.parentElement.querySelector("h3").innerText;
      toggleModal(planName);
    });
  });

  // Close Modal on Close Button Click
  document.querySelector(".close-btn").addEventListener("click", () => toggleModal());

  // Close Modal on Outside Click
  window.addEventListener("click", function (event) {
    if (event.target === document.getElementById("modal")) {
      toggleModal();
    }
  });

  // Button Click Effect - Scale on press
  document.querySelectorAll(".membership-box button").forEach(button => {
    button.addEventListener("mousedown", function () {
      this.classList.add('pressed');
    });
    button.addEventListener("mouseup", function () {
      this.classList.remove('pressed');
    });
  });

  // Update button hover effect
  const heroButton = document.querySelector(".hero button");
  heroButton.addEventListener("mouseover", function () {
    this.classList.add('hover');
  });
  heroButton.addEventListener("mouseout", function () {
    this.classList.remove('hover');
  });
});
function toggleFAQ(button) {
  const answer = button.nextElementSibling; // The next sibling is the answer
  const isExpanded = button.getAttribute('aria-expanded') === 'true';

  if (isExpanded) {
      button.setAttribute('aria-expanded', 'false');
      answer.style.display = 'none';
  } else {
      button.setAttribute('aria-expanded', 'true');
      answer.style.display = 'block';
  }
}
