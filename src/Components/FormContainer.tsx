// FormContainer.tsx
import React, { createContext } from 'react';
import ComuteForm from './ComuteForm';
import FormDataDisplay from './FormDataDisplay';
import { FormData, initialFormData } from '../Types/FormData';

export const FormDataContext = createContext<{
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  submittedData: FormData;
}>({
  formData: initialFormData,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
  handleSelect: (e: React.ChangeEvent<HTMLSelectElement>) => {},
  submittedData: initialFormData
});

const FormContainer = () => {
  const [formData, setFormData] = React.useState<FormData>(initialFormData);
  const [submittedData, setSubmittedData] = React.useState<FormData>(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <FormDataContext.Provider value={{ formData, handleChange, handleSelect, submittedData }}>
      <ComuteForm onSubmit={handleSubmit} />
      <hr></hr>
      <FormDataDisplay />
    </FormDataContext.Provider>
  );
};

export default FormContainer;
