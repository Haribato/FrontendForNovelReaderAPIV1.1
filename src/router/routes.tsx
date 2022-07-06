import React from "react";

import { MainPage } from "../pages/MainPage/MainPage";
// import { PostsPage } from "../pages/PostsPage/PostsPage";
import {BooksPage} from "../pages/BooksPage/booksPage"
import {NotFound} from "../pages/NotFound/notFoundPage";


interface IRoute {
    path: routeNames,
    element: React.ReactNode
}

export enum routeNames {
    POSTS = 'posts/new_posts',
    MAIN = '/',
    REGISTER = 'register/',
    LOGIN = 'login/',
    NOTFOUND = '*',

}

export const publicRoutes: IRoute[] = [
    // {
    //     path: routeNames.POSTS,
    //     element: <PostsPage />
    // },
    {
        path: routeNames.MAIN,
        element: <BooksPage />
    },
    {
        path: routeNames.NOTFOUND,
        element: <NotFound/>
    },
    {
        path: routeNames.LOGIN,
        element:<></>
    },
    {
        path: routeNames.REGISTER,
        element:<></>
    },
]

export const privateRoutes: IRoute[] = [
    // {
    //     path: routeNames.POSTS,
    //     element: <PostsPage />
    // },
    {
        path: routeNames.MAIN,
        element: <BooksPage />
    },
    {
        path: routeNames.NOTFOUND,
        element: <NotFound/>
    },
]