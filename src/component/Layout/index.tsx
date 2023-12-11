import style from './index.module.scss'
import {Outlet} from "react-router";
import Header from './module/Header'
import Menu from './module/Menu'

export default function Layout() {
    return (
        <div className={style.layout}>
            <div className={style.header}>
                <Header></Header>
            </div>
            <div className={style.menu}>
                <Menu></Menu>
            </div>
            <div className={style.content}>
                <Outlet></Outlet>
            </div>
        </div>
    )
}
