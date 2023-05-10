import React, { useContext } from 'react';
import './Comute.css';
import { FormDataContext } from './FormContainer';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/esm/Form';
import Container from 'react-bootstrap/esm/Container';
import InputGroup from 'react-bootstrap/esm/InputGroup';
import { ServiceTypes } from '../Types/ServiceTypes';

interface ComuteFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ComuteForm: React.FC<ComuteFormProps> = ({ onSubmit }) => {
  const { formData, handleChange, handleSelect } = useContext(FormDataContext);

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="date">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="type">
          <Form.Label>Type</Form.Label>
          <Form.Select name="type" value={formData.type} onChange={handleSelect}>
            <option>Select a Service Type</option>
            {Object.values(ServiceTypes).map((provider) => (
              <option value={provider} key={provider}>
                {provider}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="commune">
          <Form.Label>Commune</Form.Label>
          <Form.Control
            type="text"
            name="commune"
            value={formData.commune}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="before">
          <Form.Label>Before</Form.Label>
          <Form.Control
            type="number"
            name="before"
            value={formData.before}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="after">
          <Form.Label>After</Form.Label>
          <Form.Control
            type="number"
            name="after"
            value={formData.after}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="difference">
          <Form.Label>Difference</Form.Label>
          <Form.Control
            type="number"
            name="difference"
            value={formData.difference}
            onChange={handleChange}
          />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Price</Form.Label>
          <InputGroup>
            <Form.Control
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
            <InputGroup.Text>€</InputGroup.Text>
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3" controlId="calculated">
          <Form.Label>Calculated price</Form.Label>
          <InputGroup>
            <Form.Control
              type="number"
              name="calculated"
              value={formData.calculated}
              onChange={handleChange}
            />
            <InputGroup.Text>€</InputGroup.Text>
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3" controlId="additionalTax">
          <Form.Label>Additional tax</Form.Label>
          <InputGroup>
            <Form.Control
              type="number"
              name="additionalTax"
              value={formData.additionalTax}
              onChange={handleChange}
            />
            <InputGroup.Text>€</InputGroup.Text>
          </InputGroup>          
        </Form.Group>

        <Form.Group className="mb-3" controlId="sum">
          <Form.Label>Sum</Form.Label>
          <InputGroup>
            <Form.Control
              type="number"
              name="sum"
              value={formData.sum}
              onChange={handleChange}
            />
            <InputGroup.Text>€</InputGroup.Text>
          </InputGroup>             
        </Form.Group>

        <Form.Group className="mb-3" controlId="date">
          <Form.Label>Payment date</Form.Label>
          <Form.Control
            type="date"
            name="paymentDate"
            value={formData.paymentDate}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="comment">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            as="textarea"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Other form fields go here */}

        <Button variant="outline-primary" type="submit">
          Save
        </Button>
      </Form>
    </Container>
  );
};

export default ComuteForm;
