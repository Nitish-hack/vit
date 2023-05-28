import React from 'react';
import heroimg from '../assets/images/farmer.png'
import '../assets/css/HomePage.css';

export const HomePage = () => {
  return (
    <>
        <secyion id="home">
            <div className="info">
                <div className="container">
                    <h1>heyaa</h1>
                    <div className="intro">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quis labore mollitia similique maxime animi officia, velit nobis esse?</div>
                    <div className="signUpSection">
                        <button className="signUp">sign Up</button>
                        <button className="signIn">sign In</button>
                    </div>
                </div>
            </div>
            <div className="hero">
                <img className='heroImage' src={heroimg} alt="famerpng" />    
             </div>
        </secyion>
    </>
  )
}
