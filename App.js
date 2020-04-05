import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import { store, persistor } from './src/redux/store';
import AppContainer from './src/containers/AppContainer';

export default function App() {
  return (
    <ReduxProvider store={store}>
      <PersistGate {...{ persistor }}>
        <AppContainer />
      </PersistGate>
    </ReduxProvider>
  );
}