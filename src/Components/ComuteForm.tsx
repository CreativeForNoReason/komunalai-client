import React, { useContext } from 'react';
import './Comute.css';
import { FormDataContext } from './FormContainer';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/esm/Form';
import Container from 'react-bootstrap/esm/Container';

interface ComuteFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ComuteForm: React.FC<ComuteFormProps> = ({ onSubmit }) => {
  const { formData, handleChange } = useContext(FormDataContext);

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="outline-primary" type="submit">
          Save
        </Button>
      </Form>
    </Container>
  );
};

export default ComuteForm;
