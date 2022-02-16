import s from "./Mypost.module.css";
import { Post } from "./Post/Post";

// const postData = [
//   { id: 1, message: "Hi, how are you", like: "1" },
//   { id: 2, message: "I am ok", like: "2" },
// ];

export const Mypost = (props) => {
  let postElement = props.postData.map((p) => (
    <Post message={p.message} like={p.like} />
  ));
  return (
    <div>
      My post
      <div>
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      <div className={s.posts}>{postElement}</div>
    </div>
  );
};
