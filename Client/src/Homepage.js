import { styled } from "styled-components"
import Calendar from "./Calendar"






const Homepage = () => {

    return (
        <>

        <Section>
            <Calendar />
        </Section>

        </>
    )
}


export default Homepage


const Section = styled.section`
box-sizing: border-box;
background-color: green;
display: flex;
justify-content: center;
align-items: center;
height: 107vh;
margin-top: -10rem;
`

