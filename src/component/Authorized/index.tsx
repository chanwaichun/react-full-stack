import {useEffect, useMemo} from "react";
import {useLocation, useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "@reduxjs/toolkit";
import {getInfo} from "@/reducer/user";

export default function Authorized(props: any) {
	const whiteList: Array<string> = ["/ai/writing"];
	const navigate = useNavigate();
	const location = useLocation();
	const user: any = useSelector((state: any) => state.user);
	const dispatch: Dispatch<any> = useDispatch<Dispatch>();

	useEffect(() => {
		debugger;
		if (whiteList.includes(location.pathname)) {
			navigate(location.pathname);
			return;
		}
		//没有token 返回登录页
		if (!user.token) {
			navigate("/user/login", {replace: true});
			return;
		}
		console.log(location);
		dispatch(getInfo());
		navigate(location.pathname);
	}, [user.token, location]);
	return useMemo(() => <> {user.token && props.children}</>, [props.children]);
}
