import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    box-sizing: border-box !important;
}
:root {
       --vh: 100%;
   }
`;

export default GlobalStyle;
