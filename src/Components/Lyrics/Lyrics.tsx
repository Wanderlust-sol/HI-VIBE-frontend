import React from 'react';
import styled from 'styled-components';
import Icons from 'Images/vibe.svg';

interface Props {
  onClick: (LyricsClose: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  lyrics: string;
  music_name: string;
  album_image: string;
  artist_name: string[];
}

const Lyrics: React.FC<Props> = (props: Props) => {
  return (
    <LyricsModal>
      <LayerWide>
        <LyricsPopup>
          <LySongInfo>
            <LyThumb>
              <LyImg src={props.album_image} />
            </LyThumb>
            <LyInfoArea>
              <LyTitle>{props.music_name}</LyTitle>
              <LyArtist>{props.artist_name}</LyArtist>
            </LyInfoArea>
          </LySongInfo>
          <LyContents>
            {props.lyrics.split('\n').map((line) => {
              return <p>{line}</p>;
            })}
          </LyContents>
          <LyClose onClick={props.onClick} />
        </LyricsPopup>
      </LayerWide>
    </LyricsModal>
  );
};

export default Lyrics;

const LyricsModal = styled.div`
  overflow-y: auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 30000;
  background-color: rgba(0, 0, 0, 0.6);
  outline: 0;
`;

const LayerWide = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;

const LyricsPopup = styled.div`
  width: 540px;
  overflow-y: hidden;
  position: relative;
  display: inline-block;
  margin: 200px auto;
  padding: 35px 0;
  vertical-align: middle;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);

  ::after {
    display: inline-block;
    width: 0;
    height: 100%;
    vertical-align: middle;
    content: '';
  }
`;

const LySongInfo = styled.div`
  width: 468px;
  padding: 0 35px;
`;

const LyThumb = styled.div`
  float: left;
  width: 84px;
  height: 84px;
  margin-right: 18px;
`;

const LyImg = styled.img`
  width: 100%;
  /* height: 100%; */
`;

const LyInfoArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  height: 84px;
  margin-right: 34px;
  text-align: left;
`;

const LyTitle = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  word-break: break-all;
  display: block;
  max-height: 38px;
  font-size: 15px;
  line-height: 19px;
  font-weight: 700;
  color: #232323;
  word-break: break-word;
`;

const LyArtist = styled.p`
  font-size: 14px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 342px;
  padding-top: 4px;
  line-height: 20px;
  color: #232323;
  word-break: break-all;
`;

const LyContents = styled.div`
  font-size: 14px;
  line-height: 22px;
  white-space: pre-line;
  overflow-x: hidden;
  overflow-y: auto;
  width: 543px;
  max-height: 349px;
  margin-top: 25px;
  padding: 0 35px;
  color: #666;
  text-align: left;
  outline: none;
`;
const LyClose = styled.div`
  outline: medium;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 34px;
  height: 34px;
  text-align: center;
  cursor: pointer;

  ::after {
    content: '';
    display: inline-block;
    background-position: -778px -803px;
    background-image: url(${Icons});
    width: 14px;
    height: 14px;
    margin-top: 10px;
  }
`;
