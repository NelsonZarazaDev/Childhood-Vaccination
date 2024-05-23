import React, { useState } from "react";
import { LuSearch } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import Alerts from "./Utilities/Alerts";
import axios from "axios";

export default function Search({ code }) {
  const [search, setSearch] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Estado para almacenar el mensaje de error
  const navigate = useNavigate();

  const onInputChange = (e) => {
    setSearch(e.target.value);
  };
  const token = localStorage.getItem("token");

  const header = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!search.trim()) {
        return;
      }

      if (
        code === "pt}YXn4f{F})+-BK(0k2jrt;m+T6*Ezr)L#a]udGFH]qK0R{a/2jR],iD"
      ) {
        const resultado = await axios.get(
          "http://localhost:8088/vaccinator/" + search,
          { headers: header }
        );
        if (!resultado || !resultado.data) {
          return; // Si no se recibe ningún dato de la base de datos, salir de la función
        }
        navigate("/Menu/CreateUsers/User/" + btoa(search));
      } else {
        const resultado = await axios.get(
          "http://localhost:8088/child/" + search,
          { headers: header }
        );
        if (!resultado || !resultado.data) {
          return; // Si no se recibe ningún dato de la base de datos, salir de la función
        }
        navigate("/Menu/RegisterChild/Action/" + btoa(search));
      }
    } catch (error) {}
  };

  return (
    <>
      <form onSubmit={(e) => onSubmit(e)}>
        <label className="flex w-44 md:w-auto">
          <input
            id="search"
            name="search"
            className="placeholder:italic font-medium placeholder:text-slate-400 block bg-white w-full border-2 rounded-tl-full rounded-bl-full border-slate-300 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm border-r-0"
            placeholder="Buscar..."
            type="text"
            onChange={(e) => onInputChange(e)}
          />
          <button
            type="submit"
            className="flex w-10 items-center pl-2 border-2 border-slate-300 rounded-tr-full rounded-br-full border-l-0 font-bold text-xl text-lightGrey bg-ligh"
          >
            <LuSearch />
          </button>
        </label>
      </form>
      {errorMessage && <Alerts message={errorMessage} />}{" "}
      {/* Renderizar el mensaje de error si existe */}
    </>
  );
}
