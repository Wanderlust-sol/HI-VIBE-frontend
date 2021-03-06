import React, { Component, ReactNode } from 'react';
import Layout from 'Components/Layout/Layout';
import ThemeIcon from 'Images/themeIcon.png';
import Footer from 'Components/Footer/Footer';
// import StationComponent from 'Components/StationComponent';
import StationItemBox from 'Components/StationItemBox';
import ThemeListComponent from 'Components/ThemeListComponent';
import { ip } from 'config';
import styled from 'styled-components';

interface Props {
  location: any;
  children: React.ReactNode;
  num: number;
  history: any;
  id: number;
}
interface StationInfo {
  station_id: number;
  image: string;
}
interface ThemeList {
  id: number;
  name: string;
  main_image: string;
  creator: string;
  changeThemeId: (id: number) => void;
}

interface MusicList {
  music_id: number;
  music_name: string;
  track_number: number;
  album_image: string;
  album_name: string;
  album_id: number;
  lyrics: string;
  stream_url: string;
  artist_name: Array<string>;
  artist_id: Array<number>;
}

interface IState {
  data: Array<StationInfo>;
  genre: Array<StationInfo>;
  data2: Array<StationInfo>;
  isModal: boolean;
  setModal: boolean;
  theme_list: Array<ThemeList>;
  theme_id: number;
  songBox: Array<MusicList>;
}

