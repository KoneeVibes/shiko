import React from 'react';
import './App.css';
import { Container } from '@mui/material';
import { Header } from './containers/header';

function App() {
  return (
    <Container
      maxWidth={false}
      sx={{
        padding: "0 !important",
      }}
    >
      <Header />
    </Container>
  );
}

export default App;
