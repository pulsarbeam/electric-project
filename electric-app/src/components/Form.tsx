import { useState } from 'react'
import { pdf } from '@react-pdf/renderer'
import { styles } from '../formstyles'
import PdfDocument from './PdfDocument'
import FormInputs from './FormInputs'

function Form() {
  const [formData, setFormData] = useState({
    ref: '',
    location: '',
    contact: '',
    worker: '',
    regNum: 0,
    phoneNum: 0,
    email: '',
  })

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault()

    const pdfDoc = <PdfDocument data={formData} />
    const blob = await pdf(pdfDoc).toBlob()

    const url = URL.createObjectURL(blob)
    window.open(url, '_blank')
  }

  return (
    <div className="flex flex-col justify-center rounded-div">
      <form>
        <FormInputs data={formData} handleChange={handleChange} />
      </form>
      <div className="flex justify-center">
        <button
          className="px-6 py-2 my-8 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default Form
