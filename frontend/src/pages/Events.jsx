import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import Card from "../components/Card"
import eventgif from "../assets/images/event.gif"
import loading from "../assets/images/loading.gif"
import { useEventContext } from '../context/eventcontext';
import { useFilterContext } from '../context/filter_context'

const Events = () => {
const [clickedButton,setClicked]=useState(0);
const {isLoading} =useEventContext();
const {filter_events,updateFilterValue}=useFilterContext();
// console.log(filter_events);


useEffect(() => {
 if(clickedButton===0){
  updateFilterValue({name:"category",value:"Technology"}) ;
 }
 else{
  updateFilterValue({name:"category",value:"others"}); 
 }
}, [clickedButton]);


  return (
    <EventContainer>
    <img src={eventgif} alt='heroevent' />
    <div className="categories">
      <Button style={{ background: clickedButton === 0 ? "#5dbea3" : "" }}  onClick={()=>{setClicked(0)}}>Technology</Button>
      <Button style={{ background: clickedButton === 1 ? "#5dbea3" : "" }} onClick={()=>{setClicked(1)}}>Others</Button>
    </div>
    {isLoading ?  <Wrapper><img style={{height:"300px",width:"350px"}} src={loading} alt='...loading'/> </Wrapper>: 
   <Wrapper>
   {filter_events.map((item,index)=>{
   return <Card key={index} image={item.image} title={item.title} date={item.date} users={8920} category={item.category} description={item.description} eventid={item._id} />
   })}
   </Wrapper>
    }
    </EventContainer>
  )
}

export default Events;

const Wrapper=styled.div`
display:flex;
padding-top:30px;
row-gap:30px;
column-gap:30px;
flex-wrap:wrap;
justify-content:center;


`
const EventContainer=styled.div`
width:100%;
img{
  width:100%;
}

.categories{
  margin:20px 0;
  width:100%;
  display:flex;
 justify-content:center;
column-gap:1%;
  
}
`

const Button = styled.button`
  width:48%;
  padding:10px 0;
  font-size:20px;
  outline:none;
  border:1px solid green;

  color:black;
  border-radius:10px;
`