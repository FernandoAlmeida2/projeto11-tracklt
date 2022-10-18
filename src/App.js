import styled from "styled-components";
import { mainFont } from "./constants/fonts";
import ResetStyle from "./styles/ResetStyle";

export default function App() {
  return (
    <AppContainer>
      <ResetStyle />
      <div>Projetão tracklt</div>
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
