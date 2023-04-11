import { UserService } from '../../services/UserInfo/UserInfo'
import { createAsyncThunk } from '@reduxjs/toolkit'
export type UserLogin = {
  login: string
  password: string
}

export const fetchUserInfo = createAsyncThunk(
  'infoUser',
  async (token: string, thunkAPI) => {
    try {
      const response = await UserService.infoUser(token)
      console.log(response)
      return response
    } catch (e) {
      return thunkAPI.rejectWithValue('не удалось полуичть данные  ')
    }
  }
)
