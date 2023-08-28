import { styled } from "styled-components";


const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

const dates = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]

const Calendar = () => {


    return (
        <>
        
        <Container>

            {days.map(element => {
                return(
                    <>
                    <Top>
                        <Date>{element}</Date>
                    </Top>

                    
                    </>
                )
            })}

    </Container>
    <DatesContainer>
            <Dates>
                <Grid>
                {dates.map(element => {
                return(
                    <>

                        <Box>{element}</Box>


                    
                    </>
                )
            })}
                </Grid>
            </Dates>
        </DatesContainer>
        
        </>
    )
}


export default Calendar


const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 8rem;
`

const Date = styled.div`
font-size: 2rem;
color: black;
border: 0.1rem solid black;
padding: 2rem;
width: 125px;
display: flex;
justify-content: center;
align-items: center;
`

const DatesContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const Dates = styled.div`
display: flex;

`

const Top = styled.div`

`

const Grid = styled.div`
display: grid;
grid-template-columns: auto auto auto auto auto auto auto;

`

const Box = styled.div`
border: 0.1rem solid black;
width: 125px;
font-size: 2rem;
color: black;
padding: 2rem;
overflow: hidden;
`