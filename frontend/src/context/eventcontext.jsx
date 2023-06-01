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


   
useEffect(()=>{

  getEvents();

},[])

return (
<AppContext.Provider value={{...state}}>{children}</AppContext.Provider>
);
}

//custom hooks
const useEventContext=()=>{
    return useContext(AppContext);
}

export {AppProvider,AppContext,useEventContext};

