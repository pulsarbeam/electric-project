import { useRef, useState } from 'react'
import { pdf } from '@react-pdf/renderer'

import PdfDocument from './PdfDocument'
import { FormValues } from '../models'

function Form() {
  const formRef = useRef<HTMLFormElement>(null)
  const [isChecked, setIsChecked] = useState(false)

  const labels = [
    'Alteration',
    'Addition',
    'New Work',
    'Low Risk',
    'General',
    'High Risk',
  ]

  const [checkboxStates, setCheckboxStates] = useState(new Array(6).fill(false))

  const handleCheckboxChange = (index: number) => {
    const newCheckboxStates = [...checkboxStates]
    newCheckboxStates[index] = !newCheckboxStates[index]
    setCheckboxStates(newCheckboxStates)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(checkboxStates)
    if (!formRef.current?.checkValidity()) {
      return
    }

    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(
      formData.entries()
    ) as unknown as FormValues['data']
    const pdfDoc = <PdfDocument data={data} checkboxStates={checkboxStates} />
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
          {/* Referacne number and client details */}

          <input
            className="border border-gray-300 rounded-lg p-2 text-left w-full"
            type="text"
            placeholder="Enter Reference Number"
            name="ref"
          />

          <div className="grid grid-cols-2 gap-8">
            <input
              className="border border-gray-300 rounded-lg p-2 text-left w-full"
              type="text"
              placeholder="Client Location"
              name="location"
            />
            <input
              className="border border-gray-300 rounded-lg p-2 text-left w-full"
              type="text"
              placeholder="Client's Contact Details"
              name="contact"
            />
          </div>

          {/* Electrician Details */}
          <div className="grid grid-cols-2 gap-8">
            <input
              className="border border-gray-300 rounded-lg p-2 text-left w-full"
              type="text"
              placeholder="Electrician's Name"
              name="worker"
            />

            <input
              className="border border-gray-300 rounded-lg p-2 text-left w-full"
              type="text"
              placeholder="Enter Electrician's Registration Number"
              name="regNum"
            />

            <input
              className="border border-gray-300 rounded-lg p-2 text-left w-full"
              type="text"
              placeholder="Electrician's Phone Number"
              name="phoneNum"
            />

            <input
              className="border border-gray-300 rounded-lg p-2 text-left w-full"
              type="email"
              placeholder="Enter Electrician's Email Address"
              name="email"
            />

            <input
              className="border border-gray-300 rounded-lg p-2 text-left w-full"
              type="text"
              placeholder="Name of Electricial Helper"
              name="aeName"
            />

            <input
              className="border border-gray-300 rounded-lg p-2 text-left w-full"
              type="text"
              placeholder="Electricial Helper Registration Number"
              name="aeRegNum"
            />
          </div>
        </div>
        <div className="border-2 border-slate-400 rounded-xl px-3  my-5">
          <h3 className="text-xl font-bold">Certificate of Compliance</h3>

          <div className="grid grid-cols-4 ">
            <p>Type of Work: </p>

            {checkboxStates.slice(0, 3).map((checkboxStates, index) => (
              <div key={`checkbox-${index}`}>
                <input
                  type="checkbox"
                  name={`checkbox-${index}`}
                  id={`checkbox-${index}`}
                  checked={checkboxStates}
                  onChange={() => handleCheckboxChange(index)}
                />
                <label htmlFor={`checkbox-${index}`}>{labels[index]}</label>
              </div>
            ))}

            <p>The Prescribed Electrical Work is:</p>
            {checkboxStates.slice(3, 6).map((checkboxStates, index) => (
              <div key={`checkbox-${index + 3}`}>
                <input
                  type="checkbox"
                  name={`checkbox-${index + 3}`}
                  id={`checkbox-${index + 3}`}
                  checked={checkboxStates}
                  onChange={() => handleCheckboxChange(index + 3)}
                />
                <label htmlFor={`checkbox-${index + 3}`}>
                  {labels[index + 3]}
                </label>
              </div>
            ))}
          </div>
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
