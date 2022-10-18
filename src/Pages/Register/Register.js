import logo from "../../images/logo.png";
import {
  LogRegStyle,
  InputStyle,
  ButtonStyle,
  NavLink,
} from "../../styles/CommonStyles";
import { ThreeDots } from "react-loader-spinner";
import { useState } from "react";

export default function Register() {
  const [isLoading, setLoading] = useState(false);
  function submitRegister(e) {
    e.preventDefault();
    setLoading(true);
  }
  return (
    <LogRegStyle>
      <img src={logo} alt="logo tracklt" />
      <form>
        <InputStyle placeholder="email" />
        <InputStyle placeholder="senha" />
        <InputStyle placeholder="nome" />
        <InputStyle placeholder="foto" />
        <ButtonStyle type="submit" onClick={submitRegister}>
          {isLoading ? (
            <ThreeDots height="50" width="50" radius="9" color="#ffffff" />
          ) : (
            "Cadastrar"
          )}
        </ButtonStyle>
      </form>
      <NavLink to="/">Já tem uma conta? Faça login!</NavLink>
    </LogRegStyle>
  );
}
