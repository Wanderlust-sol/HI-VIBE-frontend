const naverLogin = new window.naver.LoginWithNaverId({
  clientId: 'l8Te_G6HB311ZMRozq4s',
  callbackUrl: 'http://localhost:3000',
  callbackHandle: true,
  loginButton: {
    color: 'green',
    type: 1,
    height: 20,
  } /* 로그인 버튼의 타입을 지정 */,
});

naverLogin.init();

export default naverLogin;
