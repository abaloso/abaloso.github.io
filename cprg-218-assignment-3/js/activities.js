document.addEventListener("DOMContentLoaded", () => {
    const toggleButtons = document.querySelectorAll(".toggle-details")
    toggleButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const targetId = this.getAttribute("data-target")
        const targetElement = document.getElementById(targetId)
        targetElement.classList.toggle("active")
        if (targetElement.classList.contains("active")) {
          this.textContent = "Show Less"
        } else {
          this.textContent = "Learn More"
        }
      })
    })
  })
  