import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router";

export default function Authorized(props: any) {
	const navigate = useNavigate();
	useEffect(() => {
		console.log(22222);
		navigate("/main");
	}, []);
	return useMemo(() => <>{props.children}</>, [props.children]);
}
