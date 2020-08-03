import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Notifications, { notify } from 'react-notify-toast';

import Routes from './routes';
import Global from './styles';

function App() {
  return (
    <BrowserRouter>
      <Notifications />
      <Routes />
      <Global />
    </BrowserRouter>
  );
}

export default App;
