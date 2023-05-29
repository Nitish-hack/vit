import React from 'react';
import styled from 'styled-components';
import {AiOutlineUser,AiFillCalendar} from "react-icons/ai"

const Card = ({ title, date, description, users, category, image }) => {
  const calculateDaysLeft = () => {
    const eventDate = new Date(date);
    const currentDate = new Date();

    // Calculate the difference in milliseconds between the event date and current date
    const timeDifference = eventDate.getTime() - currentDate.getTime();

    // Convert milliseconds to days
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return daysLeft;
  };

  return (
    <CardContainer>
      <ImageContainer>
        <img src={image} alt='eventimage' />
      </ImageContainer>

      <ContentContainer>
        <h3>{title}</h3>
        <div className="stats">
          <div className='stats-item'><AiOutlineUser /> {users}</div>
        <div className='stats-item'><AiFillCalendar /> {calculateDaysLeft()} days left</div>
        </div>
        <Button>Apply now</Button>
      </ContentContainer>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  width: 350px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
 
  @media screen and (max-width:860px){
    width: 270px;
}

  @media screen and (max-width:670px){
    width: 45%;
}
@media screen and (max-width:500px){
    width: 70%;
}
`;

const ImageContainer = styled.div`
  img {
    width: 100%;
  }
`;

const ContentContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  .stats {
    display: flex;
    justify-content: space-between;
  }

  .stats-item {
   display:flex;
   align-items:center;
   column-gap:5px;
  }  

  @media screen and (max-width:670px){
    row-gap: 10px;

    h3{
      font-size:1rem;
    }
   .stats-item {
      font-size:.8rem;
    
    }
}
`;

const Button = styled.button`

  background-color: #c2fbd7;
  border-radius: 100px;
  box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,rgba(44, 187, 99, .15) 0 1px 2px,rgba(44, 187, 99, .15) 0 2px 4px,rgba(44, 187, 99, .15) 0 4px 8px,rgba(44, 187, 99, .15) 0 8px 16px,rgba(44, 187, 99, .15) 0 16px 32px;
  color: black;
  font-weight:bold;
  cursor: pointer;
  display: inline-block;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;


:hover {
  box-shadow: rgba(44,187,99,.35) 0 -25px 18px -14px inset,rgba(44,187,99,.25) 0 1px 2px,rgba(44,187,99,.25) 0 2px 4px,rgba(44,187,99,.25) 0 4px 8px,rgba(44,187,99,.25) 0 8px 16px,rgba(44,187,99,.25) 0 16px 32px;
  transform: scale(1.05) ;
}


`;
