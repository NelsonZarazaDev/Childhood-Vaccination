import { useNavigate } from "react-router-dom";

export function salir(navigate) {
  localStorage.removeItem('decodedToken');
  localStorage.removeItem('last_names');
  localStorage.removeItem('token');
  localStorage.removeItem('first_name');
  localStorage.removeItem('rol');
  localStorage.removeItem('numVacunas');
  navigate("/");
}

export function validaToken(navigate) {
  if (localStorage.getItem("token") === null) {
    salir(navigate);
  }
}

export function validateLogin(navigate, route) {
  const userToken = localStorage.getItem("token");
  if (!!userToken) {
    navigate(route, { replace: true });
  }
}