import React from 'react';
import './App.css';
import { Container } from '@mui/material';
import { Header } from './containers/header';
import { Services } from './containers/services';
import { About } from './containers/about';

function App() {
  return (
    <Container
      maxWidth={false}
      sx={{
        padding: "0 !important",
      }}
    >
      <Header />
      <Services />
      <About />
    </Container>
  );
}

export default App;
