import {useEffect, useMemo} from "react";
import {useNavigate, useLocation} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "@reduxjs/toolkit";
import {setInfo} from "@/reducer/user";

export default function Authorized(props: any) {
	const navigate = useNavigate();
	const location = useLocation();
	const user: any = useSelector((state: any) => state.user);
	const dispatch: Dispatch<any> = useDispatch<Dispatch>();
	useEffect(() => {
		//没有token 返回登录页
		// if (!user.token) {
		// 	navigate("/user/login");
		// 	return;
		// }
		console.log(location);
		dispatch(setInfo());
		navigate(location.pathname);
	}, []);
	return useMemo(() => <>{props.children}</>, [props.children]);
}
