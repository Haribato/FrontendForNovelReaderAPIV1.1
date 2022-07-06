import $api from "./axios/index"
import {IPagedBooks} from "../models/Response/IPagedBooks";


export default class BooksService {
    static async getBooks(page:number){
        const response  = await $api.get<IPagedBooks>(`books/?page=${page}`)
        return response
    }

    static async getBookDetail(bookId:number){
        const response = await $api.get(`books/${bookId}`)

        return response
    }
}
