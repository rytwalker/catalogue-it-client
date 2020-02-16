import { useRef } from "react";
import styled from "styled-components";
import useOnClickOutside from "../../hooks/useOnClickOutside";

function Modal({ children, closeModal = null }) {
  const ref = useRef();
  useOnClickOutside(ref, closeModal);

  return (
    <ModalBackground>
      <StyledModal ref={ref}>
        <CloseButton onClick={closeModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-x-circle"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
        </CloseButton>
        {children}
      </StyledModal>
    </ModalBackground>
  );
}

const ModalBackground = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledModal = styled.div`
  width: 30vw;
  background: #fff;
  padding: 2rem;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  cursor: pointer;
`;

export default Modal;
