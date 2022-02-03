import s from "./Profile.module.css"


export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
            <img className={s.content__img} src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="page"/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My post
                <div>
                    New post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    )
}