import { Props } from '../models'

const FormInputs: React.FC<Props> = ({ data, handleChange }) => {
  return (
    <div className="rounded-lg bg-white p-10">
      <form>
        <div className="grid grid-cols-1 gap-8">
          <input
            className="border border-gray-300 rounded-lg p-2 text-left w-full"
            type="text"
            placeholder="Enter Reference Number"
            value={data.ref}
            onChange={handleChange}
            name="ref"
          />

          <div className="grid grid-cols-2 gap-8">
            <input
              className="border border-gray-300 rounded-lg p-2 text-left w-full"
              type="text"
              placeholder="Client Location"
              value={data.location}
              onChange={handleChange}
              name="location"
            />
            <input
              className="border border-gray-300 rounded-lg p-2 text-left w-full"
              type="text"
              placeholder="Client's Contact Details"
              value={data.contact}
              onChange={handleChange}
              name="contact"
            />
          </div>

          <input
            className="border border-gray-300 rounded-lg p-2 text-left w-full"
            type="text"
            placeholder="Electrician's Name"
            value={data.worker}
            onChange={handleChange}
            name="worker"
          />

          <input
            className="border border-gray-300 rounded-lg p-2 text-left w-full"
            type="text"
            placeholder="Enter Electrician's Registration Number"
            value={data.regNum}
            onChange={handleChange}
            name="regNum"
          />

          <input
            className="border border-gray-300 rounded-lg p-2 text-left w-full"
            type="text"
            placeholder="Electrician's Phone Number"
            value={data.phoneNum}
            onChange={handleChange}
            name="phoneNum"
          />

          <input
            className="border border-gray-300 rounded-lg p-2 text-left w-full"
            type="text"
            placeholder="Enter Electrician's Email Address"
            value={data.email}
            onChange={handleChange}
            name="email"
          />
        </div>
      </form>
    </div>
  )
}

export default FormInputs
