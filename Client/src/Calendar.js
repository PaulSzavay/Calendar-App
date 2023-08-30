import { styled } from "styled-components";
import CalendarHeader from "./CalendarHeader";
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
import { useEffect, useState } from "react";


const days = [
    "Sunday", 
    "Monday", 
    "Tuesday", 
    "Wednesday", 
    "Thursday", 
    "Friday", 
    "Saturday"
];

const dates = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35]

const Calendar = () => {

    const months = [
        "January",
        "Febuary",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];


    const today = new Date()

    const [month, setMonth] = useState(months[today.getMonth()])

    const [year, setYear] = useState(today.getFullYear())
 
    const firstDay = new Date(`${month}/${year}`);
    const dayName = days[firstDay.getDay()];

    console.log(dayName)

    const monthfirstdate = (y, m) => {
        return new Date(y, m + 1, 1).getDate();
    }

    const monthlastdate = (y, m) => {
        return new Date(y, m + 1, 0).getDate();
    }

    console.log(monthlastdate(year, months.indexOf(month)))


    // var firstDay1 = new Date(year, month, 1);
    // var lastDay1 = new Date(year, month + 1, 0);

    // console.log(lastDay1, firstDay1)

    const changeDateFunctionLeft = (event) => {
        event.preventDefault();
        setMonth(months[months.indexOf(month)-1])
        if(month === "January"){
            setMonth(months[11])
            setYear(year-1)
        }
    }

    const changeDateFunctionRight = (event) => {
        event.preventDefault();
        setMonth(months[months.indexOf(month)+1])
        if(month === "December"){
            setMonth(months[0])
            setYear(year+1)
        }
    }

    const number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]

    console.log(days.indexOf(dayName))

    console.log(number)
    console.log(firstDay)
    console.log(dayName)
    console.log(days.indexOf(dayName))

    console.log(monthfirstdate(year, months.indexOf(month)))
    console.log(monthlastdate(year, months.indexOf(month)))

    const daysInTheMonth = []

    

    // const dateOnCalender = () => {
    //     if(number[index-(days.indexOf(dayName))] - (monthlastdate(year, months.indexOf(month))) + (monthlastdate(year, months.indexOf(month))) < 0)
    //     return number[index-(days.indexOf(dayName))] - (monthlastdate(year, months.indexOf(month))) + (monthlastdate(year, months.indexOf(month)))
    //     else{
    //         return null
    //     }
    // }

    return (
        <>

        <CalendarDiv>

        <Container1>
            <Form>
                <Button onClick={changeDateFunctionLeft}> <BsArrowLeftCircle/> </Button>
                    <Header>{month} - {year}</Header>
                <Button onClick={changeDateFunctionRight}> <BsArrowRightCircle/> </Button>
            </Form>
        </Container1>

        <Container>
            {days.map(element => {
                return(
                    <>
                    <Top>
                        <DayOfWeek>{element}</DayOfWeek>
                    </Top>

                    
                    </>
                )
            })}
        </Container>
    <DatesContainer>
            <Dates>
                <Grid>
                {dates.map((element, index) => {
                return(
                    <>
                        <Box>
                            <Circle>{}</Circle>
                        </Box>
                    </>
                )
            })}
                </Grid>
            </Dates>
        </DatesContainer>

        </CalendarDiv>
        
        </>
    )
}


export default Calendar

const CalendarDiv = styled.div`
margin-top: 10rem;
padding: 0.5rem 1.5rem 1.5rem 1.5rem;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
border: 0.5rem solid black;
background-color: orange;

`


const Container = styled.div`
box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    /* padding-top: 8rem; */
`

const DayOfWeek = styled.div`
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
padding: 1rem;
`

const Box = styled.div`
border: 0.1rem solid black;
width: 125px;
font-size: 2rem;
color: black;
padding: 2rem;
overflow: hidden;
display: flex;
justify-content: end;

`


const Circle = styled.button`
border-radius: 50%;
height: 3rem;
width: 3rem;
background-color: transparent;

&:hover{
    opacity: 0.5;
}
`


const Container1 = styled.div`
    /* display: flex;
    flex-direction: row;
    justify-content: center; */

`

const Header = styled.h1`
color: black;
font-size: 3.5rem;
`

const Form = styled.form`
display: flex;
height: 100%;
justify-content: center;
align-items: center;
`

const Button = styled.button`
margin: 0 10rem;
display: flex;
font-size: 3.5rem; 
color: black;
height: 3rem;
justify-content: center;
align-items: center;
background-color: transparent;
border: none;
cursor: pointer;

&:hover{
    color:honeydew
}
`