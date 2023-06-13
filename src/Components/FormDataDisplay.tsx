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
        {submittedData.map((data, index) => (
          <tr key={index}>
            <td>{data.name}</td>
            <td>{data.date}</td>
            <td>{data.type}</td>
            <td>{data.commune}</td>
            <td>{data.before}</td>
            <td>{data.after}</td>
            <td>{data.difference}</td>
            <td>{data.price}</td>
            <td>{data.calculated}</td>
            <td>{data.additionalTax}</td>
            <td>{data.sum}</td>
            <td>{data.paymentDate}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default FormDataDisplay;
