import React, { Component } from 'react';
import FaceBook from 'Images/facebook.png';
import Insta from 'Images/insta.png';
import Naver from 'Images/naver.png';
import styled from 'styled-components';

interface State {
  nums: Array<string>;
  current: number;
  needTransition: boolean;
  direction: string;
}
const DIRECTIOM_TYPE = {
  next: 'NEXT',
  prev: 'PREV',
};
export default class Footer extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    setInterval(this.validNextSlider, 1000);
    this.state = {
      nums: [
        '[안내]다른 앱에서 듣던 플레이리스트, HI-ViBE로 더 편하게 들어보세요',
        '[Tip]새로운 음원 사용료 정산 방식이 시작됩니다.',
        '여러분과 함께여서 행복합니다',
        '국가가 허락한 유일한 마약..music',
        '코로나 관련 공지',
      ],
      current: 1,
      needTransition: true,
      direction: '',
    };
  }
  handleSliderTranslate = (DIRECTION_TYPE: any) => {
    const { direction } = this.state;
    switch (direction) {
      case DIRECTION_TYPE.next:
        this.validNextSlider();
        break;
      case DIRECTION_TYPE.prev:
        this.validPrevSlider();
        break;
      default:
        break;
    }
  };

  validNextSlider = () => {
    const { current, nums } = this.state;
    let _current = current;
    _current -= 1;
    const _nums = [...nums, ...nums.slice(0, 1)].slice(-7);
    this.setState({
      needTransition: false,
      current: _current,
      nums: _nums,
    });
  };

  validPrevSlider = () => {
    const { current, nums } = this.state;
    let _current = current;
    _current += 1;
    const _nums = [...nums.slice(-1), ...nums].slice(0, 7);
    this.setState({
      needTransition: false,
      current: _current,
      nums: _nums,
    });
  };
  handleNext = (DIRECTIOM_TYPE: any) => {
    const { current, nums } = this.state;
    let _current = current + 1;
    if (_current > nums.length - 3) return;
    this.setState({
      needTransition: true,
      current: _current,
      direction: DIRECTIOM_TYPE.next,
    });
  };

  handlePrev = (DIRECTIOM_TYPE: any) => {
    const { current } = this.state;
    let _current = current - 1;
    if (_current < 0) return;
    this.setState({
      needTransition: true,
      current: _current,
      direction: DIRECTIOM_TYPE.prev,
    });
  };

  transLateVal = () => {
    return -(this.state.current * 33.333333);
  };

  sliderStyle = () => {
    if (this.state.needTransition) {
      return {
        transform: `translateX(${this.transLateVal()}%)`,
        transition: 'transform 0.3s ease-in-out',
      };
    }

    return {
      transform: `translateX(${this.transLateVal()}%)`,
    };
  };
  render() {
    return (
      <FooterBoxParent>
        <FooterBox>
          <NoticeFooter>
            <LinkNotice>공지사항</LinkNotice>
            <NoticeTitle>
              <NoticeUl>
                {this.state.nums.map((item, i) => (
                  <>
                    <NoticeLi1>{item}</NoticeLi1>
                  </>
                ))}
              </NoticeUl>{' '}
            </NoticeTitle>
          </NoticeFooter>
          <InfoFooter>
            <Representative>그레이스풀레인 대표이사 송은우</Representative>
            {/* border-bottom 추가 하기 */}
            <OfficeOwnNumber>
              <CorporateResistrationNumber>
                <CorporateResistrationText>
                  사업자등록번호
                </CorporateResistrationText>
                220-20-11011
              </CorporateResistrationNumber>
              <SellerNumber>
                <SellerNumberText>통신판매업신고번호</SellerNumberText>
                제2006-경기성남-1호
              </SellerNumber>
            </OfficeOwnNumber>
            {/* 대표이사랑 사업자등록번호 통신판매업신고번호 끝 */}
            {/* *****************************************************       */}
            {/* 주소, 대표전화, 이메일 시작 */}
            <AdressWholeDiv>
              <AdressName>
                주소
                <OfficeAdress>강남구 테헤란로 427</OfficeAdress>
              </AdressName>
              <CeoNumberText>
                대표전화
                <CeoNumber>1588-1588</CeoNumber>
              </CeoNumberText>
              <EmailText>
                이메일
                <Email>csk647@gmail.com</Email>
              </EmailText>
            </AdressWholeDiv>
          </InfoFooter>
          <TermsFooter>
            <Item1 target="_blank">그레이스풀레인</Item1>
            <Item2 target="_blank">개인정보처리방침</Item2>
            <Item3 target="_blank">하이바이브 이용약관</Item3>
            <Item4 target="_blank">고객센터</Item4>
            <Item5 target="_blank">결제/환불 안내</Item5>
            <Item6 target="_blank">사업자정보 확인</Item6>
            <Item7 target="_blank">HI-VIBE</Item7>
          </TermsFooter>
          <SnsFooter>
            <FaceBookLink>
              <FaceBookIcon src={FaceBook} />
            </FaceBookLink>
            <InstaLink>
              <InstaIcon src={Insta} />
            </InstaLink>
            <NaverLink>
              <NaverIcon src={Naver} />
            </NaverLink>
          </SnsFooter>
        </FooterBox>
      </FooterBoxParent>
    );
  }
}
const FooterBoxParent = styled.div`
  margin-bottom: 81px;
  padding-bottom: 35px;

  ${({ theme }) => theme.media.desktop`
  position: absolute;
  width: 100%-225px;
  bottom: 0;
  right: 0;
  left: 225px;
  height: 164px;
  background-color: #f2f2f2;
  `};
`;
const FooterBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const NoticeFooter = styled.div`
  height: 51px;
  padding: 0 20px 0 15px;
  border: 1px solid rgba(30, 30, 30, 0.05);
  border-width: 1px 0;
  display: block;
  ${({ theme }) => theme.media.desktop`
  height: 52px;
  border: 1px solid rgba(30, 30, 30, 0.05);
  border-width: 1px 0;
  display: block;
  content: '';
  clear: both;

  `}
`;
const LinkNotice = styled.a`
  padding: 18px 5px 17px;
  font-size: 14px;
  float: left;
  margin-right: 5px;
  line-height: 16px;
  color: #939393;
  ${({ theme }) => theme.media.desktop`
  float: left;
  margin: 0 14px;
  padding: 18px 5px 19px;
  font-size: 13px;
  line-height: 16px;
  color: #939393;
  text-decoration: none;
  cursor: pointer;

  `}
`;
const NoticeTitle = styled.div`
  overflow: hidden;
  height: 60px;
`;
const NoticeUl = styled.ul`
  overflow: hidden;
`;
const NoticeLi1 = styled.li`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  word-break: break-all;
  height: 53px;
  font-size: 13px;
  line-height: 53px;
  vertical-align: middle;
  color: #232323;
`;
const NoticeLi2 = styled.li``;
const NoticeLi3 = styled.li``;
const InfoFooter = styled.div`
  padding: 23px 20px 15px;
  border-bottom: 1px solid rgba(30, 30, 30, 0.05);
  ${({ theme }) => theme.media.desktop`
  padding: 21px 21px 17px;

  `}
`;
const Representative = styled.span`
  margin-left: -2px;
  display: inline-block;
  margin-bottom: 6px;
  font-size: 13px;
  line-height: 18px;
  color: #666;
  vertical-align: top;
`;
const OfficeOwnNumber = styled.div``;
const CorporateResistrationNumber = styled.span`
  display: inline-block;
  margin-bottom: 6px;
  font-size: 13px;
  line-height: 18px;
  color: #666;
  vertical-align: top;
`;
const CorporateResistrationText = styled.span`
  margin-right: 8px;
  font-weight: 400;
  color: rgba(97, 97, 97, 0.6);
  font-size: 13px;
  line-height: 18px;
`;
const SellerNumber = styled.span`
  margin-left: 18px;
  display: inline-block;
  margin-bottom: 6px;
  font-size: 13px;
  line-height: 18px;
  color: #666;
  vertical-align: top;
`;
const SellerNumberText = styled.span`
  margin-right: 8px;
  font-size: 13px;
  font-weight: 400;
  color: rgba(97, 97, 97, 0.6);
`;
const AdressWholeDiv = styled.div``;
const AdressName = styled.span`
  margin-right: 8px;
  font-size: 13px;
  font-weight: 400;
  color: rgba(97, 97, 97, 0.6);
`;
const OfficeAdress = styled.span`
  margin-left: 8px;
  display: inline-block;
  margin-bottom: 6px;
  font-size: 13px;
  font-size: 13px;
  line-height: 18px;
  color: #666;
  vertical-align: top;
`;
const CeoNumberText = styled.span`
  margin-right: 8px;
  font-weight: 400;
  font-size: 13px;
  color: rgba(97, 97, 97, 0.6);
`;
const CeoNumber = styled.span`
  margin-left: 8px;
  display: inline-block;
  margin-bottom: 6px;
  font-size: 13px;
  line-height: 18px;
  color: #666;
  vertical-align: top;
`;
const EmailText = styled.span`
  margin-right: 8px;
  font-weight: 400;
  font-size: 13px;
  color: rgba(97, 97, 97, 0.6);
`;
const Email = styled.span`
  margin-left: 8px;
  color: #666;
  font-size: 13px;
`;
const TermsFooter = styled.div`
  ${({ theme }) => theme.media.desktop`
 position: absolute;
  top: 0;
  right: 20px;
  text-align: right;
  `}
`;
const Item1 = styled.a`
  display: inline-block;
  padding: 19px 10px 18px;
  font-size: 13px;
  line-height: 16px;
  vertical-align: top;
  color: #939393;
`;
const Item2 = styled.a`
  display: inline-block;
  padding: 19px 10px 18px;
  font-size: 13px;
  line-height: 16px;
  vertical-align: top;
  color: #939393;
`;
const Item3 = styled.a`
  display: inline-block;
  padding: 19px 10px 18px;
  font-size: 13px;
  line-height: 16px;
  vertical-align: top;
  color: #939393;
`;
const Item4 = styled.a`
  display: inline-block;
  padding: 19px 10px 18px;
  font-size: 13px;
  line-height: 16px;
  vertical-align: top;
  color: #939393;
`;
const Item5 = styled.a`
  display: inline-block;
  padding: 19px 10px 18px;
  font-size: 13px;
  line-height: 16px;
  vertical-align: top;
  color: #939393;
`;
const Item6 = styled.a`
  display: inline-block;
  padding: 19px 10px 18px;
  font-size: 13px;
  line-height: 16px;
  vertical-align: top;
  color: #939393;
`;
const Item7 = styled.a`
  display: inline-block;
  padding: 19px 10px 18px;
  font-size: 13px;
  line-height: 16px;
  vertical-align: top;
  color: #939393;
`;

const SnsFooter = styled.div`
  margin-top: 17px;
  margin-bottom: 17px;
  position: static;
  text-align: center;
  right: 19px;
  bottom: 68px;

  ${({ theme }) => theme.media.desktop`
  position: absolute;
  right: 19px;
  bottom: 30px;
  `}
`;
const FaceBookLink = styled.a`
  display: inline-block;
  margin: 0 11px;
  vertical-align: top;
`;
const FaceBookIcon = styled.img`
  width: 26px;
  height: 26px;
`;
const InstaLink = styled.a`
  display: inline-block;
  margin: 0 11px;
  vertical-align: top;
`;
const InstaIcon = styled.img`
  width: 26px;
  height: 26px;
`;
const NaverLink = styled.a`
  display: inline-block;
  margin: 0 11px;
  vertical-align: top;
`;
const NaverIcon = styled.img`
  width: 26px;
  height: 26px;
`;
