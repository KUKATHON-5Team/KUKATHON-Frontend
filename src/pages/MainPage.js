import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "../api/axios";
import { PageContainer } from "../container/PageContainer";

export const MainPage = () => {
  const [user, setUser] = useState({});

  const getUserInfo = async () => {
    try {
      const response = await axios.get("/test");
      const data = response.data;
      setUser(data);
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

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <PageContainer navbar>
      <MainPageContainer>
        <div className="test">내일(naeil) 메인페이지</div>
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
