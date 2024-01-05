import style from './index.module.scss'
import classNames from "classnames";
import Toolbar from "@/component/Layout/module/Toolbar";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Dropdown, Avatar, MenuProps} from "antd";
import {Dispatch} from "@reduxjs/toolkit";
import {loginOut} from "@/reducer/user";
import {useNavigate} from "react-router";

export default function Header() {
    const {info} = useSelector((state: any) => state.user)
    const navigate = useNavigate()
    const dispatch = useDispatch<Dispatch>()
    const items: MenuProps["items"] = [{
        key: '1',
        label: '退出'
    }, {
        key: 'loginOut',
        label: '退出登录'
    }]
    useEffect(() => {

    }, [])

    function handleClick(menuInfo: any) {
        console.log(menuInfo)
        const {key} = menuInfo
        if (key === 'loginOut') {
            dispatch(loginOut(null))
            navigate('/user/login')
            return;
        }

    }

    return (
        <div className={classNames([style.header, 'flex-center-space-bt'])}>
            <div className={style.left}>
                mangeSystem
            </div>

            <div className={classNames([style.right])}>

                <Dropdown menu={{items, onClick: handleClick}} trigger={['click']}>
                    <div
                        className={classNames(['flex-center-end', style.userInfo])}
                        onClick={(e) => {
                            e.preventDefault()
                        }}
                    >
                        <span className={style.userName}>
                            {info.userName}
                        </span>
                        <Avatar src={info.userImg} style={{marginLeft: '8px'}}></Avatar>
                    </div>

                </Dropdown>
            </div>
        </div>
    )

}
