import { createSlice } from '@reduxjs/toolkit'

export const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    name: ""
  },
  reducers: {
    addUsername: (state, name) => { 
      console.log("add user name called");        
      state.name = name;
    },   
  },
})

// Action creators are generated for each case reducer function
export const { addUsername } = quizSlice.actions

export default quizSlice.reducer