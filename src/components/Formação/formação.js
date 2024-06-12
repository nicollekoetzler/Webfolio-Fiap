import React from "react";
import styled from "styled-components";
import Header from "../../components/Header/header";
import joaoImage from "../../assets/joaoimage.webp";

function Formação() {
  return (
    <Section>
      <Header />
      <Container>
        <Left>
          <h1>Formação.</h1>
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
  flex-direction: row;
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

export default Formação;
