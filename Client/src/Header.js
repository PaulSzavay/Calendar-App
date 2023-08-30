import { styled } from "styled-components"
import { Link } from "react-router-dom"


const Header = () => {

    return (
        <>
        <HeaderDiv>
            <Left>
            </Left>
            <Middle>
                <Title>Calendar</Title>
            </Middle>
            <Right>
            <UserInfo>
                <SignUp to="/SignUp">SignUp</SignUp>
            </UserInfo>
            </Right>
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
position: sticky;
margin: 0;
width: 100vw;
color: black;

`

const Title = styled.h1`
display: flex;
justify-content: center;
align-items: center;
`

const UserInfo = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const Left = styled.div`
width: 33%;

`

const Middle = styled.div`
width: 33%;

`

const Right = styled.div`
width: 33%;
display: flex;
justify-content: end;
font-weight: bold;
`

const SignUp = styled(Link)`
color:black;
text-decoration: none;
font-size: 2rem;
`