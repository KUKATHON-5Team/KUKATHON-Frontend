import styled from "styled-components";
import axios from "../api/axios";
import { LoginContainer } from "../container/LoginContainer";
import { useState } from 'react';

export const LogIn = () => {

    const [id, setID] = useState('');
    const [pw, setPW] = useState('');

    const onIdHandler = (event) => {
        setID(event.currentTarget.value);
        // console.log(id);
    }
    const onPwHandler = (event) => {
        setPW(event.currentTarget.value);
        // console.log(pw);
    }

    const onSubmitHandler = (event) => {

        console.log(id);
        console.log(pw);

    }

    const getUserInfo = async () => {
        try {
            const response = await axios.get("/login");
            const data = response.data;
        } catch (error) {
            console.error("ERROR: ", error);
        }
    };

    const setUserInfo = ({ id, pw }) => {
        axios
            .post("/login", {
                name: { id },
                id: { pw },
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => console.error("ERROR: ", err));
    };

    return (
        <LoginContainer>
            <LogInContainer>
                <Title>LogIn</Title>
                <Login>
                    <IdContent>
                        <div> ID </div>
                        <div><input name="id" value={id} onChange={onIdHandler} /></div>
                    </IdContent>
                    <PwContent>
                        <div> PW </div>
                        <div><input name="pw" value={pw} onChange={onPwHandler} /></div>
                    </PwContent>
                </Login>
                <LoginButton>
                    <button type="submit" onClick={onSubmitHandler}>로그인</button>
                </LoginButton>
            </LogInContainer>
        </LoginContainer>
    );
};

const LogInContainer = styled.div`
  font-size: 50;
    display: flex;
    flex-direction : column;
    align-items : center;
    justify-content :center;
  position: relative;
  height: 100%;

`;

const Title = styled.div`
    font-size: 35px;
    margin-bottom : 10px;
`
const Login = styled.div`
    display : flex;
    flex-direction : column;
`
const IdContent = styled.div`
    display : flex;
    justify-content : space-between;
    div { 
        margin : 5px;
    }
`
const PwContent = styled.div`
    display : flex;
    justify-content : space-between;
    div { 
        margin : 5px;
    }
`
const LoginButton = styled.div`
    margin-top : 10px;
`