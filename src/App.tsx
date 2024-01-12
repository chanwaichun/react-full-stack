import React, { useEffect, useMemo } from "react";
import "./App.css";
import { redirect, Route, Routes, Navigate } from "react-router-dom";
import Login from "@/page/User/Login";
import Main from "@/page/Main";
import SystemUser from "@/page/System/User";
import Layout from "@/component/Layout";
import Authorized from "@/component/Authorized";
import { businessRouter } from "@/route";
import { ConfigProvider } from "antd";

function RenderRoute(routeList: any): any {
	return routeList.map((item: any) => {
		if (item.hasOwnProperty("children")) {
			return RenderRoute(item.children);
		} else {
			return <Route path={item.path} key={item.name} element={item.element()} />;
		}
	});
}

function App(): JSX.Element {
	return useMemo(
		() => (
			<Routes>
				<Route
					element={
						<Authorized>
							<Layout />
						</Authorized>
					}
				>
					{RenderRoute(businessRouter)}
				</Route>
				<Route path={"/user"}>
					<Route path={"login"} element={<Login />} />
				</Route>
			</Routes>
		),
		[]
	);
}

export default App;
