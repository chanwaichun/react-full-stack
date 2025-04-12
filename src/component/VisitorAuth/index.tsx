import {useEffect, useMemo} from "react";
import fingerprint from "@fingerprintjs/fingerprintjs";
import {getInfo, setToken} from "@/reducer/user";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "@reduxjs/toolkit";
import {loginByDeviceId} from "@/api/user";

export default function VisitorAuth(props: any) {
	const dispatch = useDispatch<Dispatch>();
	const user: any = useSelector((state: any) => state.user);

	async function handleLoad() {
		if (!user.token) {
			const fingerprintRes = await fingerprint.load();
			const deviceInfo = await fingerprintRes.get();
			const res = await loginByDeviceId({deviceId: deviceInfo.visitorId});
			dispatch(setToken(res.data));
		}
		// @ts-ignore
		dispatch(getInfo({}));
	}

	useEffect(() => {
		handleLoad();
	}, []);

	return useMemo(() => <> {user.token ? props.children : ""}</>, [props.children, user.token]);
}
