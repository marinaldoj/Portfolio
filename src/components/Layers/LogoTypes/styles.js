import styled, { keyframes } from 'styled-components'

const AnimationDown = keyframes`
  from {transform: translateY(0px);}
  to {transform: translateY(10px);}
`

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #E29297;
  position: relative;
`


export const Container = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  padding: 40px 0;
`

export const ContainerBalls = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 40px;
`

export const Titulo = styled.div`
  padding-left: 40px;
  width: 100%;
  height: 10%;
  font-size: 50px;
  font-family: 'Smooch Sans', sans-serif;
  font-weight: 700;
  color: #fff;
`

export const Balls = styled.div`
  width: 200px;
  height: 200px;
  background-color: #fff;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img`
  width: 150px;
  height: 150px;
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