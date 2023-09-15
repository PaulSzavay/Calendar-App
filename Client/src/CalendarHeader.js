// import { styled } from "styled-components";
// import { BsArrowLeftCircle } from "react-icons/bs";
// import { BsArrowRightCircle } from "react-icons/bs";
// import { useEffect, useState } from "react";

//     const months = [
//         "January",
//         "Febuary",
//         "March",
//         "April",
//         "May",
//         "June",
//         "July",
//         "August",
//         "September",
//         "October",
//         "November",
//         "December"
//     ];

//     const days = [
//         "Sunday", 
//         "Monday", 
//         "Tuesday", 
//         "Wednesday", 
//         "Thursday", 
//         "Friday", 
//         "Saturday"
//     ];

//     const today = new Date()


// const CalendarHeader = () => {

//     const [month, setMonth] = useState(months[today.getMonth()])

//     const [year, setYear] = useState(today.getFullYear())
 
//     const firstDay = new Date(`${month}/01/${year}`);
//     const dayName = days[firstDay.getDay()];

//     console.log(dayName)


//     const changeDateFunctionLeft = (event) => {
//         event.preventDefault();
//         setMonth(months[months.indexOf(month)-1])
//         if(month === "January"){
//             setMonth(months[11])
//             setYear(year-1)
//         }
//     }

//     const changeDateFunctionRight = (event) => {
//         event.preventDefault();
//         setMonth(months[months.indexOf(month)+1])
//         if(month === "December"){
//             setMonth(months[0])
//             setYear(year+1)
//         }
//     }

//     return (
//         <>
//         <Container1>
//             <Form>
//                 <Button onClick={changeDateFunctionLeft}> <BsArrowLeftCircle/> </Button>
//                     <Header>{month} - {year}</Header>
//                 <Button onClick={changeDateFunctionRight}> <BsArrowRightCircle/> </Button>
//             </Form>
//         </Container1>



//         </>
//     )
// }

// export default CalendarHeader

// const Container1 = styled.div`
//     /* display: flex;
//     flex-direction: row;
//     justify-content: center; */

// `

// const Header = styled.h1`
// color: black;
// font-size: 3.5rem;
// `

// const Form = styled.form`
// display: flex;
// height: 100%;
// justify-content: center;
// align-items: center;
// `

// const Button = styled.button`
// margin: 0 10rem;
// display: flex;
// font-size: 3.5rem; 
// color: black;
// height: 3rem;
// justify-content: center;
// align-items: center;
// background-color: transparent;
// border: none;
// cursor: pointer;

// &:hover{
//     color:honeydew
// }
// `