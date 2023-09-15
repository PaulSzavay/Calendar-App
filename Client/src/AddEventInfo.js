import { styled } from "styled-components";


const AddEventInfo = ({isSelected, setIsSelected, timeSelected, setTimeSelected}) => {

    console.log(isSelected)
    console.log(setIsSelected)
    console.log(timeSelected)

    const submitFunction = (event) => {
        event.preventDefault()
        setIsSelected(false)
        // console.log(time)
        // console.log(title)
        // console.log(description) NEED THIS FOR DATABASE
    }


    const selectTimeFunction = (event) => {
        event.preventDefault();
        console.log(event.target.value)
    }

    return (
        // add x to top right and add setIsSelected to off if clicked and/or any place on original page
        <>
        <FormDiv>
            <Form onSubmit={submitFunction}>
                <TitleLabel>Title</TitleLabel>
                <TitleInput></TitleInput>
                <TimeLabel>Time</TimeLabel>
                <EvenButton value={timeSelected} onClick={selectTimeFunction}>{timeSelected}</EvenButton><Min30Button value={timeSelected.replace(timeSelected.substring(3,5), "30")} onClick={selectTimeFunction}>{timeSelected.replace(timeSelected.substring(3,5), "30")}</Min30Button>
                <DescriptionLabel>Event Description</DescriptionLabel>
                <DescriptionInput type="text"></DescriptionInput>
                <Button>Save</Button> 
            </Form>
        </FormDiv>
        </>
    )
}

export default AddEventInfo

//transform translate

const FormDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
border-radius: 15px;
transform: translate(0rem, -28rem);
`

const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 2rem;
padding: 3rem;
width: 20rem;
background-color: lightgrey;
border-radius: 10%;
`

const TitleLabel = styled.label`

`

const DescriptionLabel = styled.label`

`

const TitleInput = styled.textarea`
width: 20rem;
height:1rem;
`

const DescriptionInput = styled.textarea`
width: 20rem;
height: 6rem;
display: flex;
justify-content: center;
align-items: center;
`


const Button = styled.button`
width: 20rem;
margin: 2rem;
`


const TimeLabel = styled.label`

`

const TimeInput = styled.textarea`
width: 20rem;
height:1rem;
`


const EvenButton = styled.button`

&:active{
    background-color:orange;
}
`


const Min30Button = styled.button`

&:active{
    background-color:orange;
}
`