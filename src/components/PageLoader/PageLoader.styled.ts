import styled, { keyframes } from 'styled-components';

const fazer1 = keyframes` 
  0% {
    left: 0;
  }
  100% {
    left: -80px;
    opacity: 0;
  }
`;

const fazer2 = keyframes`
  0% {
    left: 0;
  }
  100% {
    left: -100px;
    opacity: 0;
  }
`;

const fazer3 = keyframes`
  0% {
    left: 0;
  }
  100% {
    left: -50px;
    opacity: 0;
  }
`;

const fazer4 = keyframes`
  0% {
    left: 0;
  }
  100% {
    left: -150px;
    opacity: 0;
  }
`;

const speeder = keyframes`
  0% {
    transform: translate(2px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -3px) rotate(-1deg);
  }
  20% {
    transform: translate(-2px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 3px) rotate(-1deg);
  }
  60% {
    transform: translate(-1px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-2px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(2px, 1px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
`;

export const LoadContainer = styled.div`
  overflow: hidden;
  background-color: #b3b3b394;
  position: fixed;
  inset: 0;
  z-index: 1000;
`;

export const Body = styled.div`
  position: absolute;
  top: 50%;
  margin-left: -50px;
  left: 50%;
  animation: ${speeder} 0.4s linear infinite;
  > span {
    height: 5px;
    width: 35px;
    background: #000;
    position: absolute;
    top: -19px;
    left: 60px;
    border-radius: 2px 10px 1px 0;
    > span:nth-child(1),
    span:nth-child(2),
    span:nth-child(3),
    span:nth-child(4) {
      width: 30px;
      height: 1px;
      background: #000;
      position: absolute;
      animation: ${fazer1} 0.2s linear infinite;
    }
    > span:nth-child(2) {
      top: 3px;
      animation: ${fazer2} 0.4s linear infinite;
    }
    > span:nth-child(3) {
      top: 1px;
      animation: ${fazer3} 0.4s linear infinite;
      animation-delay: -1s;
    }
    > span:nth-child(4) {
      top: 4px;
      animation: ${fazer4} 1s linear infinite;
      animation-delay: -1s;
    }
  }
`;

export const Base = styled.div`
  span {
    position: absolute;
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-right: 100px solid #000;
    border-bottom: 6px solid transparent;

    &:before {
      content: '';
      height: 22px;
      width: 22px;
      border-radius: 50%;
      background: #000;
      position: absolute;
      right: -110px;
      top: -16px;
    }

    &:after {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border-top: 0 solid transparent;
      border-right: 55px solid #000;
      border-bottom: 16px solid transparent;
      top: -16px;
      right: -98px;
    }
  }
`;
export const Face = styled.div`
  position: absolute;
  height: 12px;
  width: 20px;
  background: #000;
  border-radius: 20px 20px 0 0;
  transform: rotate(-40deg);
  right: -125px;
  top: -15px;

  &:after {
    content: '';
    height: 12px;
    width: 12px;
    background: #000;
    right: 4px;
    top: 7px;
    position: absolute;
    transform: rotate(40deg);
    transform-origin: 50% 50%;
    border-radius: 0 0 0 2px;
  }
`;
