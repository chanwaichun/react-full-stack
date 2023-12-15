import style from './index.module.scss'
import {Outlet} from "react-router-dom";
import Header from './module/Header'
import Menu from './module/Menu'
import {useEffect} from "react";
import {useNavigate} from "react-router";

export default function Layout() {
    // const navigate =  useNavigate()
    useEffect(() => {
        console.log(21)

    }, [])
    return (
        <div className={style.layout}>

            <Header></Header>
            <div className={style.body}>
                <div className={style.menu}>
                    <Menu></Menu>
                </div>
                <div className={style.content}>
                    <Outlet/>
                </div>
            </div>

        </div>
    )
}
