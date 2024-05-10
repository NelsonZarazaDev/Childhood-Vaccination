import React, { useState } from "react";
import Modalcomponent from "../../common/Utilities/Modalcomponent";
import Search from "../../common/Search";
import { LuUserPlus2 } from "react-icons/lu";
import { Outlet, useNavigate } from "react-router-dom";
import Input from "../../common/Utilities/Input";
import SelectDepartment from "../../common/Utilities/SelectDepartment";
import TextInput from "../../common/Utilities/TextInput";
import axios from "axios";
import Button from "../../common/Utilities/Button";

export default function CreateUsers() {
  let navigate = useNavigate();
  const [createUser, setCreateUser] = useState({
    document: "",
    first_name: "",
    last_names: "",
    role: "",
    email: "",
    password: "",
    phone: "",
    start_date: "",
    date_birth: "",
    status: true,
    sex: "",
    city_birth: "",
    birth_department: "",
  });

  const {
    document,
    first_name,
    last_names,
    role,
    email,
    password,
    phone,
    start_date,
    date_birth,
    status,
    sex,
    city_birth,
    birth_department,
  } = createUser;

  const onInputChange = (e) => {
    setCreateUser({ ...createUser, [e.target.name]: e.target.value });
  };

  const header = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(createUser, {
      headers: header,
    });
    await axios.post("http://localhost:8088/vaccinator", createUser, {
      headers: header,
    });
    navigate("../CreateUsers", { replace: true });
  };

  return (
    <>
      <div className="flex justify-between w-11/12 m-auto">
        <Modalcomponent
          estilos="h-10 w-28 flex items-center justify-center bg-greenDarkBlue rounded-full font-bold"
          text="Agregar"
          icon={<LuUserPlus2 className="text-xl ml-2" />}
          title="Registrar usuario"
          content={
            <>
              <form onSubmit={(e) => onSubmit(e)}>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-4 my-8">
                  <div>
                    <TextInput text="Documento:" />
                    <Input
                      id="document"
                      name="document"
                      value={document}
                      type="number"
                      onChange={(e) => onInputChange(e)}
                      estilos="w-full font-medium border-2 border-darkGray bg-white p-3 rounded-full"
                    />
                  </div>
                  <div>
                    <TextInput text="Nombres:" />
                    <Input
                      id="first_name"
                      name="first_name"
                      value={first_name}
                      type="text"
                      onChange={(e) => onInputChange(e)}
                      estilos="w-full font-medium border-2 border-darkGray bg-white p-3 rounded-full"
                    />
                  </div>
                  <div>
                    <TextInput text="Apellidos:" />
                    <Input
                      id="last_names"
                      name="last_names"
                      value={last_names}
                      type="text"
                      onChange={(e) => onInputChange(e)}
                      estilos="w-full font-medium border-2 border-darkGray bg-white p-3 rounded-full"
                    />
                  </div>
                  <div>
                    <TextInput text="Rol:" />
                    <select
                      id="role"
                      name="role"
                      onChange={(e) => onInputChange(e)}
                      className="w-full bg-white border-2 border-darkGray p-3 rounded-full font-medium"
                    >
                      <option value=""></option>
                      <option value="Enfermera">Enfermera / Enfermero</option>
                      <option value="Jefe de enfermeria">
                        Jefe de enfermeria
                      </option>
                    </select>
                  </div>
                  <div>
                    <TextInput text="Correo:" />
                    <Input
                      id="email"
                      name="email"
                      value={email}
                      type="email"
                      onChange={(e) => onInputChange(e)}
                      estilos="w-full font-medium border-2 border-darkGray bg-white p-3 rounded-full"
                    />
                  </div>
                  <div>
                    <TextInput text="Contraseña:" />
                    <Input
                      id="password"
                      name="password"
                      value={password}
                      type="password"
                      onChange={(e) => onInputChange(e)}
                      estilos="w-full font-medium border-2 border-darkGray bg-white p-3 rounded-full"
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
                      estilos="w-full font-medium border-2 border-darkGray bg-white p-3 rounded-full"
                    />
                  </div>
                  <div>
                    <TextInput text="Fecha de inicio:" />
                    <Input
                      id="start_date"
                      name="start_date"
                      value={start_date}
                      type="date"
                      onChange={(e) => onInputChange(e)}
                      estilos="w-full font-medium border-2 border-darkGray bg-white p-3 rounded-full"
                    />
                  </div>
                  <div>
                    <TextInput text="Fecha de nacimiento:" />
                    <Input
                      id="date_birth"
                      name="date_birth"
                      value={date_birth}
                      type="date"
                      onChange={(e) => onInputChange(e)}
                      estilos="w-full font-medium border-2 border-darkGray bg-white p-3 rounded-full"
                    />
                  </div>
                  <div>
                    <TextInput text="Sexo:" />
                    <select
                      id="sex"
                      name="sex"
                      onChange={(e) => onInputChange(e)}
                      className="w-full bg-white border-2 border-darkGray p-3 rounded-full font-medium"
                    >
                      <option value=""></option>
                      <option value="M">Masculino</option>
                      <option value="F">Femenino</option>
                    </select>
                  </div>
                  <div className="col-span-2">
                    <div className="flex">
                      <SelectDepartment onChange={(e) => onInputChange(e)} />
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-center">
                  <Button text="Crear" />
                </div>
              </form>
            </>
          }
        />
        <div>
          <Search code="pt}YXn4f{F})+-BK(0k2jrt;m+T6*Ezr)L#a]udGFH]qK0R{a/2jR],iD" />
        </div>
      </div>
      <Outlet />
    </>
  );
}
