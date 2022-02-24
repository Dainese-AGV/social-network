import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { titlePost} from "./components/Redux/State";

export const renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          posts={state.profilePage.postData}
          dialogs={state.profilePage.dialogData}
          messages={state.messagesPage.messegesData}
          titlePost={titlePost}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};
