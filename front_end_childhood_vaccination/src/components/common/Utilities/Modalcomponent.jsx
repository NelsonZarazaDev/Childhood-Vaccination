import React from "react";
import Modal from "react-modal";
import { LuX } from "react-icons/lu";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    marginRight: "-50%",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    maxWidth: "80%",
    padding: "2rem",
    borderRadius: "0.5rem",
    border: "solid",
    background: "#ffffff",
  },
};

export default function Modalcomponent({ openModal, estilos, text, icon,inp }) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#3498DB";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button
       onClick={() => {
        openModal();
        setIsOpen(true);
      }}
        className={estilos}
      >
        {text}
        {icon}
      </button>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2
          ref={(_subtitle) => (subtitle = _subtitle)}
          className="PressStart2P mb-4 text-center text-xl"
        >
          Modal
        </h2>
        {inp}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 focus:outline-none"
        >
          <LuX className="text-2xl" />
        </button>
      </Modal>
    </div>
  );
}
