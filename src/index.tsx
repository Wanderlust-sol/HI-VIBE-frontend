import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from 'Styles/GlobalStyles';
import theme from './Styles/theme';
import { ThemeProvider } from './Styles/theme-components';
import Routes from './Routes';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import rootReducer from 'modules';
import rootReducer from 'Redux_aeri/rootReducer';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
