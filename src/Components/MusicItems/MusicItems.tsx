import React, { useState } from 'react';
import styled from 'styled-components';
import Icons from 'Img/vibe.svg';

interface Items {
  id: number;
  name: string;
  artist_name: string;
  album_image: string;
  onRemove: (id: number) => void;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

interface Mouse {
  mouse: boolean;
}

const MusicItems: React.FC<Items> = (props: Items) => {
  const [mouse, setMouse] = useState<boolean>(false);
  const onMouseOver = () => {
    setMouse(true);
  };

  const onMouseLeave = () => {
    setMouse(false);
  };
  return (
    <ListItem
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      mouse={mouse}
    >
      <Thumb>
        <Img src={props.album_image} />
        <IconPlay mouse={mouse} />
      </Thumb>
      <InfoArea>
        <Title>{props.name}</Title>
        <Artist>{props.artist_name}</Artist>
      </InfoArea>
      <BtnDelete onClick={() => props.onRemove(props.id)} />
    </ListItem>
  );
};

export default MusicItems;

const ListItem = styled.li`
  position: relative;
  overflow: hidden;
  display: table;
  width: 100%;
  height: 40px;
  padding: 8px 0;
  table-layout: fixed;
  cursor: move;
  ${(props: Mouse) =>
    props.mouse
      ? { backgroundColor: 'hsla(0,0%,100%,.08)' }
      : { backgroundColor: '' }}
`;

const Thumb = styled.div`
  width: 40px;
  height: 40px;
  margin: 0 12px 0 20px;
  float: left;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
`;

const InfoArea = styled.div`
  max-width: 123px;
  padding-right: 8px;
  line-height: 1.25em;
  float: left;
`;

const Title = styled.div`
  color: #dfdfdf;
  font-size: 14px;
  font-weight: 400;
`;
const Artist = styled.span`
  color: #747474;
  font-size: 13px;
`;

const IconPlay = styled.a`
  width: 40px;
  height: 40px;
  top: 8px;
  left: 20px;
  ${(props: Mouse) =>
      props.mouse && {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
      }}
    ::after {
    background-position: -194px -803px;
    width: 13px;
    height: 16px;
    content: '';
    display: inline-block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-image: url(${Icons});
    ${(props: Mouse) =>
      props.mouse ? { visibility: 'visible' } : { visibility: 'hidden' }}
  }
`;

const BtnDelete = styled.a`
  display: table-cell;
  width: 40px;
  padding-right: 8px;
  height: 100%;
  text-align: center;
  vertical-align: middle;
  opacity: 0.3;

  ::after {
    background-position: -64px -747px;
    width: 22px;
    height: 22px;
    content: '';
    display: inline-block;
    background-image: url(${Icons});
  }
`;