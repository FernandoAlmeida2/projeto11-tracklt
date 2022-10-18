import styled from "styled-components";
import footerIcon from "../../images/footerIcon.png";

export default function Footer() {
  return (
    <FooterStyle>
      <h1>Hábitos</h1>
      <FooterIcon>
        <div>
          <h2>Hoje</h2>
          <img src={footerIcon} alt="footer-icon" />
        </div>
      </FooterIcon>

      <h1>Histórico</h1>
    </FooterStyle>
  );
}

const FooterStyle = styled.div`
  position: fixed;
  z-index: 1;
  bottom: 0;
  background-color: #ffffff;
  width: 100vw;
  height: 9.31vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10vw;
  h1 {
    color: #52b6ff;
    font-size: 4.8vw;
  }
`;

const FooterIcon = styled.div`
  position: absolute;
  bottom: 2vw;
  left: 37.85vw;
  width: 24.3vw;
  height: 24.3vw;
  border-radius: 24.3vw;
  background-color: #52b6ff;
  z-index: 1;
  div {
    width: 24.3vw;
    height: 24.3vw;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    img {
      position: absolute;
      right: 1.6vw;
      width: 18.7vw;
      height: 21.7vw;
    }

    h2 {
      color: #ffffff;
      font-size: 4.8vw;
    }
  }
`;
