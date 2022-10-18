import styled from "styled-components";
import { Link } from "react-router-dom";

//Login and register styles

export const LogRegStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  width: 80.8vw;
  height: 12vw;
  padding-left: 2vw;
  font-size: 5.33vw;
  background-color: ${(props) => (props.isLoading ? "#F2F2F2" : "ffffff")};
  color: ${(props) => (props.isLoading ? "#AFAFAF;" : "#666666")};

  ::placeholder {
    opacity: 1;
    font-size: 5.33vw;
    color: #dbdbdb;
  }
`;

export const ButtonStyle = styled.div`
  opacity: ${(props) => (props.isLoading ? 0.7 : 1)};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80.8vw;
  height: 12vw;
  background: #52b6ff;
  border-radius: 4.63636px;
  border: none;
  color: #ffffff;
  font-size: 5.33vw;
  cursor: ${(props) => (props.isLoading ? "auto" : "pointer")};
`;

export const NavLink = styled(Link)`
  font-size: 3.73vw;
  color: #52b6ff;
  margin-top: 7vw;
`;
