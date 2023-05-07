// FormContainer.tsx
import React, { createContext } from 'react';
import ComuteForm from './ComuteForm';
import FormDataDisplay from './FormDataDisplay';

export const FormDataContext = createContext({
    formData: {
      firstName: '',
      lastName: '',
      email: '',
    },
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
    submittedData: {
      firstName: '',
      lastName: '',
      email: '',
    },
  });

const FormContainer = () => {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const [submittedData, setSubmittedData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmittedData(formData);
    console.log('Form data:', formData);
  };

  return (
    <FormDataContext.Provider value={{ formData, handleChange, submittedData }}>
      <ComuteForm onSubmit={handleSubmit} />
      <hr></hr>
      <FormDataDisplay />
    </FormDataContext.Provider>
  );
};

export default FormContainer;
