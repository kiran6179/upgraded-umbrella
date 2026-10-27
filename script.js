
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  // Mobile navigation
  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Menu category filters
  const tabs = document.querySelectorAll(".menu-tab");
  const dishes = document.querySelectorAll(".dish-card");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const category = tab.dataset.category;

      tabs.forEach((item) => {
        const selected = item === tab;
        item.classList.toggle("active", selected);
        item.setAttribute("aria-selected", String(selected));
      });

      dishes.forEach((dish) => {
        dish.hidden =
          category !== "all" &&
          dish.dataset.type !== category;
      });
    });
  });

  // Automatic copyright year
  const year = document.getElementById("currentYear");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Demonstration reservation form
  const form = document.getElementById("reservationForm");
  const feedback = document.getElementById("formFeedback");

  if (form && feedback) {
    const dateInput = document.getElementById("guestDate");

    if (dateInput) {
      const today = new Date();
      const localDate = new Date(
        today.getTime() - today.getTimezoneOffset() * 60000
      )
        .toISOString()
        .slice(0, 10);

      dateInput.min = localDate;
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!form.reportValidity()) return;

      feedback.textContent =
        "Demo complete: your form fields are valid, but no reservation has been sent. Connect a secure form service to accept real enquiries.";

      form.reset();
    });
  }
});
