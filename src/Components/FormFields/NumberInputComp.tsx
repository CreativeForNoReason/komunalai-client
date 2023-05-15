import { useContext } from "react";
import { Form } from "react-bootstrap";
import { FormDataContext } from "../FormContainer";

interface NumberInputProps {
    name: string;
    value: number;
}

const NumberInputComp: React.FC<NumberInputProps> = ({ name, value }) => {
    const { handleNumberChange } = useContext(FormDataContext);  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      const numberValue = value === "" ? 0 : Number(value);
      handleNumberChange(name, numberValue);
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
  
export default NumberInputComp;
