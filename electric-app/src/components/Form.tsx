import { useRef, useState } from 'react'
import { pdf } from '@react-pdf/renderer'
import { styles } from '../formstyles'
import PdfDocument from './PdfDocument'
import { FormValues } from '../models'

function Form() {
  const formRef = useRef<HTMLFormElement>(null)
  const [isChecked, setIsChecked] = useState(false)
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!formRef.current?.checkValidity()) {
      // Form is invalid, do not submit
      return
    }

    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(
      formData.entries()
    ) as unknown as FormValues['data']
    const pdfDoc = <PdfDocument data={data} isChecked={isChecked} />
    const blob = await pdf(pdfDoc).toBlob()

    const url = URL.createObjectURL(blob)
    window.open(url, '_blank')
  }

  return (
    <div className="flex flex-col justify-center rounded-div">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="rounded-lg bg-white p-10"
      >
        <div className="grid grid-cols-1 gap-8">
          <input
            className="border border-gray-300 rounded-lg p-2 text-left w-full"
            type="text"
            placeholder="Enter Reference Number"
            name="ref"
            required
          />

          <div className="grid grid-cols-2 gap-8">
            <input
              className="border border-gray-300 rounded-lg p-2 text-left w-full"
              type="text"
              placeholder="Client Location"
              name="location"
              required
            />
            <input
              className="border border-gray-300 rounded-lg p-2 text-left w-full"
              type="text"
              placeholder="Client's Contact Details"
              name="contact"
              required
            />
          </div>

          <input
            className="border border-gray-300 rounded-lg p-2 text-left w-full"
            type="text"
            placeholder="Electrician's Name"
            name="worker"
            required
          />

          <input
            className="border border-gray-300 rounded-lg p-2 text-left w-full"
            type="text"
            placeholder="Enter Electrician's Registration Number"
            name="regNum"
            required
          />

          <input
            className="border border-gray-300 rounded-lg p-2 text-left w-full"
            type="text"
            placeholder="Electrician's Phone Number"
            name="phoneNum"
            required
          />

          <input
            className="border border-gray-300 rounded-lg p-2 text-left w-full"
            type="email"
            placeholder="Enter Electrician's Email Address"
            name="email"
            required
          />
          <input
            className="ml-2"
            type="checkbox"
            name="checked"
            id="checked"
            checked={isChecked} // bind checked state to the checkbox input
            onChange={(e) => setIsChecked(e.target.checked)} // update state when the checkbox is toggled
          ></input>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 my-8 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form
