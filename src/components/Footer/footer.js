import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  return (
    <FooterContainer>
      <LogoContainer>
        <StyledLink to="/">2024</StyledLink>
      </LogoContainer>
      <Social>
        <StyledLink to="/experiencia">LinkedIn</StyledLink>
        <StyledLink to="/hobbies">Instagram</StyledLink>
      </Social>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  color: white;
  padding: 0px;
  display: flex;
  flex-direction: row;
  top: 0;
  width: 100%;
  justify-content: space-around;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const LogoContainer = styled.div`
  display: flex;
  gap: 16px;
  padding: 0px;
`;

const Social = styled.div`
  display: flex;
  gap: 16px;
  padding: 0px;
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
