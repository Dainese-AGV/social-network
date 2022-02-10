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

export const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItem}>
        <DialogsItem name="Dimych" id="1" />
        <DialogsItem name="Andrey" id="2" />
        <DialogsItem name="Sveta" id="3" />
        <DialogsItem name="Sasha" id="4" />
        <DialogsItem name="Victor" id="5" />
        <DialogsItem name="Valera" id="6" />
      </div>
      <div className={s.messages}>
        <DialogsMessage message="hi" />
        <DialogsMessage message="How your mood?" />
        <DialogsMessage message="Yo" />
      </div>
    </div>
  );
};
