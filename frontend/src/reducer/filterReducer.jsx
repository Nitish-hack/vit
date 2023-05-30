const FilterReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_FILTER_EVENTS":
        
        return {
          ...state,
          filter_events: [...action.payload],
          all_events: [...action.payload],
        };
  
      case "UPDATE_FILTERS_VALUE":
        const { name, value } = action.payload;
        return {
          ...state,
          filters: {
            ...state.filters,
            [name]: value,
          },
        };
        
        case "FILTER_EVENTS":
         
      
        let { all_events } = state;
       
        // console.log(all_events);
        let tempFilterEvent = [...all_events];
  
        const { category} = state.filters;
        if (category === "Technology") {
            tempFilterEvent = tempFilterEvent.filter(
                (curElem) => curElem.category === "Technology"
                );
            }
            else {
          
          tempFilterEvent = tempFilterEvent.filter(
            (curElem) => curElem.category !== "Technology"
          );
        }
//   console.log(tempFilterEvent);
        return {
          ...state,
          filter_events: tempFilterEvent,
        };
  
      default:
        return state;
    }
  };
  
  export default FilterReducer;