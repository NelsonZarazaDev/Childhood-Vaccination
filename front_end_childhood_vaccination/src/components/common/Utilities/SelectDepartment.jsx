import React, { useEffect, useState } from "react";
import SelectCity from "./SelectCity";
import TextInput from "./TextInput";

const department = [
  { title: "Antioquia" },
  { title: "Boyacá" },
  { title: "Córdoba" },
  { title: "Chocó" },
  { title: "Nariño" },
  { title: "Santander" },
  { title: "Meta" },
  { title: "Atlántico" },
  { title: "Bolívar" },
  { title: "Caldas" },
  { title: "Caquetá" },
  { title: "Cauca" },
  { title: "Cesar" },
  { title: "Cundinamarca" },
  { title: "Huila" },
  { title: "La Guajira" },
  { title: "Magdalena" },
  { title: "Quindío" },
  { title: "Risaralda" },
  { title: "Sucre" },
  { title: "Tolima" },
  { title: "Arauca" },
  { title: "Casanare" },
  { title: "Putumayo" },
  { title: "Amazonas" },
  { title: "Guainía" },
  { title: "Vaupés" },
  { title: "Vichada" },
  { title: "Guaviare" },
  { title: "Archipiélago de San Andrés, Providencia y Santa Catalina" },
  { title: "Bogotá D.C." },
  { title: "Norte de Santander" },
  { title: "Valle del Cauca" },
];

export default function SelectDepartment({ onChange }) {
  const [SelectDepartment, setSelectDepartment] = useState();

  const handleSelectDepartment = (event) => {
    const department = event.target.value;
    setSelectDepartment(department);
  };

  return (
    <>
      <div className="w-full">
        <TextInput text="Departamento" />
        <select
          name="birth_department"
          id="birth_department"
          className="w-[96%] h-auto bg-white border-2 border-darkGray p-3 rounded-full font-bold"
          onInput={handleSelectDepartment}
          onChange={onChange}
        >
          <option></option>
          {department.map((departmentList, index) => (
            <option key={index} value={departmentList.title}>
              {departmentList.title}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full">
        <TextInput text="Ciudad" />
        <SelectCity onChange={onChange} selectedDepartment={SelectDepartment} />
      </div>
    </>
  );
}
