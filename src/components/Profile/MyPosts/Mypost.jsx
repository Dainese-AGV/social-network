import s from "./Mypost.module.css";
import { Post } from "./Post/Post";
import React from "react";

export const Mypost = (props) => {
  let postElement = props.postData.map((p) => (
    <Post message={p.message} like={p.like} />
  ));

let newAddPost = React.createRef();

let addPost = (state) => {
  let text = newAddPost.current.value;
  props.titlePost(text)
  newAddPost.current.value = "";
}



  return (
    <div>
      My post
      <div>
        <textarea ref={newAddPost}></textarea>
        <button onClick={addPost}>Add Post</button>
      </div>
      <div className={s.posts}>{postElement}</div>
    </div>
  );
};
