import React, { useState, useRef, useEffect } from 'react';
import { ip } from 'config';
import styled, { css } from 'styled-components';
import { ReactSortable } from 'react-sortablejs';
import MusicItems from 'Components/MusicItems/MusicItems';
import { connect } from 'react-redux';
import { setNewList } from 'Redux_aeri/Actions';
import Lyrics from 'Components/Lyrics/Lyrics';
import Icons from 'Images/vibe.svg';

interface Toggle {
  toggle: boolean;
}

interface Like {
  like: boolean;
}

interface Playing {
  isplaying: boolean;
}

interface Shuffle {
  shuffle: boolean;
}

interface Loop {
  loop: boolean;
}

interface Progress {
  progress?: any;
  mouseprogress?: boolean;
}

interface Volume {
  volume: number;
}
interface MusicList {
  id: number;
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
interface Props {
  children?: React.ReactNode;
  songList: Array<MusicList>;
  setNewList: any;
}

const Player: React.FC<Props> = (props) => {
  const { songList, setNewList } = props;
  const [toggle, setToggle] = useState<boolean>(false);
  const [like, setLike] = useState<boolean>(false);
  const [lyricsModal, setLyricsModal] = useState<boolean>(false);
  const [lyrics, setLyrics] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentTitle, setCurrentTitle] = useState<string>('');
  const [currentArtist, setCurrentArtist] = useState<string[]>([]);
  const [currentImage, setCurrentImage] = useState<string>('');
  const [isplaying, setIsplaying] = useState<boolean>(false);
  const [progressbar, setProgressbar] = useState<number>(0);
  const [progress, setProgress] = useState<boolean>(false);
  const [volumebar, setVolumebar] = useState<number>(100);
  const [volumeup, setVolumeup] = useState<boolean>(true);
  const [currenttime, setCurrentTime] = useState<string>('00:00');
  const [totalTime, setTotaltime] = useState<string>('00:00');
  const [loop, setLoop] = useState<boolean>(false);
  const [shuffle, setShuffle] = useState<boolean>(false);
  const volumeRef = useRef<any>(null);
  const progressbarRef = useRef<any>(null);
  const [history, setHistory] = useState<any>([]);
  const player = new Audio();
  const playerRef = useRef<any>(null);
  const prevPlayer = playerRef.current;
  let newArr = [...history, currentIndex];

  const startPlayer = () => {
    const currentSong = songList[currentIndex];
    if (currentSong !== undefined) {
      player.src = `${ip}music${currentSong.stream_url}`;
      setCurrentTitle(currentSong.music_name);
      setCurrentArtist(currentSong.artist_name);
      setCurrentImage(currentSong.album_image);
      setLyrics(currentSong.lyrics);
    }
  };

  const PlayOrPause = () => {
    if (prevPlayer.paused) {
      prevPlayer.play();
      setIsplaying(!isplaying);
      musicPlayer();
    } else {
      prevPlayer.pause();
      setIsplaying(!isplaying);
    }
  };

  const playNext = () => {
    if (shuffle) {
      setHistory(newArr);
      setCurrentIndex(Math.floor(Math.random() * songList.length));
      startPlayer();
    } else {
      if (currentIndex === songList.length - 1) {
        prevPlayer.pause();
        setIsplaying(false);
      } else {
        prevPlayer.pause();
        setIsplaying(false);
        setHistory(newArr);
        setCurrentIndex(currentIndex + 1);
        startPlayer();
      }
    }
  };

  const playPrev = () => {
    if (history[history.length - 1] >= 0) {
      setCurrentIndex(history.pop());
      prevPlayer.pause();
      setIsplaying(false);
      // startPlayer();
      musicPlayer();
    } else {
      prevPlayer.pause();
      setIsplaying(false);
    }
  };

  const toggleLoop = () => {
    setLoop(!loop);
    prevPlayer.loop = loop;
  };

  const toggleShuffle = () => {
    setShuffle(!shuffle);
  };

