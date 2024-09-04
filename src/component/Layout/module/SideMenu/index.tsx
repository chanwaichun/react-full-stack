import style from "./index.module.scss";
import {Menu} from "antd";
import {businessRouter} from "@/route";
import {useLocation, useNavigate} from "react-router";
import {useEffect, useState} from "react";

function setMenuItem(routerList: any, parent: boolean = true) {
	return routerList.reduce((prev: Array<any>, current: any) => {
		const config: {label: string; key: string; type?: string} = {
			label: current.meta?.title,
			key: current.path
		};
		if (current.children) {
			return current.meta?.isHide ? prev : [...prev, {...config, children: setMenuItem(current.children, false)}];
		} else {
			return current.meta?.isHide ? prev : [...prev, config];
		}
	}, []);
}

const menuItems: any = setMenuItem(businessRouter);
export default function SideMenu() {
	const navigate = useNavigate();
	const location = useLocation();
	const [selectedKeys, setSelectedKeys]: Array<Array<string> | any> = useState([]);
	useEffect(() => {
		setSelectedKeys([location.pathname]);
	}, [location.pathname]);

	function handleClick(e: any) {
		console.log(e);
		navigate(e.key);
	}

	return (
		<div className={style.menu}>
			<Menu
				theme={"light"}
				onClick={e => handleClick(e)}
				style={{width: "100%"}}
				selectedKeys={selectedKeys}
				mode="inline"
				items={menuItems}
			></Menu>
		</div>
	);
}
