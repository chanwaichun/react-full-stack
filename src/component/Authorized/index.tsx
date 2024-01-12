import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setInfo } from "@/reducer/user";

export default function Authorized(props: any) {
	const navigate = useNavigate();
	const user: any = useSelector((state: any) => state.user);
	const dispatch: Dispatch<any> = useDispatch<Dispatch>();
	useEffect(() => {
		console.log(22222);
		if (!user.token) {
			navigate("/user/login");
		}
		dispatch(setInfo());
		navigate("/main");
	}, []);
	return useMemo(() => <>{props.children}</>, [props.children]);
}
