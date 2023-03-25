import styled from "styled-components";

export const LoginContainer = ({ children }) => {
    return (
        <LoginContainerBox>
            {children}
        </LoginContainerBox>
    );
};

const LoginContainerBox = styled.div`
  width: 100vw;
  max-width: 420px;
  justify-content: center;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  box-sizing: border-box;
`;
