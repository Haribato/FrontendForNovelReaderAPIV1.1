import { IUser } from '../models/IUser'
import $api from './axios'

export default class postsService {

    static async getPosts(book_id: number, page: number) {
        const response = await $api.get(`posts/${book_id}`, {
            params:{
                _page:page,
            }
        })
        return response
    }

    static async postPost(body: string, userId:number, bookId:number ) {
        const response = await $api.post(`posts`, {
            body,
            userId,
            bookId,
        })
        return response
    }
}