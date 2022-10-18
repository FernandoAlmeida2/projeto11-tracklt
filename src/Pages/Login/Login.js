import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Login() {
  return (
    <LoginStyle>
      <img src={logo} alt="logo tracklt" />
      <form>
        <InputStyle placeholder="email" />
        <InputStyle placeholder="senha" />
        <ButtonStyle type="submit">Entrar</ButtonStyle>
      </form>
      <NavLink>Não tem uma conta? Cadastre-se!</NavLink>
    </LoginStyle>
  );
}

const LoginStyle = styled.div`
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
const InputStyle = styled.input`
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  width: 80.8vw;
  height: 12vw;
  padding-left: 1vw;

  ::placeholder {
    opacity: 1;
    font-size: 5.33vw;
    color: #dbdbdb;
  }
`;

const ButtonStyle = styled.button`
  width: 80.8vw;
  height: 12vw;
  background: #52b6ff;
  border-radius: 4.63636px;
  border: none;
  color: #ffffff;
  font-size: 5.33vw;
`;

const NavLink = styled(Link)`
  font-size: 3.73vw;
  color: #52B6FF;
  margin-top: 7vw;
`;
