
import React from "react";
import styled from "styled-components";
import Footer from "../Footer/footer";
import Header from "../../components/Header/header";
import enganharia from "../../assets/engenharia.jpeg";
import computacao from "../../assets/computacao.jpeg";
import FotoComInfo from "../FotoComInfo/fotocominfo";

function Hobbies() {
  return (
    <Section>
      <Header />
      <Left>
            <StyledH1>
              Meus <br />
              <span>H</span>obbies.
            </StyledH1>
            <StyledP>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.
            </StyledP>
          </Left>
      <Container>
        <FotoComInfo
          title="Engenharia"
          subtitle="Subtítulo"
          text="Main text of the example, which can be lengthy."
          additionalText="Qualquer coisa."
          buttonText="Veja Mais"
          imageUrl={enganharia} alt="Engenharia"
        />
        <BorderedTop />

        <FotoComInfo
          title="Computação"
          subtitle="Sim."
          text="Main text of the example, which can be lengthy."
          additionalText="Odeio Java"
          buttonText="Veja Mais"
          imageUrl={computacao} alt="Computação"
        />
      </Container>
      <Footer />
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
  margin-bottom: 90px;
`;

const BorderedTop = styled.div`
  width: 80%;
  border-top: 2px solid #000;
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 80px;
`;

const Left = styled.div`
  margin-bottom: 120px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-left: 168px;
  width: 70vw;
  gap: 150px;
`;

const StyledH1 = styled.h1`
  font-family: "Dm Sans", sans-serif;
  font-size: 60px;
  color: #181717;
  margin: 20px 0;
  text-align: left;
  span {
    padding: 0 4px 4px 4px;
    background: #E07C20;
  }
`;

const StyledP = styled.p`
  font-family: "Dm Sans", sans-serif;
  font-size: 32px;
  color: #606060;
  margin: 10px 0;
  text-align: left;
  padding-top: 40px;
`;

export default Hobbies;
