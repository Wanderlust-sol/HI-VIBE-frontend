import Icons from '../../Images/vibe.svg';
import styled from 'styled-components';

export const PlayButton = styled.a`
  position: absolute;
  bottom: 10px;
  left: 10px;
  padding: 6px;
  transition: opacity 0.3s ease-in;
  z-index: 25;

  :hover::before {
    transform: scale(1.1);
  }

  ::after {
    background-image: url(${Icons});
    background-position: -424px -803px;
    width: 16px;
    height: 16px;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-6px, -7.5px);
  }

  ::before {
    transition: transform 0.2s ease-in-out;
    width: 36px;
    height: 36px;
    background-color: hsla(0, 0%, 100%, 0.85);
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.05);
    display: block;
    content: '';
  }
`;

export const PauseButton = styled(PlayButton)`
  ::after {
    transform: translate(-7.5px, -7px);
    background-position: -264px -777px;
  }
`;
