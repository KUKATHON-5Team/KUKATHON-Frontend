import styled from "styled-components";
import { useState } from "react";

export const JobScrapModal = ({ isOpen, setIsOpen }) => {
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <JobScrapModalContainer>
      {isOpen ? (
        <ModalBackdrop onClick={openModalHandler}>
          <ModalView onClick={(e) => e.stopPropagation()}>
            <div className="info">어떤 어르신에게 스크랩할까요?</div>
            <div className="peoples">
              <div className="people">
                <input type="checkbox" />
                <div className="name">김상철(남)</div>
                <div className="age">67세</div>
                <div className="address">서울시 강서구 염창동</div>
              </div>
              <div className="people">
                <input type="checkbox" />
                <div className="name">윤정남(여)</div>
                <div className="age">81세</div>
                <div className="address">서울시 강서구 등촌2동</div>
              </div>
              <div className="people">
                <input type="checkbox" />
                <div className="name">박상이(여)</div>
                <div className="age">76세</div>
                <div className="address">서울시 강서구 등촌1동</div>
              </div>
            </div>
            <div className="buttons">
              <button
                className="border"
                onClick={() => {
                  openModalHandler(!isOpen);
                }}
              >
                추가
              </button>
              <button
                onClick={() => {
                  openModalHandler(!isOpen);
                }}
              >
                확인
              </button>
              <button
                onClick={() => {
                  openModalHandler(!isOpen);
                }}
              >
                변경
              </button>
            </div>
          </ModalView>
        </ModalBackdrop>
      ) : null}
    </JobScrapModalContainer>
  );
};

const JobScrapModalContainer = styled.div``;

const ModalBackdrop = styled.div`
  background: rgba(255, 255, 255, 0.5);
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

const ModalView = styled.div`
  width: 300px;
  height: 400px;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  position: relative;
  div.info {
    height: 95px;
    font-size: 20px;
    font-weight: 600;
    color: #7660d6;
    text-align: center;
    line-height: 95px;
    border-bottom: 2px solid #f5f5f5;
  }
  div.peoples {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  div.people {
    height: 50px;
    border-bottom: 0.5px solid #d9d9d9;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    input {
      margin-left: 20px;
      accent-color: #7660d6;
    }
    div.name {
      font-size: 14px;
      color: black;
      width: 90px;
      text-align: center;
    }
    div.age {
      font-size: 14px;
      text-align: center;
      margin-right: 10px;
    }
    div.address {
      font-size: 12px;
      color: #797979;
    }
  }

  div.buttons {
    width: 100%;
    height: 60px;
    display: flex;
    position: absolute;
    bottom: 0;
    button {
      width: 33.33%;
      background-color: white;
      border: none;
      border-top: 1px solid #7660d699;
      border-right: 1px solid #7660d699;
      border-bottom: 1px solid #7660d699;
      color: #7660d6;
      font-size: 16px;
      &:hover {
        background-color: #7660d699;
        color: white;
      }
    }
    button.border {
      border-left: 1px solid #7660d699;
    }
  }
`;
