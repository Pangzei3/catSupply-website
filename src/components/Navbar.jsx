import styled from 'styled-components';
import {Search, ShoppingCart} from '@material-ui/icons';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { Badge } from '@material-ui/core';
import logoo from '../images/Logoo.png';
import {useState} from 'react';
import Dropdown from './Dropdown';

const Container = styled.div`
    width: 100%;
    height: 70px;
    background-color: blue;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 390px;
`
const LogoContainer = styled.div`
    flex:1;
`
const Logo = styled.img`
    width: 150px;
    height: 50px;
    margin-left: 2rem;
    cursor: pointer;
    @media (max-width: 550px) {
        margin-left: 0;
    }
`
const SearchContainer = styled.div`
    border: 1.5px solid lightgray;
    display: flex;
    align-items: center;
    padding: 3px;
    border-radius: 8px;
    width: 40%;
    background-color: white;
`
const Input = styled.input`
    width: 95%;
    border: none;
    outline: none;
    font-size: 16px;
    padding-left: 8px;
`
const CartContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    margin-right: 3rem;
    @media (max-width: 550px) {
        margin-right: 0;
        justify-content: center
    }
`
const Menu = styled.ul`
     display: flex;
     justify-content:space-between;
     align-items: center;
     list-style: none;
     font-size: 22px;
     font-weight: bold;
     width: 480px;
     margin-left: 2rem;
     @media (max-width: 555px) {
        font-size: 16px;
        width: 370px;
        margin-left: 0rem;
     }
`
const MenuItem = styled.li`
    padding: 21px 10px;
    cursor: pointer;
    &:hover {
        background-color: #2d2df8;
    }
    @media (max-width: 555px) {
        padding: 21px 5px;
     }
`
const Deal = styled.p`
    color: yellow;
    line-height: 70px;
    margin-right: 2rem;
    font-size: 22px;
    font-weight: bold;
    @media (max-width: 900px) {
        display: none;
    }
`
const Navbar = ({setShow, amount}) => {
    const [foodDrop, setFoodDrop] = useState(false);
    const [litterDrop, setLitterDrop] = useState(false);
    const [supplyDrop, setSupplyDrop] = useState(false);
    
    const onMouseEnterF = () => {
        setFoodDrop(true)
    }
    const onMouseEnterL = () => {
        setLitterDrop(true)
    }
    const onMouseEnterS = () => {
        setSupplyDrop(true)
    }
    const onMouseLeaveF = () => {
        setFoodDrop(false)
    }
    const onMouseLeaveL = () => {
        setLitterDrop(false)
    }
    const onMouseLeaveS = () => {
        setSupplyDrop(false)
    }
  return (
    <>
        <Container>
            <LogoContainer>
                <Logo src={logoo} onClick={() => setShow(true)}></Logo>
            </LogoContainer>
            <SearchContainer>
                <Input />
                <Search style={{color: "black"}}/>
            </SearchContainer>
            <CartContainer onClick={()=> setShow(false)}>
                <Badge badgeContent={amount} color="secondary" style={{cursor: "pointer"}}>
                    <ShoppingCart style={{fontSize: "35"}}/>
                </Badge>
            </CartContainer>
        </Container>
        <Container>
            <Menu>
                <MenuItem onMouseEnter={onMouseEnterF} onMouseLeave={onMouseLeaveF}>
                    Food
                    {foodDrop && <Dropdown label="food" />}
                <KeyboardArrowDownIcon/></MenuItem>
                <MenuItem onMouseEnter={onMouseEnterL} onMouseLeave={onMouseLeaveL}>
                    Litter&Accessories
                    {litterDrop && <Dropdown label="litter"/>}
                <KeyboardArrowDownIcon/></MenuItem>
                <MenuItem onMouseEnter={onMouseEnterS} onMouseLeave={onMouseLeaveS}>
                    Supplies
                    {supplyDrop && <Dropdown label="supply"/>}
                <KeyboardArrowDownIcon/></MenuItem>
            </Menu>
            <Deal>
                Free 1 - 3 day shipping over $49
            </Deal>
        </Container>
    </>
  )
}

export default Navbar