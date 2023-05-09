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
    <div className="rounded-div">
      <form>
        <FormInputs data={formData} handleChange={handleChange} />
      </form>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default Form
