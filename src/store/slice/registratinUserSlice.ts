import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { UserToken } from '../../types/User/User'
import { AxiosResponse } from 'axios'
import { registrationUser } from '../thunk/registrationUser'

type Response = { status: number; message: string }
type CurrentUser = { user: UserToken; isLoading: boolean; response: Response }
const initialState: CurrentUser = {
  user: { token: '' },
  isLoading: false,
  response: { status: 0, message: '' },
}

export const registrationUserSlice = createSlice({
  name: 'regUser',
  initialState,
  reducers: {},
  extraReducers: {
    [registrationUser.pending.type]: (state) => {
      console.log('asdasd')
      state.isLoading = true
    },
    [registrationUser.fulfilled.type]: (
      state,
      action: PayloadAction<AxiosResponse<UserToken>>
    ) => {
      state.isLoading = false
      localStorage.setItem('token', action.payload.data.token)
      state.user.token = action.payload.data.token

      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      }
    },
    [registrationUser.rejected.type]: (
      state,
      action: PayloadAction<AxiosResponse<UserToken>>
    ) => {
      state.isLoading = false
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      }
    },
  },
})
export default registrationUserSlice.reducer
