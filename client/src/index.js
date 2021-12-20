import React from 'react';
import { render } from 'react-dom';
import App from 'App';
import { ThemeProvider } from 'styled-components';
import { theme } from 'globalCSS/theme';
import GlobalStyles from 'globalCSS/global';
import store from 'redux/store';
import { Provider as ReduxProvider } from 'react-redux';
import 'globalCSS/font.css';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

const persistor = persistStore(store);

render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </ThemeProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
