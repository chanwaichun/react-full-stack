import style from "./index.module.scss";
import { Menu } from "antd";

const menuItems: any = [
	{
		label: "系统管理",
		key: "systemManage1",
		type: "group"
	},
	{
		label: "系统管理",
		key: "systemManage2",
		type: "group",
		path: "/system",
		children: [
			{
				label: "用户管理",
				key: "userList",
				path: "/user"
			},
			{
				key: "userList2",
				label: "用户管理2",
				path: "/user/list2"
			}
		]
	}
];
export default function SideMenu() {
	function handleClick(e) {
		console.log(e);
	}

	return (
		<div className={style.menu}>
			<Menu
				theme={"light"}
				onClick={handleClick}
				style={{ width: "100%" }}
				defaultOpenKeys={[]}
				mode="inline"
				items={menuItems}
			></Menu>
		</div>
	);
}
