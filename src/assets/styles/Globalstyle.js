import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    font-family: RobotoInCjk, 'Noto Sans KR', 'Apple SD Gothic Neo',
      'Nanum Gothic', 'Malgun Gothic', sans-serif;
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    box-sizing: border-box !important;
    padding-top: 80px;
}
:root {
       --vh: 100%;
   }
`;

export default GlobalStyle;
