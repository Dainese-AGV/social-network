import s from "./Mypost.module.css";
import { Post } from "./Post/Post";
import React from "react";

export const Mypost = (props) => {
  let postElement = props.postData.map((p) => (
    <Post message={p.message} like={p.like} />
  ));

  let newAddPost = React.createRef();

  let addPost = () => {
    props.dispatch({ type: "ADD-POST" });
  };
  let onPostChange = () => {
    let text = newAddPost.current.value;
    let action = { type: "UPDATE-NEW-POST-TEXT", newText: text };
    props.dispatch(action);
  };

  return (
    <div>
      My post
      <div>
        <textarea
          onChange={onPostChange}
          ref={newAddPost}
          value={props.newPostText}
        />
        <button onClick={addPost}>Add Post</button>
      </div>
      <div className={s.posts}>{postElement}</div>
    </div>
  );
};
