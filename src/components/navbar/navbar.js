import React, { useState, useEffect } from 'react'
import { AppBar, Toolbar, Typography, Container, IconButton, Badge } from '@mui/material'
import { LocalMall, ShoppingCart } from '@mui/icons-material'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const { carts } = useSelector((state) => state.carts)
    const navigate = useNavigate()
    const [cartLength, setCartLength] = useState(0)

    useEffect(() => {
        if (carts.length > 0) {
            setCartLength(carts.length)
        }
    }, [])

    const handleNavToHome = () => {
        navigate('/')
    }

    const handleNavToCart = () => {
        navigate('/cart')
    }

    return (
        <>
            <AppBar position='sticky'>
                <Toolbar>
                    <Container
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: 10
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 10,
                                cursor: 'pointer'
                            }}
                            onClick={handleNavToHome}
                        >
                            <LocalMall />
                            <Typography variant='h6'>
                                E-commerce
                            </Typography>
                        </div>
                        <div>
                            <IconButton aria-label="shopping cart"
                                onClick={handleNavToCart}
                            >
                                <Badge badgeContent={cartLength} color="error">
                                    <ShoppingCart
                                        style={{
                                            color: '#FFFFFF'
                                        }}
                                    />
                                </Badge>
                            </IconButton>
                        </div>
                    </Container>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar