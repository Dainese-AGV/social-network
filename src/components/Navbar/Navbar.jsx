
import { NavLink } from "react-router-dom"
import s from "./Navbar.module.css"

export const Navbar = () => {
    return (
        <nav className={s.navigation}>
            <div className={s.list}>
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div className={s.list} >
                <NavLink  to="/messages">Messages</NavLink>
            </div>
            <div  className={s.list}>
                <a  href="/#">News</a>
            </div>
            <div  className={s.list}>
                <a  href="/#">Music</a>
            </div>
            <div  className={s.list}>
                <a  href="/#">Settings</a>
            </div>
        </nav>
    )
}