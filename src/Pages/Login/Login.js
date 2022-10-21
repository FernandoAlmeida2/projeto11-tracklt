import logo from "../../images/logo.png";
import {
  LogRegStyle,
  InputStyle,
  ButtonStyle,
  NavLink,
} from "../../styles/CommonStyles";
import { ThreeDots } from "react-loader-spinner";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { useNavigate } from "react-router-dom";
import handleErrors from "../../handleErrors";

export default function Login({ setUserLogged }) {
  const [isLoading, setLoading] = useState(false);
  const [loginBody, setLogin] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  function handleForm(e) {
    setLogin({ ...loginBody, [e.target.name]: e.target.value });
  }

  function submitLogin(e) {
    if (!isLoading) {
      setLoading(true);
      axios
        .post(`${BASE_URL}auth/login`, loginBody)
        .then((res) => {
          localStorage.setItem("user", JSON.stringify(res.data));
          setUserLogged(res.data);
          navigate("/hoje");
        })
        .catch((err) => {
          setLoading(false);
          handleErrors(err.response);
        });
    }
  }
  if (localStorage.getItem("user") !== null) {
    const userObj = JSON.parse(localStorage.getItem("user"));
    setUserLogged(userObj);
    navigate("/hoje");
  }

  return (
    <LogRegStyle>
      <img src={logo} alt="logo tracklt" />
      <form>
        <InputStyle
          placeholder="email"
          name="email"
          type="email"
          isLoading={isLoading}
          onChange={handleForm}
          disabled={isLoading}
          data-identifier="input-email"
          required
        />
        <InputStyle
          placeholder="senha"
          type="password"
          name="password"
          isLoading={isLoading}
          onChange={handleForm}
          disabled={isLoading}
          data-identifier="input-password"
          required
        />
        <ButtonStyle
          onClick={submitLogin}
          isLoading={isLoading}
          data-identifier="login-btn"
        >
          {isLoading ? (
            <ThreeDots height="50" width="50" radius="9" color="#ffffff" />
          ) : (
            "Entrar"
          )}
        </ButtonStyle>
      </form>
      <NavLink to="/cadastro" data-identifier="sign-up-action">
        Não tem uma conta? Cadastre-se!
      </NavLink>
    </LogRegStyle>
  );
}
