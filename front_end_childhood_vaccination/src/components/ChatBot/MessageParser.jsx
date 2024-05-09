import axios from "axios";
import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = async (message) => {
    if (message === "") {
      actions.handleHello(
        "Parece que has enviado un espacio en blanco. Por favor, escribe tu consulta o pregunta para que pueda ayudarte adecuadamente. ¡Estoy aquí para ayudar!"
      );
    } else {
      const urlBase = "http://localhost:3000/api/get-message?message=";
      const response = await axios.get(`${urlBase}+${message}`);
      actions.handleHello(response.data);
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
