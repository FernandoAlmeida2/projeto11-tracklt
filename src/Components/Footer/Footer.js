import styled from "styled-components";
import { COLORS } from "../../constants/colors";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { ProgressContext } from "../../Contexts";
import { useContext } from "react";

const { white, lightBlue } = COLORS;

export default function Footer() {
  const todayProgress = useContext(ProgressContext);
  return (
    <FooterStyle>
      <NavLink to="/habitos">Hábitos</NavLink>
      <NavLink to="/hoje">
        <FooterIcon>
          <CircularProgressbar
            value={todayProgress}
            text="Hoje"
            strokeWidth="10"
            styles={buildStyles({
              pathColor: white,
              textColor: white,
              trailColor: lightBlue,
            })}
          />
          ;
        </FooterIcon>
      </NavLink>
      <NavLink to="/historico">Histórico</NavLink>
    </FooterStyle>
  );
}

const FooterStyle = styled.div`
  position: fixed;
  z-index: 1;
  bottom: 0;
  background-color: ${white};
  width: 100vw;
  height: 9.31vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10vw;
`;

const FooterIcon = styled.div`
  position: absolute;
  bottom: 2vw;
  left: 37.85vw;
  width: 24.3vw;
  height: 24.3vw;
  border-radius: 24.3vw;
  padding: 1.5vw;
  background-color: ${lightBlue};
  z-index: 1;
`;

const NavLink = styled(Link)`
  color: ${lightBlue};
  font-size: 4.8vw;
  text-decoration: none;
  div {
    color: ${white};
  }
`;
