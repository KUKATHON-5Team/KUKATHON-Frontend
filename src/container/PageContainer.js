import styled from "styled-components";

export const PageContainer = ({ children }) => {
  return <PageContainerBox>{children}</PageContainerBox>;
};

const PageContainerBox = styled.div`
  width: 100vw;
  max-width: 420px;
  justify-content: center;
  height: calc(var(--vh, 1vh) * 100);
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
`;
