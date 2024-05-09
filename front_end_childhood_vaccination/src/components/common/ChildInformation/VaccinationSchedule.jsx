import React, { useState } from "react";
import { RiEdit2Line } from "react-icons/ri";
import Modalcomponent from "../Utilities/Modalcomponent";
import TextInput from "../Utilities/TextInput";
import Input from "../Utilities/Input";
import axios from "axios";
import Button from "../Utilities/Button";

export default function VaccinationSchedule({ child, code }) {
  var fechaActual = new Date();
  var año = fechaActual.getFullYear();
  var mes = fechaActual.getMonth() + 1;
  var dia = fechaActual.getDate();
  var hora = fechaActual.getHours();
  var min = fechaActual.getMinutes();

  if (mes < 10) {
    mes = "0" + mes;
  }

  if (dia < 10) {
    dia = "0" + dia;
  }

  var fechaFormateada = dia + "/" + mes + "/" + año;
  var fecha = año + "-" + mes + "-" + dia;
  var hora= hora +":"+min;

  const [vaccineView, setVaccineView] = useState([]);
  const [documentoDato, setDocumento] = useState([]);
  const [idDato, setId] = useState([]);
  const user = localStorage.getItem("rol");
  const token = localStorage.getItem("token");

  const [editChild, setEditChild] = useState({
    laboratory: "",
    lotNumber: "",
    applicationDate: fecha,
    nextAppointmentDate: "",
    appliedTime:hora,
    vaccinator: {
      document: localStorage.getItem("decodedToken"),
      first_name: localStorage.getItem("first_name"),
      last_names: localStorage.getItem("last_names"),
    },
  });

  const {
    laboratory,
    lotNumber,
    applicationDate,
    nextAppointmentDate,
    vaccinator: { document, first_name, last_names },
  } = editChild;

  const header = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const infoVaccine = async (documento, id) => {
    try {
      const resultado = await axios.get(
        "http://localhost:8088/vaccine/" + documento + "/" + id,
        { headers: header }
      );
      setVaccineView(resultado.data);
      setDocumento(documento);
      setId(id);
    } catch (error) {
      const data = error.response.data;
      const dataArray = Object.values(data);
    }
  };

  const onInputChange = (e) => {
    setEditChild({ ...editChild, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        "http://localhost:8088/child/" + documentoDato + "/" + idDato,
        editChild,
        {
          headers: header,
        }
      );
    } catch (error) {
      const data = error.response.data;
      const dataArray = Object.values(data);
    }
  };

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
            {(user === "Jefe de enfermeria" &&
              code ===
                "@ut@2&D,/NW_1MVXvbTuFD$=6_Jp,rD4e=z46#__T:2vm8(XDT7{()2;EGJH") ||
            (user === "Enfermera" &&
              code ===
                "@ut@2&D,/NW_1MVXvbTuFD$=6_Jp,rD4e=z46#__T:2vm8(XDT7{()2;EGJH") ? (
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
                <td>
                  {vaccine.vaccinator
                    ? vaccine.vaccinator.first_name +
                      " " +
                      vaccine.vaccinator.last_names
                    : ""}
                </td>
                {(user === "Jefe de enfermeria" &&
                  code ===
                    "@ut@2&D,/NW_1MVXvbTuFD$=6_Jp,rD4e=z46#__T:2vm8(XDT7{()2;EGJH") ||
                (user === "Enfermera" &&
                  code ===
                    "@ut@2&D,/NW_1MVXvbTuFD$=6_Jp,rD4e=z46#__T:2vm8(XDT7{()2;EGJH") ? (
                  <td className="text-center">
                    <button
                      onClick={() => infoVaccine(child.document, vaccine.id)}
                    >
                      <Modalcomponent
                        estilos="text-xl p-1 rounded-md bg-yellow-300"
                        icon={<RiEdit2Line />}
                        title="Información del usuario"
                        content={
                          <>
                            <form onSubmit={(e) => onSubmit(e)}>
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-4 my-8">
                                <div>
                                  <TextInput text="Edad" />
                                  <Input
                                    id="age"
                                    name="age"
                                    type="text"
                                    value={vaccineView.age}
                                    state="disabled"
                                    estilos="w-full border-2 border-darkGray bg-white p-3 rounded-full font-bold"
                                  />
                                </div>
                                <div>
                                  <TextInput text="Vacuna" />
                                  <Input
                                    id="vaccineName"
                                    name="vaccineName"
                                    type="text"
                                    value={vaccineView.vaccineName}
                                    state="disabled"
                                    estilos="w-full border-2 border-darkGray bg-white p-3 rounded-full font-bold"
                                  />
                                </div>
                                <div>
                                  <TextInput text="Dosis" />
                                  <Input
                                    id="dose"
                                    name="dose"
                                    type="text"
                                    value={vaccineView.dose}
                                    state="disabled"
                                    estilos="w-full border-2 border-darkGray bg-white p-3 rounded-full font-bold"
                                  />
                                </div>
                                <div>
                                  <TextInput text="Fecha de aplicación" />
                                  <Input
                                    id="applicationDate"
                                    name="applicationDate"
                                    type="text"
                                    value={fechaFormateada}
                                    onChange={(e) => onInputChange(e)}
                                    state="disabled"
                                    estilos="w-full border-2 border-darkGray bg-white p-3 rounded-full font-bold"
                                  />
                                </div>
                                <div>
                                  <TextInput text="Laboratorio" />
                                  <Input
                                    id="laboratory"
                                    name="laboratory"
                                    type="text"
                                    value={laboratory}
                                    onChange={(e) => onInputChange(e)}
                                    estilos="w-full border-2 border-darkGray bg-white p-3 rounded-full font-bold"
                                  />
                                </div>
                                <div>
                                  <TextInput text="Numero de lote" />
                                  <Input
                                    id="lotNumber"
                                    name="lotNumber"
                                    type="text"
                                    value={lotNumber}
                                    onChange={(e) => onInputChange(e)}
                                    estilos="w-full border-2 border-darkGray bg-white p-3 rounded-full font-bold"
                                  />
                                </div>
                                <div>
                                  <TextInput text="Fecha proxima cita" />
                                  <Input
                                    id="nextAppointmentDate"
                                    name="nextAppointmentDate"
                                    value={nextAppointmentDate}
                                    onChange={(e) => onInputChange(e)}
                                    type="date"
                                    estilos="w-full border-2 border-darkGray bg-white p-3 rounded-full font-bold"
                                  />
                                </div>

                                {/* Vacuandor */}
                                <Input
                                  id="document"
                                  name="document"
                                  type="hidden"
                                  value={localStorage.getItem("decodedToken")}
                                  state="disabled"
                                />

                                <div>
                                  <TextInput text="Nombre del vacunador:" />
                                  <Input
                                    id="first_name"
                                    name="first_name"
                                    type="text"
                                    value={localStorage.getItem("first_name")}
                                    estilos="w-full border-2 border-darkGray bg-white p-3 rounded-full font-bold"
                                    state="disabled"
                                  />
                                </div>

                                <div>
                                  <TextInput text="Apellidos del vacunador:" />
                                  <Input
                                    id="last_name"
                                    name="last_name"
                                    type="text"
                                    value={localStorage.getItem("last_names")}
                                    estilos="w-full border-2 border-darkGray bg-white p-3 rounded-full font-bold"
                                    state="disabled"
                                  />
                                </div>
                              </div>
                              <div className="w-full flex justify-center">
                                <Button text="Actualizar" />
                              </div>
                            </form>
                          </>
                        }
                      />
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
              <details
                key={index}
                className="bg-blue-200 :ring-1 :ring-black/5 :shadow-lg p-6 rounded-lg "
              >
                <summary className="text-sm leading-6 text-slate-900 font-semibold select-none">
                  {vaccine.age + " - " + vaccine.vaccineName}
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
                    <div>
                      {vaccine.vaccinator
                        ? vaccine.vaccinator.first_name +
                          " " +
                          vaccine.vaccinator.last_names
                        : ""}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    {(user === "Jefe de enfermeria" &&
                      code ===
                        "@ut@2&D,/NW_1MVXvbTuFD$=6_Jp,rD4e=z46#__T:2vm8(XDT7{()2;EGJH") ||
                    (user === "Enfermera" &&
                      code ===
                        "@ut@2&D,/NW_1MVXvbTuFD$=6_Jp,rD4e=z46#__T:2vm8(XDT7{()2;EGJH") ? (
                      <>
                        <div className="font-bold	">ACCIONES:</div>

                        <div className="flex space-x-2">
                          <Modalcomponent
                            estilos="text-xl p-1 rounded-md bg-yellow-300"
                            icon={<RiEdit2Line />}
                            title="Información del usuario"
                            content={<></>}
                          />
                        </div>
                      </>
                    ) : null}
                  </div>
                </div>
              </details>
            ))}
        </div>
      </div>
    </>
  );
}