
export default function counterReducer(state = {num:0,msg:''}, actions) {
    let  numb;
  switch (actions.type) {
case "INCREMENT":
   
      return {...state,num:(state.num+1),msg:actions.payload};
    case "DECREMENT":
        numb= state.num --
        return {...state,num: (state.num-1),msg:actions.payload};
    default:
      return state;
  }
}
