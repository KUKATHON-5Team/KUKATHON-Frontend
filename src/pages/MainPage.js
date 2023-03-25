import styled from "styled-components";
import axios from "../api/axios";

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
    <MainPageContainer>
      <div>메인페이지</div>
      <div className="name">큐커톤</div>
    </MainPageContainer>
  );
};

const MainPageContainer = styled.div`
  color: ${({ theme }) => theme.colors.mainColor};
  font-size: 20;
  div.name {
    color: red;
  }
`;
