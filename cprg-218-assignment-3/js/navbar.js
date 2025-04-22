document.addEventListener("DOMContentLoaded", () => {
    const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
    const mainNav = document.getElementById("main-nav")
  
    if (mobileMenuToggle && mainNav) {
      mobileMenuToggle.addEventListener("click", function () {
        mainNav.classList.toggle("active")
        this.classList.toggle("active")
        const isExpanded = mainNav.classList.contains("active")
        this.setAttribute("aria-expanded", isExpanded)
      })
    }
  
    window.addEventListener("scroll", () => {
      if (mainNav && mainNav.classList.contains("active")) {
        mainNav.classList.remove("active")
        if (mobileMenuToggle) {
          mobileMenuToggle.classList.remove("active")
          mobileMenuToggle.setAttribute("aria-expanded", "false")
        }
      }
    })

    const siteHeader = document.querySelector(".site-header")
  
    if (siteHeader) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
          siteHeader.classList.add("scrolled")
        } else {
          siteHeader.classList.remove("scrolled")
        }
      })
    }
  
    const currentPage = window.location.pathname.split("/").pop() || "index.html"
    const navLinks = document.querySelectorAll(".nav-links a")
  
    navLinks.forEach((link) => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active")
      }
    })
  })
  