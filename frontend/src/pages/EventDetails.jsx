import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { FaUsers, FaRegClock } from "react-icons/fa"
import calculateDaysLeft from '../helpers/CalculateDaysLeft';
import { MdLocationPin } from "react-icons/md"
import { GoOrganization } from "react-icons/go"
import { useParams } from 'react-router-dom';
import loading from "../assets/images/loading.gif"
import { singleEventsRoute,registerEventRoute } from '../utils/APIRoutes';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EventDetails = () => {
  const eventId= useParams();
  const [singleEvent, setSingle] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [isAdmin,setAdmin]=useState(false);
  const [alreadyRegistered,setRegistered]=useState(false);
  const [applied,setApplied]=useState(false);
  const toastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const getSingleEvent = async () => {
    try {
      setLoading(true);
     
      const response = await axios.post(singleEventsRoute, { eventId });
      if (response.status) {
        setSingle(response.data.event);
        setLoading(false);
      }
      else {
        console.log(response.data.error);
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const user=JSON.parse(localStorage.getItem("vit-data"));
   
       if(user.registeredEvents.includes(eventId.eventId)) {
        setRegistered(true);
      }
      else console.log("error");
    if(user && user.isAdmin) setAdmin(true);
    if (eventId) getSingleEvent(eventId);
  }, [eventId]);
  
  
const handleApply=async()=>{
  try{
    const userdata=JSON.parse(localStorage.getItem("vit-data"));
   const {data} =await axios.post(registerEventRoute,{eventId:singleEvent._id,token:userdata.user});
   if(data.status==="false"){
    toast.error(data.error,toastOptions)
   }
   else {
    toast.success("Registered Successfully", toastOptions);
    userdata.registeredEvents.push(singleEvent._id);
    localStorage.setItem("vit-data", JSON.stringify(userdata));
    setApplied(true);
   }
  }
  catch(error){
   console.log(error);
  }
}


  return (
    <>
    {isLoading  && <div style={{display:"flex", justifyContent:"center",height:"100vh",alignItems:"center"}}><img src={loading} alt='...loading' /> </div>}
     {isLoading===false && singleEvent.title  ? (
        <DetailContainer>
          <img src={singleEvent.image} alt="banner" />
          <MainContainer>
            <div className="titlecontainer">
              <h2>{singleEvent.title}</h2>
              {singleEvent.category === "Technology" &&
                <div className='technologies'>
                  {singleEvent.technologies.map((item, index) => {
                    return <p key={index}> {item}</p>
                  })}
                </div>
              }
              <div className='location'>
                <MdLocationPin />
                {singleEvent.location}
              </div>
              {(alreadyRegistered || applied) && <Button style={{background:"grey"}} disabled="true">registered</Button>}
              {!isAdmin && alreadyRegistered===false  && applied===false && <Button onClick={handleApply}>apply now</Button>}
            </div>
            <div className="timeline">
              <div className="timelinecard">
                <div> 
                  <FaUsers />
                  Registered
                </div>
                <p>{singleEvent.registeredStudents.length}</p>
              </div>
              <div className="timelinecard">
                <div>
                  <FaRegClock />
                  Application Deadline
                </div>
                <p>{calculateDaysLeft(singleEvent.date)} days left</p>
              </div>
              <div className="timelinecard">
                <div>
                  <GoOrganization />
                  Organizer
                </div>
                <p>{singleEvent.organizer}</p>
              </div>
            </div>
          </MainContainer>
          <DescriptionContainer>
            <p>{singleEvent.description}</p>
          </DescriptionContainer>
        </DetailContainer>
      ) : null}
      <ToastContainer /> 
    </>
  );
}

export default EventDetails

const DetailContainer = styled.div`
img{
  width:100%;
  margin-bottom:20px;
  max-height:370px;
}

`

const MainContainer = styled.div`
display:flex;
.titlecontainer{
width:70%;

.location{
  display:flex;
  align-items:center;
  column-gap:5px;
  font-weight:bold;
  color:grey;
 
  margin:10px 0;
}

.technologies{
  display:flex;
  flex-wrap:wrap;
  column-gap:5px;
  margin-top:10px;
  p{
    background:grey;
    padding:3px 10px;
    border-radius:20px;
    color:white;
    font-size:bold;

  }
}


}
.timeline{
width:30%;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
padding:20px 0;
.timelinecard{
display:flex;
justify-content:space-between;
font-size:18px;
padding:10px;
svg{
  font-size:20px;
}
}

.timelinecard div{
  display:flex;
  column-gap:3px;
  align-items:center;
}
}

@media screen and (max-width:1400px){
  .titlecontainer{
     width:60%;
  }
  .timeline{
    width:40%;
  }
}
@media screen and (max-width:970px){
  flex-direction:column;
  .titlecontainer{
     width:100%;
  }
  .timeline{
    margin-top:30px;
    width:100%;
    box-shadow:none;
    border:2px solid grey;
  }
}

`

const DescriptionContainer = styled.div`
padding:30px 0;
line-height:1.5;
`


const Button = styled.button`

  background-color: #c2fbd7;
  border-radius: 100px;
  box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,rgba(44, 187, 99, .15) 0 1px 2px,rgba(44, 187, 99, .15) 0 2px 4px,rgba(44, 187, 99, .15) 0 4px 8px,rgba(44, 187, 99, .15) 0 8px 16px,rgba(44, 187, 99, .15) 0 16px 32px;
  color: black;
  font-weight:bold;
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