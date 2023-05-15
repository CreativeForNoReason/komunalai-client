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
  submittedData: FormData;
  selectedServiceType: ServiceTypes | null;
  priceInput: string;
  additionalTax: string;
}>({
  formData: initialFormData,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
  handleSelect: (e: React.ChangeEvent<HTMLSelectElement>) => {},
  handleTypeSelect: (e: React.ChangeEvent<HTMLSelectElement>) => {},
  handleNumberChange: (name: string, numberValue: number) => {},
  submittedData: initialFormData,
  selectedServiceType: null,
  priceInput: '',
  additionalTax: ''
});

const FormContainer = () => {
  const [formData, setFormData] = React.useState<FormData>(initialFormData);
  const [submittedData, setSubmittedData] = React.useState<FormData>(initialFormData);
  const [selectedServiceType, setSelectedServiceType] = React.useState<ServiceTypes | null>(null);
  const [priceInput, setPriceInput] = React.useState('');
  const [additionalTax, setAdditionalTax] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
  
    if (name === "price") {
      // Allow only numeric values and a single decimal point
      const stringValue = value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
      setPriceInput(stringValue);  
  
      // Also update the formData, converting the value to a number
      const numberValue = Number(stringValue);
      const newFormData = { ...formData, [name]: numberValue };
  
      if (!isNaN(newFormData.difference)) {
        // Calculate the calculated price
        newFormData.calculated = newFormData.difference * newFormData.price;
        newFormData.sum = newFormData.calculated;
      }
  
      setFormData(newFormData);
    } else if (name === "additionalTax") {
      // Allow only numeric values and a single decimal point
      const stringValue = value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
      setAdditionalTax(stringValue);  
  
      // Also update the formData, converting the value to a number
      const numberValue = Number(stringValue);
      const newFormData = { ...formData, [name]: numberValue };
      newFormData.sum += numberValue;

      setFormData(newFormData);
    } else {
      const newFormData = { ...formData, [name]: value };
      setFormData(newFormData);
    }    
  };

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
    setSubmittedData(formData);
    setFormData(initialFormData);
  };

  return (
    <FormDataContext.Provider value={{ formData, handleChange, handleSelect, handleTypeSelect, handleNumberChange, submittedData, selectedServiceType, priceInput, additionalTax }}>
      <ComuteForm onSubmit={handleSubmit} />
      <hr></hr>
      <FormDataDisplay />
    </FormDataContext.Provider>
  );
};

export default FormContainer;
