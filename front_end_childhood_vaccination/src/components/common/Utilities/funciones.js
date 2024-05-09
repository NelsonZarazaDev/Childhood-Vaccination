import { useNavigate } from "react-router-dom";

export function salir(navigate) {
  localStorage.clear();
  navigate("/");
}

export function validaToken(navigate) {
  if (localStorage.getItem("token") === null) {
    salir(navigate);
  }
}

export function validateLogin(navigate, route){
    const userToken = localStorage.getItem('token');
    if(!!userToken){
      navigate(route, {replace:true});
    }
}