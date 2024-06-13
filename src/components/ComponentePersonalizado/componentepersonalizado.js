import React from "react";
import styled from "styled-components";
import Botao from "../Botão/botao";

const ComponentePersonalizado = ({
  titulo,
  texto,
  botaoTexto,
  to,
  ...props
}) => {
  return (
    <Container {...props}>
      <Titulo>{titulo}</Titulo>
      <Texto>{texto}</Texto>
      <Botao
        to={to}
        background="white"
        color="black"
        borderRadius="0px"
        padding="10px 20px"
        fontSize="16px"
        border="1px solid black"
      >
        {botaoTexto}
      </Botao>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 168px;
  width: 70vw;
`;

const Titulo = styled.h2`
  margin-bottom: 10px;
  text-decoration: underline;
  font-weight: 500;
`;

const Texto = styled.p`
  margin-bottom: 10px;
  font-weight: 400;
`;

export default ComponentePersonalizado;
