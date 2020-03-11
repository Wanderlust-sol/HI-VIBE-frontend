import React, { Component } from 'react';
import styled from 'styled-components';
import Icons from '../../Images/vibe.svg';

export default class Download extends Component {
  render(): JSX.Element {
    return (
      <div>
        <Container>
          <Title>아티스트 고르고 매일 믹스테잎 받기</Title>
          <Text>지금 VIBE 앱에서 취향 길들이기를 해보세요!</Text>
          <LinkArea>
            <AppstoreLink />
            <GoogleplayLink />
          </LinkArea>
        </Container>
      </div>
    );
  }
}

const Container = styled.div`
  ::before {
    background: url('https://vibe.naver.com/img/ic_mixtape.7c6fae22.png');
    width: 106px;
    height: 66px;
    background-size: cover;
    display: inline-block;
    vertical-align: top;
    content: '';
  }
  color: #fff;
  width: auto;
  margin: 0 43px;
  padding: 42px 0 40px;
  text-align: center;
  background-image: linear-gradient(106deg, #ff3a4e, #7e4cff);
`;

const Title = styled.strong`
  display: block;
  margin-top: 16px;
  font-size: 23px;
  line-height: 28px;
  font-weight: 700;
`;

const Text = styled.div`
  margin-top: 6px;
  font-size: 15px;
  color: hsla(0, 0%, 100%, 0.75);
`;

const LinkArea = styled.div`
  margin-top: 25px;
`;

const AppstoreLink = styled.a`
  background-image: url(${Icons});
  background-position: -239px -474px;
  width: 182px;
  height: 54px;
  display: inline-block;
`;

const GoogleplayLink = styled.a`
  background-image: url(${Icons});
  background-position: -429px -474px;
  width: 182px;
  height: 54px;
  margin-left: 12px;
  display: inline-block;
`;
