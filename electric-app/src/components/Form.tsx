import { useRef, useState } from 'react'
import { pdf } from '@react-pdf/renderer'
import SignatureCanvas from 'react-signature-canvas'

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
    <div>
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
              placeholder=" Enter Reference Numbers! e.g. 1234/2021"
              name="ref"
            />

            <div className="grid grid-cols-2 gap-8">
              <input
                className="border border-gray-300 rounded-lg p-2 text-left w-full"
                type="text"
                placeholder=" Client Location"
                name="location"
              />
              <input
                className="border border-gray-300 rounded-lg p-2 text-left w-full"
                type="text"
                placeholder=" Client's Contact Details"
                name="contact"
              />
            </div>

            {/* Electrician Details */}
            <div className="grid grid-cols-2 gap-8">
              <input
                className="border border-gray-300 rounded-lg p-2 text-left w-full"
                type="text"
                placeholder=" Electrician's Name"
                name="worker"
              />

              <input
                className="border border-gray-300 rounded-lg p-2 text-left w-full"
                type="text"
                placeholder=" Enter Electrician's Registration Number"
                name="regNum"
              />

              <input
                className="border border-gray-300 rounded-lg p-2 text-left w-full"
                type="text"
                placeholder=" Electrician's Phone Number"
                name="phoneNum"
              />

              <input
                className="border border-gray-300 rounded-lg p-2 text-left w-full"
                type="email"
                placeholder=" Enter Electrician's Email Address"
                name="email"
              />

              <input
                className="border border-gray-300 rounded-lg p-2 text-left w-full"
                type="text"
                placeholder=" Name of Electricial Helper"
                name="aeName"
              />

              <input
                className="border border-gray-300 rounded-lg p-2 text-left w-full"
                type="text"
                placeholder=" Electricial Helper Registration Number"
                name="aeRegNum"
              />
            </div>
          </div>
          <div className="border-2 border-slate-400 rounded-xl p-3  my-5">
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
              placeholder=" High Risk Work Description"
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
                  placeholder=" Additional Standards"
                  name="standards"
                />
              </div>
            </div>
            <div className="flex flex-row  space-x-[185px] mt-2">
              <p className="font-bold">
                Date or range of dates that prescribed electrical work
                undertaken:
              </p>
              <input
                className="border border-gray-300 rounded-lg  text-left w-1/4"
                type="text"
                placeholder=" Date Range"
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
            <div className="flex flex-row  space-x-3 ">
              <p className="font-bold">
                The installation has an earthing system that is correctly rated
                (where applicable)
              </p>
              {checkboxStates.slice(12, 14).map((checkboxStates, index) => (
                <div key={`checkbox-${index + 12}`} className="">
                  <input
                    type="checkbox"
                    name={`checkbox-${index + 12}`}
                    id={`checkbox-${index + 12}`}
                    checked={checkboxStates}
                    onChange={() => handleCheckboxChange(index + 12)}
                  />
                  <label htmlFor={`checkbox-${index + 12}`}>
                    {labels[index + 12]}
                  </label>
                </div>
              ))}
            </div>
            <div className="flex flex-row  space-x-3 ">
              <p className="font-bold">
                What parts of the installation are safe to connect to power?
              </p>
              {checkboxStates.slice(14, 16).map((checkboxStates, index) => (
                <div key={`checkbox-${index + 14}`} className="">
                  <input
                    type="checkbox"
                    name={`checkbox-${index + 14}`}
                    id={`checkbox-${index + 14}`}
                    checked={checkboxStates}
                    onChange={() => handleCheckboxChange(index + 14)}
                  />
                  <label htmlFor={`checkbox-${index + 14}`}>
                    {labels[index + 14]}
                  </label>
                </div>
              ))}
              <input
                className="border border-gray-300 rounded-lg  text-left w-1/3"
                type="text"
                placeholder="Specify Parts"
                name="parts"
              />
            </div>
            <div className="flex flex-row flex-wrap justify-between space-x-3">
              <p className="font-bold">
                The work relies on manufacturers instructions:
              </p>
              {checkboxStates.slice(16, 18).map((checkboxStates, index) => (
                <div key={`checkbox-${index + 16}`} className="">
                  <input
                    type="checkbox"
                    name={`checkbox-${index + 16}`}
                    id={`checkbox-${index + 16}`}
                    checked={checkboxStates}
                    onChange={() => handleCheckboxChange(index + 16)}
                  />
                  <label htmlFor={`checkbox-${index + 16}`}>
                    {labels[index + 16]}
                  </label>
                </div>
              ))}
              <p>
                If yes – identify the instruction manual including name, date
                and version. Also attach a copy of manufacturer’s instructions
                to this certificate. (Or provide reference to readily accessible
                electronic format, eg Internet link.)
              </p>

              <input
                className="border border-gray-300 rounded-lg w-full text-left m-2"
                type="text"
                placeholder=" Identify"
                name="identify1"
              />
              <input
                className="border border-gray-300 rounded-lg w-full text-left m-2"
                type="text"
                placeholder=" Link"
                name="link1"
              />
            </div>

            <div className="flex flex-row flex-wrap  justify-between space-x-3">
              <p className="font-bold">
                The work has been done in accordance with a certified design:
              </p>
              {checkboxStates.slice(18, 20).map((checkboxStates, index) => (
                <div key={`checkbox-${index + 18}`} className="">
                  <input
                    type="checkbox"
                    name={`checkbox-${index + 18}`}
                    id={`checkbox-${index + 18}`}
                    checked={checkboxStates}
                    onChange={() => handleCheckboxChange(index + 18)}
                  />
                  <label htmlFor={`checkbox-${index + 18}`}>
                    {labels[index + 18]}
                  </label>
                </div>
              ))}
              <p>
                If yes – identify the certified design including name, date and
                version. Also attach a copy of the certified design to this
                certificate. (Or provide reference to readily accessible
                electronic format, eg Internet link.)
              </p>

              <input
                className="border border-gray-300 rounded-lg w-full text-left m-2"
                type="text"
                placeholder=" Identify"
                name="identify2"
              />
              <input
                className="border border-gray-300 rounded-lg w-full text-left m-2"
                type="text"
                placeholder=" Link"
                name="link2"
              />
            </div>
            <div className="flex flex-row flex-wrap  justify-between space-x-3">
              <p className="font-bold">
                The work relies on a Supplier Declaration of Conformity (SDoC):
              </p>
              {checkboxStates.slice(20, 22).map((checkboxStates, index) => (
                <div key={`checkbox-${index + 20}`} className="">
                  <input
                    type="checkbox"
                    name={`checkbox-${index + 20}`}
                    id={`checkbox-${index + 20}`}
                    checked={checkboxStates}
                    onChange={() => handleCheckboxChange(index + 20)}
                  />
                  <label htmlFor={`checkbox-${index + 20}`}>
                    {labels[index + 20]}
                  </label>
                </div>
              ))}
              <p>
                If yes ‐ identify the SDoC including name, date and version OR
                EESS registration. Also attach a copy of the SDoC to this
                certificate. (Or provide reference to readily accessible
                electronic format, eg Internet link.)
              </p>

              <input
                className="border border-gray-300 rounded-lg w-full text-left m-2"
                type="text"
                placeholder=" Identify"
                name="identify3"
              />
              <input
                className="border border-gray-300 rounded-lg w-full text-left m-2"
                type="text"
                placeholder=" Link"
                name="link3"
              />
            </div>
            <div className="flex flex-row  space-x-3 ">
              <p className="font-bold">
                The installation has been satisfactorily tested in accordance
                with the Electricity (Safety) Regulations 2010
              </p>
              {checkboxStates.slice(22, 24).map((checkboxStates, index) => (
                <div key={`checkbox-${index + 22}`} className="">
                  <input
                    type="checkbox"
                    name={`checkbox-${index + 22}`}
                    id={`checkbox-${index + 22}`}
                    checked={checkboxStates}
                    onChange={() => handleCheckboxChange(index + 22)}
                  />
                  <label htmlFor={`checkbox-${index + 22}`}>
                    {labels[index + 22]}
                  </label>
                </div>
              ))}
            </div>
            <div>
              <p className="font-bold">Description of Work:</p>
              <textarea
                className="border border-gray-300 rounded-lg w-full text-left m-2"
                name="description"
              />
            </div>
            <div>
              <p className="font-bold flex justify-center">Test Results</p>
              <div className="flex flex-col space-y-3">
                <input
                  className="border border-gray-300 rounded-lg  text-left w-2/3"
                  type="text"
                  placeholder="Polarity Independant Earth"
                  name="polarity"
                />
                <input
                  className="border border-gray-300 rounded-lg  text-left w-2/3"
                  type="text"
                  placeholder="Insulation Resistance"
                  name="resistance"
                />
                <input
                  className="border border-gray-300 rounded-lg  text-left w-2/3"
                  type="text"
                  placeholder="Earth Continuity"
                  name="continuity"
                />
                <input
                  className="border border-gray-300 rounded-lg  text-left w-2/3"
                  type="text"
                  placeholder="Bonding"
                  name="bonding"
                />
                <input
                  className="border border-gray-300 rounded-lg  text-left w-2/3"
                  type="text"
                  placeholder="Fault Loop Impedance"
                  name="fault"
                />
                <input
                  className="border border-gray-300 rounded-lg  text-left w-2/3"
                  type="text"
                  placeholder="Other"
                  name="other"
                />
              </div>
            </div>

            <div className="grid grid-cols-4 my-5">
              <p className="font-bold flex items-center justify-end space-x-3">
                Certifiers Signiture:
              </p>
              <div className="bg-slate-300 max-w-[200px] max-h-[50px] rounded-xl flex flex-row">
                <SignatureCanvas
                  penColor="black"
                  canvasProps={{
                    width: 200,
                    height: 50,
                  }}
                />
              </div>
              <p className="font-bold flex items-center justify-end space-x-3">
                Date:
              </p>
              <input
                className="border border-gray-300 rounded-lg text-left "
                type="text"
                placeholder="Date"
                name="date"
              />
            </div>
          </div>

          <div className="border-2 border-slate-400 rounded-xl p-3  my-5">
            <p className="font-bold text-xl">Electrical Safety Certificate</p>
            <div>
              <p className="font-medium">
                By signing this document I certify that the installation, or
                part of the installation, to which this Electrical Safety
                Certificate applies is connected to a power supply and is safe
                to use.
              </p>
              <div className="flex flex-row flex-wrap justify-around ">
                <div>
                  <p>Certifiers Name:</p>
                  <input
                    className="border border-gray-300 rounded-lg  text-left py-4"
                    type="text"
                    placeholder="Certifier' Name"
                    name="certiName"
                  />
                  <p>Registration/Practising licence number:</p>
                  <input
                    className="border border-gray-300 rounded-lg  text-left py-4"
                    type="text"
                    placeholder="Registration Number"
                    name="reg2"
                  />
                </div>
                <div>
                  <p>Certifier’s signature:</p>
                  <div className="bg-slate-300 max-w-[200px] max-h-[50px] rounded-xl flex flex-row">
                    <SignatureCanvas
                      penColor="black"
                      canvasProps={{
                        width: 200,
                        height: 50,
                      }}
                    />
                  </div>
                </div>
                <div>
                  <p>Certificate Issue Date:</p>
                  <input
                    className="border border-gray-300 rounded-lg  text-left py-4"
                    type="text"
                    placeholder="Certificate Issue Date"
                    name="certIssue"
                  />
                </div>
                <div>
                  <p>Connection Date:</p>
                  <input
                    className="border border-gray-300 rounded-lg  text-left py-4"
                    type="text"
                    placeholder="Connection Date"
                    name="connectDate"
                  />
                </div>
              </div>
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
    </div>
  )
}

export default Form
