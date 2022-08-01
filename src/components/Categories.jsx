import React from 'react'
import styled from "styled-components";
import {sliderItems} from "../data";
import CategoryItem from './CategoryItem'

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: center;
    flex-wrap: wrap
    
`
function Categories() {
  return (
    <Container>
        {sliderItems.slice(1,4).map(item => (
            <CategoryItem item={item} key={item.id} />
        ))}
    </Container>
  )
}

export default Categories