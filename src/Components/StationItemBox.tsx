import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addMusic } from 'Redux_aeri/Actions';
import { PlayButton, PauseButton } from 'Components/Buttons/PlayButton';

interface Props {
  imgUrl: string;
  key: number;
  addMusic: any;
}

interface MusicList {
  music_id: number;
  music_name: string;
  track_number: number;
  album_image: string;
  album_name: string;
  album_id: number;
  lyrics: any;
  stream_url: any;
  artist_name: Array<any>;
  artist_id: Array<number>;
}

interface State {
  isHovering: boolean;
  songBox: Array<MusicList>;
}

// 이것의 위치는 어디인가

export class StationItemBox extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isHovering: false,
      songBox: [],
    };
  }
  // componentDidMount() {
  //   fetch('http://10.58.2.227:8000/music/station_music/2', {
  //     method: 'GET',
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       this.setState({
  //         songBox: res.music_list,
  //       });
  //     });
  // }

  handleMouseHover = () => {
    this.setState({
      isHovering: !this.state.isHovering,
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
          onClick={() =>
            this.props.addMusic({
              id: 6,
              name: 'WANT IT?',
              artist_name: 'ITZY(있지)',
              album_image:
                'https://musicmeta-phinf.pstatic.net/album/002/841/2841538.jpg?type=r100Fll&v=20200218132210',
              src: 'Audio/ES_Insane - Loving Caliber.mp3',
            })
          }
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
