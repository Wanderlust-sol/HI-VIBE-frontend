import React, { Component } from 'react';
import styled from 'styled-components';
import Icons from '../../Images/vibe.svg';

export default class Banner extends Component {
  state = {
    isClose: false,
  };

  handleClose = (): void => {
    this.setState({
      isClose: !this.state.isClose,
    });
  };

  render(): false | JSX.Element {
    return (
      !this.state.isClose && (
        <div style={{ position: 'relative' }}>
          <BannerLink>
            <BannerImage src="https://music-phinf.pstatic.net/20200311_279/15839116678811BzQ5_PNG/VIBE_pc_%B8%DE%C0%CE%C5%BE%B9%E8%B3%CA_1536x100_A.png" />
          </BannerLink>
          <CloseBtn onClick={this.handleClose}></CloseBtn>
        </div>
      )
    );
  }
}

const BannerLink = styled.a`
  background-color: rgb(108, 0, 254);
  height: 50px;
  display: block;
`;

const BannerImage = styled.img`
  margin: 0 auto;
  width: auto;
  max-width: 768px;
  height: 100%;
`;

const CloseBtn = styled.a`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 52px;
  text-align: center;

  ::before {
    background-image: url(${Icons});
    background-position: -690px -681px;
    width: 22px;
    height: 22px;
    margin-top: 14px;
    display: inline-block;
    vertical-align: top;
    content: '';
  }
`;
