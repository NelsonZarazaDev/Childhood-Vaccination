import React, { useMemo, useState } from "react";
import PersonalInformation from "../../common/ChildInformation/PersonalInformation";
import VaccinationSchedule from "../../common/ChildInformation/VaccinationSchedule";
import { Navigate, useParams } from "react-router-dom";
import { GetChild } from "../../../data/VaccinationSchedule";
var CryptoJS = require("crypto-js");

export default function VaccinationCard({code}) {
  const [Child, setChild] = useState([]);

  let params = useParams();
  params = atob(params.documento);
  console.log(params);


  const child = useMemo(() => GetChild(params), [params]);
  child.then(function (result) {
    setChild(result);
  });

  return (
    <>
      <div className="pt-6 pb-6">
        <PersonalInformation child={Child} />
      </div>

      <VaccinationSchedule child={Child} code={code} />
    </>
  );
}
