import React, { useEffect } from "react";
import toastr from "toastr";

export default function Alerts({ mensaje, tipo }) {
  useEffect(() => {
    toastr.options = {
      closeButton: true,
      progressBar: true,
      newestOnTop: true,
      preventDuplicates:true,
      positionClass: "toast-top-right",
    };

    if (tipo === "1") {
      toastr.success(mensaje);
    } else {
      toastr.error(mensaje);
    }
  }, [mensaje, tipo]);

  return null;
}
