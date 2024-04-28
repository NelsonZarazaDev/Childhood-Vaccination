import React from "react";
import Search from "../../common/Search";
import Modalcomponent from "../../common/Utilities/Modalcomponent";
import { LuUserPlus2 } from "react-icons/lu";
import InputLogin from "../../common/Login/InputLogin";


export default function RegisterChild() {

  return (
    <>
      <div className="w-full flex space-y-8 justify-center font-bold text-2xl text-greenDarkBlue my-6">
        Registrar paciente
      </div>

      <div className="flex justify-between w-11/12 m-auto">
        <Modalcomponent estilos="h-10 w-28 flex items-center justify-center bg-greenDarkBlue rounded-full font-bold" text="Agregar" icon={<LuUserPlus2 className="text-xl ml-2" />} inp={<InputLogin/>} />
        <div> <Search/> </div>
      </div>
    </>
  );
}
