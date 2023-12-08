import React, {useEffect, useState} from 'react';
// import logo from './logo.svg';
// import {login} from '@/api/user'
import './App.css';
import {
    redirect,
    Route,
    Routes,
    Navigate
} from "react-router-dom";
import Login from '@/page/Login'
import Main from '@/page/Main'
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import userReducer from "@/reducer/user/index";

function App(): JSX.Element {
    const user: any = useSelector((state: any) => state.user);
    useEffect(() => {
        console.log(user)
    }, [])

    return (
        <div className="App">

            <Routes>
                {!user.token ?
                    <>
                        <Route path={"/login"} element={<Login/>}/>
                        <Route path={"*"} element={<Navigate to={'/login'}/>}/>
                    </>
                    : (
                        <>
                            <Route path={"/main"} element={<Main/>}/>
                            <Route path={"/login"} element={<Login/>}/>
                        </>

                    )
                }
            </Routes>


        </div>
    )


}

export default App;
