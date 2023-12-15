import React, {useEffect} from 'react';
import './App.css';
import {
    redirect,
    Route,
    Routes,
    Navigate
} from "react-router-dom";
import Login from '@/page/User/Login'
import Main from '@/page/Main'
import Layout from '@/component/Layout'
import Authorized from "@/component/Authorized";
import {useDispatch, useSelector} from "react-redux";

function App(): JSX.Element {
    const user: any = useSelector((state: any) => state.user);
    useEffect(() => {
        console.log(user)
    }, [])

    return (
        <Routes>
            {!user.token ?
                <>
                    <Route path={"/user"}>
                        <Route path={"login"} element={<Login/>}/>
                    </Route>
                    <Route path={"*"} element={<Navigate to={'/user/login'}/>}/>
                </>
                : (
                    <>
                        <Route path={"/"} element={<Authorized><Layout/></Authorized>}>
                            <Route path={"main"} element={<Main/>}/>
                            <Route path={'*'} element={<Authorized/>}></Route>
                        </Route>
                        <Route path={"/user"}>
                            <Route path={"login"} element={<Login/>}/>
                        </Route>
                    </>
                )
            }
        </Routes>
    )


}

export default App;
