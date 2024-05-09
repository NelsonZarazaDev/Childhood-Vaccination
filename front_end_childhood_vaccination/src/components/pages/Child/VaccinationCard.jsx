import React, { useMemo, useState } from "react";
import PersonalInformation from "../../common/ChildInformation/PersonalInformation";
import VaccinationSchedule from "../../common/ChildInformation/VaccinationSchedule";
import { Navigate, useParams } from "react-router-dom";
import { GetChild } from "../../../data/VaccinationSchedule";
var CryptoJS = require("crypto-js");

export default function VaccinationCard({code}) {
  const [Child, setChild] = useState([]);
  // const secretKey =
  //   "jW(FE$61_f,d%_H%&],=..tm%QzX6M.4k!W)T}&0=f$m#:75?SR72nRZ)!p_VNZ@SpbMdc==rM+(9:hzcEe%f94ifgL}ZjDAK2/h";
  const params = useParams();
  // var bytes = CryptoJS.TripleDES.decrypt(params.documento, secretKey);
  // const paramsM = bytes.toString(CryptoJS.enc.Utf8);

  const child = useMemo(() => GetChild(params.documento), [params.documento]);
  child.then(function (result) {
    setChild(result);
  });
  // if (!paramsM) {
  //   return <Navigate to="/unauthorized" replace />;
  // }

  return (
    <>
      <div className="pt-6 pb-6">
        <PersonalInformation child={Child} />
      </div>

      <VaccinationSchedule child={Child} code={code} />
    </>
  );
}
