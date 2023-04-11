import { UserService } from '../../services/UserInfo/UserInfo'
import { createAsyncThunk } from '@reduxjs/toolkit'
export type UserRegistartion = {
  email: string
  firstName: string
  lastName: string
  password: string
}
export const registrationUser = createAsyncThunk(
  'registration',
  async (payload: UserRegistartion, thunkAPI) => {
    try {
      const response = await UserService.registration(
        payload.email,
        payload.firstName,
        payload.lastName,
        payload.password
      )

      return response
    } catch (e) {
      return thunkAPI.rejectWithValue('не удалось зарегаться  ')
    }
  }
)
