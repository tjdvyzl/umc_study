import React, {useState} from 'react'
import { MyLoginButton } from './LoginControl.style';

export default function LoginControl() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const loginBtnHandler = () => {
        setIsLoggedIn(!isLoggedIn);
    }

    return (
        <div>
            <MyLoginButton loginBtnHandler={loginBtnHandler}>{isLoggedIn ? "로그아웃" : "로그인"}</MyLoginButton>
            <span style={{color: "white", margin:"20px"}}>{isLoggedIn ? "환영합니다!" : "로그인을 해주세요!"}</span>
        </div>
    )
}
