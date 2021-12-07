import styled from 'styled-components';

function Index({ className, onHandleOpenState, children }) {
  return (
    <>
      <ModalContainer className={`flex-center-C ${className}`}>
        {children}
      </ModalContainer>

      <ModalBackground
        className="flex-center-R"
        onClick={onHandleOpenState}
      ></ModalBackground>
    </>
  );
}

export const ModalContainer = styled.div`
  width: 57%;
  min-width: 35rem;
  height: 47%;
  min-height: 45rem;
  background-color: ${({ theme }) => theme.colors.secondColor};
  border-radius: 5rem;
  z-index: 10000;
  padding: 3rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  animation: ${({ theme }) => theme.animation.showDown} 0.5s forwards;

  & .closeIcon {
    position: absolute;
    top: 3%;
    right: 7%;
    cursor: pointer;
  }
`;

export const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1500;
`;

export default Index;
