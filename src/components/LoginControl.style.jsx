import styled from 'styled-components'

const StyledLoginButton = styled.button`
    display:inline-block;
    width:70px;
    border-radius:10px; 
`;

export function MyLoginButton({children, loginBtnHandler}) {
    return <StyledLoginButton onClick={loginBtnHandler}>{children}</StyledLoginButton>
}