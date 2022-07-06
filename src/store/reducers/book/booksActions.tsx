import {
    booksActions,
    booksActionsType,
    resetBooks,
    setBooks,
    setBooksError,
    setBooksIsLoading,
    setBooksPage,
    setTotalPages
} from "./types"
import {IBook} from "../../../models/Response/IBook"
import {Dispatch} from "react";
import booksService from "../../../API/booksService"
import Dalay from "../../../utils/Dalay";

const setBooksAction = (books: IBook[]): setBooks => {
    return {
        type: booksActionsType.SET_BOOKS,
        payload: books
    }
}

const setIsLoadingAction = (isLoading: boolean): setBooksIsLoading => {
    return {
        type: booksActionsType.SET_IS_LOADING,
        payload: isLoading
    }
}

const resetBooksAction = (): resetBooks => {
    return {
        type: booksActionsType.RESET_BOOKS,
    }
}

const setErrorAction = (error: string): setBooksError => {
    return {
        type: booksActionsType.SET_ERROR,
        payload: error
    }
}

const setPageAction = (page: number): setBooksPage => {
    return {
        type: booksActionsType.SET_PAGE,
        payload: page
    }
}

const setTotalPagesAction = (pages: number): setTotalPages => {
    return {
        type: booksActionsType.SET_TOTAL_PAGES,
        payload: pages
    }
}

//Books Actions

export function  fetchBooks(page:number){
    return async (dispatch: Dispatch<booksActions>) => {
        try{
            dispatch(resetBooksAction())
            dispatch(setIsLoadingAction(true))
            const response = await booksService.getBooks(page)
            dispatch(setBooksAction(response.data.results))
            const paged_count = 50
            dispatch(setTotalPagesAction(Math.ceil(response.data.count/paged_count)))
            dispatch(setPageAction(page<=response.data.count?page:response.data.count))
            // await Dalay.wait(1)
        }
        catch(e){
            dispatch(setErrorAction((e as Error).toString()))
        }
        finally {
            dispatch(setIsLoadingAction(false))
        }
    }
}




