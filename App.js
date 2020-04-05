import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import store from './src/redux/store';
import AppContainer from './src/containers/AppContainer';

export default function App() {
  return (
    <ReduxProvider store={store}>
      <AppContainer />
    </ReduxProvider>
  );
}