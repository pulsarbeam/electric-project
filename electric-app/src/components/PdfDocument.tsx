import { Document, Page, Text, pdf, View } from '@react-pdf/renderer'
import { FormValues } from '../models'

function PdfDocument({ data, isChecked }: FormValues) {
  return (
    <Document>
      <Page>
        <Text>Referance/Certificate ID No: {data.ref}</Text>
        <Text>Location Details: {data.location}</Text>
        <Text>Contact Details: {data.contact}</Text>
        <Text>Name of Electrical Worker: {data.worker}</Text>
        <Text>Registration/Practising licence number: {data.regNum}</Text>
        <Text>Electricians Phone Number: {data.phoneNum}</Text>
        <Text>Electricians Email Address: {data.email}</Text>
        <View
          style={{
            width: 10,
            height: 10,
            marginRight: 5,
            borderRadius: 1,
            borderWidth: 1,
            backgroundColor: isChecked ? 'black' : 'white',
          }}
        />
      </Page>
    </Document>
  )
}

export default PdfDocument
