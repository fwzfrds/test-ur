import React, { useState } from 'react'
import { Grid } from '@mui/material'
import CardItem from '../card/card'

const Cards = ({ products }) => {

    return (
        <>
            <Grid container spacing={2}>
                {products.length > 0 ? products.map((item, idx) => {
                    return (
                        <CardItem item={item} key={idx} />
                    )
                })
                    :
                    'loading...'
                }
            </Grid>
        </>
    )
}

export default Cards