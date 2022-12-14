import styled from "styled-components";
import { mainFont } from "./constants/fonts";
import ResetStyle from "./styles/ResetStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Today from "./Pages/Today/Today";
import { UserContext, ProgressContext } from "./Contexts";
import { useState } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Habits from "./Pages/Habits/Habits";
import History from "./Pages/History/History";

export default function App() {
  const [userLogged, setUserLogged] = useState(null);
  const [todayProgress, setProgress] = useState(0);
  return (
    <AppContainer>
      <ProgressContext.Provider value={todayProgress}>
        <UserContext.Provider value={userLogged}>
          <ResetStyle />
          <BrowserRouter>
            {userLogged && <Header />}
            <Routes>
              <Route
                path="/"
                element={<Login setUserLogged={setUserLogged} />}
              />
              <Route
                path="/cadastro"
                element={<Register/>}
              />
              <Route
                path="/hoje"
                element={<Today setProgress={setProgress} />}
              />
              <Route
                path="/habitos"
                element={<Habits />}
              />
              <Route path="/historico" element={<History />} />
            </Routes>
            {userLogged && <Footer />}
          </BrowserRouter>
        </UserContext.Provider>
      </ProgressContext.Provider>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  * {
    box-sizing: border-box;
    font-family: ${mainFont};
  }
`;
