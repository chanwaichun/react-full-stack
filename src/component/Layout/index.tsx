import style from "./index.module.scss";
import { Outlet } from "react-router-dom";
import Header from "./module/Header";
import SideMenu from "./module/SideMenu";
import { useEffect, useMemo } from "react";

export default function Layout(props: any) {
	// const navigate =  useNavigate()
	useEffect(() => {
		console.log(21);
	}, []);
	return useMemo(
		() => (
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
		),
		[]
	);
}
