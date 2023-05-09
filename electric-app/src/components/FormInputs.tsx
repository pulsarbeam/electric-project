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
      <input
        type="text"
        placeholder="Enter Electricans Name"
        value={data.worker}
        onChange={handleChange}
        name="worker"
      />
      <input
        type="text"
        placeholder="Enter Electricians Registration Number"
        value={data.regNum}
        onChange={handleChange}
        name="regNum"
      />
      <input
        type="text"
        placeholder="Enter Electricians Phone Number"
        value={data.phoneNum}
        onChange={handleChange}
        name="phoneNum"
      />
      <input
        type="text"
        placeholder="Enter Electricians Email Address"
        value={data.email}
        onChange={handleChange}
        name="email"
      />
    </div>
  )
}

export default FormInputs
