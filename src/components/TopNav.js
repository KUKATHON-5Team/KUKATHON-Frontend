import { useState } from "react";
import styled from "styled-components";
import { HiSearch } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { ScrapModal } from "./ScrapModal";

export const TopNav = () => {
  const [isOpenScrapmodal, setIsOpenScrapmodal] = useState(false);

  return (
    <>
      <TopNavContainer>
        <MainLogo className="logo">내일</MainLogo>
        <SearchbarContainer>
          <input type="text"></input>
          <HiSearch className="search" />
        </SearchbarContainer>
        <NavBtn
          className="like"
          onClick={() => {
            setIsOpenScrapmodal(!isOpenScrapmodal);
          }}
        >
          <AiFillHeart />
        </NavBtn>
        <NavBtn className="mypage">
          <FaUser />
        </NavBtn>
      </TopNavContainer>
      <ScrapModal isOpen={isOpenScrapmodal} setIsOpen={setIsOpenScrapmodal} />
    </>
  );
};

const TopNavContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const MainLogo = styled.div`
  position: absolute;
  left: 3%;
`;

const SearchbarContainer = styled.div`
  position: relative;
  input {
    width: 210px;
    height: 36px;
    border: 1px solid #f5f5f5;
    border-radius: 20px;
    outline: none;
    padding: 0 30px 0 15px;
    @media screen and (max-width: 400px) {
      width: 180px;
    }
  }
  .search {
    position: absolute;
    right: 10px;
    height: 36px;
    &:hover {
      cursor: pointer;
    }
    fill: #d9d9d9;
  }
`;

const NavBtn = styled.button`
  background-color: transparent;
  border: none;
  svg {
    width: 20px;
    height: 20px;
    fill: #d9d9d9;
  }
  &:hover {
    cursor: pointer;
  }
  position: absolute;
  &.mypage {
    right: 2%;
  }
  &.like {
    right: 10%;
  }
`;
