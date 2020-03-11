import React from 'react';
import Icons from '../Images/vibe.svg';
import styled, { css } from 'styled-components';

const MainNav = styled.nav`
  width: 225px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  /* bottom: 81px; */
  background: #000;
`;

const pseudoBefore = css`
  content: '';
  display: inline-block;
  background-image: url(${Icons});
`;

const LogoLink = styled.a`
  display: inline-block;
  vertical-align: top;

  ::before {
    margin: 23px 10px 23px 20px;
    width: 111px;
    height: 24px;
    background-position: -328px -130px;
    ${pseudoBefore}
  }
`;

const SearchLink = styled.a`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  opacity: 0.7;

  :hover {
    opacity: 1;
  }

  ::before {
    width: 20px;
    height: 20px;
    margin: 26px 19px;
    background-position: -555px -747px;
    ${pseudoBefore}
  }
`;

const MyMenu = styled.div`
  overflow-y: auto;
  position: absolute;
  top: 73px;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0 15px 40px;

  /* 커스텀 스크롤 바 */
  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #333;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 8px;
    background-color: #111;
  }
`;

const ProfileArea = styled.div`
  border-style: solid;
  border-color: rgba(216, 216, 216, 0.13);
  border-width: 1px 0;
`;

const MenuArea = styled.div`
  margin-top: 34px;
`;

const LoginLink = styled.a`
  line-height: 19px;
  color: rgb(153, 153, 153);
  padding: 11px 0;
  display: block;
  font-size: 15px;

  ::before {
    width: 30px;
    height: 30px;
    vertical-align: middle;
    background-position: -694px -624px;
    margin: 0 10px 0 7px;
    border-radius: 50%;
    ${pseudoBefore}
  }
`;

const LoginText = styled.span`
  display: inline-block;
  vertical-align: middle;
`;

const Ul = styled.ul`
  padding: 0;
`;

interface ListProps {
  marginTop?: string;
}

const List = styled.li`
  margin-top: ${(props: ListProps) => props.marginTop || '8px'};
`;

const defaultLink = css`
  display: block;
  padding: 6px 9px;
  opacity: 0.8;

  :hover {
    opacity: 1;
  }

  ::before {
    ${pseudoBefore}
    margin-right: 8px;
    vertical-align: middle;
    width: 20px;
    height: 20px;
  }
`;

const defaultText = css`
  font-weight: 700;
  display: inline-block;
  font-size: 16px;
  line-height: 20px;
  vertical-align: middle;
  color: #fff;
  opacity: 0.8;
`;

const TodayLink = styled.a`
  ${defaultLink}
  opacity: 1;
  ::before {
    background-position: -499px -747px;
  }
`;

const TodayText = styled.span`
  ${defaultText}
  color: rgb(255, 0, 80);
  opacity: 1;
`;

const ChartLink = styled.a`
  ${defaultLink} ::before {
    background-position: -471px -747px;
  }
`;

const DefaultText = styled.span`
  ${defaultText}
`;

const DjLink = styled.a`
  ${defaultLink} ::before {
    background-position: -528px -719px;
  }
`;

const MagLink = styled.a`
  ${defaultLink} ::before {
    background-position: -415px -747px;
  }
`;

const MonthlyLink = styled.a`
  ${defaultLink} ::before {
    background-position: -723px -747px;
  }
`;

const ExtraMenu = styled.div`
  margin-top: 34px;
  padding-top: 24px;
  border-top: 1px solid hsla(0, 0%, 84.7%, 0.13);
`;

const extraLink = css`
  display: block;
  padding: 8px 9px 10px;
  opacity: 0.8;

  :hover {
    opacity: 1;
  }
`;

const ExtraLink1 = styled.a`
  ${extraLink} ::before {
    background-position: -686px -289px;
    width: 72px;
    height: 14px;
    ${pseudoBefore}
  }
`;

const ExtraLink2 = styled.a`
  ${extraLink} ::before {
    background-position: -328px -271px;
    width: 82px;
    height: 16px;
    ${pseudoBefore}
  }
`;

const ExtraLink3 = styled.a`
  ${extraLink} ::before {
    background-position: -328px -295px;
    width: 82px;
    height: 16px;
    ${pseudoBefore}
  }
`;

const ExtraText = styled.a`
  :hover {
    opacity: 1;
  }
  display: block;
  padding: 5px 9px 7px;
  font-size: 16px;
  line-height: 19px;
  color: #fff;
  opacity: 0.8;
  text-decoration: none;
`;

function Nav(): JSX.Element {
  return (
    <MainNav>
      <LogoLink href="/" />
      <SearchLink href="#" />
      <MyMenu>
        <ProfileArea>
          <LoginLink href="#">
            <LoginText>로그인</LoginText>
          </LoginLink>
        </ProfileArea>
        <MenuArea>
          <Ul>
            <List marginTop="0">
              <TodayLink href="#">
                <TodayText>투데이</TodayText>
              </TodayLink>
            </List>
            <List>
              <ChartLink href="#">
                <DefaultText>차트</DefaultText>
              </ChartLink>
            </List>
            <List>
              <DjLink href="#">
                <DefaultText>DJ 스테이션</DefaultText>
              </DjLink>
            </List>
            <List>
              <MagLink href="#">
                <DefaultText>VIBE MAG</DefaultText>
              </MagLink>
            </List>
            <List>
              <MonthlyLink href="#">
                <DefaultText>이달의 노래</DefaultText>
              </MonthlyLink>
            </List>
          </Ul>

          <ExtraMenu>
            <ExtraLink1
              href="https://vibe.naver.com/wheresmymoney"
              target="_blank"
            />
            <ExtraLink2
              href="https://music.naver.com/onStage/onStageSeason2List.nhn"
              target="_blank"
            />
            <ExtraLink3
              href="https://music.naver.com/musicianLeague/contents/home.nhn"
              target="_blank"
            />
            <ExtraText href="#">서비스 소개</ExtraText>
            <ExtraText href="#">맴버쉽 구독</ExtraText>
          </ExtraMenu>
        </MenuArea>
      </MyMenu>
    </MainNav>
  );
}

export default Nav;
