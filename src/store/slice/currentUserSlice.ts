import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { UserToken } from '../../types/User/User'
import { AxiosResponse } from 'axios'

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
    fetchCurrentUser(state) {
      state.isLoading = true
    },
    fetchCurrentUserSuccess(
      state,
      action: PayloadAction<AxiosResponse<UserToken>>
    ) {
      state.user.token = action.payload.data.token
      state.isLoading = false
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      }
    },
    fetchCurrentUserError(
      state,
      action: PayloadAction<AxiosResponse<UserToken>>
    ) {
      state.isLoading = false
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      }
    },
  },
})
export default currentUserSlice.reducer
