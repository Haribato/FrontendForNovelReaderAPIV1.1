import {bookActions, bookActionType, setBook, setBookError, setBookId, setBookIsLoading} from './types'
import {IBookDetails} from "../../../models/Response/IBookDetailts";
import {Dispatch} from "react";
import booksService from '../../../API/booksService';


const setBookAction = (book: IBookDetails): setBook =>{
    return {
        type: bookActionType.SET_BOOK,
        payload:book
    }
}

const setIsLoadingAction = (isLoading: boolean) : setBookIsLoading => {
    return  {
        type: bookActionType.SET_IS_LOADING,
        payload: isLoading
    }
}

const setErrorAction = (error: string): setBookError => {
    return  {
        type:bookActionType.SET_ERROR,
        payload: error
    }
}

const setBookIdAction = (bookId: number) : setBookId => {
    return {
        type: bookActionType.SET_BOOK_ID,
        payload: bookId
    }
}



//Book Actions

export function fetchBookDetail(bookId:number) {
    return async (dispatch: Dispatch<bookActions>) => {
        try {
            dispatch(setIsLoadingAction(true))
            const response = await booksService.getBookDetail(bookId)
            dispatch(setBookAction(response.data))
        }catch(e) {
            dispatch(setErrorAction((e as Error).toString()))
        }finally {
            dispatch(setIsLoadingAction(false))
        }
    }
}



