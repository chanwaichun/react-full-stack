import {Avatar, Dropdown} from 'antd';
import style from './index.module.scss'

export default function Toolbar() {
    return <div className={style.toobar}>
        <Dropdown>
            <Avatar></Avatar>
        </Dropdown>
    </div>
}
