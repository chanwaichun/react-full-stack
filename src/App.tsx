import React, { useEffect, useMemo } from "react";
import "./App.css";
import { redirect, Route, Routes, Navigate } from "react-router-dom";
import Login from "@/page/User/Login";
import Main from "@/page/Main";
import SystemUser from "@/page/System/User";
import Layout from "@/component/Layout";
import Authorized from "@/component/Authorized";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setInfo } from "@/reducer/user";

function App(): JSX.Element {
	const user: any = useSelector((state: any) => state.user);
	const dispatch = useDispatch<Dispatch>();
	useEffect(() => {
		console.log(user);
		// const {
		// 	info: { userId }
		// } = user;
		// dispatch(setInfo(userId));
		dispatch(setInfo());
		return () => {};
	}, []);

	return useMemo(
		() => (
			<Routes>
				{!user.token ? (
					<>
						<Route path={"/user"}>
							<Route path={"login"} element={<Login />} />
						</Route>
						<Route path={"*"} element={<Navigate to={"/user/login"} />} />
					</>
				) : (
					<>
						<Route
							path={"/"}
							element={
								<Authorized>
									<Layout />
								</Authorized>
							}
						>
							<Route path={"main"} element={<Main />} />
							<Route path={"system"} id={"System"} element={<Navigate to={"user"} />}></Route>
							<Route path={"system/user"} id={"SystemUser"} element={<SystemUser />}></Route>
							<Route path={"*"} id={"All"} element={<Authorized />}></Route>
						</Route>
						<Route path={"/user"}>
							<Route path={"login"} element={<Login />} />
						</Route>
					</>
				)}
			</Routes>
		),
		[]
	);
}

export default App;
