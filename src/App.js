import React from "react";
import styled from "styled-components";
import joaoImage from "./assets/joaoimage.webp";
import "./App.css";

function App() {
  return (
    <Section>
      <Container>
        <Left>
          <h1>Eaí! Me chamo João Silva.</h1>
          <p>Seja bem vindo ao meu WebFólio!
          Sou Desenvolvedor FullStack com 2 anos de experiência e viciado em café!</p>
          <p>Meu Endereço:
          CEP 89280-460</p>
          <Button>Veja Mais</Button>
        </Left>
        <Right>
        <img src={joaoImage} alt="Joao Silva" />
        </Right>
      </Container>
    </Section>
  );
}

const Section = styled.div`
  background: #f3f3f3;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: center;
`;

const Left = styled.div`
`;

const Title = styled.h1`
  font-size: 60px;
  color: #181717;
`;

const Right = styled.div`
`;

const Button = styled.button`
  background: #E07C20;
  border: none;
  padding: 10px 20px;
  color: white;
`;

export default App;
