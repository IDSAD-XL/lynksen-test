'use client'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IAppState {
  menuOpen: boolean
  activeId: string | null
  state: 'idle' | 'loading'
}

const initialState: IAppState = {
  menuOpen: false,
  activeId: null,
  state: 'idle',
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    openMenu(state) {
      state.menuOpen = true
    },
    closeMenu(state) {
      state.menuOpen = false
    },
    setActiveItem(state, action: PayloadAction<string>) {
      state.activeId = action.payload
    },
    changeState(state, action: PayloadAction<IAppState['state']>) {
      state.state = action.payload
    },
    resetState(state) {
      state.state = 'idle'
      state.activeId = null
      state.menuOpen = false
    },
  },
})

export default appSlice.reducer