  const convertTime = (seconds: number) => {
    let min: number | string = Math.floor(seconds / 60);
    let sec: number | string = seconds % 60;
    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;
    setCurrentTime(min + ':' + sec);
  };

  const TotalTime = (seconds: number) => {
    let min: number | string = Math.floor(seconds / 60);
    let sec: number | string = seconds % 60;
    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;
    setTotaltime(min + ':' + sec);
  };

  const ProgressOver = () => {
    setProgress(true);
  };

  const ProgressLeave = () => {
    setProgress(false);
  };

  const onBarClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const offsetX = e.nativeEvent.offsetX;
    const offsetWidth = progressbarRef.current.offsetWidth;
    const percent = offsetX / offsetWidth;
    prevPlayer.currentTime = percent * prevPlayer.duration;
    setProgressbar((prevPlayer.currentTime / prevPlayer.duration) * 100);
  };

  const onVolumeClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const offsetX = e.nativeEvent.offsetX;
    const offsetWidth = volumeRef.current.offsetWidth;
    prevPlayer.volume = offsetX / offsetWidth;
    setVolumebar(prevPlayer.volume * 100);
  };

  const toggleVolume = () => {
    setVolumeup(!volumeup);
    !volumeup ? (prevPlayer.volume = 0) : (prevPlayer.volume = 1);
    setVolumebar(prevPlayer.volume * 100);
  };

  const musicPlayer = () => {
    startPlayer();
    prevPlayer !== null &&
      prevPlayer.addEventListener('timeupdate', () => {
        let position = prevPlayer.currentTime / prevPlayer.duration;
        setProgressbar(position * 100);
        convertTime(Math.round(prevPlayer.currentTime));
        TotalTime(Math.round(prevPlayer.duration));
        prevPlayer.ended && playNext();
      });
  };

  //플레이 리스트 모달창
  const handleLike = () => {
    setLike(!like);
  };

  const handlePlaylist = () => {
    setToggle(!toggle);
  };

  const handlePlay = (props: any) => {
    const idx = songList.findIndex((item, idx) => item.music_id === props.id);
    if (player.paused) {
      setCurrentIndex(idx);
    } else {
      player.pause();
      setIsplaying(false);
      setCurrentIndex(idx);
    }
  };

  const handleLyrics = () => {
    setLyricsModal(true);
  };

  const LyricsClose = () => {
    setLyricsModal(false);
  };

  useEffect(() => {
    // getSongs();
    musicPlayer();
    setProgressbar(0);
    setCurrentTime('00:00');
    setTotaltime('00:00');

    playerRef.current = player;
  }, [songList, currentIndex]);

  return (
    <>
      <PlayerContainer>
        <SongInfo>
          <Thumb src={currentImage}></Thumb>
          <InfoArea>
            <Title>{currentTitle}</Title>
            <Artist>{currentArtist}</Artist>
          </InfoArea>
          <OptionArea>
            <LikeBtn like={like} onClick={handleLike} />
            <LyricsBtn onClick={handleLyrics} />
            <MoreBtn />
          </OptionArea>
        </SongInfo>
        <ControlSection>
          <ControlArea>
            <BtnNow isplaying={isplaying} onClick={PlayOrPause} />
            <BtnPrev onClick={playPrev} />
            <BtnNext onClick={playNext} />
            <BtnShuffle shuffle={shuffle} onClick={toggleShuffle} />
            <BtnRepeat loop={loop} onClick={toggleLoop} />
          </ControlArea>
        </ControlSection>
        <PlayingProgress
          onMouseOver={ProgressOver}
          onMouseLeave={ProgressLeave}
          ref={progressbarRef}
          onClick={onBarClick}
        >
          <BarProgress>
            <BarLoad mouseprogress={progress} />
            <ProgressBar progress={progressbar} mouseprogress={progress} />
          </BarProgress>
        </PlayingProgress>
        <PlayerCover mouseprogress={progress} />
        <Playtime>
          <Now>{currenttime}</Now>
          <Remain>{totalTime}</Remain>
        </Playtime>
        <Volume>
          <BtnVolume onClick={toggleVolume} />
          <BarVolume ref={volumeRef} onClick={onVolumeClick}>
            <BarStatus>
              <BarNow volume={volumebar} />
            </BarStatus>
          </BarVolume>
        </Volume>
        <PlaylistBtnArea onClick={handlePlaylist}>
          <BtnPlaylist />
        </PlaylistBtnArea>
      </PlayerContainer>
      <Playlist toggle={toggle}>
        <Modal />
        <CoverSection>
          <ThumbCover>
            <CoverImage src={currentImage} />
          </ThumbCover>
        </CoverSection>
        <ListSection>
          <TitleArea>
            <ListTitle>이어지는 노래</ListTitle>
            <Control>
              <Shuffle shuffle={shuffle} onClick={toggleShuffle} />
              <Repeat loop={loop} onClick={toggleLoop} />
            </Control>
          </TitleArea>
          <ListWrap>
            <Ul>
              <ReactSortable
                ghostClass={'ghost-class'}
                animation={200}
                list={songList}
                setList={(newList: object[]) => setNewList(newList)}
              >
                {songList.map((item: MusicList) => (
                  <MusicItems
                    key={item.music_id}
                    id={item.music_id}
                    music_name={item.music_name}
                    album_image={item.album_image}
                    artist_name={item.artist_name}
                    handlePlay={(props: any) => handlePlay(props)}
                    isplaying={isplaying}
                  />
                ))}
              </ReactSortable>
            </Ul>
          </ListWrap>
        </ListSection>
      </Playlist>
      {lyricsModal && (
        <Lyrics
          onClick={LyricsClose}
          lyrics={lyrics}
          music_name={currentTitle}
          album_image={currentImage}
          artist_name={currentArtist}
        />
      )}
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    songList: state.songList,
  };
};

