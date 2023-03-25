import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "../api/axios";
import formAxios from "../api/formAxios";
import { PageContainer } from "../container/PageContainer";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

const setCookie = (name, value, option) => {
  return cookies.set(name, value, { ...option });
};

export const MainPage = () => {
  const [user, setUser] = useState({});

  const getUserInfo = async () => {
    try {
      const response = await axios.get("/test");
      const data = response.data;
      setUser(data);
      console.log(data);
    } catch (error) {
      console.error("ERROR: ", error);
    }
  };

  const setUserInfo = () => {
    axios
      .post("/user", {
        name: "jwo0o0",
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.error("ERROR: ", err));
  };

  const login = () => {
    formAxios
      .post("/login", {
        username: "test",
        password: "test",
      })
      .then((res) => {
        console.log("로그인", res.headers[""]);
        setCookie("JSESSIONID", "B63CE861F599E85A2FCD69A32FDD8E42", {
          secure: true,
          sameSite: "none",
        });
      })
      .catch((err) => {
        console.log("ERROR: ", err);
      });
  };

  useEffect(() => {}, []);

  return (
    <PageContainer navbar>
      <MainPageContainer>
        <div className="test">내일(naeil) 메인페이지</div>
        <button
          onClick={() => {
            login();
          }}
        >
          로그인
        </button>
        <button
          onClick={() => {
            getUserInfo();
          }}
        >
          test request
        </button>
      </MainPageContainer>
    </PageContainer>
  );
};

const MainPageContainer = styled.div`
  color: ${({ theme }) => theme.colors.mainColor};
  div.test {
    margin-top: 20px;
    color: black;
    font-size: 20px;
  }
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
