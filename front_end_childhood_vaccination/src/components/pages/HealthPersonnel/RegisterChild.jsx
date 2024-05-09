import React, { useState } from "react";
import Search from "../../common/Search";
import Modalcomponent from "../../common/Utilities/Modalcomponent";
import { LuUserPlus2 } from "react-icons/lu";
import Input from "../../common/Utilities/Input";
import TextInput from "../../common/Utilities/TextInput";
import SelectDepartment from "../../common/Utilities/SelectDepartment";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Footer from "../../common/Footer";
import flyingVaccinator from "../../../assets/img/flyingVaccinator.webp";
import axios, { AxiosHeaders } from "axios";
import Alerts from "../../common/Utilities/Alerts";

export default function RegisterChild() {
  let navigate = useNavigate();

  const [createChild, setCreateChild] = useState({
    document: "",
    first_name: "",
    last_name: "",
    sex: "",
    address: "",
    birth_date: "",
    city_birth: "",
    birth_department: "",

    parents_mother_name: "",
    parents_mother_last_name: "",
    parents_father_name: "",
    parents_father_last_name: "",
    parents_document_mother: "",
    parents_document_father: "",
    parents_responsible: "",
    parents_phone_mother: "",
    parents_phone_father: "",
    parents_email_mother: "",
    parents_email_father: "",
    vaccines: [
      {
        age: "Recien nacidos",
        vaccineName: "BCG",
        dose: "Unica",
        applicationDate: "",
        laboratory: "",
        lotNumber: "",
        AppointmentDate: "",
        nextAppointmentDate: "",
        appliedTime:"",
      },
      {
        age: "Recien nacidos",
        vaccineName: "Hepatitis B",
        dose: "Recien Nacido",
        applicationDate: "",
        laboratory: "",
        lotNumber: "",
        AppointmentDate: "",
        nextAppointmentDate: "",
        appliedTime:"",
      },
      {
        age: "A los 2 meses",
        vaccineName: "Difteria - Tos ferina - Tétanos(DTP)",
        dose: "Primera",
        applicationDate: "",
        laboratory: "",
        lotNumber: "",
        AppointmentDate: "",
        nextAppointmentDate: "",
        appliedTime:"",
      },
      {
        age: "A los 2 meses",
        vaccineName: "Haemophilus influenzae tipo b(Hib)",
        dose: "Primera",
        applicationDate: "",
        laboratory: "",
        lotNumber: "",
        AppointmentDate: "",
        nextAppointmentDate: "",
        appliedTime:"",
      },
      {
        age: "A los 2 meses",
        vaccineName: "Hepatitis B",
        dose: "Primera",
        applicationDate: "",
        laboratory: "",
        lotNumber: "",
        AppointmentDate: "",
        nextAppointmentDate: "",
        appliedTime:"",
      },
      {
        age: "A los 2 meses",
        vaccineName: "Polio",
        dose: "Primera",
        applicationDate: "",
        laboratory: "",
        lotNumber: "",
        AppointmentDate: "",
        nextAppointmentDate: "",
        appliedTime:"",
      },
      {
        age: "A los 2 meses",
        vaccineName: "Rotavirus",
        dose: "Primera",
        applicationDate: "",
        laboratory: "",
        lotNumber: "",
        AppointmentDate: "",
        nextAppointmentDate: "",
        appliedTime:"",
      },
      {
        age: "A los 2 meses",
        vaccineName: "Neumococo",
        dose: "Primera",
        applicationDate: "",
        laboratory: "",
        lotNumber: "",
        AppointmentDate: "",
        nextAppointmentDate: "",
        appliedTime:"",
      },
      {
        age: "A los 4 meses",
        vaccineName: "Difteria - Tos ferina - Tétanos(DTP)",
        dose: "Segunda",
        applicationDate: "",
        laboratory: "",
        lotNumber: "",
        AppointmentDate: "",
        nextAppointmentDate: "",
        appliedTime:"",
      },
      {
        age: "A los 4 meses",
        vaccineName: "Haemophilus influenzae tipo b(Hib)",
        dose: "Segunda",
        applicationDate: "",
        laboratory: "",
        lotNumber: "",
        AppointmentDate: "",
        nextAppointmentDate: "",
        appliedTime:"",
      },
      {
        age: "A los 4 meses",
        vaccineName: "Hepatitis B",
        dose: "Segunda",
        applicationDate: "",
        laboratory: "",
        lotNumber: "",
        AppointmentDate: "",
        nextAppointmentDate: "",
        appliedTime:"",
      },
      {
        age: "A los 4 meses",
        vaccineName: "Polio",
        dose: "Segunda",
        applicationDate: "",
        laboratory: "",
        lotNumber: "",
        AppointmentDate: "",
        nextAppointmentDate: "",
        appliedTime:"",
      },
      {
        age: "A los 4 meses",
        vaccineName: "Rotavirus",
        dose: "Segunda",
        applicationDate: "",
        laboratory: "",
        lotNumber: "",
        AppointmentDate: "",
        nextAppointmentDate: "",
        appliedTime:"",
      },
      {
        age: "A los 4 meses",
        vaccineName: "Neumococo",
        dose: "Segunda",
        applicationDate: "",
        laboratory: "",
        lotNumber: "",
        AppointmentDate: "",
        nextAppointmentDate: "",
        appliedTime:"",
      },
      {
        age: "A los 6 meses",
        vaccineName: "Difteria - Tos ferina - Tétanos(DTP)",
        dose: "Tercera",
        applicationDate: "",
        laboratory: "",
        lotNumber: "",
        AppointmentDate: "",
        nextAppointmentDate: "",
        appliedTime:"",
      },
      {
        age: "A los 6 meses",
        vaccineName: "Haemophilus influenzae tipo b(HIB)",
        dose: "Tercera",
        applicationDate: "",
        laboratory: "",
        lotNumber: "",
        AppointmentDate: "",
        nextAppointmentDate: "",
        appliedTime:"",
      },
      {
        age: "A los 6 meses",
        vaccineName: "Hepatitis B",
        dose: "Tercera",
        applicationDate: "",
        laboratory: "",
        lotNumber: "",
        AppointmentDate: "",
        nextAppointmentDate: "",
        appliedTime:"",
      },
      {
        age: "A los 6 meses",
        vaccineName: "Polio",
        dose: "Tercera",
        applicationDate: "",
        laboratory: "",
        lotNumber: "",
        AppointmentDate: "",
        nextAppointmentDate: "",
        appliedTime:"",
      },
      {
        age: "A los 6 meses",
        vaccineName: "Influenza estacional",
        dose: "Primera",
        applicationDate: "",
        laboratory: "",
        lotNumber: "",
        AppointmentDate: "",
        nextAppointmentDate: "",
        appliedTime:"",
      },
      {
        age: "A los 7 meses",
        vaccineName: "Influenza estacional",
        dose: "Segunda",
        applicationDate: "",
        laboratory: "",
        lotNumber: "",
        AppointmentDate: "",
        nextAppointmentDate: "",
        appliedTime:"",
      },
      {
        age: "A los 12 meses",
        vaccineName: "Sarampión - Rubeola - Paperas(SRP)",
        dose: "Primera",
        applicationDate: "",
        laboratory: "",
        lotNumber: "",
        AppointmentDate: "",
        nextAppointmentDate: "",
        appliedTime:"",
      },
      {
        age: "A los 12 meses",
        vaccineName: "Varicela",
        dose: "Primera",
        applicationDate: "",
        laboratory: "",
        lotNumber: "",
        AppointmentDate: "",
        nextAppointmentDate: "",
        appliedTime:"",
      },
      {
        age: "A los 12 meses",
        vaccineName: "Neumococo",
        dose: "Refuerzo",
        applicationDate: "",
        laboratory: "",
        lotNumber: "",
        AppointmentDate: "",
        nextAppointmentDate: "",
        appliedTime:"",
      },
      {
        age: "A los 12 meses",
        vaccineName: "Hepatitis A",
        dose: "Unica",
        applicationDate: "",
        laboratory: "",
        lotNumber: "",
        AppointmentDate: "",
        nextAppointmentDate: "",
        appliedTime:"",
      },
      {
        age: "A los 18 meses",
        vaccineName: "Difteria - Tos ferina - Tétanos(DTP)",
        dose: "Primer refuerzo",
        applicationDate: "",
        laboratory: "",
        lotNumber: "",
        AppointmentDate: "",
        nextAppointmentDate: "",
        appliedTime:"",
      },
      {
        age: "A los 18 meses",
        vaccineName: "Polio",
        dose: "Primer refuerzo",
        applicationDate: "",
        laboratory: "",
        lotNumber: "",
        AppointmentDate: "",
        nextAppointmentDate: "",
        appliedTime:"",
      },
      {
        age: "A los 18 meses",
        vaccineName: "Fiebre amarilla(FA)",
        dose: "Unica",
        applicationDate: "",
        laboratory: "",
        lotNumber: "",
        AppointmentDate: "",
        nextAppointmentDate: "",
        appliedTime:"",
      },
      {
        age: "A los 5 años",
        vaccineName: "Difteria - Tos ferina - Tétanos(DTP)",
        dose: "Segundo refuerzo",
        applicationDate: "",
        laboratory: "",
        lotNumber: "",
        AppointmentDate: "",
        nextAppointmentDate: "",
        appliedTime:"",
      },
      {
        age: "A los 5 años",
        vaccineName: "Polio",
        dose: "Segundo refuerzo",
        applicationDate: "",
        laboratory: "",
        lotNumber: "",
        AppointmentDate: "",
        nextAppointmentDate: "",
        appliedTime:"",
      },
      {
        age: "A los 5 años",
        vaccineName: "Sarampión - Rubeola - Paperas(SRP)",
        dose: "Refuerzo",
        applicationDate: "",
        laboratory: "",
        lotNumber: "",
        AppointmentDate: "",
        nextAppointmentDate: "",
        appliedTime:"",
      },
      {
        age: "A los 5 años",
        vaccineName: "Varicela",
        dose: "Refuerzo",
        applicationDate: "",
        laboratory: "",
        lotNumber: "",
        AppointmentDate: "",
        nextAppointmentDate: "",
        appliedTime:"",
      },
      {
        age: "Niños y niñas a los 9 años",
        vaccineName: "Virus del papiloma humano(VPH)",
        dose: "Primera",
        applicationDate: "",
        laboratory: "",
        lotNumber: "",
        AppointmentDate: "",
        nextAppointmentDate: "",
        appliedTime:"",
      },
      {
        age: "Niños y niñas a los 9 años",
        vaccineName: "Virus del papiloma humano(VPH)",
        dose: "Segunda",
        applicationDate: "",
        laboratory: "",
        lotNumber: "",
        AppointmentDate: "",
        nextAppointmentDate: "",
        appliedTime:"",
      },
    ],
  });

  const {
    document,
    first_name,
    last_name,
    sex,
    address,
    birth_date,
    city_birth,
    birth_department,
    parents_mother_name,
    parents_mother_last_name,
    parents_father_name,
    parents_father_last_name,
    parents_document_mother,
    parents_document_father,
    parents_responsible,
    parents_phone_mother,
    parents_phone_father,
    parents_email_mother,
    parents_email_father,
    vaccinator,
    vaccines,
  } = createChild;

  const onInputChange = (e) => {
    setCreateChild({ ...createChild, [e.target.name]: e.target.value });
  };

  const [alertInfoList, setAlertInfoList] = useState([]);

  const token = localStorage.getItem("token");

  const header = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8088/child", createChild, {
        headers: header,
      });
      addAlert("Registro guardado", "1");
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

  const addAlert = (message, type) => {
    const newAlertInfoList = [...alertInfoList, { message, type }];
    setAlertInfoList(newAlertInfoList);
  };

  // navigate("Menu/RegisterChild/Action", { replace: true });

  return (
    <>
      <div className="w-full flex space-y-8 justify-center font-bold text-2xl text-greenDarkBlue my-6">
        Registrar paciente
      </div>

      <div className="flex justify-between w-11/12 m-auto">
        <Modalcomponent
          estilos="h-10 w-28 flex items-center justify-center bg-greenDarkBlue rounded-full font-bold"
          text="Agregar"
          icon={<LuUserPlus2 className="text-xl ml-2" />}
          title="Registrar paciente"
          content={
            <>
              <div className="font-bold border-b-2 border-lightGrey text-xl mb-6">
                Información del niño
              </div>

              <form onSubmit={(e) => onSubmit(e)}>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-4 my-8">
                  <div>
                    <TextInput text="Nombres" />
                    <Input
                      id="first_name"
                      name="first_name"
                      value={first_name}
                      type="text"
                      onChange={(e) => onInputChange(e)}
                      estilos="w-full border-2 border-darkGray bg-white p-3 rounded-full font-bold"
                    />
                  </div>

                  <div>
                    <TextInput text="Apellidos" />
                    <Input
                      id="last_name"
                      name="last_name"
                      value={last_name}
                      type="text"
                      onChange={(e) => onInputChange(e)}
                      estilos="w-full border-2 border-darkGray bg-white p-3 rounded-full font-bold"
                    />
                  </div>

                  <div>
                    <TextInput text="Documento" />
                    <Input
                      id="document"
                      name="document"
                      value={document}
                      type="text"
                      onChange={(e) => onInputChange(e)}
                      estilos="w-full border-2 border-darkGray bg-white p-3 rounded-full font-bold"
                    />
                  </div>

                  <div>
                    <TextInput text="Sexo" />
                    <select
                      id="sex"
                      name="sex"
                      onChange={(e) => onInputChange(e)}
                      className="w-full bg-white border-2 border-darkGray p-3 rounded-full font-bold"
                    >
                      <option value=""></option>
                      <option value="M">Masculino</option>
                      <option value="F">Femenino</option>
                    </select>
                  </div>

                  <div>
                    <TextInput text="Fecha de nacimiento" />
                    <Input
                      id="birth_date"
                      name="birth_date"
                      value={birth_date}
                      type="date"
                      onChange={(e) => onInputChange(e)}
                      estilos="w-full border-2 border-darkGray bg-white p-3 rounded-full font-bold"
                    />
                  </div>

                  <div className="flex flex-col justify-end">
                    <TextInput text="Dirección" />
                    <Input
                      id="address"
                      name="address"
                      value={address}
                      type="text"
                      onChange={(e) => onInputChange(e)}
                      estilos="w-full border-2 border-darkGray bg-white p-3 rounded-full font-bold"
                    />
                  </div>

                  <div className="col-span-2">
                    <div className="flex">
                      <SelectDepartment onChange={(e) => onInputChange(e)} />
                    </div>
                  </div>
                </div>

                {/* Padres */}
                <div className="font-bold border-b-2 mt-8 border-lightGrey text-xl">
                  Información de los padres
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-y-8 gap-x-4 my-8">
                  <div>
                    <TextInput text="Nombre de la madre:" />
                    <Input
                      id="parents_mother_name"
                      name="parents_mother_name"
                      value={parents_mother_name}
                      type="text"
                      onChange={(e) => onInputChange(e)}
                      estilos="w-full border-2 border-darkGray bg-white p-3 rounded-full font-bold"
                    />
                  </div>

                  <div>
                    <TextInput text="Apellidos de la madre:" />
                    <Input
                      id="parents_mother_last_name"
                      name="parents_mother_last_name"
                      value={parents_mother_last_name}
                      type="text"
                      onChange={(e) => onInputChange(e)}
                      estilos="w-full border-2 border-darkGray bg-white p-3 rounded-full font-bold"
                    />
                  </div>

                  <div>
                    <TextInput text="Nombre del padre:" />
                    <Input
                      id="parents_father_name"
                      name="parents_father_name"
                      value={parents_father_name}
                      type="text"
                      onChange={(e) => onInputChange(e)}
                      estilos="w-full border-2 border-darkGray bg-white p-3 rounded-full font-bold"
                    />
                  </div>

                  <div>
                    <TextInput text="Apellidos del padre:" />
                    <Input
                      id="parents_father_last_name"
                      name="parents_father_last_name"
                      value={parents_father_last_name}
                      type="text"
                      onChange={(e) => onInputChange(e)}
                      estilos="w-full border-2 border-darkGray bg-white p-3 rounded-full font-bold"
                    />
                  </div>

                  <div>
                    <TextInput text="Documento de la madre:" />
                    <Input
                      id="parents_document_mother"
                      name="parents_document_mother"
                      value={parents_document_mother}
                      type="text"
                      onChange={(e) => onInputChange(e)}
                      estilos="w-full border-2 border-darkGray bg-white p-3 rounded-full font-bold"
                    />
                  </div>

                  <div>
                    <TextInput text="Documento del padre:" />
                    <Input
                      id="parents_document_father"
                      name="parents_document_father"
                      value={parents_document_father}
                      type="text"
                      onChange={(e) => onInputChange(e)}
                      estilos="w-full border-2 border-darkGray bg-white p-3 rounded-full font-bold"
                    />
                  </div>

                  <div>
                    <TextInput text="Nombre del responsable:" />
                    <Input
                      id="parents_responsible"
                      name="parents_responsible"
                      value={parents_responsible}
                      type="text"
                      onChange={(e) => onInputChange(e)}
                      estilos="w-full border-2 border-darkGray bg-white p-3 rounded-full font-bold"
                    />
                  </div>

                  <div>
                    <TextInput text="Teléfono de la madre:" />
                    <Input
                      id="parents_phone_mother"
                      name="parents_phone_mother"
                      value={parents_phone_mother}
                      type="tel"
                      onChange={(e) => onInputChange(e)}
                      estilos="w-full border-2 border-darkGray bg-white p-3 rounded-full font-bold"
                    />
                  </div>

                  <div>
                    <TextInput text="Teléfono del padre:" />
                    <Input
                      id="parents_phone_father"
                      name="parents_phone_father"
                      value={parents_phone_father}
                      type="tel"
                      onChange={(e) => onInputChange(e)}
                      estilos="w-full border-2 border-darkGray bg-white p-3 rounded-full font-bold"
                    />
                  </div>

                  <div>
                    <TextInput text="Correo de la madre:" />
                    <Input
                      id="parents_email_mother"
                      name="parents_email_mother"
                      value={parents_email_mother}
                      type="email"
                      onChange={(e) => onInputChange(e)}
                      estilos="w-full border-2 border-darkGray bg-white p-3 rounded-full font-bold"
                    />
                  </div>

                  <div>
                    <TextInput text="Correo del padre:" />
                    <Input
                      id="parents_email_father"
                      name="parents_email_father"
                      value={parents_email_father}
                      type="email"
                      onChange={(e) => onInputChange(e)}
                      estilos="w-full border-2 border-darkGray bg-white p-3 rounded-full font-bold"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <div className="bi bi-floppy"> Agregar</div>
                </button>
              </form>
              {alertInfoList.map((alert, index) => (
                <Alerts key={index} mensaje={alert.message} tipo={alert.type} />
              ))}
            </>
          }
        />
        <div>
          <Search />
        </div>
      </div>
      <div className="border-2 border-b-lightGrey mt-6"></div>
      <Outlet />
      <Footer
        imgFooter={flyingVaccinator}
        styleImg="flex justify-end absolute inset-x-0 bottom-16"
        styleFooter="w-full h-14 flex justify-center items-center text-white font-bold bg-darkBlue absolute inset-x-0 bottom-0"
      />
    </>
  );
}
