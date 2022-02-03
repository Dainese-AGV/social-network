
import s from "./Navbar.module.css"

export const Navbar = () => {
    return (
        <nav className={s.navigation}>
            <div className={s.list}>
                <a className={s.title} href="/#">Profile</a>
            </div>
            <div className={s.list} >
                <a className={s.title} href="/#">Messages</a>
            </div>
            <div  className={s.list}>
                <a className={s.title} href="/#">News</a>
            </div>
            <div  className={s.list}>
                <a className={s.title} href="/#">Music</a>
            </div>
            <div  className={s.list}>
                <a className={s.title} href="/#">Settings</a>
            </div>
        </nav>
    )
}