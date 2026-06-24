const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".work-card");
const workButtons = document.querySelectorAll(".work-button");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const lightboxTitle = document.querySelector("#lightbox-title");
const lightboxType = document.querySelector(".lightbox-type");
const lightboxYear = document.querySelector(".lightbox-year");
const closeButton = document.querySelector("[data-close]");

filters.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.dataset.filter;

    filters.forEach((item) => item.classList.toggle("is-active", item === button));
    cards.forEach((card) => {
      const visible = selected === "all" || card.dataset.category === selected;
      card.hidden = !visible;
    });
  });
});

function openLightbox(button) {
  lightboxTitle.textContent = button.dataset.title;
  lightboxType.textContent = button.dataset.type;
  lightboxYear.textContent = button.dataset.year;
  lightboxImage.src = button.dataset.image;
  lightboxImage.alt = button.querySelector("img").alt;
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  closeButton.focus();
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
}

workButtons.forEach((button) => {
  button.addEventListener("click", () => openLightbox(button));
});

closeButton.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
    closeLightbox();
  }
});
