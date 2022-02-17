import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from 'react-router-dom';
import {state} from "./components/Redux/State"




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App  
      posts={state.profilePage.postData}
      dialogs={state.profilePage.dialogData}
      messages={state.messagesPage.messegesData}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
