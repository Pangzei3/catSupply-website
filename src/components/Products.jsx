import React from 'react'
import styled from "styled-components"
import Product from './Product'
import { products } from '../data'

const Container = styled.div`
    padding: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px
`

const Products = ({handleAdd}) => {
  return (
    <Container>
        {products.map((item) => (
            <Product item={item} key={item.id} handleAdd={handleAdd}/>
        ))}
    </Container>
  )
}

export default Products