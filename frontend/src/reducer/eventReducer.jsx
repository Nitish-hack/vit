
const eventReducer = (state,action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading:true,
            }
       
          
    
            case "SET_API_DATA": 
                return {
                    ...state,
                    isLoading:false,
                    events:action.payload,
                }
          

        case "API_ERROR":
            return {
                ...state,
                isError:true,
                isLoading:false,
            }
       
        default:
            return state;
    }
 
}

export default eventReducer;