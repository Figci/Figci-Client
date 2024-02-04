import styled from "styled-components";

function Modal({ children }) {
  return (
    <>
      <ModalBackground />
      <ModalContainer>{children}</ModalContainer>
    </>
  );
}

const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  width: 100%;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContainer = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);

  width: fit-content;
  height: fit-content;
  padding: 64px;
  border: 2px solid #000;
  border-radius: 8px;

  background-color: #fff;
`;

export default Modal;