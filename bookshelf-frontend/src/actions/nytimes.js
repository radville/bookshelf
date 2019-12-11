export const FETCH_GENRE_BOOKS = "FETCH_GENRE_BOOKS"
export const SET_GENRE_BOOKS = "SET_GENRE_BOOKS"
export const FETCH_GENRES = "FETCH_GENRES"
export const SET_GENRES = "SET_GENRES"

// saves the NYTimes books in a genre to redux state
export const setGenreBooks = books => {
    return { type: SET_GENRE_BOOKS, books };
};

// gets the books in a particular genre from NYTimes
export const fetchGenreBooks = genre => {
    const slug = genre.replace(/\s+/g, '-').toLowerCase();

    return dispatch => 
        fetch(`http://localhost:3000/bestsellers/${slug}`)
            .then(response => response.json())
            .then(data => {
                dispatch(setGenreBooks(data))
            })
            .then(() => {window.location.href= `/bestsellers/${slug}`})
}

// sets genres on the page after they're fetched
export const setGenres = genres => {
    return { type: SET_GENRES, genres };
};

// Fetches list of genres from NYTimes
export const fetchGenres = () => {
    return dispatch => 
        fetch('http://localhost:3000/genres')
            .then(response => response.json())
            .then(data => {
                dispatch(setGenres(data))
            });
}