import React from "react";
import Bot from "../../assets/img/Bot.webp";

export default function MyAvatar() {
  return (
    <>
      <div className="w-10 h-10 border-2 border-black rounded-full flex mr-2">
        <img className="w-6 m-auto" alt="" src={Bot} />
      </div>
    </>
  );
}
