import { useContext } from 'react';
import { FormDataContext } from './FormContainer';

const FormDataDisplay = () => {
  // Consume form data from the context
  const { submittedData } = useContext(FormDataContext);

  return (
    <table className="form-data-display">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{submittedData.firstName}</td>
          <td>{submittedData.lastName}</td>
          <td>{submittedData.email}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default FormDataDisplay;
