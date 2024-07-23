import style from "./index.module.scss";
import classNames from "classnames";
import {forwardRef, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Avatar, Dropdown, MenuProps, message} from "antd";
import {Dispatch} from "@reduxjs/toolkit";
import {loginOut} from "@/reducer/user";
import {useNavigate} from "react-router";

export default function Header() {
	const {info} = useSelector((state: any) => state.user);
	const navigate = useNavigate();
	const dispatch = useDispatch<Dispatch>();
	const items: MenuProps["items"] = [
		{
			key: "editInfo",
			label: "修改信息"
		},
		{
			key: "loginOut",
			label: "退出登录"
		}
	];
	useEffect(() => {}, []);

	function handleClick(menuInfo: any) {
		console.log(menuInfo);
		const {key} = menuInfo;
		// 登出操作
		if (key === "loginOut") {
			dispatch(loginOut());
			message.success("登出成功");
			navigate("/user/login");
			return;
		}
		// 编辑信息
		if (key === "editInfo") {
			navigate("/user/info");
		}
	}

	return (
		info && (
			<div className={classNames([style.header, "flex-center-space-bt"])}>
				<div className={style.left}>mangeSystem</div>

				<div className={classNames([style.right])}>
					<Dropdown menu={{items, onClick: handleClick}} trigger={["click"]}>
						<div
							className={classNames(["flex-center-end", style.userInfo])}
							onClick={e => {
								e.preventDefault();
							}}
						>
							<span>{info.userName || ""}</span>
							<Avatar src={info.userImg} style={{marginLeft: "8px"}}></Avatar>
						</div>
					</Dropdown>
				</div>
			</div>
		)
	);
}

export const Info = forwardRef(function Info(prop, ref) {
	const [show, handleShow] = useState(false);
	return <div className={style.info}></div>;
});
