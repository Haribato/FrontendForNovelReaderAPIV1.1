import $api from './axios'

export default class commentService {

    static async getCommentsByPostId(_postId: number) {
        const response = await $api.get(`comments/${_postId}`)
        return response
    }

    static async postComment(body: string, userId:number, postId:number ){
        const response = await $api.post(`comments/`,{
            body,
            userId,
            postId,
        })
        return response
    }
}