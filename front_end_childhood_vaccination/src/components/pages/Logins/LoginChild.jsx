import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import loginImg from "../../../assets/img/login.webp";
import ChatBot from "../../ChatBot/ChatBot";
import axios from "axios";
import Input from "../../common/Utilities/Input";
import ButtonLogin from "../../common/Login/ButtonLogin";
import Alerts from "../../common/Utilities/Alerts";
import { jwtDecode } from "jwt-decode";
import { requestNotificationPermission, validateLogin } from "../../common/Utilities/funciones";
var CryptoJS = require("crypto-js");

export default function LoginChild() {
  const navigate = useNavigate();

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

  const [alertInfoList, setAlertInfoList] = useState([]);


  const [login, setLogin] = useState({
    document: "",
  });



  const { document } = login;

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
      addAlert("Sesión iniciada", "1");
      const document = decodedToken.sub;
      navigate("/Menu/vaccinationCard/"+ btoa(document));
    } catch (error) {
      if (error.response && error.response.data) {
        const data = error.response.data;
        const dataArray = Object.values(data);
        console.log(dataArray);
        addAlert(dataArray[0], "2");
      } else {
        addAlert(
          "Error al procesar la solicitud. Por favor, inténtalo de nuevo más tarde.",
          "2"
        );
      }
    }
  };

  const addAlert = (message, type) => {
    const newAlertInfoList = [...alertInfoList, { message, type }];
    setAlertInfoList(newAlertInfoList);
  };

  return (
    <div className="w-full h-screen bg-lightGreen">
      <div className="h-[90vh] items-center flex lg:items-center justify-center p-6">
        <div className="m-4 flex flex-col text-center bg-white w-[90%] rounded-2xl drop-shadow-lg p-4">
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
                  estilos="bg-lightGreen md:w-3/4 p-3 w-full rounded-lg font-bold"
                  placeholder="DOCUMENTO"
                  type="document"
                  name="document"
                  id="document"
                  value={document}
                  onChange={(e) => onInputChange(e)}
                />
                <ButtonLogin />
              </form>
              {alertInfoList.map((alert, index) => (
                <Alerts key={index} mensaje={alert.message} tipo={alert.type} />
              ))}
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
