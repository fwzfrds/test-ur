import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Typography } from '@mui/material'
import Cards from '../../components/cards/cards'
import Paginate from '../../components/pagination/pagination'

const Main = () => {

  const { products } = useSelector((state) => state.products)

  return (
    <div>
      <Typography variant='h4' align='center' gutterBottom style={{ marginTop: '30px' }}>
        Product List Page
      </Typography>
      <main>
        <Container
          maxWidth='lg'
          style={{
            marginTop: '20px'
          }}
        >
          <Cards products={products} />
        </Container>
        <Paginate />
      </main>
    </div>
  )
}

export default Main