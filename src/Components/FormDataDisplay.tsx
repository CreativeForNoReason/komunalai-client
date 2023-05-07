import { useContext } from 'react';
import { FormDataContext } from './FormContainer';
import Table from 'react-bootstrap/esm/Table';

const FormDataDisplay = () => {
  // Consume form data from the context
  const { submittedData } = useContext(FormDataContext);

  return (
    <Table striped bordered hover>
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
    </Table>
  );
};

export default FormDataDisplay;
