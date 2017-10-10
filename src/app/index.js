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

import { createStore, combineReducers } from 'redux';


//reducer passed to create store and handles initialization of the state
const mathReducer = (state = {
        result: 1,
        lastValues: []
    }, action) => {
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

//reducer passed to create store and handles initialization of the state
const userReducer = (state = {
        name: 'Ciaran',
        age: 29
    }, action) => {
    switch (action.type){
        case "SET_NAME" : 
            state = {
                //spread operator get old props from state
                ...state,
                name: action.payload
            };
            break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload   
            };
            break;
    }
    return state;
};

//store takes in reducer function, combineReducer function takes in names of reducers and es6 sets up the key value pairs for you 
const store = createStore(combineReducers({mathReducer, userReducer}));

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
store.dispatch({
    type: "SET_NAME",
    payload: "Roche"
})
store.dispatch({
    type: "SET_AGE",
    payload: 30
})


