import { Document, Page, Text, View, Image } from '@react-pdf/renderer'
import { FormValues } from '../models'
import { styles } from '../formstyles'
import { labels } from '../labels'

function PdfDocument({
  data,
  checkboxStates,
  signatureData2,
  signatureData1,
}: FormValues) {
  return (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.ref}>
          Referance/Certificate ID No:{' '}
          <Text style={styles.document}>{data.ref}</Text>{' '}
        </Text>

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
            <>
              <View
                key={`checkbox-${index}`}
                style={{
                  ...styles.checkbox,
                  backgroundColor: isChecked ? 'black' : 'white',
                }}
              />
              <Text>{labels[index]}</Text>
            </>
          ))}

          <Text>The Prescribed Electrical Work is: </Text>
          {checkboxStates.slice(3, 6).map((isChecked, index) => (
            <>
              <View
                key={`checkbox-${index}`}
                style={{
                  ...styles.checkbox,
                  backgroundColor: isChecked ? 'black' : 'white',
                }}
              />
              <Text>{labels[index + 3]}</Text>
            </>
          ))}
        </View>
        <Text>{data.hrWork}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text>Means Of Compliance: </Text>
          {checkboxStates.slice(6, 8).map((isChecked, index) => (
            <>
              <View
                key={`checkbox-${index}`}
                style={{
                  ...styles.checkbox,
                  backgroundColor: isChecked ? 'black' : 'white',
                }}
              />
              <Text>{labels[index + 6]}</Text>
            </>
          ))}
        </View>
        <Text>
          Additional Standards or electrical code of practice were required:
        </Text>
        {checkboxStates.slice(8, 10).map((isChecked, index) => (
          <>
            <View
              key={`checkbox-${index}`}
              style={{
                ...styles.checkbox,
                backgroundColor: isChecked ? 'black' : 'white',
              }}
            />
            <Text>{labels[index + 8]}</Text>
          </>
        ))}
        <Text>Standards Used: {data.standards}</Text>
        <Text>
          Date or range of dates that prescribed electrical work undertaken:
          {data.dateRange}
        </Text>
        {checkboxStates.slice(10, 12).map((isChecked, index) => (
          <>
            <View
              key={`checkbox-${index}`}
              style={{
                ...styles.checkbox,
                backgroundColor: isChecked ? 'black' : 'white',
              }}
            />
            <Text>{labels[index + 10]}</Text>
          </>
        ))}

        <Text>Specify type of supply system: {data.supplySystem}</Text>
        <Text>
          The installation has an earthing system that is correctly rated (where
          applicable)
        </Text>

        {checkboxStates.slice(12, 14).map((isChecked, index) => (
          <>
            <View
              key={`checkbox-${index}`}
              style={{
                ...styles.checkbox,
                backgroundColor: isChecked ? 'black' : 'white',
              }}
            />
            <Text>{labels[index + 12]}</Text>
          </>
        ))}
        <Text>
          What parts of the installation are safe to connect to power?
        </Text>
        {checkboxStates.slice(14, 16).map((isChecked, index) => (
          <>
            <View
              key={`checkbox-${index}`}
              style={{
                ...styles.checkbox,
                backgroundColor: isChecked ? 'black' : 'white',
              }}
            />
            <Text>{labels[index + 14]}</Text>
          </>
        ))}
        <Text>{data.parts}</Text>

        <Text>The work relies on manufacturers instructions:</Text>
        {checkboxStates.slice(16, 18).map((isChecked, index) => (
          <>
            <View
              key={`checkbox-${index}`}
              style={{
                ...styles.checkbox,
                backgroundColor: isChecked ? 'black' : 'white',
              }}
            />
            <Text>{labels[index + 16]}</Text>
          </>
        ))}
        <Text>Identify: {data.identify1}</Text>
        <Text>Link: {data.link1}</Text>
        <Text>
          The work has been done in accordance with a certified design:
        </Text>
        {checkboxStates.slice(18, 20).map((isChecked, index) => (
          <>
            <View
              key={`checkbox-${index}`}
              style={{
                ...styles.checkbox,
                backgroundColor: isChecked ? 'black' : 'white',
              }}
            />
            <Text>{labels[index + 18]}</Text>
          </>
        ))}
        <Text>Identify: {data.identify2}</Text>
        <Text>Link: {data.link2}</Text>
        <Text>
          The work relies on a Supplier Declaration of Conformity (SDoC):
        </Text>
        {checkboxStates.slice(20, 22).map((isChecked, index) => (
          <>
            <View
              key={`checkbox-${index}`}
              style={{
                ...styles.checkbox,
                backgroundColor: isChecked ? 'black' : 'white',
              }}
            />
            <Text>{labels[index + 20]}</Text>
          </>
        ))}
        <Text>Identify: {data.identify3}</Text>
        <Text>Link: {data.link3}</Text>

        <Text>
          The installation has been satisfactorily tested in accordance with the
          Electricity (Safety) Regulations 2018:
          {checkboxStates.slice(22, 24).map((isChecked, index) => (
            <>
              <View key={`checkbox-${index}`} style={styles.checkboxContainer}>
                <View
                  style={{
                    ...styles.checkbox,
                    backgroundColor: isChecked ? 'black' : 'white',
                  }}
                />
                <Text>{labels[index + 22]}</Text>
              </View>
            </>
          ))}
        </Text>
        <Text>Description of Work: {data.description}</Text>
        <Text>Test Results</Text>
        <Text>Polarity (Independant Earth): {data.polarity}</Text>
        <Text>Insulation Resistance: {data.resistance}</Text>
        <Text>Earth Continuity: {data.continuity}</Text>
        <Text>Bonding: {data.bonding}</Text>
        <Text>Fault Loop Impedance: {data.fault}</Text>
        <Text>Other(Specify): {data.other}</Text>
        <Text>
          By signing this document I certify that the completed prescribed
          electrical work to which this Certificate of Compliance applies has
          been done lawfully and safely, and the information in the certificate
          is correct.
        </Text>
        <Text>
          Certifier's Signiture:{' '}
          {signatureData1 && (
            <Image style={{ width: 200, height: 200 }} src={signatureData1} />
          )}
        </Text>

        <Text>Certifier's Name: {data.certiName}</Text>
        <Text>Registration/Practising licence number: {data.reg2}</Text>
        <Text>
          Certifiers Signiture:
          {signatureData2 && (
            <Image style={{ width: 200, height: 200 }} src={signatureData2} />
          )}
        </Text>
        <Text>Certifiers issue Date: {data.certIssue}</Text>
        <Text>Connection Date: {data.connectDate}</Text>
      </Page>
    </Document>
  )
}

export default PdfDocument
