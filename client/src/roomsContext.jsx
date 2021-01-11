import React, { createContext, useReducer } from 'react';

export const RoomContext = createContext();

export const RoomContextProvider = (props) => {
  const initialState = {};
  const reducer = (state, action) => {
    switch (action.type) {
      case 'rooms':
        console.log(action.payload.id);
     const newState = {state,id:action.payload.id}
     return newState; 
      default:
        return state;
    }
  };


  const [roomstore, dispatch2] = useReducer(reducer, initialState);
  return (
    <RoomContext.Provider value={{ roomstore, dispatch2 }}>
      {props.children}
    </RoomContext.Provider>
  );
};