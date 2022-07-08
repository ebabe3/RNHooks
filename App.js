import { NativeBaseProvider } from 'native-base';
import React from 'react';

import Navigator from './AppNavigator';

const App = () => {
  return (
    <NativeBaseProvider>
      <Navigator/>
    </NativeBaseProvider>
  );
};

export default App;
