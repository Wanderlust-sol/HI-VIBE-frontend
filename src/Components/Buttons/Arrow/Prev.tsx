import React, { Component } from 'react';
import styled from 'styled-components';
import Icons from '../../../Images/vibe.svg';

interface Prop {
  onClick?:
    | ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
    | undefined;
}

class ArrowPrev extends Component<Prop> {
  render(): JSX.Element {
    const { onClick } = this.props;
    return <Container onClick={onClick} />;
  }
}

const Container = styled.div`
  position: absolute;
  left: -15px;
  top: 44%;
  transform: translateY(-50%);
  z-index: 25;
  cursor: pointer;

  ::before {
    display: block;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
    content: '';
  }

  ::after {
    background-image: url(${Icons});
    background-position: -595px -803px;
    width: 10px;
    height: 14px;
    position: absolute;
    top: 50%;
    right: 15px;
    margin-top: -7px;
    content: '';
  }
`;

export default ArrowPrev;
