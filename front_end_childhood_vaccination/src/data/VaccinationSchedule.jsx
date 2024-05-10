import axios from "axios";
import { useNavigate } from "react-router-dom";
import Alerts from "../components/common/Utilities/Alerts";

const header = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
};

export async function GetChild(document, navigate) {
  try {
    const urlReadChild = "http://localhost:8088/child/";
    const resultado = await axios.get(`${urlReadChild}${document}`, {
      headers: header,
    });
    return resultado.data;
  } catch (error) {
    navigate("./", {replace:true});
    return;
  }
}
