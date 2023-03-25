import styled from "styled-components";

export const PageContainer = () => {
  return <PageContainerBox></PageContainerBox>;
};

const PageContainerBox = styled.div`
  min-width: 420px;
  justify-content: center;
  height: calc(var(--vh, 1vh) * 100);
  background-color: aliceblue;
`;
