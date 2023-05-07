// App.tsx
import React from 'react';
import FormContainer from './Components/FormContainer';
import Container from 'react-bootstrap/esm/Container';

const App = () => {
  return (
    <Container>
      <h1>My Form</h1>
      <FormContainer />
    </Container>
  );
};

export default App;

