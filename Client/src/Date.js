import {useParams, useSearchParams} from "react-router-dom"
import {styled} from "styled-components"
import AddEventInfo from "./AddEventInfo"
import {useState} from "react"



const timeslots = [
    "08:00am",
    "09:00am",
    "10:00am",
    "11:00am",
    "12:00pm",
    "01:00pm",
    "02:00pm",
    "03:00pm",
    "04:00pm",
    "05:00pm",
    "06:00pm",
    "07:00pm",
]


const Date = () => {

    const [queryParameters] = useSearchParams()
    const [isSelected, setIsSelected] = useState(false)
    const [timeSelected, setTimeSelected] = useState("")


    const addEventOnTimeslot = (element) => {
        console.log(element)
        setIsSelected(true)
        setTimeSelected(element)
    }

    return (
        <>
            <DateSelected>{queryParameters.get("month")} {queryParameters.get("date")} {queryParameters.get("year")}</DateSelected>
            <TimeslotDiv>
            <Timeslots>
                {timeslots.map((element)=>{
                    return (
                        <>
                        <BoxDiv>
                        <Times>{element}</Times>
                        <Button onClick={(e)=>addEventOnTimeslot(element)}></Button>   
                        </BoxDiv>
                        </>
                    )
                })}
            </Timeslots>
            </TimeslotDiv>
            
            
                {isSelected && <AddEventInfo isSelected={isSelected} setIsSelected={setIsSelected} timeSelected={timeSelected} setTimeSelected={setTimeSelected}/>}
        </>
    )
}

export default Date


const DateSelected = styled.h1`
text-align: center;
`

const TimeslotDiv = styled.div`
display: flex;
margin-top: 5rem;
justify-content: center;
align-items: center;
`

const Timeslots = styled.ul`
display: grid;
grid-template-rows: auto auto auto auto auto auto;
grid-auto-flow: column;
width: 50em;
`

const Times = styled.li`
list-style: none;
margin-bottom: 3em;
`

const BoxDiv = styled.div`
display: flex;
`

const Button = styled.button`
width: 20em;
margin: 0.5rem 0 0 0.5rem;
`