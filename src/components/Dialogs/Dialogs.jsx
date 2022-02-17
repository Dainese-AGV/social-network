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

export const Dialogs = (props) => {
  let dialogsElement = props.dialogData.map((dialog) => (
    <DialogsItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElement = props.messegesData.map((message) => (
    <DialogsMessage message={message.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItem}>{dialogsElement}</div>
      <div className={s.messages}>{messagesElement}</div>
    </div>
  );
};
