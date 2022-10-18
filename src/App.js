import styled from "styled-components";
import { mainFont } from "./constants/fonts";
import ResetStyle from "./styles/ResetStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Today from "./Pages/Today/Today";

export default function App() {
  function handleErrors(err){
    if(err.status === 401){
      alert(err.data.message);
    } else{
      alert(err.data.details);
    }
  }
  return (
    <AppContainer>
      <ResetStyle />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login handleErrors={handleErrors} />} />
        <Route path="/cadastro" element={<Register handleErrors={handleErrors} />} />
        <Route path="/hoje" element={<Today />} />
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
