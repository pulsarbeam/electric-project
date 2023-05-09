
export interface Props {
  data: {
    ref: string
    location: string
    contact: string
  }
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
