import React, { Component } from 'react';
import { ip } from 'config';
import styled from 'styled-components';
import Slider from 'react-slick';
import MagazineContent from '../Slider/MagazineContent2';
import ArrowNext from '../Buttons/Arrow/Next';
import ArrowPrev from '../Buttons/Arrow/Prev';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class Magazine2 extends Component {
  state = {
    sliderContent: [],
  };

  componentDidMount = (): void => {
    fetch(`${ip}music/recommendation`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          sliderContent: res.recommendation_list,
        });
      });
  };

  render(): JSX.Element {
    const settings = {
      dots: false,
      infinite: true,
      speed: 600,
      slidesToShow: 3,
      slidesToScroll: 2,
      nextArrow: <ArrowNext />,
      prevArrow: <ArrowPrev />,
    };

    const content =
      this.state.sliderContent !== undefined &&
      this.state.sliderContent.map((obj, i) => {
        return <MagazineContent data={obj} key={i} />;
      });

    return (
      <Container>
        <BorderTop />
        <MagazineTitle>들려주고 싶어서 &gt;</MagazineTitle>
        <Slider {...settings}>{content}</Slider>
      </Container>
    );
  }
}

const Container = styled.div`
  padding: 0 10px 45px;
`;

const BorderTop = styled.div`
  padding-top: 18px;
  border-top: 1px solid #e4e4e4;
  margin: 0 auto;
  width: 98.3%;
`;

const MagazineTitle = styled.a`
  text-transform: uppercase;
  padding-bottom: 2px;
  font-size: 17px;
  line-height: 38px;
  font-weight: 700;
  color: #232323;
  vertical-align: top;
  margin: 10px;

  :hover {
    text-decoration: underline;
  }
`;
