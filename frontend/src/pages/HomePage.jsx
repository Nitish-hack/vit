import React from 'react';
import heroimg from '../assets/images/hero.jpg'
import '../assets/css/HomePage.css';

const HomePage = () => {
    return (
        <>
            <section id="home">
                <div className="info">
                    <div className="container">
                        <h1>VITcompanion</h1>
                        <div className="intro">Lorem ipsum dolor sit amet Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga asperiores placeat deserunt minus dolor iste veritatis sed eum reiciendis perspiciatis. consectetur adipisicing elit. Reprehenderit ipsam quis labore mollitia similique maxime animi officia, velit nobis esse?</div>
                        <div className="signUpSection">
                            <button className="signUp">sign Up</button>
                            <button className="signIn">sign In</button>
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
