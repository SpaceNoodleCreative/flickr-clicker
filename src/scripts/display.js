import { smileyIndex } from "./patterns";
import { onLeftClick, onRightClick } from "./events";
const container = document.querySelector("#content");

const createElement = (el, attr, html) => {
  const newEl = document.createElement(el);
  if (attr && attr.length) {
    Array.from(attr).forEach(({ name, value }) => {
      newEl.setAttribute(name, value);
    });
  }
  if (html) {
    newEl.innerHTML = html;
  }
  return newEl;
};

const buildPhotoUrl = ({ farm, server, id, secret }) => {
  return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
};

const displayDynamic = () =>
  document.querySelector("body").classList.add("ajaxDone");

const displayError = (msg) =>
  document.querySelector("body").classList.add("ajaxError");

const drawSmiley = (index, box) => {
  smileyIndex.black.map((item) => {
    item === index && box.classList.add("black");
  });
  smileyIndex.yellow.map((item) => {
    item === index && box.classList.add("yellow");
  });
};

const displayPhotos = (photos) => {
  const wrapper = createElement("div", [
    { name: "class", value: "photos-wrapper" },
  ]);
  photos.map((item, index) => {
    const box = createElement("div", [{ name: "class", value: "box" }]);
    box.appendChild(
      createElement("img", [
        { name: "src", value: buildPhotoUrl(item) },
        { name: "alt", value: item.title },
      ])
    );
    if (photos.length >= 72) {
      drawSmiley(index - 18, box);
    }
    wrapper.appendChild(box);
    box.addEventListener("click", function (event) {
      onLeftClick(box);
    });

    box.addEventListener("contextmenu", function (event) {
      event.preventDefault();
      onRightClick(box);
    });
  });

  container.appendChild(wrapper);
};

export { displayDynamic, displayError, displayPhotos };
