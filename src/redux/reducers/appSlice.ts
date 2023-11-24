'use client'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IAppState {
  menuOpen: boolean
  activeId: string | null
}

const initialState: IAppState = {
  menuOpen: false,
  activeId: null,
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
  },
})

export default appSlice.reducer
