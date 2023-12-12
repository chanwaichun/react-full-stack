import style from './index.module.scss'

export default function Header() {
    return (
        <div className={style.header}>
            <div className={style.icon}>首页</div>

            <div className={style.avatar}></div>
        </div>
    )

}
