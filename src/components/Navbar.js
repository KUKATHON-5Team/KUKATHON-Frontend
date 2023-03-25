import styled from "styled-components";

export const Navbar = () => {
  const menus = ["채용정보", "내가 찜한 알바", "이력서 등록", "공고등록"];

  return (
    <NavbarContainer>
      {menus.map((el, idx) => {
        return <MenuBtn key={idx}>{el}</MenuBtn>;
      })}
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  height: 60px;
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuBtn = styled.button`
  background-color: transparent;
  border: none;
  margin: 0 5px;
  &:hover {
    cursor: pointer;
    color: blue;
  }
`;
