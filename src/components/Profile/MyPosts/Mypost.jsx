import s from "./Mypost.module.css";
import { Post } from "./Post/Post";
import React from "react";

export const Mypost = (props) => {
  let postElement = props.postData.map((p) => (
    <Post message={p.message} like={p.like} />
  ));

let newAddPost = React.createRef();

let addPost = (state) => {
  props.titlePost()
  props.updateNewPostText('');
}
let onPostChange = () => {
let text = newAddPost.current.value;
props.updateNewPostText(text);
}


  return (
    <div>
      My post
      <div>
        <textarea onChange={onPostChange} ref={newAddPost} value={props.newPostText}/>
        <button onClick={addPost}>Add Post</button>
      </div>
      <div className={s.posts}>{postElement}</div>
      <div className={s.posts}>{postElement}</div>
    </div>
  );
};
