document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
  const mainNav = document.getElementById("main-nav")
  const siteHeader = document.querySelector(".site-header")

  if (mobileMenuToggle && mainNav) {
    mobileMenuToggle.addEventListener("click", function () {
      mainNav.classList.toggle("active")
      this.classList.toggle("active")
      const isExpanded = mainNav.classList.contains("active")
      this.setAttribute("aria-expanded", isExpanded)

      // Add or remove scrolled class based on menu state
      if (isExpanded) {
        siteHeader.classList.add("scrolled")
      } else if (window.scrollY <= 50) {
        // Only remove the scrolled class if we haven't scrolled down
        siteHeader.classList.remove("scrolled")
      }
    })
  }

  // Close mobile menu on scroll
  window.addEventListener("scroll", () => {
    if (mainNav && mainNav.classList.contains("active")) {
      mainNav.classList.remove("active")
      if (mobileMenuToggle) {
        mobileMenuToggle.classList.remove("active")
        mobileMenuToggle.setAttribute("aria-expanded", "false")
      }
    }
  })

  // Sticky header on scroll
  if (siteHeader) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        siteHeader.classList.add("scrolled")
      } else {
        // Only remove scrolled class if mobile menu is not active
        if (!mainNav || !mainNav.classList.contains("active")) {
          siteHeader.classList.remove("scrolled")
        }
      }
    })
  }

  // Set active link based on current page
  const currentPage = window.location.pathname.split("/").pop() || "index.html"
  const navLinks = document.querySelectorAll(".nav-links a")

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active")
    }
  })
})
