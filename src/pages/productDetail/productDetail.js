import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Typography, Grid, FormControl, InputLabel, Select, MenuItem, TextField, Button, FormHelperText } from '@mui/material'
import ImageCarousel from '../../components/carousel/carousel'
import { AddShoppingCart } from '@mui/icons-material'

const ProductDetail = () => {

    const { products } = useSelector((state) => state.products)
    const dispatch = useDispatch()
    const { id } = useParams()
    const [itemDetail, setItemDetail] = useState({})
    const [isValid, setIsValid] = useState({
        variant: false,
        qty: false
    })
    const [cart, setCart] = useState({
        variant: '',
        qty: ''
    })
    const [isAddToCart, setIsAddToCart] = useState(false)

    useEffect(() => {
        if (products) {
            setItemDetail(products.find(item => item.id === id))
        }
    }, [products, id])

    useEffect(() => {
        if (Object.keys(itemDetail).length > 0) {
            setCart({
                ...cart,
                name: itemDetail.name,
                price: itemDetail.price,
                image: itemDetail.images[0]
            })
        }
    }, [itemDetail])

    const handleChange = (e) => {
        setCart({ ...cart, variant: e.target.value })
    }

    const handleInputChange = (e) => {
        setCart({
            ...cart,
            qty: e.target.value,
            totalPrice: `${parseInt(e.target.value) * parseInt(itemDetail.price)}`
        })
    }

    const handleAddToCart = () => {
        if (!cart.variant && !cart.qty) {
            setIsValid({ ...isValid, variant: true, qty: true })
        } else if (!cart.qty) {
            setIsValid({ ...isValid, qty: true, variant: false })
        } else if (!cart.variant) {
            setIsValid({ ...isValid, variant: true, qty: false })
        }

        if (cart.variant && cart.qty && itemDetail.is_variant === '1') {
            setIsValid({ ...isValid, variant: false, qty: false })
            setIsAddToCart(true)
            return
        }

        if (cart.qty && itemDetail.is_variant === '0') {
            setIsValid({ ...isValid, variant: false, qty: false })
            setIsAddToCart(true)
            return
        }

        console.log('error add to cart')
    }

    useEffect(() => {
        if (isAddToCart) {
            console.log(cart)
            dispatch({ type: 'ADD_CARTS_SUCCESS', payload: cart })
            setIsAddToCart(false)
        }
    }, [dispatch, isAddToCart])

    return (
        <Container style={{ marginTop: '40px' }}>
            <Grid container spacing={2}>
                <Grid item lg={6} xs={12}>
                    <ImageCarousel images={itemDetail.images} />
                </Grid>
                <Grid item lg={6} xs={12}
                    style={{
                        padding: '20px 100px'
                    }}
                >
                    <Typography variant='subtitle2'
                        style={{
                            fontWeight: 600,
                            color: 'gray'
                        }}
                    >
                        {itemDetail.category}
                    </Typography>
                    <Typography variant='h5'
                        style={{
                            fontWeight: 600
                        }}
                    >
                        {itemDetail.name}
                    </Typography>
                    <hr />
                    <Typography variant='h6' color='textPrimary'
                        style={{
                            fontWeight: 600,
                            color: '#e50a37'
                        }}
                    >
                        Rp. {parseInt(itemDetail.price).toLocaleString()}
                    </Typography>
                    <pre
                        style={{
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: 500
                        }}
                    >
                        {itemDetail.description}
                    </pre>
                    <hr />
                    <div
                        style={{
                            display: 'flex',
                            gap: 20,
                            marginTop: '20px',
                            marginBottom: '20px'
                        }}
                    >
                        {itemDetail.is_variant === '1' &&
                            <FormControl
                                style={{
                                    width: '200px'
                                }}
                                size='small'
                            >
                                <InputLabel id="demo-simple-select-label">
                                    {itemDetail.variant_groups[0].name}
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={cart.variant}
                                    label={itemDetail.variant_groups[0].name}
                                    onChange={handleChange}
                                >
                                    {(itemDetail.variant_groups[0].variants).map(variant => {
                                        return (
                                            <MenuItem key={variant.id} value={variant.name}>{variant.name}</MenuItem>
                                        )
                                    })}
                                </Select>
                                {isValid.variant &&
                                    <FormHelperText
                                        style={{
                                            color: '#ba000d'
                                        }}
                                    >
                                        Please add quantity!
                                    </FormHelperText>
                                }
                            </FormControl>
                        }
                        <TextField
                            size='small'
                            id="outlined-basic"
                            label="Quantity"
                            variant="outlined"
                            defaultValue='0'
                            style={{
                                width: '150px'
                            }}
                            onChange={handleInputChange}
                            error={isValid.qty ? true : false}
                            helperText={isValid.qty ? 'Select a variant!' : ''}
                        />
                    </div>
                    <hr />
                    <Button variant="contained"
                        style={{
                            marginTop: '10px'
                        }}
                        onClick={handleAddToCart}
                    >
                        <AddShoppingCart
                            style={{
                                marginRight: '7px'
                            }}
                        />
                        add to cart
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ProductDetail