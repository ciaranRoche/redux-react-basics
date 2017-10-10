// import React from "react";
// import {render} from "react-dom";

// import { User } from './components/User';
// import { Main } from './components/Main';

// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             username: "Max"
//         };
//     }

//     changeUsername(newName) {
//         this.setState({
//             username: newName
//         });
//     }

//     render() {
//         return (
//             <div className="container">
//                 <Main changeUsername={this.changeUsername.bind(this)}/>
//                 <User username={this.state.username}/>
//             </div>
//         );
//     }
// }

// render(<App />, window.document.getElementById('app'));

import { createStore } from 'redux';

//stores initial state and makes copies for all new state
const initialState = {
    result: 1,
    lastValues: []
}

//reducer passed to create store and handles initialization of the state
const reducer = (state = initialState, action) => {
    switch (action.type){
        case "ADD" : 
            state = {
                //spread operator get old props from state
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            
            break;
        case "SUBTRACT":
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
    }
    return state;
};

//store takes in reducer function
const store = createStore(reducer);

//subscribe triggers when reducer is fired
store.subscribe(() => {
    console.log("Store updated!", store.getState());
});

//dispatch function takes js object calls reducer in store
store.dispatch({
    type: "ADD",
    payload: 10
});
store.dispatch({
    type: "ADD",
    payload: 22
});
store.dispatch({
    type: "SUBTRACT",
    payload: 32
});


