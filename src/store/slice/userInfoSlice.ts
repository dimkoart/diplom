import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { UserInfo } from '../../types/User/User'
import { AxiosResponse } from 'axios'

import { fetchUserInfo } from '../thunk/fetchUserInfo'

type Response = { status: number; message: string }
type CurrentUser = {
  userInfo: UserInfo
  isLoading: boolean
  response: Response
}
const initialState: CurrentUser = {
  userInfo: {
    curuser: {
      email: '',
      firstName: '',
      lastName: '',
      photo: '',
    },
  },
  isLoading: false,
  response: { status: 0, message: '' },
}

export const userInfoSlice = createSlice({
  name: 'info_user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUserInfo.pending.type]: (state) => {
      console.log('asdasd')
      state.isLoading = false
    },
    [fetchUserInfo.fulfilled.type]: (
      state,
      action: PayloadAction<AxiosResponse<UserInfo>>
    ) => {
      state.userInfo.curuser.email = action.payload.data.curuser.email
      state.userInfo.curuser.firstName = action.payload.data.curuser.firstName
      state.userInfo.curuser.lastName = action.payload.data.curuser.lastName
      state.userInfo.curuser.photo = action.payload.data.curuser.photo
      state.isLoading = true
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      }
    },
    [fetchUserInfo.rejected.type]: (
      state,
      action: PayloadAction<AxiosResponse<UserInfo>>
    ) => {
      state.isLoading = true
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      }
    },
  },
})
export default userInfoSlice.reducer