export default connect(mapStateToProps, { setNewList })(Player);

const pseudoAfter = css`
  content: '';
  display: inline-block;
  background-image: url(${Icons});
`;

const PlayerContainer = styled.div`
  width: 100%;
  height: 81px;
  position: fixed;
  right: 0;
  bottom: 0;
  background-color: rgba(25, 25, 25, 0.97);
  z-index: 10500;
`;

const SongInfo = styled.div`
  margin: 18px 0 0 18px;
`;

const Thumb = styled.img`
  display: none;

  ${({ theme }) => theme.media.desktop`
  display: block;
  width: 45px;
  height: 45px;
  margin-right: 12px;
  float: left;
  `}
`;

const InfoArea = styled.div`
  max-width: 123px;
  padding-right: 8px;
  line-height: 1.25em;
  margin-top: 4px;
  float: left;
`;

const Title = styled.div`
  color: #fff;
  font-size: 14px;
  font-weight: 700;
`;
const Artist = styled.span`
  color: #747474;
  font-size: 12px;
`;

const OptionArea = styled.div`
  position: relative;
  float: left;
`;

const LikeBtn = styled.a`
  width: 38px;
  height: 46px;
  text-align: center;

  ::after {
    background-position: ${(props: Like) =>
      props.like ? '-511px -591px' : '-34px -747px'};
    width: 22px;
    height: 22px;
    margin: 12px 16px 0px 8px;
    vertical-align: top;
    ${pseudoAfter}
  }
`;

const LyricsBtn = styled.a`
  width: 38px;
  height: 46px;
  text-align: center;

  ::after {
    background-position: -361px -591px;
    width: 22px;
    height: 22px;
    margin-top: 12px;
    margin-right: 16px;
    vertical-align: top;
    ${pseudoAfter}
  }
`;
const MoreBtn = styled.a`
  width: 38px;
  height: 46px;
  text-align: center;

  ::after {
    background-position: -421px -591px;
    width: 22px;
    height: 22px;
    margin-top: 12px;
    vertical-align: top;
    ${pseudoAfter}
  }
`;

