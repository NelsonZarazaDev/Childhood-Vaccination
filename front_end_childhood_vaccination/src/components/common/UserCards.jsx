import React from "react";
import { RiEdit2Line } from "react-icons/ri";
import { PiEyeBold } from "react-icons/pi";



export default function UserCards() {
  return (
    <>
      <div className="bg-green-300 rounded-md break-words w-full p-4">
        <div className="font-bold text-center text-lg pb-4 uppercase">secretaria</div>
        <div className="space-y-2">
          <div className="flex space-x-2">
            <div className="font-bold">Nombre:</div>
            <div>Nelson Mauricio Navarro Zaraza</div>
          </div>
          <div className="flex space-x-2">
            <div className="font-bold">Documento:</div>
            <div>1007977211</div>
          </div>
          <div className="flex space-x-2">
            <div className="font-bold">Dirección:</div>
            <div>Calle 19b #13b-78</div>
          </div>
          <div className="flex space-x-2">
            <div className="font-bold">Teléfono:</div>
            <div>3157465208</div>
          </div>
          <div className="flex space-x-2">
            <div className="font-bold">Fecha de nacimiento:</div>
            <div>04/06/2003</div>
          </div>
          <div className="flex space-x-2">
            <div className="font-bold">Fecha de admisión:</div>
            <div>04/06/2003</div>
          </div>
          <div className="flex space-x-2">
            <div className="font-bold">Código:</div>
            <div>191971</div>
          </div>
          <div className="flex space-x-2">
            <div className="font-bold">Estado:</div>
            <div className="uppercase ">T</div>
          </div>

          <div className="flex space-x-2 justify-center">
            <button className="text-xl p-2 rounded-md bg-yellow-300"><RiEdit2Line/></button>
            <button className="text-xl p-2 rounded-md bg-blue-400"><PiEyeBold  /></button>
          </div>
        </div>
      </div>
    </>
  );
}
