import React, { Component } from 'react';
import styled from 'styled-components';

export default class Intro extends Component {
  render(): JSX.Element {
    return (
      <div>
        <Container>
          <Title>
            지금 바로 로그인 하고
            <br />
            한땀 한땀 만든 플레이 리스트 듣기
          </Title>
          <Text>
            K-Pop부터 클래식까지 모든 장르를 아우르는 건 기본.
            <br />
            수천 개의 플레이리스트가 트렌드에 맞게 업데이트.
          </Text>
          <ImgPlaylist />
        </Container>
      </div>
    );
  }
}

const Container = styled.div`
  padding-top: 59px;
  color: #000;
  text-align: center;
`;

const Title = styled.strong`
  display: block;
  padding: 0 20px;
  font-size: 28px;
  line-height: 38px;
  font-weight: 700;
`;

const Text = styled.p`
  margin-top: 8px;
  padding: 0 20px;
  line-height: 22px;
  color: #939393;
`;

const ImgPlaylist = styled.div`
  height: 318px;
  margin-top: 50px;
  background: url('https://vibe.naver.com/img/today_thumbs.1d76741b.png');
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: 0;

  background-size: auto 287px;
`;
