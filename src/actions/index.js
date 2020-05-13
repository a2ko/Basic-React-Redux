import actionType from "./types";


const actions = {};
actions.increment = () => {
  return {
      type: actionType.INCREMENT,
      payload: 'the number is increasing'
    };
  };


actions.decrement = () => {
  return {
      type: actionType.DECREMENT,
      payload: 'the number is decreasing'
    };
}

export default actions;
