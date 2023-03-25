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
  border-bottom: 1px solid #d9d9d9;
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
    background: #f5f5f5;
    border: none;
    border-radius: 20px;
    outline: none;
    padding: 0 30px 0 15px;
  }
  .search {
    position: absolute;
    right: 10px;
    height: 36px;
    &:hover {
      cursor: pointer;
    }
  }
`;

const NavBtn = styled.button`
  background-color: transparent;
  border: none;
  svg {
    width: 24px;
    height: 24px;
    fill: #d9d9d9;
  }
  &:hover {
    cursor: pointer;
  }
  position: absolute;
  &.mypage {
    right: 1%;
  }
  &.like {
    right: 10%;
  }
`;
