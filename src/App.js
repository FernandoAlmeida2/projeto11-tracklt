import styled from "styled-components";
import { mainFont } from "./constants/fonts";
import ResetStyle from "./styles/ResetStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Today from "./Pages/Today/Today";
import { UserContext } from "./Contexts";
import { useState } from "react";

export default function App() {
  const [userLogged, setUserLogged] = useState(null);
  const [todayProgress, setProgress] = useState(0);
  function handleErrors(err) {
    if (err.status === 401) {
      alert(err.data.message);
    } else {
      alert(err.data.details);
    }
  }
  return (
    <AppContainer>
      <UserContext.Provider value={userLogged}>
        <ResetStyle />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Login
                  handleErrors={handleErrors}
                  setUserLogged={setUserLogged}
                />
              }
            />
            <Route
              path="/cadastro"
              element={<Register handleErrors={handleErrors} />}
            />
            <Route
              path="/hoje"
              element={
                <Today
                  handleErrors={handleErrors}
                  todayProgress={todayProgress}
                  setProgress={setProgress}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  * {
    box-sizing: border-box;
    font-family: ${mainFont};
  }
`;
