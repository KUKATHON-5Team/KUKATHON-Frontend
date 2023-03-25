import styled from "styled-components";
import axios from "../api/axios";
import { PageContainer } from "../container/PageContainer";

export const MainPage = () => {
  const getUserInfo = async () => {
    try {
      const response = await axios.get("/user");
      const data = response.data;
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

  return (
    <PageContainer>
      <MainPageContainer>
        <Header>Header</Header>
        <div className="main">메인페이지</div>
        <div className="name">큐커톤</div>
      </MainPageContainer>
    </PageContainer>
  );
};

const MainPageContainer = styled.div`
  color: ${({ theme }) => theme.colors.mainColor};
  font-size: 20;
  div.main {
    margin-top: 20px;
  }
  div.name {
    color: red;
  }
  position: relative;
  height: 100%;
`;

const Header = styled.div`
  border: 1px solid black;
  box-sizing: border-box;
  width: 100%;
  position: absolute;
  top: 0;
`;
