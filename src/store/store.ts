import { combineReducers, configureStore } from '@reduxjs/toolkit'
import currentUserSliceReducer from './slice/currentUserSlice'
const rootReducer = combineReducers({
  currentUserSliceReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = typeof store
export type AppDispatch = AppStore['dispatch']
