import {bookActions, bookActionType, bookState} from "./types";
import {IBookDetails} from "../../../models/Response/IBookDetailts";

const initialState: bookState = {
    book: {} as IBookDetails,
    isLoading: false,
    error: null,
    bookId: null
}

export  const bookReducer = (state = initialState, action:bookActions) : bookState => {
    switch (action.type) {
        case bookActionType.SET_BOOK: {
            const book: IBookDetails = action.payload as IBookDetails
            return {...state, book: book}
            break;
        }

        case bookActionType.SET_ERROR:
            return {...state, error: action.payload}
            break;

        case bookActionType.SET_IS_LOADING:
            return {...state, isLoading: action.payload}
            break;

        case bookActionType.SET_BOOK_ID:
            return {...state, bookId: action.payload}
            break;

        default:
            return state;
    }
}














