import styled from "styled-components";

export const MainPage = () => {
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
