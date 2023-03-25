import styled from "styled-components";
import { useState } from "react";

export const ScrapModal = ({ isOpen, setIsOpen }) => {
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const [members, setMembers] = useState(["나태진", "도원희"]);

  return (
    <ScrapModalContainer>
      {isOpen ? (
        <ModalBackdrop onClick={openModalHandler}>
          <ScrapModalView onClick={(e) => e.stopPropagation()}>
            <div className="info">어떤 어르신을 대상으로 스크랩 할까요?</div>
            {members?.map((el, idx) => {
              return <div key={idx}>{el}</div>;
            })}
            <div className="buttons">
              <button>추가</button>
              <button>확인</button>
              <button>변경</button>
            </div>
          </ScrapModalView>
        </ModalBackdrop>
      ) : null}
    </ScrapModalContainer>
  );
};

const ScrapModalContainer = styled.div``;

const ModalBackdrop = styled.div`
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ScrapModalView = styled.div`
  width: 300px;
  height: 300px;
  background-color: white;
  z-index: 5000;
  display: flex;
  flex-direction: column;
  position: relative;
  div.buttons {
    display: flex;
    button {
      width: 33.3%;
    }
    position: absolute;
    bottom: 0;
    width: 100%;
  }
`;
