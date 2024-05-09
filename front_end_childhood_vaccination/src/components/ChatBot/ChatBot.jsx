import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import config from "./config";

import chatBot from "../../assets/img/chatBot.webp";


export default function ChatBot() {
  const [showBot, toggleBot] = useState(false);

  const saveMessages = (messages, HTMLString) => {
    localStorage.setItem("chat_messages", JSON.stringify(messages));
  };

  const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem("chat_messages"));
    return messages;
  };


  return (
    <>
      {showBot && (
        <Chatbot
          placeholderText="Escriba un mensaje..."
          headerText="Chatbot"
          config={config}
          actionProvider={ActionProvider}
          messageHistory={loadMessages()}
          messageParser={MessageParser}
          saveMessages={saveMessages}
        />
      )}
        <img src={chatBot} className="w-16 " alt="" onClick={() => toggleBot((prev) => !prev)} />
    </>
  );
}
