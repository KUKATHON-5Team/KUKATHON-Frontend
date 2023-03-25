import styled from "styled-components";
import { HiSearch } from "react-icons/hi";
import { useState, useEffect } from "react";

const RegionModal = ({
  size,
  regionmodals,
  isOpen,
  setIsOpen,
  bigger,
  regions,
  setRegions,
}) => {
  const regioninfo = {
    big: ["서울특별시", "경기도", "인천광역시"],
    middle: {
      서울특별시: ["강남구", "강동구", "강북구"],
      경기도: ["가평군", "과천시", "광명시"],
      인천광역시: ["강화군", "계양구", "남동구"],
    },
    small: {
      강남구: ["개포동", "개포1동", "개포4동", "논현동"],
      강동구: ["강일동", "고덕동", "고덕1동", "고덕2동"],
      강북구: ["미동", "번동", "번1동", "번2동"],
      가평군: ["가평읍", "북면", "상면", "설악면"],
      과천시: ["갈현동", "과천동", "곽문동", "막계동"],
      광명시: ["가학동", "광명동", "광명1동", "광명2동"],
      강화군: ["강화읍", "교동면", "길상면", "내가면"],
      계양구: ["다남동", "계산동", "계산1동", "계산2동"],
      남동구: ["간석동", "간석1동", "간석2동", "간석3동"],
    },
  };

  const [current, setCurrent] = useState({
    big: "",
    middle: "",
    small: "",
  });

  const openModalHandler = (size) => {
    setIsOpen({ ...regionmodals, [size]: !isOpen });
  };

  const handleClickRegionBox = (size, region) => {
    setCurrent({ ...current, [size]: region });
  };

  const handleClickSetBtn = (size, region) => {
    setRegions({ ...regions, [size]: region });
    openModalHandler(size);
  };

  return (
    <RegionModalContainer>
      {isOpen ? (
        <ModalBackdrop
          onClick={() => {
            openModalHandler(size);
          }}
        >
          <RegionModalView onClick={(e) => e.stopPropagation()}>
            <SearchbarContainer>
              <input type="text" placeholder="지역을 입력하세요." />
              <HiSearch />
            </SearchbarContainer>
            <RegionBox>
              {size === "big"
                ? regioninfo.big?.map((el, idx) => {
                    return (
                      <div
                        key={idx}
                        className="region"
                        id={current.big === el ? "current" : null}
                        onClick={() => {
                          handleClickRegionBox("big", el);
                        }}
                      >
                        {el}
                      </div>
                    );
                  })
                : null}
              {size === "middle"
                ? regioninfo.middle[bigger]?.map((el, idx) => {
                    return (
                      <div
                        key={idx}
                        className="region"
                        id={current.middle === el ? "current" : null}
                        onClick={() => {
                          handleClickRegionBox("middle", el);
                        }}
                      >
                        {el}
                      </div>
                    );
                  })
                : null}
              {size === "small"
                ? regioninfo.small[bigger]?.map((el, idx) => {
                    return (
                      <div
                        key={idx}
                        className="region"
                        id={current.small === el ? "current" : null}
                        onClick={() => {
                          handleClickRegionBox("small", el);
                        }}
                      >
                        {el}
                      </div>
                    );
                  })
                : null}
            </RegionBox>
            <SetButton
              onClick={() => {
                handleClickSetBtn(size, current[size]);
              }}
            >
              완료
            </SetButton>
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
    &:hover {
      color: #7660d6;
    }
    &#current {
      color: #7660d6;
    }
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

export default RegionModal;
