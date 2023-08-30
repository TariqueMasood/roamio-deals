/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div css={modalOverlay}>
      <div css={modal}>
        <button css={modalClose} onClick={onClose}>
          close
        </button>
        <div css={modalContent}>{children}</div>
      </div>
    </div>,
    document.getElementById("modal-root") // Create a div with this ID in your HTML
  );
};

export default Modal;

const modalOverlay = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const modal = css`
  background-color: white;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  width: 400px;
  position: relative;
  z-index: 99999;
`;

const modalClose = css`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background-color: transparent;
  font-size: 20px;
  cursor: pointer;
`;
const modalContent = css`
  background-color: red;
`;
