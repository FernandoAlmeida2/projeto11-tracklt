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

export default function Register() {
  const [isLoading, setLoading] = useState(false);
  const [registerBody, setRegister] = useState({
    email: "",
    name: "",
    image: "",
    password: "",
  });
  const navigate = useNavigate();

  function handleForm(e) {
    setRegister({ ...registerBody, [e.target.name]: e.target.value });
  }

  function submitRegister(e) {
    e.preventDefault();
    if (!isLoading) {
      setLoading(true);
      axios
        .post(`${BASE_URL}auth/sign-up`, registerBody)
        .then((res) => {
          console.log(res.data);
          navigate("/");
        })
        .catch((err) => {
          setLoading(false);
          alert(err.response.data.details);
        });
    }
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
          required
        />
        <InputStyle
          placeholder="senha"
          name="password"
          type="password"
          isLoading={isLoading}
          onChange={handleForm}
          disabled={isLoading}
          required
        />
        <InputStyle
          placeholder="nome"
          name="name"
          isLoading={isLoading}
          onChange={handleForm}
          disabled={isLoading}
          required
        />
        <InputStyle
          placeholder="foto"
          name="image"
          type="url"
          isLoading={isLoading}
          onChange={handleForm}
          disabled={isLoading}
          required
        />
        <ButtonStyle
          type="submit"
          isLoading={isLoading}
          onClick={submitRegister}
        >
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
