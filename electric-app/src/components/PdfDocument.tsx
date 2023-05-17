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
    <Document style={styles.document}>
      <Page style={styles.page}>
        <Text style={styles.center}>
          Electrical Certificate of Compliance & Electrical Safety Certificate
        </Text>

        <Text style={styles.ref}>
          Reference/Certificate ID No:{' '}
          <Text style={styles.bold}>{data.ref}</Text>{' '}
        </Text>

        <Text style={styles.location}>
          Location Details: <Text style={styles.value}>{data.location}</Text>
        </Text>
        <Text style={styles.customer}>
          Contact Details: <Text style={styles.value}>{data.contact}</Text>
        </Text>

        <Text style={styles.customer}>
          Name of Electrical Worker:{' '}
          <Text style={styles.value}>{data.worker} </Text>
        </Text>
        <Text style={styles.customer}>
          Practising licence number:{' '}
          <Text style={styles.value}>{data.regNum}</Text>
        </Text>

        <Text style={styles.customer}>
          Electricians Phone Number & Email:{' '}
          <Text style={styles.value}>{data.phoneNum} </Text>
          <Text style={styles.value}> {data.email}</Text>
        </Text>

        <Text style={styles.customer}>
          Supervised Person Name & Registraion:{' '}
          <Text style={styles.value}>{data.aeName} </Text>
          <Text style={styles.value}> {data.aeRegNum}</Text>
        </Text>

        <Text style={[styles.bold, { marginTop: 15 }]}>
          Certificate Of Compliance
        </Text>

        <View style={styles.electrical}>
          <Text>Type of Work: </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              width: 400,
            }}
          >
            {checkboxStates.slice(0, 3).map((isChecked, index) => (
              <View
                key={`checkbox-${index}`}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: 10,
                }}
              >
                <View
                  style={{
                    ...styles.checkbox,
                    backgroundColor: isChecked ? 'black' : 'white',
                  }}
                />
                <Text>{labels[index]}</Text>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.electrical}>
          <Text>The Prescribed Electrical Work is: </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}
          >
            {checkboxStates.slice(3, 6).map((isChecked, index) => (
              <>
                <View
                  key={`checkbox-${index}`}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginRight: 10,
                  }}
                >
                  <View
                    key={`checkbox-${index}`}
                    style={{
                      ...styles.checkbox,

                      backgroundColor: isChecked ? 'black' : 'white',
                    }}
                  />
                  <Text>{labels[index + 3]}</Text>
                </View>
              </>
            ))}
          </View>
        </View>
        <Text>Specify: {data.hrWork}</Text>
        <View style={styles.electrical}>
          <Text>Means Of Compliance: </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}
          >
            {checkboxStates.slice(6, 8).map((isChecked, index) => (
              <>
                <View
                  key={`checkbox-${index}`}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginRight: 10,
                  }}
                >
                  <View
                    key={`checkbox-${index}`}
                    style={{
                      ...styles.checkbox,
                      backgroundColor: isChecked ? 'black' : 'white',
                    }}
                  />
                  <Text>{labels[index + 6]}</Text>
                </View>
              </>
            ))}
          </View>
        </View>
        <View style={styles.electrical}>
          <Text>
            Additional Standards or electrical code of practice were required:
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}
          >
            {checkboxStates.slice(8, 10).map((isChecked, index) => (
              <>
                <View
                  key={`checkbox-${index}`}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginRight: 10,
                  }}
                >
                  <View
                    key={`checkbox-${index}`}
                    style={{
                      ...styles.checkbox,
                      backgroundColor: isChecked ? 'black' : 'white',
                    }}
                  />
                  <Text>{labels[index + 8]}</Text>
                </View>
              </>
            ))}
          </View>
        </View>

        <Text>Standards Used (if required): {data.standards}</Text>

        <Text>
          Date or range of dates that prescribed electrical work undertaken:{' '}
          {data.dateRange}
        </Text>

        <View style={styles.electrical}>
          <Text>
            Contains fittings that are safe to connect to a power supply?
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}
          >
            {checkboxStates.slice(10, 12).map((isChecked, index) => (
              <>
                <View
                  key={`checkbox-${index}`}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginRight: 10,
                  }}
                >
                  <View
                    key={`checkbox-${index}`}
                    style={{
                      ...styles.checkbox,
                      backgroundColor: isChecked ? 'black' : 'white',
                    }}
                  />
                  <Text>{labels[index + 10]}</Text>
                </View>
              </>
            ))}
          </View>
        </View>

        <Text>Specify type of supply system: {data.supplySystem}</Text>

        <View style={styles.electrical}>
          <Text style={{ fontSize: 11 }}>
            The installation has an earthing system that is correctly rated
            (where applicable)
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}
          >
            {checkboxStates.slice(12, 14).map((isChecked, index) => (
              <>
                <View
                  key={`checkbox-${index}`}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginRight: 10,
                  }}
                >
                  <View
                    key={`checkbox-${index}`}
                    style={{
                      ...styles.checkbox,
                      backgroundColor: isChecked ? 'black' : 'white',
                    }}
                  />
                  <Text>{labels[index + 12]}</Text>
                </View>
              </>
            ))}
          </View>
        </View>
        <View style={styles.electrical}>
          <Text style={{ fontSize: 11 }}>
            Parts of the installation to which this certificate relates that are
            safe to connect to a power supply?
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}
          >
            {checkboxStates.slice(14, 16).map((isChecked, index) => (
              <>
                <View
                  key={`checkbox-${index}`}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginRight: 10,
                  }}
                >
                  <View
                    key={`checkbox-${index}`}
                    style={{
                      ...styles.checkbox,
                      backgroundColor: isChecked ? 'black' : 'white',
                    }}
                  />
                  <Text>{labels[index + 14]}</Text>
                </View>
              </>
            ))}
            <Text>Parts: {data.parts}</Text>
          </View>
        </View>

        <View style={styles.electrical}>
          <Text>The work relies on manufacturers instructions:</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}
          >
            {checkboxStates.slice(16, 18).map((isChecked, index) => (
              <>
                <View
                  key={`checkbox-${index}`}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginRight: 10,
                  }}
                >
                  <View
                    key={`checkbox-${index}`}
                    style={{
                      ...styles.checkbox,
                      backgroundColor: isChecked ? 'black' : 'white',
                    }}
                  />
                  <Text>{labels[index + 16]}</Text>
                </View>
              </>
            ))}
          </View>
        </View>

        <Text>Identify: {data.identify1}</Text>
        <Text>Link: {data.link1}</Text>
        <View style={styles.electrical}>
          <Text>
            The work has been done in accordance with a certified design:
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}
          >
            {checkboxStates.slice(18, 20).map((isChecked, index) => (
              <>
                <View
                  key={`checkbox-${index}`}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginRight: 10,
                  }}
                >
                  <View
                    key={`checkbox-${index}`}
                    style={{
                      ...styles.checkbox,
                      backgroundColor: isChecked ? 'black' : 'white',
                    }}
                  />
                  <Text>{labels[index + 18]}</Text>
                </View>
              </>
            ))}
          </View>
        </View>
        <Text>Identify: {data.identify2}</Text>
        <Text>Link: {data.link2}</Text>
        <View style={styles.electrical}>
          <Text>
            The work relies on a Supplier Declaration of Conformity (SDoC):
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}
          >
            {checkboxStates.slice(20, 22).map((isChecked, index) => (
              <>
                <View
                  key={`checkbox-${index}`}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginRight: 10,
                  }}
                >
                  <View
                    key={`checkbox-${index}`}
                    style={{
                      ...styles.checkbox,
                      backgroundColor: isChecked ? 'black' : 'white',
                    }}
                  />
                  <Text>{labels[index + 20]}</Text>
                </View>
              </>
            ))}
          </View>
        </View>
        <Text>Identify: {data.identify3}</Text>
        <Text>Link: {data.link3}</Text>

        <View style={styles.electrical}>
          <Text style={{ fontSize: 11 }}>
            The installation has been satisfactorily tested in accordance with
            the Electricity (Safety) Regulations 2018
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}
          >
            {checkboxStates.slice(22, 24).map((isChecked, index) => (
              <>
                <View
                  key={`checkbox-${index}`}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginRight: 10,
                  }}
                >
                  <View
                    key={`checkbox-${index}`}
                    style={{
                      ...styles.checkbox,
                      backgroundColor: isChecked ? 'black' : 'white',
                    }}
                  />
                  <Text>{labels[index + 22]}</Text>
                </View>
              </>
            ))}
          </View>
        </View>
      </Page>

      <Page style={styles.page}>
        <Text style={styles.bold}>Description of Work:</Text>
        <View
          style={{
            border: 1,
            borderColor: 'gray',
            borderRadius: 4,
            minHeight: 100,
            width: 555,
            padding: 10,
          }}
        >
          <Text>{data.description}</Text>
        </View>

        <Text style={[styles.bold, { marginTop: 5 }]}>Test Results: </Text>
        <View
          style={{
            border: 1,
            borderColor: 'gray',
            borderRadius: 4,
            minHeight: 100,
            width: 555,
            padding: 10,
          }}
        >
          <Text style={styles.electrical}>
            Polarity (Independant Earth):{' '}
            <Text style={styles.med}>{data.polarity}</Text>
          </Text>
          <Text style={styles.electrical}>
            Insulation Resistance:{' '}
            <Text style={styles.med}>{data.resistance} Ohms</Text>
          </Text>
          <Text style={styles.electrical}>
            Earth Continuity:{' '}
            <Text style={styles.med}> {data.continuity} Ohms </Text>
          </Text>
          <Text style={styles.electrical}>
            Bonding: <Text style={styles.med}>{data.bonding} Ohms</Text>
          </Text>
          <Text style={styles.electrical}>
            Fault Loop Impedance:{' '}
            <Text style={styles.med}>{data.fault} Ohms</Text>
          </Text>
          <Text style={styles.electrical}>
            Other (Specify): <Text style={styles.med}> {data.other}</Text>
          </Text>
        </View>

        <View
          style={{
            marginTop: 10,
            border: 1,
            borderColor: 'gray',
            borderRadius: 4,
            minHeight: 100,
            width: 555,
            padding: 10,
          }}
        >
          <Text style={styles.med}>
            By signing this document I certify that the completed prescribed
            electrical work to which this Certificate of Compliance applies has
            been done lawfully and safely, and the information in the
            certificate is correct.
          </Text>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ marginTop: 5 }}>Certifier's Signature:</Text>
              {signatureData1 && (
                <Image
                  style={{ width: 100, height: 15 }}
                  src={signatureData1}
                />
              )}
              <Text style={{ flex: 5, textAlign: 'right' }}>
                Date: <Text style={styles.med}>{data.date}</Text>
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 40,
            left: 0,
            right: 0,
          }}
        >
          <Text style={styles.bold}>Electrical Safety Certificate</Text>
          <View
            style={{
              border: 1,
              borderColor: 'gray',
              borderRadius: 4,
              minHeight: 100,
              width: 555,
              padding: 10,
            }}
          >
            <Text style={styles.med}>
              By signing this document I certify that the installation, or part
              of the installation, to which this Electrical Safety Certificate
              applies is connected to a power supply and is safe to use.
            </Text>
            <Text style={{ marginTop: 10 }}>
              Certifier's Name: <Text style={styles.med}>{data.certiName}</Text>
            </Text>
            <Text style={{ marginTop: 10 }}>
              Practising licence number:{' '}
              <Text style={styles.med}>{data.reg2}</Text>
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ marginTop: 10 }}>Certifier's Signature:</Text>
              {signatureData2 && (
                <Image
                  style={{ width: 100, height: 15 }}
                  src={signatureData2}
                />
              )}
              <Text style={{ flex: 15, marginTop: 10 }}>
                Date: <Text style={styles.med}>{data.certIssue}</Text>
              </Text>
            </View>

            <Text style={{ marginTop: 10 }}>
              Connection Date:{' '}
              <Text style={styles.med}>{data.connectDate}</Text>
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  )
}

export default PdfDocument
