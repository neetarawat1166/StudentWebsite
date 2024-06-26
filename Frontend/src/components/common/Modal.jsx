import { createContext, useContext, useState, cloneElement } from "react";
import "../style/NeetaStyle/style2.css";

const ModalContext = createContext();

export default function Modal({ children }) {
  const [openName, setOpenName] = useState("");
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const openModal = setOpenName;
  const closeModal = () => setOpenName("");

  return (
    <ModalContext.Provider
      value={{ openName, openModal, closeModal, position, setPosition }}
    >
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens }) {
  const { openModal, closeModal, setPosition, position } = useContext(ModalContext);

  function handleHover(e) {
    e.stopPropagation();
    const rect = e.target.closest("li").getBoundingClientRect();
    setPosition({ x: rect.left, y: rect.bottom });
    openModal(opens);
  }

  return cloneElement(children, {
    onMouseEnter: handleHover,
    onMouseLeave: closeModal,
  });
}

function Window({ children, name }) {
  const { openModal, closeModal, openName, position } = useContext(ModalContext);

  return (
    <div
      className="nav-modal"
      style={{
        top: `${position.y}px`,
        left: `${position.x - 10}px`,
        visibility: `${name !== openName ? "hidden" : "visible"}`,
        opacity: `${name !== openName ? "0" : "1"}`,
        transition: "all 0.2s",
      }}
      onMouseEnter={() => openModal(name)}
      onMouseLeave={closeModal}
    >
      {children}
    </div>
  );
}

Modal.Open = Open;
Modal.Window = Window;
