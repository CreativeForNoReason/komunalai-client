// FormContainer.tsx
import React, { createContext } from 'react';
import ComuteForm from './ComuteForm';
import FormDataDisplay from './FormDataDisplay';
import { FormData, initialFormData } from '../Types/FormData';
import { ServiceTypes } from '../Types/ServiceTypes';

export const FormDataContext = createContext<{
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleTypeSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  submittedData: FormData;
  selectedServiceType: ServiceTypes | null;
}>({
  formData: initialFormData,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
  handleSelect: (e: React.ChangeEvent<HTMLSelectElement>) => {},
  handleTypeSelect: (e: React.ChangeEvent<HTMLSelectElement>) => {},
  submittedData: initialFormData,
  selectedServiceType: null
});

const FormContainer = () => {
  const [formData, setFormData] = React.useState<FormData>(initialFormData);
  const [submittedData, setSubmittedData] = React.useState<FormData>(initialFormData);
  const [selectedServiceType, setSelectedServiceType] = React.useState<ServiceTypes | null>(null);

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
  };

  const handleTypeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleSelect(e);
    setSelectedServiceType(e.target.value as ServiceTypes);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <FormDataContext.Provider value={{ formData, handleChange, handleSelect, handleTypeSelect, submittedData, selectedServiceType }}>
      <ComuteForm onSubmit={handleSubmit} />
      <hr></hr>
      <FormDataDisplay />
    </FormDataContext.Provider>
  );
};

export default FormContainer;
