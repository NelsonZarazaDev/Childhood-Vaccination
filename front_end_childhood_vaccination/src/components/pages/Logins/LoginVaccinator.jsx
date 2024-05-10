import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import loginImg from "../../../assets/img/login.webp";
import ChatBot from "../../ChatBot/ChatBot";
import axios from "axios";
import Alerts from "../../common/Utilities/Alerts";
import Input from "../../common/Utilities/Input";
import ButtonLogin from "../../common/Login/ButtonLogin";
import { jwtDecode } from "jwt-decode";
import { validateLogin } from "../../common/Utilities/funciones";

export default function LoginVaccinator() {
  let navigate = useNavigate();

  useEffect(() => {
    validateLogin(navigate, "/Menu/RegisterChild");
  }, []);

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [alertInfo, setAlertInfo] = useState({
    message: "",
    type: "",
  });

  const { email, password } = login;
  const { message, type } = alertInfo;

  const onInputChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8088/auth/login";
      const response = await axios.post(url, login);
      const respuesta = response.data;
      const decodedToken = jwtDecode(respuesta.token);
      localStorage.setItem("decodedToken", decodedToken.sub);
      localStorage.setItem("token", respuesta.token);
      const token = localStorage.getItem("token");
      const user = localStorage.getItem("decodedToken");
      const header = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      const urlVaccinator = "http://localhost:8088/vaccinator/";
      const resultado = await axios.get(`${urlVaccinator}${user}`, {
        headers: header,
      });
      localStorage.setItem("rol", resultado.data.role);
      localStorage.setItem("first_name", resultado.data.first_name);
      localStorage.setItem("last_names", resultado.data.last_names);
      setAlertInfo({ message: "Sesión iniciada", type: "1" });
      navigate("/Menu/RegisterChild");
    } catch (error) {
      if (error.response && error.response.data) {
        const data = error.response.data;
        const dataArray = Object.values(data);
        setAlertInfo({ message: dataArray[0], type: "2" });
      } else {
        setAlertInfo({
          message:
            "Error al procesar la solicitud. Por favor, inténtalo de nuevo más tarde.",
          type: "2",
        });
      }
    }
  };

  return (
    <div className="w-full h-screen bg-lightGreen">
      <div className="h-[90vh] items-center flex lg:items-center justify-center p-6">
        <div className="m-4 flex flex-col text-center bg-white w-[90%] rounded-2xl drop-shadow-lg p-4">
          <Link
            className="text-darkBlue font-bold text-lg p-4 flex justify-end"
            to={`/`}
          >
            Usuario
          </Link>
          <div className="flex">
            <div className="m-auto w-full space-y-10">
              <div className="logo text-7xl font-bold">vaku</div>
              <form
                className="m-auto w-full flex flex-col items-center space-y-10"
                onSubmit={(e) => onSubmit(e)}
              >
                <Input
                  estilos="bg-lightGreen p-3 w-[70%] rounded-lg font-bold"
                  placeholder="CORREO"
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => onInputChange(e)}
                />
                <Input
                  estilos="bg-lightGreen p-3 w-[70%] rounded-lg font-bold"
                  placeholder="CONTRASEÑA"
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => onInputChange(e)}
                />

                <ButtonLogin />
              </form>
              {message && <Alerts mensaje={message} tipo={type} />}
            </div>
            <div className="invisible hidden md:visible fixed items-center lg:flex lg:opacity-100 lg:relative lg:w-full lg:h-full lg:m-4">
              <img className="" src={loginImg} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[10%] flex items-end justify-end pr-6 flex-col pb-3 z-10 fixed">
        <ChatBot />
      </div>
    </div>
  );
}
