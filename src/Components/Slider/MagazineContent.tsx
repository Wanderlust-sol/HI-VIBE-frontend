import React, { Component } from 'react';
import styled from 'styled-components';
import { PlayButton, PauseButton } from '../Buttons/PlayButton';
import MoreButton from '../Buttons/MoreButton';

interface Data {
  thumbnail: string;
  title: string;
  release_date: string;
  magazine_id: number;
}

interface Props {
  data: Data;
}

export default class MagazineContent extends Component<Props> {
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
        <div style={{ margin: 10 }}>
          <div
            onMouseEnter={this.handleMouseHover}
            onMouseLeave={this.handleMouseHover}
            style={{ position: 'relative', overflow: 'hidden' }}
          >
            <Overlay
              style={{
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
              id={this.props.data.magazine_id}
              style={{ opacity: this.state.isHovering ? 1 : 0 }}
            />
          </div>
          <Title style={{ marginTop: 15 }}>
            {this.props.data.title.split('\\n').map((line) => {
              return <p>{line}</p>;
            })}
          </Title>
          <SubText>{this.props.data.release_date}</SubText>
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
  background-size: cover;
  cursor: pointer;

  filter: ${(props: Filter): false | 'blur(2px)' | undefined =>
    props.blur && `blur(2px)`};
`;

const Title = styled.div`
  margin-top: 15px;
  cursor: pointer;

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
