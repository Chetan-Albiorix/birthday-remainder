export default class Person {
  id: string
  firstName: string
  lastName: string
  gender: string
  mobileNumber: string
  email: string
  message: string
  birthDate: Date | null
  isDeleted: boolean
  image: string

  constructor() {
    this.id = ''
    this.firstName = ''
    this.lastName = ''
    this.gender = ''
    this.mobileNumber = ''
    this.email = ''
    this.message = ''
    this.birthDate = null
    this.isDeleted = false
    this.image = ''
  }
}
