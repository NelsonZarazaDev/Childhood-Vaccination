import React from "react";
import { RiEdit2Line } from "react-icons/ri";


export default function VaccinationSchedule({child}) {
  const user = localStorage.getItem("rol");

  return (
    <>
      <table className="invisible hidden shadow-xl md:table md:visible md:table-fixed md:w-full md:text-center md:drop-shadow-xl">
        <thead>
          <tr className="h-16 shadow-sm">
            <th className="bg-greenDarkBlue border text-[10px] lg:text-lg text-white rounded-tl-lg">
              EDAD
            </th>
            <th className="bg-greenDarkBlue border text-[10px] lg:text-lg text-white">
              VACUNA
            </th>
            <th className="bg-greenDarkBlue border text-[10px] lg:text-lg text-white">
              DOSIS
            </th>
            <th className="bg-greenDarkBlue border text-[10px] lg:text-lg text-white">
              FECHA DE APLICACIÓN
            </th>
            <th className="bg-greenDarkBlue border text-[10px] lg:text-lg text-white">
              LABORATORIO
            </th>
            <th className="bg-greenDarkBlue border text-[10px] lg:text-lg text-white">
              NUMERO DE LOTE
            </th>
            <th className="bg-greenDarkBlue border text-[10px] lg:text-lg text-white">
              FECHA PROXIMA CITA
            </th>
            <th className="bg-greenDarkBlue border text-[10px] lg:text-lg text-white">
              NOMBRE DEL VACUNADOR
            </th>
            {user === "Jefe de enfermeria" || user === "Enfermera" ? (
              <th className="bg-greenDarkBlue border text-[10px] lg:text-lg text-white">
                ACCIONES
              </th>
            ) : null}
          </tr>
        </thead>
        <tbody>
        {child.vaccines &&
          child.vaccines.map((vaccine, index) => (
          <tr key={index} className="hover:bg-lightGreen h-16">
            <td className=" bg-blue-300">{vaccine.age}</td>
            <td>{vaccine.vaccineName}</td>
            <td>{vaccine.dose}</td>
            <td>{vaccine.applicationDate}</td>
            <td>{vaccine.laboratory}</td>
            <td>{vaccine.lotNumber}</td>
            <td>{vaccine.nextAppointmentDate}</td>
            <td>{vaccine.vaccinators}</td>
            {user === "Jefe de enfermeria" || user === "Enfermera" ? (
              <td className="text-center">
                <button className="text-xl p-1 rounded-md bg-yellow-300">
                  <RiEdit2Line />
                </button>
              </td>
            ) : null}
          </tr>
          ))}
        </tbody>
      </table>

      {/* MOVIL */}
      <div className="visible md:hidden md:invisible space-y-2">
        <div className="max-w-lg mx-auto space-y-3">
          {child.vaccines &&
          child.vaccines.map((vaccine, index) => (
          <details key={index} className="bg-blue-200 :ring-1 :ring-black/5 :shadow-lg p-6 rounded-lg ">

            <summary className="text-sm leading-6 text-slate-900 font-semibold select-none">
            {vaccine.age +" - "+ vaccine.vaccineName}
            </summary>
            <div className="mt-3 text-sm leading-6 text-slate-600 ">
              <div className="flex space-x-2">
                <div className="font-bold	">VACUNA:</div>
                <div>{vaccine.vaccineName}</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">DOSIS:</div>
                <div>{vaccine.dose}</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA DE APLICACIÓN:</div>
                <div>{vaccine.applicationDate}</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">LABORATORIO:</div>
                <div>{vaccine.laboratory}</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NUMERO DE LOTE</div>
                <div>{vaccine.lotNumber}</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">FECHA PROXIMA CITA:</div>
                <div>{vaccine.nextAppointmentDate}</div>
              </div>
              <div className="flex space-x-2">
                <div className="font-bold	">NOMBRE DEL VACUNADOR:</div>
                <div>{vaccine.vaccinators}</div>
              </div>
              <div className="flex space-x-2">
              {user === "Jefe de enfermeria" || user === "Enfermera" ? (
                  <>
                <div className="font-bold	">ACCIONES:</div>
          
                  <div className="flex space-x-2">
                    <button className="text-xl p-1 rounded-md bg-yellow-300">
                      <RiEdit2Line />
                    </button>
                  </div></>
                ) : null}
              </div>
            </div>
          </details>))}
        </div>
      </div>
    </>
  );
}
