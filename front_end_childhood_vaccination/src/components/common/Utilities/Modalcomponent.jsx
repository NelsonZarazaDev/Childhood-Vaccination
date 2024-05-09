import React from "react";
import Modal from "react-modal";
import { LuX } from "react-icons/lu";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    marginRight: "-50%",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    maxWidth: "90%",
    maxHeight: "90%",
    padding: "2rem",
    borderRadius: "0.5rem",
    border: "2px solid #bababa",
    background: "#f3f3f3",
    WebkitOverflowScrolling: "touch",
  },
};

export default function Modalcomponent(props) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
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
        className={props.estilos}
      >
        {props.text}
        {props.icon}
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        shouldCloseOnOverlayClick={false}
        ariaHideApp={false}
      >
        <h2
          ref={(_subtitle) => (subtitle = _subtitle)}
          className="PressStart2P mb-4 text-center text-xl"
        >
          <div className="font-bold text-2xl mb-8">{props.title}</div>
        </h2>
        {props.content}
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
