import {
    ADD_BOOK,
    DELETE_BOOK,
    SET_BOOKS
} from "../actions/userbooks";
import {
    SET_GENRES,
    SET_GENRE_BOOKS
} from "../actions/nytimes";

import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageBooks(state = { userBooks: [], books: [], genres: [] }, action) {
    switch (action.type) {
        case ADD_BOOK:
            const userBook = {
                id: cuid(),
                title: action.title,
                author: action.author,
                description: action.description,
                url: action.url
            }
            return {...state, userBooks: [...state.userBooks, userBook]};

        case DELETE_BOOK:
            return {...state, userBooks: state.userBooks.filter(userBook => userBook.id !== action.id)};

        case SET_BOOKS:
            return {...state, userBooks: [...action.books]};
        
        case SET_GENRE_BOOKS:
            return {...state, books: [...action.books]};
        
        case SET_GENRES:
            return {...state, genres: [...action.genres]}

        default:
            return state;
    }
}
