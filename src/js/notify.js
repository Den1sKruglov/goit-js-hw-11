import { Notify } from 'notiflix/build/notiflix-notify-aio';



function emptySearchMessage() {
    Notify.failure('The search string cannot be empty. Please specify your search query.');
}

function noImagesFoundMessage() {
    Notify.failure('Sorry, there are no images matching your search query. Please try again.');
}

function imagesFoundMessage(data) {
    Notify.success(`Hooray! We found ${data} images.`);
}

function endOfSearchMessage() {
    Notify.info("We're sorry, but you've reached the end of search results.");

}

export { emptySearchMessage, noImagesFoundMessage, imagesFoundMessage, endOfSearchMessage };