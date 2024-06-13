import React from "react";
import styled from "styled-components";
import Botao from "../Botão/botao";

const FotoComInfo = ({
  title,
  subtitle,
  text,
  additionalText,
  imageUrl,
  buttonText,
  ...props
}) => {
  return (
    <Container {...props}>
      <LeftContent>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Text>{text}</Text>
        <AdditionalText>{additionalText}</AdditionalText>
        <Botao
          background="white"
          color="black"
          borderRadius="0px"
          padding="10px 20px"
          fontSize="16px"
          border="1px solid black"
        >
          {buttonText}
        </Botao>
      </LeftContent>
      <RightContent>
        <Image src={imageUrl} alt="Image" />
      </RightContent>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-left: 168px;
  width: 70vw;
`;

const LeftContent = styled.div`
  flex: 1;
  padding-right: 20px;
`;

const RightContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const Title = styled.h2`
  margin-bottom: 10px;
  text-decoration: underline;
  font-weight: 500;
`;

const Subtitle = styled.h3`
  margin-bottom: 10px;
  font-weight: 400;
`;

const Text = styled.p`
  margin-bottom: 10px;
  font-weight: 400;
`;

const AdditionalText = styled.h3`
  margin-top: 20px;
  font-weight: 400;
`;

const Image = styled.img`
  width: 640px;
  height: 364px;
`;

export default FotoComInfo;
