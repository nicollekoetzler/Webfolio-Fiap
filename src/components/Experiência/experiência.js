import React from "react";
import styled from "styled-components";
import Footer from "../Footer/footer";
import Header from "../../components/Header/header";
import enganharia from "../../assets/experiencia1.jpg";
import computacao from "../../assets/experiencia2.jpg";
import FotoComInfo from "../FotoComInfo/fotocominfo";

function Experiência() {
  return (
    <Section>
      <Header />
      <Left>
        <StyledH1>
          Minha <br />
          <span>E</span>xperiência.
        </StyledH1>
        <StyledP>
          Desenvolvedor Full Stack.
        </StyledP>
      </Left>
      <Container>
        <FotoComInfo
          title="DEV Fullstack"
          subtitle="Tech Solutions Inc."
          text="Trabalhei como Desenvolvedor Full Stack na Tech Solutions Inc, onde fui responsável pelo desenvolvimento de aplicações web robustas e escaláveis. Minha função incluía a implementação de funcionalidades front-end utilizando React e a criação de APIs RESTful com Node.js. Colaborei estreitamente com designers e gerentes de produto para entregar soluções que atendessem às necessidades dos clientes."
          additionalText=""
          buttonText="Veja Mais"
          imageUrl={enganharia} alt="Engenharia"
        />
        <BorderedTop />

        <FotoComInfo
          title="Engenheiro de Software"
          subtitle="Apple Inc."
          text="Atuei como Engenheiro de Software na Apple Inc., focando em desenvolvimento de sistemas críticos e de alta performance. Trabalhei em projetos que exigiam análise profunda de requisitos, design de arquiteturas complexas e otimização de performance. Utilizei metodologias ágeis para garantir entregas contínuas e de alta qualidade."
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

export default Experiência;
