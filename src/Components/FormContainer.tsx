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
  handleNumberChange: (name: string, numberValue: number) => void;
  handleDecimalNumberChange: (name: string, numberValue: number) => void;
  submittedData: FormData[];
  selectedServiceType: ServiceTypes | null;
}>({
  formData: initialFormData,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
  handleSelect: (e: React.ChangeEvent<HTMLSelectElement>) => {},
  handleTypeSelect: (e: React.ChangeEvent<HTMLSelectElement>) => {},
  handleNumberChange: (name: string, numberValue: number) => {},
  handleDecimalNumberChange: (name: string, numberValue: number) => {},
  submittedData: [initialFormData],
  selectedServiceType: null
});

const FormContainer = () => {
  const [formData, setFormData] = React.useState<FormData>(initialFormData);
  const [submittedData, setSubmittedData] = React.useState<FormData[]>([]);
  const [selectedServiceType, setSelectedServiceType] = React.useState<ServiceTypes | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);      
  };

  const handleDecimalNumberChange = (name: string, numberValue: number) => {
    const newFormData = { ...formData, [name]: numberValue };
  
    if (!isNaN(newFormData.difference)) {
      // Calculate the calculated price
      newFormData.calculated = newFormData.difference * newFormData.price;
      newFormData.sum = newFormData.calculated + newFormData.additionalTax;
    }

    setFormData(newFormData);
  }

  const handleNumberChange = (name: string, numberValue: number) => {
    let newFormData = { ...formData, [name]: numberValue };
  
    if (!isNaN(newFormData.before) && !isNaN(newFormData.after)) {
      // Calculate the difference
      newFormData.difference = newFormData.after - newFormData.before;
    }      
  
    if (!isNaN(newFormData.difference) && !isNaN(newFormData.price)) {
      // Calculate the calculated price
      newFormData.calculated = newFormData.difference * newFormData.price;
    }
  
    setFormData(newFormData);
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
    setSubmittedData([...submittedData, formData]);
    setFormData(initialFormData);
  };

  return (
    <FormDataContext.Provider value={{ formData, handleChange, handleSelect, handleTypeSelect, handleNumberChange, handleDecimalNumberChange, submittedData, selectedServiceType }}>
      <ComuteForm onSubmit={handleSubmit} />
      <hr></hr>
      <FormDataDisplay />
    </FormDataContext.Provider>
  );
};

export default FormContainer;
