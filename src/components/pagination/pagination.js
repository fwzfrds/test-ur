import React, { useEffect, useState } from 'react'
import { Box, Pagination } from '@mui/material'
import useFetch from '../../hooks/useFetch/usefetch'
import { useSelector } from 'react-redux'

const Paginate = () => {

    const pageSize = 8
    const [pagination, setPagination] = useState({
        count: 0,
        from: 0,
        to: pageSize
    })
    const { count } = useSelector((state) => state.products)

    useFetch(pagination)

    useEffect(() => {
        if (count) {
            setPagination({ ...pagination, count: count })
        }
    }, [count])

    const handlePageChange = (e, page) => {
        const from = (page - 1) * pageSize
        const to = (page - 1) * pageSize + pageSize

        setPagination({ ...pagination, from: from, to: to })
    }

    return (
        <Box justifyContent='center' alignItems='center' display='flex'
            sx={{
                margin: '20px 0px'
            }}
        >
            <Pagination
                color='primary'
                count={Math.ceil(pagination.count / pageSize)}
                onChange={handlePageChange}
            />
        </Box>
    )
}

export default Paginate