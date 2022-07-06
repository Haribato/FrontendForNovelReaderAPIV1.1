import {IBookDetails} from "../../../models/Response/IBookDetailts"
import {IPost} from "../../../models/IPost";

export  interface bookState {
    book: IBookDetails,
    isLoading: boolean,
    error: string | null,
    bookId: number | null,
}

export enum bookActionType {
    SET_BOOK = 'BOOKS/SET_BOOK',
    SET_IS_LOADING = 'BOOKS/SET_IS_LOADING',
    SET_ERROR = 'BOOKS/SET_ERROR',
    SET_BOOK_ID = 'BOOKS/SET_BOOK_ID',
}

export interface setBook {
    type: bookActionType.SET_BOOK,
    payload: IBookDetails
}

export interface setBookError {
    type: bookActionType.SET_ERROR,
    payload: string | null
}


export interface setBookIsLoading {
    type: bookActionType.SET_IS_LOADING,
    payload: boolean
}

export interface setBookId {
    type:bookActionType.SET_BOOK_ID,
    payload: number
}


export type bookActions = setBook | setBookError | setBookIsLoading | setBookId