class DjStation extends Component<Props, IState> {
  constructor(props: Props) {
    super(props);

    this.state = {
      data: [],
      genre: [],
      data2: [],
      isModal: false,
      setModal: false,
      theme_list: [],
      theme_id: 1,
      songBox: [],
    };
  }
  componentDidMount() {
    this.getFirstPage();
    this.genreStationFetch();
    this.getModalFetch();
    this.stationMusicFetch();
  }
  // 첫 번째 fetch
  getFirstPage = () => {
    fetch(`${ip}music/station/theme/${this.state.theme_id}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState(
          {
            data: res.theme_images,
          },
          () => {
            console.log(this.state.data);
          },
        );
      });
  };

  getModalFetch = () => {
    fetch(`${ip}music/station/theme`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          theme_list: res.theme_list,
        });
      });
  };
  genreStationFetch = () => {
    fetch(`${ip}music/station/theme/30`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          data2: res.theme_images,
        });
      });
  };
  stationMusicFetch = () => {
    fetch(`${ip}music/station_music/2`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          songBox: res.music_list,
        });
      });
  };

  setModal = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    this.setState({
      setModal: true,
    });
  };
  onClose = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    this.setState({
      setModal: false,
    });
  };
  changeThemeId = (id: number) => {
    this.setState(
      {
        theme_id: id,
      },
      () => {
        this.getFirstPage();
      },
    );
  };
  render() {
    return (
      <Layout>
        <MainContent>
          {/* 메인 글씨 랑 테마 버튼 시작************** */}
          <MainText>
            DJ 스테이션{' '}
            <ThemeBox onClick={this.setModal}>
              <ThemeIconBox src={ThemeIcon}></ThemeIconBox>테마
            </ThemeBox>
          </MainText>
          {/* 메인 글씨랑 테마 버튼 끝 ******************* */}
          {!this.state.setModal ? null : (
            <ModalDiv onClick={this.onClose}>
              <ModalDialogDiv>
                <ModalHeaderDiv>
                  <ModalTitle>스테이션 테마</ModalTitle>
                  <ModalClose onClick={this.onClose}>
                    <CloseImg src="https://image.flaticon.com/icons/svg/1828/1828528.svg" />
                  </ModalClose>
                </ModalHeaderDiv>
                <ModalBody>
                  <ModalContent>
                    {this.state.theme_list[0] &&
                      this.state.theme_list.map((list: ThemeList, index) => (
                        <ThemeListComponent
                          id={list.id}
                          name={list.name}
                          main_image={list.main_image}
                          creator={list.creator}
                          changeThemeId={this.changeThemeId}
                          key={index}
                        />
                      ))}
                  </ModalContent>
                </ModalBody>
              </ModalDialogDiv>
            </ModalDiv>
          )}
          {/* **************** 테마 선택 모달 끝********************** */}

          {/* 느낌 별 스테이션 시작 *******************8 */}
          <StationComponentContainer>
            <StationUlParent>
              <StationComponentContainerText>
                느낌별 스테이션
              </StationComponentContainerText>
              <DivForUl>
                <StaionWrapUl>
                  {this.state.data[0] &&
                    this.state.data.map((station: StationInfo, index) => (
                      <StationItemBox
                        {...this.props}
                        imgUrl={station.image}
                        key={index}
                        id={station.station_id}
                        // onClick={this.getMusic}
                        // songBox={this.state.songBox}
                      />
                    ))}
                </StaionWrapUl>
              </DivForUl>
            </StationUlParent>
            <GenreUlParent>
              <GenreWrapUl></GenreWrapUl>
            </GenreUlParent>
          </StationComponentContainer>
          {/* ************장르 스테이션 시작************************* */}
          <StationComponentContainer>
            <StationUlParent2>
              <StationComponentContainerText>
                장르 스테이션
              </StationComponentContainerText>
              <DivForUl>
                <StaionWrapUl>
                  {this.state.data2[0] &&
                    this.state.data2.map((station: StationInfo, index) => (
                      <StationItemBox
                        imgUrl={station.image}
                        key={index}
                        id={station.station_id}
                        // onClick={this.state.songBox}
                      />
                    ))}
                </StaionWrapUl>
              </DivForUl>
            </StationUlParent2>
          </StationComponentContainer>
        </MainContent>
        <Footer />
      </Layout>
    );
  }
}
export default DjStation;

const MainContent = styled.div`
  margin: 0 auto;
  ${({ theme }) => theme.media.desktop`
  position: relative;
    max-width: 1020px;
    margin: 0 auto;

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
  cursor: pointer;
`;

const MainText = styled.div`
  position: relative;
  margin: 61px 0 25px 36px;
  max-width: 1020px;
  font-size: 30px;
  line-height: 36px;
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
  position: relative;
  padding: 18px 0 50px;
`;
const StationComponentContainerText = styled.div`
  display: block;
  font-size: 1.17em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  padding-left: 36px;
`;

const StationUlParent = styled.div`
  position: relative;
  display: inline-block;
  padding: 18px 0 36px;
  border-bottom: 1px solid lightgray;
`;
const StationUlParent2 = styled.div`
  position: relative;
  display: inline-block;
  padding: 18px 0 300px;
`;
const DivForUl = styled.div`
  padding: 0;
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  margin-right: -16px;
`;
const StaionWrapUl = styled.ul``;

const GenreUlParent = styled.div``;

const GenreWrapUl = styled.ul``;
const ModalDiv = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  animation-name: appear;
  animation-duration: 300ms;
`;
const ModalDialogDiv = styled.div`
  width: 100%;
  max-width: 550px;
  background: white;
  position: relative;
  margin: 0 20px;
  max-height: calc(100vh - 40px);
  text-align: left;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  animation-name: animatetop;
  animation-duration: 0.5s;
  animation-name: slide-in;
  border-radius: 4px;
  display: flex;
  align-items: center;
  max-height: 550px;

  position: relative;
  margin: 50px 0;
  vertical-align: middle;
  border-radius: 4px;
  background-color: #fff;
`;
const ModalHeaderDiv = styled.div`
  /* position: relative; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  /* border-bottom: 1px solid #dbdbdb; */
  /* justify-content: space-between; */
`;

const ModalClose = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  padding: 1rem;
  /* margin: -1rem -1rem -1rem auto; */
`;
const CloseImg = styled.img`
  width: 15px;
  height: 15px;
`;
const ModalBody = styled.div`
  overflow: auto;
  padding: 0 50 px 0 50px;
`;
const ModalContent = styled.ul`
  margin-left: 40px;
`;
const ModalTitle = styled.div`
  display: block;
  font-size: 17px;
  line-height: 21px;
  font-weight: 500;
  color: #232323;
  margin-top: 14px;
`;
