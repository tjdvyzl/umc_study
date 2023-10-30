import React, {useState} from 'react'
import styled from "styled-components";
import LoginControl from './LoginControl';

export default function Header() {
    const StyledHeader = styled.div`
        display: flex;
        flex-direction: row;
        background-color: #000080;
        height: 40px;
        img {
            margin:10px 50px;
        }
        ul {
            margin: 10px 0px;
            display: inline-block;
        }
        li {
            display: inline-block;
            margin: 0px 30px 0px 0px;
            a {
                color: white;
                text-decoration: none;
            }
        }
    `;

    function MyHeader({children}){
        return <StyledHeader>{children}</StyledHeader>
    }

    return (
        <MyHeader>
            <img
            style={{ width: "154px", height: "20px" }}
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt="로고"/>
            <ul style={{listStyle:"none"}}>
                <li><a href="/movies">영화</a></li>
                <li><a href="/tv">TV 프로그램</a></li>
                <li><a href="/celebrity">인물</a></li>
                <li><LoginControl></LoginControl></li>
            </ul>
        </MyHeader>
    )
}
