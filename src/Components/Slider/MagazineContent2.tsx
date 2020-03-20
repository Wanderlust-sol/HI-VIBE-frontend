import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addMusic } from 'Redux_aeri/Actions';
import { PlayButton, PauseButton } from '../Buttons/PlayButton';
import MoreButton from '../Buttons/MoreButton';

interface Data {
  main_image: string;
  title: string;
  sub_title: string;
  recommendation_id: number;
}

interface Props {
  data: Data;
  addMusic: any;
}

class MagazineContent2 extends Component<Props> {
  state = {
    isHovering: false,
    isPlay: false,
  };

  handleMouseHover = (): void => {
    this.setState({ isHovering: !this.state.isHovering });
  };

  togglePlay = (id: number): void => {
    this.setState({ isPlay: !this.state.isPlay }, () => {
      if (this.state.isPlay) {
        fetch(`http://10.58.2.227:8000/music/recommendation_music/${id}`)
          .then((res) => res.json())
          .then((res) => {
            this.props.addMusic(res.music_list);
          });
      }
    });
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
                backgroundImage: `url(${this.props.data.main_image})`,
              }}
              blur={this.state.isHovering}
            />
            {this.state.isPlay ? (
              <PauseButton
                onClick={() =>
                  this.togglePlay(this.props.data.recommendation_id)
                }
                style={{ opacity: this.state.isHovering ? 1 : 0 }}
              />
            ) : (
              <PlayButton
                onClick={() =>
                  this.togglePlay(this.props.data.recommendation_id)
                }
                style={{ opacity: this.state.isHovering ? 1 : 0 }}
              />
            )}
            <MoreButton
              id={this.props.data.recommendation_id}
              style={{ opacity: this.state.isHovering ? 1 : 0 }}
            />
          </div>
          <Title style={{ marginTop: 15 }}>{this.props.data.title}</Title>
          <SubText>{this.props.data.sub_title}</SubText>
        </div>
      </>
    );
  }
}

export default connect(null, { addMusic })(MagazineContent2);

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
  font-size: 13px;
  color: #808080;
`;
