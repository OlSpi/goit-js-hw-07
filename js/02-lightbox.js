import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const list = document.querySelector(".gallery");

const markup = galleryItems
  .map((item) => {
    return ` <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          alt="${item.description}"
        />
      </a>
    </li>`;
  })
  .join("");
list.insertAdjacentHTML("beforeend", markup);

list.addEventListener("click", onClick);

function onClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
}
