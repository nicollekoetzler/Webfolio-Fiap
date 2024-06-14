import React from "react";
import styled from "styled-components";
import Footer from "../Footer/footer";
import Header from "../../components/Header/header";
import enganharia from "../../assets/codigo.jpg";
import computacao from "../../assets/computacao.jpeg";
import FotoComInfo from "../FotoComInfo/fotocominfo";

function Formação() {
  return (
    <Section>
      <Header />
      <Left>
        <StyledH1>
          Minha <br />
          <span>F</span>ormação.
        </StyledH1>
        <StyledP>
          Engenharia de Software.
        </StyledP>
      </Left>
      <Container>
        <FotoComInfo
          title="Engenharia"
          subtitle="FIAP"
          text="Pós-graduado em Engenharia de Software pela Faculdade de Informática e Administração Paulista (FIAP), com ênfase em metodologias ágeis e gestão de projetos. Adquiri habilidades avançadas em análise de requisitos, arquitetura de software e qualidade de código, sempre buscando a excelência na entrega de produtos tecnológicos."

          buttonText="Veja Mais"
          imageUrl={enganharia} alt="Engenharia"
        />
        <BorderedTop />

        <FotoComInfo
          title="Data Science"
          text="Mestre em Data Science pela Faculdade de Informática e Administração Paulista (FIAP). A formação abrangeu o estudo aprofundado de machine learning, big data e estatística aplicada. Realizei projetos de análise de dados em larga escala, ajudando empresas a tomar decisões informadas com base em insights extraídos de grandes volumes de dados."
          subtitle="FIAP"
          additionalText=""
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

export default Formação;
