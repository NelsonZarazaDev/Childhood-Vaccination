import React, { useEffect, useState } from "react";
import axios from "axios";
import PersonalInformation from "../../common/ChildInformation/PersonalInformation";
import VaccinationSchedule from "../../common/ChildInformation/VaccinationSchedule";

export default function VaccinationCard() {
  const token = localStorage.getItem("token");
  const header = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const urlReadChild = "http://localhost:8088/child/";
  const [childR, setChild] = useState([]);
  const user = localStorage.getItem("decodedToken");

  useEffect(() => {
    loadChild();
  }, []);

  const loadChild = async () => {
    const resultado = await axios.get(`${urlReadChild}${user}`, {
      headers: header,
    });
    setChild(resultado.data);
  };
  return (
    <>
      <div className="pt-6 pb-6">
        <PersonalInformation child={childR} />
      </div>

      <VaccinationSchedule child={childR}/>
    </>
  );
}
