import { RootState } from './store'

export const selectCurrentUserData = (state: RootState) =>
  state.currentUserSliceReducer
