import { useRef, useState } from 'react'
import { pdf } from '@react-pdf/renderer'

import PdfDocument from './PdfDocument'
import { FormValues } from '../models'
import { labels } from '../labels'

function Form() {
  const formRef = useRef<HTMLFormElement>(null)

  const [checkboxStates, setCheckboxStates] = useState(
    new Array(24).fill(false)
  )

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
        <div className="border-2 border-slate-400 rounded-xl p-3  my-5 m">
          <h3 className="text-xl font-bold">Certificate of Compliance</h3>

          <div className="grid grid-cols-4 ">
            <p className="font-bold text-sm">Type of Work: </p>

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

            <p className="font-bold text-sm">
              The Prescribed Electrical Work is:
            </p>
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
          <input
            className="border border-gray-300 rounded-lg my-2  text-left w-full"
            type="text"
            placeholder="High Risk Work Description"
            name="hrWork"
          />
          <div className="flex flex-row  space-x-4 ">
            <p className="font-bold">Means of Compliance:</p>
            {checkboxStates.slice(6, 8).map((checkboxStates, index) => (
              <div key={`checkbox-${index + 6}`}>
                <input
                  type="checkbox"
                  name={`checkbox-${index + 6}`}
                  id={`checkbox-${index + 6}`}
                  checked={checkboxStates}
                  onChange={() => handleCheckboxChange(index + 6)}
                />
                <label htmlFor={`checkbox-${index + 6}`}>
                  {labels[index + 6]}
                </label>
              </div>
            ))}
          </div>
          <div>
            <div className="flex flex-row  space-x-3 ">
              <p className="font-bold">
                Additional Standards or electrical code of practice were
                required:
              </p>
              {checkboxStates.slice(8, 10).map((checkboxStates, index) => (
                <div key={`checkbox-${index + 8}`}>
                  <input
                    type="checkbox"
                    name={`checkbox-${index + 8}`}
                    id={`checkbox-${index + 8}`}
                    checked={checkboxStates}
                    onChange={() => handleCheckboxChange(index + 8)}
                  />
                  <label htmlFor={`checkbox-${index + 8}`}>
                    {labels[index + 8]}
                  </label>
                </div>
              ))}
              <p>Speicify:</p>
              <input
                className="border border-gray-300 rounded-lg  text-left w-1/4"
                type="text"
                placeholder="Additional Standards"
                name="standards"
              />
            </div>
          </div>
          <div className="flex flex-row justify-between mt-2">
            <p className="font-bold">
              Date or range of dates that prescribed electrical work undertaken:
            </p>
            <input
              className="border border-gray-300 rounded-lg  text-left w-1/4 mr-[7.3%]"
              type="text"
              placeholder="Date Range"
              name="dateRange"
            />
          </div>
          <div className="flex flex-row  space-x-3 ">
            <p className="font-bold">
              Contains fittings that are safe to connect to a power supply?
            </p>
            {checkboxStates.slice(10, 12).map((checkboxStates, index) => (
              <div key={`checkbox-${index + 10}`} className="">
                <input
                  type="checkbox"
                  name={`checkbox-${index + 10}`}
                  id={`checkbox-${index + 10}`}
                  checked={checkboxStates}
                  onChange={() => handleCheckboxChange(index + 10)}
                />
                <label htmlFor={`checkbox-${index + 10}`}>
                  {labels[index + 10]}
                </label>
              </div>
            ))}
          </div>
          <div className="flex flex-row justify-between">
            <p className="font-bold">Specify type of supply system:</p>
            <input
              className="border border-gray-300 rounded-lg  text-left w-2/3"
              type="text"
              placeholder="Type of Supply System"
              name="supplySystem"
            />
          </div>
        </div>

        <div className="flex justify-center space-x-5">
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
