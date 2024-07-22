import React, {useMemo} from "react";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import Login from "@/page/User/Login";
import Layout from "@/component/Layout";
import Authorized from "@/component/Authorized";
import {businessRouter} from "@/route";

function RenderRoute(routeList: any): any {
    return routeList.map((item: any) => {
        // 如果有子路由
        if (item.hasOwnProperty("children")) {

            return RenderRoute(item.children);
        } else {
            // 没有子路由
            return <Route path={item.path} key={item.name} element={item.element()}/>;
        }
    });
}

function App(): JSX.Element {
    return useMemo(
        () => (
            <Routes>
                {/*登录拦截*/}
                <Route
                    element={
                        <Authorized>
                            <Layout/>
                        </Authorized>
                    }
                >
                    {RenderRoute(businessRouter)}
                </Route>
                <Route path={"/user"}>
                    <Route path={"login"} element={<Login/>}/>
                </Route>
            </Routes>
        ),
        []
    );
}

export default App;
