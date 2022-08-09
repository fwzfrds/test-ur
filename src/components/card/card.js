import React, { useEffect } from 'react'
import { Container, AppBar, Button, Card, CardContent, CardMedia, CardActions, Toolbar, CssBaseline, Typography, Box, Pagination, Grid, CircularProgress } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import getImgUrl from '../../helper/getImgUrl'

const CardItem = ({ item }) => {

    const navigate = useNavigate()

    const handleSeeDetail = (id) => {
        navigate(`/product/detail/${id}`)
    }

    return (
        <>
            <Grid item xs={12} sm={6} md={3}
                sx={{
                    cursor: 'pointer'
                }}
            >
                <Card
                    style={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                    onClick={() => handleSeeDetail(item.id)}
                >
                    <CardMedia
                        component='img'
                        styles={{
                            paddingTop: '56.25%' // 16:9
                        }}
                        image={item.image ? `${getImgUrl(item.image)}` : 'https://fakeimg.pl/350x200/?text=Hello'}
                        alt={item.name}
                    />
                    <CardContent styles={{
                        flexGrow: 1
                    }}>
                        <Typography gutterBottom variant='h6'>
                            {item.name}
                        </Typography>
                        <Typography>
                            This is a media card. You can use this section to describe the content
                        </Typography>
                    </CardContent>
                    {/* <CardActions>
                        <Button size='small' color='primary'>
                            View
                        </Button>
                        <Button size='small' color='primary'>
                            Edit
                        </Button>
                    </CardActions> */}
                </Card>
            </Grid>
        </>
    )
}

export default CardItem