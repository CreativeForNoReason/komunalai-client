// FormContainer.tsx
import React, { createContext } from 'react';
import ComuteForm from './ComuteForm';
import FormDataDisplay from './FormDataDisplay';
import { FormData } from '../Types/FormData';

export const FormDataContext = createContext<{
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submittedData: FormData;
}>({
  formData: {
    name: '',
    date: '',
    type: '',
    commune: '',
    before: 0,
    after: 0,
    difference: 0,
    price: 0,
    calculated: 0,
    additionalTax: 0,
    sum: 0,
    paymentDate: '',
  },
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
  submittedData: {
    name: '',
    date: '',
    type: '',
    commune: '',
    before: 0,
    after: 0,
    difference: 0,
    price: 0,
    calculated: 0,
    additionalTax: 0,
    sum: 0,
    paymentDate: '',
  },
});

const FormContainer = () => {
  const [formData, setFormData] = React.useState<FormData>({
    name: '',
    date: '',
    type: '',
    commune: '',
    before: 0,
    after: 0,
    difference: 0,
    price: 0,
    calculated: 0,
    additionalTax: 0,
    sum: 0,
    paymentDate: '',
  });

  const [submittedData, setSubmittedData] = React.useState<FormData>({
    name: '',
    date: '',
    type: '',
    commune: '',
    before: 0,
    after: 0,
    difference: 0,
    price: 0,
    calculated: 0,
    additionalTax: 0,
    sum: 0,
    paymentDate: '',
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
