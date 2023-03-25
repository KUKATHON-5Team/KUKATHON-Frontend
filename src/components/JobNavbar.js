import styled from "styled-components";
import { FaUser } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import logo from "../assets/img/naeil_logo.png";
import { useNavigate } from "react-router";

export const JobNavbar = () => {
  const navigate = useNavigate();

  return (
    <TopNavContainer>
      <MainLogo
        className="logo"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={logo} />
      </MainLogo>
      <Title>채용정보</Title>
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
  border-bottom: 1px solid #d6d6d6;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1000;
`;

const MainLogo = styled.div`
  position: absolute;
  left: 2%;
  img {
    width: 70px;
  }
`;

const Title = styled.div`
  position: relative;
  width: 200px;
  font-size: 18px;
  font-weight: 600;
  color: #7660d6;
  text-align: center;
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
