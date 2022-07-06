import {IRegisterUserRequest} from '../models/Request/IRegisterUserRequest'
import {ILoginUserRequest} from "../models/Request/ILoginUserRequest";
import {ILoginUserResponse} from "../models/Response/ILoginUserResponse";


import $api from './axios'

export default class AuthService {

    static async registerUser(registerUserModel:IRegisterUserRequest){
        const response = await $api.post(`register/`,
            {
                ...registerUserModel
            })
        return response
    }

    static async loginUser(loginUserModel:ILoginUserRequest){
        const response = await $api.post(`login/`,{
            ...loginUserModel
        })
        return response
    }
}