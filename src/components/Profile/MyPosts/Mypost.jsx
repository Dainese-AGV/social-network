import s from "./Mypost.module.css"
import { Post } from "./Post/Post"


export const Mypost = () => {
    return (
            <div>
                My post
                <div>
                    <textarea></textarea>
                    <button>Add Post</button>
                </div>
                <div className={s.posts}>
                    <Post message="Hi, how are you" like="1"/>
                    <Post message="I am ok" like="2" />
                </div>
            </div>
    )
}