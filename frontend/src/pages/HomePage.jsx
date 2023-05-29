import React from 'react';
import heroimg from '../assets/images/hero.jpg'
import '../assets/css/HomePage.css';
import styled from "styled-components"
import {  useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate=useNavigate();
    return (
        <>
            <section id="home">
                <div className="info">
                    <div className="container">
                        <h1>VITcompanion</h1>
                        <p >Lorem ipsum dolor sit amet Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga asperiores placeat deserunt minus dolor iste veritatis sed eum reiciendis perspiciatis. consectetur adipisicing elit. Reprehenderit ipsam quis labore mollitia similique maxime animi officia, velit nobis esse?</p>
                        <div className="signUpSection">
                            <Button onClick={()=>navigate("/signup")}>
                            Login / Register
                           </Button>
                        
                        </div>

                        
                    </div>
                </div>
                <div className="hero">
                    <img className='heroImage' src={heroimg} alt="famerpng" />
                </div>
            </section>
        </>
    )
}

export default HomePage;


const Button =styled.button`

  font-size: 16px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 20px 13px;
  outline: 0;
  border: 2px solid black;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  font-weight:bolder;
  border-radius:10px;
  transition: 0.2s;

:after {
  content: "";
  background-color: rgb(123 234 164);
  width: 100%;
  border-radius:10px;
  z-index: -1;
  position: absolute;
  height: 100%;
  top: 7px;
  left: 7px;
  transition: 0.2s;
}
:hover{
    transform:scale(1.1);
}

:hover:after {
  top: 0px;
  left: 0px;
}



`

