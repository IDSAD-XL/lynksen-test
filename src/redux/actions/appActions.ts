import { AppDispatch } from '@redux/store/store'
import { appSlice, IAppState } from '@redux/reducers/appSlice'

const setActiveItem = (dispatch: AppDispatch, payload: string) => {
  dispatch(appSlice.actions.setActiveItem(payload))
}

const changeAppState = (dispatch: AppDispatch, payload: IAppState['state']) => {
  dispatch(appSlice.actions.changeState(payload))
}

const resetAppState = (dispatch: AppDispatch) => {
  dispatch(appSlice.actions.resetState())
}

export { setActiveItem, changeAppState, resetAppState }
