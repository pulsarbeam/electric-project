import { StyleSheet } from '@react-pdf/renderer'
import { Font } from '@react-pdf/renderer'

Font.register({
  family: 'Poppins-Regular',
  src: './fonts/Poppins-Regular.ttf',
})
Font.register({
  family: 'Poppins-Bold',
  src: './fonts/Poppins-Bold.ttf',
})

export const styles = StyleSheet.create({
  document: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    size: 'A4',
  },
  bold: {
    fontFamily: 'Poppins-Bold',
  },
  page: { margin: 5 },
  center: {
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  ref: {
    marginRight: 200,
    textAlign: 'center',

    padding: 3,
  },
  customer: {
    marginRight: 400,
    textAlign: 'center',
  },
  location: {
    marginRight: 400,
    textAlign: 'center',
    paddingTop: 7,
  },

  electrical: {
    paddingTop: 10,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',

    marginRight: 110,
  },
  section: { color: 'white', textAlign: 'center', margin: 30 },

  checkbox: {
    width: 10,
    height: 10,
    marginRight: 5,
    borderRadius: 1,
    borderWidth: 1,
  },
})
