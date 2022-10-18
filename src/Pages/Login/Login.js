import logo from "../../images/logo.png";
import { LogRegStyle, InputStyle, ButtonStyle, NavLink } from "../../styles/CommonStyles";

export default function Login() {
  return (
    <LogRegStyle>
      <img src={logo} alt="logo tracklt" />
      <form>
        <InputStyle placeholder="email" />
        <InputStyle placeholder="senha" />
        <ButtonStyle type="submit">Entrar</ButtonStyle>
      </form>
      <NavLink to="/cadastro">Não tem uma conta? Cadastre-se!</NavLink>
    </LogRegStyle>
  );
}

