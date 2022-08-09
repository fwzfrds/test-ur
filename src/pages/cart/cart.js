import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Container, Grid, Typography, Card, CardMedia, CardContent, Box } from '@mui/material'

const Cart = () => {

    const { carts } = useSelector((state) => state.carts)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        if (carts.length > 0) {
            let priceTotal = 0
            carts.forEach(item => {
                priceTotal = priceTotal + parseInt(item.totalPrice)
            })
            setTotal(priceTotal)
        }
    }, [carts])

    console.log(total)

    return (
        <Container
            style={{
                marginTop: '30px'
            }}
        >
            <Grid
                container
                spacing={2}
            >
                <Grid item lg={8}>
                    <Typography
                        variant='h6'
                        style={{
                            fontWeight: 600
                        }}
                    >
                        Cart List
                    </Typography>
                    <Container
                        maxWidth={false}
                        style={{
                            marginTop: '30px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 15
                        }}
                    >
                        {carts ? carts.map((item, idx) => {
                            return (
                                <Card
                                    key={idx}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 15
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 151 }}
                                        image={item.image ? item.image : 'https://fakeimg.pl/350x200/?text=Img'}
                                        alt="Live from space album cover"
                                    />
                                    <Box>
                                        <Typography
                                            style={{
                                                fontWeight: 600
                                            }}
                                        >
                                            <span
                                                style={{
                                                    display: 'inline-block',
                                                    width: '150px'
                                                }}
                                            >
                                                Name
                                            </span> : {item.name}
                                        </Typography>
                                        <Typography
                                            style={{
                                                fontWeight: 600,
                                                color: 'gray'
                                            }}
                                        >
                                            <span
                                                style={{
                                                    display: 'inline-block',
                                                    width: '150px',
                                                    color: 'black'
                                                }}
                                            >
                                                Variant
                                            </span> : {item.variant}
                                        </Typography>
                                        <Typography
                                            style={{
                                                fontWeight: 600,
                                                color: 'gray'
                                            }}
                                        >
                                            <span
                                                style={{
                                                    display: 'inline-block',
                                                    width: '150px',
                                                    color: 'black'
                                                }}
                                            >
                                                Quantity
                                            </span> : {item.qty}
                                        </Typography>
                                        <Typography
                                            style={{
                                                fontWeight: 600,
                                                color: '#e50a37'
                                            }}
                                        >
                                            <span
                                                style={{
                                                    display: 'inline-block',
                                                    width: '150px',
                                                    color: 'black'
                                                }}
                                            >
                                                Total
                                            </span> : Rp. {parseInt(item.totalPrice).toLocaleString()}
                                        </Typography>
                                    </Box>
                                </Card>
                            )
                        })
                            :
                            <Typography variant="h5">
                                Empty, lets go shopping!
                            </Typography>
                        }
                    </Container>
                </Grid>
                <Grid item lg={4}>
                    <Typography
                        variant='h6'
                        style={{
                            fontWeight: 600
                        }}
                    >
                        Total
                        <Box
                            style={{
                                marginTop: '30px'
                            }}
                        >
                            <Typography
                                style={{
                                    color: '#e50a37',
                                    fontWeight: 600
                                }}
                                variant='h6'
                            >
                                Rp. {total.toLocaleString()}
                            </Typography>
                        </Box>
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Cart