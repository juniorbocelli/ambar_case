import React from 'react';
import {
  ThemeProvider,
  Container
} from '@material-ui/core';

import { thorsonTheme } from './ui/theme/theme';
import Router from './features/Router';

function App() {
  return (
    <ThemeProvider theme={thorsonTheme}>
      <Container maxWidth="lg">
        <Router />
      </Container>
    </ThemeProvider>
  );
}

export default App;
