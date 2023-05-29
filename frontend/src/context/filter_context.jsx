import { createContext, useContext, useReducer, useEffect } from "react";
import { useEventContext } from "./eventcontext";
import reducer from "../reducer/filterReducer.jsx"

const FilterContext = createContext();

const initialState = {
  filter_events: [],
  all_events: [],
  filters: {
    category:"Technology",
  },
};

const FilterContextProvider = ({ children }) => {
  const { events } = useEventContext();

  const [state, dispatch] = useReducer(reducer, initialState);


  // update the filter values
  const updateFilterValue = (event) => {
    
      return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: event });
  
  };


 
  
  // to load all the events for grid and list view
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_EVENTS", payload: events });
    
    dispatch({ type: "FILTER_EVENTS" });
  }, [events,state.filters]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        updateFilterValue,
      }}>
      {children}
    </FilterContext.Provider>
  );
};
//custom hooks
const useFilterContext=()=>{
    return useContext(FilterContext);
}

export {FilterContextProvider,FilterContext,useFilterContext};

