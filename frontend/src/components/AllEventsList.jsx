import React from 'react';
import { useEventContext } from '../context/eventcontext';
import Card from './Card';

const AllEventsList = () => {
  const {isLoading, events } = useEventContext();
  return (
    <div className='AllEventsList'>
      {isLoading ?  
        <div className='subCard'><img style={{height:"300px",width:"350px"}} src="{}" alt='...loading'/> </div> 
        :<>
        <div className='subCard'>
          {events.map((item,index)=>{
            return <Card key={index} image={item.image} title={item.title} date={item.date} users={8920} category={item.category} description={item.description} eventid={item._id} />
          })}
        </div>
        <div className='subCard'>
          {events.map((item,index)=>{
            return <Card key={index} image={item.image} title={item.title} date={item.date} users={8920} category={item.category} description={item.description} eventid={item._id} />
          })}
        </div>
        <div className='subCard'>
          {events.map((item,index)=>{
            return <Card key={index} image={item.image} title={item.title} date={item.date} users={8920} category={item.category} description={item.description} eventid={item._id} />
          })}
        </div>
        </>

      }
    </div>
  )
}

export default AllEventsList