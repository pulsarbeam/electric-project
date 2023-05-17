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
Font.register({
  family: 'Poppins-Med',
  src: './fonts/Poppins-Medium.ttf',
})

export const styles = StyleSheet.create({
  document: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    size: 'A4',
    padding: 5,
  },
  bold: {
    fontFamily: 'Poppins-Bold',
  },
  page: { margin: 20 },
  center: {
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  ref: {
    marginRight: 200,
    textAlign: 'center',
    padding: 3,
  },
  location: {
    paddingTop: 7,
    fontFamily: 'Poppins-Med',
  },
  customer: {
    paddingTop: 5,
    fontFamily: 'Poppins-Med',
  },
  electrical: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginRight: 50,
  },
  electricalhelp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginRight: 50,
  },
  section: { color: 'white', textAlign: 'center', margin: 30 },
  checkbox: {
    width: 10,
    height: 10,
    marginRight: 5,
    borderRadius: 1,
    borderWidth: 1,
  },
  label: {
    fontFamily: 'Poppins-Med',
  },
  value: {
    fontFamily: 'Poppins-Regular',
  },
  colon: {
    width: 10,
  },
  word: {
    width: 200,
  },
  med: {
    fontFamily: 'Poppins-Med',
  },
})
