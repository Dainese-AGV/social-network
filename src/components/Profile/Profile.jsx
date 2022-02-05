import s from "./Profile.module.css"
import { Mypost } from "./MyPosts/Mypost"

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
            <img className={s.content__img} src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="page"/>
            </div>
            <div>
                ava + description
            </div>
            <Mypost/>
        </div>
        
    )
}