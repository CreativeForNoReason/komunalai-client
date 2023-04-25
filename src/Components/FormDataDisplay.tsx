import { useContext } from 'react';
import { FormDataContext } from './ComuteForm';

const FormDataDisplay = () => {
  // Consume form data from the context
  const { formData } = useContext(FormDataContext);

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
          <td>{formData.firstName}</td>
          <td>{formData.lastName}</td>
          <td>{formData.email}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default FormDataDisplay;
