import React, { Component } from 'react';
import styled from 'styled-components';
import { PlayButton, PauseButton } from '../Buttons/PlayButton';
import MoreButton from '../Buttons/MoreButton';

class Headline extends Component {
  state = {
    isHovering: false,
    isPlay: false,
  };

  handleMouseHover = (): void => {
    this.setState({ isHovering: !this.state.isHovering });
  };

  togglePlay = (): void => {
    this.setState({ isPlay: !this.state.isPlay });
  };

  render(): JSX.Element {
    return (
      <Container>
        <HeadlineWrapper>
          <LinkWrap>
            <HeadlineLink
              href="/"
              onMouseEnter={this.handleMouseHover}
              onMouseLeave={this.handleMouseHover}
            >
              <Thumb>
                <HeadlineImage src="https://music-phinf.pstatic.net/20200313_177/15840886738700GV0z_JPEG/0-%B4%EB%C7%A5%C0%CC%B9%CC%C1%F6-1.jpg?type=w720" />
                {this.state.isPlay ? (
                  <PauseButton
                    href="#/"
                    onClick={this.togglePlay}
                    style={{ opacity: this.state.isHovering ? 1 : 0 }}
                  />
                ) : (
                  <PlayButton
                    href="#/"
                    onClick={this.togglePlay}
                    style={{ opacity: this.state.isHovering ? 1 : 0 }}
                  />
                )}
                <MoreButton
                  style={{ opacity: this.state.isHovering ? 1 : 0 }}
                  ulStyle={{ bottom: 'unset', top: 40 }}
                />
              </Thumb>
              <TextArea>
                <IconMag src="https://music-phinf.pstatic.net/20190527_64/1558943253671FKQca_PNG/icon_GENRE.png" />
                <Title>
                  호텔 켈리포니아 로비에서
                  <br />
                  듣는 재즈
                </Title>
                <InfoText>
                  재즈와 친해지는 방법이 몇 가지 있는데 그중 하나가 오래 들어
                  익숙한 팝송을 재즈로 듣는 거다. 50년 넘게 팝(록)의 대표 밴드인
                  비틀스의 히트 넘버를 시작으로 팝의 황제 마이클 잭슨, 소울
                  음악의 대가 스티비 원더, 미국인이 가장 사랑하는 록밴드
                  이글스가 부른 노래들은 재즈 맛보기로 안성맞춤이다. 재즈는
                  클래식, 민속 음악, 록&팝 등 그 누구와도 친구가 될 수 있다. -
                  재즈피플
                </InfoText>
                <Sub>
                  <SubText1>VIBE MAG</SubText1>
                  <SubText2>2020.03.13</SubText2>
                </Sub>
              </TextArea>
            </HeadlineLink>
          </LinkWrap>
        </HeadlineWrapper>
      </Container>
    );
  }
}

const Container = styled.div``;

const HeadlineWrapper = styled.div`
  position: relative;
  height: 308px;
  background-color: #f2f2f2;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
`;

const LinkWrap = styled.div`
  right: 43px;
  left: 43px;
  width: auto;
  height: 230px;
  position: absolute;
  top: 50%;
  z-index: 20;
  transform: translateY(-50%);
`;

const HeadlineLink = styled.a`
  background: #fff;
  display: block;
  height: 100%;
`;

const Thumb = styled.div`
  width: 230px;
  margin-right: 28px;
  position: relative;
  float: left;
  height: 100%;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.2);
`;

const HeadlineImage = styled.img`
  width: 100%;
  height: 100%;
`;

const TextArea = styled.div`
  padding: 28px 33px 0 0;
`;

const IconMag = styled.img`
  width: 77px;
  height: 28px;
  vertical-align: top;
`;

const Title = styled.strong`
  :hover {
    text-decoration: underline;
  }

  overflow: hidden;
  display: block;
  margin-top: 11px;
  font-size: 24px;
  line-height: 30px;
  font-weight: 700;
  color: #232323;
`;

const InfoText = styled.div`
  margin-top: 8px;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  display: -webkit-box;
  height: 40px;
  font-size: 14px;
  line-height: 20px;
  color: #939393;
`;

const Sub = styled.div`
  margin-top: 10px;
`;

const SubText1 = styled.span`
  display: inline-block;
  font-size: 13px;
  line-height: 17px;
  vertical-align: top;
  color: #939393;
`;

const SubText2 = styled(SubText1)`
  ::before {
    vertical-align: top;
    width: 3px;
    height: 3px;
    margin: 7px 6px 0;
    background-color: #939393;
    border-radius: 50%;
    content: '';
    display: inline-block;
  }
`;

export default Headline;
