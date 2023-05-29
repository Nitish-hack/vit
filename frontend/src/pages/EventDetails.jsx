import React from 'react';
import "../assets/css/EventDetailsStyles.css";
import EventCard from '../components/EventCard';

const Data=
    {
      "_id": "6472e74c38678d461000b911",
      "title": "Hackathon Workshop",
      "description": "Learn how to build APIs and test them",
      "date": "2023-06-01T00:00:00.000Z",
      "time": "14:00",
      "location": "Conference Room A",
      "category": "Workshop",
      "organizer": "Tech Events",
      "image": "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "registeredUsers": [],
      "createdAt": "2023-05-28T05:31:56.689Z",
      "__v": 0
    }

const EventDetails = () => {
  return (
    <>
        <section className="EventDetailsSection">
            <div className="banner">
                <img src={Data.image} alt="" />
            </div>
            <div className="detailsContainer">
                 <div className="container1">
                    <h1 className='title'>{Data.title}</h1>
                    <h3 className='deadline'>Data.deadline</h3>
                    <p className="description">
                        {Data.description}
                    </p>
                 </div>
                 <div className="container2">
                    <EventCard />
                    {/* <Wrapper>
                    {Data.map((item,index)=>{
                    return  */}
                    {/* <EventCard key={index} image={item.image} title={item.title} date={item.date} users={8920} category={item.category} description={item.description} eventid={item._id} /> */}
                    {/* // })} */}
                    {/* </Wrapper> */}
                 </div>
            </div>
        </section>
    </>
  )
}

export default EventDetails