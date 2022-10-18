import logo from "../../images/logo.png";
import {
  LogRegStyle,
  InputStyle,
  ButtonStyle,
  NavLink,
} from "../../styles/CommonStyles";
import { ThreeDots } from "react-loader-spinner";
import { useState } from "react";

export default function Login() {
  const [isLoading, setLoading] = useState(false);
  function submitLogin(e) {
    e.preventDefault();
    setLoading(true);
  }
  return (
    <LogRegStyle>
      <img src={logo} alt="logo tracklt" />
      <form>
        <InputStyle placeholder="email" />
        <InputStyle placeholder="senha" />
        <ButtonStyle type="submit" onClick={submitLogin}>
          {isLoading ? (
            <ThreeDots height="50" width="50" radius="9" color="#ffffff" />
          ) : (
            "Entrar"
          )}
        </ButtonStyle>
      </form>
      <NavLink to="/cadastro">Não tem uma conta? Cadastre-se!</NavLink>
    </LogRegStyle>
  );
}
