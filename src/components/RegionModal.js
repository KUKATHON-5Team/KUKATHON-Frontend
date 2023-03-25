import styled from "styled-components";
import { HiSearch } from "react-icons/hi";
import { useState, useEffect } from "react";

export const RegionModal = ({ isOpen, setIsOpen }) => {
  const [regions, setRegions] = useState([]);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setRegions([
      "서울",
      "경기도",
      "인천광역시",
      "부산",
      "대구",
      "광주",
      "제주",
    ]);
  }, []);

  return (
    <RegionModalContainer>
      {isOpen ? (
        <ModalBackdrop onClick={openModalHandler}>
          <RegionModalView onClick={(e) => e.stopPropagation()}>
            <SearchbarContainer>
              <input type="text" placeholder="지역을 입력하세요." />
              <HiSearch />
            </SearchbarContainer>
            <RegionBox>
              {regions?.map((el, idx) => {
                return (
                  <div key={idx} className="region">
                    {el}
                  </div>
                );
              })}
            </RegionBox>
            <SetButton>완료</SetButton>
          </RegionModalView>
        </ModalBackdrop>
      ) : null}
    </RegionModalContainer>
  );
};

const RegionModalContainer = styled.div``;

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

const RegionModalView = styled.div`
  width: 260px;
  height: 330px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 40px 40px 0;
`;

const SearchbarContainer = styled.div`
  position: relative;
  input {
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    border: 0.5px solid #7660d6;
    padding: 0 40px 0 10px;
    outline: none;
    font-size: 10px;
  }
  input::placeholder {
    font-size: 10px;
    color: #d9d9d9;
  }
  svg {
    position: absolute;
    right: 10px;
    fill: #d9d9d9;
    height: 40px;
  }
`;

const RegionBox = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 180px;
  border: 0.5px solid #d9d9d9;
  margin-top: 20px;
  overflow-x: hidden;
  overflow-y: auto;
  div.region {
    box-sizing: border-box;
    width: 260px;
    height: 40px;
    line-height: 40px;
    border-bottom: 0.5px solid #d9d9d9;
    color: #797979;
    font-size: 12px;
    padding: 0 12px;
  }
`;

const SetButton = styled.button`
  width: 100%;
  margin-top: 20px;
  height: 35px;
  background: linear-gradient(102.95deg, #9b4ce0 0.72%, #4778ca 88.14%);
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  font-size: 12px;
  &:hover {
    cursor: pointer;
  }
`;
