document.addEventListener("DOMContentLoaded", () => {
    window.onbeforeunload = () => {
        window.scrollTo(0, 0)
      }
      window.scrollTo(0, 0)
    const header = document.querySelector(".site-header")
    const scrollThreshold = 50
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > scrollThreshold) {
        header.classList.add("scrolled")
      } else {
        header.classList.remove("scrolled")
      }
    })
  
    const menuToggle = document.querySelector(".mobile-menu-toggle")
    const navLinks = document.querySelector(".nav-links")
  
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active")
    })

    const bookingForm = document.getElementById("booking-form")
    if (bookingForm) {
      const checkInInput = document.getElementById("check-in")
      const checkOutInput = document.getElementById("check-out")

      const today = new Date()
      const tomorrow = new Date(today)
      tomorrow.setDate(tomorrow.getDate() + 1)
  
      const formatDate = (date) => {
        const year = date.getFullYear()
        const month = String(date.getMonth() + 1).padStart(2, "0")
        const day = String(date.getDate()).padStart(2, "0")
        return `${year}-${month}-${day}`
      }
  
      checkInInput.min = formatDate(today)
      checkOutInput.min = formatDate(tomorrow)

      checkInInput.addEventListener("change", function () {
        const checkInDate = new Date(this.value)
        const minCheckOutDate = new Date(checkInDate)
        minCheckOutDate.setDate(minCheckOutDate.getDate() + 1)
  
        checkOutInput.min = formatDate(minCheckOutDate)

        if (new Date(checkOutInput.value) <= checkInDate) {
          checkOutInput.value = formatDate(minCheckOutDate)
        }
      })
  

    }
  })
  