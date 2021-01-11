import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { RoomContextProvider } from './roomsContext';
import { UserContextProvider } from './userContext';


ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <RoomContextProvider>
    <App />
      </RoomContextProvider>
    </UserContextProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

