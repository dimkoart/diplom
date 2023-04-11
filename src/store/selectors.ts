import { RootState } from './store'

export const selectCurrentUserData = (state: RootState) =>
  state.currentUserSliceReducer

export const registartionUserData = (state: RootState) =>
  state.registratinUserSliceReducer
export const infoUser = (state: RootState) => state.userInfoSliceReducer
