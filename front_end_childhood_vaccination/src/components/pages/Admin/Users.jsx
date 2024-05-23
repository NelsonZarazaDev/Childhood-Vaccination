import React, { useEffect, useState } from "react";
import Modalcomponent from "../../common/Utilities/Modalcomponent";
import { LuPenSquare } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import axios from "axios";
import TextInput from "../../common/Utilities/TextInput";
import Input from "../../common/Utilities/Input";
import Footer from "../../common/Footer";
import shieldVaccinator from "../../../assets/img/shieldVaccinator.webp";
import Button from "../../common/Utilities/Button";
import Alerts from "../../common/Utilities/Alerts";
import { useNavigate } from "react-router-dom";

export default function Users() {
  let navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [usersView, setUsersView] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [alertInfoList, setAlertInfoList] = useState([]);

  const itemsPerPage = 8;

  useEffect(() => {
    cargarUsers();
  }, []);

  useEffect(() => {
    if (usersView) {
      setUpdateUser({
        document: usersView.document,
        first_name: usersView.first_name,
        last_names: usersView.last_names,
        role: usersView.role,
        email: usersView.email,
        password: usersView.password,
        phone: usersView.phone,
        start_date: usersView.start_date,
        date_birth: usersView.date_birth,
        status,
        sex: usersView.sex,
        city_birth: usersView.city_birth,
        birth_department: usersView.birth_department,
      });
    }
  }, [usersView]);

  const [updateUser, setUpdateUser] = useState({
    email: "",
    phone: "",
    status: "",
  });

  const { role, email, password, phone, status } = updateUser;

  const onInputChange = (e) => {
    console.log("Valor del campo:", e.target.value);
    console.log("Nombre del campo:", e.target.name);
    setUpdateUser({ ...updateUser, [e.target.name]: e.target.value });
  };

  const token = localStorage.getItem("token");

  const header = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const cargarUsers = async () => {
    const resultado = await axios.get("http://localhost:8088/vaccinator", {
      headers: header,
    });
    setUsers(resultado.data);
  };

  const infoUser = async (documento) => {
    const resultado = await axios.get(
      "http://localhost:8088/vaccinator/" + documento,
      { headers: header }
    );
    setUsersView(resultado.data);
  };

  const actualizarUser = async (e, document) => {
    e.preventDefault();
    try {
      console.log(updateUser);
      await axios.put(
        "http://localhost:8088/vaccinator/" + document,
        updateUser,
        { headers: header }
      );
      addAlert("Actualización exitosa", "1");
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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = users.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(users.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 gap-y-14 p-6">
        {currentUsers.map((user, indice) => (
          <div key={indice}>
            <div
              className={
                user.status
                  ? "bg-green-300 rounded-3xl break-words w-full md:w-[90%] p-4 shadow-2xl truncate"
                  : "bg-lightGrey rounded-3xl break-words w-full md:w-[90%] p-4 shadow-2xl truncate"
              }
            >
              <div className="font-bold text-center text-lg pb-4 uppercase">
                {user.role}
              </div>
              <div className="space-y-2">
                <div className="flex space-x-2">
                  <div className="font-bold">Nombre:</div>
                  <div>{user.first_name + " " + user.last_names}</div>
                </div>
                <div className="flex space-x-2">
                  <div className="font-bold">Documento:</div>
                  <div>{user.document}</div>
                </div>
                <div className="flex space-x-2">
                  <div className="font-bold">Correo:</div>
                  <div>{user.email}</div>
                </div>
                <div className="flex space-x-2">
                  <div className="font-bold">Teléfono:</div>
                  <div>{user.phone}</div>
                </div>
                <div className="flex space-x-2">
                  <div className="font-bold">Fecha de nacimiento:</div>
                  <div>{user.date_birth}</div>
                </div>
                <div className="flex space-x-2">
                  <div className="font-bold">Fecha de admisión:</div>
                  <div>{user.start_date}</div>
                </div>
                <div className="flex space-x-2">
                  <div className="font-bold">Estado:</div>
                  <div className="uppercase ">
                    {user.status ? "Activo" : "Inactivo"}
                  </div>
                </div>

                <div className="flex space-x-2 justify-center">
                  <button onClick={() => infoUser(user.document)}>
                    <Modalcomponent
                      estilos="text-xl bg-yellow-300 rounded-lg p-2"
                      icon={<LuPenSquare />}
                      title="Registrar usuario"
                      content={
                        <>
                          <form
                            onSubmit={(e) => actualizarUser(e, user.document)}
                          >
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-4 my-8">
                              <div>
                                <TextInput text="Documento:" />
                                <Input
                                  type="text"
                                  value={usersView.document}
                                  estilos="w-full disabled:opacity-65 border-2 border-darkGray bg-white p-3 rounded-full font-medium"
                                  state="disabled"
                                />
                              </div>
                              <div>
                                <TextInput text="Nombre" />
                                <Input
                                  type="text"
                                  value={usersView.first_name}
                                  estilos="w-full disabled:opacity-65 border-2 border-darkGray bg-white p-3 rounded-full font-medium"
                                  state="disabled"
                                />
                              </div>
                              <div>
                                <TextInput text="Apellidos" />
                                <Input
                                  type="text"
                                  value={usersView.last_names}
                                  estilos="w-full disabled:opacity-65 border-2 border-darkGray bg-white p-3 rounded-full font-medium"
                                  state="disabled"
                                />
                              </div>
                              <div>
                                <TextInput text="Role" />
                                <Input
                                  type="text"
                                  value={usersView.role}
                                  estilos="w-full disabled:opacity-65 border-2 border-darkGray bg-white p-3 rounded-full font-medium"
                                  state="disabled"
                                />
                              </div>
                              
                              <div>
                                <TextInput text="Correo:" />
                                <Input
                                  id="email"
                                  name="email"
                                  value={email}
                                  type="email"
                                  onChange={(e) => onInputChange(e)}
                                  estilos="w-full border-2 border-darkGray bg-white p-3 rounded-full font-medium"
                                />
                              </div>
                              <div>
                                <TextInput text="Teléfono:" />
                                <Input
                                  id="phone"
                                  name="phone"
                                  value={phone}
                                  type="number"
                                  onChange={(e) => onInputChange(e)}
                                  estilos="w-full border-2 border-darkGray bg-white p-3 rounded-full font-medium"
                                />
                              </div>

                              <div>
                                <TextInput text="Estado:" />
                                <select
                                  id="status"
                                  name="status"
                                  onChange={(e) => onInputChange(e)}
                                  className="w-full bg-white border-2 border-darkGray p-3 rounded-full font-medium"
                                >
                                  <option value=""></option>
                                  <option value={false}>Inactivo</option>
                                  <option value={true}>Activo</option>
                                </select>
                              </div>
                              <div>
                                <TextInput text="Fecha de inicio:" />
                                <Input
                                  type="text"
                                  value={usersView.start_date}
                                  estilos="w-full disabled:opacity-65 border-2 border-darkGray bg-white p-3 rounded-full font-medium"
                                  state="disabled"
                                />
                              </div>
                              <div>
                                <TextInput text="Fecha de nacimiento:" />
                                <Input
                                  type="text"
                                  value={usersView.date_birth}
                                  estilos="w-full disabled:opacity-65 border-2 border-darkGray bg-white p-3 rounded-full font-medium"
                                  state="disabled"
                                />
                              </div>

                              <div>
                                <TextInput text="Sexo" />
                                <Input
                                  type="text"
                                  value={
                                    usersView.sex === "M"
                                      ? "Masculino"
                                      : "Femenino"
                                  }
                                  estilos="w-full disabled:opacity-65 border-2 border-darkGray bg-white p-3 rounded-full font-medium"
                                  state="disabled"
                                />
                              </div>
                              <div>
                                <TextInput text="Departamento:" />
                                <Input
                                  type="text"
                                  value={usersView.birth_department}
                                  estilos="w-full disabled:opacity-65 border-2 border-darkGray bg-white p-3 rounded-full font-medium"
                                  state="disabled"
                                />
                              </div>
                              <div>
                                <TextInput TextInput text="Ciudad:" />
                                <Input
                                  type="text"
                                  value={usersView.city_birth}
                                  estilos="w-full disabled:opacity-65 border-2 border-darkGray bg-white p-3 rounded-full font-medium"
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

                  <button onClick={() => infoUser(user.document)}>
                    <Modalcomponent
                      estilos="text-xl bg-blue-300 rounded-lg p-2 text-black"
                      icon={<LuEye />}
                      title="Información del usuario"
                      content={
                        <>
                          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-4 my-8">
                            <div>
                              <TextInput text="Documento:" />
                              <Input
                                type="text"
                                value={usersView.document}
                                estilos="w-full disabled:opacity-65 border-2 border-darkGray bg-white p-3 rounded-full font-medium"
                                state="disabled"
                              />
                            </div>
                            <div>
                              <TextInput text="Nombre" />
                              <Input
                                type="text"
                                value={usersView.first_name}
                                estilos="w-full disabled:opacity-65 border-2 border-darkGray bg-white p-3 rounded-full font-medium"
                                state="disabled"
                              />
                            </div>
                            <div>
                              <TextInput text="Apellidos" />
                              <Input
                                type="text"
                                value={usersView.last_names}
                                estilos="w-full disabled:opacity-65 border-2 border-darkGray bg-white p-3 rounded-full font-medium"
                                state="disabled"
                              />
                            </div>
                            <div>
                              <TextInput text="Rol:" />
                              <Input
                                type="text"
                                value={usersView.role}
                                estilos="w-full disabled:opacity-65 border-2 border-darkGray bg-white p-3 rounded-full font-medium"
                                state="disabled"
                              />
                            </div>
                            <div>
                              <TextInput text="Correo:" />
                              <Input
                                type="text"
                                value={usersView.email}
                                estilos="w-full disabled:opacity-65 border-2 border-darkGray bg-white p-3 rounded-full font-medium"
                                state="disabled"
                              />
                            </div>
                            <div>
                              <TextInput text="Teléfono:" />
                              <Input
                                type="text"
                                value={usersView.phone}
                                estilos="w-full disabled:opacity-65 border-2 border-darkGray bg-white p-3 rounded-full font-medium"
                                state="disabled"
                              />
                            </div>
                            <div>
                              <TextInput text="Fecha de inicio:" />
                              <Input
                                type="text"
                                value={usersView.start_date}
                                estilos="w-full disabled:opacity-65 border-2 border-darkGray bg-white p-3 rounded-full font-medium"
                                state="disabled"
                              />
                            </div>
                            <div>
                              <TextInput text="Fecha de nacimiento:" />
                              <Input
                                type="text"
                                value={usersView.date_birth}
                                estilos="w-full disabled:opacity-65 border-2 border-darkGray bg-white p-3 rounded-full font-medium"
                                state="disabled"
                              />
                            </div>
                            <div>
                              <TextInput text="Estado:" />
                              <Input
                                type="text"
                                value={user.status ? "Activo" : "Inactivo"}
                                estilos="w-full disabled:opacity-65 border-2 border-darkGray bg-white p-3 rounded-full font-medium"
                                state="disabled"
                              />
                            </div>

                            <div>
                              <TextInput text="Sexo" />
                              <Input
                                type="text"
                                value={
                                  usersView.sex === "M"
                                    ? "Masculino"
                                    : "Femenino"
                                }
                                estilos="w-full disabled:opacity-65 border-2 border-darkGray bg-white p-3 rounded-full font-medium"
                                state="disabled"
                              />
                            </div>
                            <div>
                              <TextInput text="Departamento:" />
                              <Input
                                type="text"
                                value={usersView.birth_department}
                                estilos="w-full disabled:opacity-65 border-2 border-darkGray bg-white p-3 rounded-full font-medium"
                                state="disabled"
                              />
                            </div>
                            <div>
                              <TextInput TextInput text="Ciudad:" />
                              <Input
                                type="text"
                                value={usersView.city_birth}
                                estilos="w-full disabled:opacity-65 border-2 border-darkGray bg-white p-3 rounded-full font-medium"
                                state="disabled"
                              />
                            </div>
                          </div>
                        </>
                      }
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center relative h-28 w-full">
        <ul className="flex space-x-2 absolute inset-x-0 justify-center">
          {pageNumbers.map((number) => (
            <li key={number}>
              <button
                className="flex justify-center items-center space-x-2 bg-lightGreen hover:bg-transparentBlue h-10 w-10 rounded-lg "
                onClick={() => paginate(number)}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-10 p-14 invisible hidden">1</div>
      <Footer
        imgFooter={shieldVaccinator}
        styleImg="fixed flex justify-end inset-x-0 bottom-16"
        styleFooter="w-full h-14 flex justify-center items-center text-white font-bold bg-darkBlue inset-x-0 bottom-0 fixed"
      />
    </>
  );
}