const ControlSection = styled.div`
  position: absolute;
  top: 13px;
  right: 345px;
  left: 345px;
`;

const ControlArea = styled.div`
  position: relative;
  width: 165px;
  margin: 0 auto;

  ${({ theme }) => theme.media.desktop`
   position: relative;
  width: 156px;
  margin: 0 auto;
  `}
`;

const BtnNow = styled.a`
  display: inline-block;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  vertical-align: top;
  text-align: center;

  ::after {
    ${(props: Playing) =>
      props.isplaying
        ? { backgroundPosition: '-743px -244px' }
        : { backgroundPosition: '-258px -681px' }}
    width: 22px;
    height: 26px;
    margin: 15px 0 0 4px;
    ${pseudoAfter}
  }

  &:hover {
    background-color: #2a2a2a;
  }
`;

const BtnPrev = styled.a`
  float: left;
  width: 50px;
  height: 56px;
  text-align: center;
  border-radius: 50%;

  ::after {
    background-position: -274px -747px;
    width: 22px;
    height: 22px;
    margin-top: 17px;
    ${pseudoAfter}
  }

  &:hover::after {
    transform: scale(1.1);
  }
`;

const BtnNext = styled.a`
  float: right;
  width: 50px;
  height: 56px;
  text-align: center;
  border-radius: 50%;

  ::after {
    background-position: -571px -591px;
    width: 22px;
    height: 22px;
    margin-top: 17px;
    ${pseudoAfter}
  }

  &:hover::after {
    transform: scale(1.1);
  }
`;

const BtnShuffle = styled.a`
  display: none;

  ${({ theme }) => theme.media.desktop`
  display: block;
  position: absolute;
  top: 0;
  left: -56px;
  width: 50px;
  height: 56px;
  text-align: center;
  border-radius: 50%;
  `}
    ::after {
    background-position: ${(props: Shuffle) =>
      props.shuffle ? '-721px -591px' : '-450px -681px'};
    width: 22px;
    height: 22px;
    margin-top: 17px;
    ${pseudoAfter}
  }

  &:hover::after {
    transform: scale(1.1);
  }
`;

const BtnRepeat = styled.a`
  display: none;

  ${({ theme }) => theme.media.desktop`
  display: block;
  position: absolute;
  top: 0;
  right: -56px;
  width: 50px;
  height: 56px;
  text-align: center;
  border-radius: 50%;
  color: ${(props: Loop) => props.loop && 'white'};
  `}
    ::after {
    background-position: ${(props: Loop) =>
      props.loop ? '-570px -681px' : '-600px -681px'};
    width: 22px;
    height: 22px;
    margin-top: 17px;
    ${pseudoAfter}
  }

  &:hover::after {
    transform: scale(1.1);
  }
`;

const PlayingProgress = styled.div`
  position: absolute;
  top: -8px;
  right: 0;
  left: 0;
  z-index: 20;
  height: 26px;
  cursor: pointer;
`;

const PlayerCover = styled.div`
  display: ${(props: Progress) => (props.mouseprogress ? '' : 'none')};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(25, 25, 25, 0.87);
`;

const BarProgress = styled.div`
  position: relative;
  height: 18px;
  transform: translateY(8px);
`;

const BarLoad = styled.div`
  width: 100%; // 회색 재생바
  position: absolute;
  top: 0;
  left: 0;
  height: ${(props: Progress) => (props.mouseprogress ? '18px' : '3px')};
  background-color: #4b4b4b;
  transition: height 0.1s ease-in-out;
`;

const ProgressBar = styled.div`
  width: ${(props: Progress) => props.progress}%;
  position: relative;
  height: 3px;
  height: ${(props: Progress) => (props.mouseprogress ? '18px' : '3px')};
  background-color: #ff1150;
  transition: height 0.1s ease-in-out;
`;

