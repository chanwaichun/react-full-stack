import style from './index.module.scss'
import classNames from "classnames";
import Toolbar from "@/component/Layout/module/Toolbar";

export default function Header() {
    return (
        <div className={classNames([style.header, 'flex-center-space-bt'])}>
            <div className={style.left}>
                mangeSystem
            </div>

            <div className={style.right}>
                <Toolbar></Toolbar>
            </div>
        </div>
    )

}
