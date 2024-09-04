import style from "./index.module.scss";
import classNames from "classnames";
import Toolbar from "@/component/Layout/module/Toolbar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown, Avatar, MenuProps, message } from "antd";
import { Dispatch } from "@reduxjs/toolkit";
import { loginOut } from "@/reducer/user";
import { useNavigate } from "react-router";

export default function Header() {
	const { info } = useSelector((state: any) => state.user);
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
		const { key } = menuInfo;
		if (key === "loginOut") {
			dispatch(loginOut());
			message.success("登出成功");
			navigate("/user/login");
			return;
		}
		if (key === "editInfo") {
			navigate("/user/info");
		}
	}

	return (
		info && (
			<div className={classNames([style.header, "flex-center-space-bt"])}>
				<div className={'left'}>mangeSystem</div>

				<div className={classNames(['right'])}>
					<Dropdown menu={{ items, onClick: handleClick }} trigger={["click"]}>
						<div
							className={classNames(["flex-center-end", 'userInfo'])}
							onClick={e => {
								e.preventDefault();
							}}
						>
							<span>{info.userName || ""}</span>
							<Avatar src={'userImg'} style={{ marginLeft: "8px" }}></Avatar>
						</div>
					</Dropdown>
				</div>
			</div>
		)
	);
}
