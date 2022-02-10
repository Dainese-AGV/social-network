import s from "./Profile.module.css";
import { Mypost } from "./MyPosts/Mypost";
import { Profileinfo } from "./Profileinfo/Profelinfo";

export const Profile = () => {
  return (
    <div className={s.content}>
      <Profileinfo />
      <Mypost />
    </div>
  );
};
