import React,{ useContext ,createContext,useEffect, useReducer} from "react";
import reducer from "../reducer/eventReducer"
import {allEventsRoute,singleEventsRoute} from "../utils/APIRoutes"
import axios from "axios"
const AppContext=createContext();


// const API="provide api for the backend"

const initialState={
    isLoading:true,
    isError:false,
    events:[],
    isSingleLoading:false,
    singleEvent:{},
   
};
 
const AppProvider=({children})=>{ 
    
    const [state,dispatch]=useReducer(reducer,initialState);

    const getEvents=async()=>{
        dispatch({type:"SET_LOADING"});
      try {
         const res=await axios.get(allEventsRoute); 
         const EventData=await res.data;
       dispatch({type:"SET_API_DATA",payload:EventData});
      } catch (error) {
        dispatch({type:"API_ERROR"}); 
      }
    }


    //api call for single product data
    const getSingleEvent=async(eventId)=>{
      dispatch({type:"SET_SINGLE_LOADING"});
      try {
         const res=await axios.get(singleEventsRoute,{eventId});      
         const singleEvent=await res.data;
        

       dispatch({type:"SET_SINGLE_EVENT",payload:singleEvent});

  
      } catch (error) {
        dispatch({type:"SET_SINGLE_ERROR"}); 
      }
    }

useEffect(()=>{

  getEvents();

},[])

return (
<AppContext.Provider value={{...state,getSingleEvent}}>{children}</AppContext.Provider>
);
}

//custom hooks
const useEventContext=()=>{
    return useContext(AppContext);
}

export {AppProvider,AppContext,useEventContext};

