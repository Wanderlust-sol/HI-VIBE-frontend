import React, { Component } from 'react';
import styled from 'styled-components';
import Layout from 'Components/Layout/Layout';
import Headline from 'Components/TodayFolder/Headline';
import Banner from 'Components/TodayFolder/Banner';
import Banner2 from 'Components/TodayFolder/Banner2';
import Magazine from 'Components/TodayFolder/Magazine';
import Magazine2 from 'Components/TodayFolder/Magazine2';
import News from 'Components/TodayFolder/News';
import Download from 'Components/TodayFolder/Download';
import Intro from 'Components/TodayFolder/Intro';
import Footer from 'Components/Footer/Footer';

export default class Today extends Component {
  render(): JSX.Element {
    return (
      <Layout>
        <Container>
          <Banner />
          <div style={{ maxWidth: 1160, margin: '0 auto' }}>
            <Headline />
          </div>
          <Banner2 />
          <div style={{ maxWidth: 1160, margin: '0 auto' }}>
            <SectionWrapper>
              <Magazine />
              <News />
              <Magazine2 />
            </SectionWrapper>
            <Download />
          </div>
          <Intro />
        </Container>
        <Footer />
      </Layout>
    );
  }
}

const Container = styled.div`
  width: 100vw;
  /* width: auto; */
  overflow-x: hidden;
  background-color: #f2f2f2;
`;

const SectionWrapper = styled.div`
  margin: 0 30px;
`;
