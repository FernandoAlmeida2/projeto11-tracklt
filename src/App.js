import styled from "styled-components";
import { mainFont } from "./constants/fonts";
import ResetStyle from "./styles/ResetStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

export default function App() {
  return (
    <AppContainer>
      <ResetStyle />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
      </Routes>
      </BrowserRouter>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  * {
    box-sizing: border-box;
    font-family: ${mainFont}
  }
  width: 100vw;
  height: 100vh;
`;
