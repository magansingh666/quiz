import { configureStore } from '@reduxjs/toolkit'
import reducer from './QuizSlice'

export default configureStore({
  reducer: {
    quiz: reducer,
  },
})