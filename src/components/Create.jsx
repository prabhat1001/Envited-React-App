import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './Create.css'

const Create = () => {
  return (
    <EventContainer>
      <FormContainer>
        <Heading> Create your event </Heading>
        <Form>
          <Title> 🎉 My event is called </Title><br></br>
          <Input type="text" /><br></br>
          <Title> 🗓️ It starts at </Title><br></br>
          <Input type="datetime-local"  /> <br></br>
          <Title> 🏁 It ends at </Title><br></br>
          <Input type="datetime-local"  /> <br></br>
          <Title> 📍 It's happening at <span> (optional) </span> </Title><br></br>
          <Input type="text"  /> <br></br>
          <Title> 🔗 Add a URL link <span> (optional) </span> </Title><br></br>
          <Input type="text"  /> <br></br>
          <Title> ✏️ Description <span> (optional) </span> </Title><br></br>
          <Input type="text"  /> <br></br>
          {/* <Button type='image'> Create Event </Button> */}

          <Link to='/event'className='create-link'>
                    <Button> Next 🎉 </Button>
          </Link>

        </Form>
      </FormContainer>
      <ImageContainer>
        <Alternate>
          <label htmlFor='imgs'><img src="./img/Camera.png" alt="img" /></label>
        </Alternate>
         <FileInput id="imgs" type="file"></FileInput>
      </ImageContainer>
    </EventContainer>
  )
}

const FileInput = styled.input`
  margin-top: 45%;
  margin-left: 40%;
  display: none;
`;


const Alternate = styled.div`
  width: 20%;
  height: 20%;
  margin-top: 35%;
  margin-left: 40%;
  /* background-color: black; */
  img{
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.h4`
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #30234e;
  margin-left: 2%;
  margin-top: 2%;
  margin-bottom: -2%;
  span{
    color: #868686;
    font-weight: 300;
  }
`;

const EventContainer = styled.div`
  display: flex;
`;

const FormContainer = styled.div`
  /* background-color: #cecece; */
  width: 50%;
  height: 110vh;
  margin-top: 5vh;
  margin-left: 5%;
  margin-bottom: 5%;
`;

const Heading = styled.h1`
  font-size: 3.5rem;
  color: #260057;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  margin-left: 2%;

`;

const ImageContainer = styled.div`
  background-color: #260057;
  width: 40%;
  height: 80vh;
  margin-top: 20vh;
  margin-left: 2%;
  background-image: url('./img/photo.png');
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;

`;

const Form = styled.form``;

const Input = styled.input`
  width: 80%;
  height: 8vh;
  margin-left: 2%;
  margin-top: 1%;
  border: none;
  outline: none;
  border-radius: 10px;
  padding-left: 2%;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 300;
  color: #000;
  background-color: #f0f0f0;
`;

// const Button = styled.button`
//   width: 80%;
//   height: 8vh;
//   margin-left: 2%;
//   margin-top: 5%;
//   margin-bottom: 5vh;
//   border: none;
//   outline: none;
//   border-radius: 10px;
//   padding-left: 2%;
//   font-family: 'Poppins', sans-serif;
//   font-size: 1.5rem;
//   font-weight: 400;
//   color: #fff;
//   background-image: linear-gradient(to right, #b700ff , #f700ff);
// `;

const Button = styled.div`
    background-image: linear-gradient(to right, #b700ff , #f700ff);
    margin-left: 12%;
    margin-top: 5%;
    padding: 2% 8%;
    width: 60%;
    font-family: 'Poppins', sans-serif;
    color: white;
    text-align: center;
    font-size: 1.2rem;
    border-radius: 10px;
    box-shadow: 5px 5px 10px #a5a4a4;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover{
        transform: scale(1.12);
    }

`;

export default Create