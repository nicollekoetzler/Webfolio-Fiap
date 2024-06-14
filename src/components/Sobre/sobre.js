import React from "react";
import styled from "styled-components";
import Header from "../../components/Header/header";
import joaoImage from "../../assets/joaoimage.webp";
import Botao from "../Botão/botao";
import ComponentePersonalizado from "../ComponentePersonalizado/componentepersonalizado";
import Footer from "../Footer/footer";

function Sobre() {
  return (
    <Section>
      <Header />
      <Container>
        <Info>
          <Left>
            <StyledH1>
              Eaí! Me chamo <br />
              <span>J</span>oão <span>S</span>ilva.
            </StyledH1>
            <StyledP>
              Seja bem vindo ao meu WebFólio! <br />
              Sou Desenvolvedor FullStack com 2 anos
              <br /> de experiência e viciado em café!
            </StyledP>
            <StyledP>
              Meu Endereço: <br />
              Rua das Flores, 123 <br />
              CEP: 89280-460
            </StyledP>
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
            <Image src={joaoImage} alt="Joao Silva" />
          </Right>
        </Info>
        <OtherPages>
          <ComponentePersonalizado
            titulo="Minha formação"
            texto="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium."
            botaoTexto="Veja mais"
            to="/formacao"
          />
        </OtherPages>
        <OtherPages>
          <ComponentePersonalizado
            titulo="Minha Experiência"
            texto="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium."
            botaoTexto="Veja mais"
            to="/experiencia"
          />
        </OtherPages>
        <OtherPages>
          <ComponentePersonalizado
            titulo="Meus Hobbies"
            texto="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium."
            botaoTexto="Veja mais"
            to="/hobbies"
          />
        </OtherPages>
        <Email>
          <BorderedTop />
          <EmailRow>
            <LeftText>Conte comigo para ajudar você</LeftText>
            <RightText>
              jscoding@gmail.com
              <br />
              <spam>Veja meu currículo</spam>
            </RightText>
          </EmailRow>
        </Email>
        <Footer />
      </Container>
    </Section>
  );
}

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
  flex-direction: column;
`;

const Info = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: flex-start;
  padding-bottom: 100px;
`;
const BorderedTop = styled.div`
  width: 80%;
  border-top: 2px solid #000;
  margin: 0 auto;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 144px;
  flex: 1;
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0;
  flex: 1;
`;

const Image = styled.img`
  width: 421px;
  height: 588px;
`;

const OtherPages = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-bottom: 10px;
  justify-content: space-between;
`;

const Email = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  padding: 10px;
`;

const EmailRow = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 10px;
`;

const LeftText = styled.p`
  font-family: "Dm Sans";
  font-size: 32px;
  color: #181717;
  font-weight: 400;
`;

const RightText = styled.p`
  font-family: "Dm Sans";
  font-size: 32px;
  color: #181717;
  spam {
    font-size: 18px;
    font-weight: 400;
  }
`;

export default Sobre;
