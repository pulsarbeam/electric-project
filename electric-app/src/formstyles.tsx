import { StyleSheet } from '@react-pdf/renderer'

export const styles = StyleSheet.create({
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
  checkbox: {
    width: 10,
    height: 10,
    marginRight: 5,
    borderRadius: 1,
    borderWidth: 1,
  },
})
