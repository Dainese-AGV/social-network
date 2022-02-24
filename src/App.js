import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";

export const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content"> 
        <Routes>
          <Route path="/messages" element={ <Dialogs dialogData={props.dialogs} messegesData={props.messages}/> } />
          <Route path="/profile" element= { <Profile postData={props.posts} titlePost={props.titlePost}/>}/>
        </Routes>
      </div>
    </div>
  );
};
