import styled from "styled-components";
import { TopNav } from "../components/TopNav";
import { Navbar } from "../components/Navbar";

export const PageContainer = ({ children, topnav, navbar }) => {
  return (
    <PageContainerBox>
      {topnav ? <TopNav /> : null}
      {children}
      {navbar ? <Navbar /> : null}
    </PageContainerBox>
  );
};

const PageContainerBox = styled.div`
  width: 100vw;
  max-width: 420px;
  justify-content: center;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  box-sizing: border-box;
`;
