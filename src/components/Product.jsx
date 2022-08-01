import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from "styled-components"


const InfoContainer = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.3);
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  transition: all 0.5s ease;
  cursor: pointer;
`
const Container = styled.div`
    margin: 5px;
    width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfb;
    position: relative;

    &:hover ${InfoContainer}{
    opacity: 1;
  }
`
const Image = styled.img`
  height: 60%;
  max-width: 100%;
  z-index: 2;
`
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`
const Title = styled.h3`
  color: white;
`
const Price = styled.p`
  margin-bottom: 10px;
  color: white;
`
const Product = ({item, handleAdd}) => {
  return (
    <Container>
      <Image src={item.img} />
      <InfoContainer>
        <Icon>
          <ShoppingCartOutlined onClick={() => handleAdd(item)}/>
        </Icon>
        <Title>{item.name}</Title>
        <Price>{item.price}</Price>
      </InfoContainer>
    </Container>
  )
}

export default Product