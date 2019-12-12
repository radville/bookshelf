export const ADD_BOOK = "ADD_BOOK"
export const DELETE_BOOK = "DELETE_BOOK"
export const SET_BOOKS = "SET_BOOKS"
export const FETCH_USERBOOKS = "FETCH_USERBOOKS"
export const READ_TOGGLE = "READ_TOGGLE"

export const addBook = book => {
    return { type: ADD_BOOK, book};
};

export const deleteBook = id => {
    return { type: DELETE_BOOK, id};
};

export const setBooks = books => {
    return { type: SET_BOOKS, books };
};

export const fetchUserBooks = () => {
    return dispatch => 
        fetch("http://localhost:3000/books")
            .then(r => r.json())
            .then(data => {
                dispatch(setBooks(data));
                console.log(data)
        });
};

export const createBook = book => {
  return dispatch =>
    fetch("http://localhost:3000/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(book)
    })
      .then(response => response.json())
      .then(book => {
        dispatch(addBook(book));
      });
};
  
export const destroyBook = id => {
  return dispatch =>
    fetch(`http://localhost:3000/books/${id}`, {
      method: "DELETE"
    }).then(() => {
      dispatch(deleteBook(id));
    });
};

export const localReadToggle = id => {
  return {type: "READ_TOGGLE", id}
}

export const readToggle = book => {
  return dispatch => 
    fetch(`http://localhost:3000/books/${book.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ...book, read: !book.read })
    }).then(() => {
      dispatch(localReadToggle(book.id))
    })
}