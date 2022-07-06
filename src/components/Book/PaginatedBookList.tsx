import React, { FC } from 'react'

import { animateScroll as scroll } from 'react-scroll'

import { useAction } from '../../hooks/useAction'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import { CustomPagination } from '../CustomPagination/CustomPagination'
import {BookList} from "./BookList";
import {Typography} from "@mui/material";

export const PaginatedBookList: FC = () => {

    const {books, total_pages, page, isLoading, error: error} = useTypeSelector(store => store.books)
    const {fetchBooks} = useAction()

    const [currentPage, setCurrentPage] = React.useState(page)

    React.useEffect(() => {
        fetchBooks(currentPage)
        scroll.scrollToTop()
    }, [currentPage])

    return (
        <>
        <BookList books={books}
                  isLoading={isLoading}
                  error={error}/>
            {
                !isLoading && books.length ? <CustomPagination  totalPages={total_pages}
                                                     currentPage={page}
                                                     onSetCurrentPage={setCurrentPage}
                /> :
                    <Typography align={'center'} variant="h4" color='white' component="div" marginTop={"35px"}>
                        Нічого не знайдено
                    </Typography>
            }
        </>
    )
}









