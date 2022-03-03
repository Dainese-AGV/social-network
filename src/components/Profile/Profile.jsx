import s from "./Profile.module.css";
import { Mypost } from "./MyPosts/Mypost";
import { Profileinfo } from "./Profileinfo/Profelinfo";

export const Profile = (props) => {
  return (
    <div className={s.content}>
      <Profileinfo dialogData={props.dialogData} messegesData={props.messegesData}/>
      <Mypost postData={props.postData} titlePost={props.titlePost} newPostText={props.newPostText} updateNewPostText={props.updateNewPostText}/>
    </div>
  );
};
