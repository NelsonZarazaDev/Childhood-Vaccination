import axios from "axios";

const header = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
};
 
export async function GetChild(document) {
  const urlReadChild = "http://localhost:8088/child/";
  const resultado = await axios.get(`${urlReadChild}${document}`, {headers: header,});
  console.log(resultado.data);
  return resultado.data;
}