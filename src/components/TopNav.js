import { useState } from "react";
import styled from "styled-components";
import { HiSearch } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";

export const TopNav = () => {
  return (
    <TopNavContainer>
      <MainLogo className="logo">내일</MainLogo>
      <SearchbarContainer>
        <input type="text"></input>
        <HiSearch className="search" />
      </SearchbarContainer>
      <NavBtn className="like">
        <AiFillHeart />
      </NavBtn>
      <NavBtn className="mypage">
        <FaUser />
      </NavBtn>
    </TopNavContainer>
  );
};

const TopNavContainer = styled.div`
  box-sizing: border-box;
  width: 100vw;
  max-width: 420px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  position: fixed;
  border: 1px solid black;
  border-bottom: none;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1000;
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
