import React from 'react';
import styled from "styled-components";
import { Link  } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <MainContainer>
    <h2>Oops! Page not found.</h2>
    <h4>We can't fint the page you're looking for.</h4>
    <MainBtn type="button" >
        <Link  to="/">Go Back To Home Page</Link>
    </MainBtn>
    </MainContainer>
  )
}

export default ErrorPage


const MainContainer=styled.div`
height: 80vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column ;
row-gap:10px;
h2{
font-size:50px;
}

@media screen and (max-width:700px){
  h2{
    font-size:40px;
  }
}
@media screen and (max-width:500px){
  h2{
    font-size:30px;
  }
}

`

const MainBtn=styled.button`
background-color: rgb(123, 234, 164);
border-radius: 20px;
font-weight: bold;


padding:1.2% 10px;

&:hover{
  border: 1px solid rgb(123, 234, 164);
  background-color: white;
  scale: 1.2;
  font-weight: 600;
}

`


