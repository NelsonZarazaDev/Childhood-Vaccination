import React, { useState } from "react";
import { LuSearch } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import Alerts from "./Utilities/Alerts";

export default function Search({ code }) {
  let navigate = useNavigate();
  const [search, setSearch] = useState("");

  const onInputChange = (e) => {
    setSearch({ search, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("Valor de search.search:", search.search); // Agregar este console.log
    if (code === "pt}YXn4f{F})+-BK(0k2jrt;m+T6*Ezr)L#a]udGFH]qK0R{a/2jR],iD") {
      navigate("/Menu/CreateUsers/User/" + search.search);
    } else {
      navigate("/Menu/RegisterChild/Action/" + search.search);
    }
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
    </>
  );
}