const Playtime = styled.div`
  display: none;

  ${({ theme }) => theme.media.desktop`
  display: block;
  position: absolute;
  right: 258px;
  top: 34px;
  font-size: 12px;
  line-height: 14px;
  text-align: right;
  `}
`;

const Now = styled.span`
  color: #747474;

  ::after {
    display: inline-block;
    margin-left: 8px;
    margin-right: 4px;
    font-weight: 700;
    color: #747474;
    content: '/';
  }
`;

const Remain = styled.span`
  color: #bcbcbc;
`;

const Volume = styled.div`
  display: none;

  ${({ theme }) => theme.media.desktop`
  display: block;
  position: absolute;
  top: 24px;
  right: 110px;
  `}
`;

const BtnVolume = styled.a`
  float: left;
  padding: 10px 2px 10px 14px;
  margin-right: 2px;

  ::after {
    background-position: -287px -777px;
    width: 17px;
    height: 13px;
    ${pseudoAfter}
  }
`;

const BarVolume = styled.div`
  float: left;
  width: 100px;
  height: 37px;
  cursor: pointer;
`;

const BarStatus = styled.div`
  position: relative;
  height: 3px;
  margin-top: 15px;
  border-radius: 1.5px;
  background-color: #4b4b4b;
`;

const BarNow = styled.div`
  width: ${(props: Volume) => props.volume}%;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  border-radius: 1.5px;
  background-color: #787878;
`;

const PlaylistBtnArea = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 81px;
  text-align: center;
  border-left: 1px solid hsla(0, 0%, 84.7%, 0.15);
`;

const BtnPlaylist = styled.a`
  display: inline-block;
  width: 100%;
  height: 63px;
  margin-top: 18px;
  vertical-align: middle;

  ::after {
    background-position: -352px -681px;
    width: 26px;
    height: 26px;
    margin-top: 9px;
    ${pseudoAfter}
  }
`;

const Playlist = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 81px;
  left: 0;
  z-index: 10200;

  ${(props: Toggle) =>
    props.toggle ? { display: 'block' } : { display: 'none' }}
`;

const Modal = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(20, 20, 20, 0.97);
`;

const CoverSection = styled.div`
  display: none;

  ${({ theme }) => theme.media.desktop`
  display: block;
  position: absolute;
  top: 0;
  right: 350px;
  bottom: 0;
  left: 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  `}
`;

const ThumbCover = styled.span`
  width: 514px;
  height: 514px;
`;

const CoverImage = styled.img`
  width: 100%;
`;

const ListSection = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #141414;

  ${({ theme }) => theme.media.desktop`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 350px;
  background-color: #141414;
  `}
`;

const TitleArea = styled.div`
  margin: 27px 0 0 20px;
  position: relative;

  ${({ theme }) => theme.media.desktop`
  position: relative;
  margin: 26px 0 0 20px;
  `}
`;

const ListTitle = styled.span`
  font-size: 15px;
  line-height: 19px;
  font-weight: 700;
  color: #fff;
`;

const Control = styled.div`
  position: absolute;
  top: -7px;
  right: 13px;
`;

const Shuffle = styled.a`
  display: inline-block;
  padding: 7px;
  vertical-align: top;
  text-align: center;

  ::after {
    background-position: ${(props: Shuffle) =>
      props.shuffle ? '-721px -591px' : '-450px -681px'};
    width: 22px;
    height: 22px;
    ${pseudoAfter}
  }
`;

const Repeat = styled.a`
  display: inline-block;
  padding: 7px;
  vertical-align: top;
  text-align: center;

  ::after {
    background-position: ${(props: Loop) =>
      props.loop ? '-570px -681px' : '-600px -681px'};
    width: 22px;
    height: 22px;
    ${pseudoAfter}
  }
`;

const ListWrap = styled.div`
  position: absolute;
  top: 62px;
  right: 0;
  bottom: 0;
  left: 0;
  overflow-x: hidden;
`;

const Ul = styled.ul`
  .ghost-class {
    opacity: 0;
  }
`;
