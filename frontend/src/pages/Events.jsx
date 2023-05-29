import React from 'react'
import styled from "styled-components"
import Card from "../components/Card"

const Data=[
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
  },
  {
    "_id": "6472e78e38678d461000b913",
    "title": "Coding Bootcamp",
    "description": "Intensive coding bootcamp for beginners",
    "date": "2023-06-15T00:00:00.000Z",
    "time": "10:00",
    "location": "Computer Lab 101",
    "category": "Workshop",
    "organizer": "Code Masters",
    "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "registrationLink": "https://example.com/registration",
    "registeredUsers": [],
    "createdAt": "2023-05-28T05:33:02.354Z",
    "__v": 0
  },
  {
    "_id": "6472e78e38678d461000b913",
    "title": "Coding Bootcamp",
    "description": "Intensive coding bootcamp for beginners",
    "date": "2023-06-15T00:00:00.000Z",
    "time": "10:00",
    "location": "Computer Lab 101",
    "category": "Workshop",
    "organizer": "Code Masters",
    "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "registrationLink": "https://example.com/registration",
    "registeredUsers": [],
    "createdAt": "2023-05-28T05:33:02.354Z",
    "__v": 0
  },
  {
    "_id": "6472e78e38678d461000b913",
    "title": "Coding Bootcamp",
    "description": "Intensive coding bootcamp for beginners",
    "date": "2023-06-15T00:00:00.000Z",
    "time": "10:00",
    "location": "Computer Lab 101",
    "category": "Workshop",
    "organizer": "Code Masters",
    "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "registrationLink": "https://example.com/registration",
    "registeredUsers": [],
    "createdAt": "2023-05-28T05:33:02.354Z",
    "__v": 0
  },
  {
    "_id": "6472e78e38678d461000b913",
    "title": "Coding Bootcamp",
    "description": "Intensive coding bootcamp for beginners",
    "date": "2023-06-15T00:00:00.000Z",
    "time": "10:00",
    "location": "Computer Lab 101",
    "category": "Workshop",
    "organizer": "Code Masters",
    "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "registrationLink": "https://example.com/registration",
    "registeredUsers": [],
    "createdAt": "2023-05-28T05:33:02.354Z",
    "__v": 0
  },
  {
    "_id": "6472e78e38678d461000b913",
    "title": "Coding Bootcamp",
    "description": "Intensive coding bootcamp for beginners",
    "date": "2023-06-15T00:00:00.000Z",
    "time": "10:00",
    "location": "Computer Lab 101",
    "category": "Workshop",
    "organizer": "Code Masters",
    "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "registrationLink": "https://example.com/registration",
    "registeredUsers": [],
    "createdAt": "2023-05-28T05:33:02.354Z",
    "__v": 0
  },
  {
    "_id": "6472e78e38678d461000b913",
    "title": "Coding Bootcamp",
    "description": "Intensive coding bootcamp for beginners",
    "date": "2023-06-15T00:00:00.000Z",
    "time": "10:00",
    "location": "Computer Lab 101",
    "category": "Workshop",
    "organizer": "Code Masters",
    "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "registrationLink": "https://example.com/registration",
    "registeredUsers": [],
    "createdAt": "2023-05-28T05:33:02.354Z",
    "__v": 0
  },
  {
    "_id": "6472e78e38678d461000b913",
    "title": "Coding Bootcamp",
    "description": "Intensive coding bootcamp for beginners",
    "date": "2023-06-15T00:00:00.000Z",
    "time": "10:00",
    "location": "Computer Lab 101",
    "category": "Workshop",
    "organizer": "Code Masters",
    "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "registrationLink": "https://example.com/registration",
    "registeredUsers": [],
    "createdAt": "2023-05-28T05:33:02.354Z",
    "__v": 0
  },
  {
    "_id": "6472e78e38678d461000b913",
    "title": "Coding Bootcamp",
    "description": "Intensive coding bootcamp for beginners",
    "date": "2023-06-15T00:00:00.000Z",
    "time": "10:00",
    "location": "Computer Lab 101",
    "category": "Workshop",
    "organizer": "Code Masters",
    "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "registrationLink": "https://example.com/registration",
    "registeredUsers": [],
    "createdAt": "2023-05-28T05:33:02.354Z",
    "__v": 0
  },
]

const Events = () => {
  return (
    <div>
   <Wrapper>
   {Data.map((item,index)=>{
   return <Card key={index} image={item.image} title={item.title} date={item.date} users={8920} category={item.category} description={item.description} eventid={item._id} />
   })}
   </Wrapper>
    </div>
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