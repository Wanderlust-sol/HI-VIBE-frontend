import React, { Component } from 'react';
import styled from 'styled-components';

interface IProps {
  imgUrl: string;
}

export class StationItemBox extends Component<IProps, {}> {
  constructor(props: any) {
    super(props);

    this.state = {
      theme_images: [],
    };
  }
  //   componentDidMount = () => {
  //     fetch(
  //       `10.58.2.227:8000/music/station theme_id==${this.props.match.params.themeId}`,
  //     )
  //       .then((res) => res.json())
  //       .then((res) => {
  //         this.setState({
  //           theme_images: res.theme_images,
  //         });
  //       });
  //   };
  render() {
    return (
      <StationImg>
        <ItemImg src={this.props.imgUrl} alt="" />
      </StationImg>
    );
  }
}

export default StationItemBox;
const StationImg = styled.li`
  float: left;
  height: 180px;
  width: 180px;
  padding: 0 16px 16px 0;
  vertical-align: top;
`;
const ItemImg = styled.img``;
