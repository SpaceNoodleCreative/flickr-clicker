import { displayDynamic, displayPhotos, displayError } from "./display";
import { initEvents } from "./events";

const api_key = "86efe55f739b66930184b28f3fcd422b";
const query = "faces on inanimate objects";
const tags = "object,face,-person,-human,-product,-art";
const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=86efe55f739b66930184b28f3fcd422b&tags=${tags}&tag_mode=all&text=${query}&safe_search=&sort=relevance&content_type=1&format=json&nojsoncallback=1`;

const filterData = (data) => data.photos.photo;

const onResponseSuccess = (data) => {
  const photos = filterData(data);
  displayDynamic();
  displayPhotos(photos);
  initEvents();
};

const onResponseError = (message) => {
  displayError();
  initEvents();
  console.log(`Error: ${message}`);
};

export const fetchData = () =>
  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      response.stat && response.stat === "ok"
        ? onResponseSuccess(response)
        : onResponseError(response.message);
    })
    .catch((err) => {
      console.log(err);
    });
