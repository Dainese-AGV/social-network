import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogsItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const DialogsMessage = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

 let dialogData = [
   {id: 1 , name: "Dimych"},
   {id: 2, name: "Andrey"},
   {id: 3, name: "Sveta"},
   {id: 4, name: "Sasha"},
   {id: 5, name: "Victor"},
   {id: 6, name: "Valera"}
 ]

let messegesData = [
 {id:1, message: "Hi"},
 {id:2, message: "How your mood?"},
]

let dialogsElement = dialogData.map((dialog) => (
<DialogsItem name={dialog.name}id={dialog.id}/>
));

let messagesElement = messegesData.map((message) => (
  <DialogsMessage message={message.message}/>
));



export const Dialogs = () => {
  return (
    <div className={s.dialogs}>
        <div className={s.dialogItem}>
          {dialogsElement}  
        </div>
        <div className={s.messages}>
          {messagesElement}
        </div>
    </div>
  );
};
