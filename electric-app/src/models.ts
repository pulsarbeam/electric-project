export interface Props {
  data: {
    ref: string
    location: string
    contact: string
    worker: string
    regNum: number
    phoneNum: number
    email: string
  }
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
