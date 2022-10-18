import logo from "../../images/logo.png";
import { LogRegStyle, InputStyle, ButtonStyle, NavLink } from "../../styles/CommonStyles";

export default function Register() {
  return (
    <LogRegStyle>
      <img src={logo} alt="logo tracklt" />
      <form>
        <InputStyle placeholder="email" />
        <InputStyle placeholder="senha" />
        <InputStyle placeholder="nome" />
        <InputStyle placeholder="foto" />
        <ButtonStyle type="submit">Cadastrar</ButtonStyle>
      </form>
      <NavLink to="/">Já tem uma conta? Faça login!</NavLink>
    </LogRegStyle>
  );
}

