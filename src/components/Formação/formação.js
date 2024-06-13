import React from "react";
import styled from "styled-components";
import Header from "../../components/Header/header";
import joaoImage from "../../assets/joaoimage.webp";
import FotoComInfo from "../FotoComInfo/fotocominfo";

function Formação() {
  return (
    <Section>
      <Header />
      <Container>
        <FotoComInfo
          title="Engenharia"
          subtitle="Subtítulo"
          text="Main text of the example, which can be lengthy."
          additionalText="Qualquer coisa."
          buttonText="Veja Mais"
        />
        <BorderedTop />

        <FotoComInfo
          title="Computação"
          subtitle="Sim."
          text="Main text of the example, which can be lengthy."
          additionalText="Odeio Java"
          buttonText="Veja Mais"
        />
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

const Left = styled.div`
  background-color: purple;
`;

const Title = styled.h1`
  font-size: 60px;
  color: #181717;
`;

const Right = styled.div`
  background-color: red;
`;

const Button = styled.button`
  background: #e07c20;
  border: none;
  padding: 10px 20px;
  color: white;
`;
const BorderedTop = styled.div`
  width: 80%;
  border-top: 2px solid #000;
  margin: 0 auto;
`;

export default Formação;
