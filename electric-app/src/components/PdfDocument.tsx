import { Document, Page, Text, pdf, View } from '@react-pdf/renderer'
import { FormValues } from '../models'
import { styles } from '../formstyles'
function PdfDocument({ data, checkboxStates }: FormValues) {
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
        <Text>Name of Electricial Helper: {data.aeName}</Text>
        <Text>Electricial Helper Registration Number: {data.aeRegNum}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text>Type of Work:</Text>
          {checkboxStates.slice(0, 3).map((isChecked, index) => (
    <View
      key={`checkbox-${index}`}
      style={{
        ...styles.checkbox,
        backgroundColor: isChecked ? 'black' : 'white',
      }}
    />
  ))}
        </View>
      </Page>
    </Document>
  )
}

export default PdfDocument
