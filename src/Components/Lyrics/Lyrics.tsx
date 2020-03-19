import React from 'react';
import styled from 'styled-components';
import Icons from 'Img/vibe.svg';

interface Props {
  onClick: (LyricsClose: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const lyrics =
  'I’m at a party I don’t wanna be at\nAnd I don’t ever wear a suit and tie \nWondering if I can sneak out of the back\nNobody is even looking at me in my eyes\nAnd then you take my hand finish my drink say shall we dance (hell yeah)\nY’know I love you did I ever tell you you make it better like that\n\nDon’t think I fit in at this party\nEveryone’s got so much to say\nI always feel like I’m nobody\nWho wants to fit in anyway\n\nCoz I don’t care when I’m with my baby yeah\nAll the bad things disappear\nAnd you making me feel that maybe I am somebody\nI can deal with the bad nights when I’m with my baby yeah (ooh ooh ooh)\nCoz I don’t care\nAs long as you just hold me near \nYou can take me anywhere and you making me feel like I’m loved by somebody\nI can deal with the bad nights when I’m with my baby yeah\n\nWe at a party we don’t wanna be at\nTrying to talk but we can’t hear ourselves\nRead your lips I’d rather kiss ‘em right back\nWith all these people all around I’m crippled with anxiety\nBut I’m told its where I’m supposed to be\nYou know what? It’s kind of crazy coz I really don’t mind\nWhen you make it better like that\n\nDon’t think I fit in at this party\nEveryone’s got so much to say\nWhen we walked in I said I’m sorry\nBut now I think that we should stay\n\nCoz I don’t care when I’m with my baby yeah\nAll the bad things disappear\nAnd you making me feel that maybe I am somebody\nI can deal with the bad nights when I’m with my baby yeah (ooh ooh ooh oh yeah yeah yeah)\nCoz I don’t care as long as you just hold me near \nYou can take me anywhere and you making me feel like I’m loved by somebody\nI can deal with the bad nights when I’m with my baby yeah (oh oh oh oh no)\n\nI don’t like ‘bout nobody but you\nIt’s like you’re the only one here\nI don’t like ‘bout nobody but you baby I don’t care\nI don’t like ‘bout nobody but you\nI hate everyone here\nI don’t like ‘bout nobody but you baby yeah\n\nCoz I don’t care (don’t care) when I’m with my baby yeah (oh yeah)\nAll the bad things disappear (disappear)\nAnd you making me feel that maybe I am somebody (maybe I’m somebody)\nI can deal with the bad nights (with the bad nights) when I’m with my baby yeah (ooh ooh ooh oh yeah yeah yeah)\nCoz I don’t care as long as you just hold me near (me near)\nYou can take me anywhere (anywhere anywhere) and you making me feel like I’m loved by somebody (loved by somebody yeah)\nI can deal with the bad nights when I’m with my baby yeah (oh oh oh oh no)';
const Lyrics: React.FC<Props> = (props: Props) => {
  return (
    <LyricsModal>
      <LayerWide>
        <LyricsPopup>
          <LySongInfo>
            <LyThumb>
              <LyImg src="https://musicmeta-phinf.pstatic.net/album/004/480/4480594.jpg?type=r100Fll&v=20200309220857" />
            </LyThumb>
            <LyInfoArea>
              <LyTitle>WANNABE</LyTitle>
              <LyArtist>ITZY(있지)</LyArtist>
            </LyInfoArea>
          </LySongInfo>
          <LyContents>
            {lyrics.split('\n').map((line) => {
              return (
                <span>
                  {line}
                  <br />
                </span>
              );
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
