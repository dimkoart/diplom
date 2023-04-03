import { AppDispatch } from '../store'
import { currentUserSlice } from '../slice/currentUserSlice'
import { UserService } from '../../services/UserInfo/UserInfo'
export type UserLogin = {
  login: string
  password: string
}
export const fetchCurrentUser =
  (payload: UserLogin) => async (dispatch: AppDispatch) => {
    const res = await UserService.login(payload.login, payload.password)
    try {
      dispatch(currentUserSlice.actions.fetchCurrentUser)
      if (res.status === 201) {
        dispatch(currentUserSlice.actions.fetchCurrentUserSuccess(res))
      } else {
        dispatch(currentUserSlice.actions.fetchCurrentUserError(res))
      }
    } catch (error) {
      console.log(error)
    }
  }
