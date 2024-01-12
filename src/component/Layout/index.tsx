import style from "./index.module.scss";
import { Navigate, Outlet } from "react-router-dom";
import Header from "./module/Header";
import SideMenu from "./module/SideMenu";
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setInfo } from "@/reducer/user";
import { useNavigate } from "react-router";
import { ConfigProvider } from "antd";
import primaryTheme from "@/config/primaryTheme";

export default function Layout(props: any) {
	// const navigate =  useNavigate()

	const dispatch = useDispatch<Dispatch>();
	const navigate = useNavigate();
	useEffect(() => {
		return () => {};
	}, []);
	return useMemo(
		() => (
			<ConfigProvider theme={primaryTheme}>
				<div className={style.layout}>
					<Header></Header>
					<div className={style.body}>
						<div className={style.menu}>
							<SideMenu></SideMenu>
						</div>
						<div className={style.content}>
							<Outlet />
						</div>
					</div>
				</div>
			</ConfigProvider>
		),
		[]
	);
}
