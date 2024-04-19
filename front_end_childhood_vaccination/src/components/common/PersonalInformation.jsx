import React from "react";
import img1 from "../../assets/img/8817519.webp";
import img2 from "../../assets/img/8817512.webp";

export default function PersonalInformation() {
  return (
    <>
      <div className="space-y-10 lg:flex lg:space-y-0 lg:space-x-10">
        <div className="bg-lightGreen rounded-[32px] w-full md:w-9/12 h-48 lg:h-52 md:flex justify-between">
          <div className="p-4 space-y-1 m-auto">
            <div className="flex space-x-1 font-bold">
              <div className="text-darkBlue	">Nombre:</div>
              <div>Nelson Mauricio Navarro Zaraza</div>
            </div>

            <div className="flex space-x-1 font-bold">
              <div className="text-darkBlue">Fecha de nacimiento:</div>
              <div>04/06/2003</div>
            </div>

            <div className="flex space-x-1 font-bold">
              <div className="text-darkBlue	">Departamento:</div>
              <div>Norte de Santander</div>
            </div>

            <div className="flex space-x-1 font-bold">
              <div className="text-darkBlue	">Municipio:</div>
              <div>Ocaña</div>
            </div>

            <div className="flex space-x-1 font-bold">
              <div className="text-darkBlue">Sexo:</div>
              <div>Masculino</div>
            </div>
          </div>
          <img
            className="w-32 h-32 md:w-60 md:h-56 lg:w-60 lg:h-60 overflow-hidden translate-x-64 md:translate-x-0 -translate-y-[6.5rem] md:-translate-y-8 lg:-translate-y-8"
            src={img1}
            alt=""
          />
        </div>

        <div className="bg-lightGreen rounded-[32px] w-full md:w-9/12 h-48 lg:h-52 md:flex justify-between">
          <div className="p-4 space-y-1 m-auto">
            <div className="flex space-x-1 font-bold">
              <div className="text-darkBlue	">Nombre madre:</div>
              <div>Carmenza Zaraza Diaz</div>
            </div>

            <div className="flex space-x-1 font-bold">
              <div className="text-darkBlue">Nombre padre:</div>
              <div>Nelson Navarro Lobo</div>
            </div>

            <div className="flex space-x-1 font-bold">
              <div className="text-darkBlue">Documento madre:</div>
              <div>1007977211</div>
            </div>

            <div className="flex space-x-1 font-bold">
              <div className="text-darkBlue">Documento padre:</div>
              <div>1007977211</div>
            </div>

            <div className="flex space-x-1 font-bold">
              <div className="text-darkBlue	">Teléfono madre:</div>
              <div>3157465208</div>
            </div>

            <div className="flex space-x-1 font-bold">
              <div className="text-darkBlue	">Teléfono padre:</div>
              <div>3157465208</div>
            </div>

          </div>
          <img
            className="w-32 h-32 md:w-60 md:h-56 lg:w-60 lg:h-60 overflow-hidden translate-x-64 md:translate-x-0 -translate-y-[8.3rem] md:-translate-y-8 lg:-translate-y-8"
            src={img2}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
