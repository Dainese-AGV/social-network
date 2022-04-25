import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { store } from "./components/Redux/State";


export const renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          posts={store.getState().profilePage.postData}
          dialogs={store.getState().profilePage.dialogData}
          messages={store.getState().messagesPage.messegesData}
          dispatch={store.dispatch.bind(store)}
          newPostText={store.getState().profilePage.newPostText}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderEntireTree(store.getState());
store.subscribe(renderEntireTree);
