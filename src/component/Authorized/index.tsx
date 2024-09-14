import {useEffect, useMemo} from "react";
import {useLocation, useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "@reduxjs/toolkit";
import {getInfo} from "@/reducer/user";
import {LOGIN_URL} from "@/config";

export default function Authorized(props: any) {
	const navigate = useNavigate();
	const location = useLocation();
	const user: any = useSelector((state: any) => state.user);
	const dispatch: Dispatch<any> = useDispatch<Dispatch>();
	useEffect(() => {
		//没有token 返回登录页
		if (!user.token) {
			navigate(LOGIN_URL);
			return;
		}
		console.log(location);
		dispatch(getInfo());
		navigate(location.pathname);
	}, [user.token]);
	return useMemo(() => <>{props.children}</>, [props.children]);
}
