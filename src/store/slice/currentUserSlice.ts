import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { UserToken } from '../../types/User/User'
import { AxiosResponse } from 'axios'
import { fetchCurrentUser } from '../thunk/fetchCurrentUser'

type Response = { status: number; message: string }
type CurrentUser = { user: UserToken; isLoading: boolean; response: Response }
const initialState: CurrentUser = {
  user: { token: '' },
  isLoading: false,
  response: { status: 0, message: '' },
}

export const currentUserSlice = createSlice({
  name: 'current_user',
  initialState,
  reducers: {
    logoutCurrentUser(state) {
      state.user = { token: '' }
      state.response = {
        status: 0,
        message: '',
      }
    },
  },
  extraReducers: {
    [fetchCurrentUser.pending.type]: (state) => {
      console.log('asdasd')
      state.isLoading = true
    },
    [fetchCurrentUser.fulfilled.type]: (
      state,
      action: PayloadAction<AxiosResponse<UserToken>>
    ) => {
      console.log(action.payload.data.token)
      localStorage.setItem('token', action.payload.data.token)
      state.user.token = action.payload.data.token
      state.isLoading = false
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      }
    },
    [fetchCurrentUser.rejected.type]: (
      state,
      action: PayloadAction<AxiosResponse<UserToken>>
    ) => {
      state.isLoading = true
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      }
    },
  },
})
export default currentUserSlice.reducer
