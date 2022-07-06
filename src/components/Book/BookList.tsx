import React, { FC } from 'react'

import { Loader } from '../Loader/Loader'

import { Grid } from '@mui/material'
import {IBook} from "../../models/Response/IBook";
import {Book} from "./Book";

interface IBookListProps {
    books: IBook[]
    isLoading?: boolean
    error?: null | string
}

export const BookList: FC<IBookListProps> = ({books, isLoading = false, error = null}) =>{

    

    return (
        <Grid container spacing={4}
              direction={"row"}
              >
            {
                isLoading ? <Loader/>:
                books.map((book) => {
                    return (
                        <Grid item key={book.id}>
                            <Book book={book}/>
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}

