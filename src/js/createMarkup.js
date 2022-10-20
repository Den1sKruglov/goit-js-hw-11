export function createMarkup(e) {
    return e.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        return `
                <a class ="gallery__link" href ="${largeImageURL}">
                    <div class="photo-card">
                        <img class = "photo-card__img" src="${webformatURL}" alt="${tags}" loading="lazy" width = 270 />
                            <div class="info">
                                <p class="info-item">
                                    <b>Likes: </b>
                                    <b>${likes}</b>
                                </p>
                                <p class="info-item">
                                    <b>Views: </b>
                                    <b>${views}</b>
                                </p>
                                <p class="info-item">
                                    <b>Comments: </b>
                                    <b>${comments}</b>
                                </p>
                                <p class="info-item">
                                    <b>Downloads: </b>
                                    <b>${downloads}</b>
                                </p>
                        </div>
                    </div>
                </a>`;
    }).join('');
}





