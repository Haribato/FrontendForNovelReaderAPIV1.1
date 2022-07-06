import React, { FC } from 'react'

import {Container, Grid , Typography} from '@mui/material'
import {PaginatedBookList} from "../../components/Book/PaginatedBookList";


export const BooksPage: FC = () => {


    return (
        <>
            <Typography align={'center'} variant="h3" color='white' component="div" marginBottom={"25px"}>
                Остані дадані книги
            </Typography>

            <PaginatedBookList/>
        </>
    )
}

const style = {

}
