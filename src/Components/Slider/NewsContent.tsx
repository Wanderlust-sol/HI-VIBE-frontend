import React, { Component } from 'react';
import styled from 'styled-components';
import { PlayButton, PauseButton } from '../Buttons/PlayButton';
import MoreButton from '../Buttons/MoreButton';

interface Data {
  thumbnail: string;
  main_text: string;
  news_id: number;
}

interface Props {
  data: Data;
}

export default class NewsContent extends Component<Props> {
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
      <>
        <div style={{ margin: '0 10px' }}>
          <div
            onMouseEnter={this.handleMouseHover}
            onMouseLeave={this.handleMouseHover}
            style={{
              position: 'relative',
              overflow: 'hidden',
              marginTop: -95,
              height: '310px',
            }}
          >
            <Overlay
              style={{
                width: `600px`,
                transform: `translate(-21%, -10%)`,
                overflow: `hidden`,
                backgroundImage: `url(${this.props.data.thumbnail})`,
              }}
              blur={this.state.isHovering}
            />
            {this.state.isPlay ? (
              <PauseButton
                onClick={this.togglePlay}
                style={{ opacity: this.state.isHovering ? 1 : 0 }}
              />
            ) : (
              <PlayButton
                onClick={this.togglePlay}
                style={{ opacity: this.state.isHovering ? 1 : 0 }}
              />
            )}
            <MoreButton
              id={this.props.data.news_id}
              style={{ opacity: this.state.isHovering ? 1 : 0 }}
            />
          </div>
          <Title style={{ marginTop: 15 }}>{this.props.data.main_text}</Title>
          <SubText>관련 뉴스 보기</SubText>
        </div>
      </>
    );
  }
}

interface Filter {
  blur?: boolean;
}

const Overlay = styled.div`
  transition: filter 0.5s ease-in;
  height: 310px;
  background-size: 100%;
  background-position: 0 130px;
  background-repeat: no-repeat;
  cursor: pointer;

  filter: ${(props: Filter): false | 'blur(2px)' | undefined =>
    props.blur && `blur(2px)`};
`;

const Title = styled.div`
  margin-top: 15px;
  cursor: pointer;
  line-height: 21px;
  :hover {
    text-decoration: underline;
  }
`;

const SubText = styled.div`
  margin-top: 10px;
  font-size: 12px;
  font-weight: bold;
  color: #808080;
`;
