import React, { useContext } from 'react';
import { FormDataContext } from './FormContainer';
import Table from 'react-bootstrap/Table';

const FormDataDisplay = () => {
  // Consume form data from the context
  const { submittedData } = useContext(FormDataContext);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Type</th>
          <th>Commune</th>
          <th>Before</th>
          <th>After</th>
          <th>Difference</th>
          <th>Price</th>
          <th>Calculated</th>
          <th>Additional Tax</th>
          <th>Sum</th>
          <th>Payment Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{submittedData.name}</td>
          <td>{submittedData.date}</td>
          <td>{submittedData.type}</td>
          <td>{submittedData.commune}</td>
          <td>{submittedData.before}</td>
          <td>{submittedData.after}</td>
          <td>{submittedData.difference}</td>
          <td>{submittedData.price}</td>
          <td>{submittedData.calculated}</td>
          <td>{submittedData.additionalTax}</td>
          <td>{submittedData.sum}</td>
          <td>{submittedData.paymentDate}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default FormDataDisplay;
