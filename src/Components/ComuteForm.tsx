import React, { useState } from 'react';
import './Comute.css';
import TableRow from './TableRow';

// Define TypeScript typings for form data
type FormData = {
  firstName: string;
  lastName: string;
  email: string;
};

const ComuteForm = () => {
  const [formData, setFormData] = useState<FormData>({
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
    // Here, you can save the form data using an API call, local storage, or any other method
    console.log('Form data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <table className="custom-table">
        <tbody>
          <TableRow
            label="First Name"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <TableRow
            label="Last Name"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <TableRow
            label="Email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </tbody>
      </table>

      <button type="submit">Save</button>
    </form>
  );
};

export default ComuteForm;
