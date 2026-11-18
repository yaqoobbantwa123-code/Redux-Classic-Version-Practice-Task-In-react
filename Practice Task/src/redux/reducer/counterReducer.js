const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };

    case "DECREMENT":
      return {
        ...state,
        count: Math.max(0, state.count - 1),
      };

    case "RESET":
      return {
        ...state,
        count: 0,
      };
    case "INCREMENT_BY_AMOUNT":
      return {
        ...state,
        count: state.count + action.payload,
      };

    case "DECREMENT_BY_FIVE":
      return {
        ...state,
        count: Math.max(0, state.count - 5),
      };

    case "INCREMENT_BY_TEN":
      return {
        ...state,
        count: state.count + 10,
      };
    
    case "MULTIPLY_BY_TWO":
        return{
            ...state,
            count: state.count * 2,
        };
    
    case "DIVIDE_BY_TWO":
        return{
            ...state,
            count: state.count / 2,
        };
    default:
      return state;
  }
};

export default counterReducer;
