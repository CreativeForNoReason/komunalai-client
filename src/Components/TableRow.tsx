import { ChangeEvent } from 'react';

// TableRow component
interface TableRowProps {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TableRow: React.FC<TableRowProps> = ({
  label,
  id,
  name,
  value,
  onChange,
}) => {
  return (
    <tr>
      <td>
        <label htmlFor={id}>{label}</label>
        <input
          type="text"
          id={id}
          name={name}
          value={value}
          onChange={onChange}
        />
      </td>
    </tr>
  );
};

export default TableRow;
