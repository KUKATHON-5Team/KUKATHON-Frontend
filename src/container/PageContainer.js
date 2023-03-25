import styled from "styled-components";
import { TopNav } from "../components/TopNav";
import { Navbar } from "../components/Navbar";
import { JobNavbar } from "../components/JobNavbar";

export const PageContainer = ({ children, topnav, navbar, job }) => {
  return (
    <PageContainerBox>
      {topnav ? <TopNav /> : null}
      {job ? <JobNavbar /> : null}
      {children}
      {navbar ? <Navbar /> : null}
    </PageContainerBox>
  );
};

const PageContainerBox = styled.div`
  width: 100vw;
  min-width: 360px;
  max-width: 420px;
  justify-content: center;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-top: none;
  box-sizing: border-box;
`;
