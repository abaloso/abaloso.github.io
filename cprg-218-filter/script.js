document.addEventListener("DOMContentLoaded", function () {
  filterGenre("all");
});

function filterMedia(type) {
  let items = document.querySelectorAll(".media-grid figure");
  items.forEach((item) => {
    if (type === "all" || item.classList.contains(type)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });

  let genreFilter = document.getElementById("genre-filter-container");
  if (type === "all") {
    genreFilter.style.display = "flex";
    genreFilter.style.justifyContent = "center";
  } else {
    genreFilter.style.display = "none";
  }

  let activeButton = document.querySelector(".navbar .active");
  if (activeButton) {
    activeButton.classList.remove("active");
  }

  let selectedButton = document.querySelector(
    `.navbar button[data-type="${type}"]`
  );
  if (selectedButton) {
    selectedButton.classList.add("active");
  }
}

function filterGenre(genre) {
  let items = document.querySelectorAll(".media-grid figure");
  items.forEach((item) => {
    if (genre === "all" || item.classList.contains(genre)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}

document.getElementById("choices").addEventListener("change", function () {
  filterGenre(this.value);
});

//burger menu
function toggleMenu() {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("active");
}

document.querySelectorAll(".navbar button").forEach((btn) => {
  btn.addEventListener("click", function () {
    closeMenu();
  });
});

window.addEventListener("scroll", closeMenu);

function closeMenu() {
  const navbar = document.querySelector(".navbar");
  if (navbar.classList.contains("active")) {
    navbar.classList.remove("active");
  }
}
