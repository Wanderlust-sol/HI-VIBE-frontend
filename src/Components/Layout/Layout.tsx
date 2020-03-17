import React from 'react';
import Nav from 'Components/Nav/Nav';
import Player from 'Components/Player/Player';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <TotalBackground>
      <Nav />
      <MainContainer>{children}</MainContainer>
      <Player />
    </TotalBackground>
  );
};

export default Layout;

const TotalBackground = styled.div`
  display: flex;
  overflow-x: hidden;
  ${({ theme }) => theme.media.desktop`
 display: flex;
  overflow-x: hidden;
  `}
`;

const MainContainer = styled.div`
  color: black;
  margin-top: 67px;
  min-height: 600px;
  background-color: #fbfbfb;
  width: 100%;

  ${({ theme }) => theme.media.desktop`
 margin-top:0;
 height: 100vh;
  color: black;
  min-height: 600px;
  padding-left: 225px;
  background-color: #fbfbfb;
  width: 100%;
    display: flex;
  justify-content: center;
  `}
`;
