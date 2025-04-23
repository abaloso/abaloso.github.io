document.addEventListener("DOMContentLoaded", () => {
  window.scrollTo(0, 0);
  const header = document.querySelector(".site-header");
  const scrollThreshold = 50;
  if (header) {
    let isScrolling = false;
    window.addEventListener("scroll", () => {
      if (!isScrolling) {
        window.requestAnimationFrame(() => {
          header.classList.toggle("scrolled", window.scrollY > scrollThreshold);
          isScrolling = false;
        });
        isScrolling = true;
      }
    });
  }
  const bookingForm = document.getElementById("booking-form");
  if (bookingForm) {
    const today = new Date().toISOString().split('T')[0];

    const checkInInput = document.getElementById("check-in");
    const checkOutInput = document.getElementById("check-out");

    if (checkInInput) checkInInput.min = today;
    if (checkOutInput) checkOutInput.min = today;
  }
});