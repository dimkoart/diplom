import axios from 'axios'

export class UserService {
  static async login(email: string, password: string) {
    const response = await axios.post('http://localhost:3001/users/login', {
      email,
      password,
    })
    console.log(response.data.token)
    return response
  }
}
