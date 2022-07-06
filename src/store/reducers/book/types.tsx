import {IBook} from "../../../models/Response/IBook";


export interface booksState {
    books: IBook[],
    total_pages:number,
    page:number,
    isLoading: boolean,
    error: string | null
}

export enum booksActionsType {
    SET_BOOKS = 'BOOKS/SET_BOOKS',
    SET_IS_LOADING = 'BOOKS/SET_IS_LOADING',
    RESET_BOOKS = 'BOOKS/RESET_MEDIA',
    SET_ERROR = 'BOOKS/SET_ERROR',
    SET_PAGE = 'BOOKS/SET_PAGE',
    SET_TOTAL_PAGES = 'BOOKS/SET_TOTAL_PAGES',

}

export interface setBooks {
    type: booksActionsType.SET_BOOKS,
    payload: IBook[]
}

export interface resetBooks {
    type: booksActionsType.RESET_BOOKS
}

export interface setBooksError {
    type: booksActionsType.SET_ERROR,
    payload: string | null
}

export interface setBooksIsLoading {
    type: booksActionsType.SET_IS_LOADING,
    payload: boolean
}

export interface setBooksPage {
    type: booksActionsType.SET_PAGE,
    payload: number
}

export interface setTotalPages {
    type: booksActionsType.SET_TOTAL_PAGES,
    payload: number
}

export type booksActions    = setBooks
                            | setBooksError
                            | setBooksIsLoading
                            | resetBooks
                            | setBooksPage
                            | setTotalPages

