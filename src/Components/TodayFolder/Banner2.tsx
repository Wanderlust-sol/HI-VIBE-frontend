import React, { Component } from 'react';
import styled from 'styled-components';
import Icons from '../../Images/vibe.svg';

export default class Banner2 extends Component {
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
            <BannerImage src="https://vibe.naver.com/img/bn_campaign.7c901a82.png" />
          </BannerLink>
          <CloseBtn onClick={this.handleClose}></CloseBtn>
        </div>
      )
    );
  }
}

const BannerLink = styled.a`
  background-color: rgb(255, 241, 219);
  height: 120px;
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
