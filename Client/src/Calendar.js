import { styled } from "styled-components";
import CalendarHeader from "./CalendarHeader";
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";


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

    const navigate = useNavigate()

 
    const firstDay = new Date(`${month}/${year}`);
    const firstDayName = days[firstDay.getDay()];

    // console.log(firstDayName)

    const monthfirstdate = (y, m) => {
        return new Date(y, m + 1, 1).getDate();
    }

    const monthlastdate = (y, m) => {
        return new Date(y, m + 1, 0).getDate();
    }

    const lastDay = new Date(`${month}/${monthlastdate(year, months.indexOf(month))}/${year}`);
    const lastDayName = days[lastDay.getDay()];

    // console.log(lastDayName)

    const daysInMonthFunction = () => {

        const numberDaysInPreviousMonth = days.indexOf(firstDayName)
        const Nprevious = (monthlastdate(year, (months.indexOf(month) - 1)))
        // console.log(Nprevious)
        const daysInMonthPrevious = Array.from(Array(Nprevious), (_, index) => index + 1)
        const daysDisplayedFromPreviousMonth = daysInMonthPrevious.slice(Nprevious-numberDaysInPreviousMonth)
        // console.log(daysDisplayedFromPreviousMonth)

        const N = (monthlastdate(year, months.indexOf(month)))
        const daysInMonth = Array.from(Array(N), (_, index) => index + 1)
        // console.log(daysInMonth)

        const numberDaysInNextMonth = (days.length - days.indexOf(lastDayName) - 1 )
        // console.log(days.length-days.indexOf(lastDayName)-1)
        const Nnext = (monthlastdate(year, (months.indexOf(month) + 1)))
        const daysInMonthNext = Array.from(Array(Nnext), (_, index) => index + 1)
        const daysDisplayedFromNextMonth = daysInMonthNext.slice(0, numberDaysInNextMonth)
        // console.log(daysDisplayedFromNextMonth)
        
        const daysDisplayedFromNextMonth2 = daysInMonthNext.slice(0, (numberDaysInNextMonth+ (42 - (daysDisplayedFromPreviousMonth.length + daysInMonth.length +daysDisplayedFromNextMonth.length))))


            const newMonthLayout = [...daysDisplayedFromPreviousMonth, ...daysInMonth, ...daysDisplayedFromNextMonth2]
            return newMonthLayout

    }

    // console.log(daysInMonthFunction())


    // console.log(days.indexOf(firstDayName))


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

    console.log(month)

    const buttonFunction = (element, index) => {
        if(element-index > 15){
            if(month === "January"){
                navigate(`/Date?year=${year-1}&month=${months[11]}&date=${element}`)
            }
            else{
                navigate(`/Date?year=${year}&month=${months[months.indexOf(month)-1]}&date=${element}`)
            }
        }
        else if(index-element > 15){
            if(month === "December"){
                navigate(`/Date?year=${year+1}&month=${months[0]}&date=${element}`)
            }
            else{
                navigate(`/Date?year=${year}&month=${months[months.indexOf(month)+1]}&date=${element}`)
            }
        }        
        else{
            navigate(`/Date?year=${year}&month=${month}&date=${element}`)
        }
    }

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
                {daysInMonthFunction().map((element, index) => {
                return(
                    <>
                        <Box>
                            <Circle onClick={() => buttonFunction(element, index)}>{element}</Circle>
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
`

const DayOfWeek = styled.div`
font-size: 1.25rem;
font-weight: bold;
color: black;
border: 0.1rem solid black;
padding: 1rem;
width: 100px;
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
padding-bottom: 1.5rem;
`

const Box = styled.div`
border: 0.1rem solid black;
width: 100px;
font-size: 1rem;
color: black;
padding: 1rem;
overflow: hidden;
display: flex;
justify-content: end;

`


const Circle = styled.button`
font-size: 1rem;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
height: 2.25rem;
width: 2.25rem;
background-color: transparent;

&:hover{
    opacity: 0.5;
}
`


const Container1 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

`

const Header = styled.h1`
color: black;
font-size: 3.5rem;
width: 30rem;
display:flex;
align-items: center;
justify-content: center;
`

const Form = styled.form`
display: flex;
height: 100%;
justify-content: center;
align-items: center;
`

const Button = styled.button`
margin: 0 7rem;
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