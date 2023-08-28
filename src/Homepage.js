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
background-color: green;
height: 100vh;
`