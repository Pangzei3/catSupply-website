import React from 'react'
import styled from 'styled-components'

const foodDropdown = ["Wet Food", "Dry Food", "Premium Food" ]
const litterDropdown = ["Litter", "Litter Box", "Litter Accessory"]
const supplyDropdown = ["Toys", "Beds", "Healthcare"]

const Container = styled.ul`
    background-color: blue;
    width: 200px;
    position: absolute;
    top: 140px;
    list-style: none;
    text-align: start;
    border-radius: 0px 0px 10px 10px;
    z-index: 999;
    
`
const Item = styled.li`
    padding: 16px;
    cursor: pointer;
    &:hover {
        background-color: #3e50f0
    }
`

const Dropdown = ({label}) => {
  return (
    <Container>
        {label==="food" && foodDropdown.map((item, index) => (
            <Item key={index}>
                {item}
            </Item>
        ))}
        {label==="litter" && litterDropdown.map((item, index) => (
            <Item key={index}>
                {item}
            </Item>
        ))}
        {label==="supply" && supplyDropdown.map((item, index) => (
            <Item key={index}>
                {item}
            </Item>
        ))}
    </Container>
  )
}

export default Dropdown