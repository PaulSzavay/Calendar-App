import { styled } from "styled-components"


const Header = () => {

    return (
        <>
        <HeaderDiv>
            <Title>Calendar</Title>
        </HeaderDiv>
        
        </>
    )
}

export default Header

const HeaderDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: blue;
position: fixed;
margin: 0;
width: 100vw;
`

const Title = styled.h1`
`