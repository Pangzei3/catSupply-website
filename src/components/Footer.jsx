import React from 'react'
import styled from 'styled-components'
import {
    Facebook,
    Instagram,
    Pinterest,
    Twitter,
  } from "@material-ui/icons";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    scroll-padding-bottom: 20px;
`
const Logo = styled.h1``
const Desc = styled.p`
    margin: 20px 0;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
`

function Footer() {
  return (
    <Container>
        <Logo>Meow-Miao Online Shop</Logo>
        <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Desc>
        <SocialContainer>
            <SocialIcon color="3B5999">
                <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
                <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
                <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
                <Pinterest />
            </SocialIcon>
        </SocialContainer>
    </Container>
  )
}

export default Footer