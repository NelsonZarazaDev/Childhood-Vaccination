import React from "react";
import imgError from "../../assets/img/4995349.webp";

export default function Error() {
  return (
    <>
      <div className="flex flex-col h-screen m-auto justify-center items-center">
        <div className="flex text-[130px] md:text-[250px] font-bold  items-center">
          4
          <img
            className="brightness-100 saturate-150 drop-shadow-2xl animate-[flotar_2s_infinite_alternate_ease-in-out] w-48 md:w-auto"
            src={imgError}
            alt=""
          />
          4
        </div>
        <div className="text-md md:text-2xl text-center">
          Lo sentimos, la página que intentas acceder no existe. Por favor,
          verifica la URL e intenta nuevamente.
        </div>
      </div>
    </>
  );
}
