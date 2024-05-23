import React, { useEffect, useState } from "react";
import { RiEdit2Line } from "react-icons/ri";
import Modalcomponent from "../Utilities/Modalcomponent";
import TextInput from "../Utilities/TextInput";
import Input from "../Utilities/Input";
import axios from "axios";
import Button from "../Utilities/Button";
import Alerts from "../Utilities/Alerts";
import { useNavigate } from "react-router-dom";

export default function VaccinationSchedule({ child, code }) {
  const navigate = useNavigate();
  const [buttonActive, setButtonActive] = useState(false);

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
  var hora = hora + ":" + min;

  const [alertInfoList, setAlertInfoList] = useState([]);
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
    appliedTime: hora,
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
    } catch (error) {}
  };

  const addAlert = (message, type) => {
    const newAlertInfoList = [...alertInfoList, { message, type }];
    setAlertInfoList(newAlertInfoList);
  };

  const onInputChange = (e) => {
    setEditChild({ ...editChild, [e.target.name]: e.target.value });
  };

  const numVacunas = localStorage.getItem("numVacunas");
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!editChild.laboratory || editChild.laboratory.trim().length === 0) {
        addAlert("El laboratorio es obligatorio", "2");
      } else if (
        !editChild.lotNumber ||
        editChild.lotNumber.trim().length === 0
      ) {
        addAlert("El numero de lote es obligatorio", "2");
      } else if (!editChild.nextAppointmentDate && numVacunas != 32) {
        addAlert("La fecha de la proxima cita es obligatorio", "2");
      } else {
        await axios.put(
          "http://localhost:8088/child/" + documentoDato + "/" + idDato,
          editChild,
          {
            headers: header,
          }
        );
        addAlert("Registro guardado", "1");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        const data = error.response.data;
        const dataArray = Object.values(data);
        console.log(dataArray);
        addAlert(dataArray[0], "2");
      } else {
        addAlert(
          "Error al procesar la solicitud. Por favor, inténtalo de nuevo más tarde.",
          "2"
        );
      }
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
              <tr
                key={index}
                className={
                  vaccine.status
                    ? "hover:bg-[#7cd3ab] bg-hoverGreen h-16"
                    : "hover:bg-gray-400 bg-gray-200 h-16"
                }
              >
                <td className="bg-blue-300 font-medium">{vaccine.age}</td>
                <td className="font-medium">{vaccine.vaccineName}</td>
                <td className="font-medium">{vaccine.dose}</td>
                <td className="font-medium">{vaccine.applicationDate}</td>
                <td className="font-medium">{vaccine.laboratory}</td>
                <td className="font-medium overflow-y-auto">
                  {vaccine.lotNumber}
                </td>
                <td className="font-medium">{vaccine.nextAppointmentDate}</td>
                <td className="font-medium">
                  {vaccine.vaccinator
                    ? vaccine.vaccinator.first_name +
                      " " +
                      vaccine.vaccinator.last_names
                    : ""}
                </td>
                {(user === "Jefe de enfermeria" &&
                  code ===
                    "@ut@2&D,/NW_1MVXvbTuFD$=6_Jp,rD4e=z46#__T:2vm8(XDT7{()2;EGJH" &&
                  vaccine.status != true) ||
                (user === "Enfermera" &&
                  code ===
                    "@ut@2&D,/NW_1MVXvbTuFD$=6_Jp,rD4e=z46#__T:2vm8(XDT7{()2;EGJH" &&
                  vaccine.status != true) ? (
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
                                    estilos="w-full border-2 border-darkGray bg-white p-3 rounded-full font-medium"
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
                                    estilos="w-full border-2 border-darkGray bg-white p-3 rounded-full font-medium"
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
                                    estilos="w-full border-2 border-darkGray bg-white p-3 rounded-full font-medium"
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
                                    estilos="w-full border-2 border-darkGray bg-white p-3 rounded-full font-medium"
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
                                    estilos="w-full border-2 border-darkGray bg-white p-3 rounded-full font-medium"
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
                                    estilos="w-full border-2 border-darkGray bg-white p-3 rounded-full font-medium"
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
                                    estilos="w-full border-2 border-darkGray bg-white p-3 rounded-full font-medium"
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
                                    estilos="w-full border-2 border-darkGray bg-white p-3 rounded-full font-medium"
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
                                    estilos="w-full border-2 border-darkGray bg-white p-3 rounded-full font-medium"
                                    state="disabled"
                                  />
                                </div>
                              </div>
                              <div className="w-full flex justify-center">
                                <Button text="Actualizar" />
                              </div>
                            </form>
                            {alertInfoList.map((alert, index) => (
                              <Alerts
                                key={index}
                                mensaje={alert.message}
                                tipo={alert.type}
                              />
                            ))}
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
                className={
                  vaccine.status
                    ? "bg-hoverGreen :ring-1 :ring-black/5 :shadow-lg p-6 rounded-lg"
                    : "bg-gray-200 :ring-1 :ring-black/5 :shadow-lg p-6 rounded-lg"
                }
              >
                <summary className="text-sm leading-6 text-slate-900 font-bold select-none">
                  {vaccine.age + " - " + vaccine.vaccineName}
                </summary>
                <div className="mt-3 text-sm leading-6 text-black">
                  <div className="flex space-x-2">
                    <div className="font-bold	">VACUNA:</div>
                    <div className="font-medium">{vaccine.vaccineName}</div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="font-bold	">DOSIS:</div>
                    <div className="font-medium">{vaccine.dose}</div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="font-bold	">FECHA DE APLICACIÓN:</div>
                    <div className="font-medium">{vaccine.applicationDate}</div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="font-bold	">LABORATORIO:</div>
                    <div className="font-medium">{vaccine.laboratory}</div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="font-bold	">NUMERO DE LOTE</div>
                    <div className="font-medium">{vaccine.lotNumber}</div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="font-bold	">FECHA PROXIMA CITA:</div>
                    <div className="font-medium">
                      {vaccine.nextAppointmentDate}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="font-bold	">NOMBRE DEL VACUNADOR:</div>
                    <div className="font-medium">
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
                    "@ut@2&D,/NW_1MVXvbTuFD$=6_Jp,rD4e=z46#__T:2vm8(XDT7{()2;EGJH" &&
                  vaccine.status != true) ||
                (user === "Enfermera" &&
                  code ===
                    "@ut@2&D,/NW_1MVXvbTuFD$=6_Jp,rD4e=z46#__T:2vm8(XDT7{()2;EGJH" &&
                  vaccine.status != true) ? (
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
                                    estilos="w-full border-2 border-darkGray bg-white p-3 rounded-full font-medium"
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
                                    estilos="w-full border-2 border-darkGray bg-white p-3 rounded-full font-medium"
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
                                    estilos="w-full border-2 border-darkGray bg-white p-3 rounded-full font-medium"
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
                                    estilos="w-full border-2 border-darkGray bg-white p-3 rounded-full font-medium"
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
                                    estilos="w-full border-2 border-darkGray bg-white p-3 rounded-full font-medium"
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
                                    estilos="w-full border-2 border-darkGray bg-white p-3 rounded-full font-medium"
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
                                    estilos="w-full border-2 border-darkGray bg-white p-3 rounded-full font-medium"
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
                                    estilos="w-full border-2 border-darkGray bg-white p-3 rounded-full font-medium"
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
                                    estilos="w-full border-2 border-darkGray bg-white p-3 rounded-full font-medium"
                                    state="disabled"
                                  />
                                </div>
                              </div>
                              <div className="w-full flex justify-center">
                                <Button text="Actualizar" />
                              </div>
                            </form>
                            {alertInfoList.map((alert, index) => (
                              <Alerts
                                key={index}
                                mensaje={alert.message}
                                tipo={alert.type}
                              />
                            ))}
                          </>
                        }
                      />
                    </button>
                  </td>
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
