import {booksActions, booksActionsType, booksState} from "./types"
import {IBook} from "../../../models/Response/IBook";

const initialState: booksState = {
    books:[],
    total_pages:1,
    page:1,
    isLoading:false,
    error: null,
}

export  const booksReducer = (state = initialState , action: booksActions): booksState => {

    switch (action.type){
        case booksActionsType.SET_BOOKS: {
            const books: IBook[] = action.payload.map(
                item => {
                    return{...item}
                }
            ) as IBook[]
            return {...state, books:[ ...books]}
            // return {...state, books:[...state.books, ...books]}
            break;
        }

        case booksActionsType.RESET_BOOKS:
            return {...state, books:[], error: null, page:1, total_pages:1}
            break;

        case booksActionsType.SET_ERROR:
            return {...state, error: action.payload}
            break;

        case booksActionsType.SET_IS_LOADING:
            return {...state, isLoading: action.payload}
            break;

        case booksActionsType.SET_PAGE:
            return {...state, page:action.payload}
            break;

        case booksActionsType.SET_TOTAL_PAGES:
            return {...state, total_pages: action.payload}
            break;

        default:
            return state
    }
}











