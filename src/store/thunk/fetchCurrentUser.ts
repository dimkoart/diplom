import { UserService } from '../../services/UserInfo/UserInfo'
import { createAsyncThunk } from '@reduxjs/toolkit'
export type UserLogin = {
  login: string
  password: string
}

export const fetchCurrentUser = createAsyncThunk(
  'login',
  async (payload: UserLogin, thunkAPI) => {
    try {
      const response = await UserService.login(payload.login, payload.password)
      
      return response
    } catch (e) {
      return thunkAPI.rejectWithValue('не удалось залогиниться ')
    }
  }
)
