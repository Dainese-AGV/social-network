import s from "./Post.module.css";

export const Post = (props) => {
return (
    <div className="s.item">
        <img className={s.item__img} src="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png" alt="avatar"/>
            {props.message}
        <div>
            <span>like{props.like}</span>
        </div>
    </div>
    );
};
