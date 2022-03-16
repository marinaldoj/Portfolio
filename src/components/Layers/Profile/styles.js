import styled, { keyframes } from 'styled-components'

const AnimationDown = keyframes`
  from {transform: translateY(0px);}
  to {transform: translateY(10px);}
`

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #984449;
  position: relative;
  padding-top: 100px;

`

export const Container = styled.div`
  width: 100%;
  height: 80%;
  display: grid;
  grid-template-columns: 1fr  2fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 10px;
`

export const ContainerImage = styled.div`
  width: 100%;
  height: 100%;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Circle = styled.div`
  width: 326px;
  height: 330px;
  border-radius: 100%;
  background-color: #fff;
`

export const ContainerName = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Name = styled.p`
  font-size: 40px;
  font-weight: 600;
  color: #fff;
  font-family: 'Norican', cursive;
`

export const Office = styled.p`
  font-size: 30px;
  font-weight: 400;
  color: #fff;
  font-family: 'Smooch Sans', sans-serif;
`

export const Texts = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 40px;
  font-weight: 400;
  color: #fff;
  font-family: 'Smooch Sans', sans-serif;
`

export const ButtonDown = styled.a`
  width: 50px;
  height: 50px;
  position: absolute;
  z-index: 3;
  bottom: 20px;
  left: 48%;
  cursor: pointer;
  color: #fff;
  transition: 0.2s;
  :hover{
    animation: ${AnimationDown} 1s alternate infinite;
  }
`