import React  from 'react';
import heroimg from '../assets/images/hero.jpg'
import '../assets/css/HomePage.css';
import styled from "styled-components"
import {  useNavigate } from 'react-router-dom';
import aboutImg from "../assets/images/about.jpg" 

const HomePage = () => {
    const navigate=useNavigate();
    const handleClick=()=>{
     navigate("/events")
    }
    return (
        <>
            <section id="home">
                <div className="info">
                    <div className="container">
                        <h1>VITcompanion</h1>
                        <p >Discover, Explore, and Experience VIT's Vibrant Event Scene. Uncover a world of knowledge, creativity, and connections right here on campus. From captivating talks to exhilarating competitions, our platform brings you a curated list of upcoming events that match your interests.</p>
                        <div className="signUpSection">
                       <Button onClick={handleClick}>
                           Explore
                           </Button>
                        
                        </div>

                        
                    </div>
                </div>
                <div className="hero">
                    <img className='heroImage' src={heroimg} alt="famerpng" />
                </div>
            </section>
         
            <div className='about-section' >
            <div className='imageContainer'>
        <img src={aboutImg} alt="about image" />
            </div>
            <div className='about-content'>
            <h2 >About Us</h2>
            <p> At VITcompanion, we strive to enhance your campus experience by providing a user-friendly platform to discover and explore the diverse range of events happening on the VIT campus. Whether you're looking for informative workshops, thrilling competitions, captivating performances, or networking opportunities, we've got you covered.</p>
   
<p>Our mission is to connect VITians with the vibrant event ecosystem on campus, making it easier for you to stay informed and actively participate in events that align with your interests and passions. We believe that attending events is not only a great way to expand your knowledge and skills but also an opportunity to meet like-minded individuals and forge meaningful connections.</p>
            </div>
            </div>
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

