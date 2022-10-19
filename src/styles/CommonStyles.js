import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS, inputColors } from "../constants/colors";

const { lightBlue, white, text} = COLORS;

//Login and register styles

export const LogRegStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${white};
  height: 100vh;
  img {
    margin: 16vw 0 8vw 0;
    width: 48vw;
    max-height: 48vw;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.5vw;
  }
`;
export const InputStyle = styled.input`
  border: 1px solid ${inputColors.border};
  border-radius: 5px;
  width: 80.8vw;
  height: 12vw;
  padding-left: 2vw;
  font-size: 5.33vw;
  background-color: ${(props) => (props.isLoading ? inputColors.blocked : white)};
  color: ${(props) => (props.isLoading ? inputColors.loading : text)};

  ::placeholder {
    opacity: 1;
    font-size: 5.33vw;
    color: ${inputColors.placeholder};
  }
`;

export const ButtonStyle = styled.div`
  opacity: ${(props) => (props.isLoading ? 0.7 : 1)};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80.8vw;
  height: 12vw;
  background: ${lightBlue};
  border-radius: 4.63636px;
  border: none;
  color: ${white};
  font-size: 5.33vw;
  cursor: ${(props) => (props.isLoading ? "auto" : "pointer")};
`;

export const NavLink = styled(Link)`
  font-size: 3.73vw;
  color: ${lightBlue};
  margin-top: 7vw;
`;
