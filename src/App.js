import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./assets/styles/Globalstyle";
import theme from "./assets/styles/theme";
import { MainPage } from "./pages/MainPage";
import { LogIn } from "./pages/LogIn";
import { JobPage } from "./pages/JobPage";
import { JobListPage } from "./pages/JobListPage";
import { useEffect } from "react";

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<LogIn />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/job" element={<JobPage />} />
            <Route path="/joblist" element={<JobListPage />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
