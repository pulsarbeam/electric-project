import { Document, Page, Text, pdf } from '@react-pdf/renderer'
import { Props } from '../models'

function PdfDocument({ data }: Props) {
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
        <Text></Text>
      </Page>
    </Document>
  )
}

export default PdfDocument
