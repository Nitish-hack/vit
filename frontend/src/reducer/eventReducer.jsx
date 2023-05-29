
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
           
            case "SET_SINGLE_LOADING":
            return {
                ...state,
                isSingleLoading:true,
            }
           
           
            case "SET_SINGLE_PRODUCT":
                return {
                    ...state,
                    isSingleLoading:false,
                    singleEvent:action.payload
                }

                
        case "SET_SINGLE_ERROR":
            return {
                ...state,
                isError:true,
                isSingleLoading:false,
            }
        default:
            return state;
    }
 
}

export default eventReducer;