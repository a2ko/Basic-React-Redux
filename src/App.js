import React from 'react';
import { useSelector, connect } from 'react-redux';
import actions from './actions'



function App(props) {
  const counter = useSelector(state=> state.counter);
console.log(props.cont);
  return (
    <div>
    <h1>counter: {props.cont.num}</h1>
    <button onClick={props.increment}>+</button>
    <button onClick={props.decrement}>-</button>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    cont: state.counter
  }
}




export default connect(mapStateToProps,actions)(App);
