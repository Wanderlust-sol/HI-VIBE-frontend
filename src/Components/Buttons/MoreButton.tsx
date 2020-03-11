import Icons from '../../Images/vibe.svg';
import styled from 'styled-components';
import React, { Component } from 'react';

interface Props {
  style: React.CSSProperties | undefined;
  ulStyle?: React.CSSProperties | undefined;
  initial?: React.ReactNode;
}

export default class MoreButton extends Component<Props> {
  state = {
    open: false,
    selected: this.props.initial || -1,
    active: false,
  };

  toggleDropdown = (): void => {
    this.setState({
      active: !this.state.active,
    });
  };

  handleClick = (i: number): void => {
    this.setState({
      selected: i,
    });
  };

  render(): JSX.Element {
    return (
      <>
        <Button
          href="#/"
          onClick={this.toggleDropdown}
          style={this.props.style}
        >
          {this.state.active && (
            <Ul style={this.props.ulStyle}>
              <List>보관함에 추가</List>
              <List>내 플레이리스트 추가</List>
              <List>바로 다음에 추가</List>
              <List>맨 아래에 추가</List>
              <List>공유</List>
            </Ul>
          )}
        </Button>
      </>
    );
  }
}

const Button = styled.a`
  position: absolute;
  bottom: 0;
  right: 5px;
  left: auto;
  transition: opacity 0.3s ease-in;
  z-index: 25;

  :hover::after {
    transform: scale(1.05) translateY(-2px);
  }

  ::after {
    transition: transform 0.2s ease-in-out;
    background-image: url(${Icons});
    background-position: -387px -536px;
    width: 42px;
    height: 42px;
    display: block;
    content: '';
  }
`;

const Ul = styled.ul`
  border-radius: 4px;
  position: absolute;
  width: 180px;
  bottom: 30px;
  right: 0;
  left: auto;
  padding: 11px 0;
  background: #fff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
`;

const List = styled.li`
  :hover {
    background: #eee;
  }
  opacity: 1;
  /* width: 100%; */
  display: block;
  padding: 7px 25px;
  text-align: left;
  font-size: 14px;
  line-height: 18px;
  color: #232323;
`;
