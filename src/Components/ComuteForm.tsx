import React, { useContext, useState } from 'react';
import './Comute.css';
import { FormDataContext } from './FormContainer';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/esm/Form';
import Container from 'react-bootstrap/esm/Container';
import InputGroup from 'react-bootstrap/esm/InputGroup';
import { ServiceSubTypes, ServiceTypes } from '../Types/ServiceTypes';
import NumberInput from './FormFields/NumberInput';
import DecimalInput from './FormFields/DecimalInput';

interface ComuteFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ComuteForm: React.FC<ComuteFormProps> = ({ onSubmit }) => {
  const { formData, handleChange, handleSelect, handleTypeSelect, selectedServiceType } = useContext(FormDataContext);
  const [priceInput, setPriceInput] = React.useState('');
  const [additionalTax, setAdditionalTax] = React.useState('');

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
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="date">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="type">
          <Form.Label>Type</Form.Label>
          <Form.Select name="type" value={formData.type} onChange={handleTypeSelect} required>
            <option value="">Select a Service Type</option>
            {Object.values(ServiceTypes).map((provider) => (
              <option value={provider} key={provider}>
                {provider}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="commune">
          <Form.Label>Commune</Form.Label>
          <Form.Select name="commune" value={formData.commune} onChange={handleSelect} required>
            <option value="">Select a Commune</option>
            {selectedServiceType && ServiceSubTypes[selectedServiceType].map((subtype) => (
              <option value={subtype} key={subtype}>
                {subtype}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="before">
          <Form.Label>Before</Form.Label>
          <NumberInput name="before" value={formData.before}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="after">
          <Form.Label>After</Form.Label>
          <NumberInput name="after" value={formData.after} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="difference">
          <Form.Label>Difference</Form.Label>
          <Form.Control
            type="number"
            name="difference"
            value={formData.difference || ''}
            readOnly
          />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Price</Form.Label>
          <InputGroup>
            <DecimalInput name='price' value={priceInput} setInput={setPriceInput} />
            <InputGroup.Text>€</InputGroup.Text>
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3" controlId="calculated">
          <Form.Label>Calculated price</Form.Label>
          <InputGroup>
            <Form.Control
              type="number"
              name="calculated"
              value={formData.calculated || ''}
              readOnly
            />
            <InputGroup.Text>€</InputGroup.Text>
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3" controlId="additionalTax">
          <Form.Label>Additional tax</Form.Label>
          <InputGroup>
            <DecimalInput name='additionalTax' value={additionalTax} setInput={setAdditionalTax} />
            <InputGroup.Text>€</InputGroup.Text>
          </InputGroup>          
        </Form.Group>

        <Form.Group className="mb-3" controlId="sum">
          <Form.Label>Sum</Form.Label>
          <InputGroup>
            <Form.Control
              type="number"
              name="sum"
              value={formData.sum || ''}
              readOnly
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
