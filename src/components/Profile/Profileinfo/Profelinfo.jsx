import s from "./Profileinfo.module.css"

export const Profileinfo = () => {
  return (
    <div className={s.profileinfo}>
      <div>
        <img
          className={s.profile__img}
          src="https://smapse.ru/storage/2018/03/converted/825_585_academy-img-1.jpg"
          alt="page"
        />
      </div>
      <div>ava + description</div>
    </div>
  );
};
