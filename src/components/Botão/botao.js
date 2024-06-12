import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Botao = ({ to, children, ...props }) => {
  if (to) {
    return (
      <StyledLink to={to} {...props}>
        {children}
      </StyledLink>
    );
  } else {
    return <StyledButton {...props}>{children}</StyledButton>;
  }
};

const StyledButton = styled.button`
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  cursor: pointer;
  box-shadow: none;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  cursor: pointer;
  text-decoration: none;
  text-align: center;
`;

export default Botao;
