import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import loginImg from "../../../assets/img/login.webp";
import ChatBot from "../../ChatBot/ChatBot";
import axios from "axios";
import Input from "../../common/Utilities/Input";
import ButtonLogin from "../../common/Login/ButtonLogin";
import Alerts from "../../common/Utilities/Alerts";
import { jwtDecode } from "jwt-decode";
import { validateLogin } from "../../common/Utilities/funciones";
var CryptoJS = require("crypto-js");

export default function LoginChild() {
  const navigate = useNavigate();
  const secretKey =
    "jW(FE$61_f,d%_H%&],=..tm%QzX6M.4k!W)T}&0=f$m#:75?SR72nRZ)!p_VNZ@SpbMdc==rM+(9:hzcEe%f94ifgL}ZjDAK2/h";

  useEffect(() => {
    const rolUsuario = localStorage.getItem("rol");
    if (rolUsuario === "Child") {
      validateLogin(navigate, "/Menu/vaccinationCard");
    }
    if (rolUsuario === "Jefe de enfermeria") {
      validateLogin(navigate, "/Menu");
    } else {
      validateLogin(navigate, "/Menu/RegisterChild");
    }
  }, []);

  const [login, setLogin] = useState({
    document: "",
  });

  const [alertInfo, setAlertInfo] = useState({
    message: "",
    type: "",
  });

  const { document } = login;
  const { message, type } = alertInfo;

  const onInputChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8088/auth/loginChild";
      const response = await axios.post(url, login);
      const respuesta = response.data;
      const decodedToken = jwtDecode(respuesta.token);
      const rol = "Child";
      localStorage.setItem("rol", rol);
      localStorage.setItem("token", respuesta.token);
      setAlertInfo({ message: "Sesión iniciada", type: "1" });
      const document = decodedToken.sub;
      // navigate("/Menu/vaccinationCard/" + CryptoJS.TripleDES.encrypt(decodedToken.sub, secretKey));
      navigate("/Menu/vaccinationCard/"+document);
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
      <div className="h-[90vh] flex lg:items-center justify-center p-6">
        <div className="m-4 flex flex-col text-center bg-white h-full w-[90%] rounded-2xl drop-shadow-lg">
          <Link
            className="text-darkBlue font-bold text-lg p-4 flex justify-end"
            to={`loginVaccinator`}
          >
            Personal de salud
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
                  placeholder="DOCUMENTO"
                  type="document"
                  name="document"
                  id="document"
                  value={document}
                  onChange={(e) => onInputChange(e)}
                />
                <ButtonLogin />
              </form>
              {message && <Alerts mensaje={message} tipo={type} />}
            </div>

            <div className=" md:visible z-[-1] h-full fixed opacity-30 flex items-center lg:flex lg:opacity-100 lg:relative lg:w-full lg:h-full lg:m-4">
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
