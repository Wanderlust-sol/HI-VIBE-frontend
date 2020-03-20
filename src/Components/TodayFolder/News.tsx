import React, { Component } from 'react';
import { ip } from 'config';
import styled from 'styled-components';
import Slider from 'react-slick';
import NewsContent from '../Slider/NewsContent';
import ArrowNext from '../Buttons/Arrow/Next';
import ArrowPrev from '../Buttons/Arrow/Prev';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class News extends Component {
  state = {
    sliderContent: [],
  };

  componentDidMount = (): void => {
    fetch(`${ip}music/news`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          sliderContent: res.news_list,
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
        return <NewsContent data={obj} key={i} />;
      });

    return (
      <Container>
        <BorderTop />
        <NewsTitle>News</NewsTitle>
        <Slider {...settings}>{content}</Slider>
      </Container>
    );
  }
}

const Container = styled.div`
  padding: 35px 10px 45px;
  margin: 0 auto;
`;

const BorderTop = styled.div`
  padding-top: 18px;
  border-top: 1px solid #e4e4e4;
  margin: 0 auto;
  width: 98.3%;
`;

const NewsTitle = styled.a`
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
