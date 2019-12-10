import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageBooks(state = { userBooks: []}, action) {
    switch (action.type) {
        case "ADD_BOOK":
            const userBook = {
                id: cuid(),
                title: action.title,
                author: action.author,
                description: action.description,
                url: action.url
            }
            return {...state, userBooks: [...state.userBooks, userBook]};

        case "DELETE_BOOK":
            return {...state, userBooks: state.userBooks.filter(userBook => userBook.id !== action.id)};

        default:
            return state;
    }
}
