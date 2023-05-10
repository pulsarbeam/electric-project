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
          <Text>Type of Work: </Text>
          {checkboxStates.slice(0, 3).map((isChecked, index) => (
            <View
              key={`checkbox-${index}`}
              style={{
                ...styles.checkbox,
                backgroundColor: isChecked ? 'black' : 'white',
              }}
            />
          ))}
          <Text>The Prescribed Electrical Work is: </Text>
          {checkboxStates.slice(3, 6).map((isChecked, index) => (
            <View
              key={`checkbox-${index}`}
              style={{
                ...styles.checkbox,
                backgroundColor: isChecked ? 'black' : 'white',
              }}
            />
          ))}
        </View>
        <Text>{data.hrWork}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text>Means Of Compliance: </Text>
          {checkboxStates.slice(6, 8).map((isChecked, index) => (
            <View
              key={`checkbox-${index}`}
              style={{
                ...styles.checkbox,
                backgroundColor: isChecked ? 'black' : 'white',
              }}
            />
          ))}
        </View>
        <Text>
          Additional Standards or electrical code of practice were required:
        </Text>
        {checkboxStates.slice(8, 10).map((isChecked, index) => (
          <View
            key={`checkbox-${index}`}
            style={{
              ...styles.checkbox,
              backgroundColor: isChecked ? 'black' : 'white',
            }}
          />
        ))}
        <Text>Standards Used: {data.standards}</Text>
        <Text>
          Date or range of dates that prescribed electrical work undertaken:
          {data.dateRange}
        </Text>
        {checkboxStates.slice(10, 12).map((isChecked, index) => (
          <View
            key={`checkbox-${index}`}
            style={{
              ...styles.checkbox,
              backgroundColor: isChecked ? 'black' : 'white',
            }}
          />
        ))}

        <Text>Specify type of supply system: {data.supplySystem}</Text>
      </Page>
    </Document>
  )
}

export default PdfDocument
