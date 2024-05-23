import React from "react";
import img1 from "../../../assets/img/8817519.webp";
import img2 from "../../../assets/img/8817512.webp";

export default function PersonalInformation({child}) {
  localStorage.setItem("numVacunas", child.numVacunas);
  return (
    <>
      <div className="space-y-10 md:flex md:items-center md:flex-col lg:flex-row lg:space-y-0 lg:space-x-10">
        <div className="bg-lightGreen rounded-[32px] w-full md:w-10/12 overflow-hidden md:overflow-visible h-60 sm:h-48 lg:h-52 md:flex justify-between shadow-xl">
          <div className="p-4 space-y-1 lg:m-auto relative z-[2]">
            <div className="flex space-x-1 font-bold">
              <div className="text-darkBlue	">Nombre:</div>
              <div className="font-medium">{child.first_name+ ' ' + child.last_name}</div>
            </div>

            <div className="flex space-x-2 font-bold">
              <div className="text-darkBlue">Fecha de nacimiento:</div>
              <div className="font-medium">{child.birth_date}</div>
            </div>

            <div className="flex space-x-1 font-bold">
              <div className="text-darkBlue	">Departamento:</div>
              <div className="font-medium">{child.birth_department}</div>
            </div>

            <div className="flex space-x-1 font-bold">
              <div className="text-darkBlue	">Municipio:</div>
              <div className="font-medium">{child.city_birth}</div>
            </div>

            <div className="flex space-x-1 font-bold">
              <div className="text-darkBlue">Sexo:</div>
              <div className="font-medium">{child.sex}</div>
            </div>
          </div>
          <img
            className="w-44 h-44 invisible sm:visible sm:-translate-y-[11.2rem] sm:translate-x-[14rem] md:w-60 md:h-56 lg:w-60 lg:h-60 overflow-hidden md:translate-x-0  md:-translate-y-8 lg:-translate-y-8 relative z-0 opacity-30 md:opacity-100"
            src={img1}
            alt=""
          />
        </div>

        <div className="bg-lightGreen rounded-[32px] w-full md:w-10/12 overflow-hidden md:overflow-visible h-60 sm:h-48 lg:h-52 md:flex justify-between shadow-xl">
          <div className="p-4 space-y-1 lg:m-auto relative z-[2]">

            <div className="flex space-x-1 font-bold">
              <div className="text-darkBlue	">Nombre madre:</div>
              <div className="font-medium">{child.parents_mother_name+ ' ' + child.parents_mother_last_name}</div>
            </div>

            <div className="flex space-x-1 font-bold">
              <div className="text-darkBlue">Nombre padre:</div>
              <div className="font-medium">{child.parents_father_name+ ' ' + child.parents_father_last_name}</div>
            </div>

            <div className="flex space-x-1 font-bold">
              <div className="text-darkBlue">Documento madre:</div>
              <div className="font-medium">{child.parents_document_mother}</div>
            </div>

            <div className="flex space-x-1 font-bold">
              <div className="text-darkBlue">Documento padre:</div>
              <div className="font-medium">{child.parents_document_father}</div>
            </div>

            <div className="flex space-x-1 font-bold">
              <div className="text-darkBlue	">Teléfono madre:</div>
              <div className="font-medium">{child.parents_phone_mother}</div>
            </div>

            <div className="flex space-x-1 font-bold">
              <div className="text-darkBlue	">Teléfono padre:</div>
              <div className="font-medium">{child.parents_phone_father}</div>
            </div>

          </div>
          <img
            className="w-44 h-44 invisible sm:visible sm:-translate-y-[11.2rem] sm:translate-x-[14rem] md:w-60 md:h-56 lg:w-60 lg:h-60 md:translate-x-0  md:-translate-y-8 lg:-translate-y-8 relative z-0 opacity-30 md:opacity-100"
            src={img2}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
