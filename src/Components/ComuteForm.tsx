import React, { useContext } from 'react';
import './Comute.css';
import TableRow from './TableRow';
import { FormDataContext } from './FormContainer';

interface ComuteFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ComuteForm: React.FC<ComuteFormProps> = ({ onSubmit }) => {
  const { formData, handleChange } = useContext(FormDataContext);

  return (
  <form onSubmit={onSubmit}>
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
