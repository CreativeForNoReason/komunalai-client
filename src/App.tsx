import React from 'react';
import ComuteForm from './Components/ComuteForm';
import FormDataDisplay from './Components/FormDataDisplay';
 
const App = () => {
  return (
    <div>
      <h1>My Form</h1>
      <ComuteForm />
      <hr></hr>
      <FormDataDisplay />
    </div>
  );
};

export default App;