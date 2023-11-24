import { AppDispatch } from '@redux/store/store'
import { appSlice } from '@redux/reducers/appSlice'

const setActiveItem = (dispatch: AppDispatch, payload: string) => {
  dispatch(appSlice.actions.setActiveItem(payload))
}

export { setActiveItem }
