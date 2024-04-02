import { useRef } from 'react';
import './App.css';
import { Container } from '@mui/material';
import { Header } from './containers/header';
import { Services } from './containers/services';
import { About } from './containers/about';
import { Growth } from './containers/growth';
import { Capabilities } from './containers/capabilities';
import { Calendly } from './containers/calendly';
import { Contact } from './containers/contact';
import { Form } from './containers/form';
import { Footer } from './components/footer';

function App() {
  const calendlyRef = useRef(null);
  return (
    <Container
      maxWidth={false}
      sx={{
        padding: "0 !important",
      }}
    >
      <Header calendlyRef={calendlyRef} />
      <Services />
      <About />
      <Growth />
      <Capabilities />
      <Calendly calendlyRef={calendlyRef}/>
      <Contact />
      <Form />
      <Footer />
    </Container>
  );
}

export default App;
