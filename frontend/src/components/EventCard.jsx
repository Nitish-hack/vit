import React from 'react';
// import '../assets/css/EventCardStyles.css';

const Data=
    {
      "_id": "6472e74c38678d461000b911",
      "title": "Hackathon Workshop",
      "description": "Learn how to build APIs and test them",
      "date": "2023-06-01",
      "time": "14:00",
      "location": "Conference Room A",
      "category": "Workshop",
      "organizer": "Tech Events",
      "image": "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "registeredUsers": [],
      "createdAt": "2023-05-28T05:31:56.689Z",
      "__v": 0
    }

const EventCard = () => {

  return (

<div classsName='eventpageCardMain'>
    <h3 classsName="eventpageheading">Datails</h3>
    <section classsName="eventpageinfo">
        <div classsName="eventpageSubInfo">Data.method</div>         
        <div classsName="eventpageSubInfo">{Data.location}</div>         
    </section>
    <section classsName="eventpageinfo">
        <div classsName="eventpageSubInfo">{Data.date}</div>         
        <div classsName="eventpageSubInfo">{Data.time}</div>         
    </section>
    <section classsName="eventpageinfo">
        <div classsName="eventpageSubInfo">{Data.category}</div>         
        <div classsName="eventpageSubInfo">{Data.organizer}</div>         
    </section>

 
</div>
  )
}

export default EventCard