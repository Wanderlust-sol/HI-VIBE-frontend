import React from 'react';
import ReactDOM from 'react-dom';
import 'Styles/index.css';
import GlobalStyles from 'Styles/GlobalStyles';
import theme from './Styles/theme';
import { ThemeProvider } from './Styles/theme-components';
import Routes from './Routes';

ReactDOM.render(
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </>,
  document.getElementById('root'),
);
