import React, { Component } from 'react';
import ThemeIcon from 'Img/themeIcon.png';
// import StationComponent from 'Components/StationComponent';
import styled from 'styled-components';

interface IProps {
  props: any;
  text: string;
}

export default class DjStation extends Component {
  //  constructor(props) {
  //    super(props);

  //    this.state = {
  //      imgArray: [],
  //    };
  //  }
  //  componentDidMount() {
  //    fetch("")
  //    .then(res=> res.json();)
  //    .then(res=>{
  //        this.setState({
  //            imgArray:res.imgArray
  //        })
  //    })
  //  }

  render() {
    return (
      <TotalBackground>
        {/* ************nav************* */}
        <Nav></Nav>
        {/* ********nav 끝******** */}
        <MainContainer>
          <MainContent>
            {/* 메인 글씨 랑 테마 버튼 시작************** */}
            <MainText>
              DJ 스테이션{' '}
              <ThemeBox>
                <ThemeIconBox src={ThemeIcon}></ThemeIconBox>테마
              </ThemeBox>
            </MainText>
            {/* 메인 글씨랑 테마 버튼 끝 ******************* */}
            {/* 느낌 별 스테이션 시작 *******************8 */}
            <StationComponentContainer>
              <StationComponentContainerText>
                느낌별 스테이션
              </StationComponentContainerText>
              <StationWrap>
                <StaionWrapUl></StaionWrapUl>
              </StationWrap>
            </StationComponentContainer>
          </MainContent>
        </MainContainer>
      </TotalBackground>
    );
  }
}
const TotalBackground = styled.div`
  display: flex;
  overflow-x: hidden;
  ${({ theme }) => theme.media.desktop`
 display: flex;
  overflow-x: hidden;
  `}
  ${({ theme }) => theme.media.tablet`
  display: flex;
  overflow-x: hidden;
  `}
`;
const Nav = styled.div`
/* 제일 작을 때, 768px 이하**************** */
  width: 100%;
  height: 67px;
  background-color: black;
  position: fixed;
  top: 0;
  z-index: 10;
  /* 1100정도 이상********************* */
  ${({ theme }) => theme.media.desktop`
background-color: black;
 width: 225px;
  height: 100vh;
  position: fixed;
  top: 0;
  ${(props: IProps) => `$::before{content:"데스크톱 ${props.text}"}`};
  `}
  /* 이거 밑에 768~1100정도까지********************************8 */
  ${({ theme }) => theme.media.tablet`
  background-color:gray;
   width: 225px;
  height: 100vh;
  position: fixed;
  top: 0;
  ${(props: IProps) => `&::before{content:"태블릿${props.text}"}`};
  `}
`;
const MainContainer = styled.div`
  color: black;
  margin-top: 67px;
  min-height: 600px;
  background-color: #fbfbfb;
  width: 100%;

  ${({ theme }) => theme.media.desktop`
 margin-top:0;
 height: 100vh;
  color: black;
  padding-bottom: 245px;
  min-height: 600px;
  padding-left: 225px;
  background-color: #fbfbfb;
  width: 100%;
    display: flex;
  justify-content: center;
  ${(props: IProps) => `$::before{content:"데스크톱 ${props.text}"}`};
  `}
  ${({ theme }) => theme.media.tablet`
  margin-top:0;
 height: 100vh;
  color: black;
  padding-bottom: 245px;
  min-height: 600px;
  padding-left: 225px;
  background-color: #fbfbfb;
  width: 100%;
 
  ${(props: IProps) => `&::before{content:"태블릿${props.text}"}`};
  `}
`;

const MainContent = styled.div`
  margin: 0 43px;
  ${({ theme }) => theme.media.desktop`
  padding-top : 20px;
  margin : 0 43px;
  width : 964px;
  ${(props: IProps) => `$::before{content:"데스크톱 ${props.text}"}`};
  `}
  ${({ theme }) => theme.media.tablet`
  padding-top: 61px;
  margin: 0 43px;
  width: auto;
  ${(props: IProps) => `&::before{content:"태블릿${props.text}"}`};
  `}
`;
const ThemeBox = styled.button`
  position: absolute;
  top: -1px;
  right: 0;
  padding: 9px 15px 10px 13px;
  font-size: 15px;
  line-height: 19px;
  color: #232323;
  border: 1px solid #d7d7d7;
  border-radius: 4px;
`;

const MainText = styled.div`
  position: relative;
  margin: 61px 0 25px;
  font-size: 30px;
  line-height: 36px;
  /* color: #232323;
  width: 80%; */
  /* font-size: 0.67em; */
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;
const ThemeIconBox = styled.img`
  width: 16px;
  height: 16px;
  display: inline-block;
  margin: -2px 4px 0 0;
  vertical-align: middle;
`;
const StationComponentContainer = styled.div`
  padding: 18px 0 39px;
`;
const StationComponentContainerText = styled.div`
  display: block;
  font-size: 1.17em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;
const StationWrap = styled.div`
  margin-right: -16px;
`;
const StaionWrapUl = styled.ul`
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
`;
