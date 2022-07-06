import { authReducer } from './reducers/auth/authReducer';
import { combineReducers } from "redux";
// import { postReducer } from "./reducers/post/postReducer";
import { booksReducer} from "./reducers/book/booksReducer";
import {bookReducer} from "./reducers/bookDetail/bookReducer";

export const rootReducers = combineReducers({
    // posts: postReducer,
    auth: authReducer,
    books: booksReducer,
    book:bookReducer,
})

export type rootState = ReturnType<typeof rootReducers>