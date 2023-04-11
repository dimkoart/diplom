import axios from 'axios'

export class UserService {
  static async login(email: string, password: string) {
    const response = await axios.post('http://localhost:3001/users/login', {
      email,
      password,
    })
    return response
  }
  static async registration(
    email: string,
    firstName: string,
    lastName: string,
    password: string
  ) {
    const response = await axios.post('http://localhost:3001/users/create', {
      email,
      firstName,
      lastName,
      password,
    })
    return response
  }

  static async infoUser(token: string) {
    const response = axios.get('http://localhost:3001/users/info', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response
  }
  static async updateAvatar(token: string) {
    const response = axios.post('http://localhost:3001/users/setavatar', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response
  }
  static async updateUser(token: string, file: any) {
    const formData = new FormData()
    formData.append('file', file)
    const response = axios.put(
      `http://localhost:3001/users/updateInfo`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    return response
  }
}
