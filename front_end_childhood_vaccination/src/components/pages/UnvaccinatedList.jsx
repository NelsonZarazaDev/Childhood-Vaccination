import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiSolidShieldX } from "react-icons/bi";
import Modalcomponent from "../common/Utilities/Modalcomponent";
import { LuEye } from "react-icons/lu";
import VaccinationCard from "./Child/VaccinationCard";
import { useNavigate } from "react-router-dom";

export default function UnvaccinatedList() {
  let navigate = useNavigate();
  const [unvaccinateds, setUnvaccinated] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 9;

  useEffect(() => {
    cargarUnvaccinated();
  }, []);

  const token = localStorage.getItem("token");

  const header = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const infoUser = async (documento) => {
    navigate("/Menu/unvaccinatedList/unvaccinatedList/" + btoa(documento));
  };

  const cargarUnvaccinated = async () => {
    const resultado = await axios.get(
      "http://localhost:8088/unvaccinatedList",
      { headers: header }
    );
    console.log(resultado.data);
    setUnvaccinated(resultado.data);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUnvaccinated = unvaccinateds.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(unvaccinateds.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentUnvaccinated.map((unvaccinated, indice) => (
          <div key={indice} className="bg-red-400 w-full h-full rounded-md p-3 flex">
            <BiSolidShieldX className="h-10 w-10 m-2" />
            <div>
              <div>
                <b>Nombre:</b>{" "}
                {unvaccinated.first_name + " " + unvaccinated.last_name}
              </div>
              <div>
                <b>Documento:</b> {unvaccinated.document}
              </div>
              <div>
                <b>Madre:</b>{" "}
                {unvaccinated.parents_mother_name +
                  " " +
                  unvaccinated.parents_mother_last_name}
              </div>
              <div>
                <b>Padre:</b>{" "}
                {unvaccinated.parents_father_name +
                  " " +
                  unvaccinated.parents_father_last_name}
              </div>
              <div>
                <b>Contacto:</b>{" "}
                {unvaccinated.parents_phone_mother +
                  " - " +
                  unvaccinated.parents_phone_father}
              </div>
              <div>
                <b>Fecha pasada:</b> {unvaccinated.dateNextAppointmentDate}
              </div>

              <div className="w-full flex justify-center mt-3">
                <button onClick={() => infoUser(unvaccinated.document)}>
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
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center relative h-28 w-full pt-4">
        <ul className="flex space-x-2 absolute inset-x-0 justify-center">
          {pageNumbers.map((number) => (
            <li key={number}>
              <button
                className="flex justify-center items-center space-x-2 bg-red-400 hover:bg-red-200 h-10 w-10 rounded-lg "
                onClick={() => paginate(number)}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
