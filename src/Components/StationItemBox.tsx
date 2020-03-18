import React, { Component } from 'react';
import styled from 'styled-components';
import { PlayButton, PauseButton } from 'Components/Buttons/PlayButton';

interface Props {
  imgUrl: string;
}

interface State {
  isHovering: boolean;
}

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
        <PlayButton style={{ opacity: this.state.isHovering ? 1 : 0 }} />
      </StationImg>
    );
  }
}

export default StationItemBox;
const StationImg = styled.li`
  position: relative;
  float: left;
  height: 180px;
  width: 180px;
  margin: 0 16px 16px 0;
  vertical-align: top;
`;
const ItemImg = styled.img``;
