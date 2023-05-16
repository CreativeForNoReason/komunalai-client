import { useContext } from "react";
import { Form } from "react-bootstrap";
import { FormDataContext } from "../FormContainer";
import React from "react";

interface DecimalInputProps {
    name: string;
    value: string;
    setInput: (input: string) => void;
}

const DecimalInput: React.FC<DecimalInputProps> = ({ name, value, setInput }) => {
    const { handleDecimalNumberChange } = useContext(FormDataContext);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        // Allow only numeric values and a single decimal point
        const stringValue = value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
        setInput(stringValue);  
  
        // Also update the formData, converting the value to a number
        const numberValue = Number(stringValue);
        handleDecimalNumberChange(name, numberValue);
    };

    return (
        <Form.Control
            type="text"
            name={name}
            value={value}
            onChange={handleChange}
        />
    );
};

export default DecimalInput;