import { StyleSheet } from '@react-pdf/renderer'
import { Font } from '@react-pdf/renderer'

Font.register({
  family: 'Poppins-Regular',
  src: './public/fonts/Poppins-Regular.ttf',
})
Font.register({
  family: 'Poppins-Bold',
  src: './public/fonts/Poppins-Bold.ttf',
})

export const styles = StyleSheet.create({
  document: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
  },
  page: { fontSize: 15 },
  number: { fontWeight: 'bold' },
  ref: {
    fontWeight: 'extrabold',
    marginRight: 100,
    margin: 15,
    border: '1px solid black',
    padding: 5,
  },
  section: { color: 'white', textAlign: 'center', margin: 30 },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  checkbox: {
    width: 10,
    height: 10,
    marginRight: 5,
    borderRadius: 1,
    borderWidth: 1,
  },
})
