// in ActionProvider.jsx
import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = (mensaje) => {
    const botMessage = createChatBotMessage(mensaje);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;