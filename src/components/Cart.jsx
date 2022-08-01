import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const Container = styled.article`
    width: 60%;
    min-height: 70vh;
    margin: auto;
    @media (max-width: 900px) {
        width: 100%;
    }
`
const CardBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    border-bottom: 2px solid skyblue;
    padding-bottom: 10px;
`
const Left = styled.div`
    display: flex;
    height: 80px;
`
const Image = styled.img`
    width: 80px;
    height: 80px;
`
const Name = styled.p`
    font-weight: bold;
    margin-left: 20px;
    line-height: 80px;
    font-size: 18px;
`
const Right = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 275px;
`
const Quantity = styled.div`
    width: 85px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const QuantityButton = styled.button`
    padding: 5px 10px;
    border-radius: 5px;
    font-weight: bold;
    font-size: 16px;
    background-color: skyblue;
    cursor: pointer;
`
const Info = styled.p``
const Remove = styled.button`
    padding: 8px 16px;
    font-weight: bold;
    background-color: #ee7e7e;
    border-radius: 5px;
    cursor: pointer
`
const TotalPrice = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 25px auto;
`
const TotalInfo = styled.p`
    font-size: 24px;
    font-weight: bold;
`
const Checkout = styled.button`
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 600;
    background-color: #f71e1e;
    cursor: pointer;
`

const Cart = ({cart, setCart, handleCartChange}) => {
    const [totalPrice, setTotalPrice] = useState(0);

    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
        handlePrice()
    }

    const handlePrice = () => {
        let total =0;
        cart.map((item) => (total += item.amount * item.price.slice(1,item.price.length-1)));
        setTotalPrice(total.toFixed(2))
    }

    useEffect(() => {
        handlePrice();
    })

  return (
    <Container>
        {cart.map((item) => (
            <CardBox key={item.id}>
                <Left>
                    <Image src={item.img} />
                    <Name>{item.name}</Name>
                </Left>
                <Right>
                    <Quantity>
                        <QuantityButton onClick={() => handleCartChange(item, 1)}>+</QuantityButton>
                        <Info>{item.amount}</Info>
                        <QuantityButton onClick={() => handleCartChange(item, -1)}>-</QuantityButton>
                    </Quantity>
                    <Info>{item.price}</Info>
                    <Remove onClick={() => handleRemove(item.id)}>Remove</Remove>
                </Right>
            </CardBox>
        ))}
        <TotalPrice>
            <TotalInfo>Subtotal</TotalInfo>
            <TotalInfo>$ {totalPrice}</TotalInfo>
            <Checkout>Checkout</Checkout>
        </TotalPrice>
    </Container>
  )
}

export default Cart