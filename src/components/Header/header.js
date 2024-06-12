import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import jslogo from "../../assets/jslogo.png";

function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <img src={jslogo} alt="Logo JS" />
      </LogoContainer>
      <PagesContainer>
        <StyledLink to="/">Sobre</StyledLink>
        <StyledLink to="/formacao">Formação</StyledLink>
        <StyledLink to="/experiencia">Experiência</StyledLink>
        <StyledLink to="/hobbies">Hobbies</StyledLink>
      </PagesContainer>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  background-color: pink;
  color: white;
  padding: 0px;
  display: flex;
  flex-direction: row;
  top: 0;
  width: 100%;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  justify-content: center;
  align-content: center;
  background-color: blue;
`;

const PagesContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 0px;
  background-color: yellow;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export default Header;
