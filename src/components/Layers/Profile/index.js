import React from "react";
import Wave from "../../Wave";
import {FaAngleDown} from 'react-icons/fa'


import {
  Content,
  Container,
  ContainerImage,
  ContainerName,
  Texts,
  Circle,
  Name,
  Office,
  ButtonDown
} from './styles'

export default function Profile(){
  return(
    <Content>
      <ButtonDown href="#Knowledge"> <FaAngleDown size={50}/></ButtonDown>
      <Wave setColor="#CC7378" />
      <Container>
        <ContainerImage>
          <Circle>

          </Circle>
        </ContainerImage>
        <Texts>
          Sou designer, experiente no desenvolvimento de layouts, wireframes, modelos,
          protótipos, infográficos, convites, banners, criação de logomarcas, edição e
          vetorização de imagens.
        </Texts>
        <Texts>
          Gosto muito de trabalhar em equipes dinâmicas e entrosadas, onde o aprendizado
          é constante e a parceria mútua.
        </Texts>
        <ContainerName>
          <Name> Amanda Barbosa </Name>
          <Office> UX / UI DESIGNER</Office>
        </ContainerName>
      </Container>
    </Content>
  )
}