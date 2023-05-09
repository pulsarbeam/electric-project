import { Document, Page, Text, pdf } from '@react-pdf/renderer'
import { Props } from '../models'

function PdfDocument({ data }: Props) {
  return (
    <Document>
      <Page>
        <Text>Referance/Certificate ID No: {data.ref}</Text>
        <Text>Location Details: {data.location}</Text>
        <Text>Contact Details: {data.contact}</Text>
      </Page>
    </Document>
  )
}

export default PdfDocument
