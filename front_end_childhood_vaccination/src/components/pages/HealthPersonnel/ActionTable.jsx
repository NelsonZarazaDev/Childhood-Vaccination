import React, { useMemo, useState } from "react";
import { LuPenSquare } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import Modalcomponent from "../../common/Utilities/Modalcomponent";
import { useNavigate, useParams } from "react-router-dom";
import VaccinationCard from "../Child/VaccinationCard";
import Input from "../../common/Utilities/Input";
import TextInput from "../../common/Utilities/TextInput";
import { GetChild } from "../../../data/VaccinationSchedule";

export default function ActionTable() {
  let navigate = useNavigate();
  const [ChildRegister, setChilddRegister] = useState([]);
  let params = useParams();
  params = atob(params.documento);
  const childRegister = useMemo(() => GetChild(params, navigate), [params]);
  childRegister.then(function (result) {
    setChilddRegister(result);
  });
  return (
    <div className="">
      <div className="flex justify-center my-10 lg:my-16">
        <table className="shadow-xl table table-fixed md:w-full mx-4 md:mx-12 text-center drop-shadow-xl">
          <thead>
            <th className="bg-lightGreen text-[10px] text-sm md:text-base lg:text-lg text-black rounded-tl-lg">
              Nombre
            </th>
            <th className="bg-lightGreen text-[10px] text-sm md:text-base lg:text-lg text-black">
              Documento
            </th>
            <th className="bg-lightGreen text-[10px] text-sm md:text-base lg:text-lg text-black">
              Responsable
            </th>
            <th className="bg-lightGreen text-[10px] text-sm md:text-base lg:text-lg text-black rounded-tr-lg">
              Acciones
            </th>
          </thead>
          <tbody>
            <tr className="h-14 ml-4 text-center text-[#3d3d3d] font-medium">
              <td className="p-2.5">
                {ChildRegister.first_name + " " + ChildRegister.last_name}
              </td>
              <td className="p-2.5">{ChildRegister.document}</td>
              <td className="p-2.5">{ChildRegister.parents_responsible}</td>
              <td className="p-2.5 md:flex md:justify-center space-y-2 md:space-y-0 md:space-x-4">
                <Modalcomponent
                  estilos="text-xl bg-yellow-300 rounded-lg p-2 text-black"
                  icon={<LuPenSquare />}
                  title="Registrar usuario"
                  content={
                    <>
                      <VaccinationCard code="@ut@2&D,/NW_1MVXvbTuFD$=6_Jp,rD4e=z46#__T:2vm8(XDT7{()2;EGJH" />
                    </>
                  }
                />
                <Modalcomponent
                  estilos="text-xl bg-blue-300 rounded-lg p-2 text-black"
                  icon={<LuEye />}
                  title="Información del usuario"
                  content={
                    <>
                      <VaccinationCard />
                    </>
                  }
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
