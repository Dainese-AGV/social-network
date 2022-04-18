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
          // posts={store._state.profilePage.postData}
          // dialogs={state.profilePage.dialogData}
          // messages={state.messagesPage.messegesData}
          // titlePost={store.titlePost}
          // newPostText={state.profilePage.newPostText}
          // updateNewPostText={store.updateNewPostText}
          posts={store.getState().profilePage.postData}
          dialogs={store.getState().profilePage.dialogData}
          messages={store.getState().messagesPage.messegesData}
          titlePost={store.titlePost.bind(store)}
          newPostText={store.getState().profilePage.newPostText}
          updateNewPostText={store.updateNewPostText.bind(store)}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderEntireTree(store.getState());
store.subscribe(renderEntireTree);
