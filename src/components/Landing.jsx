import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import styled from 'styled-components'
import { sliderItems } from '../data'
import { useState } from "react";


const Container = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    background-color: lightyellow;
    position: relative;
    overflow: hidden;
    @media (max-width: 1000px) {
        height: 50vh;
    }
`
const Arrow = styled.div`
    width: 80px;
    height: 80px;
    background-color: #2d2df8;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 0.8;
    z-index: 999;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props=> props.slideIndex* -100}vw);
    transition: all 1.5s ease;
`
const Slide = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    width: 100vw;
    height: 80vh;
    background-color: #${props=>props.bg}
`
const ImgContainer = styled.div`
    height: 100%;
    display: flex;
    align-self: start;
    @media (max-width: 1000px) {
        height: 70%
    }
`
const Image = styled.img`
    height: 100%;
    width: 100%
`
const InfoContainer = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items:flex-start;
    padding: 20px;
    margin-bottom: 160px
`
const Title = styled.h1`
    font-size: 40px;
`
const Desc = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`
function Slider() {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {
        if(direction === "left") {
            setSlideIndex(slideIndex > 0? slideIndex-1 : 3)
        } else {
            setSlideIndex(slideIndex < 3? slideIndex+1 : 0)
        }
    }
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined style={{fontSize: 60}}/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item, index) => (
                <Slide bg={item.bg} key={index}>
                    <ImgContainer>
                        <Image src={item.img}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlined style={{fontSize: 60}}/>
        </Arrow>
    </Container>
  )
}

export default Slider