import { combineReducers, configureStore } from '@reduxjs/toolkit'
import appSlice from '@redux/reducers/appSlice'
import { catsApi } from '@redux/reducers/catsSlice'

const rootReducer = combineReducers({
  [catsApi.reducerPath]: catsApi.reducer,
  appSlice,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(catsApi.middleware),
  })
}

export const store = setupStore()

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
