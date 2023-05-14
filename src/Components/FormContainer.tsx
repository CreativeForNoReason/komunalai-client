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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
  
    let newFormData;
  
    if (name === "before" || name === "after") {
      // Ensure value is a number for specific fields
      const numberValue = value === "" ? 0 : Number(value);
      newFormData = { ...formData, [name]: numberValue };  
  
      if (!isNaN(newFormData.before) && !isNaN(newFormData.after)) {
        // Calculate the difference
        newFormData.difference = newFormData.after - newFormData.before;
      }      
  
      if (!isNaN(newFormData.difference) && !isNaN(Number(newFormData.price))) {
        // Calculate the calculated price
        newFormData.calculated = newFormData.difference * Number(newFormData.price);
      }
    } else if (name === "price") {
      // Allow only numeric values and a single decimal point
      const stringValue = value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
      newFormData = { ...formData, [name]: Number(stringValue) };  
  
      if (!isNaN(newFormData.difference) && !isNaN(Number(newFormData.price))) {
        // Calculate the calculated price
        newFormData.calculated = newFormData.difference * Number(newFormData.price);
      }
  
    } else {
      // Handle non-numeric fields
      newFormData = { ...formData, [name]: value };
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
    setSubmittedData(formData);
    setFormData(initialFormData);
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
