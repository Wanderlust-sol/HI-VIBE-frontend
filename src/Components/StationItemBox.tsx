import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addMusic } from 'Redux_aeri/Actions';
import { PlayButton, PauseButton } from 'Components/Buttons/PlayButton';
import { ip } from 'config';

interface Props {
  imgUrl: string;
  key: number;
  addMusic: any;
  id: number;
}

interface State {
  isHovering: boolean;
}

// 이것의 위치는 어디인가

export class StationItemBox extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isHovering: false,
    };
  }

  handleMouseHover = () => {
    this.setState({
      isHovering: !this.state.isHovering,
    });
  };

  getMusic = (id: number) => {
    fetch(`${ip}music/station_music/${id}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.music_list);
        this.props.addMusic(res.music_list);
      });
  };

  render() {
    return (
      <StationImg
        onMouseEnter={() => {
          this.setState({ isHovering: true });
        }}
        onMouseLeave={() => {
          this.setState({ isHovering: false });
        }}
      >
        <ItemImg src={this.props.imgUrl} alt="" />
        <PlayButton
          style={{ opacity: this.state.isHovering ? 1 : 0 }}
          // onClick={() => this.props.addMusic(this.state.songBox)}
          onClick={() => this.getMusic(this.props.id)}
        />
      </StationImg>
    );
  }
}

export default connect(null, { addMusic })(StationItemBox);

const StationImg = styled.li`
  position: relative;
  float: left;
  height: 180px;
  width: 180px;
  margin: 0 16px 16px 0;
  vertical-align: top;
`;
const ItemImg = styled.img``;
