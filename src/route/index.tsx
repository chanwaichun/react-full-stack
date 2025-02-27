import Layout from "@/component/Layout";
import React from "react";
import Main from "@/page/Main";
import {Navigate} from "react-router-dom";
import SystemUser from "@/page/System/User";
import SystemSubject from "@/page/System/Subject";
import Authorized from "@/component/Authorized";
import UserInfo from "@/page/User/Info";

export const businessRouter = [
	{
		path: "/main",
		element: () => <Main></Main>,
		name: "main",
		meta: {
			icon: "HomeFilled",
			title: "首页",
			isLink: "",
			isHide: false,
			isFull: false,
			isAffix: false,
			isKeepAlive: true
		}
	},
	{
		path: "/system",
		name: "system",
		element: <Navigate to={"/system/user"} />,
		meta: {
			icon: "HomeFilled",
			title: "系统",
			isLink: "",
			isHide: false,
			isFull: false,
			isAffix: false,
			isKeepAlive: true
		},
		children: [
			{
				path: "/system/user",
				element: () => <SystemUser />,
				name: "systemUser",
				meta: {
					icon: "HomeFilled",
					title: "用户管理",
					isLink: "",
					isHide: false,
					isFull: false,
					isAffix: false,
					isKeepAlive: true
				}
			}
		]
	},
	{
		path: "/user",
		name: "user",
		meta: {
			icon: "HomeFilled",
			title: "用户相关",
			isLink: "",
			isHide: true,
			isFull: false,
			isAffix: false,
			isKeepAlive: true
		},
		children: [
			{
				path: "/user/info",
				name: "user",
				element: () => <UserInfo />,
				meta: {
					icon: "HomeFilled",
					title: "用户",
					isLink: "",
					isHide: true,
					isFull: false,
					isAffix: false,
					isKeepAlive: true
				}
			}
		]
	},
	{
		path: "*",
		name: "all",
		element: () => <Authorized />,
		meta: {
			icon: "HomeFilled",
			title: "",
			isLink: "",
			isHide: true,
			isFull: false,
			isAffix: false,
			isKeepAlive: true
		}
	}
];
