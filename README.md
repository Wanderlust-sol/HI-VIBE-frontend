### Project
-------------
+ 코딩 1개월 2주차 WeCode 6기 수강생의 [VIBE](https://vibe.naver.com/) 클론 프로젝트

### 개발 인원 및 기간
-----------
+ 개발기간 : 2020/3/9 ~ 2020/3/20
+ 개발 인원 : Front-End 3명, Back-End 2명, react-native 1명
+ [Back-End github](https://github.com/wecode-bootcamp-korea/HI-ViBE-backend)
+ [Native github](https://github.com/wecode-bootcamp-korea/HI-ViBE-app)

### 목적
------------
+ 실제 Back-End API를 통해 원하는 데이터를 GET하여 음악 스트리밍 서비스 구현하기
+ 라이브러리 없이 음악 재생 구현해보기
+ TypeScript와 Redux를 사용하여 음악 재생 바 관련 state관리 구현해보기

### 데모 영상(이미지 클릭)
-----------------
[![HI-VIBE 미리보기](https://images.velog.io/images/aerirang647/post/88e2b424-dc6d-40f9-b6bd-6ec52e9247b1/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-03-22%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%207.52.30.png)](https://vimeo.com/399385820)


### 적용 기술
---------------
+ Front-End : React.js, TypeScript, Styled Component, Redux , React-Native
+ Back-End : Python, Django
+ Common : NAVER social login

### 구현 기능
---------
#### COMMON
+ 768px 기준으로 반응형 구현
+ nav에서 DJ-station 더블 클릭 시 페이지 이동
+ footer 공지사항 라이브러리 없이 자동으로 넘어가는 것 구현

#### NAVER 로그인
+ 로그인 시 nav바에 사용자만의 보관함 나타남

#### Today
+ slick을 사용하여 앨범이나 음악 테마, 뉴스 등 나타내기
+ hover 했을 때 재생버튼 나타나고 재생버튼을 클릭하거나 ...에 있는 '플레이리스트에 추가' 누르면 재생 목록에 추가 구현

#### DJ-STATION
+ 테마 바꿔끼기 구현
+ '힙 터질 때', '멍 때릴 때' 등 테마 클릭 시 해당하는 음악이 재생 목록에 추가

#### 음악 재생 바
+ 재생 목록 drag & drop 구현
+ shuffle 기능 구현
+ 각 노래에 맞는 가사 넣기
+ 음량 조절 기능 구현
+ 재생 목록에서 삭제 가능
+ 재생 바 클릭하면 클릭한 노래 시간으로 변경

