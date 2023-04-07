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
          data-source="${item.original}"
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

  const largeImage = event.target.dataset.source;
  console.log(largeImage);

  const instance = basicLightbox.create(
    `
    <div class="modal">
     <img src = '${largeImage}' alt='${event.target.alt}'width="800" height="600">
    </div>
`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", onEsc);
      },

      onClose: (instance) => {
        document.removeEventListener("keydown", onEsc);
      },
    }
  );

  instance.show();

  function onEsc(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
