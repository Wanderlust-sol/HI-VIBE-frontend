import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMusic } from 'Redux_aeri/Actions';
import styled from 'styled-components';
import Icons from 'Images/vibe.svg';

interface Props {
  style: React.CSSProperties | undefined;
  ulStyle?: React.CSSProperties | undefined;
  initial?: React.ReactNode;
  id: number;
  addMusic: any;
}

class MoreButton extends Component<Props> {
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

  getMusic = (id: number) => {
    fetch(`http://10.58.2.227:8000/music/recommendation_music/${id}`)
      .then((res) => res.json())
      .then((res) => {
        this.props.addMusic(res.music_list);
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
              <List onClick={() => this.getMusic(this.props.id)}>
                내 플레이리스트 추가
              </List>
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

export default connect(null, { addMusic })(MoreButton);

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
