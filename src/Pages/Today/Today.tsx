import React, { Component } from 'react';
import Layout from 'Components/Layout/Layout';
import Headline from 'Components/TodayFolder/Headline';
import Banner from 'Components/TodayFolder/Banner';
import Banner2 from 'Components/TodayFolder/Banner2';
import Magazine from 'Components/TodayFolder/Magazine';
import Magazine2 from 'Components/TodayFolder/Magazine2';
import News from 'Components/TodayFolder/News';
import Download from 'Components/TodayFolder/Download';
import Intro from 'Components/TodayFolder/Intro';
import styled from 'styled-components';

export default class Today extends Component {
  render(): JSX.Element {
    return (
      <Layout>
        <div style={{ overflowX: 'hidden' }}>
          <Banner />
          <Headline />
          <Banner2 />
          <Magazine />
          <News />
          <Magazine2 />
          <Download />
          <Intro />
        </div>
      </Layout>
    );
  }
}
