import React from "react";
import styled from "styled-components";
import Header from "../../components/Header/header";
import joaoImage from "../../assets/joaoimage.webp";
import Botao from "../Botão/botao";
import ComponentePersonalizado from "../ComponentePersonalizado/componentepersonalizado";

function Sobre() {
  return (
    <Section>
      <Header />
      <Container>
        <Info>
          <Left>
            <h1>Eaí! Me chamo João Silva.</h1>
            <p>
              Seja bem vindo ao meu WebFólio! Sou Desenvolvedor FullStack com 2
              anos de experiência e viciado em café!
            </p>
            <p>Meu Endereço: CEP 89280-460</p>
            <Botao
              background="#E07C20"
              color="white"
              borderRadius="0px"
              padding="10px 20px"
              fontSize="16px"
              border="none"
            >
              Veja Mais
            </Botao>
          </Left>
          <Right>
            <img src={joaoImage} alt="Joao Silva" />
          </Right>
        </Info>
        <OtherPages>
          <ComponentePersonalizado
            titulo="Minha formação"
            texto="definitivamente um texto que existe"
            botaoTexto="Veja mais"
            to="/formacao"
          />
          <ComponentePersonalizado
            titulo="Minha Experiência"
            texto="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium."
            botaoTexto="Veja mais"
            to="/experiencia"
          />
          <ComponentePersonalizado
            titulo="Meus Hobbies"
            texto="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium."
            botaoTexto="Veja mais"
            to="/hobbies"
          />
        </OtherPages>
      </Container>
    </Section>
  );
}

const Section = styled.div`
  background: #f3f3f3;
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0px;
`;

const Container = styled.div`
  max-width: 100vw;
  display: flex;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Left = styled.div`
  background-color: purple;
`;

const Right = styled.div`
  background-color: red;
`;

const OtherPages = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default Sobre;
