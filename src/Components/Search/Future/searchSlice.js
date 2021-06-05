import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    value: JSON.parse(localStorage.getItem('weather')),
  },
  reducers: {
    inputDataSearch: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { inputDataSearch } = searchSlice.actions

export default searchSlice.reducer