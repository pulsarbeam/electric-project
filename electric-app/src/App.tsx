import { useState } from 'react'
import Form from './components/Form'
import PdfDocument from './components/PdfDocument'

function App() {
  return (
    <>
      <h1 className="flex justify-center text-3xl font-bold underline p-10">
        COC FORM
      </h1>

      <Form />
    </>
  )
}

export default App
