import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    height: 35px;
    background-color: #53bbfb;
    color: #ead810;
    font-weight: 600;
    font-size: 18px;
    text-align: center;
    line-height: 35px;
`

function Deal() {
  return (
    <Container>
        Deal Today: Free 1-3 day shipping over $49! 
    </Container>
  )
}

export default Deal