import React from 'react';
import MainAppRoutes from '../routes/MainAppRoutes';
import {GlobalStateProvider} from '../routes/GlobalStateProvider';

const App = () => {
  return (
    <GlobalStateProvider>
      <MainAppRoutes />
    </GlobalStateProvider>
  );
};

export default App;
