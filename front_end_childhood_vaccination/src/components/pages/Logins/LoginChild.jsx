import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImg from "../../../assets/img/login.webp";
import ChatBot from "../../ChatBot/ChatBot";
import axios from "axios";
import InputLogin from "../../common/Login/InputLogin";
import ButtonLogin from "../../common/Login/ButtonLogin";
import Alerts from "../../common/Utilities/Alerts";
import { jwtDecode } from "jwt-decode";

export default function LoginChild() {
  const [login, setLogin] = useState({
    document: "",
  });

  const [alertInfo, setAlertInfo] = useState({
    message: "",
    type: "",
  });

  const { document } = login;
  const { message, type } = alertInfo;
  const navigate = useNavigate();


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
      localStorage.setItem('decodedToken', decodedToken.sub);
      localStorage.setItem('rol', rol);
      localStorage.setItem('token', respuesta.token);
      setAlertInfo({ message: "Sesión iniciada", type: "1" });
      navigate("/Menu/vaccinationCard");
    }catch (error) {
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
      <div className="h-[85vh] flex lg:items-center justify-center p-6">
        <div className="m-4 flex text-center bg-white h-full w-[90%] rounded-2xl drop-shadow-lg">
          <div className="m-auto w-full space-y-10">
            <div className="logo text-7xl font-bold">vaku</div>
            <form
              className="m-auto w-full flex flex-col items-center space-y-10"
              onSubmit={(e) => onSubmit(e)}
            >
              <InputLogin placeholder="DOCUMENTO" type="document" name="document" id="document" value={document} onChange={(e) => onInputChange(e)}/>
              <ButtonLogin/>
            </form>
            {message && <Alerts mensaje={message} tipo={type} />}
          </div>
          <div className=" md:visible z-[-1] h-full fixed opacity-30 flex items-center lg:flex lg:opacity-100 lg:relative lg:w-full lg:h-full lg:m-4">
            <img className="" src={loginImg} alt="" />
          </div>
        </div>
      </div>
      <div className="w-full h-[15%] flex items-end justify-end pr-6 flex-col pb-3 z-10 fixed">
        <ChatBot />
      </div>
    </div>
  );
}
