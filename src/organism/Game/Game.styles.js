import styled, { keyframes, css } from 'styled-components';
import { ReversAnimation, AversAnimation, AversImgAnimation, ReversImgAnimation } from 'animations/ReversCard';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 20px 20px 20px;
`;
export const MainText = styled.div`
  font-size: 60px;
  font-weight: 700;
  margin-bottom: 30px;
`;
export const SecondText = styled.div`
  font-size: 40px;
  font-weight: 600;
  margin-top: 10px;
`;
export const Panel = styled.div`
  width: 90%;
  height: auto;
  border: 1px solid red;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  background-color: grey;
  margin: 10px;
  width: 70px;
  height: 110px;
  border: 1px solid white;
  border-radius: 10px;
  transition-delay: 0.2s;
  animation: ${AversAnimation} 0.5s ease-in-out forwards;
  &.avers {
    transition-delay: 0.2s;
    animation: ${ReversAnimation} 0.5s ease-in-out forwards;
  }
  &.start {
    animation: ${ReversAnimation} 0.5s ease-in-out forwards;
  }
  &.block {
    pointer-events: none;
  }
  &.hidden {
    visibility: hidden;
  }
`;
export const CardBg = styled.div`
  background-image: url(${({ revers }) => revers});
  background-size: 110px;
  background-position-x: center;
  width: 100%;
  height: 100%;
  transition-delay: 0.2s;
  animation: ${AversImgAnimation} 0.5s ease-in-out forwards;
  border-radius: 10px;
  &.avers {
    transition-delay: 0.2s;
    background-image: url(${({ img }) => img});
    animation: ${AversImgAnimation} 0.5s ease-in-out reverse;
  }
  &.start {
    background-image: url(${({ img }) => img});
  }
  &.block {
    pointer-events: none;
  }
  &.hidden {
    visibility: hidden;
  }
`;
