import React from "react";
import { LuSearch } from "react-icons/lu";

export default function search() {
  return (
    <>
      <label className="flex">
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border-2 rounded-tl-full rounded-bl-full border-slate-300 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm border-r-0"
          placeholder="Buscar..."
          type="text"
          name="search"
        />
        <button className="flex w-10 items-center pl-2 border-2 border-slate-300 rounded-tr-full rounded-br-full border-l-0 font-bold text-xl text-lightGrey bg-ligh">
          <LuSearch />
        </button>
      </label>
    </>
  );
}
