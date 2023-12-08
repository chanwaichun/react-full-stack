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

function App(): JSX.Element {
    const navigate = useNavigate();
    const [token, setToken] = useState(window.localStorage.getItem('token'))
    useEffect(() => {
      setToken(window.localStorage.getItem('token'))
    }, [])

    return (
        <div className="App">

            <Routes>
                {/* {!this.state.isLogin ? <Redirect to="/login" /> : null} */}
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/main"} element={<Main/>}/>
                <Route path={"*"} element={<Navigate to={!token ? '/login' : '/main'}/>}/>
            </Routes>


        </div>
    )


}

export default App;
