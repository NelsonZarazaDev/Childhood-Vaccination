import React from "react";
import { LuCopyright } from "react-icons/lu";

export default function Footer({imgFooter, styleImg, styleFooter}) {
  const year = new Date().getFullYear();
  return (
    <>
      <div className={styleImg}>
        <img src={imgFooter} className="w-[12.3rem] opacity-50 invisible md:visible absolute bottom-0 right-0" alt="" />
      </div>
      <div className={styleFooter}>
        {year}
        <LuCopyright className="ml-2" />
      </div>
    </>
  );
}
