import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import './LandingPage.css'
const LandingPage = () => {
  return (
    <>
        <LandingPageContainer>

            <ImageContainer >
                <img src="/img/landing.png" alt="" />
            </ImageContainer>

            <TextContainer>

                <HeadingText>
                    Imagine if <br></br>
                    <span> Snapchat </span> 
                    had <br></br>
                    events.
                </HeadingText>

                <SubHeadingText>
                    Easily host and share events with your friends across any social media.
                </SubHeadingText>

                <Link to='/create'className='create-link'>
                    <a> 🎉 Create My Event</a>
                </Link>

            </TextContainer>


        </LandingPageContainer>
    </>
  )
}

const LandingPageContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f4f2ff;
    display: flex;
`;

const ImageContainer = styled.div`
    width:40%;
    height: 90vh;
    margin-top: 5vh;
    margin-left: 8%;
    /* background-color: #000; */
    >img{
        height: 80%;
        margin-top: 10%;
        margin-left: 25%;
        border-radius: 25px;
        box-shadow: -10px 10px 20px #c9c8c8;
    }
`;

const TextContainer = styled.div`
    width:40%;
    height: 90vh;
    margin-top: 5vh;
    margin-left: 4%;
    /* background-color: #888585; */
`;

const HeadingText = styled.h1`
    color: #260057;
    margin-right: 10%;
    font-family: 'Poppins', sans-serif;
    font-size: 4rem;
    text-align: right;
    >span{
        color: #e00157;
    }
    line-height: 4rem;
    padding-top: 25%;
    
`;

const SubHeadingText = styled.h2`
    color: #260057;
    margin-right: 10%;
    margin-top: 4%;
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    font-weight: 300;
    text-align: right;

`;


export default LandingPage