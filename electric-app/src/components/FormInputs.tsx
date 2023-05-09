import { Props } from '../models'

// interface FormInputsProps {
//   formData: {
//     name: string,
//     email: string,
//     phone: string
//   };
//   handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
// }

const FormInputs: React.FC<Props> = ({ data, handleChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Referance Number"
        value={data.ref}
        onChange={handleChange}
        name="ref"
      />
      <input
        type="text"
        placeholder="Enter Client Location"
        value={data.location}
        onChange={handleChange}
        name="location"
      />
      <input
        type="text"
        placeholder="Enter Clients Contact Details"
        value={data.contact}
        onChange={handleChange}
        name="contact"
      />
    </div>
  )
}

export default FormInputs
